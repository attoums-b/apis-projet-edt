/**
 * Composant principal App
 * Configure le routage et la structure globale de l'application
 */

import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppProvider } from './context/AppContext';

// Import des composants de layout
import Header from './components/layout/Header';
import Sidebar from './components/layout/Sidebar';

// Import des pages
import Dashboard from './pages/Dashboard';
import Enseignants from './pages/Enseignants';
import Cours from './pages/Cours';
import Salles from './pages/Salles';
import EmploiDuTemps from './pages/EmploiDuTemps';
import Parametres from './pages/Parametres';

// Import des styles
import './styles/App.css';

/**
 * Composant App - Composant racine de l'application
 */
function App() {
  // État pour contrôler l'affichage de la sidebar sur mobile
  const [sidebarOpen, setSidebarOpen] = useState(false);

  /**
   * Bascule l'affichage de la sidebar
   */
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  /**
   * Ferme la sidebar
   */
  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  return (
    // Wrapper du Context Provider pour partager l'état global
    <AppProvider>
      <Router>
        <div className="app-container">
          {/* Menu latéral de navigation */}
          <Sidebar 
            isOpen={sidebarOpen} 
            onClose={closeSidebar} 
          />
          
          {/* Contenu principal */}
          <div className="main-wrapper">
            {/* En-tête fixe */}
            <Header toggleSidebar={toggleSidebar} />
            
            {/* Zone de contenu avec routage */}
            <main className="main-content">
              <Routes>
                {/* Route pour le tableau de bord (page d'accueil) */}
                <Route path="/" element={<Dashboard />} />
                
                {/* Route pour la gestion des enseignants */}
                <Route path="/enseignants" element={<Enseignants />} />
                
                {/* Route pour la gestion des cours */}
                <Route path="/cours" element={<Cours />} />
                
                {/* Route pour la gestion des salles */}
                <Route path="/salles" element={<Salles />} />
                
                {/* Route pour l'emploi du temps */}
                <Route path="/emploi-du-temps" element={<EmploiDuTemps />} />
                
                {/* Route pour les paramètres */}
                <Route path="/parametres" element={<Parametres />} />
                
                {/* Route par défaut - Redirige vers le tableau de bord */}
                <Route path="*" element={<Dashboard />} />
              </Routes>
            </main>
          </div>
        </div>
      </Router>
    </AppProvider>
  );
}

export default App;
