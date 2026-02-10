# Système Automatisé de Gestion des Emplois du Temps (EDT)

## 📋 Description du Projet

Application React pour la gestion automatisée des emplois du temps des enseignants. Ce système permet de :
- Gérer les disponibilités des enseignants
- Assigner automatiquement les cours aux créneaux horaires
- Gérer les salles et leurs équipements
- Visualiser et modifier les emplois du temps
- Recevoir des notifications pour les modifications
- Exporter les emplois du temps en PDF

## 🏗️ Structure du Projet

```
edt-management/
├── public/
│   ├── index.html
│   └── favicon.ico
├── src/
│   ├── components/          # Composants réutilisables
│   │   ├── common/          # Composants communs (Boutons, Cards, etc.)
│   │   ├── layout/          # Layout (Header, Sidebar, Footer)
│   │   ├── enseignants/     # Composants liés aux enseignants
│   │   ├── cours/           # Composants liés aux cours
│   │   ├── salles/          # Composants liés aux salles
│   │   └── edt/             # Composants de l'emploi du temps
│   ├── context/             # Context API pour la gestion d'état
│   ├── pages/               # Pages principales de l'application
│   ├── services/            # Services et logique métier
│   ├── utils/               # Fonctions utilitaires
│   ├── data/                # Données mockées
│   ├── styles/              # Fichiers CSS
│   ├── App.js               # Composant principal
│   └── index.js             # Point d'entrée
├── package.json
└── README.md
```

## 🚀 Installation

### Prérequis
- Node.js (version 16 ou supérieure)
- npm ou yarn

### Étapes d'installation

1. Cloner le projet ou extraire les fichiers

2. Installer les dépendances :
```bash
npm install
```

3. Lancer l'application en mode développement :
```bash
npm start
```

4. Ouvrir votre navigateur à l'adresse : http://localhost:3000

## 📦 Technologies Utilisées

- **React 18** - Framework JavaScript
- **React Router v6** - Gestion des routes
- **Context API** - Gestion d'état globale
- **Tailwind CSS** - Framework CSS (via classes utilitaires)
- **Lucide React** - Bibliothèque d'icônes
- **jsPDF** - Génération de PDF
- **date-fns** - Manipulation des dates

## 🎯 Fonctionnalités Principales

### 1. Dashboard
- Vue d'ensemble des statistiques
- Accès rapide aux fonctionnalités principales

### 2. Gestion des Enseignants
- Liste complète des enseignants
- Ajout/modification/suppression
- Gestion des disponibilités et préférences
- Assignation des matières

### 3. Gestion des Cours
- Création de cours
- Assignation des enseignants
- Définition des horaires
- Gestion des groupes d'étudiants

### 4. Gestion des Salles
- Liste des salles disponibles
- Capacité et équipements
- Disponibilité en temps réel

### 5. Emploi du Temps
- Visualisation en grille hebdomadaire
- Génération automatique
- Modification manuelle
- Détection des conflits

### 6. Notifications
- Alertes en temps réel
- Historique des notifications
- Notifications de conflits

### 7. Export PDF
- Export individuel ou global
- Mise en page professionnelle
- Impression directe

## 💾 Données Mockées

L'application utilise des données simulées (mock data) pour fonctionner sans backend. Les données sont stockées dans le localStorage du navigateur.

## 🔧 Scripts Disponibles

- `npm start` - Lance l'application en mode développement
- `npm build` - Compile l'application pour la production
- `npm test` - Lance les tests
- `npm eject` - Éjecte la configuration (irréversible)

## 📝 Guide d'Utilisation

### Créer un Enseignant
1. Aller dans "Enseignants"
2. Cliquer sur "Ajouter un enseignant"
3. Remplir le formulaire
4. Définir les disponibilités
5. Enregistrer

### Générer un Emploi du Temps
1. S'assurer que les enseignants, cours et salles sont configurés
2. Aller dans "Emploi du Temps"
3. Cliquer sur "Générer automatiquement"
4. Vérifier et ajuster si nécessaire
5. Valider

### Exporter en PDF
1. Visualiser l'emploi du temps souhaité
2. Cliquer sur "Exporter PDF"
3. Le fichier se télécharge automatiquement

## 🔮 Évolutions Futures

- Intégration avec un vrai backend (API REST)
- Authentification et autorisation
- Multi-établissements
- Application mobile
- Synchronisation calendrier (Google Calendar, Outlook)
- Gestion des absences et remplacements
- Statistiques avancées

## 👥 Auteur

Projet développé pour Mme Nan Messe (nan.messe@univ-tlse2.fr)

## 📄 Licence

Projet académique - Université Toulouse 2
