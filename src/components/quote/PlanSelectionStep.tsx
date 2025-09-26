import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ZapIcon, BuildingIcon, CrownIcon } from 'lucide-react';
import { QuoteUserData } from '../../pages/QuotePage';

interface PlanSelectionStepProps {
  nextStep: () => void;
  prevStep: () => void;
  updateUserData: (data: Partial<QuoteUserData>) => void;
  userData: QuoteUserData;
}

export const PlanSelectionStep: React.FC<PlanSelectionStepProps> = ({
  nextStep,
  prevStep,
  updateUserData,
  userData
}) => {
  const [selectedPlan, setSelectedPlan] = useState<string>(userData.plan || '');

  const handleContinue = () => {
    updateUserData({
      plan: selectedPlan
    });
    nextStep();
  };

  const plans = [
    {
      id: 'free',
      name: 'Free Plan',
      subtitle: 'Get started with basics',
      price: '€0',
      period: '/month (3 months)',
      originalPrice: null,
      badge: 'STARTER',
      badgeColor: 'bg-green-100 text-green-700',
      icon: ZapIcon,
      iconColor: 'text-green-600',
      gradient: 'from-green-50 to-emerald-50',
      borderColor: 'border-green-200',
      buttonStyle: 'bg-green-600 hover:bg-green-700',
      features: [
        'Virtual EU office',
        'Phone number',
        '25 credits',
        'AI Market Entry Strategy',
        'Basic AI tools'
      ],
      popular: false
    },
    {
      id: 'ebranch',
      name: 'eBranch Plan',
      subtitle: 'Most popular for EU expansion',
      price: '€1,995',
      period: '/year',
      originalPrice: '€2,495',
      badge: 'POPULAR',
      badgeColor: 'bg-pink-100 text-pink-700',
      icon: BuildingIcon,
      iconColor: 'text-pink-600',
      gradient: 'from-pink-50 to-rose-50',
      borderColor: 'border-pink-200',
      buttonStyle: 'bg-pink-600 hover:bg-pink-700',
      features: [
        'Virtual EU office',
        'Local entity registration',
        'VAT ID application',
        'Compliance management',
        'Unlimited credits',
        'Priority support'
      ],
      popular: true
    },
    {
      id: 'premium',
      name: 'Premium Plan',
      subtitle: 'Full-service business expansion',
      price: '€4,995',
      period: '/year',
      originalPrice: '€6,495',
      badge: 'PREMIUM',
      badgeColor: 'bg-purple-100 text-purple-700',
      icon: CrownIcon,
      iconColor: 'text-purple-600',
      gradient: 'from-purple-50 to-violet-50',
      borderColor: 'border-purple-200',
      buttonStyle: 'bg-purple-600 hover:bg-purple-700',
      features: [
        'Everything in eBranch',
        'Dedicated account manager',
        'Custom legal documents',
        'Advanced compliance tools',
        'Priority processing',
        '24/7 support'
      ],
      popular: false
    }
  ];

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-white mb-2">Choose your plan</h2>
        <p className="text-gray-300">Select the plan that best fits your business needs</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {plans.map((plan, index) => (
          <motion.div
            key={plan.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className={`relative p-6 rounded-2xl border-2 transition-all duration-200 cursor-pointer ${
              selectedPlan === plan.name
                ? `${plan.borderColor} bg-white shadow-xl scale-105`
                : 'border-[#2D2755] bg-[#1B1537]/50 hover:border-[#EA3A70]/50'
            }`}
            onClick={() => setSelectedPlan(plan.name)}
          >
            {plan.popular && (
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <span className={`px-3 py-1 text-xs font-medium rounded-full ${plan.badgeColor}`}>
                  {plan.badge}
                </span>
              </div>
            )}

            <div className="text-center mb-6">
              <div className={`${plan.iconColor} mb-4 flex justify-center`}>
                <plan.icon className="h-8 w-8" />
              </div>
              <h3 className={`text-xl font-bold ${selectedPlan === plan.name ? 'text-gray-900' : 'text-white'}`}>
                {plan.name}
              </h3>
              <p className={`text-sm ${selectedPlan === plan.name ? 'text-gray-600' : 'text-gray-300'}`}>
                {plan.subtitle}
              </p>
            </div>

            <div className="text-center mb-6">
              <div className="flex items-baseline justify-center">
                <span className={`text-3xl font-bold ${selectedPlan === plan.name ? 'text-gray-900' : 'text-white'}`}>
                  {plan.price}
                </span>
                <span className={`text-sm ml-1 ${selectedPlan === plan.name ? 'text-gray-600' : 'text-gray-300'}`}>
                  {plan.period}
                </span>
              </div>
              {plan.originalPrice && (
                <div className="text-sm text-gray-500 line-through mt-1">
                  {plan.originalPrice}
                </div>
              )}
            </div>

            <ul className="space-y-3 mb-6">
              {plan.features.map((feature, featureIndex) => (
                <li key={featureIndex} className="flex items-start">
                  <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className={`text-sm ${selectedPlan === plan.name ? 'text-gray-700' : 'text-gray-300'}`}>
                    {feature}
                  </span>
                </li>
              ))}
            </ul>

            {selectedPlan === plan.name && (
              <div className="absolute top-4 right-4">
                <div className="w-6 h-6 bg-[#EA3A70] rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            )}
          </motion.div>
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
          disabled={!selectedPlan}
        >
          Continue
        </button>
      </div>
    </div>
  );
};
