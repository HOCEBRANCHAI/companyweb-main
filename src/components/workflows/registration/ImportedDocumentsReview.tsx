import React, { useState } from 'react';
import { CheckIcon, XIcon, UserIcon, FileTextIcon, ArrowRightIcon, PlusIcon, InfoIcon } from 'lucide-react';
interface PersonData {
  id: string;
  name: string;
  nationality: string;
  dateOfBirth: string;
  passportNumber: string;
  expiryDate: string;
  thumbnailUrl: string;
  roles: {
    director: boolean;
    shareholder: boolean;
  };
  shareholding?: {
    shares: string;
    percentage: string;
  };
}
interface ImportedDocumentsReviewProps {
  onComplete: (people: PersonData[]) => void;
  onBack: () => void;
  people: PersonData[];
}
export function ImportedDocumentsReview({
  onComplete,
  onBack,
  people: initialPeople
}: ImportedDocumentsReviewProps) {
  const [people, setPeople] = useState<PersonData[]>(initialPeople);
  const toggleRole = (id: string, role: 'director' | 'shareholder') => {
    setPeople(people.map(person => person.id === id ? {
      ...person,
      roles: {
        ...person.roles,
        [role]: !person.roles[role]
      },
      shareholding: role === 'shareholder' && !person.roles.shareholder ? {
        shares: '',
        percentage: ''
      } : person.shareholding
    } : person));
  };
  const updateShareholding = (id: string, field: 'shares' | 'percentage', value: string) => {
    setPeople(people.map(person => person.id === id && person.roles.shareholder ? {
      ...person,
      shareholding: {
        ...person.shareholding,
        [field]: value
      }
    } : person));
  };
  const handleSubmit = () => {
    onComplete(people);
  };
  const canProceed = people.some(person => person.roles.director || person.roles.shareholder);
  return <div className="space-y-6">
      <div className="bg-blue-50 border border-blue-100 rounded-lg p-4">
        <div className="flex">
          <InfoIcon className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
          <div className="ml-3">
            <h3 className="text-sm font-medium text-blue-800">
              Passport Information Extracted
            </h3>
            <p className="text-sm text-blue-700 mt-1">
              We've extracted information from your selected source. Please
              assign roles to each person before continuing.
            </p>
          </div>
        </div>
      </div>
      <div className="space-y-6">
        {people.map(person => <div key={person.id} className="bg-white border border-gray-200 rounded-lg p-6">
            <div className="flex items-start md:items-center flex-col md:flex-row md:space-x-6">
              <div className="flex-shrink-0 mb-4 md:mb-0">
                <img src={person.thumbnailUrl} alt={person.name} className="h-20 w-20 rounded-full object-cover border border-gray-200" />
              </div>
              <div className="flex-1 space-y-4">
                <div>
                  <h3 className="text-lg font-medium text-gray-900">
                    {person.name}
                  </h3>
                  <div className="mt-1 grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
                    <div>
                      <span className="text-gray-500">Nationality:</span>{' '}
                      <span className="font-medium">{person.nationality}</span>
                    </div>
                    <div>
                      <span className="text-gray-500">Date of Birth:</span>{' '}
                      <span className="font-medium">
                        {new Date(person.dateOfBirth).toLocaleDateString()}
                      </span>
                    </div>
                    <div>
                      <span className="text-gray-500">Passport Number:</span>{' '}
                      <span className="font-medium">
                        {person.passportNumber}
                      </span>
                    </div>
                    <div>
                      <span className="text-gray-500">Expiry Date:</span>{' '}
                      <span className="font-medium">
                        {new Date(person.expiryDate).toLocaleDateString()}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="pt-4 border-t border-gray-200">
                  <h4 className="text-sm font-medium text-gray-900 mb-3">
                    Assign Roles:
                  </h4>
                  <div className="flex flex-wrap gap-3">
                    <button type="button" onClick={() => toggleRole(person.id, 'director')} className={`px-4 py-2 rounded-md text-sm font-medium flex items-center ${person.roles.director ? 'bg-blue-100 text-blue-800 border border-blue-200' : 'bg-gray-100 text-gray-700 border border-gray-200 hover:bg-gray-200'}`}>
                      {person.roles.director ? <CheckIcon className="h-4 w-4 mr-2" /> : <PlusIcon className="h-4 w-4 mr-2" />}
                      Director
                    </button>
                    <button type="button" onClick={() => toggleRole(person.id, 'shareholder')} className={`px-4 py-2 rounded-md text-sm font-medium flex items-center ${person.roles.shareholder ? 'bg-green-100 text-green-800 border border-green-200' : 'bg-gray-100 text-gray-700 border border-gray-200 hover:bg-gray-200'}`}>
                      {person.roles.shareholder ? <CheckIcon className="h-4 w-4 mr-2" /> : <PlusIcon className="h-4 w-4 mr-2" />}
                      Shareholder
                    </button>
                  </div>
                </div>
                {person.roles.shareholder && <div className="pt-4">
                    <h4 className="text-sm font-medium text-gray-900 mb-3">
                      Shareholding Information:
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700">
                          Number of Shares
                        </label>
                        <input type="text" value={person.shareholding?.shares || ''} onChange={e => updateShareholding(person.id, 'shares', e.target.value)} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" placeholder="e.g., 50" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700">
                          Percentage
                        </label>
                        <input type="text" value={person.shareholding?.percentage || ''} onChange={e => updateShareholding(person.id, 'percentage', e.target.value)} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" placeholder="e.g., 50%" />
                      </div>
                    </div>
                  </div>}
              </div>
            </div>
          </div>)}
      </div>
      <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
        <div className="flex items-start">
          <InfoIcon className="h-5 w-5 text-gray-600 flex-shrink-0 mt-0.5" />
          <div className="ml-3">
            <h3 className="text-sm font-medium text-gray-900">
              Additional Information
            </h3>
            <p className="text-sm text-gray-500 mt-1">
              You must assign at least one director for your Dutch BV. You can
              also assign shareholders if they are different from directors.
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-between pt-4">
        <button onClick={onBack} className="px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 text-sm font-medium">
          Back
        </button>
        <button onClick={handleSubmit} disabled={!canProceed} className={`px-4 py-2 rounded-md text-sm font-medium flex items-center ${canProceed ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-gray-100 text-gray-400 cursor-not-allowed'}`}>
          Continue
          <ArrowRightIcon className="ml-2 h-4 w-4" />
        </button>
      </div>
    </div>;
}