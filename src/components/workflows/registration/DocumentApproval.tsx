import React, { useState } from 'react';
import { UploadIcon, CheckCircleIcon, XIcon, FileTextIcon, EyeIcon, AlertTriangleIcon } from 'lucide-react';
interface Document {
  id: string;
  name: string;
  type: string;
  required: boolean;
  status: 'not_uploaded' | 'pending' | 'approved' | 'rejected';
  fileName?: string;
  fileSize?: string;
  uploadDate?: string;
}
interface DocumentApprovalProps {
  onComplete: () => void;
}
export function DocumentApproval({
  onComplete
}: DocumentApprovalProps) {
  const [documents, setDocuments] = useState<Document[]>([{
    id: 'passport',
    name: 'Passport Copies',
    type: 'Identity',
    required: true,
    status: 'not_uploaded'
  }, {
    id: 'address',
    name: 'Proof of Address',
    type: 'Identity',
    required: true,
    status: 'not_uploaded'
  }, {
    id: 'structure',
    name: 'Company Structure',
    type: 'Corporate',
    required: true,
    status: 'not_uploaded'
  }, {
    id: 'business-plan',
    name: 'Business Plan',
    type: 'Corporate',
    required: false,
    status: 'not_uploaded'
  }, {
    id: 'articles',
    name: 'Articles of Association (Draft)',
    type: 'Legal',
    required: false,
    status: 'not_uploaded',
    fileName: 'articles_of_association_draft.pdf',
    fileSize: '245 KB',
    uploadDate: 'Pre-filled by House of Companies'
  }]);
  const handleFileUpload = (id: string, file: File) => {
    setDocuments(docs => docs.map(doc => doc.id === id ? {
      ...doc,
      status: 'pending',
      fileName: file.name,
      fileSize: `${(file.size / 1024).toFixed(1)} KB`,
      uploadDate: new Date().toLocaleDateString()
    } : doc));
  };
  const canProceed = documents.filter(doc => doc.required).every(doc => doc.status === 'approved' || doc.status === 'pending');
  const documentTypes = Array.from(new Set(documents.map(doc => doc.type)));
  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'approved':
        return <CheckCircleIcon className="h-5 w-5 text-green-500" />;
      case 'rejected':
        return <AlertTriangleIcon className="h-5 w-5 text-red-500" />;
      case 'pending':
        return <FileTextIcon className="h-5 w-5 text-yellow-500" />;
      default:
        return <UploadIcon className="h-5 w-5 text-gray-400" />;
    }
  };
  return <div className="space-y-6">
      <div className="bg-blue-50 border border-blue-100 rounded-lg p-4">
        <p className="text-sm text-blue-700">
          Please upload the required documents for your Dutch BV registration.
          All documents must be clear, legible, and in PDF, JPG, or PNG format.
        </p>
      </div>
      {documentTypes.map(type => <div key={type} className="space-y-4">
          <h3 className="text-sm font-medium text-gray-900">
            {type} Documents
          </h3>
          <div className="space-y-3">
            {documents.filter(doc => doc.type === type).map(doc => <div key={doc.id} className="bg-white border border-gray-200 rounded-lg p-4">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start space-x-3">
                      {getStatusIcon(doc.status)}
                      <div>
                        <h4 className="text-sm font-medium text-gray-900">
                          {doc.name}
                          {doc.required && <span className="ml-1 text-red-500">*</span>}
                        </h4>
                        {doc.fileName && <div className="mt-2 text-xs text-gray-500">
                            <p>{doc.fileName}</p>
                            <p>
                              {doc.uploadDate && `Uploaded: ${doc.uploadDate}`}
                              {doc.fileSize && ` • Size: ${doc.fileSize}`}
                            </p>
                          </div>}
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      {doc.fileName && <button className="text-blue-600 hover:text-blue-800">
                          <EyeIcon className="h-4 w-4" />
                        </button>}
                      <label className="cursor-pointer">
                        <input type="file" className="hidden" onChange={e => {
                  const file = e.target.files?.[0];
                  if (file) handleFileUpload(doc.id, file);
                }} accept=".pdf,.jpg,.jpeg,.png" />
                        <span className={`inline-flex items-center px-3 py-1 rounded-md text-xs font-medium 
                        ${doc.status === 'approved' ? 'bg-green-100 text-green-800' : doc.status === 'rejected' ? 'bg-red-100 text-red-800' : doc.status === 'pending' ? 'bg-yellow-100 text-yellow-800' : 'bg-blue-100 text-blue-800 hover:bg-blue-200'}`}>
                          {doc.status === 'approved' ? 'Approved' : doc.status === 'rejected' ? 'Rejected' : doc.status === 'pending' ? 'Pending Review' : 'Upload'}
                        </span>
                      </label>
                    </div>
                  </div>
                </div>)}
          </div>
        </div>)}
      <div className="flex justify-end pt-6">
        <button onClick={onComplete} disabled={!canProceed} className={`px-4 py-2 rounded-md text-sm font-medium ${canProceed ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-gray-100 text-gray-400 cursor-not-allowed'}`}>
          Continue to Next Step
        </button>
      </div>
    </div>;
}