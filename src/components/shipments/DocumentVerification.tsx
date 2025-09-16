import React, { useState } from 'react';
import { UploadIcon, CheckIcon, AlertTriangleIcon, FileTextIcon, EyeIcon, ArrowRightIcon } from 'lucide-react';
interface Document {
  name: string;
  required: boolean;
  status: 'not_uploaded' | 'uploaded' | 'verified' | 'rejected';
  file?: File;
  feedback?: string;
}
interface Shipment {
  id: string;
  type: string;
  documents: string[];
  status: string;
  destination: string;
  estimatedDelivery?: string;
}
interface DocumentVerificationProps {
  shipment: Shipment;
  onClose: () => void;
}
export function DocumentVerification({
  shipment,
  onClose
}: DocumentVerificationProps) {
  const [documents, setDocuments] = useState<Document[]>(shipment.documents.map(doc => ({
    name: doc,
    required: true,
    status: 'not_uploaded'
  })));
  const [verificationComplete, setVerificationComplete] = useState(false);
  const handleFileUpload = (docName: string, file: File) => {
    setDocuments(docs => docs.map(doc => doc.name === docName ? {
      ...doc,
      file,
      status: 'uploaded'
    } : doc));
  };
  const handleVerification = () => {
    // Simulate verification process
    setDocuments(docs => docs.map(doc => ({
      ...doc,
      status: 'verified',
      feedback: 'Document verified successfully'
    })));
    setVerificationComplete(true);
  };
  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'verified':
        return <CheckIcon className="h-5 w-5 text-green-500" />;
      case 'rejected':
        return <AlertTriangleIcon className="h-5 w-5 text-red-500" />;
      case 'uploaded':
        return <FileTextIcon className="h-5 w-5 text-yellow-500" />;
      default:
        return <UploadIcon className="h-5 w-5 text-gray-400" />;
    }
  };
  return <div className="p-6">
      <div className="bg-blue-50 border border-blue-100 rounded-lg p-4 mb-6">
        <h3 className="text-sm font-medium text-blue-800">
          Verification Requirements
        </h3>
        <ul className="mt-2 text-sm text-blue-700 space-y-1">
          <li>
            • Documents must be properly signed by authorized representatives
          </li>
          <li>• All pages must be legalized/notarized where required</li>
          <li>• Documents must be clear and legible</li>
          <li>• File format: PDF, JPG, or PNG (max 10MB per file)</li>
        </ul>
      </div>
      <div className="space-y-4">
        {documents.map(doc => <div key={doc.name} className="bg-white border border-gray-200 rounded-lg p-4">
            <div className="flex items-start justify-between">
              <div className="flex items-start space-x-3">
                {getStatusIcon(doc.status)}
                <div>
                  <h4 className="text-sm font-medium text-gray-900">
                    {doc.name}
                    {doc.required && <span className="text-red-500 ml-1">*</span>}
                  </h4>
                  {doc.file && <p className="text-xs text-gray-500 mt-1">
                      {doc.file.name}
                    </p>}
                  {doc.feedback && <p className={`text-xs mt-1 ${doc.status === 'verified' ? 'text-green-600' : 'text-red-600'}`}>
                      {doc.feedback}
                    </p>}
                </div>
              </div>
              <div className="flex items-center space-x-3">
                {doc.file && <button className="text-blue-600 hover:text-blue-800">
                    <EyeIcon className="h-4 w-4" />
                  </button>}
                <label className="cursor-pointer">
                  <input type="file" className="hidden" onChange={e => {
                const file = e.target.files?.[0];
                if (file) handleFileUpload(doc.name, file);
              }} accept=".pdf,.jpg,.jpeg,.png" />
                  <span className={`inline-flex items-center px-3 py-1 rounded-md text-xs font-medium
                    ${doc.status === 'verified' ? 'bg-green-100 text-green-800' : doc.status === 'rejected' ? 'bg-red-100 text-red-800' : 'bg-blue-100 text-blue-800 hover:bg-blue-200'}`}>
                    {doc.status === 'verified' ? 'Verified' : doc.status === 'rejected' ? 'Rejected' : doc.status === 'uploaded' ? 'Uploaded' : 'Upload'}
                  </span>
                </label>
              </div>
            </div>
          </div>)}
      </div>
      <div className="mt-6 flex justify-end space-x-3">
        <button onClick={onClose} className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
          Cancel
        </button>
        <button onClick={handleVerification} disabled={!documents.every(doc => doc.status === 'uploaded')} className={`flex items-center px-4 py-2 rounded-md text-sm font-medium ${documents.every(doc => doc.status === 'uploaded') ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-gray-100 text-gray-400 cursor-not-allowed'}`}>
          Verify Documents
          <ArrowRightIcon className="ml-2 h-4 w-4" />
        </button>
      </div>
    </div>;
}