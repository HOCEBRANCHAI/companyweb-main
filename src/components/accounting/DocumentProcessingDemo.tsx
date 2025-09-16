import React, { useState } from 'react';
import { FileTextIcon, UploadIcon, CheckCircleIcon, ClockIcon, SearchIcon, EyeIcon, TrashIcon, ArrowRightIcon, BrainCircuitIcon, AlertCircleIcon } from 'lucide-react';
export function DocumentProcessingDemo() {
  const [activeTab, setActiveTab] = useState('upload');
  const [processingStage, setProcessingStage] = useState(0);
  const [showProcessing, setShowProcessing] = useState(false);
  const handleStartDemo = () => {
    setShowProcessing(true);
    setProcessingStage(1);
    const stages = [1, 2, 3, 4, 5];
    let currentIndex = 0;
    const interval = setInterval(() => {
      currentIndex++;
      if (currentIndex < stages.length) {
        setProcessingStage(stages[currentIndex]);
      } else {
        clearInterval(interval);
      }
    }, 1500);
  };
  return <div className="bg-[#1B1537]/80 backdrop-blur-sm rounded-xl border border-[#2D2755] overflow-hidden">
      {/* Header */}
      <div className="flex border-b border-indigo-500/30">
        <button onClick={() => setActiveTab('upload')} className={`px-4 py-3 flex items-center ${activeTab === 'upload' ? 'border-b-2 border-[#EA3A70] text-white' : 'text-indigo-300'}`}>
          <UploadIcon className="h-4 w-4 mr-2" />
          Upload Documents
        </button>
        <button onClick={() => setActiveTab('manage')} className={`px-4 py-3 flex items-center ${activeTab === 'manage' ? 'border-b-2 border-[#EA3A70] text-white' : 'text-indigo-300'}`}>
          <FileTextIcon className="h-4 w-4 mr-2" />
          Manage Documents
        </button>
        <button onClick={() => setActiveTab('process')} className={`px-4 py-3 flex items-center ${activeTab === 'process' ? 'border-b-2 border-[#EA3A70] text-white' : 'text-indigo-300'}`}>
          <BrainCircuitIcon className="h-4 w-4 mr-2" />
          AI Processing
        </button>
      </div>
      {/* Content */}
      <div className="p-6">
        {activeTab === 'upload' && <div className="text-center py-8">
            <div className="mb-6 inline-flex p-3 bg-indigo-900/50 rounded-full border border-indigo-500/30">
              <UploadIcon className="h-8 w-8 text-[#EA3A70]" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">
              Upload Financial Documents
            </h3>
            <p className="text-indigo-200 mb-6 max-w-md mx-auto">
              Drag and drop or select files to upload. Our AI will automatically
              process invoices, receipts, bank statements, and more.
            </p>
            <div className="max-w-md mx-auto border-2 border-dashed border-indigo-500/30 rounded-lg p-8 mb-6 bg-indigo-900/20">
              <p className="text-indigo-300 mb-4">
                Supported formats: PDF, JPG, PNG, XLSX
              </p>
              <button className="px-4 py-2 bg-indigo-900/50 text-white rounded-lg border border-indigo-500/30 hover:bg-indigo-800/50 transition-colors flex items-center mx-auto">
                <UploadIcon className="h-4 w-4 mr-2" />
                Select Files
              </button>
            </div>
            <div className="flex justify-center space-x-2 text-sm text-indigo-300">
              <CheckCircleIcon className="h-4 w-4 text-green-400" />
              <span>Bank-level encryption for all your documents</span>
            </div>
          </div>}
        {activeTab === 'manage' && <div>
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-bold text-white">
                Financial Documents
              </h3>
              <div className="flex space-x-3">
                <div className="relative">
                  <SearchIcon className="h-4 w-4 text-indigo-300 absolute left-3 top-1/2 transform -translate-y-1/2" />
                  <input type="text" placeholder="Search documents..." className="pl-9 pr-4 py-2 bg-indigo-900/30 border border-indigo-500/30 rounded-lg text-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/50" />
                </div>
                <button className="px-3 py-2 bg-indigo-900/50 text-white rounded-lg border border-indigo-500/30 hover:bg-indigo-800/50 transition-colors text-sm flex items-center">
                  <UploadIcon className="h-4 w-4 mr-2" />
                  Upload
                </button>
              </div>
            </div>
            <div className="bg-indigo-900/20 rounded-lg border border-indigo-500/30 overflow-hidden">
              <div className="grid grid-cols-5 text-indigo-300 text-sm border-b border-indigo-500/30 p-3">
                <div className="col-span-2">Document Name</div>
                <div>Type</div>
                <div>Date</div>
                <div className="text-right">Actions</div>
              </div>
              <div className="divide-y divide-indigo-500/20">
                <div className="grid grid-cols-5 items-center p-4 hover:bg-indigo-900/30">
                  <div className="col-span-2 flex items-center">
                    <FileTextIcon className="h-5 w-5 text-indigo-300 mr-3" />
                    <span className="font-medium text-white">
                      Q1 2024 VAT Return.pdf
                    </span>
                  </div>
                  <div className="text-indigo-200">Tax Document</div>
                  <div className="text-indigo-200">15 Apr 2024</div>
                  <div className="flex justify-end space-x-2">
                    <button className="p-1.5 bg-indigo-900/50 text-indigo-200 rounded-lg border border-indigo-500/30 hover:bg-indigo-800/50 transition-colors">
                      <EyeIcon className="h-4 w-4" />
                    </button>
                    <button className="p-1.5 bg-indigo-900/50 text-indigo-200 rounded-lg border border-indigo-500/30 hover:bg-indigo-800/50 transition-colors">
                      <TrashIcon className="h-4 w-4" />
                    </button>
                  </div>
                </div>
                <div className="grid grid-cols-5 items-center p-4 hover:bg-indigo-900/30">
                  <div className="col-span-2 flex items-center">
                    <FileTextIcon className="h-5 w-5 text-indigo-300 mr-3" />
                    <span className="font-medium text-white">
                      Invoice - TechSupplier.pdf
                    </span>
                  </div>
                  <div className="text-indigo-200">Invoice</div>
                  <div className="text-indigo-200">02 Apr 2024</div>
                  <div className="flex justify-end space-x-2">
                    <button className="p-1.5 bg-indigo-900/50 text-indigo-200 rounded-lg border border-indigo-500/30 hover:bg-indigo-800/50 transition-colors">
                      <EyeIcon className="h-4 w-4" />
                    </button>
                    <button className="p-1.5 bg-indigo-900/50 text-indigo-200 rounded-lg border border-indigo-500/30 hover:bg-indigo-800/50 transition-colors">
                      <TrashIcon className="h-4 w-4" />
                    </button>
                  </div>
                </div>
                <div className="grid grid-cols-5 items-center p-4 hover:bg-indigo-900/30">
                  <div className="col-span-2 flex items-center">
                    <FileTextIcon className="h-5 w-5 text-indigo-300 mr-3" />
                    <span className="font-medium text-white">
                      Bank Statement - March 2024.pdf
                    </span>
                  </div>
                  <div className="text-indigo-200">Bank Statement</div>
                  <div className="text-indigo-200">31 Mar 2024</div>
                  <div className="flex justify-end space-x-2">
                    <button className="p-1.5 bg-indigo-900/50 text-indigo-200 rounded-lg border border-indigo-500/30 hover:bg-indigo-800/50 transition-colors">
                      <EyeIcon className="h-4 w-4" />
                    </button>
                    <button className="p-1.5 bg-indigo-900/50 text-indigo-200 rounded-lg border border-indigo-500/30 hover:bg-indigo-800/50 transition-colors">
                      <TrashIcon className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>}
        {activeTab === 'process' && <div>
            <div className="text-center mb-8">
              <h3 className="text-xl font-bold text-white mb-3">
                AI Document Processing
              </h3>
              <p className="text-indigo-200 mb-6 max-w-md mx-auto">
                See how our AI automatically extracts, categorizes, and
                processes financial information from your documents.
              </p>
              {!showProcessing && <button onClick={handleStartDemo} className="px-6 py-3 bg-[#EA3A70] text-white rounded-lg hover:bg-[#EA3A70]/90 transition-colors flex items-center mx-auto">
                  <BrainCircuitIcon className="h-5 w-5 mr-2" />
                  Start Processing Demo
                </button>}
            </div>
            {showProcessing && <div className="bg-indigo-900/20 rounded-lg border border-indigo-500/30 p-6">
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-indigo-900/50 rounded-lg border border-indigo-500/30 mr-4">
                    <FileTextIcon className="h-5 w-5 text-[#EA3A70]" />
                  </div>
                  <div>
                    <h4 className="font-medium text-white">
                      Invoice - TechSupplier.pdf
                    </h4>
                    <div className="text-sm text-indigo-300">
                      Processing document...
                    </div>
                  </div>
                </div>
                <div className="mb-6">
                  <div className="flex justify-between text-sm text-indigo-300 mb-2">
                    <span>Processing progress</span>
                    <span>
                      {processingStage >= 5 ? 'Complete' : 'In progress...'}
                    </span>
                  </div>
                  <div className="w-full bg-indigo-900/50 rounded-full h-2.5 mb-4">
                    <div className="bg-[#EA3A70] h-2.5 rounded-full transition-all duration-500" style={{
                width: `${processingStage * 20}%`
              }}></div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className={`flex items-center ${processingStage >= 1 ? 'text-white' : 'text-indigo-400'}`}>
                    <div className={`p-1.5 rounded-full mr-3 ${processingStage >= 1 ? 'bg-green-500/20 text-green-400' : 'bg-indigo-900/50 text-indigo-400'}`}>
                      {processingStage >= 1 ? <CheckCircleIcon className="h-4 w-4" /> : <ClockIcon className="h-4 w-4" />}
                    </div>
                    <span>Document validation and preparation</span>
                  </div>
                  <div className={`flex items-center ${processingStage >= 2 ? 'text-white' : 'text-indigo-400'}`}>
                    <div className={`p-1.5 rounded-full mr-3 ${processingStage >= 2 ? 'bg-green-500/20 text-green-400' : 'bg-indigo-900/50 text-indigo-400'}`}>
                      {processingStage >= 2 ? <CheckCircleIcon className="h-4 w-4" /> : <ClockIcon className="h-4 w-4" />}
                    </div>
                    <span>AI text and data extraction</span>
                  </div>
                  <div className={`flex items-center ${processingStage >= 3 ? 'text-white' : 'text-indigo-400'}`}>
                    <div className={`p-1.5 rounded-full mr-3 ${processingStage >= 3 ? 'bg-green-500/20 text-green-400' : 'bg-indigo-900/50 text-indigo-400'}`}>
                      {processingStage >= 3 ? <CheckCircleIcon className="h-4 w-4" /> : <ClockIcon className="h-4 w-4" />}
                    </div>
                    <span>Vendor and transaction categorization</span>
                  </div>
                  <div className={`flex items-center ${processingStage >= 4 ? 'text-white' : 'text-indigo-400'}`}>
                    <div className={`p-1.5 rounded-full mr-3 ${processingStage >= 4 ? 'bg-green-500/20 text-green-400' : 'bg-indigo-900/50 text-indigo-400'}`}>
                      {processingStage >= 4 ? <CheckCircleIcon className="h-4 w-4" /> : <ClockIcon className="h-4 w-4" />}
                    </div>
                    <span>Accounting entry creation</span>
                  </div>
                  <div className={`flex items-center ${processingStage >= 5 ? 'text-white' : 'text-indigo-400'}`}>
                    <div className={`p-1.5 rounded-full mr-3 ${processingStage >= 5 ? 'bg-green-500/20 text-green-400' : 'bg-indigo-900/50 text-indigo-400'}`}>
                      {processingStage >= 5 ? <CheckCircleIcon className="h-4 w-4" /> : <ClockIcon className="h-4 w-4" />}
                    </div>
                    <span>Financial impact analysis</span>
                  </div>
                </div>
                {processingStage >= 5 && <div className="mt-6 p-4 bg-green-500/10 border border-green-500/30 rounded-lg">
                    <div className="flex items-center text-green-400 mb-2">
                      <CheckCircleIcon className="h-5 w-5 mr-2" />
                      <span className="font-medium">Processing complete</span>
                    </div>
                    <p className="text-indigo-200 text-sm mb-3">
                      Invoice successfully processed and recorded in your
                      accounting system.
                    </p>
                    <button className="px-4 py-2 bg-indigo-900/50 text-white rounded-lg border border-indigo-500/30 hover:bg-indigo-800/50 transition-colors text-sm flex items-center">
                      <EyeIcon className="h-4 w-4 mr-2" />
                      View Processed Data
                    </button>
                  </div>}
              </div>}
          </div>}
      </div>
    </div>;
}