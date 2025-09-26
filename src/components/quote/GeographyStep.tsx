import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { QuoteUserData } from '../../pages/QuotePage';

interface GeographyStepProps {
  nextStep: () => void;
  prevStep: () => void;
  updateUserData: (data: Partial<QuoteUserData>) => void;
  userData: QuoteUserData;
}

export const GeographyStep: React.FC<GeographyStepProps> = ({
  nextStep,
  prevStep,
  updateUserData,
  userData
}) => {
  const [basedIn, setBasedIn] = useState<string>(userData.geography.basedIn || '');
  const [expandTo, setExpandTo] = useState<string[]>(userData.geography.expandTo || []);

  const handleExpandToChange = (country: string) => {
    setExpandTo(prev => 
      prev.includes(country) 
        ? prev.filter(c => c !== country) 
        : [...prev, country]
    );
  };

  const handleContinue = () => {
    updateUserData({
      geography: {
        basedIn,
        expandTo
      }
    });
    nextStep();
  };

  // List of EU countries with their specific registration fees
  const euCountries = [
    { name: 'Netherlands', fee: 50, govtFee: 80, branchFee: 975, vatFee: 75 },
    { name: 'Germany', fee: 900, govtFee: 450, branchFee: 1495, vatFee: 350 },
    { name: 'France', fee: 1850, govtFee: 800, branchFee: 1845, vatFee: 630 },
    { name: 'Italy', fee: 1300, govtFee: 300, branchFee: 1395, vatFee: 850 },
    { name: 'Spain', fee: 1050, govtFee: 300, branchFee: 1445, vatFee: 600 },
    { name: 'Poland', fee: 600, govtFee: 200, branchFee: 1245, vatFee: 550 },
    { name: 'Portugal', fee: 900, govtFee: 300, branchFee: 1395, vatFee: 640 },
    { name: 'Ireland', fee: 50, govtFee: 50, branchFee: 945, vatFee: 550 },
    { name: 'Denmark', fee: 80, govtFee: 80, branchFee: 975, vatFee: 550 },
    { name: 'Sweden', fee: 200, govtFee: 200, branchFee: 1095, vatFee: 550 },
    { name: 'Austria', fee: 2000, govtFee: 1500, branchFee: 2895, vatFee: 620 },
    { name: 'Belgium', fee: 325, govtFee: 25, branchFee: 1220, vatFee: 245 },
    { name: 'Luxembourg', fee: 675, govtFee: 500, branchFee: 1570, vatFee: 550 },
    { name: 'Finland', fee: 380, govtFee: 380, branchFee: 1275, vatFee: 550 },
    { name: 'Estonia', fee: 190, govtFee: 190, branchFee: 1085, vatFee: 550 },
    { name: 'Malta', fee: 695, govtFee: 150, branchFee: 1290, vatFee: 660 },
    { name: 'Cyprus', fee: 840, govtFee: 450, branchFee: 1735, vatFee: 630 },
    { name: 'Greece', fee: 1100, govtFee: 500, branchFee: 1995, vatFee: 720 },
    { name: 'Czech Republic', fee: 600, govtFee: 300, branchFee: 1495, vatFee: 550 },
    { name: 'Hungary', fee: 750, govtFee: 350, branchFee: 1645, vatFee: 600 },
    { name: 'Romania', fee: 500, govtFee: 250, branchFee: 1395, vatFee: 590 },
    { name: 'Slovakia', fee: 600, govtFee: 300, branchFee: 1495, vatFee: 550 },
    { name: 'Bulgaria', fee: 450, govtFee: 200, branchFee: 1345, vatFee: 575 },
    { name: 'Croatia', fee: 550, govtFee: 250, branchFee: 1445, vatFee: 580 },
    { name: 'Slovenia', fee: 700, govtFee: 300, branchFee: 1595, vatFee: 550 },
    { name: 'Latvia', fee: 500, govtFee: 200, branchFee: 1395, vatFee: 550 },
    { name: 'Lithuania', fee: 450, govtFee: 200, branchFee: 1345, vatFee: 550 }
  ];

  const regions = [
    'United States', 'United Kingdom', 'European Union', 'Asia-Pacific', 
    'Middle East', 'Africa', 'Latin America', 'Canada', 'Australia', 
    'New Zealand', 'Japan', 'China', 'India', 'Singapore', 'Hong Kong', 
    'South Korea', 'Brazil', 'Mexico', 'Argentina', 'UAE', 'Saudi Arabia', 
    'Israel', 'South Africa', 'Nigeria', 'Kenya', 'Other'
  ];

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-white mb-2">Where are you based?</h2>
        <p className="text-gray-300">Tell us about your current location and expansion goals</p>
      </div>

      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-white mb-2">
            Where is your business based?
          </label>
          <select 
            value={basedIn} 
            onChange={(e) => setBasedIn(e.target.value)} 
            className="w-full p-3 border border-[#2D2755] rounded-lg bg-[#1B1537] text-white focus:ring-2 focus:ring-[#EA3A70] focus:border-[#EA3A70]"
          >
            <option value="">Select region</option>
            {regions.map(region => (
              <option key={region} value={region}>
                {region}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-white mb-2">
            Where do you want to expand? (Select all that apply)
          </label>
          <div className="max-h-60 overflow-y-auto space-y-2 border border-[#2D2755] rounded-lg p-4 bg-[#1B1537]">
            {euCountries.map(country => (
              <div key={country.name} className="flex items-center">
                <input 
                  type="checkbox" 
                  id={country.name} 
                  checked={expandTo.includes(country.name)} 
                  onChange={() => handleExpandToChange(country.name)} 
                  className="h-4 w-4 text-[#EA3A70] border-[#2D2755] rounded bg-[#1B1537] focus:ring-[#EA3A70]" 
                />
                <label htmlFor={country.name} className="ml-3 text-sm text-gray-300">
                  {country.name}
                </label>
              </div>
            ))}
          </div>
        </div>

        {expandTo.length > 0 && (
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-4 bg-[#EA3A70]/10 border border-[#EA3A70]/30 rounded-lg"
          >
            <h4 className="font-medium text-white mb-2">Selected Countries:</h4>
            <div className="flex flex-wrap gap-2">
              {expandTo.map(country => (
                <span key={country} className="px-3 py-1 bg-[#EA3A70]/20 text-[#EA3A70] rounded-full text-sm">
                  {country}
                </span>
              ))}
            </div>
          </motion.div>
        )}
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
          disabled={!basedIn || expandTo.length === 0}
        >
          Continue
        </button>
      </div>
    </div>
  );
};
