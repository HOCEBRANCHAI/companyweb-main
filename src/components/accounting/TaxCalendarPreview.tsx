import React, { useState } from 'react';
import { CalendarIcon, AlertCircleIcon, CheckCircleIcon, ClockIcon, ArrowRightIcon, BellIcon, FileTextIcon, PercentIcon, BarChart2Icon } from 'lucide-react';
export function TaxCalendarPreview() {
  const [selectedMonth, setSelectedMonth] = useState('May');
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const deadlines = [{
    id: 1,
    date: 'May 15, 2024',
    title: 'Q1 VAT Return Filing',
    description: 'Submit Q1 VAT return to Dutch Tax Authority',
    status: 'upcoming',
    type: 'vat',
    icon: <PercentIcon className="h-5 w-5" />
  }, {
    id: 2,
    date: 'May 31, 2024',
    title: 'Corporate Tax Advance Payment',
    description: 'Second quarterly advance payment for corporate tax',
    status: 'upcoming',
    type: 'corporate',
    icon: <FileTextIcon className="h-5 w-5" />
  }, {
    id: 3,
    date: 'April 30, 2024',
    title: 'Annual Accounts Filing',
    description: 'Submit annual accounts to Chamber of Commerce',
    status: 'completed',
    type: 'annual',
    icon: <BarChart2Icon className="h-5 w-5" />
  }];
  return <div className="bg-[#1B1537]/80 backdrop-blur-sm rounded-xl border border-[#2D2755] overflow-hidden">
      <div className="p-4 border-b border-indigo-500/30 flex justify-between items-center">
        <div className="flex items-center">
          <CalendarIcon className="h-5 w-5 text-[#EA3A70] mr-2" />
          <h3 className="text-lg font-bold text-white">Smart Tax Calendar</h3>
        </div>
        <div className="flex items-center text-sm text-indigo-300">
          <BellIcon className="h-4 w-4 mr-1" />
          <span>Notifications enabled</span>
        </div>
      </div>
      <div className="p-6">
        <div className="flex justify-between items-center mb-6">
          <div>
            <p className="text-indigo-300 text-sm">
              Your personalized tax compliance calendar
            </p>
          </div>
          <div className="flex space-x-1 bg-indigo-900/30 rounded-lg p-1 border border-indigo-500/30">
            {months.map((month, index) => <button key={index} onClick={() => setSelectedMonth(month)} className={`px-3 py-1 text-xs rounded-md ${selectedMonth === month ? 'bg-[#EA3A70] text-white' : 'text-indigo-300 hover:bg-indigo-800/50'}`}>
                {month}
              </button>)}
          </div>
        </div>
        <div className="space-y-4">
          {deadlines.map(deadline => <div key={deadline.id} className={`p-4 rounded-lg border ${deadline.status === 'completed' ? 'bg-green-500/10 border-green-500/30' : deadline.status === 'upcoming' ? 'bg-indigo-900/30 border-indigo-500/30' : 'bg-red-500/10 border-red-500/30'}`}>
              <div className="flex items-start">
                <div className={`p-2 rounded-lg mr-4 ${deadline.status === 'completed' ? 'bg-green-500/20 text-green-400' : deadline.status === 'upcoming' ? 'bg-indigo-900/50 text-[#EA3A70]' : 'bg-red-500/20 text-red-400'}`}>
                  {deadline.icon}
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-medium text-white">
                        {deadline.title}
                      </h4>
                      <p className="text-sm text-indigo-300 mt-1">
                        {deadline.description}
                      </p>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-medium text-white">
                        {deadline.date}
                      </div>
                      <div className={`text-xs mt-1 flex items-center justify-end ${deadline.status === 'completed' ? 'text-green-400' : deadline.status === 'upcoming' ? 'text-indigo-300' : 'text-red-400'}`}>
                        {deadline.status === 'completed' ? <>
                            <CheckCircleIcon className="h-3 w-3 mr-1" />
                            <span>Completed</span>
                          </> : deadline.status === 'upcoming' ? <>
                            <ClockIcon className="h-3 w-3 mr-1" />
                            <span>Upcoming</span>
                          </> : <>
                            <AlertCircleIcon className="h-3 w-3 mr-1" />
                            <span>Overdue</span>
                          </>}
                      </div>
                    </div>
                  </div>
                  {deadline.status !== 'completed' && <div className="mt-4 flex">
                      <button className="px-3 py-1.5 bg-indigo-900/50 text-white rounded-lg border border-indigo-500/30 hover:bg-indigo-800/50 transition-colors text-sm flex items-center">
                        Start Preparation
                        <ArrowRightIcon className="h-3 w-3 ml-2" />
                      </button>
                    </div>}
                </div>
              </div>
            </div>)}
        </div>
        <div className="mt-6 p-4 bg-indigo-900/20 rounded-lg border border-indigo-500/30">
          <div className="flex items-center">
            <div className="p-2 bg-indigo-900/50 rounded-full border border-indigo-500/30 mr-3">
              <BrainCircuitIcon className="h-4 w-4 text-[#EA3A70]" />
            </div>
            <div>
              <p className="text-sm text-indigo-200">
                <span className="font-medium text-white">
                  AI Tax Assistant:
                </span>{' '}
                Based on your business activity, I've identified 3 potential tax
                deductions you might be missing. Would you like to review them?
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>;
}
import { BrainCircuitIcon } from 'lucide-react';