import React from 'react';
import { XIcon, ListIcon, DownloadIcon, FilterIcon, UserIcon, BuildingIcon, MailIcon, PhoneIcon } from 'lucide-react';
interface LeadListDemoProps {
  onClose: () => void;
}
export function LeadListDemo({
  onClose
}: LeadListDemoProps) {
  return <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-[#1B1537] rounded-xl border border-[#4A2D80]/30 max-w-2xl w-full max-h-[90vh] overflow-hidden animate-fadeIn">
        <div className="p-4 border-b border-[#4A2D80]/30 flex justify-between items-center">
          <div className="flex items-center">
            <ListIcon className="h-5 w-5 text-[#4A2D80] mr-2" />
            <h3 className="text-xl font-bold text-white">
              Lead List Generator Demo
            </h3>
          </div>
          <button onClick={onClose} className="p-2 rounded-full hover:bg-[#4A2D80]/30 transition-colors">
            <XIcon className="h-5 w-5 text-white" />
          </button>
        </div>
        <div className="p-6">
          <div className="bg-[#0A0826] rounded-xl p-6 mb-6 border border-[#4A2D80]/30">
            <div className="flex items-center justify-between mb-6">
              <h4 className="text-white font-medium">Generated Lead List</h4>
              <div className="flex items-center space-x-2">
                <button className="flex items-center bg-[#1E1B3F] border border-[#4A2D80]/30 rounded-lg p-2 text-white hover:bg-[#4A2D80]/20">
                  <FilterIcon className="h-4 w-4" />
                </button>
                <button className="flex items-center bg-[#1E1B3F] border border-[#4A2D80]/30 rounded-lg p-2 text-white hover:bg-[#4A2D80]/20">
                  <DownloadIcon className="h-4 w-4" />
                </button>
              </div>
            </div>
            <div className="space-y-4">
              <div className="bg-[#1E1B3F] rounded-lg p-4 border border-[#4A2D80]/30">
                <div className="flex items-start">
                  <div className="bg-[#4A2D80]/20 p-2 rounded-full mr-3">
                    <UserIcon className="h-5 w-5 text-[#4A2D80]" />
                  </div>
                  <div>
                    <h5 className="text-white font-medium">Sarah Johnson</h5>
                    <p className="text-indigo-300 text-sm flex items-center">
                      <BuildingIcon className="h-4 w-4 mr-1" />
                      Marketing Director, Tech Innovations Ltd
                    </p>
                    <div className="mt-2 flex flex-wrap gap-2">
                      <span className="flex items-center text-xs text-white bg-[#4A2D80]/20 px-2 py-1 rounded-full">
                        <MailIcon className="h-3 w-3 mr-1" />
                        s.johnson@example.com
                      </span>
                      <span className="flex items-center text-xs text-white bg-[#4A2D80]/20 px-2 py-1 rounded-full">
                        <PhoneIcon className="h-3 w-3 mr-1" />
                        +49 123 456 7890
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-[#1E1B3F] rounded-lg p-4 border border-[#4A2D80]/30">
                <div className="flex items-start">
                  <div className="bg-[#4A2D80]/20 p-2 rounded-full mr-3">
                    <UserIcon className="h-5 w-5 text-[#4A2D80]" />
                  </div>
                  <div>
                    <h5 className="text-white font-medium">Michael Weber</h5>
                    <p className="text-indigo-300 text-sm flex items-center">
                      <BuildingIcon className="h-4 w-4 mr-1" />
                      CEO, Digital Solutions GmbH
                    </p>
                    <div className="mt-2 flex flex-wrap gap-2">
                      <span className="flex items-center text-xs text-white bg-[#4A2D80]/20 px-2 py-1 rounded-full">
                        <MailIcon className="h-3 w-3 mr-1" />
                        m.weber@example.com
                      </span>
                      <span className="flex items-center text-xs text-white bg-[#4A2D80]/20 px-2 py-1 rounded-full">
                        <PhoneIcon className="h-3 w-3 mr-1" />
                        +49 987 654 3210
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-[#1E1B3F] rounded-lg p-4 border border-[#4A2D80]/30">
                <div className="flex items-start">
                  <div className="bg-[#4A2D80]/20 p-2 rounded-full mr-3">
                    <UserIcon className="h-5 w-5 text-[#4A2D80]" />
                  </div>
                  <div>
                    <h5 className="text-white font-medium">Anna Schmidt</h5>
                    <p className="text-indigo-300 text-sm flex items-center">
                      <BuildingIcon className="h-4 w-4 mr-1" />
                      CTO, Innovative Systems AG
                    </p>
                    <div className="mt-2 flex flex-wrap gap-2">
                      <span className="flex items-center text-xs text-white bg-[#4A2D80]/20 px-2 py-1 rounded-full">
                        <MailIcon className="h-3 w-3 mr-1" />
                        a.schmidt@example.com
                      </span>
                      <span className="flex items-center text-xs text-white bg-[#4A2D80]/20 px-2 py-1 rounded-full">
                        <PhoneIcon className="h-3 w-3 mr-1" />
                        +49 456 789 0123
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center">
            <p className="text-indigo-300 text-sm mb-4">
              Our Lead List Generator provides you with verified, targeted leads
              based on your ideal customer profile, ready for outreach
              campaigns.
            </p>
            <button onClick={onClose} className="px-6 py-3 bg-gradient-to-r from-[#4A2D80] to-[#6E36C9] text-white rounded-lg font-medium hover:from-[#4A2D80]/90 hover:to-[#6E36C9]/90">
              Learn More About Lead Lists
            </button>
          </div>
        </div>
      </div>
    </div>;
}