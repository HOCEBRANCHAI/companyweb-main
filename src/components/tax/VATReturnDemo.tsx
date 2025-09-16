import React, { useState } from 'react';
import { HelpCircleIcon, AlertCircleIcon, CheckCircleIcon, InfoIcon, XIcon } from 'lucide-react';
interface Step {
  id: number;
  title: string;
  description: string;
  image: string;
  helpText?: string;
}
export function VATReturnDemo({
  onClose
}: {
  onClose: () => void;
}) {
  const [currentStep, setCurrentStep] = useState(0);
  const [showHelp, setShowHelp] = useState(false);
  const steps: Step[] = [{
    id: 1,
    title: 'Access VAT Returns',
    description: 'Navigate to the VAT returns section in your tax office portal',
    image: "/step_1.jpg",
    helpText: "You can find the VAT returns section under 'My Tax Office Business' in the main navigation menu."
  }, {
    id: 2,
    title: 'Start New Return',
    description: 'Begin a new VAT return by filling in the introduction form',
    image: "/step_2.jpg",
    helpText: 'Make sure to have your fiscal number and contact details ready.'
  }, {
    id: 3,
    title: 'Initial Questions',
    description: 'Indicate if you have any transactions to report for this period',
    image: "/step_3.jpg",
    helpText: "Select 'No' if you have no transactions to report, or 'Yes' to proceed with entering transaction details."
  }, {
    id: 4,
    title: 'Review Overview',
    description: 'Check the overview of your VAT return before submission',
    image: "/step_4.jpg",
    helpText: 'Carefully review all sections to ensure the information is correct before proceeding.'
  }, {
    id: 5,
    title: 'Enter VAT Details',
    description: 'Fill in the detailed VAT information for your transactions',
    image: "/step_5.jpg",
    helpText: 'Enter your turnover and VAT amounts in the appropriate sections. Remember to include both high (21%) and low (9%) rate transactions.'
  }, {
    id: 6,
    title: 'Reverse-Charged VAT',
    description: 'Enter details for supplies with reverse-charged VAT',
    image: "/step_6.jpg",
    helpText: 'For supplies/services where VAT has been reverse-charged to you within the Netherlands. You must calculate and declare this VAT yourself.'
  }, {
    id: 7,
    title: 'International Trade',
    description: 'Report EU and non-EU supplies and services',
    image: "/step_7.jpg",
    helpText: 'Enter details for supplies to non-EU countries (export) and intra-EU supplies. Make sure to follow specific requirements for each category.'
  }, {
    id: 8,
    title: 'Services from Abroad',
    description: 'Enter services received from foreign businesses',
    image: "/step_8.jpg",
    helpText: 'Complete this section for services received from non-EU and EU countries. Remember to apply the correct VAT rates.'
  }, {
    id: 9,
    title: 'Input Tax Reclaim',
    description: 'Claim VAT paid on business purchases',
    image: "/step_9.jpg",
    helpText: 'Enter Dutch VAT on goods and services purchased for your business. Make sure purchases meet the deduction requirements.'
  }];
  return <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-xl max-w-4xl w-full m-4">
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <h2 className="text-xl font-semibold text-gray-900">
            VAT Return Form Demo
          </h2>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-500">
            <XIcon className="h-6 w-6" />
          </button>
        </div>
        <div className="p-6">
          <div className="mb-8">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-gray-900">
                Progress
              </span>
              <span className="text-sm font-medium text-gray-900">
                Step {currentStep + 1} of {steps.length}
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-blue-600 h-2 rounded-full transition-all duration-300" style={{
              width: `${(currentStep + 1) / steps.length * 100}%`
            }}></div>
            </div>
          </div>
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-medium text-gray-900">
                {steps[currentStep].title}
              </h3>
              <button onClick={() => setShowHelp(!showHelp)} className="text-blue-600 hover:text-blue-800">
                <HelpCircleIcon className="h-5 w-5" />
              </button>
            </div>
            <p className="text-gray-600">{steps[currentStep].description}</p>
            {showHelp && <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <div className="flex items-start">
                  <InfoIcon className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-blue-700">
                    {steps[currentStep].helpText}
                  </p>
                </div>
              </div>}
            <div className="border border-gray-200 rounded-lg overflow-hidden">
              <img src={steps[currentStep].image} alt={`VAT return step ${currentStep + 1}`} className="w-full" />
            </div>
          </div>
          <div className="flex justify-between mt-8">
            <button onClick={() => setCurrentStep(Math.max(0, currentStep - 1))} disabled={currentStep === 0} className={`px-4 py-2 text-sm font-medium rounded-md ${currentStep === 0 ? 'bg-gray-100 text-gray-400 cursor-not-allowed' : 'bg-white border border-gray-300 text-gray-700 hover:bg-gray-50'}`}>
              Previous
            </button>
            <button onClick={() => currentStep === steps.length - 1 ? onClose() : setCurrentStep(Math.min(steps.length - 1, currentStep + 1))} className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 text-sm font-medium">
              {currentStep === steps.length - 1 ? 'Complete Demo' : 'Next Step'}
            </button>
          </div>
        </div>
      </div>
    </div>;
}