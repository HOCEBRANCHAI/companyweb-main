import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AlertCircleIcon, ClockIcon, CheckCircleIcon, FileTextIcon, CalendarIcon, ArrowRightIcon, DownloadIcon, InfoIcon, ChevronRightIcon, PiggyBankIcon, CalculatorIcon, UploadIcon, CreditCardIcon, XIcon, PlusIcon, MinusIcon, CheckIcon, ExternalLinkIcon, HelpCircleIcon, BarChart2Icon, SearchIcon, TrendingUpIcon, TrendingDownIcon, EyeIcon, DollarSignIcon, ChevronDownIcon } from 'lucide-react';
import { VATReturnReport } from './VATReturnReport';
import { VATFilingTutorial } from './VATFilingTutorial';
import { CompanyHeader } from './CompanyHeader';
import { ObjectionLetters } from '../company/ObjectionLetters';
import { CorporateTaxFilingWorkflow } from './CorporateTaxFilingWorkflow';
import { PageHeader } from '../common/PageHeader';
export function TaxOverview() {
  const [showWorkflow, setShowWorkflow] = useState(false);
  const [showCorporateTaxPreparation, setShowCorporateTaxPreparation] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedMonth, setSelectedMonth] = useState('Q1 2023');
  const [showInvoices, setShowInvoices] = useState(false);
  const [selectedInvoice, setSelectedInvoice] = useState(null);
  const [vatTabView, setVatTabView] = useState('analysis');
  const vatFilingProgress = 35; // Example progress percentage
  const corporateTaxFilingProgress = 15; // Example progress percentage
  // Define menu items for the PageHeader
  const menuItems = [{
    label: 'Overview',
    active: activeTab === 'overview',
    onClick: () => setActiveTab('overview')
  }, {
    label: 'Tax Returns',
    active: activeTab === 'taxReturn',
    onClick: () => setActiveTab('taxReturn')
  }, {
    label: 'Objections',
    active: activeTab === 'objections',
    onClick: () => setActiveTab('objections')
  }, {
    label: 'Calculations',
    active: activeTab === 'calculations',
    onClick: () => setActiveTab('calculations')
  }, {
    label: 'VIES Check',
    active: activeTab === 'viesCheck',
    onClick: () => setActiveTab('viesCheck')
  }];
  // VAT metrics and data
  const vatMetrics = {
    'Q1 2023': {
      totalVAT: 1791.3,
      vatOnSales: 1953.0,
      vatOnPurchases: 161.7,
      changeFromPrevious: 15.2,
      transactionCount: 42,
      unverifiedCount: 3
    },
    'Q2 2023': {
      totalVAT: 2150.45,
      vatOnSales: 2340.6,
      vatOnPurchases: 190.15,
      changeFromPrevious: 20.1,
      transactionCount: 38,
      unverifiedCount: 1
    },
    'Q3 2023': {
      totalVAT: 1876.2,
      vatOnSales: 2102.4,
      vatOnPurchases: 226.2,
      changeFromPrevious: -12.8,
      transactionCount: 45,
      unverifiedCount: 5
    },
    'Q4 2023': {
      totalVAT: 2310.75,
      vatOnSales: 2540.3,
      vatOnPurchases: 229.55,
      changeFromPrevious: 23.2,
      transactionCount: 51,
      unverifiedCount: 2
    }
  };
  // Transaction data
  const transactions = [{
    id: 'INV-001',
    date: '2023-01-15',
    amount: 10000,
    vat: 2100,
    type: 'Domestic',
    country: 'Netherlands',
    description: 'Software subscription services',
    customer: 'Tech Solutions BV',
    invoiceNumber: 'INV-2023-001',
    status: 'Verified'
  }, {
    id: 'INV-002',
    date: '2023-02-03',
    amount: 15000,
    vat: 3150,
    type: 'Intra-EU',
    country: 'Germany',
    description: 'Consulting services',
    customer: 'Deutsche Tech GmbH',
    invoiceNumber: 'INV-2023-002',
    status: 'Verified'
  }, {
    id: 'INV-003',
    date: '2023-02-17',
    amount: 5000,
    vat: 0,
    type: 'Reverse Charge',
    country: 'France',
    description: 'IT Infrastructure setup',
    customer: 'Paris Digital SARL',
    invoiceNumber: 'INV-2023-003',
    status: 'Unverified'
  }, {
    id: 'INV-004',
    date: '2023-03-05',
    amount: 8000,
    vat: 1680,
    type: 'Domestic',
    country: 'Netherlands',
    description: 'Server hosting services',
    customer: 'Local Host BV',
    invoiceNumber: 'INV-2023-004',
    status: 'Verified'
  }, {
    id: 'INV-005',
    date: '2023-03-22',
    amount: 12000,
    vat: 0,
    type: 'Export',
    country: 'USA',
    description: 'Software licensing',
    customer: 'American Digital Inc',
    invoiceNumber: 'INV-2023-005',
    status: 'Verified'
  }];
  // VAT Return data
  const vatReturnData = {
    period: selectedMonth,
    totalSales: 9300,
    vatOnSales: vatMetrics[selectedMonth].vatOnSales,
    totalPurchases: 770,
    vatOnPurchases: vatMetrics[selectedMonth].vatOnPurchases,
    vatPayable: vatMetrics[selectedMonth].totalVAT,
    dueDate: '2023-04-30'
  };
  // VAT Optimization recommendations
  const vatOptimizations = [{
    title: 'Centralize VAT Registration',
    description: 'Consider centralizing your EU VAT registrations to reduce administrative burden.',
    potentialSavings: '€3,200/year',
    complexity: 'Medium'
  }, {
    title: 'Optimize Supply Chain',
    description: 'Restructure your supply chain to minimize VAT pre-financing.',
    potentialSavings: '€5,800/year',
    complexity: 'High'
  }, {
    title: 'Explore VAT Grouping',
    description: 'VAT grouping could eliminate VAT on intra-group transactions in the Netherlands.',
    potentialSavings: '€2,400/year',
    complexity: 'Low'
  }];
  const handleInvoiceClick = invoice => {
    setSelectedInvoice(invoice);
  };
  const closeInvoiceModal = () => {
    setSelectedInvoice(null);
  };
  // Sample company profiles for Objection Letters component
  const companyProfiles = [{
    id: 'base',
    name: 'Tech Innovations Ltd',
    country: 'United Kingdom',
    taxId: 'GB123456789'
  }, {
    id: 'nl',
    name: 'Tech Innovations Netherlands B.V.',
    country: 'Netherlands',
    taxId: 'NL123456789B01'
  }];
  const renderContent = () => {
    switch (activeTab) {
      case 'taxReturn':
        return renderTaxReturnContent();
      case 'objections':
        return <ObjectionLetters companyProfiles={companyProfiles} />;
      case 'calculations':
        return <div className="bg-indigo-800/20 backdrop-blur-md rounded-xl border border-indigo-500/20 p-5 mb-6">
            <h3 className="text-lg font-medium text-white mb-4">
              Tax Calculations
            </h3>
            <p className="text-indigo-300 mb-6">
              Use our tax calculators to estimate your tax liabilities and plan
              accordingly.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-indigo-800/30 backdrop-blur-md rounded-xl border border-indigo-500/20 p-5 hover:bg-indigo-700/30 transition-colors">
                <h4 className="text-lg font-medium text-white mb-2">
                  Corporate Income Tax Calculator
                </h4>
                <p className="text-indigo-300 text-sm mb-4">
                  Calculate your estimated corporate tax liability based on your
                  projected profits.
                </p>
                <button className="px-4 py-2 bg-[#EA3A70] text-white rounded-xl hover:bg-[#EA3A70]/90 transition-colors flex items-center">
                  <CalculatorIcon className="h-4 w-4 mr-2" />
                  Open Calculator
                </button>
              </div>
              <div className="bg-indigo-800/30 backdrop-blur-md rounded-xl border border-indigo-500/20 p-5 hover:bg-indigo-700/30 transition-colors">
                <h4 className="text-lg font-medium text-white mb-2">
                  VAT Calculator
                </h4>
                <p className="text-indigo-300 text-sm mb-4">
                  Calculate VAT amounts for different transaction types and
                  jurisdictions.
                </p>
                <button className="px-4 py-2 bg-[#EA3A70] text-white rounded-xl hover:bg-[#EA3A70]/90 transition-colors flex items-center">
                  <CalculatorIcon className="h-4 w-4 mr-2" />
                  Open Calculator
                </button>
              </div>
            </div>
          </div>;
      case 'viesCheck':
        return <div className="bg-indigo-800/20 backdrop-blur-md rounded-xl border border-indigo-500/20 p-5 mb-6">
            <h3 className="text-lg font-medium text-white mb-4">
              VIES VAT Number Validation
            </h3>
            <p className="text-indigo-300 mb-6">
              Validate EU VAT numbers using the VAT Information Exchange System
              (VIES).
            </p>
            <div className="bg-indigo-800/30 backdrop-blur-md rounded-xl border border-indigo-500/20 p-5 mb-6">
              <div className="space-y-4">
                <div>
                  <label htmlFor="vatNumber" className="block text-sm font-medium text-indigo-300 mb-1">
                    VAT Number
                  </label>
                  <div className="flex">
                    <input type="text" id="vatNumber" placeholder="e.g. NL123456789B01" className="flex-1 bg-indigo-900/50 border border-indigo-500/20 rounded-l-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-[#EA3A70]" />
                    <button className="px-4 py-2 bg-[#EA3A70] text-white rounded-r-lg hover:bg-[#EA3A70]/90 transition-colors">
                      Validate
                    </button>
                  </div>
                </div>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between bg-indigo-900/40 p-4 rounded-lg">
                  <div className="mb-2 md:mb-0">
                    <span className="text-sm text-indigo-300">
                      Recent checks:
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <button className="px-3 py-1 bg-indigo-800/40 text-indigo-300 rounded-lg hover:bg-indigo-700/40 text-sm">
                      NL123456789B01
                    </button>
                    <button className="px-3 py-1 bg-indigo-800/40 text-indigo-300 rounded-lg hover:bg-indigo-700/40 text-sm">
                      DE123456789
                    </button>
                    <button className="px-3 py-1 bg-indigo-800/40 text-indigo-300 rounded-lg hover:bg-indigo-700/40 text-sm">
                      FR12345678901
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-indigo-800/30 backdrop-blur-md rounded-xl border border-indigo-500/20 p-5">
              <h4 className="text-lg font-medium text-white mb-4">
                Why Validate VAT Numbers?
              </h4>
              <ul className="space-y-3 text-indigo-300">
                <li className="flex items-start">
                  <CheckCircleIcon className="h-5 w-5 text-[#EA3A70] mr-2 flex-shrink-0 mt-0.5" />
                  <span>
                    Ensure your customers' VAT numbers are valid for zero-rating
                    intra-EU supplies
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="h-5 w-5 text-[#EA3A70] mr-2 flex-shrink-0 mt-0.5" />
                  <span>
                    Avoid potential VAT liabilities from transactions with
                    invalid VAT numbers
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="h-5 w-5 text-[#EA3A70] mr-2 flex-shrink-0 mt-0.5" />
                  <span>
                    Keep records of VAT validations for tax authority audits
                  </span>
                </li>
              </ul>
            </div>
          </div>;
      default:
        return renderOverviewContent();
    }
  };
  const renderTaxReturnContent = () => {
    return <>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          {/* VAT Return Filing Panel */}
          <div className="bg-indigo-800/20 backdrop-blur-md rounded-xl border border-indigo-500/20 p-5">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-medium text-white">VAT Return</h3>
              <span className="px-3 py-1 bg-red-500/20 text-red-300 rounded-full text-xs font-medium">
                Due in 5 days
              </span>
            </div>
            <div className="space-y-3 mb-4">
              <div className="flex justify-between items-center text-sm">
                <span className="text-indigo-300">Period:</span>
                <span className="text-white">Q1 2023 (Jan-Mar)</span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-indigo-300">Status:</span>
                <span className="text-white flex items-center">
                  <span className="h-2 w-2 bg-yellow-400 rounded-full mr-2"></span>
                  In Progress
                </span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-indigo-300">Estimated VAT:</span>
                <span className="text-white">€2,450.00</span>
              </div>
            </div>
            {/* Progress bar */}
            <div className="w-full bg-indigo-900/50 rounded-full h-2 mb-4">
              <div className="bg-gradient-to-r from-indigo-500 to-[#EA3A70] h-2 rounded-full" style={{
              width: `${vatFilingProgress}%`
            }}></div>
            </div>
            <div className="flex justify-between items-center text-xs text-indigo-300 mb-5">
              <span>Data Collection</span>
              <span>Review</span>
              <span>Filing</span>
            </div>
            <div className="flex space-x-3">
              <button onClick={() => setVatTabView('analysis')} className="flex-1 px-4 py-2 bg-[#EA3A70] text-white rounded-xl hover:bg-[#EA3A70]/90 transition-colors flex items-center justify-center">
                <FileTextIcon className="h-4 w-4 mr-2" />
                Continue Preparation
              </button>
              <button onClick={() => setVatTabView('tutorial')} className="px-4 py-2 bg-indigo-800/40 border border-indigo-500/20 text-white rounded-xl hover:bg-indigo-700/40 transition-colors">
                <ArrowRightIcon className="h-4 w-4" />
              </button>
            </div>
          </div>
          {/* Corporate Tax Filing Panel */}
          <div className="bg-indigo-800/20 backdrop-blur-md rounded-xl border border-indigo-500/20 p-5">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-medium text-white">Corporate Tax</h3>
              <span className="px-3 py-1 bg-yellow-500/20 text-yellow-300 rounded-full text-xs font-medium">
                Due in 2 months
              </span>
            </div>
            <div className="space-y-3 mb-4">
              <div className="flex justify-between items-center text-sm">
                <span className="text-indigo-300">Period:</span>
                <span className="text-white">FY 2023</span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-indigo-300">Status:</span>
                <span className="text-white flex items-center">
                  <span className="h-2 w-2 bg-blue-400 rounded-full mr-2"></span>
                  Early Preparation
                </span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-indigo-300">Estimated Tax:</span>
                <span className="text-white">€18,750.00</span>
              </div>
            </div>
            {/* Progress bar */}
            <div className="w-full bg-indigo-900/50 rounded-full h-2 mb-4">
              <div className="bg-gradient-to-r from-blue-500 to-indigo-500 h-2 rounded-full" style={{
              width: `${corporateTaxFilingProgress}%`
            }}></div>
            </div>
            <div className="flex justify-between items-center text-xs text-indigo-300 mb-5">
              <span>Data Collection</span>
              <span>Financial Statements</span>
              <span>Filing</span>
            </div>
            <div className="flex space-x-3">
              <button onClick={() => setShowCorporateTaxPreparation(!showCorporateTaxPreparation)} className="flex-1 px-4 py-2 bg-indigo-800/40 border border-indigo-500/20 text-white rounded-xl hover:bg-indigo-700/40 transition-colors flex items-center justify-center">
                <FileTextIcon className="h-4 w-4 mr-2" />
                Start Preparation
              </button>
              <button className="px-4 py-2 bg-indigo-800/40 border border-indigo-500/20 text-white rounded-xl hover:bg-indigo-700/40 transition-colors">
                <ArrowRightIcon className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
        {vatTabView !== '' && <div className="bg-indigo-800/20 backdrop-blur-md rounded-xl border border-indigo-500/20 p-5 mb-6">
            <div className="flex justify-between items-center mb-6">
              <div>
                <h2 className="text-xl font-bold text-white">
                  VAT Return Preparation
                </h2>
                <p className="text-indigo-300 text-sm mt-1">
                  Self-service filing assistant
                </p>
              </div>
              <div className="flex space-x-2">
                <button onClick={() => setVatTabView('analysis')} className={`px-4 py-2 rounded-lg text-sm ${vatTabView === 'analysis' ? 'bg-[#EA3A70] text-white' : 'bg-indigo-800/40 text-indigo-300 hover:bg-indigo-700/40'}`}>
                  VAT Analysis
                </button>
                <button onClick={() => setVatTabView('report')} className={`px-4 py-2 rounded-lg text-sm ${vatTabView === 'report' ? 'bg-[#EA3A70] text-white' : 'bg-indigo-800/40 text-indigo-300 hover:bg-indigo-700/40'}`}>
                  VAT Return Format
                </button>
                <button onClick={() => setVatTabView('tutorial')} className={`px-4 py-2 rounded-lg text-sm ${vatTabView === 'tutorial' ? 'bg-[#EA3A70] text-white' : 'bg-indigo-800/40 text-indigo-300 hover:bg-indigo-700/40'}`}>
                  Filing Tutorial
                </button>
                <button onClick={() => setVatTabView('optimization')} className={`px-4 py-2 rounded-lg text-sm ${vatTabView === 'optimization' ? 'bg-[#EA3A70] text-white' : 'bg-indigo-800/40 text-indigo-300 hover:bg-indigo-700/40'}`}>
                  VAT Optimization
                </button>
              </div>
            </div>
            {vatTabView === 'analysis' && <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <div className="flex items-center space-x-4">
                    <div className="relative">
                      <select value={selectedMonth} onChange={e => setSelectedMonth(e.target.value)} className="appearance-none bg-indigo-800/40 border border-indigo-500/20 text-white rounded-lg pl-4 pr-10 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500">
                        <option value="Q1 2023">Q1 2023 (Jan-Mar)</option>
                        <option value="Q2 2023">Q2 2023 (Apr-Jun)</option>
                        <option value="Q3 2023">Q3 2023 (Jul-Sep)</option>
                        <option value="Q4 2023">Q4 2023 (Oct-Dec)</option>
                      </select>
                      <ChevronDownIcon className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-indigo-300" />
                    </div>
                    <button onClick={() => setShowInvoices(!showInvoices)} className="flex items-center px-4 py-2 bg-indigo-800/40 border border-indigo-500/20 text-white rounded-lg hover:bg-indigo-700/40">
                      <EyeIcon className="h-4 w-4 mr-2" />
                      {showInvoices ? 'Hide Invoices' : 'Show Invoices'}
                    </button>
                  </div>
                  <button className="px-4 py-2 bg-indigo-800/40 border border-indigo-500/20 text-white rounded-lg hover:bg-indigo-700/40 flex items-center">
                    <DownloadIcon className="h-4 w-4 mr-2" />
                    Export Data
                  </button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-indigo-800/40 rounded-lg p-4 border border-indigo-500/20">
                    <p className="text-indigo-300 text-sm mb-1">
                      Total VAT Due
                    </p>
                    <div className="flex items-center justify-between">
                      <p className="text-2xl font-bold text-white">
                        €{vatMetrics[selectedMonth].totalVAT.toFixed(2)}
                      </p>
                      <div className={`flex items-center text-xs ${vatMetrics[selectedMonth].changeFromPrevious >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                        {vatMetrics[selectedMonth].changeFromPrevious >= 0 ? <TrendingUpIcon className="h-4 w-4 mr-1" /> : <TrendingDownIcon className="h-4 w-4 mr-1" />}
                        {Math.abs(vatMetrics[selectedMonth].changeFromPrevious)}
                        %
                      </div>
                    </div>
                  </div>
                  <div className="bg-indigo-800/40 rounded-lg p-4 border border-indigo-500/20">
                    <p className="text-indigo-300 text-sm mb-1">VAT on Sales</p>
                    <div className="flex items-center justify-between">
                      <p className="text-2xl font-bold text-[#EA3A70]">
                        €{vatMetrics[selectedMonth].vatOnSales.toFixed(2)}
                      </p>
                      <div className="px-2 py-1 bg-[#EA3A70]/20 text-[#EA3A70] rounded text-xs">
                        Outgoing
                      </div>
                    </div>
                  </div>
                  <div className="bg-indigo-800/40 rounded-lg p-4 border border-indigo-500/20">
                    <p className="text-indigo-300 text-sm mb-1">
                      VAT on Purchases
                    </p>
                    <div className="flex items-center justify-between">
                      <p className="text-2xl font-bold text-blue-400">
                        €{vatMetrics[selectedMonth].vatOnPurchases.toFixed(2)}
                      </p>
                      <div className="px-2 py-1 bg-blue-500/20 text-blue-400 rounded text-xs">
                        Incoming
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-indigo-800/40 rounded-lg p-4 border border-indigo-500/20">
                  <h4 className="text-white font-medium mb-4">
                    Monthly VAT Breakdown
                  </h4>
                  <div className="h-64 bg-indigo-800/30 rounded-lg p-4 flex items-center justify-center">
                    <div className="w-full h-full flex">
                      <div className="flex-1 flex flex-col justify-end">
                        <div className="bg-[#EA3A70] h-[60%] w-full rounded-t-lg"></div>
                        <p className="text-center text-xs text-indigo-300 mt-2">
                          Jan
                        </p>
                      </div>
                      <div className="flex-1 flex flex-col justify-end ml-2">
                        <div className="bg-[#EA3A70] h-[70%] w-full rounded-t-lg"></div>
                        <p className="text-center text-xs text-indigo-300 mt-2">
                          Feb
                        </p>
                      </div>
                      <div className="flex-1 flex flex-col justify-end ml-2">
                        <div className="bg-[#EA3A70] h-[80%] w-full rounded-t-lg"></div>
                        <p className="text-center text-xs text-indigo-300 mt-2">
                          Mar
                        </p>
                      </div>
                      <div className="flex-1 flex flex-col justify-end ml-2">
                        <div className="bg-indigo-500/30 h-[65%] w-full rounded-t-lg"></div>
                        <p className="text-center text-xs text-indigo-300 mt-2">
                          Apr
                        </p>
                      </div>
                      <div className="flex-1 flex flex-col justify-end ml-2">
                        <div className="bg-indigo-500/30 h-[75%] w-full rounded-t-lg"></div>
                        <p className="text-center text-xs text-indigo-300 mt-2">
                          May
                        </p>
                      </div>
                      <div className="flex-1 flex flex-col justify-end ml-2">
                        <div className="bg-indigo-500/30 h-[90%] w-full rounded-t-lg"></div>
                        <p className="text-center text-xs text-indigo-300 mt-2">
                          Jun
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                {showInvoices && <div className="bg-indigo-800/40 rounded-lg p-4 border border-indigo-500/20">
                    <h4 className="text-white font-medium mb-4">
                      Invoice Details (Single Source of Truth)
                    </h4>
                    <div className="overflow-x-auto">
                      <table className="min-w-full divide-y divide-indigo-500/30">
                        <thead>
                          <tr>
                            <th className="px-3 py-2 text-left text-xs font-medium text-indigo-300 uppercase tracking-wider">
                              Invoice ID
                            </th>
                            <th className="px-3 py-2 text-left text-xs font-medium text-indigo-300 uppercase tracking-wider">
                              Date
                            </th>
                            <th className="px-3 py-2 text-left text-xs font-medium text-indigo-300 uppercase tracking-wider">
                              Amount
                            </th>
                            <th className="px-3 py-2 text-left text-xs font-medium text-indigo-300 uppercase tracking-wider">
                              VAT
                            </th>
                            <th className="px-3 py-2 text-left text-xs font-medium text-indigo-300 uppercase tracking-wider">
                              Type
                            </th>
                            <th className="px-3 py-2 text-left text-xs font-medium text-indigo-300 uppercase tracking-wider">
                              Country
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
                              <td className="px-3 py-2 text-sm text-white">
                                €{transaction.vat.toLocaleString()}
                              </td>
                              <td className="px-3 py-2 text-sm text-indigo-200">
                                {transaction.type}
                              </td>
                              <td className="px-3 py-2 text-sm text-indigo-200">
                                {transaction.country}
                              </td>
                            </tr>)}
                        </tbody>
                      </table>
                    </div>
                  </div>}
              </div>}
            {vatTabView === 'report' && <VATReturnReport vatReturnData={vatReturnData} />}
            {vatTabView === 'tutorial' && <VATFilingTutorial />}
            {vatTabView === 'optimization' && <div className="space-y-6">
                <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-xl p-6 text-white shadow-lg relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full transform translate-x-20 -translate-y-20 blur-xl"></div>
                  <div className="absolute bottom-0 left-0 w-40 h-40 bg-white/5 rounded-full transform -translate-x-20 translate-y-20 blur-xl"></div>
                  <div className="relative">
                    <h3 className="text-xl font-semibold mb-3">
                      VAT Optimization Opportunities
                    </h3>
                    <p className="text-white/80 mb-4">
                      Based on your VAT profile and transaction patterns, we've
                      identified several opportunities to optimize your VAT
                      position:
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                      {vatOptimizations.map((opt, index) => <div key={index} className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                          <h4 className="font-medium text-white mb-2">
                            {opt.title}
                          </h4>
                          <p className="text-sm text-white/80 mb-3">
                            {opt.description}
                          </p>
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
                <div className="bg-indigo-800/40 rounded-lg p-4 border border-indigo-500/20">
                  <h4 className="text-white font-medium mb-4">
                    Transactions for {selectedMonth}
                  </h4>
                  <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-indigo-500/30">
                      <thead>
                        <tr>
                          <th className="px-3 py-2 text-left text-xs font-medium text-indigo-300 uppercase tracking-wider">
                            Invoice ID
                          </th>
                          <th className="px-3 py-2 text-left text-xs font-medium text-indigo-300 uppercase tracking-wider">
                            Date
                          </th>
                          <th className="px-3 py-2 text-left text-xs font-medium text-indigo-300 uppercase tracking-wider">
                            Amount
                          </th>
                          <th className="px-3 py-2 text-left text-xs font-medium text-indigo-300 uppercase tracking-wider">
                            VAT
                          </th>
                          <th className="px-3 py-2 text-left text-xs font-medium text-indigo-300 uppercase tracking-wider">
                            Type
                          </th>
                          <th className="px-3 py-2 text-left text-xs font-medium text-indigo-300 uppercase tracking-wider">
                            Country
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
                            <td className="px-3 py-2 text-sm text-white">
                              €{transaction.vat.toLocaleString()}
                            </td>
                            <td className="px-3 py-2 text-sm text-indigo-200">
                              {transaction.type}
                            </td>
                            <td className="px-3 py-2 text-sm text-indigo-200">
                              {transaction.country}
                            </td>
                          </tr>)}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>}
          </div>}
      </>;
  };
  const renderOverviewContent = () => {
    return <>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-indigo-800/20 backdrop-blur-md rounded-xl border border-indigo-500/20 p-5">
            <h3 className="text-lg font-medium text-white mb-4">
              Quick Actions
            </h3>
            <div className="space-y-3">
              <button className="w-full px-4 py-3 bg-indigo-800/40 border border-indigo-500/20 text-white rounded-xl hover:bg-indigo-700/40 transition-colors flex items-center justify-between">
                <div className="flex items-center">
                  <DownloadIcon className="h-4 w-4 mr-3 text-indigo-300" />
                  <span>Download Tax Certificates</span>
                </div>
                <ChevronRightIcon className="h-4 w-4 text-indigo-300" />
              </button>
              <button className="w-full px-4 py-3 bg-indigo-800/40 border border-indigo-500/20 text-white rounded-xl hover:bg-indigo-700/40 transition-colors flex items-center justify-between">
                <div className="flex items-center">
                  <CalculatorIcon className="h-4 w-4 mr-3 text-indigo-300" />
                  <span>Tax Calculator</span>
                </div>
                <ChevronRightIcon className="h-4 w-4 text-indigo-300" />
              </button>
              <button className="w-full px-4 py-3 bg-indigo-800/40 border border-indigo-500/20 text-white rounded-xl hover:bg-indigo-700/40 transition-colors flex items-center justify-between">
                <div className="flex items-center">
                  <PiggyBankIcon className="h-4 w-4 mr-3 text-indigo-300" />
                  <span>Tax Optimization Report</span>
                </div>
                <ChevronRightIcon className="h-4 w-4 text-indigo-300" />
              </button>
            </div>
          </div>
          <div className="bg-indigo-800/20 backdrop-blur-md rounded-xl border border-indigo-500/20 p-5">
            <h3 className="text-lg font-medium text-white mb-4 flex items-center">
              <InfoIcon className="h-5 w-5 mr-2 text-indigo-300" />
              Tax Optimization Opportunities
            </h3>
            <div className="space-y-4">
              <div className="p-3 bg-indigo-800/30 rounded-lg border border-indigo-500/20">
                <div className="flex items-center mb-2">
                  <div className="h-8 w-8 rounded-full bg-green-500/20 flex items-center justify-center mr-2">
                    <CheckCircleIcon className="h-4 w-4 text-green-300" />
                  </div>
                  <h4 className="font-medium text-white">R&D Tax Credits</h4>
                </div>
                <p className="text-xs text-indigo-300 mb-2">
                  Your software development activities may qualify for WBSO R&D
                  tax credits.
                </p>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-indigo-300">Potential savings:</span>
                  <span className="text-green-300 font-medium">€12,500</span>
                </div>
              </div>
              <div className="p-3 bg-indigo-800/30 rounded-lg border border-indigo-500/20">
                <div className="flex items-center mb-2">
                  <div className="h-8 w-8 rounded-full bg-green-500/20 flex items-center justify-center mr-2">
                    <CheckCircleIcon className="h-4 w-4 text-green-300" />
                  </div>
                  <h4 className="font-medium text-white">VAT Reclaim</h4>
                </div>
                <p className="text-xs text-indigo-300 mb-2">
                  You have unclaimed VAT on international business expenses.
                </p>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-indigo-300">Potential savings:</span>
                  <span className="text-green-300 font-medium">€3,750</span>
                </div>
              </div>
            </div>
            <button className="w-full mt-4 px-4 py-2 bg-[#EA3A70] text-white rounded-xl hover:bg-[#EA3A70]/90 transition-colors flex items-center justify-center">
              View All Opportunities
              <ArrowRightIcon className="h-4 w-4 ml-2" />
            </button>
          </div>
        </div>
      </>;
  };
  const CorporateTaxFilingTutorial = ({
    taxData
  }) => {
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
          <button onClick={() => setShowCorporateTaxPreparation(false)} className="text-indigo-300 hover:text-white">
            <XIcon className="h-5 w-5" />
          </button>
        </div>
        <div className="space-y-6">
          <div className="p-3 bg-indigo-800/30 rounded-lg border border-indigo-500/20">
            <div className="flex items-center mb-2">
              <div className="h-8 w-8 rounded-full bg-green-500/20 flex items-center justify-center mr-2">
                <CheckCircleIcon className="h-4 w-4 text-green-300" />
              </div>
              <h4 className="font-medium text-white">R&D Tax Credits</h4>
            </div>
            <p className="text-xs text-indigo-300 mb-2">
              Your software development activities may qualify for WBSO R&D tax
              credits.
            </p>
            <div className="flex justify-between items-center text-sm">
              <span className="text-indigo-300">Potential savings:</span>
              <span className="text-green-300 font-medium">€12,500</span>
            </div>
          </div>
          <div className="p-3 bg-indigo-800/30 rounded-lg border border-indigo-500/20">
            <div className="flex items-center mb-2">
              <div className="h-8 w-8 rounded-full bg-green-500/20 flex items-center justify-center mr-2">
                <CheckCircleIcon className="h-4 w-4 text-green-300" />
              </div>
              <h4 className="font-medium text-white">VAT Reclaim</h4>
            </div>
            <p className="text-xs text-indigo-300 mb-2">
              You have unclaimed VAT on international business expenses.
            </p>
            <div className="flex justify-between items-center text-sm">
              <span className="text-indigo-300">Potential savings:</span>
              <span className="text-green-300 font-medium">€3,750</span>
            </div>
          </div>
          <div className="p-3 bg-indigo-800/30 rounded-lg border border-indigo-500/20">
            <div className="flex items-center mb-2">
              <div className="h-8 w-8 rounded-full bg-green-500/20 flex items-center justify-center mr-2">
                <CheckCircleIcon className="h-4 w-4 text-green-300" />
              </div>
              <h4 className="font-medium text-white">Tax Deductions</h4>
            </div>
            <p className="text-xs text-indigo-300 mb-2">
              Explore various tax deductions available to reduce your tax
              liability.
            </p>
            <div className="flex justify-between items-center text-sm">
              <span className="text-indigo-300">Potential savings:</span>
              <span className="text-green-300 font-medium">€5,000</span>
            </div>
          </div>
          <div className="p-3 bg-indigo-800/30 rounded-lg border border-indigo-500/20">
            <div className="flex items-center mb-2">
              <div className="h-8 w-8 rounded-full bg-green-500/20 flex items-center justify-center mr-2">
                <CheckCircleIcon className="h-4 w-4 text-green-300" />
              </div>
              <h4 className="font-medium text-white">Tax Planning</h4>
            </div>
            <p className="text-xs text-indigo-300 mb-2">
              Develop a tax planning strategy to optimize your tax position.
            </p>
            <div className="flex justify-between items-center text-sm">
              <span className="text-indigo-300">Potential savings:</span>
              <span className="text-green-300 font-medium">€10,000</span>
            </div>
          </div>
        </div>
      </div>;
  };
  return <div className="bg-[#0A0826] p-6">
      {/* Replace CompanyHeader with PageHeader */}
      <PageHeader title="Tax Management" subtitle="Private Limited Company • Active" icon={<FileTextIcon className="h-8 w-8 text-indigo-300" />} menuItems={menuItems} onEditClick={() => console.log('Edit clicked')} />
      {renderContent()}
      {selectedInvoice && <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
          <div className="bg-indigo-900/90 backdrop-blur-md rounded-2xl border border-indigo-500/30 p-6 max-w-2xl w-full">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-bold text-white">Invoice Details</h3>
              <button onClick={closeInvoiceModal} className="text-indigo-300 hover:text-white">
                <XIcon className="h-5 w-5" />
              </button>
            </div>
            <div className="grid grid-cols-2 gap-6 mb-6">
              <div>
                <p className="text-indigo-300 text-sm mb-1">Invoice Number</p>
                <p className="text-white font-medium">
                  {selectedInvoice.invoiceNumber}
                </p>
              </div>
              <div>
                <p className="text-indigo-300 text-sm mb-1">Date</p>
                <p className="text-white font-medium">
                  {new Date(selectedInvoice.date).toLocaleDateString()}
                </p>
              </div>
              <div>
                <p className="text-indigo-300 text-sm mb-1">Customer</p>
                <p className="text-white font-medium">
                  {selectedInvoice.customer}
                </p>
              </div>
              <div>
                <p className="text-indigo-300 text-sm mb-1">Country</p>
                <p className="text-white font-medium">
                  {selectedInvoice.country}
                </p>
              </div>
              <div>
                <p className="text-indigo-300 text-sm mb-1">Transaction Type</p>
                <p className="text-white font-medium">{selectedInvoice.type}</p>
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
                <p className="text-indigo-300">Subtotal</p>
                <p className="text-white">
                  €{selectedInvoice.amount.toLocaleString()}
                </p>
              </div>
              <div className="flex justify-between items-center mb-3">
                <p className="text-indigo-300">
                  VAT ({selectedInvoice.vat > 0 ? '21%' : '0%'})
                </p>
                <p className="text-white">
                  €{selectedInvoice.vat.toLocaleString()}
                </p>
              </div>
              <div className="flex justify-between items-center pt-3 border-t border-indigo-500/30">
                <p className="text-white font-medium">Total</p>
                <p className="text-xl font-bold text-white">
                  €
                  {(selectedInvoice.amount + selectedInvoice.vat).toLocaleString()}
                </p>
              </div>
            </div>
            <div className="flex justify-end space-x-3">
              <button onClick={closeInvoiceModal} className="px-4 py-2 bg-indigo-800/40 border border-indigo-500/20 text-white rounded-xl hover:bg-indigo-700/40 transition-colors">
                Close
              </button>
              <button className="px-4 py-2 bg-[#EA3A70] text-white rounded-xl hover:bg-[#EA3A70]/90 transition-colors flex items-center">
                <DownloadIcon className="h-4 w-4 mr-2" />
                Download Invoice
              </button>
            </div>
          </div>
        </div>}
      {showCorporateTaxPreparation && <CorporateTaxFilingWorkflow onClose={() => setShowCorporateTaxPreparation(false)} />}
    </div>;
}