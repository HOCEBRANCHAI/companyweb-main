import React from 'react';
interface BenefitProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}
interface ServiceBenefitsProps {
  title: string;
  description: string;
  benefits: BenefitProps[];
}
export function ServiceBenefits({
  title,
  description,
  benefits
}: ServiceBenefitsProps) {
  return <section className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">{title}</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {description}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => <div key={index} className="bg-[#1B1537] backdrop-blur-sm rounded-xl p-6 border border-[#2D2755] hover:border-[#EA3A70]/50 transition-all shadow-lg shadow-[#0F0B1F]/50">
              <div className="p-3 rounded-lg bg-[#2D2755]/50 border border-[#2D2755] mb-4 inline-block">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                {benefit.title}
              </h3>
              <p className="text-gray-300">{benefit.description}</p>
            </div>)}
        </div>
      </div>
    </section>;
}