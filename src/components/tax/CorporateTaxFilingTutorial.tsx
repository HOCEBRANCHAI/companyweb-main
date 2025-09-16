import React from 'react';
import { AlertCircleIcon, CheckIcon, FileTextIcon, CalendarIcon, ExternalLinkIcon, InfoIcon, ArrowRightIcon } from 'lucide-react';
interface CorporateTaxFilingTutorialProps {
  taxData?: {
    period: string;
    revenue?: number;
    expenses?: number;
    profit?: number;
    taxableIncome?: number;
    taxLiability?: number;
    dueDate?: string;
  };
  className?: string;
  currentStep?: number;
  onStartFiling?: () => void;
  onViewDetailedTutorial?: () => void;
}
export function CorporateTaxFilingTutorial({
  taxData,
  className = '',
  currentStep = 1,
  onStartFiling,
  onViewDetailedTutorial
}: CorporateTaxFilingTutorialProps) {
  // Generate personalized tutorial steps based on the tax data
  const tutorialSteps = [{
    id: 1,
    title: 'Prepare your financial statements',
    description: taxData ? `For the ${taxData.period} period, you'll need to prepare financial statements showing revenue of €${taxData.revenue?.toLocaleString()} and expenses of €${taxData.expenses?.toLocaleString()}.` : 'Prepare your annual financial statements including profit & loss and balance sheet.',
    completed: currentStep > 1,
    tip: 'Ensure all revenue and expense items are properly categorized according to Dutch accounting standards.'
  }, {
    id: 2,
    title: 'Calculate taxable profit',
    description: taxData ? `Adjust your commercial profit of €${taxData.profit?.toLocaleString()} to arrive at taxable profit of €${taxData.taxableIncome?.toLocaleString()}.` : 'Adjust your commercial profit for tax purposes by adding back non-deductible expenses and applying available tax incentives.',
    completed: currentStep > 2,
    tip: 'Common adjustments include limitations on entertainment expenses, certain provisions, and investment incentives like the innovation box.'
  }, {
    id: 3,
    title: 'Log in to the Dutch Tax Authority portal',
    description: 'Access the Belastingdienst website and navigate to the corporate income tax return section.',
    completed: currentStep > 3,
    tip: 'You can use your company authentication credentials or eHerkenning to log in.',
    link: {
      url: 'https://www.belastingdienst.nl',
      text: 'Belastingdienst Portal'
    }
  }, {
    id: 4,
    title: 'Complete the corporate tax return form',
    description: taxData ? `Report taxable profit of €${taxData.taxableIncome?.toLocaleString()} and calculate corporate tax of €${taxData.taxLiability?.toLocaleString()}.` : 'Fill in all required sections of the corporate tax return form.',
    completed: currentStep > 4,
    tip: 'The Dutch corporate tax return is extensive - pay special attention to sections on participation exemption, fiscal unity, and loss relief.'
  }, {
    id: 5,
    title: 'Review and submit your return',
    description: 'Check all entries carefully before submitting your corporate tax return.',
    completed: currentStep > 5,
    tip: 'Consider having your return reviewed by a tax professional before submission, especially for complex situations.'
  }, {
    id: 6,
    title: 'Pay your corporate tax liability',
    description: taxData ? `Make the final payment of €${taxData.taxLiability?.toLocaleString()} by the due date.` : 'Transfer the corporate tax amount due to the tax authority by the payment deadline.',
    completed: currentStep > 6,
    tip: 'Remember that provisional payments made throughout the year will be offset against your final tax liability.'
  }];
  // Personalized deadline information
  const dueDate = new Date();
  dueDate.setMonth(dueDate.getMonth() + 5); // Typically 5 months after fiscal year-end
  const deadlineInfo = taxData?.dueDate ? {
    date: new Date(taxData.dueDate).toLocaleDateString(),
    amount: taxData.taxLiability?.toLocaleString() || '0',
    period: taxData.period
  } : {
    date: dueDate.toLocaleDateString(),
    amount: 'calculated based on your taxable profit',
    period: 'the fiscal year'
  };
  // Handle button click - either use provided callback or open a new window to the tax authority
  const handleStartFilingClick = () => {
    if (onStartFiling) {
      onStartFiling();
    } else {
      // Fallback action: Open the Dutch Tax Authority website in a new tab
      window.open('https://www.belastingdienst.nl/wps/wcm/connect/nl/ondernemers/content/aangifte-vennootschapsbelasting-doen-zo-werkt-het', '_blank');
    }
  };
  // Handle view detailed tutorial
  const handleViewDetailedTutorial = () => {
    if (onViewDetailedTutorial) {
      onViewDetailedTutorial();
    }
  };
  return <div className={`p-6 ${className}`}>
      <div className="mb-6 flex items-start bg-gradient-to-r from-blue-600 to-indigo-700 rounded-xl p-5 shadow-lg">
        <div className="h-10 w-10 rounded-full bg-white/20 flex items-center justify-center mr-4 flex-shrink-0">
          <CalendarIcon className="h-5 w-5 text-white" />
        </div>
        <div>
          <h3 className="text-lg font-medium text-white mb-1">
            Corporate Tax Filing Deadline
          </h3>
          <p className="text-white/90">
            Your corporate tax return for {deadlineInfo.period} must be filed
            and paid by{' '}
            <span className="font-semibold">{deadlineInfo.date}</span>. The
            estimated amount due is{' '}
            <span className="font-semibold">€{deadlineInfo.amount}</span>.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <div className="bg-indigo-900/50 rounded-lg p-5 border border-indigo-500/30">
          <div className="flex items-center mb-3">
            <FileTextIcon className="h-5 w-5 text-indigo-300 mr-2" />
            <h4 className="text-white font-medium">Required Information</h4>
          </div>
          <ul className="space-y-2 text-indigo-200 text-sm">
            <li className="flex items-start">
              <CheckIcon className="h-4 w-4 text-green-400 mr-2 mt-0.5" />
              <span>Annual financial statements</span>
            </li>
            <li className="flex items-start">
              <CheckIcon className="h-4 w-4 text-green-400 mr-2 mt-0.5" />
              <span>Profit & loss statement</span>
            </li>
            <li className="flex items-start">
              <CheckIcon className="h-4 w-4 text-green-400 mr-2 mt-0.5" />
              <span>Balance sheet</span>
            </li>
            <li className="flex items-start">
              <CheckIcon className="h-4 w-4 text-green-400 mr-2 mt-0.5" />
              <span>Tax depreciation schedules</span>
            </li>
            <li className="flex items-start">
              <CheckIcon className="h-4 w-4 text-green-400 mr-2 mt-0.5" />
              <span>Details of tax incentives claimed</span>
            </li>
          </ul>
        </div>
        <div className="bg-indigo-900/50 rounded-lg p-5 border border-indigo-500/30">
          <div className="flex items-center mb-3">
            <InfoIcon className="h-5 w-5 text-indigo-300 mr-2" />
            <h4 className="text-white font-medium">Important Notes</h4>
          </div>
          <ul className="space-y-2 text-indigo-200 text-sm">
            <li className="flex items-start">
              <AlertCircleIcon className="h-4 w-4 text-[#EA3A70] mr-2 mt-0.5" />
              <span>
                Late filing penalties can be substantial and increase over time
              </span>
            </li>
            <li className="flex items-start">
              <AlertCircleIcon className="h-4 w-4 text-[#EA3A70] mr-2 mt-0.5" />
              <span>Interest is charged on late tax payments</span>
            </li>
            <li className="flex items-start">
              <AlertCircleIcon className="h-4 w-4 text-[#EA3A70] mr-2 mt-0.5" />
              <span>Keep all supporting documents for 7 years</span>
            </li>
          </ul>
        </div>
        <div className="bg-indigo-900/50 rounded-lg p-5 border border-indigo-500/30">
          <div className="flex items-center mb-3">
            <ExternalLinkIcon className="h-5 w-5 text-indigo-300 mr-2" />
            <h4 className="text-white font-medium">Useful Resources</h4>
          </div>
          <ul className="space-y-2 text-indigo-200 text-sm">
            <li className="flex items-start">
              <ArrowRightIcon className="h-4 w-4 text-indigo-300 mr-2 mt-0.5" />
              <a href="#" className="text-indigo-300 hover:text-white transition-colors">
                Corporate Tax Return Guide
              </a>
            </li>
            <li className="flex items-start">
              <ArrowRightIcon className="h-4 w-4 text-indigo-300 mr-2 mt-0.5" />
              <a href="#" className="text-indigo-300 hover:text-white transition-colors">
                Tax Incentives Overview
              </a>
            </li>
            <li className="flex items-start">
              <ArrowRightIcon className="h-4 w-4 text-indigo-300 mr-2 mt-0.5" />
              <a href="#" className="text-indigo-300 hover:text-white transition-colors">
                Common Corporate Tax Filing Errors
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="bg-indigo-900/50 rounded-lg p-5 border border-indigo-500/30">
        <div className="flex justify-between items-center mb-4">
          <h4 className="text-white font-medium">Filing Process Summary</h4>
          <button onClick={handleViewDetailedTutorial} className="text-indigo-300 hover:text-white text-sm flex items-center">
            View Full Guide
            <ArrowRightIcon className="h-3 w-3 ml-1" />
          </button>
        </div>
        <div className="space-y-6">
          {tutorialSteps.map((step, index) => <div key={step.id} className="relative">
              {/* Connecting line between steps */}
              {index < tutorialSteps.length - 1 && <div className="absolute left-4 top-10 h-full w-0.5 bg-indigo-500/30" aria-hidden="true" />}
              <div className="flex">
                <div className={`h-8 w-8 rounded-full flex items-center justify-center mr-4 flex-shrink-0 ${step.completed ? 'bg-green-500/20 border border-green-500/50' : 'bg-indigo-900/70 border border-indigo-500/30'}`}>
                  {step.completed ? <CheckIcon className="h-4 w-4 text-green-400" /> : <span className="text-white text-sm">{step.id}</span>}
                </div>
                <div className="flex-1">
                  <h5 className={`font-medium ${step.completed ? 'text-green-400' : 'text-white'}`}>
                    {step.title}
                  </h5>
                  <p className="text-indigo-300 text-sm mt-1">
                    {step.description}
                  </p>
                  {step.link && <a href={step.link.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-xs text-indigo-300 hover:text-white mt-2">
                      {step.link.text}
                      <ExternalLinkIcon className="h-3 w-3 ml-1" />
                    </a>}
                  {step.tip && <div className="flex items-start mt-3 bg-indigo-900/30 rounded p-3 border border-indigo-500/20">
                      <AlertCircleIcon className="h-4 w-4 text-indigo-300 mr-2 mt-0.5 flex-shrink-0" />
                      <p className="text-indigo-300 text-xs">
                        <span className="font-medium">Tip:</span> {step.tip}
                      </p>
                    </div>}
                </div>
              </div>
            </div>)}
        </div>
      </div>
      <div className="mt-8 flex justify-between items-center">
        <p className="text-indigo-300 text-sm">
          <InfoIcon className="h-4 w-4 inline mr-1" />
          This is a summary of the filing process. Click the button to begin the
          guided filing workflow.
        </p>
        <button onClick={handleStartFilingClick} className="px-4 py-2 bg-[#EA3A70] text-white rounded-xl hover:bg-[#EA3A70]/90 transition-colors flex items-center" data-testid="start-corporate-filing-button">
          Begin Interactive Filing Process
          <ArrowRightIcon className="h-4 w-4 ml-2" />
        </button>
      </div>
    </div>;
}