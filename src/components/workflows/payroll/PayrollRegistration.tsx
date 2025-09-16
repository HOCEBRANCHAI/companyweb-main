import React, { useState } from 'react';
import { XIcon } from 'lucide-react';
import { PayrollRegistrationForm } from './PayrollRegistrationForm';
interface PayrollRegistrationProps {
  onClose: () => void;
}
export function PayrollRegistration({
  onClose
}: PayrollRegistrationProps) {
  const [currentStep, setCurrentStep] = useState(1);
  const handleComplete = () => {
    // Here you would typically submit the form data
    onClose();
  };
  return <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-xl max-w-4xl w-full m-4">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <h2 className="text-xl font-semibold text-gray-900">
            Employee Registration
          </h2>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-500">
            <XIcon className="h-6 w-6" />
          </button>
        </div>
        {/* Progress Steps */}
        <div className="px-4 py-3 bg-gray-50">
          <div className="flex items-center justify-between max-w-2xl mx-auto">
            <div className="flex items-center text-blue-600">
              <span className="h-8 w-8 flex items-center justify-center rounded-full border-2 border-current">
                1
              </span>
              <span className="ml-2 text-sm font-medium">
                Employee Information
              </span>
            </div>
          </div>
        </div>
        {/* Form Content */}
        <div className="p-6">
          <PayrollRegistrationForm onComplete={handleComplete} />
        </div>
      </div>
    </div>;
}