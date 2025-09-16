import React, { useState } from 'react';
import { CalendarIcon, TrendingUpIcon, ActivityIcon, BarChart3Icon } from 'lucide-react';
import { AnnualReportWorkflow } from './workflows/AnnualReportWorkflow';
export function QuickStats() {
  const [showWorkflow, setShowWorkflow] = useState(false);
  return <div className="space-y-5">
      
      {showWorkflow && <div className="space-y-6 mt-6 p-4 bg-[#4A2D80]/20 rounded-lg border border-[#4A2D80]/30">
          <button onClick={() => setShowWorkflow(false)} className="flex items-center text-base text-white hover:text-[#E5D81D]">
            <ArrowRightIcon className="h-5 w-5 mr-2 rotate-180" />
            Back to Overview
          </button>
          <AnnualReportWorkflow />
        </div>}
    </div>;
}