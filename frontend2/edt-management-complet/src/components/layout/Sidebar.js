/**
 * Composant Sidebar - Menu de navigation latéral
 * Permet de naviguer entre les différentes pages de l'application
 */

import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Home, 
  Users, 
  BookOpen, 
  DoorOpen, 
  Calendar,
  Settings,
  LogOut
} from 'lucide-react';
import './Sidebar.css';

/**
 * Composant Sidebar
 * @param {Object} props - Props du composant
 * @param {boolean} props.isOpen - Indique si la sidebar est ouverte (pour mobile)
 * @param {Function} props.onClose - Fonction pour fermer la sidebar
 */
const Sidebar = ({ isOpen, onClose }) => {
  // Récupérer la route actuelle
  const location = useLocation();

  /**
   * Liste des éléments du menu
   * Chaque élément contient : path, label, icon
   */
  const menuItems = [
    {
      path: '/',
      label: 'Tableau de Bord',
      icon: Home
    },
    {
      path: '/enseignants',
      label: 'Enseignants',
      icon: Users
    },
    {
      path: '/cours',
      label: 'Cours',
      icon: BookOpen
    },
    {
      path: '/salles',
      label: 'Salles',
      icon: DoorOpen
    },
    {
      path: '/emploi-du-temps',
      label: 'Emploi du Temps',
      icon: Calendar
    }
  ];

  /**
   * Vérifie si un élément du menu est actif
   * @param {string} path - Chemin de la route
   * @returns {boolean} true si l'élément est actif
   */
  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <>
      {/* Overlay pour mobile */}
      {isOpen && (
        <div 
          className="sidebar-overlay"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside className={`sidebar ${isOpen ? 'open' : ''}`}>
        {/* Logo et titre */}
        <div className="sidebar-header">
          <div className="sidebar-logo">
            <Calendar size={32} className="logo-icon" />
          </div>
          <h2 className="sidebar-title">EDT Manager</h2>
        </div>

        {/* Navigation principale */}
        <nav className="sidebar-nav">
          <ul className="nav-list">
            {menuItems.map((item) => {
              const Icon = item.icon;
              return (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className={`nav-link ${isActive(item.path) ? 'active' : ''}`}
                    onClick={onClose}
                  >
                    <Icon size={20} className="nav-icon" />
                    <span className="nav-label">{item.label}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Section secondaire (Paramètres et Déconnexion) */}
        <div className="sidebar-footer">
          <Link to="/parametres" className="nav-link">
            <Settings size={20} className="nav-icon" />
            <span className="nav-label">Paramètres</span>
          </Link>
          
          <button className="nav-link logout-btn">
            <LogOut size={20} className="nav-icon" />
            <span className="nav-label">Déconnexion</span>
          </button>
        </div>

        {/* Version de l'application */}
        <div className="sidebar-version">
          <span>Version 1.0.0</span>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
