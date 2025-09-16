import React, { useState } from 'react';
import { FileTextIcon, PlusIcon, SearchIcon, ArrowRightIcon, EyeIcon } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
interface Template {
  id: string;
  title: string;
  category: string;
  description: string;
  estimatedTime: string;
}
export function Agreements() {
  const navigate = useNavigate();
  const [selectedTemplate, setSelectedTemplate] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const templates: Template[] = [{
    id: 'emp-agreement',
    title: 'Employment Agreement',
    category: 'HR & Employment',
    description: 'Standard employment contract with customizable terms',
    estimatedTime: '5-10 minutes'
  }, {
    id: 'nda',
    title: 'Non-Disclosure Agreement',
    category: 'Confidentiality',
    description: "Protect your company's confidential information",
    estimatedTime: '3-5 minutes'
  }, {
    id: 'service-agreement',
    title: 'Service Agreement',
    category: 'Commercial',
    description: 'Define terms for service provision',
    estimatedTime: '5-7 minutes'
  }, {
    id: 'shareholder-agreement',
    title: 'Shareholders Agreement',
    category: 'Corporate',
    description: 'Regulate shareholder relationships and obligations',
    estimatedTime: '10-15 minutes'
  }];
  const filteredTemplates = templates.filter(template => template.title.toLowerCase().includes(searchQuery.toLowerCase()));
  return <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Legal Agreements</h1>
          <p className="text-gray-600 mt-1">
            Generate legally-compliant documents with AI assistance
          </p>
        </div>
        <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 text-sm font-medium">
          <PlusIcon className="h-4 w-4 mr-2" />
          Custom Agreement
        </button>
      </div>
      {/* Search Bar */}
      <div className="relative">
        <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
        <input type="text" placeholder="Search templates..." value={searchQuery} onChange={e => setSearchQuery(e.target.value)} className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500" />
      </div>
      {/* Templates Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredTemplates.map(template => <div key={template.id} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-lg font-medium text-gray-900">
                  {template.title}
                </h3>
                <p className="text-sm text-gray-500 mt-1">
                  {template.description}
                </p>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800 mt-2">
                  {template.category}
                </span>
              </div>
              <FileTextIcon className="h-6 w-6 text-gray-400" />
            </div>
            <div className="mt-4 flex items-center justify-between">
              <span className="text-sm text-gray-500">
                Est. time: {template.estimatedTime}
              </span>
              {template.id === 'nda' ? <button onClick={() => navigate('/agreements/nda')} className="flex items-center text-blue-600 hover:text-blue-800">
                  Generate
                  <ArrowRightIcon className="ml-2 h-4 w-4" />
                </button> : <button onClick={() => setSelectedTemplate(template.id)} className="flex items-center text-blue-600 hover:text-blue-800">
                  Generate
                  <ArrowRightIcon className="ml-2 h-4 w-4" />
                </button>}
            </div>
          </div>)}
      </div>
      {/* Recent Documents */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <h2 className="text-lg font-medium text-gray-900 mb-4">
          Recent Documents
        </h2>
        <div className="space-y-4">
          {[1, 2, 3].map(i => <div key={i} className="flex items-center justify-between py-3 border-b border-gray-200 last:border-0">
              <div className="flex items-center">
                <FileTextIcon className="h-5 w-5 text-gray-400 mr-3" />
                <div>
                  <p className="text-sm font-medium text-gray-900">
                    Employment Agreement - John Doe
                  </p>
                  <p className="text-sm text-gray-500">Generated 2 days ago</p>
                </div>
              </div>
              <button className="text-gray-400 hover:text-gray-600">
                <EyeIcon className="h-5 w-5" />
              </button>
            </div>)}
        </div>
      </div>
    </div>;
}