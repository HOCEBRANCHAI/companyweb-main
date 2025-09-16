import React from 'react';
import { Link } from 'react-router-dom';
import { MainLayout } from '../../components/layout/MainLayout';
import { MailIcon, ArrowRightIcon, CheckIcon, GlobeIcon, ClockIcon, ShieldIcon, BuildingIcon, ScanIcon, TruckIcon, SmartphoneIcon, PackageIcon, BrainCircuitIcon, LanguagesIcon, ListIcon, FileTextIcon, AlertTriangleIcon } from 'lucide-react';
import { AIDocumentAnalyzer } from '../../components/mailbox/AIDocumentAnalyzer';
import { MailboxDemo } from '../../components/mailbox/MailboxDemo';
import { TaskIntegration } from '../../components/mailbox/TaskIntegration';
export function MailboxPage() {
  return <MainLayout>
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 bg-cover bg-center" style={{
        backgroundImage: `url(https://images.unsplash.com/photo-1565301660306-29e08751cc53?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80)`,
        filter: 'brightness(0.2)'
      }}></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0826]/90 to-[#0A0826]/80"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <div className="flex flex-col md:flex-row justify-between items-center mb-6 sm:mb-8">
            <div className="w-full md:w-auto">
              <div className="flex items-center mb-2">
                <MailIcon className="h-5 w-5 sm:h-6 sm:w-6 text-[#EA3A70] mr-2" />
                <span className="text-indigo-300 text-sm font-medium">
                  Business Address
                </span>
              </div>
              <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                AI-Powered Mailbox Service
              </h1>
              <p className="text-lg sm:text-xl text-indigo-200 max-w-2xl">
                Get a prestigious Dutch business address with intelligent mail
                processing, translation, and automated task management
              </p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 mt-6 sm:mt-8">
            <Link to="/portal/mailbox" className="w-full sm:w-auto px-6 py-3 bg-[#EA3A70] hover:bg-[#EA3A70]/90 text-white rounded-lg shadow-lg shadow-[#EA3A70]/20 font-medium flex items-center justify-center">
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
                <BuildingIcon className="h-5 w-5 text-[#EA3A70]" />
              </div>
              <div>
                <h3 className="text-white font-medium">Prestigious Address</h3>
                <p className="text-indigo-300 text-sm">
                  Prime Amsterdam location
                </p>
              </div>
            </div>
            <div className="bg-indigo-900/30 backdrop-blur-sm rounded-xl border border-indigo-500/30 p-4 flex items-center">
              <div className="p-2 bg-indigo-900/50 rounded-lg mr-3">
                <BrainCircuitIcon className="h-5 w-5 text-[#EA3A70]" />
              </div>
              <div>
                <h3 className="text-white font-medium">AI Document Analysis</h3>
                <p className="text-indigo-300 text-sm">
                  Intelligent processing
                </p>
              </div>
            </div>
            <div className="bg-indigo-900/30 backdrop-blur-sm rounded-xl border border-indigo-500/30 p-4 flex items-center">
              <div className="p-2 bg-indigo-900/50 rounded-lg mr-3">
                <LanguagesIcon className="h-5 w-5 text-[#EA3A70]" />
              </div>
              <div>
                <h3 className="text-white font-medium">Translation</h3>
                <p className="text-indigo-300 text-sm">Dutch to English</p>
              </div>
            </div>
            <div className="bg-indigo-900/30 backdrop-blur-sm rounded-xl border border-indigo-500/30 p-4 flex items-center">
              <div className="p-2 bg-indigo-900/50 rounded-lg mr-3">
                <ListIcon className="h-5 w-5 text-[#EA3A70]" />
              </div>
              <div>
                <h3 className="text-white font-medium">Task Integration</h3>
                <p className="text-indigo-300 text-sm">Automated workflow</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* AI Features Section */}
      <section className="py-16 bg-[#0F0B1F]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center p-3 bg-purple-900/50 rounded-lg border border-purple-500/30 mb-4">
              <BrainCircuitIcon className="h-8 w-8 text-purple-400" />
            </div>
            <h2 className="text-3xl font-bold text-white mb-4">
              Intelligent Mail Processing
            </h2>
            <p className="text-xl text-indigo-200 max-w-3xl mx-auto">
              Our AI-powered system automatically analyzes, translates, and
              processes your business mail, creating actionable tasks and
              insights
            </p>
          </div>
          <AIDocumentAnalyzer />
        </div>
      </section>
      {/* Interactive Demo Section */}
      <section className="py-16 bg-[#0A0826]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Experience Our Digital Mailbox
            </h2>
            <p className="text-xl text-indigo-200 max-w-3xl mx-auto">
              See how our intelligent mailbox service processes your business
              correspondence
            </p>
          </div>
          <MailboxDemo />
        </div>
      </section>
      {/* Features Section */}
      <section className="py-16 bg-[#0F0B1F]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Complete Mailbox Solution for Your Business
            </h2>
            <p className="text-xl text-indigo-200 max-w-3xl mx-auto">
              Our mailbox service offers everything you need to establish a
              professional business presence in the Netherlands
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#1B1537]/80 backdrop-blur-sm rounded-xl border border-[#2D2755] p-6 hover:border-[#EA3A70]/50 transition-all">
              <div className="p-3 rounded-lg bg-[#2D2755]/50 border border-[#2D2755] mb-4 inline-block">
                <BuildingIcon className="h-6 w-6 text-[#EA3A70]" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                Premium Business Address
              </h3>
              <p className="text-gray-300 mb-4">
                Get a prestigious business address in Amsterdam's business
                district to enhance your company's professional image.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckIcon className="h-5 w-5 text-green-400 mr-2 mt-0.5" />
                  <span className="text-indigo-200">
                    Use on business cards and website
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckIcon className="h-5 w-5 text-green-400 mr-2 mt-0.5" />
                  <span className="text-indigo-200">
                    Register with Chamber of Commerce
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckIcon className="h-5 w-5 text-green-400 mr-2 mt-0.5" />
                  <span className="text-indigo-200">
                    Meets legal requirements for EU businesses
                  </span>
                </li>
              </ul>
            </div>
            <div className="bg-[#1B1537]/80 backdrop-blur-sm rounded-xl border border-[#2D2755] p-6 hover:border-[#EA3A70]/50 transition-all">
              <div className="p-3 rounded-lg bg-[#2D2755]/50 border border-[#2D2755] mb-4 inline-block">
                <BrainCircuitIcon className="h-6 w-6 text-[#EA3A70]" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                AI Mail Processing
              </h3>
              <p className="text-gray-300 mb-4">
                Our AI system automatically analyzes your mail, extracting key
                information and creating actionable insights.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckIcon className="h-5 w-5 text-green-400 mr-2 mt-0.5" />
                  <span className="text-indigo-200">
                    Document classification & analysis
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckIcon className="h-5 w-5 text-green-400 mr-2 mt-0.5" />
                  <span className="text-indigo-200">
                    Dutch to English translation
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckIcon className="h-5 w-5 text-green-400 mr-2 mt-0.5" />
                  <span className="text-indigo-200">
                    Deadline detection & reminders
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckIcon className="h-5 w-5 text-green-400 mr-2 mt-0.5" />
                  <span className="text-indigo-200">
                    Plain language explanations
                  </span>
                </li>
              </ul>
            </div>
            <div className="bg-[#1B1537]/80 backdrop-blur-sm rounded-xl border border-[#2D2755] p-6 hover:border-[#EA3A70]/50 transition-all">
              <div className="p-3 rounded-lg bg-[#2D2755]/50 border border-[#2D2755] mb-4 inline-block">
                <ListIcon className="h-6 w-6 text-[#EA3A70]" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                Task Integration
              </h3>
              <p className="text-gray-300 mb-4">
                Automatically convert mail into actionable tasks with deadlines,
                priorities, and contextual information.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckIcon className="h-5 w-5 text-green-400 mr-2 mt-0.5" />
                  <span className="text-indigo-200">
                    Automated task creation
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckIcon className="h-5 w-5 text-green-400 mr-2 mt-0.5" />
                  <span className="text-indigo-200">
                    Tax objection workflows
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckIcon className="h-5 w-5 text-green-400 mr-2 mt-0.5" />
                  <span className="text-indigo-200">
                    Payment reminders & tracking
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckIcon className="h-5 w-5 text-green-400 mr-2 mt-0.5" />
                  <span className="text-indigo-200">
                    Compliance deadline management
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* Task Integration Section */}
      <section className="py-16 bg-[#0A0826]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center p-3 bg-indigo-900/50 rounded-lg border border-indigo-500/30 mb-4">
              <ListIcon className="h-8 w-8 text-[#EA3A70]" />
            </div>
            <h2 className="text-3xl font-bold text-white mb-4">
              Seamless Task Integration
            </h2>
            <p className="text-xl text-indigo-200 max-w-3xl mx-auto">
              Convert mail into actionable tasks automatically - never miss a
              deadline or important action again
            </p>
          </div>
          <TaskIntegration />
        </div>
      </section>
      {/* How It Works Section */}
      <section className="py-16 bg-[#0F0B1F]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              How Our AI Mailbox Service Works
            </h2>
            <p className="text-xl text-indigo-200 max-w-3xl mx-auto">
              A simple process designed to give you full control over your
              business mail with intelligent automation
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            <div className="bg-indigo-900/30 backdrop-blur-sm rounded-xl border border-indigo-500/30 p-6 relative">
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-[#EA3A70] rounded-full flex items-center justify-center font-bold text-white">
                1
              </div>
              <div className="p-3 rounded-lg bg-indigo-900/50 border border-indigo-500/30 mb-4 inline-block">
                <MailIcon className="h-6 w-6 text-[#EA3A70]" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                Mail Receipt
              </h3>
              <p className="text-indigo-200">
                We receive all mail and packages sent to your business address
              </p>
            </div>
            <div className="bg-indigo-900/30 backdrop-blur-sm rounded-xl border border-indigo-500/30 p-6 relative">
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-[#EA3A70] rounded-full flex items-center justify-center font-bold text-white">
                2
              </div>
              <div className="p-3 rounded-lg bg-indigo-900/50 border border-indigo-500/30 mb-4 inline-block">
                <ScanIcon className="h-6 w-6 text-[#EA3A70]" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                Digital Scanning
              </h3>
              <p className="text-indigo-200">
                Mail is scanned and uploaded to your secure digital mailbox
              </p>
            </div>
            <div className="bg-indigo-900/30 backdrop-blur-sm rounded-xl border border-indigo-500/30 p-6 relative">
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-[#EA3A70] rounded-full flex items-center justify-center font-bold text-white">
                3
              </div>
              <div className="p-3 rounded-lg bg-indigo-900/50 border border-indigo-500/30 mb-4 inline-block">
                <BrainCircuitIcon className="h-6 w-6 text-[#EA3A70]" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">AI Analysis</h3>
              <p className="text-indigo-200">
                Our AI analyzes, translates, and extracts key information from
                your mail
              </p>
            </div>
            <div className="bg-indigo-900/30 backdrop-blur-sm rounded-xl border border-indigo-500/30 p-6 relative">
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-[#EA3A70] rounded-full flex items-center justify-center font-bold text-white">
                4
              </div>
              <div className="p-3 rounded-lg bg-indigo-900/50 border border-indigo-500/30 mb-4 inline-block">
                <ListIcon className="h-6 w-6 text-[#EA3A70]" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                Task Creation
              </h3>
              <p className="text-indigo-200">
                Important mail is automatically converted into actionable tasks
              </p>
            </div>
            <div className="bg-indigo-900/30 backdrop-blur-sm rounded-xl border border-indigo-500/30 p-6 relative">
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-[#EA3A70] rounded-full flex items-center justify-center font-bold text-white">
                5
              </div>
              <div className="p-3 rounded-lg bg-indigo-900/50 border border-indigo-500/30 mb-4 inline-block">
                <PackageIcon className="h-6 w-6 text-[#EA3A70]" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                Mail Actions
              </h3>
              <p className="text-indigo-200">
                Choose to forward, archive, or take action on each piece of mail
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Use Cases Section */}
      <section className="py-16 bg-[#0A0826]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Business Mail Made Simple
            </h2>
            <p className="text-xl text-indigo-200 max-w-3xl mx-auto">
              Our AI-powered mailbox handles all types of business
              correspondence, from tax notices to official documents
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-indigo-900/30 backdrop-blur-sm rounded-xl border border-indigo-500/30 p-6">
              <div className="p-3 rounded-lg bg-indigo-900/50 border border-indigo-500/30 mb-4 inline-block">
                <FileTextIcon className="h-6 w-6 text-[#EA3A70]" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                Tax Assessments & Notices
              </h3>
              <p className="text-indigo-200 mb-4">
                Our AI identifies tax assessments, explains them in plain
                language, and helps you prepare objection letters when needed.
              </p>
              <div className="space-y-3">
                <div className="flex items-start">
                  <AlertTriangleIcon className="h-5 w-5 text-[#EA3A70] mr-2 mt-0.5" />
                  <div>
                    <p className="text-white text-sm font-medium">
                      Deadline Detection
                    </p>
                    <p className="text-indigo-300 text-sm">
                      Automatically identifies the 6-week objection deadline for
                      tax assessments
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <FileTextIcon className="h-5 w-5 text-[#EA3A70] mr-2 mt-0.5" />
                  <div>
                    <p className="text-white text-sm font-medium">
                      Objection Assistance
                    </p>
                    <p className="text-indigo-300 text-sm">
                      Creates tasks and provides templates for filing objections
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-indigo-900/30 backdrop-blur-sm rounded-xl border border-indigo-500/30 p-6">
              <div className="p-3 rounded-lg bg-indigo-900/50 border border-indigo-500/30 mb-4 inline-block">
                <BuildingIcon className="h-6 w-6 text-[#EA3A70]" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                Chamber of Commerce Notices
              </h3>
              <p className="text-indigo-200 mb-4">
                Stay compliant with all Chamber of Commerce requirements with
                automatic deadline tracking and reminders.
              </p>
              <div className="space-y-3">
                <div className="flex items-start">
                  <ClockIcon className="h-5 w-5 text-[#EA3A70] mr-2 mt-0.5" />
                  <div>
                    <p className="text-white text-sm font-medium">
                      Compliance Calendar
                    </p>
                    <p className="text-indigo-300 text-sm">
                      Automatically adds filing deadlines to your business
                      calendar
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <ListIcon className="h-5 w-5 text-[#EA3A70] mr-2 mt-0.5" />
                  <div>
                    <p className="text-white text-sm font-medium">
                      Task Creation
                    </p>
                    <p className="text-indigo-300 text-sm">
                      Creates structured tasks for annual filings and updates
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-indigo-900/30 backdrop-blur-sm rounded-xl border border-indigo-500/30 p-6">
              <div className="p-3 rounded-lg bg-indigo-900/50 border border-indigo-500/30 mb-4 inline-block">
                <LanguagesIcon className="h-6 w-6 text-[#EA3A70]" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                Dutch Document Translation
              </h3>
              <p className="text-indigo-200 mb-4">
                Never struggle with Dutch business correspondence again - our AI
                translates and explains everything in plain English.
              </p>
              <div className="space-y-3">
                <div className="flex items-start">
                  <LanguagesIcon className="h-5 w-5 text-[#EA3A70] mr-2 mt-0.5" />
                  <div>
                    <p className="text-white text-sm font-medium">
                      Instant Translation
                    </p>
                    <p className="text-indigo-300 text-sm">
                      Converts Dutch documents to clear, accurate English
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <BrainCircuitIcon className="h-5 w-5 text-[#EA3A70] mr-2 mt-0.5" />
                  <div>
                    <p className="text-white text-sm font-medium">
                      Context & Explanation
                    </p>
                    <p className="text-indigo-300 text-sm">
                      Explains complex legal and financial terminology
                    </p>
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
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-indigo-200 max-w-3xl mx-auto">
              Choose the plan that best fits your business needs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-indigo-900/30 backdrop-blur-sm rounded-xl border border-indigo-500/30 p-6">
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-white">Basic</h3>
                <div className="mt-4 flex items-baseline justify-center">
                  <span className="text-4xl font-bold text-white">€49</span>
                  <span className="ml-1 text-xl text-indigo-300">/month</span>
                </div>
              </div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <CheckIcon className="h-5 w-5 text-green-400 mr-2 mt-0.5" />
                  <span className="text-white">Business address</span>
                </li>
                <li className="flex items-start">
                  <CheckIcon className="h-5 w-5 text-green-400 mr-2 mt-0.5" />
                  <span className="text-white">Mail notifications</span>
                </li>
                <li className="flex items-start">
                  <CheckIcon className="h-5 w-5 text-green-400 mr-2 mt-0.5" />
                  <span className="text-white">10 mail scans/month</span>
                </li>
                <li className="flex items-start">
                  <CheckIcon className="h-5 w-5 text-green-400 mr-2 mt-0.5" />
                  <span className="text-white">Basic AI analysis</span>
                </li>
              </ul>
              <Link to="/portal/mailbox/signup?plan=basic" className="block w-full px-4 py-3 bg-indigo-900/50 border border-indigo-500/30 text-white rounded-lg hover:bg-indigo-800/50 transition-colors text-center font-medium">
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
                  <span className="text-4xl font-bold text-white">€99</span>
                  <span className="ml-1 text-xl text-indigo-300">/month</span>
                </div>
              </div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <CheckIcon className="h-5 w-5 text-green-400 mr-2 mt-0.5" />
                  <span className="text-white">Business address</span>
                </li>
                <li className="flex items-start">
                  <CheckIcon className="h-5 w-5 text-green-400 mr-2 mt-0.5" />
                  <span className="text-white">Mail notifications</span>
                </li>
                <li className="flex items-start">
                  <CheckIcon className="h-5 w-5 text-green-400 mr-2 mt-0.5" />
                  <span className="text-white">50 mail scans/month</span>
                </li>
                <li className="flex items-start">
                  <CheckIcon className="h-5 w-5 text-green-400 mr-2 mt-0.5" />
                  <span className="text-white">Full AI document analysis</span>
                </li>
                <li className="flex items-start">
                  <CheckIcon className="h-5 w-5 text-green-400 mr-2 mt-0.5" />
                  <span className="text-white">Dutch-English translation</span>
                </li>
                <li className="flex items-start">
                  <CheckIcon className="h-5 w-5 text-green-400 mr-2 mt-0.5" />
                  <span className="text-white">Basic task integration</span>
                </li>
              </ul>
              <Link to="/portal/mailbox/signup?plan=business" className="block w-full px-4 py-3 bg-[#EA3A70] text-white rounded-lg hover:bg-[#EA3A70]/90 transition-colors text-center font-medium">
                Get Started
              </Link>
            </div>
            <div className="bg-indigo-900/30 backdrop-blur-sm rounded-xl border border-indigo-500/30 p-6">
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-white">Enterprise</h3>
                <div className="mt-4 flex items-baseline justify-center">
                  <span className="text-4xl font-bold text-white">€199</span>
                  <span className="ml-1 text-xl text-indigo-300">/month</span>
                </div>
              </div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <CheckIcon className="h-5 w-5 text-green-400 mr-2 mt-0.5" />
                  <span className="text-white">Premium business address</span>
                </li>
                <li className="flex items-start">
                  <CheckIcon className="h-5 w-5 text-green-400 mr-2 mt-0.5" />
                  <span className="text-white">
                    Priority mail notifications
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckIcon className="h-5 w-5 text-green-400 mr-2 mt-0.5" />
                  <span className="text-white">Unlimited mail scans</span>
                </li>
                <li className="flex items-start">
                  <CheckIcon className="h-5 w-5 text-green-400 mr-2 mt-0.5" />
                  <span className="text-white">Advanced AI analysis</span>
                </li>
                <li className="flex items-start">
                  <CheckIcon className="h-5 w-5 text-green-400 mr-2 mt-0.5" />
                  <span className="text-white">Multi-language translation</span>
                </li>
                <li className="flex items-start">
                  <CheckIcon className="h-5 w-5 text-green-400 mr-2 mt-0.5" />
                  <span className="text-white">
                    Full task management integration
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckIcon className="h-5 w-5 text-green-400 mr-2 mt-0.5" />
                  <span className="text-white">Dedicated account manager</span>
                </li>
              </ul>
              <Link to="/portal/mailbox/signup?plan=enterprise" className="block w-full px-4 py-3 bg-indigo-900/50 border border-indigo-500/30 text-white rounded-lg hover:bg-indigo-800/50 transition-colors text-center font-medium">
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-b from-[#0F0B1F] to-[#1B1537]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Transform Your Business Mail Management?
          </h2>
          <p className="text-xl text-indigo-200 mb-8 max-w-3xl mx-auto">
            Get started with our AI-powered mailbox service today and never miss
            an important deadline or action again.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/portal/mailbox/signup" className="px-8 py-4 bg-[#EA3A70] text-white rounded-lg hover:bg-[#EA3A70]/90 transition-colors text-lg font-medium inline-flex items-center">
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