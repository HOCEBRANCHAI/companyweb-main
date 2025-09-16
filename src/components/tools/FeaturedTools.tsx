import React from 'react';
import { Link } from 'react-router-dom';
import { CalculatorIcon, ArrowRightIcon, FileTextIcon, PercentIcon, BuildingIcon, CoinsIcon, BarChart2Icon, ExternalLinkIcon, CheckCircleIcon } from 'lucide-react';
export function FeaturedTools() {
  const featuredTools = [{
    title: 'Dutch Tax Calculator',
    description: "Estimate your corporate tax liability based on your company's profit and applicable deductions.",
    icon: PercentIcon,
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    href: '/tools/tax-calculator',
    badgeText: 'Popular',
    stats: [{
      label: 'Accuracy',
      value: '98%'
    }, {
      label: 'Updated',
      value: '2024'
    }]
  }, {
    title: 'Entity Type Selector',
    description: 'Answer a few questions to determine the optimal Dutch business structure for your specific needs.',
    icon: BuildingIcon,
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    href: '/tools/entity-selector',
    badgeText: 'Recommended',
    stats: [{
      label: 'Options',
      value: '5+'
    }, {
      label: 'Users',
      value: '10k+'
    }]
  }, {
    title: 'VAT Return Simulator',
    description: 'Practice completing a Dutch VAT return with this interactive simulator before filing the real thing.',
    icon: FileTextIcon,
    image: 'https://images.unsplash.com/photo-1591696205602-2f950c417cb9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    href: '/tools/vat-simulator',
    badgeText: 'New',
    stats: [{
      label: 'Completion time',
      value: '5 min'
    }, {
      label: 'Accuracy',
      value: '100%'
    }]
  }];
  return <section className="py-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-3xl font-bold text-white flex items-center">
              <CalculatorIcon className="h-7 w-7 text-[#EA3A70] mr-3" />
              Featured Tools
            </h2>
            <p className="text-white mt-2">
              Free interactive tools to help you make informed business
              decisions
            </p>
          </div>
          <Link to="/tools/all" className="px-4 py-2 bg-indigo-900/50 text-white rounded-lg border border-indigo-500/30 hover:bg-indigo-800/50 transition-colors inline-flex items-center">
            View All Tools
            <ArrowRightIcon className="h-4 w-4 ml-2" />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredTools.map((tool, index) => <Link key={index} to={tool.href} className="group relative overflow-hidden rounded-xl border border-indigo-500/30 hover:border-[#EA3A70]/50 transition-all bg-[#1E1B3F] h-full flex flex-col">
              {/* Tool Image */}
              <div className="h-48 overflow-hidden relative">
                <img src={tool.image} alt={tool.title} className="w-full h-full object-cover transition-transform group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1E1B3F] to-transparent opacity-80"></div>
                {tool.badgeText && <div className="absolute top-4 right-4 bg-[#EA3A70] text-white text-xs font-bold px-2 py-1 rounded-full">
                    {tool.badgeText}
                  </div>}
                <div className="absolute bottom-4 left-4 p-2 rounded-lg bg-indigo-900/70 border border-indigo-500/30">
                  <tool.icon className="h-6 w-6 text-[#EA3A70]" />
                </div>
              </div>
              {/* Tool Content */}
              <div className="p-6 flex-grow flex flex-col">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#EA3A70] transition-colors">
                  {tool.title}
                </h3>
                <p className="text-indigo-200 mb-6 flex-grow">
                  {tool.description}
                </p>
                {/* Tool Stats */}
                <div className="grid grid-cols-2 gap-3 mb-4">
                  {tool.stats.map((stat, idx) => <div key={idx} className="bg-indigo-900/50 rounded-lg p-3 border border-indigo-500/20">
                      <p className="text-indigo-300 text-sm">{stat.label}</p>
                      <p className="text-lg font-bold text-white">
                        {stat.value}
                      </p>
                    </div>)}
                </div>
                <div className="flex items-center text-[#EA3A70] font-medium">
                  Try it now
                  <ArrowRightIcon className="h-4 w-4 ml-2 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </Link>)}
        </div>
        <div className="mt-16 bg-gradient-to-r from-[#1E1B3F] to-[#2D2755] rounded-xl border border-indigo-500/30 p-6 shadow-xl">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0 md:mr-6">
              <h3 className="text-2xl font-bold text-white mb-2">
                Need more advanced tools?
              </h3>
              <p className="text-indigo-200">
                eBranch members get access to our full suite of premium business
                tools, including advanced tax calculators, automated compliance
                monitoring, and AI-powered document generators.
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                <div className="flex items-center text-white">
                  <CheckCircleIcon className="h-5 w-5 text-[#EA3A70] mr-2" />
                  <span>Unlimited access</span>
                </div>
                <div className="flex items-center text-white">
                  <CheckCircleIcon className="h-5 w-5 text-[#EA3A70] mr-2" />
                  <span>Advanced features</span>
                </div>
                <div className="flex items-center text-white">
                  <CheckCircleIcon className="h-5 w-5 text-[#EA3A70] mr-2" />
                  <span>Data saving</span>
                </div>
              </div>
            </div>
            <Link to="/ebranch" className="px-6 py-3 bg-[#EA3A70] text-white rounded-lg hover:bg-[#EA3A70]/90 transition-colors flex items-center whitespace-nowrap">
              Explore eBranch
              <ExternalLinkIcon className="h-4 w-4 ml-2" />
            </Link>
          </div>
        </div>
      </div>
    </section>;
}