import React from 'react';
import { ArrowRightIcon } from 'lucide-react';
interface CallToActionProps {
  onContinue: () => void;
}
export function CallToAction({
  onContinue
}: CallToActionProps) {
  return <div className="bg-[#0A0826] border-t border-[#4A2D80]/20">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div className="mb-6 md:mb-0 md:max-w-xl">
            <h2 className="text-2xl font-bold text-white mb-2">
              Ready to expand your business globally?
            </h2>
            <p className="text-[#EA3A70]">
              Our platform provides all the tools you need to establish and
              manage your international presence efficiently.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <button onClick={onContinue} className="px-6 py-3 bg-[#0A0826] text-[#EA3A70] rounded-xl border border-[#EA3A70] hover:bg-[#EA3A70] hover:text-white transition-colors font-medium flex items-center justify-center">
              Explore Options
              <ArrowRightIcon className="ml-2 h-5 w-5" />
            </button>
            <button className="px-6 py-3 bg-[#0A0826] text-[#EA3A70] rounded-xl border border-[#EA3A70] hover:bg-[#EA3A70] hover:text-white transition-colors font-medium">
              Schedule Consultation
            </button>
          </div>
        </div>
      </div>
    </div>;
}