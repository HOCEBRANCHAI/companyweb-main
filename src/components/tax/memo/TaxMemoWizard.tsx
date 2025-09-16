import React, { useState, memo } from 'react';
import { useNavigate } from 'react-router-dom';
import { X as XIcon, ArrowLeftIcon, ArrowRightIcon, CheckIcon, FileTextIcon, GlobeIcon, BuildingIcon, BookOpenIcon } from 'lucide-react';
import { JurisdictionSelector } from '../JurisdictionSelector';
import { TaxQueryForm } from './TaxQueryForm';
import { CorporateStructureSelector } from '../CorporateStructureSelector';
import { TaxMemoPreview } from './TaxMemoPreview';
interface TaxMemoWizardProps {
  onClose: () => void;
}
export function TaxMemoWizard({
  onClose
}: TaxMemoWizardProps) {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    memoName: '',
    jurisdictions: [] as string[],
    businessActivities: [] as string[],
    corporateStructure: '',
    companies: [] as any[],
    relationships: [] as any[],
    taxQueries: [] as string[],
    specificConcerns: '',
    transactionTypes: [] as string[]
  });
  const handleJurisdictionChange = (jurisdictions: string[]) => {
    setFormData(prev => ({
      ...prev,
      jurisdictions
    }));
  };
  const handleStructureChange = (companies: any[], relationships: any[]) => {
    setFormData(prev => ({
      ...prev,
      companies,
      relationships
    }));
  };
  const handleStructureSelect = (structure: string) => {
    setFormData(prev => ({
      ...prev,
      corporateStructure: structure
    }));
  };
  const handleQueryChange = (queries: string[]) => {
    setFormData(prev => ({
      ...prev,
      taxQueries: queries
    }));
  };
  const handleActivityChange = (activities: string[]) => {
    setFormData(prev => ({
      ...prev,
      businessActivities: activities
    }));
  };
  const handleTransactionChange = (transactions: string[]) => {
    setFormData(prev => ({
      ...prev,
      transactionTypes: transactions
    }));
  };
  const handleSpecificConcernsChange = (concerns: string) => {
    setFormData(prev => ({
      ...prev,
      specificConcerns: concerns
    }));
  };
  const handleMemoNameChange = (name: string) => {
    setFormData(prev => ({
      ...prev,
      memoName: name
    }));
  };
  const handleNext = () => {
    setCurrentStep(prev => prev + 1);
  };
  const handleBack = () => {
    setCurrentStep(prev => prev - 1);
  };
  const handleFinish = () => {
    navigate('/taxes/memo/full-view');
  };
  const steps = [{
    name: 'Name & Jurisdictions',
    icon: <GlobeIcon className="h-5 w-5" />
  }, {
    name: 'Corporate Structure',
    icon: <BuildingIcon className="h-5 w-5" />
  }, {
    name: 'Tax Queries',
    icon: <FileTextIcon className="h-5 w-5" />
  }, {
    name: 'Preview & Generate',
    icon: <BookOpenIcon className="h-5 w-5" />
  }];
  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return <div className="space-y-6">
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Tax Memorandum Name
              </label>
              <input type="text" value={formData.memoName} onChange={e => handleMemoNameChange(e.target.value)} placeholder="e.g., EU Expansion Tax Analysis" className="w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500" />
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-4">
                Select Jurisdictions
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                Choose the jurisdictions you want to include in your tax
                memorandum.
              </p>
              <JurisdictionSelector selectedJurisdictions={formData.jurisdictions} onJurisdictionChange={handleJurisdictionChange} />
            </div>
            <div className="mt-6">
              <h3 className="text-lg font-medium text-gray-900 mb-4">
                Business Activities
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                Select the business activities that apply to your operations.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {['Software Development', 'E-commerce', 'Digital Services', 'Manufacturing', 'Consulting', 'Financial Services', 'Holding Activities', 'IP Licensing', 'Trading'].map(activity => <div key={activity} className="flex items-center">
                    <input type="checkbox" id={`activity-${activity}`} checked={formData.businessActivities.includes(activity)} onChange={e => {
                  if (e.target.checked) {
                    handleActivityChange([...formData.businessActivities, activity]);
                  } else {
                    handleActivityChange(formData.businessActivities.filter(a => a !== activity));
                  }
                }} className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
                    <label htmlFor={`activity-${activity}`} className="ml-2 block text-sm text-gray-900">
                      {activity}
                    </label>
                  </div>)}
              </div>
            </div>
          </div>;
      case 1:
        return <div className="space-y-6">
            <h3 className="text-lg font-medium text-gray-900 mb-4">
              Corporate Structure
            </h3>
            <p className="text-sm text-gray-600 mb-4">
              Define your corporate structure to analyze tax implications across
              your organization.
            </p>
            <div className="h-[500px] overflow-y-auto border border-gray-200 rounded-lg bg-white p-4">
              <CorporateStructureSelector selectedStructure={formData.corporateStructure} onStructureSelect={handleStructureSelect} onEditStructure={() => {}} onStructureChange={handleStructureChange} />
            </div>
          </div>;
      case 2:
        return <TaxQueryForm selectedQueries={formData.taxQueries} onQueryChange={handleQueryChange} specificConcerns={formData.specificConcerns} onSpecificConcernsChange={handleSpecificConcernsChange} transactionTypes={formData.transactionTypes} onTransactionChange={handleTransactionChange} />;
      case 3:
        return <TaxMemoPreview memoName={formData.memoName} jurisdictions={formData.jurisdictions} businessActivities={formData.businessActivities} taxQueries={formData.taxQueries} specificConcerns={formData.specificConcerns} transactionTypes={formData.transactionTypes} />;
      default:
        return null;
    }
  };
  return <div className="fixed inset-0 bg-gray-600 bg-opacity-75 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-4xl max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center p-6 border-b border-gray-200">
          <h2 className="text-xl font-semibold text-gray-900">
            Tax Memorandum Generator
          </h2>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-500">
            <XIcon className="h-6 w-6" />
          </button>
        </div>
        <div className="p-6">
          {/* Progress Indicators */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              {steps.map((step, index) => <div key={index} className={`flex flex-col items-center ${index <= currentStep ? 'text-blue-600' : 'text-gray-400'}`}>
                  <div className={`
                    flex items-center justify-center w-10 h-10 rounded-full 
                    ${index < currentStep ? 'bg-blue-600' : index === currentStep ? 'border-2 border-blue-600 bg-white' : 'border-2 border-gray-300 bg-white'}
                  `}>
                    {index < currentStep ? <CheckIcon className="h-6 w-6 text-white" /> : <div className={`${index === currentStep ? 'text-blue-600' : 'text-gray-400'}`}>
                        {step.icon}
                      </div>}
                  </div>
                  <span className="mt-2 text-sm font-medium">{step.name}</span>
                </div>)}
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div className="bg-blue-600 h-2.5 rounded-full transition-all duration-300" style={{
              width: `${currentStep / (steps.length - 1) * 100}%`
            }} />
            </div>
          </div>
          {/* Step Content */}
          <div className="mb-8">{renderStep()}</div>
          {/* Navigation Buttons */}
          <div className="flex justify-between pt-4 border-t border-gray-200">
            <button onClick={currentStep === 0 ? onClose : handleBack} className="px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 text-sm font-medium flex items-center">
              <ArrowLeftIcon className="h-4 w-4 mr-2" />
              {currentStep === 0 ? 'Cancel' : 'Back'}
            </button>
            <button onClick={currentStep === steps.length - 1 ? handleFinish : handleNext} className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 text-sm font-medium flex items-center">
              {currentStep === steps.length - 1 ? 'Generate Memo' : 'Next'}
              {currentStep !== steps.length - 1 && <ArrowRightIcon className="ml-2 h-4 w-4" />}
            </button>
          </div>
        </div>
      </div>
    </div>;
}