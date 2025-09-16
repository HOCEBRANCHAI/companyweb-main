import React, { useState } from 'react';
import { BarChart2Icon, ArrowRightIcon, FileTextIcon, FileIcon, BuildingIcon, EditIcon } from 'lucide-react';
import { TabsNavigation } from '../common/TabsNavigation';
export function FinancialProfile() {
  const [activeTab, setActiveTab] = useState('overview');
  const [isEditing, setIsEditing] = useState(false);
  const companyData = {
    name: 'Tech Innovations B.V.',
    type: 'Private Limited Company',
    status: 'Active'
  };
  const tabs = [{
    id: 'overview',
    label: 'Overview',
    icon: <BarChart2Icon className="h-4 w-4" />
  }, {
    id: 'transactions',
    label: 'Transactions',
    icon: <ArrowRightIcon className="h-4 w-4" />
  }, {
    id: 'reports',
    label: 'Reports',
    icon: <FileTextIcon className="h-4 w-4" />
  }, {
    id: 'documents',
    label: 'Documents',
    icon: <FileIcon className="h-4 w-4" />
  }];
  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId);
  };
  return <div className="bg-[#0A0826] p-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
        <div className="flex items-center mb-4 md:mb-0">
          <div className="p-3 bg-[#EA3A70]/20 rounded-xl mr-4">
            <BuildingIcon className="h-8 w-8 text-[#EA3A70]" />
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-white">
              {companyData.name}
            </h1>
            <p className="text-indigo-300">
              {companyData.type} • {companyData.status}
            </p>
          </div>
        </div>
        <button onClick={() => setIsEditing(true)} className="px-4 py-2 bg-[#EA3A70] text-white rounded-xl hover:bg-[#EA3A70]/90 transition-colors flex items-center">
          <EditIcon className="h-4 w-4 mr-2" />
          Edit Company Details
        </button>
      </div>
      <div className="mb-6">
        <TabsNavigation activeTab={activeTab} onTabChange={handleTabChange} tabs={tabs} />
      </div>
      <div className="bg-indigo-800/30 backdrop-blur-md rounded-2xl border border-indigo-500/30 p-6">
        {activeTab === 'overview' && <div>
            <h2 className="text-xl font-bold text-white mb-4">
              Financial Overview
            </h2>
            <p className="text-indigo-200">
              Your financial overview dashboard showing key metrics and
              summaries.
            </p>
          </div>}
        {activeTab === 'transactions' && <div>
            <h2 className="text-xl font-bold text-white mb-4">Transactions</h2>
            <p className="text-indigo-200">
              View and manage your recent financial transactions.
            </p>
          </div>}
        {activeTab === 'reports' && <div>
            <h2 className="text-xl font-bold text-white mb-4">
              Financial Reports
            </h2>
            <p className="text-indigo-200">
              Access and generate financial reports for your business.
            </p>
          </div>}
        {activeTab === 'documents' && <div>
            <h2 className="text-xl font-bold text-white mb-4">
              Financial Documents
            </h2>
            <p className="text-indigo-200">
              View and manage your financial documents and statements.
            </p>
          </div>}
      </div>
    </div>;
}