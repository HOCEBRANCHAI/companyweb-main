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

export const FranceProductPage = () => {
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
    target: 'Launch your business in France',
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
                Our team is ready to assist you with your France branch
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

        {/* Full-screen Hero Section */}
        <header className="relative h-screen w-full flex flex-col justify-end items-start overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=2073&auto=format&fit=crop"
              alt="Paris cityscape"
              className="w-full h-full object-cover transition-transform duration-10000 ease-in-out hover:scale-105 brightness-110"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-navy-900/50 via-navy-900/30 to-navy-900"></div>
          </div>
          <div className="container mx-auto px-6 md:px-10 relative z-10 pb-32">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white drop-shadow-lg animate-slideUp leading-tight">
                France Branch Registration
              </h1>
              <div className="h-1 w-24 bg-pink-500 mb-6 animate-slideUp animation-delay-200"></div>
              <p className="text-xl md:text-2xl text-white max-w-2xl drop-shadow-lg animate-slideUp animation-delay-300 mb-8 leading-relaxed">
                Launch your business in France with our comprehensive branch registration service
              </p>
            </div>
          </div>
          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 flex flex-col items-center animate-pulse">
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
                  Why Choose France?
                  <span className="absolute -bottom-1 left-0 w-1/3 h-1 bg-gradient-to-r from-pink-400 to-pink-600 rounded-full"></span>
                </h2>
                <p className="text-base leading-relaxed text-gray-300">
                  France offers access to one of Europe's largest economies. Your
                  French Branch Office gives your business credibility in this
                  sophisticated market. It's ideal for founders who want to tap into
                  France's innovation ecosystem and strategic position in the EU.
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
                      Our service: 2-3 weeks
                    </span>
                  </div>
                </div>
              </div>
              {/* Eiffel Tower image */}
              <div
                className={`md:w-1/2 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{
                  transitionDelay: '200ms',
                }}
              >
                <div className="overflow-hidden rounded-lg h-full">
                  <img
                    src="https://uploadthingy.s3.us-west-1.amazonaws.com/63bz1WGTocsSNdvu8tRZoM/pasted-image.png"
                    alt="Eiffel Tower with Seine River in Paris at sunset"
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  />
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
            <div className="text-center mb-12">
              <span className="inline-block bg-pink-600/20 text-pink-400 px-4 py-1 rounded-full text-sm font-semibold mb-3 animate-pulse">
                PRICING OPTIONS
              </span>
              <h2 className="text-2xl md:text-3xl font-bold mb-3 text-white">
                Choose Your Registration Package
              </h2>
              <p className="text-sm md:text-base text-gray-300 max-w-3xl mx-auto">
                Select the package that best fits your business needs and budget
              </p>
              <div className="w-24 h-1 bg-pink-500 mx-auto mt-4 relative">
                <div className="absolute -right-1 -top-1 w-3 h-3 bg-pink-500 rounded-full animate-ping"></div>
              </div>
            </div>
            <div className="flex flex-col md:flex-row justify-center gap-6 mb-10">
              {/* Standard Package */}
              <div className="flex-1 bg-gradient-to-br from-navy-800 to-navy-900 rounded-xl overflow-hidden transition-all duration-500 hover:shadow-xl border border-transparent hover:border-pink-500/30">
                <div className="p-6">
                  <h3 className="text-lg font-bold mb-1 text-white">Standard</h3>
                  <p className="text-sm text-gray-300 mb-4">Perfect for small businesses entering the French market</p>
                  <div className="my-4">
                    <div className="flex items-baseline">
                      <span className="text-2xl font-bold text-pink-400">€1,490</span>
                      <span className="ml-2 text-gray-300">/one-time</span>
                    </div>
                  </div>
                  <div className="border-t border-navy-700 my-4 pt-4">
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <CheckIcon className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-300 text-sm">Branch Registration</span>
                      </li>
                      <li className="flex items-start">
                        <CheckIcon className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-300 text-sm">French Business Address (3 months)</span>
                      </li>
                      <li className="flex items-start">
                        <CheckIcon className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-300 text-sm">RCS Registration</span>
                      </li>
                      <li className="flex items-start">
                        <CheckIcon className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-300 text-sm">EU VAT Number</span>
                      </li>
                    </ul>
                  </div>
                  <button className="w-full py-2.5 px-4 bg-navy-800 border-2 border-pink-600 text-pink-400 font-semibold rounded-lg hover:bg-navy-700 transition-colors">
                    Select Plan
                  </button>
                </div>
              </div>

              {/* Premium Package */}
              <div className="flex-1 bg-gradient-to-br from-navy-800 to-navy-900 rounded-xl overflow-hidden transition-all duration-500 hover:shadow-xl border-2 border-pink-500/50 relative">
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-pink-600 text-white px-4 py-1 rounded-full text-xs font-bold">
                  Most Popular
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold mb-1 text-white">Premium</h3>
                  <p className="text-sm text-gray-300 mb-4">Comprehensive solution for established businesses</p>
                  <div className="my-4">
                    <div className="flex items-baseline">
                      <span className="text-2xl font-bold text-pink-400">€1,990</span>
                      <span className="ml-2 text-gray-300">/one-time</span>
                    </div>
                  </div>
                  <div className="border-t border-navy-700 my-4 pt-4">
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <CheckIcon className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-300 text-sm">Everything in Standard</span>
                      </li>
                      <li className="flex items-start">
                        <CheckIcon className="h-5 w-5 text-pink-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-300 text-sm">French Business Address (6 months)</span>
                      </li>
                      <li className="flex items-start">
                        <CheckIcon className="h-5 w-5 text-pink-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-300 text-sm">Mail Forwarding</span>
                      </li>
                      <li className="flex items-start">
                        <CheckIcon className="h-5 w-5 text-pink-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-300 text-sm">Dedicated Account Manager</span>
                      </li>
                    </ul>
                  </div>
                  <button className="w-full py-2.5 px-4 bg-gradient-to-r from-pink-600 to-pink-700 hover:from-pink-700 hover:to-pink-800 text-white font-semibold rounded-lg transition-colors">
                    Get Started
                  </button>
                </div>
              </div>

              {/* Enterprise Package */}
              <div className="flex-1 bg-gradient-to-br from-navy-800 to-navy-900 rounded-xl overflow-hidden transition-all duration-500 hover:shadow-xl border border-transparent hover:border-pink-500/30">
                <div className="p-6">
                  <h3 className="text-lg font-bold mb-1 text-white">Enterprise</h3>
                  <p className="text-sm text-gray-300 mb-4">Tailored solutions for complex business structures</p>
                  <div className="my-4">
                    <div className="flex items-baseline">
                      <span className="text-2xl font-bold text-pink-400">Custom</span>
                      <span className="ml-2 text-gray-300">/yearly</span>
                    </div>
                  </div>
                  <div className="border-t border-navy-700 my-4 pt-4">
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <CheckIcon className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-300 text-sm">Everything in Premium</span>
                      </li>
                      <li className="flex items-start">
                        <CheckIcon className="h-5 w-5 text-pink-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-300 text-sm">Permanent French Address</span>
                      </li>
                      <li className="flex items-start">
                        <CheckIcon className="h-5 w-5 text-pink-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-300 text-sm">Priority Processing</span>
                      </li>
                      <li className="flex items-start">
                        <CheckIcon className="h-5 w-5 text-pink-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-300 text-sm">Corporate Secretarial Services</span>
                      </li>
                    </ul>
                  </div>
                  <button className="w-full py-2.5 px-4 bg-navy-800 border-2 border-pink-600 text-pink-400 font-semibold rounded-lg hover:bg-navy-700 transition-colors">
                    Contact Us
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* Core Benefits Section */}
          <section
            id="benefits-section"
            data-section
            className={`mb-16 bg-gradient-to-br from-navy-700 via-navy-800 to-navy-900 py-8 px-4 rounded-2xl shadow-lg border border-navy-700 relative overflow-hidden transition-all duration-1000 transform ${isVisible['benefits-section'] ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}
          >
            <div className="text-center mb-6 relative">
              <div className="inline-block bg-gradient-to-r from-navy-800 to-navy-900 p-1 rounded-full shadow-lg mb-2">
                <span className="bg-navy-700 text-pink-400 px-4 py-1 rounded-full text-xs font-semibold inline-block shadow-inner">
                  ✨ CORE BENEFITS ✨
                </span>
              </div>
              <h2 className="text-3xl font-bold mb-2 text-white bg-clip-text text-transparent bg-gradient-to-r from-white via-pink-200 to-white animate-gradient-x">
                What's Included in Your Package
              </h2>
              <p className="text-sm text-gray-300 max-w-xl mx-auto">
                Everything you need to establish and operate your French branch
                compliantly
              </p>
              <div className="w-16 h-0.5 bg-gradient-to-r from-pink-400 via-pink-600 to-pink-400 mx-auto mt-3 rounded-full animate-gradient-x"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Benefit Cards */}
              <div className="bg-gradient-to-br from-navy-800 to-navy-900 rounded-xl p-6 hover:shadow-lg transition-all duration-500 border border-transparent hover:border-pink-500/30 transform hover:-translate-y-1 backdrop-blur-sm relative overflow-hidden group">
                <div className="mb-4 text-pink-500 transform group-hover:scale-110 transition-transform duration-300">
                  <FileTextIcon size={40} />
                </div>
                <h3 className="text-base font-bold mb-2 group-hover:text-pink-400 transition-colors duration-300">
                  Official Registration
                </h3>
                <p className="text-xs text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                  Complete RCS registration with all required documentation
                </p>
              </div>

              <div className="bg-gradient-to-br from-navy-800 to-navy-900 rounded-xl p-6 hover:shadow-lg transition-all duration-500 border border-transparent hover:border-pink-500/30 transform hover:-translate-y-1 backdrop-blur-sm relative overflow-hidden group">
                <div className="mb-4 text-pink-500 transform group-hover:scale-110 transition-transform duration-300">
                  <CreditCardIcon size={40} />
                </div>
                <h3 className="text-base font-bold mb-2 group-hover:text-pink-400 transition-colors duration-300">
                  EU VAT Number
                </h3>
                <p className="text-xs text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                  French tax number and EU VAT registration
                </p>
              </div>

              <div className="bg-gradient-to-br from-navy-800 to-navy-900 rounded-xl p-6 hover:shadow-lg transition-all duration-500 border border-transparent hover:border-pink-500/30 transform hover:-translate-y-1 backdrop-blur-sm relative overflow-hidden group">
                <div className="mb-4 text-pink-500 transform group-hover:scale-110 transition-transform duration-300">
                  <BuildingIcon size={40} />
                </div>
                <h3 className="text-base font-bold mb-2 group-hover:text-pink-400 transition-colors duration-300">
                  Legal Address
                </h3>
                <p className="text-xs text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                  3 months of official business address service included
                </p>
              </div>
            </div>
          </section>

          {/* Documentation Section */}
          <section
            id="documentation-section"
            data-section
            className={`mb-16 bg-gradient-to-br from-navy-700 via-navy-800 to-navy-900 py-8 px-4 rounded-xl shadow-lg border border-navy-700 relative overflow-hidden transform hover:shadow-2xl transition-all duration-1000 ${isVisible['documentation-section'] ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}
          >
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
                Complete set of legal documents included with your French branch
                registration
              </p>
              <div className="w-12 h-0.5 bg-gradient-to-r from-pink-400 via-pink-600 to-pink-400 mx-auto mt-2 rounded-full animate-gradient-x"></div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-4xl mx-auto relative">
              {/* Document Cards */}
              <div className="bg-gradient-to-br from-navy-800 to-navy-900 border border-navy-700 hover:border-pink-400 rounded-lg p-3 shadow-md hover:shadow-lg transition-all duration-300 group relative transform hover:-translate-y-1 hover:z-10">
                <div className="flex items-center mb-2">
                  <div className="bg-gradient-to-br from-navy-700 to-navy-800 rounded-lg w-9 h-9 flex items-center justify-center mr-2 flex-shrink-0 shadow-md group-hover:bg-pink-600 transition-colors duration-300">
                    <FileTextIcon className="h-5 w-5 text-pink-500 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-sm font-bold text-white group-hover:text-pink-400 transition-colors duration-300">
                    K-bis Extract
                  </h3>
                </div>
                <p className="text-gray-300 text-xs pl-11 group-hover:text-white transition-colors duration-300">
                  Official extract from the French commercial register
                </p>
              </div>

              <div className="bg-gradient-to-br from-navy-800 to-navy-900 border border-navy-700 hover:border-pink-400 rounded-lg p-3 shadow-md hover:shadow-lg transition-all duration-300 group relative transform hover:-translate-y-1 hover:z-10">
                <div className="flex items-center mb-2">
                  <div className="bg-gradient-to-br from-navy-700 to-navy-800 rounded-lg w-9 h-9 flex items-center justify-center mr-2 flex-shrink-0 shadow-md group-hover:bg-pink-600 transition-colors duration-300">
                    <CreditCardIcon className="h-5 w-5 text-pink-500 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-sm font-bold text-white group-hover:text-pink-400 transition-colors duration-300">
                    SIRET Number
                  </h3>
                </div>
                <p className="text-gray-300 text-xs pl-11 group-hover:text-white transition-colors duration-300">
                  Unique French business identifier document
                </p>
              </div>

              <div className="bg-gradient-to-br from-navy-800 to-navy-900 border border-navy-700 hover:border-pink-400 rounded-lg p-3 shadow-md hover:shadow-lg transition-all duration-300 group relative transform hover:-translate-y-1 hover:z-10">
                <div className="flex items-center mb-2">
                  <div className="bg-gradient-to-br from-navy-700 to-navy-800 rounded-lg w-9 h-9 flex items-center justify-center mr-2 flex-shrink-0 shadow-md group-hover:bg-pink-600 transition-colors duration-300">
                    <BuildingIcon className="h-5 w-5 text-pink-500 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-sm font-bold text-white group-hover:text-pink-400 transition-colors duration-300">
                    Proof of Address
                  </h3>
                </div>
                <p className="text-gray-300 text-xs pl-11 group-hover:text-white transition-colors duration-300">
                  Official verification of business location
                </p>
              </div>

              <div className="bg-gradient-to-br from-navy-800 to-navy-900 border border-navy-700 hover:border-pink-400 rounded-lg p-3 shadow-md hover:shadow-lg transition-all duration-300 group relative transform hover:-translate-y-1 hover:z-10">
                <div className="flex items-center mb-2">
                  <div className="bg-gradient-to-br from-navy-700 to-navy-800 rounded-lg w-9 h-9 flex items-center justify-center mr-2 flex-shrink-0 shadow-md group-hover:bg-pink-600 transition-colors duration-300">
                    <FileTextIcon className="h-5 w-5 text-pink-500 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-sm font-bold text-white group-hover:text-pink-400 transition-colors duration-300">
                    Tax Registration
                  </h3>
                </div>
                <p className="text-gray-300 text-xs pl-11 group-hover:text-white transition-colors duration-300">
                  French tax identification documentation
                </p>
              </div>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="bg-navy-900 text-white py-16 border-t border-navy-800 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://uploads-ssl.webflow.com/63f580596efa74629ceecdf5/646b69e6cd22a91f9dd2c0dc_noise-50.png')] opacity-5"></div>
        </footer>
        <Footer />
      </div>
    </>
  )
}
