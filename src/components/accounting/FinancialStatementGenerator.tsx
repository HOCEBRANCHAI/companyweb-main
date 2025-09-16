import React, { useState } from 'react';
import { FileTextIcon, BarChart2Icon, ArrowRightIcon, BrainCircuitIcon, CheckCircleIcon, DownloadIcon, EyeIcon, LineChartIcon, PieChartIcon, CalendarIcon, MailIcon } from 'lucide-react';
import { SimpleImage } from '../common/SimpleImage';
export function FinancialStatementGenerator() {
  const [selectedStatementType, setSelectedStatementType] = useState('balance-sheet');
  const [selectedPeriod, setSelectedPeriod] = useState('2023');
  const statementTypes = [{
    id: 'balance-sheet',
    name: 'Balance Sheet',
    icon: <BarChart2Icon className="h-4 w-4" />
  }, {
    id: 'income-statement',
    name: 'Income Statement',
    icon: <LineChartIcon className="h-4 w-4" />
  }, {
    id: 'cash-flow',
    name: 'Cash Flow Statement',
    icon: <PieChartIcon className="h-4 w-4" />
  }, {
    id: 'full-annual',
    name: 'Full Annual Report',
    icon: <FileTextIcon className="h-4 w-4" />
  }];
  const periods = ['2023', '2022', '2021', 'Q1 2024', 'Q2 2024'];
  return <div className="bg-[#1B1537]/80 backdrop-blur-sm rounded-xl border border-[#2D2755] overflow-hidden">
      <div className="p-4 border-b border-indigo-500/30 flex justify-between items-center">
        <div className="flex items-center">
          <FileTextIcon className="h-5 w-5 text-[#EA3A70] mr-2" />
          <h3 className="text-lg font-bold text-white">
            AI Financial Statement Generator
          </h3>
        </div>
        <div className="flex items-center space-x-2">
          <button className="p-1.5 bg-indigo-900/50 text-indigo-200 rounded-lg border border-indigo-500/30 hover:bg-indigo-800/50 transition-colors">
            <MailIcon className="h-4 w-4" />
          </button>
          <button className="p-1.5 bg-indigo-900/50 text-indigo-200 rounded-lg border border-indigo-500/30 hover:bg-indigo-800/50 transition-colors">
            <DownloadIcon className="h-4 w-4" />
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
        <div className="md:col-span-1 p-6 border-r border-indigo-500/30">
          <h4 className="text-white font-medium mb-4">Generate Statement</h4>
          <div className="mb-6">
            <label className="block text-sm text-indigo-300 mb-2">
              Statement Type
            </label>
            <div className="space-y-2">
              {statementTypes.map(type => <button key={type.id} onClick={() => setSelectedStatementType(type.id)} className={`w-full flex items-center p-3 rounded-lg text-sm ${selectedStatementType === type.id ? 'bg-[#EA3A70]/20 border border-[#EA3A70]/30 text-white' : 'bg-indigo-900/30 border border-indigo-500/30 text-indigo-200 hover:bg-indigo-800/30'}`}>
                  <div className={`p-1.5 rounded-lg mr-3 ${selectedStatementType === type.id ? 'bg-[#EA3A70]/20 text-[#EA3A70]' : 'bg-indigo-900/50 text-indigo-300'}`}>
                    {type.icon}
                  </div>
                  {type.name}
                </button>)}
            </div>
          </div>
          <div className="mb-6">
            <label className="block text-sm text-indigo-300 mb-2">Period</label>
            <select value={selectedPeriod} onChange={e => setSelectedPeriod(e.target.value)} className="w-full p-3 bg-indigo-900/30 border border-indigo-500/30 rounded-lg text-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/50">
              {periods.map(period => <option key={period} value={period}>
                  {period}
                </option>)}
            </select>
          </div>
          <div className="mb-6">
            <label className="block text-sm text-indigo-300 mb-2">
              Additional Options
            </label>
            <div className="space-y-2">
              <div className="flex items-center">
                <input type="checkbox" id="include-notes" className="rounded bg-indigo-900/30 border-indigo-500/30 text-[#EA3A70]" />
                <label htmlFor="include-notes" className="ml-2 text-sm text-indigo-200">
                  Include explanatory notes
                </label>
              </div>
              <div className="flex items-center">
                <input type="checkbox" id="comparative" className="rounded bg-indigo-900/30 border-indigo-500/30 text-[#EA3A70]" />
                <label htmlFor="comparative" className="ml-2 text-sm text-indigo-200">
                  Include comparative figures
                </label>
              </div>
              <div className="flex items-center">
                <input type="checkbox" id="management-report" className="rounded bg-indigo-900/30 border-indigo-500/30 text-[#EA3A70]" />
                <label htmlFor="management-report" className="ml-2 text-sm text-indigo-200">
                  Add management report
                </label>
              </div>
            </div>
          </div>
          <button className="w-full px-4 py-3 bg-[#EA3A70] text-white rounded-lg hover:bg-[#EA3A70]/90 transition-colors flex items-center justify-center">
            <BrainCircuitIcon className="h-5 w-5 mr-2" />
            Generate Statement
          </button>
          <div className="mt-4 p-3 bg-indigo-900/20 rounded-lg border border-indigo-500/30">
            <div className="flex items-center text-sm text-indigo-200">
              <CheckCircleIcon className="h-4 w-4 text-green-400 mr-2" />
              <span>Dutch GAAP compliant</span>
            </div>
          </div>
        </div>
        <div className="md:col-span-2 p-6 bg-indigo-900/20">
          <div className="flex justify-between items-center mb-4">
            <h4 className="text-white font-medium">Preview</h4>
            <div className="text-sm text-indigo-300 flex items-center">
              <CalendarIcon className="h-4 w-4 mr-1" />
              Last updated: Today, 10:45 AM
            </div>
          </div>
          <div className="bg-white rounded-lg overflow-hidden shadow-lg">
            <SimpleImage imageName="financial_statement.jpg" alt="Financial Statement Preview" className="w-full h-auto" />
          </div>
          <div className="mt-4 flex justify-between">
            <button className="px-3 py-2 bg-indigo-900/50 text-white rounded-lg border border-indigo-500/30 hover:bg-indigo-800/50 transition-colors text-sm flex items-center">
              <EyeIcon className="h-4 w-4 mr-2" />
              Full Preview
            </button>
            <button className="px-3 py-2 bg-indigo-900/50 text-white rounded-lg border border-indigo-500/30 hover:bg-indigo-800/50 transition-colors text-sm flex items-center">
              <DownloadIcon className="h-4 w-4 mr-2" />
              Download PDF
            </button>
          </div>
        </div>
      </div>
    </div>;
}