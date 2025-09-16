import React, { useState } from 'react';
import { ChevronDownIcon, ChevronRightIcon, CheckCircleIcon, ClockIcon, FileTextIcon, BuildingIcon, CalendarIcon, AlertTriangleIcon, UserIcon } from 'lucide-react';
interface TimelineStage {
  id: number;
  title: string;
  duration: string;
  description: string;
  activities: string[];
  dependencies: string[];
  documents?: string[];
  responsibility: 'client' | 'hoc' | 'government' | 'third-party';
  status?: 'completed' | 'in-progress' | 'pending';
  expanded?: boolean;
}
export function IncorporationTimeline() {
  const [stages, setStages] = useState<TimelineStage[]>([{
    id: 1,
    title: 'Business Decision & Strategy Phase',
    duration: '1-4 weeks',
    description: 'Initial business planning and strategic decision-making',
    activities: ['Business concept refinement', 'Market analysis & business plan development', 'Initial entity type selection', 'Jurisdiction selection & tax planning'],
    dependencies: ['None - this is the initial phase'],
    responsibility: 'client',
    status: 'completed',
    expanded: false
  }, {
    id: 2,
    title: 'Onboarding Process',
    duration: '3-7 days',
    description: 'Establishing relationship with House of Companies',
    activities: ['Initial consultation with House of Companies', 'Document collection & verification', 'KYC/AML compliance procedures', 'Service package selection', 'Agreement signing'],
    documents: ['Passport copies', 'Proof of address', 'Business plan'],
    dependencies: ['Completion of initial business strategy'],
    responsibility: 'hoc',
    status: 'completed',
    expanded: false
  }, {
    id: 3,
    title: 'Company Registration',
    duration: '5-10 days',
    description: 'Legal formation of the entity',
    activities: ['Name availability check (1-2 days)', 'Articles of Association drafting (2-3 days)', 'Notarial deed preparation (1-2 days)', 'Notarial deed execution (1 day)', 'Chamber of Commerce registration (1-2 days)', 'Tax administration registration (occurs simultaneously)'],
    documents: ['Director ID', 'Shareholder information', 'Registered address'],
    dependencies: ['Completed onboarding', 'Notary availability'],
    responsibility: 'hoc',
    status: 'in-progress',
    expanded: true
  }, {
    id: 4,
    title: 'Bank Account Opening',
    duration: '10-20 days',
    description: 'Establishing banking services for the company',
    activities: ['Bank selection and application preparation (2-3 days)', 'Initial application submission (1 day)', "Bank's KYC/AML procedures (7-15 days)", 'Account activation and online banking setup (1-2 days)'],
    documents: ['Company registration documents', 'UBO information', 'Business plan'],
    dependencies: ['Completed company registration'],
    responsibility: 'third-party',
    status: 'pending',
    expanded: false
  }, {
    id: 5,
    title: 'VAT Number Application',
    duration: '5-15 days',
    description: 'Registration for Value Added Tax',
    activities: ['VAT registration form preparation (1-2 days)', 'Documentation of business activities (1 day)', 'Submission to tax authorities (1 day)', 'Processing time (3-12 days)'],
    documents: ['Company registration', 'Description of business activities', 'Projected turnover'],
    dependencies: ['Completed company registration'],
    responsibility: 'government',
    status: 'pending',
    expanded: false
  }, {
    id: 6,
    title: 'First VAT Return Submission',
    duration: 'Quarterly + 30 days',
    description: 'Initial tax compliance obligation',
    activities: ['Bookkeeping setup & transaction recording (ongoing)', 'VAT calculation and verification (3-5 days after quarter end)', 'Return preparation and review (1-2 days)', 'Submission (1 day)'],
    dependencies: ['Active VAT number', 'Completed financial transactions'],
    responsibility: 'hoc',
    status: 'pending',
    expanded: false
  }, {
    id: 7,
    title: 'First Book Year Closure',
    duration: '3-5 months after year-end',
    description: 'Annual financial reporting and tax filing',
    activities: ['Full year bookkeeping finalization (30-45 days after year-end)', 'Annual accounts preparation (30-60 days)', 'Corporate tax return preparation (15-30 days)', 'Filing with Chamber of Commerce (1-2 days)', 'Tax return filing (1 day)'],
    dependencies: ['Complete financial records for the year'],
    responsibility: 'hoc',
    status: 'pending',
    expanded: false
  }]);
  const toggleExpand = (id: number) => {
    setStages(stages.map(stage => stage.id === id ? {
      ...stage,
      expanded: !stage.expanded
    } : stage));
  };
  const getResponsibilityColor = (responsibility: string) => {
    switch (responsibility) {
      case 'client':
        return 'text-purple-600 bg-purple-50 border-purple-200';
      case 'hoc':
        return 'text-blue-600 bg-blue-50 border-blue-200';
      case 'government':
        return 'text-green-600 bg-green-50 border-green-200';
      case 'third-party':
        return 'text-orange-600 bg-orange-50 border-orange-200';
      default:
        return 'text-gray-600 bg-gray-50 border-gray-200';
    }
  };
  const getResponsibilityIcon = (responsibility: string) => {
    switch (responsibility) {
      case 'client':
        return <UserIcon className="h-4 w-4" />;
      case 'hoc':
        return <BuildingIcon className="h-4 w-4" />;
      case 'government':
        return <FileTextIcon className="h-4 w-4" />;
      case 'third-party':
        return <div className="h-4 w-4" />;
      default:
        return <ClockIcon className="h-4 w-4" />;
    }
  };
  const getStatusIcon = (status: string | undefined) => {
    switch (status) {
      case 'completed':
        return <CheckCircleIcon className="h-5 w-5 text-green-500" />;
      case 'in-progress':
        return <ClockIcon className="h-5 w-5 text-blue-500" />;
      case 'pending':
        return <ClockIcon className="h-5 w-5 text-gray-400" />;
      default:
        return <ClockIcon className="h-5 w-5 text-gray-400" />;
    }
  };
  return <div className="space-y-8">
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-6">
          Incorporation Timeline
        </h3>
        <div className="flex items-center justify-between mb-6">
          <div className="flex space-x-4">
            <div className="flex items-center">
              <div className="w-3 h-3 bg-purple-500 rounded-full mr-2"></div>
              <span className="text-sm text-gray-600">
                Client Responsibility
              </span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 bg-blue-500 rounded-full mr-2"></div>
              <span className="text-sm text-gray-600">House of Companies</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
              <span className="text-sm text-gray-600">Government</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 bg-orange-500 rounded-full mr-2"></div>
              <span className="text-sm text-gray-600">Third Party</span>
            </div>
          </div>
          <div className="text-sm text-gray-500">
            <span className="font-medium">Total Duration:</span> 2-3 months
            (typical)
          </div>
        </div>
        <div className="relative">
          {stages.map((stage, index) => <div key={stage.id} className="mb-6 relative">
              {/* Timeline connector */}
              {index < stages.length - 1 && <div className="absolute left-5 top-10 bottom-0 w-0.5 bg-gray-200 z-0"></div>}
              <div className="flex">
                {/* Timeline node */}
                <div className="relative z-10 flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center mr-4 border-2 border-white shadow-md" style={{
              backgroundColor: stage.responsibility === 'client' ? '#A78BFA' : stage.responsibility === 'hoc' ? '#3B82F6' : stage.responsibility === 'government' ? '#10B981' : '#F97316'
            }}>
                  {getStatusIcon(stage.status)}
                </div>
                <div className="flex-grow">
                  <div className={`border rounded-lg transition-all duration-200 ${stage.expanded ? 'shadow-md' : 'hover:shadow-sm'}`}>
                    {/* Header */}
                    <div className="flex items-center justify-between p-4 cursor-pointer" onClick={() => toggleExpand(stage.id)}>
                      <div className="flex items-center">
                        <div className="mr-3">
                          <span className="text-lg font-medium text-gray-900">
                            {stage.id}.
                          </span>
                        </div>
                        <div>
                          <h4 className="text-lg font-medium text-gray-900">
                            {stage.title}
                          </h4>
                          <p className="text-sm text-gray-500">
                            {stage.description}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <div className="flex items-center mr-4">
                          <ClockIcon className="h-4 w-4 text-gray-400 mr-1" />
                          <span className="text-sm font-medium text-gray-700">
                            {stage.duration}
                          </span>
                        </div>
                        <div className={`p-1.5 rounded-md ${stage.expanded ? 'bg-gray-100' : ''}`}>
                          {stage.expanded ? <ChevronDownIcon className="h-5 w-5 text-gray-500" /> : <ChevronRightIcon className="h-5 w-5 text-gray-500" />}
                        </div>
                      </div>
                    </div>
                    {/* Expanded content */}
                    {stage.expanded && <div className="p-4 pt-0 border-t border-gray-100">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <h5 className="font-medium text-gray-900 mb-2">
                              Key Activities
                            </h5>
                            <ul className="space-y-2">
                              {stage.activities.map((activity, i) => <li key={i} className="flex items-start">
                                  <div className="h-5 w-5 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center flex-shrink-0 mt-0.5 mr-2">
                                    <span className="text-xs font-bold">
                                      {i + 1}
                                    </span>
                                  </div>
                                  <span className="text-sm text-gray-700">
                                    {activity}
                                  </span>
                                </li>)}
                            </ul>
                          </div>
                          <div className="space-y-4">
                            <div>
                              <h5 className="font-medium text-gray-900 mb-2">
                                Dependencies
                              </h5>
                              <ul className="space-y-1">
                                {stage.dependencies.map((dependency, i) => <li key={i} className="flex items-start">
                                    <AlertTriangleIcon className="h-4 w-4 text-amber-500 mr-2 flex-shrink-0 mt-0.5" />
                                    <span className="text-sm text-gray-700">
                                      {dependency}
                                    </span>
                                  </li>)}
                              </ul>
                            </div>
                            {stage.documents && <div>
                                <h5 className="font-medium text-gray-900 mb-2">
                                  Required Documents
                                </h5>
                                <ul className="space-y-1">
                                  {stage.documents.map((document, i) => <li key={i} className="flex items-start">
                                      <FileTextIcon className="h-4 w-4 text-gray-400 mr-2 flex-shrink-0 mt-0.5" />
                                      <span className="text-sm text-gray-700">
                                        {document}
                                      </span>
                                    </li>)}
                                </ul>
                              </div>}
                          </div>
                        </div>
                        <div className="mt-4 pt-4 border-t border-gray-100">
                          <div className="flex justify-between items-center">
                            <div className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium border ${getResponsibilityColor(stage.responsibility)}`}>
                              {getResponsibilityIcon(stage.responsibility)}
                              <span className="ml-1.5">
                                {stage.responsibility === 'client' ? 'Client Responsibility' : stage.responsibility === 'hoc' ? 'House of Companies' : stage.responsibility === 'government' ? 'Government Processing' : 'Third-Party Service'}
                              </span>
                            </div>
                            {stage.status === 'in-progress' && <div className="text-xs text-blue-600 font-medium">
                                Currently in progress
                              </div>}
                          </div>
                        </div>
                      </div>}
                  </div>
                </div>
              </div>
            </div>)}
        </div>
        <div className="mt-8 bg-blue-50 border border-blue-100 rounded-lg p-4">
          <h4 className="font-medium text-blue-800 mb-2">Acceleration Tips</h4>
          <ul className="space-y-2">
            <li className="flex items-start">
              <div className="h-5 w-5 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center flex-shrink-0 mt-0.5 mr-2">
                <span className="text-xs font-bold">1</span>
              </div>
              <span className="text-sm text-blue-700">
                Prepare all KYC documents in advance to expedite the onboarding
                process
              </span>
            </li>
            <li className="flex items-start">
              <div className="h-5 w-5 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center flex-shrink-0 mt-0.5 mr-2">
                <span className="text-xs font-bold">2</span>
              </div>
              <span className="text-sm text-blue-700">
                Consider premium services for expedited company registration
                (2-3 days faster)
              </span>
            </li>
            <li className="flex items-start">
              <div className="h-5 w-5 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center flex-shrink-0 mt-0.5 mr-2">
                <span className="text-xs font-bold">3</span>
              </div>
              <span className="text-sm text-blue-700">
                Begin bank account application process while company
                registration is in progress
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>;
}