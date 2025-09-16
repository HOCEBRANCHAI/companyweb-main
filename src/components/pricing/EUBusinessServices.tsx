import React from 'react';
import { CheckIcon, BuildingIcon, EuroIcon, BriefcaseIcon } from 'lucide-react';
export function EUBusinessServices() {
  const services = [{
    id: 'branch',
    title: 'Branch Registration',
    description: 'Register your company branch in the EU',
    price: '€80-1,850',
    included: true,
    icon: <BuildingIcon className="h-6 w-6 text-indigo-300" />
  }, {
    id: 'vat',
    title: 'VAT ID Registration',
    description: 'Obtain VAT number for your business',
    price: '€0-850',
    included: true,
    icon: <EuroIcon className="h-6 w-6 text-indigo-300" />
  }, {
    id: 'employer',
    title: 'Employer Registration',
    description: 'Register as an employer in the EU',
    price: '€75',
    included: true,
    icon: <BriefcaseIcon className="h-6 w-6 text-indigo-300" />
  }];
  const employeeServices = [{
    title: 'Payroll Management',
    price: '€25',
    interval: 'per month per employee',
    features: ['Employment agreement drafting', 'Monthly salary slips', 'Tax calculations', 'Social security handling', 'Leave management']
  }, {
    title: 'Employer of Record (EOR)',
    price: '€175',
    interval: 'per month per employee',
    features: ['Full employment compliance', 'Risk mitigation', 'Benefits administration', 'Employee onboarding', 'Local labor law compliance'],
    highlight: true
  }];
  return <section className="py-16 relative bg-gradient-to-b from-[#1E1B3F] to-[#0A0826]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">
            EU Business Services
          </h2>
          <p className="text-lg text-indigo-200 max-w-3xl mx-auto">
            Select and target services to get started quickly and securely
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {services.map(service => <div key={service.id} className="bg-indigo-900/30 backdrop-blur-sm rounded-xl border border-indigo-500/30 p-6 hover:border-[#EA3A70]/50 transition-colors">
              <div className="flex items-center space-x-3 mb-4">
                <div className="p-3 bg-indigo-900/50 rounded-lg">
                  {service.icon}
                </div>
                <div>
                  <h3 className="text-lg font-medium text-white">
                    {service.title}
                  </h3>
                </div>
              </div>
              <p className="text-indigo-200 mb-4">{service.description}</p>
              <div className="flex justify-between items-center">
                <div className="text-xl font-bold text-white">
                  {service.price}
                </div>
                {service.included && <div className="flex items-center text-green-400 text-sm">
                    <CheckIcon className="h-4 w-4 mr-1" />
                    Included with eBranch
                  </div>}
              </div>
              <button className="mt-4 w-full px-4 py-2 bg-indigo-900/50 border border-indigo-500/30 text-white rounded-lg hover:bg-indigo-800/50 text-sm font-medium">
                Add to Cart
              </button>
            </div>)}
        </div>
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-white text-center mb-8">
            Employee Management Services
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {employeeServices.map((service, index) => <div key={index} className={`rounded-lg p-6 ${service.highlight ? 'border-2 border-[#EA3A70] bg-indigo-900/50' : 'border border-indigo-500/30 bg-indigo-900/30'}`}>
                <h3 className="text-lg font-medium text-white mb-2">
                  {service.title}
                </h3>
                <div className="flex items-baseline mb-4">
                  <span className="text-3xl font-bold text-white">
                    {service.price}
                  </span>
                  <span className="ml-2 text-indigo-300">
                    {service.interval}
                  </span>
                </div>
                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => <li key={featureIndex} className="flex items-start">
                      <CheckIcon className="h-5 w-5 text-[#EA3A70] mr-2 flex-shrink-0" />
                      <span className="text-indigo-200">{feature}</span>
                    </li>)}
                </ul>
                <button className="mt-6 w-full px-4 py-2 bg-indigo-900/50 border border-indigo-500/30 text-white rounded-lg hover:bg-indigo-800/50 text-sm font-medium">
                  Get Started
                </button>
              </div>)}
          </div>
        </div>
        <div className="bg-gradient-to-r from-indigo-900/30 to-[#EA3A70]/20 border border-indigo-500/30 rounded-lg p-6 max-w-3xl mx-auto">
          <div className="flex flex-col md:flex-row items-center">
            <div className="mb-4 md:mb-0 md:mr-6">
              <div className="p-3 bg-indigo-900/50 rounded-full inline-block">
                <BuildingIcon className="h-8 w-8 text-[#EA3A70]" />
              </div>
            </div>
            <div>
              <h3 className="text-lg font-medium text-white mb-2">
                Core Bookkeeping Membership Benefit
              </h3>
              <p className="text-indigo-200">
                Subscribe to our Core Bookkeeping Membership for 1 year and get
                Branch Registration, VAT ID Registration, and Employer
                Registration in the Netherlands included for free!
              </p>
              <button className="mt-4 px-4 py-2 bg-[#EA3A70] text-white rounded-lg hover:bg-[#EA3A70]/90 text-sm font-medium">
                Learn More About Membership
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>;
}