import React, { useState } from 'react';
import { ChevronDownIcon, ChevronUpIcon } from 'lucide-react';
export function FAQ() {
  const [openItem, setOpenItem] = useState<number | null>(null);
  const faqItems = [{
    question: 'How do credits work in the Free plan?',
    answer: 'Credits can be used for additional services like document processing or brief consultations. Once exhausted, you can purchase more or upgrade to the eBranch plan.'
  }, {
    question: 'Can I upgrade from Free to eBranch at any time?',
    answer: "Absolutely! Your journey to global expansion can start whenever you're ready."
  }, {
    question: "What's included in the Core Bookkeeping Portal?",
    answer: 'Our AI-powered accounting portal allows easy upload of invoices and financial documents, providing real-time P&L and balance sheet tracking.'
  }, {
    question: 'How does the AI-powered Corporate Agent work?',
    answer: 'It assists with legal document drafting, ensuring compliance with local regulations across different jurisdictions.'
  }, {
    question: 'Is the Enterprise plan customizable?',
    answer: "Yes, it's tailored to your specific needs. Our team will work with you to create a bespoke solution for your global operations."
  }];
  return <div className="space-y-4">
      {faqItems.map((item, index) => <div key={index} className="border border-gray-200 rounded-lg bg-white overflow-hidden">
          <button onClick={() => setOpenItem(openItem === index ? null : index)} className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50">
            <span className="text-gray-900 font-medium">{item.question}</span>
            {openItem === index ? <ChevronUpIcon className="h-5 w-5 text-gray-500" /> : <ChevronDownIcon className="h-5 w-5 text-gray-500" />}
          </button>
          {openItem === index && <div className="px-6 pb-4">
              <p className="text-gray-600">{item.answer}</p>
            </div>}
        </div>)}
    </div>;
}