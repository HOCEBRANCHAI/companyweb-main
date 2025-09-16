import React from 'react';
import { BrainCircuitIcon, WandIcon, ShieldIcon, GlobeIcon, LanguagesIcon, ClockIcon } from 'lucide-react';
export function AIFeatures() {
  const features = [{
    icon: <WandIcon className="h-6 w-6 text-[#EA3A70]" />,
    title: 'Smart Customization',
    description: 'Answer a few simple questions and our AI generates perfectly tailored documents'
  }, {
    icon: <GlobeIcon className="h-6 w-6 text-[#EA3A70]" />,
    title: 'Country-Specific Adaptation',
    description: 'Documents automatically adapt to local laws and regulations across all EU countries'
  }, {
    icon: <ShieldIcon className="h-6 w-6 text-[#EA3A70]" />,
    title: 'Legal Compliance Guarantee',
    description: 'Up-to-date with the latest legal requirements in every jurisdiction'
  }, {
    icon: <LanguagesIcon className="h-6 w-6 text-[#EA3A70]" />,
    title: 'Multi-language Support',
    description: 'Generate documents in your preferred language with perfect legal terminology'
  }, {
    icon: <BrainCircuitIcon className="h-6 w-6 text-[#EA3A70]" />,
    title: 'Intelligent Suggestions',
    description: 'Receive smart recommendations based on your business needs and jurisdiction'
  }, {
    icon: <ClockIcon className="h-6 w-6 text-[#EA3A70]" />,
    title: 'Fast Generation',
    description: 'Create complex legal documents in minutes instead of days or weeks'
  }];
  return <div className="py-12 px-4 sm:px-6 lg:px-8 bg-[#1B1537]/50 rounded-2xl border border-[#2D2755]">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h2 className="text-3xl font-bold text-white mb-4">
          AI-Powered Legal Document Generation
        </h2>
        <p className="text-xl text-gray-300">
          Our advanced AI understands legal nuances across all EU jurisdictions
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map(feature => <div key={feature.title} className="bg-[#0F0B1F]/80 backdrop-blur-sm rounded-xl border border-[#2D2755] p-6 hover:border-[#EA3A70]/30 transition-all">
            <div className="inline-flex items-center justify-center p-3 rounded-lg bg-[#2D2755]/50 border border-[#2D2755] mb-4">
              {feature.icon}
            </div>
            <h3 className="text-xl font-bold text-white mb-2">
              {feature.title}
            </h3>
            <p className="text-gray-300">{feature.description}</p>
          </div>)}
      </div>
    </div>;
}