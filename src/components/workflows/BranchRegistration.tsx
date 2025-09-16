import React, { useEffect, useState } from 'react';
import { XIcon, CheckCircleIcon, AlertTriangleIcon } from 'lucide-react';
import { RequirementsOverview } from './branch/RequirementsOverview';
import { DataImportOptions } from './branch/DataImportOptions';
import { DocumentUploadScanner } from './branch/DocumentUploadScanner';
import { DocumentScanResults } from './branch/DocumentScanResults';
import { Form6NonResidentEntity } from './branch/Form6NonResidentEntity';
import { Form9BranchRegistration } from './branch/Form9BranchRegistration';
import { Form11Officials } from './branch/Form11Officials';
import { Form13Representatives } from './branch/Form13Representatives';
import { DocumentVerification } from './branch/DocumentVerification';
import { PaymentSection } from './registration/PaymentSection';
import { TermsAndConfirmation } from './branch/TermsAndConfirmation';
interface BranchRegistrationProps {
  onClose: () => void;
  skipRequirements?: boolean;
}
interface ImportedPerson {
  id: string;
  name: string;
  dateOfBirth?: string;
  placeOfBirth?: string;
  countryOfBirth?: string;
  nationality?: string;
  address?: string;
  role?: string;
  passportNumber?: string;
  email?: string;
  phone?: string;
  thumbnailUrl?: string;
  confidenceScore?: number;
}
interface ImportedCompany {
  name?: string;
  registrationNumber?: string;
  legalForm?: string;
  registeredAddress?: string;
  principalBusinessAddress?: string;
  directors?: ImportedPerson[];
  shareholders?: Array<ImportedPerson & {
    percentage?: string;
  }>;
  taxNumber?: string;
  incorporationDate?: string;
  country?: string;
}
export function BranchRegistration({
  onClose,
  skipRequirements = false
}: BranchRegistrationProps) {
  const [currentStep, setCurrentStep] = useState(skipRequirements ? 2 : 1);
  const [isEligible, setIsEligible] = useState<boolean | null>(null);
  const [importMethod, setImportMethod] = useState<'base' | 'upload' | null>(null);
  const [importedCompanyData, setImportedCompanyData] = useState<ImportedCompany | null>(null);
  const [importedPeople, setImportedPeople] = useState<ImportedPerson[]>([]);
  const [extractedPeople, setExtractedPeople] = useState<ImportedPerson[]>([]);
  const [formData, setFormData] = useState({
    companyName: '',
    legalForm: '',
    foreignRegistrationNumber: '',
    foreignRegisterName: '',
    foreignRegisteringInstitution: '',
    foreignRegistrationLocation: '',
    formallyRegisteredAbroad: true,
    formallyRegisteredSince: '',
    isEEACompany: true,
    principalPlaceOfBusiness: '',
    countryOfIncorporation: '',
    registeredOffice: '',
    issuedCapital: '',
    issuedCapitalCurrency: 'EUR',
    taxVatNumber: '',
    tradeNames: [''],
    activities: '',
    mainActivity: '',
    retailSalesToConsumers: false,
    retailSalesMethod: '',
    wholesaleToCompanies: false,
    importActivities: false,
    exportActivities: false,
    nonMailingIndicator: false,
    temporaryWorkforceProvision: false,
    branchStartingDate: '',
    previousBranchName: '',
    previousBranchOffice: '',
    previousBranchKvkNumber: '',
    branchContinuationDate: '',
    originalBranchStartingDate: '',
    branchAddress: '',
    branchCity: '',
    branchPostalCode: '',
    separatePostalAddress: '',
    contactPhone: '',
    contactEmail: '',
    contactWebsite: '',
    messageBoxName: '',
    fullTimeEmployees: '0',
    partTimeEmployees: '0'
  });
  const [officials, setOfficials] = useState<Array<ImportedPerson & {
    role: string;
    authorities: string;
    appointmentDate: string;
    restrictions: string;
  }>>([]);
  const [representatives, setRepresentatives] = useState<Array<ImportedPerson & {
    authorisationDetails: string;
    authorisationDate: string;
    authorisationScope: string;
  }>>([]);
  useEffect(() => {
    setIsEligible(true);
  }, []);
  const handleNextStep = () => {
    setCurrentStep(currentStep + 1);
  };
  const handlePreviousStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };
  const handleImportMethod = (method: 'base' | 'upload') => {
    setImportMethod(method);
    if (method === 'base') {
      setImportedCompanyData({
        name: 'Tech Innovations Ltd',
        registrationNumber: 'U72200MH2022PTC123456',
        legalForm: 'Private Limited Company',
        registeredAddress: 'World Trade Center, Tower B, Bengaluru, Karnataka 560055, India',
        principalBusinessAddress: 'World Trade Center, Tower B, Bengaluru, Karnataka 560055, India',
        taxNumber: 'AABCT1234A',
        incorporationDate: '2022-01-15',
        country: 'India',
        directors: [{
          id: '1',
          name: 'John Smith',
          dateOfBirth: '1980-05-15',
          placeOfBirth: 'London',
          countryOfBirth: 'United Kingdom',
          nationality: 'British',
          address: '123 Main St, London, UK',
          role: 'Director',
          passportNumber: 'GB123456789',
          email: 'john.smith@example.com',
          phone: '+44 7123 456789',
          thumbnailUrl: 'https://randomuser.me/api/portraits/men/32.jpg'
        }, {
          id: '2',
          name: 'Maria Rodriguez',
          dateOfBirth: '1985-08-23',
          placeOfBirth: 'Madrid',
          countryOfBirth: 'Spain',
          nationality: 'Spanish',
          address: '456 Calle Principal, Madrid, Spain',
          role: 'Director',
          passportNumber: 'ES987654321',
          email: 'maria.rodriguez@example.com',
          phone: '+34 612 345 678',
          thumbnailUrl: 'https://randomuser.me/api/portraits/women/44.jpg'
        }],
        shareholders: [{
          id: '1',
          name: 'John Smith',
          dateOfBirth: '1980-05-15',
          nationality: 'British',
          address: '123 Main St, London, UK',
          percentage: '60',
          thumbnailUrl: 'https://randomuser.me/api/portraits/men/32.jpg'
        }, {
          id: '3',
          name: 'Global Ventures LLC',
          address: '789 Investment Ave, New York, USA',
          percentage: '40'
        }]
      });
      setImportedPeople([{
        id: '1',
        name: 'John Smith',
        dateOfBirth: '1980-05-15',
        placeOfBirth: 'London',
        countryOfBirth: 'United Kingdom',
        nationality: 'British',
        address: '123 Main St, London, UK',
        role: 'Director',
        passportNumber: 'GB123456789',
        email: 'john.smith@example.com',
        phone: '+44 7123 456789',
        thumbnailUrl: 'https://randomuser.me/api/portraits/men/32.jpg'
      }, {
        id: '2',
        name: 'Maria Rodriguez',
        dateOfBirth: '1985-08-23',
        placeOfBirth: 'Madrid',
        countryOfBirth: 'Spain',
        nationality: 'Spanish',
        address: '456 Calle Principal, Madrid, Spain',
        role: 'Director',
        passportNumber: 'ES987654321',
        email: 'maria.rodriguez@example.com',
        phone: '+34 612 345 678',
        thumbnailUrl: 'https://randomuser.me/api/portraits/women/44.jpg'
      }]);
      setFormData(prev => ({
        ...prev,
        companyName: 'Tech Innovations Ltd',
        legalForm: 'Private Limited Company',
        foreignRegistrationNumber: 'U72200MH2022PTC123456',
        foreignRegisterName: 'Registrar of Companies',
        foreignRegisteringInstitution: 'Ministry of Corporate Affairs',
        foreignRegistrationLocation: 'Mumbai, India',
        countryOfIncorporation: 'India',
        registeredOffice: 'World Trade Center, Tower B, Bengaluru, Karnataka 560055, India',
        principalPlaceOfBusiness: 'World Trade Center, Tower B, Bengaluru, Karnataka 560055, India',
        taxVatNumber: 'AABCT1234A',
        tradeNames: ['Tech Innovations'],
        activities: 'Software development and IT consulting services',
        mainActivity: 'Software development'
      }));
      setOfficials([{
        id: '1',
        name: 'John Smith',
        dateOfBirth: '1980-05-15',
        placeOfBirth: 'London',
        countryOfBirth: 'United Kingdom',
        nationality: 'British',
        address: '123 Main St, London, UK',
        role: 'Director',
        authorities: 'Full authority to represent the company',
        appointmentDate: '2022-01-15',
        restrictions: 'None',
        passportNumber: 'GB123456789',
        email: 'john.smith@example.com',
        phone: '+44 7123 456789',
        thumbnailUrl: 'https://randomuser.me/api/portraits/men/32.jpg'
      }, {
        id: '2',
        name: 'Maria Rodriguez',
        dateOfBirth: '1985-08-23',
        placeOfBirth: 'Madrid',
        countryOfBirth: 'Spain',
        nationality: 'Spanish',
        address: '456 Calle Principal, Madrid, Spain',
        role: 'Director',
        authorities: 'Full authority to represent the company',
        appointmentDate: '2022-01-15',
        restrictions: 'None',
        passportNumber: 'ES987654321',
        email: 'maria.rodriguez@example.com',
        phone: '+34 612 345 678',
        thumbnailUrl: 'https://randomuser.me/api/portraits/women/44.jpg'
      }]);
      setCurrentStep(4);
    } else if (method === 'upload') {
      setCurrentStep(2.1);
    }
  };
  const handleDocumentUploadComplete = () => {
    setCurrentStep(2.2);
    setExtractedPeople([{
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
  };
  const handleScanResultsComplete = (people: ImportedPerson[]) => {
    setImportedPeople(people);
    const prefillOfficials = people.map(person => ({
      ...person,
      role: 'Director',
      authorities: 'Full authority to represent the company',
      appointmentDate: new Date().toISOString().split('T')[0],
      restrictions: 'None'
    }));
    setOfficials(prefillOfficials);
    setCurrentStep(4);
  };
  const handleFormDataChange = (newData: Partial<typeof formData>) => {
    setFormData(prev => ({
      ...prev,
      ...newData
    }));
  };
  const handleOfficialsChange = (newOfficials: typeof officials) => {
    setOfficials(newOfficials);
  };
  const handleRepresentativesChange = (newRepresentatives: typeof representatives) => {
    setRepresentatives(newRepresentatives);
  };
  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return <RequirementsOverview onContinue={() => setCurrentStep(2)} />;
      case 2:
        return <DataImportOptions onSelectMethod={handleImportMethod} />;
      case 2.1:
        return <DocumentUploadScanner onComplete={handleDocumentUploadComplete} onBack={() => setCurrentStep(2)} />;
      case 2.2:
        return <DocumentScanResults extractedPeople={extractedPeople} onComplete={handleScanResultsComplete} onBack={() => setCurrentStep(2.1)} />;
      case 4:
        return <Form6NonResidentEntity formData={formData} onDataChange={handleFormDataChange} onContinue={handleNextStep} onBack={handlePreviousStep} />;
      case 5:
        return <Form9BranchRegistration formData={formData} onDataChange={handleFormDataChange} onContinue={handleNextStep} onBack={handlePreviousStep} />;
      case 6:
        return <Form11Officials officials={officials} onOfficialsChange={handleOfficialsChange} onContinue={handleNextStep} onBack={handlePreviousStep} />;
      case 7:
        return <Form13Representatives representatives={representatives} onRepresentativesChange={handleRepresentativesChange} onContinue={handleNextStep} onBack={handlePreviousStep} officials={officials} />;
      case 8:
        return <DocumentVerification onContinue={handleNextStep} onBack={handlePreviousStep} formData={formData} officials={officials} representatives={representatives} />;
      case 9:
        return <PaymentSection amount={2499} onComplete={handleNextStep} />;
      case 10:
        return <TermsAndConfirmation onComplete={() => {
          console.log('Branch registration complete');
          onClose();
        }} onBack={handlePreviousStep} />;
      default:
        return null;
    }
  };
  return <div className="min-h-screen bg-gray-50">
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-6">
            <h2 className="text-2xl font-semibold text-gray-900">
              Branch Registration - Netherlands
            </h2>
            <button onClick={onClose} className="text-gray-400 hover:text-gray-500">
              <XIcon className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
      {isEligible === false && <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="bg-yellow-50 border border-yellow-200 rounded-md p-4">
            <div className="flex">
              <AlertTriangleIcon className="h-5 w-5 text-yellow-400" />
              <div className="ml-3">
                <h3 className="text-sm font-medium text-yellow-800">
                  eBranch Package Required
                </h3>
                <p className="mt-2 text-sm text-yellow-700">
                  To proceed with Branch registration, you need an active
                  eBranch package. Please activate the package first.
                </p>
                <button className="mt-4 bg-yellow-100 text-yellow-800 px-4 py-2 rounded-md text-sm font-medium hover:bg-yellow-200">
                  Activate eBranch Package
                </button>
              </div>
            </div>
          </div>
        </div>}
      {isEligible && <>
          <div className="bg-white border-b border-gray-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
              <div className="flex items-center justify-between max-w-5xl mx-auto">
                {currentStep > 1 && <div className="flex items-center">
                    <span className="h-8 w-8 flex items-center justify-center rounded-full border-2 border-current">
                      1
                    </span>
                    <span className="ml-2 text-sm font-medium">
                      Requirements
                    </span>
                  </div>}
                <div className={`flex-1 h-0.5 mx-4 ${currentStep >= 2 ? 'bg-blue-600' : 'bg-gray-200'}`} />
                <div className={`flex items-center ${currentStep >= 2 ? 'text-blue-600' : 'text-gray-400'}`}>
                  <span className="h-8 w-8 flex items-center justify-center rounded-full border-2 border-current">
                    2
                  </span>
                  <span className="ml-2 text-sm font-medium">Import Data</span>
                </div>
                <div className={`flex-1 h-0.5 mx-4 ${currentStep >= 4 ? 'bg-blue-600' : 'bg-gray-200'}`} />
                <div className={`flex items-center ${currentStep >= 4 ? 'text-blue-600' : 'text-gray-400'}`}>
                  <span className="h-8 w-8 flex items-center justify-center rounded-full border-2 border-current">
                    3
                  </span>
                  <span className="ml-2 text-sm font-medium">Company Info</span>
                </div>
                <div className={`flex-1 h-0.5 mx-4 ${currentStep >= 6 ? 'bg-blue-600' : 'bg-gray-200'}`} />
                <div className={`flex items-center ${currentStep >= 6 ? 'text-blue-600' : 'text-gray-400'}`}>
                  <span className="h-8 w-8 flex items-center justify-center rounded-full border-2 border-current">
                    4
                  </span>
                  <span className="ml-2 text-sm font-medium">Officials</span>
                </div>
                <div className={`flex-1 h-0.5 mx-4 ${currentStep >= 8 ? 'bg-blue-600' : 'bg-gray-200'}`} />
                <div className={`flex items-center ${currentStep >= 8 ? 'text-blue-600' : 'text-gray-400'}`}>
                  <span className="h-8 w-8 flex items-center justify-center rounded-full border-2 border-current">
                    5
                  </span>
                  <span className="ml-2 text-sm font-medium">Verification</span>
                </div>
                <div className={`flex-1 h-0.5 mx-4 ${currentStep >= 9 ? 'bg-blue-600' : 'bg-gray-200'}`} />
                <div className={`flex items-center ${currentStep >= 9 ? 'text-blue-600' : 'text-gray-400'}`}>
                  <span className="h-8 w-8 flex items-center justify-center rounded-full border-2 border-current">
                    6
                  </span>
                  <span className="ml-2 text-sm font-medium">Payment</span>
                </div>
              </div>
            </div>
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="max-w-5xl mx-auto">{renderStepContent()}</div>
          </div>
        </>}
    </div>;
}