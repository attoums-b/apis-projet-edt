/**
 * Page Cours - Gestion des cours
 * Permet de visualiser et gérer les cours
 */

import React, { useState } from 'react';
import { useAppContext } from '../context/AppContext';
import { Plus, Edit, Trash2 } from 'lucide-react';
import Button from '../components/common/Button';
import '../pages/Enseignants.css'; // Réutilisation des styles

/**
 * Composant Cours
 */
const Cours = () => {
  const { cours, enseignants, supprimerCours } = useAppContext();
  const [searchTerm, setSearchTerm] = useState('');

  // Filtre les cours
  const filteredCours = cours.filter(c => 
    c.nom.toLowerCase().includes(searchTerm.toLowerCase()) ||
    c.code.toLowerCase().includes(searchTerm.toLowerCase()) ||
    c.niveau.toLowerCase().includes(searchTerm.toLowerCase())
  );

  /**
   * Récupère le nom de l'enseignant
   */
  const getEnseignantName = (enseignantId) => {
    const ens = enseignants.find(e => e.id === enseignantId);
    return ens ? `${ens.prenom} ${ens.nom}` : 'Non assigné';
  };

  /**
   * Supprime un cours
   */
  const handleSupprimer = (id) => {
    if (window.confirm('Êtes-vous sûr de vouloir supprimer ce cours ?')) {
      supprimerCours(id);
    }
  };

  return (
    <div className="enseignants-page">
      <div className="page-header">
        <div>
          <h1 className="page-title">Cours</h1>
          <p className="page-subtitle">Gérez les cours et les matières</p>
        </div>
        <Button variant="primary" icon={<Plus size={18} />}>
          Ajouter un Cours
        </Button>
      </div>

      <div className="filters-section card">
        <div className="search-box">
          <input
            type="text"
            className="form-input"
            placeholder="Rechercher un cours (nom, code, niveau...)"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      <div className="quick-stats">
        <div className="stat-item">
          <span className="stat-label">Total</span>
          <span className="stat-value">{cours.length}</span>
        </div>
        <div className="stat-item">
          <span className="stat-label">CM</span>
          <span className="stat-value">{cours.filter(c => c.type === 'CM').length}</span>
        </div>
        <div className="stat-item">
          <span className="stat-label">TD</span>
          <span className="stat-value">{cours.filter(c => c.type === 'TD').length}</span>
        </div>
        <div className="stat-item">
          <span className="stat-label">TP</span>
          <span className="stat-value">{cours.filter(c => c.type === 'TP').length}</span>
        </div>
      </div>

      <div className="table-container">
        <table className="table">
          <thead>
            <tr>
              <th>Code</th>
              <th>Nom</th>
              <th>Type</th>
              <th>Niveau</th>
              <th>Enseignant</th>
              <th>Étudiants</th>
              <th>Durée</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredCours.map(c => (
              <tr key={c.id}>
                <td><span className="badge badge-primary">{c.code}</span></td>
                <td><strong>{c.nom}</strong></td>
                <td>
                  <span className={`badge ${
                    c.type === 'CM' ? 'badge-info' : 
                    c.type === 'TD' ? 'badge-warning' : 
                    'badge-success'
                  }`}>
                    {c.type}
                  </span>
                </td>
                <td>{c.niveau}</td>
                <td>{getEnseignantName(c.enseignantId)}</td>
                <td>{c.nbEtudiants}</td>
                <td>{c.duree}h</td>
                <td>
                  <div style={{ display: 'flex', gap: '0.5rem' }}>
                    <button className="btn-icon-action edit" title="Modifier">
                      <Edit size={16} />
                    </button>
                    <button 
                      className="btn-icon-action delete" 
                      title="Supprimer"
                      onClick={() => handleSupprimer(c.id)}
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Cours;
