import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { CheckCircleIcon, DownloadIcon, ShareIcon, MessageCircleIcon } from 'lucide-react';
import { QuoteUserData } from '../../pages/QuotePage';

interface SummaryStepProps {
  nextStep: () => void;
  prevStep: () => void;
  updateUserData: (data: Partial<QuoteUserData>) => void;
  userData: QuoteUserData;
}

export const SummaryStep: React.FC<SummaryStepProps> = ({
  prevStep,
  updateUserData,
  userData
}) => {
  const [isGenerating, setIsGenerating] = useState(true);
  const [quoteGenerated, setQuoteGenerated] = useState(false);

  useEffect(() => {
    // Simulate quote generation
    const timer = setTimeout(() => {
      setIsGenerating(false);
      setQuoteGenerated(true);
      
      // Calculate total price
      const basePrice = userData.plan === 'Free Plan' ? 0 : 
                       userData.plan === 'eBranch Plan' ? 1995 : 4995;
      
      const addOnTotal = userData.addOns.reduce((sum, addOn) => sum + addOn.price, 0);
      const countryFees = userData.geography.expandTo.map(country => {
        // Simplified country fee calculation
        const fees: {[key: string]: number} = {
          'Netherlands': 50,
          'Germany': 900,
          'France': 1850,
          'Italy': 1300,
          'Spain': 1050,
          'Poland': 600,
          'Portugal': 900,
          'Ireland': 50,
          'Denmark': 80,
          'Sweden': 200,
          'Austria': 2000,
          'Belgium': 325,
          'Luxembourg': 675,
          'Finland': 380,
          'Estonia': 190,
          'Malta': 695,
          'Cyprus': 840,
          'Greece': 1100,
          'Czech Republic': 600,
          'Hungary': 750,
          'Romania': 500,
          'Slovakia': 600,
          'Bulgaria': 450,
          'Croatia': 550,
          'Slovenia': 700,
          'Latvia': 500,
          'Lithuania': 450
        };
        return { country, fee: fees[country] || 500 };
      });
      
      const totalCountryFees = countryFees.reduce((sum, fee) => sum + fee.fee, 0);
      const totalPrice = basePrice + addOnTotal + totalCountryFees;
      
      updateUserData({
        totalPrice,
        basePrice,
        countryFees
      });
    }, 2000);

    return () => clearTimeout(timer);
  }, [userData, updateUserData]);

  const handleDownloadQuote = () => {
    // In a real implementation, this would generate and download a PDF
    alert('Quote download functionality would be implemented here');
  };

  const handleShareQuote = () => {
    // In a real implementation, this would share the quote
    alert('Share functionality would be implemented here');
  };

  const handleContactSupport = () => {
    // In a real implementation, this would open a chat or contact form
    alert('Contact support functionality would be implemented here');
  };

  if (isGenerating) {
    return (
      <div className="space-y-6">
        <div className="text-center">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="w-16 h-16 border-4 border-[#EA3A70] border-t-transparent rounded-full mx-auto mb-4"
          />
          <h2 className="text-2xl font-bold text-white mb-2">Generating Your Quote</h2>
          <p className="text-gray-300">Please wait while we prepare your personalized quote...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="text-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 200, damping: 10 }}
          className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4"
        >
          <CheckCircleIcon className="h-8 w-8 text-white" />
        </motion.div>
        <h2 className="text-2xl font-bold text-white mb-2">Your Quote is Ready!</h2>
        <p className="text-gray-300">Here's your personalized quote based on your requirements</p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="bg-white rounded-2xl p-6 space-y-6"
      >
        {/* Quote Summary */}
        <div className="border-b border-gray-200 pb-6">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Quote Summary</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-medium text-gray-900 mb-2">Selected Plan</h4>
              <p className="text-gray-600">{userData.plan}</p>
              <p className="text-lg font-bold text-[#EA3A70]">€{userData.basePrice}</p>
            </div>
            
            <div>
              <h4 className="font-medium text-gray-900 mb-2">Expansion Countries</h4>
              <div className="flex flex-wrap gap-1">
                {userData.geography.expandTo.map(country => (
                  <span key={country} className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-sm">
                    {country}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Services */}
        <div className="border-b border-gray-200 pb-6">
          <h4 className="font-medium text-gray-900 mb-3">Selected Services</h4>
          <div className="space-y-2">
            {userData.services.map((service, index) => (
              <div key={index} className="flex items-center">
                <CheckCircleIcon className="h-4 w-4 text-green-500 mr-2" />
                <span className="text-gray-600">{service}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Add-ons */}
        {userData.addOns.length > 0 && (
          <div className="border-b border-gray-200 pb-6">
            <h4 className="font-medium text-gray-900 mb-3">Add-on Services</h4>
            <div className="space-y-2">
              {userData.addOns.map((addOn, index) => (
                <div key={index} className="flex items-center justify-between">
                  <span className="text-gray-600">{addOn.name}</span>
                  <span className="font-medium text-gray-900">€{addOn.price}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Total */}
        <div className="bg-gray-50 rounded-lg p-4">
          <div className="flex items-center justify-between">
            <span className="text-lg font-bold text-gray-900">Total Investment</span>
            <span className="text-2xl font-bold text-[#EA3A70]">€{userData.totalPrice}</span>
          </div>
          <p className="text-sm text-gray-600 mt-1">One-time setup + annual plan</p>
        </div>
      </motion.div>


      <div className="flex justify-center pt-6">
        <button 
          onClick={prevStep} 
          className="px-6 py-3 border border-[#2D2755] rounded-lg text-gray-300 hover:bg-[#2D2755]/50 transition-colors"
        >
          Back
        </button>
      </div>
    </div>
  );
};
