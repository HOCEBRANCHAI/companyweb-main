import React from 'react';
import { Link } from 'react-router-dom';
import { BuildingIcon, SparklesIcon, ArrowLeftIcon, HomeIcon } from 'lucide-react';
import { BookingWidget } from '../components/landing/BookingWidget';
import { InfoSection } from '../components/landing/InfoSection';
import { TestimonialSection } from '../components/landing/TestimonialSection';
import { NewsletterSignup } from '../components/landing/NewsletterSignup';
import { AICabinCrew } from '../components/business/AICabinCrew';
import { AIFeatureShowcase } from '../components/landing/AIFeatureShowcase';
import { ServiceSlider } from '../components/landing/ServiceSlider';
import { DestinationSlider } from '../components/landing/DestinationSlider';
import { PortalPromotion } from '../components/landing/PortalPromotion';
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';

export function Services() {
  return (
    <div className="min-h-screen bg-[#0F0B1F] relative flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="relative pt-20 sm:pt-24 lg:pt-32 pb-16 sm:pb-20 lg:pb-24 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-[#1B1537] to-[#0F0B1F]" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0F0B1F] to-transparent" />
          <div className="container mx-auto px-4 relative">
            {/* Breadcrumb Navigation */}
            <div className="mb-8">
              <nav className="flex items-center space-x-2 text-sm text-gray-400">
                <Link to="/" className="flex items-center hover:text-white transition-colors">
                  <HomeIcon className="h-4 w-4 mr-1" />
                  Home
                </Link>
                <span>/</span>
                <span className="text-white">Services</span>
              </nav>
            </div>
            <div className="max-w-3xl mx-auto text-center mb-8 sm:mb-12 relative">
              <div className="relative z-10">
                <div className="flex justify-center mb-4">
                  <div className="inline-flex items-center bg-gradient-to-r from-purple-500/10 to-pink-500/10 px-3 sm:px-4 py-2 rounded-full text-purple-400 backdrop-blur-sm text-sm sm:text-base">
                    <SparklesIcon className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
                    Explore Our Services
                  </div>
                </div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 relative inline-block">
                  Our Services
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 sm:w-24 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500"></div>
                </h1>
                <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-6 sm:mb-8 px-4">
                  Discover a range of services designed to help your business thrive and expand globally with AI-powered guidance.
                </p>
              </div>
            </div>
            <div className="relative z-10">
              <BookingWidget />
            </div>
          </div>
        </section>
        <section className="py-16 sm:py-20 lg:py-24 relative">
          <div className="container mx-auto px-4 relative">
            <ServiceSlider />
          </div>
        </section>
        <section className="py-16 sm:py-20 lg:py-24 relative bg-[#1B1537]/30">
          <div className="container mx-auto px-4">
            <DestinationSlider />
          </div>
        </section>
        <section className="py-16 sm:py-20 lg:py-24 relative">
          <div className="container mx-auto px-4 relative">
            <PortalPromotion />
          </div>
        </section>
        <AIFeatureShowcase />
        <InfoSection />
        <TestimonialSection />
        <section className="py-16 sm:py-20 lg:py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-[#1B1537]/30 to-transparent" />
          <div className="container mx-auto px-4 relative">
            <NewsletterSignup />
          </div>
        </section>
        <AICabinCrew />
      </main>
      <Footer />
    </div>
  );
}
 