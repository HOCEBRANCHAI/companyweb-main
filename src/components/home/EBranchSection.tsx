import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { RocketIcon, BuildingIcon, MailIcon, LineChartIcon, PercentIcon, FileTextIcon, ShieldIcon, CheckCircleIcon, ArrowRightIcon, GlobeIcon } from 'lucide-react';
import { countries } from '../../constants/countries';
export function EBranchSection() {
  const [selectedCountry, setSelectedCountry] = useState('nl');
  // Load selected country from localStorage on initial load
  useEffect(() => {
    const savedCountry = localStorage.getItem('preferredCountry');
    if (savedCountry && countries[savedCountry]) {
      setSelectedCountry(savedCountry);
    }
  }, []);
  // Get country name based on code
  const getCountryName = code => countries[code] || 'European';
  const features = [{
    title: 'All-in-One Solution',
    description: `Get everything you need to operate in ${getCountryName(selectedCountry)} in a single package.`,
    icon: CheckCircleIcon
  }, {
    title: 'Launch in 48 Hours',
    description: `Start your ${getCountryName(selectedCountry)} operations in just 2 business days.`,
    icon: RocketIcon
  }, {
    title: 'Fixed Monthly Fee',
    description: 'Predictable pricing with no hidden costs or surprises.',
    icon: CheckCircleIcon
  }, {
    title: 'Digital-First Approach',
    description: 'Manage everything through our intuitive online platform.',
    icon: CheckCircleIcon
  }];
  const services = [{
    name: 'Company Formation',
    icon: BuildingIcon
  }, {
    name: 'Mailbox',
    icon: MailIcon
  }, {
    name: 'Accounting',
    icon: LineChartIcon
  }, {
    name: 'Tax Filing',
    icon: PercentIcon
  }, {
    name: 'Corporate Secretary',
    icon: FileTextIcon
  }, {
    name: 'Legal Support',
    icon: ShieldIcon
  }];
  return <section className="py-20 relative bg-gradient-to-b from-[#0F0B1F] to-[#1B1537]">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80')] opacity-5 bg-cover bg-center mix-blend-overlay"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-8">
          <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-[#EA3A70]/20 text-[#EA3A70] mb-4 backdrop-blur-sm">
            <RocketIcon className="h-4 w-4 mr-2" />
            <span>Premium Service</span>
          </div>
          <h2 className="text-3xl font-bold text-white mb-2">
            eBranch: The Ultimate European Business Solution
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Available in all 27 EU countries with country-specific expertise
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center mb-6">
              <GlobeIcon className="h-6 w-6 text-[#EA3A70] mr-2" />
              <h3 className="text-xl font-medium text-white">
                The All-in-One Solution for Your{' '}
                {getCountryName(selectedCountry)} Business
              </h3>
            </div>
            <p className="text-xl text-gray-300 mb-8">
              eBranch combines all our services into a comprehensive package,
              giving you everything you need to establish and operate your
              business in {getCountryName(selectedCountry)} or any other EU
              country.
            </p>
            <div className="space-y-4 mb-8">
              {features.map((feature, index) => <div key={index} className="flex items-start">
                  <div className="p-1 rounded-full bg-[#EA3A70]/20 mr-3 mt-1">
                    <feature.icon className="h-5 w-5 text-[#EA3A70]" />
                  </div>
                  <div>
                    <h3 className="text-white font-medium">{feature.title}</h3>
                    <p className="text-gray-300">{feature.description}</p>
                  </div>
                </div>)}
            </div>
            <Link to="/ebranch" className="inline-flex items-center px-6 py-3 bg-[#EA3A70] text-white rounded-lg hover:bg-[#EA3A70]/90 transition-colors font-medium shadow-md shadow-[#EA3A70]/20">
              Explore eBranch
              <ArrowRightIcon className="h-4 w-4 ml-2" />
            </Link>
          </div>
          <div className="relative">
            <div className="bg-[#1B1537]/80 backdrop-blur-sm rounded-2xl border border-[#2D2755] p-8 relative z-10 shadow-xl shadow-[#0F0B1F]/50">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold text-white">
                  Everything Included
                </h3>
                <div className="flex items-center bg-[#2D2755]/50 rounded-lg px-3 py-1">
                  <GlobeIcon className="h-4 w-4 text-[#EA3A70] mr-2" />
                  <span className="text-white text-sm">
                    {getCountryName(selectedCountry)}
                  </span>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-6">
                {services.map((service, index) => <div key={index} className="flex items-center bg-[#2D2755]/30 rounded-xl p-4 border border-[#2D2755]">
                    <div className="p-2 rounded-lg bg-[#2D2755]/50 mr-3">
                      <service.icon className="h-5 w-5 text-[#EA3A70]" />
                    </div>
                    <span className="text-white font-medium">
                      {service.name}
                    </span>
                  </div>)}
              </div>
              <div className="mt-8 pt-6 border-t border-[#2D2755]">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-300">Starting from</span>
                  <div className="flex items-baseline">
                                            <span className="text-3xl font-bold text-white">€199</span>
                    <span className="text-gray-300 ml-1">/month</span>
                  </div>
                </div>
                <p className="text-gray-400 text-sm">
                  All-inclusive package with no hidden fees
                </p>
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute top-4 -left-4 h-24 w-24 bg-gradient-to-br from-[#EA3A70] to-purple-600 rounded-full blur-2xl opacity-30"></div>
            <div className="absolute -bottom-4 -right-4 h-32 w-32 bg-gradient-to-br from-blue-500 to-[#EA3A70] rounded-full blur-2xl opacity-30"></div>
          </div>
        </div>
      </div>
    </section>;
}