import React, { useEffect, useState } from 'react'
import {
  BuildingIcon,
  MailIcon,
  LineChartIcon,
  PercentIcon,
  FileTextIcon,
  ShieldIcon,
  CheckIcon,
  GlobeIcon,
  CoinsIcon,
  UserIcon,
  PhoneIcon,
  HeadphonesIcon,
  CalendarIcon,
  ArrowRightIcon,
  BrainIcon,
  LayoutDashboardIcon,
  ServerIcon,
  ClockIcon,
} from 'lucide-react'
import { countries } from '../../constants/countries'
export function EBranchFeatures() {
  const [selectedCountry, setSelectedCountry] = useState('nl')
  const [activeCategory, setActiveCategory] = useState('core')
  // Load selected country from localStorage on initial load
  useEffect(() => {
    const savedCountry = localStorage.getItem('preferredCountry')
    if (savedCountry && countries[savedCountry]) {
      setSelectedCountry(savedCountry)
    }
  }, [])
  // Get country name based on code
  const getCountryName = (code) => countries[code] || 'European'
  // Feature categories
  const categories = [
    {
      id: 'core',
      name: 'Enterprise Solutions',
      icon: BuildingIcon,
    },
    {
      id: 'compliance',
      name: 'Regulatory Compliance',
      icon: ShieldIcon,
    },
    {
      id: 'financial',
      name: 'Financial Management',
      icon: LineChartIcon,
    },
    {
      id: 'ai',
      name: 'Advanced Analytics',
      icon: BrainIcon,
    },
    {
      id: 'support',
      name: 'Professional Support',
      icon: HeadphonesIcon,
    },
  ]
  // Organized features by category
  const featuresByCategory = {
    core: [
      {
        title: 'Business Formation',
        description: `Comprehensive ${getCountryName(selectedCountry)} business registration with full legal documentation.`,
        icon: <BuildingIcon className="h-6 w-6 text-[#EA3A70]" />,
      },
      {
        title: 'Corporate Address',
        description: `Strategic ${getCountryName(selectedCountry)} business location with professional mail management.`,
        icon: <MailIcon className="h-6 w-6 text-[#EA3A70]" />,
      },
      {
        title: 'Corporate Secretary',
        description: `Maintain legal compliance and handle administrative requirements in ${getCountryName(selectedCountry)}.`,
        icon: <FileTextIcon className="h-6 w-6 text-[#EA3A70]" />,
      },
      {
        title: 'Digital Dashboard',
        description: `Manage all aspects of your ${getCountryName(selectedCountry)} business from a single online platform.`,
        icon: <LayoutDashboardIcon className="h-6 w-6 text-[#EA3A70]" />,
      },
      {
        title: 'Banking Assistance',
        description: `Help with opening a ${getCountryName(selectedCountry)} business bank account for your company.`,
        icon: <CoinsIcon className="h-6 w-6 text-[#EA3A70]" />,
      },
      {
        title: 'Legal Support',
        description: `Access to legal templates and basic legal guidance for ${getCountryName(selectedCountry)} operations.`,
        icon: <ShieldIcon className="h-6 w-6 text-[#EA3A70]" />,
      },
    ],
    compliance: [
      {
        title: 'Compliance Monitoring',
        description: `Automated tracking of all ${getCountryName(selectedCountry)} compliance requirements and deadlines.`,
        icon: <CalendarIcon className="h-6 w-6 text-[#EA3A70]" />,
      },
      {
        title: 'VAT Registration',
        description: `Complete ${getCountryName(selectedCountry)} VAT registration and ongoing compliance management.`,
        icon: <PercentIcon className="h-6 w-6 text-[#EA3A70]" />,
      },
      {
        title: 'UBO Registration',
        description: `Ultimate Beneficial Owner registration in compliance with ${getCountryName(selectedCountry)} regulations.`,
        icon: <UserIcon className="h-6 w-6 text-[#EA3A70]" />,
      },
      {
        title: 'Regulatory Updates',
        description: `Real-time notifications about ${getCountryName(selectedCountry)} regulatory changes affecting your business.`,
        icon: <GlobeIcon className="h-6 w-6 text-[#EA3A70]" />,
      },
    ],
    financial: [
      {
        title: 'Accounting Services',
        description: `Bookkeeping, financial statements, and reporting services for ${getCountryName(selectedCountry)} operations.`,
        icon: <LineChartIcon className="h-6 w-6 text-[#EA3A70]" />,
      },
      {
        title: 'Tax Compliance',
        description: `${getCountryName(selectedCountry)} VAT returns, corporate tax filings, and tax optimization.`,
        icon: <PercentIcon className="h-6 w-6 text-[#EA3A70]" />,
      },
      {
        title: 'Invoice Management',
        description: `Create, send, and track invoices compliant with ${getCountryName(selectedCountry)} requirements.`,
        icon: <FileTextIcon className="h-6 w-6 text-[#EA3A70]" />,
      },
      {
        title: 'Financial Dashboard',
        description: `Real-time financial overview of your ${getCountryName(selectedCountry)} business performance.`,
        icon: <LayoutDashboardIcon className="h-6 w-6 text-[#EA3A70]" />,
      },
    ],
    ai: [
      {
        title: 'AI Document Processing',
        description: `Automated scanning and data extraction from your ${getCountryName(selectedCountry)} business documents.`,
        icon: <BrainIcon className="h-6 w-6 text-[#EA3A70]" />,
      },
      {
        title: 'Smart Compliance Assistant',
        description: `AI-powered guidance on ${getCountryName(selectedCountry)} regulatory requirements and deadlines.`,
        icon: <ServerIcon className="h-6 w-6 text-[#EA3A70]" />,
      },
      {
        title: 'Automated Form Filing',
        description: `AI-assisted completion of ${getCountryName(selectedCountry)} government forms and applications.`,
        icon: <FileTextIcon className="h-6 w-6 text-[#EA3A70]" />,
      },
      {
        title: 'Predictive Analytics',
        description: `AI forecasting of financial trends and compliance needs for your ${getCountryName(selectedCountry)} business.`,
        icon: <LineChartIcon className="h-6 w-6 text-[#EA3A70]" />,
      },
    ],
    support: [
      {
        title: 'Dedicated Account Manager',
        description: `Your personal point of contact for all ${getCountryName(selectedCountry)} service-related questions.`,
        icon: <UserIcon className="h-6 w-6 text-[#EA3A70]" />,
      },
      {
        title: 'Multilingual Support',
        description: `Customer service available in English, ${getCountryName(selectedCountry)} language, and other major languages.`,
        icon: <HeadphonesIcon className="h-6 w-6 text-[#EA3A70]" />,
      },
      {
        title: '24/7 Phone Answering',
        description: `Professional telephone answering service in multiple languages for your ${getCountryName(selectedCountry)} business.`,
        icon: <PhoneIcon className="h-6 w-6 text-[#EA3A70]" />,
      },
      {
        title: 'Fast Response Time',
        description: `Guaranteed 4-hour response time for all ${getCountryName(selectedCountry)} business inquiries.`,
        icon: <ClockIcon className="h-6 w-6 text-[#EA3A70]" />,
      },
    ],
  }
  return (
    <section className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-[#EA3A70]/20 text-[#EA3A70] mb-4 backdrop-blur-sm">
            <GlobeIcon className="h-4 w-4 mr-2" />
            <span>Enterprise Solutions</span>
          </div>
          <h2 className="text-3xl font-bold text-white mb-4">
            Comprehensive Business Management Platform
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            An integrated suite of professional services designed for efficient
            European business operations.
          </p>
        </div>
        {/* Category Navigation */}
        <div className="flex flex-wrap justify-center mb-12 gap-2">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center px-4 py-2 rounded-lg text-sm font-medium transition-colors ${activeCategory === category.id ? 'bg-[#EA3A70]/10 text-[#EA3A70] border border-[#EA3A70]/30' : 'bg-[#1B1537]/80 text-white hover:bg-[#2D2755]/50 border border-[#2D2755]'}`}
            >
              <category.icon className="h-4 w-4 mr-2" />
              {category.name}
            </button>
          ))}
        </div>
        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuresByCategory[activeCategory].map((feature, index) => (
            <div
              key={index}
              className="bg-[#1B1537]/80 backdrop-blur-sm rounded-xl p-6 border border-[#2D2755] hover:border-[#EA3A70]/50 transition-all hover:shadow-lg shadow-[#0F0B1F]/50"
            >
              <div className="p-3 rounded-lg bg-[#2D2755]/50 border border-[#2D2755] mb-4 inline-block">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>
        <div className="mt-16 text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-lg bg-[#2D2755]/50 border border-[#2D2755] text-white mb-8">
            <CheckIcon className="h-5 w-5 text-[#EA3A70] mr-2" />
            <span>All features included in your eBranch subscription</span>
          </div>
          <button className="px-6 py-3 bg-[#EA3A70] text-white rounded-lg hover:bg-[#EA3A70]/90 transition-colors inline-flex items-center font-medium shadow-md shadow-[#EA3A70]/20">
            Explore Full Platform
            <ArrowRightIcon className="h-4 w-4 ml-2" />
          </button>
        </div>
      </div>
    </section>
  )
}
