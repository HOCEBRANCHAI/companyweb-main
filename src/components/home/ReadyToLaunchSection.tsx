import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRightIcon, PhoneIcon, CalendarIcon } from 'lucide-react';
export function ReadyToLaunchSection() {
  return <section className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-[#6A3093] to-[#EA3A70] border border-[#EA3A70]/30">
          {/* Background glow effects */}
          <div className="absolute top-0 left-1/4 w-1/2 h-1/2 bg-[#EA3A70]/20 rounded-full blur-[100px] -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-1/4 w-1/2 h-1/2 bg-[#EA3A70]/10 rounded-full blur-[100px] translate-y-1/2"></div>
          <div className="relative p-8 md:p-12 lg:p-16">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Launch Your Dutch Branch?
              </h2>
              <p className="text-xl text-white/80 mb-8">
                Our experts are prepared to help you establish your business in
                the Netherlands in just 48 hours
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/get-started" className="px-6 py-3 bg-white text-[#EA3A70] rounded-lg hover:bg-white/90 transition-colors flex items-center font-medium shadow-md shadow-black/20">
                  Get Started Now
                </Link>
                <Link to="/contact" className="px-6 py-3 bg-transparent text-white rounded-lg border border-white/30 hover:bg-white/10 transition-colors flex items-center font-medium">
                  <PhoneIcon className="h-4 w-4 mr-2" />
                  Schedule Consultation
                </Link>
              </div>
              <div className="mt-8 flex items-center justify-center">
                <CalendarIcon className="h-5 w-5 text-white/70 mr-2" />
                <span className="text-white/70">
                  Next available slot: Tomorrow at 10:00 AM CET
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
}