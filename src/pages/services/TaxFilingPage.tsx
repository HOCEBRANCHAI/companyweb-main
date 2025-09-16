import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MainLayout } from '../../components/layout/MainLayout';
import { PercentIcon, ArrowRightIcon, CheckIcon, FileTextIcon, BarChart2Icon, GlobeIcon, CalendarIcon, BrainIcon, BookOpenIcon, MessageSquareIcon, HeadphonesIcon, SparklesIcon, LineChartIcon, UserIcon, LayoutIcon, PiggyBankIcon, LightbulbIcon, MousePointerIcon, EyeIcon, ShieldIcon } from 'lucide-react';
import { TaxAnalysisTool } from '../../components/tax/TaxAnalysisTool';
import { AITaxAgent } from '../../components/tax/AITaxAgent';
import { VATFilingTutorial } from '../../components/tax/VATFilingTutorial';
import { TaxPortalPreview } from '../../components/tax/TaxPortalPreview';
export function TaxFilingPage() {
  const [activeDemo, setActiveDemo] = useState('analysis');
  return <MainLayout>
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 bg-cover bg-center" style={{
        backgroundImage: `url(https://uploadthingy.s3.us-west-1.amazonaws.com/hgqX5ayhTi8pTSW9kNoTcz/tax_module.jpg)`,
        filter: 'brightness(0.2)'
      }}></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0826]/90 to-[#0A0826]/80"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <div className="flex flex-col md:flex-row justify-between items-center mb-6 sm:mb-8">
            <div className="w-full md:w-auto">
              <div className="flex items-center mb-2">
                <PercentIcon className="h-5 w-5 sm:h-6 sm:w-6 text-[#EA3A70] mr-2" />
                <span className="text-indigo-300 text-sm font-medium">
                  Tax Services
                </span>
              </div>
              <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Dutch Tax Filing Services
              </h1>
              <p className="text-lg sm:text-xl text-indigo-200 max-w-2xl">
                Expert tax preparation with AI-powered tools for self-service
                filing and optimization
              </p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 mt-6 sm:mt-8">
            <Link to="/portal/tax-filing" className="w-full sm:w-auto px-6 py-3 bg-[#EA3A70] hover:bg-[#EA3A70]/90 text-white rounded-lg shadow-lg shadow-[#EA3A70]/20 font-medium flex items-center justify-center">
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
                <PercentIcon className="h-5 w-5 text-[#EA3A70]" />
              </div>
              <div>
                <h3 className="text-white font-medium">VAT Returns</h3>
                <p className="text-indigo-300 text-sm">
                  Monthly, quarterly, annual
                </p>
              </div>
            </div>
            <div className="bg-indigo-900/30 backdrop-blur-sm rounded-xl border border-indigo-500/30 p-4 flex items-center">
              <div className="p-2 bg-indigo-900/50 rounded-lg mr-3">
                <FileTextIcon className="h-5 w-5 text-[#EA3A70]" />
              </div>
              <div>
                <h3 className="text-white font-medium">Corporate Tax</h3>
                <p className="text-indigo-300 text-sm">Annual declarations</p>
              </div>
            </div>
            <div className="bg-indigo-900/30 backdrop-blur-sm rounded-xl border border-indigo-500/30 p-4 flex items-center">
              <div className="p-2 bg-indigo-900/50 rounded-lg mr-3">
                <BrainIcon className="h-5 w-5 text-[#EA3A70]" />
              </div>
              <div>
                <h3 className="text-white font-medium">AI Tax Assistant</h3>
                <p className="text-indigo-300 text-sm">
                  24/7 intelligent support
                </p>
              </div>
            </div>
            <div className="bg-indigo-900/30 backdrop-blur-sm rounded-xl border border-indigo-500/30 p-4 flex items-center">
              <div className="p-2 bg-indigo-900/50 rounded-lg mr-3">
                <UserIcon className="h-5 w-5 text-[#EA3A70]" />
              </div>
              <div>
                <h3 className="text-white font-medium">Payroll Tax</h3>
                <p className="text-indigo-300 text-sm">Employee withholding</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Portal Preview Section */}
      <section className="py-16 bg-[#0F0B1F]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Experience Our Tax Portal
            </h2>
            <p className="text-xl text-indigo-200 max-w-3xl mx-auto">
              Preview how you'll analyze, file, and optimize your taxes with our
              integrated platform
            </p>
          </div>
          <div className="bg-[#1B1537]/80 backdrop-blur-sm rounded-xl border border-[#2D2755] p-6 mb-10">
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <button onClick={() => setActiveDemo('analysis')} className={`px-5 py-3 rounded-lg flex items-center ${activeDemo === 'analysis' ? 'bg-[#EA3A70] text-white' : 'bg-indigo-900/50 text-indigo-200 border border-indigo-500/30 hover:bg-indigo-800/50'}`}>
                <BarChart2Icon className="h-5 w-5 mr-2" />
                Tax Analysis Dashboard
              </button>
              <button onClick={() => setActiveDemo('filing')} className={`px-5 py-3 rounded-lg flex items-center ${activeDemo === 'filing' ? 'bg-[#EA3A70] text-white' : 'bg-indigo-900/50 text-indigo-200 border border-indigo-500/30 hover:bg-indigo-800/50'}`}>
                <LayoutIcon className="h-5 w-5 mr-2" />
                Tax Filing Interface
              </button>
              <button onClick={() => setActiveDemo('assistant')} className={`px-5 py-3 rounded-lg flex items-center ${activeDemo === 'assistant' ? 'bg-[#EA3A70] text-white' : 'bg-indigo-900/50 text-indigo-200 border border-indigo-500/30 hover:bg-indigo-800/50'}`}>
                <MessageSquareIcon className="h-5 w-5 mr-2" />
                AI Tax Assistant
              </button>
            </div>
            <TaxPortalPreview activeTab={activeDemo} />
          </div>
          <div className="text-center">
            <p className="text-indigo-200 mb-6">
              Our tax portal makes tax filing and optimization simple, secure,
              and efficient. Try it out with a free account today.
            </p>
            <Link to="/portal/tax-filing/signup" className="px-6 py-3 bg-[#EA3A70] text-white rounded-lg hover:bg-[#EA3A70]/90 transition-colors inline-flex items-center">
              Try It Free
              <ArrowRightIcon className="h-5 w-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>
      {/* Services Section */}
      <section className="py-16 bg-[#0A0826]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Comprehensive Tax Solutions
            </h2>
            <p className="text-xl text-indigo-200 max-w-3xl mx-auto">
              Stay compliant with Dutch tax regulations and optimize your tax
              position
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#1B1537]/80 backdrop-blur-sm rounded-xl border border-[#2D2755] p-6 hover:border-[#EA3A70]/50 transition-all">
              <div className="p-3 rounded-lg bg-[#2D2755]/50 border border-[#2D2755] mb-4 inline-block">
                <PercentIcon className="h-6 w-6 text-[#EA3A70]" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                VAT Filing Services
              </h3>
              <p className="text-gray-300 mb-4">
                Timely and accurate Value Added Tax (VAT) returns for your Dutch
                business operations.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckIcon className="h-5 w-5 text-green-400 mr-2 mt-0.5" />
                  <span className="text-indigo-200">Monthly VAT returns</span>
                </li>
                <li className="flex items-start">
                  <CheckIcon className="h-5 w-5 text-green-400 mr-2 mt-0.5" />
                  <span className="text-indigo-200">Quarterly VAT returns</span>
                </li>
                <li className="flex items-start">
                  <CheckIcon className="h-5 w-5 text-green-400 mr-2 mt-0.5" />
                  <span className="text-indigo-200">EU sales listings</span>
                </li>
                <li className="flex items-start">
                  <CheckIcon className="h-5 w-5 text-green-400 mr-2 mt-0.5" />
                  <span className="text-indigo-200">
                    Intrastat declarations
                  </span>
                </li>
              </ul>
            </div>
            <div className="bg-[#1B1537]/80 backdrop-blur-sm rounded-xl border border-[#2D2755] p-6 hover:border-[#EA3A70]/50 transition-all">
              <div className="p-3 rounded-lg bg-[#2D2755]/50 border border-[#2D2755] mb-4 inline-block">
                <FileTextIcon className="h-6 w-6 text-[#EA3A70]" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                Corporate Tax Filing
              </h3>
              <p className="text-gray-300 mb-4">
                Expert preparation and filing of corporate income tax returns
                for your Dutch entity.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckIcon className="h-5 w-5 text-green-400 mr-2 mt-0.5" />
                  <span className="text-indigo-200">
                    Annual corporate tax returns
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckIcon className="h-5 w-5 text-green-400 mr-2 mt-0.5" />
                  <span className="text-indigo-200">
                    Provisional tax calculations
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckIcon className="h-5 w-5 text-green-400 mr-2 mt-0.5" />
                  <span className="text-indigo-200">
                    Tax-efficient structures
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckIcon className="h-5 w-5 text-green-400 mr-2 mt-0.5" />
                  <span className="text-indigo-200">
                    Dividend withholding tax
                  </span>
                </li>
              </ul>
            </div>
            <div className="bg-[#1B1537]/80 backdrop-blur-sm rounded-xl border border-[#2D2755] p-6 hover:border-[#EA3A70]/50 transition-all">
              <div className="p-3 rounded-lg bg-[#2D2755]/50 border border-[#2D2755] mb-4 inline-block">
                <UserIcon className="h-6 w-6 text-[#EA3A70]" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                Payroll Tax Services
              </h3>
              <p className="text-gray-300 mb-4">
                Comprehensive payroll tax management for your employees in the
                Netherlands.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckIcon className="h-5 w-5 text-green-400 mr-2 mt-0.5" />
                  <span className="text-indigo-200">
                    Monthly wage tax returns
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckIcon className="h-5 w-5 text-green-400 mr-2 mt-0.5" />
                  <span className="text-indigo-200">
                    Social security compliance
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckIcon className="h-5 w-5 text-green-400 mr-2 mt-0.5" />
                  <span className="text-indigo-200">
                    30% ruling applications
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckIcon className="h-5 w-5 text-green-400 mr-2 mt-0.5" />
                  <span className="text-indigo-200">
                    Year-end tax statements
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* Features Section */}
      <section className="py-16 bg-[#0F0B1F]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Advanced Tax Features
            </h2>
            <p className="text-xl text-indigo-200 max-w-3xl mx-auto">
              Innovative tools to streamline your tax compliance and
              optimization
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-indigo-900/30 backdrop-blur-sm rounded-xl border border-indigo-500/30 p-6">
              <div className="p-3 rounded-lg bg-indigo-900/50 border border-indigo-500/30 mb-4 inline-block">
                <BarChart2Icon className="h-6 w-6 text-[#EA3A70]" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                AI-Powered Tax Analysis
              </h3>
              <p className="text-indigo-200 mb-4">
                Our intelligent tax analysis tool automatically identifies
                optimization opportunities and compliance risks.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckIcon className="h-5 w-5 text-green-400 mr-2 mt-0.5" />
                  <span className="text-white">
                    Real-time tax liability calculations
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckIcon className="h-5 w-5 text-green-400 mr-2 mt-0.5" />
                  <span className="text-white">
                    Deduction opportunity detection
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckIcon className="h-5 w-5 text-green-400 mr-2 mt-0.5" />
                  <span className="text-white">
                    Year-over-year position comparison
                  </span>
                </li>
              </ul>
            </div>
            <div className="bg-indigo-900/30 backdrop-blur-sm rounded-xl border border-indigo-500/30 p-6">
              <div className="p-3 rounded-lg bg-indigo-900/50 border border-indigo-500/30 mb-4 inline-block">
                <BookOpenIcon className="h-6 w-6 text-[#EA3A70]" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                Self-Filing Tutorials
              </h3>
              <p className="text-indigo-200 mb-4">
                Step-by-step guidance to file your own taxes with confidence.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckIcon className="h-5 w-5 text-green-400 mr-2 mt-0.5" />
                  <span className="text-white">
                    Personalized learning paths
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckIcon className="h-5 w-5 text-green-400 mr-2 mt-0.5" />
                  <span className="text-white">
                    Interactive filing workflows
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckIcon className="h-5 w-5 text-green-400 mr-2 mt-0.5" />
                  <span className="text-white">Real-time validation</span>
                </li>
              </ul>
            </div>
            <div className="bg-indigo-900/30 backdrop-blur-sm rounded-xl border border-indigo-500/30 p-6">
              <div className="p-3 rounded-lg bg-indigo-900/50 border border-indigo-500/30 mb-4 inline-block">
                <MessageSquareIcon className="h-6 w-6 text-[#EA3A70]" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                24/7 AI Tax Agent
              </h3>
              <p className="text-indigo-200 mb-4">
                Instant answers to your tax questions and assistance with
                objection letters.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckIcon className="h-5 w-5 text-green-400 mr-2 mt-0.5" />
                  <span className="text-white">
                    Dutch tax regulation expertise
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckIcon className="h-5 w-5 text-green-400 mr-2 mt-0.5" />
                  <span className="text-white">
                    Automated objection letters
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckIcon className="h-5 w-5 text-green-400 mr-2 mt-0.5" />
                  <span className="text-white">Human expert escalation</span>
                </li>
              </ul>
            </div>
            <div className="bg-indigo-900/30 backdrop-blur-sm rounded-xl border border-indigo-500/30 p-6">
              <div className="p-3 rounded-lg bg-indigo-900/50 border border-indigo-500/30 mb-4 inline-block">
                <LineChartIcon className="h-6 w-6 text-[#EA3A70]" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                Strategic Tax Planning
              </h3>
              <p className="text-indigo-200 mb-4">
                Proactive tax optimization to legally minimize your tax burden.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckIcon className="h-5 w-5 text-green-400 mr-2 mt-0.5" />
                  <span className="text-white">
                    Business structure optimization
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckIcon className="h-5 w-5 text-green-400 mr-2 mt-0.5" />
                  <span className="text-white">Multi-year tax projections</span>
                </li>
                <li className="flex items-start">
                  <CheckIcon className="h-5 w-5 text-green-400 mr-2 mt-0.5" />
                  <span className="text-white">
                    Regulatory change impact analysis
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* Premium Support Section */}
      <section className="py-16 bg-[#0A0826]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-indigo-900/40 to-[#EA3A70]/20 backdrop-blur-md rounded-xl border border-indigo-500/30 p-8">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-2/3">
                <h3 className="text-2xl font-bold text-white mb-4">
                  Premium Tax Advisory
                </h3>
                <p className="text-indigo-200 mb-6">
                  Upgrade to our premium tax support for personalized assistance
                  from experienced Dutch tax specialists.
                </p>
                <ul className="space-y-4 mb-6">
                  <li className="flex items-start">
                    <div className="p-1 bg-green-500/20 rounded-full mr-3 mt-1">
                      <CheckIcon className="h-4 w-4 text-green-400" />
                    </div>
                    <div>
                      <h4 className="text-white font-medium">
                        Dedicated Tax Advisor
                      </h4>
                      <p className="text-indigo-300 text-sm">
                        Personal tax specialist assigned to your account
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="p-1 bg-green-500/20 rounded-full mr-3 mt-1">
                      <CheckIcon className="h-4 w-4 text-green-400" />
                    </div>
                    <div>
                      <h4 className="text-white font-medium">
                        Quarterly Tax Reviews
                      </h4>
                      <p className="text-indigo-300 text-sm">
                        Regular assessment of your tax position and strategy
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="p-1 bg-green-500/20 rounded-full mr-3 mt-1">
                      <CheckIcon className="h-4 w-4 text-green-400" />
                    </div>
                    <div>
                      <h4 className="text-white font-medium">
                        Tax Authority Representation
                      </h4>
                      <p className="text-indigo-300 text-sm">
                        Direct representation in case of tax audits or inquiries
                      </p>
                    </div>
                  </li>
                </ul>
                <div className="flex items-center gap-4">
                  <span className="text-xl font-bold text-white">
                    €99/month
                  </span>
                  <Link to="/portal/tax-filing/premium" className="px-5 py-2.5 bg-[#EA3A70] hover:bg-[#EA3A70]/90 text-white rounded-lg font-medium flex items-center">
                    Upgrade to Premium
                    <ArrowRightIcon className="h-4 w-4 ml-2" />
                  </Link>
                </div>
              </div>
              <div className="md:w-1/3 flex justify-center">
                <div className="w-48 h-48 bg-gradient-to-br from-[#EA3A70] to-indigo-600 rounded-full flex items-center justify-center shadow-lg shadow-[#EA3A70]/20">
                  <div className="text-center">
                    <HeadphonesIcon className="h-16 w-16 text-white mx-auto mb-2" />
                    <p className="text-white font-bold">Premium Support</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Pricing Section */}
      <section className="py-16 bg-[#0F0B1F]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Transparent Pricing Plans
            </h2>
            <p className="text-xl text-indigo-200 max-w-3xl mx-auto">
              Choose the tax filing package that best fits your business needs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-indigo-900/30 backdrop-blur-sm rounded-xl border border-indigo-500/30 p-6">
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-white">Basic</h3>
                <div className="mt-4 flex items-baseline justify-center">
                  <span className="text-4xl font-bold text-white">€99</span>
                  <span className="ml-1 text-xl text-indigo-300">/month</span>
                </div>
              </div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <CheckIcon className="h-5 w-5 text-green-400 mr-2 mt-0.5" />
                  <span className="text-white">Quarterly VAT returns</span>
                </li>
                <li className="flex items-start">
                  <CheckIcon className="h-5 w-5 text-green-400 mr-2 mt-0.5" />
                  <span className="text-white">
                    Annual corporate tax return
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckIcon className="h-5 w-5 text-green-400 mr-2 mt-0.5" />
                  <span className="text-white">Basic tax compliance</span>
                </li>
                <li className="flex items-start">
                  <CheckIcon className="h-5 w-5 text-green-400 mr-2 mt-0.5" />
                  <span className="text-white">AI Tax Assistant (basic)</span>
                </li>
              </ul>
              <Link to="/portal/tax-filing/signup?plan=basic" className="block w-full px-4 py-3 bg-indigo-900/50 border border-indigo-500/30 text-white rounded-lg hover:bg-indigo-800/50 transition-colors text-center font-medium">
                Get Started
              </Link>
            </div>
            <div className="bg-[#EA3A70]/10 backdrop-blur-sm rounded-xl border border-[#EA3A70]/30 p-6 transform md:-translate-y-4 relative">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#EA3A70] text-white px-4 py-1 rounded-full text-sm font-medium">
                Most Popular
              </div>
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-white">Business</h3>
                <div className="mt-4 flex items-baseline justify-center">
                  <span className="text-4xl font-bold text-white">€199</span>
                  <span className="ml-1 text-xl text-indigo-300">/month</span>
                </div>
              </div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <CheckIcon className="h-5 w-5 text-green-400 mr-2 mt-0.5" />
                  <span className="text-white">Monthly VAT returns</span>
                </li>
                <li className="flex items-start">
                  <CheckIcon className="h-5 w-5 text-green-400 mr-2 mt-0.5" />
                  <span className="text-white">
                    Annual corporate tax return
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckIcon className="h-5 w-5 text-green-400 mr-2 mt-0.5" />
                  <span className="text-white">Advanced tax analysis</span>
                </li>
                <li className="flex items-start">
                  <CheckIcon className="h-5 w-5 text-green-400 mr-2 mt-0.5" />
                  <span className="text-white">AI Tax Assistant (full)</span>
                </li>
                <li className="flex items-start">
                  <CheckIcon className="h-5 w-5 text-green-400 mr-2 mt-0.5" />
                  <span className="text-white">Self-filing tutorials</span>
                </li>
              </ul>
              <Link to="/portal/tax-filing/signup?plan=business" className="block w-full px-4 py-3 bg-[#EA3A70] text-white rounded-lg hover:bg-[#EA3A70]/90 transition-colors text-center font-medium">
                Get Started
              </Link>
            </div>
            <div className="bg-indigo-900/30 backdrop-blur-sm rounded-xl border border-indigo-500/30 p-6">
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-white">Enterprise</h3>
                <div className="mt-4 flex items-baseline justify-center">
                  <span className="text-4xl font-bold text-white">€349</span>
                  <span className="ml-1 text-xl text-indigo-300">/month</span>
                </div>
              </div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <CheckIcon className="h-5 w-5 text-green-400 mr-2 mt-0.5" />
                  <span className="text-white">All Business features</span>
                </li>
                <li className="flex items-start">
                  <CheckIcon className="h-5 w-5 text-green-400 mr-2 mt-0.5" />
                  <span className="text-white">Payroll tax management</span>
                </li>
                <li className="flex items-start">
                  <CheckIcon className="h-5 w-5 text-green-400 mr-2 mt-0.5" />
                  <span className="text-white">
                    International tax optimization
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckIcon className="h-5 w-5 text-green-400 mr-2 mt-0.5" />
                  <span className="text-white">Strategic tax planning</span>
                </li>
                <li className="flex items-start">
                  <CheckIcon className="h-5 w-5 text-green-400 mr-2 mt-0.5" />
                  <span className="text-white">Dedicated tax advisor</span>
                </li>
              </ul>
              <Link to="/portal/tax-filing/signup?plan=enterprise" className="block w-full px-4 py-3 bg-indigo-900/50 border border-indigo-500/30 text-white rounded-lg hover:bg-indigo-800/50 transition-colors text-center font-medium">
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* How It Works Section */}
      <section className="py-16 bg-[#0A0826]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              How Our Tax Filing Service Works
            </h2>
            <p className="text-xl text-indigo-200 max-w-3xl mx-auto">
              A streamlined process designed to make tax compliance simple
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="bg-indigo-900/30 backdrop-blur-sm rounded-xl border border-indigo-500/30 p-6 relative">
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-[#EA3A70] rounded-full flex items-center justify-center font-bold text-white">
                1
              </div>
              <div className="p-3 rounded-lg bg-indigo-900/50 border border-indigo-500/30 mb-4 inline-block">
                <FileTextIcon className="h-6 w-6 text-[#EA3A70]" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                Data Collection
              </h3>
              <p className="text-indigo-200">
                Upload your financial documents or connect your accounting
                software
              </p>
            </div>
            <div className="bg-indigo-900/30 backdrop-blur-sm rounded-xl border border-indigo-500/30 p-6 relative">
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-[#EA3A70] rounded-full flex items-center justify-center font-bold text-white">
                2
              </div>
              <div className="p-3 rounded-lg bg-indigo-900/50 border border-indigo-500/30 mb-4 inline-block">
                <BarChart2Icon className="h-6 w-6 text-[#EA3A70]" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">AI Analysis</h3>
              <p className="text-indigo-200">
                Our AI identifies optimization opportunities and prepares your
                returns
              </p>
            </div>
            <div className="bg-indigo-900/30 backdrop-blur-sm rounded-xl border border-indigo-500/30 p-6 relative">
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-[#EA3A70] rounded-full flex items-center justify-center font-bold text-white">
                3
              </div>
              <div className="p-3 rounded-lg bg-indigo-900/50 border border-indigo-500/30 mb-4 inline-block">
                <CheckIcon className="h-6 w-6 text-[#EA3A70]" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                Review & Approve
              </h3>
              <p className="text-indigo-200">
                Review your prepared tax returns and approve them before filing
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
                Secure Filing
              </h3>
              <p className="text-indigo-200">
                We electronically file your returns with the Dutch tax
                authorities
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-b from-[#0F0B1F] to-[#1B1537]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Simplify Your Tax Compliance?
          </h2>
          <p className="text-xl text-indigo-200 mb-8 max-w-3xl mx-auto">
            Get started with our AI-powered tax filing services today and focus
            on growing your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/portal/tax-filing/signup" className="px-8 py-4 bg-[#EA3A70] text-white rounded-lg hover:bg-[#EA3A70]/90 transition-colors text-lg font-medium inline-flex items-center">
              Get Started
              <ArrowRightIcon className="h-5 w-5 ml-2" />
            </Link>
            <Link to="/contact" className="px-8 py-4 bg-indigo-900/50 text-white border border-indigo-500/30 rounded-lg hover:bg-indigo-800/50 transition-colors text-lg font-medium inline-flex items-center">
              Schedule Consultation
            </Link>
          </div>
        </div>
      </section>
    </MainLayout>;
}