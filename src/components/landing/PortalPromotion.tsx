import React from 'react'
import { Link } from 'react-router-dom'
import {
  LockIcon,
  FileTextIcon,
  BarChartIcon,
  ArrowRightIcon,
  CheckIcon,
  SparklesIcon,
  RocketIcon,
  XIcon,
} from 'lucide-react'
interface PortalPromotionProps {
  isOpen: boolean
  onClose: () => void
}
export function PortalPromotion({ isOpen, onClose }: PortalPromotionProps) {
  if (!isOpen) return null
  const benefits = [
    'Get instant market entry requirements overview',
    'Download detailed quotations and proposals',
    'Access AI-powered market analysis',
    'Track your expansion progress',
  ]
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-[#1B1537] rounded-lg p-8 border border-[#2D2755] max-w-4xl w-full max-h-[90vh] overflow-y-auto relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white"
        >
          <XIcon className="h-6 w-6" />
        </button>
        <div className="text-center mb-8">
          <div className="inline-flex items-center bg-[#EA3A70]/10 px-4 py-2 rounded-full text-[#EA3A70] mb-6">
            <LockIcon className="h-5 w-5 mr-2" />
            AI-Powered Entity Management
          </div>
          <h2 className="text-3xl font-bold text-white mb-4">
            Your Business Class Portal
          </h2>
          <p className="text-gray-300">
            Experience seamless market entry with our AI-powered business
            expansion platform
          </p>
        </div>
        <div className="bg-[#0F0B1F] rounded-lg p-8 border-2 border-[#EA3A70] mb-8 relative overflow-hidden">
          <div className="absolute top-4 right-4 bg-[#EA3A70] text-white text-xs px-3 py-1 rounded-full">
            Most Popular
          </div>
          <div className="flex flex-col md:flex-row items-start gap-8">
            <div className="flex-1">
              <div className="flex items-center mb-4">
                <RocketIcon className="h-6 w-6 text-[#EA3A70] mr-2" />
                <h3 className="text-xl font-bold text-white">eBranch Plan</h3>
              </div>
              <div className="mb-6">
                <span className="text-3xl font-bold text-white">€1,495</span>
                <span className="text-gray-400 ml-2">/year</span>
              </div>
              <p className="text-gray-300 mb-6">
                Your AI-powered command center for global operations
              </p>
              <div className="space-y-3">
                {[
                  'All Free plan features',
                  'Core Bookkeeping Portal',
                  'Branch Office Registration',
                  'VAT and EORI Number Application',
                  'Employer Registration',
                  'Quarterly VAT Analysis',
                  'Annual Corporate Analysis',
                  'AI-powered Corporate Agent',
                ].map((feature) => (
                  <div
                    key={feature}
                    className="flex items-center text-gray-300"
                  >
                    <CheckIcon className="h-5 w-5 text-[#EA3A70] mr-2 flex-shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-4 min-w-[200px]">
              <Link
                to="/register"
                className="bg-[#EA3A70] text-white px-8 py-3 rounded-lg font-medium hover:bg-[#EA3A70]/90 transition-colors whitespace-nowrap text-center flex items-center justify-center"
              >
                <SparklesIcon className="h-5 w-5 mr-2" />
                Launch Your eBranch
              </Link>
              <Link
                to="/plans"
                className="border border-[#EA3A70] text-[#EA3A70] px-8 py-3 rounded-lg font-medium hover:bg-[#EA3A70]/10 transition-colors whitespace-nowrap text-center"
              >
                View All Plans
              </Link>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-[#0F0B1F] rounded-lg p-6 border border-[#2D2755] hover:border-[#EA3A70]/50 transition-all">
            <FileTextIcon className="h-8 w-8 text-[#EA3A70] mb-4" />
            <h3 className="text-lg font-semibold text-white mb-2">
              Full Quotations
            </h3>
            <p className="text-gray-400">
              Get detailed pricing and service breakdowns for your expansion
              plans
            </p>
          </div>
          <div className="bg-[#0F0B1F] rounded-lg p-6 border border-[#2D2755] hover:border-[#EA3A70]/50 transition-all">
            <BarChartIcon className="h-8 w-8 text-[#EA3A70] mb-4" />
            <h3 className="text-lg font-semibold text-white mb-2">
              Market Analysis
            </h3>
            <p className="text-gray-400">
              Access AI-powered insights and market requirements for your
              business
            </p>
          </div>
          <div className="bg-[#0F0B1F] rounded-lg p-6 border border-[#2D2755] hover:border-[#EA3A70]/50 transition-all">
            <ArrowRightIcon className="h-8 w-8 text-[#EA3A70] mb-4" />
            <h3 className="text-lg font-semibold text-white mb-2">
              Next Steps
            </h3>
            <p className="text-gray-400">
              Get clear guidance on your expansion journey and requirements
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 bg-[#0F0B1F] rounded-lg p-6 border border-[#2D2755]">
          <div className="space-y-3">
            {benefits.map((benefit) => (
              <div key={benefit} className="flex items-center text-gray-300">
                <CheckIcon className="h-5 w-5 text-[#EA3A70] mr-2 flex-shrink-0" />
                <span>{benefit}</span>
              </div>
            ))}
          </div>
          <div className="flex flex-col md:flex-row gap-4">
            <Link
              to="/register"
              className="bg-[#EA3A70] text-white px-8 py-3 rounded-lg font-medium hover:bg-[#EA3A70]/90 transition-colors whitespace-nowrap text-center"
            >
              Create Free Account
            </Link>
            <Link
              to="/login"
              className="border border-[#EA3A70] text-[#EA3A70] px-8 py-3 rounded-lg font-medium hover:bg-[#EA3A70]/10 transition-colors whitespace-nowrap text-center"
            >
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
