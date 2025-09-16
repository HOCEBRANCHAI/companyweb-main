import React, { useState } from 'react';
import { FileTextIcon, ScrollIcon, ClipboardIcon, GavelIcon, UserIcon, BuildingIcon, SearchIcon, ArrowRightIcon } from 'lucide-react';
export function DocumentTemplateSelector() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const categories = [{
    id: 'all',
    name: 'All Templates',
    icon: <FileTextIcon className="h-4 w-4" />
  }, {
    id: 'corporate',
    name: 'Corporate',
    icon: <BuildingIcon className="h-4 w-4" />
  }, {
    id: 'commercial',
    name: 'Commercial',
    icon: <GavelIcon className="h-4 w-4" />
  }, {
    id: 'employment',
    name: 'Employment',
    icon: <UserIcon className="h-4 w-4" />
  }, {
    id: 'confidentiality',
    name: 'Confidentiality',
    icon: <ClipboardIcon className="h-4 w-4" />
  }];
  const templates = [{
    id: 1,
    title: 'Employment Agreement',
    category: 'employment',
    description: 'Standard employment contract with customizable terms',
    icon: <UserIcon className="h-6 w-6 text-[#EA3A70]" />
  }, {
    id: 2,
    title: 'Non-Disclosure Agreement',
    category: 'confidentiality',
    description: "Protect your company's confidential information",
    icon: <ClipboardIcon className="h-6 w-6 text-[#EA3A70]" />
  }, {
    id: 3,
    title: 'Service Agreement',
    category: 'commercial',
    description: 'Define terms for service provision',
    icon: <ScrollIcon className="h-6 w-6 text-[#EA3A70]" />
  }, {
    id: 4,
    title: 'Shareholders Agreement',
    category: 'corporate',
    description: 'Regulate shareholder relationships and obligations',
    icon: <BuildingIcon className="h-6 w-6 text-[#EA3A70]" />
  }, {
    id: 5,
    title: 'Board Resolution',
    category: 'corporate',
    description: 'Formalize board decisions and authorizations',
    icon: <GavelIcon className="h-6 w-6 text-[#EA3A70]" />
  }, {
    id: 6,
    title: 'Consulting Agreement',
    category: 'commercial',
    description: 'Define the terms of consulting services',
    icon: <ScrollIcon className="h-6 w-6 text-[#EA3A70]" />
  }];
  const filteredTemplates = templates.filter(template => {
    const matchesSearch = template.title.toLowerCase().includes(searchTerm.toLowerCase()) || template.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || template.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });
  return <div className="bg-[#0A0826] rounded-xl border border-indigo-500/30 p-6">
      <div className="mb-6">
        <h3 className="text-xl font-bold text-white mb-4">
          Explore Legal Document Templates
        </h3>
        <p className="text-indigo-200">
          Browse and preview our collection of legally-compliant document
          templates
        </p>
      </div>
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <div className="relative flex-1">
          <SearchIcon className="h-4 w-4 text-indigo-300 absolute left-3 top-1/2 transform -translate-y-1/2" />
          <input type="text" placeholder="Search templates..." className="w-full pl-10 pr-4 py-2 bg-indigo-900/30 border border-indigo-500/30 rounded-lg text-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/50" value={searchTerm} onChange={e => setSearchTerm(e.target.value)} />
        </div>
        <div className="flex overflow-x-auto space-x-2 pb-2">
          {categories.map(category => <button key={category.id} className={`px-4 py-2 rounded-lg text-sm whitespace-nowrap flex items-center ${selectedCategory === category.id ? 'bg-[#EA3A70] text-white' : 'bg-indigo-900/30 text-indigo-200 border border-indigo-500/30 hover:bg-indigo-800/50'}`} onClick={() => setSelectedCategory(category.id)}>
              <span className="mr-2">{category.icon}</span>
              {category.name}
            </button>)}
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredTemplates.map(template => <div key={template.id} className="bg-indigo-900/30 rounded-lg p-4 border border-indigo-500/30 hover:border-[#EA3A70]/50 transition-all cursor-pointer">
            <div className="p-3 rounded-lg bg-indigo-900/50 border border-indigo-500/30 mb-4 inline-block">
              {template.icon}
            </div>
            <h4 className="text-lg font-medium text-white mb-2">
              {template.title}
            </h4>
            <p className="text-indigo-200 text-sm mb-4">
              {template.description}
            </p>
            <button className="px-3 py-1.5 bg-indigo-900/50 text-white rounded-lg border border-indigo-500/30 hover:bg-indigo-800/50 transition-colors text-sm flex items-center">
              Preview Template
              <ArrowRightIcon className="h-3 w-3 ml-1" />
            </button>
          </div>)}
      </div>
    </div>;
}