import React from 'react';
import { XIcon, CreditCardIcon, ArrowRightIcon, BuildingIcon, UserIcon, FileTextIcon, CheckCircleIcon } from 'lucide-react';
interface BankAccountSetupFlowProps {
  onClose: () => void;
}
export function BankAccountSetupFlow({
  onClose
}: BankAccountSetupFlowProps) {
  return <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-[#1B1537] rounded-xl border border-[#4A2D80]/30 max-w-4xl w-full max-h-[90vh] overflow-hidden animate-fadeIn">
        <div className="p-4 border-b border-[#4A2D80]/30 flex justify-between items-center">
          <div className="flex items-center">
            <CreditCardIcon className="h-5 w-5 text-[#EA3A70] mr-2" />
            <h3 className="text-xl font-bold text-white">
              Bank Account Setup Flow
            </h3>
          </div>
          <button onClick={onClose} className="p-2 rounded-full hover:bg-[#4A2D80]/30 transition-colors">
            <XIcon className="h-5 w-5 text-white" />
          </button>
        </div>
        <div className="p-6">
          <div className="bg-[#0A0826] rounded-xl p-6 mb-6 border border-[#4A2D80]/30">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="md:w-1/3">
                <div className="bg-[#1E1B3F] rounded-xl p-4 border border-[#4A2D80]/30">
                  <h4 className="text-white font-medium mb-4">Setup Steps</h4>
                  <div className="space-y-3">
                    <div className="flex items-center p-2 bg-[#EA3A70]/10 border border-[#EA3A70]/30 rounded-lg">
                      <CheckCircleIcon className="h-4 w-4 text-[#EA3A70] mr-2" />
                      <span className="text-white text-sm">Bank Selection</span>
                    </div>
                    <div className="flex items-center p-2 bg-[#4A2D80]/20 border border-[#4A2D80]/30 rounded-lg">
                      <div className="h-4 w-4 rounded-full bg-[#4A2D80] text-white text-xs flex items-center justify-center mr-2">
                        2
                      </div>
                      <span className="text-white text-sm">
                        Company Information
                      </span>
                    </div>
                    <div className="flex items-center p-2 bg-[#4A2D80]/10 border border-[#4A2D80]/30 rounded-lg">
                      <div className="h-4 w-4 rounded-full bg-[#4A2D80]/50 text-white text-xs flex items-center justify-center mr-2">
                        3
                      </div>
                      <span className="text-white text-sm">
                        Authorized Signatories
                      </span>
                    </div>
                    <div className="flex items-center p-2 bg-[#4A2D80]/10 border border-[#4A2D80]/30 rounded-lg">
                      <div className="h-4 w-4 rounded-full bg-[#4A2D80]/50 text-white text-xs flex items-center justify-center mr-2">
                        4
                      </div>
                      <span className="text-white text-sm">
                        Account Options
                      </span>
                    </div>
                    <div className="flex items-center p-2 bg-[#4A2D80]/10 border border-[#4A2D80]/30 rounded-lg">
                      <div className="h-4 w-4 rounded-full bg-[#4A2D80]/50 text-white text-xs flex items-center justify-center mr-2">
                        5
                      </div>
                      <span className="text-white text-sm">
                        Document Upload
                      </span>
                    </div>
                    <div className="flex items-center p-2 bg-[#4A2D80]/10 border border-[#4A2D80]/30 rounded-lg">
                      <div className="h-4 w-4 rounded-full bg-[#4A2D80]/50 text-white text-xs flex items-center justify-center mr-2">
                        6
                      </div>
                      <span className="text-white text-sm">
                        Review & Submit
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="md:w-2/3">
                <div className="bg-[#1E1B3F] rounded-xl p-6 border border-[#4A2D80]/30 h-full">
                  <h4 className="text-white font-medium mb-4">
                    Company Information
                  </h4>
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-indigo-300 text-sm mb-1">
                          Company Name
                        </label>
                        <input type="text" className="w-full bg-[#0A0826] border border-[#4A2D80]/30 rounded-lg p-2 text-white" value="Tech Innovations B.V." readOnly />
                      </div>
                      <div>
                        <label className="block text-indigo-300 text-sm mb-1">
                          Registration Number
                        </label>
                        <input type="text" className="w-full bg-[#0A0826] border border-[#4A2D80]/30 rounded-lg p-2 text-white" value="KVK 12345678" readOnly />
                      </div>
                    </div>
                    <div>
                      <label className="block text-indigo-300 text-sm mb-1">
                        Registered Address
                      </label>
                      <input type="text" className="w-full bg-[#0A0826] border border-[#4A2D80]/30 rounded-lg p-2 text-white" value="Prinses Beatrixlaan 582, 2595 BM, The Hague" readOnly />
                    </div>
                    <div>
                      <label className="block text-indigo-300 text-sm mb-1">
                        Business Activities
                      </label>
                      <textarea className="w-full bg-[#0A0826] border border-[#4A2D80]/30 rounded-lg p-2 text-white" rows={3} value="Software development and IT consulting services" readOnly></textarea>
                    </div>
                    <div className="mt-4">
                      <p className="text-indigo-300 text-sm mb-4">
                        This information will be shared with the selected bank
                        to initiate your business account application.
                      </p>
                      <div className="flex justify-between">
                        <button className="px-4 py-2 bg-[#4A2D80]/20 border border-[#4A2D80]/30 rounded-lg text-white hover:bg-[#4A2D80]/30 transition-colors flex items-center">
                          <ArrowLeftIcon className="h-4 w-4 mr-2" />
                          Back
                        </button>
                        <button className="px-4 py-2 bg-[#EA3A70] hover:bg-[#EA3A70]/90 text-white rounded-lg transition-colors flex items-center">
                          Continue
                          <ArrowRightIcon className="h-4 w-4 ml-2" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center">
            <p className="text-indigo-300 text-sm mb-4">
              This is a demonstration of our bank account setup workflow. In the
              full version, you'll be guided through the complete process of
              opening a business bank account with one of our partner banks.
            </p>
            <button onClick={onClose} className="px-6 py-3 bg-gradient-to-r from-[#EA3A70] to-[#4A2D80] text-white rounded-lg font-medium hover:from-[#EA3A70]/90 hover:to-[#4A2D80]/90">
              Activate Bank Account Service
            </button>
          </div>
        </div>
      </div>
    </div>;
}
const ArrowLeftIcon = ({
  className
}: {
  className?: string;
}) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <line x1="19" y1="12" x2="5" y2="12"></line>
    <polyline points="12 19 5 12 12 5"></polyline>
  </svg>;