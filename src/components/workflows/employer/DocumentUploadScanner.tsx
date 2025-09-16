import React, { useState } from 'react';
import { UploadIcon, FileTextIcon, ArrowLeftIcon, CheckIcon, ScanIcon } from 'lucide-react';
interface DocumentUploadScannerProps {
  onComplete: () => void;
  onBack: () => void;
}
export function DocumentUploadScanner({
  onComplete,
  onBack
}: DocumentUploadScannerProps) {
  const [uploading, setUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [uploadStage, setUploadStage] = useState<'idle' | 'uploading' | 'scanning' | 'analyzing' | 'complete'>('idle');
  const handleFileUpload = async (files: FileList | null) => {
    if (!files || files.length === 0) return;
    setUploading(true);
    setUploadProgress(0);
    setUploadStage('uploading');
    // Simulate the upload and processing
    const simulateProcessing = async () => {
      // Uploading stage
      for (let i = 0; i < 30; i++) {
        await new Promise(resolve => setTimeout(resolve, 50));
        setUploadProgress(prev => prev + 1);
      }
      setUploadStage('scanning');
      // Scanning stage
      for (let i = 30; i < 60; i++) {
        await new Promise(resolve => setTimeout(resolve, 50));
        setUploadProgress(prev => prev + 1);
      }
      setUploadStage('analyzing');
      // Analyzing stage
      for (let i = 60; i < 100; i++) {
        await new Promise(resolve => setTimeout(resolve, 50));
        setUploadProgress(prev => prev + 1);
      }
      setUploadStage('complete');
      // Wait a moment then complete
      await new Promise(resolve => setTimeout(resolve, 1000));
      onComplete();
    };
    simulateProcessing();
  };
  const getUploadStateIcon = () => {
    switch (uploadStage) {
      case 'uploading':
        return <UploadIcon className="h-12 w-12 text-blue-600" />;
      case 'scanning':
        return <ScanIcon className="h-12 w-12 text-blue-600" />;
      case 'analyzing':
        return <FileTextIcon className="h-12 w-12 text-blue-600" />;
      case 'complete':
        return <CheckIcon className="h-12 w-12 text-green-600" />;
      default:
        return <UploadIcon className="h-12 w-12 text-gray-400" />;
    }
  };
  const getUploadStateText = () => {
    switch (uploadStage) {
      case 'uploading':
        return 'Uploading documents...';
      case 'scanning':
        return 'Scanning documents...';
      case 'analyzing':
        return 'Extracting information...';
      case 'complete':
        return 'Processing complete!';
      default:
        return 'Upload your documents';
    }
  };
  return <div className="space-y-6">
      <div className="bg-blue-50 border border-blue-100 rounded-lg p-4">
        <p className="text-sm text-blue-700">
          Upload your company documents to automatically extract information for
          your employer registration.
        </p>
      </div>
      <div className="flex flex-col items-center justify-center p-8 border-2 border-dashed border-gray-300 rounded-lg">
        {!uploading ? <>
            <UploadIcon className="h-12 w-12 text-gray-400 mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              Upload Documents
            </h3>
            <p className="text-sm text-gray-500 mb-6 text-center max-w-md">
              Upload your company registration, VAT documents, and
              identification documents to automatically extract information.
            </p>
            <label className="cursor-pointer">
              <input type="file" className="hidden" multiple onChange={e => handleFileUpload(e.target.files)} accept=".pdf,.jpg,.jpeg,.png" />
              <span className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 text-sm font-medium">
                Select Files
              </span>
            </label>
          </> : <div className="w-full max-w-md text-center">
            <div className="flex justify-center mb-4">
              {getUploadStateIcon()}
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-4">
              {getUploadStateText()}
            </h3>
            <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
              <div className="bg-blue-600 h-2 rounded-full transition-all duration-300" style={{
            width: `${uploadProgress}%`
          }}></div>
            </div>
            <p className="text-sm text-gray-500">
              {uploadStage === 'complete' ? 'Documents processed successfully!' : 'Please wait while we process your documents...'}
            </p>
          </div>}
      </div>
      <div className="flex justify-between pt-4">
        <button onClick={onBack} className="px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 text-sm font-medium flex items-center">
          <ArrowLeftIcon className="mr-2 h-4 w-4" />
          Back
        </button>
        {uploadStage === 'complete' && <button onClick={onComplete} className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 text-sm font-medium">
            Continue
          </button>}
      </div>
    </div>;
}