/**
 * Données mockées pour les cours
 * Ces données simulent une base de données de cours
 */

export const mockCours = [
  {
    id: 1,
    code: 'INF101',
    nom: 'Programmation Web',
    niveau: 'L3',
    departement: 'Informatique',
    // Type de cours : CM (Cours Magistral), TD (Travaux Dirigés), TP (Travaux Pratiques)
    type: 'CM',
    // Durée en heures
    duree: 2,
    // Nombre d'étudiants inscrits
    nbEtudiants: 120,
    // ID de l'enseignant assigné
    enseignantId: 1,
    // ID de la salle assignée
    salleId: 1,
    // Couleur pour l'affichage dans l'emploi du temps
    couleur: '#3B82F6',
    // Semestre (1 ou 2)
    semestre: 1,
    // Nombre d'heures par semaine
    heuresParSemaine: 2,
    // Description du cours
    description: 'Introduction au développement web moderne avec HTML, CSS et JavaScript'
  },
  {
    id: 2,
    code: 'INF101-TD',
    nom: 'Programmation Web - TD',
    niveau: 'L3',
    departement: 'Informatique',
    type: 'TD',
    duree: 2,
    nbEtudiants: 40,
    enseignantId: 1,
    salleId: 4,
    couleur: '#3B82F6',
    semestre: 1,
    heuresParSemaine: 2,
    description: 'Travaux dirigés de programmation web'
  },
  {
    id: 3,
    code: 'INF102',
    nom: 'Base de Données',
    niveau: 'L3',
    departement: 'Informatique',
    type: 'CM',
    duree: 2,
    nbEtudiants: 120,
    enseignantId: 1,
    salleId: 1,
    couleur: '#10B981',
    semestre: 1,
    heuresParSemaine: 2,
    description: 'Conception et gestion de bases de données relationnelles'
  },
  {
    id: 4,
    code: 'INF102-TP',
    nom: 'Base de Données - TP',
    niveau: 'L3',
    departement: 'Informatique',
    type: 'TP',
    duree: 2,
    nbEtudiants: 30,
    enseignantId: 1,
    salleId: 2,
    couleur: '#10B981',
    semestre: 1,
    heuresParSemaine: 2,
    description: 'Travaux pratiques sur les systèmes de gestion de bases de données'
  },
  {
    id: 5,
    code: 'INF201',
    nom: 'Algorithmes',
    niveau: 'L3',
    departement: 'Informatique',
    type: 'CM',
    duree: 2,
    nbEtudiants: 120,
    enseignantId: 2,
    salleId: 7,
    couleur: '#F59E0B',
    semestre: 1,
    heuresParSemaine: 2,
    description: 'Étude des algorithmes fondamentaux et de leur complexité'
  },
  {
    id: 6,
    code: 'INF201-TD',
    nom: 'Algorithmes - TD',
    niveau: 'L3',
    departement: 'Informatique',
    type: 'TD',
    duree: 2,
    nbEtudiants: 40,
    enseignantId: 2,
    salleId: 5,
    couleur: '#F59E0B',
    semestre: 1,
    heuresParSemaine: 2,
    description: 'Exercices et applications sur les algorithmes'
  },
  {
    id: 7,
    code: 'INF202',
    nom: 'Structures de Données',
    niveau: 'L3',
    departement: 'Informatique',
    type: 'CM',
    duree: 2,
    nbEtudiants: 120,
    enseignantId: 2,
    salleId: 7,
    couleur: '#EF4444',
    semestre: 1,
    heuresParSemaine: 2,
    description: 'Étude des structures de données classiques'
  },
  {
    id: 8,
    code: 'INF301',
    nom: 'Réseaux',
    niveau: 'L3',
    departement: 'Informatique',
    type: 'CM',
    duree: 2,
    nbEtudiants: 120,
    enseignantId: 3,
    salleId: 1,
    couleur: '#8B5CF6',
    semestre: 1,
    heuresParSemaine: 2,
    description: 'Introduction aux réseaux informatiques et protocoles'
  },
  {
    id: 9,
    code: 'INF301-TP',
    nom: 'Réseaux - TP',
    niveau: 'L3',
    departement: 'Informatique',
    type: 'TP',
    duree: 2,
    nbEtudiants: 20,
    enseignantId: 3,
    salleId: 8,
    couleur: '#8B5CF6',
    semestre: 1,
    heuresParSemaine: 2,
    description: 'Travaux pratiques sur la configuration réseau'
  },
  {
    id: 10,
    code: 'INF302',
    nom: 'Sécurité Informatique',
    niveau: 'L3',
    departement: 'Informatique',
    type: 'CM',
    duree: 2,
    nbEtudiants: 120,
    enseignantId: 3,
    salleId: 7,
    couleur: '#EC4899',
    semestre: 1,
    heuresParSemaine: 2,
    description: 'Principes de la sécurité informatique et cryptographie'
  },
  {
    id: 11,
    code: 'INF401',
    nom: 'Intelligence Artificielle',
    niveau: 'L3',
    departement: 'Informatique',
    type: 'CM',
    duree: 2,
    nbEtudiants: 80,
    enseignantId: 4,
    salleId: 7,
    couleur: '#06B6D4',
    semestre: 2,
    heuresParSemaine: 2,
    description: 'Introduction à l\'intelligence artificielle'
  },
  {
    id: 12,
    code: 'INF402',
    nom: 'Machine Learning',
    niveau: 'L3',
    departement: 'Informatique',
    type: 'CM',
    duree: 2,
    nbEtudiants: 80,
    enseignantId: 4,
    salleId: 7,
    couleur: '#14B8A6',
    semestre: 2,
    heuresParSemaine: 2,
    description: 'Apprentissage automatique et ses applications'
  },
  {
    id: 13,
    code: 'INF501',
    nom: 'Gestion de Projet',
    niveau: 'L3',
    departement: 'Informatique',
    type: 'CM',
    duree: 2,
    nbEtudiants: 120,
    enseignantId: 5,
    salleId: 1,
    couleur: '#F97316',
    semestre: 2,
    heuresParSemaine: 2,
    description: 'Méthodologies de gestion de projets informatiques'
  },
  {
    id: 14,
    code: 'INF501-TD',
    nom: 'Gestion de Projet - TD',
    niveau: 'L3',
    departement: 'Informatique',
    type: 'TD',
    duree: 2,
    nbEtudiants: 25,
    enseignantId: 5,
    salleId: 9,
    couleur: '#F97316',
    semestre: 2,
    heuresParSemaine: 2,
    description: 'Mise en pratique de la gestion de projet'
  },
  {
    id: 15,
    code: 'INF502',
    nom: 'UML',
    niveau: 'L3',
    departement: 'Informatique',
    type: 'CM',
    duree: 2,
    nbEtudiants: 120,
    enseignantId: 5,
    salleId: 7,
    couleur: '#84CC16',
    semestre: 2,
    heuresParSemaine: 2,
    description: 'Modélisation objet avec UML'
  }
];

