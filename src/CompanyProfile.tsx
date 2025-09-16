import React, { useState } from 'react';
import { Map } from './Map';
import { CompanyInfo } from './CompanyInfo';
import { ServiceStatus } from './ServiceStatus';
import { DirectorsAndShareholders } from './DirectorsAndShareholders';
import { TargetMarketProfile } from './company/TargetMarketProfile';
import { AddTargetMarketModal } from './modals/AddTargetMarketModal';
import { BuildingIcon, GlobeIcon, PlusIcon } from 'lucide-react';
export function CompanyProfile() {
  const [activeTab, setActiveTab] = useState('base');
  const [showAddMarket, setShowAddMarket] = useState(false);
  return <main className="w-full min-h-screen bg-white">
      <div className="container mx-auto px-4 py-6">
        <div className="mb-8">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
            <Map />
          </div>
        </div>
        <div className="mb-6 border-b border-gray-200">
          <nav className="-mb-px flex space-x-8">
            <button onClick={() => setActiveTab('base')} className={`py-4 px-1 border-b-2 font-medium text-sm flex items-center ${activeTab === 'base' ? 'border-blue-600 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}>
              <BuildingIcon className="h-4 w-4 mr-2" />
              Base Location (India)
            </button>
            <button onClick={() => setActiveTab('target')} className={`py-4 px-1 border-b-2 font-medium text-sm flex items-center ${activeTab === 'target' ? 'border-blue-600 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}>
              <GlobeIcon className="h-4 w-4 mr-2" />
              Target Market (Netherlands)
            </button>
            <button onClick={() => setShowAddMarket(true)} className="py-4 px-1 border-b-2 border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 font-medium text-sm flex items-center">
              <PlusIcon className="h-4 w-4 mr-2" />
              Add Market
            </button>
          </nav>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            {activeTab === 'base' ? <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <CompanyInfo />
              </div> : <TargetMarketProfile />}
          </div>
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-medium text-gray-800 mb-4">
                Service Status
              </h2>
              <ServiceStatus />
            </div>
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-medium text-gray-800 mb-4">
                Quick Actions
              </h2>
              <div className="space-y-3">
                <button className="w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 text-sm font-medium flex items-center justify-center">
                  <BuildingIcon className="h-4 w-4 mr-2" />
                  Update Company Details
                </button>
                <button className="w-full px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 text-sm font-medium flex items-center justify-center">
                  Download Company Extract
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {showAddMarket && <AddTargetMarketModal onClose={() => setShowAddMarket(false)} />}
    </main>;
}