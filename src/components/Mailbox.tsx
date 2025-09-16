import React, { useState } from 'react';
import { MailIcon, SearchIcon, FilterIcon, PlusIcon, ChevronDownIcon, FileTextIcon, CheckCircleIcon, XCircleIcon, AlertTriangleIcon, TruckIcon, ScanIcon, ForwardIcon, EyeIcon, LanguagesIcon, ArrowRightIcon, CalendarIcon, ClockIcon, BrainCircuitIcon, UploadIcon, FileIcon, CheckIcon, XIcon, ArrowUpIcon, DownloadIcon, PackageIcon, BoxIcon } from 'lucide-react';
import { ShipmentsList } from './shipments/ShipmentsList';
interface MailItem {
  id: string;
  sender: string;
  subject: string;
  type: string;
  date: string;
  status: 'new' | 'scanned' | 'forwarded' | 'processed';
  important?: boolean;
  aiAnalyzed?: boolean;
}
interface AIAnalysisResult {
  documentType: string;
  sender: string;
  summary: string;
  keyInformation: {
    label: string;
    value: string;
  }[];
  deadlines?: {
    title: string;
    date: string;
    urgent: boolean;
  }[];
  recommendations: string[];
  confidence: number;
}
export function Mailbox() {
  const [activeTab, setActiveTab] = useState('incoming');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  const [showFilters, setShowFilters] = useState(false);
  const [showAIAnalysisModal, setShowAIAnalysisModal] = useState(false);
  const [showUploadModal, setShowUploadModal] = useState(false);
  const [selectedMailForAnalysis, setSelectedMailForAnalysis] = useState<MailItem | null>(null);
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisResult, setAnalysisResult] = useState<AIAnalysisResult | null>(null);
  // Sample mail data
  const [mailItems, setMailItems] = useState<MailItem[]>([{
    id: '1',
    sender: 'Dutch Tax Authority',
    subject: 'Annual Tax Assessment 2023',
    type: 'Official Document',
    date: '10/15/2023',
    status: 'new',
    important: true
  }, {
    id: '2',
    sender: 'Chamber of Commerce',
    subject: 'Company Registration Update',
    type: 'Official Document',
    date: '10/14/2023',
    status: 'scanned',
    aiAnalyzed: true
  }, {
    id: '3',
    sender: 'ABN AMRO Bank',
    subject: 'Important: Account Statement',
    type: '',
    date: '10/13/2023',
    status: 'forwarded'
  }, {
    id: '4',
    sender: 'Ministry of Economic Affairs',
    subject: 'Business Grant Approval',
    type: 'Official Document',
    date: '10/10/2023',
    status: 'processed'
  }, {
    id: '5',
    sender: 'ING Bank',
    subject: 'Credit Card Statement',
    type: '',
    date: '10/09/2023',
    status: 'scanned'
  }]);
  const handleItemSelect = (id: string) => {
    if (selectedItems.includes(id)) {
      setSelectedItems(selectedItems.filter(item => item !== id));
    } else {
      setSelectedItems([...selectedItems, id]);
    }
  };
  const handleSelectAll = () => {
    if (selectedItems.length === mailItems.length) {
      setSelectedItems([]);
    } else {
      setSelectedItems(mailItems.map(item => item.id));
    }
  };
  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'new':
        return <AlertTriangleIcon className="h-4 w-4 text-[#EA3A70]" />;
      case 'scanned':
        return <ScanIcon className="h-4 w-4 text-green-400" />;
      case 'forwarded':
        return <ForwardIcon className="h-4 w-4 text-blue-400" />;
      case 'processed':
        return <CheckCircleIcon className="h-4 w-4 text-green-400" />;
      default:
        return <ClockIcon className="h-4 w-4 text-yellow-400" />;
    }
  };
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setUploadedFile(e.target.files[0]);
    }
  };
  const startUpload = () => {
    if (!uploadedFile) return;
    // Simulate upload progress
    setUploadProgress(0);
    const interval = setInterval(() => {
      setUploadProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          startAnalysis();
          return 100;
        }
        return prev + 10;
      });
    }, 300);
  };
  const startAnalysis = () => {
    setIsAnalyzing(true);
    // Simulate AI analysis (would be an API call in a real application)
    setTimeout(() => {
      const result: AIAnalysisResult = {
        documentType: selectedMailForAnalysis ? 'Tax Assessment' : 'Uploaded Document',
        sender: selectedMailForAnalysis ? selectedMailForAnalysis.sender : 'Document Upload',
        summary: 'This document is an annual tax assessment for the fiscal year 2023. It outlines your tax obligations and payment schedule.',
        keyInformation: [{
          label: 'Tax Year',
          value: '2023'
        }, {
          label: 'Total Due',
          value: '€1,245.00'
        }, {
          label: 'Reference Number',
          value: 'TAX-2023-78901'
        }, {
          label: 'Filing Status',
          value: 'Completed'
        }],
        deadlines: [{
          title: 'Payment Due',
          date: '2023-12-15',
          urgent: true
        }, {
          title: 'Appeal Deadline',
          date: '2023-11-30',
          urgent: false
        }],
        recommendations: ['Review the assessment details for accuracy', 'Schedule the payment before the deadline', 'Consider filing an appeal if you find discrepancies', 'Save this document for your tax records'],
        confidence: 92
      };
      setAnalysisResult(result);
      setIsAnalyzing(false);
      // If this was triggered from mail list, mark the mail as AI analyzed
      if (selectedMailForAnalysis) {
        setMailItems(mailItems.map(item => item.id === selectedMailForAnalysis.id ? {
          ...item,
          aiAnalyzed: true
        } : item));
      }
    }, 3000);
  };
  const triggerAIAnalysis = (mail: MailItem) => {
    setSelectedMailForAnalysis(mail);
    setAnalysisResult(null);
    setShowAIAnalysisModal(true);
    startAnalysis();
  };
  const openUploadModal = () => {
    setSelectedMailForAnalysis(null);
    setAnalysisResult(null);
    setUploadedFile(null);
    setUploadProgress(0);
    setShowUploadModal(true);
  };
  const closeAIAnalysisModal = () => {
    setShowAIAnalysisModal(false);
    setSelectedMailForAnalysis(null);
    setAnalysisResult(null);
  };
  const closeUploadModal = () => {
    setShowUploadModal(false);
    setUploadedFile(null);
    setUploadProgress(0);
  };
  return <main className="w-full min-h-screen bg-[#0A0826]">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
          <div className="flex items-center mb-4 md:mb-0">
            <div className="p-3 bg-[#EA3A70]/20 rounded-xl mr-4">
              <MailIcon className="h-8 w-8 text-[#EA3A70]" />
            </div>
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-white">
                Mailbox
              </h1>
              <p className="text-indigo-300">
                Manage your physical and digital mail
              </p>
            </div>
          </div>
        </div>
        {/* Tab Navigation */}
        <div className="bg-[#1E1B3F] backdrop-blur-md rounded-2xl border border-indigo-500/30 p-1 mb-6">
          <div className="overflow-x-auto">
            <nav className="flex min-w-max py-1 px-1">
              <button onClick={() => setActiveTab('incoming')} className={`flex items-center py-3 px-5 rounded-xl font-medium text-sm transition-colors ${activeTab === 'incoming' ? 'bg-[#EA3A70] text-white shadow-md' : 'text-indigo-200 hover:bg-indigo-800/50 hover:text-white'}`}>
                <MailIcon className="h-4 w-4 mr-2" />
                Incoming Mail
              </button>
              <button onClick={() => setActiveTab('services')} className={`flex items-center py-3 px-5 rounded-xl font-medium text-sm transition-colors ${activeTab === 'services' ? 'bg-[#EA3A70] text-white shadow-md' : 'text-indigo-200 hover:bg-indigo-800/50 hover:text-white'}`}>
                <FileTextIcon className="h-4 w-4 mr-2" />
                Mailbox Services
              </button>
              <button onClick={() => setActiveTab('prepare-shipment')} className={`flex items-center py-3 px-5 rounded-xl font-medium text-sm transition-colors ${activeTab === 'prepare-shipment' ? 'bg-[#EA3A70] text-white shadow-md' : 'text-indigo-200 hover:bg-indigo-800/50 hover:text-white'}`}>
                <TruckIcon className="h-4 w-4 mr-2" />
                Prepare Shipment
              </button>
              <button onClick={() => setActiveTab('shipments')} className={`flex items-center py-3 px-5 rounded-xl font-medium text-sm transition-colors ${activeTab === 'shipments' ? 'bg-[#EA3A70] text-white shadow-md' : 'text-indigo-200 hover:bg-indigo-800/50 hover:text-white'}`}>
                <BoxIcon className="h-4 w-4 mr-2" />
                Shipments
              </button>
            </nav>
          </div>
        </div>
        {activeTab === 'incoming' && <div className="space-y-6">
            {/* Search and Filter Bar */}
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              <div className="relative w-full md:w-auto md:flex-1">
                <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-indigo-300" />
                <input type="text" placeholder="Search mail..." value={searchTerm} onChange={e => setSearchTerm(e.target.value)} className="w-full pl-10 pr-4 py-2 bg-indigo-900/30 border border-indigo-500/30 rounded-xl text-white placeholder-indigo-300 focus:outline-none focus:ring-2 focus:ring-[#EA3A70]/50" />
              </div>
              <div className="flex items-center space-x-3">
                <button onClick={openUploadModal} className="px-4 py-2 bg-indigo-900/50 border border-indigo-500/30 text-white rounded-xl hover:bg-indigo-800/50 transition-colors flex items-center">
                  <BrainCircuitIcon className="h-4 w-4 mr-2" />
                  AI Analysis
                </button>
                <button onClick={() => setShowFilters(!showFilters)} className="px-4 py-2 bg-indigo-900/50 border border-indigo-500/30 text-white rounded-xl hover:bg-indigo-800/50 transition-colors flex items-center">
                  <FilterIcon className="h-4 w-4 mr-2" />
                  Filter
                  <ChevronDownIcon className="h-4 w-4 ml-2" />
                </button>
                <button className="px-4 py-2 bg-indigo-900/50 border border-indigo-500/30 text-white rounded-xl hover:bg-indigo-800/50 transition-colors flex items-center">
                  <ScanIcon className="h-4 w-4 mr-2" />
                  Scan All
                </button>
                <button className="px-4 py-2 bg-indigo-900/50 border border-indigo-500/30 text-white rounded-xl hover:bg-indigo-800/50 transition-colors flex items-center">
                  <ForwardIcon className="h-4 w-4 mr-2" />
                  Forward All
                </button>
              </div>
            </div>
            {showFilters && <div className="bg-indigo-900/30 border border-indigo-500/30 rounded-xl p-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-indigo-300 text-sm mb-1">
                      Status
                    </label>
                    <select className="w-full bg-indigo-800/50 border border-indigo-500/30 rounded-lg px-3 py-2 text-white">
                      <option value="">All</option>
                      <option value="new">New</option>
                      <option value="scanned">Scanned</option>
                      <option value="forwarded">Forwarded</option>
                      <option value="processed">Processed</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-indigo-300 text-sm mb-1">
                      Date Range
                    </label>
                    <div className="flex items-center space-x-2">
                      <input type="date" className="w-full bg-indigo-800/50 border border-indigo-500/30 rounded-lg px-3 py-2 text-white" />
                      <span className="text-indigo-300">to</span>
                      <input type="date" className="w-full bg-indigo-800/50 border border-indigo-500/30 rounded-lg px-3 py-2 text-white" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-indigo-300 text-sm mb-1">
                      Type
                    </label>
                    <select className="w-full bg-indigo-800/50 border border-indigo-500/30 rounded-lg px-3 py-2 text-white">
                      <option value="">All</option>
                      <option value="official">Official Document</option>
                      <option value="financial">Financial</option>
                      <option value="correspondence">Correspondence</option>
                    </select>
                  </div>
                </div>
                <div className="flex justify-end mt-4">
                  <button className="px-4 py-2 bg-[#EA3A70] text-white rounded-lg hover:bg-[#EA3A70]/90 transition-colors">
                    Apply Filters
                  </button>
                </div>
              </div>}
            {/* Recent Mail Section */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-medium text-white">Recent Mail</h2>
                <div className="text-indigo-300 text-sm">
                  Showing {mailItems.length} items
                </div>
              </div>
              <div className="bg-indigo-800/30 backdrop-blur-md rounded-2xl border border-indigo-500/30 overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full min-w-full">
                    <thead>
                      <tr className="bg-indigo-900/50">
                        <th className="px-4 py-3 text-left text-xs font-medium text-indigo-300 uppercase tracking-wider">
                          <input type="checkbox" checked={selectedItems.length === mailItems.length} onChange={handleSelectAll} className="rounded bg-indigo-800/50 border-indigo-500/30 text-[#EA3A70] focus:ring-[#EA3A70]/50" />
                        </th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-indigo-300 uppercase tracking-wider">
                          Mail Details
                        </th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-indigo-300 uppercase tracking-wider">
                          Received
                        </th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-indigo-300 uppercase tracking-wider">
                          Status
                        </th>
                        <th className="px-4 py-3 text-right text-xs font-medium text-indigo-300 uppercase tracking-wider">
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-indigo-500/20">
                      {mailItems.map(mail => <tr key={mail.id} className="hover:bg-indigo-900/30 transition-colors">
                          <td className="px-4 py-4 whitespace-nowrap">
                            <input type="checkbox" checked={selectedItems.includes(mail.id)} onChange={() => handleItemSelect(mail.id)} className="rounded bg-indigo-800/50 border-indigo-500/30 text-[#EA3A70] focus:ring-[#EA3A70]/50" />
                          </td>
                          <td className="px-4 py-4">
                            <div className="flex items-start">
                              <div className="flex-1">
                                <div className="flex items-center">
                                  <p className="text-white font-medium">
                                    {mail.sender}
                                  </p>
                                  {mail.important && <span className="ml-2 bg-[#EA3A70]/20 text-[#EA3A70] text-xs px-2 py-0.5 rounded-full">
                                      Important
                                    </span>}
                                  {mail.aiAnalyzed && <span className="ml-2 bg-purple-500/20 text-purple-400 text-xs px-2 py-0.5 rounded-full flex items-center">
                                      <BrainCircuitIcon className="h-3 w-3 mr-1" />
                                      AI Analyzed
                                    </span>}
                                </div>
                                <p className="text-indigo-300 text-sm">
                                  {mail.subject}
                                </p>
                                {mail.type && <span className="text-xs text-indigo-400 bg-indigo-900/50 px-2 py-0.5 rounded-full mt-1 inline-block">
                                    {mail.type}
                                  </span>}
                              </div>
                            </div>
                          </td>
                          <td className="px-4 py-4 whitespace-nowrap">
                            <div className="flex items-center text-indigo-300">
                              <CalendarIcon className="h-4 w-4 mr-2" />
                              <span>{mail.date}</span>
                            </div>
                          </td>
                          <td className="px-4 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                              {getStatusIcon(mail.status)}
                              <span className="ml-2 text-white capitalize">
                                {mail.status}
                              </span>
                            </div>
                          </td>
                          <td className="px-4 py-4 whitespace-nowrap text-right">
                            <div className="flex items-center justify-end space-x-2">
                              <button onClick={() => triggerAIAnalysis(mail)} className="p-1.5 bg-indigo-900/50 text-indigo-300 hover:text-purple-400 rounded-lg transition-colors" title="AI Analysis">
                                <BrainCircuitIcon className="h-4 w-4" />
                              </button>
                              {mail.status === 'new' && <button className="p-1.5 bg-indigo-900/50 text-indigo-300 hover:text-white rounded-lg transition-colors">
                                  <ScanIcon className="h-4 w-4" />
                                </button>}
                              <button className="p-1.5 bg-indigo-900/50 text-indigo-300 hover:text-white rounded-lg transition-colors">
                                <ForwardIcon className="h-4 w-4" />
                              </button>
                              {mail.status === 'scanned' && <button className="p-1.5 bg-indigo-900/50 text-indigo-300 hover:text-white rounded-lg transition-colors">
                                  <LanguagesIcon className="h-4 w-4" />
                                </button>}
                              <button className="p-1.5 bg-indigo-900/50 text-indigo-300 hover:text-white rounded-lg transition-colors">
                                <EyeIcon className="h-4 w-4" />
                              </button>
                            </div>
                          </td>
                        </tr>)}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>}
        {activeTab === 'services' && <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-indigo-800/30 backdrop-blur-md rounded-2xl border border-indigo-500/30 p-6">
              <div className="flex items-center mb-4">
                <div className="p-3 bg-indigo-900/50 rounded-xl mr-3">
                  <MailIcon className="h-6 w-6 text-indigo-300" />
                </div>
                <h3 className="text-lg font-medium text-white">
                  Mail Forwarding
                </h3>
              </div>
              <p className="text-indigo-300 mb-4">
                Have your mail automatically forwarded to your preferred address
                or digitally scanned and sent to your email.
              </p>
              <div className="space-y-3">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-indigo-200">Auto-forwarding:</span>
                  <span className="text-green-400">Active</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-indigo-200">Next scheduled:</span>
                  <span className="text-white">Daily at 4:00 PM</span>
                </div>
                <button className="w-full mt-2 px-4 py-2 bg-indigo-900/50 border border-indigo-500/30 text-white rounded-xl hover:bg-indigo-800/50 transition-colors flex items-center justify-center">
                  <ArrowRightIcon className="h-4 w-4 mr-2" />
                  Configure Forwarding
                </button>
              </div>
            </div>
            <div className="bg-indigo-800/30 backdrop-blur-md rounded-2xl border border-indigo-500/30 p-6">
              <div className="flex items-center mb-4">
                <div className="p-3 bg-indigo-900/50 rounded-xl mr-3">
                  <ScanIcon className="h-6 w-6 text-indigo-300" />
                </div>
                <h3 className="text-lg font-medium text-white">
                  Mail Scanning
                </h3>
              </div>
              <p className="text-indigo-300 mb-4">
                We scan your mail and make it available in your digital mailbox,
                with secure storage and OCR text recognition.
              </p>
              <div className="space-y-3">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-indigo-200">Auto-scanning:</span>
                  <span className="text-green-400">Active</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-indigo-200">Storage:</span>
                  <span className="text-white">12 months</span>
                </div>
                <button className="w-full mt-2 px-4 py-2 bg-indigo-900/50 border border-indigo-500/30 text-white rounded-xl hover:bg-indigo-800/50 transition-colors flex items-center justify-center">
                  <ArrowRightIcon className="h-4 w-4 mr-2" />
                  Configure Scanning
                </button>
              </div>
            </div>
            <div className="bg-indigo-800/30 backdrop-blur-md rounded-2xl border border-indigo-500/30 p-6">
              <div className="flex items-center mb-4">
                <div className="p-3 bg-purple-900/50 rounded-xl mr-3">
                  <BrainCircuitIcon className="h-6 w-6 text-purple-300" />
                </div>
                <h3 className="text-lg font-medium text-white">
                  AI Document Analysis
                </h3>
              </div>
              <p className="text-indigo-300 mb-4">
                Our AI system automatically identifies document types, extracts
                key information, and provides actionable insights.
              </p>
              <div className="space-y-3">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-indigo-200">Auto-analysis:</span>
                  <span className="text-green-400">Active</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-indigo-200">Language support:</span>
                  <span className="text-white">Dutch, English</span>
                </div>
                <button onClick={openUploadModal} className="w-full mt-2 px-4 py-2 bg-indigo-900/50 border border-indigo-500/30 text-white rounded-xl hover:bg-indigo-800/50 transition-colors flex items-center justify-center">
                  <UploadIcon className="h-4 w-4 mr-2" />
                  Upload Document for Analysis
                </button>
              </div>
            </div>
          </div>}
        {activeTab === 'prepare-shipment' && <div className="bg-indigo-800/30 backdrop-blur-md rounded-2xl border border-indigo-500/30 p-6">
            <h2 className="text-xl font-medium text-white mb-4">
              Prepare Shipment
            </h2>
            <p className="text-indigo-300 mb-6">
              Create and manage outgoing shipments. We'll handle the packaging,
              postage, and delivery.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <label className="block text-indigo-300 text-sm mb-1">
                    Shipment Type
                  </label>
                  <select className="w-full bg-indigo-900/50 border border-indigo-500/30 rounded-lg px-3 py-2 text-white">
                    <option value="letter">Letter</option>
                    <option value="package">Package</option>
                    <option value="document">Document</option>
                  </select>
                </div>
                <div>
                  <label className="block text-indigo-300 text-sm mb-1">
                    Recipient
                  </label>
                  <input type="text" placeholder="Recipient name" className="w-full bg-indigo-900/50 border border-indigo-500/30 rounded-lg px-3 py-2 text-white mb-2" />
                  <textarea placeholder="Recipient address" className="w-full bg-indigo-900/50 border border-indigo-500/30 rounded-lg px-3 py-2 text-white" rows={3}></textarea>
                </div>
                <div>
                  <label className="block text-indigo-300 text-sm mb-1">
                    Delivery Method
                  </label>
                  <select className="w-full bg-indigo-900/50 border border-indigo-500/30 rounded-lg px-3 py-2 text-white">
                    <option value="standard">Standard</option>
                    <option value="express">Express</option>
                    <option value="priority">Priority</option>
                    <option value="registered">Registered Mail</option>
                  </select>
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <label className="block text-indigo-300 text-sm mb-1">
                    Shipment Contents
                  </label>
                  <textarea placeholder="Describe the contents of your shipment" className="w-full bg-indigo-900/50 border border-indigo-500/30 rounded-lg px-3 py-2 text-white" rows={3}></textarea>
                </div>
                <div>
                  <label className="block text-indigo-300 text-sm mb-1">
                    Tracking Options
                  </label>
                  <div className="space-y-2">
                    <label className="flex items-center text-white">
                      <input type="checkbox" className="rounded bg-indigo-800/50 border-indigo-500/30 text-[#EA3A70] focus:ring-[#EA3A70]/50 mr-2" />
                      Include tracking
                    </label>
                    <label className="flex items-center text-white">
                      <input type="checkbox" className="rounded bg-indigo-800/50 border-indigo-500/30 text-[#EA3A70] focus:ring-[#EA3A70]/50 mr-2" />
                      Delivery confirmation
                    </label>
                    <label className="flex items-center text-white">
                      <input type="checkbox" className="rounded bg-indigo-800/50 border-indigo-500/30 text-[#EA3A70] focus:ring-[#EA3A70]/50 mr-2" />
                      Insurance
                    </label>
                  </div>
                </div>
                <div>
                  <label className="block text-indigo-300 text-sm mb-1">
                    Scheduled Date
                  </label>
                  <input type="date" className="w-full bg-indigo-900/50 border border-indigo-500/30 rounded-lg px-3 py-2 text-white" />
                </div>
              </div>
            </div>
            <div className="flex justify-end mt-6">
              <button className="px-6 py-2 bg-[#EA3A70] text-white rounded-xl hover:bg-[#EA3A70]/90 transition-colors flex items-center">
                <TruckIcon className="h-4 w-4 mr-2" />
                Create Shipment
              </button>
            </div>
          </div>}
        {activeTab === 'shipments' && <ShipmentsList />}
      </div>
      {/* AI Analysis Modal */}
      {showAIAnalysisModal && <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 backdrop-blur-sm p-4">
          <div className="bg-[#1E1B3F] rounded-2xl border border-indigo-500/30 w-full max-w-3xl max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center p-6 border-b border-indigo-500/30">
              <div className="flex items-center">
                <div className="p-2 bg-purple-900/50 rounded-lg mr-3">
                  <BrainCircuitIcon className="h-6 w-6 text-purple-300" />
                </div>
                <h2 className="text-xl font-bold text-white">
                  AI Document Analysis
                </h2>
              </div>
              <button onClick={closeAIAnalysisModal} className="text-indigo-300 hover:text-white transition-colors">
                <XIcon className="h-6 w-6" />
              </button>
            </div>
            <div className="p-6">
              {isAnalyzing ? <div className="flex flex-col items-center justify-center py-12">
                  <div className="w-16 h-16 border-4 border-indigo-500/30 border-t-purple-500 rounded-full animate-spin mb-4"></div>
                  <p className="text-white text-lg font-medium">
                    Analyzing document...
                  </p>
                  <p className="text-indigo-300 text-sm mt-2">
                    Our AI is extracting key information and insights
                  </p>
                </div> : analysisResult ? <div className="space-y-6">
                  <div className="bg-indigo-900/30 rounded-xl p-5">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-lg font-medium text-white">
                          {analysisResult.documentType}
                        </h3>
                        <p className="text-indigo-300 mt-1">
                          From: {analysisResult.sender}
                        </p>
                      </div>
                      <div className="bg-purple-900/30 px-3 py-1 rounded-lg flex items-center">
                        <span className="text-purple-300 text-sm mr-1">
                          Confidence:
                        </span>
                        <span className="text-white font-medium">
                          {analysisResult.confidence}%
                        </span>
                      </div>
                    </div>
                    <div className="mt-4">
                      <h4 className="text-indigo-300 text-sm mb-2">Summary</h4>
                      <p className="text-white">{analysisResult.summary}</p>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-white mb-3">
                      Key Information
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {analysisResult.keyInformation.map((info, index) => <div key={index} className="bg-indigo-900/30 p-3 rounded-lg">
                          <p className="text-indigo-300 text-sm">
                            {info.label}
                          </p>
                          <p className="text-white font-medium">{info.value}</p>
                        </div>)}
                    </div>
                  </div>
                  {analysisResult.deadlines && analysisResult.deadlines.length > 0 && <div>
                        <h3 className="text-lg font-medium text-white mb-3">
                          Important Deadlines
                        </h3>
                        <div className="space-y-3">
                          {analysisResult.deadlines.map((deadline, index) => <div key={index} className="bg-indigo-900/30 p-3 rounded-lg flex items-center justify-between">
                              <div className="flex items-center">
                                {deadline.urgent ? <AlertTriangleIcon className="h-5 w-5 text-[#EA3A70] mr-2" /> : <CalendarIcon className="h-5 w-5 text-indigo-300 mr-2" />}
                                <p className="text-white">{deadline.title}</p>
                              </div>
                              <div className={`px-3 py-1 rounded-lg ${deadline.urgent ? 'bg-[#EA3A70]/20 text-[#EA3A70]' : 'bg-indigo-800/50 text-indigo-300'}`}>
                                {new Date(deadline.date).toLocaleDateString()}
                              </div>
                            </div>)}
                        </div>
                      </div>}
                  <div>
                    <h3 className="text-lg font-medium text-white mb-3">
                      Recommendations
                    </h3>
                    <div className="bg-indigo-900/30 p-4 rounded-lg">
                      <ul className="space-y-2">
                        {analysisResult.recommendations.map((rec, index) => <li key={index} className="flex items-start">
                            <CheckIcon className="h-5 w-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-white">{rec}</span>
                          </li>)}
                      </ul>
                    </div>
                  </div>
                  <div className="flex justify-between pt-4">
                    <button className="px-4 py-2 bg-indigo-900/50 border border-indigo-500/30 text-white rounded-xl hover:bg-indigo-800/50 transition-colors flex items-center">
                      <DownloadIcon className="h-4 w-4 mr-2" />
                      Download Analysis
                    </button>
                    <div className="flex space-x-3">
                      <button className="px-4 py-2 bg-indigo-900/50 border border-indigo-500/30 text-white rounded-xl hover:bg-indigo-800/50 transition-colors">
                        Create Task
                      </button>
                      <button className="px-4 py-2 bg-[#EA3A70] text-white rounded-xl hover:bg-[#EA3A70]/90 transition-colors">
                        Add to Calendar
                      </button>
                    </div>
                  </div>
                </div> : <div className="text-center py-12">
                  <p className="text-indigo-300">
                    No document selected for analysis
                  </p>
                </div>}
            </div>
          </div>
        </div>}
      {/* Upload Document Modal */}
      {showUploadModal && <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 backdrop-blur-sm p-4">
          <div className="bg-[#1E1B3F] rounded-2xl border border-indigo-500/30 w-full max-w-xl">
            <div className="flex justify-between items-center p-6 border-b border-indigo-500/30">
              <div className="flex items-center">
                <div className="p-2 bg-purple-900/50 rounded-lg mr-3">
                  <UploadIcon className="h-6 w-6 text-purple-300" />
                </div>
                <h2 className="text-xl font-bold text-white">
                  Upload Document for Analysis
                </h2>
              </div>
              <button onClick={closeUploadModal} className="text-indigo-300 hover:text-white transition-colors">
                <XIcon className="h-6 w-6" />
              </button>
            </div>
            <div className="p-6">
              {uploadedFile ? <div className="space-y-6">
                  <div className="bg-indigo-900/30 p-4 rounded-lg flex items-center">
                    <FileIcon className="h-10 w-10 text-indigo-300 mr-4" />
                    <div className="flex-1">
                      <p className="text-white font-medium">
                        {uploadedFile.name}
                      </p>
                      <p className="text-indigo-300 text-sm">
                        {(uploadedFile.size / 1024).toFixed(2)} KB •{' '}
                        {uploadedFile.type}
                      </p>
                    </div>
                    <button onClick={() => setUploadedFile(null)} className="text-indigo-300 hover:text-white transition-colors">
                      <XIcon className="h-5 w-5" />
                    </button>
                  </div>
                  {uploadProgress > 0 && uploadProgress < 100 ? <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-indigo-300">Uploading...</span>
                        <span className="text-white">{uploadProgress}%</span>
                      </div>
                      <div className="w-full bg-indigo-900/50 rounded-full h-2">
                        <div className="bg-[#EA3A70] h-2 rounded-full" style={{
                  width: `${uploadProgress}%`
                }}></div>
                      </div>
                    </div> : uploadProgress === 100 && isAnalyzing ? <div className="flex flex-col items-center justify-center py-6">
                      <div className="w-12 h-12 border-4 border-indigo-500/30 border-t-purple-500 rounded-full animate-spin mb-4"></div>
                      <p className="text-white">Analyzing document...</p>
                    </div> : uploadProgress === 0 ? <button onClick={startUpload} className="w-full px-4 py-3 bg-[#EA3A70] text-white rounded-xl hover:bg-[#EA3A70]/90 transition-colors flex items-center justify-center">
                      <ArrowUpIcon className="h-4 w-4 mr-2" />
                      Upload and Analyze
                    </button> : null}
                  {analysisResult && <div className="pt-4 border-t border-indigo-500/30">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-lg font-medium text-white">
                          Analysis Results
                        </h3>
                        <div className="bg-purple-900/30 px-3 py-1 rounded-lg flex items-center">
                          <span className="text-purple-300 text-sm mr-1">
                            Confidence:
                          </span>
                          <span className="text-white font-medium">
                            {analysisResult.confidence}%
                          </span>
                        </div>
                      </div>
                      <div className="space-y-3">
                        <div>
                          <p className="text-indigo-300 text-sm">
                            Document Type
                          </p>
                          <p className="text-white font-medium">
                            {analysisResult.documentType}
                          </p>
                        </div>
                        <div>
                          <p className="text-indigo-300 text-sm">Summary</p>
                          <p className="text-white">{analysisResult.summary}</p>
                        </div>
                        {analysisResult.deadlines && analysisResult.deadlines.length > 0 && <div>
                              <p className="text-indigo-300 text-sm">
                                Key Deadlines
                              </p>
                              <div className="space-y-2 mt-2">
                                {analysisResult.deadlines.map((deadline, index) => <div key={index} className="flex items-center justify-between bg-indigo-900/50 p-2 rounded-lg">
                                      <span className="text-white">
                                        {deadline.title}
                                      </span>
                                      <span className={deadline.urgent ? 'text-[#EA3A70]' : 'text-indigo-300'}>
                                        {new Date(deadline.date).toLocaleDateString()}
                                      </span>
                                    </div>)}
                              </div>
                            </div>}
                      </div>
                      <div className="flex justify-end mt-4">
                        <button onClick={() => {
                  closeUploadModal();
                  setShowAIAnalysisModal(true);
                }} className="px-4 py-2 bg-[#EA3A70] text-white rounded-xl hover:bg-[#EA3A70]/90 transition-colors">
                          View Full Analysis
                        </button>
                      </div>
                    </div>}
                </div> : <div className="space-y-6">
                  <div className="border-2 border-dashed border-indigo-500/30 rounded-xl p-10 text-center cursor-pointer hover:border-indigo-500/50 transition-colors" onClick={() => document.getElementById('file-upload')?.click()}>
                    <UploadIcon className="h-12 w-12 text-indigo-300 mx-auto mb-4" />
                    <h3 className="text-white font-medium mb-2">
                      Upload a document
                    </h3>
                    <p className="text-indigo-300 text-sm mb-4">
                      Drag and drop a file here, or click to browse
                    </p>
                    <p className="text-indigo-400 text-xs">
                      Supports PDF, JPG, PNG, TIFF (max 10MB)
                    </p>
                    <input id="file-upload" type="file" className="hidden" accept=".pdf,.jpg,.jpeg,.png,.tiff" onChange={handleFileUpload} />
                  </div>
                  <div className="bg-indigo-900/30 rounded-lg p-4">
                    <h4 className="text-white font-medium mb-2 flex items-center">
                      <BrainCircuitIcon className="h-5 w-5 text-purple-400 mr-2" />
                      How AI Analysis Works
                    </h4>
                    <p className="text-indigo-300 text-sm mb-3">
                      Our AI system will automatically:
                    </p>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start">
                        <CheckIcon className="h-4 w-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-white">
                          Identify the document type (tax notice, invoice, etc.)
                        </span>
                      </li>
                      <li className="flex items-start">
                        <CheckIcon className="h-4 w-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-white">
                          Extract key information and deadlines
                        </span>
                      </li>
                      <li className="flex items-start">
                        <CheckIcon className="h-4 w-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-white">
                          Provide a plain-language explanation
                        </span>
                      </li>
                      <li className="flex items-start">
                        <CheckIcon className="h-4 w-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-white">
                          Suggest recommended actions
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>}
            </div>
          </div>
        </div>}
    </main>;
}