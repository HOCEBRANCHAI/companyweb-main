import React from 'react';
import { BookOpenIcon, SearchIcon } from 'lucide-react';
export function TutorialHero() {
  return (
    <section className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#1B1537] to-[#0F0B1F]"></div>
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80')] opacity-10 bg-cover bg-center mix-blend-overlay"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-[#EA3A70]/20 text-[#EA3A70] mb-6 backdrop-blur-sm">
            <BookOpenIcon className="h-4 w-4 mr-2" />
            <span>Knowledge Center</span>
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
            Tutorials & Resources
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Learn everything you need to know about establishing and operating
            your business in the Netherlands.
          </p>
          <div className="relative max-w-xl mx-auto">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <SearchIcon className="h-5 w-5 text-gray-400" />
            </div>
            <input type="text" placeholder="Search tutorials and resources..." className="block w-full pl-10 pr-3 py-3 border border-[#2D2755] bg-[#1B1537]/80 rounded-lg placeholder-gray-400 text-white focus:outline-none focus:ring-2 focus:ring-[#EA3A70]/50 focus:border-transparent shadow-lg shadow-[#0F0B1F]/50" />
          </div>
        </div>
      </div>
    </section>
  );
}