/**
 * Fonction pour obtenir tous les cours
 * @returns {Array} Liste des cours
 */
export const getAllCours = () => {
  return mockCours;
};

/**
 * Fonction pour obtenir un cours par son ID
 * @param {number} id - ID du cours
 * @returns {Object|null} Cours trouvé ou null
 */
export const getCoursById = (id) => {
  return mockCours.find(cours => cours.id === id) || null;
};

/**
 * Fonction pour obtenir les cours d'un enseignant
 * @param {number} enseignantId - ID de l'enseignant
 * @returns {Array} Liste des cours de l'enseignant
 */
export const getCoursByEnseignant = (enseignantId) => {
  return mockCours.filter(cours => cours.enseignantId === enseignantId);
};

/**
 * Fonction pour obtenir les cours par type
 * @param {string} type - Type de cours (CM, TD, TP)
 * @returns {Array} Liste des cours du type spécifié
 */
export const getCoursByType = (type) => {
  return mockCours.filter(cours => cours.type === type);
};

/**
 * Fonction pour obtenir les cours par niveau
 * @param {string} niveau - Niveau (L1, L2, L3, M1, M2)
 * @returns {Array} Liste des cours du niveau spécifié
 */
export const getCoursByNiveau = (niveau) => {
  return mockCours.filter(cours => cours.niveau === niveau);
};
