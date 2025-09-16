import React, { useState } from 'react';
import { CalendarIcon, ClockIcon } from 'lucide-react';
interface PayrollRegistrationFormProps {
  onComplete: () => void;
}
interface WorkSchedule {
  [key: string]: number | string;
}
export function PayrollRegistrationForm({
  onComplete
}: PayrollRegistrationFormProps) {
  const [formData, setFormData] = useState({
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
    hoursPerWeek: '',
    salary: {
      amount: '',
      type: 'monthly'
    },
    workSchedule: {
      Monday: 4,
      Tuesday: 4,
      Wednesday: 4,
      Thursday: 4,
      Friday: 4,
      Saturday: 'weekend',
      Sunday: 'weekend'
    },
    applyWageTaxCredit: true,
    bankAccount: ''
  });
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onComplete();
  };
  return <form onSubmit={handleSubmit} className="space-y-8">
      {/* Personal Information */}
      <div className="space-y-4">
        <h3 className="text-lg font-medium text-gray-900">
          Personal Information
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
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
      </div>
      {/* Work Schedule */}
      <div className="space-y-4">
        <h3 className="text-lg font-medium text-gray-900">Work Schedule</h3>
        <div className="grid grid-cols-7 gap-4">
          {Object.entries(formData.workSchedule).map(([day, hours]) => <div key={day}>
              <label className="block text-sm font-medium text-gray-700">
                {day}
              </label>
              <input type="text" value={hours} onChange={e => setFormData({
            ...formData,
            workSchedule: {
              ...formData.workSchedule,
              [day]: e.target.value
            }
          })} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 text-center" disabled={hours === 'weekend'} />
            </div>)}
        </div>
      </div>
      {/* Tax Information */}
      <div className="space-y-4">
        <h3 className="text-lg font-medium text-gray-900">Tax Information</h3>
        <div className="flex items-start space-x-3">
          <input type="checkbox" checked={formData.applyWageTaxCredit} onChange={e => setFormData({
          ...formData,
          applyWageTaxCredit: e.target.checked
        })} className="mt-1 h-4 w-4 text-blue-600 rounded border-gray-300" />
          <div>
            <label className="text-sm font-medium text-gray-900">
              Apply wage tax credit
            </label>
            <p className="text-sm text-gray-500 mt-1">
              The wage tax credit consists of tax credits that reduce the amount
              of tax and national insurance contributions.
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-end pt-6">
        <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 text-sm font-medium">
          Complete Registration
        </button>
      </div>
    </form>;
}