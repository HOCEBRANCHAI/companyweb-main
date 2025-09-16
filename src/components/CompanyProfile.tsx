import React, { useState, Component } from 'react';
import { BuildingIcon, GlobeIcon, PlusIcon, FileTextIcon, DownloadIcon, SettingsIcon, CheckIcon, XIcon, AlertTriangleIcon, MapPinIcon, CalendarIcon, UsersIcon, ArrowRightIcon, ChevronDownIcon, CheckCircleIcon } from 'lucide-react';
export function CompanyProfile() {
  const [activeTab, setActiveTab] = useState('base');
  const [showAddMarket, setShowAddMarket] = useState(false);
  return <div className="w-full bg-[#0A0826]">
      {/* Company Header Card */}
      <div className="mb-8 bg-indigo-800/30 backdrop-blur-md rounded-2xl border border-indigo-500/30 p-6">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="flex items-start space-x-4">
            <div className="p-3 bg-indigo-900/50 rounded-xl">
              <BuildingIcon className="h-8 w-8 text-indigo-300" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white mb-1">
                Tech Innovations Ltd
              </h1>
              <div className="flex flex-wrap gap-3 text-indigo-200 text-sm">
                <span className="flex items-center">
                  <MapPinIcon className="h-4 w-4 mr-1" />
                  India (Headquarters)
                </span>
                <span className="flex items-center">
                  <CalendarIcon className="h-4 w-4 mr-1" />
                  Established: 2018
                </span>
                <span className="flex items-center">
                  <UsersIcon className="h-4 w-4 mr-1" />
                  25 Employees
                </span>
              </div>
            </div>
          </div>
          <div className="mt-4 md:mt-0 flex space-x-3">
            <button className="px-4 py-2 bg-indigo-900/50 border border-indigo-500/30 rounded-xl text-white hover:bg-indigo-800/50 transition-colors flex items-center">
              <SettingsIcon className="h-4 w-4 mr-2" />
              Edit Profile
            </button>
            <button className="px-4 py-2 bg-[#EA3A70] text-white rounded-xl hover:bg-[#EA3A70]/90 transition-colors flex items-center">
              <FileTextIcon className="h-4 w-4 mr-2" />
              Company Documents
            </button>
          </div>
        </div>
      </div>
      {/* Map and Status Overview */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <div className="lg:col-span-2 bg-indigo-800/30 backdrop-blur-md rounded-2xl border border-indigo-500/30 overflow-hidden">
          <div className="h-64 relative">
            {/* Map Component - Replace with actual map implementation */}
            <div className="absolute inset-0 bg-indigo-900/30">
              
              <div className="absolute top-4 left-4 bg-indigo-900/80 backdrop-blur-sm rounded-lg px-3 py-2 text-white text-sm">
                Global Operations Map
              </div>
            </div>
          </div>
        </div>
        <div className="bg-indigo-800/30 backdrop-blur-md rounded-2xl border border-indigo-500/30 p-5">
          <h2 className="text-lg font-medium text-white mb-4 flex items-center">
            <CheckIcon className="h-5 w-5 text-green-400 mr-2" />
            Service Status
          </h2>
          <div className="space-y-3">
            <div className="flex justify-between items-center p-3 bg-indigo-900/50 rounded-lg">
              <span className="text-indigo-200">Corporate Registration</span>
              <span className="flex items-center text-green-400">
                <CheckIcon className="h-4 w-4 mr-1" />
                Active
              </span>
            </div>
            <div className="flex justify-between items-center p-3 bg-indigo-900/50 rounded-lg">
              <span className="text-indigo-200">Tax Registration</span>
              <span className="flex items-center text-green-400">
                <CheckIcon className="h-4 w-4 mr-1" />
                Complete
              </span>
            </div>
            <div className="flex justify-between items-center p-3 bg-indigo-900/50 rounded-lg">
              <span className="text-indigo-200">Banking Setup</span>
              <span className="flex items-center text-yellow-400">
                <AlertTriangleIcon className="h-4 w-4 mr-1" />
                In Progress
              </span>
            </div>
            <div className="flex justify-between items-center p-3 bg-indigo-900/50 rounded-lg">
              <span className="text-indigo-200">Employer Registration</span>
              <span className="flex items-center text-red-400">
                <XIcon className="h-4 w-4 mr-1" />
                Not Started
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* Location Tabs */}
      <div className="mb-6">
        {/* Locations Tabs - Secondary Navigation */}
        <div className="bg-[#1E1B3F] backdrop-blur-md rounded-2xl border border-indigo-500/30 p-1">
          <div className="flex flex-wrap">
            <button onClick={() => setActiveTab('base')} className={`py-3 px-5 rounded-xl font-medium text-sm transition-colors flex items-center ${activeTab === 'base' ? 'bg-[#EA3A70] text-white shadow-md' : 'text-indigo-200 hover:bg-indigo-800/50 hover:text-white'}`}>
              <MapPinIcon className="h-4 w-4 mr-2" />
              Base Location (India)
            </button>
            <button onClick={() => setActiveTab('target')} className={`py-3 px-5 rounded-xl font-medium text-sm transition-colors flex items-center ${activeTab === 'target' ? 'bg-[#EA3A70] text-white shadow-md' : 'text-indigo-200 hover:bg-indigo-800/50 hover:text-white'}`}>
              <GlobeIcon className="h-4 w-4 mr-2" />
              Target Market (Netherlands)
            </button>
            <button onClick={() => setShowAddMarket(true)} className="py-3 px-5 rounded-xl font-medium text-sm text-indigo-200 hover:bg-indigo-800/50 hover:text-white transition-colors flex items-center">
              <PlusIcon className="h-4 w-4 mr-2" />
              Add Market
            </button>
          </div>
        </div>
      </div>
      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          {activeTab === 'base' ? <div className="bg-indigo-800/30 backdrop-blur-md rounded-2xl border border-indigo-500/30 p-6">
              <h2 className="text-xl font-bold text-white mb-4">
                Company Information
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <h3 className="text-sm font-medium text-indigo-300 mb-1">
                      Registration Details
                    </h3>
                    <div className="bg-indigo-900/50 rounded-lg p-4 space-y-2">
                      <div className="flex justify-between">
                        <span className="text-indigo-200">
                          Registration Number
                        </span>
                        <span className="text-white">
                          U72200MH2018PTC123456
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-indigo-200">Tax ID</span>
                        <span className="text-white">AABCT4567K</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-indigo-200">Entity Type</span>
                        <span className="text-white">
                          Private Limited Company
                        </span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-indigo-300 mb-1">
                      Contact Information
                    </h3>
                    <div className="bg-indigo-900/50 rounded-lg p-4 space-y-2">
                      <div className="flex justify-between">
                        <span className="text-indigo-200">Email</span>
                        <span className="text-white">
                          info@techinnovations.com
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-indigo-200">Phone</span>
                        <span className="text-white">+91 11 4567 8901</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-indigo-200">Website</span>
                        <span className="text-white">
                          www.techinnovations.com
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-sm font-medium text-indigo-300 mb-1">
                      Address
                    </h3>
                    <div className="bg-indigo-900/50 rounded-lg p-4">
                      <p className="text-white">
                        Tech Park, Building 5<br />
                        Whitefield, Bangalore 560066
                        <br />
                        Karnataka, India
                      </p>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-indigo-300 mb-1">
                      Business Activity
                    </h3>
                    <div className="bg-indigo-900/50 rounded-lg p-4 space-y-2">
                      <div className="flex justify-between">
                        <span className="text-indigo-200">
                          Primary Activity
                        </span>
                        <span className="text-white">Software Development</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-indigo-200">Industry</span>
                        <span className="text-white">
                          Information Technology
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-indigo-200">SIC Code</span>
                        <span className="text-white">62.01</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div> : <div className="bg-indigo-800/30 backdrop-blur-md rounded-2xl border border-indigo-500/30 p-6">
              <h2 className="text-xl font-bold text-white mb-4">
                Netherlands Market Profile
              </h2>
              <div className="space-y-6">
                <div className="bg-indigo-900/50 rounded-lg p-4">
                  <h3 className="text-sm font-medium text-indigo-300 mb-2">
                    Market Entry Status
                  </h3>
                  <div className="flex items-center space-x-2">
                    <div className="h-2 w-2 rounded-full bg-green-400"></div>
                    <span className="text-white">
                      Branch Office Established
                    </span>
                  </div>
                  <p className="text-indigo-200 mt-2 text-sm">
                    Your branch office in the Netherlands is fully operational.
                    All required registrations are complete.
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-indigo-900/50 rounded-lg p-4">
                    <h3 className="text-sm font-medium text-indigo-300 mb-2">
                      Registration Details
                    </h3>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-indigo-200">KVK Number</span>
                        <span className="text-white">76543210</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-indigo-200">VAT Number</span>
                        <span className="text-white">NL861234567B01</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-indigo-200">EORI Number</span>
                        <span className="text-white">NL861234567</span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-indigo-900/50 rounded-lg p-4">
                    <h3 className="text-sm font-medium text-indigo-300 mb-2">
                      Address
                    </h3>
                    <p className="text-white">
                      Prinses Beatrixlaan 582
                      <br />
                      2595 BM The Hague
                      <br />
                      Netherlands
                    </p>
                  </div>
                </div>
                <div className="bg-indigo-900/50 rounded-lg p-4">
                  <h3 className="text-sm font-medium text-indigo-300 mb-2">
                    Local Representative
                  </h3>
                  <div className="flex items-start space-x-3">
                    <div className="h-10 w-10 rounded-full bg-indigo-700 flex items-center justify-center">
                      <UsersIcon className="h-5 w-5 text-indigo-300" />
                    </div>
                    <div>
                      <p className="text-white font-medium">Jan de Vries</p>
                      <p className="text-indigo-200 text-sm">Branch Manager</p>
                      <p className="text-indigo-200 text-sm">
                        jan.devries@techinnovations.com
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>}
        </div>
        {/* Right Column - Always visible */}
        <div className="space-y-6">
          {/* Quick Actions */}
          <div className="bg-indigo-800/30 backdrop-blur-md rounded-2xl border border-indigo-500/30 p-5">
            <h2 className="text-lg font-medium text-white mb-4">
              Quick Actions
            </h2>
            <div className="space-y-3">
              <button className="w-full px-4 py-2 bg-[#EA3A70] text-white rounded-xl hover:bg-[#EA3A70]/90 transition-colors flex items-center justify-center">
                <SettingsIcon className="h-4 w-4 mr-2" />
                Update Company Details
              </button>
              <button className="w-full px-4 py-2 bg-indigo-900/50 border border-indigo-500/30 text-white rounded-xl hover:bg-indigo-800/50 transition-colors flex items-center justify-center">
                <DownloadIcon className="h-4 w-4 mr-2" />
                Download Company Extract
              </button>
            </div>
          </div>
          {/* Upcoming Deadlines */}
          <div className="bg-indigo-800/30 backdrop-blur-md rounded-2xl border border-indigo-500/30 p-5">
            <h2 className="text-lg font-medium text-white mb-4">
              Upcoming Deadlines
            </h2>
            <div className="space-y-3">
              <div className="bg-indigo-900/50 rounded-lg p-3">
                <div className="flex items-center">
                  <div className="h-2 w-2 rounded-full bg-[#EA3A70] mr-2"></div>
                  <span className="text-white text-sm font-medium">
                    VAT Return
                  </span>
                </div>
                <p className="text-indigo-200 text-xs ml-4 mt-1">
                  Due in 15 days (April 30, 2024)
                </p>
              </div>
              <div className="bg-indigo-900/50 rounded-lg p-3">
                <div className="flex items-center">
                  <div className="h-2 w-2 rounded-full bg-yellow-400 mr-2"></div>
                  <span className="text-white text-sm font-medium">
                    Annual Accounts
                  </span>
                </div>
                <p className="text-indigo-200 text-xs ml-4 mt-1">
                  Due in 45 days (May 30, 2024)
                </p>
              </div>
            </div>
            <button className="w-full mt-3 text-[#EA3A70] hover:text-[#EA3A70]/80 text-sm flex items-center justify-center">
              View all deadlines
              <ArrowRightIcon className="ml-1 h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </div>;
}