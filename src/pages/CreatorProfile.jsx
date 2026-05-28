import React from 'react';

export default function CreatorProfile() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="card mb-8">
        <div className="flex items-start gap-6 mb-8">
          <div className="text-7xl">⭐</div>
          <div className="flex-1">
            <h1 className="text-3xl font-bold mb-2">Alex Creator</h1>
            <p className="text-gray-600 mb-4">@alexcreator • Fashion & Lifestyle</p>
            <div className="flex gap-6">
              <div>
                <p className="text-gray-600 text-sm">Followers</p>
                <p className="text-2xl font-bold">125K</p>
              </div>
              <div>
                <p className="text-gray-600 text-sm">Engagement Rate</p>
                <p className="text-2xl font-bold">4.2%</p>
              </div>
              <div>
                <p className="text-gray-600 text-sm">Campaigns Completed</p>
                <p className="text-2xl font-bold">18</p>
              </div>
            </div>
          </div>
        </div>

        <p className="text-gray-700 mb-6">
          Passionate about fashion, travel, and lifestyle content. Creating authentic stories that inspire millions.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4 bg-gray-50 rounded-lg">
          <div>
            <p className="text-gray-600 text-sm">Instagram</p>
            <p className="font-bold">125K</p>
          </div>
          <div>
            <p className="text-gray-600 text-sm">TikTok</p>
            <p className="font-bold">89K</p>
          </div>
          <div>
            <p className="text-gray-600 text-sm">YouTube</p>
            <p className="font-bold">45K</p>
          </div>
          <div>
            <p className="text-gray-600 text-sm">Avg Reach</p>
            <p className="font-bold">50K</p>
          </div>
        </div>
      </div>

      <div className="card">
        <h2 className="text-2xl font-bold mb-4">Recent Campaigns</h2>
        <div className="space-y-4">
          {[1, 2, 3].map((item) => (
            <div key={item} className="p-4 bg-gray-50 rounded-lg">
              <p className="font-bold text-gray-800">Nike Summer Collection</p>
              <p className="text-gray-600 text-sm">Completed • $5,000 earned</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
