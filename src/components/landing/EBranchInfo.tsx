import React, { useState } from 'react'
import { InfoIcon } from 'lucide-react'
import { PortalPromotion } from './PortalPromotion'
export function EBranchInfo() {
  const [showPlanDetails, setShowPlanDetails] = useState(false)
  return (
    <div className="text-right">
      <div className="flex items-center justify-end space-x-1">
        <button
          onClick={() => setShowPlanDetails(true)}
          className="text-sm text-[#EA3A70] hover:text-[#EA3A70]/80 transition-colors"
        >
          eBranch Plan
        </button>
        <div className="group relative">
          <InfoIcon className="h-4 w-4 text-[#EA3A70] cursor-help" />
          <div className="absolute bottom-full right-0 mb-2 w-48 p-2 bg-[#1B1537] border border-[#2D2755] rounded-lg text-xs text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
            Our premium eBranch plan includes AI-powered entity management,
            automated compliance checks, and dedicated support.
          </div>
        </div>
      </div>
      <PortalPromotion
        isOpen={showPlanDetails}
        onClose={() => setShowPlanDetails(false)}
      />
    </div>
  )
}
