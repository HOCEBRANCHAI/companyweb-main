import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeftIcon, CheckCircleIcon } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Header } from '../components/layout/Header';

// Import the quote flow components
import { BusinessJourneyStep } from '../components/quote/BusinessJourneyStep';
import { GeographyStep } from '../components/quote/GeographyStep';
import { ServicesStep } from '../components/quote/ServicesStep';
import { BusinessProfileStep } from '../components/quote/BusinessProfileStep';
import { TimelineStep } from '../components/quote/TimelineStep';
import { PlanSelectionStep } from '../components/quote/PlanSelectionStep';
import { AddOnsStep } from '../components/quote/AddOnsStep';
import { ContactInfoStep } from '../components/quote/ContactInfoStep';
import { SummaryStep } from '../components/quote/SummaryStep';

export type QuoteUserData = {
  businessJourney: string | null;
  geography: {
    basedIn: string | null;
    expandTo: string[];
  };
  services: string[];
  businessProfile: {
    website: string | null;
    linkedin: string | null;
    companySize: string | null;
  };
  timeline: string | null;
  plan: string | null;
  addOns: {
    name: string;
    price: number;
  }[];
  contactInfo: {
    name: string | null;
    email: string | null;
    phone: string | null;
  };
  totalPrice: number;
  basePrice: number;
  countryFees: {
    country: string;
    fee: number;
  }[];
};

const steps = [
  { id: 1, title: 'Business Journey', component: 'BusinessJourney' },
  { id: 2, title: 'Geography', component: 'Geography' },
  { id: 3, title: 'Services', component: 'Services' },
  { id: 4, title: 'Business Profile', component: 'BusinessProfile' },
  { id: 5, title: 'Timeline', component: 'Timeline' },
  { id: 6, title: 'Plan Selection', component: 'PlanSelection' },
  { id: 7, title: 'Add-ons', component: 'AddOns' },
  { id: 8, title: 'Contact Info', component: 'ContactInfo' },
  { id: 9, title: 'Summary', component: 'Summary' },
];

export const QuotePage: React.FC = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [userData, setUserData] = useState<QuoteUserData>({
    businessJourney: null,
    geography: {
      basedIn: null,
      expandTo: []
    },
    services: [],
    businessProfile: {
      website: null,
      linkedin: null,
      companySize: null
    },
    timeline: null,
    plan: null,
    addOns: [],
    contactInfo: {
      name: null,
      email: null,
      phone: null
    },
    totalPrice: 0,
    basePrice: 0,
    countryFees: []
  });

  const nextStep = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const updateUserData = (data: Partial<QuoteUserData>) => {
    setUserData(prev => ({
      ...prev,
      ...data
    }));
  };

  const renderCurrentStep = () => {
    const commonProps = {
      nextStep,
      prevStep,
      updateUserData,
      userData
    };

    switch (currentStep) {
      case 1:
        return <BusinessJourneyStep {...commonProps} />;
      case 2:
        return <GeographyStep {...commonProps} />;
      case 3:
        return <ServicesStep {...commonProps} />;
      case 4:
        return <BusinessProfileStep {...commonProps} />;
      case 5:
        return <TimelineStep {...commonProps} />;
      case 6:
        return <PlanSelectionStep {...commonProps} />;
      case 7:
        return <AddOnsStep {...commonProps} />;
      case 8:
        return <ContactInfoStep {...commonProps} />;
      case 9:
        return <SummaryStep {...commonProps} />;
      default:
        return <BusinessJourneyStep {...commonProps} />;
    }
  };

  return (
    <div className="min-h-screen bg-[#0A0826]">
      <Header />
      
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Progress Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <button
              onClick={() => navigate('/')}
              className="flex items-center text-gray-400 hover:text-white transition-colors"
            >
              <ArrowLeftIcon className="h-5 w-5 mr-2" />
              Back to Home
            </button>
            <div className="text-sm text-gray-400">
              Step {currentStep} of {steps.length}
            </div>
          </div>
          
          {/* Progress Bar */}
          <div className="w-full bg-gray-700 rounded-full h-2 mb-4">
            <motion.div
              className="bg-[#EA3A70] h-2 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${(currentStep / steps.length) * 100}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>
          
          {/* Step Indicators */}
          <div className="flex justify-between">
            {steps.map((step) => (
              <div key={step.id} className="flex flex-col items-center">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium transition-colors ${
                    step.id <= currentStep
                      ? 'bg-[#EA3A70] text-white'
                      : 'bg-gray-700 text-gray-400'
                  }`}
                >
                  {step.id < currentStep ? (
                    <CheckCircleIcon className="h-5 w-5" />
                  ) : (
                    step.id
                  )}
                </div>
                <span
                  className={`text-xs mt-1 transition-colors ${
                    step.id <= currentStep ? 'text-white' : 'text-gray-400'
                  }`}
                >
                  {step.title}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Step Content */}
        <motion.div
          key={currentStep}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
          className="bg-[#1B1537]/80 backdrop-blur-sm rounded-2xl border border-[#2D2755] p-6 sm:p-8"
        >
          {renderCurrentStep()}
        </motion.div>
      </div>
    </div>
  );
};
