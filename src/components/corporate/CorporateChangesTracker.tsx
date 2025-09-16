import React, { useState } from 'react';
import { UserIcon, BuildingIcon, ArrowRightIcon, CheckCircleIcon, ClockIcon, AlertCircleIcon, FileTextIcon, InfoIcon, MapPinIcon, DollarSignIcon, UsersIcon } from 'lucide-react';
interface ChangeProcess {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  complexity: 'simple' | 'medium' | 'complex';
}
interface ActiveChange {
  id: string;
  title: string;
  type: string;
  startedDate: string;
  status: 'in_progress' | 'pending_review' | 'pending_approval' | 'completed';
  progressPercentage: number;
  icon: React.ReactNode;
}
export function CorporateChangesTracker() {
  const [activeTab, setActiveTab] = useState('changes');
  const changeProcesses: ChangeProcess[] = [{
    id: 'resign-director',
    title: 'Resign Director',
    description: 'Process director resignation and update records',
    icon: <UserIcon className="h-6 w-6 text-[#EA3A70]" />,
    complexity: 'medium'
  }, {
    id: 'increase-capital',
    title: 'Increase Share Capital',
    description: "Modify company's share capital structure",
    icon: <DollarSignIcon className="h-6 w-6 text-[#EA3A70]" />,
    complexity: 'complex'
  }, {
    id: 'change-address',
    title: 'Change Registered Office',
    description: "Update company's registered address",
    icon: <MapPinIcon className="h-6 w-6 text-[#EA3A70]" />,
    complexity: 'simple'
  }, {
    id: 'transfer-shares',
    title: 'Transfer Shares',
    description: 'Process share transfer between parties',
    icon: <UsersIcon className="h-6 w-6 text-[#EA3A70]" />,
    complexity: 'complex'
  }];
  const activeChanges: ActiveChange[] = [{
    id: 'capital-1',
    title: 'Share Capital Increase',
    type: 'Capital Modification',
    startedDate: '2024-04-01',
    status: 'in_progress',
    progressPercentage: 35,
    icon: <DollarSignIcon className="h-6 w-6 text-[#EA3A70]" />
  }];
  const getComplexityBadge = (complexity: string) => {
    switch (complexity) {
      case 'simple':
        return <span className="px-2 py-0.5 bg-green-900/30 text-green-400 rounded-full text-xs">
            Simple
          </span>;
      case 'medium':
        return <span className="px-2 py-0.5 bg-yellow-900/30 text-yellow-400 rounded-full text-xs">
            Medium
          </span>;
      case 'complex':
        return <span className="px-2 py-0.5 bg-red-900/30 text-red-400 rounded-full text-xs">
            Complex
          </span>;
      default:
        return null;
    }
  };
  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'completed':
        return <span className="px-2 py-0.5 bg-green-900/30 text-green-400 rounded-full text-xs">
            Completed
          </span>;
      case 'pending_review':
        return <span className="px-2 py-0.5 bg-yellow-900/30 text-yellow-400 rounded-full text-xs">
            Pending Review
          </span>;
      case 'pending_approval':
        return <span className="px-2 py-0.5 bg-blue-900/30 text-blue-400 rounded-full text-xs">
            Pending Approval
          </span>;
      default:
        return <span className="px-2 py-0.5 bg-indigo-900/50 text-indigo-300 rounded-full text-xs">
            In Progress
          </span>;
    }
  };
  return <div className="bg-[#1B1537]/80 backdrop-blur-sm rounded-xl border border-[#2D2755] overflow-hidden">
      <div className="p-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-xl font-bold text-white">
              Online Change Tracking
            </h3>
            <p className="text-indigo-200 mt-1">
              Monitor and process corporate changes with real-time status
              updates
            </p>
          </div>
        </div>
        <div className="flex overflow-x-auto mb-6 border-b border-indigo-500/30">
          <button onClick={() => setActiveTab('changes')} className={`px-4 py-2 font-medium text-sm whitespace-nowrap ${activeTab === 'changes' ? 'text-[#EA3A70] border-b-2 border-[#EA3A70]' : 'text-indigo-300 hover:text-white'}`}>
            Available Changes
          </button>
          <button onClick={() => setActiveTab('active')} className={`px-4 py-2 font-medium text-sm whitespace-nowrap ${activeTab === 'active' ? 'text-[#EA3A70] border-b-2 border-[#EA3A70]' : 'text-indigo-300 hover:text-white'}`}>
            Active Changes
          </button>
          <button onClick={() => setActiveTab('history')} className={`px-4 py-2 font-medium text-sm whitespace-nowrap ${activeTab === 'history' ? 'text-[#EA3A70] border-b-2 border-[#EA3A70]' : 'text-indigo-300 hover:text-white'}`}>
            Change History
          </button>
        </div>
        {activeTab === 'changes' && <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {changeProcesses.map(process => <div key={process.id} className="bg-indigo-900/30 rounded-lg border border-indigo-500/30 p-5">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-start">
                    <div className="p-2 bg-indigo-900/50 rounded-lg mr-3 flex-shrink-0">
                      {process.icon}
                    </div>
                    <div>
                      <h4 className="text-white font-medium">
                        {process.title}
                      </h4>
                      <p className="text-sm text-indigo-300 mt-1">
                        {process.description}
                      </p>
                    </div>
                  </div>
                  {getComplexityBadge(process.complexity)}
                </div>
                <button className="w-full px-4 py-2 bg-indigo-900/50 border border-indigo-500/30 text-white rounded-lg hover:bg-indigo-800/50 transition-colors text-sm font-medium flex items-center justify-center">
                  Start Process
                  <ArrowRightIcon className="h-4 w-4 ml-2" />
                </button>
              </div>)}
          </div>}
        {activeTab === 'active' && <div>
            {activeChanges.length > 0 ? <div className="space-y-6">
                {activeChanges.map(change => <div key={change.id} className="bg-indigo-900/30 rounded-lg border border-indigo-500/30 p-5">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center">
                        <div className="p-2 bg-indigo-900/50 rounded-lg mr-3">
                          {change.icon}
                        </div>
                        <div>
                          <h4 className="text-white font-medium">
                            {change.title}
                          </h4>
                          <div className="flex items-center mt-1">
                            <span className="text-xs text-indigo-300">
                              {change.type}
                            </span>
                            <span className="mx-2 text-indigo-500">•</span>
                            <span className="text-xs text-indigo-300">
                              Started:{' '}
                              {new Date(change.startedDate).toLocaleDateString()}
                            </span>
                          </div>
                        </div>
                      </div>
                      {getStatusBadge(change.status)}
                    </div>
                    <div className="mb-4">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm text-indigo-300">
                          Progress
                        </span>
                        <span className="text-sm text-indigo-300">
                          {change.progressPercentage}%
                        </span>
                      </div>
                      <div className="w-full bg-indigo-900/50 rounded-full h-2">
                        <div className="bg-[#EA3A70] h-2 rounded-full" style={{
                  width: `${change.progressPercentage}%`
                }}></div>
                      </div>
                    </div>
                    <div className="flex justify-between">
                      <button className="px-4 py-2 bg-indigo-900/50 border border-indigo-500/30 text-white rounded-lg hover:bg-indigo-800/50 transition-colors text-sm font-medium">
                        View Details
                      </button>
                      <button className="px-4 py-2 bg-[#EA3A70] text-white rounded-lg hover:bg-[#EA3A70]/90 transition-colors text-sm font-medium">
                        Continue
                      </button>
                    </div>
                  </div>)}
              </div> : <div className="bg-indigo-900/30 rounded-lg border border-indigo-500/30 p-6 text-center">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-indigo-900/50 rounded-full">
                    <ClockIcon className="h-6 w-6 text-indigo-300" />
                  </div>
                </div>
                <h4 className="text-white font-medium mb-2">
                  No Active Changes
                </h4>
                <p className="text-indigo-300 text-sm mb-4">
                  You don't have any corporate changes in progress at the
                  moment.
                </p>
                <button className="px-4 py-2 bg-[#EA3A70] text-white rounded-lg hover:bg-[#EA3A70]/90 transition-colors text-sm font-medium inline-flex items-center">
                  Start a New Change
                  <ArrowRightIcon className="h-4 w-4 ml-2" />
                </button>
              </div>}
          </div>}
        {activeTab === 'history' && <div className="bg-indigo-900/30 rounded-lg border border-indigo-500/30 p-5">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="w-px h-full bg-indigo-500/30 relative">
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                  </div>
                </div>
              </div>
              <div className="flex-1">
                <div className="mb-8">
                  <div className="flex items-center justify-between">
                    <h4 className="text-white font-medium">
                      Director Appointment
                    </h4>
                    <span className="text-xs text-indigo-300">
                      March 15, 2024
                    </span>
                  </div>
                  <p className="text-sm text-indigo-300 mt-1">
                    Appointed Jane Smith as a new director
                  </p>
                  <div className="mt-2 flex items-center">
                    <CheckCircleIcon className="h-4 w-4 text-green-400 mr-1.5" />
                    <span className="text-xs text-green-400">
                      Completed and registered with KVK
                    </span>
                  </div>
                </div>
                <div className="mb-8">
                  <div className="flex items-center justify-between">
                    <h4 className="text-white font-medium">
                      Registered Office Change
                    </h4>
                    <span className="text-xs text-indigo-300">
                      February 10, 2024
                    </span>
                  </div>
                  <p className="text-sm text-indigo-300 mt-1">
                    Updated company's registered address
                  </p>
                  <div className="mt-2 flex items-center">
                    <CheckCircleIcon className="h-4 w-4 text-green-400 mr-1.5" />
                    <span className="text-xs text-green-400">
                      Completed and registered with KVK
                    </span>
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between">
                    <h4 className="text-white font-medium">
                      Articles of Association Amendment
                    </h4>
                    <span className="text-xs text-indigo-300">
                      January 5, 2024
                    </span>
                  </div>
                  <p className="text-sm text-indigo-300 mt-1">
                    Updated company's articles of association
                  </p>
                  <div className="mt-2 flex items-center">
                    <CheckCircleIcon className="h-4 w-4 text-green-400 mr-1.5" />
                    <span className="text-xs text-green-400">
                      Completed and registered with KVK
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>}
        <div className="mt-8 bg-indigo-900/30 rounded-lg border border-indigo-500/30 p-4">
          <div className="flex items-start">
            <InfoIcon className="h-5 w-5 text-indigo-300 mr-3 flex-shrink-0 mt-0.5" />
            <div>
              <h4 className="text-white font-medium mb-1">
                About Corporate Changes
              </h4>
              <p className="text-sm text-indigo-300">
                Corporate changes are modifications to your company's structure,
                management, or details that need to be legally processed and
                recorded. Our system helps you manage these changes efficiently
                while ensuring compliance with Dutch regulations.
              </p>
              <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="flex items-start">
                  <CheckCircleIcon className="h-4 w-4 text-green-400 mr-2 mt-0.5" />
                  <span className="text-sm text-indigo-200">
                    Guided step-by-step processes
                  </span>
                </div>
                <div className="flex items-start">
                  <CheckCircleIcon className="h-4 w-4 text-green-400 mr-2 mt-0.5" />
                  <span className="text-sm text-indigo-200">
                    Automated form generation
                  </span>
                </div>
                <div className="flex items-start">
                  <CheckCircleIcon className="h-4 w-4 text-green-400 mr-2 mt-0.5" />
                  <span className="text-sm text-indigo-200">
                    Compliant with Dutch regulations
                  </span>
                </div>
                <div className="flex items-start">
                  <CheckCircleIcon className="h-4 w-4 text-green-400 mr-2 mt-0.5" />
                  <span className="text-sm text-indigo-200">
                    Digital record-keeping
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>;
}