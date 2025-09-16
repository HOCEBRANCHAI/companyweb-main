import React, { useState } from 'react'
import { BuildingIcon, EuroIcon, ChevronDownIcon } from 'lucide-react'
import { Link } from 'react-router-dom'
export function PaymentPage() {
  const [paymentMethod, setPaymentMethod] = useState<'ideal' | 'paypal' | null>(
    null,
  )
  return (
    <div className="min-h-screen bg-[#0F0B1F] flex items-center justify-center p-4">
      <div className="bg-[#1B1537] rounded-lg max-w-4xl w-full grid grid-cols-1 lg:grid-cols-2">
        {/* Billing Form */}
        <div className="p-8 border-r border-[#2D2755]">
          <div className="flex items-center space-x-2 mb-8">
            <BuildingIcon className="h-8 w-8 text-[#EA3A70]" />
            <span className="text-lg font-bold text-white">
              House of Companies
            </span>
          </div>
          <h2 className="text-xl font-bold text-white mb-6">
            Billing Information
          </h2>
          <form className="space-y-4">
            <div>
              <label className="block text-sm text-gray-400 mb-2">Email*</label>
              <input
                type="email"
                className="w-full bg-[#0F0B1F] border border-[#2D2755] rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#EA3A70]"
                required
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-gray-400 mb-2">
                  First Name*
                </label>
                <input
                  type="text"
                  className="w-full bg-[#0F0B1F] border border-[#2D2755] rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#EA3A70]"
                  required
                />
              </div>
              <div>
                <label className="block text-sm text-gray-400 mb-2">
                  Last Name*
                </label>
                <input
                  type="text"
                  className="w-full bg-[#0F0B1F] border border-[#2D2755] rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#EA3A70]"
                  required
                />
              </div>
            </div>
            <div>
              <label className="block text-sm text-gray-400 mb-2">
                Country*
              </label>
              <div className="relative">
                <select className="w-full bg-[#0F0B1F] border border-[#2D2755] rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#EA3A70] appearance-none">
                  <option value="germany">Germany</option>
                  <option value="netherlands">Netherlands</option>
                  <option value="france">France</option>
                </select>
                <ChevronDownIcon className="absolute right-4 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              </div>
            </div>
            <div>
              <label className="block text-sm text-gray-400 mb-2">City*</label>
              <div className="relative">
                <select className="w-full bg-[#0F0B1F] border border-[#2D2755] rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#EA3A70] appearance-none">
                  <option value="berlin">Berlin</option>
                  <option value="hamburg">Hamburg</option>
                  <option value="munich">Munich</option>
                </select>
                <ChevronDownIcon className="absolute right-4 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              </div>
            </div>
            <div>
              <label className="block text-sm text-gray-400 mb-2">
                Payment Method
              </label>
              <div className="grid grid-cols-2 gap-4">
                <button
                  type="button"
                  onClick={() => setPaymentMethod('ideal')}
                  className={`flex items-center justify-center p-4 rounded-lg border ${paymentMethod === 'ideal' ? 'border-[#EA3A70] bg-[#EA3A70]/5' : 'border-[#2D2755]'}`}
                >
                  <img
                    src="https://www.ideal.nl/img/ideal-logo.png"
                    alt="iDEAL"
                    className="h-6"
                  />
                </button>
                <button
                  type="button"
                  onClick={() => setPaymentMethod('paypal')}
                  className={`flex items-center justify-center p-4 rounded-lg border ${paymentMethod === 'paypal' ? 'border-[#EA3A70] bg-[#EA3A70]/5' : 'border-[#2D2755]'}`}
                >
                  <img
                    src="https://www.paypalobjects.com/webstatic/mktg/logo/pp_cc_mark_37x23.jpg"
                    alt="PayPal"
                    className="h-6"
                  />
                </button>
              </div>
            </div>
            <div>
              <label className="flex items-center space-x-2 text-sm text-gray-400">
                <input
                  type="checkbox"
                  className="form-checkbox text-[#EA3A70]"
                />
                <span>I have coupon code</span>
              </label>
            </div>
            <button
              type="submit"
              className="w-full bg-[#EA3A70] text-white py-4 rounded-lg font-medium hover:bg-[#EA3A70]/90 transition-colors"
            >
              Pay Now
            </button>
          </form>
        </div>
        {/* Order Summary */}
        <div className="p-8">
          <h2 className="text-xl font-bold text-white mb-6">Features</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-gray-300">
                AI-powered chatbot with custom branding
              </span>
              <span className="text-white">€0.0</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-300">E-commerce</span>
              <span className="text-white">€0.0</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-300">
                Around 5,000 users per month
              </span>
              <span className="text-white">€0.0</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-300">API integration</span>
              <span className="text-white">€0.0</span>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-[#2D2755]">
            <div className="flex items-center justify-between text-sm text-gray-400">
              <span>Sales Tax 0%</span>
              <span>€0.0</span>
            </div>
            <div className="flex items-center justify-between mt-4">
              <span className="text-white font-bold">Total</span>
              <span className="text-white font-bold">€0.0</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
