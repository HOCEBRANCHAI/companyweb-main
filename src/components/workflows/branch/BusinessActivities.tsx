import React, { useState } from 'react';
import { GlobeIcon, PlusIcon, XIcon, ArrowLeftIcon } from 'lucide-react';
interface BusinessActivitiesProps {
  onContinue: () => void;
  onBack: () => void;
}
export function BusinessActivities({
  onContinue,
  onBack
}: BusinessActivitiesProps) {
  const [formData, setFormData] = useState({
    primaryActivity: 'Software Development and IT Consulting',
    secondaryActivities: ['Cloud Services', 'Digital Transformation Consulting'],
    sbiCodes: ['62.01', '62.02', '70.22'],
    businessDescription: 'Tech Innovations provides cutting-edge software development and IT consulting services to enterprise clients across Europe. Our Netherlands branch will focus on serving Dutch and EU clients with digital transformation solutions, cloud migration services, and custom software development.',
    employeeCount: '5-10',
    plannedStartDate: '2024-07-01'
  });
  const handleAddSecondaryActivity = () => {
    setFormData({
      ...formData,
      secondaryActivities: [...formData.secondaryActivities, '']
    });
  };
  const handleRemoveSecondaryActivity = (index: number) => {
    const updatedActivities = [...formData.secondaryActivities];
    updatedActivities.splice(index, 1);
    setFormData({
      ...formData,
      secondaryActivities: updatedActivities
    });
  };
  const handleSecondaryActivityChange = (index: number, value: string) => {
    const updatedActivities = [...formData.secondaryActivities];
    updatedActivities[index] = value;
    setFormData({
      ...formData,
      secondaryActivities: updatedActivities
    });
  };
  const handleAddSbiCode = () => {
    setFormData({
      ...formData,
      sbiCodes: [...formData.sbiCodes, '']
    });
  };
  const handleRemoveSbiCode = (index: number) => {
    const updatedCodes = [...formData.sbiCodes];
    updatedCodes.splice(index, 1);
    setFormData({
      ...formData,
      sbiCodes: updatedCodes
    });
  };
  const handleSbiCodeChange = (index: number, value: string) => {
    const updatedCodes = [...formData.sbiCodes];
    updatedCodes[index] = value;
    setFormData({
      ...formData,
      sbiCodes: updatedCodes
    });
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onContinue();
  };
  return <form onSubmit={handleSubmit} className="space-y-6">
      <div className="bg-white border border-gray-200 rounded-lg p-6">
        <div className="flex items-center mb-6">
          <GlobeIcon className="h-5 w-5 text-blue-600 mr-2" />
          <h3 className="text-lg font-medium text-gray-900">
            Business Activities
          </h3>
        </div>
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Primary Business Activity <span className="text-red-500">*</span>
            </label>
            <input type="text" value={formData.primaryActivity} onChange={e => setFormData({
            ...formData,
            primaryActivity: e.target.value
          })} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" required />
          </div>
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="block text-sm font-medium text-gray-700">
                Secondary Business Activities
              </label>
              <button type="button" onClick={handleAddSecondaryActivity} className="flex items-center text-xs text-blue-600 hover:text-blue-800">
                <PlusIcon className="h-3 w-3 mr-1" />
                Add Activity
              </button>
            </div>
            {formData.secondaryActivities.map((activity, index) => <div key={index} className="flex items-center mb-2">
                <input type="text" value={activity} onChange={e => handleSecondaryActivityChange(index, e.target.value)} className="block w-full border border-gray-300 rounded-md shadow-sm p-2" />
                <button type="button" onClick={() => handleRemoveSecondaryActivity(index)} className="ml-2 text-red-600 hover:text-red-800">
                  <XIcon className="h-4 w-4" />
                </button>
              </div>)}
          </div>
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="block text-sm font-medium text-gray-700">
                SBI Codes (Dutch Standard Business Classification)
              </label>
              <button type="button" onClick={handleAddSbiCode} className="flex items-center text-xs text-blue-600 hover:text-blue-800">
                <PlusIcon className="h-3 w-3 mr-1" />
                Add Code
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
              {formData.sbiCodes.map((code, index) => <div key={index} className="flex items-center">
                  <input type="text" value={code} onChange={e => handleSbiCodeChange(index, e.target.value)} className="block w-full border border-gray-300 rounded-md shadow-sm p-2" placeholder="e.g., 62.01" />
                  <button type="button" onClick={() => handleRemoveSbiCode(index)} className="ml-2 text-red-600 hover:text-red-800">
                    <XIcon className="h-4 w-4" />
                  </button>
                </div>)}
            </div>
            <p className="mt-1 text-xs text-gray-500">
              SBI codes classify business activities in the Netherlands. You can
              find appropriate codes at the KVK website.
            </p>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Detailed Business Description{' '}
              <span className="text-red-500">*</span>
            </label>
            <textarea value={formData.businessDescription} onChange={e => setFormData({
            ...formData,
            businessDescription: e.target.value
          })} rows={4} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" required placeholder="Describe in detail what your branch will do in the Netherlands" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Expected Number of Employees{' '}
                <span className="text-red-500">*</span>
              </label>
              <select value={formData.employeeCount} onChange={e => setFormData({
              ...formData,
              employeeCount: e.target.value
            })} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" required>
                <option value="">Select employee count</option>
                <option value="1-4">1-4 employees</option>
                <option value="5-10">5-10 employees</option>
                <option value="11-25">11-25 employees</option>
                <option value="26-50">26-50 employees</option>
                <option value="50+">More than 50 employees</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Planned Start Date <span className="text-red-500">*</span>
              </label>
              <input type="date" value={formData.plannedStartDate} onChange={e => setFormData({
              ...formData,
              plannedStartDate: e.target.value
            })} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" required />
            </div>
          </div>
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