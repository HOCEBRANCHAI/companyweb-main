import React from 'react';
import { SearchIcon, SparklesIcon } from 'lucide-react';
export function ToolsHero() {
  return <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#1E1B3F] to-[#0A0826]"></div>
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80')] opacity-10 bg-cover bg-center mix-blend-overlay"></div>
      {/* Decorative elements */}
      <div className="absolute top-20 left-1/4 w-64 h-64 bg-[#EA3A70]/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-[#EA3A70]/20 text-[#EA3A70] mb-6">
            <SparklesIcon className="h-4 w-4 mr-2" />
            <span>Free Business Tools & Resources</span>
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-indigo-200">
            Tools & Tutorials
          </h1>
          <p className="text-xl text-white mb-8">
            Free resources to help you establish and operate your business in
            the Netherlands
          </p>
          <div className="relative max-w-xl mx-auto">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <SearchIcon className="h-5 w-5 text-indigo-400" />
            </div>
            <input type="text" placeholder="Search tools, calculators, tutorials..." className="block w-full pl-10 pr-3 py-3 border border-indigo-500/30 bg-indigo-900/30 rounded-lg placeholder-indigo-400 text-white focus:outline-none focus:ring-2 focus:ring-[#EA3A70]/50 focus:border-transparent" />
          </div>
        </div>
      </div>
    </section>;
}