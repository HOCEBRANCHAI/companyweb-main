import React, { useState } from 'react';
import { BuildingIcon, MapPinIcon, PhoneIcon, GlobeIcon, ArrowLeftIcon } from 'lucide-react';
interface CompanyInformationProps {
  onContinue: () => void;
  onBack: () => void;
}
export function CompanyInformation({
  onContinue,
  onBack
}: CompanyInformationProps) {
  const [formData, setFormData] = useState({
    // Parent company details
    parentCompanyName: 'Tech Innovations Ltd',
    parentCompanyRegNumber: 'U72200MH2022PTC123456',
    parentCompanyAddress: 'World Trade Center, Tower B, Bengaluru, Karnataka 560055, India',
    parentCompanyCountry: 'India',
    parentCompanyWebsite: 'www.techinnovations.com',
    // Branch details
    branchName: 'Tech Innovations Netherlands Branch',
    tradeName: '',
    branchAddress: '',
    branchCity: '',
    branchPostalCode: '',
    branchCountry: 'Netherlands',
    branchPhone: '',
    branchEmail: ''
  });
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onContinue();
  };
  return <form onSubmit={handleSubmit} className="space-y-8">
      {/* Parent Company Information */}
      <div className="bg-white border border-gray-200 rounded-lg p-6">
        <div className="flex items-center mb-4">
          <BuildingIcon className="h-5 w-5 text-blue-600 mr-2" />
          <h3 className="text-lg font-medium text-gray-900">
            Parent Company Information
          </h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Company Name <span className="text-red-500">*</span>
            </label>
            <input type="text" value={formData.parentCompanyName} onChange={e => setFormData({
            ...formData,
            parentCompanyName: e.target.value
          })} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" required />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Registration Number <span className="text-red-500">*</span>
            </label>
            <input type="text" value={formData.parentCompanyRegNumber} onChange={e => setFormData({
            ...formData,
            parentCompanyRegNumber: e.target.value
          })} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" required />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Registered Address <span className="text-red-500">*</span>
          </label>
          <textarea value={formData.parentCompanyAddress} onChange={e => setFormData({
          ...formData,
          parentCompanyAddress: e.target.value
        })} rows={3} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" required />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Country <span className="text-red-500">*</span>
            </label>
            <input type="text" value={formData.parentCompanyCountry} onChange={e => setFormData({
            ...formData,
            parentCompanyCountry: e.target.value
          })} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" required />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Company Website
            </label>
            <input type="text" value={formData.parentCompanyWebsite} onChange={e => setFormData({
            ...formData,
            parentCompanyWebsite: e.target.value
          })} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" />
          </div>
        </div>
      </div>
      {/* Branch Information */}
      <div className="bg-white border border-gray-200 rounded-lg p-6">
        <div className="flex items-center mb-4">
          <MapPinIcon className="h-5 w-5 text-blue-600 mr-2" />
          <h3 className="text-lg font-medium text-gray-900">
            Branch Information
          </h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Branch Name <span className="text-red-500">*</span>
            </label>
            <input type="text" value={formData.branchName} onChange={e => setFormData({
            ...formData,
            branchName: e.target.value
          })} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" required />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Trade Name (if different)
            </label>
            <input type="text" value={formData.tradeName} onChange={e => setFormData({
            ...formData,
            tradeName: e.target.value
          })} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" placeholder="Optional trading name" />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Branch Address <span className="text-red-500">*</span>
          </label>
          <input type="text" value={formData.branchAddress} onChange={e => setFormData({
          ...formData,
          branchAddress: e.target.value
        })} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" required placeholder="Street address" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              City <span className="text-red-500">*</span>
            </label>
            <input type="text" value={formData.branchCity} onChange={e => setFormData({
            ...formData,
            branchCity: e.target.value
          })} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" required />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Postal Code <span className="text-red-500">*</span>
            </label>
            <input type="text" value={formData.branchPostalCode} onChange={e => setFormData({
            ...formData,
            branchPostalCode: e.target.value
          })} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" required placeholder="e.g., 1000 AA" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Country <span className="text-red-500">*</span>
            </label>
            <input type="text" value={formData.branchCountry} onChange={e => setFormData({
            ...formData,
            branchCountry: e.target.value
          })} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" required />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Phone Number <span className="text-red-500">*</span>
            </label>
            <input type="tel" value={formData.branchPhone} onChange={e => setFormData({
            ...formData,
            branchPhone: e.target.value
          })} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" required placeholder="+31 XX XXX XXXX" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email <span className="text-red-500">*</span>
            </label>
            <input type="email" value={formData.branchEmail} onChange={e => setFormData({
            ...formData,
            branchEmail: e.target.value
          })} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" required placeholder="netherlands@example.com" />
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