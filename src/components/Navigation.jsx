import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Navigation({ userType, onLogout }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    onLogout();
    navigate('/');
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-primary">
          CreatorHub
        </Link>
        
        <div className="flex gap-6 items-center">
          <Link to="/" className="text-gray-700 hover:text-primary transition">
            Dashboard
          </Link>
          <Link to="/campaigns" className="text-gray-700 hover:text-primary transition">
            {userType === 'brand' ? 'My Campaigns' : 'Opportunities'}
          </Link>
          
          <div className="flex items-center gap-3">
            <span className="text-sm bg-primary text-white px-3 py-1 rounded-full">
              {userType === 'brand' ? '🏢 Brand' : '⭐ Creator'}
            </span>
            <button
              onClick={handleLogout}
              className="btn-secondary"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
