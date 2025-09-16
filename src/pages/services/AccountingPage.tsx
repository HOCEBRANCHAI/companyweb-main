import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MainLayout } from '../../components/layout/MainLayout';
import { LineChartIcon, ArrowRightIcon, CheckIcon, PercentIcon, ClockIcon, ShieldIcon, BarChart2Icon, FileTextIcon, UsersIcon, GlobeIcon, CalendarIcon, CoinsIcon, BrainCircuitIcon, ZapIcon, UploadIcon, AlertTriangleIcon, EyeIcon, DownloadIcon, SearchIcon } from 'lucide-react';
import { SimpleImage } from '../../components/common/SimpleImage';
import { AccountingAIFeatures } from '../../components/accounting/AccountingAIFeatures';
import { DocumentProcessingDemo } from '../../components/accounting/DocumentProcessingDemo';
import { TaxCalendarPreview } from '../../components/accounting/TaxCalendarPreview';
import { FinancialStatementGenerator } from '../../components/accounting/FinancialStatementGenerator';
export function AccountingPage() {
  const [activeDemo, setActiveDemo] = useState('documents');
  return <MainLayout>
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 bg-cover bg-center" style={{
        backgroundImage: `url(https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80)`,
        filter: 'brightness(0.2)'
      }}></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0826]/90 to-[#0A0826]/80"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <div className="flex flex-col md:flex-row justify-between items-center mb-6 sm:mb-8">
            <div className="w-full md:w-auto">
              <div className="flex items-center mb-2">
                <LineChartIcon className="h-5 w-5 sm:h-6 sm:w-6 text-[#EA3A70] mr-2" />
                <span className="text-indigo-300 text-sm font-medium">
                  Financial Services
                </span>
              </div>
              <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                AI-Powered Dutch Accounting
              </h1>
              <p className="text-lg sm:text-xl text-indigo-200 max-w-2xl">
                Revolutionize your financial management with intelligent
                automation and real-time insights
              </p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 mt-6 sm:mt-8">
            <Link to="/portal/accounting" className="w-full sm:w-auto px-6 py-3 bg-[#EA3A70] hover:bg-[#EA3A70]/90 text-white rounded-lg shadow-lg shadow-[#EA3A70]/20 font-medium flex items-center justify-center">
              Get Started
              <ArrowRightIcon className="h-5 w-5 ml-2" />
            </Link>
            <Link to="/pricing" className="w-full sm:w-auto px-6 py-3 bg-indigo-900/50 text-white border border-indigo-500/30 rounded-lg hover:bg-indigo-800/50 transition-colors font-medium flex items-center justify-center">
              View Pricing
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-8 sm:mt-12">
            <div className="bg-indigo-900/30 backdrop-blur-sm rounded-xl border border-indigo-500/30 p-4 flex items-center">
              <div className="p-2 bg-indigo-900/50 rounded-lg mr-3">
                <BrainCircuitIcon className="h-5 w-5 text-[#EA3A70]" />
              </div>
              <div>
                <h3 className="text-white font-medium">AI-Powered</h3>
                <p className="text-indigo-300 text-sm">
                  Intelligent automation
                </p>
              </div>
            </div>
            <div className="bg-indigo-900/30 backdrop-blur-sm rounded-xl border border-indigo-500/30 p-4 flex items-center">
              <div className="p-2 bg-indigo-900/50 rounded-lg mr-3">
                <FileTextIcon className="h-5 w-5 text-[#EA3A70]" />
              </div>
              <div>
                <h3 className="text-white font-medium">Real-time Processing</h3>
                <p className="text-indigo-300 text-sm">
                  Instant financial updates
                </p>
              </div>
            </div>
            <div className="bg-indigo-900/30 backdrop-blur-sm rounded-xl border border-indigo-500/30 p-4 flex items-center">
              <div className="p-2 bg-indigo-900/50 rounded-lg mr-3">
                <PercentIcon className="h-5 w-5 text-[#EA3A70]" />
              </div>
              <div>
                <h3 className="text-white font-medium">Tax Compliance</h3>
                <p className="text-indigo-300 text-sm">Automated tax filings</p>
              </div>
            </div>
            <div className="bg-indigo-900/30 backdrop-blur-sm rounded-xl border border-indigo-500/30 p-4 flex items-center">
              <div className="p-2 bg-indigo-900/50 rounded-lg mr-3">
                <GlobeIcon className="h-5 w-5 text-[#EA3A70]" />
              </div>
              <div>
                <h3 className="text-white font-medium">International Focus</h3>
                <p className="text-indigo-300 text-sm">
                  Cross-border expertise
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* AI Features Section */}
      <section className="py-16 bg-[#0F0B1F]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center p-3 bg-indigo-900/50 rounded-lg border border-indigo-500/30 mb-4">
              <BrainCircuitIcon className="h-8 w-8 text-[#EA3A70]" />
            </div>
            <h2 className="text-3xl font-bold text-white mb-4">
              Intelligent Accounting Solutions
            </h2>
            <p className="text-xl text-indigo-200 max-w-3xl mx-auto">
              Our AI-powered platform transforms traditional accounting with
              automation, real-time processing, and intelligent insights
            </p>
          </div>
          <AccountingAIFeatures />
        </div>
      </section>
      {/* Platform Preview Section */}
      <section className="py-16 bg-[#0A0826]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Experience Our Accounting Platform
            </h2>
            <p className="text-xl text-indigo-200 max-w-3xl mx-auto">
              See how our intelligent accounting platform streamlines your
              financial management
            </p>
          </div>
          <div className="bg-[#1B1537]/80 backdrop-blur-sm rounded-xl border border-[#2D2755] p-6 mb-10">
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <button onClick={() => setActiveDemo('documents')} className={`px-5 py-3 rounded-lg flex items-center ${activeDemo === 'documents' ? 'bg-[#EA3A70] text-white' : 'bg-indigo-900/30 text-indigo-200 border border-indigo-500/30 hover:bg-indigo-800/50'}`}>
                <UploadIcon className="h-5 w-5 mr-2" />
                Document Management
              </button>
              <button onClick={() => setActiveDemo('tax-calendar')} className={`px-5 py-3 rounded-lg flex items-center ${activeDemo === 'tax-calendar' ? 'bg-[#EA3A70] text-white' : 'bg-indigo-900/30 text-indigo-200 border border-indigo-500/30 hover:bg-indigo-800/50'}`}>
                <CalendarIcon className="h-5 w-5 mr-2" />
                Tax Calendar
              </button>
              <button onClick={() => setActiveDemo('financial-statements')} className={`px-5 py-3 rounded-lg flex items-center ${activeDemo === 'financial-statements' ? 'bg-[#EA3A70] text-white' : 'bg-indigo-900/30 text-indigo-200 border border-indigo-500/30 hover:bg-indigo-800/50'}`}>
                <FileTextIcon className="h-5 w-5 mr-2" />
                Financial Statements
              </button>
              <button onClick={() => setActiveDemo('tax-analysis')} className={`px-5 py-3 rounded-lg flex items-center ${activeDemo === 'tax-analysis' ? 'bg-[#EA3A70] text-white' : 'bg-indigo-900/30 text-indigo-200 border border-indigo-500/30 hover:bg-indigo-800/50'}`}>
                <PercentIcon className="h-5 w-5 mr-2" />
                Tax Analysis
              </button>
            </div>
            {activeDemo === 'documents' && <DocumentProcessingDemo />}
            {activeDemo === 'tax-calendar' && <TaxCalendarPreview />}
            {activeDemo === 'financial-statements' && <FinancialStatementGenerator />}
            {activeDemo === 'tax-analysis' && <div className="relative">
                <SimpleImage imageName="Corporate_Tax_Analaysis.jpg" alt="Tax Analysis Interface" className="w-full rounded-xl border border-indigo-500/30" />
                <div className="absolute top-4 right-4 flex space-x-2">
                  <button className="p-2 bg-indigo-900/70 backdrop-blur-sm text-white rounded-lg hover:bg-indigo-800 transition-colors">
                    <EyeIcon className="h-5 w-5" />
                  </button>
                  <button className="p-2 bg-indigo-900/70 backdrop-blur-sm text-white rounded-lg hover:bg-indigo-800 transition-colors">
                    <DownloadIcon className="h-5 w-5" />
                  </button>
                </div>
                <div className="absolute bottom-6 left-6 right-6 p-4 bg-indigo-900/70 backdrop-blur-sm rounded-lg border border-indigo-500/30">
                  <h3 className="text-white font-medium mb-2">
                    AI-Powered Tax Analysis
                  </h3>
                  <p className="text-indigo-200 text-sm">
                    Automatically analyze your financial data for tax
                    optimization opportunities and compliance risks
                  </p>
                </div>
              </div>}
          </div>
          <div className="text-center">
            <p className="text-indigo-200 mb-6">
              Our AI-powered accounting platform streamlines your financial
              management, providing real-time insights and ensuring compliance.
            </p>
            <Link to="/portal/accounting/signup" className="px-6 py-3 bg-[#EA3A70] text-white rounded-lg hover:bg-[#EA3A70]/90 transition-colors inline-flex items-center">
              Try It Free
              <ArrowRightIcon className="h-5 w-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>
      {/* Core Services Section */}
      <section className="py-16 bg-[#0F0B1F]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Comprehensive Accounting Solutions
            </h2>
            <p className="text-xl text-indigo-200 max-w-3xl mx-auto">
              Our AI-powered accounting module combines intelligent automation
              with expert human oversight
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#1B1537]/80 backdrop-blur-sm rounded-xl border border-[#2D2755] p-6 hover:border-[#EA3A70]/50 transition-all">
              <div className="p-3 rounded-lg bg-[#2D2755]/50 border border-[#2D2755] mb-4 inline-block">
                <BarChart2Icon className="h-6 w-6 text-[#EA3A70]" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                Automated Bookkeeping
              </h3>
              <p className="text-gray-300 mb-4">
                Our AI system automatically processes and categorizes your
                financial transactions with minimal human intervention.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckIcon className="h-5 w-5 text-green-400 mr-2 mt-0.5" />
                  <span className="text-indigo-200">
                    AI transaction categorization
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckIcon className="h-5 w-5 text-green-400 mr-2 mt-0.5" />
                  <span className="text-indigo-200">
                    Intelligent bank reconciliation
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckIcon className="h-5 w-5 text-green-400 mr-2 mt-0.5" />
                  <span className="text-indigo-200">
                    Real-time financial updates
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckIcon className="h-5 w-5 text-green-400 mr-2 mt-0.5" />
                  <span className="text-indigo-200">Anomaly detection</span>
                </li>
              </ul>
            </div>
            <div className="bg-[#1B1537]/80 backdrop-blur-sm rounded-xl border border-[#2D2755] p-6 hover:border-[#EA3A70]/50 transition-all">
              <div className="p-3 rounded-lg bg-[#2D2755]/50 border border-[#2D2755] mb-4 inline-block">
                <FileTextIcon className="h-6 w-6 text-[#EA3A70]" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                Financial Reporting
              </h3>
              <p className="text-gray-300 mb-4">
                Generate professional financial statements and reports with a
                single click, powered by our advanced AI.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckIcon className="h-5 w-5 text-green-400 mr-2 mt-0.5" />
                  <span className="text-indigo-200">
                    AI-generated financial statements
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckIcon className="h-5 w-5 text-green-400 mr-2 mt-0.5" />
                  <span className="text-indigo-200">Custom report builder</span>
                </li>
                <li className="flex items-start">
                  <CheckIcon className="h-5 w-5 text-green-400 mr-2 mt-0.5" />
                  <span className="text-indigo-200">
                    Real-time financial dashboards
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckIcon className="h-5 w-5 text-green-400 mr-2 mt-0.5" />
                  <span className="text-indigo-200">Dutch GAAP compliance</span>
                </li>
              </ul>
            </div>
            <div className="bg-[#1B1537]/80 backdrop-blur-sm rounded-xl border border-[#2D2755] p-6 hover:border-[#EA3A70]/50 transition-all">
              <div className="p-3 rounded-lg bg-[#2D2755]/50 border border-[#2D2755] mb-4 inline-block">
                <PercentIcon className="h-6 w-6 text-[#EA3A70]" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                Tax Compliance
              </h3>
              <p className="text-gray-300 mb-4">
                Stay compliant with Dutch and EU tax regulations with our
                AI-powered tax preparation and filing system.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckIcon className="h-5 w-5 text-green-400 mr-2 mt-0.5" />
                  <span className="text-indigo-200">Automated VAT returns</span>
                </li>
                <li className="flex items-start">
                  <CheckIcon className="h-5 w-5 text-green-400 mr-2 mt-0.5" />
                  <span className="text-indigo-200">
                    Corporate tax preparation
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckIcon className="h-5 w-5 text-green-400 mr-2 mt-0.5" />
                  <span className="text-indigo-200">Smart tax calendar</span>
                </li>
                <li className="flex items-start">
                  <CheckIcon className="h-5 w-5 text-green-400 mr-2 mt-0.5" />
                  <span className="text-indigo-200">AI tax optimization</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* Document Management Section */}
      <section className="py-16 bg-[#0A0826]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-indigo-900/50 text-indigo-300 mb-4">
                <UploadIcon className="h-4 w-4 mr-2" />
                Smart Document Management
              </div>
              <h2 className="text-3xl font-bold text-white mb-6">
                Intelligent Document Processing
              </h2>
              <p className="text-indigo-200 mb-6">
                Our AI system automatically extracts, categorizes, and processes
                financial data from any document format, eliminating manual data
                entry.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <div className="p-2 bg-indigo-900/50 rounded-lg border border-indigo-500/30 mr-3">
                    <ZapIcon className="h-5 w-5 text-[#EA3A70]" />
                  </div>
                  <div>
                    <h3 className="text-white font-medium mb-1">
                      Instant Data Extraction
                    </h3>
                    <p className="text-indigo-200/80 text-sm">
                      Our AI extracts relevant financial data from invoices,
                      receipts, and statements in seconds
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="p-2 bg-indigo-900/50 rounded-lg border border-indigo-500/30 mr-3">
                    <SearchIcon className="h-5 w-5 text-[#EA3A70]" />
                  </div>
                  <div>
                    <h3 className="text-white font-medium mb-1">
                      Smart Categorization
                    </h3>
                    <p className="text-indigo-200/80 text-sm">
                      Documents are automatically categorized and filed for easy
                      retrieval and audit preparation
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="p-2 bg-indigo-900/50 rounded-lg border border-indigo-500/30 mr-3">
                    <AlertTriangleIcon className="h-5 w-5 text-[#EA3A70]" />
                  </div>
                  <div>
                    <h3 className="text-white font-medium mb-1">
                      Validation & Error Detection
                    </h3>
                    <p className="text-indigo-200/80 text-sm">
                      Our AI automatically flags inconsistencies and potential
                      errors for review
                    </p>
                  </div>
                </div>
              </div>
              <Link to="/portal/accounting/documents" className="px-5 py-3 bg-indigo-900/50 text-white border border-indigo-500/30 rounded-lg hover:bg-indigo-800/50 transition-colors inline-flex items-center">
                Learn More
                <ArrowRightIcon className="h-5 w-5 ml-2" />
              </Link>
            </div>
            <div className="relative">
              <SimpleImage imageName="accounting_documents.jpg" alt="Document Management Interface" className="rounded-xl border border-indigo-500/30 shadow-xl" />
              <div className="absolute -bottom-6 -right-6 bg-[#EA3A70]/10 backdrop-blur-sm rounded-xl border border-[#EA3A70]/30 p-4 max-w-xs">
                <div className="flex items-center mb-2">
                  <BrainCircuitIcon className="h-5 w-5 text-[#EA3A70] mr-2" />
                  <h4 className="text-white font-medium">AI Processing</h4>
                </div>
                <p className="text-indigo-200 text-sm">
                  Our AI processed 247 documents this month, saving you
                  approximately 41 hours of manual work
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Advanced Services Section */}
      <section className="py-16 bg-[#0F0B1F]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Bespoke Support Services
            </h2>
            <p className="text-xl text-indigo-200 max-w-3xl mx-auto">
              Enhance your AI-powered accounting with expert human support
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-indigo-900/30 backdrop-blur-sm rounded-xl border border-indigo-500/30 p-6">
              <div className="p-3 rounded-lg bg-indigo-900/50 border border-indigo-500/30 mb-4 inline-block">
                <UsersIcon className="h-6 w-6 text-[#EA3A70]" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                Expert Accounting Support
              </h3>
              <p className="text-indigo-200 mb-4">
                Complement our AI system with dedicated human accountants for
                complex financial matters and strategic guidance.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckIcon className="h-5 w-5 text-green-400 mr-2 mt-0.5" />
                  <span className="text-white">Dedicated accountant</span>
                </li>
                <li className="flex items-start">
                  <CheckIcon className="h-5 w-5 text-green-400 mr-2 mt-0.5" />
                  <span className="text-white">Regular financial reviews</span>
                </li>
                <li className="flex items-start">
                  <CheckIcon className="h-5 w-5 text-green-400 mr-2 mt-0.5" />
                  <span className="text-white">Strategic financial advice</span>
                </li>
                <li className="flex items-start">
                  <CheckIcon className="h-5 w-5 text-green-400 mr-2 mt-0.5" />
                  <span className="text-white">
                    Complex transaction handling
                  </span>
                </li>
              </ul>
            </div>
            <div className="bg-indigo-900/30 backdrop-blur-sm rounded-xl border border-indigo-500/30 p-6">
              <div className="p-3 rounded-lg bg-indigo-900/50 border border-indigo-500/30 mb-4 inline-block">
                <CoinsIcon className="h-6 w-6 text-[#EA3A70]" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                Financial Planning & Advisory
              </h3>
              <p className="text-indigo-200 mb-4">
                Get expert guidance on financial planning, cash flow management,
                and growth strategies.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckIcon className="h-5 w-5 text-green-400 mr-2 mt-0.5" />
                  <span className="text-white">Cash flow forecasting</span>
                </li>
                <li className="flex items-start">
                  <CheckIcon className="h-5 w-5 text-green-400 mr-2 mt-0.5" />
                  <span className="text-white">Budget development</span>
                </li>
                <li className="flex items-start">
                  <CheckIcon className="h-5 w-5 text-green-400 mr-2 mt-0.5" />
                  <span className="text-white">Financial KPI monitoring</span>
                </li>
                <li className="flex items-start">
                  <CheckIcon className="h-5 w-5 text-green-400 mr-2 mt-0.5" />
                  <span className="text-white">Growth strategy consulting</span>
                </li>
              </ul>
            </div>
            <div className="bg-indigo-900/30 backdrop-blur-sm rounded-xl border border-indigo-500/30 p-6">
              <div className="p-3 rounded-lg bg-indigo-900/50 border border-indigo-500/30 mb-4 inline-block">
                <GlobeIcon className="h-6 w-6 text-[#EA3A70]" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                International Accounting
              </h3>
              <p className="text-indigo-200 mb-4">
                Specialized expertise in cross-border accounting and tax
                compliance for international businesses.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckIcon className="h-5 w-5 text-green-400 mr-2 mt-0.5" />
                  <span className="text-white">Multi-currency accounting</span>
                </li>
                <li className="flex items-start">
                  <CheckIcon className="h-5 w-5 text-green-400 mr-2 mt-0.5" />
                  <span className="text-white">Cross-border VAT handling</span>
                </li>
                <li className="flex items-start">
                  <CheckIcon className="h-5 w-5 text-green-400 mr-2 mt-0.5" />
                  <span className="text-white">
                    Transfer pricing documentation
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckIcon className="h-5 w-5 text-green-400 mr-2 mt-0.5" />
                  <span className="text-white">Global expansion support</span>
                </li>
              </ul>
            </div>
            <div className="bg-indigo-900/30 backdrop-blur-sm rounded-xl border border-indigo-500/30 p-6">
              <div className="p-3 rounded-lg bg-indigo-900/50 border border-indigo-500/30 mb-4 inline-block">
                <ShieldIcon className="h-6 w-6 text-[#EA3A70]" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                Audit & Compliance Support
              </h3>
              <p className="text-indigo-200 mb-4">
                Expert assistance with audits, compliance reviews, and
                regulatory requirements.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckIcon className="h-5 w-5 text-green-400 mr-2 mt-0.5" />
                  <span className="text-white">Audit preparation</span>
                </li>
                <li className="flex items-start">
                  <CheckIcon className="h-5 w-5 text-green-400 mr-2 mt-0.5" />
                  <span className="text-white">Compliance reviews</span>
                </li>
                <li className="flex items-start">
                  <CheckIcon className="h-5 w-5 text-green-400 mr-2 mt-0.5" />
                  <span className="text-white">Regulatory reporting</span>
                </li>
                <li className="flex items-start">
                  <CheckIcon className="h-5 w-5 text-green-400 mr-2 mt-0.5" />
                  <span className="text-white">Risk assessment</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* How It Works Section */}
      <section className="py-16 bg-[#0A0826]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              How Our AI Accounting Works
            </h2>
            <p className="text-xl text-indigo-200 max-w-3xl mx-auto">
              A streamlined process designed to make accounting simple,
              accurate, and insightful
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="bg-indigo-900/30 backdrop-blur-sm rounded-xl border border-indigo-500/30 p-6 relative">
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-[#EA3A70] rounded-full flex items-center justify-center font-bold text-white">
                1
              </div>
              <div className="p-3 rounded-lg bg-indigo-900/50 border border-indigo-500/30 mb-4 inline-block">
                <UploadIcon className="h-6 w-6 text-[#EA3A70]" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                Document Upload
              </h3>
              <p className="text-indigo-200">
                Upload financial documents or connect your bank accounts for
                automatic data import
              </p>
            </div>
            <div className="bg-indigo-900/30 backdrop-blur-sm rounded-xl border border-indigo-500/30 p-6 relative">
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-[#EA3A70] rounded-full flex items-center justify-center font-bold text-white">
                2
              </div>
              <div className="p-3 rounded-lg bg-indigo-900/50 border border-indigo-500/30 mb-4 inline-block">
                <BrainCircuitIcon className="h-6 w-6 text-[#EA3A70]" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                AI Processing
              </h3>
              <p className="text-indigo-200">
                Our AI automatically extracts, categorizes, and processes all
                financial data
              </p>
            </div>
            <div className="bg-indigo-900/30 backdrop-blur-sm rounded-xl border border-indigo-500/30 p-6 relative">
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-[#EA3A70] rounded-full flex items-center justify-center font-bold text-white">
                3
              </div>
              <div className="p-3 rounded-lg bg-indigo-900/50 border border-indigo-500/30 mb-4 inline-block">
                <BarChart2Icon className="h-6 w-6 text-[#EA3A70]" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                Financial Insights
              </h3>
              <p className="text-indigo-200">
                Get real-time financial statements, reports, and actionable
                insights
              </p>
            </div>
            <div className="bg-indigo-900/30 backdrop-blur-sm rounded-xl border border-indigo-500/30 p-6 relative">
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-[#EA3A70] rounded-full flex items-center justify-center font-bold text-white">
                4
              </div>
              <div className="p-3 rounded-lg bg-indigo-900/50 border border-indigo-500/30 mb-4 inline-block">
                <ShieldIcon className="h-6 w-6 text-[#EA3A70]" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                Compliance & Filing
              </h3>
              <p className="text-indigo-200">
                Automated tax preparation and filing keeps you compliant with
                all regulations
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-b from-[#0F0B1F] to-[#1B1537]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Transform Your Accounting with AI?
          </h2>
          <p className="text-xl text-indigo-200 mb-8 max-w-3xl mx-auto">
            Get started today and experience the power of intelligent automation
            in your financial management.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/portal/accounting/signup" className="px-8 py-4 bg-[#EA3A70] text-white rounded-lg hover:bg-[#EA3A70]/90 transition-colors text-lg font-medium inline-flex items-center">
              Get Started
              <ArrowRightIcon className="h-5 w-5 ml-2" />
            </Link>
            <Link to="/contact" className="px-8 py-4 bg-indigo-900/50 text-white border border-indigo-500/30 rounded-lg hover:bg-indigo-800/50 transition-colors text-lg font-medium inline-flex items-center">
              Schedule Demo
            </Link>
          </div>
        </div>
      </section>
    </MainLayout>;
}