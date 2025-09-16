import React, { useState } from 'react';
import { FileTextIcon, FolderIcon, DownloadIcon, SearchIcon, PlusIcon, ClockIcon, CheckCircleIcon, FileIcon, FileSignatureIcon, TagIcon, CalendarIcon, ArrowUpIcon, FilterIcon, ArrowDownIcon, ArrowRightIcon, InfoIcon, StarIcon, EyeIcon } from 'lucide-react';
interface Document {
  id: string;
  name: string;
  type: string;
  category: string;
  date: string;
  status: 'draft' | 'pending' | 'completed';
  starred?: boolean;
  tags?: string[];
}
interface DocumentTemplate {
  id: string;
  name: string;
  description: string;
  category: string;
  required?: boolean;
}
export function Documents() {
  const [activeTab, setActiveTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('date');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('desc');
  const [showTemplateModal, setShowTemplateModal] = useState(false);
  const [selectedTemplate, setSelectedTemplate] = useState<DocumentTemplate | null>(null);
  const [documents, setDocuments] = useState<Document[]>([{
    id: '1',
    name: 'VAT Analysis Q1 2024.pdf',
    type: 'pdf',
    category: 'tax',
    date: '2024-04-02',
    status: 'completed',
    starred: true,
    tags: ['tax', 'quarterly']
  }, {
    id: '2',
    name: 'Branch Registration Form.pdf',
    type: 'pdf',
    category: 'registration',
    date: '2024-03-15',
    status: 'completed',
    tags: ['registration', 'branch']
  }, {
    id: '3',
    name: 'UBO Statement.pdf',
    type: 'pdf',
    category: 'compliance',
    date: '2024-03-10',
    status: 'pending',
    tags: ['compliance', 'requires-signature']
  }, {
    id: '4',
    name: 'Service Agreement.docx',
    type: 'docx',
    category: 'legal',
    date: '2024-02-28',
    status: 'pending',
    tags: ['legal', 'requires-signature']
  }, {
    id: '5',
    name: 'Corporate Tax Return 2023.pdf',
    type: 'pdf',
    category: 'tax',
    date: '2024-02-15',
    status: 'completed',
    starred: true,
    tags: ['tax', 'annual']
  }, {
    id: '6',
    name: 'Employee Registration Form.pdf',
    type: 'pdf',
    category: 'hr',
    date: '2024-01-20',
    status: 'completed',
    tags: ['hr', 'employee']
  }, {
    id: '7',
    name: 'Lease Agreement.pdf',
    type: 'pdf',
    category: 'legal',
    date: '2023-12-05',
    status: 'completed',
    tags: ['legal', 'property']
  }]);
  const documentTemplates: DocumentTemplate[] = [{
    id: 't1',
    name: 'UBO Statement',
    description: 'Ultimate Beneficial Owner declaration required for regulatory compliance',
    category: 'compliance',
    required: true
  }, {
    id: 't2',
    name: 'Service Agreement',
    description: 'Standard agreement for services between your company and House of Companies',
    category: 'legal',
    required: true
  }, {
    id: 't3',
    name: 'Director Appointment',
    description: 'Form to appoint a new director to your company',
    category: 'legal'
  }, {
    id: 't4',
    name: 'Power of Attorney',
    description: 'Legal authorization for a representative to act on your behalf',
    category: 'legal'
  }, {
    id: 't5',
    name: 'Bank Account Opening Form',
    description: 'Pre-filled form for opening a business bank account',
    category: 'financial'
  }, {
    id: 't6',
    name: 'Employee Contract',
    description: 'Standard employment contract template compliant with Dutch law',
    category: 'hr'
  }];
  const filteredDocuments = documents.filter(doc => {
    const matchesTab = activeTab === 'all' || activeTab === 'pending' && doc.status === 'pending' || activeTab === 'completed' && doc.status === 'completed' || activeTab === 'starred' && doc.starred || doc.category === activeTab;
    const matchesSearch = doc.name.toLowerCase().includes(searchQuery.toLowerCase()) || doc.tags && doc.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesTab && matchesSearch;
  });
  const sortedDocuments = [...filteredDocuments].sort((a, b) => {
    if (sortBy === 'date') {
      return sortOrder === 'asc' ? new Date(a.date).getTime() - new Date(b.date).getTime() : new Date(b.date).getTime() - new Date(a.date).getTime();
    } else if (sortBy === 'name') {
      return sortOrder === 'asc' ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name);
    } else if (sortBy === 'type') {
      return sortOrder === 'asc' ? a.type.localeCompare(b.type) : b.type.localeCompare(a.type);
    }
    return 0;
  });
  const toggleStar = (id: string) => {
    setDocuments(documents.map(doc => doc.id === id ? {
      ...doc,
      starred: !doc.starred
    } : doc));
  };
  const getDocumentIcon = (type: string) => {
    switch (type) {
      case 'pdf':
        return <FileTextIcon className="h-5 w-5 text-indigo-300" />;
      case 'docx':
        return <FileIcon className="h-5 w-5 text-blue-300" />;
      default:
        return <FileIcon className="h-5 w-5 text-gray-300" />;
    }
  };
  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'completed':
        return <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
            <CheckCircleIcon className="h-3 w-3 mr-1" />
            Completed
          </span>;
      case 'pending':
        return <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
            <ClockIcon className="h-3 w-3 mr-1" />
            Action Required
          </span>;
      default:
        return <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
            Draft
          </span>;
    }
  };
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };
  const TemplateModal = () => {
    return <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
        <div className="bg-[#1E1B3F] rounded-2xl border border-indigo-500/30 shadow-xl max-w-3xl w-full m-4 animate-fadeInUp">
          <div className="flex items-center justify-between p-6 border-b border-indigo-500/30">
            <h2 className="text-xl font-bold text-white">Document Templates</h2>
            <button onClick={() => setShowTemplateModal(false)} className="text-indigo-300 hover:text-white transition-colors">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="p-6">
            <p className="text-indigo-200 mb-6">
              Select a template to generate a new document. Required templates
              are part of your onboarding process.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {documentTemplates.map(template => <div key={template.id} className={`bg-indigo-900/30 rounded-xl border ${selectedTemplate?.id === template.id ? 'border-[#EA3A70]' : 'border-indigo-500/30'} p-4 cursor-pointer hover:bg-indigo-800/30 transition-colors`} onClick={() => setSelectedTemplate(template)}>
                  <div className="flex items-start">
                    <div className="p-2 bg-indigo-900/50 rounded-lg mr-3">
                      <FileSignatureIcon className="h-5 w-5 text-indigo-300" />
                    </div>
                    <div>
                      <div className="flex items-center">
                        <h3 className="font-medium text-white">
                          {template.name}
                        </h3>
                        {template.required && <span className="ml-2 px-2 py-0.5 text-xs font-medium bg-[#EA3A70]/20 text-[#EA3A70] rounded-full">
                            Required
                          </span>}
                      </div>
                      <p className="text-sm text-indigo-200 mt-1">
                        {template.description}
                      </p>
                    </div>
                  </div>
                </div>)}
            </div>
            <div className="flex justify-end mt-6 space-x-3">
              <button onClick={() => setShowTemplateModal(false)} className="px-4 py-2 bg-indigo-900/50 border border-indigo-500/30 rounded-xl text-white hover:bg-indigo-800/50 transition-colors">
                Cancel
              </button>
              <button onClick={() => {
              setShowTemplateModal(false);
            }} disabled={!selectedTemplate} className={`px-4 py-2 rounded-xl text-white flex items-center ${selectedTemplate ? 'bg-[#EA3A70] hover:bg-[#EA3A70]/90' : 'bg-gray-600 cursor-not-allowed'} transition-colors`}>
                <PlusIcon className="h-4 w-4 mr-2" />
                Generate Document
              </button>
            </div>
          </div>
        </div>
      </div>;
  };
  return <div className="min-h-screen bg-[#0A0826] p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-white mb-2">Documents</h1>
            <p className="text-indigo-300">
              Manage all your documents and templates in one place
            </p>
          </div>
          <div className="mt-4 md:mt-0 flex space-x-3">
            <button onClick={() => setShowTemplateModal(true)} className="px-4 py-2 bg-indigo-900/50 border border-indigo-500/30 rounded-xl text-white hover:bg-indigo-800/50 transition-colors flex items-center">
              <FileTextIcon className="h-4 w-4 mr-2" />
              Templates
            </button>
            <button className="px-4 py-2 bg-[#EA3A70] text-white rounded-xl hover:bg-[#EA3A70]/90 transition-colors font-medium flex items-center">
              <PlusIcon className="h-4 w-4 mr-2" />
              Upload Document
            </button>
          </div>
        </div>
        <div className="bg-indigo-900/30 backdrop-blur-md rounded-2xl border border-indigo-500/30 p-5 mb-8">
          <div className="flex items-start">
            <div className="p-2 bg-indigo-900/50 rounded-lg mr-4 mt-1">
              <InfoIcon className="h-5 w-5 text-indigo-300" />
            </div>
            <div>
              <h3 className="text-lg font-medium text-white mb-1">
                Document Management
              </h3>
              <p className="text-indigo-200">
                This page shows documents created using our portal, including
                VAT analyses, registration forms, and legal documents. Company
                documentation for incorporated entities is in the "Company
                Documents" folder. Your main company KYC documentation is
                available in the{' '}
                <a href="/kyc" className="text-[#EA3A70] hover:underline">
                  KYC section
                </a>
                .
              </p>
            </div>
          </div>
        </div>
        <div className="bg-indigo-800/30 backdrop-blur-md rounded-2xl border border-indigo-500/30 p-5 mb-8">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="relative flex-grow">
              <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-indigo-300 h-5 w-5" />
              <input type="text" placeholder="Search documents..." value={searchQuery} onChange={e => setSearchQuery(e.target.value)} className="w-full bg-indigo-900/50 border border-indigo-500/40 rounded-xl pl-10 pr-4 py-2 text-white placeholder-indigo-300 focus:outline-none focus:ring-2 focus:ring-[#EA3A70]" />
            </div>
            <div className="flex items-center gap-2 w-full md:w-auto">
              <div className="flex items-center bg-indigo-900/50 border border-indigo-500/40 rounded-xl px-3 py-2 text-white">
                <span className="text-sm mr-2">Sort by:</span>
                <select value={sortBy} onChange={e => setSortBy(e.target.value)} className="bg-transparent text-indigo-300 focus:outline-none">
                  <option value="date">Date</option>
                  <option value="name">Name</option>
                  <option value="type">Type</option>
                </select>
                <button onClick={() => setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')} className="ml-2 text-indigo-300 hover:text-white">
                  {sortOrder === 'asc' ? <ArrowUpIcon className="h-4 w-4" /> : <ArrowDownIcon className="h-4 w-4" />}
                </button>
              </div>
              <button className="p-2 bg-indigo-900/50 border border-indigo-500/40 rounded-xl text-indigo-300 hover:text-white transition-colors">
                <FilterIcon className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
        <div className="flex overflow-x-auto scrollbar-thin scrollbar-thumb-indigo-700 scrollbar-track-indigo-900 pb-2 mb-6">
          <button onClick={() => setActiveTab('all')} className={`px-4 py-2 rounded-xl mr-2 whitespace-nowrap ${activeTab === 'all' ? 'bg-[#EA3A70] text-white' : 'bg-indigo-900/50 text-indigo-300 hover:bg-indigo-800/50 hover:text-white'} transition-colors`}>
            All Documents
          </button>
          <button onClick={() => setActiveTab('pending')} className={`px-4 py-2 rounded-xl mr-2 whitespace-nowrap ${activeTab === 'pending' ? 'bg-[#EA3A70] text-white' : 'bg-indigo-900/50 text-indigo-300 hover:bg-indigo-800/50 hover:text-white'} transition-colors`}>
            Action Required
          </button>
          <button onClick={() => setActiveTab('completed')} className={`px-4 py-2 rounded-xl mr-2 whitespace-nowrap ${activeTab === 'completed' ? 'bg-[#EA3A70] text-white' : 'bg-indigo-900/50 text-indigo-300 hover:bg-indigo-800/50 hover:text-white'} transition-colors`}>
            Completed
          </button>
          <button onClick={() => setActiveTab('starred')} className={`px-4 py-2 rounded-xl mr-2 whitespace-nowrap ${activeTab === 'starred' ? 'bg-[#EA3A70] text-white' : 'bg-indigo-900/50 text-indigo-300 hover:bg-indigo-800/50 hover:text-white'} transition-colors`}>
            Starred
          </button>
          <div className="h-10 border-r border-indigo-500/30 mx-2"></div>
          <button onClick={() => setActiveTab('tax')} className={`px-4 py-2 rounded-xl mr-2 whitespace-nowrap ${activeTab === 'tax' ? 'bg-[#EA3A70] text-white' : 'bg-indigo-900/50 text-indigo-300 hover:bg-indigo-800/50 hover:text-white'} transition-colors`}>
            Tax Documents
          </button>
          <button onClick={() => setActiveTab('legal')} className={`px-4 py-2 rounded-xl mr-2 whitespace-nowrap ${activeTab === 'legal' ? 'bg-[#EA3A70] text-white' : 'bg-indigo-900/50 text-indigo-300 hover:bg-indigo-800/50 hover:text-white'} transition-colors`}>
            Legal Documents
          </button>
          <button onClick={() => setActiveTab('registration')} className={`px-4 py-2 rounded-xl mr-2 whitespace-nowrap ${activeTab === 'registration' ? 'bg-[#EA3A70] text-white' : 'bg-indigo-900/50 text-indigo-300 hover:bg-indigo-800/50 hover:text-white'} transition-colors`}>
            Registration Forms
          </button>
        </div>
        <div className="mb-8">
          <h2 className="text-xl font-bold text-white mb-4">Folders</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-indigo-800/30 backdrop-blur-md rounded-2xl border border-indigo-500/30 p-5 hover:bg-indigo-700/30 transition-colors cursor-pointer">
              <div className="flex items-center mb-3">
                <div className="p-2 bg-indigo-900/50 rounded-lg mr-3">
                  <FolderIcon className="h-5 w-5 text-indigo-300" />
                </div>
                <h3 className="text-lg font-medium text-white">
                  Company Documents
                </h3>
              </div>
              <p className="text-indigo-200 text-sm mb-3">
                Documentation for your incorporated entities
              </p>
              <div className="flex justify-between items-center">
                <span className="text-xs text-indigo-300">12 documents</span>
                <ArrowRightIcon className="h-4 w-4 text-indigo-300" />
              </div>
            </div>
            <div className="bg-indigo-800/30 backdrop-blur-md rounded-2xl border border-indigo-500/30 p-5 hover:bg-indigo-700/30 transition-colors cursor-pointer">
              <div className="flex items-center mb-3">
                <div className="p-2 bg-indigo-900/50 rounded-lg mr-3">
                  <FolderIcon className="h-5 w-5 text-indigo-300" />
                </div>
                <h3 className="text-lg font-medium text-white">
                  Tax Documents
                </h3>
              </div>
              <p className="text-indigo-200 text-sm mb-3">
                VAT returns, tax analyses, and annual filings
              </p>
              <div className="flex justify-between items-center">
                <span className="text-xs text-indigo-300">8 documents</span>
                <ArrowRightIcon className="h-4 w-4 text-indigo-300" />
              </div>
            </div>
            <div className="bg-indigo-800/30 backdrop-blur-md rounded-2xl border border-indigo-500/30 p-5 hover:bg-indigo-700/30 transition-colors cursor-pointer">
              <div className="flex items-center mb-3">
                <div className="p-2 bg-indigo-900/50 rounded-lg mr-3">
                  <FolderIcon className="h-5 w-5 text-indigo-300" />
                </div>
                <h3 className="text-lg font-medium text-white">
                  Legal Documents
                </h3>
              </div>
              <p className="text-indigo-200 text-sm mb-3">
                Agreements, contracts, and legal forms
              </p>
              <div className="flex justify-between items-center">
                <span className="text-xs text-indigo-300">15 documents</span>
                <ArrowRightIcon className="h-4 w-4 text-indigo-300" />
              </div>
            </div>
          </div>
        </div>
        <div>
          <h2 className="text-xl font-bold text-white mb-4">
            Recent Documents
          </h2>
          {sortedDocuments.length > 0 ? <div className="bg-indigo-800/30 backdrop-blur-md rounded-2xl border border-indigo-500/30 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-indigo-500/30">
                  <thead className="bg-indigo-900/50">
                    <tr>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-indigo-300 uppercase tracking-wider">
                        Name
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-indigo-300 uppercase tracking-wider">
                        Date
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-indigo-300 uppercase tracking-wider">
                        Status
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-indigo-300 uppercase tracking-wider">
                        Tags
                      </th>
                      <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-indigo-300 uppercase tracking-wider">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-indigo-500/30">
                    {sortedDocuments.map(doc => <tr key={doc.id} className="hover:bg-indigo-700/30 transition-colors">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <button onClick={() => toggleStar(doc.id)} className={`mr-2 ${doc.starred ? 'text-yellow-400' : 'text-indigo-500/30 hover:text-indigo-300'}`}>
                              <StarIcon className="h-5 w-5" fill={doc.starred ? 'currentColor' : 'none'} />
                            </button>
                            <div className="p-2 bg-indigo-900/50 rounded-lg mr-3">
                              {getDocumentIcon(doc.type)}
                            </div>
                            <div>
                              <div className="font-medium text-white">
                                {doc.name}
                              </div>
                              <div className="text-xs text-indigo-300">
                                {doc.type.toUpperCase()}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center text-indigo-200">
                            <CalendarIcon className="h-4 w-4 mr-2 text-indigo-400" />
                            {formatDate(doc.date)}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-indigo-200">
                            {getStatusBadge(doc.status)}
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex flex-wrap gap-1">
                            {doc.tags?.map((tag, idx) => <span key={idx} className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-indigo-900/50 text-indigo-200">
                                <TagIcon className="h-3 w-3 mr-1" />
                                {tag}
                              </span>)}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                          <div className="flex justify-end space-x-2">
                            <button className="p-1.5 bg-indigo-900/50 rounded-lg text-indigo-300 hover:text-white transition-colors">
                              <EyeIcon className="h-4 w-4" />
                            </button>
                            <button className="p-1.5 bg-indigo-900/50 rounded-lg text-indigo-300 hover:text-white transition-colors">
                              <DownloadIcon className="h-4 w-4" />
                            </button>
                            {doc.status === 'pending' && <button className="p-1.5 bg-[#EA3A70]/20 rounded-lg text-[#EA3A70] hover:bg-[#EA3A70]/30 transition-colors">
                                <FileSignatureIcon className="h-4 w-4" />
                              </button>}
                          </div>
                        </td>
                      </tr>)}
                  </tbody>
                </table>
              </div>
            </div> : <div className="bg-indigo-800/30 backdrop-blur-md rounded-2xl border border-indigo-500/30 p-12 text-center">
              <FileTextIcon className="h-12 w-12 text-indigo-400 mx-auto mb-4" />
              <h3 className="text-xl font-medium text-white mb-2">
                No documents found
              </h3>
              <p className="text-indigo-300 mb-6">
                Try adjusting your search or filters to find documents
              </p>
              <button className="px-4 py-2 bg-[#EA3A70] text-white rounded-xl hover:bg-[#EA3A70]/90 transition-colors font-medium inline-flex items-center">
                <PlusIcon className="h-4 w-4 mr-2" />
                Upload Document
              </button>
            </div>}
        </div>
      </div>
      {showTemplateModal && <TemplateModal />}
    </div>;
}