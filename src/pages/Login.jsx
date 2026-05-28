import React from 'react';

export default function Login({ onLogin }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-2xl p-8 max-w-md w-full">
        <h1 className="text-3xl font-bold text-center mb-2 text-gray-800">CreatorHub</h1>
        <p className="text-center text-gray-600 mb-8">Connect Brands with Creators</p>
        
        <div className="space-y-4">
          <button
            onClick={() => onLogin('creator')}
            className="w-full btn-primary bg-gradient-to-r from-primary to-secondary py-3 text-lg font-semibold"
          >
            🌟 I'm a Creator
          </button>
          
          <button
            onClick={() => onLogin('brand')}
            className="w-full btn-primary bg-gradient-to-r from-secondary to-accent py-3 text-lg font-semibold"
          >
            🏢 I'm a Brand
          </button>
        </div>

        <p className="text-center text-gray-500 text-sm mt-6">
          Demo mode - Click to enter
        </p>
      </div>
    </div>
  );
}
