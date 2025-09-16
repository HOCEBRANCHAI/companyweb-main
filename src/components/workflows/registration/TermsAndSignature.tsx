import React, { useState } from 'react';
import { UploadIcon, PenIcon } from 'lucide-react';
interface TermsAndSignatureProps {
  onComplete: () => void;
}
export function TermsAndSignature({
  onComplete
}: TermsAndSignatureProps) {
  const [agreements, setAgreements] = useState({
    appointment: false,
    gtc: false,
    dataSharing: false,
    confirmation: false
  });
  const [dateSigned, setDateSigned] = useState('');
  const [signatureMethod, setSignatureMethod] = useState<'upload' | 'draw' | null>(null);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onComplete();
  };
  const allAgreed = Object.values(agreements).every(Boolean);
  const canSubmit = allAgreed && dateSigned && signatureMethod;
  return <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl mx-auto">
      <div className="space-y-4">
        <h3 className="text-lg font-medium text-gray-900">
          Terms and Conditions
        </h3>
        <div className="space-y-4">
          <div className="flex items-start">
            <input type="checkbox" checked={agreements.appointment} onChange={e => setAgreements({
            ...agreements,
            appointment: e.target.checked
          })} className="mt-1 h-4 w-4 text-blue-600 rounded" />
            <label className="ml-2 text-sm text-gray-700">
              I (the client) hereby appoint House of Companies as corporate
              agent in the Netherlands to provide corporate assistance for my
              company.
            </label>
          </div>
          <div className="flex items-start">
            <input type="checkbox" checked={agreements.gtc} onChange={e => setAgreements({
            ...agreements,
            gtc: e.target.checked
          })} className="mt-1 h-4 w-4 text-blue-600 rounded" />
            <label className="ml-2 text-sm text-gray-700">
              All relations between the Client and House of Companies are
              governed by the{' '}
              <a href="#" className="text-blue-600 hover:underline">
                GTC
              </a>
              .
            </label>
          </div>
          {/* Additional checkboxes */}
          {/* ... */}
        </div>
      </div>
      <div className="space-y-4">
        <h3 className="text-lg font-medium text-gray-900">Signature</h3>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Date Signed
          </label>
          <input type="date" value={dateSigned} onChange={e => setDateSigned(e.target.value)} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" required />
        </div>
        <div className="flex space-x-4">
          <button type="button" onClick={() => setSignatureMethod('upload')} className="flex-1 flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
            <UploadIcon className="h-5 w-5 mr-2" />
            Upload Signature
          </button>
          <button type="button" onClick={() => setSignatureMethod('draw')} className="flex-1 flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
            <PenIcon className="h-5 w-5 mr-2" />
            Draw Signature
          </button>
        </div>
      </div>
      <div className="flex justify-end pt-6">
        <button type="submit" disabled={!canSubmit} className={`px-4 py-2 rounded-md text-sm font-medium ${canSubmit ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-gray-100 text-gray-400 cursor-not-allowed'}`}>
          Complete Registration
        </button>
      </div>
    </form>;
}