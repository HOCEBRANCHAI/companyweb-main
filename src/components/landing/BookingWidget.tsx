import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  GlobeIcon,
  ClockIcon,
  ArrowRightIcon,
  MessageSquareIcon,
  SparklesIcon,
  CheckIcon,
  AlertTriangleIcon,
} from 'lucide-react'
import { Link } from 'react-router-dom'
import { PortalPromotion } from './PortalPromotion'
import { EBranchInfo } from './EBranchInfo'
export function BookingWidget() {
  const navigate = useNavigate()
  const [from, setFrom] = useState('')
  const [to, setTo] = useState('')
  const [when, setWhen] = useState('')
  const [showAIChat, setShowAIChat] = useState(false)
  const [scanning, setScanning] = useState(false)
  const [scanResults, setScanResults] = useState<null | {
    legal: boolean
    tax: boolean
    employment: boolean
  }>(null)
  const [showPlanDetails, setShowPlanDetails] = useState(false)
  const handleCountrySelect = (country: string, type: 'from' | 'to') => {
    if (type === 'from') setFrom(country)
    else setTo(country)
    if (type === 'to' && from) {
      setScanning(true)
      // Simulate AI analysis
      setTimeout(() => {
        setScanResults({
          legal: true,
          tax: Math.random() > 0.3,
          employment: Math.random() > 0.3,
        })
        setScanning(false)
      }, 2000)
    }
  }
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    navigate('/market-entry')
  }
  return (
    <div className="relative">
      {/* AI Assistant Button */}
     
      {/* AI Chat Popup */}
     
      <div className="bg-[#1B1537] rounded-xl border-2 border-transparent bg-clip-padding p-8 max-w-4xl mx-auto relative before:absolute before:inset-0 before:rounded-xl before:p-1 before:bg-gradient-to-r before:from-purple-500/50 before:via-pink-500/50 before:to-[#EA3A70]/50 before:-z-10">
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* From Country */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                From
              </label>
              <div className="relative group">
                <GlobeIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5 group-hover:text-[#EA3A70] transition-colors" />
                <select
                  value={from}
                  onChange={(e) => handleCountrySelect(e.target.value, 'from')}
                  className="w-full bg-[#0F0B1F] border border-[#2D2755] rounded-lg pl-10 pr-4 py-3 text-white focus:outline-none focus:border-[#EA3A70] hover:border-[#EA3A70]/50 transition-colors cursor-pointer"
                >
                  <option value="">Select country</option>
                  <option value="us">United States</option>
                  <option value="uk">United Kingdom</option>
                  <option value="ca">Canada</option>
                </select>
              </div>
            </div>
            {/* To Country */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2 flex items-center justify-between">
                To
                <Link
                  to="/global-terminal"
                  className="text-[#EA3A70] hover:text-[#EA3A70]/80 text-xs inline-flex items-center hover:bg-[#EA3A70]/10 px-2 py-1 rounded-full transition-all"
                >
                  Explore destinations
                  <ArrowRightIcon className="h-3 w-3 ml-1" />
                </Link>
              </label>
              <div className="relative group">
                <GlobeIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5 group-hover:text-[#EA3A70] transition-colors" />
                <select
                  value={to}
                  onChange={(e) => handleCountrySelect(e.target.value, 'to')}
                  className="w-full bg-[#0F0B1F] border border-[#2D2755] rounded-lg pl-10 pr-4 py-3 text-white focus:outline-none focus:border-[#EA3A70] hover:border-[#EA3A70]/50 transition-colors cursor-pointer"
                >
                  <option value="">Select country</option>
                  <option value="nl">Netherlands</option>
                  <option value="de">Germany</option>
                  <option value="fr">France</option>
                </select>
              </div>
            </div>
            {/* When */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                When
              </label>
              <div className="relative group">
                <ClockIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5 group-hover:text-[#EA3A70] transition-colors" />
                <select
                  value={when}
                  onChange={(e) => setWhen(e.target.value)}
                  className="w-full bg-[#0F0B1F] border border-[#2D2755] rounded-lg pl-10 pr-4 py-3 text-white focus:outline-none focus:border-[#EA3A70] hover:border-[#EA3A70]/50 transition-colors cursor-pointer"
                >
                  <option value="">Select timeframe</option>
                  <option value="immediate">Immediately</option>
                  <option value="soon">Within 1 month</option>
                  <option value="later">Within 3 months</option>
                  <option value="unsure">I'm not sure yet</option>
                </select>
              </div>
            </div>
          </div>
          {/* Price Display */}
          <div className="mt-6 bg-[#0F0B1F] rounded-lg p-6 border border-[#2D2755] hover:border-[#EA3A70]/50 transition-colors">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="bg-gradient-to-r from-purple-500/20 to-[#EA3A70]/20 p-3 rounded-xl mr-4">
                  <SparklesIcon className="h-6 w-6 text-[#EA3A70]" />
                </div>
                <div>
                  <div className="text-sm text-gray-400">Starting from</div>
                  <div className="flex items-baseline">
                    <span className="text-3xl font-bold text-white">€99</span>
                    <span className="text-sm text-gray-400 ml-1">/month</span>
                  </div>
                </div>
              </div>
              <EBranchInfo />
            </div>
          </div>
          {/* Compliance Scanner */}
          {(scanning || scanResults) && (
            <div className="mt-6 bg-[#0F0B1F] rounded-lg p-6 border border-[#2D2755]">
              <div className="flex items-center mb-4">
                <SparklesIcon className="h-5 w-5 text-[#EA3A70] mr-2" />
                <span className="text-white font-medium">
                  {scanning
                    ? 'Analyzing Requirements...'
                    : 'Compliance Analysis'}
                </span>
              </div>
              {scanning ? (
                <div className="space-y-3">
                  <div className="h-2 bg-[#2D2755] rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-purple-500 to-[#EA3A70] w-3/4 animate-pulse rounded-full" />
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">
                      Scanning regulatory requirements...
                    </span>
                    <span className="text-gray-400">75%</span>
                  </div>
                </div>
              ) : (
                scanResults && (
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-2 hover:bg-[#2D2755]/30 rounded-lg transition-colors">
                      <span className="text-gray-300">Legal Structure</span>
                      <div className="flex items-center">
                        <CheckIcon className="h-5 w-5 text-green-400" />
                      </div>
                    </div>
                    <div className="flex items-center justify-between p-2 hover:bg-[#2D2755]/30 rounded-lg transition-colors">
                      <span className="text-gray-300">Tax Requirements</span>
                      <div className="flex items-center">
                        {scanResults.tax ? (
                          <CheckIcon className="h-5 w-5 text-green-400" />
                        ) : (
                          <AlertTriangleIcon className="h-5 w-5 text-yellow-400" />
                        )}
                      </div>
                    </div>
                    <div className="flex items-center justify-between p-2 hover:bg-[#2D2755]/30 rounded-lg transition-colors">
                      <span className="text-gray-300">Employment Laws</span>
                      <div className="flex items-center">
                        {scanResults.employment ? (
                          <CheckIcon className="h-5 w-5 text-green-400" />
                        ) : (
                          <AlertTriangleIcon className="h-5 w-5 text-yellow-400" />
                        )}
                      </div>
                    </div>
                  </div>
                )
              )}
            </div>
          )}
          <div className="mt-6 flex gap-4">
            <button
              type="submit"
              className="flex-1 bg-[#EA3A70] text-white py-3 px-6 rounded-lg font-medium hover:bg-[#EA3A70]/90 transition-colors flex items-center justify-center group"
            >
              Check Prices
              <ArrowRightIcon className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              type="button"
              className="flex-1 border border-[#EA3A70] text-[#EA3A70] py-3 px-6 rounded-lg font-medium hover:bg-[#EA3A70]/10 transition-colors"
            >
              Onboard Existing Company
            </button>
          </div>
        </form>
      </div>
      {/* PortalPromotion modal */}
      <PortalPromotion
        isOpen={showPlanDetails}
        onClose={() => setShowPlanDetails(false)}
      />
    </div>
  )
}
