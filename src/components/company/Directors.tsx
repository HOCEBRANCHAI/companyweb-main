import React from 'react';
import { UsersIcon, PlusIcon } from 'lucide-react';
import { ProfileNav } from '../navigation/ProfileNav';
import { DirectorsAndShareholders } from '../DirectorsAndShareholders';
export function Directors() {
  return <main className="w-full min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <UsersIcon className="h-6 w-6 text-blue-600" />
            <h1 className="text-xl font-bold text-gray-800">
              Directors & Shareholders
            </h1>
          </div>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 text-sm font-medium flex items-center">
            <PlusIcon className="h-4 w-4 mr-2" />
            Add Member
          </button>
        </div>
      </header>
      {/* Navigation */}
      <ProfileNav />
      {/* Main Content */}
      <div className="container mx-auto px-4 py-6">
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <DirectorsAndShareholders />
        </div>
      </div>
    </main>;
}