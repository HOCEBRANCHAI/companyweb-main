import React, { useState } from 'react';
import { MailIcon, SearchIcon, FilterIcon, BrainCircuitIcon, FileTextIcon, ScanIcon, ForwardIcon, EyeIcon, CheckCircleIcon, AlertTriangleIcon, ClockIcon, CalendarIcon, LanguagesIcon, ArrowRightIcon, ListIcon, XIcon } from 'lucide-react';
import { SimpleImage } from '../common/SimpleImage';
export function MailboxDemo() {
  const [showAIAnalysis, setShowAIAnalysis] = useState(false);
  const [selectedMail, setSelectedMail] = useState<string | null>(null);
  const mailItems = [{
    id: '1',
    sender: 'Dutch Tax Authority',
    subject: 'Annual Tax Assessment 2023',
    type: 'Official Document',
    date: '10/15/2023',
    status: 'new',
    important: true
  }, {
    id: '2',
    sender: 'Chamber of Commerce',
    subject: 'Company Registration Update',
    type: 'Official Document',
    date: '10/14/2023',
    status: 'scanned',
    aiAnalyzed: true
  }, {
    id: '3',
    sender: 'ABN AMRO Bank',
    subject: 'Important: Account Statement',
    type: 'Financial',
    date: '10/13/2023',
    status: 'forwarded'
  }];
  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'new':
        return <AlertTriangleIcon className="h-4 w-4 text-[#EA3A70]" />;
      case 'scanned':
        return <ScanIcon className="h-4 w-4 text-green-400" />;
      case 'forwarded':
        return <ForwardIcon className="h-4 w-4 text-blue-400" />;
      default:
        return <ClockIcon className="h-4 w-4 text-yellow-400" />;
    }
  };
  const handleMailSelect = (id: string) => {
    setSelectedMail(id);
    setShowAIAnalysis(true);
  };
  return <div className="bg-[#1B1537]/80 backdrop-blur-sm rounded-xl border border-[#2D2755] overflow-hidden">
      <div className="p-4 border-b border-indigo-500/30 flex justify-between items-center">
        <div className="flex items-center">
          <MailIcon className="h-5 w-5 text-[#EA3A70] mr-2" />
          <h3 className="text-lg font-bold text-white">Digital Mailbox</h3>
        </div>
        <div className="flex items-center space-x-2">
          <button className="p-1.5 bg-indigo-900/50 text-indigo-300 hover:text-white rounded-lg transition-colors">
            <ScanIcon className="h-4 w-4" />
          </button>
          <button className="p-1.5 bg-indigo-900/50 text-indigo-300 hover:text-white rounded-lg transition-colors">
            <ForwardIcon className="h-4 w-4" />
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
        <div className="md:col-span-1 border-r border-indigo-500/30">
          <div className="p-4">
            <div className="relative mb-4">
              <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-indigo-300" />
              <input type="text" placeholder="Search mail..." className="w-full pl-9 pr-4 py-2 bg-indigo-900/30 border border-indigo-500/30 rounded-lg text-white placeholder-indigo-300 focus:outline-none focus:ring-2 focus:ring-[#EA3A70]/50" />
            </div>
            <div className="flex items-center justify-between mb-3">
              <h4 className="text-sm font-medium text-white">Recent Mail</h4>
              <button className="flex items-center text-xs text-indigo-300 hover:text-white">
                <FilterIcon className="h-3 w-3 mr-1" />
                Filter
              </button>
            </div>
            <div className="space-y-2">
              {mailItems.map(mail => <div key={mail.id} onClick={() => handleMailSelect(mail.id)} className={`p-3 rounded-lg cursor-pointer transition-colors ${selectedMail === mail.id ? 'bg-indigo-900/70 border border-indigo-500/50' : 'hover:bg-indigo-900/40 border border-transparent'}`}>
                  <div className="flex items-start">
                    <div className="flex-1">
                      <div className="flex items-center">
                        <p className="text-white text-sm font-medium">
                          {mail.sender}
                        </p>
                        {mail.important && <span className="ml-2 bg-[#EA3A70]/20 text-[#EA3A70] text-xs px-2 py-0.5 rounded-full">
                            Important
                          </span>}
                        {mail.aiAnalyzed && <span className="ml-2 bg-purple-500/20 text-purple-400 text-xs px-2 py-0.5 rounded-full flex items-center">
                            <BrainCircuitIcon className="h-3 w-3 mr-1" />
                            AI
                          </span>}
                      </div>
                      <p className="text-indigo-300 text-xs mt-1">
                        {mail.subject}
                      </p>
                      <div className="flex items-center mt-2">
                        <span className="text-xs text-indigo-400 bg-indigo-900/50 px-2 py-0.5 rounded-full">
                          {mail.type}
                        </span>
                        <span className="text-xs text-indigo-300 ml-2 flex items-center">
                          <CalendarIcon className="h-3 w-3 mr-1" />
                          {mail.date}
                        </span>
                      </div>
                    </div>
                    <div className="ml-2">{getStatusIcon(mail.status)}</div>
                  </div>
                </div>)}
            </div>
          </div>
        </div>
        <div className="md:col-span-2 bg-indigo-900/20">
          {showAIAnalysis ? <div className="p-4 md:p-6">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <div className="flex items-center">
                    <FileTextIcon className="h-5 w-5 text-[#EA3A70] mr-2" />
                    <h3 className="text-lg font-medium text-white">
                      Annual Tax Assessment 2023
                    </h3>
                  </div>
                  <p className="text-sm text-indigo-300 mt-1">
                    From: Dutch Tax Authority • 10/15/2023
                  </p>
                </div>
                <button onClick={() => setShowAIAnalysis(false)} className="p-1.5 bg-indigo-900/50 text-indigo-300 hover:text-white rounded-lg transition-colors">
                  <XIcon className="h-4 w-4" />
                </button>
              </div>
              <div className="bg-indigo-900/30 p-4 rounded-lg border border-indigo-500/30 mb-6">
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-purple-900/50 rounded-lg mr-3">
                    <BrainCircuitIcon className="h-5 w-5 text-purple-400" />
                  </div>
                  <div>
                    <h4 className="font-medium text-white">
                      AI Document Analysis
                    </h4>
                    <p className="text-xs text-indigo-300 mt-0.5">
                      Completed on 10/15/2023
                    </p>
                  </div>
                  <div className="ml-auto bg-green-900/30 px-2 py-1 rounded-lg flex items-center">
                    <span className="text-green-400 text-xs">
                      95% Confidence
                    </span>
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <h5 className="text-sm font-medium text-indigo-300 mb-1">
                      Document Type
                    </h5>
                    <p className="text-white">
                      Corporate Income Tax Assessment (Final)
                    </p>
                  </div>
                  <div>
                    <h5 className="text-sm font-medium text-indigo-300 mb-1">
                      Summary
                    </h5>
                    <p className="text-white text-sm">
                      This is the final assessment for your corporate income tax
                      for the fiscal year 2023. The Dutch Tax Authority has
                      determined your tax liability based on your submitted tax
                      return.
                    </p>
                  </div>
                  <div>
                    <h5 className="text-sm font-medium text-indigo-300 mb-1">
                      Key Information
                    </h5>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="bg-indigo-900/50 p-2 rounded-lg">
                        <span className="text-xs text-indigo-300">
                          Assessment Number
                        </span>
                        <p className="text-sm text-white">123456FN-H-250</p>
                      </div>
                      <div className="bg-indigo-900/50 p-2 rounded-lg">
                        <span className="text-xs text-indigo-300">
                          Tax Year
                        </span>
                        <p className="text-sm text-white">2023</p>
                      </div>
                      <div className="bg-indigo-900/50 p-2 rounded-lg">
                        <span className="text-xs text-indigo-300">
                          Amount Due
                        </span>
                        <p className="text-sm text-white">€24,850.00</p>
                      </div>
                      <div className="bg-indigo-900/50 p-2 rounded-lg">
                        <span className="text-xs text-indigo-300">
                          Payment Deadline
                        </span>
                        <p className="text-sm text-white">February 28, 2024</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-3">
                    <div className="flex items-start">
                      <AlertTriangleIcon className="h-5 w-5 text-red-400 mr-2 flex-shrink-0 mt-0.5" />
                      <div>
                        <h5 className="text-sm font-medium text-white mb-1">
                          Critical Deadline
                        </h5>
                        <p className="text-xs text-red-300">
                          You have until{' '}
                          <span className="font-medium text-red-200">
                            January 26, 2024
                          </span>{' '}
                          (6 weeks from receipt) to file an objection if you
                          disagree with this assessment.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-indigo-900/30 p-4 rounded-lg border border-indigo-500/30 mb-6">
                <div className="flex items-center mb-4">
                  <LanguagesIcon className="h-5 w-5 text-[#EA3A70] mr-2" />
                  <h4 className="font-medium text-white">
                    Translation & Explanation
                  </h4>
                </div>
                <div className="space-y-3">
                  <div className="bg-indigo-900/50 p-3 rounded-lg">
                    <p className="text-sm text-indigo-200">
                      <span className="text-white font-medium">
                        Original Dutch Text:
                      </span>{' '}
                      "Definitieve aanslag vennootschapsbelasting 2023. Op basis
                      van uw ingediende aangifte is uw belastingschuld
                      vastgesteld op €24.850,00."
                    </p>
                  </div>
                  <div className="bg-indigo-900/50 p-3 rounded-lg">
                    <p className="text-sm text-indigo-200">
                      <span className="text-white font-medium">
                        English Translation:
                      </span>{' '}
                      "Final corporate income tax assessment 2023. Based on your
                      submitted tax return, your tax liability has been
                      determined to be €24,850.00."
                    </p>
                  </div>
                  <div className="bg-purple-900/30 p-3 rounded-lg border border-purple-500/20">
                    <p className="text-sm text-purple-300">
                      <span className="text-purple-200 font-medium">
                        AI Explanation:
                      </span>{' '}
                      This is your final tax bill for 2023. The tax authority
                      has calculated that you owe €24,850.00 based on the
                      financial information you provided in your tax return.
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-indigo-900/30 p-4 rounded-lg border border-indigo-500/30">
                <div className="flex items-center mb-4">
                  <ListIcon className="h-5 w-5 text-[#EA3A70] mr-2" />
                  <h4 className="font-medium text-white">
                    Recommended Actions
                  </h4>
                </div>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <div className="p-1.5 bg-indigo-900/50 rounded-full mr-2 mt-0.5">
                      <CheckCircleIcon className="h-4 w-4 text-green-400" />
                    </div>
                    <div>
                      <p className="text-sm text-white">
                        Review the assessment for accuracy
                      </p>
                      <p className="text-xs text-indigo-300 mt-0.5">
                        Check if all deductions and expenses have been properly
                        accounted for
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="p-1.5 bg-indigo-900/50 rounded-full mr-2 mt-0.5">
                      <AlertTriangleIcon className="h-4 w-4 text-[#EA3A70]" />
                    </div>
                    <div>
                      <p className="text-sm text-white">
                        Consider filing an objection
                      </p>
                      <p className="text-xs text-indigo-300 mt-0.5">
                        If you disagree with the assessment, you must file an
                        objection within 6 weeks
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="p-1.5 bg-indigo-900/50 rounded-full mr-2 mt-0.5">
                      <ClockIcon className="h-4 w-4 text-yellow-400" />
                    </div>
                    <div>
                      <p className="text-sm text-white">Schedule tax payment</p>
                      <p className="text-xs text-indigo-300 mt-0.5">
                        Ensure payment is made by the February 28, 2024 deadline
                        to avoid penalties
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex justify-between mt-6 pt-4 border-t border-indigo-500/30">
                  <button className="px-3 py-1.5 bg-indigo-900/50 text-white rounded-lg hover:bg-indigo-800/50 transition-colors text-sm flex items-center">
                    <EyeIcon className="h-4 w-4 mr-2" />
                    View Document
                  </button>
                  <button className="px-3 py-1.5 bg-[#EA3A70] text-white rounded-lg hover:bg-[#EA3A70]/90 transition-colors text-sm flex items-center">
                    <ArrowRightIcon className="h-4 w-4 mr-2" />
                    Create Tasks
                  </button>
                </div>
              </div>
            </div> : <div className="flex flex-col items-center justify-center h-full p-6">
              <SimpleImage imageName="Mailbox_home.jpg" alt="Mailbox Interface" className="w-full max-w-md h-auto rounded-lg border border-indigo-500/30 mb-4" />
              <p className="text-indigo-300 text-center">
                Select a mail item to view its AI analysis
              </p>
            </div>}
        </div>
      </div>
    </div>;
}