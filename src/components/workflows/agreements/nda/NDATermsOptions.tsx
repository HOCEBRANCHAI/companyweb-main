import React from 'react';
import { CalendarIcon, FileTextIcon, GlobeIcon, ScaleIcon, ArrowLeftIcon, ArrowRightIcon, PlusIcon, XIcon } from 'lucide-react';
interface NDATermsOptionsProps {
  formData: any;
  onDataChange: (data: any) => void;
  onContinue: () => void;
  onBack: () => void;
}
export function NDATermsOptions({
  formData,
  onDataChange,
  onContinue,
  onBack
}: NDATermsOptionsProps) {
  const handleInputChange = (field: string, value: any) => {
    onDataChange({
      [field]: value
    });
  };
  const handleConfidentialInfoChange = (item: string, checked: boolean) => {
    let updatedInfo = [...formData.confidentialInformation];
    if (checked) {
      updatedInfo.push(item);
    } else {
      updatedInfo = updatedInfo.filter(info => info !== item);
    }
    handleInputChange('confidentialInformation', updatedInfo);
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onContinue();
  };
  return <form onSubmit={handleSubmit} className="space-y-8">
      {/* Basic Terms */}
      <div className="bg-white border border-gray-200 rounded-lg p-6">
        <div className="flex items-center mb-4">
          <FileTextIcon className="h-5 w-5 text-blue-600 mr-2" />
          <h3 className="text-lg font-medium text-gray-900">Basic Terms</h3>
        </div>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Purpose of Disclosure <span className="text-red-500">*</span>
            </label>
            <textarea value={formData.purpose} onChange={e => handleInputChange('purpose', e.target.value)} rows={3} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" required placeholder="Describe the purpose for sharing confidential information" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Effective Date <span className="text-red-500">*</span>
              </label>
              <div className="relative mt-1">
                <input type="date" value={formData.effectiveDate} onChange={e => handleInputChange('effectiveDate', e.target.value)} className="block w-full border border-gray-300 rounded-md shadow-sm p-2" required />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Termination Period <span className="text-red-500">*</span>
              </label>
              <select value={formData.terminationPeriod} onChange={e => handleInputChange('terminationPeriod', e.target.value)} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" required>
                <option value="1 year">1 year</option>
                <option value="2 years">2 years</option>
                <option value="3 years">3 years</option>
                <option value="5 years">5 years</option>
                <option value="perpetual">Perpetual (no expiration)</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      {/* Confidential Information */}
      <div className="bg-white border border-gray-200 rounded-lg p-6">
        <div className="flex items-center mb-4">
          <ScaleIcon className="h-5 w-5 text-blue-600 mr-2" />
          <h3 className="text-lg font-medium text-gray-900">
            Confidential Information
          </h3>
        </div>
        <p className="text-sm text-gray-500 mb-4">
          Select the types of confidential information that will be protected
          under this agreement.
        </p>
        <div className="space-y-3">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className="flex items-center">
              <input type="checkbox" id="trade-secrets" checked={formData.confidentialInformation.includes('trade secrets')} onChange={e => handleConfidentialInfoChange('trade secrets', e.target.checked)} className="h-4 w-4 text-blue-600 border-gray-300 rounded" />
              <label htmlFor="trade-secrets" className="ml-2 block text-sm text-gray-700">
                Trade secrets
              </label>
            </div>
            <div className="flex items-center">
              <input type="checkbox" id="business-plans" checked={formData.confidentialInformation.includes('business plans')} onChange={e => handleConfidentialInfoChange('business plans', e.target.checked)} className="h-4 w-4 text-blue-600 border-gray-300 rounded" />
              <label htmlFor="business-plans" className="ml-2 block text-sm text-gray-700">
                Business plans
              </label>
            </div>
            <div className="flex items-center">
              <input type="checkbox" id="financial-info" checked={formData.confidentialInformation.includes('financial information')} onChange={e => handleConfidentialInfoChange('financial information', e.target.checked)} className="h-4 w-4 text-blue-600 border-gray-300 rounded" />
              <label htmlFor="financial-info" className="ml-2 block text-sm text-gray-700">
                Financial information
              </label>
            </div>
            <div className="flex items-center">
              <input type="checkbox" id="customer-lists" checked={formData.confidentialInformation.includes('customer lists')} onChange={e => handleConfidentialInfoChange('customer lists', e.target.checked)} className="h-4 w-4 text-blue-600 border-gray-300 rounded" />
              <label htmlFor="customer-lists" className="ml-2 block text-sm text-gray-700">
                Customer lists
              </label>
            </div>
            <div className="flex items-center">
              <input type="checkbox" id="product-designs" checked={formData.confidentialInformation.includes('product designs')} onChange={e => handleConfidentialInfoChange('product designs', e.target.checked)} className="h-4 w-4 text-blue-600 border-gray-300 rounded" />
              <label htmlFor="product-designs" className="ml-2 block text-sm text-gray-700">
                Product designs
              </label>
            </div>
            <div className="flex items-center">
              <input type="checkbox" id="marketing-strategies" checked={formData.confidentialInformation.includes('marketing strategies')} onChange={e => handleConfidentialInfoChange('marketing strategies', e.target.checked)} className="h-4 w-4 text-blue-600 border-gray-300 rounded" />
              <label htmlFor="marketing-strategies" className="ml-2 block text-sm text-gray-700">
                Marketing strategies
              </label>
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mt-4">
              Additional Confidential Information
            </label>
            <textarea value={formData.customConfidentialInformation} onChange={e => handleInputChange('customConfidentialInformation', e.target.value)} rows={2} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" placeholder="Specify any additional types of confidential information" />
          </div>
        </div>
      </div>
      {/* Legal Provisions */}
      <div className="bg-white border border-gray-200 rounded-lg p-6">
        <div className="flex items-center mb-4">
          <GlobeIcon className="h-5 w-5 text-blue-600 mr-2" />
          <h3 className="text-lg font-medium text-gray-900">
            Legal Provisions
          </h3>
        </div>
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Governing Law <span className="text-red-500">*</span>
              </label>
              <select value={formData.governingLaw} onChange={e => handleInputChange('governingLaw', e.target.value)} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" required>
                <option value="Netherlands">Netherlands</option>
                <option value="Belgium">Belgium</option>
                <option value="Germany">Germany</option>
                <option value="United Kingdom">United Kingdom</option>
                <option value="France">France</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Dispute Resolution <span className="text-red-500">*</span>
              </label>
              <select value={formData.disputeResolution} onChange={e => handleInputChange('disputeResolution', e.target.value)} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" required>
                <option value="courts">Courts</option>
                <option value="arbitration">Arbitration</option>
                <option value="mediation">Mediation first, then courts</option>
              </select>
            </div>
          </div>
          {formData.disputeResolution === 'arbitration' && <div>
              <label className="block text-sm font-medium text-gray-700">
                Arbitration Location <span className="text-red-500">*</span>
              </label>
              <input type="text" value={formData.arbitrationLocation} onChange={e => handleInputChange('arbitrationLocation', e.target.value)} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" required={formData.disputeResolution === 'arbitration'} placeholder="e.g., Amsterdam" />
            </div>}
        </div>
      </div>
      {/* Additional Provisions */}
      <div className="bg-white border border-gray-200 rounded-lg p-6">
        <div className="flex items-center mb-4">
          <FileTextIcon className="h-5 w-5 text-blue-600 mr-2" />
          <h3 className="text-lg font-medium text-gray-900">
            Additional Provisions
          </h3>
        </div>
        <div className="space-y-4">
          <div className="flex items-start">
            <div className="flex items-center h-5 mt-1">
              <input id="non-solicitation" type="checkbox" checked={formData.includeNonSolicitation} onChange={e => handleInputChange('includeNonSolicitation', e.target.checked)} className="h-4 w-4 text-blue-600 border-gray-300 rounded" />
            </div>
            <label htmlFor="non-solicitation" className="ml-2 block text-sm text-gray-700">
              Include non-solicitation clause (prevents parties from soliciting
              each other's employees or clients)
            </label>
          </div>
          {formData.includeNonSolicitation && <div>
              <label className="block text-sm font-medium text-gray-700">
                Non-solicitation Period <span className="text-red-500">*</span>
              </label>
              <select value={formData.nonSolicitationPeriod} onChange={e => handleInputChange('nonSolicitationPeriod', e.target.value)} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" required={formData.includeNonSolicitation}>
                <option value="6 months">6 months</option>
                <option value="1 year">1 year</option>
                <option value="2 years">2 years</option>
              </select>
            </div>}
          <div className="flex items-start mt-4">
            <div className="flex items-center h-5 mt-1">
              <input id="non-compete" type="checkbox" checked={formData.includeNonCompete} onChange={e => handleInputChange('includeNonCompete', e.target.checked)} className="h-4 w-4 text-blue-600 border-gray-300 rounded" />
            </div>
            <label htmlFor="non-compete" className="ml-2 block text-sm text-gray-700">
              Include non-compete clause (restricts competitive activities)
            </label>
          </div>
          {formData.includeNonCompete && <div>
              <label className="block text-sm font-medium text-gray-700">
                Non-compete Period <span className="text-red-500">*</span>
              </label>
              <select value={formData.nonCompetePeriod} onChange={e => handleInputChange('nonCompetePeriod', e.target.value)} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" required={formData.includeNonCompete}>
                <option value="6 months">6 months</option>
                <option value="1 year">1 year</option>
                <option value="2 years">2 years</option>
              </select>
            </div>}
        </div>
      </div>
      <div className="flex justify-between pt-6">
        <button type="button" onClick={onBack} className="px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 text-sm font-medium flex items-center">
          <ArrowLeftIcon className="mr-2 h-4 w-4" />
          Back
        </button>
        <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 text-sm font-medium flex items-center">
          Continue
          <ArrowRightIcon className="ml-2 h-4 w-4" />
        </button>
      </div>
    </form>;
}