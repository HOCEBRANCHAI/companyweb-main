import React, { useState } from 'react';
import { FileTextIcon, BuildingIcon, EuroIcon, BriefcaseIcon, CalendarIcon, UploadIcon, XIcon, MessageCircleIcon, CheckIcon, AlertTriangleIcon, ClockIcon, ScanIcon, FileIcon } from 'lucide-react';
interface Service {
  id: string;
  name: string;
  icon: React.ReactNode;
  description: string;
  requiredDocuments: string[];
}
interface CalendarItem {
  id: string;
  title: string;
  type: string;
  dueDate: string;
  requiredDocuments: string[];
}
interface Document {
  id: string;
  name: string;
  status: 'not_found' | 'detected' | 'verified';
  confidence?: number;
  file?: File;
  comments: Comment[];
}
interface Comment {
  id: string;
  text: string;
  isAdmin: boolean;
  timestamp: string;
}
const predefinedServices: Service[] = [{
  id: 'branch',
  name: 'Branch Registration',
  icon: <BuildingIcon className="h-5 w-5" />,
  description: 'Register your company branch in the EU',
  requiredDocuments: ['Company Registration Form', 'Articles of Association', 'Board Resolution', 'Proof of Address']
}, {
  id: 'vat',
  name: 'VAT ID Registration',
  icon: <EuroIcon className="h-5 w-5" />,
  description: 'Obtain VAT number for your business',
  requiredDocuments: ['VAT Registration Form', 'Company Details', 'Business Activity Description']
}, {
  id: 'employer',
  name: 'Employer Registration',
  icon: <BriefcaseIcon className="h-5 w-5" />,
  description: 'Register as an employer in the EU',
  requiredDocuments: ['Employer Registration Form', 'Company Tax Details', 'Employee Information']
}];
const activeCalendarItems: CalendarItem[] = [{
  id: 'cal1',
  title: 'Q3 VAT Return',
  type: 'Tax Filing',
  dueDate: '2024-03-15',
  requiredDocuments: ['VAT Return Form', 'Sales Invoices', 'Purchase Invoices', 'Bank Statements']
}, {
  id: 'cal2',
  title: 'Annual Report 2023',
  type: 'Compliance',
  dueDate: '2024-03-30',
  requiredDocuments: ['Financial Statements', "Director's Report", 'Audit Report']
}];
interface ShipmentCreationProps {
  onClose: () => void;
}
export function ShipmentCreation({
  onClose
}: ShipmentCreationProps) {
  const [selectedType, setSelectedType] = useState<'service' | 'calendar'>('service');
  const [selectedItem, setSelectedItem] = useState<string>('');
  const [documents, setDocuments] = useState<Document[]>([]);
  const [newComment, setNewComment] = useState('');
  const [isScanning, setIsScanning] = useState(false);
  const [scanningProgress, setScanningProgress] = useState(0);
  const [scanningStage, setScanningStage] = useState<'uploading' | 'scanning' | 'analyzing' | 'complete'>('uploading');
  const handleItemSelect = (itemId: string) => {
    setSelectedItem(itemId);
    const item = selectedType === 'service' ? predefinedServices.find(s => s.id === itemId) : activeCalendarItems.find(c => c.id === itemId);
    if (item) {
      setDocuments(item.requiredDocuments.map(doc => ({
        id: Math.random().toString(36).substr(2, 9),
        name: doc,
        status: 'not_found',
        comments: []
      })));
    }
  };
  const handleBulkUpload = async (files: FileList) => {
    setIsScanning(true);
    setScanningProgress(0);
    setScanningStage('uploading');
    const simulateProcessing = async () => {
      for (let i = 0; i < 30; i++) {
        await new Promise(resolve => setTimeout(resolve, 50));
        setScanningProgress(prev => prev + 1);
      }
      setScanningStage('scanning');
      for (let i = 30; i < 60; i++) {
        await new Promise(resolve => setTimeout(resolve, 50));
        setScanningProgress(prev => prev + 1);
      }
      setScanningStage('analyzing');
      for (let i = 60; i < 100; i++) {
        await new Promise(resolve => setTimeout(resolve, 50));
        setScanningProgress(prev => prev + 1);
      }
      setDocuments(prevDocs => prevDocs.map(doc => ({
        ...doc,
        status: Math.random() > 0.3 ? 'detected' : 'not_found',
        confidence: Math.floor(Math.random() * 30) + 70
      })));
      setScanningStage('complete');
      setIsScanning(false);
    };
    simulateProcessing();
  };
  const handleAddComment = (docId: string) => {
    if (!newComment.trim()) return;
    setDocuments(docs => docs.map(doc => doc.id === docId ? {
      ...doc,
      comments: [...doc.comments, {
        id: Math.random().toString(36).substr(2, 9),
        text: newComment,
        isAdmin: false,
        timestamp: new Date().toISOString()
      }]
    } : doc));
    setNewComment('');
  };
  const getScanningStateIcon = () => {
    switch (scanningStage) {
      case 'uploading':
        return <UploadIcon className="h-8 w-8 text-blue-600" />;
      case 'scanning':
        return <ScanIcon className="h-8 w-8 text-blue-600" />;
      case 'analyzing':
        return <FileTextIcon className="h-8 w-8 text-blue-600" />;
      case 'complete':
        return <CheckIcon className="h-8 w-8 text-green-600" />;
      default:
        return null;
    }
  };
  const getScanningStateText = () => {
    switch (scanningStage) {
      case 'uploading':
        return 'Uploading documents...';
      case 'scanning':
        return 'Scanning documents...';
      case 'analyzing':
        return 'Analyzing content...';
      case 'complete':
        return 'Analysis complete!';
      default:
        return '';
    }
  };
  return <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-xl max-w-4xl w-full m-4">
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <h2 className="text-xl font-semibold text-gray-900">
            Create New Shipment
          </h2>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-500">
            <XIcon className="h-6 w-6" />
          </button>
        </div>
        <div className="p-6">
          <div className="flex space-x-4 mb-6">
            <button onClick={() => setSelectedType('service')} className={`flex items-center px-4 py-2 rounded-md ${selectedType === 'service' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}>
              <FileTextIcon className="h-5 w-5 mr-2" />
              Services
            </button>
            <button onClick={() => setSelectedType('calendar')} className={`flex items-center px-4 py-2 rounded-md ${selectedType === 'calendar' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}>
              <CalendarIcon className="h-5 w-5 mr-2" />
              Calendar Items
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            {selectedType === 'service' ? predefinedServices.map(service => <button key={service.id} onClick={() => handleItemSelect(service.id)} className={`flex items-start p-4 rounded-lg border transition-colors ${selectedItem === service.id ? 'border-blue-600 bg-blue-50' : 'border-gray-200 hover:bg-gray-50'}`}>
                    <div className="flex-shrink-0 mt-1">{service.icon}</div>
                    <div className="ml-4 text-left">
                      <h3 className="text-sm font-medium text-gray-900">
                        {service.name}
                      </h3>
                      <p className="text-sm text-gray-500 mt-1">
                        {service.description}
                      </p>
                    </div>
                  </button>) : activeCalendarItems.map(item => <button key={item.id} onClick={() => handleItemSelect(item.id)} className={`flex items-start p-4 rounded-lg border transition-colors ${selectedItem === item.id ? 'border-blue-600 bg-blue-50' : 'border-gray-200 hover:bg-gray-50'}`}>
                    <CalendarIcon className="h-5 w-5 mt-1" />
                    <div className="ml-4 text-left">
                      <h3 className="text-sm font-medium text-gray-900">
                        {item.title}
                      </h3>
                      <p className="text-sm text-gray-500 mt-1">
                        Due: {item.dueDate}
                      </p>
                    </div>
                  </button>)}
          </div>
          {documents.length > 0 && <div className="space-y-6">
              <div className="bg-gray-50 rounded-lg p-4">
                <h3 className="text-sm font-medium text-gray-900 mb-2">
                  Required Documents
                </h3>
                <div className="space-y-2">
                  {documents.map(doc => <div key={doc.id} className="flex items-center justify-between">
                      <div className="flex items-center">
                        <FileIcon className="h-4 w-4 text-gray-400 mr-2" />
                        <span className="text-sm text-gray-600">
                          {doc.name}
                        </span>
                      </div>
                      {doc.status === 'detected' && <span className="text-xs text-green-600">
                          {doc.confidence}% match
                        </span>}
                    </div>)}
                </div>
              </div>
              {!isScanning && scanningStage !== 'complete' && <div className="flex justify-center">
                  <label className="cursor-pointer">
                    <input type="file" className="hidden" multiple onChange={e => {
                if (e.target.files) handleBulkUpload(e.target.files);
              }} accept=".pdf,.jpg,.jpeg,.png" />
                    <div className="flex flex-col items-center p-6 border-2 border-dashed border-gray-300 rounded-lg hover:border-blue-500">
                      <UploadIcon className="h-8 w-8 text-gray-400 mb-2" />
                      <p className="text-sm font-medium text-gray-900">
                        Upload All Documents
                      </p>
                      <p className="text-xs text-gray-500 mt-1">
                        Drag and drop or click to select files
                      </p>
                    </div>
                  </label>
                </div>}
              {(isScanning || scanningStage === 'complete') && <div className="bg-white rounded-lg p-6 text-center">
                  <div className="flex justify-center mb-4">
                    {getScanningStateIcon()}
                  </div>
                  <h3 className="text-lg font-medium text-gray-900 mb-4">
                    {getScanningStateText()}
                  </h3>
                  <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
                    <div className="bg-blue-600 h-2 rounded-full transition-all duration-300" style={{
                width: `${scanningProgress}%`
              }}></div>
                  </div>
                  {scanningStage === 'complete' && <div className="text-sm text-gray-600">
                      {documents.filter(d => d.status === 'detected').length}{' '}
                      out of {documents.length} documents detected
                    </div>}
                </div>}
              {scanningStage === 'complete' && <div className="mt-6 bg-gray-50 rounded-lg p-4">
                  <h3 className="text-sm font-medium text-gray-900 mb-4">
                    Comments
                  </h3>
                  <div className="space-y-4">
                    {documents.filter(doc => doc.status === 'not_found').map(doc => <div key={doc.id} className="space-y-2">
                          <div className="flex items-start space-x-2">
                            <AlertTriangleIcon className="h-5 w-5 text-red-500 mt-0.5" />
                            <div>
                              <p className="text-sm font-medium text-gray-900">
                                {doc.name} not detected
                              </p>
                              <p className="text-xs text-gray-500">
                                Please ensure this document is included in your
                                upload
                              </p>
                            </div>
                          </div>
                        </div>)}
                    <div className="flex items-center space-x-2">
                      <input type="text" placeholder="Add a comment..." value={newComment} onChange={e => setNewComment(e.target.value)} className="flex-1 px-3 py-2 border border-gray-300 rounded-md text-sm" />
                      <button onClick={() => handleAddComment(documents[0]?.id || '')} className="px-3 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 text-sm">
                        <MessageCircleIcon className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>}
            </div>}
        </div>
      </div>
    </div>;
}