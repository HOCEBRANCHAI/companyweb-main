import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ClockIcon, CalendarIcon, ZapIcon } from 'lucide-react';
import { QuoteUserData } from '../../pages/QuotePage';

interface TimelineStepProps {
  nextStep: () => void;
  prevStep: () => void;
  updateUserData: (data: Partial<QuoteUserData>) => void;
  userData: QuoteUserData;
}

export const TimelineStep: React.FC<TimelineStepProps> = ({
  nextStep,
  prevStep,
  updateUserData,
  userData
}) => {
  const [timeline, setTimeline] = useState<string>(userData.timeline || '');

  const handleContinue = () => {
    updateUserData({
      timeline
    });
    nextStep();
  };

  const timelineOptions = [
    {
      id: 'asap',
      label: 'ASAP',
      description: 'I need to get started immediately',
      icon: <ZapIcon className="h-5 w-5" />,
      color: 'text-red-600',
      bgColor: 'bg-red-100',
      borderColor: 'border-red-200'
    },
    {
      id: '1-3-months',
      label: '1-3 months',
      description: 'I have some time to plan and prepare',
      icon: <CalendarIcon className="h-5 w-5" />,
      color: 'text-orange-600',
      bgColor: 'bg-orange-100',
      borderColor: 'border-orange-200'
    },
    {
      id: '3-6-months',
      label: '3-6 months',
      description: 'I want to take my time with the process',
      icon: <ClockIcon className="h-5 w-5" />,
      color: 'text-blue-600',
      bgColor: 'bg-blue-100',
      borderColor: 'border-blue-200'
    },
    {
      id: '6-months-plus',
      label: '6+ months',
      description: 'I\'m just exploring options for now',
      icon: <CalendarIcon className="h-5 w-5" />,
      color: 'text-green-600',
      bgColor: 'bg-green-100',
      borderColor: 'border-green-200'
    }
  ];

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-white mb-2">What's your timeline?</h2>
        <p className="text-gray-300">When do you need to get started?</p>
      </div>

      <div className="space-y-3">
        {timelineOptions.map((option, index) => (
          <motion.button
            key={option.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            onClick={() => setTimeline(option.label)}
            className={`w-full p-4 rounded-xl transition-all duration-200 flex items-center border-2 ${
              timeline === option.label
                ? `${option.borderColor} bg-white shadow-lg`
                : 'border-[#2D2755] bg-[#1B1537]/50 hover:border-[#EA3A70]/50'
            }`}
          >
            <div className={`${timeline === option.label ? option.bgColor : 'bg-[#2D2755]'} p-2 rounded-full mr-4`}>
              <div className={timeline === option.label ? option.color : 'text-gray-400'}>
                {option.icon}
              </div>
            </div>
            <div className="text-left flex-1">
              <h3 className={`font-medium ${timeline === option.label ? 'text-gray-900' : 'text-white'}`}>
                {option.label}
              </h3>
              <p className={`text-sm ${timeline === option.label ? 'text-gray-600' : 'text-gray-300'}`}>
                {option.description}
              </p>
            </div>
            {timeline === option.label && (
              <div className="w-6 h-6 bg-[#EA3A70] rounded-full flex items-center justify-center">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
            )}
          </motion.button>
        ))}
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
          disabled={!timeline}
        >
          Continue
        </button>
      </div>
    </div>
  );
};
