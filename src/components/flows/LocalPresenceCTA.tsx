import React from 'react';
import { BuildingIcon, GlobeIcon, MapPinIcon, ArrowRightIcon } from 'lucide-react';
interface LocalPresenceCTAProps {
  onContinue: () => void;
}
export function LocalPresenceCTA({
  onContinue
}: LocalPresenceCTAProps) {
  return <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg shadow-lg overflow-hidden">
      <div className="px-6 py-12 md:p-12 text-center md:text-left flex flex-col md:flex-row items-center">
        <div className="md:flex-1 mb-8 md:mb-0 md:mr-8">
          <div className="flex justify-center md:justify-start mb-4">
            <div className="bg-white/20 p-3 rounded-full">
              <BuildingIcon className="h-8 w-8 text-white" />
            </div>
          </div>
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to start a Local Presence?
          </h2>
          <p className="text-purple-100 text-lg mb-6 max-w-xl">
            Establish your business in Europe with our range of local presence
            solutions. From virtual offices to full legal entities, we have the
            perfect option for your business needs.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <div className="flex items-start bg-white/10 rounded-lg p-4">
              <MapPinIcon className="h-5 w-5 text-pink-200 mr-3 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-medium text-white text-sm">
                  Local Address
                </h3>
                <p className="text-purple-100 text-sm">
                  Establish credibility with a local business address
                </p>
              </div>
            </div>
            <div className="flex items-start bg-white/10 rounded-lg p-4">
              <GlobeIcon className="h-5 w-5 text-pink-200 mr-3 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-medium text-white text-sm">
                  Market Access
                </h3>
                <p className="text-purple-100 text-sm">
                  Gain direct access to the European market
                </p>
              </div>
            </div>
          </div>
          <button onClick={onContinue} className="px-6 py-3 bg-white text-purple-700 rounded-md hover:bg-purple-50 font-medium flex items-center justify-center md:inline-flex">
            Explore Options
            <ArrowRightIcon className="ml-2 h-5 w-5" />
          </button>
        </div>
        <div className="md:flex-1">
          <div className="bg-white/10 rounded-lg p-6">
            <div className="text-center">
              <div className="inline-block bg-white/20 p-3 rounded-full mb-4">
                <BuildingIcon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                Multiple Presence Options
              </h3>
              <p className="text-purple-100 mb-6">
                Choose the right level of presence for your business stage and
                goals
              </p>
              <ul className="text-left space-y-3 mb-6">
                <li className="flex items-center text-purple-100">
                  <div className="bg-pink-500 rounded-full p-1 mr-3">
                    <svg className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  Virtual Office
                </li>
                <li className="flex items-center text-purple-100">
                  <div className="bg-pink-500 rounded-full p-1 mr-3">
                    <svg className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  Branch Office
                </li>
                <li className="flex items-center text-purple-100">
                  <div className="bg-pink-500 rounded-full p-1 mr-3">
                    <svg className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  Legal Entity
                </li>
                <li className="flex items-center text-purple-100">
                  <div className="bg-pink-500 rounded-full p-1 mr-3">
                    <svg className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  Local Employee Payroll
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>;
}