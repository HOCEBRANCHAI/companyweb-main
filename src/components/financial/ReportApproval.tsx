import React, { useState } from 'react';
import { FileTextIcon, CheckCircleIcon, EyeIcon, MessageCircleIcon, XIcon, DownloadIcon } from 'lucide-react';
import { ReportChat } from '../ai/ReportChat';
interface ReportApprovalProps {
  reportName: string;
  reportDate: string;
  onClose: () => void;
}
export function ReportApproval({
  reportName,
  reportDate,
  onClose
}: ReportApprovalProps) {
  const [approved, setApproved] = useState(false);
  const [showChat, setShowChat] = useState(false);
  const [comments, setComments] = useState('');
  const handleApprove = () => {
    setApproved(true);
  };
  return <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-4xl m-4">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <div className="flex items-center space-x-3">
            <FileTextIcon className="h-6 w-6 text-blue-600" />
            <div>
              <h2 className="text-xl font-semibold text-gray-900">
                {reportName}
              </h2>
              <p className="text-sm text-gray-500">{reportDate}</p>
            </div>
          </div>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-500">
            <XIcon className="h-6 w-6" />
          </button>
        </div>
        <div className="p-6 flex gap-6">
          {/* Left side - Report Preview & Approval */}
          <div className="flex-1 space-y-6">
            {/* Document Preview */}
            <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-medium text-gray-900">
                  Draft Preview
                </h3>
                <button className="text-blue-600 hover:text-blue-800 flex items-center">
                  <EyeIcon className="h-4 w-4 mr-1" />
                  View Full Document
                </button>
              </div>
              <div className="bg-white p-4 rounded border border-gray-200">
                {/* Sample preview content */}
                <p className="text-sm text-gray-600">
                  Balance Sheet as of December 31, 2023
                  {/* Add more preview content as needed */}
                </p>
              </div>
            </div>
            {/* Approval Section */}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h3 className="text-lg font-medium text-gray-900 mb-4">
                Report Approval
              </h3>
              <div className="space-y-4">
                <textarea placeholder="Add any comments or notes about this report..." value={comments} onChange={e => setComments(e.target.value)} className="w-full p-3 border border-gray-300 rounded-md" rows={4} />
                <div className="flex items-center space-x-4">
                  <button onClick={handleApprove} disabled={approved} className={`flex items-center px-4 py-2 rounded-md text-sm font-medium ${approved ? 'bg-green-100 text-green-800' : 'bg-blue-600 text-white hover:bg-blue-700'}`}>
                    <CheckCircleIcon className="h-4 w-4 mr-2" />
                    {approved ? 'Approved' : 'Approve Report'}
                  </button>
                  {approved && <button className="flex items-center px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 text-sm font-medium">
                      <DownloadIcon className="h-4 w-4 mr-2" />
                      Download Final Version
                    </button>}
                </div>
              </div>
            </div>
          </div>
          {/* Right side - AI Chat */}
          <div className="w-96 border-l border-gray-200 pl-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-medium text-gray-900">
                Report Analysis
              </h3>
              <button onClick={() => setShowChat(!showChat)} className="text-blue-600 hover:text-blue-800">
                <MessageCircleIcon className="h-5 w-5" />
              </button>
            </div>
            {showChat && <ReportChat />}
          </div>
        </div>
      </div>
    </div>;
}