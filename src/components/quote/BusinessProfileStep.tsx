import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { QuoteUserData } from '../../pages/QuotePage';

interface BusinessProfileStepProps {
  nextStep: () => void;
  prevStep: () => void;
  updateUserData: (data: Partial<QuoteUserData>) => void;
  userData: QuoteUserData;
}

export const BusinessProfileStep: React.FC<BusinessProfileStepProps> = ({
  nextStep,
  prevStep,
  updateUserData,
  userData
}) => {
  const [website, setWebsite] = useState<string>(userData.businessProfile.website || '');
  const [linkedin, setLinkedin] = useState<string>(userData.businessProfile.linkedin || '');
  const [companySize, setCompanySize] = useState<string>(userData.businessProfile.companySize || '');

  const handleContinue = () => {
    updateUserData({
      businessProfile: {
        website,
        linkedin,
        companySize
      }
    });
    nextStep();
  };

  const companySizes = [
    '1-5 employees',
    '6-20 employees',
    '21-50 employees',
    '51-200 employees',
    '201-500 employees',
    '500+ employees'
  ];

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-white mb-2">Tell us about your business</h2>
        <p className="text-gray-300">Help us understand your company better</p>
      </div>

      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-white mb-2">
            Company Website (Optional)
          </label>
          <input 
            type="url" 
            value={website} 
            onChange={(e) => setWebsite(e.target.value)} 
            placeholder="https://yourcompany.com"
            className="w-full p-3 border border-[#2D2755] rounded-lg bg-[#1B1537] text-white placeholder-gray-400 focus:ring-2 focus:ring-[#EA3A70] focus:border-[#EA3A70]"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-white mb-2">
            LinkedIn Company Page (Optional)
          </label>
          <input 
            type="url" 
            value={linkedin} 
            onChange={(e) => setLinkedin(e.target.value)} 
            placeholder="https://linkedin.com/company/yourcompany"
            className="w-full p-3 border border-[#2D2755] rounded-lg bg-[#1B1537] text-white placeholder-gray-400 focus:ring-2 focus:ring-[#EA3A70] focus:border-[#EA3A70]"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-white mb-2">
            Company Size
          </label>
          <select 
            value={companySize} 
            onChange={(e) => setCompanySize(e.target.value)} 
            className="w-full p-3 border border-[#2D2755] rounded-lg bg-[#1B1537] text-white focus:ring-2 focus:ring-[#EA3A70] focus:border-[#EA3A70]"
          >
            <option value="">Select company size</option>
            {companySizes.map(size => (
              <option key={size} value={size}>
                {size}
              </option>
            ))}
          </select>
        </div>
      </div>

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
          disabled={!companySize}
        >
          Continue
        </button>
      </div>
    </div>
  );
};
