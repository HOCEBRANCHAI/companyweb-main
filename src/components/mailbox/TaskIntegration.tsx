import React, { useState } from 'react';
import { BrainCircuitIcon, ListIcon, ArrowRightIcon, FileTextIcon, AlertTriangleIcon, CalendarIcon, CheckCircleIcon, ClockIcon, CheckIcon, MailIcon, PlusIcon } from 'lucide-react';
export function TaskIntegration() {
  const [selectedTab, setSelectedTab] = useState('objection');
  return <div className="bg-[#1B1537]/80 backdrop-blur-sm rounded-xl border border-[#2D2755] overflow-hidden">
      <div className="p-4 md:p-6">
        <div className="flex items-center mb-6">
          <div className="p-3 rounded-lg bg-indigo-900/50 border border-indigo-500/30 mr-4">
            <ListIcon className="h-6 w-6 text-[#EA3A70]" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-white">
              Mailbox-to-Task Integration
            </h3>
            <p className="text-indigo-200 mt-1">
              Automatically convert mail into actionable tasks
            </p>
          </div>
        </div>
        <p className="text-indigo-200 mb-6">
          Our AI analyzes your business mail and automatically creates tasks
          with the right context, deadlines, and priority levels - ensuring
          nothing falls through the cracks.
        </p>
        <div className="flex overflow-x-auto mb-6 border-b border-indigo-500/30">
          <button onClick={() => setSelectedTab('objection')} className={`px-4 py-2 font-medium text-sm whitespace-nowrap ${selectedTab === 'objection' ? 'text-[#EA3A70] border-b-2 border-[#EA3A70]' : 'text-indigo-300 hover:text-white'}`}>
            Tax Objection
          </button>
          <button onClick={() => setSelectedTab('payment')} className={`px-4 py-2 font-medium text-sm whitespace-nowrap ${selectedTab === 'payment' ? 'text-[#EA3A70] border-b-2 border-[#EA3A70]' : 'text-indigo-300 hover:text-white'}`}>
            Payment Reminder
          </button>
          <button onClick={() => setSelectedTab('compliance')} className={`px-4 py-2 font-medium text-sm whitespace-nowrap ${selectedTab === 'compliance' ? 'text-[#EA3A70] border-b-2 border-[#EA3A70]' : 'text-indigo-300 hover:text-white'}`}>
            Compliance Deadline
          </button>
        </div>
        {selectedTab === 'objection' && <div className="space-y-6">
            <div className="flex items-start">
              <div className="p-3 bg-indigo-900/50 rounded-lg border border-indigo-500/30 mr-4 hidden md:block">
                <MailIcon className="h-6 w-6 text-indigo-300" />
              </div>
              <div className="flex-1">
                <h4 className="text-white font-medium mb-2">
                  Mail Received: Tax Assessment
                </h4>
                <div className="bg-indigo-900/30 p-3 rounded-lg border border-indigo-500/30">
                  <div className="flex items-start">
                    <FileTextIcon className="h-5 w-5 text-indigo-300 mr-2 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm text-white">
                        Annual Tax Assessment 2023
                      </p>
                      <p className="text-xs text-indigo-300 mt-1">
                        From: Dutch Tax Authority • 10/15/2023
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="w-px h-16 bg-indigo-500/30"></div>
            </div>
            <div className="flex items-start">
              <div className="p-3 bg-purple-900/50 rounded-lg border border-purple-500/30 mr-4 hidden md:block">
                <BrainCircuitIcon className="h-6 w-6 text-purple-400" />
              </div>
              <div className="flex-1">
                <h4 className="text-white font-medium mb-2">
                  AI Analysis & Processing
                </h4>
                <div className="bg-purple-900/20 p-3 rounded-lg border border-purple-500/20">
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <CheckCircleIcon className="h-4 w-4 text-green-400 mr-2" />
                      <p className="text-sm text-purple-200">
                        Document identified as Tax Assessment
                      </p>
                    </div>
                    <div className="flex items-center">
                      <CheckCircleIcon className="h-4 w-4 text-green-400 mr-2" />
                      <p className="text-sm text-purple-200">
                        Objection deadline extracted: 6 weeks (January 26, 2024)
                      </p>
                    </div>
                    <div className="flex items-center">
                      <CheckCircleIcon className="h-4 w-4 text-green-400 mr-2" />
                      <p className="text-sm text-purple-200">
                        Potential objection grounds identified
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="w-px h-16 bg-indigo-500/30"></div>
            </div>
            <div className="flex items-start">
              <div className="p-3 bg-indigo-900/50 rounded-lg border border-indigo-500/30 mr-4 hidden md:block">
                <ListIcon className="h-6 w-6 text-[#EA3A70]" />
              </div>
              <div className="flex-1">
                <h4 className="text-white font-medium mb-2">
                  Task Created: File Tax Objection
                </h4>
                <div className="bg-indigo-900/30 p-4 rounded-lg border border-indigo-500/30">
                  <div className="flex justify-between items-start mb-3">
                    <div className="flex items-start">
                      <div className="p-2 bg-red-900/30 rounded-lg mr-3 flex-shrink-0">
                        <AlertTriangleIcon className="h-4 w-4 text-red-400" />
                      </div>
                      <div>
                        <h5 className="font-medium text-white">
                          File Tax Objection
                        </h5>
                        <p className="text-sm text-indigo-300 mt-1">
                          Prepare and submit an objection letter for the
                          corporate tax assessment
                        </p>
                      </div>
                    </div>
                    <span className="px-2 py-0.5 bg-red-900/30 text-red-400 rounded-full text-xs">
                      High Priority
                    </span>
                  </div>
                  <div className="flex items-center text-sm text-indigo-300 mb-3">
                    <CalendarIcon className="h-4 w-4 mr-2" />
                    <span>Deadline: January 26, 2024</span>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className="px-2 py-0.5 bg-purple-900/30 text-purple-300 rounded-full text-xs">
                      Tax
                    </span>
                    <span className="px-2 py-0.5 bg-indigo-900/30 text-indigo-300 rounded-full text-xs">
                      Objection
                    </span>
                  </div>
                  <div className="mt-3 p-3 bg-indigo-900/50 rounded-lg border border-indigo-500/30">
                    <h6 className="text-sm font-medium text-white mb-2">
                      AI-Suggested Actions:
                    </h6>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <CheckIcon className="h-4 w-4 text-green-400 mr-2 mt-0.5" />
                        <span className="text-sm text-indigo-200">
                          Review assessment for errors or discrepancies
                        </span>
                      </li>
                      <li className="flex items-start">
                        <CheckIcon className="h-4 w-4 text-green-400 mr-2 mt-0.5" />
                        <span className="text-sm text-indigo-200">
                          Draft objection letter using our AI-powered template
                        </span>
                      </li>
                      <li className="flex items-start">
                        <CheckIcon className="h-4 w-4 text-green-400 mr-2 mt-0.5" />
                        <span className="text-sm text-indigo-200">
                          Submit objection before the 6-week deadline
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div className="flex justify-end mt-4">
                    <button className="px-3 py-1.5 bg-[#EA3A70] text-white rounded-lg hover:bg-[#EA3A70]/90 transition-colors text-sm flex items-center">
                      <ArrowRightIcon className="h-4 w-4 mr-2" />
                      Go to Objection Tool
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>}
        {selectedTab === 'payment' && <div className="space-y-6">
            <div className="flex items-start">
              <div className="p-3 bg-indigo-900/50 rounded-lg border border-indigo-500/30 mr-4 hidden md:block">
                <MailIcon className="h-6 w-6 text-indigo-300" />
              </div>
              <div className="flex-1">
                <h4 className="text-white font-medium mb-2">
                  Mail Received: Payment Reminder
                </h4>
                <div className="bg-indigo-900/30 p-3 rounded-lg border border-indigo-500/30">
                  <div className="flex items-start">
                    <FileTextIcon className="h-5 w-5 text-indigo-300 mr-2 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm text-white">
                        VAT Payment Reminder Q4 2023
                      </p>
                      <p className="text-xs text-indigo-300 mt-1">
                        From: Dutch Tax Authority • 01/15/2024
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="w-px h-16 bg-indigo-500/30"></div>
            </div>
            <div className="flex items-start">
              <div className="p-3 bg-purple-900/50 rounded-lg border border-purple-500/30 mr-4 hidden md:block">
                <BrainCircuitIcon className="h-6 w-6 text-purple-400" />
              </div>
              <div className="flex-1">
                <h4 className="text-white font-medium mb-2">
                  AI Analysis & Processing
                </h4>
                <div className="bg-purple-900/20 p-3 rounded-lg border border-purple-500/20">
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <CheckCircleIcon className="h-4 w-4 text-green-400 mr-2" />
                      <p className="text-sm text-purple-200">
                        Document identified as Payment Reminder
                      </p>
                    </div>
                    <div className="flex items-center">
                      <CheckCircleIcon className="h-4 w-4 text-green-400 mr-2" />
                      <p className="text-sm text-purple-200">
                        Payment amount extracted: €3,450.00
                      </p>
                    </div>
                    <div className="flex items-center">
                      <CheckCircleIcon className="h-4 w-4 text-green-400 mr-2" />
                      <p className="text-sm text-purple-200">
                        Payment deadline: January 31, 2024
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="w-px h-16 bg-indigo-500/30"></div>
            </div>
            <div className="flex items-start">
              <div className="p-3 bg-indigo-900/50 rounded-lg border border-indigo-500/30 mr-4 hidden md:block">
                <ListIcon className="h-6 w-6 text-[#EA3A70]" />
              </div>
              <div className="flex-1">
                <h4 className="text-white font-medium mb-2">
                  Task Created: Make VAT Payment
                </h4>
                <div className="bg-indigo-900/30 p-4 rounded-lg border border-indigo-500/30">
                  <div className="flex justify-between items-start mb-3">
                    <div className="flex items-start">
                      <div className="p-2 bg-yellow-900/30 rounded-lg mr-3 flex-shrink-0">
                        <ClockIcon className="h-4 w-4 text-yellow-400" />
                      </div>
                      <div>
                        <h5 className="font-medium text-white">
                          Make VAT Payment
                        </h5>
                        <p className="text-sm text-indigo-300 mt-1">
                          Process VAT payment for Q4 2023
                        </p>
                      </div>
                    </div>
                    <span className="px-2 py-0.5 bg-yellow-900/30 text-yellow-400 rounded-full text-xs">
                      Medium Priority
                    </span>
                  </div>
                  <div className="flex items-center text-sm text-indigo-300 mb-3">
                    <CalendarIcon className="h-4 w-4 mr-2" />
                    <span>Deadline: January 31, 2024</span>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className="px-2 py-0.5 bg-purple-900/30 text-purple-300 rounded-full text-xs">
                      Tax
                    </span>
                    <span className="px-2 py-0.5 bg-indigo-900/30 text-indigo-300 rounded-full text-xs">
                      VAT
                    </span>
                    <span className="px-2 py-0.5 bg-indigo-900/30 text-indigo-300 rounded-full text-xs">
                      Payment
                    </span>
                  </div>
                  <div className="grid grid-cols-2 gap-3 mb-3">
                    <div className="bg-indigo-900/50 p-2 rounded-lg">
                      <span className="text-xs text-indigo-300">
                        Amount Due
                      </span>
                      <p className="text-sm text-white">€3,450.00</p>
                    </div>
                    <div className="bg-indigo-900/50 p-2 rounded-lg">
                      <span className="text-xs text-indigo-300">Reference</span>
                      <p className="text-sm text-white">VAT-Q4-2023</p>
                    </div>
                  </div>
                  <div className="flex justify-end mt-4">
                    <button className="px-3 py-1.5 bg-[#EA3A70] text-white rounded-lg hover:bg-[#EA3A70]/90 transition-colors text-sm flex items-center">
                      <ArrowRightIcon className="h-4 w-4 mr-2" />
                      Schedule Payment
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>}
        {selectedTab === 'compliance' && <div className="space-y-6">
            <div className="flex items-start">
              <div className="p-3 bg-indigo-900/50 rounded-lg border border-indigo-500/30 mr-4 hidden md:block">
                <MailIcon className="h-6 w-6 text-indigo-300" />
              </div>
              <div className="flex-1">
                <h4 className="text-white font-medium mb-2">
                  Mail Received: Annual Filing Reminder
                </h4>
                <div className="bg-indigo-900/30 p-3 rounded-lg border border-indigo-500/30">
                  <div className="flex items-start">
                    <FileTextIcon className="h-5 w-5 text-indigo-300 mr-2 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm text-white">
                        Annual Accounts Filing Reminder
                      </p>
                      <p className="text-xs text-indigo-300 mt-1">
                        From: Chamber of Commerce • 02/01/2024
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="w-px h-16 bg-indigo-500/30"></div>
            </div>
            <div className="flex items-start">
              <div className="p-3 bg-purple-900/50 rounded-lg border border-purple-500/30 mr-4 hidden md:block">
                <BrainCircuitIcon className="h-6 w-6 text-purple-400" />
              </div>
              <div className="flex-1">
                <h4 className="text-white font-medium mb-2">
                  AI Analysis & Processing
                </h4>
                <div className="bg-purple-900/20 p-3 rounded-lg border border-purple-500/20">
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <CheckCircleIcon className="h-4 w-4 text-green-400 mr-2" />
                      <p className="text-sm text-purple-200">
                        Document identified as Compliance Reminder
                      </p>
                    </div>
                    <div className="flex items-center">
                      <CheckCircleIcon className="h-4 w-4 text-green-400 mr-2" />
                      <p className="text-sm text-purple-200">
                        Filing deadline extracted: April 30, 2024
                      </p>
                    </div>
                    <div className="flex items-center">
                      <CheckCircleIcon className="h-4 w-4 text-green-400 mr-2" />
                      <p className="text-sm text-purple-200">
                        Penalty for late filing identified: €50-€500
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="w-px h-16 bg-indigo-500/30"></div>
            </div>
            <div className="flex items-start">
              <div className="p-3 bg-indigo-900/50 rounded-lg border border-indigo-500/30 mr-4 hidden md:block">
                <ListIcon className="h-6 w-6 text-[#EA3A70]" />
              </div>
              <div className="flex-1">
                <h4 className="text-white font-medium mb-2">
                  Task Created: Prepare Annual Accounts
                </h4>
                <div className="bg-indigo-900/30 p-4 rounded-lg border border-indigo-500/30">
                  <div className="flex justify-between items-start mb-3">
                    <div className="flex items-start">
                      <div className="p-2 bg-blue-900/30 rounded-lg mr-3 flex-shrink-0">
                        <FileTextIcon className="h-4 w-4 text-blue-400" />
                      </div>
                      <div>
                        <h5 className="font-medium text-white">
                          Prepare Annual Accounts
                        </h5>
                        <p className="text-sm text-indigo-300 mt-1">
                          Prepare and file annual accounts with the Chamber of
                          Commerce
                        </p>
                      </div>
                    </div>
                    <span className="px-2 py-0.5 bg-blue-900/30 text-blue-400 rounded-full text-xs">
                      Standard Priority
                    </span>
                  </div>
                  <div className="flex items-center text-sm text-indigo-300 mb-3">
                    <CalendarIcon className="h-4 w-4 mr-2" />
                    <span>Deadline: April 30, 2024</span>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className="px-2 py-0.5 bg-purple-900/30 text-purple-300 rounded-full text-xs">
                      Compliance
                    </span>
                    <span className="px-2 py-0.5 bg-indigo-900/30 text-indigo-300 rounded-full text-xs">
                      Annual Accounts
                    </span>
                  </div>
                  <div className="mt-3 p-3 bg-indigo-900/50 rounded-lg border border-indigo-500/30">
                    <h6 className="text-sm font-medium text-white mb-2">
                      AI-Suggested Actions:
                    </h6>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <CheckIcon className="h-4 w-4 text-green-400 mr-2 mt-0.5" />
                        <span className="text-sm text-indigo-200">
                          Contact your accountant to prepare financial
                          statements
                        </span>
                      </li>
                      <li className="flex items-start">
                        <CheckIcon className="h-4 w-4 text-green-400 mr-2 mt-0.5" />
                        <span className="text-sm text-indigo-200">
                          Review and approve the statements
                        </span>
                      </li>
                      <li className="flex items-start">
                        <CheckIcon className="h-4 w-4 text-green-400 mr-2 mt-0.5" />
                        <span className="text-sm text-indigo-200">
                          Submit to Chamber of Commerce before deadline
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div className="flex justify-between mt-4">
                    <button className="px-3 py-1.5 bg-indigo-900/50 text-white rounded-lg hover:bg-indigo-800/50 transition-colors text-sm flex items-center">
                      <CalendarIcon className="h-4 w-4 mr-2" />
                      Schedule Reminder
                    </button>
                    <button className="px-3 py-1.5 bg-[#EA3A70] text-white rounded-lg hover:bg-[#EA3A70]/90 transition-colors text-sm flex items-center">
                      <PlusIcon className="h-4 w-4 mr-2" />
                      Create Subtasks
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>}
      </div>
    </div>;
}