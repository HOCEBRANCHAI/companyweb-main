import React from 'react';
import { Link } from 'react-router-dom';
import { XCircleIcon, ArrowLeftIcon, HomeIcon, RefreshCwIcon } from 'lucide-react';
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';

export function PaymentCancelled() {
  return (
    <div className="min-h-screen bg-[#0F0B1F]">
      <Header />
      
      <main className="max-w-4xl mx-auto px-4 py-16">
        <div className="text-center">
          <div className="mb-8">
            <XCircleIcon className="h-24 w-24 text-red-500 mx-auto mb-4" />
            <h1 className="text-4xl font-bold text-white mb-4">
              Payment Cancelled
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Your payment was cancelled. No charges were made to your account.
            </p>
          </div>

          <div className="bg-[#1B1537] rounded-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-white mb-6">What happened?</h2>
            <div className="text-left space-y-4 text-gray-300">
              <p>
                • You cancelled the payment process before completion
              </p>
              <p>
                • No money has been charged to your account
              </p>
              <p>
                • Your cart items are still available if you want to try again
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <p className="text-gray-300">
              If you encountered any issues or have questions, please don't hesitate to contact our support team.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => window.history.back()}
                className="inline-flex items-center px-6 py-3 bg-[#EA3A70] text-white rounded-lg hover:bg-[#EA3A70]/90 transition-colors"
              >
                <RefreshCwIcon className="h-5 w-5 mr-2" />
                Try Again
              </button>
              
              <Link 
                to="/"
                className="inline-flex items-center px-6 py-3 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors"
              >
                <HomeIcon className="h-5 w-5 mr-2" />
                Return to Home
              </Link>
              
              <Link 
                to="/contact"
                className="inline-flex items-center px-6 py-3 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors"
              >
                <ArrowLeftIcon className="h-5 w-5 mr-2" />
                Contact Support
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
} 