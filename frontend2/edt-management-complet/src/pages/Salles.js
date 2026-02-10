/**
 * Page Salles - Gestion des salles
 * Permet de visualiser et gérer les salles de cours
 */

import React, { useState } from 'react';
import { useAppContext } from '../context/AppContext';
import { Plus, Edit, Trash2, MapPin, Users as UsersIcon } from 'lucide-react';
import Button from '../components/common/Button';
import './Salles.css';

/**
 * Composant Salles
 */
const Salles = () => {
  const { salles, supprimerSalle } = useAppContext();
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('tous');

  // Filtre les salles
  const filteredSalles = salles.filter(s => {
    const matchSearch = s.nom.toLowerCase().includes(searchTerm.toLowerCase()) ||
                       s.batiment.toLowerCase().includes(searchTerm.toLowerCase());
    const matchType = filterType === 'tous' || s.type === filterType;
    return matchSearch && matchType;
  });

  // Types de salles uniques
  const types = ['tous', ...new Set(salles.map(s => s.type))];

  /**
   * Supprime une salle
   */
  const handleSupprimer = (id) => {
    if (window.confirm('Êtes-vous sûr de vouloir supprimer cette salle ?')) {
      supprimerSalle(id);
    }
  };

  return (
    <div className="salles-page">
      <div className="page-header">
        <div>
          <h1 className="page-title">Salles</h1>
          <p className="page-subtitle">Gérez les salles et leurs équipements</p>
        </div>
        <Button variant="primary" icon={<Plus size={18} />}>
          Ajouter une Salle
        </Button>
      </div>

      <div className="filters-section card">
        <div className="search-box">
          <input
            type="text"
            className="form-input"
            placeholder="Rechercher une salle..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="type-filters">
          {types.map(type => (
            <button
              key={type}
              className={`filter-btn ${filterType === type ? 'active' : ''}`}
              onClick={() => setFilterType(type)}
            >
              {type.charAt(0).toUpperCase() + type.slice(1)}
            </button>
          ))}
        </div>
      </div>

      <div className="quick-stats">
        <div className="stat-item">
          <span className="stat-label">Total</span>
          <span className="stat-value">{salles.length}</span>
        </div>
        <div className="stat-item">
          <span className="stat-label">Disponibles</span>
          <span className="stat-value text-success">
            {salles.filter(s => s.disponible).length}
          </span>
        </div>
        <div className="stat-item">
          <span className="stat-label">Capacité totale</span>
          <span className="stat-value">
            {salles.reduce((sum, s) => sum + s.capacite, 0)}
          </span>
        </div>
      </div>

      <div className="salles-grid">
        {filteredSalles.map(salle => (
          <div key={salle.id} className="salle-card">
            <div className="salle-header">
              <h3 className="salle-name">{salle.nom}</h3>
              <span className={`status-badge ${salle.disponible ? 'disponible' : 'occupee'}`}>
                {salle.disponible ? 'Disponible' : 'Occupée'}
              </span>
            </div>

            <div className="salle-info">
              <div className="info-row">
                <MapPin size={16} />
                <span>{salle.batiment} - {salle.etage}</span>
              </div>
              <div className="info-row">
                <UsersIcon size={16} />
                <span>Capacité : {salle.capacite} places</span>
              </div>
            </div>

            <div className="type-badge-container">
              <span className="badge badge-info">{salle.type}</span>
            </div>

            <div className="equipements-section">
              <p className="section-title">Équipements</p>
              <div className="equipements-list">
                {salle.equipements.slice(0, 3).map((eq, index) => (
                  <span key={index} className="equipement-tag">
                    {eq}
                  </span>
                ))}
                {salle.equipements.length > 3 && (
                  <span className="equipement-tag more">
                    +{salle.equipements.length - 3}
                  </span>
                )}
              </div>
            </div>

            {salle.remarques && (
              <div className="remarques">
                <p className="remarques-text">{salle.remarques}</p>
              </div>
            )}

            <div className="card-actions">
              <button className="btn-icon-action edit" title="Modifier">
                <Edit size={16} />
              </button>
              <button 
                className="btn-icon-action delete" 
                title="Supprimer"
                onClick={() => handleSupprimer(salle.id)}
              >
                <Trash2 size={16} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Salles;
