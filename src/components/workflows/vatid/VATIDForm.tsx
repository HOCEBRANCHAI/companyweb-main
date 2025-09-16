import React from 'react';
import { BuildingIcon, GlobeIcon, ArrowLeftIcon, EuroIcon, PhoneIcon, CalendarIcon, CheckIcon, FileTextIcon } from 'lucide-react';
interface VATIDFormProps {
  formData: any;
  onDataChange: (data: any) => void;
  currentStep: number;
  onContinue: () => void;
  onBack: () => void;
  onComplete: () => void;
}
export function VATIDForm({
  formData,
  onDataChange,
  currentStep,
  onContinue,
  onBack,
  onComplete
}: VATIDFormProps) {
  const handleInputChange = (field: string, value: any) => {
    onDataChange({
      [field]: value
    });
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (currentStep < 3) {
      onContinue();
    } else {
      onComplete();
    }
  };
  const renderStep1 = () => <>
      <div className="bg-blue-50 border border-blue-100 rounded-lg p-4 mb-6">
        <p className="text-sm text-blue-700">
          Please provide information about your company for VAT ID registration
          in {formData.country}.
        </p>
      </div>
      {/* Company Information */}
      <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6">
        <div className="flex items-center mb-4">
          <BuildingIcon className="h-5 w-5 text-blue-600 mr-2" />
          <h3 className="text-lg font-medium text-gray-900">
            Company Information
          </h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Company Name <span className="text-red-500">*</span>
            </label>
            <input type="text" value={formData.companyName} onChange={e => handleInputChange('companyName', e.target.value)} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" required />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Country for VAT Registration{' '}
              <span className="text-red-500">*</span>
            </label>
            <select value={formData.country} onChange={e => handleInputChange('country', e.target.value)} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" required>
              <option value="Germany">Germany</option>
              <option value="Netherlands">Netherlands</option>
              <option value="Belgium">Belgium</option>
              <option value="France">France</option>
              <option value="Spain">Spain</option>
              <option value="Italy">Italy</option>
            </select>
          </div>
        </div>
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700">
            Company Address <span className="text-red-500">*</span>
          </label>
          <input type="text" value={formData.companyAddress} onChange={e => handleInputChange('companyAddress', e.target.value)} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" required placeholder="Full address including postal code and city" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Business Type <span className="text-red-500">*</span>
            </label>
            <select value={formData.businessType} onChange={e => handleInputChange('businessType', e.target.value)} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" required>
              <option value="">Select business type</option>
              <option value="sole_proprietor">Sole Proprietor</option>
              <option value="partnership">Partnership</option>
              <option value="limited_company">Limited Company</option>
              <option value="corporation">Corporation</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Estimated Annual Turnover <span className="text-red-500">*</span>
            </label>
            <select value={formData.estimatedTurnover} onChange={e => handleInputChange('estimatedTurnover', e.target.value)} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" required>
              <option value="">Select estimated turnover</option>
              <option value="under_50k">Under €50,000</option>
              <option value="50k_100k">€50,000 - €100,000</option>
              <option value="100k_500k">€100,000 - €500,000</option>
              <option value="500k_1m">€500,000 - €1 million</option>
              <option value="over_1m">Over €1 million</option>
            </select>
          </div>
        </div>
      </div>
      {/* Contact Information */}
      <div className="bg-white border border-gray-200 rounded-lg p-6">
        <div className="flex items-center mb-4">
          <PhoneIcon className="h-5 w-5 text-blue-600 mr-2" />
          <h3 className="text-lg font-medium text-gray-900">
            Contact Information
          </h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Contact Person <span className="text-red-500">*</span>
            </label>
            <input type="text" value={formData.contactPerson} onChange={e => handleInputChange('contactPerson', e.target.value)} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" required />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email <span className="text-red-500">*</span>
            </label>
            <input type="email" value={formData.contactEmail} onChange={e => handleInputChange('contactEmail', e.target.value)} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" required />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Phone <span className="text-red-500">*</span>
            </label>
            <input type="tel" value={formData.contactPhone} onChange={e => handleInputChange('contactPhone', e.target.value)} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" required />
          </div>
        </div>
      </div>
    </>;
  const renderStep2 = () => <>
      <div className="bg-blue-50 border border-blue-100 rounded-lg p-4 mb-6">
        <p className="text-sm text-blue-700">
          Please provide VAT-specific details required for registration in{' '}
          {formData.country}.
        </p>
      </div>
      {/* VAT Details */}
      <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6">
        <div className="flex items-center mb-4">
          <EuroIcon className="h-5 w-5 text-blue-600 mr-2" />
          <h3 className="text-lg font-medium text-gray-900">
            VAT Registration Details
          </h3>
        </div>
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700">
            Business Activity Description{' '}
            <span className="text-red-500">*</span>
          </label>
          <textarea value={formData.businessActivity} onChange={e => handleInputChange('businessActivity', e.target.value)} rows={3} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" required placeholder="Detailed description of your business activities" />
        </div>
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700">
            VAT Registration Start Date <span className="text-red-500">*</span>
          </label>
          <div className="mt-1 relative">
            <input type="date" value={formData.startDate} onChange={e => handleInputChange('startDate', e.target.value)} className="block w-full border border-gray-300 rounded-md shadow-sm p-2" required />
            <CalendarIcon className="absolute right-2 top-2.5 h-5 w-5 text-gray-400" />
          </div>
        </div>
        <div className="mb-6">
          <div className="flex items-center mb-2">
            <input type="checkbox" id="hasExistingVAT" checked={formData.hasExistingVAT} onChange={e => handleInputChange('hasExistingVAT', e.target.checked)} className="h-4 w-4 text-blue-600 border-gray-300 rounded" />
            <label htmlFor="hasExistingVAT" className="ml-2 block text-sm text-gray-700">
              Already registered for VAT in another EU country
            </label>
          </div>
          {formData.hasExistingVAT && <input type="text" value={formData.existingVATNumber} onChange={e => handleInputChange('existingVATNumber', e.target.value)} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" placeholder="Existing VAT number" />}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <div className="flex items-center">
              <input type="checkbox" id="importExportActivities" checked={formData.importExportActivities} onChange={e => handleInputChange('importExportActivities', e.target.checked)} className="h-4 w-4 text-blue-600 border-gray-300 rounded" />
              <label htmlFor="importExportActivities" className="ml-2 block text-sm text-gray-700">
                Import/Export Activities
              </label>
            </div>
          </div>
          <div>
            <div className="flex items-center">
              <input type="checkbox" id="eCommerceActivities" checked={formData.eCommerceActivities} onChange={e => handleInputChange('eCommerceActivities', e.target.checked)} className="h-4 w-4 text-blue-600 border-gray-300 rounded" />
              <label htmlFor="eCommerceActivities" className="ml-2 block text-sm text-gray-700">
                E-Commerce Activities
              </label>
            </div>
          </div>
        </div>
      </div>
      {/* Fiscal Representative */}
      <div className="bg-white border border-gray-200 rounded-lg p-6">
        <div className="flex items-center mb-4">
          <GlobeIcon className="h-5 w-5 text-blue-600 mr-2" />
          <h3 className="text-lg font-medium text-gray-900">
            Fiscal Representation
          </h3>
        </div>
        <div className="mb-6">
          <div className="flex items-center mb-2">
            <input type="checkbox" id="fiscalRepresentative" checked={formData.fiscalRepresentative} onChange={e => handleInputChange('fiscalRepresentative', e.target.checked)} className="h-4 w-4 text-blue-600 border-gray-300 rounded" />
            <label htmlFor="fiscalRepresentative" className="ml-2 block text-sm text-gray-700">
              Appoint a fiscal representative in {formData.country}
            </label>
          </div>
          {formData.fiscalRepresentative && <div className="bg-gray-50 p-4 rounded-md">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Representative Name <span className="text-red-500">*</span>
                  </label>
                  <input type="text" value={formData.fiscalRepName} onChange={e => handleInputChange('fiscalRepName', e.target.value)} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" required={formData.fiscalRepresentative} />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Representative VAT Number{' '}
                    <span className="text-red-500">*</span>
                  </label>
                  <input type="text" value={formData.fiscalRepVATNumber} onChange={e => handleInputChange('fiscalRepVATNumber', e.target.value)} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" required={formData.fiscalRepresentative} />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Representative Address <span className="text-red-500">*</span>
                </label>
                <input type="text" value={formData.fiscalRepAddress} onChange={e => handleInputChange('fiscalRepAddress', e.target.value)} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" required={formData.fiscalRepresentative} />
              </div>
            </div>}
        </div>
      </div>
    </>;
  const renderStep3 = () => <>
      <div className="bg-blue-50 border border-blue-100 rounded-lg p-4 mb-6">
        <p className="text-sm text-blue-700">
          Please review your information before submitting your VAT ID
          registration application.
        </p>
      </div>
      {/* Review Information */}
      <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6">
        <div className="flex items-center mb-4">
          <FileTextIcon className="h-5 w-5 text-blue-600 mr-2" />
          <h3 className="text-lg font-medium text-gray-900">
            Review Information
          </h3>
        </div>
        <div className="space-y-6">
          <div>
            <h4 className="text-sm font-medium text-gray-700 mb-2">
              Company Details
            </h4>
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-600">Company Name</p>
                  <p className="font-medium">{formData.companyName}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Country</p>
                  <p className="font-medium">{formData.country}</p>
                </div>
                <div className="col-span-2">
                  <p className="text-sm text-gray-600">Address</p>
                  <p className="font-medium">{formData.companyAddress}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Business Type</p>
                  <p className="font-medium">
                    {formData.businessType?.replace('_', ' ')}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Estimated Turnover</p>
                  <p className="font-medium">
                    {formData.estimatedTurnover?.replace('_', ' - ')}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h4 className="text-sm font-medium text-gray-700 mb-2">
              VAT Registration Details
            </h4>
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-gray-600">Business Activity</p>
                  <p className="font-medium">{formData.businessActivity}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Start Date</p>
                  <p className="font-medium">{formData.startDate}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Special Activities</p>
                  <ul className="list-disc list-inside">
                    {formData.importExportActivities && <li className="font-medium">Import/Export Activities</li>}
                    {formData.eCommerceActivities && <li className="font-medium">E-Commerce Activities</li>}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h4 className="text-sm font-medium text-gray-700 mb-2">
              Contact Information
            </h4>
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <p className="text-sm text-gray-600">Contact Person</p>
                  <p className="font-medium">{formData.contactPerson}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Email</p>
                  <p className="font-medium">{formData.contactEmail}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Phone</p>
                  <p className="font-medium">{formData.contactPhone}</p>
                </div>
              </div>
            </div>
          </div>
          {formData.fiscalRepresentative && <div>
              <h4 className="text-sm font-medium text-gray-700 mb-2">
                Fiscal Representative
              </h4>
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-gray-600">Representative Name</p>
                    <p className="font-medium">{formData.fiscalRepName}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">VAT Number</p>
                    <p className="font-medium">{formData.fiscalRepVATNumber}</p>
                  </div>
                  <div className="col-span-2">
                    <p className="text-sm text-gray-600">Address</p>
                    <p className="font-medium">{formData.fiscalRepAddress}</p>
                  </div>
                </div>
              </div>
            </div>}
        </div>
      </div>
      {/* Terms and Conditions */}
      <div className="bg-white border border-gray-200 rounded-lg p-6">
        <div className="flex items-start mb-4">
          <div className="flex items-center h-5">
            <input id="acceptTerms" type="checkbox" checked={formData.acceptTerms} onChange={e => handleInputChange('acceptTerms', e.target.checked)} className="h-4 w-4 text-blue-600 border-gray-300 rounded" required />
          </div>
          <label htmlFor="acceptTerms" className="ml-2 block text-sm text-gray-700">
            I confirm that all information provided is accurate and complete. I
            authorize the submission of this VAT registration application.
          </label>
        </div>
      </div>
    </>;
  return <form onSubmit={handleSubmit} className="space-y-8">
      {currentStep === 1 && renderStep1()}
      {currentStep === 2 && renderStep2()}
      {currentStep === 3 && renderStep3()}
      <div className="flex justify-between pt-6">
        {currentStep > 1 ? <button type="button" onClick={onBack} className="px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 text-sm font-medium flex items-center">
            <ArrowLeftIcon className="mr-2 h-4 w-4" />
            Back
          </button> : <div></div>}
        <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 text-sm font-medium" disabled={currentStep === 3 && !formData.acceptTerms}>
          {currentStep < 3 ? 'Continue' : 'Submit Application'}
        </button>
      </div>
    </form>;
}