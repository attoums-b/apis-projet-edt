/**
 * Données mockées pour l'emploi du temps
 * Ces données simulent les séances planifiées dans l'emploi du temps
 */

export const mockEmploiDuTemps = [
  // LUNDI
  {
    id: 1,
    coursId: 1, // Programmation Web - CM
    enseignantId: 1,
    salleId: 1,
    jour: 'lundi',
    heureDebut: '08:00',
    heureFin: '10:00',
    semaine: 'toutes', // 'toutes', 'paires', 'impaires' ou numéro de semaine
    groupe: 'L3 Info - Groupe complet'
  },
  {
    id: 2,
    coursId: 5, // Algorithmes - CM
    enseignantId: 2,
    salleId: 7,
    jour: 'lundi',
    heureDebut: '10:00',
    heureFin: '12:00',
    semaine: 'toutes',
    groupe: 'L3 Info - Groupe complet'
  },
  {
    id: 3,
    coursId: 8, // Réseaux - CM
    enseignantId: 3,
    salleId: 1,
    jour: 'lundi',
    heureDebut: '14:00',
    heureFin: '16:00',
    semaine: 'toutes',
    groupe: 'L3 Info - Groupe complet'
  },
  
  // MARDI
  {
    id: 4,
    coursId: 2, // Programmation Web - TD
    enseignantId: 1,
    salleId: 4,
    jour: 'mardi',
    heureDebut: '08:00',
    heureFin: '10:00',
    semaine: 'toutes',
    groupe: 'L3 Info - Groupe A'
  },
  {
    id: 5,
    coursId: 6, // Algorithmes - TD
    enseignantId: 2,
    salleId: 5,
    jour: 'mardi',
    heureDebut: '10:00',
    heureFin: '12:00',
    semaine: 'toutes',
    groupe: 'L3 Info - Groupe A'
  },
  {
    id: 6,
    coursId: 4, // Base de Données - TP
    enseignantId: 1,
    salleId: 2,
    jour: 'mardi',
    heureDebut: '14:00',
    heureFin: '16:00',
    semaine: 'toutes',
    groupe: 'L3 Info - Groupe A'
  },
  {
    id: 7,
    coursId: 9, // Réseaux - TP
    enseignantId: 3,
    salleId: 8,
    jour: 'mardi',
    heureDebut: '16:00',
    heureFin: '18:00',
    semaine: 'toutes',
    groupe: 'L3 Info - Groupe A'
  },
  
  // MERCREDI
  {
    id: 8,
    coursId: 3, // Base de Données - CM
    enseignantId: 1,
    salleId: 1,
    jour: 'mercredi',
    heureDebut: '08:00',
    heureFin: '10:00',
    semaine: 'toutes',
    groupe: 'L3 Info - Groupe complet'
  },
  {
    id: 9,
    coursId: 7, // Structures de Données - CM
    enseignantId: 2,
    salleId: 7,
    jour: 'mercredi',
    heureDebut: '10:00',
    heureFin: '12:00',
    semaine: 'toutes',
    groupe: 'L3 Info - Groupe complet'
  },
  {
    id: 10,
    coursId: 10, // Sécurité Informatique - CM
    enseignantId: 3,
    salleId: 7,
    jour: 'mercredi',
    heureDebut: '14:00',
    heureFin: '16:00',
    semaine: 'toutes',
    groupe: 'L3 Info - Groupe complet'
  },
  
  // JEUDI
  {
    id: 11,
    coursId: 2, // Programmation Web - TD
    enseignantId: 1,
    salleId: 4,
    jour: 'jeudi',
    heureDebut: '08:00',
    heureFin: '10:00',
    semaine: 'toutes',
    groupe: 'L3 Info - Groupe B'
  },
  {
    id: 12,
    coursId: 6, // Algorithmes - TD
    enseignantId: 2,
    salleId: 5,
    jour: 'jeudi',
    heureDebut: '10:00',
    heureFin: '12:00',
    semaine: 'toutes',
    groupe: 'L3 Info - Groupe B'
  },
  {
    id: 13,
    coursId: 4, // Base de Données - TP
    enseignantId: 1,
    salleId: 2,
    jour: 'jeudi',
    heureDebut: '14:00',
    heureFin: '16:00',
    semaine: 'toutes',
    groupe: 'L3 Info - Groupe B'
  },
  {
    id: 14,
    coursId: 9, // Réseaux - TP
    enseignantId: 3,
    salleId: 8,
    jour: 'jeudi',
    heureDebut: '16:00',
    heureFin: '18:00',
    semaine: 'toutes',
    groupe: 'L3 Info - Groupe B'
  },
  
  // VENDREDI
  {
    id: 15,
    coursId: 1, // Programmation Web - CM (révision)
    enseignantId: 1,
    salleId: 7,
    jour: 'vendredi',
    heureDebut: '08:00',
    heureFin: '10:00',
    semaine: 'impaires',
    groupe: 'L3 Info - Groupe complet'
  },
  {
    id: 16,
    coursId: 5, // Algorithmes - CM (révision)
    enseignantId: 2,
    salleId: 7,
    jour: 'vendredi',
    heureDebut: '10:00',
    heureFin: '12:00',
    semaine: 'impaires',
    groupe: 'L3 Info - Groupe complet'
  }
];

