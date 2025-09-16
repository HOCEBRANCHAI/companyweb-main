import React from 'react';
import { CheckIcon, XIcon } from 'lucide-react';
export function LegalPricing() {
  const plans = [{
    name: 'Basic',
    price: '€49',
    period: 'per month',
    description: 'Essential legal documents for small businesses',
    features: ['10 legal documents per month', 'Basic customization', 'Standard templates', 'Email support', 'Single country focus'],
    notIncluded: ['Multi-country support', 'Advanced AI customization', 'Legal expert review', 'Company-wide access'],
    cta: 'Get Started',
    highlighted: false
  }, {
    name: 'Business',
    price: '€99',
    period: 'per month',
    description: 'Comprehensive legal coverage for growing companies',
    features: ['25 legal documents per month', 'Advanced AI customization', 'Premium templates', 'Priority support', 'Multi-country support', 'Document history & storage', 'Basic legal expert review'],
    notIncluded: ['Unlimited documents', 'Company-wide access'],
    cta: 'Get Business Plan',
    highlighted: true
  }, {
    name: 'Enterprise',
    price: '€249',
    period: 'per month',
    description: 'Complete legal solution for established businesses',
    features: ['Unlimited legal documents', 'Full AI customization suite', 'All premium templates', '24/7 priority support', 'All EU countries included', 'Comprehensive document management', 'Full legal expert review', 'Company-wide access', 'Custom templates'],
    notIncluded: [],
    cta: 'Contact Sales',
    highlighted: false
  }];
  return <div className="py-12">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h2 className="text-3xl font-bold text-white mb-4">
          Simple, Transparent Pricing
        </h2>
        <p className="text-xl text-gray-300">
          Choose the plan that fits your business needs
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {plans.map(plan => <div key={plan.name} className={`rounded-xl overflow-hidden ${plan.highlighted ? 'border-2 border-[#EA3A70] relative' : 'border border-[#2D2755]'}`}>
            {plan.highlighted && <div className="absolute top-0 left-0 right-0 bg-[#EA3A70] text-white text-center py-1 text-sm font-medium">
                Most Popular
              </div>}
            <div className={`p-6 ${plan.highlighted ? 'pt-8' : ''} bg-[#1B1537]/80 backdrop-blur-sm`}>
              <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
              <div className="flex items-baseline mb-4">
                <span className="text-3xl font-bold text-white">
                  {plan.price}
                </span>
                <span className="ml-2 text-gray-400">{plan.period}</span>
              </div>
              <p className="text-gray-300 mb-6">{plan.description}</p>
              <button className={`w-full py-2 px-4 rounded-lg font-medium transition-colors ${plan.highlighted ? 'bg-[#EA3A70] hover:bg-[#EA3A70]/90 text-white' : 'bg-[#2D2755]/50 hover:bg-[#2D2755] text-white border border-[#2D2755]'}`}>
                {plan.cta}
              </button>
            </div>
            <div className="p-6 bg-[#0F0B1F]/80 backdrop-blur-sm">
              <p className="font-medium text-white mb-4">What's included:</p>
              <ul className="space-y-3 mb-6">
                {plan.features.map(feature => <li key={feature} className="flex items-start">
                    <CheckIcon className="h-5 w-5 text-[#EA3A70] mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300">{feature}</span>
                  </li>)}
              </ul>
              {plan.notIncluded.length > 0 && <>
                  <p className="font-medium text-white mb-4">Not included:</p>
                  <ul className="space-y-3">
                    {plan.notIncluded.map(feature => <li key={feature} className="flex items-start">
                        <XIcon className="h-5 w-5 text-gray-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-500">{feature}</span>
                      </li>)}
                  </ul>
                </>}
            </div>
          </div>)}
      </div>
    </div>;
}