import React, { useState } from 'react';
import { CheckIcon, XIcon, UserIcon, FileTextIcon, ArrowRightIcon, PlusIcon, InfoIcon, AlertTriangleIcon } from 'lucide-react';
interface PersonData {
  id: string;
  name: string;
  nationality: string;
  dateOfBirth: string;
  passportNumber: string;
  expiryDate: string;
  thumbnailUrl: string;
  confidenceScore?: number;
  roles: {
    director: boolean;
    shareholder: boolean;
  };
  shareholding?: {
    percentage?: string;
  };
}
interface DocumentScanResultsProps {
  onComplete: (people: PersonData[]) => void;
  onBack: () => void;
  extractedPeople: PersonData[];
}
export function DocumentScanResults({
  onComplete,
  onBack,
  extractedPeople: initialPeople
}: DocumentScanResultsProps) {
  const [people, setPeople] = useState<PersonData[]>(initialPeople);
  const toggleRole = (id: string, role: 'director' | 'shareholder') => {
    setPeople(people.map(person => person.id === id ? {
      ...person,
      roles: {
        ...person.roles,
        [role]: !person.roles[role]
      },
      shareholding: role === 'shareholder' && !person.roles.shareholder ? {
        percentage: ''
      } : person.shareholding
    } : person));
  };
  const updateShareholding = (id: string, percentage: string) => {
    setPeople(people.map(person => person.id === id && person.roles.shareholder ? {
      ...person,
      shareholding: {
        percentage
      }
    } : person));
  };
  const handleSubmit = () => {
    onComplete(people);
  };
  const canProceed = people.some(person => person.roles.director || person.roles.shareholder);
  const getConfidenceLabel = (score: number) => {
    if (score >= 90) return {
      text: 'High',
      color: 'text-green-600'
    };
    if (score >= 70) return {
      text: 'Medium',
      color: 'text-amber-600'
    };
    return {
      text: 'Low',
      color: 'text-red-600'
    };
  };
  const totalShareholding = people.filter(person => person.roles.shareholder && person.shareholding?.percentage).reduce((sum, person) => sum + Number(person.shareholding?.percentage || 0), 0);
  return <div className="space-y-6">
      <div className="bg-blue-50 border border-blue-100 rounded-lg p-4">
        <div className="flex">
          <InfoIcon className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
          <div className="ml-3">
            <h3 className="text-sm font-medium text-blue-800">
              Assign Roles to Extracted Individuals
            </h3>
            <p className="text-sm text-blue-700 mt-1">
              We've extracted information from the uploaded documents. Please
              assign roles to each person and specify shareholding percentages
              if applicable.
            </p>
          </div>
        </div>
      </div>
      <div className="space-y-6">
        {people.map(person => <div key={person.id} className="bg-white border border-gray-200 rounded-lg p-6">
            <div className="flex flex-col md:flex-row md:items-start gap-6">
              <div className="flex-shrink-0">
                <img src={person.thumbnailUrl} alt={person.name} className="h-20 w-20 rounded-full object-cover border border-gray-200" />
                {person.confidenceScore && <div className="mt-2 text-center">
                    <span className={`text-xs font-medium ${getConfidenceLabel(person.confidenceScore).color}`}>
                      {getConfidenceLabel(person.confidenceScore).text}{' '}
                      confidence
                    </span>
                  </div>}
              </div>
              <div className="flex-1 space-y-4 w-full">
                <div>
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-medium text-gray-900">
                      {person.name}
                    </h3>
                    {person.confidenceScore && person.confidenceScore < 80 && <div className="flex items-center text-amber-600">
                        <AlertTriangleIcon className="h-4 w-4 mr-1" />
                        <span className="text-xs">Verify information</span>
                      </div>}
                  </div>
                  <div className="mt-2 grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2 text-sm">
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
                {person.roles.shareholder && <div className="pt-4 bg-gray-50 p-4 rounded-lg mt-4">
                    <h4 className="text-sm font-medium text-gray-900 mb-3">
                      Shareholding Information:
                    </h4>
                    <div className="max-w-md">
                      <label className="block text-sm font-medium text-gray-700">
                        Percentage of Shares
                      </label>
                      <div className="mt-1 relative rounded-md shadow-sm">
                        <input type="text" value={person.shareholding?.percentage || ''} onChange={e => updateShareholding(person.id, e.target.value)} className="focus:ring-blue-500 focus:border-blue-500 block w-full pr-12 sm:text-sm border-gray-300 rounded-md p-2 border" placeholder="e.g., 50" />
                        <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                          <span className="text-gray-500 sm:text-sm">%</span>
                        </div>
                      </div>
                    </div>
                  </div>}
              </div>
            </div>
          </div>)}
      </div>
      {people.some(person => person.roles.shareholder) && <div className={`bg-${totalShareholding === 100 ? 'green' : 'yellow'}-50 border border-${totalShareholding === 100 ? 'green' : 'yellow'}-100 rounded-lg p-4`}>
          <div className="flex">
            {totalShareholding === 100 ? <CheckIcon className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" /> : <AlertTriangleIcon className="h-5 w-5 text-yellow-600 flex-shrink-0 mt-0.5" />}
            <div className="ml-3">
              <h3 className="text-sm font-medium text-gray-900">
                Total Shareholding: {totalShareholding}%
              </h3>
              <p className="text-sm text-gray-600 mt-1">
                {totalShareholding === 100 ? 'Shareholding is properly distributed.' : 'Total shareholding should equal 100%.'}
              </p>
            </div>
          </div>
        </div>}
      <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
        <div className="flex items-start">
          <InfoIcon className="h-5 w-5 text-gray-600 flex-shrink-0 mt-0.5" />
          <div className="ml-3">
            <h3 className="text-sm font-medium text-gray-900">
              Required Assignments
            </h3>
            <p className="text-sm text-gray-500 mt-1">
              You must assign at least one director for your Dutch BV. If you
              assign shareholders, make sure the total percentage equals 100%.
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