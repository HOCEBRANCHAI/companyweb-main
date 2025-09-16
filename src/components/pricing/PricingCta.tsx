import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRightIcon } from 'lucide-react';
export function PricingCta() {
  return <section className="py-16 relative">
      <div className="bg-gradient-to-r from-[#1B1537] to-[#EA3A70]/70 rounded-xl overflow-hidden relative max-w-6xl mx-auto">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80')] opacity-10 bg-cover bg-center mix-blend-overlay"></div>
        <div className="px-8 py-12 relative">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to conquer new markets?
            </h2>
            <p className="text-xl text-white/80 mb-8">
              Choose your plan and let House of Companies be your passport to
              global success
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/get-started" className="px-6 py-3 bg-[#EA3A70] text-white rounded-lg hover:bg-[#EA3A70]/90 font-medium">
                Compare Plans
              </Link>
              <Link to="/contact" className="px-6 py-3 bg-white/10 backdrop-blur-sm text-white rounded-lg hover:bg-white/20 font-medium border border-white/30">
                Contact Sales
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-6xl mx-auto mt-16 bg-indigo-900/30 backdrop-blur-sm rounded-xl border border-indigo-500/30 p-8 text-center">
        <h3 className="text-xl font-bold text-white mb-4">
          Looking for specific EU services?
        </h3>
        <p className="text-indigo-200 mb-6">
          Check our detailed pricing for Branch Registration, VAT ID, and
          Employee Management across the EU
        </p>
        <Link to="/services" className="px-6 py-3 bg-indigo-900/50 text-white rounded-lg hover:bg-indigo-800/50 font-medium inline-flex items-center border border-indigo-500/30">
          View EU Services
          <ArrowRightIcon className="ml-2 h-4 w-4" />
        </Link>
      </div>
    </section>;
}