import React, { useState } from 'react';
import { FileTextIcon, BookIcon, ScrollIcon, GavelIcon, CheckCircleIcon, ClipboardIcon, PlusIcon, ChevronDownIcon } from 'lucide-react';
import { Agreements } from '../../components/company/Agreements';
import { PageHeader } from '../../components/common/PageHeader';
export function LegalDrafts() {
  const [activeCategory, setActiveCategory] = useState('agreements');
  const [activeTab, setActiveTab] = useState('agreements');
  const menuItems = [{
    label: 'Agreements',
    active: activeTab === 'agreements',
    onClick: () => setActiveTab('agreements')
  }, {
    label: 'Resolutions',
    active: activeTab === 'resolutions',
    onClick: () => setActiveTab('resolutions')
  }, {
    label: 'Power of Attorney',
    active: activeTab === 'poas',
    onClick: () => setActiveTab('poas')
  }, {
    label: 'Board Meetings',
    active: activeTab === 'meetings',
    onClick: () => setActiveTab('meetings')
  }];
  return <div className="min-h-screen bg-[#0A0826] text-white">
      <div className="container mx-auto px-4 py-8">
        <PageHeader title="Legal Drafts" subtitle="Private Limited Company • Active" icon={<FileTextIcon className="h-8 w-8 text-indigo-300" />} menuItems={menuItems} onEditClick={() => console.log('Edit clicked')} />
        <div className="mb-6">
          <div className="bg-[#1E1B3F] backdrop-blur-md rounded-2xl border border-indigo-500/30 p-1">
            <div className="flex flex-wrap">
              <button onClick={() => setActiveCategory('agreements')} className={`py-3 px-5 rounded-xl font-medium text-sm transition-colors flex items-center ${activeCategory === 'agreements' ? 'bg-[#EA3A70] text-white shadow-md' : 'text-indigo-200 hover:bg-indigo-800/50 hover:text-white'}`}>
                <FileTextIcon className="h-4 w-4 mr-2" />
                Agreements
              </button>
              <button onClick={() => setActiveCategory('resolutions')} className={`py-3 px-5 rounded-xl font-medium text-sm transition-colors flex items-center ${activeCategory === 'resolutions' ? 'bg-[#EA3A70] text-white shadow-md' : 'text-indigo-200 hover:bg-indigo-800/50 hover:text-white'}`}>
                <ScrollIcon className="h-4 w-4 mr-2" />
                Resolutions
              </button>
              <button onClick={() => setActiveCategory('poas')} className={`py-3 px-5 rounded-xl font-medium text-sm transition-colors flex items-center ${activeCategory === 'poas' ? 'bg-[#EA3A70] text-white shadow-md' : 'text-indigo-200 hover:bg-indigo-800/50 hover:text-white'}`}>
                <ClipboardIcon className="h-4 w-4 mr-2" />
                Power of Attorney
              </button>
              <div className="relative py-3 px-5 rounded-xl font-medium text-sm text-indigo-200 hover:bg-indigo-800/50 hover:text-white transition-colors flex items-center cursor-pointer group">
                <GavelIcon className="h-4 w-4 mr-2" />
                Legal Areas
                <ChevronDownIcon className="h-4 w-4 ml-2" />
                <div className="absolute left-0 top-full mt-1 w-48 bg-[#1E1B3F] border border-indigo-500/30 rounded-xl shadow-xl backdrop-blur-md py-2 hidden group-hover:block z-10">
                  <button className="w-full text-left px-4 py-2 text-indigo-200 hover:bg-indigo-800/50 hover:text-white text-sm">
                    Company Law
                  </button>
                  <button className="w-full text-left px-4 py-2 text-indigo-200 hover:bg-indigo-800/50 hover:text-white text-sm">
                    Labor Law
                  </button>
                  <button className="w-full text-left px-4 py-2 text-indigo-200 hover:bg-indigo-800/50 hover:text-white text-sm">
                    Tax Law
                  </button>
                  <button className="w-full text-left px-4 py-2 text-indigo-200 hover:bg-indigo-800/50 hover:text-white text-sm">
                    Board Meetings
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-indigo-800/30 backdrop-blur-md rounded-2xl border border-indigo-500/30 p-6">
          {activeCategory === 'agreements' && <div className="text-white">
              <Agreements />
            </div>}
          {activeCategory === 'resolutions' && <div className="text-center py-12">
              <ScrollIcon className="h-12 w-12 text-indigo-300 mx-auto mb-4" />
              <h3 className="text-xl font-medium mb-2">
                Corporate Resolutions
              </h3>
              <p className="text-indigo-200 max-w-md mx-auto">
                Create and manage board and shareholder resolutions for your
                company.
              </p>
              <button className="mt-6 px-4 py-2 bg-[#EA3A70] text-white rounded-xl hover:bg-[#EA3A70]/90 transition-colors flex items-center mx-auto">
                <PlusIcon className="h-4 w-4 mr-2" />
                New Resolution
              </button>
            </div>}
          {activeCategory === 'poas' && <div className="text-center py-12">
              <ClipboardIcon className="h-12 w-12 text-indigo-300 mx-auto mb-4" />
              <h3 className="text-xl font-medium mb-2">Power of Attorney</h3>
              <p className="text-indigo-200 max-w-md mx-auto">
                Create power of attorney documents to authorize others to act on
                your behalf.
              </p>
              <button className="mt-6 px-4 py-2 bg-[#EA3A70] text-white rounded-xl hover:bg-[#EA3A70]/90 transition-colors flex items-center mx-auto">
                <PlusIcon className="h-4 w-4 mr-2" />
                New Power of Attorney
              </button>
            </div>}
        </div>
      </div>
    </div>;
}