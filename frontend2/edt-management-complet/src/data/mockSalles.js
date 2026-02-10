/**
 * Données mockées pour les salles de cours
 * Ces données simulent une base de données de salles
 */

export const mockSalles = [
  {
    id: 1,
    nom: 'Amphi A',
    batiment: 'Bâtiment Principal',
    etage: 'RDC',
    capacite: 200,
    type: 'Amphithéâtre',
    // Équipements disponibles dans la salle
    equipements: [
      'Vidéoprojecteur',
      'Micro',
      'Tableau blanc',
      'Écran',
      'Connexion Internet',
      'Climatisation'
    ],
    // Disponibilité de la salle
    disponible: true,
    // Notes ou remarques sur la salle
    remarques: 'Salle idéale pour les cours magistraux'
  },
  {
    id: 2,
    nom: 'Salle TP 1',
    batiment: 'Bâtiment Informatique',
    etage: '1er étage',
    capacite: 30,
    type: 'Salle TP Informatique',
    equipements: [
      '30 Ordinateurs',
      'Vidéoprojecteur',
      'Tableau blanc',
      'Connexion Internet',
      'Logiciels de développement'
    ],
    disponible: true,
    remarques: 'Ordinateurs équipés de tous les logiciels de programmation'
  },
  {
    id: 3,
    nom: 'Salle TP 2',
    batiment: 'Bâtiment Informatique',
    etage: '1er étage',
    capacite: 30,
    type: 'Salle TP Informatique',
    equipements: [
      '30 Ordinateurs',
      'Vidéoprojecteur',
      'Tableau blanc',
      'Connexion Internet',
      'Logiciels de développement'
    ],
    disponible: true,
    remarques: 'Identique à la salle TP 1'
  },
  {
    id: 4,
    nom: 'Salle TD 101',
    batiment: 'Bâtiment Principal',
    etage: '1er étage',
    capacite: 40,
    type: 'Salle TD',
    equipements: [
      'Vidéoprojecteur',
      'Tableau blanc',
      'Écran',
      'Connexion Internet'
    ],
    disponible: true,
    remarques: 'Salle pour travaux dirigés'
  },
  {
    id: 5,
    nom: 'Salle TD 102',
    batiment: 'Bâtiment Principal',
    etage: '1er étage',
    capacite: 40,
    type: 'Salle TD',
    equipements: [
      'Vidéoprojecteur',
      'Tableau blanc',
      'Écran',
      'Connexion Internet'
    ],
    disponible: true,
    remarques: 'Salle pour travaux dirigés'
  },
  {
    id: 6,
    nom: 'Salle TD 201',
    batiment: 'Bâtiment Principal',
    etage: '2ème étage',
    capacite: 35,
    type: 'Salle TD',
    equipements: [
      'Vidéoprojecteur',
      'Tableau blanc',
      'Connexion Internet'
    ],
    disponible: true,
    remarques: ''
  },
  {
    id: 7,
    nom: 'Amphi B',
    batiment: 'Bâtiment Principal',
    etage: 'RDC',
    capacite: 150,
    type: 'Amphithéâtre',
    equipements: [
      'Vidéoprojecteur',
      'Micro',
      'Tableau blanc',
      'Écran',
      'Connexion Internet',
      'Climatisation'
    ],
    disponible: true,
    remarques: 'Amphi rénové récemment'
  },
  {
    id: 8,
    nom: 'Lab Réseaux',
    batiment: 'Bâtiment Informatique',
    etage: '2ème étage',
    capacite: 20,
    type: 'Laboratoire',
    equipements: [
      '20 Ordinateurs',
      'Équipements réseaux (routeurs, switches)',
      'Vidéoprojecteur',
      'Tableau blanc',
      'Connexion Internet'
    ],
    disponible: true,
    remarques: 'Laboratoire spécialisé pour les cours de réseaux'
  },
  {
    id: 9,
    nom: 'Salle Projet',
    batiment: 'Bâtiment Informatique',
    etage: 'RDC',
    capacite: 25,
    type: 'Salle de Projet',
    equipements: [
      'Tables modulables',
      'Vidéoprojecteur',
      'Tableau blanc',
      'Connexion Internet',
      'Prises électriques nombreuses'
    ],
    disponible: true,
    remarques: 'Salle adaptée pour le travail en groupe'
  },
  {
    id: 10,
    nom: 'Salle Conférence',
    batiment: 'Bâtiment Principal',
    etage: 'RDC',
    capacite: 80,
    type: 'Salle de conférence',
    equipements: [
      'Vidéoprojecteur',
      'Micro',
      'Écran',
      'Système audio',
      'Visioconférence',
      'Connexion Internet',
      'Climatisation'
    ],
    disponible: true,
    remarques: 'Salle équipée pour les conférences et séminaires'
  }
];

/**
 * Fonction pour obtenir toutes les salles
 * @returns {Array} Liste des salles
 */
export const getAllSalles = () => {
  return mockSalles;
};

/**
 * Fonction pour obtenir une salle par son ID
 * @param {number} id - ID de la salle
 * @returns {Object|null} Salle trouvée ou null
 */
export const getSalleById = (id) => {
  return mockSalles.find(salle => salle.id === id) || null;
};

/**
 * Fonction pour obtenir les salles par type
 * @param {string} type - Type de salle
 * @returns {Array} Liste des salles du type spécifié
 */
export const getSallesByType = (type) => {
  return mockSalles.filter(salle => salle.type === type);
};

/**
 * Fonction pour obtenir les salles avec une capacité minimale
 * @param {number} capaciteMin - Capacité minimale requise
 * @returns {Array} Liste des salles ayant au moins cette capacité
 */
export const getSallesByCapacite = (capaciteMin) => {
  return mockSalles.filter(salle => salle.capacite >= capaciteMin);
};

/**
 * Fonction pour obtenir les salles disposant d'un équipement spécifique
 * @param {string} equipement - Nom de l'équipement
 * @returns {Array} Liste des salles disposant de cet équipement
 */
export const getSallesByEquipement = (equipement) => {
  return mockSalles.filter(salle => 
    salle.equipements.includes(equipement)
  );
};
