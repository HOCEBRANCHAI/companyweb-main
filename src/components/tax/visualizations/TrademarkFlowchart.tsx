import React, { useState } from 'react';
import { CheckCircleIcon, ClockIcon, AlertTriangleIcon, SearchIcon, FileTextIcon, EyeIcon, CheckIcon, XIcon, HelpCircleIcon } from 'lucide-react';
export function TrademarkFlowchart() {
  const [expandedStep, setExpandedStep] = useState<number | null>(null);
  const trademarkSteps = [{
    id: 1,
    title: 'Pre-Filing: Trademark Search & Clearance',
    duration: '1-2 weeks',
    description: "Conduct comprehensive searches to ensure your trademark doesn't infringe on existing marks",
    icon: <SearchIcon className="h-6 w-6" />,
    details: ['Search EU trademark database (EUIPO)', 'Search international trademark database (WIPO)', 'Consider broader searches for unregistered marks', 'Evaluate search results for potential conflicts'],
    tips: 'Consider hiring a specialized trademark attorney for this phase to reduce risk.'
  }, {
    id: 2,
    title: 'Application Preparation & Filing',
    duration: '1 week',
    description: 'Prepare and submit your trademark application with the appropriate office',
    icon: <FileTextIcon className="h-6 w-6" />,
    details: ['Select appropriate trademark classes (Nice Classification)', 'Prepare clear representation of the mark', 'Complete application forms', 'Pay filing fees'],
    tips: 'Filing in multiple classes increases protection but also costs.'
  }, {
    id: 3,
    title: 'Formal Examination',
    duration: '1 month',
    description: 'The trademark office examines your application for compliance with formal requirements',
    icon: <EyeIcon className="h-6 w-6" />,
    details: ['Review of application formalities', 'Verification of classification', 'Check for absolute grounds for refusal', 'Office actions may be issued if problems are found'],
    tips: 'Respond promptly to any office actions to avoid delays.'
  }, {
    id: 4,
    title: 'Publication Period/Opposition Period',
    duration: '3 months',
    description: 'Your application is published, allowing third parties to oppose registration',
    icon: <ClockIcon className="h-6 w-6" />,
    details: ['Application published in trademark bulletin', 'Third parties have 3 months to file oppositions', 'If opposed, opposition proceedings begin', 'If no opposition, application proceeds to next stage'],
    tips: 'Monitor for oppositions and be prepared to defend or negotiate.'
  }, {
    id: 5,
    title: 'Substantive Examination',
    duration: '2-6 months',
    description: 'Detailed examination of the trademark for distinctiveness and other requirements',
    icon: <HelpCircleIcon className="h-6 w-6" />,
    details: ['Examination for distinctiveness', 'Evaluation of descriptiveness', 'Assessment of potential consumer confusion', 'Further office actions may be issued'],
    tips: 'Distinctive, unique marks have a higher chance of approval.'
  }, {
    id: 6,
    title: 'Registration Granted',
    duration: 'If successful',
    description: 'Your trademark is officially registered and protected',
    icon: <CheckCircleIcon className="h-6 w-6" />,
    details: ['Certificate of registration issued', 'Mark protected for 10 years initially', 'Exclusive rights to use the mark in registered classes', 'Right to use ® symbol'],
    tips: 'Calendar the renewal date (10 years) to maintain protection.'
  }, {
    id: 7,
    title: 'Post-Registration Maintenance',
    duration: 'Ongoing',
    description: 'Maintain and enforce your trademark rights',
    icon: <AlertTriangleIcon className="h-6 w-6" />,
    details: ['Monitor for potential infringements', 'Enforce rights against unauthorized users', 'File declarations of use when required', 'Renew registration every 10 years'],
    tips: 'Active enforcement is required to maintain strong trademark rights.'
  }];
  const toggleExpand = (id: number) => {
    if (expandedStep === id) {
      setExpandedStep(null);
    } else {
      setExpandedStep(id);
    }
  };
  return <div className="bg-white rounded-lg border border-gray-200 p-6">
      <h3 className="text-xl font-bold text-gray-900 mb-4">
        Trademark Registration Process
      </h3>
      <p className="text-gray-600 mb-6">
        Protecting your intellectual property is crucial when expanding
        internationally. Follow this timeline to understand the trademark
        registration process in the EU.
      </p>
      <div className="relative">
        {/* Main timeline line */}
        <div className="absolute left-8 top-8 bottom-8 w-0.5 bg-blue-200 z-0"></div>
        {trademarkSteps.map((step, index) => <div key={step.id} className="relative mb-6">
            <div className="flex">
              {/* Timeline node */}
              <div className="relative z-10 flex-shrink-0 w-16 h-16 rounded-full bg-white flex items-center justify-center mr-4 border-2 border-blue-500 shadow-md">
                <div className="text-blue-600">{step.icon}</div>
              </div>
              <div className="flex-grow">
                <div className={`border rounded-lg ${expandedStep === step.id ? 'border-blue-300 shadow-md' : 'border-gray-200'}`}>
                  {/* Header */}
                  <div className="flex items-center justify-between p-4 cursor-pointer" onClick={() => toggleExpand(step.id)}>
                    <div>
                      <div className="flex items-center">
                        <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full mr-2">
                          Step {step.id}
                        </span>
                        <h4 className="text-lg font-medium text-gray-900">
                          {step.title}
                        </h4>
                      </div>
                      <p className="text-sm text-gray-500 mt-1">
                        {step.description}
                      </p>
                    </div>
                    <div className="flex items-center">
                      <div className="flex items-center bg-gray-100 px-3 py-1 rounded-full mr-3">
                        <ClockIcon className="h-4 w-4 text-gray-500 mr-1.5" />
                        <span className="text-sm font-medium text-gray-700">
                          {step.duration}
                        </span>
                      </div>
                      <button className="text-gray-400 hover:text-gray-500 focus:outline-none" aria-expanded={expandedStep === step.id}>
                        {expandedStep === step.id ? <XIcon className="h-5 w-5" /> : <span className="text-blue-500">Details</span>}
                      </button>
                    </div>
                  </div>
                  {/* Expanded content */}
                  {expandedStep === step.id && <div className="p-4 pt-0 border-t border-gray-100 bg-blue-50">
                      <div className="mt-3">
                        <h5 className="font-medium text-gray-900 mb-2">
                          Key Activities
                        </h5>
                        <ul className="space-y-2">
                          {step.details.map((detail, i) => <li key={i} className="flex items-start">
                              <CheckIcon className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                              <span className="text-sm text-gray-700">
                                {detail}
                              </span>
                            </li>)}
                        </ul>
                        <div className="mt-4 bg-white p-3 rounded-lg border border-blue-200">
                          <div className="flex">
                            <AlertTriangleIcon className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0 mt-0.5" />
                            <p className="text-sm text-blue-800">
                              <span className="font-medium">Pro Tip:</span>{' '}
                              {step.tips}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>}
                </div>
              </div>
            </div>
            {/* Connector to next step (except for last item) */}
            {index < trademarkSteps.length - 1 && <div className="absolute left-8 top-16 h-8 w-0.5 bg-blue-200 z-0"></div>}
          </div>)}
      </div>
      <div className="mt-6 bg-gray-50 rounded-lg p-4 border border-gray-200">
        <h4 className="font-medium text-gray-900 mb-2">
          Important Considerations
        </h4>
        <ul className="space-y-2">
          <li className="flex items-start">
            <AlertTriangleIcon className="h-5 w-5 text-amber-500 mr-2 flex-shrink-0 mt-0.5" />
            <span className="text-sm text-gray-700">
              Consider filing for EU-wide protection (EUTM) for comprehensive
              coverage across all EU member states.
            </span>
          </li>
          <li className="flex items-start">
            <AlertTriangleIcon className="h-5 w-5 text-amber-500 mr-2 flex-shrink-0 mt-0.5" />
            <span className="text-sm text-gray-700">
              File separate applications for non-EU countries where you plan to
              do business.
            </span>
          </li>
          <li className="flex items-start">
            <AlertTriangleIcon className="h-5 w-5 text-amber-500 mr-2 flex-shrink-0 mt-0.5" />
            <span className="text-sm text-gray-700">
              Budget approximately €850-€1,500 per application for EU trademark
              registration (excluding attorney fees).
            </span>
          </li>
        </ul>
      </div>
    </div>;
}