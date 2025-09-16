import React, { useState } from 'react';
import { UserIcon, PlusIcon, XIcon, ArrowLeftIcon } from 'lucide-react';
interface LegalRepresentativesProps {
  onContinue: () => void;
  onBack: () => void;
}
interface Representative {
  name: string;
  role: string;
  nationality: string;
  dateOfBirth: string;
  passportNumber: string;
  emailAddress: string;
  phoneNumber: string;
}
export function LegalRepresentatives({
  onContinue,
  onBack
}: LegalRepresentativesProps) {
  const [representatives, setRepresentatives] = useState<Representative[]>([{
    name: 'John Smith',
    role: 'Branch Manager',
    nationality: 'British',
    dateOfBirth: '1980-05-15',
    passportNumber: 'GB123456789',
    emailAddress: 'john.smith@example.com',
    phoneNumber: '+44 7123 456789'
  }]);
  const handleAddRepresentative = () => {
    setRepresentatives([...representatives, {
      name: '',
      role: '',
      nationality: '',
      dateOfBirth: '',
      passportNumber: '',
      emailAddress: '',
      phoneNumber: ''
    }]);
  };
  const handleRemoveRepresentative = (index: number) => {
    const updatedRepresentatives = [...representatives];
    updatedRepresentatives.splice(index, 1);
    setRepresentatives(updatedRepresentatives);
  };
  const handleRepresentativeChange = (index: number, field: keyof Representative, value: string) => {
    const updatedRepresentatives = [...representatives];
    updatedRepresentatives[index][field] = value;
    setRepresentatives(updatedRepresentatives);
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onContinue();
  };
  return <form onSubmit={handleSubmit} className="space-y-6">
      <div className="bg-white border border-gray-200 rounded-lg p-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center">
            <UserIcon className="h-5 w-5 text-blue-600 mr-2" />
            <h3 className="text-lg font-medium text-gray-900">
              Legal Representatives
            </h3>
          </div>
          <button type="button" onClick={handleAddRepresentative} className="flex items-center text-sm text-blue-600 hover:text-blue-800">
            <PlusIcon className="h-4 w-4 mr-1" />
            Add Representative
          </button>
        </div>
        <div className="space-y-6">
          {representatives.map((representative, index) => <div key={index} className="bg-gray-50 p-4 rounded-md">
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-sm font-medium text-gray-700">
                  Representative {index + 1}
                </h4>
                {representatives.length > 1 && <button type="button" onClick={() => handleRemoveRepresentative(index)} className="text-red-600 hover:text-red-800">
                    <XIcon className="h-4 w-4" />
                  </button>}
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input type="text" value={representative.name} onChange={e => handleRepresentativeChange(index, 'name', e.target.value)} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" required />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Role <span className="text-red-500">*</span>
                  </label>
                  <select value={representative.role} onChange={e => handleRepresentativeChange(index, 'role', e.target.value)} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" required>
                    <option value="">Select a role</option>
                    <option value="Branch Manager">Branch Manager</option>
                    <option value="Director">Director</option>
                    <option value="Legal Representative">
                      Legal Representative
                    </option>
                    <option value="Authorized Signatory">
                      Authorized Signatory
                    </option>
                  </select>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Nationality <span className="text-red-500">*</span>
                  </label>
                  <input type="text" value={representative.nationality} onChange={e => handleRepresentativeChange(index, 'nationality', e.target.value)} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" required />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Date of Birth <span className="text-red-500">*</span>
                  </label>
                  <input type="date" value={representative.dateOfBirth} onChange={e => handleRepresentativeChange(index, 'dateOfBirth', e.target.value)} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" required />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Passport Number <span className="text-red-500">*</span>
                  </label>
                  <input type="text" value={representative.passportNumber} onChange={e => handleRepresentativeChange(index, 'passportNumber', e.target.value)} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" required />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input type="email" value={representative.emailAddress} onChange={e => handleRepresentativeChange(index, 'emailAddress', e.target.value)} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" required />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <input type="tel" value={representative.phoneNumber} onChange={e => handleRepresentativeChange(index, 'phoneNumber', e.target.value)} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" required />
                </div>
              </div>
            </div>)}
        </div>
      </div>
      <div className="bg-blue-50 border border-blue-100 rounded-lg p-4">
        <p className="text-sm text-blue-700">
          All representatives will need to provide proof of identity (passport
          copy) and proof of address. At least one representative must be
          authorized to sign on behalf of the branch.
        </p>
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