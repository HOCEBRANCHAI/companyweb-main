import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  GlobeIcon,
  ArrowRightIcon,
  CheckIcon,
  ChevronDownIcon,
  XIcon,
  SparklesIcon,
} from 'lucide-react'
import { Link } from 'react-router-dom'
import { countries } from '../countries'
export function StickyBookingHeader() {
  const navigate = useNavigate()
  const [isVisible, setIsVisible] = useState(false)
  const [from, setFrom] = useState('')
  const [to, setTo] = useState('')
  const [isExpanded, setIsExpanded] = useState(false)
  const [showQuoteOption, setShowQuoteOption] = useState(false)
  const [isCollapsed, setIsCollapsed] = useState(false)
  useEffect(() => {
    // Show the header after user has scrolled a bit
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  const handleCountrySelect = (country: string, type: 'from' | 'to') => {
    if (type === 'from') setFrom(country)
    else {
      setTo(country)
      // After selecting destination country, show the quote option
      setTimeout(() => {
        setShowQuoteOption(true)
      }, 500)
    }
  }
  const handleGetQuote = () => {
    navigate('/market-entry')
  }
  const handleContinueBrowsing = () => {
    setShowQuoteOption(false)
    setIsExpanded(false)
    // Here you could potentially store the user preferences in localStorage
    // to personalize content throughout the site
  }
  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed)
    if (isCollapsed) {
      setIsExpanded(false)
      setShowQuoteOption(false)
    }
  }
  if (!isVisible) return null
  return (
    <div
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isCollapsed ? 'h-10' : ''}`}
    >
      {/* Collapsed state indicator */}
      {isCollapsed && (
        <div
          className="bg-[#1B1537] border-b border-[#2D2755] h-10 flex items-center justify-between px-4 cursor-pointer"
          onClick={toggleCollapse}
        >
          <div className="flex items-center">
            <GlobeIcon className="h-4 w-4 text-[#EA3A70] mr-2" />
            <span className="text-sm text-white">
              {to
                ? `Optimized for ${countries[to] || to}`
                : 'Personalize your experience'}
            </span>
          </div>
          <ChevronDownIcon className="h-4 w-4 text-gray-400" />
        </div>
      )}
      {/* Expanded header */}
      {!isCollapsed && (
        <div className="bg-[#1B1537] border-b border-[#2D2755] shadow-lg backdrop-blur-md bg-opacity-95">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between py-3">
              <div className="flex items-center">
                <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 p-1.5 rounded-full mr-3">
                  <SparklesIcon className="h-4 w-4 text-purple-400" />
                </div>
                <span className="text-white text-sm font-medium">
                  {isExpanded
                    ? 'Customize your experience'
                    : 'Optimize your browsing experience'}
                </span>
              </div>
              {!isExpanded ? (
                <button
                  onClick={() => setIsExpanded(true)}
                  className="text-[#EA3A70] text-sm hover:text-[#EA3A70]/80 flex items-center"
                >
                  Select your target market
                  <ArrowRightIcon className="h-3 w-3 ml-1" />
                </button>
              ) : (
                <button
                  onClick={toggleCollapse}
                  className="text-gray-400 hover:text-white"
                >
                  <XIcon className="h-4 w-4" />
                </button>
              )}
            </div>
            {isExpanded && (
              <div className="py-3 pb-4 animate-fadeIn">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {/* From Country */}
                  <div>
                    <label className="block text-xs font-medium text-gray-400 mb-1">
                      Your current location
                    </label>
                    <div className="relative">
                      <GlobeIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                      <select
                        value={from}
                        onChange={(e) =>
                          handleCountrySelect(e.target.value, 'from')
                        }
                        className="w-full bg-[#0F0B1F] border border-[#2D2755] rounded-lg pl-9 pr-4 py-2 text-sm text-white focus:outline-none focus:border-[#EA3A70] hover:border-[#EA3A70]/50 transition-colors cursor-pointer"
                      >
                        <option value="">Select country</option>
                        <option value="us">United States</option>
                        <option value="uk">United Kingdom</option>
                        <option value="ca">Canada</option>
                        <option value="au">Australia</option>
                      </select>
                    </div>
                  </div>
                  {/* To Country */}
                  <div>
                    <label className="block text-xs font-medium text-gray-400 mb-1">
                      Your target market
                    </label>
                    <div className="relative">
                      <GlobeIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                      <select
                        value={to}
                        onChange={(e) =>
                          handleCountrySelect(e.target.value, 'to')
                        }
                        className="w-full bg-[#0F0B1F] border border-[#2D2755] rounded-lg pl-9 pr-4 py-2 text-sm text-white focus:outline-none focus:border-[#EA3A70] hover:border-[#EA3A70]/50 transition-colors cursor-pointer"
                      >
                        <option value="">Select country</option>
                        {Object.entries(countries).map(([key, name]) => (
                          <option key={key} value={key}>
                            {name}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                  {/* Action Button */}
                  <div className="flex items-end">
                    <button
                      onClick={() => {
                        if (to) {
                          setShowQuoteOption(true)
                        }
                      }}
                      disabled={!to}
                      className="w-full bg-[#EA3A70] text-white py-2 px-4 rounded-lg text-sm font-medium hover:bg-[#EA3A70]/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                    >
                      Personalize My Experience
                      <CheckIcon className="h-4 w-4 ml-2" />
                    </button>
                  </div>
                </div>
                {/* Quote Option */}
                {showQuoteOption && (
                  <div className="mt-4 p-3 bg-[#0F0B1F] border border-[#2D2755] rounded-lg animate-fadeIn">
                    <p className="text-white text-sm mb-3">
                      Great! We'll optimize your experience for{' '}
                      {countries[to] || to}. Would you like to:
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3">
                      <button
                        onClick={handleGetQuote}
                        className="flex-1 bg-[#EA3A70] text-white py-2 px-4 rounded-lg text-sm font-medium hover:bg-[#EA3A70]/90 transition-colors flex items-center justify-center"
                      >
                        Get a Quote Now
                        <ArrowRightIcon className="h-3 w-3 ml-2" />
                      </button>
                      <button
                        onClick={handleContinueBrowsing}
                        className="flex-1 border border-[#EA3A70] text-[#EA3A70] py-2 px-4 rounded-lg text-sm font-medium hover:bg-[#EA3A70]/10 transition-colors"
                      >
                        Continue Browsing
                      </button>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
