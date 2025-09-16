import React, { useState } from 'react';
import { UserIcon, CheckIcon, ArrowLeftIcon, FileTextIcon, AlertTriangleIcon } from 'lucide-react';
interface ExtractedPerson {
  id: string;
  name: string;
  dateOfBirth?: string;
  placeOfBirth?: string;
  countryOfBirth?: string;
  nationality?: string;
  address?: string;
  passportNumber?: string;
  thumbnailUrl?: string;
  confidenceScore?: number;
}
interface DocumentScanResultsProps {
  extractedPeople: ExtractedPerson[];
  onComplete: (people: ExtractedPerson[]) => void;
  onBack: () => void;
}
export function DocumentScanResults({
  extractedPeople,
  onComplete,
  onBack
}: DocumentScanResultsProps) {
  const [people, setPeople] = useState<ExtractedPerson[]>(extractedPeople);
  const handleConfirm = (personId: string) => {
    setPeople(people.map(person => person.id === personId ? {
      ...person,
      confirmed: true
    } : person));
  };
  const handleEdit = (personId: string, field: string, value: string) => {
    setPeople(people.map(person => person.id === personId ? {
      ...person,
      [field]: value
    } : person));
  };
  const handleSubmit = () => {
    onComplete(people);
  };
  return <div className="space-y-6">
      <div className="bg-blue-50 border border-blue-100 rounded-lg p-4">
        <div className="flex">
          <FileTextIcon className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
          <div className="ml-3">
            <h3 className="text-sm font-medium text-blue-800">
              Document Scan Results
            </h3>
            <p className="text-sm text-blue-700 mt-1">
              We've extracted the following information from your documents.
              Please review and confirm the data is correct before proceeding.
            </p>
          </div>
        </div>
      </div>
      <div className="space-y-6">
        {people.map(person => <div key={person.id} className="bg-white border border-gray-200 rounded-lg p-6">
            <div className="flex items-start">
              <div className="flex-shrink-0">
                {person.thumbnailUrl ? <img src={person.thumbnailUrl} alt={person.name} className="h-16 w-16 rounded-full object-cover" /> : <div className="h-16 w-16 rounded-full bg-gray-200 flex items-center justify-center">
                    <UserIcon className="h-8 w-8 text-gray-400" />
                  </div>}
              </div>
              <div className="ml-4 flex-1">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-medium text-gray-900">
                    {person.name}
                  </h3>
                  <div className="flex items-center">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                      {person.confidenceScore}% confidence
                    </span>
                  </div>
                </div>
                <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Full Name
                    </label>
                    <input type="text" value={person.name} onChange={e => handleEdit(person.id, 'name', e.target.value)} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 text-sm" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Date of Birth
                    </label>
                    <input type="text" value={person.dateOfBirth || ''} onChange={e => handleEdit(person.id, 'dateOfBirth', e.target.value)} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 text-sm" placeholder="YYYY-MM-DD" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Nationality
                    </label>
                    <input type="text" value={person.nationality || ''} onChange={e => handleEdit(person.id, 'nationality', e.target.value)} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 text-sm" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Passport Number
                    </label>
                    <input type="text" value={person.passportNumber || ''} onChange={e => handleEdit(person.id, 'passportNumber', e.target.value)} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 text-sm" />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700">
                      Address
                    </label>
                    <input type="text" value={person.address || ''} onChange={e => handleEdit(person.id, 'address', e.target.value)} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 text-sm" />
                  </div>
                </div>
                <div className="mt-4">
                  <button onClick={() => handleConfirm(person.id)} className={`px-3 py-1 text-sm font-medium rounded-md ${person.confirmed ? 'bg-green-100 text-green-800' : 'bg-blue-600 text-white hover:bg-blue-700'}`} disabled={person.confirmed}>
                    {person.confirmed ? <span className="flex items-center">
                        <CheckIcon className="h-4 w-4 mr-1" />
                        Confirmed
                      </span> : 'Confirm Data'}
                  </button>
                </div>
              </div>
            </div>
          </div>)}
      </div>
      <div className="flex justify-between pt-4">
        <button onClick={onBack} className="px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 text-sm font-medium flex items-center">
          <ArrowLeftIcon className="mr-2 h-4 w-4" />
          Back
        </button>
        <button onClick={handleSubmit} className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 text-sm font-medium">
          Continue with Extracted Data
        </button>
      </div>
    </div>;
}