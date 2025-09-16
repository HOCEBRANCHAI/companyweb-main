import React, { useState } from 'react';
import { ActivityIcon, FileTextIcon, ShieldIcon, UserIcon, BuildingIcon, CheckCircleIcon, AlertTriangleIcon, ClockIcon, UserPlusIcon, FilterIcon, ArrowRightIcon, SearchIcon, EyeIcon, PlusIcon, BellIcon, ChevronRightIcon, CalendarIcon, BarChart4Icon, InfoIcon, XIcon, MapPinIcon, GlobeIcon, ChevronDownIcon, Check as CheckIcon } from 'lucide-react';
import { DocumentUploadCard } from '../../components/onboarding/DocumentUploadCard';
interface VerificationHistory {
  date: string;
  action: string;
  status: 'submitted' | 'rejected' | 'verified';
  comment?: string;
}
interface KYCRecord {
  id: string;
  name: string;
  type: 'individual' | 'corporate';
  relationships: {
    type: 'director' | 'shareholder' | 'ubo' | 'multiple';
    companyId: string;
    shareholding?: {
      percentage: number;
      shares: number;
      class?: string;
    };
    startDate: string;
    status: 'active' | 'pending' | 'terminated';
  }[];
  status: 'verified' | 'pending' | 'rejected' | 'incomplete';
  dateAdded: string;
  completionPercentage: number;
  nationality?: string;
  registrationNumber?: string;
  registrationCountry?: string;
  verificationDate?: string;
  riskScore: 'Low' | 'Medium' | 'High';
  dueDate?: string;
  entityType?: string;
  verificationHistory?: VerificationHistory[];
  documents?: DocumentStatus[];
  corporateStructure?: {
    parentCompany?: string;
    subsidiaries?: string[];
    ultimateBeneficialOwners?: string[];
  };
}
interface DocumentStatus {
  name: string;
  status: 'pending' | 'submitted' | 'rejected' | 'verified';
  lastUpdated?: string;
  rejectionReason?: string;
  required: boolean;
  type: 'identity' | 'address' | 'corporate' | 'financial' | 'ownership';
}
const sampleCompanyProfiles = [{
  id: 'base-1',
  name: 'Tech Innovations Ltd',
  type: 'base',
  country: 'India',
  status: 'active',
  riskLevel: 'low',
  lastUpdated: '2024-01-15',
  totalDirectors: 3,
  verifiedDirectors: 2
}, {
  id: 'target-1',
  name: 'Tech Innovations Netherlands B.V.',
  type: 'target',
  country: 'Netherlands',
  status: 'active',
  riskLevel: 'medium',
  lastUpdated: '2024-01-20',
  totalDirectors: 2,
  verifiedDirectors: 1
}];
const sampleKYCRecords: KYCRecord[] = [{
  id: '1',
  name: 'John Smith',
  type: 'individual',
  role: 'Director',
  companyId: 'base-1',
  status: 'verified',
  dateAdded: '2023-12-15',
  completionPercentage: 100,
  nationality: 'British',
  verificationDate: '2024-01-10',
  riskScore: 'Low',
  dueDate: '2024-02-15',
  verificationHistory: [{
    date: '2024-01-10',
    action: 'Verification Complete',
    status: 'verified',
    comment: 'All documents verified successfully'
  }, {
    date: '2024-01-05',
    action: 'Documents Submitted',
    status: 'submitted'
  }],
  documents: [{
    name: 'Passport',
    status: 'verified',
    lastUpdated: '2024-01-10'
  }, {
    name: 'Proof of Address',
    status: 'verified',
    lastUpdated: '2024-01-10'
  }]
}, {
  id: '2',
  name: 'Maria Rodriguez',
  type: 'individual',
  role: 'Director',
  companyId: 'target-1',
  status: 'pending',
  dateAdded: '2024-01-10',
  completionPercentage: 75,
  dueDate: '2024-02-28',
  nationality: 'Spanish',
  riskScore: 'Medium',
  verificationHistory: [{
    date: '2024-01-20',
    action: 'Documents Rejected',
    status: 'rejected',
    comment: 'Passport copy unclear, please resubmit'
  }, {
    date: '2024-01-15',
    action: 'Documents Submitted',
    status: 'submitted'
  }],
  documents: [{
    name: 'Passport',
    status: 'rejected',
    lastUpdated: '2024-01-20',
    rejectionReason: 'Copy unclear, please resubmit'
  }, {
    name: 'Proof of Address',
    status: 'verified',
    lastUpdated: '2024-01-15'
  }]
}, {
  id: '5',
  name: 'Global Holdings Ltd',
  type: 'corporate',
  relationships: [{
    type: 'shareholder',
    companyId: 'base-1',
    shareholding: {
      percentage: 25,
      shares: 2500,
      class: 'Ordinary'
    },
    startDate: '2024-01-01',
    status: 'active'
  }],
  status: 'pending',
  dateAdded: '2024-01-15',
  completionPercentage: 60,
  registrationNumber: 'GB123456789',
  registrationCountry: 'United Kingdom',
  riskScore: 'Medium',
  entityType: 'Private Limited Company',
  documents: [{
    name: 'Certificate of Incorporation',
    status: 'verified',
    lastUpdated: '2024-01-15',
    type: 'corporate',
    required: true
  }, {
    name: 'Corporate Structure Chart',
    status: 'pending',
    type: 'ownership',
    required: true
  }, {
    name: 'Latest Annual Accounts',
    status: 'submitted',
    lastUpdated: '2024-01-20',
    type: 'financial',
    required: true
  }],
  corporateStructure: {
    parentCompany: 'Global Holdings Group plc',
    subsidiaries: ['Global Tech Ltd', 'Global Services Ltd'],
    ultimateBeneficialOwners: ['John Smith', 'Sarah Johnson']
  }
}, {
  id: '6',
  name: 'Investment Partners B.V.',
  type: 'corporate',
  relationships: [{
    type: 'director',
    companyId: 'target-1',
    startDate: '2024-01-01',
    status: 'active'
  }],
  status: 'verified',
  dateAdded: '2024-01-10',
  completionPercentage: 100,
  registrationNumber: 'NL987654321',
  registrationCountry: 'Netherlands',
  riskScore: 'Low',
  entityType: 'Besloten Vennootschap',
  documents: [{
    name: 'KvK Extract',
    status: 'verified',
    lastUpdated: '2024-01-10',
    type: 'corporate',
    required: true
  }, {
    name: 'UBO Register Extract',
    status: 'verified',
    lastUpdated: '2024-01-10',
    type: 'ownership',
    required: true
  }]
}];
const sampleDocuments = [{
  id: 'passport',
  name: 'Passport',
  description: 'Upload a clear copy of your passport. All details must be visible.',
  status: 'approved',
  required: true,
  fileName: '11-_Passport_Mr._Mohamed_Soliman_November_2022_(1)_page-0001.jpg',
  uploadDate: 'Mar 27, 2025',
  fileSize: '511.9 KB',
  fileUrl: '#',
  verifiedBy: 'Sarah Johnson',
  verificationDate: '2024-01-15'
}, {
  id: 'address',
  name: 'Address Proof',
  description: 'Upload a document proving your current residential address.',
  status: 'not_uploaded',
  required: true,
  acceptedTypes: ['Utility Bill', 'Bank Statement', 'Government ID'],
  maxAgeDays: 90
}, {
  id: 'incorporation',
  name: 'Certificate of Incorporation',
  description: 'Official company registration document.',
  status: 'pending_review',
  required: true,
  fileName: 'Certificate_of_Incorporation_2023.pdf',
  uploadDate: 'Jan 20, 2024',
  fileSize: '1.2 MB',
  fileUrl: '#'
}, {
  id: 'structure',
  name: 'Corporate Structure',
  description: 'Document showing company ownership and control structure.',
  status: 'rejected',
  required: true,
  rejectionReason: 'Document unclear, please provide updated version',
  lastAttempt: '2024-01-18'
}];
const verificationSteps = [{
  id: 1,
  title: 'Document Collection',
  description: 'Submit all required KYC documents',
  status: 'completed',
  completedDate: '2024-01-15'
}, {
  id: 2,
  title: 'Initial Review',
  description: 'First review of submitted documents',
  status: 'completed',
  completedDate: '2024-01-17'
}, {
  id: 3,
  title: 'Enhanced Due Diligence',
  description: 'Additional checks for high-risk cases',
  status: 'in_progress',
  startedDate: '2024-01-18'
}, {
  id: 4,
  title: 'Final Approval',
  description: 'Final verification and approval',
  status: 'pending'
}];
export function KYCOverview() {
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedCompanyProfile, setSelectedCompanyProfile] = useState<string>('all');
  const [recordType, setRecordType] = useState<'individual' | 'corporate'>('individual');
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [riskFilter, setRiskFilter] = useState<string>('all');
  const [showVerificationDetails, setShowVerificationDetails] = useState(false);
  const [selectedKYCRecord, setSelectedKYCRecord] = useState<KYCRecord | null>(null);
  const filteredRecords = sampleKYCRecords.filter(record => {
    if (selectedCompanyProfile !== 'all' && record.companyId !== selectedCompanyProfile) return false;
    if (recordType !== 'all' && record.type !== recordType) return false;
    if (searchTerm && !record.name.toLowerCase().includes(searchTerm.toLowerCase())) return false;
    if (statusFilter !== 'all' && record.status !== statusFilter) return false;
    if (riskFilter !== 'all' && record.riskScore.toLowerCase() !== riskFilter) return false;
    return true;
  });
  const getStatusBadgeClass = (status: string) => {
    switch (status) {
      case 'verified':
        return 'bg-green-100 text-green-800';
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'rejected':
        return 'bg-red-100 text-red-800';
      case 'in_progress':
        return 'bg-blue-100 text-blue-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };
  const getRiskBadgeClass = (risk: string) => {
    switch (risk.toLowerCase()) {
      case 'low':
        return 'bg-green-100 text-green-800';
      case 'medium':
        return 'bg-yellow-100 text-yellow-800';
      case 'high':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };
  const handleViewDetails = (record: KYCRecord) => {
    setSelectedKYCRecord(record);
    setShowVerificationDetails(true);
  };
  const VerificationDetailsModal = () => {
    if (!selectedKYCRecord) return null;
    return <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center z-50">
        <div className="bg-white rounded-lg shadow-xl max-w-4xl w-full m-4 max-h-[90vh] overflow-y-auto">
          <div className="flex items-center justify-between p-6 border-b border-gray-200">
            <div>
              <h2 className="text-xl font-semibold text-gray-900">
                Verification Details
              </h2>
              <p className="text-sm text-gray-500 mt-1">
                {selectedKYCRecord.name} • {selectedKYCRecord.role}
              </p>
            </div>
            <button onClick={() => setShowVerificationDetails(false)} className="text-gray-400 hover:text-gray-500">
              <XIcon className="h-6 w-6" />
            </button>
          </div>
          <div className="p-6 space-y-6">
            <div className="bg-gray-50 rounded-lg p-4 flex items-center justify-between">
              <div className="space-y-1">
                <p className="text-sm text-gray-500">Overall Progress</p>
                <div className="flex items-center space-x-2">
                  <div className="w-48 h-2 bg-gray-200 rounded-full">
                    <div className={`h-2 rounded-full ${selectedKYCRecord.completionPercentage === 100 ? 'bg-green-500' : selectedKYCRecord.completionPercentage > 50 ? 'bg-yellow-500' : 'bg-red-500'}`} style={{
                    width: `${selectedKYCRecord.completionPercentage}%`
                  }}></div>
                  </div>
                  <span className="text-sm font-medium">
                    {selectedKYCRecord.completionPercentage}%
                  </span>
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm text-gray-500">Due Date</p>
                <p className="text-sm font-medium">
                  {selectedKYCRecord.dueDate ? new Date(selectedKYCRecord.dueDate).toLocaleDateString() : 'Not set'}
                </p>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-4">
                Document Status
              </h3>
              <div className="space-y-4">
                {selectedKYCRecord.documents?.map((doc, index) => <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <FileTextIcon className="h-5 w-5 text-gray-400" />
                      <div>
                        <p className="text-sm font-medium text-gray-900">
                          {doc.name}
                        </p>
                        <p className="text-xs text-gray-500">
                          Last updated: {doc.lastUpdated}
                        </p>
                      </div>
                    </div>
                    <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${doc.status === 'verified' ? 'bg-green-100 text-green-800' : doc.status === 'rejected' ? 'bg-red-100 text-red-800' : 'bg-yellow-100 text-yellow-800'}`}>
                      {doc.status.charAt(0).toUpperCase() + doc.status.slice(1)}
                    </span>
                  </div>)}
              </div>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-4">
                Verification Timeline
              </h3>
              <div className="space-y-4">
                {selectedKYCRecord.verificationHistory?.map((event, index) => <div key={index} className="flex items-start space-x-3">
                    <div className={`mt-1.5 w-2.5 h-2.5 rounded-full ${event.status === 'verified' ? 'bg-green-500' : event.status === 'rejected' ? 'bg-red-500' : 'bg-blue-500'}`}></div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">
                        {event.action}
                      </p>
                      <p className="text-xs text-gray-500">
                        {new Date(event.date).toLocaleDateString()}
                      </p>
                      {event.comment && <p className="text-sm text-gray-600 mt-1">
                          {event.comment}
                        </p>}
                    </div>
                  </div>)}
              </div>
            </div>
          </div>
          <div className="px-6 py-4 border-t border-gray-200">
            <button onClick={() => setShowVerificationDetails(false)} className="px-4 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 text-sm font-medium">
              Close
            </button>
          </div>
        </div>
      </div>;
  };
  const AddRecordModal = ({
    onClose
  }: {
    onClose: () => void;
  }) => {
    const [recordType, setRecordType] = useState<'individual' | 'corporate'>('individual');
    const [formData, setFormData] = useState({
      name: '',
      relationships: [] as {
        type: 'director' | 'shareholder' | 'ubo' | 'multiple';
        companyId: string;
        shareholding?: {
          percentage: number;
          shares: number;
        };
      }[],
      nationality: '',
      dateOfBirth: '',
      registrationNumber: '',
      registrationCountry: '',
      entityType: ''
    });
    return <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white rounded-lg p-6 w-full max-w-2xl">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-medium text-gray-900">
              Add New KYC Record
            </h3>
            <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
              <XIcon className="h-5 w-5" />
            </button>
          </div>
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Record Type
            </label>
            <div className="grid grid-cols-2 gap-4">
              <button onClick={() => setRecordType('individual')} className={`p-4 border rounded-lg flex items-center ${recordType === 'individual' ? 'border-blue-500 bg-blue-50' : 'border-gray-200'}`}>
                <UserIcon className="h-5 w-5 text-gray-400 mr-2" />
                <div className="text-left">
                  <div className="font-medium">Individual</div>
                  <div className="text-sm text-gray-500">
                    Natural person as director, shareholder, or UBO
                  </div>
                </div>
              </button>
              <button onClick={() => setRecordType('corporate')} className={`p-4 border rounded-lg flex items-center ${recordType === 'corporate' ? 'border-blue-500 bg-blue-50' : 'border-gray-200'}`}>
                <BuildingIcon className="h-5 w-5 text-gray-400 mr-2" />
                <div className="text-left">
                  <div className="font-medium">Corporate Entity</div>
                  <div className="text-sm text-gray-500">
                    Company as director or shareholder
                  </div>
                </div>
              </button>
            </div>
          </div>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                {recordType === 'individual' ? 'Full Name' : 'Company Name'}
              </label>
              <input type="text" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" placeholder={recordType === 'individual' ? 'Enter full legal name' : 'Enter company name'} />
            </div>
            {recordType === 'individual' ? <>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Nationality
                  </label>
                  <input type="text" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Date of Birth
                  </label>
                  <input type="date" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" />
                </div>
              </> : <>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Registration Number
                  </label>
                  <input type="text" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Country of Registration
                  </label>
                  <input type="text" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Entity Type
                  </label>
                  <select className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2">
                    <option value="">Select entity type...</option>
                    <option value="private_limited">
                      Private Limited Company
                    </option>
                    <option value="public_limited">
                      Public Limited Company
                    </option>
                    <option value="partnership">Partnership</option>
                    <option value="trust">Trust</option>
                  </select>
                </div>
              </>}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Relationship Type
              </label>
              <select className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2">
                <option value="">Select relationship...</option>
                <option value="director">Director</option>
                <option value="shareholder">Shareholder</option>
                {recordType === 'individual' && <option value="ubo">Ultimate Beneficial Owner</option>}
                <option value="multiple">Multiple Roles</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Shareholding Details (if applicable)
              </label>
              <div className="grid grid-cols-2 gap-4 mt-2">
                <input type="number" placeholder="Number of shares" className="border border-gray-300 rounded-md shadow-sm p-2" />
                <input type="number" placeholder="Percentage (%)" className="border border-gray-300 rounded-md shadow-sm p-2" />
              </div>
            </div>
          </div>
          <div className="mt-6 flex justify-end space-x-3">
            <button onClick={onClose} className="px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50">
              Cancel
            </button>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
              Continue to Documents
            </button>
          </div>
        </div>
      </div>;
  };
  return <div className="w-full min-h-screen bg-white">
      <header className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-center space-x-2">
                <ShieldIcon className="h-6 w-6 text-blue-600" />
                <h1 className="text-2xl font-bold text-gray-900">
                  KYC Overview
                </h1>
              </div>
              <p className="text-gray-600 mt-1">
                Manage and monitor your Know Your Customer compliance status
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 text-sm font-medium flex items-center">
                <PlusIcon className="h-4 w-4 mr-2" />
                New KYC Record
              </button>
              <button className="p-2 text-gray-400 hover:text-gray-600 relative">
                <BellIcon className="h-5 w-5" />
                <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-400 ring-2 ring-white" />
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="border-b border-gray-200">
        <div className="container mx-auto px-4">
          <nav className="flex space-x-8">
            <button onClick={() => setActiveTab('overview')} className={`py-4 px-1 border-b-2 font-medium text-sm ${activeTab === 'overview' ? 'border-blue-600 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}>
              Overview
            </button>
            <button onClick={() => setActiveTab('documents')} className={`py-4 px-1 border-b-2 font-medium text-sm ${activeTab === 'documents' ? 'border-blue-600 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}>
              Documents
            </button>
            <button onClick={() => setActiveTab('representatives')} className={`py-4 px-1 border-b-2 font-medium text-sm ${activeTab === 'representatives' ? 'border-blue-600 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}>
              Representatives
            </button>
            <button onClick={() => setActiveTab('verification')} className={`py-4 px-1 border-b-2 font-medium text-sm ${activeTab === 'verification' ? 'border-blue-600 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}>
              Verification
            </button>
          </nav>
        </div>
      </div>

      <div className="container mx-auto px-4 py-6">
        {activeTab === 'overview' && <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="space-y-6">
              <div className="bg-white rounded-lg border border-gray-200 p-6">
                <h2 className="text-lg font-medium text-gray-900 mb-4">
                  KYC Compliance Status
                </h2>
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div className="bg-green-50 rounded-lg p-2">
                    <p className="text-sm font-medium text-green-800">4</p>
                    <p className="text-xs text-green-600">Verified</p>
                  </div>
                  <div className="bg-yellow-50 rounded-lg p-2">
                    <p className="text-sm font-medium text-yellow-800">2</p>
                    <p className="text-xs text-yellow-600">Pending</p>
                  </div>
                  <div className="bg-red-50 rounded-lg p-2">
                    <p className="text-sm font-medium text-red-800">1</p>
                    <p className="text-xs text-red-600">Incomplete</p>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-gray-600">
                      Overall Compliance
                    </span>
                    <span className="text-sm font-medium text-gray-900">
                      85%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-green-600 h-2 rounded-full" style={{
                  width: '85%'
                }}></div>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-lg border border-gray-200 p-6">
                <h2 className="text-lg font-medium text-gray-900 mb-4">
                  Risk Assessment
                </h2>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">High Risk</span>
                    <span className="text-sm font-medium text-red-600">1</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Medium Risk</span>
                    <span className="text-sm font-medium text-yellow-600">
                      2
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Low Risk</span>
                    <span className="text-sm font-medium text-green-600">
                      4
                    </span>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-lg border border-gray-200 p-6">
                <h2 className="text-lg font-medium text-gray-900 mb-4">
                  Company Profiles
                </h2>
                <div className="space-y-3">
                  {sampleCompanyProfiles.map(company => <button key={company.id} onClick={() => setSelectedCompanyProfile(company.id)} className={`w-full flex items-center justify-between p-3 rounded-lg border ${selectedCompanyProfile === company.id ? 'border-blue-500 bg-blue-50' : 'border-gray-200 hover:border-blue-300 hover:bg-blue-50'}`}>
                      <div className="flex items-center">
                        <BuildingIcon className="h-5 w-5 text-gray-500 mr-2" />
                        <div className="text-left">
                          <span className="text-sm font-medium text-gray-900">
                            {company.name}
                          </span>
                          <div className="flex items-center mt-1">
                            <GlobeIcon className="h-4 w-4 text-gray-400 mr-1" />
                            <p className="text-xs text-gray-500">
                              {company.country}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getRiskBadgeClass(company.riskLevel)}`}>
                          {company.riskLevel}
                        </span>
                      </div>
                    </button>)}
                </div>
              </div>
            </div>
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
                <div className="p-6 border-b border-gray-200">
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-lg font-medium text-gray-900">
                      KYC Records
                    </h2>
                    <div className="flex items-center space-x-2">
                      <div className="relative">
                        <SearchIcon className="h-4 w-4 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                        <input type="text" placeholder="Search records..." value={searchTerm} onChange={e => setSearchTerm(e.target.value)} className="pl-9 pr-4 py-2 border border-gray-300 rounded-md text-sm focus:ring-blue-500 focus:border-blue-500" />
                      </div>
                      <div className="relative">
                        <select value={statusFilter} onChange={e => setStatusFilter(e.target.value)} className="pl-3 pr-8 py-2 border border-gray-300 rounded-md text-sm focus:ring-blue-500 focus:border-blue-500">
                          <option value="all">All Status</option>
                          <option value="verified">Verified</option>
                          <option value="pending">Pending</option>
                          <option value="rejected">Rejected</option>
                        </select>
                        <ChevronDownIcon className="h-4 w-4 text-gray-400 absolute right-2 top-1/2 transform -translate-y-1/2 pointer-events-none" />
                      </div>
                    </div>
                  </div>
                </div>
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Name
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Type
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Status
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Risk Score
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Progress
                      </th>
                      <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {filteredRecords.map(record => <tr key={record.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            {record.type === 'individual' ? <UserIcon className="h-5 w-5 text-gray-400 mr-2" /> : <BuildingIcon className="h-5 w-5 text-gray-400 mr-2" />}
                            <div>
                              <div className="text-sm font-medium text-gray-900">
                                {record.name}
                              </div>
                              <div className="text-sm text-gray-500">
                                {record.role}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-500 capitalize">
                            {record.type}
                          </div>
                          <div className="text-xs text-gray-400">
                            Added:{' '}
                            {new Date(record.dateAdded).toLocaleDateString()}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusBadgeClass(record.status)}`}>
                            {record.status.charAt(0).toUpperCase() + record.status.slice(1)}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getRiskBadgeClass(record.riskScore)}`}>
                            {record.riskScore}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="flex-1 h-1.5 bg-gray-200 rounded-full mr-2">
                              <div className={`h-1.5 rounded-full ${record.completionPercentage === 100 ? 'bg-green-600' : record.completionPercentage > 50 ? 'bg-yellow-500' : 'bg-red-500'}`} style={{
                          width: `${record.completionPercentage}%`
                        }}></div>
                            </div>
                            <span className="text-xs text-gray-500">
                              {record.completionPercentage}%
                            </span>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                          <button onClick={() => handleViewDetails(record)} className="text-blue-600 hover:text-blue-900">
                            View Details
                          </button>
                        </td>
                      </tr>)}
                  </tbody>
                </table>
              </div>
            </div>
          </div>}
        {activeTab === 'documents' && <div className="space-y-6">
            <div className="bg-blue-50 border border-blue-100 rounded-lg p-4">
              <div className="flex">
                <InfoIcon className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <div className="ml-3">
                  <h3 className="text-sm font-medium text-blue-800">
                    Document Requirements
                  </h3>
                  <p className="text-sm text-blue-700 mt-1">
                    Please ensure all documents are clear, valid, and not
                    expired. Documents must be in JPG, PNG, or PDF format.
                  </p>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              {sampleDocuments.map(document => <DocumentUploadCard key={document.id} document={document} onUpload={file => {
            console.log('Uploading file:', file);
          }} />)}
            </div>
          </div>}
        {activeTab === 'representatives' && <div className="space-y-6">
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-medium text-gray-900">
                  Legal Representatives
                </h2>
                <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 text-sm font-medium flex items-center">
                  <UserPlusIcon className="h-4 w-4 mr-2" />
                  Add Representative
                </button>
              </div>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Full Name
                    </label>
                    <input type="text" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Role
                    </label>
                    <select className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2">
                      <option>Director</option>
                      <option>Shareholder</option>
                      <option>UBO</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>}
        {activeTab === 'verification' && <div className="space-y-6">
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h2 className="text-lg font-medium text-gray-900 mb-6">
                Verification Process
              </h2>
              <div className="space-y-8">
                {verificationSteps.map((step, index) => <div key={step.id} className={`flex items-start ${index < verificationSteps.length - 1 ? 'pb-8 border-l-2 border-gray-200 relative' : ''}`}>
                    <div className={`absolute w-6 h-6 rounded-full ${step.status === 'completed' ? 'bg-green-500' : step.status === 'in_progress' ? 'bg-blue-500' : 'bg-gray-300'} -left-3`}>
                      {step.status === 'completed' && <CheckIcon className="h-4 w-4 text-white absolute top-1 left-1" />}
                    </div>
                    <div className="ml-6">
                      <h3 className="text-lg font-medium text-gray-900">
                        {step.title}
                      </h3>
                      <p className="text-sm text-gray-500 mt-1">
                        {step.description}
                      </p>
                      {step.completedDate && <p className="text-sm text-green-600 mt-2">
                          Completed on{' '}
                          {new Date(step.completedDate).toLocaleDateString()}
                        </p>}
                      {step.startedDate && <p className="text-sm text-blue-600 mt-2">
                          Started on{' '}
                          {new Date(step.startedDate).toLocaleDateString()}
                        </p>}
                    </div>
                  </div>)}
              </div>
            </div>
          </div>}
      </div>
      {showVerificationDetails && <VerificationDetailsModal />}
      {activeTab === 'overview' && <button className="fixed bottom-4 right-4 bg-blue-600 text-white rounded-full p-2" onClick={() => AddRecordModal({
      onClose: () => setShowVerificationDetails(false)
    })}>
          Add New Record
        </button>}
    </div>;
}