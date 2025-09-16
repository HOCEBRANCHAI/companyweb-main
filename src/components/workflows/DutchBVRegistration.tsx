import React, { useEffect, useState } from 'react';
import { AlertTriangleIcon, CheckCircleIcon, XIcon } from 'lucide-react';
import { RegistrationForm } from './registration/RegistrationForm';
import { PaymentSection } from './registration/PaymentSection';
import { TermsAndSignature } from './registration/TermsAndSignature';
import { RequirementsOverview } from './registration/RequirementsOverview';
import { DocumentApproval } from './registration/DocumentApproval';
import { ImportedDocumentsReview } from './registration/ImportedDocumentsReview';
import { DocumentUploadScreen } from './registration/DocumentUploadScreen';
import { DocumentScanResults } from './registration/DocumentScanResults';
interface PersonData {
  id: string;
  name: string;
  nationality: string;
  dateOfBirth: string;
  passportNumber: string;
  expiryDate: string;
  thumbnailUrl: string;
  confidenceScore?: number;
  roles: {
    director: boolean;
    shareholder: boolean;
  };
  shareholding?: {
    shares?: string;
    percentage?: string;
  };
}
type ImportMethod = 'target' | 'base' | 'upload' | null;
interface DutchBVRegistrationProps {
  onClose: () => void;
}
export function DutchBVRegistration({
  onClose
}: DutchBVRegistrationProps) {
  const [currentStep, setCurrentStep] = useState(1);
  const [isEligible, setIsEligible] = useState<boolean | null>(null);
  const [importedPeople, setImportedPeople] = useState<PersonData[]>([]);
  const [extractedPeople, setExtractedPeople] = useState<PersonData[]>([]);
  const [importMethod, setImportMethod] = useState<ImportMethod>(null);
  const checkEligibility = () => {
    setIsEligible(true);
  };
  useEffect(() => {
    checkEligibility();
  }, []);
  const handleSelectImportMethod = (method: ImportMethod) => {
    setImportMethod(method);
    if (method === 'upload') {
      setCurrentStep(1.1); // Document upload screen
    } else {
      setCurrentStep(2);
      if (method === 'target') {
        setImportedPeople([{
          id: '1',
          name: 'John Smith',
          nationality: 'British',
          dateOfBirth: '1980-05-15',
          passportNumber: 'GB123456789',
          expiryDate: '2030-05-14',
          thumbnailUrl: 'https://randomuser.me/api/portraits/men/32.jpg',
          roles: {
            director: false,
            shareholder: false
          }
        }, {
          id: '2',
          name: 'Maria Rodriguez',
          nationality: 'Spanish',
          dateOfBirth: '1985-08-23',
          passportNumber: 'ES987654321',
          expiryDate: '2029-08-22',
          thumbnailUrl: 'https://randomuser.me/api/portraits/women/44.jpg',
          roles: {
            director: false,
            shareholder: false
          }
        }]);
      } else if (method === 'base') {
        setImportedPeople([{
          id: '3',
          name: 'Akira Tanaka',
          nationality: 'Japanese',
          dateOfBirth: '1978-11-07',
          passportNumber: 'JP567891234',
          expiryDate: '2028-11-06',
          thumbnailUrl: 'https://randomuser.me/api/portraits/men/72.jpg',
          roles: {
            director: false,
            shareholder: false
          }
        }, {
          id: '4',
          name: 'Sarah Johnson',
          nationality: 'American',
          dateOfBirth: '1982-03-12',
          passportNumber: 'US789012345',
          expiryDate: '2027-03-11',
          thumbnailUrl: 'https://randomuser.me/api/portraits/women/28.jpg',
          roles: {
            director: false,
            shareholder: false
          }
        }]);
      }
    }
  };
  const handleDocumentUploadComplete = () => {
    setCurrentStep(1.2);
    setExtractedPeople([{
      id: '5',
      name: 'David Wilson',
      nationality: 'British',
      dateOfBirth: '1975-09-18',
      passportNumber: 'GB987123456',
      expiryDate: '2028-09-17',
      thumbnailUrl: 'https://randomuser.me/api/portraits/men/45.jpg',
      confidenceScore: 95,
      roles: {
        director: false,
        shareholder: false
      }
    }, {
      id: '6',
      name: 'Elena Petrova',
      nationality: 'Russian',
      dateOfBirth: '1983-07-22',
      passportNumber: 'RU123789456',
      expiryDate: '2029-07-21',
      thumbnailUrl: 'https://randomuser.me/api/portraits/women/67.jpg',
      confidenceScore: 88,
      roles: {
        director: false,
        shareholder: false
      }
    }, {
      id: '7',
      name: 'Carlos Mendez',
      nationality: 'Mexican',
      dateOfBirth: '1979-12-05',
      passportNumber: 'MX456123789',
      expiryDate: '2026-12-04',
      thumbnailUrl: 'https://randomuser.me/api/portraits/men/58.jpg',
      confidenceScore: 75,
      roles: {
        director: false,
        shareholder: false
      }
    }]);
  };
  const handleScanResultsComplete = (people: PersonData[]) => {
    setImportedPeople(people);
    setCurrentStep(3);
  };
  const handleDocumentImport = (people: PersonData[]) => {
    setImportedPeople(people);
    setCurrentStep(3);
  };
  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return <RequirementsOverview onContinue={() => setCurrentStep(2)} onSelectImportMethod={handleSelectImportMethod} />;
      case 1.1:
        return <DocumentUploadScreen onComplete={handleDocumentUploadComplete} onBack={() => {
          setImportMethod(null);
          setCurrentStep(1);
        }} />;
      case 1.2:
        return <DocumentScanResults extractedPeople={extractedPeople} onComplete={handleScanResultsComplete} onBack={() => setCurrentStep(1.1)} />;
      case 2:
        return <ImportedDocumentsReview onComplete={handleDocumentImport} onBack={() => {
          setImportMethod(null);
          setCurrentStep(1);
        }} people={importedPeople} />;
      case 3:
        return <RegistrationForm onComplete={() => setCurrentStep(4)} importedPeople={importedPeople} />;
      case 4:
        return <DocumentApproval onComplete={() => setCurrentStep(5)} />;
      case 5:
        return <PaymentSection amount={3999} onComplete={() => setCurrentStep(6)} />;
      case 6:
        return <TermsAndSignature onComplete={() => {
          console.log('Registration complete');
          onClose();
        }} />;
      default:
        return null;
    }
  };
  return <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-xl max-w-4xl w-full m-4">
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <h2 className="text-xl font-semibold text-gray-900">
            Dutch BV Registration
          </h2>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-500">
            <XIcon className="h-6 w-6" />
          </button>
        </div>
        {isEligible === false && <div className="p-6">
            <div className="bg-yellow-50 border border-yellow-200 rounded-md p-4">
              <div className="flex">
                <AlertTriangleIcon className="h-5 w-5 text-yellow-400" />
                <div className="ml-3">
                  <h3 className="text-sm font-medium text-yellow-800">
                    eBranch Package Required
                  </h3>
                  <p className="mt-2 text-sm text-yellow-700">
                    To proceed with Dutch BV registration, you need an active
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
            <div className="px-4 py-3 bg-gray-50">
              <div className="flex items-center justify-between max-w-3xl mx-auto">
                <div className={`flex items-center ${currentStep >= 1 ? 'text-blue-600' : 'text-gray-400'}`}>
                  <span className="h-8 w-8 flex items-center justify-center rounded-full border-2 border-current">
                    1
                  </span>
                  <span className="ml-2 text-sm font-medium">Requirements</span>
                </div>
                <div className={`flex-1 h-0.5 mx-4 ${currentStep >= 2 ? 'bg-blue-600' : 'bg-gray-200'}`} />
                <div className={`flex items-center ${currentStep >= 2 ? 'text-blue-600' : 'text-gray-400'}`}>
                  <span className="h-8 w-8 flex items-center justify-center rounded-full border-2 border-current">
                    2
                  </span>
                  <span className="ml-2 text-sm font-medium">
                    People & Roles
                  </span>
                </div>
                <div className={`flex-1 h-0.5 mx-4 ${currentStep >= 3 ? 'bg-blue-600' : 'bg-gray-200'}`} />
                <div className={`flex items-center ${currentStep >= 3 ? 'text-blue-600' : 'text-gray-400'}`}>
                  <span className="h-8 w-8 flex items-center justify-center rounded-full border-2 border-current">
                    3
                  </span>
                  <span className="ml-2 text-sm font-medium">
                    Registration Details
                  </span>
                </div>
                <div className={`flex-1 h-0.5 mx-4 ${currentStep >= 4 ? 'bg-blue-600' : 'bg-gray-200'}`} />
                <div className={`flex items-center ${currentStep >= 4 ? 'text-blue-600' : 'text-gray-400'}`}>
                  <span className="h-8 w-8 flex items-center justify-center rounded-full border-2 border-current">
                    4
                  </span>
                  <span className="ml-2 text-sm font-medium">Documents</span>
                </div>
                <div className={`flex-1 h-0.5 mx-4 ${currentStep >= 5 ? 'bg-blue-600' : 'bg-gray-200'}`} />
                <div className={`flex items-center ${currentStep >= 5 ? 'text-blue-600' : 'text-gray-400'}`}>
                  <span className="h-8 w-8 flex items-center justify-center rounded-full border-2 border-current">
                    5
                  </span>
                  <span className="ml-2 text-sm font-medium">Payment</span>
                </div>
                <div className={`flex-1 h-0.5 mx-4 ${currentStep >= 6 ? 'bg-blue-600' : 'bg-gray-200'}`} />
                <div className={`flex items-center ${currentStep >= 6 ? 'text-blue-600' : 'text-gray-400'}`}>
                  <span className="h-8 w-8 flex items-center justify-center rounded-full border-2 border-current">
                    6
                  </span>
                  <span className="ml-2 text-sm font-medium">
                    Review & Sign
                  </span>
                </div>
              </div>
            </div>
            <div className="p-6">{renderStepContent()}</div>
          </>}
      </div>
    </div>;
}