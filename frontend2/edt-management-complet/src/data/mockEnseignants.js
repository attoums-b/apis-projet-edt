/**
 * Données mockées pour les enseignants
 * Ces données simulent une base de données d'enseignants
 */

export const mockEnseignants = [
  {
    id: 1,
    nom: 'Dupont',
    prenom: 'Marie',
    email: 'marie.dupont@univ-tlse2.fr',
    telephone: '05 61 50 42 10',
    departement: 'Informatique',
    grade: 'Maître de Conférences',
    // Matières enseignées par l'enseignant
    matieres: ['Programmation Web', 'Base de Données'],
    // Disponibilités de l'enseignant (jours et créneaux horaires)
    disponibilites: {
      lundi: ['08:00-10:00', '10:00-12:00', '14:00-16:00'],
      mardi: ['08:00-10:00', '14:00-16:00', '16:00-18:00'],
      mercredi: ['08:00-10:00', '10:00-12:00'],
      jeudi: ['08:00-10:00', '10:00-12:00', '14:00-16:00', '16:00-18:00'],
      vendredi: ['08:00-10:00', '10:00-12:00']
    },
    // Préférences personnelles de l'enseignant
    preferences: {
      joursPreferes: ['mardi', 'jeudi'],
      heureDebut: '08:00',
      heureFin: '18:00',
      pauseDejeuner: true
    },
    // Charge horaire actuelle (heures par semaine)
    chargeHoraire: 18,
    // Statut actif/inactif
    actif: true
  },
  {
    id: 2,
    nom: 'Martin',
    prenom: 'Pierre',
    email: 'pierre.martin@univ-tlse2.fr',
    telephone: '05 61 50 42 11',
    departement: 'Informatique',
    grade: 'Professeur',
    matieres: ['Algorithmes', 'Structures de Données'],
    disponibilites: {
      lundi: ['10:00-12:00', '14:00-16:00'],
      mardi: ['08:00-10:00', '10:00-12:00', '14:00-16:00'],
      mercredi: ['14:00-16:00', '16:00-18:00'],
      jeudi: ['08:00-10:00', '10:00-12:00'],
      vendredi: ['08:00-10:00', '10:00-12:00', '14:00-16:00']
    },
    preferences: {
      joursPreferes: ['mardi', 'vendredi'],
      heureDebut: '08:00',
      heureFin: '18:00',
      pauseDejeuner: true
    },
    chargeHoraire: 15,
    actif: true
  },
  {
    id: 3,
    nom: 'Bernard',
    prenom: 'Sophie',
    email: 'sophie.bernard@univ-tlse2.fr',
    telephone: '05 61 50 42 12',
    departement: 'Informatique',
    grade: 'Maître de Conférences',
    matieres: ['Réseaux', 'Sécurité Informatique'],
    disponibilites: {
      lundi: ['08:00-10:00', '10:00-12:00', '14:00-16:00', '16:00-18:00'],
      mardi: ['08:00-10:00', '10:00-12:00'],
      mercredi: ['08:00-10:00', '10:00-12:00', '14:00-16:00'],
      jeudi: ['14:00-16:00', '16:00-18:00'],
      vendredi: ['08:00-10:00', '10:00-12:00', '14:00-16:00']
    },
    preferences: {
      joursPreferes: ['lundi', 'mercredi'],
      heureDebut: '08:00',
      heureFin: '18:00',
      pauseDejeuner: true
    },
    chargeHoraire: 20,
    actif: true
  },
  {
    id: 4,
    nom: 'Dubois',
    prenom: 'Jean',
    email: 'jean.dubois@univ-tlse2.fr',
    telephone: '05 61 50 42 13',
    departement: 'Informatique',
    grade: 'Professeur',
    matieres: ['Intelligence Artificielle', 'Machine Learning'],
    disponibilites: {
      lundi: ['14:00-16:00', '16:00-18:00'],
      mardi: ['08:00-10:00', '10:00-12:00', '14:00-16:00'],
      mercredi: ['08:00-10:00', '10:00-12:00'],
      jeudi: ['08:00-10:00', '10:00-12:00', '14:00-16:00'],
      vendredi: ['14:00-16:00', '16:00-18:00']
    },
    preferences: {
      joursPreferes: ['mardi', 'jeudi'],
      heureDebut: '08:00',
      heureFin: '18:00',
      pauseDejeuner: true
    },
    chargeHoraire: 16,
    actif: true
  },
  {
    id: 5,
    nom: 'Leroy',
    prenom: 'Claire',
    email: 'claire.leroy@univ-tlse2.fr',
    telephone: '05 61 50 42 14',
    departement: 'Informatique',
    grade: 'Maître de Conférences',
    matieres: ['Gestion de Projet', 'UML'],
    disponibilites: {
      lundi: ['08:00-10:00', '10:00-12:00'],
      mardi: ['14:00-16:00', '16:00-18:00'],
      mercredi: ['08:00-10:00', '10:00-12:00', '14:00-16:00', '16:00-18:00'],
      jeudi: ['08:00-10:00', '10:00-12:00'],
      vendredi: ['08:00-10:00', '10:00-12:00']
    },
    preferences: {
      joursPreferes: ['mercredi', 'vendredi'],
      heureDebut: '08:00',
      heureFin: '18:00',
      pauseDejeuner: true
    },
    chargeHoraire: 14,
    actif: true
  }
];

/**
 * Fonction pour obtenir tous les enseignants
 * @returns {Array} Liste des enseignants
 */
export const getAllEnseignants = () => {
  return mockEnseignants;
};

/**
 * Fonction pour obtenir un enseignant par son ID
 * @param {number} id - ID de l'enseignant
 * @returns {Object|null} Enseignant trouvé ou null
 */
export const getEnseignantById = (id) => {
  return mockEnseignants.find(ens => ens.id === id) || null;
};

/**
 * Fonction pour obtenir les enseignants par matière
 * @param {string} matiere - Nom de la matière
 * @returns {Array} Liste des enseignants enseignant cette matière
 */
export const getEnseignantsByMatiere = (matiere) => {
  return mockEnseignants.filter(ens => 
    ens.matieres.includes(matiere)
  );
};
