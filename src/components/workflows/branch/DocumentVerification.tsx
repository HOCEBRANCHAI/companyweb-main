import React from 'react';
import { CheckCircleIcon, FileTextIcon, ArrowLeftIcon, BuildingIcon, UserIcon, ClipboardCheckIcon, FileIcon, DownloadIcon } from 'lucide-react';
interface DocumentVerificationProps {
  onContinue: () => void;
  onBack: () => void;
  formData: any;
  officials: any[];
  representatives: any[];
}
export function DocumentVerification({
  onContinue,
  onBack,
  formData,
  officials,
  representatives
}: DocumentVerificationProps) {
  const generatedForms = [{
    id: 'form6',
    name: 'Form 6',
    description: 'Registration of a non-resident legal entity',
    status: 'generated',
    pageCount: 3
  }, {
    id: 'form9',
    name: 'Form 9',
    description: 'Registration of a branch office',
    status: 'generated',
    pageCount: 2
  }, {
    id: 'form11',
    name: 'Form 11',
    description: `Registration of officials (${officials.length})`,
    status: 'generated',
    pageCount: officials.length * 2
  }];
  if (representatives.length > 0) {
    generatedForms.push({
      id: 'form13',
      name: 'Form 13',
      description: `Registration of representatives (${representatives.length})`,
      status: 'generated',
      pageCount: representatives.length * 2
    });
  }
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onContinue();
  };
  return <form onSubmit={handleSubmit} className="space-y-8">
      <div className="bg-blue-50 border border-blue-100 rounded-lg p-4">
        <p className="text-sm text-blue-700">
          We've generated the required KvK registration forms based on the
          information you provided. Please review the summary below and proceed
          to payment when ready.
        </p>
      </div>
      <div className="bg-white border border-gray-200 rounded-lg p-6">
        <div className="flex items-center mb-6">
          <FileTextIcon className="h-5 w-5 text-blue-600 mr-2" />
          <h3 className="text-lg font-medium text-gray-900">Generated Forms</h3>
        </div>
        <div className="space-y-4">
          {generatedForms.map(form => <div key={form.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
              <div className="flex items-center">
                <FileIcon className="h-10 w-10 text-blue-600 mr-3" />
                <div>
                  <h4 className="text-sm font-medium text-gray-900">
                    {form.name}
                  </h4>
                  <p className="text-xs text-gray-500">{form.description}</p>
                  <p className="text-xs text-gray-500">
                    {form.pageCount} pages
                  </p>
                </div>
              </div>
              <div className="flex items-center">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 mr-3">
                  <CheckCircleIcon className="h-3 w-3 mr-1" />
                  Generated
                </span>
                <button type="button" className="text-blue-600 hover:text-blue-800">
                  <DownloadIcon className="h-5 w-5" />
                </button>
              </div>
            </div>)}
        </div>
      </div>
      <div className="bg-white border border-gray-200 rounded-lg p-6">
        <div className="flex items-center mb-6">
          <ClipboardCheckIcon className="h-5 w-5 text-blue-600 mr-2" />
          <h3 className="text-lg font-medium text-gray-900">
            Information Summary
          </h3>
        </div>
        <div className="space-y-6">
          <div>
            <h4 className="text-sm font-medium text-gray-900 mb-2 flex items-center">
              <BuildingIcon className="h-4 w-4 text-gray-500 mr-1" />
              Company Information
            </h4>
            <div className="bg-gray-50 p-4 rounded-md">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2 text-sm">
                <div>
                  <span className="text-gray-500">Company Name:</span>{' '}
                  <span className="text-gray-900">{formData.companyName}</span>
                </div>
                <div>
                  <span className="text-gray-500">Legal Form:</span>{' '}
                  <span className="text-gray-900">{formData.legalForm}</span>
                </div>
                <div>
                  <span className="text-gray-500">Registration Number:</span>{' '}
                  <span className="text-gray-900">
                    {formData.foreignRegistrationNumber}
                  </span>
                </div>
                <div>
                  <span className="text-gray-500">Country:</span>{' '}
                  <span className="text-gray-900">
                    {formData.countryOfIncorporation}
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h4 className="text-sm font-medium text-gray-900 mb-2 flex items-center">
              <BuildingIcon className="h-4 w-4 text-gray-500 mr-1" />
              Branch Information
            </h4>
            <div className="bg-gray-50 p-4 rounded-md">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2 text-sm">
                <div>
                  <span className="text-gray-500">Starting Date:</span>{' '}
                  <span className="text-gray-900">
                    {formData.branchStartingDate}
                  </span>
                </div>
                <div>
                  <span className="text-gray-500">Address:</span>{' '}
                  <span className="text-gray-900">
                    {formData.branchAddress}
                  </span>
                </div>
                <div>
                  <span className="text-gray-500">City:</span>{' '}
                  <span className="text-gray-900">{formData.branchCity}</span>
                </div>
                <div>
                  <span className="text-gray-500">Postal Code:</span>{' '}
                  <span className="text-gray-900">
                    {formData.branchPostalCode}
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h4 className="text-sm font-medium text-gray-900 mb-2 flex items-center">
              <UserIcon className="h-4 w-4 text-gray-500 mr-1" />
              Officials ({officials.length})
            </h4>
            <div className="bg-gray-50 p-4 rounded-md">
              <div className="space-y-4">
                {officials.map((official, index) => <div key={official.id} className="text-sm">
                    <div className="font-medium text-gray-900 mb-1">
                      {index + 1}. {official.name} ({official.role})
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-1 pl-4">
                      <div>
                        <span className="text-gray-500">Date of Birth:</span>{' '}
                        <span className="text-gray-900">
                          {official.dateOfBirth}
                        </span>
                      </div>
                      <div>
                        <span className="text-gray-500">Nationality:</span>{' '}
                        <span className="text-gray-900">
                          {official.nationality}
                        </span>
                      </div>
                      <div>
                        <span className="text-gray-500">Appointment Date:</span>{' '}
                        <span className="text-gray-900">
                          {official.appointmentDate}
                        </span>
                      </div>
                      <div>
                        <span className="text-gray-500">Authorities:</span>{' '}
                        <span className="text-gray-900">
                          {official.authorities}
                        </span>
                      </div>
                    </div>
                  </div>)}
              </div>
            </div>
          </div>
          {representatives.length > 0 && <div>
              <h4 className="text-sm font-medium text-gray-900 mb-2 flex items-center">
                <UserIcon className="h-4 w-4 text-gray-500 mr-1" />
                Representatives ({representatives.length})
              </h4>
              <div className="bg-gray-50 p-4 rounded-md">
                <div className="space-y-4">
                  {representatives.map((rep, index) => <div key={rep.id} className="text-sm">
                      <div className="font-medium text-gray-900 mb-1">
                        {index + 1}. {rep.name}
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-1 pl-4">
                        <div>
                          <span className="text-gray-500">Date of Birth:</span>{' '}
                          <span className="text-gray-900">
                            {rep.dateOfBirth}
                          </span>
                        </div>
                        <div>
                          <span className="text-gray-500">Nationality:</span>{' '}
                          <span className="text-gray-900">
                            {rep.nationality}
                          </span>
                        </div>
                        <div>
                          <span className="text-gray-500">
                            Authorization Date:
                          </span>{' '}
                          <span className="text-gray-900">
                            {rep.authorisationDate}
                          </span>
                        </div>
                        <div>
                          <span className="text-gray-500">Scope:</span>{' '}
                          <span className="text-gray-900">
                            {rep.authorisationScope}
                          </span>
                        </div>
                      </div>
                    </div>)}
                </div>
              </div>
            </div>}
        </div>
      </div>
      <div className="flex justify-between pt-6">
        <button type="button" onClick={onBack} className="px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 text-sm font-medium flex items-center">
          <ArrowLeftIcon className="mr-2 h-4 w-4" />
          Back
        </button>
        <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 text-sm font-medium">
          Proceed to Payment
        </button>
      </div>
    </form>;
}