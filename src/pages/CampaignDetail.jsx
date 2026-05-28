import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

export default function CampaignDetail({ userType }) {
  const { id } = useParams();
  const [applied, setApplied] = useState(false);

  const campaign = {
    id,
    brand: 'Nike',
    title: 'Summer Sneaker Collection',
    budget: '$5,000',
    followers: '50K+',
    category: 'Fashion',
    description: 'Create content featuring our new summer sneaker line',
    fullDescription: `We're launching our new summer sneaker collection and need talented creators to help us reach our audience. We're looking for authentic content that showcases the style, comfort, and innovation of our new line.

Requirements:
- Minimum 50K followers
- Engagement rate above 3%
- Experience with fashion/lifestyle content
- Ability to create 3-5 pieces of content
- Content must be posted within 30 days

What we provide:
- $5,000 payment upon completion
- Free product samples
- Exclusive early access to new releases
- Potential for long-term partnership`,
    deadline: '2026-06-30',
    applicants: 24,
    status: 'open',
    deliverables: [
      '1 Instagram Reel (30-60 seconds)',
      '3 Instagram Posts',
      '1 TikTok Video',
      '5 Instagram Stories',
    ],
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="card mb-8">
        <div className="flex justify-between items-start mb-6">
          <div>
            <p className="text-sm text-gray-600 font-semibold mb-2">{campaign.brand}</p>
            <h1 className="text-4xl font-bold text-gray-800">{campaign.title}</h1>
          </div>
          <span className="text-5xl">👗</span>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 p-4 bg-gray-50 rounded-lg">
          <div>
            <p className="text-gray-600 text-sm">Budget</p>
            <p className="text-2xl font-bold text-primary">{campaign.budget}</p>
          </div>
          <div>
            <p className="text-gray-600 text-sm">Min Followers</p>
            <p className="text-2xl font-bold">{campaign.followers}</p>
          </div>
          <div>
            <p className="text-gray-600 text-sm">Deadline</p>
            <p className="text-2xl font-bold">{campaign.deadline}</p>
          </div>
          <div>
            <p className="text-gray-600 text-sm">Applicants</p>
            <p className="text-2xl font-bold">{campaign.applicants}</p>
          </div>
        </div>

        <h2 className="text-2xl font-bold mb-4">About This Campaign</h2>
        <p className="text-gray-700 whitespace-pre-line mb-8">{campaign.fullDescription}</p>

        <h2 className="text-2xl font-bold mb-4">Deliverables</h2>
        <ul className="space-y-2 mb-8">
          {campaign.deliverables.map((item, idx) => (
            <li key={idx} className="flex items-center gap-3">
              <span className="text-primary font-bold">✓</span>
              <span className="text-gray-700">{item}</span>
            </li>
          ))}
        </ul>

        {userType === 'creator' && (
          <button
            onClick={() => setApplied(!applied)}
            className={`w-full py-3 rounded-lg font-bold text-lg transition ${
              applied
                ? 'bg-gray-200 text-gray-800'
                : 'btn-primary bg-gradient-to-r from-primary to-secondary'
            }`}
          >
            {applied ? '✓ Application Sent' : 'Apply for Campaign'}
          </button>
        )}
      </div>

      {/* Brand Info */}
      <div className="card">
        <h2 className="text-2xl font-bold mb-4">About {campaign.brand}</h2>
        <div className="flex items-center gap-4">
          <div className="text-5xl">🏢</div>
          <div>
            <p className="text-gray-700 mb-2">Leading global brand in fashion and lifestyle</p>
            <p className="text-gray-600 text-sm">Verified Partner • 500K+ Creators</p>
          </div>
        </div>
      </div>
    </div>
  );
}
