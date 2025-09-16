import React, { useState } from 'react';
import { ArrowLeftIcon, UploadIcon, XIcon, FileTextIcon, CheckCircleIcon, FileIcon, ImageIcon, AlertCircleIcon } from 'lucide-react';
interface DocumentUploadProps {
  formData: any;
  onDataChange: (data: any) => void;
  onContinue: () => void;
  onBack: () => void;
}
export function DocumentUpload({
  formData,
  onDataChange,
  onContinue,
  onBack
}: DocumentUploadProps) {
  const [dragActive, setDragActive] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState<File[]>(formData.documents || []);
  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };
  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      handleFiles(e.dataTransfer.files);
    }
  };
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      handleFiles(e.target.files);
    }
  };
  const handleFiles = (files: FileList) => {
    const newFiles = Array.from(files);
    const updatedFiles = [...uploadedFiles, ...newFiles];
    setUploadedFiles(updatedFiles);
    onDataChange({
      documents: updatedFiles
    });
  };
  const removeFile = (index: number) => {
    const updatedFiles = [...uploadedFiles];
    updatedFiles.splice(index, 1);
    setUploadedFiles(updatedFiles);
    onDataChange({
      documents: updatedFiles
    });
  };
  const getFileIcon = (file: File) => {
    const fileType = file.type.split('/')[0];
    if (fileType === 'image') {
      return <ImageIcon className="h-5 w-5 text-blue-500" />;
    }
    return <FileIcon className="h-5 w-5 text-gray-500" />;
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onContinue();
  };
  return <form onSubmit={handleSubmit} className="space-y-6">
      <div className="bg-white border border-gray-200 rounded-lg p-6">
        <div className="flex items-center mb-4">
          <FileTextIcon className="h-5 w-5 text-blue-600 mr-2" />
          <h3 className="text-lg font-medium text-gray-900">
            Supporting Documents
          </h3>
        </div>
        <div className="bg-blue-50 border border-blue-100 rounded-lg p-4 mb-6">
          <div className="flex items-start">
            <CheckCircleIcon className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-sm text-blue-700">
                Your address change request forms have been generated. Now,
                please upload supporting documents to complete your application.
              </p>
              <p className="text-sm text-blue-700 mt-2">
                The KvK form has been generated and will be submitted on your
                behalf. You only need to upload proof of your new address.
              </p>
            </div>
          </div>
        </div>
        <div className="space-y-4 mb-6">
          <h4 className="text-sm font-medium text-gray-700">
            Required Documents
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-start p-3 bg-green-50 border border-green-200 rounded-lg">
              <CheckCircleIcon className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-medium text-green-800">
                  KvK Address Change Form
                </p>
                <p className="text-xs text-green-700">
                  Generated automatically
                </p>
              </div>
            </div>
            <div className="flex items-start p-3 bg-green-50 border border-green-200 rounded-lg">
              <CheckCircleIcon className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-medium text-green-800">
                  Tax Office Letter
                </p>
                <p className="text-xs text-green-700">
                  Generated in previous step
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="space-y-4">
          <h4 className="text-sm font-medium text-gray-700">
            Upload Proof of Address
          </h4>
          <div className={`border-2 border-dashed rounded-lg p-6 text-center ${dragActive ? 'border-blue-500 bg-blue-50' : 'border-gray-300 hover:border-blue-500 hover:bg-blue-50'}`} onDragEnter={handleDrag} onDragLeave={handleDrag} onDragOver={handleDrag} onDrop={handleDrop}>
            <UploadIcon className="mx-auto h-12 w-12 text-gray-400" />
            <p className="mt-2 text-sm font-medium text-gray-900">
              Drag and drop your files here
            </p>
            <p className="text-xs text-gray-500">
              or <span className="text-blue-600 font-medium">browse</span> to
              upload
            </p>
            <input type="file" multiple onChange={handleFileChange} className="hidden" id="file-upload" />
            <label htmlFor="file-upload" className="mt-2 inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 cursor-pointer">
              Select Files
            </label>
            <p className="mt-1 text-xs text-gray-500">
              Accepted file formats: PDF, JPG, PNG (Max 10MB per file)
            </p>
          </div>
        </div>
        {uploadedFiles.length > 0 && <div className="mt-6">
            <h4 className="text-sm font-medium text-gray-700 mb-2">
              Uploaded Files
            </h4>
            <div className="space-y-2">
              {uploadedFiles.map((file, index) => <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center">
                    {getFileIcon(file)}
                    <span className="ml-2 text-sm text-gray-900">
                      {file.name}
                    </span>
                    <span className="ml-2 text-xs text-gray-500">
                      ({(file.size / 1024 / 1024).toFixed(2)} MB)
                    </span>
                  </div>
                  <button type="button" onClick={() => removeFile(index)} className="text-gray-400 hover:text-gray-500">
                    <XIcon className="h-5 w-5" />
                  </button>
                </div>)}
            </div>
          </div>}
        {uploadedFiles.length === 0 && <div className="mt-4 bg-yellow-50 border border-yellow-100 rounded-lg p-4">
            <div className="flex">
              <AlertCircleIcon className="h-5 w-5 text-yellow-600 mr-2 flex-shrink-0 mt-0.5" />
              <p className="text-sm text-yellow-700">
                Please upload at least one document as proof of your new address
                (e.g., utility bill, lease agreement, or property deed).
              </p>
            </div>
          </div>}
      </div>
      <div className="flex justify-between pt-6">
        <button type="button" onClick={onBack} className="px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 text-sm font-medium flex items-center">
          <ArrowLeftIcon className="mr-2 h-4 w-4" />
          Back
        </button>
        <button type="submit" disabled={uploadedFiles.length === 0} className={`px-4 py-2 rounded-md text-sm font-medium ${uploadedFiles.length > 0 ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-gray-200 text-gray-400 cursor-not-allowed'}`}>
          Continue
        </button>
      </div>
    </form>;
}