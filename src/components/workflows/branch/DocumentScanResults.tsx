import React, { useState } from 'react';
import { UserIcon, CheckCircleIcon, XIcon, ArrowLeftIcon, ArrowRightIcon, EditIcon, AlertTriangleIcon } from 'lucide-react';
interface ImportedPerson {
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
  confidenceScore?: number;
}
interface DocumentScanResultsProps {
  extractedPeople: ImportedPerson[];
  onComplete: (people: ImportedPerson[]) => void;
  onBack: () => void;
}
export function DocumentScanResults({
  extractedPeople,
  onComplete,
  onBack
}: DocumentScanResultsProps) {
  const [people, setPeople] = useState<ImportedPerson[]>(extractedPeople);
  const [editingPersonId, setEditingPersonId] = useState<string | null>(null);
  const handlePersonChange = (id: string, field: keyof ImportedPerson, value: string) => {
    setPeople(prevPeople => prevPeople.map(person => person.id === id ? {
      ...person,
      [field]: value
    } : person));
  };
  const getConfidenceColor = (score?: number) => {
    if (!score) return 'bg-gray-100 text-gray-800';
    if (score >= 90) return 'bg-green-100 text-green-800';
    if (score >= 70) return 'bg-yellow-100 text-yellow-800';
    return 'bg-red-100 text-red-800';
  };
  const getConfidenceIcon = (score?: number) => {
    if (!score) return null;
    if (score >= 90) return <CheckCircleIcon className="h-3 w-3 mr-1" />;
    if (score >= 70) return <AlertTriangleIcon className="h-3 w-3 mr-1" />;
    return <XIcon className="h-3 w-3 mr-1" />;
  };
  return <div className="space-y-6">
      <div className="bg-blue-50 border border-blue-100 rounded-lg p-4">
        <p className="text-sm text-blue-700">
          We've extracted information from your documents. Please review and
          confirm the details below before proceeding.
        </p>
      </div>
      <div className="space-y-6">
        <h3 className="text-lg font-medium text-gray-900">Extracted People</h3>
        {people.map(person => <div key={person.id} className="bg-white border border-gray-200 rounded-lg p-4">
            <div className="flex items-start space-x-4">
              {person.thumbnailUrl ? <img src={person.thumbnailUrl} alt={person.name} className="w-16 h-16 rounded-full object-cover" /> : <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center">
                  <UserIcon className="h-8 w-8 text-gray-400" />
                </div>}
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <h4 className="text-lg font-medium text-gray-900">
                      {person.name}
                    </h4>
                    {person.confidenceScore !== undefined && <span className={`ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getConfidenceColor(person.confidenceScore)}`}>
                        {getConfidenceIcon(person.confidenceScore)}
                        {person.confidenceScore}% Match
                      </span>}
                  </div>
                  <button onClick={() => setEditingPersonId(editingPersonId === person.id ? null : person.id)} className="text-blue-600 hover:text-blue-800">
                    <EditIcon className="h-4 w-4" />
                  </button>
                </div>
                {editingPersonId === person.id ? <div className="mt-4 space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700">
                          Full Name
                        </label>
                        <input type="text" value={person.name} onChange={e => handlePersonChange(person.id, 'name', e.target.value)} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 text-sm" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700">
                          Nationality
                        </label>
                        <input type="text" value={person.nationality || ''} onChange={e => handlePersonChange(person.id, 'nationality', e.target.value)} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 text-sm" />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700">
                          Date of Birth
                        </label>
                        <input type="date" value={person.dateOfBirth || ''} onChange={e => handlePersonChange(person.id, 'dateOfBirth', e.target.value)} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 text-sm" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700">
                          Place of Birth
                        </label>
                        <input type="text" value={person.placeOfBirth || ''} onChange={e => handlePersonChange(person.id, 'placeOfBirth', e.target.value)} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 text-sm" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700">
                          Country of Birth
                        </label>
                        <input type="text" value={person.countryOfBirth || ''} onChange={e => handlePersonChange(person.id, 'countryOfBirth', e.target.value)} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 text-sm" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Address
                      </label>
                      <input type="text" value={person.address || ''} onChange={e => handlePersonChange(person.id, 'address', e.target.value)} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 text-sm" />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700">
                          Passport Number
                        </label>
                        <input type="text" value={person.passportNumber || ''} onChange={e => handlePersonChange(person.id, 'passportNumber', e.target.value)} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 text-sm" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700">
                          Email
                        </label>
                        <input type="email" value={person.email || ''} onChange={e => handlePersonChange(person.id, 'email', e.target.value)} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 text-sm" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700">
                          Phone
                        </label>
                        <input type="tel" value={person.phone || ''} onChange={e => handlePersonChange(person.id, 'phone', e.target.value)} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 text-sm" />
                      </div>
                    </div>
                  </div> : <div className="mt-2 grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2 text-sm">
                    {person.nationality && <div>
                        <span className="text-gray-500">Nationality:</span>{' '}
                        <span className="text-gray-900">
                          {person.nationality}
                        </span>
                      </div>}
                    {person.dateOfBirth && <div>
                        <span className="text-gray-500">Date of Birth:</span>{' '}
                        <span className="text-gray-900">
                          {person.dateOfBirth}
                        </span>
                      </div>}
                    {person.passportNumber && <div>
                        <span className="text-gray-500">Passport:</span>{' '}
                        <span className="text-gray-900">
                          {person.passportNumber}
                        </span>
                      </div>}
                    {person.address && <div className="md:col-span-2">
                        <span className="text-gray-500">Address:</span>{' '}
                        <span className="text-gray-900">{person.address}</span>
                      </div>}
                  </div>}
              </div>
            </div>
          </div>)}
      </div>
      <div className="flex justify-between pt-6">
        <button onClick={onBack} className="px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 text-sm font-medium flex items-center">
          <ArrowLeftIcon className="mr-2 h-4 w-4" />
          Back
        </button>
        <button onClick={() => onComplete(people)} className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 text-sm font-medium flex items-center">
          Continue
          <ArrowRightIcon className="ml-2 h-4 w-4" />
        </button>
      </div>
    </div>;
}