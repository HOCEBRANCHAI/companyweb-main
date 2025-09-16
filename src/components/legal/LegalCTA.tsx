import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRightIcon, CheckIcon } from 'lucide-react';
import { SimpleImage } from '../common/SimpleImage';
export function LegalCTA() {
  return <div className="bg-indigo-900/30 backdrop-blur-md rounded-xl border border-indigo-500/30 overflow-hidden">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-2/5 p-0">
          <SimpleImage imageName="CTA_sample_banner.png" alt="Legal services portal" className="w-full h-full object-cover" />
        </div>
        <div className="md:w-3/5 p-8">
          <h3 className="text-2xl font-bold text-white mb-4">
            Sign up, and set your legal goals!
          </h3>
          <p className="text-indigo-200 mb-6">
            You can open an account (no credit card needed) to research and
            explore our legal services. Get familiar with all legal templates
            and tools using our portal, and decide when you are ready!
          </p>
          <div className="space-y-3 mb-6">
            <div className="flex items-start">
              <CheckIcon className="h-5 w-5 text-[#EA3A70] mr-2 mt-0.5" />
              <span className="text-white">
                Instant access to legal document templates
              </span>
            </div>
            <div className="flex items-start">
              <CheckIcon className="h-5 w-5 text-[#EA3A70] mr-2 mt-0.5" />
              <span className="text-white">
                AI-assisted document generation
              </span>
            </div>
            <div className="flex items-start">
              <CheckIcon className="h-5 w-5 text-[#EA3A70] mr-2 mt-0.5" />
              <span className="text-white">
                Expert legal support when you need it
              </span>
            </div>
          </div>
          <Link to="/portal/legal/signup" className="px-6 py-3 bg-[#EA3A70] text-white rounded-lg hover:bg-[#EA3A70]/90 transition-colors font-medium inline-flex items-center">
            Start Free Trial
            <ArrowRightIcon className="h-5 w-5 ml-2" />
          </Link>
        </div>
      </div>
    </div>;
}