import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Dashboard from './pages/Dashboard';
import Campaigns from './pages/Campaigns';
import CampaignDetail from './pages/CampaignDetail';
import CreatorProfile from './pages/CreatorProfile';
import BrandProfile from './pages/BrandProfile';
import Login from './pages/Login';
import './index.css';

function App() {
  const [userType, setUserType] = useState(localStorage.getItem('userType') || null);
  const [isAuthenticated, setIsAuthenticated] = useState(!!localStorage.getItem('token'));
  
  // Apply premium theme
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    document.documentElement.style.colorScheme = 'dark';
    // Add smooth transitions
    const style = document.createElement('style');
    style.textContent = `
      * { transition: background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease; }
      html { scroll-behavior: smooth; }
    `;
    document.head.appendChild(style);
  }, []);

  const handleLogin = (type) => {
    setUserType(type);
    setIsAuthenticated(true);
    localStorage.setItem('userType', type);
    localStorage.setItem('token', 'mock-token-' + Date.now());
  };

  const handleLogout = () => {
    setUserType(null);
    setIsAuthenticated(false);
    localStorage.removeItem('userType');
    localStorage.removeItem('token');
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center">
        <Login onLogin={handleLogin} />
      </div>
    );
  }

  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
        <Navigation userType={userType} onLogout={handleLogout} />
        <main className="transition-all duration-300 ease-in-out">
          <Routes>
            <Route path="/" element={<Dashboard userType={userType} />} />
            <Route path="/campaigns" element={<Campaigns userType={userType} />} />
            <Route path="/campaign/:id" element={<CampaignDetail userType={userType} />} />
            <Route path="/creator/:id" element={<CreatorProfile />} />
            <Route path="/brand/:id" element={<BrandProfile />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
