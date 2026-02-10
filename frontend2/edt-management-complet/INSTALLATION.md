# Guide d'Installation et de Lancement

## 📋 Prérequis

Avant de commencer, assurez-vous d'avoir installé :

- **Node.js** (version 16 ou supérieure) - [Télécharger ici](https://nodejs.org/)
- **npm** (généralement inclus avec Node.js) ou **yarn**
- Un éditeur de code (VS Code recommandé)
- Un navigateur web moderne (Chrome, Firefox, Edge, Safari)

### Vérifier les installations

Ouvrez un terminal et exécutez :

```bash
node --version
npm --version
```

Vous devriez voir les numéros de version affichés.

## 🚀 Installation

### Étape 1 : Télécharger le projet

Si vous avez reçu le projet en archive ZIP :
1. Extraire tous les fichiers dans un dossier de votre choix
2. Ouvrir un terminal dans ce dossier

### Étape 2 : Installer les dépendances

Dans le terminal, à la racine du projet (dossier `edt-management`), exécutez :

```bash
npm install
```

Cette commande va :
- Télécharger toutes les bibliothèques nécessaires
- Créer un dossier `node_modules` (peut prendre quelques minutes)
- Préparer l'environnement de développement

⏱️ **Temps estimé** : 2-5 minutes selon votre connexion internet

### Étape 3 : Lancer l'application

Une fois l'installation terminée, lancez l'application :

```bash
npm start
```

Cette commande va :
- Démarrer le serveur de développement
- Compiler l'application React
- Ouvrir automatiquement votre navigateur

🌐 **URL de l'application** : http://localhost:3000

## ✅ Vérification

Si tout fonctionne correctement, vous devriez voir :

1. Le terminal afficher : `Compiled successfully!`
2. Votre navigateur s'ouvrir automatiquement
3. L'application afficher le tableau de bord avec :
   - Menu latéral à gauche (bleu)
   - En-tête en haut
   - Tableau de bord avec statistiques
   - Données d'exemple (enseignants, cours, salles)

## 🔧 Commandes Utiles

### Démarrer l'application
```bash
npm start
```

### Compiler pour la production
```bash
npm run build
```
Crée un dossier `build` avec les fichiers optimisés pour le déploiement.

### Lancer les tests
```bash
npm test
```

### Arrêter l'application
Dans le terminal où l'application tourne, appuyez sur `Ctrl + C` (Windows/Linux) ou `Cmd + C` (Mac)

## 📁 Structure du Projet

```
edt-management/
├── node_modules/          # Dépendances (généré automatiquement)
├── public/                # Fichiers publics statiques
│   └── index.html         # Page HTML principale
├── src/                   # Code source de l'application
│   ├── components/        # Composants React réutilisables
│   │   ├── common/        # Composants communs (Button, etc.)
│   │   └── layout/        # Layout (Header, Sidebar)
│   ├── context/           # Context API (gestion d'état global)
│   ├── data/              # Données mockées
│   ├── pages/             # Pages de l'application
│   ├── styles/            # Fichiers CSS
│   ├── App.js             # Composant principal
│   └── index.js           # Point d'entrée
├── package.json           # Configuration npm et dépendances
└── README.md              # Documentation du projet
```

## 🎨 Fonctionnalités Disponibles

### 1. Tableau de Bord
- Vue d'ensemble des statistiques
- Activités récentes
- Actions rapides

### 2. Gestion des Enseignants
- Liste complète des enseignants
- Informations détaillées (contact, matières, disponibilités)
- Recherche et filtrage
- Ajout/modification/suppression (interface prête)

### 3. Gestion des Cours
- Tableau des cours avec détails
- Filtrage par type (CM, TD, TP)
- Association enseignant-cours

### 4. Gestion des Salles
- Cartes visuelles des salles
- Capacité et équipements
- Filtrage par type
- Statut disponible/occupée

### 5. Emploi du Temps
- Grille hebdomadaire visuelle
- Séances planifiées par jour et créneau
- Codes couleur par cours
- Détails des séances (enseignant, salle, groupe)
- Export PDF (à finaliser)
- Génération automatique (à finaliser)

### 6. Paramètres
- Configuration du profil utilisateur
- Gestion des notifications
- Thème de l'interface
- Gestion des données
- Sécurité

## 💾 Stockage des Données

L'application utilise le **localStorage** du navigateur pour persister les données.

### Réinitialiser les données

Si vous voulez revenir aux données initiales :

1. Ouvrir la Console du navigateur (F12)
2. Aller dans l'onglet "Application" ou "Storage"
3. Cliquer sur "Local Storage" → "http://localhost:3000"
4. Cliquer sur "Clear All"
5. Actualiser la page (F5)

OU utiliser le bouton "Réinitialiser toutes les données" dans les Paramètres.

## ⚠️ Résolution de Problèmes

### Erreur : "npm not found" ou "node not found"
**Solution** : Node.js n'est pas installé ou pas dans le PATH. Réinstallez Node.js.

### Erreur : "Port 3000 is already in use"
**Solution** : Un autre programme utilise le port 3000.
- Option 1 : Arrêter l'autre programme
- Option 2 : Lancer sur un autre port : `PORT=3001 npm start`

### L'application ne se charge pas dans le navigateur
**Solutions** :
1. Vérifier que le terminal n'affiche pas d'erreurs
2. Essayer d'ouvrir manuellement : http://localhost:3000
3. Vider le cache du navigateur (Ctrl+Shift+R)

### Les modifications ne s'affichent pas
**Solutions** :
1. Actualiser la page (F5)
2. Vider le cache du navigateur
3. Redémarrer le serveur de développement (Ctrl+C puis npm start)

### Erreur lors de l'installation des dépendances
**Solutions** :
1. Supprimer le dossier `node_modules` et `package-lock.json`
2. Réexécuter `npm install`
3. Si le problème persiste, essayer avec `npm install --legacy-peer-deps`

## 🔄 Mise à Jour du Projet

Pour mettre à jour les dépendances :

```bash
npm update
```

## 📱 Navigation dans l'Application

### Menu Principal (Sidebar)
- **Tableau de Bord** : Vue d'ensemble
- **Enseignants** : Gestion des enseignants
- **Cours** : Gestion des cours
- **Salles** : Gestion des salles
- **Emploi du Temps** : Planification et visualisation
- **Paramètres** : Configuration

### Notifications
Cliquez sur l'icône 🔔 en haut à droite pour voir les notifications.

### Profil Utilisateur
Cliquez sur votre nom en haut à droite pour accéder au profil.

## 🎓 Pour les Développeurs

### Ajouter une nouvelle page

1. Créer un fichier dans `src/pages/` (ex: `MaNouvellePage.js`)
2. Ajouter la route dans `src/App.js`
3. Ajouter le lien dans `src/components/layout/Sidebar.js`

### Modifier les données mockées

Les données se trouvent dans `src/data/` :
- `mockEnseignants.js` : Enseignants
- `mockCours.js` : Cours
- `mockSalles.js` : Salles
- `mockEmploiDuTemps.js` : Séances planifiées

### Ajouter une fonctionnalité

1. Utiliser le Context (`useAppContext`) pour accéder aux données
2. Utiliser les fonctions fournies (`ajouterEnseignant`, `modifierCours`, etc.)
3. Les modifications sont automatiquement sauvegardées dans localStorage

## 📞 Support

Pour toute question ou problème :
- Email : nan.messe@univ-tlse2.fr
- Documentation React : https://react.dev
- Documentation Node.js : https://nodejs.org

## 📄 Licence

Projet académique - Université Toulouse 2 - 2025

---

**Bon développement ! 🚀**
