import React, { useState } from 'react';
import { XIcon, BuildingIcon, DownloadIcon, FileTextIcon, MapPinIcon, ScanIcon, UploadIcon, UserIcon, ArrowRightIcon } from 'lucide-react';
import { VATIDForm } from './VATIDForm';
import { VATIDRequirementsOverview } from './VATIDRequirementsOverview';
import { DataImportOptions } from './DataImportOptions';
import { DocumentUploadScanner } from './DocumentUploadScanner';
import { DocumentScanResults } from './DocumentScanResults';
import { CompanyInformation } from './CompanyInformation';
interface VATIDRegistrationProps {
  onClose: () => void;
}
export function VATIDRegistration({
  onClose
}: VATIDRegistrationProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [importMethod, setImportMethod] = useState<'base' | 'upload' | 'target' | null>(null);
  const [extractedPeople, setExtractedPeople] = useState([{
    id: '1',
    name: 'John Smith',
    dateOfBirth: '1980-05-15',
    placeOfBirth: 'London',
    countryOfBirth: 'United Kingdom',
    nationality: 'British',
    address: '123 Main St, London, UK',
    passportNumber: 'GB123456789',
    thumbnailUrl: 'https://randomuser.me/api/portraits/men/32.jpg',
    confidenceScore: 95
  }, {
    id: '2',
    name: 'Maria Rodriguez',
    dateOfBirth: '1985-08-23',
    placeOfBirth: 'Madrid',
    countryOfBirth: 'Spain',
    nationality: 'Spanish',
    address: '456 Calle Principal, Madrid, Spain',
    passportNumber: 'ES987654321',
    thumbnailUrl: 'https://randomuser.me/api/portraits/women/44.jpg',
    confidenceScore: 92
  }]);
  const [formData, setFormData] = useState({
    companyName: '',
    tradeName: '',
    companyAddress: '',
    country: 'Netherlands',
    businessActivity: '',
    businessType: '',
    legalForm: '',
    otherLegalFormSpecify: '',
    estimatedTurnover: '',
    contactPerson: '',
    contactEmail: '',
    contactPhone: '',
    fiscalRepresentative: false,
    fiscalRepName: '',
    fiscalRepAddress: '',
    fiscalRepVATNumber: '',
    hasExistingVAT: false,
    existingVATNumber: '',
    startDate: '',
    importExportActivities: false,
    eCommerceActivities: false,
    acceptTerms: false,
    vatRefund: false,
    vatReturn: false,
    oneStopShop: false,
    corporationTax: false,
    payrollTaxes: false,
    transferTax: false,
    dividendTaxRefund: false,
    countryOfEstablishment: '',
    hasVatId: null,
    vatIdNumber: '',
    establishmentDate: '',
    registeredCoC: null,
    registeredAddress: '',
    registeredPostalCode: '',
    registeredCity: '',
    registeredCountry: '',
    phoneNumber: '',
    website: ''
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
    console.log('VAT ID Registration complete:', formData);
    onClose();
  };
  const handleSelectImportMethod = (method: 'base' | 'upload' | 'target') => {
    setImportMethod(method);
    if (method === 'upload') {
      setCurrentStep(2.1); // Go to document upload scanner
    } else {
      // For base or target, prefill the form data and go to company information
      if (method === 'base') {
        setFormData({
          ...formData,
          companyName: 'Tech Innovations Ltd',
          tradeName: 'Tech Innovations',
          registeredAddress: 'World Trade Center, Tower B',
          registeredPostalCode: '560055',
          registeredCity: 'Bengaluru',
          registeredCountry: 'India',
          countryOfEstablishment: 'India',
          businessActivity: 'Software development and IT consulting services',
          contactPerson: 'John Smith',
          contactEmail: 'john.smith@example.com',
          contactPhone: '+44 7123 456789',
          website: 'www.techinnovations.com',
          legalForm: 'other',
          otherLegalFormSpecify: 'Private Limited Company',
          establishmentDate: '2022-01-15'
        });
      } else if (method === 'target') {
        setFormData({
          ...formData,
          companyName: 'Tech Innovations Netherlands B.V.',
          tradeName: 'Tech Innovations NL',
          registeredAddress: 'Prinses Beatrixlaan 582',
          registeredPostalCode: '2595 BM',
          registeredCity: 'The Hague',
          registeredCountry: 'Netherlands',
          countryOfEstablishment: 'Netherlands',
          businessActivity: 'Software development and IT consulting services',
          contactPerson: 'Maria Rodriguez',
          contactEmail: 'maria.rodriguez@example.com',
          contactPhone: '+31 6 12345678',
          website: 'www.techinnovations.nl',
          legalForm: 'other',
          otherLegalFormSpecify: 'B.V. (Private Limited)',
          establishmentDate: '2023-05-10'
        });
      }
      setCurrentStep(3); // Go to company information
    }
  };
  const handleDocumentUploadComplete = () => {
    setCurrentStep(2.2); // Go to document scan results
  };
  const handleScanResultsComplete = (people: any[]) => {
    // Use the extracted people data to prefill form
    if (people.length > 0) {
      const mainPerson = people[0];
      setFormData({
        ...formData,
        contactPerson: mainPerson.name
      });
    }
    setCurrentStep(3); // Go to company information
  };
  const renderStepContent = () => {
    switch (currentStep) {
      case 0:
        return <VATIDRequirementsOverview onContinue={handleContinue} />;
      case 1:
        return <DataImportOptions onSelectMethod={handleSelectImportMethod} />;
      case 2.1:
        return <DocumentUploadScanner onComplete={handleDocumentUploadComplete} onBack={() => setCurrentStep(1)} />;
      case 2.2:
        return <DocumentScanResults extractedPeople={extractedPeople} onComplete={handleScanResultsComplete} onBack={() => setCurrentStep(2.1)} />;
      case 3:
        return <CompanyInformation formData={formData} onDataChange={handleDataChange} onContinue={handleContinue} onBack={() => setCurrentStep(1)} />;
      case 4:
        return <VATIDForm formData={formData} onDataChange={handleDataChange} currentStep={1} onContinue={handleContinue} onBack={handleBack} onComplete={handleComplete} />;
      case 5:
        return <VATIDForm formData={formData} onDataChange={handleDataChange} currentStep={3} onContinue={handleContinue} onBack={handleBack} onComplete={handleComplete} />;
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
      case 2.2:
        return 'Document Upload';
      case 3:
        return 'Company Information';
      case 4:
        return 'VAT Details';
      case 5:
        return 'Review & Submit';
      default:
        return '';
    }
  };
  return <div className="min-h-screen bg-gray-50">
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-6">
            <h2 className="text-2xl font-semibold text-gray-900">
              VAT ID Registration
            </h2>
            <button onClick={onClose} className="text-gray-400 hover:text-gray-500">
              <XIcon className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
      {currentStep > 0 && <div className="bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex items-center justify-between max-w-4xl mx-auto">
              <div className={`flex items-center ${currentStep >= 1 ? 'text-blue-600' : 'text-gray-400'}`}>
                <span className={`h-8 w-8 flex items-center justify-center rounded-full border-2 ${currentStep >= 1 ? 'border-blue-600' : 'border-gray-300'}`}>
                  1
                </span>
                <span className="ml-2 text-sm font-medium">Import Data</span>
              </div>
              <div className={`flex-1 h-0.5 mx-4 ${currentStep >= 3 ? 'bg-blue-600' : 'bg-gray-200'}`} />
              <div className={`flex items-center ${currentStep >= 3 ? 'text-blue-600' : 'text-gray-400'}`}>
                <span className={`h-8 w-8 flex items-center justify-center rounded-full border-2 ${currentStep >= 3 ? 'border-blue-600' : 'border-gray-300'}`}>
                  2
                </span>
                <span className="ml-2 text-sm font-medium">Company Info</span>
              </div>
              <div className={`flex-1 h-0.5 mx-4 ${currentStep >= 4 ? 'bg-blue-600' : 'bg-gray-200'}`} />
              <div className={`flex items-center ${currentStep >= 4 ? 'text-blue-600' : 'text-gray-400'}`}>
                <span className={`h-8 w-8 flex items-center justify-center rounded-full border-2 ${currentStep >= 4 ? 'border-blue-600' : 'border-gray-300'}`}>
                  3
                </span>
                <span className="ml-2 text-sm font-medium">VAT Details</span>
              </div>
              <div className={`flex-1 h-0.5 mx-4 ${currentStep >= 5 ? 'bg-blue-600' : 'bg-gray-200'}`} />
              <div className={`flex items-center ${currentStep >= 5 ? 'text-blue-600' : 'text-gray-400'}`}>
                <span className={`h-8 w-8 flex items-center justify-center rounded-full border-2 ${currentStep >= 5 ? 'border-blue-600' : 'border-gray-300'}`}>
                  4
                </span>
                <span className="ml-2 text-sm font-medium">
                  Review & Submit
                </span>
              </div>
            </div>
          </div>
        </div>}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="max-w-3xl mx-auto">{renderStepContent()}</div>
      </div>
    </div>;
}