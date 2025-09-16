import React, { useState } from 'react';
import { ChevronDownIcon, ChevronUpIcon } from 'lucide-react';
interface FaqItemProps {
  question: string;
  answer: string;
}
interface FaqSectionProps {
  title: string;
  description: string;
  faqs: FaqItemProps[];
}
export function FaqSection({
  title,
  description,
  faqs
}: FaqSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return <section className="py-20 relative bg-gradient-to-b from-[#1B1537] to-[#0F0B1F]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">{title}</h2>
          <p className="text-xl text-gray-300">{description}</p>
        </div>
        <div className="space-y-4">
          {faqs.map((faq, index) => <div key={index} className={`bg-[#1B1537]/80 backdrop-blur-sm rounded-xl border ${openIndex === index ? 'border-[#EA3A70]' : 'border-[#2D2755]'} overflow-hidden shadow-lg shadow-[#0F0B1F]/50 transition-all`}>
              <button className="w-full text-left py-5 px-6 flex justify-between items-center focus:outline-none" onClick={() => toggleFaq(index)}>
                <h3 className="text-lg font-medium text-white">
                  {faq.question}
                </h3>
                {openIndex === index ? <ChevronUpIcon className="h-5 w-5 text-[#EA3A70] flex-shrink-0" /> : <ChevronDownIcon className="h-5 w-5 text-gray-400 flex-shrink-0" />}
              </button>
              <div className={`px-6 transition-all duration-300 ease-in-out overflow-hidden ${openIndex === index ? 'max-h-96 pb-5' : 'max-h-0'}`}>
                <p className="text-gray-300">{faq.answer}</p>
              </div>
            </div>)}
        </div>
      </div>
    </section>;
}