import React, { useState } from 'react';
import { ComplianceEvents } from './ComplianceEvents';
import { CalendarIcon, ListIcon, BellIcon, ClockIcon, CheckCircleIcon } from 'lucide-react';
export function Events() {
  const [activeTab, setActiveTab] = useState('compliance');
  return <div className="min-h-screen bg-[#0A0826] text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">Events & Deadlines</h1>
          <div className="bg-[#1B1537] rounded-lg p-1">
            <div className="flex space-x-1">
              <button onClick={() => setActiveTab('compliance')} className={`px-4 py-2 rounded-lg ${activeTab === 'compliance' ? 'bg-[#EA3A70] text-white' : 'text-purple-200/70 hover:bg-[#2D2755]'} transition-colors`}>
                <div className="flex items-center">
                  <CalendarIcon className="h-4 w-4 mr-2" />
                  <span>Compliance</span>
                </div>
              </button>
              <button onClick={() => setActiveTab('notifications')} className={`px-4 py-2 rounded-lg ${activeTab === 'notifications' ? 'bg-[#EA3A70] text-white' : 'text-purple-200/70 hover:bg-[#2D2755]'} transition-colors`}>
                <div className="flex items-center">
                  <BellIcon className="h-4 w-4 mr-2" />
                  <span>Notifications</span>
                </div>
              </button>
              <button onClick={() => setActiveTab('history')} className={`px-4 py-2 rounded-lg ${activeTab === 'history' ? 'bg-[#EA3A70] text-white' : 'text-purple-200/70 hover:bg-[#2D2755]'} transition-colors`}>
                <div className="flex items-center">
                  <ClockIcon className="h-4 w-4 mr-2" />
                  <span>History</span>
                </div>
              </button>
            </div>
          </div>
        </div>
        <div className="mb-6">
          <div className="bg-[#1B1537] rounded-xl border border-[#2D2755] p-4">
            <div className="flex items-center space-x-4">
              <div className="bg-[#EA3A70]/20 p-3 rounded-xl">
                <CheckCircleIcon className="h-6 w-6 text-[#EA3A70]" />
              </div>
              <div>
                <h2 className="text-xl font-medium">Compliance Status</h2>
                <p className="text-purple-200/70">
                  Your company is currently compliant with all regulatory
                  requirements
                </p>
              </div>
              <div className="ml-auto flex items-center">
                <div className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm font-medium">
                  All requirements met
                </div>
              </div>
            </div>
          </div>
        </div>
        {activeTab === 'compliance' && <ComplianceEvents />}
        {activeTab === 'notifications' && <div className="bg-[#1B1537] rounded-xl border border-[#2D2755] p-6">
            <div className="text-center py-12">
              <BellIcon className="h-12 w-12 text-purple-200/30 mx-auto mb-4" />
              <h3 className="text-xl font-medium mb-2">Notification Center</h3>
              <p className="text-purple-200/70 max-w-md mx-auto">
                You have no new notifications at this time. All your compliance
                events are on track.
              </p>
            </div>
          </div>}
        {activeTab === 'history' && <div className="bg-[#1B1537] rounded-xl border border-[#2D2755] p-6">
            <h3 className="text-xl font-medium mb-4">Compliance History</h3>
            <div className="space-y-4">
              <div className="bg-[#2D2755] p-4 rounded-lg">
                <div className="flex justify-between items-center">
                  <div>
                    <h4 className="font-medium">Q4 VAT Return</h4>
                    <p className="text-sm text-purple-200/70">
                      Completed on January 25, 2024
                    </p>
                  </div>
                  <div className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-xs font-medium">
                    Completed
                  </div>
                </div>
              </div>
              <div className="bg-[#2D2755] p-4 rounded-lg">
                <div className="flex justify-between items-center">
                  <div>
                    <h4 className="font-medium">Annual Accounts Filing</h4>
                    <p className="text-sm text-purple-200/70">
                      Completed on December 18, 2023
                    </p>
                  </div>
                  <div className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-xs font-medium">
                    Completed
                  </div>
                </div>
              </div>
              <div className="bg-[#2D2755] p-4 rounded-lg">
                <div className="flex justify-between items-center">
                  <div>
                    <h4 className="font-medium">
                      UBO Registration Verification
                    </h4>
                    <p className="text-sm text-purple-200/70">
                      Completed on November 5, 2023
                    </p>
                  </div>
                  <div className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-xs font-medium">
                    Completed
                  </div>
                </div>
              </div>
            </div>
          </div>}
      </div>
    </div>;
}