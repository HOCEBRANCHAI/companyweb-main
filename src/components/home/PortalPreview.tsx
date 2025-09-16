import React, { useState } from 'react';
import { BuildingIcon, BarChart2Icon, FileTextIcon, CheckCircleIcon, BellIcon, UserIcon, CalendarIcon, ArrowRightIcon, ClockIcon, AlertTriangleIcon, MailIcon, PlusIcon } from 'lucide-react';
export function PortalPreview() {
  const [activeTab, setActiveTab] = useState('dashboard');
  return <div className="text-white">
      <div className="mb-8">
        <h3 className="text-2xl font-bold mb-4">Preview our customer portal</h3>
        <p className="text-indigo-200">
          Get a glimpse of how you'll manage your Dutch business through our
          intuitive dashboard.
        </p>
      </div>
      <div className="bg-[#0A0826] rounded-xl border border-indigo-500/30 overflow-hidden">
        {/* Portal Header */}
        <div className="bg-[#0F0B1F] border-b border-indigo-500/30 p-4 flex justify-between items-center">
          <div className="flex items-center">
            <BuildingIcon className="h-6 w-6 text-[#EA3A70] mr-2" />
            <span className="text-white font-bold">House of Companies</span>
          </div>
          <div className="flex items-center space-x-4">
            <div className="relative">
              <BellIcon className="h-5 w-5 text-indigo-300 cursor-pointer" />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-[#EA3A70] rounded-full"></div>
            </div>
            <div className="h-8 w-8 rounded-full bg-indigo-900 flex items-center justify-center">
              <UserIcon className="h-4 w-4 text-indigo-300" />
            </div>
          </div>
        </div>
        {/* Portal Navigation */}
        <div className="flex border-b border-indigo-500/30 overflow-x-auto">
          <button onClick={() => setActiveTab('dashboard')} className={`px-4 py-3 flex items-center whitespace-nowrap ${activeTab === 'dashboard' ? 'border-b-2 border-[#EA3A70] text-white' : 'text-indigo-300'}`}>
            <BarChart2Icon className="h-4 w-4 mr-2" />
            Dashboard
          </button>
          <button onClick={() => setActiveTab('companies')} className={`px-4 py-3 flex items-center whitespace-nowrap ${activeTab === 'companies' ? 'border-b-2 border-[#EA3A70] text-white' : 'text-indigo-300'}`}>
            <BuildingIcon className="h-4 w-4 mr-2" />
            Companies
          </button>
          <button onClick={() => setActiveTab('documents')} className={`px-4 py-3 flex items-center whitespace-nowrap ${activeTab === 'documents' ? 'border-b-2 border-[#EA3A70] text-white' : 'text-indigo-300'}`}>
            <FileTextIcon className="h-4 w-4 mr-2" />
            Documents
          </button>
          <button onClick={() => setActiveTab('compliance')} className={`px-4 py-3 flex items-center whitespace-nowrap ${activeTab === 'compliance' ? 'border-b-2 border-[#EA3A70] text-white' : 'text-indigo-300'}`}>
            <CheckCircleIcon className="h-4 w-4 mr-2" />
            Compliance
          </button>
        </div>
        {/* Portal Content */}
        <div className="p-6">
          {activeTab === 'dashboard' && <div className="space-y-6 animate-fadeIn">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold">Dashboard</h3>
                <div className="flex items-center text-indigo-300 text-sm">
                  <CalendarIcon className="h-4 w-4 mr-2" />
                  Last updated: Today, 10:45 AM
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-indigo-900/30 rounded-lg p-4 border border-indigo-500/30">
                  <div className="flex items-center justify-between mb-2">
                    <div className="p-2 bg-indigo-900/50 rounded-lg">
                      <BuildingIcon className="h-5 w-5 text-indigo-300" />
                    </div>
                    <span className="text-xs px-2 py-1 bg-green-500/20 text-green-400 rounded-full">
                      Active
                    </span>
                  </div>
                  <h4 className="font-medium">Tech Innovations B.V.</h4>
                  <p className="text-indigo-300 text-sm">
                    Private Limited Company
                  </p>
                </div>
                <div className="bg-indigo-900/30 rounded-lg p-4 border border-indigo-500/30">
                  <div className="flex items-center justify-between mb-2">
                    <div className="p-2 bg-indigo-900/50 rounded-lg">
                      <FileTextIcon className="h-5 w-5 text-indigo-300" />
                    </div>
                    <span className="text-xs px-2 py-1 bg-indigo-500/20 text-indigo-300 rounded-full">
                      3 New
                    </span>
                  </div>
                  <h4 className="font-medium">Documents</h4>
                  <p className="text-indigo-300 text-sm">12 Total Documents</p>
                </div>
                <div className="bg-indigo-900/30 rounded-lg p-4 border border-indigo-500/30">
                  <div className="flex items-center justify-between mb-2">
                    <div className="p-2 bg-indigo-900/50 rounded-lg">
                      <CheckCircleIcon className="h-5 w-5 text-indigo-300" />
                    </div>
                    <span className="text-xs px-2 py-1 bg-yellow-500/20 text-yellow-400 rounded-full">
                      1 Due Soon
                    </span>
                  </div>
                  <h4 className="font-medium">Compliance</h4>
                  <p className="text-indigo-300 text-sm">
                    Next deadline: 14 days
                  </p>
                </div>
              </div>
              <div className="bg-indigo-900/30 rounded-lg border border-indigo-500/30 overflow-hidden">
                <div className="p-4 border-b border-indigo-500/30">
                  <h4 className="font-medium flex items-center">
                    <ClockIcon className="h-5 w-5 mr-2 text-indigo-300" />
                    Upcoming Deadlines
                  </h4>
                </div>
                <div className="divide-y divide-indigo-500/30">
                  <div className="p-4 flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="p-2 rounded-lg bg-[#EA3A70]/20 mr-3">
                        <AlertTriangleIcon className="h-5 w-5 text-[#EA3A70]" />
                      </div>
                      <div>
                        <h5 className="font-medium">VAT Return Q2</h5>
                        <p className="text-indigo-300 text-sm">
                          Due in 14 days
                        </p>
                      </div>
                    </div>
                    <button className="px-3 py-1.5 bg-indigo-900/50 text-white rounded-lg border border-indigo-500/30 hover:bg-indigo-800/50 transition-colors text-sm">
                      View
                    </button>
                  </div>
                  <div className="p-4 flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="p-2 rounded-lg bg-indigo-900/50 mr-3">
                        <FileTextIcon className="h-5 w-5 text-indigo-300" />
                      </div>
                      <div>
                        <h5 className="font-medium">Annual Accounts Filing</h5>
                        <p className="text-indigo-300 text-sm">
                          Due in 45 days
                        </p>
                      </div>
                    </div>
                    <button className="px-3 py-1.5 bg-indigo-900/50 text-white rounded-lg border border-indigo-500/30 hover:bg-indigo-800/50 transition-colors text-sm">
                      View
                    </button>
                  </div>
                </div>
              </div>
              <div className="bg-indigo-900/30 rounded-lg border border-indigo-500/30 overflow-hidden">
                <div className="p-4 border-b border-indigo-500/30">
                  <h4 className="font-medium flex items-center">
                    <MailIcon className="h-5 w-5 mr-2 text-indigo-300" />
                    Recent Messages
                  </h4>
                </div>
                <div className="divide-y divide-indigo-500/30">
                  <div className="p-4 flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="h-10 w-10 rounded-full bg-indigo-900 flex items-center justify-center mr-3">
                        <UserIcon className="h-5 w-5 text-indigo-300" />
                      </div>
                      <div>
                        <h5 className="font-medium">Sarah Johnson</h5>
                        <p className="text-indigo-300 text-sm">
                          Your VAT return is ready for review...
                        </p>
                      </div>
                    </div>
                    <div className="text-xs text-indigo-300">2 hours ago</div>
                  </div>
                  <div className="p-4 flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="h-10 w-10 rounded-full bg-indigo-900 flex items-center justify-center mr-3">
                        <UserIcon className="h-5 w-5 text-indigo-300" />
                      </div>
                      <div>
                        <h5 className="font-medium">Michael Brown</h5>
                        <p className="text-indigo-300 text-sm">
                          We've processed your latest document submission...
                        </p>
                      </div>
                    </div>
                    <div className="text-xs text-indigo-300">Yesterday</div>
                  </div>
                </div>
              </div>
            </div>}
          {activeTab === 'companies' && <div className="space-y-6 animate-fadeIn">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold">Your Companies</h3>
                <button className="px-3 py-1.5 bg-[#EA3A70] text-white rounded-lg hover:bg-[#EA3A70]/90 transition-colors text-sm flex items-center">
                  <PlusIcon className="h-4 w-4 mr-1.5" />
                  Add Company
                </button>
              </div>
              <div className="bg-indigo-900/30 rounded-lg border border-indigo-500/30 overflow-hidden">
                <div className="grid grid-cols-4 text-indigo-300 text-sm border-b border-indigo-500/30 p-3">
                  <div>Company Name</div>
                  <div>Registration</div>
                  <div>Status</div>
                  <div>Actions</div>
                </div>
                <div className="divide-y divide-indigo-500/30">
                  <div className="grid grid-cols-4 items-center p-4">
                    <div className="flex items-center">
                      <BuildingIcon className="h-5 w-5 text-indigo-300 mr-2" />
                      <span className="font-medium">Tech Innovations B.V.</span>
                    </div>
                    <div className="text-indigo-300">KVK 12345678</div>
                    <div>
                      <span className="px-2 py-1 bg-green-500/20 text-green-400 rounded-full text-xs">
                        Active
                      </span>
                    </div>
                    <div>
                      <button className="px-3 py-1.5 bg-indigo-900/50 text-white rounded-lg border border-indigo-500/30 hover:bg-indigo-800/50 transition-colors text-sm">
                        Manage
                      </button>
                    </div>
                  </div>
                  <div className="grid grid-cols-4 items-center p-4">
                    <div className="flex items-center">
                      <BuildingIcon className="h-5 w-5 text-indigo-300 mr-2" />
                      <span className="font-medium">Global Trade B.V.</span>
                    </div>
                    <div className="text-indigo-300">KVK 87654321</div>
                    <div>
                      <span className="px-2 py-1 bg-indigo-500/20 text-indigo-300 rounded-full text-xs">
                        In Formation
                      </span>
                    </div>
                    <div>
                      <button className="px-3 py-1.5 bg-indigo-900/50 text-white rounded-lg border border-indigo-500/30 hover:bg-indigo-800/50 transition-colors text-sm">
                        Manage
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>}
          {activeTab === 'documents' && <div className="space-y-6 animate-fadeIn">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold">Documents</h3>
                <button className="px-3 py-1.5 bg-[#EA3A70] text-white rounded-lg hover:bg-[#EA3A70]/90 transition-colors text-sm flex items-center">
                  <PlusIcon className="h-4 w-4 mr-1.5" />
                  Upload Document
                </button>
              </div>
              <div className="bg-indigo-900/30 rounded-lg border border-indigo-500/30 overflow-hidden">
                <div className="grid grid-cols-4 text-indigo-300 text-sm border-b border-indigo-500/30 p-3">
                  <div>Document Name</div>
                  <div>Type</div>
                  <div>Date</div>
                  <div>Actions</div>
                </div>
                <div className="divide-y divide-indigo-500/30">
                  <div className="grid grid-cols-4 items-center p-4">
                    <div className="flex items-center">
                      <FileTextIcon className="h-5 w-5 text-indigo-300 mr-2" />
                      <span className="font-medium">
                        Articles of Association
                      </span>
                    </div>
                    <div className="text-indigo-300">Legal</div>
                    <div className="text-indigo-300">Jan 15, 2023</div>
                    <div>
                      <button className="px-3 py-1.5 bg-indigo-900/50 text-white rounded-lg border border-indigo-500/30 hover:bg-indigo-800/50 transition-colors text-sm">
                        Download
                      </button>
                    </div>
                  </div>
                  <div className="grid grid-cols-4 items-center p-4">
                    <div className="flex items-center">
                      <FileTextIcon className="h-5 w-5 text-indigo-300 mr-2" />
                      <span className="font-medium">VAT Registration</span>
                    </div>
                    <div className="text-indigo-300">Tax</div>
                    <div className="text-indigo-300">Feb 1, 2023</div>
                    <div>
                      <button className="px-3 py-1.5 bg-indigo-900/50 text-white rounded-lg border border-indigo-500/30 hover:bg-indigo-800/50 transition-colors text-sm">
                        Download
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>}
          {activeTab === 'compliance' && <div className="space-y-6 animate-fadeIn">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold">Compliance Calendar</h3>
                <div className="flex items-center text-indigo-300 text-sm">
                  <CalendarIcon className="h-4 w-4 mr-2" />
                  Current Year: 2023
                </div>
              </div>
              <div className="bg-indigo-900/30 rounded-lg border border-indigo-500/30 overflow-hidden">
                <div className="grid grid-cols-4 text-indigo-300 text-sm border-b border-indigo-500/30 p-3">
                  <div>Obligation</div>
                  <div>Due Date</div>
                  <div>Status</div>
                  <div>Actions</div>
                </div>
                <div className="divide-y divide-indigo-500/30">
                  <div className="grid grid-cols-4 items-center p-4">
                    <div className="flex items-center">
                      <FileTextIcon className="h-5 w-5 text-[#EA3A70] mr-2" />
                      <span className="font-medium">VAT Return Q2</span>
                    </div>
                    <div className="text-indigo-300">Jul 31, 2023</div>
                    <div>
                      <span className="px-2 py-1 bg-yellow-500/20 text-yellow-400 rounded-full text-xs">
                        Due Soon
                      </span>
                    </div>
                    <div>
                      <button className="px-3 py-1.5 bg-[#EA3A70] text-white rounded-lg hover:bg-[#EA3A70]/90 transition-colors text-sm">
                        File Now
                      </button>
                    </div>
                  </div>
                  <div className="grid grid-cols-4 items-center p-4">
                    <div className="flex items-center">
                      <FileTextIcon className="h-5 w-5 text-indigo-300 mr-2" />
                      <span className="font-medium">Annual Accounts</span>
                    </div>
                    <div className="text-indigo-300">Dec 31, 2023</div>
                    <div>
                      <span className="px-2 py-1 bg-indigo-500/20 text-indigo-300 rounded-full text-xs">
                        Upcoming
                      </span>
                    </div>
                    <div>
                      <button className="px-3 py-1.5 bg-indigo-900/50 text-white rounded-lg border border-indigo-500/30 hover:bg-indigo-800/50 transition-colors text-sm">
                        Prepare
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>}
        </div>
      </div>
      <div className="mt-6 flex justify-end">
        <button className="px-6 py-3 bg-[#EA3A70] text-white rounded-lg hover:bg-[#EA3A70]/90 transition-colors flex items-center">
          Explore Full Platform
          <ArrowRightIcon className="h-4 w-4 ml-2" />
        </button>
      </div>
    </div>;
}