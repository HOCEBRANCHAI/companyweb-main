import React, { useState } from 'react';
import { CreditCardIcon, LockIcon, BuildingIcon, CheckIcon, RocketIcon, ShieldCheckIcon, GlobeIcon, BookIcon } from 'lucide-react';
import { CompareModal } from '../plans/CompareModal';
export function PaymentPage() {
  const [showComparison, setShowComparison] = useState(false);
  return <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto py-16 px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-gray-900">
            Launch Your eBranch
          </h1>
          <p className="text-gray-600 mt-2">
            Your AI-powered command center for global operations
          </p>
          <button onClick={() => setShowComparison(true)} className="mt-4 text-blue-600 hover:text-blue-800 text-sm font-medium">
            Compare Plans
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Payment Form - Left Side */}
          <div className="md:col-span-3">
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
              {/* Secure Badge */}
              <div className="flex items-center justify-center space-x-2 bg-gray-50 py-2 px-4 rounded-full mb-6 w-fit">
                <LockIcon className="h-4 w-4 text-gray-500" />
                <span className="text-sm text-gray-600">Secure checkout</span>
              </div>
              {/* Payment Methods */}
              <div className="space-y-4 mb-8">
                <div className="flex items-center justify-between p-4 border-2 border-blue-500 rounded-lg bg-blue-50">
                  <div className="flex items-center">
                    <CreditCardIcon className="h-5 w-5 text-blue-600 mr-3" />
                    <div>
                      <p className="font-medium text-gray-900">Credit Card</p>
                      <p className="text-sm text-gray-500">
                        All major cards accepted
                      </p>
                    </div>
                  </div>
                  <input type="radio" name="payment-method" className="h-4 w-4 text-blue-600 border-gray-300" defaultChecked />
                </div>
                <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                  <div className="flex items-center">
                    <BuildingIcon className="h-5 w-5 text-gray-400 mr-3" />
                    <div>
                      <p className="font-medium text-gray-900">Bank Transfer</p>
                      <p className="text-sm text-gray-500">
                        Direct bank transfer (SEPA)
                      </p>
                    </div>
                  </div>
                  <input type="radio" name="payment-method" className="h-4 w-4 text-blue-600 border-gray-300" />
                </div>
              </div>
              {/* Card Details Form */}
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Card number
                  </label>
                  <input type="text" placeholder="4242 4242 4242 4242" className="w-full p-3 border border-gray-300 rounded-md" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Expiry date
                    </label>
                    <input type="text" placeholder="MM/YY" className="w-full p-3 border border-gray-300 rounded-md" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Security code
                    </label>
                    <input type="text" placeholder="CVC" className="w-full p-3 border border-gray-300 rounded-md" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Name on card
                  </label>
                  <input type="text" placeholder="Full name" className="w-full p-3 border border-gray-300 rounded-md" />
                </div>
              </div>
              {/* Pay Button */}
              <button className="mt-8 w-full bg-blue-600 text-white py-4 px-4 rounded-md hover:bg-blue-700 font-medium flex items-center justify-center">
                <LockIcon className="h-4 w-4 mr-2" />
                Pay €1,495.00
              </button>
            </div>
          </div>
          {/* Order Summary - Right Side */}
          <div className="md:col-span-2">
            <div className="bg-white p-6 rounded-lg border border-gray-200 sticky top-6">
              <div className="flex items-center space-x-3 mb-6">
                <RocketIcon className="h-6 w-6 text-blue-600" />
                <h2 className="text-lg font-semibold text-gray-900">eBranch</h2>
              </div>
              {/* Pricing Breakdown */}
              <div className="space-y-4 mb-6">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Annual subscription</span>
                  <span className="text-gray-900">€1,495.00</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">VAT (21%)</span>
                  <span className="text-gray-900">€313.95</span>
                </div>
                <div className="border-t border-gray-200 pt-4 flex justify-between">
                  <span className="font-medium text-gray-900">Total</span>
                  <span className="font-bold text-gray-900">€1,808.95</span>
                </div>
              </div>
              {/* Features List */}
              <div className="bg-gray-50 rounded-lg p-4 space-y-3">
                <h3 className="font-medium text-gray-900 mb-3">
                  What's included:
                </h3>
                <div className="flex items-start">
                  <CheckIcon className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                  <span className="text-sm text-gray-600">
                    Core Bookkeeping Portal with AI-powered insights
                  </span>
                </div>
                <div className="flex items-start">
                  <CheckIcon className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                  <span className="text-sm text-gray-600">
                    Branch Office Registration in the Netherlands
                  </span>
                </div>
                <div className="flex items-start">
                  <CheckIcon className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                  <span className="text-sm text-gray-600">
                    VAT and EORI Number Application
                  </span>
                </div>
                <div className="flex items-start">
                  <CheckIcon className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                  <span className="text-sm text-gray-600">
                    Quarterly VAT Analysis & Annual Corporate Analysis
                  </span>
                </div>
              </div>
              {/* Trust Badges */}
              <div className="mt-6 pt-6 border-t border-gray-200">
                <div className="flex items-center justify-center space-x-4">
                  <div className="flex items-center text-sm text-gray-500">
                    <ShieldCheckIcon className="h-4 w-4 mr-1" />
                    Secure
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <GlobeIcon className="h-4 w-4 mr-1" />
                    Global
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <BookIcon className="h-4 w-4 mr-1" />
                    Compliant
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {showComparison && <CompareModal onClose={() => setShowComparison(false)} />}
    </div>;
}