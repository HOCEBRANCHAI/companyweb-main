import React, { useState } from 'react';
import { FileTextIcon, DownloadIcon, CheckIcon } from 'lucide-react';
interface FinalApprovalProps {
  onComplete: () => void;
}
export function FinalApproval({
  onComplete
}: FinalApprovalProps) {
  const [isGenerating, setIsGenerating] = useState(false);
  const [isGenerated, setIsGenerated] = useState(false);
  const [approved, setApproved] = useState(false);
  const handleGenerateReport = () => {
    setIsGenerating(true);
    // Simulate PDF generation
    setTimeout(() => {
      setIsGenerating(false);
      setIsGenerated(true);
    }, 2000);
  };
  const handleApprove = () => {
    setApproved(true);
    onComplete();
  };
  return <div className="space-y-6">
      <div className="bg-gray-50 rounded-lg p-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <FileTextIcon className="h-8 w-8 text-blue-600" />
            <div>
              <h3 className="text-lg font-medium text-gray-900">
                Annual Report 2023
              </h3>
              <p className="text-sm text-gray-500">
                Final version for approval
              </p>
            </div>
          </div>
          <button onClick={handleGenerateReport} disabled={isGenerating || isGenerated} className={`px-4 py-2 rounded-md text-sm font-medium ${isGenerating ? 'bg-gray-100 text-gray-400 cursor-not-allowed' : isGenerated ? 'bg-green-100 text-green-800' : 'bg-blue-600 text-white hover:bg-blue-700'}`}>
            {isGenerating ? 'Generating...' : isGenerated ? 'Generated' : 'Generate Report'}
          </button>
        </div>
        {isGenerated && <div className="mt-6 border-t border-gray-200 pt-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <DownloadIcon className="h-5 w-5 text-gray-400" />
                <span className="text-sm text-gray-600">
                  annual_report_2023.pdf
                </span>
              </div>
              <button className="text-blue-600 hover:text-blue-500 text-sm font-medium">
                Download Preview
              </button>
            </div>
          </div>}
      </div>
      {isGenerated && <div className="space-y-4">
          <div className="flex items-start space-x-3">
            <input type="checkbox" checked={approved} onChange={e => setApproved(e.target.checked)} className="mt-1 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
            <div>
              <p className="text-sm font-medium text-gray-900">
                I confirm that all information in this report is accurate and
                complete
              </p>
              <p className="text-xs text-gray-500 mt-1">
                By checking this box, you acknowledge that you have reviewed and
                approved the final version of the annual report.
              </p>
            </div>
          </div>
          <button onClick={handleApprove} disabled={!approved} className={`w-full py-2 px-4 rounded-md text-sm font-medium ${approved ? 'bg-green-600 text-white hover:bg-green-700' : 'bg-gray-100 text-gray-400 cursor-not-allowed'}`}>
            Approve and Finalize Report
          </button>
        </div>}
    </div>;
}