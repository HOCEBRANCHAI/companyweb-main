import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FileTextIcon, CalculatorIcon, UserIcon, CoinsIcon } from 'lucide-react';
import { QuoteUserData } from '../../pages/QuotePage';

interface AddOnsStepProps {
  nextStep: () => void;
  prevStep: () => void;
  updateUserData: (data: Partial<QuoteUserData>) => void;
  userData: QuoteUserData;
}

export const AddOnsStep: React.FC<AddOnsStepProps> = ({
  nextStep,
  prevStep,
  updateUserData,
  userData
}) => {
  const [selectedAddOns, setSelectedAddOns] = useState<{name: string; price: number}[]>(userData.addOns || []);

  const toggleAddOn = (addOn: {name: string; price: number}) => {
    setSelectedAddOns(prev => 
      prev.some(item => item.name === addOn.name)
        ? prev.filter(item => item.name !== addOn.name)
        : [...prev, addOn]
    );
  };

  const handleContinue = () => {
    updateUserData({
      addOns: selectedAddOns
    });
    nextStep();
  };

  const addOns = [
    {
      name: 'Corporate Tax Filing',
      description: 'Annual corporate tax return preparation and filing',
      price: 450,
      icon: <FileTextIcon className="h-5 w-5 text-white" />,
      bgColor: 'bg-blue-500',
      popular: true
    },
    {
      name: 'VAT Returns',
      description: 'Quarterly VAT return preparation and submission',
      price: 200,
      icon: <CalculatorIcon className="h-5 w-5 text-white" />,
      bgColor: 'bg-green-500',
      popular: true
    },
    {
      name: 'Payroll Management',
      description: 'Complete payroll processing and compliance',
      price: 300,
      icon: <UserIcon className="h-5 w-5 text-white" />,
      bgColor: 'bg-purple-500'
    },
    {
      name: 'Residency Permits',
      description: 'Assistance with work and residence permits',
      price: 800,
      icon: <CoinsIcon className="h-5 w-5 text-white" />,
      bgColor: 'bg-orange-500'
    }
  ];

  const totalAddOnPrice = selectedAddOns.reduce((sum, addOn) => sum + addOn.price, 0);

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-white mb-2">Add-on services</h2>
        <p className="text-gray-300">Select any additional services you might need</p>
      </div>

      <div className="space-y-3">
        {addOns.map((addOn, index) => {
          const isSelected = selectedAddOns.some(item => item.name === addOn.name);
          
          return (
            <motion.div
              key={addOn.name}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`border rounded-xl p-4 transition-all duration-200 cursor-pointer ${
                isSelected 
                  ? 'border-[#EA3A70] bg-[#EA3A70]/10' 
                  : 'border-[#2D2755] bg-[#1B1537]/50 hover:border-[#EA3A70]/50'
              }`}
              onClick={() => toggleAddOn(addOn)}
            >
              <div className="flex items-start">
                <div className={`${addOn.bgColor} p-2 rounded-lg mr-4 flex-shrink-0`}>
                  {addOn.icon}
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium text-white flex items-center">
                        {addOn.name}
                        {addOn.popular && (
                          <span className="ml-2 text-xs bg-green-100 text-green-800 px-2 py-0.5 rounded-full">
                            Popular
                          </span>
                        )}
                      </h3>
                      <p className="text-sm text-gray-300 mt-1">{addOn.description}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold text-[#EA3A70]">€{addOn.price}</div>
                      <div className="text-xs text-gray-400">per year</div>
                    </div>
                  </div>
                </div>
                <div className="ml-4">
                  <input 
                    type="checkbox" 
                    checked={isSelected}
                    onChange={() => toggleAddOn(addOn)}
                    className="h-5 w-5 text-[#EA3A70] border-[#2D2755] rounded bg-[#1B1537] focus:ring-[#EA3A70]"
                  />
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {selectedAddOns.length > 0 && (
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-4 bg-[#EA3A70]/10 border border-[#EA3A70]/30 rounded-lg"
        >
          <h4 className="font-medium text-white mb-2">Selected Add-ons:</h4>
          <div className="space-y-2">
            {selectedAddOns.map((addOn, index) => (
              <div key={index} className="flex items-center justify-between">
                <span className="text-sm text-gray-300">{addOn.name}</span>
                <span className="text-sm font-medium text-[#EA3A70]">€{addOn.price}</span>
              </div>
            ))}
            <div className="border-t border-[#EA3A70]/30 pt-2 mt-2">
              <div className="flex items-center justify-between">
                <span className="font-medium text-white">Total Add-ons:</span>
                <span className="font-bold text-[#EA3A70]">€{totalAddOnPrice}</span>
              </div>
            </div>
          </div>
        </motion.div>
      )}

      <div className="flex justify-between pt-6">
        <button 
          onClick={prevStep} 
          className="px-6 py-3 border border-[#2D2755] rounded-lg text-gray-300 hover:bg-[#2D2755]/50 transition-colors"
        >
          Back
        </button>
        <button 
          className="px-6 py-3 bg-[#EA3A70] hover:bg-[#EA3A70]/90 text-white rounded-lg transition-colors" 
          onClick={handleContinue}
        >
          Continue
        </button>
      </div>
    </div>
  );
};
