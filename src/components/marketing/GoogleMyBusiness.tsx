import React from 'react';
import { GlobeIcon, StarIcon, MessageSquareIcon, BarChart2Icon, LinkIcon } from 'lucide-react';
export function GoogleMyBusiness() {
  const isConnected = false;
  return <div className="space-y-6">
      {!isConnected ? <div className="max-w-2xl mx-auto text-center">
          <GlobeIcon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Connect Google My Business
          </h2>
          <p className="text-gray-600 mb-6">
            Connect your Google My Business account to manage your profile,
            respond to reviews, and track performance all in one place.
          </p>
          <button className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 text-sm font-medium flex items-center mx-auto">
            <LinkIcon className="h-4 w-4 mr-2" />
            Connect Google Account
          </button>
        </div> : <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-medium text-gray-900">Reviews</h3>
                <StarIcon className="h-5 w-5 text-yellow-400" />
              </div>
              <p className="text-3xl font-bold text-gray-900">4.8</p>
              <p className="text-sm text-gray-500">Average Rating</p>
            </div>
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-medium text-gray-900">Messages</h3>
                <MessageSquareIcon className="h-5 w-5 text-blue-400" />
              </div>
              <p className="text-3xl font-bold text-gray-900">12</p>
              <p className="text-sm text-gray-500">Unread Messages</p>
            </div>
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-medium text-gray-900">Views</h3>
                <BarChart2Icon className="h-5 w-5 text-green-400" />
              </div>
              <p className="text-3xl font-bold text-gray-900">2.4k</p>
              <p className="text-sm text-gray-500">Profile Views</p>
            </div>
          </div>
        </div>}
    </div>;
}