/**
 * Page Paramètres - Configuration de l'application
 * Permet de gérer les paramètres et préférences
 */

import React, { useState } from 'react';
import { Settings, User, Bell, Database, Shield, HelpCircle } from 'lucide-react';
import Button from '../components/common/Button';
import './Parametres.css';

/**
 * Composant Paramètres
 */
const Parametres = () => {
  // États pour les différents paramètres
  const [notifications, setNotifications] = useState(true);
  const [emailNotif, setEmailNotif] = useState(false);
  const [theme, setTheme] = useState('clair');

  return (
    <div className="parametres-page">
      <div className="page-header">
        <div>
          <h1 className="page-title">
            <Settings size={32} className="title-icon" />
            Paramètres
          </h1>
          <p className="page-subtitle">
            Configurez votre application selon vos préférences
          </p>
        </div>
      </div>

      <div className="parametres-grid">
        {/* Section Profil */}
        <div className="param-section card">
          <div className="param-header">
            <User size={24} />
            <h2>Profil Utilisateur</h2>
          </div>
          <div className="param-content">
            <div className="form-group">
              <label className="form-label">Nom complet</label>
              <input 
                type="text" 
                className="form-input" 
                defaultValue="Nan Messe"
              />
            </div>
            <div className="form-group">
              <label className="form-label">Email</label>
              <input 
                type="email" 
                className="form-input" 
                defaultValue="nan.messe@univ-tlse2.fr"
              />
            </div>
            <div className="form-group">
              <label className="form-label">Rôle</label>
              <select className="form-select">
                <option value="admin">Administrateur</option>
                <option value="enseignant">Enseignant</option>
                <option value="gestionnaire">Gestionnaire</option>
              </select>
            </div>
            <Button variant="primary">
              Enregistrer les modifications
            </Button>
          </div>
        </div>

        {/* Section Notifications */}
        <div className="param-section card">
          <div className="param-header">
            <Bell size={24} />
            <h2>Notifications</h2>
          </div>
          <div className="param-content">
            <div className="param-option">
              <div>
                <p className="option-title">Notifications dans l'application</p>
                <p className="option-description">
                  Recevoir des notifications pour les changements d'emploi du temps
                </p>
              </div>
              <label className="toggle-switch">
                <input 
                  type="checkbox" 
                  checked={notifications}
                  onChange={(e) => setNotifications(e.target.checked)}
                />
                <span className="toggle-slider"></span>
              </label>
            </div>

            <div className="param-option">
              <div>
                <p className="option-title">Notifications par email</p>
                <p className="option-description">
                  Recevoir des emails pour les mises à jour importantes
                </p>
              </div>
              <label className="toggle-switch">
                <input 
                  type="checkbox" 
                  checked={emailNotif}
                  onChange={(e) => setEmailNotif(e.target.checked)}
                />
                <span className="toggle-slider"></span>
              </label>
            </div>
          </div>
        </div>

        {/* Section Apparence */}
        <div className="param-section card">
          <div className="param-header">
            <Settings size={24} />
            <h2>Apparence</h2>
          </div>
          <div className="param-content">
            <div className="form-group">
              <label className="form-label">Thème</label>
              <select 
                className="form-select"
                value={theme}
                onChange={(e) => setTheme(e.target.value)}
              >
                <option value="clair">Clair</option>
                <option value="sombre">Sombre</option>
                <option value="auto">Automatique</option>
              </select>
            </div>
          </div>
        </div>

        {/* Section Base de données */}
        <div className="param-section card">
          <div className="param-header">
            <Database size={24} />
            <h2>Données</h2>
          </div>
          <div className="param-content">
            <p className="info-text">
              Gérez vos données stockées localement dans le navigateur.
            </p>
            <div className="data-actions">
              <Button variant="outline">
                Exporter les données
              </Button>
              <Button variant="outline">
                Importer les données
              </Button>
              <Button variant="danger">
                Réinitialiser toutes les données
              </Button>
            </div>
          </div>
        </div>

        {/* Section Sécurité */}
        <div className="param-section card">
          <div className="param-header">
            <Shield size={24} />
            <h2>Sécurité</h2>
          </div>
          <div className="param-content">
            <div className="form-group">
              <label className="form-label">Changer le mot de passe</label>
              <input 
                type="password" 
                className="form-input" 
                placeholder="Nouveau mot de passe"
              />
            </div>
            <div className="form-group">
              <input 
                type="password" 
                className="form-input" 
                placeholder="Confirmer le mot de passe"
              />
            </div>
            <Button variant="primary">
              Mettre à jour le mot de passe
            </Button>
          </div>
        </div>

        {/* Section Aide */}
        <div className="param-section card">
          <div className="param-header">
            <HelpCircle size={24} />
            <h2>Aide & Support</h2>
          </div>
          <div className="param-content">
            <p className="info-text">
              Besoin d'aide ? Consultez notre documentation ou contactez le support.
            </p>
            <div className="help-links">
              <a href="#" className="help-link">
                📚 Documentation
              </a>
              <a href="#" className="help-link">
                💬 Support
              </a>
              <a href="#" className="help-link">
                🐛 Signaler un bug
              </a>
            </div>
            <div className="version-info">
              <p>Version 1.0.0</p>
              <p className="copyright">© 2025 Université Toulouse 2</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Parametres;
