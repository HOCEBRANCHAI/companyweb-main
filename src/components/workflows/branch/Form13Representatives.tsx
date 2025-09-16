import React from 'react';
import { UserIcon, PlusIcon, XIcon, ArrowLeftIcon, ShieldIcon } from 'lucide-react';
interface Person {
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
}
interface Representative extends Person {
  authorisationDetails: string;
  authorisationDate: string;
  authorisationScope: string;
}
interface Form13RepresentativesProps {
  representatives: Representative[];
  onRepresentativesChange: (representatives: Representative[]) => void;
  onContinue: () => void;
  onBack: () => void;
  officials: Person[];
}
export function Form13Representatives({
  representatives,
  onRepresentativesChange,
  onContinue,
  onBack,
  officials
}: Form13RepresentativesProps) {
  const handleAddRepresentative = () => {
    onRepresentativesChange([...representatives, {
      id: `rep-${Date.now()}`,
      name: '',
      authorisationDetails: '',
      authorisationDate: '',
      authorisationScope: 'Limited'
    }]);
  };
  const handleRemoveRepresentative = (id: string) => {
    onRepresentativesChange(representatives.filter(rep => rep.id !== id));
  };
  const handleRepresentativeChange = (id: string, field: keyof Representative, value: string) => {
    onRepresentativesChange(representatives.map(rep => rep.id === id ? {
      ...rep,
      [field]: value
    } : rep));
  };
  const handleImportFromOfficial = (repId: string, officialId: string) => {
    const official = officials.find(o => o.id === officialId);
    if (!official) return;
    onRepresentativesChange(representatives.map(rep => rep.id === repId ? {
      ...rep,
      name: official.name,
      dateOfBirth: official.dateOfBirth,
      placeOfBirth: official.placeOfBirth,
      countryOfBirth: official.countryOfBirth,
      nationality: official.nationality,
      address: official.address,
      passportNumber: official.passportNumber,
      email: official.email,
      phone: official.phone,
      thumbnailUrl: official.thumbnailUrl
    } : rep));
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onContinue();
  };
  return <form onSubmit={handleSubmit} className="space-y-8">
      <div className="bg-blue-50 border border-blue-100 rounded-lg p-4">
        <p className="text-sm text-blue-700">
          This section collects information for Form 13: Registration of
          authorized representatives (optional). If your branch doesn't need
          additional representatives beyond the officials, you can skip this
          step.
        </p>
      </div>
      <div className="bg-white border border-gray-200 rounded-lg p-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center">
            <ShieldIcon className="h-5 w-5 text-blue-600 mr-2" />
            <h3 className="text-lg font-medium text-gray-900">
              Authorized Representatives
            </h3>
          </div>
          <button type="button" onClick={handleAddRepresentative} className="flex items-center text-sm text-blue-600 hover:text-blue-800">
            <PlusIcon className="h-4 w-4 mr-1" />
            Add Representative
          </button>
        </div>
        {representatives.length === 0 ? <div className="text-center py-8">
            <p className="text-gray-500 mb-4">
              No authorized representatives added yet.
            </p>
            <button type="button" onClick={handleAddRepresentative} className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 text-sm font-medium">
              Add Representative
            </button>
          </div> : <div className="space-y-8">
            {representatives.map(rep => <div key={rep.id} className="bg-gray-50 p-6 rounded-md">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    {rep.thumbnailUrl ? <img src={rep.thumbnailUrl} alt={rep.name} className="w-10 h-10 rounded-full object-cover mr-3" /> : <UserIcon className="h-10 w-10 text-gray-400 mr-3" />}
                    <h4 className="text-lg font-medium text-gray-900">
                      {rep.name || 'New Representative'}
                    </h4>
                  </div>
                  <button type="button" onClick={() => handleRemoveRepresentative(rep.id)} className="text-red-600 hover:text-red-800">
                    <XIcon className="h-5 w-5" />
                  </button>
                </div>
                {officials.length > 0 && <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Import from Official
                    </label>
                    <select onChange={e => handleImportFromOfficial(rep.id, e.target.value)} className="block w-full border border-gray-300 rounded-md shadow-sm p-2" defaultValue="">
                      <option value="" disabled>
                        Select an official
                      </option>
                      {officials.map(official => <option key={official.id} value={official.id}>
                          {official.name} ({official.role})
                        </option>)}
                    </select>
                    <p className="mt-1 text-xs text-gray-500">
                      This will copy the personal details from the selected
                      official.
                    </p>
                  </div>}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input type="text" value={rep.name} onChange={e => handleRepresentativeChange(rep.id, 'name', e.target.value)} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" required placeholder="Full legal name" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Authorization Scope{' '}
                      <span className="text-red-500">*</span>
                    </label>
                    <select value={rep.authorisationScope} onChange={e => handleRepresentativeChange(rep.id, 'authorisationScope', e.target.value)} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" required>
                      <option value="Full">Full authority</option>
                      <option value="Limited">Limited authority</option>
                      <option value="Financial">Financial matters only</option>
                      <option value="Administrative">
                        Administrative matters only
                      </option>
                      <option value="Legal">Legal matters only</option>
                    </select>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Date of Birth <span className="text-red-500">*</span>
                    </label>
                    <input type="date" value={rep.dateOfBirth || ''} onChange={e => handleRepresentativeChange(rep.id, 'dateOfBirth', e.target.value)} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" required />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Place of Birth <span className="text-red-500">*</span>
                    </label>
                    <input type="text" value={rep.placeOfBirth || ''} onChange={e => handleRepresentativeChange(rep.id, 'placeOfBirth', e.target.value)} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" required placeholder="City of birth" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Country of Birth <span className="text-red-500">*</span>
                    </label>
                    <input type="text" value={rep.countryOfBirth || ''} onChange={e => handleRepresentativeChange(rep.id, 'countryOfBirth', e.target.value)} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" required placeholder="Country of birth" />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Nationality <span className="text-red-500">*</span>
                    </label>
                    <input type="text" value={rep.nationality || ''} onChange={e => handleRepresentativeChange(rep.id, 'nationality', e.target.value)} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" required />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Authorization Date <span className="text-red-500">*</span>
                    </label>
                    <input type="date" value={rep.authorisationDate} onChange={e => handleRepresentativeChange(rep.id, 'authorisationDate', e.target.value)} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" required />
                  </div>
                </div>
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700">
                    Residential Address <span className="text-red-500">*</span>
                  </label>
                  <input type="text" value={rep.address || ''} onChange={e => handleRepresentativeChange(rep.id, 'address', e.target.value)} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" required placeholder="Full residential address" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Authorization Details{' '}
                    <span className="text-red-500">*</span>
                  </label>
                  <textarea value={rep.authorisationDetails} onChange={e => handleRepresentativeChange(rep.id, 'authorisationDetails', e.target.value)} rows={3} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" required placeholder="Describe the specific powers granted to this representative" />
                </div>
              </div>)}
          </div>}
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