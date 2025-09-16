import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpenIcon, ArrowRightIcon, PlayCircleIcon, FileTextIcon, LightbulbIcon } from 'lucide-react';
export function TutorialsSection() {
  const tutorials = [{
    title: 'Setting Up a Dutch BV Company',
    category: 'Company Formation',
    duration: '10 min read',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    href: '/tutorials/setting-up-dutch-bv'
  }, {
    title: 'Understanding Dutch VAT Requirements',
    category: 'Tax',
    duration: '8 min read',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    href: '/tutorials/dutch-vat-requirements'
  }, {
    title: 'Opening a Dutch Business Bank Account',
    category: 'Banking',
    duration: '6 min read',
    image: 'https://images.unsplash.com/photo-1601597111158-2fceff292cdc?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    href: '/tutorials/dutch-business-bank-account'
  }];
  const resources = [{
    title: 'Dutch Business Entity Types Comparison',
    type: 'Guide',
    icon: FileTextIcon,
    href: '/resources/dutch-business-entity-types'
  }, {
    title: '2024 Tax Calendar for Dutch Companies',
    type: 'Calendar',
    icon: FileTextIcon,
    href: '/resources/dutch-tax-calendar-2024'
  }, {
    title: 'Expanding to Europe: Netherlands vs. Ireland',
    type: 'Comparison',
    icon: LightbulbIcon,
    href: '/resources/netherlands-vs-ireland'
  }];
  return <section className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
          <div>
            <h2 className="text-3xl font-bold text-white mb-4 flex items-center">
              <BookOpenIcon className="h-7 w-7 text-[#EA3A70] mr-3" />
              Tutorials & Resources
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl">
              Learn everything you need to know about establishing and running
              your business in the Netherlands.
            </p>
          </div>
          <Link to="/tutorials" className="mt-4 md:mt-0 inline-flex items-center px-4 py-2 bg-[#1B1537] text-white rounded-lg border border-[#2D2755] hover:bg-[#2D2755]/50 transition-colors">
            View All Tutorials
            <ArrowRightIcon className="h-4 w-4 ml-2" />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {tutorials.map((tutorial, index) => <Link key={index} to={tutorial.href} className="group relative overflow-hidden rounded-xl border border-[#2D2755] hover:border-[#EA3A70]/50 transition-all h-80 shadow-lg shadow-[#0F0B1F]/50">
              <div className="absolute inset-0">
                <img src={tutorial.image} alt={tutorial.title} className="w-full h-full object-cover transition-transform group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F0B1F] via-[#0F0B1F]/80 to-transparent"></div>
              </div>
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <div className="flex items-center mb-2">
                  <span className="text-xs font-medium px-2 py-1 rounded-full bg-[#1B1537]/70 text-[#EA3A70] border border-[#2D2755]">
                    {tutorial.category}
                  </span>
                  <span className="text-xs text-gray-300 ml-2">
                    {tutorial.duration}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#EA3A70] transition-colors">
                  {tutorial.title}
                </h3>
                <div className="flex items-center text-[#EA3A70] font-medium">
                  Read tutorial
                  <ArrowRightIcon className="h-4 w-4 ml-2 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
              <div className="absolute top-4 right-4 p-2 rounded-full bg-[#0F0B1F]/70 backdrop-blur-sm border border-[#2D2755] group-hover:bg-[#EA3A70]/90 transition-colors">
                <PlayCircleIcon className="h-5 w-5 text-white" />
              </div>
            </Link>)}
        </div>
        <div className="bg-[#1B1537]/80 backdrop-blur-sm rounded-xl border border-[#2D2755] p-6 shadow-lg shadow-[#0F0B1F]/50">
          <h3 className="text-xl font-bold text-white mb-6">
            Popular Resources
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {resources.map((resource, index) => <Link key={index} to={resource.href} className="group bg-[#2D2755]/30 rounded-lg p-4 border border-[#2D2755] hover:border-[#EA3A70]/50 transition-all flex items-start">
                <div className="p-2 rounded-lg bg-[#2D2755]/50 mr-3">
                  <resource.icon className="h-5 w-5 text-[#EA3A70] group-hover:text-white transition-colors" />
                </div>
                <div>
                  <span className="text-xs font-medium text-gray-400">
                    {resource.type}
                  </span>
                  <h4 className="text-white font-medium group-hover:text-[#EA3A70] transition-colors">
                    {resource.title}
                  </h4>
                </div>
              </Link>)}
          </div>
        </div>
      </div>
    </section>;
}