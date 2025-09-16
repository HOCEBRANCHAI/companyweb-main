import React from 'react';
import { DutchEntityProfile } from './DutchEntityProfile';
export function TargetMarketProfile() {
  return <div className="space-y-6">
      <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg p-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-lg font-medium text-blue-900">
              Netherlands Market Entry
            </h2>
            <p className="text-sm text-blue-700 mt-1">Virtual Office Phase</p>
          </div>
          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-200 text-blue-800">
            Active
          </span>
        </div>
      </div>
      <DutchEntityProfile />
    </div>;
}