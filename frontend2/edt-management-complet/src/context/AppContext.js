/**
 * Context global de l'application
 * Gère l'état global partagé entre tous les composants
 * Utilise le localStorage pour persister les données
 */

import React, { createContext, useContext, useState, useEffect } from 'react';
import { mockEnseignants } from '../data/mockEnseignants';
import { mockSalles } from '../data/mockSalles';
import { mockCours } from '../data/mockCours';
import { mockEmploiDuTemps } from '../data/mockEmploiDuTemps';

// Création du Context
const AppContext = createContext();

/**
 * Hook personnalisé pour utiliser le context
 * @returns {Object} L'état et les fonctions du context
 */
export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext doit être utilisé dans un AppProvider');
  }
  return context;
};

/**
 * Provider du Context - Enveloppe toute l'application
 * @param {Object} props - Props du composant
 * @param {ReactNode} props.children - Composants enfants
 */
export const AppProvider = ({ children }) => {
  // =============== ÉTAT LOCAL ===============
  
  // État pour les enseignants
  const [enseignants, setEnseignants] = useState([]);
  
  // État pour les salles
  const [salles, setSalles] = useState([]);
  
  // État pour les cours
  const [cours, setCours] = useState([]);
  
  // État pour l'emploi du temps
  const [emploiDuTemps, setEmploiDuTemps] = useState([]);
  
  // État pour les notifications
  const [notifications, setNotifications] = useState([]);
  
  // État pour l'utilisateur connecté (simulé)
  const [user, setUser] = useState({
    nom: 'Messe',
    prenom: 'Nan',
    email: 'nan.messe@univ-tlse2.fr',
    role: 'admin'
  });

  // =============== INITIALISATION ===============
  
  /**
   * Charge les données depuis le localStorage ou utilise les données mockées
   */
  useEffect(() => {
    // Charger les enseignants
    const savedEnseignants = localStorage.getItem('enseignants');
    if (savedEnseignants) {
      setEnseignants(JSON.parse(savedEnseignants));
    } else {
      setEnseignants(mockEnseignants);
      localStorage.setItem('enseignants', JSON.stringify(mockEnseignants));
    }

    // Charger les salles
    const savedSalles = localStorage.getItem('salles');
    if (savedSalles) {
      setSalles(JSON.parse(savedSalles));
    } else {
      setSalles(mockSalles);
      localStorage.setItem('salles', JSON.stringify(mockSalles));
    }

    // Charger les cours
    const savedCours = localStorage.getItem('cours');
    if (savedCours) {
      setCours(JSON.parse(savedCours));
    } else {
      setCours(mockCours);
      localStorage.setItem('cours', JSON.stringify(mockCours));
    }

    // Charger l'emploi du temps
    const savedEDT = localStorage.getItem('emploiDuTemps');
    if (savedEDT) {
      setEmploiDuTemps(JSON.parse(savedEDT));
    } else {
      setEmploiDuTemps(mockEmploiDuTemps);
      localStorage.setItem('emploiDuTemps', JSON.stringify(mockEmploiDuTemps));
    }

    // Charger les notifications
    const savedNotifications = localStorage.getItem('notifications');
    if (savedNotifications) {
      setNotifications(JSON.parse(savedNotifications));
    }
  }, []);

  // =============== FONCTIONS POUR LES ENSEIGNANTS ===============
  
  /**
   * Ajoute un nouvel enseignant
   * @param {Object} enseignant - Données de l'enseignant
   */
  const ajouterEnseignant = (enseignant) => {
    const newEnseignant = {
      ...enseignant,
      id: enseignants.length > 0 ? Math.max(...enseignants.map(e => e.id)) + 1 : 1,
      actif: true
    };
    const updated = [...enseignants, newEnseignant];
    setEnseignants(updated);
    localStorage.setItem('enseignants', JSON.stringify(updated));
    
    ajouterNotification({
      type: 'success',
      message: `Enseignant ${enseignant.prenom} ${enseignant.nom} ajouté avec succès`
    });
  };

  /**
   * Modifie un enseignant existant
   * @param {number} id - ID de l'enseignant
   * @param {Object} enseignantModifie - Nouvelles données
   */
  const modifierEnseignant = (id, enseignantModifie) => {
    const updated = enseignants.map(ens => 
      ens.id === id ? { ...ens, ...enseignantModifie } : ens
    );
    setEnseignants(updated);
    localStorage.setItem('enseignants', JSON.stringify(updated));
    
    ajouterNotification({
      type: 'info',
      message: `Enseignant modifié avec succès`
    });
  };

  /**
   * Supprime un enseignant
   * @param {number} id - ID de l'enseignant à supprimer
   */
  const supprimerEnseignant = (id) => {
    const updated = enseignants.filter(ens => ens.id !== id);
    setEnseignants(updated);
    localStorage.setItem('enseignants', JSON.stringify(updated));
    
    ajouterNotification({
      type: 'warning',
      message: `Enseignant supprimé`
    });
  };

  // =============== FONCTIONS POUR LES SALLES ===============
  
  /**
   * Ajoute une nouvelle salle
   * @param {Object} salle - Données de la salle
   */
  const ajouterSalle = (salle) => {
    const newSalle = {
      ...salle,
      id: salles.length > 0 ? Math.max(...salles.map(s => s.id)) + 1 : 1,
      disponible: true
    };
    const updated = [...salles, newSalle];
    setSalles(updated);
    localStorage.setItem('salles', JSON.stringify(updated));
    
    ajouterNotification({
      type: 'success',
      message: `Salle ${salle.nom} ajoutée avec succès`
    });
  };

  /**
   * Modifie une salle existante
   * @param {number} id - ID de la salle
   * @param {Object} salleModifiee - Nouvelles données
   */
  const modifierSalle = (id, salleModifiee) => {
    const updated = salles.map(salle => 
      salle.id === id ? { ...salle, ...salleModifiee } : salle
    );
    setSalles(updated);
    localStorage.setItem('salles', JSON.stringify(updated));
    
    ajouterNotification({
      type: 'info',
      message: `Salle modifiée avec succès`
    });
  };

  /**
   * Supprime une salle
   * @param {number} id - ID de la salle à supprimer
   */
  const supprimerSalle = (id) => {
    const updated = salles.filter(salle => salle.id !== id);
    setSalles(updated);
    localStorage.setItem('salles', JSON.stringify(updated));
    
    ajouterNotification({
      type: 'warning',
      message: `Salle supprimée`
    });
  };

  // =============== FONCTIONS POUR LES COURS ===============
  
  /**
   * Ajoute un nouveau cours
   * @param {Object} coursData - Données du cours
   */
  const ajouterCours = (coursData) => {
    const newCours = {
      ...coursData,
      id: cours.length > 0 ? Math.max(...cours.map(c => c.id)) + 1 : 1
    };
    const updated = [...cours, newCours];
    setCours(updated);
    localStorage.setItem('cours', JSON.stringify(updated));
    
    ajouterNotification({
      type: 'success',
      message: `Cours ${coursData.nom} ajouté avec succès`
    });
  };

  /**
   * Modifie un cours existant
   * @param {number} id - ID du cours
   * @param {Object} coursModifie - Nouvelles données
   */
  const modifierCours = (id, coursModifie) => {
    const updated = cours.map(c => 
      c.id === id ? { ...c, ...coursModifie } : c
    );
    setCours(updated);
    localStorage.setItem('cours', JSON.stringify(updated));
    
    ajouterNotification({
      type: 'info',
      message: `Cours modifié avec succès`
    });
  };

  /**
   * Supprime un cours
   * @param {number} id - ID du cours à supprimer
   */
  const supprimerCours = (id) => {
    const updated = cours.filter(c => c.id !== id);
    setCours(updated);
    localStorage.setItem('cours', JSON.stringify(updated));
    
    ajouterNotification({
      type: 'warning',
      message: `Cours supprimé`
    });
  };

  // =============== FONCTIONS POUR L'EMPLOI DU TEMPS ===============
  
  /**
   * Ajoute une séance à l'emploi du temps
   * @param {Object} seance - Données de la séance
   */
  const ajouterSeance = (seance) => {
    const newSeance = {
      ...seance,
      id: emploiDuTemps.length > 0 ? Math.max(...emploiDuTemps.map(s => s.id)) + 1 : 1
    };
    const updated = [...emploiDuTemps, newSeance];
    setEmploiDuTemps(updated);
    localStorage.setItem('emploiDuTemps', JSON.stringify(updated));
    
    ajouterNotification({
      type: 'success',
      message: `Séance ajoutée à l'emploi du temps`
    });
  };

  /**
   * Modifie une séance de l'emploi du temps
   * @param {number} id - ID de la séance
   * @param {Object} seanceModifiee - Nouvelles données
   */
  const modifierSeance = (id, seanceModifiee) => {
    const updated = emploiDuTemps.map(seance => 
      seance.id === id ? { ...seance, ...seanceModifiee } : seance
    );
    setEmploiDuTemps(updated);
    localStorage.setItem('emploiDuTemps', JSON.stringify(updated));
    
    ajouterNotification({
      type: 'info',
      message: `Séance modifiée`
    });
  };

  /**
   * Supprime une séance de l'emploi du temps
   * @param {number} id - ID de la séance à supprimer
   */
  const supprimerSeance = (id) => {
    const updated = emploiDuTemps.filter(seance => seance.id !== id);
    setEmploiDuTemps(updated);
    localStorage.setItem('emploiDuTemps', JSON.stringify(updated));
    
    ajouterNotification({
      type: 'warning',
      message: `Séance supprimée`
    });
  };

  /**
   * Réinitialise complètement l'emploi du temps
   */
  const reinitialiserEDT = () => {
    setEmploiDuTemps([]);
    localStorage.setItem('emploiDuTemps', JSON.stringify([]));
    
    ajouterNotification({
      type: 'warning',
      message: `Emploi du temps réinitialisé`
    });
  };

  // =============== FONCTIONS POUR LES NOTIFICATIONS ===============
  
  /**
   * Ajoute une notification
   * @param {Object} notification - Objet notification { type, message }
   */
  const ajouterNotification = (notification) => {
    const newNotification = {
      ...notification,
      id: Date.now(),
      date: new Date().toISOString(),
      lu: false
    };
    const updated = [newNotification, ...notifications];
    setNotifications(updated);
    localStorage.setItem('notifications', JSON.stringify(updated));
  };

  /**
   * Marque une notification comme lue
   * @param {number} id - ID de la notification
   */
  const marquerNotificationLue = (id) => {
    const updated = notifications.map(notif => 
      notif.id === id ? { ...notif, lu: true } : notif
    );
    setNotifications(updated);
    localStorage.setItem('notifications', JSON.stringify(updated));
  };

  /**
   * Marque toutes les notifications comme lues
   */
  const marquerToutesNotificationsLues = () => {
    const updated = notifications.map(notif => ({ ...notif, lu: true }));
    setNotifications(updated);
    localStorage.setItem('notifications', JSON.stringify(updated));
  };

  /**
   * Supprime une notification
   * @param {number} id - ID de la notification à supprimer
   */
  const supprimerNotification = (id) => {
    const updated = notifications.filter(notif => notif.id !== id);
    setNotifications(updated);
    localStorage.setItem('notifications', JSON.stringify(updated));
  };

  // =============== VALEUR DU CONTEXT ===============
  
  const value = {
    // États
    enseignants,
    salles,
    cours,
    emploiDuTemps,
    notifications,
    user,
    
    // Fonctions Enseignants
    ajouterEnseignant,
    modifierEnseignant,
    supprimerEnseignant,
    
    // Fonctions Salles
    ajouterSalle,
    modifierSalle,
    supprimerSalle,
    
    // Fonctions Cours
    ajouterCours,
    modifierCours,
    supprimerCours,
    
    // Fonctions Emploi du temps
    ajouterSeance,
    modifierSeance,
    supprimerSeance,
    reinitialiserEDT,
    
    // Fonctions Notifications
    ajouterNotification,
    marquerNotificationLue,
    marquerToutesNotificationsLues,
    supprimerNotification
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};
