import React, { useEffect, useState } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { CheckCircleIcon, ArrowLeftIcon, HomeIcon } from 'lucide-react';
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';

export function PaymentSuccess() {
  const [searchParams] = useSearchParams();
  const [sessionDetails, setSessionDetails] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  
  const sessionId = searchParams.get('session_id');

  useEffect(() => {
    if (sessionId) {
      // Fetch session drender.cometails from backend
      fetch(`https://backend-stripe-3.onrender.com/session/${sessionId}`)
        .then(res => res.json())
        .then(data => {
          setSessionDetails(data.session);
          setLoading(false);
        })
        .catch(error => {
          console.error('Error fetching session details:', error);
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  }, [sessionId]);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#0F0B1F] flex items-center justify-center">
        <div className="text-white text-lg">Loading payment details...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0F0B1F]">
      <Header />
      
      <main className="max-w-4xl mx-auto px-4 py-16">
        <div className="text-center">
          <div className="mb-8">
            <CheckCircleIcon className="h-24 w-24 text-green-500 mx-auto mb-4" />
            <h1 className="text-4xl font-bold text-white mb-4">
              Payment Successful!
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Thank you for your payment. Your transaction has been completed successfully.
            </p>
          </div>

          {sessionDetails && (
            <div className="bg-[#1B1537] rounded-lg p-8 mb-8 text-left">
              <h2 className="text-2xl font-bold text-white mb-6">Payment Details</h2>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-300">Transaction ID:</span>
                  <span className="text-white font-mono">{sessionDetails.id}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Amount:</span>
                  <span className="text-white font-bold">
                    €{(sessionDetails.amount_total / 100).toFixed(2)}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Status:</span>
                  <span className="text-green-500 font-medium capitalize">
                    {sessionDetails.payment_status}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Date:</span>
                  <span className="text-white">
                    {new Date(sessionDetails.created * 1000).toLocaleDateString()}
                  </span>
                </div>
              </div>
            </div>
          )}

          <div className="space-y-4">
            <p className="text-gray-300">
              You will receive a confirmation email shortly. Our team will begin processing your order.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/"
                className="inline-flex items-center px-6 py-3 bg-[#EA3A70] text-white rounded-lg hover:bg-[#EA3A70]/90 transition-colors"
              >
                <HomeIcon className="h-5 w-5 mr-2" />
                Return to Home
              </Link>
              
              <Link 
                to="/services"
                className="inline-flex items-center px-6 py-3 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors"
              >
                <ArrowLeftIcon className="h-5 w-5 mr-2" />
                Browse More Services
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
} 