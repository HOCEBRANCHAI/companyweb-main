import React from 'react';
import { Share2Icon, SearchIcon, CheckCircleIcon, AlertCircleIcon } from 'lucide-react';
export function CitationBuilder() {
  const citations = [{
    site: 'Yelp',
    status: 'verified',
    score: 95,
    lastUpdated: '2024-02-15'
  }, {
    site: 'Yellow Pages',
    status: 'pending',
    score: 80,
    lastUpdated: '2024-02-14'
  }, {
    site: 'TripAdvisor',
    status: 'needs_attention',
    score: 65,
    lastUpdated: '2024-02-10'
  }];
  return <div className="space-y-6">
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <h2 className="text-lg font-medium text-gray-900 mb-4">
          Citation Builder
        </h2>
        <div className="grid gap-6">
          {citations.map(citation => <div key={citation.site} className="flex items-center justify-between border-b border-gray-200 pb-4 last:border-0 last:pb-0">
              <div className="flex items-center space-x-4">
                {citation.status === 'verified' ? <CheckCircleIcon className="h-5 w-5 text-green-500" /> : citation.status === 'needs_attention' ? <AlertCircleIcon className="h-5 w-5 text-red-500" /> : <Share2Icon className="h-5 w-5 text-yellow-500" />}
                <div>
                  <h3 className="font-medium text-gray-900">{citation.site}</h3>
                  <p className="text-sm text-gray-500">
                    Last updated: {citation.lastUpdated}
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="text-right">
                  <div className="text-sm font-medium text-gray-900">
                    Accuracy Score
                  </div>
                  <div className={`text-sm ${citation.score >= 90 ? 'text-green-600' : citation.score >= 70 ? 'text-yellow-600' : 'text-red-600'}`}>
                    {citation.score}%
                  </div>
                </div>
                <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 text-sm font-medium">
                  Update
                </button>
              </div>
            </div>)}
        </div>
      </div>
    </div>;
}