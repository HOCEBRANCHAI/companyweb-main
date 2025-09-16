import React, { useState } from 'react';
import { FileTextIcon, ArrowRightIcon, CheckCircleIcon, CalendarIcon, ClipboardIcon, BarChart2Icon, PieChartIcon, CheckIcon, AlertCircleIcon, DownloadIcon, UploadIcon, InfoIcon, XIcon, ArrowLeftIcon, EyeIcon, SearchIcon, TrendingUpIcon, TrendingDownIcon, ChevronDownIcon } from 'lucide-react';
interface CorporateTaxFilingWorkflowProps {
  onClose: () => void;
}
export function CorporateTaxFilingWorkflow({
  onClose
}: CorporateTaxFilingWorkflowProps) {
  const [citTabView, setCitTabView] = useState('analysis');
  const [selectedYear, setSelectedYear] = useState('FY 2023');
  const [showInvoices, setShowInvoices] = useState(false);
  const [selectedInvoice, setSelectedInvoice] = useState(null);
  const [showFullTutorial, setShowFullTutorial] = useState(false);
  // Financial data
  const financialData = {
    revenue: 1250000,
    expenses: 875000,
    grossProfit: 375000,
    taxDeductions: 85000,
    taxableIncome: 290000,
    taxRate: 25.8,
    estimatedTax: 74820
  };
  // CIT metrics and data
  const citMetrics = {
    'FY 2023': {
      revenue: 1250000,
      expenses: 875000,
      grossProfit: 375000,
      taxDeductions: 85000,
      taxableIncome: 290000,
      taxRate: 25.8,
      estimatedTax: 74820,
      changeFromPrevious: 15.2
    },
    'FY 2022': {
      revenue: 1050000,
      expenses: 735000,
      grossProfit: 315000,
      taxDeductions: 65000,
      taxableIncome: 250000,
      taxRate: 25.0,
      estimatedTax: 62500,
      changeFromPrevious: 8.5
    },
    'FY 2021': {
      revenue: 980000,
      expenses: 685000,
      grossProfit: 295000,
      taxDeductions: 55000,
      taxableIncome: 240000,
      taxRate: 25.0,
      estimatedTax: 60000,
      changeFromPrevious: -4.0
    }
  };
  // Transaction data (expenses/income entries)
  const transactions = [{
    id: 'EXP-001',
    date: '2023-03-15',
    amount: 45000,
    type: 'Operating Expense',
    category: 'Office Rent',
    description: 'Q1 Office rent payment',
    vendor: 'Amsterdam Properties BV',
    invoiceNumber: 'INV-2023-112',
    status: 'Verified'
  }, {
    id: 'INC-001',
    date: '2023-02-28',
    amount: 125000,
    type: 'Revenue',
    category: 'Service Income',
    description: 'Software development services',
    customer: 'Tech Solutions GmbH',
    invoiceNumber: 'OUT-2023-045',
    status: 'Verified'
  }, {
    id: 'EXP-002',
    date: '2023-01-15',
    amount: 78500,
    type: 'Personnel Expense',
    category: 'Salaries',
    description: 'January payroll',
    vendor: 'Internal',
    invoiceNumber: 'PAY-2023-001',
    status: 'Verified'
  }, {
    id: 'EXP-003',
    date: '2023-04-10',
    amount: 12000,
    type: 'Marketing Expense',
    category: 'Digital Advertising',
    description: 'Q1 Google Ads campaign',
    vendor: 'Google Ireland Ltd',
    invoiceNumber: 'GADV-2023-1234',
    status: 'Unverified'
  }, {
    id: 'INC-002',
    date: '2023-03-22',
    amount: 85000,
    type: 'Revenue',
    category: 'Product Sales',
    description: 'Software license sales',
    customer: 'Digital Enterprise SA',
    invoiceNumber: 'OUT-2023-046',
    status: 'Verified'
  }];
  // CIT Return data
  const citReturnData = {
    period: selectedYear,
    totalRevenue: citMetrics[selectedYear].revenue,
    totalExpenses: citMetrics[selectedYear].expenses,
    grossProfit: citMetrics[selectedYear].grossProfit,
    taxDeductions: citMetrics[selectedYear].taxDeductions,
    taxableIncome: citMetrics[selectedYear].taxableIncome,
    taxRate: citMetrics[selectedYear].taxRate,
    taxLiability: citMetrics[selectedYear].estimatedTax,
    dueDate: '2024-06-30'
  };
  // CIT Optimization recommendations
  const citOptimizations = [{
    title: 'Innovation Box Benefits',
    description: 'Qualify your R&D activities for the innovation box regime to reduce effective tax rate on innovation income.',
    potentialSavings: '€15,000/year',
    complexity: 'Medium'
  }, {
    title: 'Investment Deductions',
    description: 'Utilize small-scale investment deduction (KIA) for qualifying business assets.',
    potentialSavings: '€8,500/year',
    complexity: 'Low'
  }, {
    title: 'International Structure Optimization',
    description: 'Review your group structure to optimize for Dutch participation exemption benefits.',
    potentialSavings: '€22,000/year',
    complexity: 'High'
  }];
  const handleInvoiceClick = invoice => {
    setSelectedInvoice(invoice);
  };
  const closeInvoiceModal = () => {
    setSelectedInvoice(null);
  };
  // Render Analysis tab content
  const renderAnalysisContent = () => <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <div className="relative">
            <select value={selectedYear} onChange={e => setSelectedYear(e.target.value)} className="appearance-none bg-indigo-800/40 border border-indigo-500/20 text-white rounded-lg pl-4 pr-10 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500">
              <option value="FY 2023">FY 2023</option>
              <option value="FY 2022">FY 2022</option>
              <option value="FY 2021">FY 2021</option>
            </select>
            <ChevronDownIcon className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-indigo-300" />
          </div>
          <button onClick={() => setShowInvoices(!showInvoices)} className="flex items-center px-4 py-2 bg-indigo-800/40 border border-indigo-500/20 text-white rounded-lg hover:bg-indigo-700/40">
            <EyeIcon className="h-4 w-4 mr-2" />
            {showInvoices ? 'Hide Transactions' : 'Show Transactions'}
          </button>
        </div>
        <button className="px-4 py-2 bg-indigo-800/40 border border-indigo-500/20 text-white rounded-lg hover:bg-indigo-700/40 flex items-center">
          <DownloadIcon className="h-4 w-4 mr-2" />
          Export Data
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-indigo-800/40 rounded-lg p-4 border border-indigo-500/20">
          <p className="text-indigo-300 text-sm mb-1">Tax Liability</p>
          <div className="flex items-center justify-between">
            <p className="text-2xl font-bold text-white">
              €{citMetrics[selectedYear].estimatedTax.toLocaleString()}
            </p>
            <div className={`flex items-center text-xs ${citMetrics[selectedYear].changeFromPrevious >= 0 ? 'text-green-400' : 'text-red-400'}`}>
              {citMetrics[selectedYear].changeFromPrevious >= 0 ? <TrendingUpIcon className="h-4 w-4 mr-1" /> : <TrendingDownIcon className="h-4 w-4 mr-1" />}
              {Math.abs(citMetrics[selectedYear].changeFromPrevious)}%
            </div>
          </div>
        </div>
        <div className="bg-indigo-800/40 rounded-lg p-4 border border-indigo-500/20">
          <p className="text-indigo-300 text-sm mb-1">Taxable Income</p>
          <div className="flex items-center justify-between">
            <p className="text-2xl font-bold text-[#EA3A70]">
              €{citMetrics[selectedYear].taxableIncome.toLocaleString()}
            </p>
            <div className="px-2 py-1 bg-[#EA3A70]/20 text-[#EA3A70] rounded text-xs">
              {citMetrics[selectedYear].taxRate}% Rate
            </div>
          </div>
        </div>
        <div className="bg-indigo-800/40 rounded-lg p-4 border border-indigo-500/20">
          <p className="text-indigo-300 text-sm mb-1">Tax Deductions</p>
          <div className="flex items-center justify-between">
            <p className="text-2xl font-bold text-blue-400">
              €{citMetrics[selectedYear].taxDeductions.toLocaleString()}
            </p>
            <div className="px-2 py-1 bg-blue-500/20 text-blue-400 rounded text-xs">
              Savings
            </div>
          </div>
        </div>
      </div>
      <div className="bg-indigo-800/40 rounded-lg p-4 border border-indigo-500/20">
        <h4 className="text-white font-medium mb-4">
          Annual Financial Breakdown
        </h4>
        <div className="h-64 bg-indigo-800/30 rounded-lg p-4 flex items-center justify-center">
          <div className="w-full h-full flex">
            <div className="flex-1 flex flex-col justify-end">
              <div className="bg-[#EA3A70] h-[60%] w-full rounded-t-lg"></div>
              <p className="text-center text-xs text-indigo-300 mt-2">
                Revenue
              </p>
              <p className="text-center text-sm text-white">
                €{(citMetrics[selectedYear].revenue / 1000).toFixed(0)}K
              </p>
            </div>
            <div className="flex-1 flex flex-col justify-end ml-6">
              <div className="bg-blue-500 h-[42%] w-full rounded-t-lg"></div>
              <p className="text-center text-xs text-indigo-300 mt-2">
                Expenses
              </p>
              <p className="text-center text-sm text-white">
                €{(citMetrics[selectedYear].expenses / 1000).toFixed(0)}K
              </p>
            </div>
            <div className="flex-1 flex flex-col justify-end ml-6">
              <div className="bg-green-500 h-[23%] w-full rounded-t-lg"></div>
              <p className="text-center text-xs text-indigo-300 mt-2">
                Gross Profit
              </p>
              <p className="text-center text-sm text-white">
                €{(citMetrics[selectedYear].grossProfit / 1000).toFixed(0)}K
              </p>
            </div>
            <div className="flex-1 flex flex-col justify-end ml-6">
              <div className="bg-purple-500 h-[18%] w-full rounded-t-lg"></div>
              <p className="text-center text-xs text-indigo-300 mt-2">
                Taxable Income
              </p>
              <p className="text-center text-sm text-white">
                €{(citMetrics[selectedYear].taxableIncome / 1000).toFixed(0)}K
              </p>
            </div>
            <div className="flex-1 flex flex-col justify-end ml-6">
              <div className="bg-yellow-500 h-[6%] w-full rounded-t-lg"></div>
              <p className="text-center text-xs text-indigo-300 mt-2">Tax</p>
              <p className="text-center text-sm text-white">
                €{(citMetrics[selectedYear].estimatedTax / 1000).toFixed(0)}K
              </p>
            </div>
          </div>
        </div>
      </div>
      {showInvoices && <div className="bg-indigo-800/40 rounded-lg p-4 border border-indigo-500/20">
          <h4 className="text-white font-medium mb-4">
            Financial Transactions (Single Source of Truth)
          </h4>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-indigo-500/30">
              <thead>
                <tr>
                  <th className="px-3 py-2 text-left text-xs font-medium text-indigo-300 uppercase tracking-wider">
                    ID
                  </th>
                  <th className="px-3 py-2 text-left text-xs font-medium text-indigo-300 uppercase tracking-wider">
                    Date
                  </th>
                  <th className="px-3 py-2 text-left text-xs font-medium text-indigo-300 uppercase tracking-wider">
                    Amount
                  </th>
                  <th className="px-3 py-2 text-left text-xs font-medium text-indigo-300 uppercase tracking-wider">
                    Type
                  </th>
                  <th className="px-3 py-2 text-left text-xs font-medium text-indigo-300 uppercase tracking-wider">
                    Category
                  </th>
                  <th className="px-3 py-2 text-left text-xs font-medium text-indigo-300 uppercase tracking-wider">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-indigo-500/20">
                {transactions.map(transaction => <tr key={transaction.id} className="hover:bg-indigo-700/30 cursor-pointer transition-colors" onClick={() => handleInvoiceClick(transaction)}>
                    <td className="px-3 py-2 text-sm text-white">
                      {transaction.id}
                    </td>
                    <td className="px-3 py-2 text-sm text-indigo-200">
                      {new Date(transaction.date).toLocaleDateString()}
                    </td>
                    <td className="px-3 py-2 text-sm text-white">
                      €{transaction.amount.toLocaleString()}
                    </td>
                    <td className="px-3 py-2 text-sm text-indigo-200">
                      {transaction.type}
                    </td>
                    <td className="px-3 py-2 text-sm text-indigo-200">
                      {transaction.category}
                    </td>
                    <td className="px-3 py-2 text-sm">
                      <span className={`px-2 py-0.5 rounded-full text-xs ${transaction.status === 'Verified' ? 'bg-green-500/20 text-green-300' : 'bg-yellow-500/20 text-yellow-300'}`}>
                        {transaction.status}
                      </span>
                    </td>
                  </tr>)}
              </tbody>
            </table>
          </div>
        </div>}
      <div className="bg-indigo-800/40 rounded-lg p-5 border border-indigo-500/20">
        <div className="flex items-center justify-between mb-4">
          <h5 className="font-medium text-white">Expense Categories</h5>
          <button className="text-indigo-300 hover:text-white text-sm flex items-center">
            View Details
            <ArrowRightIcon className="h-3 w-3 ml-1" />
          </button>
        </div>
        <div className="space-y-4">
          <div>
            <div className="flex justify-between mb-1">
              <span className="text-indigo-300 text-sm">Personnel</span>
              <span className="text-white text-sm">€385,000 (44%)</span>
            </div>
            <div className="w-full bg-indigo-900/50 rounded-full h-2">
              <div className="bg-[#EA3A70] h-2 rounded-full" style={{
              width: '44%'
            }}></div>
            </div>
          </div>
          <div>
            <div className="flex justify-between mb-1">
              <span className="text-indigo-300 text-sm">Operations</span>
              <span className="text-white text-sm">€210,000 (24%)</span>
            </div>
            <div className="w-full bg-indigo-900/50 rounded-full h-2">
              <div className="bg-blue-500 h-2 rounded-full" style={{
              width: '24%'
            }}></div>
            </div>
          </div>
          <div>
            <div className="flex justify-between mb-1">
              <span className="text-indigo-300 text-sm">Marketing</span>
              <span className="text-white text-sm">€175,000 (20%)</span>
            </div>
            <div className="w-full bg-indigo-900/50 rounded-full h-2">
              <div className="bg-purple-500 h-2 rounded-full" style={{
              width: '20%'
            }}></div>
            </div>
          </div>
          <div>
            <div className="flex justify-between mb-1">
              <span className="text-indigo-300 text-sm">Other</span>
              <span className="text-white text-sm">€105,000 (12%)</span>
            </div>
            <div className="w-full bg-indigo-900/50 rounded-full h-2">
              <div className="bg-green-500 h-2 rounded-full" style={{
              width: '12%'
            }}></div>
            </div>
          </div>
        </div>
      </div>
    </div>;
  // Render Return Format tab content
  const renderReturnFormatContent = () => <div className="space-y-6">
      <div className="bg-indigo-800/30 backdrop-blur-md rounded-xl border border-indigo-500/20 p-6">
        <h4 className="text-lg font-medium text-white mb-4">
          Corporate Tax Return Format
        </h4>
        <div className="space-y-5 mb-6">
          <div className="flex justify-between items-center pb-3 border-b border-indigo-500/20">
            <span className="text-indigo-300">Tax Period</span>
            <span className="text-white font-medium">
              {citReturnData.period} (January 1 - December 31, 2023)
            </span>
          </div>
          <div className="bg-indigo-800/40 rounded-lg p-5 border border-indigo-500/20 space-y-4">
            <h5 className="text-white font-medium">
              Section A: General Information
            </h5>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="text-indigo-300 text-sm mb-1">Company Details</p>
                <p className="text-white">Tech Innovations B.V.</p>
                <p className="text-indigo-300 text-sm mt-2">KvK: 12345678</p>
                <p className="text-indigo-300 text-sm">RSIN: NL123456789B01</p>
              </div>
              <div>
                <p className="text-indigo-300 text-sm mb-1">Fiscal Year</p>
                <p className="text-white">
                  January 1, 2023 - December 31, 2023
                </p>
                <p className="text-indigo-300 text-sm mt-2">
                  Filing Deadline: June 30, 2024
                </p>
              </div>
            </div>
          </div>
          <div className="bg-indigo-800/40 rounded-lg p-5 border border-indigo-500/20 space-y-4">
            <h5 className="text-white font-medium">
              Section B: Financial Results
            </h5>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-indigo-300">B1. Revenue</span>
                <span className="text-white">
                  €{citReturnData.totalRevenue.toLocaleString()}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-indigo-300">B2. Cost of Sales</span>
                <span className="text-white">
                  €{(citReturnData.totalExpenses * 0.65).toLocaleString()}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-indigo-300">B3. Gross Profit</span>
                <span className="text-white">
                  €{citReturnData.grossProfit.toLocaleString()}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-indigo-300">B4. Operating Expenses</span>
                <span className="text-white">
                  €{(citReturnData.totalExpenses * 0.35).toLocaleString()}
                </span>
              </div>
              <div className="flex justify-between pt-2 border-t border-indigo-500/20">
                <span className="text-indigo-300">B5. Operating Profit</span>
                <span className="text-white">
                  €{citReturnData.grossProfit.toLocaleString()}
                </span>
              </div>
            </div>
          </div>
          <div className="bg-indigo-800/40 rounded-lg p-5 border border-indigo-500/20 space-y-4">
            <h5 className="text-white font-medium">
              Section C: Tax Adjustments
            </h5>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-indigo-300">
                  C1. Non-deductible expenses
                </span>
                <span className="text-white">€35,000</span>
              </div>
              <div className="flex justify-between">
                <span className="text-indigo-300">
                  C2. Investment deductions
                </span>
                <span className="text-white">-€45,000</span>
              </div>
              <div className="flex justify-between">
                <span className="text-indigo-300">
                  C3. Innovation box benefits
                </span>
                <span className="text-white">-€75,000</span>
              </div>
              <div className="flex justify-between pt-2 border-t border-indigo-500/20">
                <span className="text-indigo-300">
                  C4. Total Tax Adjustments
                </span>
                <span className="text-green-400">
                  -€{citReturnData.taxDeductions.toLocaleString()}
                </span>
              </div>
            </div>
          </div>
          <div className="bg-indigo-800/40 rounded-lg p-5 border border-indigo-500/20 space-y-4">
            <h5 className="text-white font-medium">
              Section D: Tax Calculation
            </h5>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-indigo-300">D1. Taxable Income</span>
                <span className="text-white">
                  €{citReturnData.taxableIncome.toLocaleString()}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-indigo-300">
                  D2. Tax Rate (First €395,000)
                </span>
                <span className="text-white">19.0%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-indigo-300">
                  D3. Tax Rate (Above €395,000)
                </span>
                <span className="text-white">25.8%</span>
              </div>
              <div className="flex justify-between pt-2 border-t border-indigo-500/20">
                <span className="text-white font-medium">
                  D4. Corporate Tax Liability
                </span>
                <span className="text-[#EA3A70] font-bold">
                  €{citReturnData.taxLiability.toLocaleString()}
                </span>
              </div>
            </div>
          </div>
          <div className="bg-indigo-800/40 rounded-lg p-5 border border-indigo-500/20 space-y-4">
            <h5 className="text-white font-medium">
              Section E: Additional Information
            </h5>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-indigo-300">E1. Loss Carry Forward</span>
                <span className="text-white">€0</span>
              </div>
              <div className="flex justify-between">
                <span className="text-indigo-300">
                  E2. Provisional Tax Paid
                </span>
                <span className="text-white">€25,000</span>
              </div>
              <div className="flex justify-between pt-2 border-t border-indigo-500/20">
                <span className="text-white font-medium">
                  E3. Final Payment Due
                </span>
                <span className="text-[#EA3A70]">
                  €{(citReturnData.taxLiability - 25000).toLocaleString()}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-end">
          <button className="px-4 py-2 bg-indigo-800/40 border border-indigo-500/20 text-white rounded-xl hover:bg-indigo-700/40 transition-colors flex items-center">
            <DownloadIcon className="h-4 w-4 mr-2" />
            Download Form Template
          </button>
        </div>
      </div>
    </div>;
  // Render Filing Tutorial tab content
  const renderFilingTutorialContent = () => <div className="p-6">
      <div className="mb-6 flex items-start bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl p-5 shadow-lg">
        <div className="h-10 w-10 rounded-full bg-white/20 flex items-center justify-center mr-4 flex-shrink-0">
          <CalendarIcon className="h-5 w-5 text-white" />
        </div>
        <div>
          <h3 className="text-lg font-medium text-white mb-1">
            Corporate Tax Filing Deadline
          </h3>
          <p className="text-white/90">
            Your corporate tax return for {citReturnData.period} must be filed
            and paid by{' '}
            <span className="font-semibold">
              {new Date(citReturnData.dueDate).toLocaleDateString()}
            </span>
            . The estimated amount due is{' '}
            <span className="font-semibold">
              €{citReturnData.taxLiability.toLocaleString()}
            </span>
            .
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <div className="bg-indigo-900/50 rounded-lg p-5 border border-indigo-500/30">
          <div className="flex items-center mb-3">
            <FileTextIcon className="h-5 w-5 text-indigo-300 mr-2" />
            <h4 className="text-white font-medium">Required Information</h4>
          </div>
          <ul className="space-y-2 text-indigo-200 text-sm">
            <li className="flex items-start">
              <CheckIcon className="h-4 w-4 text-green-400 mr-2 mt-0.5" />
              <span>Annual financial statements</span>
            </li>
            <li className="flex items-start">
              <CheckIcon className="h-4 w-4 text-green-400 mr-2 mt-0.5" />
              <span>Profit & loss statement</span>
            </li>
            <li className="flex items-start">
              <CheckIcon className="h-4 w-4 text-green-400 mr-2 mt-0.5" />
              <span>Balance sheet</span>
            </li>
            <li className="flex items-start">
              <CheckIcon className="h-4 w-4 text-green-400 mr-2 mt-0.5" />
              <span>Tax depreciation schedules</span>
            </li>
            <li className="flex items-start">
              <CheckIcon className="h-4 w-4 text-green-400 mr-2 mt-0.5" />
              <span>Details of tax incentives claimed</span>
            </li>
          </ul>
        </div>
        <div className="bg-indigo-900/50 rounded-lg p-5 border border-indigo-500/30">
          <div className="flex items-center mb-3">
            <InfoIcon className="h-5 w-5 text-indigo-300 mr-2" />
            <h4 className="text-white font-medium">Important Notes</h4>
          </div>
          <ul className="space-y-2 text-indigo-200 text-sm">
            <li className="flex items-start">
              <AlertCircleIcon className="h-4 w-4 text-[#EA3A70] mr-2 mt-0.5" />
              <span>
                Late filing penalties can be substantial and increase over time
              </span>
            </li>
            <li className="flex items-start">
              <AlertCircleIcon className="h-4 w-4 text-[#EA3A70] mr-2 mt-0.5" />
              <span>Interest is charged on late tax payments</span>
            </li>
            <li className="flex items-start">
              <AlertCircleIcon className="h-4 w-4 text-[#EA3A70] mr-2 mt-0.5" />
              <span>Keep all supporting documents for 7 years</span>
            </li>
          </ul>
        </div>
        <div className="bg-indigo-900/50 rounded-lg p-5 border border-indigo-500/30">
          <div className="flex items-center mb-3">
            <ArrowRightIcon className="h-5 w-5 text-indigo-300 mr-2" />
            <h4 className="text-white font-medium">Useful Resources</h4>
          </div>
          <ul className="space-y-2 text-indigo-200 text-sm">
            <li className="flex items-start">
              <ArrowRightIcon className="h-4 w-4 text-indigo-300 mr-2 mt-0.5" />
              <a href="#" className="text-indigo-300 hover:text-white transition-colors">
                Corporate Tax Return Guide
              </a>
            </li>
            <li className="flex items-start">
              <ArrowRightIcon className="h-4 w-4 text-indigo-300 mr-2 mt-0.5" />
              <a href="#" className="text-indigo-300 hover:text-white transition-colors">
                Tax Incentives Overview
              </a>
            </li>
            <li className="flex items-start">
              <ArrowRightIcon className="h-4 w-4 text-indigo-300 mr-2 mt-0.5" />
              <a href="#" className="text-indigo-300 hover:text-white transition-colors">
                Common Corporate Tax Filing Errors
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="bg-indigo-900/50 rounded-lg p-5 border border-indigo-500/30">
        <div className="flex justify-between items-center mb-4">
          <h4 className="text-white font-medium">Filing Process Summary</h4>
          <button onClick={() => setShowFullTutorial ? setShowFullTutorial(true) : window.open('https://www.belastingdienst.nl/wps/wcm/connect/nl/ondernemers/content/aangifte-vennootschapsbelasting-doen-zo-werkt-het', '_blank')} className="text-indigo-300 hover:text-white text-sm flex items-center">
            View Full Guide
            <ArrowRightIcon className="h-3 w-3 ml-1" />
          </button>
        </div>
        <div className="space-y-6">
          <div className="relative">
            <div className="absolute left-4 top-10 h-full w-0.5 bg-indigo-500/30" aria-hidden="true" />
            <div className="flex">
              <div className="h-8 w-8 rounded-full bg-green-500/20 border border-green-500/50 flex items-center justify-center mr-4 flex-shrink-0">
                <CheckIcon className="h-4 w-4 text-green-400" />
              </div>
              <div className="flex-1">
                <h5 className="font-medium text-green-400 flex items-center">
                  Access the Dutch Tax Authority Portal
                  <span className="ml-2 text-xs bg-[#EA3A70]/20 text-[#EA3A70] px-2 py-0.5 rounded-full">
                    Critical Step
                  </span>
                </h5>
                <p className="text-indigo-300 text-sm mt-1">
                  Log in to the official Belastingdienst website to start your
                  corporate tax return process for {citReturnData.period}.
                </p>
                <div className="flex items-start mt-3 bg-indigo-900/30 rounded p-3 border border-indigo-500/20">
                  <AlertCircleIcon className="h-4 w-4 text-indigo-300 mr-2 mt-0.5 flex-shrink-0" />
                  <p className="text-indigo-300 text-xs">
                    <span className="font-medium">Tip:</span> Make sure you have
                    your eHerkenning credentials ready before starting. If you
                    don't have eHerkenning yet, you need to apply for it through
                    an authorized provider, which may take several days to
                    process.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute left-4 top-10 h-full w-0.5 bg-indigo-500/30" aria-hidden="true" />
            <div className="flex">
              <div className="h-8 w-8 rounded-full bg-indigo-900/70 border border-indigo-500/30 flex items-center justify-center mr-4 flex-shrink-0">
                <span className="text-white text-sm">2</span>
              </div>
              <div className="flex-1">
                <h5 className="font-medium text-white">
                  Navigate to Corporate Tax Return Section
                </h5>
                <p className="text-indigo-300 text-sm mt-1">
                  Once logged in, find the corporate tax return filing section
                  in your business portal and select the period for{' '}
                  {citReturnData.period}.
                </p>
                <div className="flex items-start mt-3 bg-indigo-900/30 rounded p-3 border border-indigo-500/20">
                  <AlertCircleIcon className="h-4 w-4 text-indigo-300 mr-2 mt-0.5 flex-shrink-0" />
                  <p className="text-indigo-300 text-xs">
                    <span className="font-medium">Tip:</span> From the
                    dashboard, select "Belastingaangifte" (Tax return), then
                    click on "Vennootschapsbelasting" (Corporate Tax) in the
                    menu.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute left-4 top-10 h-full w-0.5 bg-indigo-500/30" aria-hidden="true" />
            <div className="flex">
              <div className="h-8 w-8 rounded-full bg-indigo-900/70 border border-indigo-500/30 flex items-center justify-center mr-4 flex-shrink-0">
                <span className="text-white text-sm">3</span>
              </div>
              <div className="flex-1">
                <h5 className="font-medium text-white flex items-center">
                  Enter Company Information
                  <span className="ml-2 text-xs bg-[#EA3A70]/20 text-[#EA3A70] px-2 py-0.5 rounded-full">
                    Critical Step
                  </span>
                </h5>
                <p className="text-indigo-300 text-sm mt-1">
                  Verify and update your company information before proceeding
                  with the tax return. Confirm your company name, address, and
                  registration number (KVK).
                </p>
                <div className="flex items-start mt-3 bg-indigo-900/30 rounded p-3 border border-indigo-500/20">
                  <AlertCircleIcon className="h-4 w-4 text-indigo-300 mr-2 mt-0.5 flex-shrink-0" />
                  <p className="text-indigo-300 text-xs">
                    <span className="font-medium">Tip:</span> Ensure all company
                    information is accurate and up-to-date. Incorrect
                    information may lead to processing delays or errors in your
                    tax assessment.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute left-4 top-10 h-full w-0.5 bg-indigo-500/30" aria-hidden="true" />
            <div className="flex">
              <div className="h-8 w-8 rounded-full bg-indigo-900/70 border border-indigo-500/30 flex items-center justify-center mr-4 flex-shrink-0">
                <span className="text-white text-sm">4</span>
              </div>
              <div className="flex-1">
                <h5 className="font-medium text-white flex items-center">
                  Enter Financial Data
                  <span className="ml-2 text-xs bg-[#EA3A70]/20 text-[#EA3A70] px-2 py-0.5 rounded-full">
                    Critical Step
                  </span>
                </h5>
                <p className="text-indigo-300 text-sm mt-1">
                  For {citReturnData.period}, enter your financial details:
                  Revenue €{citReturnData.totalRevenue.toLocaleString()},
                  Expenses €{citReturnData.totalExpenses.toLocaleString()},
                  Profit before tax €
                  {citReturnData.grossProfit.toLocaleString()}, Tax deductions €
                  {citReturnData.taxDeductions.toLocaleString()}, Taxable income
                  €{citReturnData.taxableIncome.toLocaleString()}.
                </p>
                <div className="flex items-start mt-3 bg-indigo-900/30 rounded p-3 border border-indigo-500/20">
                  <AlertCircleIcon className="h-4 w-4 text-indigo-300 mr-2 mt-0.5 flex-shrink-0" />
                  <p className="text-indigo-300 text-xs">
                    <span className="font-medium">Tip:</span> Use the data from
                    your Corporate Tax Analysis Report to accurately fill in
                    these fields. Double-check all figures before proceeding, as
                    errors can lead to incorrect tax assessments and potential
                    penalties.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute left-4 top-10 h-full w-0.5 bg-indigo-500/30" aria-hidden="true" />
            <div className="flex">
              <div className="h-8 w-8 rounded-full bg-indigo-900/70 border border-indigo-500/30 flex items-center justify-center mr-4 flex-shrink-0">
                <span className="text-white text-sm">5</span>
              </div>
              <div className="flex-1">
                <h5 className="font-medium text-white flex items-center">
                  Review Tax Calculation
                  <span className="ml-2 text-xs bg-[#EA3A70]/20 text-[#EA3A70] px-2 py-0.5 rounded-full">
                    Critical Step
                  </span>
                </h5>
                <p className="text-indigo-300 text-sm mt-1">
                  Review the calculated corporate tax for {citReturnData.period}
                  : Taxable income €
                  {citReturnData.taxableIncome.toLocaleString()}, Corporate tax
                  rate {citReturnData.taxRate}%, Corporate tax liability €
                  {citReturnData.taxLiability.toLocaleString()}.
                </p>
                <div className="flex items-start mt-3 bg-indigo-900/30 rounded p-3 border border-indigo-500/20">
                  <AlertCircleIcon className="h-4 w-4 text-indigo-300 mr-2 mt-0.5 flex-shrink-0" />
                  <p className="text-indigo-300 text-xs">
                    <span className="font-medium">Tip:</span> This is your last
                    chance to correct any errors before submission. Pay special
                    attention to the final tax amount. If it differs
                    significantly from your expectations, review your entries
                    again.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute left-4 top-10 h-full w-0.5 bg-indigo-500/30" aria-hidden="true" />
            <div className="flex">
              <div className="h-8 w-8 rounded-full bg-indigo-900/70 border border-indigo-500/30 flex items-center justify-center mr-4 flex-shrink-0">
                <span className="text-white text-sm">6</span>
              </div>
              <div className="flex-1">
                <h5 className="font-medium text-white flex items-center">
                  Submit Your Corporate Tax Return
                  <span className="ml-2 text-xs bg-[#EA3A70]/20 text-[#EA3A70] px-2 py-0.5 rounded-full">
                    Critical Step
                  </span>
                </h5>
                <p className="text-indigo-300 text-sm mt-1">
                  Finalize and submit your completed corporate tax return to the
                  tax authority. Click "Submit" or "Verzenden" to file your
                  return and wait for the confirmation page.
                </p>
                <div className="flex items-start mt-3 bg-indigo-900/30 rounded p-3 border border-indigo-500/20">
                  <AlertCircleIcon className="h-4 w-4 text-indigo-300 mr-2 mt-0.5 flex-shrink-0" />
                  <p className="text-indigo-300 text-xs">
                    <span className="font-medium">Tip:</span> After submission,
                    your corporate tax return cannot be modified. If you
                    discover an error later, you'll need to contact the tax
                    authority directly to request a correction or file an
                    amended return.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute left-4 top-10 h-full w-0.5 bg-indigo-500/30" aria-hidden="true" />
            <div className="flex">
              <div className="h-8 w-8 rounded-full bg-indigo-900/70 border border-indigo-500/30 flex items-center justify-center mr-4 flex-shrink-0">
                <span className="text-white text-sm">7</span>
              </div>
              <div className="flex-1">
                <h5 className="font-medium text-white flex items-center">
                  Make the Corporate Tax Payment
                  <span className="ml-2 text-xs bg-[#EA3A70]/20 text-[#EA3A70] px-2 py-0.5 rounded-full">
                    Critical Step
                  </span>
                </h5>
                <p className="text-indigo-300 text-sm mt-1">
                  Pay your corporate tax amount of €
                  {citReturnData.taxLiability.toLocaleString()} by the deadline.
                  Use your bank's online banking system to make the payment to
                  the tax authority.
                </p>
                <div className="flex items-start mt-3 bg-indigo-900/30 rounded p-3 border border-indigo-500/20">
                  <AlertCircleIcon className="h-4 w-4 text-indigo-300 mr-2 mt-0.5 flex-shrink-0" />
                  <p className="text-indigo-300 text-xs">
                    <span className="font-medium">Tip:</span> Late payment will
                    result in interest charges and possibly penalties. If you
                    cannot pay the full amount by the deadline, contact the tax
                    authority immediately to discuss payment arrangements or
                    installment options.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-8 flex justify-between items-center">
        <p className="text-indigo-300 text-sm">
          <InfoIcon className="h-4 w-4 inline mr-1" />
          This is a summary of the filing process. Click the button to begin the
          guided filing workflow.
        </p>
        <button className="px-4 py-2 bg-[#EA3A70] text-white rounded-xl hover:bg-[#EA3A70]/90 transition-colors flex items-center">
          Begin Interactive Filing Process
          <ArrowRightIcon className="h-4 w-4 ml-2" />
        </button>
      </div>
    </div>;
  // Render Optimization tab content
  const renderOptimizationContent = () => <div className="space-y-6">
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl p-6 text-white shadow-lg relative overflow-hidden">
        <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full transform translate-x-20 -translate-y-20 blur-xl"></div>
        <div className="absolute bottom-0 left-0 w-40 h-40 bg-white/5 rounded-full transform -translate-x-20 translate-y-20 blur-xl"></div>
        <div className="relative">
          <h3 className="text-xl font-semibold mb-3">
            Corporate Tax Optimization Opportunities
          </h3>
          <p className="text-white/80 mb-4">
            Based on your corporate tax profile and business activities, we've
            identified several opportunities to optimize your tax position:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
            {citOptimizations.map((opt, index) => <div key={index} className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                <h4 className="font-medium text-white mb-2">{opt.title}</h4>
                <p className="text-sm text-white/80 mb-3">{opt.description}</p>
                <div className="flex justify-between text-sm">
                  <span className="text-green-300">
                    Save: {opt.potentialSavings}
                  </span>
                  <span className="text-white/60">
                    Complexity: {opt.complexity}
                  </span>
                </div>
              </div>)}
          </div>
        </div>
      </div>
      <div className="bg-indigo-800/40 rounded-lg p-5 border border-indigo-500/20">
        <h4 className="text-lg font-medium text-white mb-4">
          Tax Optimization Strategies
        </h4>
        <div className="space-y-5">
          <div className="bg-indigo-800/30 rounded-lg p-4 border border-indigo-500/20">
            <h5 className="text-white font-medium mb-2">
              Innovation Box Benefits
            </h5>
            <p className="text-indigo-300 text-sm mb-3">
              The innovation box regime allows for a reduced effective tax rate
              of 9% on qualifying profits from innovative activities.
            </p>
            <div className="space-y-2">
              <div className="flex items-start">
                <CheckCircleIcon className="h-4 w-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                <p className="text-indigo-300 text-sm">
                  Obtain WBSO declaration for your R&D activities
                </p>
              </div>
              <div className="flex items-start">
                <CheckCircleIcon className="h-4 w-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                <p className="text-indigo-300 text-sm">
                  Document direct connection between R&D activities and
                  resulting income
                </p>
              </div>
              <div className="flex items-start">
                <CheckCircleIcon className="h-4 w-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                <p className="text-indigo-300 text-sm">
                  Apply innovation box to qualifying profits
                </p>
              </div>
            </div>
            <div className="mt-3 pt-3 border-t border-indigo-500/20 flex justify-between items-center">
              <span className="text-indigo-300 text-sm">
                Potential annual savings
              </span>
              <span className="text-green-400 font-medium">€15,000</span>
            </div>
          </div>
          <div className="bg-indigo-800/30 rounded-lg p-4 border border-indigo-500/20">
            <h5 className="text-white font-medium mb-2">
              Investment Deductions
            </h5>
            <p className="text-indigo-300 text-sm mb-3">
              Small-scale investment deduction (KIA) allows for additional
              deduction for investments in business assets.
            </p>
            <div className="space-y-2">
              <div className="flex items-start">
                <CheckCircleIcon className="h-4 w-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                <p className="text-indigo-300 text-sm">
                  Plan investments to fall within optimal KIA range (€2,400 -
                  €332,994 for 2023)
                </p>
              </div>
              <div className="flex items-start">
                <CheckCircleIcon className="h-4 w-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                <p className="text-indigo-300 text-sm">
                  Consider energy investment allowance (EIA) for sustainable
                  investments
                </p>
              </div>
              <div className="flex items-start">
                <CheckCircleIcon className="h-4 w-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                <p className="text-indigo-300 text-sm">
                  Document all qualifying business assets
                </p>
              </div>
            </div>
            <div className="mt-3 pt-3 border-t border-indigo-500/20 flex justify-between items-center">
              <span className="text-indigo-300 text-sm">
                Potential annual savings
              </span>
              <span className="text-green-400 font-medium">€8,500</span>
            </div>
          </div>
          <div className="bg-indigo-800/30 rounded-lg p-4 border border-indigo-500/20">
            <h5 className="text-white font-medium mb-2">
              International Structure Optimization
            </h5>
            <p className="text-indigo-300 text-sm mb-3">
              Review and optimize your group structure to benefit from Dutch
              participation exemption.
            </p>
            <div className="space-y-2">
              <div className="flex items-start">
                <CheckCircleIcon className="h-4 w-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                <p className="text-indigo-300 text-sm">
                  Ensure shareholdings meet minimum 5% threshold for
                  participation exemption
                </p>
              </div>
              <div className="flex items-start">
                <CheckCircleIcon className="h-4 w-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                <p className="text-indigo-300 text-sm">
                  Review substance requirements for international holdings
                </p>
              </div>
              <div className="flex items-start">
                <CheckCircleIcon className="h-4 w-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                <p className="text-indigo-300 text-sm">
                  Consider fiscal unity for Dutch subsidiaries
                </p>
              </div>
            </div>
            <div className="mt-3 pt-3 border-t border-indigo-500/20 flex justify-between items-center">
              <span className="text-indigo-300 text-sm">
                Potential annual savings
              </span>
              <span className="text-green-400 font-medium">€22,000</span>
            </div>
          </div>
        </div>
        <div className="mt-6 bg-indigo-800/30 rounded-lg p-4 border border-indigo-500/20">
          <div className="flex items-start">
            <InfoIcon className="h-5 w-5 text-indigo-300 mr-2 flex-shrink-0 mt-0.5" />
            <div>
              <h5 className="text-white font-medium mb-1">
                Schedule Tax Planning Session
              </h5>
              <p className="text-indigo-300 text-sm">
                Our tax advisors can help you implement these optimization
                strategies and identify additional opportunities specific to
                your business.
              </p>
              <button className="mt-3 px-4 py-2 bg-[#EA3A70] text-white rounded-lg hover:bg-[#EA3A70]/90 text-sm">
                Book Tax Planning Session
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>;
  // Render the content based on the selected tab
  const renderContent = () => {
    switch (citTabView) {
      case 'analysis':
        return renderAnalysisContent();
      case 'report':
        return renderReturnFormatContent();
      case 'tutorial':
        return renderFilingTutorialContent();
      case 'optimization':
        return renderOptimizationContent();
      default:
        return renderAnalysisContent();
    }
  };
  return <div className="bg-indigo-800/20 backdrop-blur-md rounded-xl border border-indigo-500/20 mb-6">
      <div className="flex justify-between items-center p-5 border-b border-indigo-500/20">
        <div>
          <h2 className="text-xl font-bold text-white">
            Corporate Tax Return Preparation
          </h2>
          <p className="text-indigo-300 text-sm mt-1">
            Self-service filing assistant
          </p>
        </div>
        <button onClick={onClose} className="text-indigo-300 hover:text-white">
          <XIcon className="h-5 w-5" />
        </button>
      </div>
      <div className="p-6">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h2 className="text-xl font-bold text-white">
              Corporate Tax Return Preparation
            </h2>
            <p className="text-indigo-300 text-sm mt-1">
              Self-service filing assistant
            </p>
          </div>
          <div className="flex space-x-2">
            <button onClick={() => setCitTabView('analysis')} className={`px-4 py-2 rounded-lg text-sm ${citTabView === 'analysis' ? 'bg-[#EA3A70] text-white' : 'bg-indigo-800/40 text-indigo-300 hover:bg-indigo-700/40'}`}>
              CIT Analysis
            </button>
            <button onClick={() => setCitTabView('report')} className={`px-4 py-2 rounded-lg text-sm ${citTabView === 'report' ? 'bg-[#EA3A70] text-white' : 'bg-indigo-800/40 text-indigo-300 hover:bg-indigo-700/40'}`}>
              CIT Return Format
            </button>
            <button onClick={() => setCitTabView('tutorial')} className={`px-4 py-2 rounded-lg text-sm ${citTabView === 'tutorial' ? 'bg-[#EA3A70] text-white' : 'bg-indigo-800/40 text-indigo-300 hover:bg-indigo-700/40'}`}>
              Filing Tutorial
            </button>
            <button onClick={() => setCitTabView('optimization')} className={`px-4 py-2 rounded-lg text-sm ${citTabView === 'optimization' ? 'bg-[#EA3A70] text-white' : 'bg-indigo-800/40 text-indigo-300 hover:bg-indigo-700/40'}`}>
              CIT Optimization
            </button>
          </div>
        </div>
        {renderContent()}
        {selectedInvoice && <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
            <div className="bg-indigo-900/90 backdrop-blur-md rounded-2xl border border-indigo-500/30 p-6 max-w-2xl w-full">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-medium text-white">
                  Transaction Details
                </h3>
                <button onClick={closeInvoiceModal} className="text-indigo-300 hover:text-white">
                  <XIcon className="h-5 w-5" />
                </button>
              </div>
              <div className="grid grid-cols-2 gap-6 mb-6">
                <div>
                  <p className="text-indigo-300 text-sm mb-1">Transaction ID</p>
                  <p className="text-white font-medium">{selectedInvoice.id}</p>
                </div>
                <div>
                  <p className="text-indigo-300 text-sm mb-1">Date</p>
                  <p className="text-white font-medium">
                    {new Date(selectedInvoice.date).toLocaleDateString()}
                  </p>
                </div>
                <div>
                  <p className="text-indigo-300 text-sm mb-1">
                    {selectedInvoice.type === 'Revenue' ? 'Customer' : 'Vendor'}
                  </p>
                  <p className="text-white font-medium">
                    {selectedInvoice.type === 'Revenue' ? selectedInvoice.customer : selectedInvoice.vendor}
                  </p>
                </div>
                <div>
                  <p className="text-indigo-300 text-sm mb-1">Category</p>
                  <p className="text-white font-medium">
                    {selectedInvoice.category}
                  </p>
                </div>
                <div>
                  <p className="text-indigo-300 text-sm mb-1">
                    Transaction Type
                  </p>
                  <p className="text-white font-medium">
                    {selectedInvoice.type}
                  </p>
                </div>
                <div>
                  <p className="text-indigo-300 text-sm mb-1">Status</p>
                  <p className="text-white font-medium">
                    {selectedInvoice.status}
                  </p>
                </div>
              </div>
              <div className="mb-6">
                <p className="text-indigo-300 text-sm mb-1">Description</p>
                <p className="text-white">{selectedInvoice.description}</p>
              </div>
              <div className="bg-indigo-800/40 rounded-lg p-4 border border-indigo-500/20 mb-6">
                <div className="flex justify-between items-center mb-3">
                  <p className="text-indigo-300">Amount</p>
                  <p className="text-white">
                    €{selectedInvoice.amount.toLocaleString()}
                  </p>
                </div>
                <div className="flex justify-between items-center pt-2 border-t border-indigo-500/20">
                  <p className="text-white font-medium">Invoice Number</p>
                  <p className="text-xl font-bold text-white">
                    {selectedInvoice.invoiceNumber}
                  </p>
                </div>
              </div>
              <div className="flex justify-end space-x-3">
                <button onClick={closeInvoiceModal} className="px-4 py-2 bg-indigo-800/40 border border-indigo-500/20 text-white rounded-xl hover:bg-indigo-700/40 transition-colors">
                  Close
                </button>
                <button className="px-4 py-2 bg-[#EA3A70] text-white rounded-xl hover:bg-[#EA3A70]/90 transition-colors flex items-center">
                  <DownloadIcon className="h-4 w-4 mr-2" />
                  Download Document
                </button>
              </div>
            </div>
          </div>}
      </div>
    </div>;
}