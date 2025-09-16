import React, { useState } from 'react';
import { BuildingIcon, GlobeIcon, ArrowLeftIcon, InfoIcon, FileTextIcon } from 'lucide-react';
interface CompanyInformationProps {
  formData: any;
  onDataChange: (data: any) => void;
  onContinue: () => void;
  onBack: () => void;
}
export function CompanyInformation({
  formData,
  onDataChange,
  onContinue,
  onBack
}: CompanyInformationProps) {
  const handleInputChange = (field: string, value: any) => {
    onDataChange({
      [field]: value
    });
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onContinue();
  };
  return <form onSubmit={handleSubmit} className="space-y-8">
      <div className="bg-blue-50 border border-blue-100 rounded-lg p-4 mb-6">
        <div className="flex">
          <InfoIcon className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
          <div className="ml-3">
            <h3 className="text-sm font-medium text-blue-800">
              VAT Registration Form
            </h3>
            <p className="text-sm text-blue-700 mt-1">
              Please answer the following questions to determine your VAT
              registration requirements. This information will be used to
              complete your official VAT registration with the Dutch Tax
              Administration.
            </p>
          </div>
        </div>
      </div>
      {/* Reason for Registration Section */}
      <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6">
        <div className="flex items-center mb-4">
          <FileTextIcon className="h-5 w-5 text-blue-600 mr-2" />
          <h3 className="text-lg font-medium text-gray-900">
            Reason for Registration
          </h3>
        </div>
        <div className="space-y-6">
          <div className="bg-gray-50 p-4 rounded-lg">
            <div className="flex items-start mb-4">
              <div className="flex items-center h-5 mt-1">
                <input id="vatRefund" type="checkbox" checked={formData.vatRefund} onChange={e => handleInputChange('vatRefund', e.target.checked)} className="h-4 w-4 text-blue-600 border-gray-300 rounded" />
              </div>
              <label htmlFor="vatRefund" className="ml-2 block text-sm text-gray-700">
                Are you established in a non-EU country and want to apply for a
                Dutch VAT refund?
              </label>
            </div>
            <div className="flex items-start mb-4">
              <div className="flex items-center h-5 mt-1">
                <input id="vatReturn" type="checkbox" checked={formData.vatReturn} onChange={e => handleInputChange('vatReturn', e.target.checked)} className="h-4 w-4 text-blue-600 border-gray-300 rounded" />
              </div>
              <label htmlFor="vatReturn" className="ml-2 block text-sm text-gray-700">
                Do you want to register for filing a VAT return?
              </label>
            </div>
            <div className="flex items-start mb-4">
              <div className="flex items-center h-5 mt-1">
                <input id="oneStopShop" type="checkbox" checked={formData.oneStopShop} onChange={e => handleInputChange('oneStopShop', e.target.checked)} className="h-4 w-4 text-blue-600 border-gray-300 rounded" />
              </div>
              <label htmlFor="oneStopShop" className="ml-2 block text-sm text-gray-700">
                Are you established in a non-EU country and want to register to
                use the One Stop Shop for VAT?
              </label>
            </div>
            <div className="flex items-start mb-4">
              <div className="flex items-center h-5 mt-1">
                <input id="corporationTax" type="checkbox" checked={formData.corporationTax} onChange={e => handleInputChange('corporationTax', e.target.checked)} className="h-4 w-4 text-blue-600 border-gray-300 rounded" />
              </div>
              <label htmlFor="corporationTax" className="ml-2 block text-sm text-gray-700">
                Do you want to register for corporation tax?
              </label>
            </div>
            <div className="flex items-start mb-4">
              <div className="flex items-center h-5 mt-1">
                <input id="payrollTaxes" type="checkbox" checked={formData.payrollTaxes} onChange={e => handleInputChange('payrollTaxes', e.target.checked)} className="h-4 w-4 text-blue-600 border-gray-300 rounded" />
              </div>
              <label htmlFor="payrollTaxes" className="ml-2 block text-sm text-gray-700">
                Do you want to register for payroll taxes?
              </label>
            </div>
            <div className="flex items-start mb-4">
              <div className="flex items-center h-5 mt-1">
                <input id="transferTax" type="checkbox" checked={formData.transferTax} onChange={e => handleInputChange('transferTax', e.target.checked)} className="h-4 w-4 text-blue-600 border-gray-300 rounded" />
              </div>
              <label htmlFor="transferTax" className="ml-2 block text-sm text-gray-700">
                Do you want to apply for the transfer tax?
              </label>
            </div>
            <div className="flex items-start">
              <div className="flex items-center h-5 mt-1">
                <input id="dividendTaxRefund" type="checkbox" checked={formData.dividendTaxRefund} onChange={e => handleInputChange('dividendTaxRefund', e.target.checked)} className="h-4 w-4 text-blue-600 border-gray-300 rounded" />
              </div>
              <label htmlFor="dividendTaxRefund" className="ml-2 block text-sm text-gray-700">
                Do you want to apply for the dividend tax refund?
              </label>
            </div>
          </div>
        </div>
      </div>
      {/* Company Details Section */}
      <div className="bg-white border border-gray-200 rounded-lg p-6">
        <div className="flex items-center mb-4">
          <BuildingIcon className="h-5 w-5 text-blue-600 mr-2" />
          <h3 className="text-lg font-medium text-gray-900">Company Details</h3>
        </div>
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Legal name of the company{' '}
                <span className="text-red-500">*</span>
              </label>
              <input type="text" value={formData.companyName} onChange={e => handleInputChange('companyName', e.target.value)} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" required />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Trade name (if different)
              </label>
              <input type="text" value={formData.tradeName} onChange={e => handleInputChange('tradeName', e.target.value)} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Legal form of the company <span className="text-red-500">*</span>
            </label>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex items-center">
                <input type="radio" id="soleProprietorship" name="legalForm" value="sole_proprietorship" checked={formData.legalForm === 'sole_proprietorship'} onChange={() => handleInputChange('legalForm', 'sole_proprietorship')} className="h-4 w-4 text-blue-600 border-gray-300" required />
                <label htmlFor="soleProprietorship" className="ml-2 block text-sm text-gray-700">
                  Sole proprietorship
                </label>
              </div>
              <div className="flex items-center">
                <input type="radio" id="association" name="legalForm" value="association" checked={formData.legalForm === 'association'} onChange={() => handleInputChange('legalForm', 'association')} className="h-4 w-4 text-blue-600 border-gray-300" />
                <label htmlFor="association" className="ml-2 block text-sm text-gray-700">
                  Association
                </label>
              </div>
              <div className="flex items-center">
                <input type="radio" id="otherLegalForm" name="legalForm" value="other" checked={formData.legalForm === 'other'} onChange={() => handleInputChange('legalForm', 'other')} className="h-4 w-4 text-blue-600 border-gray-300" />
                <label htmlFor="otherLegalForm" className="ml-2 block text-sm text-gray-700">
                  Other
                </label>
              </div>
            </div>
            {formData.legalForm === 'other' && <input type="text" value={formData.otherLegalFormSpecify || ''} onChange={e => handleInputChange('otherLegalFormSpecify', e.target.value)} className="mt-2 block w-full border border-gray-300 rounded-md shadow-sm p-2" placeholder="Please specify" required />}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Country of establishment <span className="text-red-500">*</span>
              </label>
              <input type="text" value={formData.countryOfEstablishment} onChange={e => handleInputChange('countryOfEstablishment', e.target.value)} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" required />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Do you have a VAT identification number in your own country?
              </label>
              <div className="mt-1 space-x-4">
                <div className="inline-flex items-center">
                  <input type="radio" id="hasVatIdYes" name="hasVatId" checked={formData.hasVatId === true} onChange={() => handleInputChange('hasVatId', true)} className="h-4 w-4 text-blue-600 border-gray-300" />
                  <label htmlFor="hasVatIdYes" className="ml-2 block text-sm text-gray-700">
                    Yes
                  </label>
                </div>
                <div className="inline-flex items-center">
                  <input type="radio" id="hasVatIdNo" name="hasVatId" checked={formData.hasVatId === false} onChange={() => handleInputChange('hasVatId', false)} className="h-4 w-4 text-blue-600 border-gray-300" />
                  <label htmlFor="hasVatIdNo" className="ml-2 block text-sm text-gray-700">
                    No
                  </label>
                </div>
              </div>
              {formData.hasVatId && <input type="text" value={formData.vatIdNumber || ''} onChange={e => handleInputChange('vatIdNumber', e.target.value)} className="mt-2 block w-full border border-gray-300 rounded-md shadow-sm p-2" placeholder="VAT ID Number" required={formData.hasVatId} />}
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Date of establishment <span className="text-red-500">*</span>
              </label>
              <input type="date" value={formData.establishmentDate} onChange={e => handleInputChange('establishmentDate', e.target.value)} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" required />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Are you registered with the Chamber of Commerce in your own
                country?
              </label>
              <div className="mt-1 space-x-4">
                <div className="inline-flex items-center">
                  <input type="radio" id="registeredCoCYes" name="registeredCoC" checked={formData.registeredCoC === true} onChange={() => handleInputChange('registeredCoC', true)} className="h-4 w-4 text-blue-600 border-gray-300" />
                  <label htmlFor="registeredCoCYes" className="ml-2 block text-sm text-gray-700">
                    Yes
                  </label>
                </div>
                <div className="inline-flex items-center">
                  <input type="radio" id="registeredCoCNo" name="registeredCoC" checked={formData.registeredCoC === false} onChange={() => handleInputChange('registeredCoC', false)} className="h-4 w-4 text-blue-600 border-gray-300" />
                  <label htmlFor="registeredCoCNo" className="ml-2 block text-sm text-gray-700">
                    No
                  </label>
                </div>
              </div>
              <p className="text-xs text-gray-500 mt-1">
                If yes, please include a copy of registration with your
                application.
              </p>
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Registered office address <span className="text-red-500">*</span>
            </label>
            <input type="text" value={formData.registeredAddress} onChange={e => handleInputChange('registeredAddress', e.target.value)} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" placeholder="Street, number" required />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
              <input type="text" value={formData.registeredPostalCode} onChange={e => handleInputChange('registeredPostalCode', e.target.value)} className="block w-full border border-gray-300 rounded-md shadow-sm p-2" placeholder="Postal code" required />
              <input type="text" value={formData.registeredCity} onChange={e => handleInputChange('registeredCity', e.target.value)} className="block w-full border border-gray-300 rounded-md shadow-sm p-2" placeholder="City" required />
            </div>
            <input type="text" value={formData.registeredCountry} onChange={e => handleInputChange('registeredCountry', e.target.value)} className="mt-2 block w-full border border-gray-300 rounded-md shadow-sm p-2" placeholder="Country" required />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Telephone number
              </label>
              <input type="tel" value={formData.phoneNumber} onChange={e => handleInputChange('phoneNumber', e.target.value)} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Website
              </label>
              <input type="text" value={formData.website} onChange={e => handleInputChange('website', e.target.value)} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Contact person <span className="text-red-500">*</span>
            </label>
            <input type="text" value={formData.contactPerson} onChange={e => handleInputChange('contactPerson', e.target.value)} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" required />
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