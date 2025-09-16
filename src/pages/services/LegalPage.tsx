import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MainLayout } from '../../components/layout/MainLayout';
import { CountrySelector } from '../../components/services/CountrySelector';
import { TemplateExplorer } from '../../components/services/legal/TemplateExplorer';
import { AIFeatures } from '../../components/services/legal/AIFeatures';
import { LegalPricing } from '../../components/services/legal/LegalPricing';
import { Testimonials } from '../../components/services/legal/Testimonials';
import { LegalPortalPreview } from '../../components/legal/LegalPortalPreview';
import { LegalCTA } from '../../components/legal/LegalCTA';
import { ScaleIcon, ShieldIcon, ClockIcon, EuroIcon, FileTextIcon, CheckIcon, ArrowRightIcon, GlobeIcon, LightbulbIcon, BrainCircuitIcon, WandIcon, PercentIcon, BuildingIcon, LayoutDashboardIcon, StarIcon, MessageCircleIcon } from 'lucide-react';
export function LegalPage() {
  const [selectedCountry, setSelectedCountry] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState('templates');
  const benefits = [{
    title: 'Professional Templates',
    description: 'Attorney-drafted documents optimized for EU business needs',
    icon: <FileTextIcon className="h-6 w-6 text-[#EA3A70]" />
  }, {
    title: 'Cost-Effective',
    description: 'Save thousands compared to traditional legal services',
    icon: <EuroIcon className="h-6 w-6 text-[#EA3A70]" />
  }, {
    title: 'Time-Saving',
    description: 'Get your documents in minutes, not weeks',
    icon: <ClockIcon className="h-6 w-6 text-[#EA3A70]" />
  }, {
    title: 'Legal Compliance',
    description: 'Automatically updated for EU regulatory changes',
    icon: <ShieldIcon className="h-6 w-6 text-[#EA3A70]" />
  }];
  return <MainLayout>
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 bg-cover bg-center" style={{
        backgroundImage: `url(https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80)`,
        filter: 'brightness(0.2)'
      }}></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0826]/90 to-[#0A0826]/80"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <div>
              <div className="flex items-center mb-2">
                <FileTextIcon className="h-6 w-6 text-[#EA3A70] mr-2" />
                <span className="text-indigo-300 text-sm font-medium">
                  Legal Services
                </span>
              </div>
              <h1 className="text-4xl font-bold text-white mb-4">
                Legal Documents Without the Legal Fees
              </h1>
              <p className="text-xl text-indigo-200 max-w-2xl">
                Professional contracts for every business need – without the
                €300/hour attorney. AI-powered templates that adapt to your
                specific requirements.
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row md:items-center gap-4 mt-8">
            <CountrySelector onCountrySelect={setSelectedCountry} selectedCountry={selectedCountry} />
            <Link to="/portal/legal/templates" className="px-6 py-3 bg-[#EA3A70] hover:bg-[#EA3A70]/90 text-white rounded-lg shadow-lg shadow-[#EA3A70]/20 font-medium flex items-center justify-center">
              Browse Templates
              <ArrowRightIcon className="h-5 w-5 ml-2" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-12">
            <div className="bg-indigo-900/30 backdrop-blur-sm rounded-lg p-4 border border-indigo-500/30 flex flex-col items-center text-center">
              <FileTextIcon className="h-6 w-6 text-[#EA3A70] mb-2" />
              <div className="text-2xl font-bold text-white">100+</div>
              <div className="text-sm text-indigo-300">Legal Templates</div>
            </div>
            <div className="bg-indigo-900/30 backdrop-blur-sm rounded-lg p-4 border border-indigo-500/30 flex flex-col items-center text-center">
              <GlobeIcon className="h-6 w-6 text-[#EA3A70] mb-2" />
              <div className="text-2xl font-bold text-white">All EU</div>
              <div className="text-sm text-indigo-300">Countries Covered</div>
            </div>
            <div className="bg-indigo-900/30 backdrop-blur-sm rounded-lg p-4 border border-indigo-500/30 flex flex-col items-center text-center">
              <ClockIcon className="h-6 w-6 text-[#EA3A70] mb-2" />
              <div className="text-2xl font-bold text-white">5 min</div>
              <div className="text-sm text-indigo-300">
                Average Creation Time
              </div>
            </div>
            <div className="bg-indigo-900/30 backdrop-blur-sm rounded-lg p-4 border border-indigo-500/30 flex flex-col items-center text-center">
              <EuroIcon className="h-6 w-6 text-[#EA3A70] mb-2" />
              <div className="text-2xl font-bold text-white">90%</div>
              <div className="text-sm text-indigo-300">
                Cost Savings vs Lawyers
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Portal Features Section */}
      <section className="py-16 bg-[#0A0826]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Our Digital Platform Makes Legal Documents Easy
            </h2>
            <p className="text-xl text-indigo-200 max-w-3xl mx-auto">
              Experience a streamlined, fully digital process designed for
              businesses worldwide
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <div className="bg-indigo-900/20 rounded-xl overflow-hidden border border-indigo-500/30">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-indigo-900/50 rounded-lg mr-4">
                    <LayoutDashboardIcon className="h-6 w-6 text-[#EA3A70]" />
                  </div>
                  <h3 className="text-xl font-bold text-white">
                    Interactive Legal Portal
                  </h3>
                </div>
                <p className="text-indigo-200 mb-6">
                  Our intuitive dashboard guides you through each step of the
                  document creation process, from template selection to
                  customization and final download.
                </p>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <CheckIcon className="h-5 w-5 text-[#EA3A70] mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-indigo-200">
                      Simple step-by-step document creation
                    </span>
                  </div>
                  <div className="flex items-start">
                    <CheckIcon className="h-5 w-5 text-[#EA3A70] mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-indigo-200">
                      Document history and storage
                    </span>
                  </div>
                  <div className="flex items-start">
                    <CheckIcon className="h-5 w-5 text-[#EA3A70] mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-indigo-200">
                      Secure document management
                    </span>
                  </div>
                </div>
              </div>
              <div className="border-t border-indigo-500/30 bg-indigo-900/30 p-4">
                <LegalPortalPreview />
              </div>
            </div>
            <div className="bg-indigo-900/20 rounded-xl overflow-hidden border border-indigo-500/30">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-indigo-900/50 rounded-lg mr-4">
                    <MessageCircleIcon className="h-6 w-6 text-[#EA3A70]" />
                  </div>
                  <h3 className="text-xl font-bold text-white">
                    AI Legal Assistant
                  </h3>
                </div>
                <p className="text-indigo-200 mb-6">
                  Our AI assistant guides you through the entire document
                  creation process, answering questions about legal requirements
                  and helping with document customization.
                </p>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <CheckIcon className="h-5 w-5 text-[#EA3A70] mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-indigo-200">
                      24/7 instant legal assistance
                    </span>
                  </div>
                  <div className="flex items-start">
                    <CheckIcon className="h-5 w-5 text-[#EA3A70] mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-indigo-200">
                      Personalized document recommendations
                    </span>
                  </div>
                  <div className="flex items-start">
                    <CheckIcon className="h-5 w-5 text-[#EA3A70] mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-indigo-200">
                      Legal term explanation and guidance
                    </span>
                  </div>
                </div>
              </div>
              <div className="border-t border-indigo-500/30 bg-indigo-900/30 p-4">
                <div className="bg-[#0F0B1F] rounded-lg p-4 border border-indigo-500/50">
                  <div className="flex items-start space-x-4">
                    <div className="bg-[#EA3A70] rounded-full p-2 flex-shrink-0">
                      <MessageCircleIcon className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <p className="text-white">
                        "Hi there! I'm your AI legal assistant. I can help you
                        choose the right document template based on your
                        specific needs and customize it for your business. Would
                        you like me to recommend a template?"
                      </p>
                      <div className="mt-4">
                        <Link to="/portal/legal/ai-assistant" className="px-4 py-2 bg-[#EA3A70] text-white rounded-lg hover:bg-[#EA3A70]/90 transition-colors inline-flex items-center">
                          Chat with AI Assistant
                          <ArrowRightIcon className="h-4 w-4 ml-2" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-indigo-900/20 rounded-xl p-6 border border-indigo-500/30">
              <div className="p-3 bg-indigo-900/50 rounded-lg inline-block mb-4">
                <GlobeIcon className="h-6 w-6 text-[#EA3A70]" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                Country-Specific Adaptation
              </h3>
              <p className="text-indigo-200 mb-4">
                All templates automatically adapt to local laws and regulations
                across EU countries
              </p>
              <div className="bg-indigo-900/30 rounded-lg p-4 border border-indigo-500/50">
                <div className="space-y-3">
                  <div className="flex items-start">
                    <CheckIcon className="h-5 w-5 text-[#EA3A70] mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-indigo-200">
                      Country-specific legal clauses
                    </span>
                  </div>
                  <div className="flex items-start">
                    <CheckIcon className="h-5 w-5 text-[#EA3A70] mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-indigo-200">
                      Compliant with local regulations
                    </span>
                  </div>
                  <div className="flex items-start">
                    <CheckIcon className="h-5 w-5 text-[#EA3A70] mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-indigo-200">
                      Multilingual document generation
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-indigo-900/20 rounded-xl p-6 border border-indigo-500/30">
              <div className="p-3 bg-indigo-900/50 rounded-lg inline-block mb-4">
                <BrainCircuitIcon className="h-6 w-6 text-[#EA3A70]" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                AI-Powered Customization
              </h3>
              <p className="text-indigo-200 mb-4">
                Our AI engine tailors each document to your specific business
                needs
              </p>
              <div className="bg-indigo-900/30 rounded-lg p-4 border border-indigo-500/50">
                <div className="space-y-3">
                  <div className="flex items-start">
                    <CheckIcon className="h-5 w-5 text-[#EA3A70] mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-indigo-200">
                      Smart clause suggestions
                    </span>
                  </div>
                  <div className="flex items-start">
                    <CheckIcon className="h-5 w-5 text-[#EA3A70] mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-indigo-200">
                      Industry-specific adaptations
                    </span>
                  </div>
                  <div className="flex items-start">
                    <CheckIcon className="h-5 w-5 text-[#EA3A70] mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-indigo-200">
                      Risk assessment and recommendations
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-indigo-900/20 rounded-xl p-6 border border-indigo-500/30">
              <div className="p-3 bg-indigo-900/50 rounded-lg inline-block mb-4">
                <ShieldIcon className="h-6 w-6 text-[#EA3A70]" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                Legal Compliance Guarantee
              </h3>
              <p className="text-indigo-200 mb-4">
                Stay compliant with the latest legal requirements across all
                jurisdictions
              </p>
              <div className="bg-indigo-900/30 rounded-lg p-4 border border-indigo-500/50">
                <div className="space-y-3">
                  <div className="flex items-start">
                    <CheckIcon className="h-5 w-5 text-[#EA3A70] mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-indigo-200">
                      Automatic regulatory updates
                    </span>
                  </div>
                  <div className="flex items-start">
                    <CheckIcon className="h-5 w-5 text-[#EA3A70] mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-indigo-200">
                      Legal expert review available
                    </span>
                  </div>
                  <div className="flex items-start">
                    <CheckIcon className="h-5 w-5 text-[#EA3A70] mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-indigo-200">
                      Compliance audit trail
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Template Explorer Section */}
      <section className="py-16 bg-[#0F0B1F]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Every Document Your Business Needs
            </h2>
            <p className="text-xl text-indigo-200 max-w-3xl mx-auto">
              Professionally drafted templates, customizable for your specific
              requirements
            </p>
          </div>
          <div className="bg-indigo-900/20 rounded-xl p-6 border border-indigo-500/30 mb-12">
            <div className="flex items-center mb-6">
              <div className="h-8 w-8 rounded-full bg-[#EA3A70] text-white flex items-center justify-center font-bold">
                1
              </div>
              <div className="ml-4">
                <h2 className="text-xl font-semibold text-white">
                  Browse Our Template Library
                </h2>
                <p className="text-indigo-300">
                  Find the right document for your business needs
                </p>
              </div>
            </div>
            <div className="bg-[#0A0826] rounded-xl border border-indigo-500/30 overflow-hidden">
              <div className="border-b border-indigo-500/30 p-4">
                <div className="flex space-x-4 overflow-x-auto">
                  <button onClick={() => setActiveTab('templates')} className={`px-4 py-2 rounded-lg font-medium whitespace-nowrap ${activeTab === 'templates' ? 'bg-[#EA3A70] text-white' : 'text-indigo-300 hover:bg-indigo-900/30'}`}>
                    All Templates
                  </button>
                  <button onClick={() => setActiveTab('employment')} className={`px-4 py-2 rounded-lg font-medium whitespace-nowrap ${activeTab === 'employment' ? 'bg-[#EA3A70] text-white' : 'text-indigo-300 hover:bg-indigo-900/30'}`}>
                    Employment
                  </button>
                  <button onClick={() => setActiveTab('business')} className={`px-4 py-2 rounded-lg font-medium whitespace-nowrap ${activeTab === 'business' ? 'bg-[#EA3A70] text-white' : 'text-indigo-300 hover:bg-indigo-900/30'}`}>
                    Business Operations
                  </button>
                  <button onClick={() => setActiveTab('corporate')} className={`px-4 py-2 rounded-lg font-medium whitespace-nowrap ${activeTab === 'corporate' ? 'bg-[#EA3A70] text-white' : 'text-indigo-300 hover:bg-indigo-900/30'}`}>
                    Corporate
                  </button>
                  <button onClick={() => setActiveTab('privacy')} className={`px-4 py-2 rounded-lg font-medium whitespace-nowrap ${activeTab === 'privacy' ? 'bg-[#EA3A70] text-white' : 'text-indigo-300 hover:bg-indigo-900/30'}`}>
                    Privacy & Data
                  </button>
                </div>
              </div>
              <div className="p-6">
                <TemplateExplorer />
              </div>
            </div>
          </div>
          <div className="text-center mt-8">
            <Link to="/portal/legal/templates" className="px-6 py-3 bg-[#EA3A70] text-white rounded-lg hover:bg-[#EA3A70]/90 transition-colors inline-flex items-center font-medium">
              View All Templates
              <ArrowRightIcon className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
      {/* AI Features Section */}
      <section className="py-16 bg-[#0A0826]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AIFeatures />
        </div>
      </section>
      {/* Benefits Section */}
      <section className="py-16 bg-[#0F0B1F]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              The Smart Way to Handle Legal Documents
            </h2>
            <p className="text-xl text-indigo-200">
              Stop choosing between expensive lawyers and risky templates
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map(benefit => <div key={benefit.title} className="bg-indigo-900/20 rounded-xl p-6 border border-indigo-500/30 hover:border-[#EA3A70]/30 transition-all">
                <div className="inline-flex items-center justify-center p-3 rounded-lg bg-[#2D2755]/50 border border-[#2D2755] mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  {benefit.title}
                </h3>
                <p className="text-indigo-200">{benefit.description}</p>
              </div>)}
          </div>
        </div>
      </section>
      {/* Testimonials Section */}
      <section className="py-16 bg-[#0A0826]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              What Our Customers Say
            </h2>
            <p className="text-xl text-indigo-200 max-w-3xl mx-auto">
              Trusted by businesses across Europe
            </p>
          </div>
          <div className="bg-indigo-900/20 rounded-xl p-8 border border-indigo-500/30 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#EA3A70]/20 to-indigo-600/20 rounded-full blur-3xl -mr-32 -mt-32"></div>
            <div className="relative z-10 flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-1/3">
                <div className="rounded-xl overflow-hidden border-2 border-indigo-500/30 h-64 w-64 mx-auto">
                  <img src="https://randomuser.me/api/portraits/women/42.jpg" alt="Client Portrait" className="w-full h-full object-cover" />
                </div>
              </div>
              <div className="md:w-2/3">
                <div className="flex mb-6">
                  {[...Array(5)].map((_, i) => <StarIcon key={i} className="h-5 w-5 text-yellow-500" />)}
                </div>
                <blockquote className="text-xl text-white italic mb-6">
                  "The AI-powered legal templates saved us thousands in legal
                  fees during our EU expansion. Documents for all countries were
                  ready in minutes, and the customization options were exactly
                  what we needed. The platform is intuitive and the documents
                  are professional-quality."
                </blockquote>
                <div>
                  <p className="text-lg font-bold text-white">
                    Sophia Martinez
                  </p>
                  <p className="text-indigo-300">COO, TechGrowth GmbH</p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-8 text-center">
            <Link to="/testimonials" className="px-6 py-3 bg-indigo-900/50 text-white border border-indigo-500/30 rounded-lg hover:bg-indigo-800/50 transition-colors text-lg font-medium inline-flex items-center">
              Read More Success Stories
              <ArrowRightIcon className="h-5 w-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>
      {/* Pricing Section */}
      <section className="py-16 bg-[#0F0B1F]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <LegalPricing />
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-b from-[#0F0B1F] to-[#1B1537]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <LegalCTA />
        </div>
      </section>
    </MainLayout>;
}