/**
 * Fonction pour obtenir toutes les séances de l'emploi du temps
 * @returns {Array} Liste des séances
 */
export const getAllSeances = () => {
  return mockEmploiDuTemps;
};

/**
 * Fonction pour obtenir les séances d'un jour spécifique
 * @param {string} jour - Jour de la semaine (lundi, mardi, etc.)
 * @returns {Array} Liste des séances du jour
 */
export const getSeancesByJour = (jour) => {
  return mockEmploiDuTemps.filter(seance => seance.jour === jour);
};

/**
 * Fonction pour obtenir les séances d'un enseignant
 * @param {number} enseignantId - ID de l'enseignant
 * @returns {Array} Liste des séances de l'enseignant
 */
export const getSeancesByEnseignant = (enseignantId) => {
  return mockEmploiDuTemps.filter(seance => seance.enseignantId === enseignantId);
};

/**
 * Fonction pour obtenir les séances d'une salle
 * @param {number} salleId - ID de la salle
 * @returns {Array} Liste des séances dans cette salle
 */
export const getSeancesBySalle = (salleId) => {
  return mockEmploiDuTemps.filter(seance => seance.salleId === salleId);
};

/**
 * Fonction pour vérifier s'il y a un conflit d'horaire
 * @param {Object} nouvelleSeance - Nouvelle séance à vérifier
 * @returns {Object} { conflit: boolean, message: string }
 */
export const verifierConflit = (nouvelleSeance) => {
  const { enseignantId, salleId, jour, heureDebut, heureFin } = nouvelleSeance;
  
  // Vérifier les conflits avec l'enseignant
  const conflitsEnseignant = mockEmploiDuTemps.filter(seance => 
    seance.enseignantId === enseignantId &&
    seance.jour === jour &&
    (
      (heureDebut >= seance.heureDebut && heureDebut < seance.heureFin) ||
      (heureFin > seance.heureDebut && heureFin <= seance.heureFin) ||
      (heureDebut <= seance.heureDebut && heureFin >= seance.heureFin)
    )
  );
  
  if (conflitsEnseignant.length > 0) {
    return {
      conflit: true,
      message: 'L\'enseignant a déjà un cours à cet horaire'
    };
  }
  
  // Vérifier les conflits avec la salle
  const conflitsSalle = mockEmploiDuTemps.filter(seance => 
    seance.salleId === salleId &&
    seance.jour === jour &&
    (
      (heureDebut >= seance.heureDebut && heureDebut < seance.heureFin) ||
      (heureFin > seance.heureDebut && heureFin <= seance.heureFin) ||
      (heureDebut <= seance.heureDebut && heureFin >= seance.heureFin)
    )
  );
  
  if (conflitsSalle.length > 0) {
    return {
      conflit: true,
      message: 'La salle est déjà occupée à cet horaire'
    };
  }
  
  return {
    conflit: false,
    message: 'Aucun conflit détecté'
  };
};
