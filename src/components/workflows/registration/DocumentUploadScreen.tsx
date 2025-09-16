import React, { useState } from 'react';
import { UploadIcon, FileTextIcon, InfoIcon, ArrowRightIcon, XIcon, CheckIcon, ScanIcon, AlertTriangleIcon, UserIcon } from 'lucide-react';
interface DocumentUploadScreenProps {
  onComplete: () => void;
  onBack: () => void;
}
export function DocumentUploadScreen({
  onComplete,
  onBack
}: DocumentUploadScreenProps) {
  const [isDragging, setIsDragging] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [processingState, setProcessingState] = useState<'idle' | 'scanning' | 'analyzing' | 'extracting' | 'complete'>('idle');
  const [processingProgress, setProcessingProgress] = useState(0);
  const sampleFiles = [{
    name: 'passport_john_smith.jpg',
    size: 1254
  }, {
    name: 'passport_maria_rodriguez.pdf',
    size: 2048
  }, {
    name: 'id_carlos_mendez.jpg',
    size: 987
  }];
  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };
  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };
  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };
  const processDocuments = () => {
    setIsProcessing(true);
    setProcessingState('scanning');
    setProcessingProgress(0);
    const simulateProcessing = () => {
      const interval = setInterval(() => {
        setProcessingProgress(prev => {
          const newProgress = prev + 1;
          if (newProgress === 30) {
            setProcessingState('analyzing');
          } else if (newProgress === 60) {
            setProcessingState('extracting');
          } else if (newProgress === 100) {
            setProcessingState('complete');
            clearInterval(interval);
            setTimeout(() => {
              onComplete();
            }, 1000);
          }
          return newProgress;
        });
      }, 50);
    };
    simulateProcessing();
  };
  const getProcessingStateText = () => {
    switch (processingState) {
      case 'scanning':
        return 'Scanning documents...';
      case 'analyzing':
        return 'Analyzing document contents...';
      case 'extracting':
        return 'Extracting personal information...';
      case 'complete':
        return 'Processing complete!';
      default:
        return 'Processing...';
    }
  };
  return <div className="space-y-6">
      <div className="bg-blue-50 border border-blue-100 rounded-lg p-4">
        <div className="flex">
          <InfoIcon className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
          <div className="ml-3">
            <h3 className="text-sm font-medium text-blue-800">
              Upload Passport Documents
            </h3>
            <p className="text-sm text-blue-700 mt-1">
              Upload passport copies for all directors and shareholders. We'll
              extract the information automatically to speed up your
              registration process.
            </p>
          </div>
        </div>
      </div>
      {!isProcessing ? <>
          <div className={`border-2 border-dashed rounded-lg p-8 ${isDragging ? 'border-blue-500 bg-blue-50' : 'border-gray-300'}`} onDragOver={handleDragOver} onDragLeave={handleDragLeave} onDrop={handleDrop}>
            <div className="text-center">
              <UploadIcon className="h-12 w-12 text-gray-400 mx-auto mb-3" />
              <p className="text-sm font-medium text-gray-900">
                Drag files here or click to upload
              </p>
              <p className="text-xs text-gray-500 mt-1">
                PDF, JPG, or PNG up to 10MB
              </p>
              <button className="mt-4 px-4 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 text-sm font-medium">
                Select Files
              </button>
            </div>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg p-4">
            <h4 className="text-sm font-medium text-gray-900 mb-3">
              Sample Files ({sampleFiles.length})
            </h4>
            <div className="space-y-2">
              {sampleFiles.map((file, index) => <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-md">
                  <div className="flex items-center">
                    <FileTextIcon className="h-5 w-5 text-gray-400 mr-2" />
                    <div>
                      <p className="text-sm font-medium text-gray-900">
                        {file.name}
                      </p>
                      <p className="text-xs text-gray-500">
                        {(file.size / 1024).toFixed(1)} KB
                      </p>
                    </div>
                  </div>
                  <button className="text-gray-400 hover:text-red-500">
                    <XIcon className="h-5 w-5" />
                  </button>
                </div>)}
            </div>
          </div>
          <div className="mt-4 text-sm text-gray-500">
            <p className="flex items-center">
              <InfoIcon className="h-4 w-4 text-blue-600 mr-2" />
              We use secure OCR technology to extract information from passport
              documents
            </p>
          </div>
        </> : <div className="bg-white border border-gray-200 rounded-lg p-6">
          <div className="text-center space-y-4">
            <div className="flex justify-center">
              {processingState === 'complete' ? <CheckIcon className="h-12 w-12 text-green-500" /> : <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>}
            </div>
            <h3 className="text-lg font-medium text-gray-900">
              {getProcessingStateText()}
            </h3>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div className="bg-blue-600 h-2.5 rounded-full transition-all duration-300" style={{
            width: `${processingProgress}%`
          }}></div>
            </div>
            <div className="text-sm text-gray-500">
              {processingState === 'scanning' && <div className="flex items-center justify-center">
                  <ScanIcon className="h-4 w-4 mr-2 text-blue-600" />
                  <span>Reading document contents</span>
                </div>}
              {processingState === 'analyzing' && <div className="flex items-center justify-center">
                  <FileTextIcon className="h-4 w-4 mr-2 text-blue-600" />
                  <span>Identifying personal information</span>
                </div>}
              {processingState === 'extracting' && <div className="flex items-center justify-center">
                  <UserIcon className="h-4 w-4 mr-2 text-blue-600" />
                  <span>Creating digital identity profiles</span>
                </div>}
              {processingState === 'complete' && <div className="flex items-center justify-center text-green-600">
                  <CheckIcon className="h-4 w-4 mr-2" />
                  <span>
                    Successfully extracted information from {sampleFiles.length}{' '}
                    documents
                  </span>
                </div>}
            </div>
            {processingState === 'analyzing' && <div className="mt-4 bg-yellow-50 border border-yellow-100 rounded-lg p-3 max-w-md mx-auto">
                <div className="flex">
                  <AlertTriangleIcon className="h-5 w-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                  <div className="ml-3">
                    <p className="text-sm text-yellow-700">
                      This may take a few moments. Please do not close this
                      window.
                    </p>
                  </div>
                </div>
              </div>}
          </div>
        </div>}
      <div className="flex justify-between pt-4">
        <button onClick={onBack} disabled={isProcessing} className={`px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 text-sm font-medium ${isProcessing ? 'opacity-50 cursor-not-allowed' : ''}`}>
          Back
        </button>
        <button onClick={processDocuments} disabled={isProcessing} className={`px-4 py-2 rounded-md text-sm font-medium flex items-center ${isProcessing ? 'bg-gray-100 text-gray-400 cursor-not-allowed' : 'bg-blue-600 text-white hover:bg-blue-700'}`}>
          {isProcessing ? <>Processing...</> : <>
              Process Documents
              <ArrowRightIcon className="ml-2 h-4 w-4" />
            </>}
        </button>
      </div>
    </div>;
}