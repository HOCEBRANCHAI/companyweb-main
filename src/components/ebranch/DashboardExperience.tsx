import React, { useState } from 'react'
import {
  LayoutDashboardIcon,
  FileTextIcon,
  BarChart3Icon,
  BellIcon,
  CalendarIcon,
  CheckCircleIcon,
  AlertTriangleIcon,
  MailIcon,
  FileIcon,
  UsersIcon,
  BuildingIcon,
  ClockIcon,
  ArrowRightIcon,
  BrainIcon,
} from 'lucide-react'
export function DashboardExperience() {
  const [activeTab, setActiveTab] = useState('overview')
  const tabs = [
    {
      id: 'overview',
      label: 'Overview',
      icon: LayoutDashboardIcon,
    },
    {
      id: 'compliance',
      label: 'Compliance',
      icon: CheckCircleIcon,
    },
    {
      id: 'documents',
      label: 'Documents',
      icon: FileTextIcon,
    },
    {
      id: 'finances',
      label: 'Finances',
      icon: BarChart3Icon,
    },
    {
      id: 'mailbox',
      label: 'Mailbox',
      icon: MailIcon,
    },
  ]
  return (
    <section className="py-20 relative bg-[#0A0826]">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80')] opacity-5 bg-cover bg-center mix-blend-overlay"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-[#EA3A70]/20 text-[#EA3A70] mb-4 backdrop-blur-sm">
            <BrainIcon className="h-4 w-4 mr-2" />
            <span>AI-Powered Experience</span>
          </div>
          <h2 className="text-3xl font-bold text-white mb-4">
            Your Intelligent Business Command Center
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Manage every aspect of your European business operations from a
            single, intelligent dashboard
          </p>
        </div>
        <div className="bg-[#1B1537]/80 backdrop-blur-md rounded-2xl border border-[#2D2755] overflow-hidden shadow-2xl shadow-black/20 mb-16">
          {/* Dashboard Navigation */}
          <div className="border-b border-[#2D2755] p-4 flex items-center">
            <div className="flex items-center mr-6">
              <BuildingIcon className="h-6 w-6 text-[#EA3A70] mr-2" />
              <span className="font-medium text-white">eBranch Portal</span>
            </div>
            <div className="flex space-x-1 overflow-x-auto hide-scrollbar">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap ${activeTab === tab.id ? 'bg-[#EA3A70]/10 text-[#EA3A70] border border-[#EA3A70]/30' : 'text-gray-300 hover:bg-[#2D2755]/50'}`}
                >
                  <tab.icon className="h-4 w-4 mr-2" />
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
          {/* Dashboard Content */}
          <div className="p-6">
            {activeTab === 'overview' && (
              <div className="animate-fadeIn">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                  <div className="bg-[#2D2755]/30 rounded-xl p-4 border border-[#2D2755]">
                    <div className="flex justify-between items-start mb-3">
                      <div className="flex items-center">
                        <CalendarIcon className="h-5 w-5 text-[#EA3A70] mr-2" />
                        <h3 className="font-medium text-white">
                          Upcoming Tasks
                        </h3>
                      </div>
                      <span className="px-2 py-1 bg-[#EA3A70]/20 text-[#EA3A70] text-xs rounded-full">
                        4 tasks
                      </span>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-start">
                        <div className="p-1 rounded-full bg-amber-500/20 mr-2 mt-0.5">
                          <AlertTriangleIcon className="h-3 w-3 text-amber-400" />
                        </div>
                        <div>
                          <p className="text-white text-sm">VAT Return Due</p>
                          <p className="text-gray-400 text-xs">In 5 days</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="p-1 rounded-full bg-[#EA3A70]/20 mr-2 mt-0.5">
                          <FileTextIcon className="h-3 w-3 text-[#EA3A70]" />
                        </div>
                        <div>
                          <p className="text-white text-sm">
                            Annual Report Submission
                          </p>
                          <p className="text-gray-400 text-xs">In 2 weeks</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-[#2D2755]/30 rounded-xl p-4 border border-[#2D2755]">
                    <div className="flex justify-between items-start mb-3">
                      <div className="flex items-center">
                        <MailIcon className="h-5 w-5 text-[#EA3A70] mr-2" />
                        <h3 className="font-medium text-white">Recent Mail</h3>
                      </div>
                      <span className="px-2 py-1 bg-[#EA3A70]/20 text-[#EA3A70] text-xs rounded-full">
                        3 new
                      </span>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-start">
                        <div className="p-1 rounded-full bg-blue-500/20 mr-2 mt-0.5">
                          <FileIcon className="h-3 w-3 text-blue-400" />
                        </div>
                        <div>
                          <p className="text-white text-sm">
                            Tax Authority Notice
                          </p>
                          <p className="text-gray-400 text-xs">
                            Received yesterday
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="p-1 rounded-full bg-green-500/20 mr-2 mt-0.5">
                          <FileIcon className="h-3 w-3 text-green-400" />
                        </div>
                        <div>
                          <p className="text-white text-sm">
                            Chamber of Commerce
                          </p>
                          <p className="text-gray-400 text-xs">
                            Received 3 days ago
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-[#2D2755]/30 rounded-xl p-4 border border-[#2D2755]">
                    <div className="flex justify-between items-start mb-3">
                      <div className="flex items-center">
                        <BellIcon className="h-5 w-5 text-[#EA3A70] mr-2" />
                        <h3 className="font-medium text-white">
                          Notifications
                        </h3>
                      </div>
                      <span className="px-2 py-1 bg-[#EA3A70]/20 text-[#EA3A70] text-xs rounded-full">
                        2 new
                      </span>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-start">
                        <div className="p-1 rounded-full bg-green-500/20 mr-2 mt-0.5">
                          <CheckCircleIcon className="h-3 w-3 text-green-400" />
                        </div>
                        <div>
                          <p className="text-white text-sm">
                            VAT Registration Complete
                          </p>
                          <p className="text-gray-400 text-xs">Today</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="p-1 rounded-full bg-[#EA3A70]/20 mr-2 mt-0.5">
                          <AlertTriangleIcon className="h-3 w-3 text-[#EA3A70]" />
                        </div>
                        <div>
                          <p className="text-white text-sm">
                            Document Requires Attention
                          </p>
                          <p className="text-gray-400 text-xs">Yesterday</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="md:col-span-2 bg-[#2D2755]/30 rounded-xl p-4 border border-[#2D2755]">
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex items-center">
                        <BarChart3Icon className="h-5 w-5 text-[#EA3A70] mr-2" />
                        <h3 className="font-medium text-white">
                          Financial Overview
                        </h3>
                      </div>
                    </div>
                    <div className="h-48 flex items-center justify-center">
                      <div className="text-center">
                        <BarChart3Icon className="h-12 w-12 text-[#EA3A70]/50 mx-auto mb-3" />
                        <p className="text-gray-300">
                          Financial data visualization
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-[#2D2755]/30 rounded-xl p-4 border border-[#2D2755]">
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex items-center">
                        <UsersIcon className="h-5 w-5 text-[#EA3A70] mr-2" />
                        <h3 className="font-medium text-white">Team Access</h3>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <div className="h-8 w-8 rounded-full bg-blue-500/20 flex items-center justify-center mr-3">
                            <span className="text-blue-300 font-medium">
                              JS
                            </span>
                          </div>
                          <div>
                            <p className="text-white text-sm">John Smith</p>
                            <p className="text-gray-400 text-xs">Admin</p>
                          </div>
                        </div>
                        <div className="h-2 w-2 rounded-full bg-green-400"></div>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <div className="h-8 w-8 rounded-full bg-purple-500/20 flex items-center justify-center mr-3">
                            <span className="text-purple-300 font-medium">
                              AT
                            </span>
                          </div>
                          <div>
                            <p className="text-white text-sm">Anna Thompson</p>
                            <p className="text-gray-400 text-xs">Accountant</p>
                          </div>
                        </div>
                        <div className="h-2 w-2 rounded-full bg-gray-400"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {activeTab === 'compliance' && (
              <div className="animate-fadeIn">
                <div className="bg-[#2D2755]/30 rounded-xl p-6 border border-[#2D2755] mb-6">
                  <div className="flex items-center mb-4">
                    <CheckCircleIcon className="h-6 w-6 text-green-400 mr-3" />
                    <h3 className="text-xl font-medium text-white">
                      Compliance Status: On Track
                    </h3>
                  </div>
                  <p className="text-gray-300 mb-6">
                    All your compliance requirements are being monitored and are
                    currently up to date.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-[#2D2755]/50 rounded-lg p-3 border border-[#2D2755]">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-white">VAT Returns</span>
                        <span className="px-2 py-1 bg-green-900/30 text-green-400 text-xs rounded-full">
                          Up to date
                        </span>
                      </div>
                      <p className="text-gray-400 text-xs">
                        Next due: July 31, 2024
                      </p>
                    </div>
                    <div className="bg-[#2D2755]/50 rounded-lg p-3 border border-[#2D2755]">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-white">Annual Accounts</span>
                        <span className="px-2 py-1 bg-green-900/30 text-green-400 text-xs rounded-full">
                          Up to date
                        </span>
                      </div>
                      <p className="text-gray-400 text-xs">
                        Next due: January 15, 2025
                      </p>
                    </div>
                    <div className="bg-[#2D2755]/50 rounded-lg p-3 border border-[#2D2755]">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-white">UBO Registration</span>
                        <span className="px-2 py-1 bg-green-900/30 text-green-400 text-xs rounded-full">
                          Complete
                        </span>
                      </div>
                      <p className="text-gray-400 text-xs">
                        Last updated: March 10, 2024
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bg-[#2D2755]/30 rounded-xl p-6 border border-[#2D2755]">
                  <div className="flex items-center mb-4">
                    <CalendarIcon className="h-6 w-6 text-[#EA3A70] mr-3" />
                    <h3 className="text-xl font-medium text-white">
                      Compliance Calendar
                    </h3>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="p-2 bg-[#2D2755]/50 rounded-lg mr-3 mt-1">
                        <ClockIcon className="h-5 w-5 text-amber-400" />
                      </div>
                      <div>
                        <div className="flex items-center">
                          <h4 className="text-white font-medium mr-3">
                            VAT Return Q2
                          </h4>
                          <span className="px-2 py-1 bg-amber-900/30 text-amber-400 text-xs rounded-full">
                            Due in 5 days
                          </span>
                        </div>
                        <p className="text-gray-300 text-sm mt-1">
                          Quarterly VAT return for April-June 2024
                        </p>
                        <button className="mt-2 px-3 py-1.5 bg-[#EA3A70]/20 text-[#EA3A70] rounded-lg text-sm font-medium inline-flex items-center">
                          Prepare Now
                          <ArrowRightIcon className="ml-2 h-3 w-3" />
                        </button>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="p-2 bg-[#2D2755]/50 rounded-lg mr-3 mt-1">
                        <ClockIcon className="h-5 w-5 text-blue-400" />
                      </div>
                      <div>
                        <div className="flex items-center">
                          <h4 className="text-white font-medium mr-3">
                            Annual Report
                          </h4>
                          <span className="px-2 py-1 bg-blue-900/30 text-blue-400 text-xs rounded-full">
                            Due in 2 weeks
                          </span>
                        </div>
                        <p className="text-gray-300 text-sm mt-1">
                          Annual financial report submission
                        </p>
                        <button className="mt-2 px-3 py-1.5 bg-[#2D2755]/50 text-white rounded-lg text-sm font-medium inline-flex items-center">
                          View Details
                          <ArrowRightIcon className="ml-2 h-3 w-3" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {activeTab === 'documents' && (
              <div className="animate-fadeIn">
                <div className="bg-[#2D2755]/30 rounded-xl p-6 border border-[#2D2755] mb-6">
                  <div className="flex justify-between items-center mb-6">
                    <div className="flex items-center">
                      <FileTextIcon className="h-6 w-6 text-[#EA3A70] mr-3" />
                      <h3 className="text-xl font-medium text-white">
                        Document Management
                      </h3>
                    </div>
                    <button className="px-3 py-1.5 bg-[#EA3A70] text-white rounded-lg text-sm font-medium">
                      Upload Document
                    </button>
                  </div>
                  <div className="space-y-4">
                    <div className="bg-[#2D2755]/50 rounded-lg p-4 border border-[#2D2755] flex items-center">
                      <FileIcon className="h-8 w-8 text-[#EA3A70] mr-4" />
                      <div className="flex-1">
                        <h4 className="text-white font-medium">
                          Articles of Association
                        </h4>
                        <p className="text-gray-400 text-xs">
                          PDF • Uploaded 3 months ago
                        </p>
                      </div>
                      <button className="px-3 py-1.5 bg-[#2D2755]/50 text-white rounded-lg text-sm">
                        View
                      </button>
                    </div>
                    <div className="bg-[#2D2755]/50 rounded-lg p-4 border border-[#2D2755] flex items-center">
                      <FileIcon className="h-8 w-8 text-[#EA3A70] mr-4" />
                      <div className="flex-1">
                        <h4 className="text-white font-medium">
                          Company Registration Certificate
                        </h4>
                        <p className="text-gray-400 text-xs">
                          PDF • Uploaded 3 months ago
                        </p>
                      </div>
                      <button className="px-3 py-1.5 bg-[#2D2755]/50 text-white rounded-lg text-sm">
                        View
                      </button>
                    </div>
                    <div className="bg-[#2D2755]/50 rounded-lg p-4 border border-[#2D2755] flex items-center">
                      <FileIcon className="h-8 w-8 text-[#EA3A70] mr-4" />
                      <div className="flex-1">
                        <h4 className="text-white font-medium">
                          VAT Registration Certificate
                        </h4>
                        <p className="text-gray-400 text-xs">
                          PDF • Uploaded 2 months ago
                        </p>
                      </div>
                      <button className="px-3 py-1.5 bg-[#2D2755]/50 text-white rounded-lg text-sm">
                        View
                      </button>
                    </div>
                  </div>
                </div>
                <div className="bg-[#2D2755]/30 rounded-xl p-6 border border-[#2D2755]">
                  <div className="flex items-center mb-4">
                    <BrainIcon className="h-6 w-6 text-[#EA3A70] mr-3" />
                    <h3 className="text-xl font-medium text-white">
                      AI Document Analysis
                    </h3>
                  </div>
                  <p className="text-gray-300 mb-6">
                    Our AI automatically extracts and processes information from
                    your documents, saving you time and reducing errors.
                  </p>
                  <div className="bg-[#2D2755]/50 rounded-lg p-4 border border-[#2D2755]">
                    <div className="flex items-center mb-3">
                      <CheckCircleIcon className="h-5 w-5 text-green-400 mr-2" />
                      <h4 className="text-white font-medium">
                        Last AI Processing Results
                      </h4>
                    </div>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-300">
                          Documents Processed:
                        </span>
                        <span className="text-white">12</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-300">
                          Information Extracted:
                        </span>
                        <span className="text-white">47 data points</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-300">Processing Time:</span>
                        <span className="text-white">3 minutes</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-300">
                          Manual Time Saved:
                        </span>
                        <span className="text-white">~4 hours</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {activeTab === 'finances' && (
              <div className="animate-fadeIn">
                <div className="bg-[#2D2755]/30 rounded-xl p-6 border border-[#2D2755] mb-6">
                  <div className="flex items-center mb-6">
                    <BarChart3Icon className="h-6 w-6 text-[#EA3A70] mr-3" />
                    <h3 className="text-xl font-medium text-white">
                      Financial Dashboard
                    </h3>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                    <div className="bg-[#2D2755]/50 rounded-lg p-4 border border-[#2D2755]">
                      <p className="text-gray-300 text-sm mb-1">
                        Revenue (YTD)
                      </p>
                      <p className="text-2xl font-bold text-white">€124,500</p>
                      <div className="flex items-center mt-2 text-green-400 text-xs">
                        <svg
                          className="h-3 w-3 mr-1"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 10l7-7m0 0l7 7m-7-7v18"
                          />
                        </svg>
                        <span>12% vs last year</span>
                      </div>
                    </div>
                    <div className="bg-[#2D2755]/50 rounded-lg p-4 border border-[#2D2755]">
                      <p className="text-gray-300 text-sm mb-1">
                        Expenses (YTD)
                      </p>
                      <p className="text-2xl font-bold text-white">€87,320</p>
                      <div className="flex items-center mt-2 text-amber-400 text-xs">
                        <svg
                          className="h-3 w-3 mr-1"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 14l-7 7m0 0l-7-7m7 7V3"
                          />
                        </svg>
                        <span>8% vs last year</span>
                      </div>
                    </div>
                    <div className="bg-[#2D2755]/50 rounded-lg p-4 border border-[#2D2755]">
                      <p className="text-gray-300 text-sm mb-1">Profit (YTD)</p>
                      <p className="text-2xl font-bold text-white">€37,180</p>
                      <div className="flex items-center mt-2 text-green-400 text-xs">
                        <svg
                          className="h-3 w-3 mr-1"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 10l7-7m0 0l7 7m-7-7v18"
                          />
                        </svg>
                        <span>15% vs last year</span>
                      </div>
                    </div>
                  </div>
                  <div className="h-64 flex items-center justify-center bg-[#2D2755]/50 rounded-lg p-4 border border-[#2D2755]">
                    <div className="text-center">
                      <BarChart3Icon className="h-12 w-12 text-[#EA3A70]/50 mx-auto mb-3" />
                      <p className="text-gray-300">
                        Financial data visualization
                      </p>
                      <p className="text-gray-400 text-sm">
                        Revenue vs Expenses (Monthly)
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bg-[#2D2755]/30 rounded-xl p-6 border border-[#2D2755]">
                  <div className="flex items-center mb-4">
                    <FileTextIcon className="h-6 w-6 text-[#EA3A70] mr-3" />
                    <h3 className="text-xl font-medium text-white">
                      Tax Management
                    </h3>
                  </div>
                  <div className="space-y-4">
                    <div className="bg-[#2D2755]/50 rounded-lg p-4 border border-[#2D2755] flex items-center">
                      <div className="p-2 bg-[#2D2755]/50 rounded-lg mr-3">
                        <AlertTriangleIcon className="h-5 w-5 text-amber-400" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-white font-medium">
                          VAT Return Q2 2024
                        </h4>
                        <p className="text-gray-400 text-xs">
                          Due: July 31, 2024 (5 days remaining)
                        </p>
                      </div>
                      <button className="px-3 py-1.5 bg-[#EA3A70] text-white rounded-lg text-sm">
                        Prepare
                      </button>
                    </div>
                    <div className="bg-[#2D2755]/50 rounded-lg p-4 border border-[#2D2755] flex items-center">
                      <div className="p-2 bg-[#2D2755]/50 rounded-lg mr-3">
                        <CheckCircleIcon className="h-5 w-5 text-green-400" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-white font-medium">
                          VAT Return Q1 2024
                        </h4>
                        <p className="text-gray-400 text-xs">
                          Submitted: April 28, 2024
                        </p>
                      </div>
                      <button className="px-3 py-1.5 bg-[#2D2755]/50 text-white rounded-lg text-sm">
                        View
                      </button>
                    </div>
                    <div className="bg-[#2D2755]/50 rounded-lg p-4 border border-[#2D2755] flex items-center">
                      <div className="p-2 bg-[#2D2755]/50 rounded-lg mr-3">
                        <CheckCircleIcon className="h-5 w-5 text-green-400" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-white font-medium">
                          Corporate Tax 2023
                        </h4>
                        <p className="text-gray-400 text-xs">
                          Submitted: June 15, 2024
                        </p>
                      </div>
                      <button className="px-3 py-1.5 bg-[#2D2755]/50 text-white rounded-lg text-sm">
                        View
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {activeTab === 'mailbox' && (
              <div className="animate-fadeIn">
                <div className="bg-[#2D2755]/30 rounded-xl p-6 border border-[#2D2755] mb-6">
                  <div className="flex items-center mb-6">
                    <MailIcon className="h-6 w-6 text-[#EA3A70] mr-3" />
                    <h3 className="text-xl font-medium text-white">
                      Digital Mailbox
                    </h3>
                  </div>
                  <div className="space-y-4">
                    <div className="bg-[#2D2755]/50 rounded-lg p-4 border border-[#2D2755] flex items-center">
                      <div className="p-2 bg-[#2D2755]/50 rounded-lg mr-3">
                        <FileIcon className="h-5 w-5 text-blue-400" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center">
                          <h4 className="text-white font-medium mr-2">
                            Tax Authority Notice
                          </h4>
                          <span className="px-2 py-0.5 bg-blue-900/30 text-blue-400 text-xs rounded-full">
                            New
                          </span>
                        </div>
                        <p className="text-gray-400 text-xs">
                          Received: July 20, 2024
                        </p>
                      </div>
                      <button className="px-3 py-1.5 bg-[#2D2755]/50 text-white rounded-lg text-sm">
                        View
                      </button>
                    </div>
                    <div className="bg-[#2D2755]/50 rounded-lg p-4 border border-[#2D2755] flex items-center">
                      <div className="p-2 bg-[#2D2755]/50 rounded-lg mr-3">
                        <FileIcon className="h-5 w-5 text-green-400" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center">
                          <h4 className="text-white font-medium mr-2">
                            Chamber of Commerce
                          </h4>
                          <span className="px-2 py-0.5 bg-blue-900/30 text-blue-400 text-xs rounded-full">
                            New
                          </span>
                        </div>
                        <p className="text-gray-400 text-xs">
                          Received: July 18, 2024
                        </p>
                      </div>
                      <button className="px-3 py-1.5 bg-[#2D2755]/50 text-white rounded-lg text-sm">
                        View
                      </button>
                    </div>
                    <div className="bg-[#2D2755]/50 rounded-lg p-4 border border-[#2D2755] flex items-center">
                      <div className="p-2 bg-[#2D2755]/50 rounded-lg mr-3">
                        <FileIcon className="h-5 w-5 text-[#EA3A70]" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center">
                          <h4 className="text-white font-medium mr-2">
                            Bank Statement
                          </h4>
                          <span className="px-2 py-0.5 bg-blue-900/30 text-blue-400 text-xs rounded-full">
                            New
                          </span>
                        </div>
                        <p className="text-gray-400 text-xs">
                          Received: July 15, 2024
                        </p>
                      </div>
                      <button className="px-3 py-1.5 bg-[#2D2755]/50 text-white rounded-lg text-sm">
                        View
                      </button>
                    </div>
                  </div>
                </div>
                <div className="bg-[#2D2755]/30 rounded-xl p-6 border border-[#2D2755]">
                  <div className="flex items-center mb-4">
                    <BrainIcon className="h-6 w-6 text-[#EA3A70] mr-3" />
                    <h3 className="text-xl font-medium text-white">
                      AI Mail Processing
                    </h3>
                  </div>
                  <p className="text-gray-300 mb-6">
                    Our AI automatically scans, categorizes, and extracts
                    important information from your physical mail.
                  </p>
                  <div className="bg-[#2D2755]/50 rounded-lg p-4 border border-[#2D2755]">
                    <div className="flex items-center mb-3">
                      <CheckCircleIcon className="h-5 w-5 text-green-400 mr-2" />
                      <h4 className="text-white font-medium">
                        Mail Processing Statistics
                      </h4>
                    </div>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-300">
                          Mail Items Processed:
                        </span>
                        <span className="text-white">27 this month</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-300">
                          Average Processing Time:
                        </span>
                        <span className="text-white">4 hours</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-300">
                          Critical Items Flagged:
                        </span>
                        <span className="text-white">3 this month</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-300">
                          Digital Storage Saved:
                        </span>
                        <span className="text-white">100% paperless</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="text-center">
          <button className="px-6 py-3 bg-[#EA3A70] text-white rounded-lg hover:bg-[#EA3A70]/90 transition-colors inline-flex items-center font-medium shadow-md shadow-[#EA3A70]/20">
            Try Interactive Demo
            <ArrowRightIcon className="h-4 w-4 ml-2" />
          </button>
        </div>
      </div>
      <style jsx>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out forwards;
        }
      `}</style>
    </section>
  )
}
