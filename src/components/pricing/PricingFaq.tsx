import React, { useState } from 'react';
import { ChevronDownIcon, ChevronUpIcon } from 'lucide-react';
export function PricingFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const faqs = [{
    question: 'How do I switch plans in the free trial?',
    answer: 'You can easily switch between plans during your free trial period. Simply navigate to your account settings, select "Subscription" and choose the plan you want to try. You can switch as many times as you like during the trial period.'
  }, {
    question: 'Can I upgrade from Free to eBranch later?',
    answer: "Yes, you can upgrade from the Free plan to the eBranch plan at any time. All your data and settings will be transferred automatically, and you'll immediately gain access to all the premium features included in the eBranch plan."
  }, {
    question: "What's included in the Core Bookkeeping Portal?",
    answer: 'The Core Bookkeeping Portal includes comprehensive financial management tools, automated bookkeeping, expense tracking, invoice management, financial reporting, tax preparation assistance, and compliance monitoring tailored for international businesses operating in the EU.'
  }, {
    question: 'How long does it take to process Corporate Agent work?',
    answer: 'Most Corporate Agent tasks are processed within 24-48 hours. For more complex matters like company registrations or tax filings, the process typically takes 3-5 business days, depending on the jurisdiction and specific requirements.'
  }, {
    question: 'Is VAT included in your subscription?',
    answer: 'All prices displayed are exclusive of VAT. The applicable VAT rate (typically 21% for EU customers) will be added to your invoice based on your business location and VAT status. If you provide a valid EU VAT number, reverse charge rules may apply.'
  }, {
    question: 'Can I cancel my subscription at any time?',
    answer: "Yes, you can cancel your subscription at any time from your account dashboard. If you cancel, you'll continue to have access to your plan until the end of your current billing period. No refunds are provided for partial billing periods."
  }];
  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return <section className="py-16 relative bg-gradient-to-b from-[#0A0826] to-[#1E1B3F]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-indigo-200">
            Get answers to common questions about our pricing and services
          </p>
        </div>
        <div className="space-y-4">
          {faqs.map((faq, index) => <div key={index} className="bg-indigo-900/30 backdrop-blur-sm rounded-xl border border-indigo-500/30 overflow-hidden">
              <button className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none" onClick={() => toggleFaq(index)}>
                <span className="text-lg font-medium text-white">
                  {faq.question}
                </span>
                {openIndex === index ? <ChevronUpIcon className="h-5 w-5 text-[#EA3A70]" /> : <ChevronDownIcon className="h-5 w-5 text-indigo-300" />}
              </button>
              {openIndex === index && <div className="px-6 pb-4 text-indigo-200">{faq.answer}</div>}
            </div>)}
        </div>
      </div>
    </section>;
}