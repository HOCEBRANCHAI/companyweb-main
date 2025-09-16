import React, { useState } from 'react';
import { CreditCardIcon, BuildingIcon, EuroIcon, CheckIcon, InfoIcon } from 'lucide-react';
interface PaymentSectionProps {
  amount: number;
  onComplete: () => void;
}
export function PaymentSection({
  amount,
  onComplete
}: PaymentSectionProps) {
  const [paymentMethod, setPaymentMethod] = useState<'credit_card' | 'bank_transfer'>('credit_card');
  const [cardDetails, setCardDetails] = useState({
    cardNumber: '',
    cardHolder: '',
    expiryDate: '',
    cvv: ''
  });
  const [isProcessing, setIsProcessing] = useState(false);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false);
      onComplete();
    }, 1500);
  };
  return <div className="space-y-6 max-w-2xl mx-auto">
      <div className="bg-blue-50 border border-blue-100 rounded-lg p-4">
        <div className="flex">
          <InfoIcon className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
          <div className="ml-3">
            <h3 className="text-sm font-medium text-blue-800">
              Payment for Dutch BV Registration
            </h3>
            <p className="text-sm text-blue-700 mt-1">
              Your payment covers the formation of your Dutch BV, including
              notarial deed preparation, registration with the Chamber of
              Commerce, and initial legal setup.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-white border border-gray-200 rounded-lg p-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-3">
            <BuildingIcon className="h-6 w-6 text-blue-600" />
            <div>
              <h3 className="text-lg font-medium text-gray-900">
                Dutch BV Formation Package
              </h3>
              <p className="text-sm text-gray-500">
                Complete company formation service
              </p>
            </div>
          </div>
          <div className="text-xl font-bold text-gray-900">
            €{amount.toLocaleString()}
          </div>
        </div>
        <div className="border-t border-gray-200 pt-4">
          <h4 className="text-sm font-medium text-gray-900 mb-3">
            Package includes:
          </h4>
          <ul className="space-y-2">
            <li className="flex items-start">
              <CheckIcon className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
              <span className="text-sm text-gray-600">
                Notarial deed preparation and execution
              </span>
            </li>
            <li className="flex items-start">
              <CheckIcon className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
              <span className="text-sm text-gray-600">
                Chamber of Commerce (KVK) registration
              </span>
            </li>
            <li className="flex items-start">
              <CheckIcon className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
              <span className="text-sm text-gray-600">
                Articles of Association in Dutch and English
              </span>
            </li>
            <li className="flex items-start">
              <CheckIcon className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
              <span className="text-sm text-gray-600">UBO registration</span>
            </li>
            <li className="flex items-start">
              <CheckIcon className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
              <span className="text-sm text-gray-600">
                Registration with Tax Authorities
              </span>
            </li>
          </ul>
        </div>
      </div>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <h3 className="text-lg font-medium text-gray-900 mb-4">
            Payment Method
          </h3>
          <div className="grid grid-cols-2 gap-4">
            <button type="button" onClick={() => setPaymentMethod('credit_card')} className={`flex items-center justify-center p-4 border rounded-lg ${paymentMethod === 'credit_card' ? 'border-blue-600 bg-blue-50' : 'border-gray-200 hover:bg-gray-50'}`}>
              <CreditCardIcon className={`h-5 w-5 mr-2 ${paymentMethod === 'credit_card' ? 'text-blue-600' : 'text-gray-400'}`} />
              <span className={`text-sm font-medium ${paymentMethod === 'credit_card' ? 'text-blue-700' : 'text-gray-700'}`}>
                Credit Card
              </span>
            </button>
            <button type="button" onClick={() => setPaymentMethod('bank_transfer')} className={`flex items-center justify-center p-4 border rounded-lg ${paymentMethod === 'bank_transfer' ? 'border-blue-600 bg-blue-50' : 'border-gray-200 hover:bg-gray-50'}`}>
              <EuroIcon className={`h-5 w-5 mr-2 ${paymentMethod === 'bank_transfer' ? 'text-blue-600' : 'text-gray-400'}`} />
              <span className={`text-sm font-medium ${paymentMethod === 'bank_transfer' ? 'text-blue-700' : 'text-gray-700'}`}>
                Bank Transfer
              </span>
            </button>
          </div>
        </div>
        {paymentMethod === 'credit_card' && <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Card Number
              </label>
              <input type="text" value={cardDetails.cardNumber} onChange={e => setCardDetails({
            ...cardDetails,
            cardNumber: e.target.value
          })} placeholder="1234 5678 9012 3456" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" required />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Card Holder
              </label>
              <input type="text" value={cardDetails.cardHolder} onChange={e => setCardDetails({
            ...cardDetails,
            cardHolder: e.target.value
          })} placeholder="John Doe" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" required />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Expiry Date
                </label>
                <input type="text" value={cardDetails.expiryDate} onChange={e => setCardDetails({
              ...cardDetails,
              expiryDate: e.target.value
            })} placeholder="MM/YY" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" required />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  CVV
                </label>
                <input type="text" value={cardDetails.cvv} onChange={e => setCardDetails({
              ...cardDetails,
              cvv: e.target.value
            })} placeholder="123" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" required />
              </div>
            </div>
          </div>}
        {paymentMethod === 'bank_transfer' && <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
            <h4 className="text-sm font-medium text-gray-900 mb-2">
              Bank Transfer Details
            </h4>
            <div className="space-y-2 text-sm text-gray-600">
              <p>Please transfer the amount to the following account:</p>
              <p>Bank: ING Bank</p>
              <p>Account Name: House of Companies B.V.</p>
              <p>IBAN: NL12 INGB 0123 4567 89</p>
              <p>Reference: Dutch BV Formation - [Your Company Name]</p>
              <p className="text-yellow-600 mt-2">
                Note: Your registration will be processed after payment
                confirmation.
              </p>
            </div>
          </div>}
        <div className="flex justify-end pt-6">
          <button type="submit" disabled={isProcessing} className={`px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 text-sm font-medium ${isProcessing ? 'opacity-70 cursor-not-allowed' : ''}`}>
            {isProcessing ? 'Processing...' : 'Complete Payment'}
          </button>
        </div>
      </form>
    </div>;
}