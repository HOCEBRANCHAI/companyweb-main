import React from 'react';
import { XIcon, BuildingIcon, ArrowRightIcon, MapPinIcon, FileTextIcon, CheckCircleIcon } from 'lucide-react';
interface BranchRegistrationFlowProps {
  onClose: () => void;
}
export function BranchRegistrationFlow({
  onClose
}: BranchRegistrationFlowProps) {
  return <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-[#1B1537] rounded-xl border border-[#4A2D80]/30 max-w-4xl w-full max-h-[90vh] overflow-hidden animate-fadeIn">
        <div className="p-4 border-b border-[#4A2D80]/30 flex justify-between items-center">
          <div className="flex items-center">
            <BuildingIcon className="h-5 w-5 text-[#4A2D80] mr-2" />
            <h3 className="text-xl font-bold text-white">
              Branch Registration Flow
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
                  <h4 className="text-white font-medium mb-4">
                    Registration Steps
                  </h4>
                  <div className="space-y-3">
                    <div className="flex items-center p-2 bg-[#EA3A70]/10 border border-[#EA3A70]/30 rounded-lg">
                      <CheckCircleIcon className="h-4 w-4 text-[#EA3A70] mr-2" />
                      <span className="text-white text-sm">
                        Company Information
                      </span>
                    </div>
                    <div className="flex items-center p-2 bg-[#EA3A70]/10 border border-[#EA3A70]/30 rounded-lg">
                      <CheckCircleIcon className="h-4 w-4 text-[#EA3A70] mr-2" />
                      <span className="text-white text-sm">Branch Details</span>
                    </div>
                    <div className="flex items-center p-2 bg-[#4A2D80]/20 border border-[#4A2D80]/30 rounded-lg">
                      <div className="h-4 w-4 rounded-full bg-[#4A2D80] text-white text-xs flex items-center justify-center mr-2">
                        3
                      </div>
                      <span className="text-white text-sm">
                        Legal Representatives
                      </span>
                    </div>
                    <div className="flex items-center p-2 bg-[#4A2D80]/10 border border-[#4A2D80]/30 rounded-lg">
                      <div className="h-4 w-4 rounded-full bg-[#4A2D80]/50 text-white text-xs flex items-center justify-center mr-2">
                        4
                      </div>
                      <span className="text-white text-sm">
                        Business Activities
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
                    Legal Representatives
                  </h4>
                  <div className="space-y-4">
                    <div className="bg-[#0A0826]/50 rounded-lg p-4 border border-[#4A2D80]/30">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <div className="p-2 bg-[#4A2D80]/20 rounded-full mr-3">
                            <BuildingIcon className="h-4 w-4 text-[#4A2D80]" />
                          </div>
                          <div>
                            <h5 className="text-white font-medium">
                              John Smith
                            </h5>
                            <p className="text-indigo-300 text-sm">
                              Branch Manager
                            </p>
                          </div>
                        </div>
                        <button className="text-indigo-300 hover:text-white">
                          <XIcon className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                    <button className="w-full flex items-center justify-center px-4 py-3 bg-[#4A2D80]/20 border border-[#4A2D80]/30 rounded-lg text-white hover:bg-[#4A2D80]/30 transition-colors">
                      <PlusIcon className="h-5 w-5 mr-2" />
                      Add Representative
                    </button>
                    <div className="mt-4">
                      <p className="text-indigo-300 text-sm mb-4">
                        Add all legal representatives who will be authorized to
                        act on behalf of the branch. At least one representative
                        is required.
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
              This is a demonstration of our branch registration workflow. In
              the full version, you'll be guided through the complete process of
              registering your branch in any EU country.
            </p>
            <button onClick={onClose} className="px-6 py-3 bg-gradient-to-r from-[#4A2D80] to-[#EA3A70] text-white rounded-lg font-medium hover:from-[#4A2D80]/90 hover:to-[#EA3A70]/90">
              Activate Branch Registration Service
            </button>
          </div>
        </div>
      </div>
    </div>;
}
const PlusIcon = ({
  className
}: {
  className?: string;
}) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <line x1="12" y1="5" x2="12" y2="19"></line>
    <line x1="5" y1="12" x2="19" y2="12"></line>
  </svg>;
const ArrowLeftIcon = ({
  className
}: {
  className?: string;
}) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <line x1="19" y1="12" x2="5" y2="12"></line>
    <polyline points="12 19 5 12 12 5"></polyline>
  </svg>;