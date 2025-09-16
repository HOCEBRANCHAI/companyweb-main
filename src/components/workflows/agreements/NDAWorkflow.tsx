import React, { useState } from 'react';
import { XIcon } from 'lucide-react';
import { NDAOverview } from './nda/NDAOverview';
import { NDACompanySelection } from './nda/NDACompanySelection';
import { NDAPartyInformation } from './nda/NDAPartyInformation';
import { NDATermsOptions } from './nda/NDATermsOptions';
import { NDAPreview } from './nda/NDAPreview';
import { NDASignature } from './nda/NDASignature';
interface NDAWorkflowProps {
  onClose: () => void;
}
export function NDAWorkflow({
  onClose
}: NDAWorkflowProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedCompanyProfile, setSelectedCompanyProfile] = useState<any>(null);
  const [formData, setFormData] = useState({
    // Party Information
    disclosingPartyName: '',
    disclosingPartyAddress: '',
    disclosingPartyRepresentative: '',
    receivingPartyName: '',
    receivingPartyAddress: '',
    receivingPartyRepresentative: '',
    // Terms and Options
    purpose: '',
    effectiveDate: '',
    terminationPeriod: '2 years',
    confidentialInformation: ['trade secrets', 'business plans', 'financial information', 'customer lists', 'product designs'],
    customConfidentialInformation: '',
    governingLaw: 'Netherlands',
    disputeResolution: 'courts',
    arbitrationLocation: '',
    includeNonSolicitation: true,
    nonSolicitationPeriod: '1 year',
    includeNonCompete: false,
    nonCompetePeriod: ''
  });
  const handleDataChange = (data: Partial<typeof formData>) => {
    setFormData({
      ...formData,
      ...data
    });
  };
  const handleContinue = () => {
    setCurrentStep(currentStep + 1);
  };
  const handleBack = () => {
    setCurrentStep(currentStep - 1);
  };
  const handleComplete = () => {
    console.log('NDA agreement completed:', formData);
    onClose();
  };
  const handleCompanySelection = (selectedCompany: any) => {
    setSelectedCompanyProfile(selectedCompany);
    handleContinue();
  };
  const renderStepContent = () => {
    switch (currentStep) {
      case 0:
        return <NDAOverview onContinue={handleContinue} />;
      case 1:
        return <NDACompanySelection onContinue={handleCompanySelection} onBack={handleBack} />;
      case 2:
        return <NDAPartyInformation formData={formData} onDataChange={handleDataChange} onContinue={handleContinue} onBack={handleBack} prefillData={selectedCompanyProfile ? {
          disclosingPartyName: selectedCompanyProfile.name,
          disclosingPartyAddress: selectedCompanyProfile.address,
          disclosingPartyRepresentative: selectedCompanyProfile.representative
        } : undefined} />;
      case 3:
        return <NDATermsOptions formData={formData} onDataChange={handleDataChange} onContinue={handleContinue} onBack={handleBack} />;
      case 4:
        return <NDAPreview formData={formData} onContinue={handleContinue} onBack={handleBack} />;
      case 5:
        return <NDASignature formData={formData} onComplete={handleComplete} onBack={handleBack} />;
      default:
        return null;
    }
  };
  const getStepTitle = () => {
    switch (currentStep) {
      case 0:
        return 'Overview';
      case 1:
        return 'Company Selection';
      case 2:
        return 'Party Information';
      case 3:
        return 'Terms & Options';
      case 4:
        return 'Preview Agreement';
      case 5:
        return 'Sign & Complete';
      default:
        return '';
    }
  };
  return <div className="bg-white rounded-lg shadow-md border border-gray-200 w-full">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-gray-200">
        <h2 className="text-xl font-semibold text-gray-900">
          Non-Disclosure Agreement
        </h2>
        <button onClick={onClose} className="text-gray-400 hover:text-gray-500">
          <XIcon className="h-6 w-6" />
        </button>
      </div>
      {/* Progress Steps */}
      <div className="px-4 py-3 bg-gray-50">
        <div className="flex items-center justify-between max-w-3xl mx-auto">
          <div className={`flex items-center ${currentStep >= 0 ? 'text-blue-600' : 'text-gray-400'}`}>
            <span className={`h-8 w-8 flex items-center justify-center rounded-full border-2 ${currentStep >= 0 ? 'border-blue-600' : 'border-gray-300'}`}>
              1
            </span>
            <span className="ml-2 text-sm font-medium">Overview</span>
          </div>
          <div className={`flex-1 h-0.5 mx-4 ${currentStep >= 1 ? 'bg-blue-600' : 'bg-gray-200'}`} />
          <div className={`flex items-center ${currentStep >= 1 ? 'text-blue-600' : 'text-gray-400'}`}>
            <span className={`h-8 w-8 flex items-center justify-center rounded-full border-2 ${currentStep >= 1 ? 'border-blue-600' : 'border-gray-300'}`}>
              2
            </span>
            <span className="ml-2 text-sm font-medium">Company</span>
          </div>
          <div className={`flex-1 h-0.5 mx-4 ${currentStep >= 2 ? 'bg-blue-600' : 'bg-gray-200'}`} />
          <div className={`flex items-center ${currentStep >= 2 ? 'text-blue-600' : 'text-gray-400'}`}>
            <span className={`h-8 w-8 flex items-center justify-center rounded-full border-2 ${currentStep >= 2 ? 'border-blue-600' : 'border-gray-300'}`}>
              3
            </span>
            <span className="ml-2 text-sm font-medium">Parties</span>
          </div>
          <div className={`flex-1 h-0.5 mx-4 ${currentStep >= 3 ? 'bg-blue-600' : 'bg-gray-200'}`} />
          <div className={`flex items-center ${currentStep >= 3 ? 'text-blue-600' : 'text-gray-400'}`}>
            <span className={`h-8 w-8 flex items-center justify-center rounded-full border-2 ${currentStep >= 3 ? 'border-blue-600' : 'border-gray-300'}`}>
              4
            </span>
            <span className="ml-2 text-sm font-medium">Terms</span>
          </div>
          <div className={`flex-1 h-0.5 mx-4 ${currentStep >= 4 ? 'bg-blue-600' : 'bg-gray-200'}`} />
          <div className={`flex items-center ${currentStep >= 4 ? 'text-blue-600' : 'text-gray-400'}`}>
            <span className={`h-8 w-8 flex items-center justify-center rounded-full border-2 ${currentStep >= 4 ? 'border-blue-600' : 'border-gray-300'}`}>
              5
            </span>
            <span className="ml-2 text-sm font-medium">Preview</span>
          </div>
          <div className={`flex-1 h-0.5 mx-4 ${currentStep >= 5 ? 'bg-blue-600' : 'bg-gray-200'}`} />
          <div className={`flex items-center ${currentStep >= 5 ? 'text-blue-600' : 'text-gray-400'}`}>
            <span className={`h-8 w-8 flex items-center justify-center rounded-full border-2 ${currentStep >= 5 ? 'border-blue-600' : 'border-gray-300'}`}>
              6
            </span>
            <span className="ml-2 text-sm font-medium">Sign</span>
          </div>
        </div>
      </div>
      {/* Content */}
      <div className="p-6">{renderStepContent()}</div>
    </div>;
}