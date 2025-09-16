import React, { useState, memo } from 'react';
import { Link } from 'react-router-dom';
import { FileTextIcon, ArrowRightIcon, PlusIcon, BookOpenIcon, DownloadIcon, CheckCircleIcon } from 'lucide-react';
import { TaxMemoWizard } from './memo/TaxMemoWizard';
export function TaxMemo() {
  const [showWizard, setShowWizard] = useState(false);
  const recentMemos = [{
    id: 'memo-1',
    title: 'EU Expansion Tax Memorandum',
    date: '2024-03-10',
    status: 'completed',
    countries: ['Netherlands', 'Germany', 'France']
  }, {
    id: 'memo-2',
    title: 'US-EU Cross-Border Operations',
    date: '2024-02-15',
    status: 'completed',
    countries: ['Netherlands', 'United States']
  }];
  return <>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Tax Memorandum</h1>
          <p className="text-gray-600 mt-1">
            Generate comprehensive tax memoranda for your international
            operations
          </p>
        </div>
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-xl p-6 text-white shadow-lg relative overflow-hidden">
          <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full transform translate-x-20 -translate-y-20 blur-xl"></div>
          <div className="absolute bottom-0 left-0 w-40 h-40 bg-white/5 rounded-full transform -translate-x-20 translate-y-20 blur-xl"></div>
          <div className="relative">
            <div className="flex items-center space-x-3 mb-4">
              <FileTextIcon className="h-8 w-8 text-white" />
              <h2 className="text-xl font-semibold">
                Tax Memorandum Generator
              </h2>
            </div>
            <p className="mb-4 text-white/80 max-w-3xl">
              Create comprehensive, jurisdiction-specific tax memoranda tailored
              to your business needs. Our AI-powered system generates detailed
              analysis of tax implications for your international operations.
            </p>
            <button onClick={() => setShowWizard(true)} className="bg-white text-indigo-700 px-4 py-2 rounded-md text-sm font-medium hover:bg-indigo-50 transition-colors flex items-center">
              <PlusIcon className="h-4 w-4 mr-2" />
              Generate New Tax Memo
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h3 className="text-lg font-medium text-gray-900 mb-4">
              Recent Tax Memoranda
            </h3>
            <div className="space-y-4">
              {recentMemos.map(memo => <div key={memo.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h4 className="font-medium text-gray-900">
                        {memo.title}
                      </h4>
                      <p className="text-sm text-gray-500">
                        Created on {memo.date}
                      </p>
                    </div>
                    <div className="flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      <CheckCircleIcon className="h-3 w-3 mr-1" />
                      Completed
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-1 mb-3">
                    {memo.countries.map(country => <span key={country} className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-blue-100 text-blue-800">
                        {country}
                      </span>)}
                  </div>
                  <div className="flex justify-between pt-3 border-t border-gray-200">
                    <button className="text-gray-600 hover:text-gray-800 text-sm flex items-center">
                      <DownloadIcon className="h-4 w-4 mr-1" />
                      Download
                    </button>
                    <Link to="/taxes/memo/full-view">
                      <button className="text-blue-600 hover:text-blue-800 text-sm flex items-center">
                        <BookOpenIcon className="h-4 w-4 mr-1" />
                        View Full Memo
                      </button>
                    </Link>
                  </div>
                </div>)}
            </div>
          </div>
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h3 className="text-lg font-medium text-gray-900 mb-4">
              Why Use Tax Memoranda?
            </h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-medium">
                  1
                </div>
                <div className="ml-3">
                  <h4 className="text-sm font-medium text-gray-900">
                    Comprehensive Analysis
                  </h4>
                  <p className="text-sm text-gray-500 mt-1">
                    Get detailed analysis of tax implications for your specific
                    business activities across multiple jurisdictions.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-medium">
                  2
                </div>
                <div className="ml-3">
                  <h4 className="text-sm font-medium text-gray-900">
                    Compliance Assurance
                  </h4>
                  <p className="text-sm text-gray-500 mt-1">
                    Ensure compliance with local tax regulations and avoid
                    costly penalties or audits.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-medium">
                  3
                </div>
                <div className="ml-3">
                  <h4 className="text-sm font-medium text-gray-900">
                    Strategic Planning
                  </h4>
                  <p className="text-sm text-gray-500 mt-1">
                    Leverage tax insights for strategic business decisions and
                    optimize your international tax structure.
                  </p>
                </div>
              </div>
              <div className="mt-6">
                <button onClick={() => setShowWizard(true)} className="w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 text-sm font-medium flex items-center justify-center">
                  Create Custom Tax Memo
                  <ArrowRightIcon className="ml-2 h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {showWizard && <TaxMemoWizard onClose={() => setShowWizard(false)} />}
    </>;
}