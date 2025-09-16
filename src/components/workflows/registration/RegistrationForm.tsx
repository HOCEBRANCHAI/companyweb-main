import React, { useEffect, useState } from 'react';
import { PlusIcon, ArrowRightIcon, XIcon, BuildingIcon, MapPinIcon, PhoneIcon, UserPlusIcon } from 'lucide-react';
interface PersonData {
  id: string;
  name: string;
  nationality: string;
  dateOfBirth?: string;
  passportNumber?: string;
  expiryDate?: string;
  thumbnailUrl?: string;
  roles: {
    director: boolean;
    shareholder: boolean;
  };
  shareholding?: {
    shares: string;
    percentage: string;
  };
}
interface RegistrationFormProps {
  onComplete: () => void;
  importedPeople?: PersonData[];
}
export function RegistrationForm({
  onComplete,
  importedPeople = []
}: RegistrationFormProps) {
  const [formData, setFormData] = useState({
    companyName: '',
    tradeName: '',
    shareCapital: '100',
    shareValue: '1',
    businessActivities: '',
    address: '',
    city: '',
    postalCode: '',
    country: 'Netherlands',
    phoneNumber: '',
    email: '',
    directors: [{
      name: '',
      nationality: '',
      role: 'Director'
    }],
    shareholders: [{
      name: '',
      shares: '',
      percentage: ''
    }]
  });
  useEffect(() => {
    if (importedPeople && importedPeople.length > 0) {
      const directors = importedPeople.filter(person => person.roles.director).map(person => ({
        name: person.name,
        nationality: person.nationality,
        role: 'Director'
      }));
      const shareholders = importedPeople.filter(person => person.roles.shareholder).map(person => ({
        name: person.name,
        shares: person.shareholding?.shares || '',
        percentage: person.shareholding?.percentage || ''
      }));
      setFormData(prev => ({
        ...prev,
        directors: directors.length > 0 ? directors : prev.directors,
        shareholders: shareholders.length > 0 ? shareholders : prev.shareholders
      }));
    }
  }, [importedPeople]);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onComplete();
  };
  const addDirector = () => {
    setFormData({
      ...formData,
      directors: [...formData.directors, {
        name: '',
        nationality: '',
        role: 'Director'
      }]
    });
  };
  const addShareholder = () => {
    setFormData({
      ...formData,
      shareholders: [...formData.shareholders, {
        name: '',
        shares: '',
        percentage: ''
      }]
    });
  };
  const removeDirector = (index: number) => {
    const updatedDirectors = [...formData.directors];
    updatedDirectors.splice(index, 1);
    setFormData({
      ...formData,
      directors: updatedDirectors
    });
  };
  const removeShareholder = (index: number) => {
    const updatedShareholders = [...formData.shareholders];
    updatedShareholders.splice(index, 1);
    setFormData({
      ...formData,
      shareholders: updatedShareholders
    });
  };
  return <form onSubmit={handleSubmit} className="space-y-8">
      {/* Company Information */}
      <div className="bg-white border border-gray-200 rounded-lg p-6">
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
            <input type="text" value={formData.companyName} onChange={e => setFormData({
            ...formData,
            companyName: e.target.value
          })} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" required placeholder="Your BV company name" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Trade Name (if different)
            </label>
            <input type="text" value={formData.tradeName} onChange={e => setFormData({
            ...formData,
            tradeName: e.target.value
          })} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" placeholder="Optional business trading name" />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Share Capital (€) <span className="text-red-500">*</span>
            </label>
            <input type="text" value={formData.shareCapital} onChange={e => setFormData({
            ...formData,
            shareCapital: e.target.value
          })} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" required />
            <p className="mt-1 text-xs text-gray-500">
              Typically €100 for standard BVs
            </p>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Share Value (€) <span className="text-red-500">*</span>
            </label>
            <input type="text" value={formData.shareValue} onChange={e => setFormData({
            ...formData,
            shareValue: e.target.value
          })} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" required />
            <p className="mt-1 text-xs text-gray-500">
              Value per share (typically €1)
            </p>
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Business Activities <span className="text-red-500">*</span>
          </label>
          <textarea value={formData.businessActivities} onChange={e => setFormData({
          ...formData,
          businessActivities: e.target.value
        })} rows={3} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" required placeholder="Describe the main business activities of your company" />
        </div>
      </div>
      {/* Address Information */}
      <div className="bg-white border border-gray-200 rounded-lg p-6">
        <div className="flex items-center mb-4">
          <MapPinIcon className="h-5 w-5 text-blue-600 mr-2" />
          <h3 className="text-lg font-medium text-gray-900">
            Address Information
          </h3>
        </div>
        <div className="grid grid-cols-1 gap-6 mb-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Address <span className="text-red-500">*</span>
            </label>
            <input type="text" value={formData.address} onChange={e => setFormData({
            ...formData,
            address: e.target.value
          })} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" required placeholder="Street address" />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              City <span className="text-red-500">*</span>
            </label>
            <input type="text" value={formData.city} onChange={e => setFormData({
            ...formData,
            city: e.target.value
          })} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" required />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Postal Code <span className="text-red-500">*</span>
            </label>
            <input type="text" value={formData.postalCode} onChange={e => setFormData({
            ...formData,
            postalCode: e.target.value
          })} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" required placeholder="e.g., 1000 AA" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Country <span className="text-red-500">*</span>
            </label>
            <input type="text" value={formData.country} onChange={e => setFormData({
            ...formData,
            country: e.target.value
          })} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" required />
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Phone Number <span className="text-red-500">*</span>
            </label>
            <input type="tel" value={formData.phoneNumber} onChange={e => setFormData({
            ...formData,
            phoneNumber: e.target.value
          })} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" required placeholder="+31 XX XXX XXXX" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email <span className="text-red-500">*</span>
            </label>
            <input type="email" value={formData.email} onChange={e => setFormData({
            ...formData,
            email: e.target.value
          })} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" required placeholder="contact@example.com" />
          </div>
        </div>
      </div>
      {/* Directors */}
      <div className="bg-white border border-gray-200 rounded-lg p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <UserPlusIcon className="h-5 w-5 text-blue-600 mr-2" />
            <h3 className="text-lg font-medium text-gray-900">Directors</h3>
          </div>
          <button type="button" onClick={addDirector} className="flex items-center text-sm text-blue-600 hover:text-blue-800">
            <PlusIcon className="h-4 w-4 mr-1" />
            Add Director
          </button>
        </div>
        <div className="space-y-4">
          {formData.directors.map((director, index) => <div key={index} className="bg-gray-50 p-4 rounded-md">
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-sm font-medium text-gray-700">
                  Director {index + 1}
                </h4>
                {index > 0 && <button type="button" onClick={() => removeDirector(index)} className="text-red-600 hover:text-red-800">
                    <XIcon className="h-4 w-4" />
                  </button>}
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Name <span className="text-red-500">*</span>
                  </label>
                  <input type="text" value={director.name} onChange={e => {
                const updatedDirectors = [...formData.directors];
                updatedDirectors[index].name = e.target.value;
                setFormData({
                  ...formData,
                  directors: updatedDirectors
                });
              }} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" required placeholder="Full legal name" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Nationality <span className="text-red-500">*</span>
                  </label>
                  <input type="text" value={director.nationality} onChange={e => {
                const updatedDirectors = [...formData.directors];
                updatedDirectors[index].nationality = e.target.value;
                setFormData({
                  ...formData,
                  directors: updatedDirectors
                });
              }} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" required />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Role <span className="text-red-500">*</span>
                  </label>
                  <select value={director.role} onChange={e => {
                const updatedDirectors = [...formData.directors];
                updatedDirectors[index].role = e.target.value;
                setFormData({
                  ...formData,
                  directors: updatedDirectors
                });
              }} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" required>
                    <option value="Director">Director</option>
                    <option value="Managing Director">Managing Director</option>
                    <option value="CEO">CEO</option>
                  </select>
                </div>
              </div>
            </div>)}
        </div>
      </div>
      {/* Shareholders */}
      <div className="bg-white border border-gray-200 rounded-lg p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <UserPlusIcon className="h-5 w-5 text-blue-600 mr-2" />
            <h3 className="text-lg font-medium text-gray-900">Shareholders</h3>
          </div>
          <button type="button" onClick={addShareholder} className="flex items-center text-sm text-blue-600 hover:text-blue-800">
            <PlusIcon className="h-4 w-4 mr-1" />
            Add Shareholder
          </button>
        </div>
        <div className="space-y-4">
          {formData.shareholders.map((shareholder, index) => <div key={index} className="bg-gray-50 p-4 rounded-md">
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-sm font-medium text-gray-700">
                  Shareholder {index + 1}
                </h4>
                {index > 0 && <button type="button" onClick={() => removeShareholder(index)} className="text-red-600 hover:text-red-800">
                    <XIcon className="h-4 w-4" />
                  </button>}
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Name <span className="text-red-500">*</span>
                  </label>
                  <input type="text" value={shareholder.name} onChange={e => {
                const updatedShareholders = [...formData.shareholders];
                updatedShareholders[index].name = e.target.value;
                setFormData({
                  ...formData,
                  shareholders: updatedShareholders
                });
              }} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" required placeholder="Full legal name" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Shares <span className="text-red-500">*</span>
                  </label>
                  <input type="text" value={shareholder.shares} onChange={e => {
                const updatedShareholders = [...formData.shareholders];
                updatedShareholders[index].shares = e.target.value;
                setFormData({
                  ...formData,
                  shareholders: updatedShareholders
                });
              }} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" required placeholder="Number of shares" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Percentage <span className="text-red-500">*</span>
                  </label>
                  <input type="text" value={shareholder.percentage} onChange={e => {
                const updatedShareholders = [...formData.shareholders];
                updatedShareholders[index].percentage = e.target.value;
                setFormData({
                  ...formData,
                  shareholders: updatedShareholders
                });
              }} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" required placeholder="e.g., 50%" />
                </div>
              </div>
            </div>)}
        </div>
      </div>
      <div className="flex justify-end pt-6">
        <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 text-sm font-medium flex items-center">
          Continue to Documents
          <ArrowRightIcon className="ml-2 h-4 w-4" />
        </button>
      </div>
    </form>;
}