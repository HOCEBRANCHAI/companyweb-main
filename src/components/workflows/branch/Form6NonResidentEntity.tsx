import React from 'react';
import { BuildingIcon, GlobeIcon, ArrowLeftIcon, PlusIcon, XIcon } from 'lucide-react';
interface Form6NonResidentEntityProps {
  formData: any;
  onDataChange: (data: any) => void;
  onContinue: () => void;
  onBack: () => void;
}
export function Form6NonResidentEntity({
  formData,
  onDataChange,
  onContinue,
  onBack
}: Form6NonResidentEntityProps) {
  const handleInputChange = (field: string, value: any) => {
    onDataChange({
      [field]: value
    });
  };
  const handleTradeNameAdd = () => {
    onDataChange({
      tradeNames: [...formData.tradeNames, '']
    });
  };
  const handleTradeNameChange = (index: number, value: string) => {
    const updatedTradeNames = [...formData.tradeNames];
    updatedTradeNames[index] = value;
    onDataChange({
      tradeNames: updatedTradeNames
    });
  };
  const handleTradeNameRemove = (index: number) => {
    const updatedTradeNames = [...formData.tradeNames];
    updatedTradeNames.splice(index, 1);
    onDataChange({
      tradeNames: updatedTradeNames
    });
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onContinue();
  };
  return <form onSubmit={handleSubmit} className="space-y-8">
      <div className="bg-blue-50 border border-blue-100 rounded-lg p-4">
        <p className="text-sm text-blue-700">
          This section collects information for Form 6: Registration of a
          non-resident legal entity.
        </p>
      </div>
      {/* Legal Entity Information */}
      <div className="bg-white border border-gray-200 rounded-lg p-6">
        <div className="flex items-center mb-4">
          <BuildingIcon className="h-5 w-5 text-blue-600 mr-2" />
          <h3 className="text-lg font-medium text-gray-900">
            Legal Entity Information
          </h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Company Name <span className="text-red-500">*</span>
            </label>
            <input type="text" value={formData.companyName} onChange={e => handleInputChange('companyName', e.target.value)} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" required placeholder="Legal entity name as in articles of association" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Legal Form <span className="text-red-500">*</span>
            </label>
            <input type="text" value={formData.legalForm} onChange={e => handleInputChange('legalForm', e.target.value)} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" required placeholder="e.g., Private Limited Company, GmbH, etc." />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Foreign Registration Number{' '}
              <span className="text-red-500">*</span>
            </label>
            <input type="text" value={formData.foreignRegistrationNumber} onChange={e => handleInputChange('foreignRegistrationNumber', e.target.value)} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" required placeholder="Registration number in home country" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Tax/VAT Number
            </label>
            <input type="text" value={formData.taxVatNumber} onChange={e => handleInputChange('taxVatNumber', e.target.value)} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" placeholder="If already known to Tax Authorities" />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Foreign Register Name <span className="text-red-500">*</span>
            </label>
            <input type="text" value={formData.foreignRegisterName} onChange={e => handleInputChange('foreignRegisterName', e.target.value)} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" required placeholder="Name of the register in home country" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Foreign Registering Institution{' '}
              <span className="text-red-500">*</span>
            </label>
            <input type="text" value={formData.foreignRegisteringInstitution} onChange={e => handleInputChange('foreignRegisteringInstitution', e.target.value)} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" required placeholder="Name of the institution in home country" />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Foreign Registration Location{' '}
              <span className="text-red-500">*</span>
            </label>
            <input type="text" value={formData.foreignRegistrationLocation} onChange={e => handleInputChange('foreignRegistrationLocation', e.target.value)} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" required placeholder="Place and country of registering institution" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Formally Registered Since <span className="text-red-500">*</span>
            </label>
            <input type="date" value={formData.formallyRegisteredSince} onChange={e => handleInputChange('formallyRegisteredSince', e.target.value)} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" required />
          </div>
        </div>
        <div className="mb-6">
          <div className="flex items-center">
            <input type="checkbox" id="isEEACompany" checked={formData.isEEACompany} onChange={e => handleInputChange('isEEACompany', e.target.checked)} className="h-4 w-4 text-blue-600 border-gray-300 rounded" />
            <label htmlFor="isEEACompany" className="ml-2 block text-sm text-gray-700">
              This company is established within the European Economic Area
              (EEA)
            </label>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Country of Incorporation <span className="text-red-500">*</span>
            </label>
            <input type="text" value={formData.countryOfIncorporation} onChange={e => handleInputChange('countryOfIncorporation', e.target.value)} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" required placeholder="Where the legal entity was incorporated" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Registered Office <span className="text-red-500">*</span>
            </label>
            <input type="text" value={formData.registeredOffice} onChange={e => handleInputChange('registeredOffice', e.target.value)} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" required placeholder="Statutory seat" />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Principal Place of Business{' '}
              <span className="text-red-500">*</span>
            </label>
            <input type="text" value={formData.principalPlaceOfBusiness} onChange={e => handleInputChange('principalPlaceOfBusiness', e.target.value)} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" required placeholder="Main business location" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Issued Capital <span className="text-red-500">*</span>
            </label>
            <div className="mt-1 flex rounded-md shadow-sm">
              <select value={formData.issuedCapitalCurrency} onChange={e => handleInputChange('issuedCapitalCurrency', e.target.value)} className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                <option value="EUR">EUR</option>
                <option value="USD">USD</option>
                <option value="GBP">GBP</option>
                <option value="INR">INR</option>
              </select>
              <input type="text" value={formData.issuedCapital} onChange={e => handleInputChange('issuedCapital', e.target.value)} className="flex-1 block w-full rounded-none rounded-r-md border-gray-300 p-2 border" required placeholder="Amount" />
            </div>
          </div>
        </div>
      </div>
      {/* Business Activities */}
      <div className="bg-white border border-gray-200 rounded-lg p-6">
        <div className="flex items-center mb-4">
          <GlobeIcon className="h-5 w-5 text-blue-600 mr-2" />
          <h3 className="text-lg font-medium text-gray-900">
            Business Activities
          </h3>
        </div>
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Trade Name(s) <span className="text-red-500">*</span>
          </label>
          {formData.tradeNames.map((name: string, index: number) => <div key={index} className="flex items-center mb-2">
              <input type="text" value={name} onChange={e => handleTradeNameChange(index, e.target.value)} className="block w-full border border-gray-300 rounded-md shadow-sm p-2" required={index === 0} placeholder={`Trade name ${index + 1}`} />
              {index > 0 && <button type="button" onClick={() => handleTradeNameRemove(index)} className="ml-2 text-red-600 hover:text-red-800">
                  <XIcon className="h-5 w-5" />
                </button>}
            </div>)}
          <button type="button" onClick={handleTradeNameAdd} className="mt-2 flex items-center text-sm text-blue-600 hover:text-blue-800">
            <PlusIcon className="h-4 w-4 mr-1" />
            Add Another Trade Name
          </button>
        </div>
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700">
            Activities Description <span className="text-red-500">*</span>
          </label>
          <textarea value={formData.activities} onChange={e => handleInputChange('activities', e.target.value)} rows={3} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" required placeholder="Detailed description of branch activities" />
        </div>
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700">
            Main Activity <span className="text-red-500">*</span>
          </label>
          <input type="text" value={formData.mainActivity} onChange={e => handleInputChange('mainActivity', e.target.value)} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" required placeholder="Primary business activity" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <div className="flex items-center mb-2">
              <input type="checkbox" id="retailSalesToConsumers" checked={formData.retailSalesToConsumers} onChange={e => handleInputChange('retailSalesToConsumers', e.target.checked)} className="h-4 w-4 text-blue-600 border-gray-300 rounded" />
              <label htmlFor="retailSalesToConsumers" className="ml-2 block text-sm text-gray-700">
                Retail Sales to Consumers
              </label>
            </div>
            {formData.retailSalesToConsumers && <select value={formData.retailSalesMethod} onChange={e => handleInputChange('retailSalesMethod', e.target.value)} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" required>
                <option value="">Select sales method</option>
                <option value="shop">Shop</option>
                <option value="market">Market</option>
                <option value="street">Street Trading</option>
                <option value="online">Online</option>
                <option value="other">Other</option>
              </select>}
          </div>
          <div>
            <div className="flex items-center">
              <input type="checkbox" id="wholesaleToCompanies" checked={formData.wholesaleToCompanies} onChange={e => handleInputChange('wholesaleToCompanies', e.target.checked)} className="h-4 w-4 text-blue-600 border-gray-300 rounded" />
              <label htmlFor="wholesaleToCompanies" className="ml-2 block text-sm text-gray-700">
                Wholesale to Other Companies
              </label>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <div className="flex items-center">
              <input type="checkbox" id="importActivities" checked={formData.importActivities} onChange={e => handleInputChange('importActivities', e.target.checked)} className="h-4 w-4 text-blue-600 border-gray-300 rounded" />
              <label htmlFor="importActivities" className="ml-2 block text-sm text-gray-700">
                Import Activities
              </label>
            </div>
          </div>
          <div>
            <div className="flex items-center">
              <input type="checkbox" id="exportActivities" checked={formData.exportActivities} onChange={e => handleInputChange('exportActivities', e.target.checked)} className="h-4 w-4 text-blue-600 border-gray-300 rounded" />
              <label htmlFor="exportActivities" className="ml-2 block text-sm text-gray-700">
                Export Activities
              </label>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <div className="flex items-center">
              <input type="checkbox" id="nonMailingIndicator" checked={formData.nonMailingIndicator} onChange={e => handleInputChange('nonMailingIndicator', e.target.checked)} className="h-4 w-4 text-blue-600 border-gray-300 rounded" />
              <label htmlFor="nonMailingIndicator" className="ml-2 block text-sm text-gray-700">
                Do not send unsolicited mail
              </label>
            </div>
          </div>
          <div>
            <div className="flex items-center">
              <input type="checkbox" id="temporaryWorkforceProvision" checked={formData.temporaryWorkforceProvision} onChange={e => handleInputChange('temporaryWorkforceProvision', e.target.checked)} className="h-4 w-4 text-blue-600 border-gray-300 rounded" />
              <label htmlFor="temporaryWorkforceProvision" className="ml-2 block text-sm text-gray-700">
                Company provides temporary workforce
              </label>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between pt-6">
        <button type="button" onClick={onBack} className="px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 text-sm font-medium flex items-center">
          <ArrowLeftIcon className="mr-2 h-4 w-4" />
          Back
        </button>
        <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 text-sm font-medium">
          Continue
        </button>
      </div>
    </form>;
}