import React from 'react';
import { Link } from 'react-router-dom';
import { MainLayout } from '../../components/layout/MainLayout';
import { FileTextIcon, ArrowRightIcon, CheckIcon, ClockIcon, ShieldIcon, CalendarIcon, BookOpenIcon, BuildingIcon, UserIcon, GlobeIcon, AlertTriangleIcon, ScrollIcon, HeadphonesIcon, RefreshCwIcon, LockIcon, ShareIcon, LayoutIcon } from 'lucide-react';
import { DocumentManager } from '../../components/corporate/DocumentManager';
import { ComplianceCalendar } from '../../components/corporate/ComplianceCalendar';
import { CorporateChangesTracker } from '../../components/corporate/CorporateChangesTracker';
import { KYCProfileSharing } from '../../components/corporate/KYCProfileSharing';
import { SupportFeatures } from '../../components/corporate/SupportFeatures';
export function CorporateSecretaryPage() {
  return <MainLayout>
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 bg-cover bg-center" style={{
        backgroundImage: `url(https://uploadthingy.s3.us-west-1.amazonaws.com/ekG5vQ4s8AbRuQ6q8ygYyk/corporate_secretary.jpg)`,
        filter: 'brightness(0.2)'
      }}></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0826]/90 to-[#0A0826]/80"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <div>
              <div className="flex items-center mb-2">
                <FileTextIcon className="h-6 w-6 text-[#EA3A70] mr-2" />
                <span className="text-indigo-300 text-sm font-medium">
                  Corporate Governance
                </span>
              </div>
              <h1 className="text-4xl font-bold text-white mb-4">
                Corporate Secretary Services
              </h1>
              <p className="text-xl text-indigo-200 max-w-2xl">
                Professional corporate governance and compliance management for
                your Dutch business entity
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row md:items-center gap-4 mt-8">
            <Link to="/portal/corporate-secretary" className="px-6 py-3 bg-[#EA3A70] hover:bg-[#EA3A70]/90 text-white rounded-lg shadow-lg shadow-[#EA3A70]/20 font-medium flex items-center justify-center">
              Get Started
              <ArrowRightIcon className="h-5 w-5 ml-2" />
            </Link>
            <Link to="/pricing" className="px-6 py-3 bg-indigo-900/50 text-white border border-indigo-500/30 rounded-lg hover:bg-indigo-800/50 transition-colors font-medium flex items-center justify-center">
              View Pricing
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-12">
            <div className="bg-indigo-900/30 backdrop-blur-sm rounded-xl border border-indigo-500/30 p-4 flex items-center">
              <div className="p-2 bg-indigo-900/50 rounded-lg mr-3">
                <ScrollIcon className="h-5 w-5 text-[#EA3A70]" />
              </div>
              <div>
                <h3 className="text-white font-medium">Legal Compliance</h3>
                <p className="text-indigo-300 text-sm">
                  Statutory requirements
                </p>
              </div>
            </div>
            <div className="bg-indigo-900/30 backdrop-blur-sm rounded-xl border border-indigo-500/30 p-4 flex items-center">
              <div className="p-2 bg-indigo-900/50 rounded-lg mr-3">
                <BuildingIcon className="h-5 w-5 text-[#EA3A70]" />
              </div>
              <div>
                <h3 className="text-white font-medium">Entity Management</h3>
                <p className="text-indigo-300 text-sm">Corporate maintenance</p>
              </div>
            </div>
            <div className="bg-indigo-900/30 backdrop-blur-sm rounded-xl border border-indigo-500/30 p-4 flex items-center">
              <div className="p-2 bg-indigo-900/50 rounded-lg mr-3">
                <CalendarIcon className="h-5 w-5 text-[#EA3A70]" />
              </div>
              <div>
                <h3 className="text-white font-medium">Compliance Calendar</h3>
                <p className="text-indigo-300 text-sm">Never miss deadlines</p>
              </div>
            </div>
            <div className="bg-indigo-900/30 backdrop-blur-sm rounded-xl border border-indigo-500/30 p-4 flex items-center">
              <div className="p-2 bg-indigo-900/50 rounded-lg mr-3">
                <BookOpenIcon className="h-5 w-5 text-[#EA3A70]" />
              </div>
              <div>
                <h3 className="text-white font-medium">Corporate Governance</h3>
                <p className="text-indigo-300 text-sm">Best practices</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Document Management Section */}
      <section className="py-16 bg-[#0F0B1F]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center p-3 bg-indigo-900/50 rounded-lg border border-indigo-500/30 mb-4">
              <FileTextIcon className="h-8 w-8 text-[#EA3A70]" />
            </div>
            <h2 className="text-3xl font-bold text-white mb-4">
              Statutory Document Management
            </h2>
            <p className="text-xl text-indigo-200 max-w-3xl mx-auto">
              Organize, store, and manage all your corporate documents in one
              secure location
            </p>
          </div>
          <DocumentManager />
        </div>
      </section>
      {/* Compliance Calendar Section */}
      <section className="py-16 bg-[#0A0826]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center p-3 bg-indigo-900/50 rounded-lg border border-indigo-500/30 mb-4">
              <CalendarIcon className="h-8 w-8 text-[#EA3A70]" />
            </div>
            <h2 className="text-3xl font-bold text-white mb-4">
              Corporate & Trust Calendar
            </h2>
            <p className="text-xl text-indigo-200 max-w-3xl mx-auto">
              Never miss important deadlines with our comprehensive compliance
              calendar
            </p>
          </div>
          <ComplianceCalendar />
        </div>
      </section>
      {/* Corporate Changes Section */}
      <section className="py-16 bg-[#0F0B1F]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center p-3 bg-indigo-900/50 rounded-lg border border-indigo-500/30 mb-4">
              <LayoutIcon className="h-8 w-8 text-[#EA3A70]" />
            </div>
            <h2 className="text-3xl font-bold text-white mb-4">
              Online Tracking of Corporate Changes
            </h2>
            <p className="text-xl text-indigo-200 max-w-3xl mx-auto">
              Monitor and manage corporate changes with real-time status updates
            </p>
          </div>
          <CorporateChangesTracker />
        </div>
      </section>
      {/* KYC Profile Sharing Section */}
      <section className="py-16 bg-[#0A0826]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center p-3 bg-indigo-900/50 rounded-lg border border-indigo-500/30 mb-4">
              <ShareIcon className="h-8 w-8 text-[#EA3A70]" />
            </div>
            <h2 className="text-3xl font-bold text-white mb-4">
              KYC Profile Sharing
            </h2>
            <p className="text-xl text-indigo-200 max-w-3xl mx-auto">
              Securely share your KYC information with third parties while
              maintaining control
            </p>
          </div>
          <KYCProfileSharing />
        </div>
      </section>
      {/* Support & Legal Updates Section */}
      <section className="py-16 bg-[#0F0B1F]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center p-3 bg-indigo-900/50 rounded-lg border border-indigo-500/30 mb-4">
              <HeadphonesIcon className="h-8 w-8 text-[#EA3A70]" />
            </div>
            <h2 className="text-3xl font-bold text-white mb-4">
              24/7 Support & Legal Updates
            </h2>
            <p className="text-xl text-indigo-200 max-w-3xl mx-auto">
              Round-the-clock assistance and continuous legal monitoring to keep
              you compliant
            </p>
          </div>
          <SupportFeatures />
        </div>
      </section>
      {/* Services Section */}
      <section className="py-16 bg-[#0A0826]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Comprehensive Corporate Secretary Solutions
            </h2>
            <p className="text-xl text-indigo-200 max-w-3xl mx-auto">
              Maintain legal compliance and proper corporate governance for your
              Dutch entity
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#1B1537]/80 backdrop-blur-sm rounded-xl border border-[#2D2755] p-6 hover:border-[#EA3A70]/50 transition-all">
              <div className="p-3 rounded-lg bg-[#2D2755]/50 border border-[#2D2755] mb-4 inline-block">
                <FileTextIcon className="h-6 w-6 text-[#EA3A70]" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                Statutory Compliance
              </h3>
              <p className="text-gray-300 mb-4">
                Ensure your Dutch entity meets all legal and regulatory
                requirements under Dutch law.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckIcon className="h-5 w-5 text-green-400 mr-2 mt-0.5" />
                  <span className="text-indigo-200">
                    KVK (Chamber of Commerce) filings
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckIcon className="h-5 w-5 text-green-400 mr-2 mt-0.5" />
                  <span className="text-indigo-200">
                    UBO registry maintenance
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckIcon className="h-5 w-5 text-green-400 mr-2 mt-0.5" />
                  <span className="text-indigo-200">
                    Annual accounts filing
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckIcon className="h-5 w-5 text-green-400 mr-2 mt-0.5" />
                  <span className="text-indigo-200">
                    Statutory books maintenance
                  </span>
                </li>
              </ul>
            </div>
            <div className="bg-[#1B1537]/80 backdrop-blur-sm rounded-xl border border-[#2D2755] p-6 hover:border-[#EA3A70]/50 transition-all">
              <div className="p-3 rounded-lg bg-[#2D2755]/50 border border-[#2D2755] mb-4 inline-block">
                <BuildingIcon className="h-6 w-6 text-[#EA3A70]" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                Corporate Governance
              </h3>
              <p className="text-gray-300 mb-4">
                Establish and maintain proper corporate governance structures
                and processes.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckIcon className="h-5 w-5 text-green-400 mr-2 mt-0.5" />
                  <span className="text-indigo-200">
                    Board meeting organization
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckIcon className="h-5 w-5 text-green-400 mr-2 mt-0.5" />
                  <span className="text-indigo-200">
                    Shareholder meeting management
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckIcon className="h-5 w-5 text-green-400 mr-2 mt-0.5" />
                  <span className="text-indigo-200">Corporate resolutions</span>
                </li>
                <li className="flex items-start">
                  <CheckIcon className="h-5 w-5 text-green-400 mr-2 mt-0.5" />
                  <span className="text-indigo-200">Minutes of meetings</span>
                </li>
              </ul>
            </div>
            <div className="bg-[#1B1537]/80 backdrop-blur-sm rounded-xl border border-[#2D2755] p-6 hover:border-[#EA3A70]/50 transition-all">
              <div className="p-3 rounded-lg bg-[#2D2755]/50 border border-[#2D2755] mb-4 inline-block">
                <UserIcon className="h-6 w-6 text-[#EA3A70]" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                Director Services
              </h3>
              <p className="text-gray-300 mb-4">
                Professional support for your company's directors and officers.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckIcon className="h-5 w-5 text-green-400 mr-2 mt-0.5" />
                  <span className="text-indigo-200">
                    Director appointments & resignations
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckIcon className="h-5 w-5 text-green-400 mr-2 mt-0.5" />
                  <span className="text-indigo-200">
                    Power of attorney management
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckIcon className="h-5 w-5 text-green-400 mr-2 mt-0.5" />
                  <span className="text-indigo-200">
                    Director compliance training
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckIcon className="h-5 w-5 text-green-400 mr-2 mt-0.5" />
                  <span className="text-indigo-200">
                    Fiduciary duty guidance
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* Advanced Services Section */}
      <section className="py-16 bg-[#0F0B1F]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Specialized Corporate Services
            </h2>
            <p className="text-xl text-indigo-200 max-w-3xl mx-auto">
              Additional corporate support for your business operations
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-indigo-900/30 backdrop-blur-sm rounded-xl border border-indigo-500/30 p-6">
              <div className="p-3 rounded-lg bg-indigo-900/50 border border-indigo-500/30 mb-4 inline-block">
                <GlobeIcon className="h-6 w-6 text-[#EA3A70]" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                International Entity Management
              </h3>
              <p className="text-indigo-200 mb-4">
                Coordinated management of your corporate entities across
                multiple jurisdictions.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckIcon className="h-5 w-5 text-green-400 mr-2 mt-0.5" />
                  <span className="text-white">
                    Multi-jurisdiction compliance
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckIcon className="h-5 w-5 text-green-400 mr-2 mt-0.5" />
                  <span className="text-white">
                    Cross-border entity coordination
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckIcon className="h-5 w-5 text-green-400 mr-2 mt-0.5" />
                  <span className="text-white">Subsidiary management</span>
                </li>
                <li className="flex items-start">
                  <CheckIcon className="h-5 w-5 text-green-400 mr-2 mt-0.5" />
                  <span className="text-white">
                    Global corporate structure optimization
                  </span>
                </li>
              </ul>
            </div>
            <div className="bg-indigo-900/30 backdrop-blur-sm rounded-xl border border-indigo-500/30 p-6">
              <div className="p-3 rounded-lg bg-indigo-900/50 border border-indigo-500/30 mb-4 inline-block">
                <RefreshCwIcon className="h-6 w-6 text-[#EA3A70]" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                Ongoing Legal Updates
              </h3>
              <p className="text-indigo-200 mb-4">
                Stay informed about the latest Dutch legal and regulatory
                changes affecting your business.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckIcon className="h-5 w-5 text-green-400 mr-2 mt-0.5" />
                  <span className="text-white">
                    Real-time regulatory alerts
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckIcon className="h-5 w-5 text-green-400 mr-2 mt-0.5" />
                  <span className="text-white">Compliance impact analysis</span>
                </li>
                <li className="flex items-start">
                  <CheckIcon className="h-5 w-5 text-green-400 mr-2 mt-0.5" />
                  <span className="text-white">Implementation guidance</span>
                </li>
                <li className="flex items-start">
                  <CheckIcon className="h-5 w-5 text-green-400 mr-2 mt-0.5" />
                  <span className="text-white">
                    Monthly compliance newsletters
                  </span>
                </li>
              </ul>
            </div>
            <div className="bg-indigo-900/30 backdrop-blur-sm rounded-xl border border-indigo-500/30 p-6">
              <div className="p-3 rounded-lg bg-indigo-900/50 border border-indigo-500/30 mb-4 inline-block">
                <AlertTriangleIcon className="h-6 w-6 text-[#EA3A70]" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                Risk Management
              </h3>
              <p className="text-indigo-200 mb-4">
                Identify and mitigate corporate governance risks before they
                become issues.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckIcon className="h-5 w-5 text-green-400 mr-2 mt-0.5" />
                  <span className="text-white">
                    Compliance risk assessments
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckIcon className="h-5 w-5 text-green-400 mr-2 mt-0.5" />
                  <span className="text-white">
                    Corporate governance reviews
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckIcon className="h-5 w-5 text-green-400 mr-2 mt-0.5" />
                  <span className="text-white">
                    Regulatory change monitoring
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckIcon className="h-5 w-5 text-green-400 mr-2 mt-0.5" />
                  <span className="text-white">Remediation planning</span>
                </li>
              </ul>
            </div>
            <div className="bg-indigo-900/30 backdrop-blur-sm rounded-xl border border-indigo-500/30 p-6">
              <div className="p-3 rounded-lg bg-indigo-900/50 border border-indigo-500/30 mb-4 inline-block">
                <HeadphonesIcon className="h-6 w-6 text-[#EA3A70]" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                24/7 Expert Support
              </h3>
              <p className="text-indigo-200 mb-4">
                Round-the-clock assistance for all your corporate governance
                needs.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckIcon className="h-5 w-5 text-green-400 mr-2 mt-0.5" />
                  <span className="text-white">Live chat support</span>
                </li>
                <li className="flex items-start">
                  <CheckIcon className="h-5 w-5 text-green-400 mr-2 mt-0.5" />
                  <span className="text-white">Global helpline</span>
                </li>
                <li className="flex items-start">
                  <CheckIcon className="h-5 w-5 text-green-400 mr-2 mt-0.5" />
                  <span className="text-white">Emergency assistance</span>
                </li>
                <li className="flex items-start">
                  <CheckIcon className="h-5 w-5 text-green-400 mr-2 mt-0.5" />
                  <span className="text-white">Dedicated account manager</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* Pricing Section */}
      <section className="py-16 bg-[#0A0826]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Transparent Pricing Plans
            </h2>
            <p className="text-xl text-indigo-200 max-w-3xl mx-auto">
              Choose the corporate secretary package that best fits your
              business needs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-indigo-900/30 backdrop-blur-sm rounded-xl border border-indigo-500/30 p-6">
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-white">Basic</h3>
                <div className="mt-4 flex items-baseline justify-center">
                  <span className="text-4xl font-bold text-white">€79</span>
                  <span className="ml-1 text-xl text-indigo-300">/month</span>
                </div>
              </div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <CheckIcon className="h-5 w-5 text-green-400 mr-2 mt-0.5" />
                  <span className="text-white">
                    Statutory compliance monitoring
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckIcon className="h-5 w-5 text-green-400 mr-2 mt-0.5" />
                  <span className="text-white">Annual KVK filings</span>
                </li>
                <li className="flex items-start">
                  <CheckIcon className="h-5 w-5 text-green-400 mr-2 mt-0.5" />
                  <span className="text-white">Basic compliance calendar</span>
                </li>
                <li className="flex items-start">
                  <CheckIcon className="h-5 w-5 text-green-400 mr-2 mt-0.5" />
                  <span className="text-white">Email support</span>
                </li>
              </ul>
              <Link to="/portal/corporate-secretary/signup?plan=basic" className="block w-full px-4 py-3 bg-indigo-900/50 border border-indigo-500/30 text-white rounded-lg hover:bg-indigo-800/50 transition-colors text-center font-medium">
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
                  <span className="text-4xl font-bold text-white">€149</span>
                  <span className="ml-1 text-xl text-indigo-300">/month</span>
                </div>
              </div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <CheckIcon className="h-5 w-5 text-green-400 mr-2 mt-0.5" />
                  <span className="text-white">All Basic features</span>
                </li>
                <li className="flex items-start">
                  <CheckIcon className="h-5 w-5 text-green-400 mr-2 mt-0.5" />
                  <span className="text-white">Document management system</span>
                </li>
                <li className="flex items-start">
                  <CheckIcon className="h-5 w-5 text-green-400 mr-2 mt-0.5" />
                  <span className="text-white">Corporate & Trust calendar</span>
                </li>
                <li className="flex items-start">
                  <CheckIcon className="h-5 w-5 text-green-400 mr-2 mt-0.5" />
                  <span className="text-white">Corporate changes tracking</span>
                </li>
                <li className="flex items-start">
                  <CheckIcon className="h-5 w-5 text-green-400 mr-2 mt-0.5" />
                  <span className="text-white">KYC profile sharing</span>
                </li>
                <li className="flex items-start">
                  <CheckIcon className="h-5 w-5 text-green-400 mr-2 mt-0.5" />
                  <span className="text-white">Phone & email support</span>
                </li>
              </ul>
              <Link to="/portal/corporate-secretary/signup?plan=business" className="block w-full px-4 py-3 bg-[#EA3A70] text-white rounded-lg hover:bg-[#EA3A70]/90 transition-colors text-center font-medium">
                Get Started
              </Link>
            </div>
            <div className="bg-indigo-900/30 backdrop-blur-sm rounded-xl border border-indigo-500/30 p-6">
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-white">Enterprise</h3>
                <div className="mt-4 flex items-baseline justify-center">
                  <span className="text-4xl font-bold text-white">€249</span>
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
                  <span className="text-white">
                    International entity management
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckIcon className="h-5 w-5 text-green-400 mr-2 mt-0.5" />
                  <span className="text-white">Risk management</span>
                </li>
                <li className="flex items-start">
                  <CheckIcon className="h-5 w-5 text-green-400 mr-2 mt-0.5" />
                  <span className="text-white">Legal entity restructuring</span>
                </li>
                <li className="flex items-start">
                  <CheckIcon className="h-5 w-5 text-green-400 mr-2 mt-0.5" />
                  <span className="text-white">24/7 priority support</span>
                </li>
                <li className="flex items-start">
                  <CheckIcon className="h-5 w-5 text-green-400 mr-2 mt-0.5" />
                  <span className="text-white">
                    Dedicated corporate secretary
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckIcon className="h-5 w-5 text-green-400 mr-2 mt-0.5" />
                  <span className="text-white">Custom legal updates</span>
                </li>
              </ul>
              <Link to="/portal/corporate-secretary/signup?plan=enterprise" className="block w-full px-4 py-3 bg-indigo-900/50 border border-indigo-500/30 text-white rounded-lg hover:bg-indigo-800/50 transition-colors text-center font-medium">
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* How It Works Section */}
      <section className="py-16 bg-[#0F0B1F]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              How Our Corporate Secretary Service Works
            </h2>
            <p className="text-xl text-indigo-200 max-w-3xl mx-auto">
              A streamlined process designed to keep your business compliant and
              well-governed
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
                Initial Assessment
              </h3>
              <p className="text-indigo-200">
                We review your corporate structure and identify compliance
                requirements
              </p>
            </div>
            <div className="bg-indigo-900/30 backdrop-blur-sm rounded-xl border border-indigo-500/30 p-6 relative">
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-[#EA3A70] rounded-full flex items-center justify-center font-bold text-white">
                2
              </div>
              <div className="p-3 rounded-lg bg-indigo-900/50 border border-indigo-500/30 mb-4 inline-block">
                <CalendarIcon className="h-6 w-6 text-[#EA3A70]" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                Compliance Calendar
              </h3>
              <p className="text-indigo-200">
                We establish a customized compliance calendar for your entity
              </p>
            </div>
            <div className="bg-indigo-900/30 backdrop-blur-sm rounded-xl border border-indigo-500/30 p-6 relative">
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-[#EA3A70] rounded-full flex items-center justify-center font-bold text-white">
                3
              </div>
              <div className="p-3 rounded-lg bg-indigo-900/50 border border-indigo-500/30 mb-4 inline-block">
                <BookOpenIcon className="h-6 w-6 text-[#EA3A70]" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                Ongoing Management
              </h3>
              <p className="text-indigo-200">
                We handle all corporate governance and compliance matters
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
                Regular Reporting
              </h3>
              <p className="text-indigo-200">
                Receive regular updates on compliance status and upcoming
                requirements
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-b from-[#0F0B1F] to-[#1B1537]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Streamline Your Corporate Governance?
          </h2>
          <p className="text-xl text-indigo-200 mb-8 max-w-3xl mx-auto">
            Get started with our corporate secretary services today and ensure
            your Dutch entity remains fully compliant.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/portal/corporate-secretary/signup" className="px-8 py-4 bg-[#EA3A70] text-white rounded-lg hover:bg-[#EA3A70]/90 transition-colors text-lg font-medium inline-flex items-center">
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