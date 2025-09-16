import React from 'react';
interface StepProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}
interface HowItWorksProps {
  title: string;
  description: string;
  steps: StepProps[];
}
export function HowItWorks({
  title,
  description,
  steps
}: HowItWorksProps) {
  return <section className="py-20 relative bg-gradient-to-b from-[#0F0B1F] to-[#1B1537]">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80')] opacity-5 bg-cover bg-center mix-blend-overlay"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">{title}</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {description}
          </p>
        </div>
        <div className="relative">
          {/* Connecting line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-[#2D2755] transform -translate-x-1/2 hidden md:block"></div>
          <div className="space-y-12 relative">
            {steps.map((step, index) => <div key={index} className="relative">
                <div className={`md:grid md:grid-cols-2 md:gap-8 items-center ${index % 2 === 0 ? '' : 'md:grid-flow-dense'}`}>
                  <div className={`mb-8 md:mb-0 ${index % 2 !== 0 ? 'md:col-start-2' : ''}`}>
                    <div className="bg-[#1B1537]/80 backdrop-blur-sm rounded-xl p-6 border border-[#2D2755] shadow-lg shadow-[#0F0B1F]/50 relative">
                      <div className="p-3 rounded-lg bg-[#2D2755]/50 border border-[#2D2755] mb-4 inline-block">
                        {step.icon}
                      </div>
                      <h3 className="text-xl font-bold text-white mb-3">
                        {step.title}
                      </h3>
                      <p className="text-gray-300">{step.description}</p>
                      {/* Step number */}
                      <div className="absolute -top-4 -right-4 w-8 h-8 rounded-full bg-[#EA3A70] flex items-center justify-center text-white font-bold shadow-lg shadow-[#EA3A70]/20">
                        {index + 1}
                      </div>
                    </div>
                  </div>
                  <div className={`hidden md:block ${index % 2 !== 0 ? 'md:col-start-1' : ''}`}>
                    <div className="h-full flex items-center justify-center">
                      <div className="w-4 h-4 rounded-full bg-[#EA3A70] relative z-10"></div>
                    </div>
                  </div>
                </div>
              </div>)}
          </div>
        </div>
      </div>
    </section>;
}