import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRightIcon } from 'lucide-react';
interface ServiceHeroProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  image: string;
}
export function ServiceHero({
  title,
  description,
  icon,
  image
}: ServiceHeroProps) {
  return <section className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#1B1537] to-[#0F0B1F]"></div>
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80')] opacity-10 bg-cover bg-center mix-blend-overlay"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-[#EA3A70]/20 text-[#EA3A70] mb-6 backdrop-blur-sm">
              {icon}
              <span className="ml-2">Dutch Business Services</span>
            </div>
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
              {title}
            </h1>
            <p className="text-xl text-gray-300 mb-8">{description}</p>
            <div className="flex flex-wrap gap-4">
              <Link to="/get-started" className="px-6 py-3 bg-[#EA3A70] text-white rounded-lg hover:bg-[#EA3A70]/90 transition-colors flex items-center font-medium shadow-md shadow-[#EA3A70]/20">
                Get Started
              </Link>
              <Link to="/book-demo" className="px-6 py-3 bg-[#1B1537] text-white rounded-lg border border-[#2D2755] hover:bg-[#2D2755]/50 transition-colors flex items-center font-medium">
                Book a Consultation
                <ArrowRightIcon className="h-4 w-4 ml-2" />
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-[#2D2755] bg-[#1B1537]/20 backdrop-blur-sm">
              <div className="aspect-video w-full">
                <img src={image} alt={title} className="w-full h-full object-cover" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F0B1F] via-transparent to-transparent"></div>
            </div>
            <div className="absolute -bottom-6 -left-6 bg-[#1B1537]/80 backdrop-blur-sm rounded-xl p-4 border border-[#2D2755] shadow-xl max-w-xs">
              <div className="flex items-center mb-2">
                <div className="p-2 rounded-full bg-[#EA3A70]/20 mr-3">
                  {icon}
                </div>
                <p className="text-white font-medium">Fast & Efficient</p>
              </div>
              <p className="text-gray-300 text-sm">
                Get your Dutch business set up quickly with our streamlined
                process
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>;
}