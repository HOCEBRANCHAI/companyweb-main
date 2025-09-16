import React from 'react';
import { Link } from 'react-router-dom';
import { CheckIcon, BuildingIcon, MailIcon, FileTextIcon, PercentIcon, ShieldIcon, LineChartIcon, ArrowRightIcon } from 'lucide-react';
export function PricingCardsSection() {
  const plans = [{
    name: 'Free Plan',
    price: '€0',
    interval: '/month',
    description: 'Limited access to basic features',
    features: ['Official address service in the EU', 'Document management', 'Business incorporation guidance', 'Market entry consultation', 'Access to basic compliance tools'],
    cta: 'Explore Plan',
    ctaLink: '/pricing',
    highlight: false
  }, {
    name: 'eBranch',
    price: '€1,495',
    interval: '/month',
    description: 'Complete business presence solution',
    features: ['All Free Plan features', 'Dutch Branch Registration', 'EU VAT ID Registration', 'Corporate Secretary Services', 'VAT and Tax Returns Assistance', 'Legal Representation', 'Financial Reporting', 'Virtual Office Services', 'Ongoing Compliance Monitoring'],
    cta: 'Choose this Plan',
    ctaLink: '/ebranch',
    highlight: true,
    badge: 'MOST POPULAR'
  }, {
    name: 'Enterprise',
    price: 'Custom',
    interval: '',
    description: 'Tailored solutions for your needs',
    features: ['All eBranch features', 'Customized solutions', 'Multiple EU jurisdictions', 'Priority support', 'Dedicated team of experts', 'Custom legal work as per your requirements'],
    cta: 'Contact Sales',
    ctaLink: '/contact',
    highlight: false
  }];
  return <section className="py-20 relative">
      <div className="absolute inset-0 bg-[#0A0826]"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">
            Choose Your Path to Global Success
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Select which offering fits your exact requirements. We have the
            right solution for your international expansion.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => <div key={index} className={`rounded-2xl border ${plan.highlight ? 'border-[#EA3A70] bg-gradient-to-br from-[#1B1537] to-[#0F0B1F]' : 'border-[#2D2755] bg-[#1B1537]/50'} overflow-hidden relative`}>
              {plan.badge && <div className="absolute top-0 right-0">
                  <div className="bg-[#EA3A70] text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                    {plan.badge}
                  </div>
                </div>}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-white mb-2">
                  {plan.name}
                </h3>
                <div className="flex items-baseline mb-4">
                  <span className="text-3xl font-bold text-white">
                    {plan.price}
                  </span>
                  <span className="text-gray-400 ml-1">{plan.interval}</span>
                </div>
                <p className="text-gray-300 mb-6">{plan.description}</p>
                <div className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => <div key={idx} className="flex items-start">
                      <CheckIcon className="h-5 w-5 text-[#EA3A70] mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">{feature}</span>
                    </div>)}
                </div>
                <Link to={plan.ctaLink} className={`w-full inline-flex justify-center items-center px-6 py-3 rounded-lg font-medium ${plan.highlight ? 'bg-[#EA3A70] hover:bg-[#EA3A70]/90 text-white shadow-md shadow-[#EA3A70]/20' : 'border border-[#2D2755] hover:bg-[#2D2755]/50 text-white'}`}>
                  {plan.cta}
                  {plan.highlight && <ArrowRightIcon className="ml-2 h-4 w-4" />}
                </Link>
              </div>
            </div>)}
        </div>
      </div>
    </section>;
}