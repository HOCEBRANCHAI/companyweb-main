import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BuildingIcon, FileTextIcon, FileIcon, CalculatorIcon, BarChartIcon, PlusIcon, ClipboardCheckIcon } from 'lucide-react';
import { QuoteUserData } from '../../pages/QuotePage';

interface ServicesStepProps {
  nextStep: () => void;
  prevStep: () => void;
  updateUserData: (data: Partial<QuoteUserData>) => void;
  userData: QuoteUserData;
}

export const ServicesStep: React.FC<ServicesStepProps> = ({
  nextStep,
  prevStep,
  updateUserData,
  userData
}) => {
  const [selectedServices, setSelectedServices] = useState<string[]>(userData.services || []);
  const [otherService, setOtherService] = useState<string>('');

  const toggleService = (service: string) => {
    setSelectedServices(prev => 
      prev.includes(service) 
        ? prev.filter(s => s !== service) 
        : [...prev, service]
    );
  };

  const handleContinue = () => {
    const services = [...selectedServices];
    if (selectedServices.includes('Other') && otherService) {
      services.push(`Other: ${otherService}`);
    }
    updateUserData({
      services
    });
    nextStep();
  };

  const services = [
    {
      id: 'virtual-office',
      name: 'Virtual Office',
      description: 'Professional business address and mail handling',
      icon: <BuildingIcon className="h-5 w-5 text-white" />,
      bgColor: 'bg-pink-500',
      popular: true
    },
    {
      id: 'entity-setup',
      name: 'Local Entity Setup',
      description: 'Company registration and legal structure',
      icon: <ClipboardCheckIcon className="h-5 w-5 text-white" />,
      bgColor: 'bg-pink-500',
      popular: true
    },
    {
      id: 'vat-id',
      name: 'VAT ID Application',
      description: 'European VAT registration for tax compliance',
      icon: <FileIcon className="h-5 w-5 text-white" />,
      bgColor: 'bg-pink-500'
    },
    {
      id: 'vat-filing',
      name: 'VAT Filing',
      description: 'Quarterly VAT return submissions',
      icon: <CalculatorIcon className="h-5 w-5 text-white" />,
      bgColor: 'bg-pink-500'
    },
    {
      id: 'annual-reports',
      name: 'Annual Financial Reports',
      description: 'Complete financial statements and compliance',
      icon: <BarChartIcon className="h-5 w-5 text-white" />,
      bgColor: 'bg-pink-500',
      popular: true
    },
    {
      id: 'other',
      name: 'Other',
      description: 'Tell us what else you need',
      icon: <PlusIcon className="h-5 w-5 text-white" />,
      bgColor: 'bg-gray-500'
    }
  ];

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-white mb-2">What services do you need?</h2>
        <p className="text-gray-300">Select the services that match your business requirements</p>
      </div>

      <div className="space-y-3 max-h-[400px] overflow-y-auto">
        {services.map((service, index) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className={`border rounded-xl p-4 transition-all duration-200 ${
              selectedServices.includes(service.name) 
                ? 'border-[#EA3A70] bg-[#EA3A70]/10' 
                : 'border-[#2D2755] bg-[#1B1537]/50 hover:border-[#EA3A70]/50'
            }`}
          >
            <label className="flex items-start cursor-pointer">
              <input 
                type="checkbox" 
                checked={selectedServices.includes(service.name)} 
                onChange={() => toggleService(service.name)} 
                className="h-5 w-5 mt-1 text-[#EA3A70] border-[#2D2755] rounded bg-[#1B1537] focus:ring-[#EA3A70]" 
              />
              <div className="ml-4 flex items-start">
                <div className={`${service.bgColor} p-2 rounded-lg mr-3 flex-shrink-0`}>
                  {service.icon}
                </div>
                <div className="flex-1">
                  <div className="flex items-center">
                    <h3 className="font-medium text-white">{service.name}</h3>
                    {service.popular && (
                      <span className="ml-2 text-xs bg-green-100 text-green-800 px-2 py-0.5 rounded-full">
                        Popular
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-gray-300 mt-1">{service.description}</p>
                </div>
              </div>
            </label>
            
            {service.name === 'Other' && selectedServices.includes('Other') && (
              <motion.div 
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                className="mt-3 ml-8"
              >
                <input 
                  type="text" 
                  value={otherService} 
                  onChange={(e) => setOtherService(e.target.value)} 
                  placeholder="Please specify other service" 
                  className="w-full p-3 border border-[#2D2755] rounded-lg text-sm bg-[#1B1537] text-white placeholder-gray-400 focus:ring-2 focus:ring-[#EA3A70] focus:border-[#EA3A70]" 
                />
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>

      {selectedServices.length > 0 && (
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-4 bg-[#EA3A70]/10 border border-[#EA3A70]/30 rounded-lg"
        >
          <h4 className="font-medium text-white mb-2">Selected Services:</h4>
          <div className="space-y-1">
            {selectedServices.map(service => (
              <div key={service} className="flex items-center">
                <div className="w-4 h-4 bg-[#EA3A70] rounded-full flex items-center justify-center mr-2">
                  <svg width="8" height="8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 12L10 17L19 8" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <span className="text-sm text-gray-300">{service}</span>
              </div>
            ))}
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
          className="px-6 py-3 bg-[#EA3A70] hover:bg-[#EA3A70]/90 text-white rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed" 
          onClick={handleContinue} 
          disabled={selectedServices.length === 0}
        >
          Continue
        </button>
      </div>
    </div>
  );
};
