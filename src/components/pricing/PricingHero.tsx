import React from 'react';
import { CoinsIcon, BuildingIcon } from 'lucide-react';
export function PricingHero() {
  return <section className="relative py-16 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#1E1B3F] to-[#0A0826]"></div>
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80')] opacity-10 bg-cover bg-center mix-blend-overlay"></div>
      {/* Decorative elements */}
      <div className="absolute top-20 left-1/4 w-64 h-64 bg-[#EA3A70]/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-indigo-200">
            Plans & Subscriptions
          </h1>
          <p className="text-xl text-white mb-8">
            Choose the right plan for your business needs
          </p>
        </div>
      </div>
    </section>;
}