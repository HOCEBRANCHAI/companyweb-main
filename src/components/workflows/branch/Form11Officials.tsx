import React from 'react';
import { UserIcon, PlusIcon, XIcon, ArrowLeftIcon, CalendarIcon, ShieldIcon } from 'lucide-react';
interface Official {
  id: string;
  name: string;
  dateOfBirth?: string;
  placeOfBirth?: string;
  countryOfBirth?: string;
  nationality?: string;
  address?: string;
  role: string;
  authorities: string;
  appointmentDate: string;
  restrictions: string;
  passportNumber?: string;
  email?: string;
  phone?: string;
  thumbnailUrl?: string;
}
interface Form11OfficialsProps {
  officials: Official[];
  onOfficialsChange: (officials: Official[]) => void;
  onContinue: () => void;
  onBack: () => void;
}
export function Form11Officials({
  officials,
  onOfficialsChange,
  onContinue,
  onBack
}: Form11OfficialsProps) {
  const handleAddOfficial = () => {
    onOfficialsChange([...officials, {
      id: `official-${Date.now()}`,
      name: '',
      role: 'Director',
      authorities: '',
      appointmentDate: '',
      restrictions: 'None'
    }]);
  };
  const handleRemoveOfficial = (id: string) => {
    onOfficialsChange(officials.filter(official => official.id !== id));
  };
  const handleOfficialChange = (id: string, field: keyof Official, value: string) => {
    onOfficialsChange(officials.map(official => official.id === id ? {
      ...official,
      [field]: value
    } : official));
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onContinue();
  };
  return <form onSubmit={handleSubmit} className="space-y-8">
      <div className="bg-blue-50 border border-blue-100 rounded-lg p-4">
        <p className="text-sm text-blue-700">
          This section collects information for Form 11: Registration of
          officials of a legal entity.
        </p>
      </div>
      <div className="bg-white border border-gray-200 rounded-lg p-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center">
            <UserIcon className="h-5 w-5 text-blue-600 mr-2" />
            <h3 className="text-lg font-medium text-gray-900">Officials</h3>
          </div>
          <button type="button" onClick={handleAddOfficial} className="flex items-center text-sm text-blue-600 hover:text-blue-800">
            <PlusIcon className="h-4 w-4 mr-1" />
            Add Official
          </button>
        </div>
        <div className="space-y-8">
          {officials.map(official => <div key={official.id} className="bg-gray-50 p-6 rounded-md">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  {official.thumbnailUrl ? <img src={official.thumbnailUrl} alt={official.name} className="w-10 h-10 rounded-full object-cover mr-3" /> : <UserIcon className="h-10 w-10 text-gray-400 mr-3" />}
                  <h4 className="text-lg font-medium text-gray-900">
                    {official.name || 'New Official'}
                  </h4>
                </div>
                {officials.length > 1 && <button type="button" onClick={() => handleRemoveOfficial(official.id)} className="text-red-600 hover:text-red-800">
                    <XIcon className="h-5 w-5" />
                  </button>}
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input type="text" value={official.name} onChange={e => handleOfficialChange(official.id, 'name', e.target.value)} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" required placeholder="Full legal name" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Role <span className="text-red-500">*</span>
                  </label>
                  <select value={official.role} onChange={e => handleOfficialChange(official.id, 'role', e.target.value)} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" required>
                    <option value="Director">Director</option>
                    <option value="Managing Director">Managing Director</option>
                    <option value="Supervisory Board Member">
                      Supervisory Board Member
                    </option>
                    <option value="CEO">CEO</option>
                    <option value="CFO">CFO</option>
                    <option value="Board Member">Board Member</option>
                  </select>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Date of Birth <span className="text-red-500">*</span>
                  </label>
                  <input type="date" value={official.dateOfBirth || ''} onChange={e => handleOfficialChange(official.id, 'dateOfBirth', e.target.value)} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" required />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Place of Birth <span className="text-red-500">*</span>
                  </label>
                  <input type="text" value={official.placeOfBirth || ''} onChange={e => handleOfficialChange(official.id, 'placeOfBirth', e.target.value)} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" required placeholder="City of birth" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Country of Birth <span className="text-red-500">*</span>
                  </label>
                  <input type="text" value={official.countryOfBirth || ''} onChange={e => handleOfficialChange(official.id, 'countryOfBirth', e.target.value)} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" required placeholder="Country of birth" />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Nationality <span className="text-red-500">*</span>
                  </label>
                  <input type="text" value={official.nationality || ''} onChange={e => handleOfficialChange(official.id, 'nationality', e.target.value)} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" required />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Passport Number <span className="text-red-500">*</span>
                  </label>
                  <input type="text" value={official.passportNumber || ''} onChange={e => handleOfficialChange(official.id, 'passportNumber', e.target.value)} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" required />
                </div>
              </div>
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700">
                  Residential Address <span className="text-red-500">*</span>
                </label>
                <input type="text" value={official.address || ''} onChange={e => handleOfficialChange(official.id, 'address', e.target.value)} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" required placeholder="Full residential address" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <input type="email" value={official.email || ''} onChange={e => handleOfficialChange(official.id, 'email', e.target.value)} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" placeholder="email@example.com" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Phone
                  </label>
                  <input type="tel" value={official.phone || ''} onChange={e => handleOfficialChange(official.id, 'phone', e.target.value)} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" placeholder="+XX XXX XXX XXXX" />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Appointment Date <span className="text-red-500">*</span>
                  </label>
                  <input type="date" value={official.appointmentDate} onChange={e => handleOfficialChange(official.id, 'appointmentDate', e.target.value)} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" required />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Authorities <span className="text-red-500">*</span>
                  </label>
                  <select value={official.authorities} onChange={e => handleOfficialChange(official.id, 'authorities', e.target.value)} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" required>
                    <option value="">Select authority level</option>
                    <option value="Full authority to represent the company">
                      Full authority to represent the company
                    </option>
                    <option value="Joint authority with other directors">
                      Joint authority with other directors
                    </option>
                    <option value="Limited authority">Limited authority</option>
                    <option value="No authority to represent">
                      No authority to represent
                    </option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Restrictions
                </label>
                <input type="text" value={official.restrictions} onChange={e => handleOfficialChange(official.id, 'restrictions', e.target.value)} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" placeholder="Any restrictions on authority (e.g., None, Financial limits, etc.)" />
              </div>
            </div>)}
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