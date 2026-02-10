/**
 * Page Dashboard - Tableau de bord principal
 * Affiche les statistiques et un aperçu global de l'application
 */

import React from 'react';
import { useAppContext } from '../context/AppContext';
import { Users, BookOpen, DoorOpen, Calendar, TrendingUp, Clock } from 'lucide-react';
import './Dashboard.css';

/**
 * Composant Dashboard
 */
const Dashboard = () => {
  // Récupération des données depuis le context
  const { enseignants, cours, salles, emploiDuTemps } = useAppContext();

  /**
   * Calcul des statistiques
   */
  // Nombre d'enseignants actifs
  const nbEnseignantsActifs = enseignants.filter(e => e.actif).length;
  
  // Nombre de cours total
  const nbCoursTotal = cours.length;
  
  // Nombre de salles disponibles
  const nbSallesDisponibles = salles.filter(s => s.disponible).length;
  
  // Nombre de séances planifiées
  const nbSeances = emploiDuTemps.length;
  
  // Calcul de la charge horaire moyenne des enseignants
  const chargeHoraireMoyenne = enseignants.length > 0
    ? (enseignants.reduce((sum, ens) => sum + (ens.chargeHoraire || 0), 0) / enseignants.length).toFixed(1)
    : 0;
  
  // Taux d'occupation des salles (simulé)
  const tauxOccupation = salles.length > 0
    ? ((nbSeances / (salles.length * 25)) * 100).toFixed(1) // 25 créneaux par semaine
    : 0;

  /**
   * Cartes de statistiques
   */
  const statsCards = [
    {
      id: 1,
      title: 'Enseignants',
      value: nbEnseignantsActifs,
      icon: Users,
      color: '#3b82f6',
      bgColor: '#dbeafe',
      subtitle: 'actifs'
    },
    {
      id: 2,
      title: 'Cours',
      value: nbCoursTotal,
      icon: BookOpen,
      color: '#10b981',
      bgColor: '#d1fae5',
      subtitle: 'au total'
    },
    {
      id: 3,
      title: 'Salles',
      value: nbSallesDisponibles,
      icon: DoorOpen,
      color: '#f59e0b',
      bgColor: '#fef3c7',
      subtitle: 'disponibles'
    },
    {
      id: 4,
      title: 'Séances',
      value: nbSeances,
      icon: Calendar,
      color: '#8b5cf6',
      bgColor: '#ede9fe',
      subtitle: 'planifiées'
    }
  ];

  /**
   * Indicateurs supplémentaires
   */
  const indicators = [
    {
      id: 1,
      label: 'Charge horaire moyenne',
      value: `${chargeHoraireMoyenne}h/semaine`,
      icon: Clock,
      trend: '+5%',
      trendUp: true
    },
    {
      id: 2,
      label: 'Taux d\'occupation',
      value: `${tauxOccupation}%`,
      icon: TrendingUp,
      trend: '+12%',
      trendUp: true
    }
  ];

  /**
   * Dernières activités (simulées)
   */
  const recentActivities = [
    {
      id: 1,
      action: 'Nouveau cours ajouté',
      details: 'Programmation Web - L3',
      time: 'Il y a 2h',
      type: 'success'
    },
    {
      id: 2,
      action: 'Enseignant modifié',
      details: 'Marie Dupont - Disponibilités mises à jour',
      time: 'Il y a 4h',
      type: 'info'
    },
    {
      id: 3,
      action: 'Salle réservée',
      details: 'Amphi A - Lundi 10h-12h',
      time: 'Il y a 6h',
      type: 'success'
    },
    {
      id: 4,
      action: 'Conflit détecté',
      details: 'Pierre Martin - Double réservation jeudi',
      time: 'Il y a 1j',
      type: 'warning'
    }
  ];

  return (
    <div className="dashboard">
      {/* En-tête de la page */}
      <div className="page-header">
        <div>
          <h1 className="page-title">Tableau de Bord</h1>
          <p className="page-subtitle">
            Vue d'ensemble de la gestion des emplois du temps
          </p>
        </div>
      </div>

      {/* Cartes de statistiques */}
      <div className="stats-grid">
        {statsCards.map(card => {
          const Icon = card.icon;
          return (
            <div key={card.id} className="stat-card">
              <div className="stat-card-content">
                <div className="stat-info">
                  <p className="stat-title">{card.title}</p>
                  <h2 className="stat-value">{card.value}</h2>
                  <p className="stat-subtitle">{card.subtitle}</p>
                </div>
                <div 
                  className="stat-icon"
                  style={{ 
                    backgroundColor: card.bgColor,
                    color: card.color 
                  }}
                >
                  <Icon size={28} />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Indicateurs supplémentaires */}
      <div className="indicators-grid">
        {indicators.map(indicator => {
          const Icon = indicator.icon;
          return (
            <div key={indicator.id} className="indicator-card">
              <div className="indicator-header">
                <Icon size={20} className="indicator-icon" />
                <span className="indicator-label">{indicator.label}</span>
              </div>
              <div className="indicator-content">
                <h3 className="indicator-value">{indicator.value}</h3>
                <span className={`indicator-trend ${indicator.trendUp ? 'up' : 'down'}`}>
                  {indicator.trend}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Section des activités récentes */}
      <div className="recent-section">
        <div className="card">
          <div className="card-header">
            <h3>Activités Récentes</h3>
          </div>
          <div className="activities-list">
            {recentActivities.map(activity => (
              <div key={activity.id} className="activity-item">
                <div className={`activity-indicator ${activity.type}`} />
                <div className="activity-content">
                  <p className="activity-action">{activity.action}</p>
                  <p className="activity-details">{activity.details}</p>
                </div>
                <span className="activity-time">{activity.time}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Section d'actions rapides */}
      <div className="quick-actions">
        <div className="card">
          <div className="card-header">
            <h3>Actions Rapides</h3>
          </div>
          <div className="actions-grid">
            <button className="action-btn">
              <Users size={24} />
              <span>Ajouter un Enseignant</span>
            </button>
            <button className="action-btn">
              <BookOpen size={24} />
              <span>Créer un Cours</span>
            </button>
            <button className="action-btn">
              <Calendar size={24} />
              <span>Planifier une Séance</span>
            </button>
            <button className="action-btn">
              <DoorOpen size={24} />
              <span>Gérer les Salles</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
