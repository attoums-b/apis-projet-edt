/**
 * Page Enseignants - Gestion des enseignants
 * Permet de visualiser, ajouter, modifier et supprimer des enseignants
 */

import React, { useState } from 'react';
import { useAppContext } from '../context/AppContext';
import { Plus, Edit, Trash2, Mail, Phone, Book } from 'lucide-react';
import Button from '../components/common/Button';
import './Enseignants.css';

/**
 * Composant Enseignants
 */
const Enseignants = () => {
  // Récupération des données depuis le context
  const { enseignants, supprimerEnseignant } = useAppContext();
  
  // État pour le modal d'ajout/modification
  const [showModal, setShowModal] = useState(false);
  
  // État pour l'enseignant en cours d'édition
  const [editingEnseignant, setEditingEnseignant] = useState(null);
  
  // État pour le filtre de recherche
  const [searchTerm, setSearchTerm] = useState('');

  /**
   * Filtre les enseignants selon le terme de recherche
   */
  const filteredEnseignants = enseignants.filter(ens => 
    ens.nom.toLowerCase().includes(searchTerm.toLowerCase()) ||
    ens.prenom.toLowerCase().includes(searchTerm.toLowerCase()) ||
    ens.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    ens.departement.toLowerCase().includes(searchTerm.toLowerCase())
  );

  /**
   * Ouvre le modal pour ajouter un nouvel enseignant
   */
  const handleAjouter = () => {
    setEditingEnseignant(null);
    setShowModal(true);
  };

  /**
   * Ouvre le modal pour modifier un enseignant
   * @param {Object} enseignant - Enseignant à modifier
   */
  const handleModifier = (enseignant) => {
    setEditingEnseignant(enseignant);
    setShowModal(true);
  };

  /**
   * Supprime un enseignant après confirmation
   * @param {number} id - ID de l'enseignant à supprimer
   */
  const handleSupprimer = (id) => {
    if (window.confirm('Êtes-vous sûr de vouloir supprimer cet enseignant ?')) {
      supprimerEnseignant(id);
    }
  };

  /**
   * Obtient la couleur du badge selon le statut
   * @param {boolean} actif - Statut actif/inactif
   * @returns {string} Classe CSS du badge
   */
  const getStatusBadge = (actif) => {
    return actif ? 'badge badge-success' : 'badge badge-danger';
  };

  return (
    <div className="enseignants-page">
      {/* En-tête de la page */}
      <div className="page-header">
        <div>
          <h1 className="page-title">Enseignants</h1>
          <p className="page-subtitle">
            Gérez les enseignants et leurs disponibilités
          </p>
        </div>
        <Button 
          variant="primary" 
          icon={<Plus size={18} />}
          onClick={handleAjouter}
        >
          Ajouter un Enseignant
        </Button>
      </div>

      {/* Barre de recherche et filtres */}
      <div className="filters-section card">
        <div className="search-box">
          <input
            type="text"
            className="form-input"
            placeholder="Rechercher un enseignant (nom, prénom, email, département...)"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      {/* Statistiques rapides */}
      <div className="quick-stats">
        <div className="stat-item">
          <span className="stat-label">Total</span>
          <span className="stat-value">{enseignants.length}</span>
        </div>
        <div className="stat-item">
          <span className="stat-label">Actifs</span>
          <span className="stat-value text-success">
            {enseignants.filter(e => e.actif).length}
          </span>
        </div>
        <div className="stat-item">
          <span className="stat-label">Inactifs</span>
          <span className="stat-value text-danger">
            {enseignants.filter(e => !e.actif).length}
          </span>
        </div>
      </div>

      {/* Liste des enseignants */}
      <div className="enseignants-grid">
        {filteredEnseignants.length === 0 ? (
          <div className="empty-state">
            <p>Aucun enseignant trouvé</p>
          </div>
        ) : (
          filteredEnseignants.map(enseignant => (
            <div key={enseignant.id} className="enseignant-card">
              {/* En-tête de la carte */}
              <div className="card-top">
                <div className="enseignant-info">
                  <h3 className="enseignant-name">
                    {enseignant.prenom} {enseignant.nom}
                  </h3>
                  <span className={getStatusBadge(enseignant.actif)}>
                    {enseignant.actif ? 'Actif' : 'Inactif'}
                  </span>
                </div>
                <span className="grade-badge">{enseignant.grade}</span>
              </div>

              {/* Informations de contact */}
              <div className="contact-info">
                <div className="info-item">
                  <Mail size={16} />
                  <span>{enseignant.email}</span>
                </div>
                <div className="info-item">
                  <Phone size={16} />
                  <span>{enseignant.telephone}</span>
                </div>
              </div>

              {/* Département */}
              <div className="departement">
                <span className="badge badge-info">{enseignant.departement}</span>
              </div>

              {/* Matières enseignées */}
              <div className="matieres-section">
                <div className="section-label">
                  <Book size={14} />
                  <span>Matières</span>
                </div>
                <div className="matieres-list">
                  {enseignant.matieres.map((matiere, index) => (
                    <span key={index} className="matiere-tag">
                      {matiere}
                    </span>
                  ))}
                </div>
              </div>

              {/* Charge horaire */}
              <div className="charge-horaire">
                <span className="charge-label">Charge horaire</span>
                <span className="charge-value">{enseignant.chargeHoraire}h/semaine</span>
              </div>

              {/* Actions */}
              <div className="card-actions">
                <button
                  className="btn-icon-action edit"
                  onClick={() => handleModifier(enseignant)}
                  title="Modifier"
                >
                  <Edit size={16} />
                </button>
                <button
                  className="btn-icon-action delete"
                  onClick={() => handleSupprimer(enseignant.id)}
                  title="Supprimer"
                >
                  <Trash2 size={16} />
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Modal d'ajout/modification - À implémenter */}
      {showModal && (
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2 className="modal-title">
                {editingEnseignant ? 'Modifier l\'enseignant' : 'Ajouter un enseignant'}
              </h2>
              <button 
                className="btn-close"
                onClick={() => setShowModal(false)}
              >
                ×
              </button>
            </div>
            <div className="modal-body">
              <p>Formulaire d'ajout/modification à implémenter</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Enseignants;
