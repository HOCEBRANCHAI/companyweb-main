// TEMPLATE FOR CREATING COUNTRY PRODUCT PAGES
// Copy this file and customize it for each country

import React, { useEffect, useState, useRef } from 'react'
import {
  CheckIcon,
  ClockIcon,
  FileTextIcon,
  BuildingIcon,
  CreditCardIcon,
  ArrowDownIcon,
  ArrowUpIcon,
  MessageSquareIcon,
} from 'lucide-react'
import { Header } from '../layout/Header'
import { Footer } from '../layout/Footer'

export const CountryTemplate = () => {
  // State for scroll animations
  const [scrollY, setScrollY] = useState(0)
  const [isVisible, setIsVisible] = useState<Record<string, boolean>>({})
  const [showScrollTop, setShowScrollTop] = useState(false)
  const [showChat, setShowChat] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)

  // Handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY
      setScrollY(position)
      setShowScrollTop(position > 500)
      const totalHeight = document.body.scrollHeight - window.innerHeight
      const progress = (position / totalHeight) * 100
      setScrollProgress(progress)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

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
    const sections = document.querySelectorAll('[data-section]')
    sections.forEach((section) => {
      observer.observe(section)
    })
    return () => observer.disconnect()
  }, [])

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
          >
            <MessageSquareIcon className="h-5 w-5" />
          </button>
          {showChat && (
            <div className="absolute bottom-16 right-0 w-64 bg-navy-800 rounded-lg shadow-2xl border border-navy-700 p-4 animate-fadeIn">
              <h4 className="text-white font-bold mb-2">Need help?</h4>
              <p className="text-gray-300 text-sm mb-3">
                Our team is ready to assist you with your [COUNTRY] branch registration.
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

        {/* Hero Section */}
        <header className="relative h-screen w-full flex flex-col justify-end items-start overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              src="[COUNTRY_IMAGE_URL]"
              alt="[COUNTRY] cityscape"
              className="w-full h-full object-cover transition-transform duration-10000 ease-in-out hover:scale-105 brightness-110"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-navy-900/50 via-navy-900/30 to-navy-900"></div>
          </div>
          <div className="container mx-auto px-6 md:px-10 relative z-10 pb-32">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white drop-shadow-lg animate-slideUp leading-tight">
                [COUNTRY] Branch Registration
              </h1>
              <div className="h-1 w-24 bg-pink-500 mb-6 animate-slideUp animation-delay-200"></div>
              <p className="text-xl md:text-2xl text-white max-w-2xl drop-shadow-lg animate-slideUp animation-delay-300 mb-8 leading-relaxed">
                Launch your business in [COUNTRY] with our comprehensive branch registration service
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
          {/* Description Section */}
          <section
            id="description-section"
            data-section
            className={`mb-20 transition-all duration-1000 transform ${isVisible['description-section'] ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}
          >
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/2 text-left">
                <h2 className="text-2xl font-bold mb-6 text-white relative inline-block">
                  Why Choose [COUNTRY]?
                  <span className="absolute -bottom-1 left-0 w-1/3 h-1 bg-gradient-to-r from-pink-400 to-pink-600 rounded-full"></span>
                </h2>
                <p className="text-base leading-relaxed text-gray-300">
                  [COUNTRY_DESCRIPTION] - Customize this description for each country.
                </p>
              </div>
              <div className="md:w-1/2">
                <img
                  src="[COUNTRY_LANDMARK_IMAGE]"
                  alt="[COUNTRY] landmark"
                  className="w-full h-auto rounded-lg shadow-lg"
                />
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
            </div>
            {/* Add pricing cards here */}
          </section>

          {/* Benefits Section */}
          <section
            id="benefits-section"
            data-section
            className={`mb-16 bg-gradient-to-br from-navy-700 via-navy-800 to-navy-900 py-8 px-4 rounded-2xl shadow-lg border border-navy-700 relative overflow-hidden transition-all duration-1000 transform ${isVisible['benefits-section'] ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}
          >
            {/* Add benefits content here */}
          </section>

          {/* Documentation Section */}
          <section
            id="documentation-section"
            data-section
            className={`mb-16 bg-gradient-to-br from-navy-700 via-navy-800 to-navy-900 py-8 px-4 rounded-xl shadow-lg border border-navy-700 relative overflow-hidden transform hover:shadow-2xl transition-all duration-1000 ${isVisible['documentation-section'] ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}
          >
            {/* Add documentation content here */}
          </section>
        </main>

        <Footer />
      </div>
    </>
  )
}

/*
STEPS TO CREATE A NEW COUNTRY PAGE:

1. Copy this template file and rename it to [Country]ProductPage.tsx
2. Replace all [COUNTRY] placeholders with the actual country name
3. Replace [COUNTRY_IMAGE_URL] with a country-specific hero image
4. Replace [COUNTRY_LANDMARK_IMAGE] with a landmark image
5. Customize the [COUNTRY_DESCRIPTION] with country-specific benefits
6. Add the import to App.tsx
7. Add the route to App.tsx (e.g., "/[country]-business-setup")
8. Update DestinationSlider.tsx to navigate to the new route
9. Customize pricing, benefits, and documentation for the specific country

EXAMPLE FOR SPAIN:
- File: SpainProductPage.tsx
- Route: "/spain-business-setup"
- Hero image: Madrid cityscape
- Landmark: Sagrada Familia
- Description: Spain offers access to Mediterranean markets...
*/
