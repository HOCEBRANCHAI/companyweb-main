import React, { useState } from 'react';
import { BarChart2Icon, DownloadIcon, UploadIcon, ArrowRightIcon, CheckCircleIcon, PieChartIcon, TrendingUpIcon, AlertCircleIcon } from 'lucide-react';
export function TaxAnalysisTool() {
  const [activeTab, setActiveTab] = useState('overview');
  const [isLoading, setIsLoading] = useState(false);
  const handleAnalyze = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };
  return <div className="bg-indigo-900/30 backdrop-blur-sm rounded-xl border border-indigo-500/30 p-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
        <div>
          <h3 className="text-xl font-bold text-white mb-1">
            Tax Analysis Tool
          </h3>
          <p className="text-indigo-300 text-sm">
            Analyze and optimize your tax position
          </p>
        </div>
        <div className="flex space-x-2 mt-4 md:mt-0">
          <button className={`px-4 py-2 rounded-lg text-sm ${activeTab === 'overview' ? 'bg-[#EA3A70] text-white' : 'bg-indigo-800/40 text-indigo-300 hover:bg-indigo-700/40'}`} onClick={() => setActiveTab('overview')}>
            Overview
          </button>
          <button className={`px-4 py-2 rounded-lg text-sm ${activeTab === 'analysis' ? 'bg-[#EA3A70] text-white' : 'bg-indigo-800/40 text-indigo-300 hover:bg-indigo-700/40'}`} onClick={() => setActiveTab('analysis')}>
            Analysis
          </button>
          <button className={`px-4 py-2 rounded-lg text-sm ${activeTab === 'optimization' ? 'bg-[#EA3A70] text-white' : 'bg-indigo-800/40 text-indigo-300 hover:bg-indigo-700/40'}`} onClick={() => setActiveTab('optimization')}>
            Optimization
          </button>
        </div>
      </div>
      {activeTab === 'overview' && <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-indigo-800/40 rounded-lg p-4 border border-indigo-500/20">
              <p className="text-indigo-300 text-sm mb-1">
                Estimated Corporate Tax
              </p>
              <div className="flex items-center justify-between">
                <p className="text-2xl font-bold text-white">€18,750.00</p>
                <div className="flex items-center text-xs text-green-400">
                  <TrendingUpIcon className="h-4 w-4 mr-1" />
                  5.2%
                </div>
              </div>
            </div>
            <div className="bg-indigo-800/40 rounded-lg p-4 border border-indigo-500/20">
              <p className="text-indigo-300 text-sm mb-1">Estimated VAT (Q1)</p>
              <div className="flex items-center justify-between">
                <p className="text-2xl font-bold text-white">€2,450.00</p>
                <div className="px-2 py-1 bg-yellow-500/20 text-yellow-300 rounded text-xs">
                  Due soon
                </div>
              </div>
            </div>
            <div className="bg-indigo-800/40 rounded-lg p-4 border border-indigo-500/20">
              <p className="text-indigo-300 text-sm mb-1">
                Optimization Potential
              </p>
              <div className="flex items-center justify-between">
                <p className="text-2xl font-bold text-green-400">€3,200.00</p>
                <div className="px-2 py-1 bg-green-500/20 text-green-300 rounded text-xs">
                  Identified
                </div>
              </div>
            </div>
          </div>
          <div className="bg-indigo-800/40 rounded-lg p-4 border border-indigo-500/20">
            <h4 className="text-white font-medium mb-4">
              Upload Financial Data for Analysis
            </h4>
            <div className="border-2 border-dashed border-indigo-500/30 rounded-lg p-8 flex flex-col items-center justify-center">
              <UploadIcon className="h-10 w-10 text-indigo-400 mb-4" />
              <p className="text-indigo-200 mb-2">
                Drag and drop your financial files here
              </p>
              <p className="text-indigo-400 text-sm mb-4">
                Supports CSV, XLSX, and PDF formats
              </p>
              <div className="flex space-x-4">
                <button className="px-4 py-2 bg-indigo-800/60 border border-indigo-500/30 text-white rounded-lg hover:bg-indigo-700/60 transition-colors flex items-center">
                  <UploadIcon className="h-4 w-4 mr-2" />
                  Upload Files
                </button>
                <button className="px-4 py-2 bg-indigo-800/60 border border-indigo-500/30 text-white rounded-lg hover:bg-indigo-700/60 transition-colors flex items-center">
                  Connect Accounting Software
                </button>
              </div>
            </div>
          </div>
          <div className="flex justify-end">
            <button onClick={handleAnalyze} className="px-5 py-2.5 bg-[#EA3A70] hover:bg-[#EA3A70]/90 text-white rounded-lg font-medium flex items-center">
              {isLoading ? <>
                  <div className="animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full mr-2"></div>
                  Analyzing...
                </> : <>
                  Analyze Tax Position
                  <ArrowRightIcon className="h-4 w-4 ml-2" />
                </>}
            </button>
          </div>
        </div>}
      {activeTab === 'analysis' && <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-indigo-800/40 rounded-lg p-4 border border-indigo-500/20">
              <h4 className="text-white font-medium mb-4">Tax Breakdown</h4>
              <div className="h-48 bg-indigo-800/30 rounded-lg p-4 flex items-center justify-center">
                <div className="w-full h-full flex">
                  <div className="flex-1 flex flex-col justify-end">
                    <div className="bg-[#EA3A70] h-[60%] w-full rounded-t-lg"></div>
                    <p className="text-center text-xs text-indigo-300 mt-2">
                      Corporate Tax
                    </p>
                  </div>
                  <div className="flex-1 flex flex-col justify-end ml-2">
                    <div className="bg-indigo-500 h-[30%] w-full rounded-t-lg"></div>
                    <p className="text-center text-xs text-indigo-300 mt-2">
                      VAT
                    </p>
                  </div>
                  <div className="flex-1 flex flex-col justify-end ml-2">
                    <div className="bg-blue-500 h-[20%] w-full rounded-t-lg"></div>
                    <p className="text-center text-xs text-indigo-300 mt-2">
                      Payroll Tax
                    </p>
                  </div>
                  <div className="flex-1 flex flex-col justify-end ml-2">
                    <div className="bg-green-500 h-[15%] w-full rounded-t-lg"></div>
                    <p className="text-center text-xs text-indigo-300 mt-2">
                      Other
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-indigo-800/40 rounded-lg p-4 border border-indigo-500/20">
              <h4 className="text-white font-medium mb-4">
                Year-over-Year Comparison
              </h4>
              <div className="h-48 bg-indigo-800/30 rounded-lg p-4 flex items-center justify-center">
                <div className="w-full h-full flex">
                  <div className="flex-1 flex flex-col justify-end">
                    <div className="bg-indigo-400 h-[40%] w-full rounded-t-lg"></div>
                    <div className="bg-[#EA3A70] h-[20%] w-full"></div>
                    <p className="text-center text-xs text-indigo-300 mt-2">
                      2022
                    </p>
                  </div>
                  <div className="flex-1 flex flex-col justify-end ml-2">
                    <div className="bg-indigo-400 h-[50%] w-full rounded-t-lg"></div>
                    <div className="bg-[#EA3A70] h-[15%] w-full"></div>
                    <p className="text-center text-xs text-indigo-300 mt-2">
                      2023
                    </p>
                  </div>
                  <div className="flex-1 flex flex-col justify-end ml-2">
                    <div className="bg-indigo-400 h-[45%] w-full rounded-t-lg"></div>
                    <div className="bg-[#EA3A70] h-[10%] w-full"></div>
                    <p className="text-center text-xs text-indigo-300 mt-2">
                      2024 (Proj.)
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-indigo-800/40 rounded-lg p-4 border border-indigo-500/20">
            <h4 className="text-white font-medium mb-4">
              Tax Compliance Risk Assessment
            </h4>
            <div className="space-y-4">
              <div className="flex items-center p-3 bg-green-500/10 border border-green-500/20 rounded-lg">
                <div className="p-2 bg-green-500/20 rounded-full mr-3">
                  <CheckCircleIcon className="h-5 w-5 text-green-400" />
                </div>
                <div className="flex-1">
                  <h5 className="text-white font-medium">VAT Compliance</h5>
                  <p className="text-indigo-300 text-sm">
                    All VAT returns filed on time with accurate information
                  </p>
                </div>
                <div className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-xs font-medium">
                  Low Risk
                </div>
              </div>
              <div className="flex items-center p-3 bg-yellow-500/10 border border-yellow-500/20 rounded-lg">
                <div className="p-2 bg-yellow-500/20 rounded-full mr-3">
                  <AlertCircleIcon className="h-5 w-5 text-yellow-400" />
                </div>
                <div className="flex-1">
                  <h5 className="text-white font-medium">
                    Corporate Tax Deductions
                  </h5>
                  <p className="text-indigo-300 text-sm">
                    Some expense categorizations may need additional
                    documentation
                  </p>
                </div>
                <div className="px-3 py-1 bg-yellow-500/20 text-yellow-400 rounded-full text-xs font-medium">
                  Medium Risk
                </div>
              </div>
              <div className="flex items-center p-3 bg-green-500/10 border border-green-500/20 rounded-lg">
                <div className="p-2 bg-green-500/20 rounded-full mr-3">
                  <CheckCircleIcon className="h-5 w-5 text-green-400" />
                </div>
                <div className="flex-1">
                  <h5 className="text-white font-medium">
                    Payroll Tax Compliance
                  </h5>
                  <p className="text-indigo-300 text-sm">
                    All payroll taxes correctly calculated and remitted
                  </p>
                </div>
                <div className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-xs font-medium">
                  Low Risk
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-end">
            <button className="px-5 py-2.5 bg-indigo-900/50 border border-indigo-500/30 text-white rounded-lg hover:bg-indigo-800/50 transition-colors font-medium flex items-center mr-3">
              <DownloadIcon className="h-4 w-4 mr-2" />
              Download Report
            </button>
            <button onClick={() => setActiveTab('optimization')} className="px-5 py-2.5 bg-[#EA3A70] hover:bg-[#EA3A70]/90 text-white rounded-lg font-medium flex items-center">
              View Optimization Opportunities
              <ArrowRightIcon className="h-4 w-4 ml-2" />
            </button>
          </div>
        </div>}
      {activeTab === 'optimization' && <div className="space-y-6">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-xl p-6 text-white shadow-lg relative overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full transform translate-x-20 -translate-y-20 blur-xl"></div>
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-white/5 rounded-full transform -translate-x-20 translate-y-20 blur-xl"></div>
            <div className="relative">
              <h3 className="text-xl font-semibold mb-3">
                Tax Optimization Opportunities
              </h3>
              <p className="text-white/80 mb-4">
                Based on your financial data, we've identified several
                opportunities to optimize your tax position:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                  <h4 className="font-medium text-white mb-2">
                    R&D Tax Credits
                  </h4>
                  <p className="text-sm text-white/80 mb-3">
                    Your software development activities may qualify for WBSO
                    R&D tax credits.
                  </p>
                  <div className="flex justify-between text-sm">
                    <span className="text-green-300">Save: €12,500/year</span>
                    <span className="text-white/60">Complexity: Medium</span>
                  </div>
                </div>
                <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                  <h4 className="font-medium text-white mb-2">
                    Investment Allowance
                  </h4>
                  <p className="text-sm text-white/80 mb-3">
                    Leverage small-scale investment allowance (KIA) for recent
                    equipment purchases.
                  </p>
                  <div className="flex justify-between text-sm">
                    <span className="text-green-300">Save: €3,750/year</span>
                    <span className="text-white/60">Complexity: Low</span>
                  </div>
                </div>
                <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                  <h4 className="font-medium text-white mb-2">VAT Reclaim</h4>
                  <p className="text-sm text-white/80 mb-3">
                    You have unclaimed VAT on international business expenses.
                  </p>
                  <div className="flex justify-between text-sm">
                    <span className="text-green-300">Save: €2,800/year</span>
                    <span className="text-white/60">Complexity: Medium</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-indigo-800/40 rounded-lg p-4 border border-indigo-500/20">
            <h4 className="text-white font-medium mb-4">Implementation Plan</h4>
            <div className="space-y-4">
              <div className="p-3 bg-indigo-800/30 rounded-lg border border-indigo-500/20">
                <h5 className="text-white font-medium mb-2">
                  1. R&D Tax Credits Application
                </h5>
                <div className="flex flex-col md:flex-row md:items-center justify-between">
                  <p className="text-indigo-300 text-sm mb-2 md:mb-0">
                    Prepare and submit WBSO application for your development
                    activities
                  </p>
                  <button className="px-4 py-1.5 bg-[#EA3A70] text-white rounded-lg text-sm font-medium flex items-center w-fit">
                    Start Process
                    <ArrowRightIcon className="h-3.5 w-3.5 ml-1.5" />
                  </button>
                </div>
              </div>
              <div className="p-3 bg-indigo-800/30 rounded-lg border border-indigo-500/20">
                <h5 className="text-white font-medium mb-2">
                  2. Investment Allowance Claim
                </h5>
                <div className="flex flex-col md:flex-row md:items-center justify-between">
                  <p className="text-indigo-300 text-sm mb-2 md:mb-0">
                    Document eligible investments and prepare KIA calculation
                  </p>
                  <button className="px-4 py-1.5 bg-[#EA3A70] text-white rounded-lg text-sm font-medium flex items-center w-fit">
                    Start Process
                    <ArrowRightIcon className="h-3.5 w-3.5 ml-1.5" />
                  </button>
                </div>
              </div>
              <div className="p-3 bg-indigo-800/30 rounded-lg border border-indigo-500/20">
                <h5 className="text-white font-medium mb-2">
                  3. VAT Reclaim Procedure
                </h5>
                <div className="flex flex-col md:flex-row md:items-center justify-between">
                  <p className="text-indigo-300 text-sm mb-2 md:mb-0">
                    Identify eligible international expenses and prepare VAT
                    reclaim forms
                  </p>
                  <button className="px-4 py-1.5 bg-[#EA3A70] text-white rounded-lg text-sm font-medium flex items-center w-fit">
                    Start Process
                    <ArrowRightIcon className="h-3.5 w-3.5 ml-1.5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-end">
            <button className="px-5 py-2.5 bg-indigo-900/50 border border-indigo-500/30 text-white rounded-lg hover:bg-indigo-800/50 transition-colors font-medium flex items-center mr-3">
              <DownloadIcon className="h-4 w-4 mr-2" />
              Export Optimization Plan
            </button>
            <button className="px-5 py-2.5 bg-[#EA3A70] hover:bg-[#EA3A70]/90 text-white rounded-lg font-medium flex items-center">
              Implement All Optimizations
              <ArrowRightIcon className="h-4 w-4 ml-2" />
            </button>
          </div>
        </div>}
    </div>;
}