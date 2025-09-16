import React, { useState } from 'react';
import { UploadIcon, XIcon, CheckIcon, AlertTriangleIcon } from 'lucide-react';
interface Document {
  id: string;
  name: string;
  category: string;
  required: boolean;
  status: 'pending' | 'uploaded' | 'verified' | 'error';
  file?: File;
}
interface DocumentUploadProps {
  onComplete: () => void;
}
export function DocumentUpload({
  onComplete
}: DocumentUploadProps) {
  const [documents, setDocuments] = useState<Document[]>([{
    id: 'doc1',
    name: 'Bank Statements',
    category: 'Financial',
    required: true,
    status: 'pending'
  }, {
    id: 'doc2',
    name: 'Sales Invoices',
    category: 'Financial',
    required: true,
    status: 'pending'
  }, {
    id: 'doc3',
    name: 'Purchase Invoices',
    category: 'Financial',
    required: true,
    status: 'pending'
  }, {
    id: 'doc4',
    name: 'Asset Register',
    category: 'Financial',
    required: true,
    status: 'pending'
  }, {
    id: 'doc5',
    name: 'Corporate Structure Documents',
    category: 'Legal',
    required: true,
    status: 'pending'
  }]);
  const handleFileUpload = (id: string, file: File) => {
    setDocuments(documents.map(doc => doc.id === id ? {
      ...doc,
      file,
      status: 'uploaded'
    } : doc));
  };
  const handleVerify = (id: string) => {
    setDocuments(documents.map(doc => doc.id === id ? {
      ...doc,
      status: 'verified'
    } : doc));
  };
  const isComplete = () => {
    return documents.filter(doc => doc.required).every(doc => doc.status === 'verified');
  };
  const categories = Array.from(new Set(documents.map(doc => doc.category)));
  return <div className="space-y-6">
      {categories.map(category => <div key={category} className="space-y-4">
          <h4 className="text-sm font-medium text-gray-900">{category}</h4>
          <div className="space-y-3">
            {documents.filter(doc => doc.category === category).map(doc => <div key={doc.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="flex-shrink-0">
                      {doc.status === 'verified' ? <CheckIcon className="h-5 w-5 text-green-500" /> : doc.status === 'error' ? <AlertTriangleIcon className="h-5 w-5 text-red-500" /> : <UploadIcon className="h-5 w-5 text-gray-400" />}
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">
                        {doc.name}
                        {doc.required && <span className="ml-2 text-red-500 text-xs">*</span>}
                      </p>
                      {doc.file && <p className="text-xs text-gray-500">{doc.file.name}</p>}
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    {doc.status === 'uploaded' && <button onClick={() => handleVerify(doc.id)} className="text-sm text-blue-600 hover:text-blue-500">
                        Verify
                      </button>}
                    <label className="cursor-pointer">
                      <input type="file" className="hidden" onChange={e => {
                const file = e.target.files?.[0];
                if (file) handleFileUpload(doc.id, file);
              }} />
                      <span className={`inline-flex items-center px-3 py-1 rounded-md text-sm font-medium
                        ${doc.status === 'verified' ? 'bg-green-100 text-green-800' : doc.status === 'uploaded' ? 'bg-yellow-100 text-yellow-800' : 'bg-blue-100 text-blue-800 hover:bg-blue-200'}`}>
                        {doc.status === 'verified' ? 'Verified' : doc.status === 'uploaded' ? 'Uploaded' : 'Upload'}
                      </span>
                    </label>
                  </div>
                </div>)}
          </div>
        </div>)}
      <div className="mt-6">
        <button onClick={onComplete} disabled={!isComplete()} className={`w-full py-2 px-4 rounded-md text-sm font-medium ${isComplete() ? 'bg-green-600 text-white hover:bg-green-700' : 'bg-gray-100 text-gray-400 cursor-not-allowed'}`}>
          Confirm Documents Complete
        </button>
        {!isComplete() && <p className="mt-2 text-sm text-red-500">
            Please upload and verify all required documents before proceeding
          </p>}
      </div>
    </div>;
}