import React, { useState, cloneElement } from 'react'
import {
  RocketIcon,
  BarChartIcon,
  ReceiptIcon,
  BookIcon,
  PackageIcon,
  ChevronRightIcon,
  ArrowRightIcon,
} from 'lucide-react'
const services = [
  {
    id: 'formation',
    icon: <RocketIcon className="h-8 w-8" />,
    title: 'U.S. Business Formation',
    tagline:
      'Skip the paperwork. We set up your business so you can start selling faster.',
    visual:
      'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80',
    accentColor: 'from-blue-500 to-purple-500',
    cta: 'Start Your Business',
  },
  {
    id: 'analytics',
    icon: <BarChartIcon className="h-8 w-8" />,
    title: 'Smart Sales Analytics',
    tagline: "Know what's selling, what's not, and how to boost your revenue.",
    visual:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80',
    accentColor: 'from-pink-500 to-rose-500',
    cta: 'Analyze Your Sales',
  },
  {
    id: 'taxes',
    icon: <ReceiptIcon className="h-8 w-8" />,
    title: 'Stress-Free Taxes',
    tagline:
      'Stay compliant, save time, and never stress about tax season again.',
    visual:
      'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80',
    accentColor: 'from-green-500 to-emerald-500',
    cta: 'File Your Taxes',
  },
  {
    id: 'bookkeeping',
    icon: <BookIcon className="h-8 w-8" />,
    title: 'Seamless Bookkeeping',
    tagline: 'No spreadsheets, no hassle—just real-time financial insights.',
    visual:
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80',
    accentColor: 'from-indigo-500 to-blue-500',
    cta: 'Track Your Books',
  },
  {
    id: 'bundle',
    icon: <PackageIcon className="h-8 w-8" />,
    title: 'Business-in-a-Box™',
    tagline:
      'Everything you need—Formation, Bookkeeping, Taxes, and Analytics—bundled to save you time & money.',
    visual:
      'https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&q=80',
    accentColor: 'from-amber-500 to-orange-500',
    cta: 'View Pricing',
  },
]
export function ServiceSlider() {
  const [selectedService, setSelectedService] = useState(services[0])
  return (
    <div className="relative">
      <div className="text-center mb-16">
        <div className="flex justify-center mb-4">
          <div className="inline-flex items-center bg-gradient-to-r from-purple-500/10 to-pink-500/10 px-4 py-2 rounded-full text-purple-400 backdrop-blur-sm">
            <RocketIcon className="h-5 w-5 mr-2" />
            Our Services
          </div>
        </div>
        <h2 className="text-4xl font-bold text-white mb-4 relative inline-block">
          Everything you need to enter a new market
          <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500"></div>
        </h2>
      </div>
      <div className="max-w-6xl mx-auto">
        <div className="flex gap-8">
          <div className="w-64 space-y-2">
            {services.map((service) => (
              <button
                key={service.id}
                onClick={() => setSelectedService(service)}
                className={`w-full text-left p-4 rounded-xl transition-all duration-300 flex items-center justify-between group ${selectedService.id === service.id ? 'bg-[#EA3A70] text-white' : 'hover:bg-[#2D2755] text-gray-400 hover:text-white'}`}
              >
                <div className="flex items-center">
                  <div
                    className={`${selectedService.id === service.id ? 'text-white' : 'text-[#EA3A70] group-hover:text-white'}`}
                  >
                    {service.icon}
                  </div>
                  <span className="ml-3 font-medium">{service.title}</span>
                </div>
                <ChevronRightIcon
                  className={`h-4 w-4 transform transition-transform duration-300 ${selectedService.id === service.id ? 'translate-x-1' : ''}`}
                />
              </button>
            ))}
          </div>
          <div className="flex-1 relative">
            <div className="bg-[#1B1537] rounded-2xl overflow-hidden border border-[#2D2755] transition-all duration-500 hover:border-[#EA3A70]">
              <div className="relative h-80">
                <div className="absolute inset-0">
                  <img
                    src={selectedService.visual}
                    alt={selectedService.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#1B1537]" />
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${selectedService.accentColor} opacity-20`}
                  />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <div className="max-w-xl">
                    <h3 className="text-4xl font-bold text-white mb-4">
                      {selectedService.tagline}
                    </h3>
                    <button className="bg-[#EA3A70] text-white px-6 py-3 rounded-xl font-medium hover:bg-[#EA3A70]/90 transition-colors flex items-center">
                      {selectedService.cta}
                      <ArrowRightIcon className="h-5 w-5 ml-2" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
