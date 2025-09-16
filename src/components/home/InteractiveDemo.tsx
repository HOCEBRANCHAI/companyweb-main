import React, { useState } from 'react';
import { BuildingIcon, CheckIcon, FileTextIcon, ArrowRightIcon, GlobeIcon, CoinsIcon, UserIcon } from 'lucide-react';
export function InteractiveDemo() {
  const [step, setStep] = useState(1);
  const [companyName, setCompanyName] = useState('');
  const [businessType, setBusinessType] = useState('');
  const [country, setCountry] = useState('');
  const handleNextStep = () => {
    if (step < 4) {
      setStep(step + 1);
    }
  };
  const handlePrevStep = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };
  return <div className="text-white">
      <div className="mb-8">
        <h3 className="text-2xl font-bold mb-4">
          Experience how easy it is to set up your company in Europe
        </h3>
        <p className="text-indigo-200">
          Try our interactive demo to see how quickly you can establish your
          business in any European country.
        </p>
      </div>
      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className={`w-10 h-10 rounded-full flex items-center justify-center ${step >= 1 ? 'bg-[#EA3A70]' : 'bg-indigo-900/50 border border-indigo-500/30'}`}>
              <BuildingIcon className="h-5 w-5 text-white" />
            </div>
            <div className={`h-1 w-16 ${step >= 2 ? 'bg-[#EA3A70]' : 'bg-indigo-900/50'}`}></div>
          </div>
          <div className="flex items-center">
            <div className={`w-10 h-10 rounded-full flex items-center justify-center ${step >= 2 ? 'bg-[#EA3A70]' : 'bg-indigo-900/50 border border-indigo-500/30'}`}>
              <GlobeIcon className="h-5 w-5 text-white" />
            </div>
            <div className={`h-1 w-16 ${step >= 3 ? 'bg-[#EA3A70]' : 'bg-indigo-900/50'}`}></div>
          </div>
          <div className="flex items-center">
            <div className={`w-10 h-10 rounded-full flex items-center justify-center ${step >= 3 ? 'bg-[#EA3A70]' : 'bg-indigo-900/50 border border-indigo-500/30'}`}>
              <UserIcon className="h-5 w-5 text-white" />
            </div>
            <div className={`h-1 w-16 ${step >= 4 ? 'bg-[#EA3A70]' : 'bg-indigo-900/50'}`}></div>
          </div>
          <div className="flex items-center">
            <div className={`w-10 h-10 rounded-full flex items-center justify-center ${step >= 4 ? 'bg-[#EA3A70]' : 'bg-indigo-900/50 border border-indigo-500/30'}`}>
              <CoinsIcon className="h-5 w-5 text-white" />
            </div>
          </div>
        </div>
        <div className="flex justify-between mt-2 text-xs text-indigo-300">
          <span>Company Info</span>
          <span>Location</span>
          <span>Directors</span>
          <span>Confirmation</span>
        </div>
      </div>
      {/* Step Content */}
      <div className="bg-indigo-900/30 rounded-xl p-6 border border-indigo-500/30 mb-8">
        {step === 1 && <div className="animate-fadeIn">
            <h4 className="text-xl font-bold mb-4">Company Information</h4>
            <div className="space-y-4">
              <div>
                <label className="block text-indigo-300 mb-2 text-sm">
                  Company Name
                </label>
                <input type="text" value={companyName} onChange={e => setCompanyName(e.target.value)} placeholder="e.g., Tech Innovations Ltd." className="w-full bg-indigo-900/50 border border-indigo-500/30 rounded-lg px-4 py-3 text-white" />
              </div>
              <div>
                <label className="block text-indigo-300 mb-2 text-sm">
                  Business Type
                </label>
                <select value={businessType} onChange={e => setBusinessType(e.target.value)} className="w-full bg-indigo-900/50 border border-indigo-500/30 rounded-lg px-4 py-3 text-white">
                  <option value="">Select business type</option>
                  <option value="entity">Legal Entity</option>
                  <option value="branch">Branch Office</option>
                  <option value="sole">Sole Proprietorship</option>
                </select>
              </div>
              <div>
                <label className="block text-indigo-300 mb-2 text-sm">
                  Business Activities
                </label>
                <textarea placeholder="Describe your main business activities..." className="w-full bg-indigo-900/50 border border-indigo-500/30 rounded-lg px-4 py-3 text-white" rows={3}></textarea>
              </div>
            </div>
          </div>}
        {step === 2 && <div className="animate-fadeIn">
            <h4 className="text-xl font-bold mb-4">Business Location</h4>
            <div className="space-y-4">
              <div>
                <label className="block text-indigo-300 mb-2 text-sm">
                  Home Country
                </label>
                <select value={country} onChange={e => setCountry(e.target.value)} className="w-full bg-indigo-900/50 border border-indigo-500/30 rounded-lg px-4 py-3 text-white">
                  <option value="">Select your home country</option>
                  <option value="us">United States</option>
                  <option value="uk">United Kingdom</option>
                  <option value="ca">Canada</option>
                  <option value="au">Australia</option>
                  <option value="in">India</option>
                  <option value="sg">Singapore</option>
                </select>
              </div>
              <div>
                <label className="block text-indigo-300 mb-2 text-sm">
                  Target Country
                </label>
                <select className="w-full bg-indigo-900/50 border border-indigo-500/30 rounded-lg px-4 py-3 text-white">
                  <option value="">Select target country</option>
                  <option value="netherlands">Netherlands</option>
                  <option value="germany">Germany</option>
                  <option value="france">France</option>
                  <option value="spain">Spain</option>
                  <option value="italy">Italy</option>
                </select>
              </div>
              <div>
                <label className="block text-indigo-300 mb-2 text-sm">
                  Business Address Type
                </label>
                <div className="space-y-3">
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-indigo-900/50 border border-indigo-500/30 rounded-lg p-4 cursor-pointer hover:border-[#EA3A70]/50 transition-colors">
                      <div className="flex justify-between items-start mb-2">
                        <div className="p-2 bg-indigo-900/70 rounded-lg">
                          <BuildingIcon className="h-5 w-5 text-indigo-300" />
                        </div>
                        <div className="flex items-center h-6 px-2 rounded-full bg-[#EA3A70]/20 text-[#EA3A70] text-xs">
                          Popular
                        </div>
                      </div>
                      <h5 className="font-medium mb-1">Virtual Office</h5>
                      <p className="text-indigo-300 text-sm">
                        Business address with mail handling
                      </p>
                    </div>
                    <div className="bg-indigo-900/50 border border-indigo-500/30 rounded-lg p-4 cursor-pointer hover:border-[#EA3A70]/50 transition-colors">
                      <div className="flex justify-between items-start mb-2">
                        <div className="p-2 bg-indigo-900/70 rounded-lg">
                          <BuildingIcon className="h-5 w-5 text-indigo-300" />
                        </div>
                      </div>
                      <h5 className="font-medium mb-1">Physical Office</h5>
                      <p className="text-indigo-300 text-sm">
                        Dedicated workspace in major city
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <label className="block text-indigo-300 mb-2 text-sm">
                  City Location
                </label>
                <select className="w-full bg-indigo-900/50 border border-indigo-500/30 rounded-lg px-4 py-3 text-white">
                  <option value="">Select a city</option>
                  <option value="amsterdam">Amsterdam</option>
                  <option value="rotterdam">Rotterdam</option>
                  <option value="berlin">Berlin</option>
                  <option value="munich">Munich</option>
                  <option value="paris">Paris</option>
                  <option value="madrid">Madrid</option>
                </select>
              </div>
            </div>
          </div>}
        {step === 3 && <div className="animate-fadeIn">
            <h4 className="text-xl font-bold mb-4">Directors & Shareholders</h4>
            <div className="space-y-4">
              <div className="bg-indigo-900/50 border border-indigo-500/30 rounded-lg p-4">
                <div className="flex items-center mb-3">
                  <div className="p-2 bg-indigo-900/70 rounded-lg mr-3">
                    <UserIcon className="h-5 w-5 text-indigo-300" />
                  </div>
                  <div>
                    <h5 className="font-medium">Director #1</h5>
                    <p className="text-indigo-300 text-sm">Managing Director</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-indigo-300 mb-1 text-xs">
                      Full Name
                    </label>
                    <input type="text" placeholder="John Smith" className="w-full bg-indigo-900/30 border border-indigo-500/30 rounded-lg px-3 py-2 text-white text-sm" />
                  </div>
                  <div>
                    <label className="block text-indigo-300 mb-1 text-xs">
                      Nationality
                    </label>
                    <input type="text" placeholder="e.g., American" className="w-full bg-indigo-900/30 border border-indigo-500/30 rounded-lg px-3 py-2 text-white text-sm" />
                  </div>
                </div>
              </div>
              <div className="bg-indigo-900/50 border border-indigo-500/30 rounded-lg p-4">
                <div className="flex items-center mb-3">
                  <div className="p-2 bg-indigo-900/70 rounded-lg mr-3">
                    <BuildingIcon className="h-5 w-5 text-indigo-300" />
                  </div>
                  <div>
                    <h5 className="font-medium">Shareholder #1</h5>
                    <p className="text-indigo-300 text-sm">Corporate Entity</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3 mb-3">
                  <div>
                    <label className="block text-indigo-300 mb-1 text-xs">
                      Company Name
                    </label>
                    <input type="text" placeholder="Parent Company Ltd." className="w-full bg-indigo-900/30 border border-indigo-500/30 rounded-lg px-3 py-2 text-white text-sm" />
                  </div>
                  <div>
                    <label className="block text-indigo-300 mb-1 text-xs">
                      Country
                    </label>
                    <input type="text" placeholder="e.g., United Kingdom" className="w-full bg-indigo-900/30 border border-indigo-500/30 rounded-lg px-3 py-2 text-white text-sm" />
                  </div>
                </div>
                <div>
                  <label className="block text-indigo-300 mb-1 text-xs">
                    Ownership Percentage
                  </label>
                  <input type="text" placeholder="e.g., 100%" className="w-full bg-indigo-900/30 border border-indigo-500/30 rounded-lg px-3 py-2 text-white text-sm" />
                </div>
              </div>
              <button className="w-full px-4 py-3 bg-indigo-900/50 border border-indigo-500/30 text-white rounded-lg hover:bg-indigo-800/50 transition-colors flex items-center justify-center">
                <UserIcon className="h-4 w-4 mr-2" />
                Add Another Director
              </button>
            </div>
          </div>}
        {step === 4 && <div className="animate-fadeIn">
            <h4 className="text-xl font-bold mb-4">Review & Confirm</h4>
            <div className="space-y-6">
              <div className="bg-indigo-900/50 border border-indigo-500/30 rounded-lg p-4">
                <h5 className="font-medium mb-3 flex items-center">
                  <BuildingIcon className="h-5 w-5 mr-2 text-indigo-300" />
                  Company Information
                </h5>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-indigo-300">Company Name:</span>
                    <span className="text-white font-medium">
                      {companyName || 'Tech Innovations Ltd.'}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-indigo-300">Business Type:</span>
                    <span className="text-white font-medium">
                      {businessType === 'entity' ? 'Legal Entity' : 'Legal Entity'}
                    </span>
                  </div>
                </div>
              </div>
              <div className="bg-indigo-900/50 border border-indigo-500/30 rounded-lg p-4">
                <h5 className="font-medium mb-3 flex items-center">
                  <GlobeIcon className="h-5 w-5 mr-2 text-indigo-300" />
                  Business Location
                </h5>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-indigo-300">Home Country:</span>
                    <span className="text-white font-medium">
                      {country === 'us' ? 'United States' : 'United States'}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-indigo-300">Target Country:</span>
                    <span className="text-white font-medium">Germany</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-indigo-300">Business Address:</span>
                    <span className="text-white font-medium">
                      Virtual Office, Berlin
                    </span>
                  </div>
                </div>
              </div>
              <div className="bg-indigo-900/50 border border-indigo-500/30 rounded-lg p-4">
                <h5 className="font-medium mb-3 flex items-center">
                  <UserIcon className="h-5 w-5 mr-2 text-indigo-300" />
                  Management & Ownership
                </h5>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-indigo-300">Director:</span>
                    <span className="text-white font-medium">
                      John Smith (Managing Director)
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-indigo-300">Shareholder:</span>
                    <span className="text-white font-medium">
                      Parent Company Ltd. (100%)
                    </span>
                  </div>
                </div>
              </div>
              <div className="bg-indigo-900/50 border border-indigo-500/30 rounded-lg p-4">
                <h5 className="font-medium mb-3 flex items-center">
                  <CoinsIcon className="h-5 w-5 mr-2 text-indigo-300" />
                  Estimated Costs
                </h5>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-indigo-300">Company Formation:</span>
                    <span className="text-white font-medium">€1,500</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-indigo-300">Monthly Fee:</span>
                    <span className="text-white font-medium">€199/month</span>
                  </div>
                  <div className="flex justify-between pt-2 border-t border-indigo-500/30">
                    <span className="text-indigo-300 font-medium">
                      Total Initial Cost:
                    </span>
                    <span className="text-[#EA3A70] font-bold">€1,699</span>
                  </div>
                </div>
              </div>
              <div className="bg-[#EA3A70]/10 border border-[#EA3A70]/30 rounded-lg p-4">
                <div className="flex">
                  <div className="p-2 bg-[#EA3A70]/20 rounded-lg mr-3">
                    <CheckIcon className="h-5 w-5 text-[#EA3A70]" />
                  </div>
                  <div>
                    <h5 className="font-medium text-white">Ready to Launch!</h5>
                    <p className="text-indigo-200 text-sm">
                      Your company can be operational within 48 hours.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>}
      </div>
      {/* Navigation Buttons */}
      <div className="flex justify-between">
        <button onClick={handlePrevStep} className={`px-6 py-3 rounded-lg flex items-center ${step === 1 ? 'invisible' : 'bg-indigo-900/50 border border-indigo-500/30 text-white hover:bg-indigo-800/50 transition-colors'}`}>
          Back
        </button>
        {step < 4 ? <button onClick={handleNextStep} className="px-6 py-3 bg-[#EA3A70] text-white rounded-lg hover:bg-[#EA3A70]/90 transition-colors flex items-center">
            Continue
            <ArrowRightIcon className="h-4 w-4 ml-2" />
          </button> : <button className="px-6 py-3 bg-[#EA3A70] text-white rounded-lg hover:bg-[#EA3A70]/90 transition-colors flex items-center">
            Get Started
            <ArrowRightIcon className="h-4 w-4 ml-2" />
          </button>}
      </div>
    </div>;
}