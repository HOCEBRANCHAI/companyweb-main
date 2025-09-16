import React, { useState } from 'react';
import { CheckIcon } from 'lucide-react';
import { DutchBVRegistration } from '../workflows/DutchBVRegistration';
import { PayrollRegistration } from '../workflows/payroll/PayrollRegistration';
interface PlanCardProps {
  name: string;
  subtitle: string;
  description: string;
  price: string;
  interval: string;
  features: string[];
  highlightText: string;
  cta: string;
  icon: React.ReactNode;
  popular?: boolean;
  duration?: string;
  current?: boolean;
  onSelect?: () => void;
}
export function PlanCard({
  name,
  subtitle,
  description,
  price,
  interval,
  features,
  highlightText,
  cta,
  icon,
  popular,
  duration,
  current,
  onSelect
}: PlanCardProps) {
  const [showBVRegistration, setShowBVRegistration] = useState(false);
  const [showPayrollRegistration, setShowPayrollRegistration] = useState(false);
  const handleClick = () => {
    if (current) return; // Do nothing if it's the current plan
    if (onSelect) {
      onSelect();
    }
  };
  return <div className={`relative rounded-lg border ${current ? 'border-green-200 bg-green-50' : popular ? 'border-blue-200 bg-blue-50' : 'border-gray-200 bg-white'} p-6 shadow-sm hover:shadow-md transition-shadow`}>
      {current && <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-600 text-white">
            Current Plan
          </span>
        </div>}
      {popular && !current && <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-600 text-white">
            Most Popular
          </span>
        </div>}
      <div className="text-center mb-6">
        <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg ${popular ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-600'} mb-4`}>
          {icon}
        </div>
        <h3 className="text-lg font-medium text-gray-900">{name}</h3>
        <p className="text-sm text-gray-500">{subtitle}</p>
      </div>
      <div className="text-center mb-6">
        <p className="text-sm text-gray-500 mb-2">{highlightText}</p>
        <div className="flex items-baseline justify-center">
          <span className="text-3xl font-bold text-gray-900">{price}</span>
          {interval && <span className="text-gray-500 ml-1">/{interval}</span>}
        </div>
        {duration && <p className="text-sm text-gray-500 mt-1">{duration}</p>}
      </div>
      <p className="text-sm text-gray-600 text-center mb-6">{description}</p>
      <ul className="space-y-3 mb-6">
        {features.map(feature => <li key={feature} className="flex items-start">
            <CheckIcon className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
            <span className="text-sm text-gray-600">{feature}</span>
          </li>)}
      </ul>
      <button onClick={handleClick} disabled={current} className={`w-full py-2 px-4 rounded-md text-sm font-medium ${current ? 'bg-green-100 text-green-800 cursor-default' : popular ? 'bg-blue-600 text-white hover:bg-blue-700' : price === 'Custom' ? 'bg-gray-900 text-white hover:bg-gray-800' : 'bg-white border border-gray-300 text-gray-700 hover:bg-gray-50'}`}>
        {cta}
      </button>
      {showBVRegistration && <DutchBVRegistration onClose={() => setShowBVRegistration(false)} />}
      {showPayrollRegistration && <PayrollRegistration onClose={() => setShowPayrollRegistration(false)} />}
    </div>;
}