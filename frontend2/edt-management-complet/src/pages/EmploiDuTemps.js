/**
 * Page Emploi du Temps - Visualisation et gestion de l'emploi du temps
 * Affiche une grille hebdomadaire avec toutes les séances planifiées
 */

import React, { useState } from 'react';
import { useAppContext } from '../context/AppContext';
import { Calendar, Download, RefreshCw, Plus } from 'lucide-react';
import Button from '../components/common/Button';
import './EmploiDuTemps.css';

/**
 * Composant EmploiDuTemps
 */
const EmploiDuTemps = () => {
  const { emploiDuTemps, cours, enseignants, salles, reinitialiserEDT } = useAppContext();
  const [selectedView, setSelectedView] = useState('semaine'); // semaine ou jour

  // Jours de la semaine
  const jours = ['lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi'];
  
  // Créneaux horaires
  const creneaux = [
    '08:00-10:00',
    '10:00-12:00',
    '14:00-16:00',
    '16:00-18:00'
  ];

  /**
   * Récupère les informations d'un cours
   */
  const getCoursInfo = (coursId) => {
    return cours.find(c => c.id === coursId);
  };

  /**
   * Récupère les informations d'un enseignant
   */
  const getEnseignantInfo = (enseignantId) => {
    return enseignants.find(e => e.id === enseignantId);
  };

  /**
   * Récupère les informations d'une salle
   */
  const getSalleInfo = (salleId) => {
    return salles.find(s => s.id === salleId);
  };

  /**
   * Récupère les séances pour un jour et un créneau donnés
   */
  const getSeancesForSlot = (jour, creneau) => {
    return emploiDuTemps.filter(seance => 
      seance.jour === jour && 
      `${seance.heureDebut}-${seance.heureFin}` === creneau
    );
  };

  /**
   * Exporte l'emploi du temps en PDF (simulé)
   */
  const handleExportPDF = () => {
    alert('Fonction d\'export PDF : à implémenter avec jsPDF');
  };

  /**
   * Réinitialise l'emploi du temps
   */
  const handleReinitialiser = () => {
    if (window.confirm('Êtes-vous sûr de vouloir réinitialiser l\'emploi du temps ? Cette action est irréversible.')) {
      reinitialiserEDT();
    }
  };

  /**
   * Génère automatiquement un emploi du temps (simulé)
   */
  const handleGenererAuto = () => {
    alert('Fonction de génération automatique : à implémenter avec un algorithme d\'optimisation');
  };

  return (
    <div className="edt-page">
      {/* En-tête */}
      <div className="page-header">
        <div>
          <h1 className="page-title">
            <Calendar size={32} className="title-icon" />
            Emploi du Temps
          </h1>
          <p className="page-subtitle">
            Visualisez et gérez l'emploi du temps hebdomadaire
          </p>
        </div>
        <div className="header-actions">
          <Button variant="outline" icon={<Plus size={18} />}>
            Ajouter une Séance
          </Button>
          <Button variant="success" icon={<RefreshCw size={18} />} onClick={handleGenererAuto}>
            Générer Auto
          </Button>
          <Button variant="primary" icon={<Download size={18} />} onClick={handleExportPDF}>
            Export PDF
          </Button>
        </div>
      </div>

      {/* Statistiques */}
      <div className="edt-stats">
        <div className="stat-card-mini">
          <span className="stat-mini-value">{emploiDuTemps.length}</span>
          <span className="stat-mini-label">Séances planifiées</span>
        </div>
        <div className="stat-card-mini">
          <span className="stat-mini-value">{enseignants.length}</span>
          <span className="stat-mini-label">Enseignants actifs</span>
        </div>
        <div className="stat-card-mini">
          <span className="stat-mini-value">{salles.length}</span>
          <span className="stat-mini-label">Salles disponibles</span>
        </div>
        <Button variant="danger" size="sm" onClick={handleReinitialiser}>
          Réinitialiser
        </Button>
      </div>

      {/* Grille de l'emploi du temps */}
      <div className="edt-grid-container card">
        <table className="edt-grid">
          <thead>
            <tr>
              <th className="time-header">Horaires</th>
              {jours.map(jour => (
                <th key={jour} className="day-header">
                  {jour.charAt(0).toUpperCase() + jour.slice(1)}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {creneaux.map(creneau => (
              <tr key={creneau}>
                <td className="time-cell">{creneau}</td>
                {jours.map(jour => {
                  const seances = getSeancesForSlot(jour, creneau);
                  return (
                    <td key={`${jour}-${creneau}`} className="edt-cell">
                      {seances.length === 0 ? (
                        <div className="empty-slot">
                          <span className="empty-text">Libre</span>
                        </div>
                      ) : (
                        seances.map(seance => {
                          const coursInfo = getCoursInfo(seance.coursId);
                          const enseignantInfo = getEnseignantInfo(seance.enseignantId);
                          const salleInfo = getSalleInfo(seance.salleId);
                          
                          return (
                            <div 
                              key={seance.id} 
                              className="seance-card"
                              style={{ 
                                borderLeft: `4px solid ${coursInfo?.couleur || '#3b82f6'}`,
                                background: `${coursInfo?.couleur || '#3b82f6'}10`
                              }}
                            >
                              <div className="seance-header">
                                <span className="seance-code">{coursInfo?.code}</span>
                                <span className="seance-type badge badge-sm">
                                  {coursInfo?.type}
                                </span>
                              </div>
                              <p className="seance-nom">{coursInfo?.nom}</p>
                              <p className="seance-enseignant">
                                👤 {enseignantInfo?.prenom} {enseignantInfo?.nom}
                              </p>
                              <p className="seance-salle">
                                📍 {salleInfo?.nom}
                              </p>
                              <p className="seance-groupe">{seance.groupe}</p>
                            </div>
                          );
                        })
                      )}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Légende */}
      <div className="legend-section card">
        <h3 className="legend-title">Légende</h3>
        <div className="legend-items">
          <div className="legend-item">
            <span className="legend-color" style={{ background: '#3b82f6' }}></span>
            <span>Cours Magistral (CM)</span>
          </div>
          <div className="legend-item">
            <span className="legend-color" style={{ background: '#10b981' }}></span>
            <span>Travaux Dirigés (TD)</span>
          </div>
          <div className="legend-item">
            <span className="legend-color" style={{ background: '#f59e0b' }}></span>
            <span>Travaux Pratiques (TP)</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmploiDuTemps;
