import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRightIcon } from 'lucide-react';
interface ServiceProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  href: string;
}
interface RelatedServicesProps {
  title: string;
  description: string;
  services: ServiceProps[];
}
export function RelatedServices({
  title,
  description,
  services
}: RelatedServicesProps) {
  return <section className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">{title}</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {description}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => <Link key={index} to={service.href} className="group bg-[#1B1537] backdrop-blur-sm rounded-xl p-6 border border-[#2D2755] hover:border-[#EA3A70]/50 transition-all shadow-lg shadow-[#0F0B1F]/50">
              <div className="p-3 rounded-lg bg-[#2D2755]/50 border border-[#2D2755] mb-4 inline-block group-hover:border-[#EA3A70]/50 transition-colors">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#EA3A70] transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-300 mb-4">{service.description}</p>
              <div className="flex items-center text-[#EA3A70] font-medium">
                Learn more
                <ArrowRightIcon className="h-4 w-4 ml-2 transition-transform group-hover:translate-x-1" />
              </div>
            </Link>)}
        </div>
      </div>
    </section>;
}