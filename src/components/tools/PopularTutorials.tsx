import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpenIcon, ArrowRightIcon, PlayCircleIcon, ClockIcon, CalendarIcon } from 'lucide-react';
export function PopularTutorials() {
  const tutorials = [{
    title: 'Setting Up a Dutch BV Company',
    category: 'Company Formation',
    duration: '10 min read',
    date: 'May 15, 2023',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    href: '/tutorials/setting-up-dutch-bv'
  }, {
    title: 'Understanding Dutch VAT Requirements',
    category: 'Tax',
    duration: '8 min read',
    date: 'June 2, 2023',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    href: '/tutorials/dutch-vat-requirements'
  }, {
    title: 'Opening a Dutch Business Bank Account',
    category: 'Finance',
    duration: '6 min read',
    date: 'April 10, 2023',
    image: 'https://images.unsplash.com/photo-1601597111158-2fceff292cdc?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    href: '/tutorials/dutch-business-bank-account'
  }];
  return <section className="py-16 relative bg-gradient-to-b from-[#0A0826] to-[#1E1B3F]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
          <div>
            <h2 className="text-3xl font-bold text-white mb-4 flex items-center">
              <BookOpenIcon className="h-7 w-7 text-[#EA3A70] mr-3" />
              Popular Tutorials
            </h2>
            <p className="text-white max-w-2xl">
              Comprehensive guides to help you navigate Dutch business
              regulations
            </p>
          </div>
          <Link to="/tutorials" className="mt-4 md:mt-0 inline-flex items-center px-4 py-2 bg-indigo-900/50 text-white rounded-lg border border-indigo-500/30 hover:bg-indigo-800/50 transition-colors">
            View All Tutorials
            <ArrowRightIcon className="h-4 w-4 ml-2" />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tutorials.map((tutorial, index) => <Link key={index} to={tutorial.href} className="group relative overflow-hidden rounded-xl border border-indigo-500/30 hover:border-[#EA3A70]/50 transition-all h-80">
              <div className="absolute inset-0">
                <img src={tutorial.image} alt={tutorial.title} className="w-full h-full object-cover transition-transform group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0826] via-[#0A0826]/80 to-transparent"></div>
              </div>
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <div className="flex items-center mb-2">
                  <span className="text-xs font-medium px-2 py-1 rounded-full bg-indigo-900/70 text-indigo-300 border border-indigo-500/30">
                    {tutorial.category}
                  </span>
                  <span className="text-xs text-indigo-300 ml-2 flex items-center">
                    <ClockIcon className="h-3 w-3 mr-1" />
                    {tutorial.duration}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#EA3A70] transition-colors">
                  {tutorial.title}
                </h3>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-indigo-300 flex items-center">
                    <CalendarIcon className="h-3 w-3 mr-1" />
                    {tutorial.date}
                  </span>
                  <div className="flex items-center text-[#EA3A70] font-medium">
                    Read tutorial
                    <ArrowRightIcon className="h-4 w-4 ml-2 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </div>
              <div className="absolute top-4 right-4 p-2 rounded-full bg-[#0A0826]/70 backdrop-blur-sm border border-indigo-500/30 group-hover:bg-[#EA3A70]/90 transition-colors">
                <PlayCircleIcon className="h-5 w-5 text-white" />
              </div>
            </Link>)}
        </div>
      </div>
    </section>;
}