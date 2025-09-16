import React, { useState } from 'react';
import { PlayCircleIcon, CheckCircleIcon, ArrowRightIcon, BuildingIcon, EuroIcon, FileTextIcon } from 'lucide-react';
import { SimpleImage } from '../common/SimpleImage';
export function InteractiveDemoSection() {
  const [activeTab, setActiveTab] = useState('branch');
  return <section className="py-20 relative bg-gradient-to-b from-[#1B1537] to-[#0F0B1F]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">
            Experience Our Streamlined Business Processes
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            See how easy it is to establish and manage your European business
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="bg-[#1B1537]/80 backdrop-blur-sm rounded-xl border border-[#2D2755] p-6">
              <div className="flex mb-6">
                <button onClick={() => setActiveTab('branch')} className={`flex-1 py-3 px-4 rounded-lg text-center ${activeTab === 'branch' ? 'bg-[#EA3A70]/10 border border-[#EA3A70]/30 text-[#EA3A70]' : 'text-gray-300 hover:bg-[#2D2755]/50'}`}>
                  Branch Registration
                </button>
                <button onClick={() => setActiveTab('vat')} className={`flex-1 py-3 px-4 rounded-lg text-center ${activeTab === 'vat' ? 'bg-[#EA3A70]/10 border border-[#EA3A70]/30 text-[#EA3A70]' : 'text-gray-300 hover:bg-[#2D2755]/50'}`}>
                  VAT Registration
                </button>
                <button onClick={() => setActiveTab('compliance')} className={`flex-1 py-3 px-4 rounded-lg text-center ${activeTab === 'compliance' ? 'bg-[#EA3A70]/10 border border-[#EA3A70]/30 text-[#EA3A70]' : 'text-gray-300 hover:bg-[#2D2755]/50'}`}>
                  Compliance
                </button>
              </div>
              {activeTab === 'branch' && <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="p-2 rounded-full bg-[#EA3A70]/20 mr-3 mt-1">
                      <CheckCircleIcon className="h-5 w-5 text-[#EA3A70]" />
                    </div>
                    <div>
                      <h3 className="text-white font-medium mb-1">
                        Submit Company Information
                      </h3>
                      <p className="text-gray-300 text-sm">
                        Provide your company details through our intuitive
                        digital platform
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="p-2 rounded-full bg-[#EA3A70]/20 mr-3 mt-1">
                      <CheckCircleIcon className="h-5 w-5 text-[#EA3A70]" />
                    </div>
                    <div>
                      <h3 className="text-white font-medium mb-1">
                        Verify Documentation
                      </h3>
                      <p className="text-gray-300 text-sm">
                        Upload required documents and our team verifies them for
                        compliance
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="p-2 rounded-full bg-[#EA3A70]/20 mr-3 mt-1">
                      <BuildingIcon className="h-5 w-5 text-[#EA3A70]" />
                    </div>
                    <div>
                      <h3 className="text-white font-medium mb-1">
                        Branch Registration
                      </h3>
                      <p className="text-gray-300 text-sm">
                        We handle the registration process with local
                        authorities
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start opacity-50">
                    <div className="p-2 rounded-full bg-[#2D2755]/50 mr-3 mt-1">
                      <FileTextIcon className="h-5 w-5 text-gray-400" />
                    </div>
                    <div>
                      <h3 className="text-white font-medium mb-1">
                        Receive Registration Documents
                      </h3>
                      <p className="text-gray-300 text-sm">
                        Get your official branch registration documents
                      </p>
                    </div>
                  </div>
                </div>}
              {activeTab === 'vat' && <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="p-2 rounded-full bg-[#EA3A70]/20 mr-3 mt-1">
                      <CheckCircleIcon className="h-5 w-5 text-[#EA3A70]" />
                    </div>
                    <div>
                      <h3 className="text-white font-medium mb-1">
                        Submit Tax Information
                      </h3>
                      <p className="text-gray-300 text-sm">
                        Provide necessary tax-related information for your
                        business
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="p-2 rounded-full bg-[#EA3A70]/20 mr-3 mt-1">
                      <EuroIcon className="h-5 w-5 text-[#EA3A70]" />
                    </div>
                    <div>
                      <h3 className="text-white font-medium mb-1">
                        VAT Registration Application
                      </h3>
                      <p className="text-gray-300 text-sm">
                        We prepare and submit your VAT registration application
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start opacity-50">
                    <div className="p-2 rounded-full bg-[#2D2755]/50 mr-3 mt-1">
                      <FileTextIcon className="h-5 w-5 text-gray-400" />
                    </div>
                    <div>
                      <h3 className="text-white font-medium mb-1">
                        Receive VAT Number
                      </h3>
                      <p className="text-gray-300 text-sm">
                        Get your official VAT identification number
                      </p>
                    </div>
                  </div>
                </div>}
              {activeTab === 'compliance' && <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="p-2 rounded-full bg-[#EA3A70]/20 mr-3 mt-1">
                      <CheckCircleIcon className="h-5 w-5 text-[#EA3A70]" />
                    </div>
                    <div>
                      <h3 className="text-white font-medium mb-1">
                        Compliance Assessment
                      </h3>
                      <p className="text-gray-300 text-sm">
                        We analyze your business to identify compliance
                        requirements
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="p-2 rounded-full bg-[#EA3A70]/20 mr-3 mt-1">
                      <FileTextIcon className="h-5 w-5 text-[#EA3A70]" />
                    </div>
                    <div>
                      <h3 className="text-white font-medium mb-1">
                        Document Preparation
                      </h3>
                      <p className="text-gray-300 text-sm">
                        We prepare all necessary compliance documentation
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start opacity-50">
                    <div className="p-2 rounded-full bg-[#2D2755]/50 mr-3 mt-1">
                      <CheckCircleIcon className="h-5 w-5 text-gray-400" />
                    </div>
                    <div>
                      <h3 className="text-white font-medium mb-1">
                        Ongoing Compliance Management
                      </h3>
                      <p className="text-gray-300 text-sm">
                        We ensure your business remains compliant with all
                        regulations
                      </p>
                    </div>
                  </div>
                </div>}
              <button className="mt-8 w-full flex items-center justify-center px-6 py-3 bg-[#EA3A70] text-white rounded-lg hover:bg-[#EA3A70]/90 transition-colors font-medium shadow-md shadow-[#EA3A70]/20">
                Try Interactive Demo
                <ArrowRightIcon className="ml-2 h-4 w-4" />
              </button>
            </div>
          </div>
          <div className="relative">
            <div className="bg-[#1B1537]/80 backdrop-blur-sm rounded-2xl border border-[#2D2755] overflow-hidden shadow-2xl">
              <div className="relative aspect-video">
                <SimpleImage imageName="Branch_LP.jpg" alt="Platform demo" className="w-full h-full object-cover opacity-90" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <button className="p-4 rounded-full bg-[#EA3A70]/90 hover:bg-[#EA3A70] transition-colors shadow-lg">
                    <PlayCircleIcon className="h-12 w-12 text-white" />
                  </button>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">
                  See Our Platform in Action
                </h3>
                <p className="text-gray-300">
                  Watch how easy it is to manage your European business
                  operations with our digital platform
                </p>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 bg-[#EA3A70]/10 backdrop-blur-sm rounded-xl p-4 border border-[#EA3A70]/30 shadow-xl max-w-xs">
              <div className="flex items-center mb-2">
                <div className="p-2 rounded-full bg-[#EA3A70]/20 mr-3">
                  <CheckCircleIcon className="h-5 w-5 text-[#EA3A70]" />
                </div>
                <p className="text-white font-medium">Streamlined Process</p>
              </div>
              <p className="text-gray-300 text-sm">
                Our digital platform automates complex processes, saving you
                time and reducing errors
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>;
}