import React, { useState } from 'react';
import { X as XIcon } from 'lucide-react';
import { CompanyProfileSelection } from './CompanyProfileSelection';
import { AddressChangeOverview } from './AddressChangeOverview';
import { AddressInformation } from './AddressInformation';
import { DocumentUpload } from './DocumentUpload';
import { AddressChangeReview } from './AddressChangeReview';
import { AddressChangeConfirmation } from './AddressChangeConfirmation';
import { TaxOfficeLetter } from './TaxOfficeLetter';
interface AddressChangeWorkflowProps {
  onClose: () => void;
}
export function AddressChangeWorkflow({
  onClose
}: AddressChangeWorkflowProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    // Company details
    companyName: 'Tech Innovations Netherlands B.V.',
    kvkNumber: 'NL123456789B01',
    currentAddress: 'Prinses Beatrixlaan 582, 2595 BM, The Hague, Netherlands',
    selectedProfile: null,
    // New address details
    newStreet: '',
    newNumber: '',
    newPostalCode: '',
    newCity: '',
    newCountry: 'Netherlands',
    // Tax office update
    updateTaxOffice: false,
    // Effective date
    effectiveDate: '',
    // Documents
    documents: [] as File[],
    // Tax Office Letter
    taxOfficeLetter: ''
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
  const handleCompanySelection = (companyData: any) => {
    setFormData({
      ...formData,
      ...companyData
    });
    handleContinue();
  };
  const renderCurrentStep = () => {
    switch (currentStep) {
      case 0:
        return <CompanyProfileSelection onContinue={handleCompanySelection} />;
      case 1:
        return <AddressChangeOverview onContinue={handleContinue} />;
      case 2:
        return <AddressInformation formData={formData} onDataChange={handleDataChange} onContinue={handleContinue} onBack={handleBack} />;
      case 3:
        return <AddressChangeReview formData={formData} onContinue={handleContinue} onBack={handleBack} />;
      case 4:
        return <TaxOfficeLetter formData={formData} onDataChange={handleDataChange} onContinue={handleContinue} onBack={handleBack} />;
      case 5:
        return <DocumentUpload formData={formData} onDataChange={handleDataChange} onContinue={handleContinue} onBack={handleBack} />;
      case 6:
        return <AddressChangeConfirmation formData={formData} onBack={handleBack} onClose={onClose} />;
      default:
        return null;
    }
  };
  const getStepName = (stepIndex: number) => {
    const steps = ['Company Profile', 'Overview', 'Address', 'Review', 'Tax Letter', 'Documents', 'Confirmation'];
    return steps[stepIndex];
  };
  return <div className="fixed inset-0 bg-gray-600 bg-opacity-75 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-4xl max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center p-6 border-b border-gray-200">
          <h2 className="text-xl font-semibold text-gray-900">
            Change Registered Office
          </h2>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-500">
            <XIcon className="h-6 w-6" />
          </button>
        </div>
        <div className="p-6">
          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex justify-between mb-2">
              {[0, 1, 2, 3, 4, 5, 6].map(stepIndex => <div key={stepIndex} className="flex items-center">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${currentStep >= stepIndex ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-600'}`}>
                    {stepIndex + 1}
                  </div>
                  <span className={`ml-2 text-sm ${currentStep >= stepIndex ? 'text-blue-600' : 'text-gray-500'}`}>
                    {getStepName(stepIndex)}
                  </span>
                </div>)}
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div className="bg-blue-600 h-2.5 rounded-full" style={{
              width: `${currentStep / 6 * 100}%`
            }}></div>
            </div>
          </div>
          {renderCurrentStep()}
        </div>
      </div>
    </div>;
}