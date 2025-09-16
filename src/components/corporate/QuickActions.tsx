import React from 'react';
import { PlusIcon, FileTextIcon, DownloadIcon, ShareIcon, PrinterIcon, ArrowRightIcon } from 'lucide-react';
interface QuickActionsProps {
  onExport: () => void;
  onShare: () => void;
  onPrint: () => void;
}
export function QuickActions({
  onExport,
  onShare,
  onPrint
}: QuickActionsProps) {
  return <div className="bg-white rounded-lg border border-gray-200 p-6">
      <h3 className="text-lg font-medium text-gray-900 mb-4">Quick Actions</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <button className="flex items-center justify-between p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
          <div className="flex items-center">
            <PlusIcon className="h-5 w-5 text-blue-600 mr-3" />
            <div className="text-left">
              <div className="font-medium text-blue-900">Add Entity</div>
              <div className="text-sm text-blue-700">
                Create a new company or branch
              </div>
            </div>
          </div>
          <ArrowRightIcon className="h-4 w-4 text-blue-600" />
        </button>
        <button className="flex items-center justify-between p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors">
          <div className="flex items-center">
            <FileTextIcon className="h-5 w-5 text-green-600 mr-3" />
            <div className="text-left">
              <div className="font-medium text-green-900">Generate Report</div>
              <div className="text-sm text-green-700">
                Create structure report
              </div>
            </div>
          </div>
          <ArrowRightIcon className="h-4 w-4 text-green-600" />
        </button>
        <button onClick={onExport} className="flex items-center justify-between p-4 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors">
          <div className="flex items-center">
            <DownloadIcon className="h-5 w-5 text-purple-600 mr-3" />
            <div className="text-left">
              <div className="font-medium text-purple-900">Export</div>
              <div className="text-sm text-purple-700">
                Download as PDF/Image
              </div>
            </div>
          </div>
          <ArrowRightIcon className="h-4 w-4 text-purple-600" />
        </button>
        <button onClick={onShare} className="flex items-center justify-between p-4 bg-yellow-50 rounded-lg hover:bg-yellow-100 transition-colors">
          <div className="flex items-center">
            <ShareIcon className="h-5 w-5 text-yellow-600 mr-3" />
            <div className="text-left">
              <div className="font-medium text-yellow-900">Share</div>
              <div className="text-sm text-yellow-700">
                Share with stakeholders
              </div>
            </div>
          </div>
          <ArrowRightIcon className="h-4 w-4 text-yellow-600" />
        </button>
      </div>
    </div>;
}