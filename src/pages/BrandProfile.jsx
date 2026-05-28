import React from 'react';

export default function BrandProfile() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="card mb-8">
        <div className="flex items-start gap-6 mb-8">
          <div className="text-7xl">🏢</div>
          <div className="flex-1">
            <h1 className="text-3xl font-bold mb-2">Nike</h1>
            <p className="text-gray-600 mb-4">Global leader in athletic footwear and apparel</p>
            <div className="flex gap-6">
              <div>
                <p className="text-gray-600 text-sm">Active Campaigns</p>
                <p className="text-2xl font-bold">12</p>
              </div>
              <div>
                <p className="text-gray-600 text-sm">Creators Engaged</p>
                <p className="text-2xl font-bold">156</p>
              </div>
              <div>
                <p className="text-gray-600 text-sm">Total Spent</p>
                <p className="text-2xl font-bold">$125K</p>
              </div>
            </div>
          </div>
        </div>

        <p className="text-gray-700 mb-6">
          We partner with talented creators to bring our products to life and connect with audiences worldwide. Join our creator community today.
        </p>

        <button className="btn-primary">Connect with Nike</button>
      </div>

      <div className="card">
        <h2 className="text-2xl font-bold mb-4">Active Campaigns</h2>
        <div className="space-y-4">
          {[1, 2, 3].map((item) => (
            <div key={item} className="p-4 bg-gray-50 rounded-lg">
              <p className="font-bold text-gray-800">Summer Sneaker Collection</p>
              <p className="text-gray-600 text-sm">Budget: $5,000 • 24 applicants</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
