/**
 * Composant Header - En-tête de l'application
 * Affiche le titre, les notifications et les informations utilisateur
 */

import React, { useState } from 'react';
import { Bell, User, Menu } from 'lucide-react';
import { useAppContext } from '../../context/AppContext';
import './Header.css';

/**
 * Composant Header
 * @param {Object} props - Props du composant
 * @param {Function} props.toggleSidebar - Fonction pour afficher/masquer la sidebar
 */
const Header = ({ toggleSidebar }) => {
  // Récupération des données du context
  const { notifications, user, marquerToutesNotificationsLues } = useAppContext();
  
  // État pour afficher/masquer le panneau des notifications
  const [showNotifications, setShowNotifications] = useState(false);
  
  // État pour afficher/masquer le menu utilisateur
  const [showUserMenu, setShowUserMenu] = useState(false);
  
  // Calculer le nombre de notifications non lues
  const notificationsNonLues = notifications.filter(n => !n.lu).length;

  /**
   * Gère le clic sur l'icône des notifications
   */
  const handleNotificationClick = () => {
    setShowNotifications(!showNotifications);
    if (!showNotifications) {
      // Marquer toutes comme lues après un court délai
      setTimeout(() => {
        marquerToutesNotificationsLues();
      }, 1000);
    }
  };

  /**
   * Formate la date d'une notification
   * @param {string} dateString - Date au format ISO
   * @returns {string} Date formatée
   */
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const maintenant = new Date();
    const diff = maintenant - date;
    
    // Moins d'une minute
    if (diff < 60000) {
      return 'À l\'instant';
    }
    // Moins d'une heure
    if (diff < 3600000) {
      const minutes = Math.floor(diff / 60000);
      return `Il y a ${minutes} min`;
    }
    // Moins d'un jour
    if (diff < 86400000) {
      const heures = Math.floor(diff / 3600000);
      return `Il y a ${heures}h`;
    }
    // Plus d'un jour
    const jours = Math.floor(diff / 86400000);
    return `Il y a ${jours}j`;
  };

  return (
    <header className="header">
      <div className="header-left">
        {/* Bouton pour afficher/masquer la sidebar sur mobile */}
        <button 
          className="btn-icon menu-toggle"
          onClick={toggleSidebar}
          aria-label="Menu"
        >
          <Menu size={24} />
        </button>
        
        {/* Titre de l'application */}
        <h1 className="header-title">
          Gestion des Emplois du Temps
        </h1>
      </div>

      <div className="header-right">
        {/* Notifications */}
        <div className="notification-container">
          <button 
            className="btn-icon notification-btn"
            onClick={handleNotificationClick}
            aria-label="Notifications"
          >
            <Bell size={20} />
            {notificationsNonLues > 0 && (
              <span className="notification-badge">
                {notificationsNonLues}
              </span>
            )}
          </button>

          {/* Panneau des notifications */}
          {showNotifications && (
            <div className="notification-panel">
              <div className="notification-header">
                <h3>Notifications</h3>
                <span className="notification-count">
                  {notificationsNonLues} non lue{notificationsNonLues > 1 ? 's' : ''}
                </span>
              </div>
              
              <div className="notification-list">
                {notifications.length === 0 ? (
                  <p className="no-notifications">
                    Aucune notification
                  </p>
                ) : (
                  notifications.slice(0, 10).map(notif => (
                    <div 
                      key={notif.id} 
                      className={`notification-item ${!notif.lu ? 'unread' : ''}`}
                    >
                      <div className={`notification-icon ${notif.type}`}>
                        {notif.type === 'success' && '✓'}
                        {notif.type === 'warning' && '⚠'}
                        {notif.type === 'error' && '✕'}
                        {notif.type === 'info' && 'i'}
                      </div>
                      <div className="notification-content">
                        <p className="notification-message">{notif.message}</p>
                        <span className="notification-date">
                          {formatDate(notif.date)}
                        </span>
                      </div>
                    </div>
                  ))
                )}
              </div>
              
              {notifications.length > 0 && (
                <div className="notification-footer">
                  <button className="btn-text">
                    Voir toutes les notifications
                  </button>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Menu utilisateur */}
        <div className="user-menu-container">
          <button 
            className="user-btn"
            onClick={() => setShowUserMenu(!showUserMenu)}
            aria-label="Profil utilisateur"
          >
            <User size={20} />
            <span className="user-name">{user.prenom} {user.nom}</span>
          </button>

          {/* Dropdown menu utilisateur */}
          {showUserMenu && (
            <div className="user-dropdown">
              <div className="user-info">
                <p className="user-fullname">{user.prenom} {user.nom}</p>
                <p className="user-email">{user.email}</p>
                <span className="user-role badge badge-primary">{user.role}</span>
              </div>
              <div className="user-actions">
                <button className="user-action-btn">
                  Mon Profil
                </button>
                <button className="user-action-btn">
                  Paramètres
                </button>
                <button className="user-action-btn danger">
                  Déconnexion
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Overlay pour fermer les menus en cliquant à l'extérieur */}
      {(showNotifications || showUserMenu) && (
        <div 
          className="overlay"
          onClick={() => {
            setShowNotifications(false);
            setShowUserMenu(false);
          }}
        />
      )}
    </header>
  );
};

export default Header;
