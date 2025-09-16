import React, { useState } from 'react';
import { UploadIcon, ArrowLeftIcon, FileTextIcon, CheckCircleIcon, ScanIcon, AlertCircleIcon } from 'lucide-react';
interface DocumentUploadScannerProps {
  onComplete: () => void;
  onBack: () => void;
}
interface DocumentType {
  id: string;
  name: string;
  description: string;
  required: boolean;
  acceptedFormats: string;
  status: 'not_uploaded' | 'uploaded' | 'scanning' | 'scanned' | 'error';
  file?: File;
}
export function DocumentUploadScanner({
  onComplete,
  onBack
}: DocumentUploadScannerProps) {
  const [documents, setDocuments] = useState<DocumentType[]>([{
    id: 'passport',
    name: 'Passport/ID Copies',
    description: 'Passport or ID cards of all directors and representatives',
    required: true,
    acceptedFormats: '.jpg, .jpeg, .png, .pdf',
    status: 'not_uploaded'
  }, {
    id: 'company-extract',
    name: 'Company Extract',
    description: 'Official extract from company registry in your country',
    required: true,
    acceptedFormats: '.jpg, .jpeg, .png, .pdf',
    status: 'not_uploaded'
  }, {
    id: 'proof-address',
    name: 'Proof of Address',
    description: 'Utility bill or bank statement showing registered address',
    required: true,
    acceptedFormats: '.jpg, .jpeg, .png, .pdf',
    status: 'not_uploaded'
  }, {
    id: 'articles',
    name: 'Articles of Association',
    description: 'Company articles of association or equivalent document',
    required: false,
    acceptedFormats: '.jpg, .jpeg, .png, .pdf',
    status: 'not_uploaded'
  }]);
  const [isScanning, setIsScanning] = useState(false);
  const [scanProgress, setScanProgress] = useState(0);
  const handleFileUpload = (id: string, file: File) => {
    setDocuments(docs => docs.map(doc => doc.id === id ? {
      ...doc,
      status: 'uploaded',
      file
    } : doc));
  };
  const handleScanDocuments = () => {
    setIsScanning(true);
    // Update document statuses to scanning
    setDocuments(docs => docs.map(doc => doc.status === 'uploaded' ? {
      ...doc,
      status: 'scanning'
    } : doc));
    // Simulate scanning progress
    let progress = 0;
    const interval = setInterval(() => {
      progress += 5;
      setScanProgress(progress);
      if (progress >= 100) {
        clearInterval(interval);
        // Update document statuses to scanned
        setDocuments(docs => docs.map(doc => doc.status === 'scanning' ? {
          ...doc,
          status: 'scanned'
        } : doc));
        setTimeout(() => {
          onComplete();
        }, 500);
      }
    }, 200);
  };
  const canScan = documents.some(doc => doc.status === 'uploaded') && !isScanning;
  const allRequiredUploaded = documents.filter(doc => doc.required).every(doc => doc.status === 'uploaded' || doc.status === 'scanning' || doc.status === 'scanned');
  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'uploaded':
        return <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
            <CheckCircleIcon className="h-3 w-3 mr-1" />
            Uploaded
          </span>;
      case 'scanning':
        return <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
            <ScanIcon className="h-3 w-3 mr-1" />
            Scanning
          </span>;
      case 'scanned':
        return <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
            <CheckCircleIcon className="h-3 w-3 mr-1" />
            Scanned
          </span>;
      case 'error':
        return <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
            <AlertCircleIcon className="h-3 w-3 mr-1" />
            Error
          </span>;
      default:
        return null;
    }
  };
  return <div className="space-y-6">
      <div className="bg-blue-50 border border-blue-100 rounded-lg p-4">
        <p className="text-sm text-blue-700">
          Upload key documents to help us pre-fill your registration forms. Our
          AI will scan and extract relevant information.
        </p>
      </div>
      <div className="space-y-4">
        {documents.map(doc => <div key={doc.id} className="bg-white border border-gray-200 rounded-lg p-4">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center">
                  <FileTextIcon className="h-5 w-5 text-blue-500 mr-2" />
                  <h4 className="text-sm font-medium text-gray-900">
                    {doc.name}
                    {doc.required && <span className="ml-1 text-red-500">*</span>}
                  </h4>
                  <div className="ml-2">{getStatusBadge(doc.status)}</div>
                </div>
                <p className="text-xs text-gray-500 mt-1 ml-7">
                  {doc.description}
                </p>
                {doc.file && <p className="text-xs text-gray-500 mt-1 ml-7">
                    {doc.file.name} ({Math.round(doc.file.size / 1024)} KB)
                  </p>}
              </div>
              <label className="cursor-pointer">
                <input type="file" className="hidden" onChange={e => {
              const file = e.target.files?.[0];
              if (file) handleFileUpload(doc.id, file);
            }} accept={doc.acceptedFormats} disabled={isScanning} />
                <span className={`inline-flex items-center px-3 py-1 rounded-md text-xs font-medium ${doc.status === 'not_uploaded' ? 'bg-blue-100 text-blue-800 hover:bg-blue-200' : 'bg-gray-100 text-gray-800 hover:bg-gray-200'} ${isScanning ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}>
                  <UploadIcon className="h-3 w-3 mr-1" />
                  {doc.status === 'not_uploaded' ? 'Upload File' : 'Replace'}
                </span>
              </label>
            </div>
          </div>)}
      </div>
      {isScanning && <div className="bg-white border border-gray-200 rounded-lg p-4">
          <div className="flex items-center mb-2">
            <ScanIcon className="h-5 w-5 text-blue-600 mr-2 animate-pulse" />
            <h4 className="text-sm font-medium text-gray-900">
              Scanning Documents
            </h4>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5">
            <div className="bg-blue-600 h-2.5 rounded-full transition-all duration-300 ease-in-out" style={{
          width: `${scanProgress}%`
        }}></div>
          </div>
          <p className="text-xs text-gray-500 mt-2">
            Our AI is extracting information from your documents. This may take
            a moment...
          </p>
        </div>}
      <div className="flex justify-between pt-6">
        <button onClick={onBack} disabled={isScanning} className={`px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 text-sm font-medium flex items-center ${isScanning ? 'opacity-50 cursor-not-allowed' : ''}`}>
          <ArrowLeftIcon className="mr-2 h-4 w-4" />
          Back
        </button>
        <button onClick={handleScanDocuments} disabled={!canScan || !allRequiredUploaded} className={`px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 text-sm font-medium flex items-center ${!canScan || !allRequiredUploaded ? 'opacity-50 cursor-not-allowed' : ''}`}>
          <ScanIcon className="mr-2 h-4 w-4" />
          Scan Documents
        </button>
      </div>
    </div>;
}