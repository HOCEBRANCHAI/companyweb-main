import React, { useState } from 'react';
import { CalendarIcon, CheckIcon, InfoIcon } from 'lucide-react';
interface EmployeeFormData {
  firstName: string;
  middleName: string;
  lastName: string;
  initials: string;
  address: string;
  zipCode: string;
  placeOfLiving: string;
  dateOfBirth: string;
  gender: string;
  email: string;
  socialSecurityNumber: string;
  startDate: string;
  contractType: 'employment' | 'internship' | 'temporary' | 'indefinite';
  function: string;
  hoursPerWeek: number;
  salary: {
    amount: number;
    type: 'monthly' | 'hourly';
  };
  workSchedule: {
    [key: string]: number | string;
  };
  applyWageTaxCredit: boolean;
  bankAccount: string;
}
export function PayrollManagementForm() {
  const [formData, setFormData] = useState<EmployeeFormData>({
    firstName: '',
    middleName: '',
    lastName: '',
    initials: '',
    address: '',
    zipCode: '',
    placeOfLiving: '',
    dateOfBirth: '',
    gender: '',
    email: '',
    socialSecurityNumber: '',
    startDate: '',
    contractType: 'employment',
    function: '',
    hoursPerWeek: 40,
    salary: {
      amount: 0,
      type: 'monthly'
    },
    workSchedule: {
      Monday: 8,
      Tuesday: 8,
      Wednesday: 8,
      Thursday: 8,
      Friday: 8,
      Saturday: 'weekend',
      Sunday: 'weekend'
    },
    applyWageTaxCredit: true,
    bankAccount: ''
  });
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };
  return <form onSubmit={handleSubmit} className="space-y-8">
      {/* Personal Information */}
      <div className="bg-white p-6 rounded-lg border border-gray-200">
        <h3 className="text-lg font-medium text-gray-900 mb-6">
          Personal Information
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              First Name
            </label>
            <input type="text" value={formData.firstName} onChange={e => setFormData({
            ...formData,
            firstName: e.target.value
          })} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" required />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Middle Name
            </label>
            <input type="text" value={formData.middleName} onChange={e => setFormData({
            ...formData,
            middleName: e.target.value
          })} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Last Name
            </label>
            <input type="text" value={formData.lastName} onChange={e => setFormData({
            ...formData,
            lastName: e.target.value
          })} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" required />
          </div>
        </div>
        {/* Address Information */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Address
            </label>
            <input type="text" value={formData.address} onChange={e => setFormData({
            ...formData,
            address: e.target.value
          })} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" required />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Place of Living
            </label>
            <input type="text" value={formData.placeOfLiving} onChange={e => setFormData({
            ...formData,
            placeOfLiving: e.target.value
          })} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" required />
          </div>
        </div>
      </div>
      {/* Employment Information */}
      <div className="bg-white p-6 rounded-lg border border-gray-200">
        <h3 className="text-lg font-medium text-gray-900 mb-6">
          Employment Details
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Start Date
            </label>
            <div className="mt-1 relative">
              <input type="date" value={formData.startDate} onChange={e => setFormData({
              ...formData,
              startDate: e.target.value
            })} className="block w-full border border-gray-300 rounded-md shadow-sm p-2" required />
              <CalendarIcon className="absolute right-2 top-2.5 h-5 w-5 text-gray-400" />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Contract Type
            </label>
            <select value={formData.contractType} onChange={e => setFormData({
            ...formData,
            contractType: e.target.value as EmployeeFormData['contractType']
          })} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" required>
              <option value="employment">Employment Contract</option>
              <option value="internship">Internship</option>
              <option value="temporary">Temporary</option>
              <option value="indefinite">Indefinite</option>
            </select>
          </div>
        </div>
        {/* Work Schedule */}
        <div className="mt-6">
          <h4 className="text-sm font-medium text-gray-700 mb-4">
            Weekly Schedule
          </h4>
          <div className="grid grid-cols-7 gap-4">
            {Object.entries(formData.workSchedule).map(([day, hours]) => <div key={day}>
                <label className="block text-xs font-medium text-gray-600 mb-1">
                  {day}
                </label>
                <input type="text" value={hours} onChange={e => setFormData({
              ...formData,
              workSchedule: {
                ...formData.workSchedule,
                [day]: e.target.value
              }
            })} className="block w-full border border-gray-300 rounded-md shadow-sm p-2 text-center" disabled={hours === 'weekend'} />
              </div>)}
          </div>
        </div>
      </div>
      {/* Tax Information */}
      <div className="bg-white p-6 rounded-lg border border-gray-200">
        <div className="flex items-start space-x-3">
          <InfoIcon className="h-5 w-5 text-blue-500 mt-1" />
          <div>
            <h3 className="text-lg font-medium text-gray-900">
              Tax Information
            </h3>
            <p className="text-sm text-gray-500 mt-1">
              Configure wage tax credit and other tax-related settings
            </p>
          </div>
        </div>
        <div className="mt-6">
          <div className="flex items-start">
            <div className="flex items-center h-5">
              <input type="checkbox" checked={formData.applyWageTaxCredit} onChange={e => setFormData({
              ...formData,
              applyWageTaxCredit: e.target.checked
            })} className="h-4 w-4 text-blue-600 border-gray-300 rounded" />
            </div>
            <div className="ml-3">
              <label className="text-sm font-medium text-gray-700">
                Apply wage tax credit
              </label>
              <p className="text-sm text-gray-500 mt-1">
                The wage tax credit consists of tax credits that reduce the
                amount of tax and national insurance contributions
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-end space-x-4">
        <button type="button" className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
          Save as Draft
        </button>
        <button type="submit" className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700">
          Complete Registration
        </button>
      </div>
    </form>;
}