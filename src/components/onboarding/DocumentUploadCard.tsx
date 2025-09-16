import React from 'react';
import { FileTextIcon, CheckCircleIcon, AlertTriangleIcon, UploadIcon, EyeIcon, DownloadIcon } from 'lucide-react';
export interface Document {
  id: string;
  name: string;
  description: string;
  status: 'not_uploaded' | 'pending_review' | 'approved' | 'rejected';
  required: boolean;
  fileName?: string;
  uploadDate?: string;
  fileSize?: string;
  fileUrl?: string;
  verifiedBy?: string;
  verificationDate?: string;
  acceptedTypes?: string[];
  maxAgeDays?: number;
}
interface DocumentUploadCardProps {
  document: Document;
  onUpload: (file: File) => void;
}
export function DocumentUploadCard({
  document,
  onUpload
}: DocumentUploadCardProps) {
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      onUpload(file);
    }
  };
  const getStatusDisplay = () => {
    switch (document.status) {
      case 'approved':
        return {
          icon: <CheckCircleIcon className="h-5 w-5 text-green-500" />,
          text: 'Approved',
          bgColor: 'bg-green-50',
          borderColor: 'border-green-200',
          textColor: 'text-green-700'
        };
      case 'rejected':
        return {
          icon: <AlertTriangleIcon className="h-5 w-5 text-red-500" />,
          text: 'Rejected',
          bgColor: 'bg-red-50',
          borderColor: 'border-red-200',
          textColor: 'text-red-700'
        };
      case 'pending_review':
        return {
          icon: <FileTextIcon className="h-5 w-5 text-yellow-500" />,
          text: 'Under Review',
          bgColor: 'bg-yellow-50',
          borderColor: 'border-yellow-200',
          textColor: 'text-yellow-700'
        };
      default:
        return {
          icon: <UploadIcon className="h-5 w-5 text-gray-400" />,
          text: 'Not Uploaded',
          bgColor: 'bg-gray-50',
          borderColor: 'border-gray-200',
          textColor: 'text-gray-600'
        };
    }
  };
  const status = getStatusDisplay();
  return <div className={`${status.bgColor} border ${status.borderColor} rounded-lg p-4`}>
      <div className="flex items-start justify-between">
        <div className="flex items-start space-x-3">
          {status.icon}
          <div>
            <h3 className="text-sm font-medium text-gray-900">
              {document.name}
              {document.required && <span className="text-red-500 ml-1">*</span>}
            </h3>
            <p className="text-sm text-gray-500 mt-1">{document.description}</p>
            {document.fileName && <div className="mt-2 text-xs text-gray-500">
                <p>{document.fileName}</p>
                <p>
                  {document.uploadDate && `Uploaded: ${document.uploadDate}`}
                  {document.fileSize && ` • Size: ${document.fileSize}`}
                </p>
                {document.verifiedBy && <p>
                    Verified by {document.verifiedBy} on{' '}
                    {document.verificationDate}
                  </p>}
              </div>}
          </div>
        </div>
        <div className="flex items-center space-x-2">
          {document.fileUrl && <>
              <button className="text-blue-600 hover:text-blue-800">
                <EyeIcon className="h-4 w-4" />
              </button>
              <button className="text-blue-600 hover:text-blue-800">
                <DownloadIcon className="h-4 w-4" />
              </button>
            </>}
          <label className="cursor-pointer">
            <input type="file" className="hidden" onChange={handleFileChange} accept={document.acceptedTypes ? document.acceptedTypes.map(type => `.${type.toLowerCase()}`).join(',') : '.pdf,.jpg,.jpeg,.png'} />
            <span className={`inline-flex items-center px-3 py-1 rounded-md text-xs font-medium 
              ${document.status === 'approved' ? 'bg-green-100 text-green-800' : document.status === 'rejected' ? 'bg-red-100 text-red-800' : document.status === 'pending_review' ? 'bg-yellow-100 text-yellow-800' : 'bg-blue-100 text-blue-800 hover:bg-blue-200'}`}>
              {status.text}
            </span>
          </label>
        </div>
      </div>
    </div>;
}