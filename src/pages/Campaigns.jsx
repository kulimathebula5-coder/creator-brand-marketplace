import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Campaigns({ userType }) {
  const [filter, setFilter] = useState('all');

  // Mock creator profile (for eligibility checking)
  const creatorProfile = userType === 'creator' ? {
    followers: 45000,
    watchHours: 1250,
    accountAgeDays: 180,
    engagementRate: 4.8,
  } : null;

  // Eligibility requirements
  const eligibilityRequirements = {
    followers: 1000,
    watchHours: 40,
    accountAgeDays: 30,
    engagementRate: 2,
  };

  // Check if creator is eligible
  const isCreatorEligible = creatorProfile && 
    creatorProfile.followers >= eligibilityRequirements.followers &&
    creatorProfile.watchHours >= eligibilityRequirements.watchHours &&
    creatorProfile.accountAgeDays >= eligibilityRequirements.accountAgeDays &&
    creatorProfile.engagementRate >= eligibilityRequirements.engagementRate;

  const campaigns = [
    {
      id: 1,
      brand: 'Nike',
      title: 'Summer Sneaker Collection',
      budget: '$5,000',
      followers: '50K+',
      category: 'Fashion',
      description: 'Create content featuring our new summer sneaker line',
      deadline: '2026-06-30',
      status: 'open',
    },
    {
      id: 2,
      brand: 'Apple',
      title: 'iPhone 15 Pro Review',
      budget: '$8,000',
      followers: '100K+',
      category: 'Tech',
      description: 'Unboxing and review of iPhone 15 Pro',
      deadline: '2026-06-15',
      status: 'open',
    },
    {
      id: 3,
      brand: 'Starbucks',
      title: 'Coffee Shop Vibes',
      budget: '$2,500',
      followers: '10K+',
      category: 'Lifestyle',
      description: 'Share your favorite Starbucks moments',
      deadline: '2026-07-10',
      status: 'open',
    },
    {
      id: 4,
      brand: 'Sony',
      title: 'Gaming Setup Showcase',
      budget: '$6,000',
      followers: '75K+',
      category: 'Gaming',
      description: 'Feature our latest gaming console',
      deadline: '2026-06-20',
      status: 'open',
    },
  ];

  const categories = ['All', 'Fashion', 'Tech', 'Lifestyle', 'Gaming', 'Beauty'];
  const filteredCampaigns = filter === 'all' ? campaigns : campaigns.filter(c => c.category.toLowerCase() === filter);

  // Brand view
  if (userType === 'brand') {
    return (
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">📊 My Campaigns</h1>
          <button className="btn-primary">+ Create Campaign</button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {campaigns.map((campaign) => (
            <Link
              key={campaign.id}
              to={`/campaign/${campaign.id}`}
              className="card hover:shadow-xl cursor-pointer transform hover:scale-105 transition"
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <p className="text-sm text-gray-600 font-semibold">{campaign.brand}</p>
                  <h3 className="text-xl font-bold text-gray-800">{campaign.title}</h3>
                </div>
                <span className="text-2xl">{campaign.category === 'Fashion' ? '👗' : campaign.category === 'Tech' ? '💻' : campaign.category === 'Gaming' ? '🎮' : '☕'}</span>
              </div>

              <p className="text-gray-600 mb-4 text-sm">{campaign.description}</p>

              <div className="space-y-2 mb-4 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Budget:</span>
                  <span className="font-bold text-primary">{campaign.budget}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Min Followers:</span>
                  <span className="font-bold">{campaign.followers}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Deadline:</span>
                  <span className="font-bold">{campaign.deadline}</span>
                </div>
              </div>

              <button className="w-full btn-primary">View Details</button>
            </Link>
          ))}
        </div>
      </div>
    );
  }

  // Creator view
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">🎯 Available Campaigns</h1>

      {/* Eligibility Status Banner */}
      {!isCreatorEligible && (
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-8 rounded">
          <div className="flex">
            <div className="flex-shrink-0">
              <span className="text-2xl">⏳</span>
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium text-yellow-800">
                You don't meet all eligibility requirements yet
              </p>
              <p className="text-sm text-yellow-700 mt-1">
                Meet the requirements to unlock brand partnership campaigns.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Eligibility Requirements */}
      {!isCreatorEligible && (
        <div className="card mb-8">
          <h2 className="text-xl font-bold mb-4">📋 Eligibility Requirements</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className={`p-4 rounded-lg border-l-4 ${creatorProfile.followers >= eligibilityRequirements.followers ? 'border-green-400 bg-green-50' : 'border-red-400 bg-red-50'}`}>
              <p className="text-sm font-semibold mb-1">👥 Followers</p>
              <p className="text-2xl font-bold">{creatorProfile.followers.toLocaleString()}</p>
              <p className="text-xs text-gray-600">Required: {eligibilityRequirements.followers.toLocaleString()}+</p>
              <p className="text-xs mt-1">{creatorProfile.followers >= eligibilityRequirements.followers ? '✅ Met' : `❌ Need ${(eligibilityRequirements.followers - creatorProfile.followers).toLocaleString()} more`}</p>
            </div>
            <div className={`p-4 rounded-lg border-l-4 ${creatorProfile.watchHours >= eligibilityRequirements.watchHours ? 'border-green-400 bg-green-50' : 'border-red-400 bg-red-50'}`}>
              <p className="text-sm font-semibold mb-1">👁️ Watch Hours</p>
              <p className="text-2xl font-bold">{creatorProfile.watchHours.toLocaleString()}</p>
              <p className="text-xs text-gray-600">Required: {eligibilityRequirements.watchHours}+</p>
              <p className="text-xs mt-1">{creatorProfile.watchHours >= eligibilityRequirements.watchHours ? '✅ Met' : `❌ Need ${(eligibilityRequirements.watchHours - creatorProfile.watchHours).toLocaleString()} more`}</p>
            </div>
            <div className={`p-4 rounded-lg border-l-4 ${creatorProfile.accountAgeDays >= eligibilityRequirements.accountAgeDays ? 'border-green-400 bg-green-50' : 'border-red-400 bg-red-50'}`}>
              <p className="text-sm font-semibold mb-1">📅 Account Age</p>
              <p className="text-2xl font-bold">{creatorProfile.accountAgeDays} days</p>
              <p className="text-xs text-gray-600">Required: {eligibilityRequirements.accountAgeDays}+ days</p>
              <p className="text-xs mt-1">{creatorProfile.accountAgeDays >= eligibilityRequirements.accountAgeDays ? '✅ Met' : `❌ Need ${(eligibilityRequirements.accountAgeDays - creatorProfile.accountAgeDays)} more days`}</p>
            </div>
            <div className={`p-4 rounded-lg border-l-4 ${creatorProfile.engagementRate >= eligibilityRequirements.engagementRate ? 'border-green-400 bg-green-50' : 'border-red-400 bg-red-50'}`}>
              <p className="text-sm font-semibold mb-1">⚡ Engagement Rate</p>
              <p className="text-2xl font-bold">{creatorProfile.engagementRate}%</p>
              <p className="text-xs text-gray-600">Required: {eligibilityRequirements.engagementRate}%+</p>
              <p className="text-xs mt-1">{creatorProfile.engagementRate >= eligibilityRequirements.engagementRate ? '✅ Met' : `❌ Need ${(eligibilityRequirements.engagementRate - creatorProfile.engagementRate).toFixed(1)}% more`}</p>
            </div>
          </div>
          <div className="p-4 bg-blue-50 rounded-lg">
            <p className="text-sm text-blue-900">
              <strong>💡 Tip:</strong> Create quality content, engage with your audience, and grow your followers to meet all requirements!
            </p>
          </div>
        </div>
      )}

      {/* Filter */}
      <div className="flex gap-2 mb-8 overflow-x-auto pb-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat.toLowerCase())}
            className={`px-4 py-2 rounded-full whitespace-nowrap transition ${
              filter === cat.toLowerCase()
                ? 'bg-primary text-white'
                : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Campaigns Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCampaigns.map((campaign) => (
          <div key={campaign.id} className="card hover:shadow-xl transition">
            <div className="flex justify-between items-start mb-4">
              <div>
                <p className="text-sm text-gray-600 font-semibold">{campaign.brand}</p>
                <h3 className="text-xl font-bold text-gray-800">{campaign.title}</h3>
              </div>
              <span className="text-2xl">{campaign.category === 'Fashion' ? '👗' : campaign.category === 'Tech' ? '💻' : campaign.category === 'Gaming' ? '🎮' : '☕'}</span>
            </div>

            <p className="text-gray-600 mb-4 text-sm">{campaign.description}</p>

            <div className="space-y-2 mb-4 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600">Budget:</span>
                <span className="font-bold text-primary">{campaign.budget}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Min Followers:</span>
                <span className="font-bold">{campaign.followers}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Deadline:</span>
                <span className="font-bold">{campaign.deadline}</span>
              </div>
            </div>

            {isCreatorEligible ? (
              <Link to={`/campaign/${campaign.id}`} className="w-full btn-primary text-center">
                Apply Now
              </Link>
            ) : (
              <button disabled className="w-full btn-secondary opacity-50 cursor-not-allowed">
                🔒 Locked - Meet Requirements
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
