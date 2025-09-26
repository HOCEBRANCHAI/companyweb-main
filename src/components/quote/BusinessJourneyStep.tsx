import React from 'react';
import { motion } from 'framer-motion';
import { LightbulbIcon, BuildingIcon, PlusIcon, LayersIcon } from 'lucide-react';
import { QuoteUserData } from '../../pages/QuotePage';

interface BusinessJourneyStepProps {
  nextStep: () => void;
  prevStep: () => void;
  updateUserData: (data: Partial<QuoteUserData>) => void;
  userData: QuoteUserData;
}

export const BusinessJourneyStep: React.FC<BusinessJourneyStepProps> = ({
  nextStep,
  updateUserData
}) => {
  const handleSelection = (option: string) => {
    updateUserData({
      businessJourney: option
    });
    nextStep();
  };

  const journeyOptions = [
    {
      id: 'exploring',
      title: 'Exploring Ideas',
      description: 'Just getting started with business concepts',
      icon: <LightbulbIcon className="h-5 w-5 text-white" />,
      bgColor: 'bg-amber-500'
    },
    {
      id: 'existing',
      title: 'Existing Company',
      description: 'Running a business and looking to expand',
      icon: <BuildingIcon className="h-5 w-5 text-white" />,
      bgColor: 'bg-blue-500'
    },
    {
      id: 'new-entity',
      title: 'Need New Entity',
      description: 'Want to set up a new business structure',
      icon: <PlusIcon className="h-5 w-5 text-white" />,
      bgColor: 'bg-emerald-500'
    },
    {
      id: 'multiple',
      title: 'Managing Multiple',
      description: 'Operating several business entities',
      icon: <LayersIcon className="h-5 w-5 text-white" />,
      bgColor: 'bg-purple-500'
    }
  ];

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-white mb-2">What's your business journey?</h2>
        <p className="text-gray-300">Help us understand where you are in your business journey</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {journeyOptions.map((option, index) => (
          <motion.button
            key={option.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="w-full p-6 bg-white hover:bg-gray-50 border border-gray-200 rounded-xl flex items-start transition-all duration-200 hover:shadow-lg hover:scale-105"
            onClick={() => handleSelection(option.title)}
          >
            <div className={`${option.bgColor} p-3 rounded-lg mr-4 flex-shrink-0`}>
              {option.icon}
            </div>
            <div className="text-left">
              <h3 className="font-semibold text-gray-900 mb-1">{option.title}</h3>
              <p className="text-sm text-gray-600">{option.description}</p>
            </div>
          </motion.button>
        ))}
      </div>
    </div>
  );
};
