import React, { useState } from 'react';
import { CheckIcon, AlertTriangleIcon, UploadIcon, FileTextIcon, XIcon, InfoIcon, EyeIcon, BuildingIcon, UserIcon, PlusIcon, SearchIcon, FilterIcon, ClockIcon, ShieldIcon, UserPlusIcon, ChevronDownIcon, CheckCircleIcon, GlobeIcon } from 'lucide-react';
import { DocumentUploadCard, Document } from './DocumentUploadCard';
interface CompanyProfile {
  id: string;
  name: string;
  type: 'base' | 'target';
  country: string;
  registrationNumber: string;
  status: 'active' | 'pending' | 'inactive';
}
interface KYCRecord {
  id: string;
  name: string;
  type: 'individual' | 'corporate';
  role: 'director' | 'shareholder' | 'ubo' | 'multiple';
  companyId: string;
  status: 'verified' | 'pending' | 'rejected' | 'incomplete';
  dateAdded: string;
  completionPercentage: number;
}
interface Document {
  id: string;
  name: string;
  description: string;
  status: 'pending' | 'approved' | 'rejected' | 'not_uploaded';
  required: boolean;
  fileName?: string;
  uploadDate?: string;
  fileSize?: string;
  fileUrl?: string;
}
export function KYCOnboarding() {
  const [activeTab, setActiveTab] = useState<'overview' | 'records' | 'add-new'>('overview');
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedCompanyProfile, setSelectedCompanyProfile] = useState<string | null>(null);
  const [showAddRecordModal, setShowAddRecordModal] = useState(false);
  const [recordType, setRecordType] = useState<'individual' | 'corporate'>('individual');
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [showKYCForm, setShowKYCForm] = useState(false);
  const [selectedRecord, setSelectedRecord] = useState<KYCRecord | null>(null);
  const companyProfiles: CompanyProfile[] = [{
    id: 'base-1',
    name: 'Tech Innovations Ltd',
    type: 'base',
    country: 'India',
    registrationNumber: 'U72200MH2022PTC123456',
    status: 'active'
  }, {
    id: 'target-1',
    name: 'Tech Innovations Netherlands B.V.',
    type: 'target',
    country: 'Netherlands',
    registrationNumber: 'NL123456789B01',
    status: 'active'
  }];
  const kycRecords: KYCRecord[] = [{
    id: '1',
    name: 'John Smith',
    type: 'individual',
    role: 'director',
    companyId: 'base-1',
    status: 'verified',
    dateAdded: '2023-12-15',
    completionPercentage: 100
  }, {
    id: '2',
    name: 'Maria Rodriguez',
    type: 'individual',
    role: 'director',
    companyId: 'target-1',
    status: 'pending',
    dateAdded: '2024-01-10',
    completionPercentage: 75
  }, {
    id: '3',
    name: 'Acme Holdings Ltd',
    type: 'corporate',
    role: 'shareholder',
    companyId: 'base-1',
    status: 'incomplete',
    dateAdded: '2024-01-20',
    completionPercentage: 30
  }, {
    id: '4',
    name: 'Robert Johnson',
    type: 'individual',
    role: 'ubo',
    companyId: 'base-1',
    status: 'rejected',
    dateAdded: '2024-01-05',
    completionPercentage: 60
  }];
  const [documents, setDocuments] = useState<Document[]>([{
    id: 'passport',
    name: 'Passport',
    description: 'Upload a clear copy of your passport. All details must be visible.',
    status: 'approved',
    required: true,
    fileName: '11-_Passport_Mr._Mohamed_Soliman_November_2022_(1)_page-0001.jpg',
    uploadDate: 'Mar 27, 2025',
    fileSize: '511.9 KB',
    fileUrl: '#'
  }, {
    id: 'address',
    name: 'Address Proof',
    description: 'Upload a document proving your current residential address.',
    status: 'not_uploaded',
    required: true
  }, {
    id: 'utility',
    name: 'Utility Bill',
    description: 'Upload a recent utility bill (less than 3 months old).',
    status: 'approved',
    required: true,
    fileName: '9-_Electricity_Bill_-_Mr.Mohamed-_english_version.pdf',
    uploadDate: 'Mar 27, 2025',
    fileSize: '7.8 KB',
    fileUrl: '#'
  }, {
    id: 'license',
    name: 'Driving License',
    description: 'Upload a clear copy of your driving license (front and back).',
    status: 'not_uploaded',
    required: true
  }]);
  const steps = [{
    id: 1,
    title: 'Upload Documents',
    description: 'Submit your identity verification documents'
  }, {
    id: 2,
    title: 'Pending Review',
    description: 'Documents await verification by our compliance team'
  }, {
    id: 3,
    title: 'Approval',
    description: 'Documents are verified and approved'
  }];
  const handleFileUpload = (documentId: string, file: File) => {
    setDocuments(docs => docs.map(doc => doc.id === documentId ? {
      ...doc,
      status: 'pending',
      fileName: file.name,
      uploadDate: new Date().toLocaleDateString(),
      fileSize: `${(file.size / 1024).toFixed(1)} KB`,
      fileUrl: URL.createObjectURL(file)
    } : doc));
  };
  const filteredRecords = kycRecords.filter(record => {
    const matchesSearch = record.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = statusFilter === 'all' || record.status === statusFilter;
    const matchesCompany = !selectedCompanyProfile || record.companyId === selectedCompanyProfile;
    return matchesSearch && matchesStatus && matchesCompany;
  });
  const getStatusBadgeClass = (status: string) => {
    switch (status) {
      case 'verified':
        return 'bg-green-100 text-green-800';
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'rejected':
        return 'bg-red-100 text-red-800';
      case 'incomplete':
        return 'bg-gray-100 text-gray-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };
  const handleAddNewRecord = () => {
    setShowAddRecordModal(true);
  };
  const handleViewKYCForm = (record: KYCRecord) => {
    setSelectedRecord(record);
    setShowKYCForm(true);
  };
  return <div className="w-full min-h-screen bg-white">
      <header className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <ShieldIcon className="h-6 w-6 text-blue-600" />
            <h1 className="text-xl font-bold text-gray-800">KYC Onboarding</h1>
          </div>
          <button onClick={handleAddNewRecord} className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 text-sm font-medium flex items-center">
            <UserPlusIcon className="h-4 w-4 mr-2" />
            Add New KYC Record
          </button>
        </div>
      </header>
      <div className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex space-x-8">
            <button onClick={() => setActiveTab('overview')} className={`flex items-center py-4 px-1 border-b-2 font-medium text-sm
                ${activeTab === 'overview' ? 'border-blue-600 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}>
              <InfoIcon className={`mr-2 h-5 w-5 ${activeTab === 'overview' ? 'text-blue-500' : 'text-gray-400'}`} />
              Overview
            </button>
            <button onClick={() => setActiveTab('records')} className={`flex items-center py-4 px-1 border-b-2 font-medium text-sm
                ${activeTab === 'records' ? 'border-blue-600 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}>
              <UserIcon className={`mr-2 h-5 w-5 ${activeTab === 'records' ? 'text-blue-500' : 'text-gray-400'}`} />
              KYC Records
            </button>
            <button onClick={() => setActiveTab('add-new')} className={`flex items-center py-4 px-1 border-b-2 font-medium text-sm
                ${activeTab === 'add-new' ? 'border-blue-600 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}>
              <PlusIcon className={`mr-2 h-5 w-5 ${activeTab === 'add-new' ? 'text-blue-500' : 'text-gray-400'}`} />
              Add New
            </button>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 py-6">
        {activeTab === 'overview' && <div className="space-y-6">
            <div className="bg-blue-50 border border-blue-100 rounded-lg p-6">
              <div className="flex">
                <InfoIcon className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <div className="ml-3">
                  <h3 className="text-sm font-medium text-blue-800">
                    About KYC Onboarding
                  </h3>
                  <p className="text-sm text-blue-700 mt-1">
                    Know Your Customer (KYC) is a mandatory process to verify
                    the identity of individuals and corporate entities involved
                    with your company. This helps prevent fraud, money
                    laundering, and ensures compliance with international
                    regulations.
                  </p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-blue-100 rounded-full">
                    <UserIcon className="h-5 w-5 text-blue-600" />
                  </div>
                  <h3 className="ml-3 text-lg font-medium text-gray-900">
                    Individuals
                  </h3>
                </div>
                <p className="text-sm text-gray-600 mb-4">
                  Complete KYC for directors, shareholders, and ultimate
                  beneficial owners (UBOs).
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <CheckIcon className="h-4 w-4 text-green-500 mr-2" />
                    Identity verification
                  </li>
                  <li className="flex items-center">
                    <CheckIcon className="h-4 w-4 text-green-500 mr-2" />
                    Address verification
                  </li>
                  <li className="flex items-center">
                    <CheckIcon className="h-4 w-4 text-green-500 mr-2" />
                    Background checks
                  </li>
                </ul>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-blue-100 rounded-full">
                    <BuildingIcon className="h-5 w-5 text-blue-600" />
                  </div>
                  <h3 className="ml-3 text-lg font-medium text-gray-900">
                    Corporate Entities
                  </h3>
                </div>
                <p className="text-sm text-gray-600 mb-4">
                  Complete KYC for corporate shareholders and related business
                  entities.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <CheckIcon className="h-4 w-4 text-green-500 mr-2" />
                    Company verification
                  </li>
                  <li className="flex items-center">
                    <CheckIcon className="h-4 w-4 text-green-500 mr-2" />
                    Corporate structure
                  </li>
                  <li className="flex items-center">
                    <CheckIcon className="h-4 w-4 text-green-500 mr-2" />
                    UBO identification
                  </li>
                </ul>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-blue-100 rounded-full">
                    <ClockIcon className="h-5 w-5 text-blue-600" />
                  </div>
                  <h3 className="ml-3 text-lg font-medium text-gray-900">
                    Process Timeline
                  </h3>
                </div>
                <p className="text-sm text-gray-600 mb-4">
                  Estimated completion times for different stages of KYC.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start">
                    <span className="bg-blue-100 text-blue-800 rounded-full px-2 py-0.5 text-xs font-medium mr-2 mt-0.5">
                      10 min
                    </span>
                    Document upload
                  </li>
                  <li className="flex items-start">
                    <span className="bg-blue-100 text-blue-800 rounded-full px-2 py-0.5 text-xs font-medium mr-2 mt-0.5">
                      1-2 days
                    </span>
                    Verification review
                  </li>
                  <li className="flex items-start">
                    <span className="bg-blue-100 text-blue-800 rounded-full px-2 py-0.5 text-xs font-medium mr-2 mt-0.5">
                      24 hrs
                    </span>
                    Final approval
                  </li>
                </ul>
              </div>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-medium text-gray-900 mb-4">
                KYC Compliance Status
              </h3>
              <div className="space-y-4">
                {companyProfiles.map(company => <div key={company.id} className="border border-gray-200 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center">
                        {company.type === 'base' ? <BuildingIcon className="h-5 w-5 text-blue-600 mr-2" /> : <GlobeIcon className="h-5 w-5 text-green-600 mr-2" />}
                        <h4 className="text-sm font-medium text-gray-900">
                          {company.name}
                        </h4>
                      </div>
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                        {company.status === 'active' ? 'Active' : company.status}
                      </span>
                    </div>
                    <div className="grid grid-cols-3 gap-4 mb-3">
                      <div>
                        <p className="text-xs text-gray-500">Directors</p>
                        <div className="flex items-center mt-1">
                          <CheckCircleIcon className="h-4 w-4 text-green-500 mr-1" />
                          <span className="text-sm text-gray-700">
                            2/2 Verified
                          </span>
                        </div>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500">Shareholders</p>
                        <div className="flex items-center mt-1">
                          <AlertTriangleIcon className="h-4 w-4 text-yellow-500 mr-1" />
                          <span className="text-sm text-gray-700">
                            1/2 Verified
                          </span>
                        </div>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500">UBOs</p>
                        <div className="flex items-center mt-1">
                          <CheckCircleIcon className="h-4 w-4 text-green-500 mr-1" />
                          <span className="text-sm text-gray-700">
                            1/1 Verified
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="mt-3">
                      <button onClick={() => setSelectedCompanyProfile(company.id)} className="text-sm text-blue-600 hover:text-blue-800 font-medium">
                        View Details
                      </button>
                    </div>
                  </div>)}
              </div>
            </div>
          </div>}
        {activeTab === 'records' && <div className="space-y-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0 mb-6">
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <input type="text" placeholder="Search records..." value={searchQuery} onChange={e => setSearchQuery(e.target.value)} className="pl-10 pr-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 w-full md:w-64" />
                </div>
                <div className="flex items-center space-x-2">
                  <FilterIcon className="h-4 w-4 text-gray-400" />
                  <select value={statusFilter} onChange={e => setStatusFilter(e.target.value)} className="border border-gray-300 rounded-md shadow-sm p-2 text-sm focus:ring-blue-500 focus:border-blue-500">
                    <option value="all">All Statuses</option>
                    <option value="verified">Verified</option>
                    <option value="pending">Pending</option>
                    <option value="rejected">Rejected</option>
                    <option value="incomplete">Incomplete</option>
                  </select>
                </div>
              </div>
              <div>
                <select value={selectedCompanyProfile || ''} onChange={e => setSelectedCompanyProfile(e.target.value || null)} className="border border-gray-300 rounded-md shadow-sm p-2 text-sm focus:ring-blue-500 focus:border-blue-500">
                  <option value="">All Company Profiles</option>
                  {companyProfiles.map(company => <option key={company.id} value={company.id}>
                      {company.name}
                    </option>)}
                </select>
              </div>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Name
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Type
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Role
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Company
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Completion
                    </th>
                    <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {filteredRecords.map(record => {
                const company = companyProfiles.find(c => c.id === record.companyId);
                return <tr key={record.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            {record.type === 'individual' ? <UserIcon className="h-5 w-5 text-gray-400 mr-2" /> : <BuildingIcon className="h-5 w-5 text-gray-400 mr-2" />}
                            <div className="text-sm font-medium text-gray-900">
                              {record.name}
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="text-sm text-gray-500 capitalize">
                            {record.type}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="text-sm text-gray-500 capitalize">
                            {record.role}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="text-sm text-gray-500">
                            {company?.name || 'Unknown'}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusBadgeClass(record.status)}`}>
                            {record.status.charAt(0).toUpperCase() + record.status.slice(1)}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="w-full bg-gray-200 rounded-full h-2.5">
                            <div className={`h-2.5 rounded-full ${record.completionPercentage === 100 ? 'bg-green-600' : record.completionPercentage > 50 ? 'bg-yellow-500' : 'bg-red-500'}`} style={{
                        width: `${record.completionPercentage}%`
                      }}></div>
                          </div>
                          <span className="text-xs text-gray-500 mt-1">
                            {record.completionPercentage}% complete
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                          <button onClick={() => handleViewKYCForm(record)} className="text-blue-600 hover:text-blue-900 mr-3">
                            View
                          </button>
                          <button className="text-gray-600 hover:text-gray-900">
                            Edit
                          </button>
                        </td>
                      </tr>;
              })}
                  {filteredRecords.length === 0 && <tr>
                      <td colSpan={7} className="px-6 py-4 text-center text-sm text-gray-500">
                        No records found. Try changing your search or filters.
                      </td>
                    </tr>}
                </tbody>
              </table>
            </div>
          </div>}
        {activeTab === 'add-new' && <div className="max-w-4xl mx-auto p-6">
            <div className="mb-8">
              <div className="flex items-center justify-between mb-8">
                {steps.map((step, index) => <div key={step.id} className="flex items-center">
                    <div className={`flex flex-col items-center ${index < steps.length - 1 ? 'w-full' : ''}`}>
                      <div className={`flex items-center justify-center w-10 h-10 rounded-full border-2 
                        ${currentStep > step.id ? 'bg-green-100 border-green-500 text-green-600' : currentStep === step.id ? 'bg-blue-100 border-blue-500 text-blue-600' : 'bg-gray-100 border-gray-300 text-gray-500'}`}>
                        {currentStep > step.id ? <CheckIcon className="h-6 w-6" /> : <span>{step.id}</span>}
                      </div>
                      <div className="text-xs mt-2 text-center">
                        <div className="font-medium text-gray-900">
                          {step.title}
                        </div>
                        <div className="text-gray-500 mt-1">
                          {step.description}
                        </div>
                      </div>
                      {index < steps.length - 1 && <div className={`h-0.5 w-full mt-5 ${currentStep > step.id ? 'bg-green-500' : 'bg-gray-300'}`} />}
                    </div>
                  </div>)}
              </div>
            </div>
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Select Company Profile
              </label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {companyProfiles.map(company => <div key={company.id} onClick={() => setSelectedCompanyProfile(company.id)} className={`border rounded-lg p-4 cursor-pointer transition-all ${selectedCompanyProfile === company.id ? 'border-blue-500 bg-blue-50 ring-2 ring-blue-200' : 'border-gray-200 hover:border-blue-300 hover:bg-blue-50'}`}>
                    <div className="flex items-center">
                      {company.type === 'base' ? <BuildingIcon className="h-5 w-5 text-blue-600 mr-2" /> : <GlobeIcon className="h-5 w-5 text-green-600 mr-2" />}
                      <div>
                        <h4 className="text-sm font-medium text-gray-900">
                          {company.name}
                        </h4>
                        <p className="text-xs text-gray-500 mt-1">
                          {company.country} • {company.registrationNumber}
                        </p>
                      </div>
                    </div>
                  </div>)}
              </div>
            </div>
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Select Record Type
              </label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div onClick={() => setRecordType('individual')} className={`border rounded-lg p-4 cursor-pointer transition-all ${recordType === 'individual' ? 'border-blue-500 bg-blue-50 ring-2 ring-blue-200' : 'border-gray-200 hover:border-blue-300 hover:bg-blue-50'}`}>
                  <div className="flex items-center">
                    <UserIcon className="h-5 w-5 text-blue-600 mr-2" />
                    <div>
                      <h4 className="text-sm font-medium text-gray-900">
                        Individual
                      </h4>
                      <p className="text-xs text-gray-500 mt-1">
                        For directors, shareholders, and UBOs
                      </p>
                    </div>
                  </div>
                </div>
                <div onClick={() => setRecordType('corporate')} className={`border rounded-lg p-4 cursor-pointer transition-all ${recordType === 'corporate' ? 'border-blue-500 bg-blue-50 ring-2 ring-blue-200' : 'border-gray-200 hover:border-blue-300 hover:bg-blue-50'}`}>
                  <div className="flex items-center">
                    <BuildingIcon className="h-5 w-5 text-blue-600 mr-2" />
                    <div>
                      <h4 className="text-sm font-medium text-gray-900">
                        Corporate Entity
                      </h4>
                      <p className="text-xs text-gray-500 mt-1">
                        For corporate shareholders and entities
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              {documents.map(document => <DocumentUploadCard key={document.id} document={document} onUpload={file => handleFileUpload(document.id, file)} />)}
            </div>
            <div className="mt-8 bg-gray-50 rounded-lg p-6 border border-gray-200">
              <h3 className="text-lg font-medium text-gray-900 mb-4">
                Important Notes:
              </h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center">
                  <InfoIcon className="h-4 w-4 text-blue-500 mr-2" />
                  All documents must be valid and not expired
                </li>
                <li className="flex items-center">
                  <InfoIcon className="h-4 w-4 text-blue-500 mr-2" />
                  Images must be clear and all information legible
                </li>
                <li className="flex items-center">
                  <InfoIcon className="h-4 w-4 text-blue-500 mr-2" />
                  Files must be in JPG, PNG, or PDF format
                </li>
                <li className="flex items-center">
                  <InfoIcon className="h-4 w-4 text-blue-500 mr-2" />
                  Maximum file size: 5MB per document
                </li>
                <li className="flex items-center">
                  <InfoIcon className="h-4 w-4 text-blue-500 mr-2" />
                  Verification typically takes 1-2 business days
                </li>
                <li className="flex items-center">
                  <InfoIcon className="h-4 w-4 text-blue-500 mr-2" />
                  You will be notified when your documents are approved or
                  require re-submission
                </li>
              </ul>
            </div>
            <div className="flex justify-end space-x-4 mt-6">
              <button onClick={() => setActiveTab('records')} className="px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 text-sm font-medium">
                Cancel
              </button>
              <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 text-sm font-medium">
                Submit for Verification
              </button>
            </div>
          </div>}
      </div>
      {showAddRecordModal && <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-md">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-medium text-gray-900">
                Add New KYC Record
              </h3>
              <button onClick={() => setShowAddRecordModal(false)} className="text-gray-400 hover:text-gray-600">
                <XIcon className="h-5 w-5" />
              </button>
            </div>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Record Type
                </label>
                <div className="mt-1 flex space-x-4">
                  <div className="flex items-center">
                    <input type="radio" id="individual-type" name="record-type" value="individual" checked={recordType === 'individual'} onChange={() => setRecordType('individual')} className="h-4 w-4 text-blue-600 border-gray-300" />
                    <label htmlFor="individual-type" className="ml-2 block text-sm text-gray-700">
                      Individual
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input type="radio" id="corporate-type" name="record-type" value="corporate" checked={recordType === 'corporate'} onChange={() => setRecordType('corporate')} className="h-4 w-4 text-blue-600 border-gray-300" />
                    <label htmlFor="corporate-type" className="ml-2 block text-sm text-gray-700">
                      Corporate Entity
                    </label>
                  </div>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <input type="text" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" placeholder={recordType === 'individual' ? 'Full legal name' : 'Company legal name'} />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Role
                </label>
                <select className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2">
                  <option value="">Select role...</option>
                  <option value="director">Director</option>
                  <option value="shareholder">Shareholder</option>
                  <option value="ubo">Ultimate Beneficial Owner (UBO)</option>
                  <option value="multiple">Multiple Roles</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Company Profile
                </label>
                <select value={selectedCompanyProfile || ''} onChange={e => setSelectedCompanyProfile(e.target.value)} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2">
                  <option value="">Select company profile...</option>
                  {companyProfiles.map(company => <option key={company.id} value={company.id}>
                      {company.name}
                    </option>)}
                </select>
              </div>
              <div className="flex justify-end space-x-4 mt-6">
                <button onClick={() => setShowAddRecordModal(false)} className="px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 text-sm font-medium">
                  Cancel
                </button>
                <button onClick={() => {
              setShowAddRecordModal(false);
              setActiveTab('add-new');
            }} className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 text-sm font-medium">
                  Continue
                </button>
              </div>
            </div>
          </div>
        </div>}
      {showKYCForm && selectedRecord && <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-4xl max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-medium text-gray-900">
                KYC Details: {selectedRecord.name}
              </h3>
              <button onClick={() => setShowKYCForm(false)} className="text-gray-400 hover:text-gray-600">
                <XIcon className="h-5 w-5" />
              </button>
            </div>
            <div className="bg-blue-50 border border-blue-100 rounded-lg p-4 mb-6">
              <div className="flex">
                <InfoIcon className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <div className="ml-3">
                  <h3 className="text-sm font-medium text-blue-800">
                    {selectedRecord.type === 'individual' ? 'Individual' : 'Corporate Entity'}{' '}
                    KYC Record
                  </h3>
                  <p className="text-sm text-blue-700 mt-1">
                    This record is currently{' '}
                    <span className="font-medium">{selectedRecord.status}</span>{' '}
                    and {selectedRecord.completionPercentage}% complete.
                  </p>
                </div>
              </div>
            </div>
            <div className="mb-8">
              <div className="flex items-center justify-between mb-8">
                {steps.map((step, index) => <div key={step.id} className="flex items-center">
                    <div className={`flex flex-col items-center ${index < steps.length - 1 ? 'w-full' : ''}`}>
                      <div className={`flex items-center justify-center w-10 h-10 rounded-full border-2 
                        ${currentStep > step.id ? 'bg-green-100 border-green-500 text-green-600' : currentStep === step.id ? 'bg-blue-100 border-blue-500 text-blue-600' : 'bg-gray-100 border-gray-300 text-gray-500'}`}>
                        {currentStep > step.id ? <CheckIcon className="h-6 w-6" /> : <span>{step.id}</span>}
                      </div>
                      <div className="text-xs mt-2 text-center">
                        <div className="font-medium text-gray-900">
                          {step.title}
                        </div>
                        <div className="text-gray-500 mt-1">
                          {step.description}
                        </div>
                      </div>
                      {index < steps.length - 1 && <div className={`h-0.5 w-full mt-5 ${currentStep > step.id ? 'bg-green-500' : 'bg-gray-300'}`} />}
                    </div>
                  </div>)}
              </div>
            </div>
            <div className="space-y-6">
              {documents.map(document => <DocumentUploadCard key={document.id} document={document} onUpload={file => handleFileUpload(document.id, file)} />)}
            </div>
            <div className="flex justify-end space-x-4 mt-6">
              <button onClick={() => setShowKYCForm(false)} className="px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 text-sm font-medium">
                Close
              </button>
              <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 text-sm font-medium">
                Update Record
              </button>
            </div>
          </div>
        </div>}
    </div>;
}