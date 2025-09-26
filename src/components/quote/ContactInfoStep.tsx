import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { QuoteUserData } from '../../pages/QuotePage';

interface ContactInfoStepProps {
  nextStep: () => void;
  prevStep: () => void;
  updateUserData: (data: Partial<QuoteUserData>) => void;
  userData: QuoteUserData;
}

export const ContactInfoStep: React.FC<ContactInfoStepProps> = ({
  nextStep,
  prevStep,
  updateUserData,
  userData
}) => {
  const [name, setName] = useState<string>(userData.contactInfo.name || '');
  const [email, setEmail] = useState<string>(userData.contactInfo.email || '');
  const [phone, setPhone] = useState<string>(userData.contactInfo.phone || '');

  const handleContinue = () => {
    updateUserData({
      contactInfo: {
        name,
        email,
        phone
      }
    });
    nextStep();
  };

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-white mb-2">Contact Information</h2>
        <p className="text-gray-300">We'll use this to send you your personalized quote</p>
      </div>

      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-white mb-2">
            Full Name *
          </label>
          <input 
            type="text" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
            placeholder="Enter your full name"
            className="w-full p-3 border border-[#2D2755] rounded-lg bg-[#1B1537] text-white placeholder-gray-400 focus:ring-2 focus:ring-[#EA3A70] focus:border-[#EA3A70]"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-white mb-2">
            Email Address *
          </label>
          <input 
            type="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            placeholder="Enter your email address"
            className="w-full p-3 border border-[#2D2755] rounded-lg bg-[#1B1537] text-white placeholder-gray-400 focus:ring-2 focus:ring-[#EA3A70] focus:border-[#EA3A70]"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-white mb-2">
            Phone Number *
          </label>
          <input 
            type="tel" 
            value={phone} 
            onChange={(e) => setPhone(e.target.value)} 
            placeholder="Enter your phone number"
            className="w-full p-3 border border-[#2D2755] rounded-lg bg-[#1B1537] text-white placeholder-gray-400 focus:ring-2 focus:ring-[#EA3A70] focus:border-[#EA3A70]"
            required
          />
        </div>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="p-4 bg-blue-500/10 border border-blue-500/30 rounded-lg"
      >
        <div className="flex items-start">
          <svg className="h-5 w-5 text-blue-400 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
          </svg>
          <div>
            <h4 className="font-medium text-blue-400 mb-1">Privacy Notice</h4>
            <p className="text-sm text-gray-300">
              Your information is secure and will only be used to provide you with your personalized quote. 
              We won't share your details with third parties.
            </p>
          </div>
        </div>
      </motion.div>

      <div className="flex justify-between pt-6">
        <button 
          onClick={prevStep} 
          className="px-6 py-3 border border-[#2D2755] rounded-lg text-gray-300 hover:bg-[#2D2755]/50 transition-colors"
        >
          Back
        </button>
        <button 
          className="px-6 py-3 bg-[#EA3A70] hover:bg-[#EA3A70]/90 text-white rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed" 
          onClick={handleContinue} 
          disabled={!name || !email || !phone}
        >
          Get My Quote
        </button>
      </div>
    </div>
  );
};
