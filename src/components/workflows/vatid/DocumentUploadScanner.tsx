import React, { useState } from 'react';
import { UploadIcon, FileTextIcon, ArrowLeftIcon, CheckIcon, AlertTriangleIcon, ScanIcon } from 'lucide-react';
interface DocumentUploadScannerProps {
  onComplete: () => void;
  onBack: () => void;
}
export function DocumentUploadScanner({
  onComplete,
  onBack
}: DocumentUploadScannerProps) {
  const [uploadedFiles, setUploadedFiles] = useState<Array<{
    name: string;
    size: string;
    status: string;
  }>>([]);
  const [isUploading, setIsUploading] = useState(false);
  const [isScanning, setIsScanning] = useState(false);
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      setIsUploading(true);
      // Simulate upload delay
      setTimeout(() => {
        const newFiles = Array.from(files).map(file => ({
          name: file.name,
          size: `${(file.size / 1024).toFixed(1)} KB`,
          status: 'uploaded'
        }));
        setUploadedFiles([...uploadedFiles, ...newFiles]);
        setIsUploading(false);
      }, 1500);
    }
  };
  const handleScanDocuments = () => {
    if (uploadedFiles.length === 0) return;
    setIsScanning(true);
    // Simulate scanning process
    setTimeout(() => {
      setUploadedFiles(uploadedFiles.map(file => ({
        ...file,
        status: 'scanned'
      })));
      setIsScanning(false);
      // Complete after scanning
      setTimeout(() => {
        onComplete();
      }, 1000);
    }, 3000);
  };
  return <div className="space-y-6">
      <div className="bg-blue-50 border border-blue-100 rounded-lg p-4">
        <div className="flex">
          <UploadIcon className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
          <div className="ml-3">
            <h3 className="text-sm font-medium text-blue-800">
              Document Upload
            </h3>
            <p className="text-sm text-blue-700 mt-1">
              Upload documents to extract company and personnel information. Our
              AI will scan and extract relevant data to pre-fill your
              registration forms.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-white border border-gray-200 rounded-lg p-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center">
            <FileTextIcon className="h-5 w-5 text-blue-600 mr-2" />
            <h3 className="text-lg font-medium text-gray-900">
              Upload Documents
            </h3>
          </div>
          <div className="text-sm text-gray-500">
            Supported formats: PDF, JPG, PNG
          </div>
        </div>
        <div className="space-y-4">
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
            <UploadIcon className="h-10 w-10 text-gray-400 mx-auto mb-3" />
            <p className="text-sm text-gray-600 mb-2">
              Drag and drop your files here, or click to browse
            </p>
            <p className="text-xs text-gray-500 mb-4">
              Upload company registration documents, passport copies, or other
              identification documents
            </p>
            <label className="inline-block">
              <span className="sr-only">Choose files</span>
              <input type="file" className="block w-full text-sm text-gray-500
                  file:mr-4 file:py-2 file:px-4
                  file:rounded-md file:border-0
                  file:text-sm file:font-medium
                  file:bg-blue-50 file:text-blue-700
                  hover:file:bg-blue-100" onChange={handleFileChange} multiple accept=".pdf,.jpg,.jpeg,.png" />
            </label>
          </div>
          {isUploading && <div className="bg-blue-50 border border-blue-100 rounded-lg p-4">
              <div className="flex items-center">
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-blue-600 mr-2"></div>
                <p className="text-sm text-blue-700">Uploading documents...</p>
              </div>
            </div>}
          {uploadedFiles.length > 0 && <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      File Name
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Size
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {uploadedFiles.map((file, index) => <tr key={index}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        <div className="flex items-center">
                          <FileTextIcon className="h-4 w-4 text-gray-400 mr-2" />
                          {file.name}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {file.size}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {file.status === 'uploaded' ? <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                            Uploaded
                          </span> : <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                            <CheckIcon className="h-3 w-3 mr-1" />
                            Scanned
                          </span>}
                      </td>
                    </tr>)}
                </tbody>
              </table>
            </div>}
          {uploadedFiles.length > 0 && !isScanning && <button onClick={handleScanDocuments} className="w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 text-sm font-medium flex items-center justify-center" disabled={isScanning}>
              <ScanIcon className="h-4 w-4 mr-2" />
              Scan Documents for Data Extraction
            </button>}
          {isScanning && <div className="bg-blue-50 border border-blue-100 rounded-lg p-4">
              <div className="flex items-center">
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-blue-600 mr-2"></div>
                <p className="text-sm text-blue-700">
                  Scanning documents and extracting information...
                </p>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                <div className="bg-blue-600 h-2 rounded-full animate-pulse"></div>
              </div>
            </div>}
        </div>
      </div>
      <div className="flex justify-between pt-4">
        <button onClick={onBack} className="px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 text-sm font-medium flex items-center">
          <ArrowLeftIcon className="mr-2 h-4 w-4" />
          Back
        </button>
        <button onClick={onComplete} className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 text-sm font-medium" disabled={uploadedFiles.length === 0}>
          Skip Scanning
        </button>
      </div>
    </div>;
}