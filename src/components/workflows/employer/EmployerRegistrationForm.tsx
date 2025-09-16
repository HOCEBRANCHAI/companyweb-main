import React from 'react';
import { BuildingIcon, UserIcon, ArrowLeftIcon, BriefcaseIcon, PhoneIcon, CalendarIcon, CheckIcon, FileTextIcon, ClockIcon } from 'lucide-react';
interface EmployerRegistrationFormProps {
  formData: any;
  onDataChange: (data: any) => void;
  currentStep: number;
  onContinue: () => void;
  onBack: () => void;
  onComplete: () => void;
}
export function EmployerRegistrationForm({
  formData,
  onDataChange,
  currentStep,
  onContinue,
  onBack,
  onComplete
}: EmployerRegistrationFormProps) {
  const handleInputChange = (field: string, value: any) => {
    onDataChange({
      [field]: value
    });
  };
  const handleCheckboxChange = (field: string, value: string) => {
    const currentValues = formData[field] || [];
    if (currentValues.includes(value)) {
      handleInputChange(field, currentValues.filter((v: string) => v !== value));
    } else {
      handleInputChange(field, [...currentValues, value]);
    }
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (currentStep < 3) {
      onContinue();
    } else {
      onComplete();
    }
  };
  const renderStep1 = () => <>
      <div className="bg-blue-50 border border-blue-100 rounded-lg p-4 mb-6">
        <p className="text-sm text-blue-700">
          Please provide your company information to register as an employer in{' '}
          {formData.country}.
        </p>
      </div>
      {/* Company Information */}
      <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6">
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
            <input type="text" value={formData.companyName} onChange={e => handleInputChange('companyName', e.target.value)} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" required />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Country <span className="text-red-500">*</span>
            </label>
            <select value={formData.country} onChange={e => handleInputChange('country', e.target.value)} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" required>
              <option value="Netherlands">Netherlands</option>
              <option value="Germany">Germany</option>
              <option value="Belgium">Belgium</option>
              <option value="France">France</option>
              <option value="Spain">Spain</option>
              <option value="Italy">Italy</option>
            </select>
          </div>
        </div>
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700">
            Company Address <span className="text-red-500">*</span>
          </label>
          <input type="text" value={formData.companyAddress} onChange={e => handleInputChange('companyAddress', e.target.value)} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" required placeholder="Full address including postal code and city" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Legal Form <span className="text-red-500">*</span>
            </label>
            <select value={formData.legalForm} onChange={e => handleInputChange('legalForm', e.target.value)} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" required>
              <option value="">Select legal form</option>
              <option value="sole_proprietor">Sole Proprietor</option>
              <option value="partnership">Partnership</option>
              <option value="bv">BV (Private Limited)</option>
              <option value="nv">NV (Public Limited)</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Business Activity <span className="text-red-500">*</span>
            </label>
            <input type="text" value={formData.businessActivity} onChange={e => handleInputChange('businessActivity', e.target.value)} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" required placeholder="Main business activity" />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Tax/VAT Number <span className="text-red-500">*</span>
            </label>
            <input type="text" value={formData.taxNumber} onChange={e => handleInputChange('taxNumber', e.target.value)} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" required />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Chamber of Commerce Number <span className="text-red-500">*</span>
            </label>
            <input type="text" value={formData.chamberOfCommerceNumber} onChange={e => handleInputChange('chamberOfCommerceNumber', e.target.value)} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" required />
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Contact Person <span className="text-red-500">*</span>
            </label>
            <input type="text" value={formData.contactPerson} onChange={e => handleInputChange('contactPerson', e.target.value)} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" required />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email <span className="text-red-500">*</span>
            </label>
            <input type="email" value={formData.contactEmail} onChange={e => handleInputChange('contactEmail', e.target.value)} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" required />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Phone <span className="text-red-500">*</span>
            </label>
            <input type="tel" value={formData.contactPhone} onChange={e => handleInputChange('contactPhone', e.target.value)} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" required />
          </div>
        </div>
      </div>
    </>;
  const renderStep2 = () => <>
      <div className="bg-blue-50 border border-blue-100 rounded-lg p-4 mb-6">
        <p className="text-sm text-blue-700">
          Please provide details about your employment plans in{' '}
          {formData.country}.
        </p>
      </div>
      {/* Employment Details */}
      <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6">
        <div className="flex items-center mb-4">
          <BriefcaseIcon className="h-5 w-5 text-blue-600 mr-2" />
          <h3 className="text-lg font-medium text-gray-900">
            Employment Details
          </h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Employment Start Date <span className="text-red-500">*</span>
            </label>
            <div className="mt-1 relative">
              <input type="date" value={formData.employmentStartDate} onChange={e => handleInputChange('employmentStartDate', e.target.value)} className="block w-full border border-gray-300 rounded-md shadow-sm p-2" required />
              <CalendarIcon className="absolute right-2 top-2.5 h-5 w-5 text-gray-400" />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Expected Number of Employees{' '}
              <span className="text-red-500">*</span>
            </label>
            <select value={formData.expectedEmployeeCount} onChange={e => handleInputChange('expectedEmployeeCount', e.target.value)} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" required>
              <option value="1-5">1-5 employees</option>
              <option value="6-10">6-10 employees</option>
              <option value="11-20">11-20 employees</option>
              <option value="21-50">21-50 employees</option>
              <option value="50+">More than 50 employees</option>
            </select>
          </div>
        </div>
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Types of Employment <span className="text-red-500">*</span>
          </label>
          <div className="space-y-2">
            <div className="flex items-center">
              <input type="checkbox" id="full_time" checked={formData.employmentTypes.includes('full_time')} onChange={() => handleCheckboxChange('employmentTypes', 'full_time')} className="h-4 w-4 text-blue-600 border-gray-300 rounded" />
              <label htmlFor="full_time" className="ml-2 block text-sm text-gray-700">
                Full-time employees
              </label>
            </div>
            <div className="flex items-center">
              <input type="checkbox" id="part_time" checked={formData.employmentTypes.includes('part_time')} onChange={() => handleCheckboxChange('employmentTypes', 'part_time')} className="h-4 w-4 text-blue-600 border-gray-300 rounded" />
              <label htmlFor="part_time" className="ml-2 block text-sm text-gray-700">
                Part-time employees
              </label>
            </div>
            <div className="flex items-center">
              <input type="checkbox" id="temporary" checked={formData.employmentTypes.includes('temporary')} onChange={() => handleCheckboxChange('employmentTypes', 'temporary')} className="h-4 w-4 text-blue-600 border-gray-300 rounded" />
              <label htmlFor="temporary" className="ml-2 block text-sm text-gray-700">
                Temporary/Fixed-term contracts
              </label>
            </div>
            <div className="flex items-center">
              <input type="checkbox" id="freelance" checked={formData.employmentTypes.includes('freelance')} onChange={() => handleCheckboxChange('employmentTypes', 'freelance')} className="h-4 w-4 text-blue-600 border-gray-300 rounded" />
              <label htmlFor="freelance" className="ml-2 block text-sm text-gray-700">
                Freelancers/Independent contractors
              </label>
            </div>
          </div>
        </div>
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Payroll Frequency <span className="text-red-500">*</span>
          </label>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center">
              <input type="radio" id="monthly" checked={formData.payrollFrequency === 'monthly'} onChange={() => handleInputChange('payrollFrequency', 'monthly')} className="h-4 w-4 text-blue-600 border-gray-300" />
              <label htmlFor="monthly" className="ml-2 block text-sm text-gray-700">
                Monthly
              </label>
            </div>
            <div className="flex items-center">
              <input type="radio" id="biweekly" checked={formData.payrollFrequency === 'biweekly'} onChange={() => handleInputChange('payrollFrequency', 'biweekly')} className="h-4 w-4 text-blue-600 border-gray-300" />
              <label htmlFor="biweekly" className="ml-2 block text-sm text-gray-700">
                Bi-weekly
              </label>
            </div>
            <div className="flex items-center">
              <input type="radio" id="weekly" checked={formData.payrollFrequency === 'weekly'} onChange={() => handleInputChange('payrollFrequency', 'weekly')} className="h-4 w-4 text-blue-600 border-gray-300" />
              <label htmlFor="weekly" className="ml-2 block text-sm text-gray-700">
                Weekly
              </label>
            </div>
            <div className="flex items-center">
              <input type="radio" id="other_frequency" checked={formData.payrollFrequency === 'other'} onChange={() => handleInputChange('payrollFrequency', 'other')} className="h-4 w-4 text-blue-600 border-gray-300" />
              <label htmlFor="other_frequency" className="ml-2 block text-sm text-gray-700">
                Other
              </label>
            </div>
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Benefits Offered
          </label>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center">
              <input type="checkbox" id="health_insurance" checked={formData.benefitsOffered.includes('health_insurance')} onChange={() => handleCheckboxChange('benefitsOffered', 'health_insurance')} className="h-4 w-4 text-blue-600 border-gray-300 rounded" />
              <label htmlFor="health_insurance" className="ml-2 block text-sm text-gray-700">
                Health Insurance
              </label>
            </div>
            <div className="flex items-center">
              <input type="checkbox" id="pension" checked={formData.benefitsOffered.includes('pension')} onChange={() => handleCheckboxChange('benefitsOffered', 'pension')} className="h-4 w-4 text-blue-600 border-gray-300 rounded" />
              <label htmlFor="pension" className="ml-2 block text-sm text-gray-700">
                Pension Plan
              </label>
            </div>
            <div className="flex items-center">
              <input type="checkbox" id="paid_leave" checked={formData.benefitsOffered.includes('paid_leave')} onChange={() => handleCheckboxChange('benefitsOffered', 'paid_leave')} className="h-4 w-4 text-blue-600 border-gray-300 rounded" />
              <label htmlFor="paid_leave" className="ml-2 block text-sm text-gray-700">
                Paid Leave
              </label>
            </div>
            <div className="flex items-center">
              <input type="checkbox" id="bonuses" checked={formData.benefitsOffered.includes('bonuses')} onChange={() => handleCheckboxChange('benefitsOffered', 'bonuses')} className="h-4 w-4 text-blue-600 border-gray-300 rounded" />
              <label htmlFor="bonuses" className="ml-2 block text-sm text-gray-700">
                Bonuses/Profit Sharing
              </label>
            </div>
          </div>
        </div>
      </div>
      {/* Working Hours Policy */}
      <div className="bg-white border border-gray-200 rounded-lg p-6">
        <div className="flex items-center mb-4">
          <ClockIcon className="h-5 w-5 text-blue-600 mr-2" />
          <h3 className="text-lg font-medium text-gray-900">
            Working Hours Policy
          </h3>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Working Hours Policy <span className="text-red-500">*</span>
          </label>
          <textarea value={formData.workingHoursPolicy} onChange={e => handleInputChange('workingHoursPolicy', e.target.value)} rows={3} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" required placeholder="Describe your company's working hours policy (e.g., 40 hours per week, 9 AM - 5 PM)" />
        </div>
      </div>
    </>;
  const renderStep3 = () => <>
      <div className="bg-blue-50 border border-blue-100 rounded-lg p-4 mb-6">
        <p className="text-sm text-blue-700">
          Please review your information before submitting your employer
          registration application.
        </p>
      </div>
      {/* Review Information */}
      <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6">
        <div className="flex items-center mb-4">
          <FileTextIcon className="h-5 w-5 text-blue-600 mr-2" />
          <h3 className="text-lg font-medium text-gray-900">
            Review Information
          </h3>
        </div>
        <div className="space-y-6">
          <div>
            <h4 className="text-sm font-medium text-gray-700 mb-2">
              Company Details
            </h4>
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-600">Company Name</p>
                  <p className="font-medium">{formData.companyName}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Country</p>
                  <p className="font-medium">{formData.country}</p>
                </div>
                <div className="col-span-2">
                  <p className="text-sm text-gray-600">Address</p>
                  <p className="font-medium">{formData.companyAddress}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Legal Form</p>
                  <p className="font-medium">
                    {formData.legalForm?.replace('_', ' ')}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Business Activity</p>
                  <p className="font-medium">{formData.businessActivity}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Tax/VAT Number</p>
                  <p className="font-medium">{formData.taxNumber}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">
                    Chamber of Commerce Number
                  </p>
                  <p className="font-medium">
                    {formData.chamberOfCommerceNumber}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h4 className="text-sm font-medium text-gray-700 mb-2">
              Employment Details
            </h4>
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-gray-600">
                      Employment Start Date
                    </p>
                    <p className="font-medium">
                      {formData.employmentStartDate}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">
                      Expected Employee Count
                    </p>
                    <p className="font-medium">
                      {formData.expectedEmployeeCount}
                    </p>
                  </div>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Employment Types</p>
                  <ul className="list-disc list-inside">
                    {formData.employmentTypes.map((type: string) => <li key={type} className="font-medium">
                        {type.replace('_', ' ')}
                      </li>)}
                  </ul>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Payroll Frequency</p>
                  <p className="font-medium">{formData.payrollFrequency}</p>
                </div>
                {formData.benefitsOffered.length > 0 && <div>
                    <p className="text-sm text-gray-600">Benefits Offered</p>
                    <ul className="list-disc list-inside">
                      {formData.benefitsOffered.map((benefit: string) => <li key={benefit} className="font-medium">
                          {benefit.replace('_', ' ')}
                        </li>)}
                    </ul>
                  </div>}
                <div>
                  <p className="text-sm text-gray-600">Working Hours Policy</p>
                  <p className="font-medium">{formData.workingHoursPolicy}</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h4 className="text-sm font-medium text-gray-700 mb-2">
              Contact Information
            </h4>
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <p className="text-sm text-gray-600">Contact Person</p>
                  <p className="font-medium">{formData.contactPerson}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Email</p>
                  <p className="font-medium">{formData.contactEmail}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Phone</p>
                  <p className="font-medium">{formData.contactPhone}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Terms and Conditions */}
      <div className="bg-white border border-gray-200 rounded-lg p-6">
        <div className="flex items-start mb-4">
          <div className="flex items-center h-5">
            <input id="acceptTerms" type="checkbox" checked={formData.acceptTerms} onChange={e => handleInputChange('acceptTerms', e.target.checked)} className="h-4 w-4 text-blue-600 border-gray-300 rounded" required />
          </div>
          <label htmlFor="acceptTerms" className="ml-2 block text-sm text-gray-700">
            I confirm that all information provided is accurate and complete. I
            authorize the submission of this employer registration application.
          </label>
        </div>
      </div>
    </>;
  return <form onSubmit={handleSubmit} className="space-y-8">
      {currentStep === 1 && renderStep1()}
      {currentStep === 2 && renderStep2()}
      {currentStep === 3 && renderStep3()}
      <div className="flex justify-between pt-6">
        {currentStep > 1 ? <button type="button" onClick={onBack} className="px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 text-sm font-medium flex items-center">
            <ArrowLeftIcon className="mr-2 h-4 w-4" />
            Back
          </button> : <div></div>}
        <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 text-sm font-medium" disabled={currentStep === 3 && !formData.acceptTerms}>
          {currentStep < 3 ? 'Continue' : 'Submit Application'}
        </button>
      </div>
    </form>;
}