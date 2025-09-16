import React, { useState } from 'react';
import { PenIcon, UploadIcon, ArrowLeftIcon, CheckIcon, DownloadIcon, MailIcon } from 'lucide-react';
interface NDASignatureProps {
  formData: any;
  onComplete: () => void;
  onBack: () => void;
}
export function NDASignature({
  formData,
  onComplete,
  onBack
}: NDASignatureProps) {
  const [signatureMethod, setSignatureMethod] = useState<'draw' | 'upload' | null>(null);
  const [signatureDate, setSignatureDate] = useState('');
  const [signed, setSigned] = useState(false);
  const [sendToCounterparty, setSendToCounterparty] = useState(true);
  const [counterpartyEmail, setCounterpartyEmail] = useState('');
  const handleSign = () => {
    setSigned(true);
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onComplete();
  };
  return <form onSubmit={handleSubmit} className="space-y-8">
      <div className="bg-white border border-gray-200 rounded-lg p-6">
        <h3 className="text-lg font-medium text-gray-900 mb-4">
          Sign Agreement
        </h3>
        {!signed ? <>
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Signature Date <span className="text-red-500">*</span>
              </label>
              <input type="date" value={signatureDate} onChange={e => setSignatureDate(e.target.value)} className="block w-full border border-gray-300 rounded-md shadow-sm p-2" required />
            </div>
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Signature Method <span className="text-red-500">*</span>
              </label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <button type="button" onClick={() => setSignatureMethod('draw')} className={`flex items-center justify-center px-4 py-2 border rounded-md text-sm font-medium ${signatureMethod === 'draw' ? 'bg-blue-50 border-blue-300 text-blue-700' : 'border-gray-300 text-gray-700 hover:bg-gray-50'}`}>
                  <PenIcon className="mr-2 h-4 w-4" />
                  Draw Signature
                </button>
                <button type="button" onClick={() => setSignatureMethod('upload')} className={`flex items-center justify-center px-4 py-2 border rounded-md text-sm font-medium ${signatureMethod === 'upload' ? 'bg-blue-50 border-blue-300 text-blue-700' : 'border-gray-300 text-gray-700 hover:bg-gray-50'}`}>
                  <UploadIcon className="mr-2 h-4 w-4" />
                  Upload Signature
                </button>
              </div>
            </div>
            {signatureMethod === 'draw' && <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Draw Your Signature
                </label>
                <div className="border-2 border-dashed border-gray-300 rounded-md p-6 flex flex-col items-center justify-center bg-gray-50">
                  <div className="w-full h-32 bg-white border border-gray-300 rounded-md mb-4"></div>
                  <button type="button" className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 text-sm font-medium">
                    Clear
                  </button>
                </div>
              </div>}
            {signatureMethod === 'upload' && <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Upload Your Signature
                </label>
                <div className="border-2 border-dashed border-gray-300 rounded-md p-6 flex flex-col items-center justify-center bg-gray-50">
                  <UploadIcon className="h-10 w-10 text-gray-400 mb-2" />
                  <p className="text-sm text-gray-500 mb-2">
                    Click to upload or drag and drop
                  </p>
                  <p className="text-xs text-gray-400 mb-4">
                    PNG, JPG up to 2MB
                  </p>
                  <input type="file" className="hidden" accept=".jpg,.jpeg,.png" />
                  <button type="button" className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 text-sm font-medium">
                    Select File
                  </button>
                </div>
              </div>}
            <button type="button" onClick={handleSign} disabled={!signatureMethod || !signatureDate} className={`w-full px-4 py-2 rounded-md text-sm font-medium ${signatureMethod && signatureDate ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-gray-100 text-gray-400 cursor-not-allowed'}`}>
              Sign Document
            </button>
          </> : <div className="text-center py-6">
            <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100 mb-4">
              <CheckIcon className="h-6 w-6 text-green-600" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              Document Signed Successfully
            </h3>
            <p className="text-sm text-gray-500 mb-6">
              Your signature has been added to the document
            </p>
            <div className="flex justify-center space-x-4">
              <button type="button" className="px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 text-sm font-medium flex items-center">
                <DownloadIcon className="mr-2 h-4 w-4" />
                Download Signed Copy
              </button>
            </div>
          </div>}
      </div>
      {signed && <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-medium text-gray-900 mb-4">
            Send to Counterparty
          </h3>
          <div className="flex items-center mb-4">
            <input type="checkbox" id="send-counterparty" checked={sendToCounterparty} onChange={e => setSendToCounterparty(e.target.checked)} className="h-4 w-4 text-blue-600 border-gray-300 rounded" />
            <label htmlFor="send-counterparty" className="ml-2 block text-sm text-gray-700">
              Send to counterparty for signature
            </label>
          </div>
          {sendToCounterparty && <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Counterparty Email <span className="text-red-500">*</span>
              </label>
              <div className="flex">
                <span className="inline-flex items-center px-3 py-2 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500">
                  <MailIcon className="h-4 w-4" />
                </span>
                <input type="email" value={counterpartyEmail} onChange={e => setCounterpartyEmail(e.target.value)} className="flex-1 block w-full border border-gray-300 rounded-r-md shadow-sm p-2" placeholder="email@example.com" required={sendToCounterparty} />
              </div>
            </div>}
        </div>}
      <div className="flex justify-between pt-6">
        {!signed && <button type="button" onClick={onBack} className="px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 text-sm font-medium flex items-center">
            <ArrowLeftIcon className="mr-2 h-4 w-4" />
            Back
          </button>}
        {signed && <button type="submit" className="w-full px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 text-sm font-medium">
            Complete Process
          </button>}
      </div>
    </form>;
}