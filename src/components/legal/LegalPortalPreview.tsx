import React, { useState } from 'react';
import { FileTextIcon, ScrollIcon, ClipboardIcon, GavelIcon, CheckCircleIcon, PlusIcon, SearchIcon, EyeIcon, ArrowRightIcon, CalendarIcon } from 'lucide-react';
export function LegalPortalPreview() {
  const [activeTab, setActiveTab] = useState('agreements');
  const [selectedTemplate, setSelectedTemplate] = useState(null);
  const legalTemplates = [{
    id: 'employment',
    title: 'Employment Agreement',
    description: 'Standard employment contract with customizable terms',
    category: 'HR & Employment',
    estimatedTime: '5-10 minutes',
    icon: <FileTextIcon className="h-5 w-5 text-indigo-300" />
  }, {
    id: 'nda',
    title: 'Non-Disclosure Agreement',
    description: "Protect your company's confidential information",
    category: 'Confidentiality',
    estimatedTime: '3-5 minutes',
    icon: <ClipboardIcon className="h-5 w-5 text-indigo-300" />
  }, {
    id: 'service',
    title: 'Service Agreement',
    description: 'Define terms for service provision',
    category: 'Commercial',
    estimatedTime: '5-7 minutes',
    icon: <ScrollIcon className="h-5 w-5 text-indigo-300" />
  }, {
    id: 'shareholders',
    title: 'Shareholders Agreement',
    description: 'Regulate shareholder relationships and obligations',
    category: 'Corporate',
    estimatedTime: '10-15 minutes',
    icon: <GavelIcon className="h-5 w-5 text-indigo-300" />
  }];
  const recentDocuments = [{
    id: 'doc1',
    title: 'Employment Agreement - John Doe',
    date: '2 days ago',
    icon: <FileTextIcon className="h-5 w-5 text-indigo-300" />
  }, {
    id: 'doc2',
    title: 'Service Agreement - Acme Corp',
    date: '1 week ago',
    icon: <ScrollIcon className="h-5 w-5 text-indigo-300" />
  }];
  return <div className="bg-[#0A0826] rounded-xl border border-indigo-500/30 overflow-hidden shadow-xl">
      {/* Portal Header */}
      <div className="bg-[#0F0B1F] border-b border-indigo-500/30 p-4 flex justify-between items-center">
        <div className="flex items-center">
          <FileTextIcon className="h-6 w-6 text-[#EA3A70] mr-2" />
          <span className="text-white font-bold">Legal Documents Portal</span>
        </div>
        <div className="flex items-center space-x-4">
          <button className="px-3 py-1.5 bg-[#EA3A70] text-white rounded-lg hover:bg-[#EA3A70]/90 transition-colors text-sm flex items-center">
            <PlusIcon className="h-4 w-4 mr-1.5" />
            Custom Agreement
          </button>
        </div>
      </div>
      {/* Portal Navigation */}
      <div className="flex border-b border-indigo-500/30 overflow-x-auto">
        <button onClick={() => setActiveTab('agreements')} className={`px-4 py-3 flex items-center whitespace-nowrap ${activeTab === 'agreements' ? 'border-b-2 border-[#EA3A70] text-white' : 'text-indigo-300'}`}>
          <FileTextIcon className="h-4 w-4 mr-2" />
          Agreements
        </button>
        <button onClick={() => setActiveTab('resolutions')} className={`px-4 py-3 flex items-center whitespace-nowrap ${activeTab === 'resolutions' ? 'border-b-2 border-[#EA3A70] text-white' : 'text-indigo-300'}`}>
          <ScrollIcon className="h-4 w-4 mr-2" />
          Resolutions
        </button>
        <button onClick={() => setActiveTab('poas')} className={`px-4 py-3 flex items-center whitespace-nowrap ${activeTab === 'poas' ? 'border-b-2 border-[#EA3A70] text-white' : 'text-indigo-300'}`}>
          <ClipboardIcon className="h-4 w-4 mr-2" />
          Power of Attorney
        </button>
        <button onClick={() => setActiveTab('recent')} className={`px-4 py-3 flex items-center whitespace-nowrap ${activeTab === 'recent' ? 'border-b-2 border-[#EA3A70] text-white' : 'text-indigo-300'}`}>
          <CalendarIcon className="h-4 w-4 mr-2" />
          Recent Documents
        </button>
      </div>
      {/* Portal Content */}
      <div className="p-6">
        {activeTab === 'agreements' && <div className="space-y-6 animate-fadeIn">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold text-white">Legal Agreements</h3>
              <div className="relative">
                <SearchIcon className="h-4 w-4 text-indigo-300 absolute left-3 top-1/2 transform -translate-y-1/2" />
                <input type="text" placeholder="Search templates..." className="pl-10 pr-4 py-2 bg-indigo-900/30 border border-indigo-500/30 rounded-lg text-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/50" />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {legalTemplates.map(template => <div key={template.id} className="bg-indigo-900/30 rounded-lg p-4 border border-indigo-500/30 hover:border-[#EA3A70]/50 transition-all cursor-pointer" onClick={() => setSelectedTemplate(template.id)}>
                  <div className="flex items-start">
                    <div className="p-2 bg-indigo-900/50 rounded-lg mr-3">
                      {template.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium text-white">
                        {template.title}
                      </h4>
                      <p className="text-indigo-300 text-sm">
                        {template.description}
                      </p>
                      <div className="flex items-center mt-2">
                        <span className="text-xs px-2 py-1 bg-indigo-500/20 text-indigo-300 rounded-full">
                          {template.category}
                        </span>
                        <span className="text-xs text-indigo-300 ml-3">
                          Est. time: {template.estimatedTime}
                        </span>
                      </div>
                    </div>
                    <button className="px-3 py-1.5 bg-indigo-900/50 text-white rounded-lg border border-indigo-500/30 hover:bg-indigo-800/50 transition-colors text-sm flex items-center">
                      Generate
                      <ArrowRightIcon className="h-3 w-3 ml-1" />
                    </button>
                  </div>
                </div>)}
            </div>
          </div>}
        {activeTab === 'recent' && <div className="space-y-6 animate-fadeIn">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold text-white">Recent Documents</h3>
            </div>
            <div className="bg-indigo-900/30 rounded-lg border border-indigo-500/30 overflow-hidden">
              <div className="grid grid-cols-3 text-indigo-300 text-sm border-b border-indigo-500/30 p-3">
                <div>Document Name</div>
                <div>Generated</div>
                <div>Actions</div>
              </div>
              <div className="divide-y divide-indigo-500/30">
                {recentDocuments.map(doc => <div key={doc.id} className="grid grid-cols-3 items-center p-4">
                    <div className="flex items-center">
                      {doc.icon}
                      <span className="font-medium text-white ml-2">
                        {doc.title}
                      </span>
                    </div>
                    <div className="text-indigo-300">{doc.date}</div>
                    <div className="flex space-x-2">
                      <button className="p-2 bg-indigo-900/50 text-white rounded-lg border border-indigo-500/30 hover:bg-indigo-800/50 transition-colors">
                        <EyeIcon className="h-4 w-4" />
                      </button>
                      <button className="p-2 bg-indigo-900/50 text-white rounded-lg border border-indigo-500/30 hover:bg-indigo-800/50 transition-colors">
                        <ArrowRightIcon className="h-4 w-4" />
                      </button>
                    </div>
                  </div>)}
              </div>
            </div>
          </div>}
        {(activeTab === 'resolutions' || activeTab === 'poas') && <div className="text-center py-12">
            <div className="p-3 rounded-lg bg-indigo-900/50 border border-indigo-500/30 mb-4 inline-block">
              {activeTab === 'resolutions' ? <ScrollIcon className="h-6 w-6 text-[#EA3A70]" /> : <ClipboardIcon className="h-6 w-6 text-[#EA3A70]" />}
            </div>
            <h3 className="text-xl font-bold text-white mb-3">
              {activeTab === 'resolutions' ? 'Corporate Resolutions' : 'Power of Attorney'}
            </h3>
            <p className="text-indigo-200 max-w-md mx-auto mb-6">
              {activeTab === 'resolutions' ? 'Create and manage board and shareholder resolutions for your company.' : 'Create power of attorney documents to authorize others to act on your behalf.'}
            </p>
            <button className="px-4 py-2 bg-[#EA3A70] text-white rounded-lg hover:bg-[#EA3A70]/90 transition-colors flex items-center mx-auto">
              <PlusIcon className="h-4 w-4 mr-2" />
              {activeTab === 'resolutions' ? 'New Resolution' : 'New Power of Attorney'}
            </button>
          </div>}
      </div>
      {/* Portal Footer */}
      <div className="bg-[#0F0B1F] border-t border-indigo-500/30 p-3 flex justify-between items-center text-xs text-indigo-300">
        <div>All documents are legally compliant with Dutch law</div>
        <div>Last updated: Today, 10:45 AM</div>
      </div>
    </div>;
}