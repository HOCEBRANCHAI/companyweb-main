import React, { useState } from 'react';
import { BrainCircuitIcon, FileTextIcon, ClockIcon, CheckCircleIcon, AlertTriangleIcon, CalendarIcon, ArrowRightIcon, LanguagesIcon, ListIcon, TagIcon, EyeIcon, PlusIcon } from 'lucide-react';
import { SimpleImage } from '../common/SimpleImage';
export function AIDocumentAnalyzer() {
  const [activeTab, setActiveTab] = useState('overview');
  const [showDemo, setShowDemo] = useState(false);
  return <div className="bg-[#1B1537]/80 backdrop-blur-sm rounded-xl border border-[#2D2755] overflow-hidden">
      <div className="p-4 md:p-6">
        <div className="flex items-center mb-6">
          <div className="p-3 rounded-lg bg-purple-900/50 border border-purple-500/30 mr-4">
            <BrainCircuitIcon className="h-6 w-6 text-purple-400" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-white">
              AI Document Analyzer
            </h3>
            <p className="text-indigo-200 mt-1">
              Intelligent processing of your business correspondence
            </p>
          </div>
        </div>
        <div className="flex overflow-x-auto mb-6 border-b border-indigo-500/30">
          <button onClick={() => setActiveTab('overview')} className={`px-4 py-2 font-medium text-sm whitespace-nowrap ${activeTab === 'overview' ? 'text-[#EA3A70] border-b-2 border-[#EA3A70]' : 'text-indigo-300 hover:text-white'}`}>
            Overview
          </button>
          <button onClick={() => setActiveTab('classification')} className={`px-4 py-2 font-medium text-sm whitespace-nowrap ${activeTab === 'classification' ? 'text-[#EA3A70] border-b-2 border-[#EA3A70]' : 'text-indigo-300 hover:text-white'}`}>
            Document Classification
          </button>
          <button onClick={() => setActiveTab('translation')} className={`px-4 py-2 font-medium text-sm whitespace-nowrap ${activeTab === 'translation' ? 'text-[#EA3A70] border-b-2 border-[#EA3A70]' : 'text-indigo-300 hover:text-white'}`}>
            Translation
          </button>
          <button onClick={() => setActiveTab('tasks')} className={`px-4 py-2 font-medium text-sm whitespace-nowrap ${activeTab === 'tasks' ? 'text-[#EA3A70] border-b-2 border-[#EA3A70]' : 'text-indigo-300 hover:text-white'}`}>
            Task Integration
          </button>
        </div>
        {activeTab === 'overview' && <div>
            <p className="text-indigo-200 mb-6">
              Our AI Document Analyzer automatically processes your incoming
              mail to identify document types, extract key information, detect
              deadlines, and recommend actions - saving you hours of manual
              work.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div className="bg-indigo-900/30 p-4 rounded-lg border border-indigo-500/30">
                <div className="flex items-center mb-3">
                  <FileTextIcon className="h-5 w-5 text-[#EA3A70] mr-2" />
                  <h4 className="font-medium text-white">
                    Smart Classification
                  </h4>
                </div>
                <p className="text-sm text-indigo-300">
                  Automatically identifies document types including tax
                  assessments, invoices, legal notices, and more
                </p>
              </div>
              <div className="bg-indigo-900/30 p-4 rounded-lg border border-indigo-500/30">
                <div className="flex items-center mb-3">
                  <LanguagesIcon className="h-5 w-5 text-[#EA3A70] mr-2" />
                  <h4 className="font-medium text-white">
                    Translation & Explanation
                  </h4>
                </div>
                <p className="text-sm text-indigo-300">
                  Translates Dutch documents and explains complex legal and
                  financial terminology in plain language
                </p>
              </div>
              <div className="bg-indigo-900/30 p-4 rounded-lg border border-indigo-500/30">
                <div className="flex items-center mb-3">
                  <ListIcon className="h-5 w-5 text-[#EA3A70] mr-2" />
                  <h4 className="font-medium text-white">Task Creation</h4>
                </div>
                <p className="text-sm text-indigo-300">
                  Automatically creates tasks with deadlines for required
                  actions like payments, objections, or filings
                </p>
              </div>
            </div>
            <div className="text-center">
              <button onClick={() => setShowDemo(true)} className="px-4 py-2 bg-[#EA3A70] text-white rounded-lg hover:bg-[#EA3A70]/90 transition-colors inline-flex items-center mx-auto">
                <EyeIcon className="h-4 w-4 mr-2" />
                See How It Works
              </button>
            </div>
            {showDemo && <div className="mt-8 bg-indigo-900/30 rounded-lg border border-indigo-500/30 overflow-hidden">
                <SimpleImage imageName="mailbox_document_classification.jpg" alt="AI Document Classification Interface" className="w-full h-auto rounded-lg" />
                <div className="p-4">
                  <h4 className="font-medium text-white mb-2">
                    AI Document Analysis in Action
                  </h4>
                  <p className="text-sm text-indigo-200 mb-4">
                    The AI analyzes your tax assessment, identifies key
                    information like deadlines and required actions, and
                    suggests next steps.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <div className="p-1.5 bg-indigo-900/50 rounded-full mr-2 mt-0.5">
                        <CheckCircleIcon className="h-4 w-4 text-green-400" />
                      </div>
                      <p className="text-sm text-indigo-200">
                        <span className="text-white font-medium">
                          Document Classification:
                        </span>{' '}
                        Income Tax Final Assessment
                      </p>
                    </div>
                    <div className="flex items-start">
                      <div className="p-1.5 bg-indigo-900/50 rounded-full mr-2 mt-0.5">
                        <CheckCircleIcon className="h-4 w-4 text-green-400" />
                      </div>
                      <p className="text-sm text-indigo-200">
                        <span className="text-white font-medium">
                          Action Required:
                        </span>{' '}
                        File objection
                      </p>
                    </div>
                    <div className="flex items-start">
                      <div className="p-1.5 bg-indigo-900/50 rounded-full mr-2 mt-0.5">
                        <AlertTriangleIcon className="h-4 w-4 text-[#EA3A70]" />
                      </div>
                      <p className="text-sm text-indigo-200">
                        <span className="text-white font-medium">
                          Critical Deadline:
                        </span>{' '}
                        15 days to file an objection
                      </p>
                    </div>
                  </div>
                </div>
              </div>}
          </div>}
        {activeTab === 'classification' && <div>
            <p className="text-indigo-200 mb-6">
              Our AI system can identify over 50 different document types,
              extracting key information and metadata to help you process your
              business correspondence efficiently.
            </p>
            <div className="space-y-4 mb-6">
              <div className="bg-indigo-900/30 p-4 rounded-lg border border-indigo-500/30">
                <h4 className="font-medium text-white mb-3">Tax Documents</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div className="flex items-center bg-indigo-900/50 p-2 rounded-lg">
                    <FileTextIcon className="h-4 w-4 text-[#EA3A70] mr-2" />
                    <span className="text-sm text-indigo-200">
                      Tax Assessments
                    </span>
                  </div>
                  <div className="flex items-center bg-indigo-900/50 p-2 rounded-lg">
                    <FileTextIcon className="h-4 w-4 text-[#EA3A70] mr-2" />
                    <span className="text-sm text-indigo-200">VAT Returns</span>
                  </div>
                  <div className="flex items-center bg-indigo-900/50 p-2 rounded-lg">
                    <FileTextIcon className="h-4 w-4 text-[#EA3A70] mr-2" />
                    <span className="text-sm text-indigo-200">
                      Corporate Tax Notices
                    </span>
                  </div>
                  <div className="flex items-center bg-indigo-900/50 p-2 rounded-lg">
                    <FileTextIcon className="h-4 w-4 text-[#EA3A70] mr-2" />
                    <span className="text-sm text-indigo-200">
                      Tax Payment Reminders
                    </span>
                  </div>
                </div>
              </div>
              <div className="bg-indigo-900/30 p-4 rounded-lg border border-indigo-500/30">
                <h4 className="font-medium text-white mb-3">
                  Legal & Compliance
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div className="flex items-center bg-indigo-900/50 p-2 rounded-lg">
                    <FileTextIcon className="h-4 w-4 text-[#EA3A70] mr-2" />
                    <span className="text-sm text-indigo-200">
                      Chamber of Commerce Notices
                    </span>
                  </div>
                  <div className="flex items-center bg-indigo-900/50 p-2 rounded-lg">
                    <FileTextIcon className="h-4 w-4 text-[#EA3A70] mr-2" />
                    <span className="text-sm text-indigo-200">
                      Regulatory Compliance
                    </span>
                  </div>
                  <div className="flex items-center bg-indigo-900/50 p-2 rounded-lg">
                    <FileTextIcon className="h-4 w-4 text-[#EA3A70] mr-2" />
                    <span className="text-sm text-indigo-200">
                      Legal Notices
                    </span>
                  </div>
                  <div className="flex items-center bg-indigo-900/50 p-2 rounded-lg">
                    <FileTextIcon className="h-4 w-4 text-[#EA3A70] mr-2" />
                    <span className="text-sm text-indigo-200">
                      Business Permits
                    </span>
                  </div>
                </div>
              </div>
              <div className="bg-indigo-900/30 p-4 rounded-lg border border-indigo-500/30">
                <h4 className="font-medium text-white mb-3">Financial</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div className="flex items-center bg-indigo-900/50 p-2 rounded-lg">
                    <FileTextIcon className="h-4 w-4 text-[#EA3A70] mr-2" />
                    <span className="text-sm text-indigo-200">
                      Bank Statements
                    </span>
                  </div>
                  <div className="flex items-center bg-indigo-900/50 p-2 rounded-lg">
                    <FileTextIcon className="h-4 w-4 text-[#EA3A70] mr-2" />
                    <span className="text-sm text-indigo-200">Invoices</span>
                  </div>
                  <div className="flex items-center bg-indigo-900/50 p-2 rounded-lg">
                    <FileTextIcon className="h-4 w-4 text-[#EA3A70] mr-2" />
                    <span className="text-sm text-indigo-200">
                      Credit Card Statements
                    </span>
                  </div>
                  <div className="flex items-center bg-indigo-900/50 p-2 rounded-lg">
                    <FileTextIcon className="h-4 w-4 text-[#EA3A70] mr-2" />
                    <span className="text-sm text-indigo-200">
                      Insurance Documents
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>}
        {activeTab === 'translation' && <div>
            <p className="text-indigo-200 mb-6">
              Our AI can translate Dutch documents and explain complex legal and
              financial terminology in plain language, making it easy to
              understand official correspondence.
            </p>
            <div className="bg-indigo-900/30 p-5 rounded-lg border border-indigo-500/30 mb-6">
              <div className="flex items-center mb-4">
                <LanguagesIcon className="h-5 w-5 text-[#EA3A70] mr-2" />
                <h4 className="font-medium text-white">Translation Example</h4>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-indigo-900/50 p-4 rounded-lg border border-indigo-500/30">
                  <h5 className="text-sm font-medium text-white mb-2">
                    Original Dutch Text
                  </h5>
                  <p className="text-sm text-indigo-300">
                    "Definitieve aanslag vennootschapsbelasting 2023. U heeft
                    nog 6 weken de tijd om bezwaar aan te tekenen tegen deze
                    aanslag. Indien u niet binnen deze termijn reageert, wordt
                    de aanslag definitief."
                  </p>
                </div>
                <div className="bg-indigo-900/50 p-4 rounded-lg border border-indigo-500/30">
                  <h5 className="text-sm font-medium text-white mb-2">
                    AI Translation & Explanation
                  </h5>
                  <p className="text-sm text-indigo-300">
                    "Final corporate tax assessment 2023. You have 6 weeks to
                    file an objection against this assessment. If you don't
                    respond within this period, the assessment becomes final."
                  </p>
                  <div className="mt-3 p-2 bg-purple-900/30 rounded-lg border border-purple-500/20">
                    <p className="text-xs text-purple-300">
                      <span className="font-medium text-purple-200">
                        AI Note:
                      </span>{' '}
                      This is your final corporate tax bill for 2023. You can
                      challenge this assessment if you disagree, but you must do
                      so within 6 weeks.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-indigo-900/30 p-4 rounded-lg border border-indigo-500/30">
              <h4 className="font-medium text-white mb-3">
                Supported Languages
              </h4>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                <div className="flex items-center bg-indigo-900/50 p-2 rounded-lg">
                  <span className="text-sm text-indigo-200">
                    Dutch → English
                  </span>
                </div>
                <div className="flex items-center bg-indigo-900/50 p-2 rounded-lg">
                  <span className="text-sm text-indigo-200">
                    German → English
                  </span>
                </div>
                <div className="flex items-center bg-indigo-900/50 p-2 rounded-lg">
                  <span className="text-sm text-indigo-200">
                    French → English
                  </span>
                </div>
                <div className="flex items-center bg-indigo-900/50 p-2 rounded-lg">
                  <span className="text-sm text-indigo-200">
                    Spanish → English
                  </span>
                </div>
              </div>
            </div>
          </div>}
        {activeTab === 'tasks' && <div>
            <p className="text-indigo-200 mb-6">
              Our AI automatically creates tasks from your mail, adding them to
              your task management system with the right priority, deadline, and
              context.
            </p>
            <div className="bg-indigo-900/30 p-5 rounded-lg border border-indigo-500/30 mb-6">
              <div className="flex items-center mb-4">
                <ListIcon className="h-5 w-5 text-[#EA3A70] mr-2" />
                <h4 className="font-medium text-white">
                  Task Creation Example
                </h4>
              </div>
              <div className="space-y-4">
                <div className="bg-indigo-900/50 p-4 rounded-lg border border-indigo-500/30">
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
                    <span>Deadline: 15 Feb 2024 (18 days remaining)</span>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className="px-2 py-0.5 bg-purple-900/30 text-purple-300 rounded-full text-xs">
                      Tax
                    </span>
                    <span className="px-2 py-0.5 bg-indigo-900/30 text-indigo-300 rounded-full text-xs">
                      Objection
                    </span>
                    <span className="px-2 py-0.5 bg-indigo-900/30 text-indigo-300 rounded-full text-xs">
                      Corporate Tax
                    </span>
                  </div>
                  <div className="flex justify-between items-center pt-3 border-t border-indigo-500/30">
                    <div className="flex items-center text-xs text-indigo-300">
                      <FileTextIcon className="h-3.5 w-3.5 mr-1.5" />
                      <span>Created from: Tax Assessment 2023</span>
                    </div>
                    <button className="px-3 py-1 bg-indigo-900/50 text-white rounded-lg text-xs flex items-center">
                      <ArrowRightIcon className="h-3.5 w-3.5 mr-1.5" />
                      Go to Task
                    </button>
                  </div>
                </div>
                <div className="bg-indigo-900/50 p-4 rounded-lg border border-indigo-500/30">
                  <div className="flex justify-between items-start mb-3">
                    <div className="flex items-start">
                      <div className="p-2 bg-yellow-900/30 rounded-lg mr-3 flex-shrink-0">
                        <TagIcon className="h-4 w-4 text-yellow-400" />
                      </div>
                      <div>
                        <h5 className="font-medium text-white">
                          Update Chamber of Commerce Registration
                        </h5>
                        <p className="text-sm text-indigo-300 mt-1">
                          Confirm company details and submit annual update
                        </p>
                      </div>
                    </div>
                    <span className="px-2 py-0.5 bg-yellow-900/30 text-yellow-400 rounded-full text-xs">
                      Medium Priority
                    </span>
                  </div>
                  <div className="flex items-center text-sm text-indigo-300 mb-3">
                    <CalendarIcon className="h-4 w-4 mr-2" />
                    <span>Deadline: 28 Feb 2024 (30 days remaining)</span>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className="px-2 py-0.5 bg-blue-900/30 text-blue-300 rounded-full text-xs">
                      Administrative
                    </span>
                    <span className="px-2 py-0.5 bg-indigo-900/30 text-indigo-300 rounded-full text-xs">
                      Chamber of Commerce
                    </span>
                  </div>
                  <div className="flex justify-between items-center pt-3 border-t border-indigo-500/30">
                    <div className="flex items-center text-xs text-indigo-300">
                      <FileTextIcon className="h-3.5 w-3.5 mr-1.5" />
                      <span>Created from: KvK Registration Update</span>
                    </div>
                    <button className="px-3 py-1 bg-indigo-900/50 text-white rounded-lg text-xs flex items-center">
                      <ArrowRightIcon className="h-3.5 w-3.5 mr-1.5" />
                      Go to Task
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center">
              <button className="px-4 py-2 bg-[#EA3A70] text-white rounded-lg hover:bg-[#EA3A70]/90 transition-colors inline-flex items-center mx-auto">
                <PlusIcon className="h-4 w-4 mr-2" />
                Connect to Task Management
              </button>
            </div>
          </div>}
      </div>
    </div>;
}