import React, { useState } from 'react';
import { CheckIcon, InfoIcon, ArrowLeftIcon } from 'lucide-react';
interface TermsAndConfirmationProps {
  onComplete: () => void;
  onBack: () => void;
}
export function TermsAndConfirmation({
  onComplete,
  onBack
}: TermsAndConfirmationProps) {
  const [agreements, setAgreements] = useState({
    terms: false,
    dataProcessing: false,
    accuracy: false,
    notification: false
  });
  const [submitting, setSubmitting] = useState(false);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    // Simulate submission process
    setTimeout(() => {
      setSubmitting(false);
      onComplete();
    }, 1500);
  };
  const allAgreed = Object.values(agreements).every(Boolean);
  return <form onSubmit={handleSubmit} className="space-y-6">
      <div className="bg-blue-50 border border-blue-100 rounded-lg p-4">
        <div className="flex">
          <InfoIcon className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
          <div className="ml-3">
            <h3 className="text-sm font-medium text-blue-800">Almost Done!</h3>
            <p className="text-sm text-blue-700 mt-1">
              Please review the terms and conditions below before completing
              your branch registration application.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-white border border-gray-200 rounded-lg p-6">
        <h3 className="text-lg font-medium text-gray-900 mb-4">
          Terms and Conditions
        </h3>
        <div className="space-y-4">
          <div className="flex items-start">
            <input type="checkbox" id="terms" checked={agreements.terms} onChange={e => setAgreements({
            ...agreements,
            terms: e.target.checked
          })} className="mt-1 h-4 w-4 text-blue-600 rounded border-gray-300" />
            <label htmlFor="terms" className="ml-2 text-sm text-gray-700">
              I have read and agree to the{' '}
              <a href="#" className="text-blue-600 hover:underline">
                Terms and Conditions
              </a>{' '}
              and{' '}
              <a href="#" className="text-blue-600 hover:underline">
                Privacy Policy
              </a>{' '}
              of House of Companies.
            </label>
          </div>
          <div className="flex items-start">
            <input type="checkbox" id="dataProcessing" checked={agreements.dataProcessing} onChange={e => setAgreements({
            ...agreements,
            dataProcessing: e.target.checked
          })} className="mt-1 h-4 w-4 text-blue-600 rounded border-gray-300" />
            <label htmlFor="dataProcessing" className="ml-2 text-sm text-gray-700">
              I consent to the processing of personal data provided in this
              application for the purpose of branch registration in the
              Netherlands.
            </label>
          </div>
          <div className="flex items-start">
            <input type="checkbox" id="accuracy" checked={agreements.accuracy} onChange={e => setAgreements({
            ...agreements,
            accuracy: e.target.checked
          })} className="mt-1 h-4 w-4 text-blue-600 rounded border-gray-300" />
            <label htmlFor="accuracy" className="ml-2 text-sm text-gray-700">
              I confirm that all information provided in this application is
              accurate, complete, and up-to-date to the best of my knowledge.
            </label>
          </div>
          <div className="flex items-start">
            <input type="checkbox" id="notification" checked={agreements.notification} onChange={e => setAgreements({
            ...agreements,
            notification: e.target.checked
          })} className="mt-1 h-4 w-4 text-blue-600 rounded border-gray-300" />
            <label htmlFor="notification" className="ml-2 text-sm text-gray-700">
              I understand that I will be notified by email about the progress
              of my branch registration application.
            </label>
          </div>
        </div>
      </div>
      <div className="bg-white border border-gray-200 rounded-lg p-6">
        <h3 className="text-lg font-medium text-gray-900 mb-4">
          What Happens Next?
        </h3>
        <div className="space-y-3">
          <div className="flex items-start">
            <div className="flex-shrink-0 h-5 w-5 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 font-medium text-xs">
              1
            </div>
            <p className="ml-3 text-sm text-gray-600">
              Our team will review your application and documents within 1-2
              business days.
            </p>
          </div>
          <div className="flex items-start">
            <div className="flex-shrink-0 h-5 w-5 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 font-medium text-xs">
              2
            </div>
            <p className="ml-3 text-sm text-gray-600">
              We'll prepare the necessary registration forms for the Dutch
              Chamber of Commerce (KVK).
            </p>
          </div>
          <div className="flex items-start">
            <div className="flex-shrink-0 h-5 w-5 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 font-medium text-xs">
              3
            </div>
            <p className="ml-3 text-sm text-gray-600">
              You'll receive the forms for review and digital signature.
            </p>
          </div>
          <div className="flex items-start">
            <div className="flex-shrink-0 h-5 w-5 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 font-medium text-xs">
              4
            </div>
            <p className="ml-3 text-sm text-gray-600">
              We'll submit the application to the KVK and handle all
              communication with authorities.
            </p>
          </div>
          <div className="flex items-start">
            <div className="flex-shrink-0 h-5 w-5 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 font-medium text-xs">
              5
            </div>
            <p className="ml-3 text-sm text-gray-600">
              Once registered, you'll receive all official documents and your
              KVK extract.
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-between pt-6">
        <button type="button" onClick={onBack} className="px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 text-sm font-medium flex items-center">
          <ArrowLeftIcon className="mr-2 h-4 w-4" />
          Back
        </button>
        <button type="submit" disabled={!allAgreed || submitting} className={`px-4 py-2 rounded-md text-sm font-medium ${allAgreed && !submitting ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-gray-100 text-gray-400 cursor-not-allowed'}`}>
          {submitting ? 'Submitting...' : 'Complete Registration'}
        </button>
      </div>
    </form>;
}