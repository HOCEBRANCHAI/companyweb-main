import React, { useState } from 'react';
import { XIcon } from 'lucide-react';
import { EmployerRegistrationForm } from './EmployerRegistrationForm';
import { EmployerRequirementsOverview } from './EmployerRequirementsOverview';
import { DataImportOptions } from './DataImportOptions';
import { DocumentUploadScanner } from './DocumentUploadScanner';
import { PayrollRegistrationForm } from '../payroll/PayrollRegistrationForm';
interface EmployerRegistrationProps {
  onClose: () => void;
}
export function EmployerRegistration({
  onClose
}: EmployerRegistrationProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [importMethod, setImportMethod] = useState<'base' | 'upload' | 'target' | null>(null);
  const [formData, setFormData] = useState({
    companyName: '',
    companyAddress: '',
    country: 'Netherlands',
    businessActivity: '',
    legalForm: '',
    taxNumber: '',
    chamberOfCommerceNumber: '',
    contactPerson: '',
    contactEmail: '',
    contactPhone: '',
    employmentStartDate: '',
    expectedEmployeeCount: '1-5',
    employmentTypes: ['full_time'],
    payrollFrequency: 'monthly',
    benefitsOffered: [],
    workingHoursPolicy: '',
    acceptTerms: false
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
    console.log('Employer Registration complete:', formData);
    onClose();
  };
  const handleSelectImportMethod = (method: 'base' | 'upload' | 'target') => {
    setImportMethod(method);
    if (method === 'upload') {
      setCurrentStep(2.1); // Go to document upload scanner
    } else {
      // For base or target, prefill the form data
      if (method === 'base') {
        setFormData({
          ...formData,
          companyName: 'Tech Innovations Ltd',
          companyAddress: 'World Trade Center, Tower B, Bengaluru, India, 560055',
          businessActivity: 'Software development and IT consulting services',
          legalForm: 'private_limited',
          taxNumber: 'IN78901234567',
          chamberOfCommerceNumber: 'INDIA-123456',
          contactPerson: 'John Smith',
          contactEmail: 'john.smith@example.com',
          contactPhone: '+44 7123 456789'
        });
      } else if (method === 'target') {
        setFormData({
          ...formData,
          companyName: 'Tech Innovations Netherlands B.V.',
          companyAddress: 'Prinses Beatrixlaan 582, 2595 BM, The Hague, Netherlands',
          businessActivity: 'Software development and IT consulting services',
          legalForm: 'bv',
          taxNumber: 'NL123456789B01',
          chamberOfCommerceNumber: 'KVK 12345678',
          contactPerson: 'Maria Rodriguez',
          contactEmail: 'maria.rodriguez@example.com',
          contactPhone: '+31 6 12345678'
        });
      }
      setCurrentStep(3); // Go to company information form
    }
  };
  const handleDocumentUploadComplete = () => {
    // Simulate data extraction from documents
    setFormData({
      ...formData,
      companyName: 'Global Tech Solutions GmbH',
      companyAddress: 'Friedrichstraße 123, 10117 Berlin, Germany',
      businessActivity: 'IT consulting and software development',
      legalForm: 'gmbh',
      taxNumber: 'DE123456789',
      chamberOfCommerceNumber: 'HRB 123456 B',
      contactPerson: 'David Schmidt',
      contactEmail: 'david.schmidt@example.com',
      contactPhone: '+49 30 1234567'
    });
    setCurrentStep(3);
  };
  const renderStepContent = () => {
    switch (currentStep) {
      case 0:
        return <EmployerRequirementsOverview onContinue={() => setCurrentStep(1)} onSelectImportMethod={handleSelectImportMethod} />;
      case 1:
        return <DataImportOptions onSelectMethod={handleSelectImportMethod} />;
      case 2.1:
        return <DocumentUploadScanner onComplete={handleDocumentUploadComplete} onBack={() => setCurrentStep(1)} />;
      case 3:
        return <EmployerRegistrationForm formData={formData} onDataChange={handleDataChange} currentStep={1} onContinue={handleContinue} onBack={() => setCurrentStep(1)} onComplete={handleComplete} />;
      case 4:
        return <EmployerRegistrationForm formData={formData} onDataChange={handleDataChange} currentStep={2} onContinue={handleContinue} onBack={handleBack} onComplete={handleComplete} />;
      case 5:
        return <EmployerRegistrationForm formData={formData} onDataChange={handleDataChange} currentStep={3} onContinue={handleContinue} onBack={handleBack} onComplete={handleComplete} />;
      case 6:
        return <PayrollRegistrationForm onComplete={handleComplete} />;
      default:
        return null;
    }
  };
  const getStepTitle = () => {
    switch (currentStep) {
      case 0:
        return 'Requirements Overview';
      case 1:
        return 'Import Data';
      case 2.1:
        return 'Document Upload';
      case 3:
      case 4:
        return 'Company Information';
      case 5:
        return 'Review & Submit';
      case 6:
        return 'Employee Registration';
      default:
        return '';
    }
  };
  return <div className="bg-white rounded-lg shadow-md border border-gray-200 w-full">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-gray-200">
        <h2 className="text-xl font-semibold text-gray-900">
          Employer Registration
        </h2>
        <button onClick={onClose} className="text-gray-400 hover:text-gray-500">
          <XIcon className="h-6 w-6" />
        </button>
      </div>
      {/* Progress Steps - Only show for steps after overview */}
      {currentStep > 0 && <div className="px-4 py-3 bg-gray-50">
          <div className="flex items-center justify-between max-w-2xl mx-auto">
            <div className={`flex items-center ${currentStep >= 1 ? 'text-blue-600' : 'text-gray-400'}`}>
              <span className={`h-8 w-8 flex items-center justify-center rounded-full border-2 ${currentStep >= 1 ? 'border-blue-600' : 'border-gray-300'}`}>
                1
              </span>
              <span className="ml-2 text-sm font-medium">Import Data</span>
            </div>
            <div className={`flex items-center ${currentStep >= 3 ? 'text-blue-600' : 'text-gray-400'}`}>
              <span className={`h-8 w-8 flex items-center justify-center rounded-full border-2 ${currentStep >= 3 ? 'border-blue-600' : 'border-gray-300'}`}>
                2
              </span>
              <span className="ml-2 text-sm font-medium">Company Details</span>
            </div>
            <div className={`flex items-center ${currentStep >= 5 ? 'text-blue-600' : 'text-gray-400'}`}>
              <span className={`h-8 w-8 flex items-center justify-center rounded-full border-2 ${currentStep >= 5 ? 'border-blue-600' : 'border-gray-300'}`}>
                3
              </span>
              <span className="ml-2 text-sm font-medium">Review & Submit</span>
            </div>
            <div className={`flex items-center ${currentStep >= 6 ? 'text-blue-600' : 'text-gray-400'}`}>
              <span className={`h-8 w-8 flex items-center justify-center rounded-full border-2 ${currentStep >= 6 ? 'border-blue-600' : 'border-gray-300'}`}>
                4
              </span>
              <span className="ml-2 text-sm font-medium">Employee Setup</span>
            </div>
          </div>
        </div>}
      {/* Form Content */}
      <div className="p-6">{renderStepContent()}</div>
    </div>;
}