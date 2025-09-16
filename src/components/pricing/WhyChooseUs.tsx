import React from 'react';
import { GlobeIcon, ShieldIcon, HeadphonesIcon, BookOpenIcon, FileTextIcon } from 'lucide-react';
export function WhyChooseUs() {
  const benefits = [{
    title: 'Global Expertise',
    description: 'Expert guidance for international expansion with local knowledge',
    icon: <GlobeIcon className="h-6 w-6 text-indigo-300" />
  }, {
    title: 'Compliance Assured',
    description: 'Stay compliant with all legal regulations and requirements',
    icon: <ShieldIcon className="h-6 w-6 text-indigo-300" />
  }, {
    title: 'AI-Powered Solutions',
    description: 'Cutting-edge technology for efficient business operations',
    icon: <FileTextIcon className="h-6 w-6 text-indigo-300" />
  }, {
    title: 'Dedicated Support',
    description: '24/7 access to our expert support team',
    icon: <HeadphonesIcon className="h-6 w-6 text-indigo-300" />
  }, {
    title: 'Resource Library',
    description: 'Access comprehensive guides and business templates',
    icon: <BookOpenIcon className="h-6 w-6 text-indigo-300" />
  }, {
    title: 'Personalized Service',
    description: 'Tailored solutions for your specific business needs',
    icon: <HeadphonesIcon className="h-6 w-6 text-indigo-300" />
  }];
  return <section className="py-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">
            Why Choose House of Companies?
          </h2>
          <p className="text-lg text-indigo-200 max-w-3xl mx-auto">
            We provide the expertise and tools you need to succeed globally
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => <div key={index} className="bg-indigo-900/30 backdrop-blur-sm rounded-xl border border-indigo-500/30 p-6 hover:border-[#EA3A70]/50 transition-colors">
              <div className="p-3 bg-indigo-900/50 rounded-xl inline-block mb-4">
                {benefit.icon}
              </div>
              <h3 className="text-lg font-bold text-white mb-2">
                {benefit.title}
              </h3>
              <p className="text-indigo-200">{benefit.description}</p>
            </div>)}
        </div>
      </div>
    </section>;
}