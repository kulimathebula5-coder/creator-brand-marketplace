import React from 'react';
import { Link } from 'react-router-dom';

export default function Dashboard({ userType }) {
  const creatorStats = [
    { label: 'Available Campaigns', value: '24', icon: '📢' },
    { label: 'Earnings This Month', value: '$3,450', icon: '💰' },
    { label: 'Active Campaigns', value: '5', icon: '⚡' },
    { label: 'Total Followers', value: '125K', icon: '👥' },
  ];

  const brandStats = [
    { label: 'Active Campaigns', value: '8', icon: '📊' },
    { label: 'Total Spent', value: '$15,230', icon: '💸' },
    { label: 'Creators Engaged', value: '42', icon: '🤝' },
    { label: 'Campaign ROI', value: '340%', icon: '📈' },
  ];

  const stats = userType === 'creator' ? creatorStats : brandStats;

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Hero Section */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-4 text-gray-800">
          {userType === 'creator' 
            ? '🌟 Welcome Back, Creator!' 
            : '🏢 Welcome Back, Brand!'}
        </h1>
        <p className="text-xl text-gray-600">
          {userType === 'creator'
            ? 'Find amazing brand partnerships and grow your income'
            : 'Connect with talented creators and grow your brand'}
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {stats.map((stat, idx) => (
          <div key={idx} className="card">
            <div className="text-4xl mb-2">{stat.icon}</div>
            <p className="text-gray-600 text-sm">{stat.label}</p>
            <p className="text-3xl font-bold text-primary mt-2">{stat.value}</p>
          </div>
        ))}
      </div>

      {/* Action Buttons */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        {userType === 'creator' ? (
          <>
            <Link to="/campaigns" className="card hover:shadow-xl cursor-pointer">
              <div className="text-5xl mb-4">🎯</div>
              <h3 className="text-xl font-bold mb-2">Find Campaigns</h3>
              <p className="text-gray-600">Browse available brand partnerships</p>
            </Link>
            <div className="card">
              <div className="text-5xl mb-4">📊</div>
              <h3 className="text-xl font-bold mb-2">My Performance</h3>
              <p className="text-gray-600">Track your earnings and engagement</p>
            </div>
          </>
        ) : (
          <>
            <div className="card">
              <div className="text-5xl mb-4">➕</div>
              <h3 className="text-xl font-bold mb-2">Create Campaign</h3>
              <p className="text-gray-600">Launch a new creator partnership</p>
            </div>
            <Link to="/campaigns" className="card hover:shadow-xl cursor-pointer">
              <div className="text-5xl mb-4">👥</div>
              <h3 className="text-xl font-bold mb-2">Find Creators</h3>
              <p className="text-gray-600">Search and connect with creators</p>
            </Link>
          </>
        )}
      </div>

      {/* Recent Activity */}
      <div className="card">
        <h2 className="text-2xl font-bold mb-6">Recent Activity</h2>
        <div className="space-y-4">
          {[1, 2, 3].map((item) => (
            <div key={item} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div>
                <p className="font-semibold text-gray-800">Campaign Activity #{item}</p>
                <p className="text-sm text-gray-600">Updated 2 hours ago</p>
              </div>
              <span className="text-primary font-semibold">View →</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
