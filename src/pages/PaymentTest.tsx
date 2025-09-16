import React, { useState } from 'react';
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';

export function PaymentTest() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  const testPayment = async () => {
    try {
      setLoading(true);
      setError(null);
      setResult(null);

      const requestBody = {
        amount: 10.00,
        currency: 'eur',
        description: 'Test Payment',
        items: [{
          name: 'Test Service',
          price: 10.00,
          quantity: 1,
          description: 'Test service for debugging'
        }],
        customerEmail: 'test@example.com'
      };

      console.log('Sending test request:', requestBody);

      const response = await fetch('https://backend-stripe-3.onrender.com/create-checkout-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody),
      });

      console.log('Response status:', response.status);
      console.log('Response headers:', response.headers);

      if (!response.ok) {
        const errorText = await response.text();
        console.error('Response error:', errorText);
        throw new Error(`HTTP ${response.status}: ${errorText}`);
      }

      const data = await response.json();
      console.log('Response data:', data);
      setResult(data);

      if (data.success && data.url) {
        console.log('Redirecting to:', data.url);
        // Check if it's a demo URL
        if (data.url.includes('demo.stripe.com')) {
          setError('Warning: Demo URL detected! This should not happen with valid Stripe keys.');
        } else {
          // Redirect to the actual Stripe checkout
          window.location.href = data.url;
        }
      } else {
        throw new Error(data.error || 'Failed to create payment session');
      }

    } catch (error) {
      console.error('Payment error:', error);
      const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  const testDirectRedirect = () => {
    if (result && result.url) {
      window.open(result.url, '_blank');
    }
  };

  return (
    <div className="min-h-screen bg-[#0F0B1F]">
      <Header />
      
      <main className="max-w-4xl mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-8">
            Payment Test Page
          </h1>
          
          <button 
            onClick={testPayment}
            disabled={loading}
            className="bg-[#EA3A70] text-white py-3 px-6 rounded-lg hover:bg-[#EA3A70]/90 disabled:opacity-50 mb-8"
          >
            {loading ? 'Testing...' : 'Test Payment Flow'}
          </button>

          {error && (
            <div className="bg-red-900 text-white p-4 rounded-lg mb-4">
              <h3 className="font-bold mb-2">Error:</h3>
              <p>{error}</p>
            </div>
          )}

          {result && (
            <div className="bg-[#1B1537] text-white p-6 rounded-lg text-left">
              <h3 className="font-bold mb-4">Response:</h3>
              <pre className="whitespace-pre-wrap text-sm">
                {JSON.stringify(result, null, 2)}
              </pre>
              
              {result.url && (
                <div className="mt-4">
                  <h4 className="font-bold mb-2">Checkout URL:</h4>
                  <div className="mb-4">
                    <a 
                      href={result.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:text-blue-300 break-all"
                    >
                      {result.url}
                    </a>
                  </div>
                  
                  {result.url.includes('checkout.stripe.com') && (
                    <div className="mb-4">
                      <button 
                        onClick={testDirectRedirect}
                        className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700"
                      >
                        Open Stripe Checkout in New Tab
                      </button>
                    </div>
                  )}
                  
                  {result.url.includes('demo.stripe.com') && (
                    <div className="bg-yellow-900 text-white p-3 rounded mb-4">
                      <strong>Warning:</strong> This is a demo URL. The backend should be returning a real Stripe URL.
                    </div>
                  )}
                </div>
              )}
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
} 