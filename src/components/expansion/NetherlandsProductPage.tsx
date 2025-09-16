import React, { useEffect, useState, useRef } from 'react'
import {
  CheckIcon,
  ClockIcon,
  FileTextIcon,
  BuildingIcon,
  CreditCardIcon,
  ShieldCheckIcon,
  ChevronRightIcon,
  ArrowRightIcon,
  MousePointerIcon,
  ArrowDownIcon,
  ArrowUpIcon,
  MessageSquareIcon,
} from 'lucide-react'
import { Header } from '../layout/Header'
import { Footer } from '../layout/Footer'

export const NetherlandsProductPage = () => {
  // State for scroll animations
  const [scrollY, setScrollY] = useState(0)
  const [activeTab, setActiveTab] = useState('one-off')
  const [isVisible, setIsVisible] = useState<Record<string, boolean>>({})
  const [showScrollTop, setShowScrollTop] = useState(false)
  const [mouseCursor, setMouseCursor] = useState({
    x: 0,
    y: 0,
  })
  const [mouseHovering, setMouseHovering] = useState(false)
  const [showChat, setShowChat] = useState(false)
  const [typingText, setTypingText] = useState({
    current: '',
    target: 'Launch your business in the Netherlands',
    index: 0,
  })
  const [counting, setCounting] = useState({
    companies: 0,
    hours: 0,
    satisfaction: 0,
    countries: 0,
  })
  const [scrollProgress, setScrollProgress] = useState(0)
  // Refs for intersection observer
  const sectionRefs = useRef<HTMLDivElement[]>([])
  // Handle mouse movement for custom cursor effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMouseCursor({
        x: e.clientX,
        y: e.clientY,
      })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])
  // Handle scroll events for parallax and animations
  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY
      setScrollY(position)
      setShowScrollTop(position > 500)
      // Calculate scroll progress
      const totalHeight = document.body.scrollHeight - window.innerHeight
      const progress = (position / totalHeight) * 100
      setScrollProgress(progress)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  // Typing effect
  useEffect(() => {
    if (typingText.current.length < typingText.target.length) {
      const timeout = setTimeout(() => {
        setTypingText((prev) => ({
          ...prev,
          current: prev.target.substring(0, prev.current.length + 1),
          index: prev.index + 1,
        }))
      }, 100)
      return () => clearTimeout(timeout)
    }
  }, [typingText])
  // Counter animation effect
  useEffect(() => {
    if (scrollY > 800 && counting.companies < 500) {
      const timeout = setTimeout(() => {
        setCounting((prev) => ({
          companies: Math.min(prev.companies + 10, 500),
          hours: Math.min(prev.hours + 1, 48),
          satisfaction: Math.min(prev.satisfaction + 2, 98),
          countries: Math.min(prev.countries + 1, 27),
        }))
      }, 50)
      return () => clearTimeout(timeout)
    }
  }, [scrollY, counting])
  // Intersection Observer for revealing elements on scroll
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1,
    }
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry: IntersectionObserverEntry) => {
        if (entry.isIntersecting) {
          setIsVisible((prev) => ({
            ...prev,
            [entry.target.id]: true,
          }))
        }
      })
    }
    const observer = new IntersectionObserver(observerCallback, observerOptions)
    // Observe all sections with data-section attribute
    const sections = document.querySelectorAll('[data-section]')
    sections.forEach((section) => {
      observer.observe(section)
    })
    return () => observer.disconnect()
  }, [])
  // Animation helper for scroll-triggered elements
  const getScrollAnimation = (delay = 0) => ({
    opacity: scrollY > delay ? 1 : 0,
    transform: `translateY(${scrollY > delay ? 0 : 20}px)`,
    transition: 'all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1)',
  })
  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }
  return (
    <>
      <Header />
      <div className="w-full min-h-screen bg-navy-900 overflow-x-hidden">
      {/* Custom mouse cursor effect */}
      <div
        className="fixed w-8 h-8 rounded-full border-2 border-pink-500 pointer-events-none z-50 mix-blend-difference transition-transform duration-100"
        style={{
          left: `${mouseCursor.x}px`,
          top: `${mouseCursor.y}px`,
          transform: `translate(-50%, -50%) scale(${mouseHovering ? 1.5 : 1})`,
          opacity: mouseHovering ? 0.8 : 0.4,
        }}
      />
      {/* Scroll progress indicator */}
      <div className="fixed top-0 left-0 w-full h-1 bg-navy-800 z-50">
        <div
          className="h-full bg-gradient-to-r from-pink-500 via-pink-600 to-pink-400"
          style={{
            width: `${scrollProgress}%`,
          }}
        />
      </div>
      {/* Back to top button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-6 right-6 bg-pink-600 text-white p-3 rounded-full shadow-lg z-40 transition-all duration-300 ${showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}`}
      >
        <ArrowUpIcon className="h-5 w-5" />
      </button>
      {/* Floating chat button */}
      <div className="fixed bottom-6 right-6 z-40">
        <button
          onClick={() => setShowChat(!showChat)}
          className="bg-pink-600 text-white p-3 rounded-full shadow-lg hover:bg-pink-700 transition-all duration-300"
          onMouseEnter={() => setMouseHovering(true)}
          onMouseLeave={() => setMouseHovering(false)}
        >
          <MessageSquareIcon className="h-5 w-5" />
        </button>
        {showChat && (
          <div className="absolute bottom-16 right-0 w-64 bg-navy-800 rounded-lg shadow-2xl border border-navy-700 p-4 animate-fadeIn">
            <h4 className="text-white font-bold mb-2">Need help?</h4>
            <p className="text-gray-300 text-sm mb-3">
              Our team is ready to assist you with your Netherlands branch
              registration.
            </p>
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Your question..."
                className="flex-1 px-3 py-1 rounded bg-navy-700 text-white border border-navy-600 text-sm"
              />
              <button className="bg-pink-600 text-white px-2 py-1 rounded text-sm">
                Send
              </button>
            </div>
          </div>
        )}
      </div>
      {/* Full-screen Hero Section with new image */}
      <header className="relative h-screen w-full flex flex-col justify-end items-start overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://uploadthingy.s3.us-west-1.amazonaws.com/6hU1gdwE6gr8U2dBqngAUT/image.png"
            alt="Netherlands landscape"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-navy-900/50 via-navy-900/30 to-navy-900"></div>
        </div>
        
        {/* Hero Content - Simplified to prevent overlap */}
        <div className="relative z-10 w-full px-6 md:px-10 pb-32">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white drop-shadow-lg leading-tight">
              Netherlands Branch Registration
            </h1>
            <div className="h-1 w-24 bg-pink-500 mb-6"></div>
            <p className="text-xl md:text-2xl text-white max-w-2xl drop-shadow-lg mb-8 leading-relaxed">
              Launch your business in the Netherlands with our digital-first branch registration service
            </p>
            <button className="bg-pink-600 hover:bg-pink-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-300 shadow-lg hover:shadow-xl">
              Get Started Today →
            </button>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 flex flex-col items-center">
          <span className="text-white text-sm mb-2 opacity-80">Scroll</span>
          <ArrowDownIcon className="h-6 w-6 text-white opacity-80" />
        </div>
      </header>
      {/* Main Content */}
      <main className="container mx-auto px-4 py-16 relative">
        {/* Description */}
        <section
          id="description-section"
          data-section
          className={`mb-20 transition-all duration-1000 transform ${isVisible['description-section'] ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}
        >
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2 text-left">
              <h2 className="text-2xl font-bold mb-6 text-white relative inline-block">
                Why Choose Netherlands?
                <span className="absolute -bottom-1 left-0 w-1/3 h-1 bg-gradient-to-r from-pink-400 to-pink-600 rounded-full"></span>
              </h2>
              <p className="text-base leading-relaxed text-gray-300">
                The Netherlands offers one of Europe's most efficient business
                environments. Your Dutch Branch Office gives your business
                instant credibility in the EU market. It's perfect for founders
                who need a hassle-free European presence with minimal
                bureaucracy and maximum business potential.
              </p>
              <div className="mt-6 p-3 bg-navy-800 border border-navy-700 rounded-lg shadow-inner relative overflow-hidden group hover:border-pink-500 transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-r from-pink-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <h4 className="text-white font-semibold flex items-center text-sm">
                  <span className="bg-pink-600 p-1 rounded mr-2 flex-shrink-0">
                    <ClockIcon className="h-3 w-3 text-white" />
                  </span>
                  Quick Setup Time
                </h4>
                <div className="w-full bg-navy-700 h-2 rounded-full mt-2 overflow-hidden">
                  <div
                    className="bg-gradient-to-r from-pink-500 to-pink-600 h-full rounded-full animate-progress"
                    style={{
                      width: '85%',
                    }}
                  ></div>
                </div>
                <div className="flex justify-between text-xs text-gray-400 mt-1">
                  <span>Traditional setup: 4-6 weeks</span>
                  <span className="text-pink-400 font-semibold">
                    Our service: 5-7 days
                  </span>
                </div>
              </div>
            </div>
            <div className="md:w-1/2 transform hover:scale-[1.02] transition-all duration-500 hover:shadow-2xl rounded-lg overflow-hidden relative group">
              <div className="absolute inset-0 bg-gradient-to-tr from-pink-600/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 z-10"></div>
              <img
                src="https://uploadthingy.s3.us-west-1.amazonaws.com/pHefXJBrALrGAafjZXDMby/pasted-image.png"
                alt="Business growth chart"
                className="w-full h-auto rounded-lg shadow-lg"
              />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 z-20">
                <span className="bg-navy-900/80 text-white px-4 py-2 rounded-lg backdrop-blur-sm border border-pink-500/50 transform group-hover:scale-110 transition-all duration-500">
                  View EU Growth Potential
                </span>
              </div>
            </div>
          </div>
        </section>
        {/* Pricing Section */}
        <section
          id="pricing-section"
          data-section
          className={`mb-20 relative transition-all duration-1000 transform ${isVisible['pricing-section'] ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}
        >
          <div className="text-center mb-10">
            <span className="inline-block bg-pink-600/20 text-pink-400 px-4 py-1 rounded-full text-sm font-semibold mb-2 animate-pulse">
              PRICING OPTIONS
            </span>
            <h2 className="text-2xl md:text-3xl font-bold mb-3 text-white">
              Choose Your Branch Office
            </h2>
            <p className="text-base text-gray-300 max-w-2xl mx-auto">
              Select the option that best suits your business needs in the
              Netherlands
            </p>
          </div>
          {/* Pricing Tabs */}
          <div className="flex justify-center mb-8 relative">
            <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-pink-500/0 via-pink-500/10 to-pink-500/0 animate-gradient-x"></div>
            <div className="bg-navy-800 p-1 rounded-lg inline-flex relative z-10">
              <button
                onClick={() => setActiveTab('one-off')}
                className={`py-2 px-4 rounded-md text-sm font-medium transition-all duration-300 ${activeTab === 'one-off' ? 'bg-pink-600 text-white shadow-md' : 'text-gray-300 hover:text-white'}`}
                onMouseEnter={() => setMouseHovering(true)}
                onMouseLeave={() => setMouseHovering(false)}
              >
                One-Off Registration
              </button>
              <button
                onClick={() => setActiveTab('ebranch')}
                className={`py-2 px-4 rounded-md text-sm font-medium transition-all duration-300 ${activeTab === 'ebranch' ? 'bg-pink-600 text-white shadow-md' : 'text-gray-300 hover:text-white'}`}
                onMouseEnter={() => setMouseHovering(true)}
                onMouseLeave={() => setMouseHovering(false)}
              >
                eBranch
              </button>
              <button
                onClick={() => setActiveTab('market')}
                className={`py-2 px-4 rounded-md text-sm font-medium transition-all duration-300 ${activeTab === 'market' ? 'bg-pink-600 text-white shadow-md' : 'text-gray-300 hover:text-white'}`}
                onMouseEnter={() => setMouseHovering(true)}
                onMouseLeave={() => setMouseHovering(false)}
              >
                Market Entry
              </button>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* One-Off Registration */}
            <div
              className={`border border-navy-700 bg-navy-800 rounded-xl p-6 shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col h-full transform ${activeTab === 'one-off' ? 'scale-105 border-pink-500 shadow-xl z-10' : 'hover:-translate-y-1'}`}
              onMouseEnter={() => setMouseHovering(true)}
              onMouseLeave={() => setMouseHovering(false)}
            >
              <div className="mb-2">
                <h3 className="text-lg font-bold text-white">
                  One-Off Registration
                </h3>
                <p className="text-sm text-gray-300">Simple branch setup</p>
              </div>
              <div className="my-4">
                <div className="flex items-baseline">
                  <span className="text-2xl font-bold text-pink-400">€895</span>
                  <span className="ml-2 text-gray-300">/one-time</span>
                </div>
              </div>
              <div className="border-t border-navy-700 my-4 pt-4 flex-grow">
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckIcon className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300 text-sm">
                      KVK registration & EU VAT number
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckIcon className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300 text-sm">
                      No notary requirement
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckIcon className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300 text-sm">
                      Basic documentation support
                    </span>
                  </li>
                </ul>
                <p className="text-xs text-gray-400 mt-4">
                  +€80 KVK registration fee applies
                </p>
              </div>
              <button className="mt-auto w-full py-2.5 px-4 bg-navy-800 border-2 border-pink-600 text-pink-400 font-semibold rounded-lg hover:bg-navy-700 transition-colors flex items-center justify-center group relative overflow-hidden">
                <span className="absolute inset-0 w-0 h-full bg-pink-600 transition-all duration-300 group-hover:h-full"></span>
                <span className="relative flex items-center group-hover:text-white transition-colors duration-300">
                  Select Plan
                  <ArrowRightIcon className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </button>
            </div>
            {/* eBranch */}
            <div
              className={`border-2 rounded-xl p-6 shadow-xl relative flex flex-col h-full transform transition-all duration-500 ${activeTab === 'ebranch' ? 'scale-105 border-pink-500 shadow-2xl bg-gradient-to-b from-navy-800 to-navy-900 z-20' : 'border-navy-700 bg-navy-800 hover:-translate-y-1'}`}
              onMouseEnter={() => setMouseHovering(true)}
              onMouseLeave={() => setMouseHovering(false)}
            >
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-pink-600 text-white px-4 py-1 rounded-full text-xs font-bold">
                Most Popular
              </div>
              {/* Animated background effect for active card */}
              {activeTab === 'ebranch' && (
                <div className="absolute inset-0 overflow-hidden rounded-xl">
                  <div className="absolute -inset-[10px] bg-gradient-to-r from-pink-500/20 via-pink-600/20 to-pink-500/20 rounded-xl animate-gradient-x opacity-50"></div>
                </div>
              )}
              <div className="mb-2 relative">
                <h3 className="text-lg font-bold text-white">eBranch</h3>
                <p className="text-sm text-gray-300">
                  Complete management solution
                </p>
              </div>
              <div className="my-4 relative">
                <div className="inline-block bg-red-900 text-red-300 px-2 py-0.5 rounded-full text-xs font-semibold mb-1 animate-pulse">
                  SAVE €600
                </div>
                <div className="flex items-baseline">
                  <span className="text-2xl font-bold text-pink-400">
                    €1,995
                  </span>
                  <span className="ml-2 text-gray-500 line-through text-sm">
                    €2,595
                  </span>
                  <span className="ml-2 text-gray-300">/yearly</span>
                </div>
              </div>
              <div className="border-t border-navy-700 my-4 pt-4 flex-grow relative">
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckIcon className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300 text-sm">
                      KVK registration & EU VAT number
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckIcon className="h-5 w-5 text-pink-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300 font-medium text-sm">
                      Registered Office (€1,200 value)
                      +
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckIcon className="h-5 w-5 text-pink-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300 font-medium text-sm">
                      Advanced Software Suite
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckIcon className="h-5 w-5 text-pink-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300 font-medium text-sm">
                      AI + Community Support
                    </span>
                  </li>
                </ul>
                <p className="text-xs text-gray-400 mt-4">
                  Pause or cancel anytime after 1 year
                </p>
              </div>
              <button className="mt-auto w-full py-2.5 px-4 bg-gradient-to-r from-pink-600 to-pink-700 hover:from-pink-700 hover:to-pink-800 text-white font-semibold rounded-lg transition-colors shadow-md flex items-center justify-center group relative overflow-hidden">
                <span className="absolute inset-0 w-0 h-full bg-white opacity-20 transition-all duration-500 group-hover:w-full"></span>
                <span className="relative flex items-center">
                  Get Started
                  <ArrowRightIcon className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </button>
            </div>
            {/* eBranch & Go-to-Market */}
            <div
              className={`border border-navy-700 bg-navy-800 rounded-xl p-6 shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col h-full transform ${activeTab === 'market' ? 'scale-105 border-pink-500 shadow-xl z-10' : 'hover:-translate-y-1'}`}
              onMouseEnter={() => setMouseHovering(true)}
              onMouseLeave={() => setMouseHovering(false)}
            >
              <div className="mb-2">
                <h3 className="text-lg font-bold text-white">
                  eBranch + Market Entry
                </h3>
                <p className="text-sm text-gray-300">
                  Strategic expansion package
                </p>
              </div>
              <div className="my-4">
                <div className="inline-block bg-red-900 text-red-300 px-2 py-0.5 rounded-full text-xs font-semibold mb-1">
                  SAVE €200
                </div>
                <div className="flex items-baseline">
                  <span className="text-2xl font-bold text-pink-400">
                    €2,290
                  </span>
                  <span className="ml-2 text-gray-500 line-through text-sm">
                    €2,490
                  </span>
                  <span className="ml-2 text-gray-300">/yearly</span>
                </div>
              </div>
              <div className="border-t border-navy-700 my-4 pt-4 flex-grow relative">
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckIcon className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300 text-sm">
                      Everything in eBranch
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckIcon className="h-5 w-5 text-pink-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300 font-medium text-sm">
                      Market analysis report
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckIcon className="h-5 w-5 text-pink-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300 font-medium text-sm">
                      Strategic entry roadmap
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckIcon className="h-5 w-5 text-pink-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300 font-medium text-sm">
                      Competitor & customer analysis
                    </span>
                  </li>
                </ul>
                <p className="text-xs text-gray-400 mt-4">
                  Ideal for businesses targeting EU expansion
                </p>
              </div>
              <button className="mt-auto w-full py-2.5 px-4 bg-navy-800 border-2 border-pink-600 text-pink-400 font-semibold rounded-lg hover:bg-navy-700 transition-colors flex items-center justify-center group relative overflow-hidden">
                <span className="absolute inset-0 w-full h-0 bg-pink-600 transition-all duration-300 group-hover:h-full"></span>
                <span className="relative flex items-center group-hover:text-white transition-colors duration-300">
                  Select Plan
                  <ArrowRightIcon className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </button>
            </div>
          </div>
        </section>
        {/* Core Benefits Section */}
        <section
          id="benefits-section"
          data-section
          className={`mb-16 bg-gradient-to-br from-navy-700 via-navy-800 to-navy-900 py-8 px-4 rounded-2xl shadow-lg border border-navy-700 relative overflow-hidden transition-all duration-1000 transform ${isVisible['benefits-section'] ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}
        >
          {/* Background glow effects with animation */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-pink-600 rounded-full filter blur-[100px] opacity-10 animate-pulse"></div>
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-pink-600 rounded-full filter blur-[100px] opacity-10 animate-pulse animation-delay-1000"></div>
          {/* Background pattern */}
          <div className="absolute inset-0 bg-[url('https://uploads-ssl.webflow.com/63f580596efa74629ceecdf5/646b69e6cd22a91f9dd2c0dc_noise-50.png')] opacity-5"></div>
          <div className="text-center mb-6 relative">
            <div className="inline-block bg-gradient-to-r from-navy-800 to-navy-900 p-1 rounded-full shadow-lg mb-2">
              <span className="bg-navy-700 text-pink-400 px-4 py-1 rounded-full text-xs font-semibold inline-block shadow-inner">
                ✨ WHY CHOOSE US ✨
              </span>
            </div>
            <h2 className="text-3xl font-bold mb-2 text-white bg-clip-text text-transparent bg-gradient-to-r from-white via-pink-200 to-white animate-gradient-x">
              Core Benefits
            </h2>
            <p className="text-sm text-gray-300 max-w-xl mx-auto">
              Everything you need to establish and operate your Dutch branch
              quickly and compliantly
            </p>
            <div className="w-16 h-0.5 bg-gradient-to-r from-pink-400 via-pink-600 to-pink-400 mx-auto mt-3 rounded-full animate-gradient-x"></div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 max-w-5xl mx-auto relative">
            {/* Card 1 - Official Registration */}
            <div
              className="bg-gradient-to-br from-navy-800 to-navy-900 border border-navy-700 hover:border-pink-400 rounded-lg p-3 shadow-md hover:shadow-lg transition-all duration-300 group relative transform hover:-translate-y-1 hover:z-10"
              onMouseEnter={() => setMouseHovering(true)}
              onMouseLeave={() => setMouseHovering(false)}
            >
              {/* Shine effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-pink-500 to-transparent opacity-0 group-hover:opacity-10 rounded-lg transition-opacity duration-300"></div>
              <div className="bg-gradient-to-br from-navy-700 to-navy-800 rounded-lg w-12 h-12 flex items-center justify-center mb-2 shadow-md group-hover:bg-pink-600 transition-colors duration-300">
                <BuildingIcon className="h-6 w-6 text-pink-500 group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-xs font-bold mb-1 text-white group-hover:text-pink-400 transition-colors duration-300">
                Official Registration 🏢
              </h3>
              <p className="text-gray-300 text-xs">Complete KVK registration</p>
              {/* Animated check mark that appears on hover */}
              <div className="absolute -top-1 -right-1 bg-green-500 rounded-full w-5 h-5 flex items-center justify-center transform scale-0 group-hover:scale-100 transition-transform duration-300">
                <CheckIcon className="h-3 w-3 text-white" />
              </div>
            </div>
            {/* Card 2 - Legal Documentation */}
            <div
              className="bg-gradient-to-br from-navy-800 to-navy-900 border border-navy-700 hover:border-pink-400 rounded-lg p-3 shadow-md hover:shadow-lg transition-all duration-300 group relative transform hover:-translate-y-1 animation-delay-100 hover:z-10"
              onMouseEnter={() => setMouseHovering(true)}
              onMouseLeave={() => setMouseHovering(false)}
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-pink-500 to-transparent opacity-0 group-hover:opacity-10 rounded-lg transition-opacity duration-300"></div>
              <div className="bg-gradient-to-br from-navy-700 to-navy-800 rounded-lg w-12 h-12 flex items-center justify-center mb-2 shadow-md group-hover:bg-pink-600 transition-colors duration-300">
                <FileTextIcon className="h-6 w-6 text-pink-500 group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-xs font-bold mb-1 text-white group-hover:text-pink-400 transition-colors duration-300">
                Legal Documentation 📄
              </h3>
              <p className="text-gray-300 text-xs">
                Dutch commercial register extract
              </p>
              <div className="absolute -top-1 -right-1 bg-green-500 rounded-full w-5 h-5 flex items-center justify-center transform scale-0 group-hover:scale-100 transition-transform duration-300">
                <CheckIcon className="h-3 w-3 text-white" />
              </div>
            </div>
            {/* Card 3 - EU VAT Number */}
            <div
              className="bg-gradient-to-br from-navy-800 to-navy-900 border border-navy-700 hover:border-pink-400 rounded-lg p-3 shadow-md hover:shadow-lg transition-all duration-300 group relative transform hover:-translate-y-1 animation-delay-200 hover:z-10"
              onMouseEnter={() => setMouseHovering(true)}
              onMouseLeave={() => setMouseHovering(false)}
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-pink-500 to-transparent opacity-0 group-hover:opacity-10 rounded-lg transition-opacity duration-300"></div>
              <div className="bg-gradient-to-br from-navy-700 to-navy-800 rounded-lg w-12 h-12 flex items-center justify-center mb-2 shadow-md group-hover:bg-pink-600 transition-colors duration-300">
                <CreditCardIcon className="h-6 w-6 text-pink-500 group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-xs font-bold mb-1 text-white group-hover:text-pink-400 transition-colors duration-300">
                EU VAT Number 🇪🇺
              </h3>
              <p className="text-gray-300 text-xs">
                Dutch tax and EU VAT registration
              </p>
              <div className="absolute -top-1 -right-1 bg-green-500 rounded-full w-5 h-5 flex items-center justify-center transform scale-0 group-hover:scale-100 transition-transform duration-300">
                <CheckIcon className="h-3 w-3 text-white" />
              </div>
            </div>
            {/* Card 4 - Legal Address */}
            <div
              className="bg-gradient-to-br from-navy-800 to-navy-900 border border-navy-700 hover:border-pink-400 rounded-lg p-3 shadow-md hover:shadow-lg transition-all duration-300 group relative transform hover:-translate-y-1 animation-delay-300 hover:z-10"
              onMouseEnter={() => setMouseHovering(true)}
              onMouseLeave={() => setMouseHovering(false)}
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-pink-500 to-transparent opacity-0 group-hover:opacity-10 rounded-lg transition-opacity duration-300"></div>
              <div className="bg-gradient-to-br from-navy-700 to-navy-800 rounded-lg w-12 h-12 flex items-center justify-center mb-2 shadow-md group-hover:bg-pink-600 transition-colors duration-300">
                <BuildingIcon className="h-6 w-6 text-pink-500 group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-xs font-bold mb-1 text-white group-hover:text-pink-400 transition-colors duration-300">
                Legal Address 📍
              </h3>
              <p className="text-gray-300 text-xs">
                3 months business address included
              </p>
              <div className="absolute -top-1 -right-1 bg-green-500 rounded-full w-5 h-5 flex items-center justify-center transform scale-0 group-hover:scale-100 transition-transform duration-300">
                <CheckIcon className="h-3 w-3 text-white" />
              </div>
            </div>
            {/* Card 5 - Account Manager */}
            <div
              className="bg-gradient-to-br from-navy-800 to-navy-900 border border-navy-700 hover:border-pink-400 rounded-lg p-3 shadow-md hover:shadow-lg transition-all duration-300 group relative transform hover:-translate-y-1 animation-delay-400 hover:z-10"
              onMouseEnter={() => setMouseHovering(true)}
              onMouseLeave={() => setMouseHovering(false)}
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-pink-500 to-transparent opacity-0 group-hover:opacity-10 rounded-lg transition-opacity duration-300"></div>
              <div className="bg-gradient-to-br from-navy-700 to-navy-800 rounded-lg w-12 h-12 flex items-center justify-center mb-2 shadow-md group-hover:bg-pink-600 transition-colors duration-300">
                <ShieldCheckIcon className="h-6 w-6 text-pink-500 group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-xs font-bold mb-1 text-white group-hover:text-pink-400 transition-colors duration-300">
                Account Manager 👨‍💼
              </h3>
              <p className="text-gray-300 text-xs">AI + Community support</p>
              <div className="absolute -top-1 -right-1 bg-green-500 rounded-full w-5 h-5 flex items-center justify-center transform scale-0 group-hover:scale-100 transition-transform duration-300">
                <CheckIcon className="h-3 w-3 text-white" />
              </div>
            </div>
            {/* Card 6 - 48-Hour Processing */}
            <div
              className="bg-gradient-to-br from-navy-800 to-navy-900 border border-navy-700 hover:border-pink-400 rounded-lg p-3 shadow-md hover:shadow-lg transition-all duration-300 group relative transform hover:-translate-y-1 animation-delay-500 hover:z-10"
              onMouseEnter={() => setMouseHovering(true)}
              onMouseLeave={() => setMouseHovering(false)}
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-pink-500 to-transparent opacity-0 group-hover:opacity-10 rounded-lg transition-opacity duration-300"></div>
              <div className="bg-gradient-to-br from-navy-700 to-navy-800 rounded-lg w-12 h-12 flex items-center justify-center mb-2 shadow-md group-hover:bg-pink-600 transition-colors duration-300">
                <ClockIcon className="h-6 w-6 text-pink-500 group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-xs font-bold mb-1 text-white group-hover:text-pink-400 transition-colors duration-300">
                48-Hour Processing ⚡
              </h3>
              <p className="text-gray-300 text-xs">Expedited service</p>
              <div className="absolute -top-1 -right-1 bg-green-500 rounded-full w-5 h-5 flex items-center justify-center transform scale-0 group-hover:scale-100 transition-transform duration-300">
                <CheckIcon className="h-3 w-3 text-white" />
              </div>
            </div>
          </div>
          {/* Testimonials - Now with hover effects */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {/* Testimonial 1 */}
            <div
              className="bg-navy-800 rounded-lg p-4 border border-navy-700 shadow-md relative overflow-hidden group hover:border-pink-400 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              onMouseEnter={() => setMouseHovering(true)}
              onMouseLeave={() => setMouseHovering(false)}
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-pink-600 rounded-full filter blur-[60px] opacity-10 group-hover:opacity-20 transition-opacity duration-300"></div>
              {/* Animated quote marks */}
              <div className="absolute top-2 left-2 text-pink-500/10 text-4xl font-serif group-hover:text-pink-500/20 transition-colors duration-300">
                "
              </div>
              <div className="absolute bottom-2 right-2 text-pink-500/10 text-4xl font-serif group-hover:text-pink-500/20 transition-colors duration-300">
                "
              </div>
              <div className="flex items-center gap-3">
                <img
                  src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
                  alt="Happy customer"
                  className="w-14 h-14 rounded-full object-cover border-2 border-pink-500 shadow-lg group-hover:scale-105 transition-transform duration-300"
                />
                <div>
                  <div className="flex mb-1">
                    <span className="text-pink-500 text-sm group-hover:text-pink-400 transition-colors duration-300">
                      ★★★★★
                    </span>
                  </div>
                  <p className="text-gray-300 italic text-xs mb-2 group-hover:text-white transition-colors duration-300">
                    "The process was incredibly smooth. Within 48 hours, our
                    branch was registered and we had all the documentation we
                    needed!"
                  </p>
                  <div>
                    <p className="text-white font-semibold text-xs">
                      Sarah Johnson
                    </p>
                    <p className="text-gray-400 text-xs">
                      CEO, TechGrowth Inc.
                    </p>
                  </div>
                </div>
              </div>
              {/* Animated play button that appears on hover */}
              <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button className="bg-pink-600 rounded-full p-1 shadow-lg hover:bg-pink-700 transition-colors duration-300 transform hover:scale-110">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-white"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
            </div>
            {/* Testimonial 2 */}
            <div
              className="bg-navy-800 rounded-lg p-4 border border-navy-700 shadow-md relative overflow-hidden group hover:border-pink-400 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              onMouseEnter={() => setMouseHovering(true)}
              onMouseLeave={() => setMouseHovering(false)}
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-pink-600 rounded-full filter blur-[60px] opacity-10 group-hover:opacity-20 transition-opacity duration-300"></div>
              {/* Animated quote marks */}
              <div className="absolute top-2 left-2 text-pink-500/10 text-4xl font-serif group-hover:text-pink-500/20 transition-colors duration-300">
                "
              </div>
              <div className="absolute bottom-2 right-2 text-pink-500/10 text-4xl font-serif group-hover:text-pink-500/20 transition-colors duration-300">
                "
              </div>
              <div className="flex items-center gap-3">
                <img
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
                  alt="Business customer"
                  className="w-14 h-14 rounded-full object-cover border-2 border-pink-500 shadow-lg group-hover:scale-105 transition-transform duration-300"
                />
                <div>
                  <div className="flex mb-1">
                    <span className="text-pink-500 text-sm group-hover:text-pink-400 transition-colors duration-300">
                      ★★★★★
                    </span>
                  </div>
                  <p className="text-gray-300 italic text-xs mb-2 group-hover:text-white transition-colors duration-300">
                    "As a US startup, our EU expansion was seamless thanks to
                    the Netherlands branch registration. Exceptional service!"
                  </p>
                  <div>
                    <p className="text-white font-semibold text-xs">
                      Michael Chen
                    </p>
                    <p className="text-gray-400 text-xs">
                      Founder, Quantum Solutions
                    </p>
                  </div>
                </div>
              </div>
              {/* Animated play button that appears on hover */}
              <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button className="bg-pink-600 rounded-full p-1 shadow-lg hover:bg-pink-700 transition-colors duration-300 transform hover:scale-110">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-white"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div className="mt-6 text-center">
            <button
              className="bg-gradient-to-r from-pink-600 to-pink-700 hover:from-pink-700 hover:to-pink-800 text-white font-bold py-2 px-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 text-sm transform hover:scale-105 group relative overflow-hidden"
              onMouseEnter={() => setMouseHovering(true)}
              onMouseLeave={() => setMouseHovering(false)}
            >
              <span className="absolute inset-0 w-0 h-full bg-white opacity-20 transition-all duration-500 group-hover:w-full"></span>
              <span className="relative flex items-center justify-center">
                Learn More About Our Benefits
                <ArrowRightIcon className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </button>
          </div>
          {/* Stats Section with animated counters */}
          <div className="mt-8 grid grid-cols-2 md:grid-cols-3 gap-3 max-w-4xl mx-auto">
            <div
              className="bg-navy-800 bg-opacity-60 backdrop-blur-sm rounded-lg p-2 border border-navy-700 text-center hover:border-pink-400 transition-colors duration-300 transform hover:-translate-y-1 hover:shadow-lg relative overflow-hidden group"
              onMouseEnter={() => setMouseHovering(true)}
              onMouseLeave={() => setMouseHovering(false)}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-pink-500/5 via-pink-500/10 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="text-xl font-bold text-pink-400 mb-0 animate-pulse animation-delay-300 relative">
                {counting.hours}h
              </div>
              <div className="text-gray-300 text-xs">Average Processing</div>
            </div>
            <div
              className="bg-navy-800 bg-opacity-60 backdrop-blur-sm rounded-lg p-2 border border-navy-700 text-center hover:border-pink-400 transition-colors duration-300 transform hover:-translate-y-1 hover:shadow-lg relative overflow-hidden group"
              onMouseEnter={() => setMouseHovering(true)}
              onMouseLeave={() => setMouseHovering(false)}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-pink-500/5 via-pink-500/10 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="text-xl font-bold text-pink-400 mb-0 animate-pulse animation-delay-600 relative">
                {counting.satisfaction}%
              </div>
              <div className="text-gray-300 text-xs">Customer Satisfaction</div>
            </div>
            <div
              className="bg-navy-800 bg-opacity-60 backdrop-blur-sm rounded-lg p-2 border border-navy-700 text-center hover:border-pink-400 transition-colors duration-300 transform hover:-translate-y-1 hover:shadow-lg relative overflow-hidden group"
              onMouseEnter={() => setMouseHovering(true)}
              onMouseLeave={() => setMouseHovering(false)}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-pink-500/5 via-pink-500/10 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="text-xl font-bold text-pink-400 mb-0 animate-pulse animation-delay-900 relative">
                {counting.countries}
              </div>
              <div className="text-gray-300 text-xs">EU Countries Served</div>
            </div>
          </div>
        </section>
        {/* Documentation Section */}
        <section
          id="documentation-section"
          data-section
          className={`mb-16 bg-gradient-to-br from-navy-700 via-navy-800 to-navy-900 py-8 px-4 rounded-xl shadow-lg border border-navy-700 relative overflow-hidden transform hover:shadow-2xl transition-all duration-1000 ${isVisible['documentation-section'] ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}
        >
          {/* Background glow effects - reduced size */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-pink-600 rounded-full filter blur-[80px] opacity-10 animate-pulse"></div>
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-pink-600 rounded-full filter blur-[80px] opacity-10 animate-pulse animation-delay-1000"></div>
          {/* Background pattern */}
          <div className="absolute inset-0 bg-[url('https://uploads-ssl.webflow.com/63f580596efa74629ceecdf5/646b69e6cd22a91f9dd2c0dc_noise-50.png')] opacity-5"></div>
          <div className="text-center mb-5 relative">
            <div className="inline-block bg-gradient-to-r from-navy-800 to-navy-900 p-1 rounded-full shadow-lg mb-2">
              <span className="bg-navy-700 text-pink-400 px-3 py-0.5 rounded-full text-xs font-semibold inline-block shadow-inner">
                ✨ DOCUMENTATION ✨
              </span>
            </div>
            <h2 className="text-2xl font-bold mb-1 text-white bg-clip-text text-transparent bg-gradient-to-r from-white via-pink-200 to-white animate-gradient-x">
              Official Documentation
            </h2>
            <p className="text-xs text-gray-300 max-w-xl mx-auto">
              Complete set of legal documents included with your Dutch branch
              registration
            </p>
            <div className="w-12 h-0.5 bg-gradient-to-r from-pink-400 via-pink-600 to-pink-400 mx-auto mt-2 rounded-full animate-gradient-x"></div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-4xl mx-auto relative">
            {/* Document Card 1 */}
            <div
              className="bg-gradient-to-br from-navy-800 to-navy-900 border border-navy-700 hover:border-pink-400 rounded-lg p-3 shadow-md hover:shadow-lg transition-all duration-300 group relative transform hover:-translate-y-1 hover:z-10"
              onMouseEnter={() => setMouseHovering(true)}
              onMouseLeave={() => setMouseHovering(false)}
            >
              {/* Shine effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-pink-500 to-transparent opacity-0 group-hover:opacity-10 rounded-lg transition-opacity duration-300"></div>
              {/* Document preview that appears on hover */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                <div className="bg-navy-900/90 backdrop-blur-sm p-2 rounded border border-pink-500/50 transform scale-90 group-hover:scale-100 transition-all duration-300">
                  <div className="flex items-center gap-2 mb-1">
                    <FileTextIcon className="h-3 w-3 text-pink-500" />
                    <span className="text-white text-xs font-semibold">
                      KVK Extract Preview
                    </span>
                  </div>
                  <div className="w-full h-20 bg-navy-800 rounded overflow-hidden">
                    <div className="h-3 w-3/4 bg-gray-700 rounded mt-2 mx-2"></div>
                    <div className="h-2 w-1/2 bg-gray-700 rounded mt-2 mx-2"></div>
                    <div className="h-2 w-2/3 bg-gray-700 rounded mt-2 mx-2"></div>
                    <div className="h-2 w-3/4 bg-gray-700 rounded mt-2 mx-2"></div>
                  </div>
                </div>
              </div>
              <div className="flex items-center mb-2">
                <div className="bg-gradient-to-br from-navy-700 to-navy-800 rounded-lg w-9 h-9 flex items-center justify-center mr-2 flex-shrink-0 shadow-md group-hover:bg-pink-600 transition-colors duration-300">
                  <FileTextIcon className="h-5 w-5 text-pink-500 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-sm font-bold text-white group-hover:text-pink-400 transition-colors duration-300">
                  KVK Extract
                </h3>
              </div>
              <p className="text-gray-300 text-xs pl-11 group-hover:text-white transition-colors duration-300">
                Official Dutch Chamber of Commerce registration
              </p>
            </div>
            {/* Document Card 2 */}
            <div
              className="bg-gradient-to-br from-navy-800 to-navy-900 border border-navy-700 hover:border-pink-400 rounded-lg p-3 shadow-md hover:shadow-lg transition-all duration-300 group relative transform hover:-translate-y-1 animation-delay-100 hover:z-10"
              onMouseEnter={() => setMouseHovering(true)}
              onMouseLeave={() => setMouseHovering(false)}
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-pink-500 to-transparent opacity-0 group-hover:opacity-10 rounded-lg transition-opacity duration-300"></div>
              {/* Document preview that appears on hover */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                <div className="bg-navy-900/90 backdrop-blur-sm p-2 rounded border border-pink-500/50 transform scale-90 group-hover:scale-100 transition-all duration-300">
                  <div className="flex items-center gap-2 mb-1">
                    <FileTextIcon className="h-3 w-3 text-pink-500" />
                    <span className="text-white text-xs font-semibold">
                      Tax Registration Preview
                    </span>
                  </div>
                  <div className="w-full h-20 bg-navy-800 rounded overflow-hidden">
                    <div className="h-3 w-3/4 bg-gray-700 rounded mt-2 mx-2"></div>
                    <div className="h-2 w-1/2 bg-gray-700 rounded mt-2 mx-2"></div>
                    <div className="h-2 w-2/3 bg-gray-700 rounded mt-2 mx-2"></div>
                    <div className="h-2 w-3/4 bg-gray-700 rounded mt-2 mx-2"></div>
                  </div>
                </div>
              </div>
              <div className="flex items-center mb-2">
                <div className="bg-gradient-to-br from-navy-700 to-navy-800 rounded-lg w-9 h-9 flex items-center justify-center mr-2 flex-shrink-0 shadow-md group-hover:bg-pink-600 transition-colors duration-300">
                  <FileTextIcon className="h-5 w-5 text-pink-500 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-sm font-bold text-white group-hover:text-pink-400 transition-colors duration-300">
                  Tax Registration
                </h3>
              </div>
              <p className="text-gray-300 text-xs pl-11 group-hover:text-white transition-colors duration-300">
                Dutch tax office documentation
              </p>
            </div>
            {/* Document Card 3 */}
            <div
              className="bg-gradient-to-br from-navy-800 to-navy-900 border border-navy-700 hover:border-pink-400 rounded-lg p-3 shadow-md hover:shadow-lg transition-all duration-300 group relative transform hover:-translate-y-1 animation-delay-200 hover:z-10"
              onMouseEnter={() => setMouseHovering(true)}
              onMouseLeave={() => setMouseHovering(false)}
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-pink-500 to-transparent opacity-0 group-hover:opacity-10 rounded-lg transition-opacity duration-300"></div>
              {/* Document preview that appears on hover */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                <div className="bg-navy-900/90 backdrop-blur-sm p-2 rounded border border-pink-500/50 transform scale-90 group-hover:scale-100 transition-all duration-300">
                  <div className="flex items-center gap-2 mb-1">
                    <CreditCardIcon className="h-3 w-3 text-pink-500" />
                    <span className="text-white text-xs font-semibold">
                      VAT Registration Preview
                    </span>
                  </div>
                  <div className="w-full h-20 bg-navy-800 rounded overflow-hidden">
                    <div className="h-3 w-3/4 bg-gray-700 rounded mt-2 mx-2"></div>
                    <div className="h-2 w-1/2 bg-gray-700 rounded mt-2 mx-2"></div>
                    <div className="h-2 w-2/3 bg-gray-700 rounded mt-2 mx-2"></div>
                    <div className="h-2 w-3/4 bg-gray-700 rounded mt-2 mx-2"></div>
                  </div>
                </div>
              </div>
              <div className="flex items-center mb-2">
                <div className="bg-gradient-to-br from-navy-700 to-navy-800 rounded-lg w-9 h-9 flex items-center justify-center mr-2 flex-shrink-0 shadow-md group-hover:bg-pink-600 transition-colors duration-300">
                  <CreditCardIcon className="h-5 w-5 text-pink-500 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-sm font-bold text-white group-hover:text-pink-400 transition-colors duration-300">
                  VAT Registration
                </h3>
              </div>
              <p className="text-gray-300 text-xs pl-11 group-hover:text-white transition-colors duration-300">
                EU VAT number confirmation
              </p>
            </div>
            {/* Document Card 4 */}
            <div
              className="bg-gradient-to-br from-navy-800 to-navy-900 border border-navy-700 hover:border-pink-400 rounded-lg p-3 shadow-md hover:shadow-lg transition-all duration-300 group relative transform hover:-translate-y-1 animation-delay-300 hover:z-10"
              onMouseEnter={() => setMouseHovering(true)}
              onMouseLeave={() => setMouseHovering(false)}
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-pink-500 to-transparent opacity-0 group-hover:opacity-10 rounded-lg transition-opacity duration-300"></div>
              {/* Document preview that appears on hover */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                <div className="bg-navy-900/90 backdrop-blur-sm p-2 rounded border border-pink-500/50 transform scale-90 group-hover:scale-100 transition-all duration-300">
                  <div className="flex items-center gap-2 mb-1">
                    <BuildingIcon className="h-3 w-3 text-pink-500" />
                    <span className="text-white text-xs font-semibold">
                      Address Verification
                    </span>
                  </div>
                  <div className="w-full h-20 bg-navy-800 rounded overflow-hidden">
                    <div className="h-3 w-3/4 bg-gray-700 rounded mt-2 mx-2"></div>
                    <div className="h-2 w-1/2 bg-gray-700 rounded mt-2 mx-2"></div>
                    <div className="h-2 w-2/3 bg-gray-700 rounded mt-2 mx-2"></div>
                    <div className="h-2 w-3/4 bg-gray-700 rounded mt-2 mx-2"></div>
                  </div>
                </div>
              </div>
              <div className="flex items-center mb-2">
                <div className="bg-gradient-to-br from-navy-700 to-navy-800 rounded-lg w-9 h-9 flex items-center justify-center mr-2 flex-shrink-0 shadow-md group-hover:bg-pink-600 transition-colors duration-300">
                  <BuildingIcon className="h-5 w-5 text-pink-500 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-sm font-bold text-white group-hover:text-pink-400 transition-colors duration-300">
                  Proof of Address
                </h3>
              </div>
              <p className="text-gray-300 text-xs pl-11 group-hover:text-white transition-colors duration-300">
                Official business location verification
              </p>
            </div>
          </div>
          {/* Condensed document info */}
          <div
            className="mt-5 max-w-4xl mx-auto bg-navy-800 bg-opacity-60 backdrop-blur-sm rounded-lg p-3 border border-navy-700 relative overflow-hidden hover:border-pink-400 transition-all duration-300 transform hover:shadow-lg"
            onMouseEnter={() => setMouseHovering(true)}
            onMouseLeave={() => setMouseHovering(false)}
          >
            <div className="absolute top-0 right-0 w-16 h-16 bg-pink-600 rounded-full filter blur-[40px] opacity-10"></div>
            <div className="flex items-center gap-3">
              <div className="bg-navy-700 rounded-full w-9 h-9 flex items-center justify-center flex-shrink-0 animate-pulse">
                <FileTextIcon className="h-4 w-4 text-pink-500" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-white">
                  Don't have all documents?
                </h4>
                <p className="text-gray-300 text-xs">
                  No problem! Start with basic information and our team will
                  guide you through obtaining any missing documents.
                </p>
              </div>
            </div>
            <div className="mt-3 flex justify-end">
              <button
                className="bg-gradient-to-r from-pink-600 to-pink-700 hover:from-pink-700 hover:to-pink-800 text-white font-bold py-1 px-3 rounded-md shadow-sm hover:shadow-md transition-all duration-300 text-xs transform hover:scale-105 group relative overflow-hidden"
                onMouseEnter={() => setMouseHovering(true)}
                onMouseLeave={() => setMouseHovering(false)}
              >
                <span className="absolute inset-0 w-0 h-full bg-white opacity-20 transition-all duration-500 group-hover:w-full"></span>
                <span className="relative flex items-center justify-center">
                  Request Document Checklist
                  <ArrowRightIcon className="ml-1 h-3 w-3 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </button>
            </div>
          </div>
          <div className="mt-4 text-center">
            <button
              className="bg-gradient-to-r from-pink-600 to-pink-700 hover:from-pink-700 hover:to-pink-800 text-white font-bold py-1.5 px-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 text-xs transform hover:scale-105 group relative overflow-hidden"
              onMouseEnter={() => setMouseHovering(true)}
              onMouseLeave={() => setMouseHovering(false)}
            >
              <span className="absolute inset-0 w-0 h-full bg-white opacity-20 transition-all duration-500 group-hover:w-full"></span>
              <span className="relative flex items-center justify-center">
                Download Sample Documents
                <ArrowRightIcon className="ml-1 h-3 w-3 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </button>
          </div>
        </section>
        {/* Required Documents Section */}
        <section
          id="requirements-section"
          data-section
          className={`mb-16 bg-gradient-to-br from-navy-700 via-navy-800 to-navy-900 py-8 px-4 rounded-xl shadow-lg border border-navy-700 relative overflow-hidden transform hover:shadow-2xl transition-all duration-1000 ${isVisible['requirements-section'] ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}
        >
          {/* Background glow effects */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-pink-600 rounded-full filter blur-[80px] opacity-10 animate-pulse"></div>
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-pink-600 rounded-full filter blur-[80px] opacity-10 animate-pulse animation-delay-1000"></div>
          {/* Background pattern */}
          <div className="absolute inset-0 bg-[url('https://uploads-ssl.webflow.com/63f580596efa74629ceecdf5/646b69e6cd22a91f9dd2c0dc_noise-50.png')] opacity-5"></div>
          <div className="text-center mb-5 relative">
            <div className="inline-block bg-gradient-to-r from-navy-800 to-navy-900 p-1 rounded-full shadow-lg mb-2">
              <span className="bg-navy-700 text-pink-400 px-3 py-0.5 rounded-full text-xs font-semibold inline-block shadow-inner">
                ✨ REQUIREMENTS ✨
              </span>
            </div>
            <h2 className="text-2xl font-bold mb-1 text-white bg-clip-text text-transparent bg-gradient-to-r from-white via-pink-200 to-white animate-gradient-x">
              Required Documents
            </h2>
            <p className="text-xs text-gray-300 max-w-xl mx-auto">
              Documents needed to register your Dutch branch
            </p>
            <div className="w-12 h-0.5 bg-gradient-to-r from-pink-400 via-pink-600 to-pink-400 mx-auto mt-2 rounded-full animate-gradient-x"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto relative">
            {/* Parent Company Documents */}
            <div
              className="bg-gradient-to-br from-navy-800 to-navy-900 border border-navy-700 rounded-lg p-4 shadow-md relative overflow-hidden group hover:border-pink-400 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
              onMouseEnter={() => setMouseHovering(true)}
              onMouseLeave={() => setMouseHovering(false)}
            >
              {/* Shine effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-pink-500 to-transparent opacity-0 group-hover:opacity-10 rounded-lg transition-opacity duration-300"></div>
              <div className="flex items-center mb-3">
                <div className="bg-gradient-to-br from-navy-700 to-navy-800 rounded-lg w-10 h-10 flex items-center justify-center mr-3 flex-shrink-0 shadow-md group-hover:bg-pink-600 transition-colors duration-300">
                  <BuildingIcon className="h-5 w-5 text-pink-500 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-sm font-bold text-white group-hover:text-pink-400 transition-colors duration-300">
                  Parent Company Documents
                </h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-3">
                <div
                  className="flex items-center bg-navy-900 bg-opacity-60 rounded-md p-2 hover:bg-navy-950 transition-colors duration-200 transform hover:scale-105 group/item"
                  onMouseEnter={() => setMouseHovering(true)}
                  onMouseLeave={() => setMouseHovering(false)}
                >
                  <div className="bg-navy-800 rounded-full p-1 mr-2 flex-shrink-0 group-hover/item:bg-pink-600 transition-colors duration-300">
                    <CheckIcon className="h-3 w-3 text-pink-500 group-hover/item:text-white transition-colors duration-300" />
                  </div>
                  <span className="text-gray-300 text-xs group-hover/item:text-white transition-colors duration-300">
                    Certificate of Incorporation
                  </span>
                </div>
                <div
                  className="flex items-center bg-navy-900 bg-opacity-60 rounded-md p-2 hover:bg-navy-950 transition-colors duration-200 transform hover:scale-105 group/item"
                  onMouseEnter={() => setMouseHovering(true)}
                  onMouseLeave={() => setMouseHovering(false)}
                >
                  <div className="bg-navy-800 rounded-full p-1 mr-2 flex-shrink-0 group-hover/item:bg-pink-600 transition-colors duration-300">
                    <CheckIcon className="h-3 w-3 text-pink-500 group-hover/item:text-white transition-colors duration-300" />
                  </div>
                  <span className="text-gray-300 text-xs group-hover/item:text-white transition-colors duration-300">
                    Articles of Association
                  </span>
                </div>
                <div
                  className="flex items-center bg-navy-900 bg-opacity-60 rounded-md p-2 hover:bg-navy-950 transition-colors duration-200 transform hover:scale-105 group/item"
                  onMouseEnter={() => setMouseHovering(true)}
                  onMouseLeave={() => setMouseHovering(false)}
                >
                  <div className="bg-navy-800 rounded-full p-1 mr-2 flex-shrink-0 group-hover/item:bg-pink-600 transition-colors duration-300">
                    <CheckIcon className="h-3 w-3 text-pink-500 group-hover/item:text-white transition-colors duration-300" />
                  </div>
                  <span className="text-gray-300 text-xs group-hover/item:text-white transition-colors duration-300">
                    Home country register extract
                  </span>
                </div>
                <div
                  className="flex items-center bg-navy-900 bg-opacity-60 rounded-md p-2 hover:bg-navy-950 transition-colors duration-200 transform hover:scale-105 group/item"
                  onMouseEnter={() => setMouseHovering(true)}
                  onMouseLeave={() => setMouseHovering(false)}
                >
                  <div className="bg-navy-800 rounded-full p-1 mr-2 flex-shrink-0 group-hover/item:bg-pink-600 transition-colors duration-300">
                    <CheckIcon className="h-3 w-3 text-pink-500 group-hover/item:text-white transition-colors duration-300" />
                  </div>
                  <span className="text-gray-300 text-xs group-hover/item:text-white transition-colors duration-300">
                    Proof of registered address
                  </span>
                </div>
                <div
                  className="flex items-center bg-navy-900 bg-opacity-60 rounded-md p-2 hover:bg-navy-950 transition-colors duration-200 sm:col-span-2 transform hover:scale-105 group/item"
                  onMouseEnter={() => setMouseHovering(true)}
                  onMouseLeave={() => setMouseHovering(false)}
                >
                  <div className="bg-navy-800 rounded-full p-1 mr-2 flex-shrink-0 group-hover/item:bg-pink-600 transition-colors duration-300">
                    <CheckIcon className="h-3 w-3 text-pink-500 group-hover/item:text-white transition-colors duration-300" />
                  </div>
                  <span className="text-gray-300 text-xs group-hover/item:text-white transition-colors duration-300">
                    Financial statements (if available)
                  </span>
                </div>
              </div>
            </div>
            {/* Director/Representative Documents */}
            <div
              className="bg-gradient-to-br from-navy-800 to-navy-900 border border-navy-700 rounded-lg p-4 shadow-md relative overflow-hidden group hover:border-pink-400 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
              onMouseEnter={() => setMouseHovering(true)}
              onMouseLeave={() => setMouseHovering(false)}
            >
              {/* Shine effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-pink-500 to-transparent opacity-0 group-hover:opacity-10 rounded-lg transition-opacity duration-300"></div>
              <div className="flex items-center mb-3">
                <div className="bg-gradient-to-br from-navy-700 to-navy-800 rounded-lg w-10 h-10 flex items-center justify-center mr-3 flex-shrink-0 shadow-md group-hover:bg-pink-600 transition-colors duration-300">
                  <FileTextIcon className="h-5 w-5 text-pink-500 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-sm font-bold text-white group-hover:text-pink-400 transition-colors duration-300">
                  Director/Representative Documents
                </h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-3">
                <div
                  className="flex items-center bg-navy-900 bg-opacity-60 rounded-md p-2 hover:bg-navy-950 transition-colors duration-200 transform hover:scale-105 group/item"
                  onMouseEnter={() => setMouseHovering(true)}
                  onMouseLeave={() => setMouseHovering(false)}
                >
                  <div className="bg-navy-800 rounded-full p-1 mr-2 flex-shrink-0 group-hover/item:bg-pink-600 transition-colors duration-300">
                    <CheckIcon className="h-3 w-3 text-pink-500 group-hover/item:text-white transition-colors duration-300" />
                  </div>
                  <span className="text-gray-300 text-xs group-hover/item:text-white transition-colors duration-300">
                    Passport/ID copies
                  </span>
                </div>
                <div
                  className="flex items-center bg-navy-900 bg-opacity-60 rounded-md p-2 hover:bg-navy-950 transition-colors duration-200 transform hover:scale-105 group/item"
                  onMouseEnter={() => setMouseHovering(true)}
                  onMouseLeave={() => setMouseHovering(false)}
                >
                  <div className="bg-navy-800 rounded-full p-1 mr-2 flex-shrink-0 group-hover/item:bg-pink-600 transition-colors duration-300">
                    <CheckIcon className="h-3 w-3 text-pink-500 group-hover/item:text-white transition-colors duration-300" />
                  </div>
                  <span className="text-gray-300 text-xs group-hover/item:text-white transition-colors duration-300">
                    Proof of address
                  </span>
                </div>
                <div
                  className="flex items-center bg-navy-900 bg-opacity-60 rounded-md p-2 hover:bg-navy-950 transition-colors duration-200 transform hover:scale-105 group/item"
                  onMouseEnter={() => setMouseHovering(true)}
                  onMouseLeave={() => setMouseHovering(false)}
                >
                  <div className="bg-navy-800 rounded-full p-1 mr-2 flex-shrink-0 group-hover/item:bg-pink-600 transition-colors duration-300">
                    <CheckIcon className="h-3 w-3 text-pink-500 group-hover/item:text-white transition-colors duration-300" />
                  </div>
                  <span className="text-gray-300 text-xs group-hover/item:text-white transition-colors duration-300">
                    Power of Attorney
                  </span>
                </div>
                <div
                  className="flex items-center bg-navy-900 bg-opacity-60 rounded-md p-2 hover:bg-navy-950 transition-colors duration-200 transform hover:scale-105 group/item"
                  onMouseEnter={() => setMouseHovering(true)}
                  onMouseLeave={() => setMouseHovering(false)}
                >
                  <div className="bg-navy-800 rounded-full p-1 mr-2 flex-shrink-0 group-hover/item:bg-pink-600 transition-colors duration-300">
                    <CheckIcon className="h-3 w-3 text-pink-500 group-hover/item:text-white transition-colors duration-300" />
                  </div>
                  <span className="text-gray-300 text-xs group-hover/item:text-white transition-colors duration-300">
                    Tax ID numbers
                  </span>
                </div>
                <div
                  className="flex items-center bg-navy-900 bg-opacity-60 rounded-md p-2 hover:bg-navy-950 transition-colors duration-200 sm:col-span-2 transform hover:scale-105 group/item"
                  onMouseEnter={() => setMouseHovering(true)}
                  onMouseLeave={() => setMouseHovering(false)}
                >
                  <div className="bg-navy-800 rounded-full p-1 mr-2 flex-shrink-0 group-hover/item:bg-pink-600 transition-colors duration-300">
                    <CheckIcon className="h-3 w-3 text-pink-500 group-hover/item:text-white transition-colors duration-300" />
                  </div>
                  <span className="text-gray-300 text-xs group-hover/item:text-white transition-colors duration-300">
                    Brief professional biography
                  </span>
                </div>
              </div>
            </div>
          </div>
          {/* Missing documents info */}
          <div
            className="mt-4 max-w-4xl mx-auto bg-navy-800 bg-opacity-60 backdrop-blur-sm rounded-lg p-3 border border-navy-700 relative overflow-hidden hover:border-pink-400 transition-all duration-300 transform hover:shadow-lg"
            onMouseEnter={() => setMouseHovering(true)}
            onMouseLeave={() => setMouseHovering(false)}
          >
            <div className="absolute top-0 right-0 w-16 h-16 bg-pink-600 rounded-full filter blur-[40px] opacity-10"></div>
            <div className="flex items-center gap-3">
              <div className="bg-navy-700 rounded-full w-9 h-9 flex items-center justify-center flex-shrink-0 animate-pulse">
                <FileTextIcon className="h-4 w-4 text-pink-500" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-white">
                  Don't have all documents?
                </h4>
                <p className="text-gray-300 text-xs">
                  No problem! Start with basic information and our team will
                  guide you through obtaining any missing documents.
                </p>
              </div>
            </div>
            <div className="mt-3 flex justify-end">
              <button
                className="bg-gradient-to-r from-pink-600 to-pink-700 hover:from-pink-700 hover:to-pink-800 text-white font-bold py-1 px-3 rounded-md shadow-sm hover:shadow-md transition-all duration-300 text-xs transform hover:scale-105 group relative overflow-hidden"
                onMouseEnter={() => setMouseHovering(true)}
                onMouseLeave={() => setMouseHovering(false)}
              >
                <span className="absolute inset-0 w-0 h-full bg-white opacity-20 transition-all duration-500 group-hover:w-full"></span>
                <span className="relative flex items-center justify-center">
                  Request Document Checklist
                  <ArrowRightIcon className="ml-1 h-3 w-3 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </button>
            </div>
          </div>
        </section>
        {/* Netherlands Advantage Section */}
        <section
          id="advantage-section"
          data-section
          className={`mb-20 bg-gradient-to-br from-navy-800 via-navy-900 to-navy-900 py-12 px-6 rounded-3xl shadow-xl relative overflow-hidden transition-all duration-1000 transform ${isVisible['advantage-section'] ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}
        >
          <div className="absolute inset-0 bg-[url('https://uploads-ssl.webflow.com/63f580596efa74629ceecdf5/646b69e6cd22a91f9dd2c0dc_noise-50.png')] opacity-5"></div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-pink-600 rounded-full filter blur-[120px] opacity-10"></div>
          {/* Animated particles */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(15)].map((_, i) => (
              <div
                key={i}
                className="absolute rounded-full bg-pink-500 opacity-20"
                style={{
                  width: `${Math.random() * 4 + 1}px`,
                  height: `${Math.random() * 4 + 1}px`,
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  animation: `float ${Math.random() * 10 + 15}s linear infinite`,
                  animationDelay: `${Math.random() * 10}s`,
                }}
              />
            ))}
          </div>
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-3/5 transform hover:scale-[1.02] transition-all duration-500 rounded-xl overflow-hidden relative group">
              <div className="absolute inset-0 bg-gradient-to-tr from-pink-600/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 z-10"></div>
              <img
                src="https://uploadthingy.s3.us-west-1.amazonaws.com/gAZV2gojEWfqSwC45Q6fJt/pasted-image.jpg"
                alt="Erasmus Bridge in Rotterdam, Netherlands"
                className="w-full h-auto rounded-xl shadow-xl object-cover"
                style={{
                  transform: `translateY(${scrollY * 0.02}px)`,
                }}
              />
              {/* Interactive hotspots that appear on hover */}
              <div className="absolute top-1/4 left-1/4 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-500 z-20">
                <div
                  className="relative group/spot"
                  onMouseEnter={() => setMouseHovering(true)}
                  onMouseLeave={() => setMouseHovering(false)}
                >
                  <div className="w-6 h-6 rounded-full bg-pink-600 border-2 border-white shadow-lg animate-ping absolute"></div>
                  <div className="w-6 h-6 rounded-full bg-pink-600 border-2 border-white shadow-lg flex items-center justify-center relative">
                    <span className="text-white font-bold text-xs">1</span>
                  </div>
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 bg-navy-900/90 backdrop-blur-sm p-2 rounded border border-pink-500 w-40 opacity-0 group-hover/spot:opacity-100 transition-opacity duration-300">
                    <p className="text-white text-xs font-semibold">
                      Strategic Location
                    </p>
                    <p className="text-gray-300 text-xs">
                      Gateway to European markets
                    </p>
                  </div>
                </div>
              </div>
              <div className="absolute bottom-1/3 right-1/4 transform translate-x-1/2 translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-500 z-20">
                <div
                  className="relative group/spot"
                  onMouseEnter={() => setMouseHovering(true)}
                  onMouseLeave={() => setMouseHovering(false)}
                >
                  <div className="w-6 h-6 rounded-full bg-pink-600 border-2 border-white shadow-lg animate-ping absolute"></div>
                  <div className="w-6 h-6 rounded-full bg-pink-600 border-2 border-white shadow-lg flex items-center justify-center relative">
                    <span className="text-white font-bold text-xs">2</span>
                  </div>
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 bg-navy-900/90 backdrop-blur-sm p-2 rounded border border-pink-500 w-40 opacity-0 group-hover/spot:opacity-100 transition-opacity duration-300">
                    <p className="text-white text-xs font-semibold">
                      Infrastructure
                    </p>
                    <p className="text-gray-300 text-xs">
                      World-class logistics and connectivity
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:w-2/5 text-left">
              <div className="inline-block bg-gradient-to-r from-navy-800 to-navy-900 p-1 rounded-full shadow-lg mb-3">
                <span className="bg-navy-700 text-pink-400 px-4 py-1 rounded-full text-xs font-semibold inline-block shadow-inner">
                  STRATEGIC LOCATION
                </span>
              </div>
              <h2 className="text-2xl font-bold mb-6 text-white bg-clip-text text-transparent bg-gradient-to-r from-white via-pink-200 to-white animate-gradient-x">
                Netherlands Advantage
              </h2>
              <p className="text-base leading-relaxed text-gray-300 mb-6">
                The Netherlands offers one of the most efficient and
                straightforward branch registration processes in the EU, with no
                notary requirements and a fully digital registration system.
              </p>
              <div className="space-y-4 mb-8">
                <div
                  className="flex items-start bg-navy-900 bg-opacity-40 p-3 rounded-lg hover:bg-navy-800 transition-all duration-300 transform hover:translate-x-1 group/item"
                  onMouseEnter={() => setMouseHovering(true)}
                  onMouseLeave={() => setMouseHovering(false)}
                >
                  <div className="bg-navy-800 rounded-full p-1 mr-2 flex-shrink-0 mt-0.5 group-hover/item:bg-pink-600 transition-colors duration-300">
                    <CheckIcon className="h-4 w-4 text-pink-500 group-hover/item:text-white transition-colors duration-300" />
                  </div>
                  <span className="text-gray-300">
                    <strong className="text-white">Strategic Location</strong>:
                    Gateway to European markets with excellent logistics
                    infrastructure
                  </span>
                </div>
                <div
                  className="flex items-start bg-navy-900 bg-opacity-40 p-3 rounded-lg hover:bg-navy-800 transition-all duration-300 transform hover:translate-x-1 animation-delay-200 group/item"
                  onMouseEnter={() => setMouseHovering(true)}
                  onMouseLeave={() => setMouseHovering(false)}
                >
                  <div className="bg-navy-800 rounded-full p-1 mr-2 flex-shrink-0 mt-0.5 group-hover/item:bg-pink-600 transition-colors duration-300">
                    <CheckIcon className="h-4 w-4 text-pink-500 group-hover/item:text-white transition-colors duration-300" />
                  </div>
                  <span className="text-gray-300">
                    <strong className="text-white">
                      Business-friendly Environment
                    </strong>
                    : Favorable tax system and international outlook
                  </span>
                </div>
                <div
                  className="flex items-start bg-navy-900 bg-opacity-40 p-3 rounded-lg hover:bg-navy-800 transition-all duration-300 transform hover:translate-x-1 animation-delay-400 group/item"
                  onMouseEnter={() => setMouseHovering(true)}
                  onMouseLeave={() => setMouseHovering(false)}
                >
                  <div className="bg-navy-800 rounded-full p-1 mr-2 flex-shrink-0 mt-0.5 group-hover/item:bg-pink-600 transition-colors duration-300">
                    <CheckIcon className="h-4 w-4 text-pink-500 group-hover/item:text-white transition-colors duration-300" />
                  </div>
                  <span className="text-gray-300">
                    <strong className="text-white">
                      Highly Skilled Workforce
                    </strong>
                    : Multilingual talent pool with excellent English
                    proficiency
                  </span>
                </div>
              </div>
              <div className="mt-8">
                <button
                  className="bg-gradient-to-r from-pink-600 to-pink-700 hover:from-pink-700 hover:to-pink-800 text-white font-bold py-3 px-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 flex items-center transform hover:scale-105 group relative overflow-hidden"
                  onMouseEnter={() => setMouseHovering(true)}
                  onMouseLeave={() => setMouseHovering(false)}
                >
                  <span className="absolute inset-0 w-0 h-full bg-white opacity-20 transition-all duration-500 group-hover:w-full"></span>
                  <span className="relative flex items-center">
                    Start Your Branch Registration
                    <ArrowRightIcon className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
      {/* Footer */}
      <footer className="bg-navy-900 text-white py-16 border-t border-navy-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://uploads-ssl.webflow.com/63f580596efa74629ceecdf5/646b69e6cd22a91f9dd2c0dc_noise-50.png')] opacity-5"></div>
        {/* Animated particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-white opacity-10"
              style={{
                width: `${Math.random() * 3 + 1}px`,
                height: `${Math.random() * 3 + 1}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animation: `float ${Math.random() * 20 + 10}s linear infinite`,
                animationDelay: `${Math.random() * 10}s`,
              }}
             />
          ))}
        </div>
       
      </footer>
      <Footer />
    </div>
    </>
  )
}
