import React from 'react'
import { BuildingIcon, GlobeIcon, EuroIcon } from 'lucide-react'
export function TestimonialSection() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#1B1537] to-[#0F0B1F]" />
      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <img
            src="https://images.unsplash.com/photo-1567095761054-7a02e69e5c43?auto=format&fit=crop&q=80&w=2940"
            alt="Y Combinator"
            className="h-8 mx-auto mb-8 opacity-50"
          />
          <h3 className="text-xl md:text-2xl font-bold text-white mb-8 leading-relaxed relative inline-block">
            "We're thrilled with House of Companies' vision for modernizing
            business expansion. Their platform is revolutionizing how companies
            enter new markets across Europe."
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500"></div>
          </h3>
          <div className="flex items-center justify-center space-x-4">
            <img
              src="https://images.unsplash.com/photo-1567095761054-7a02e69e5c43?auto=format&fit=crop&q=80&w=2940"
              alt="Partner"
              className="h-16 w-16 rounded-full"
            />
            <div className="text-left">
              <div className="text-white font-medium">Sarah Chen</div>
              <div className="text-gray-400">Managing Partner</div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="flex items-center justify-center mb-4">
              <BuildingIcon className="h-8 w-8 text-[#EA3A70]" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">30,000+</div>
            <div className="text-gray-400">Companies incorporated</div>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center mb-4">
              <GlobeIcon className="h-8 w-8 text-[#EA3A70]" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">27</div>
            <div className="text-gray-400">Countries supported</div>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center mb-4">
              <EuroIcon className="h-8 w-8 text-[#EA3A70]" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">€2.5M</div>
            <div className="text-gray-400">Customer savings</div>
          </div>
        </div>
      </div>
    </section>
  )
}
