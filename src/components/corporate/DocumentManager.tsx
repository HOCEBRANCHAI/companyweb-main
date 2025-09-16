import React, { useState } from 'react';
import { FileTextIcon, FolderIcon, SearchIcon, FilterIcon, DownloadIcon, EyeIcon, CalendarIcon, CheckCircleIcon, AlertCircleIcon, ClockIcon, PlusIcon, TagIcon, ArrowRightIcon } from 'lucide-react';
export function DocumentManager() {
  const [activeTab, setActiveTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const documentTabs = [{
    id: 'all',
    label: 'All Documents'
  }, {
    id: 'action',
    label: 'Action Required'
  }, {
    id: 'completed',
    label: 'Completed'
  }, {
    id: 'tax',
    label: 'Tax Documents'
  }, {
    id: 'legal',
    label: 'Legal Documents'
  }, {
    id: 'registration',
    label: 'Registration Forms'
  }];
  const documentFolders = [{
    id: 'company',
    name: 'Company Documents',
    description: 'Documentation for your incorporated entities',
    count: 12,
    icon: <FolderIcon className="h-6 w-6 text-indigo-300" />
  }, {
    id: 'tax',
    name: 'Tax Documents',
    description: 'VAT returns, tax analyses, and annual filings',
    count: 8,
    icon: <FolderIcon className="h-6 w-6 text-indigo-300" />
  }, {
    id: 'legal',
    name: 'Legal Documents',
    description: 'Agreements, contracts, and legal forms',
    count: 15,
    icon: <FolderIcon className="h-6 w-6 text-indigo-300" />
  }];
  const recentDocuments = [{
    id: 1,
    name: 'VAT Analysis Q1 2024.pdf',
    type: 'pdf',
    date: 'Apr 2, 2024',
    status: 'completed',
    tags: ['tax', 'quarterly']
  }, {
    id: 2,
    name: 'Branch Registration Form.pdf',
    type: 'pdf',
    date: 'Mar 15, 2024',
    status: 'completed',
    tags: ['registration', 'branch']
  }, {
    id: 3,
    name: 'UBO Statement.pdf',
    type: 'pdf',
    date: 'Mar 10, 2024',
    status: 'action_required',
    tags: ['compliance', 'requires-signature']
  }, {
    id: 4,
    name: 'Service Agreement.docx',
    type: 'docx',
    date: 'Feb 28, 2024',
    status: 'action_required',
    tags: ['legal', 'requires-signature']
  }, {
    id: 5,
    name: 'Corporate Tax Return 2023.pdf',
    type: 'pdf',
    date: 'Feb 15, 2024',
    status: 'completed',
    tags: ['tax', 'annual']
  }];
  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return <CheckCircleIcon className="h-5 w-5 text-green-400" />;
      case 'action_required':
        return <AlertCircleIcon className="h-5 w-5 text-[#EA3A70]" />;
      default:
        return <ClockIcon className="h-5 w-5 text-yellow-400" />;
    }
  };
  return <div className="bg-[#1B1537]/80 backdrop-blur-sm rounded-xl border border-[#2D2755] overflow-hidden">
      <div className="p-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-xl font-bold text-white">
              Document Management
            </h3>
            <p className="text-indigo-200 mt-1">
              Organize, store, and manage your corporate documents securely
            </p>
          </div>
          <button className="px-4 py-2 bg-[#EA3A70] text-white rounded-lg hover:bg-[#EA3A70]/90 transition-colors text-sm font-medium flex items-center">
            <PlusIcon className="h-4 w-4 mr-2" />
            Upload Document
          </button>
        </div>
        <div className="relative mb-6">
          <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-indigo-300" />
          <input type="text" placeholder="Search documents..." className="w-full pl-10 pr-4 py-3 bg-indigo-900/30 border border-indigo-500/30 rounded-lg text-white placeholder-indigo-300 focus:outline-none focus:ring-2 focus:ring-[#EA3A70]/50" value={searchQuery} onChange={e => setSearchQuery(e.target.value)} />
          <button className="absolute right-3 top-1/2 transform -translate-y-1/2 p-1 bg-indigo-900/50 rounded-md text-indigo-300 hover:text-white">
            <FilterIcon className="h-5 w-5" />
          </button>
        </div>
        <div className="flex overflow-x-auto mb-6 border-b border-indigo-500/30">
          {documentTabs.map(tab => <button key={tab.id} onClick={() => setActiveTab(tab.id)} className={`px-4 py-2 font-medium text-sm whitespace-nowrap ${activeTab === tab.id ? 'text-[#EA3A70] border-b-2 border-[#EA3A70]' : 'text-indigo-300 hover:text-white'}`}>
              {tab.label}
            </button>)}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {documentFolders.map(folder => <div key={folder.id} className="bg-indigo-900/30 rounded-lg p-4 border border-indigo-500/30 hover:border-[#EA3A70]/30 transition-colors cursor-pointer">
              <div className="flex items-start justify-between mb-3">
                <div className="p-2 bg-indigo-900/50 rounded-lg">
                  {folder.icon}
                </div>
                <span className="px-2 py-1 bg-indigo-900/50 rounded-full text-xs text-indigo-200">
                  {folder.count} files
                </span>
              </div>
              <h4 className="text-lg font-medium text-white mb-1">
                {folder.name}
              </h4>
              <p className="text-sm text-indigo-300 mb-3">
                {folder.description}
              </p>
              <button className="text-[#EA3A70] text-sm font-medium flex items-center hover:text-[#EA3A70]/80">
                View Folder
                <ArrowRightIcon className="h-4 w-4 ml-1" />
              </button>
            </div>)}
        </div>
        <h4 className="text-lg font-medium text-white mb-4">
          Recent Documents
        </h4>
        <div className="space-y-2">
          {recentDocuments.map(doc => <div key={doc.id} className="bg-indigo-900/30 rounded-lg p-4 border border-indigo-500/30 flex items-center justify-between">
              <div className="flex items-center">
                <div className="p-2 bg-indigo-900/50 rounded-lg mr-3">
                  <FileTextIcon className="h-5 w-5 text-indigo-300" />
                </div>
                <div>
                  <h5 className="text-white font-medium">{doc.name}</h5>
                  <div className="flex items-center mt-1">
                    <span className="text-xs text-indigo-300 flex items-center mr-3">
                      <CalendarIcon className="h-3.5 w-3.5 mr-1" />
                      {doc.date}
                    </span>
                    <div className="flex items-center space-x-1">
                      {doc.tags.map(tag => <span key={tag} className="px-2 py-0.5 bg-indigo-900/50 rounded-full text-xs text-indigo-300">
                          {tag}
                        </span>)}
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <div className="p-1.5 bg-indigo-900/50 rounded-lg">
                  {getStatusIcon(doc.status)}
                </div>
                <button className="p-1.5 bg-indigo-900/50 rounded-lg text-indigo-300 hover:text-white">
                  <EyeIcon className="h-5 w-5" />
                </button>
                <button className="p-1.5 bg-indigo-900/50 rounded-lg text-indigo-300 hover:text-white">
                  <DownloadIcon className="h-5 w-5" />
                </button>
              </div>
            </div>)}
        </div>
        <div className="mt-6 text-center">
          <button className="px-4 py-2 bg-indigo-900/50 border border-indigo-500/30 text-white rounded-lg hover:bg-indigo-800/50 transition-colors text-sm font-medium inline-flex items-center">
            View All Documents
            <ArrowRightIcon className="h-4 w-4 ml-2" />
          </button>
        </div>
      </div>
    </div>;
}