import React, { useState } from 'react';
import { UsersIcon, UserIcon, FileTextIcon, CalendarIcon, ClipboardCheckIcon, ShieldIcon, CheckCircleIcon } from 'lucide-react';
export function CorporateGovernanceChart() {
  const [activeLevel, setActiveLevel] = useState<string | null>(null);
  const governanceLevels = [{
    id: 'shareholders',
    name: 'Shareholders',
    icon: <UsersIcon className="h-6 w-6" />,
    color: 'bg-purple-100 text-purple-800 border-purple-200',
    position: 'top'
  }, {
    id: 'board',
    name: 'Board of Directors',
    icon: <UserIcon className="h-6 w-6" />,
    color: 'bg-blue-100 text-blue-800 border-blue-200',
    position: 'middle'
  }, {
    id: 'documentation',
    name: 'Corporate Documentation',
    icon: <FileTextIcon className="h-6 w-6" />,
    color: 'bg-green-100 text-green-800 border-green-200',
    position: 'bottom'
  }, {
    id: 'compliance',
    name: 'Filing Requirements',
    icon: <ClipboardCheckIcon className="h-6 w-6" />,
    color: 'bg-orange-100 text-orange-800 border-orange-200',
    position: 'bottom'
  }];
  const governanceDetails = {
    shareholders: {
      title: 'Shareholder Rights & Responsibilities',
      description: 'Shareholders own the company and have ultimate control through voting rights.',
      requirements: ['At least one shareholder (individual or legal entity)', 'Annual general meeting requirement', 'Special resolutions for major decisions', 'Appointment and dismissal of directors', 'Approval of annual accounts', 'Dividend distribution decisions', 'UBO registration with Chamber of Commerce'],
      compliance: ['Maintain shareholder register', 'Record all share transfers', 'Document shareholder resolutions', 'Notify changes to Chamber of Commerce']
    },
    board: {
      title: 'Board of Directors Requirements',
      description: 'The board is responsible for day-to-day management and representing the company.',
      requirements: ['At least one director (individual or legal entity)', 'Residence requirements may apply for substance', 'Directors have joint and several liability', 'Board meetings should be documented', "Directors must act in company's best interest", 'Duty of care and loyalty obligations', 'Registration with Chamber of Commerce'],
      compliance: ['Hold regular board meetings', 'Maintain minutes of all meetings', 'Document major business decisions', 'Ensure proper financial management']
    },
    documentation: {
      title: 'Mandatory Corporate Documentation',
      description: 'Proper documentation is essential for legal compliance and good governance.',
      requirements: ['Articles of Association (deed of incorporation)', 'Shareholders register', 'Board resolutions', 'Shareholder resolutions', 'Annual accounts', 'Corporate tax returns', 'VAT returns (if applicable)', 'Employment contracts', 'Business correspondence'],
      compliance: ['Keep documentation for at least 7 years', 'Ensure documents are up-to-date', 'Maintain proper authorization systems', 'Implement document retention policy']
    },
    compliance: {
      title: 'Filing and Reporting Requirements',
      description: 'Regular filings and reports are required to maintain good standing.',
      requirements: ['Annual accounts filing with Chamber of Commerce', 'Corporate income tax return', 'VAT returns (monthly, quarterly or annually)', 'Wage tax returns (if employees)', 'UBO registration and updates', 'Statistical reporting (if applicable)', 'Industry-specific reporting requirements'],
      compliance: ['File annual accounts within 12 months of year-end', 'Submit tax returns by statutory deadlines', 'Report changes in company structure promptly', 'Maintain proper books and records']
    }
  };
  const handleLevelClick = (id: string) => {
    setActiveLevel(id === activeLevel ? null : id);
  };
  return <div className="bg-white rounded-lg border border-gray-200 p-6">
      <h3 className="text-xl font-bold text-gray-900 mb-4">
        Corporate Governance Requirements
      </h3>
      <p className="text-gray-600 mb-6">
        Understanding the governance structure and requirements for a Dutch
        entity is essential for proper compliance and operation. Click on each
        level to see detailed requirements.
      </p>
      <div className="flex flex-col items-center mb-8">
        {/* Pyramid structure */}
        <div className="w-full max-w-2xl">
          {/* Top level - Shareholders */}
          <div className={`mx-auto w-1/2 p-4 rounded-t-lg cursor-pointer border ${activeLevel === 'shareholders' ? 'bg-purple-100 border-purple-300 shadow-md' : 'bg-purple-50 border-purple-200 hover:bg-purple-100'}`} onClick={() => handleLevelClick('shareholders')}>
            <div className="flex items-center justify-center">
              <UsersIcon className="h-6 w-6 text-purple-600 mr-2" />
              <h4 className="font-medium text-purple-900">Shareholders</h4>
            </div>
          </div>
          {/* Middle level - Board of Directors */}
          <div className={`mx-auto w-2/3 p-4 cursor-pointer border-x border-b ${activeLevel === 'board' ? 'bg-blue-100 border-blue-300 shadow-md' : 'bg-blue-50 border-blue-200 hover:bg-blue-100'}`} onClick={() => handleLevelClick('board')}>
            <div className="flex items-center justify-center">
              <UserIcon className="h-6 w-6 text-blue-600 mr-2" />
              <h4 className="font-medium text-blue-900">Board of Directors</h4>
            </div>
          </div>
          {/* Bottom level - split between Documentation and Compliance */}
          <div className="flex w-full">
            <div className={`w-1/2 p-4 rounded-bl-lg cursor-pointer border-l border-b ${activeLevel === 'documentation' ? 'bg-green-100 border-green-300 shadow-md' : 'bg-green-50 border-green-200 hover:bg-green-100'}`} onClick={() => handleLevelClick('documentation')}>
              <div className="flex items-center justify-center">
                <FileTextIcon className="h-6 w-6 text-green-600 mr-2" />
                <h4 className="font-medium text-green-900">Documentation</h4>
              </div>
            </div>
            <div className={`w-1/2 p-4 rounded-br-lg cursor-pointer border-r border-b ${activeLevel === 'compliance' ? 'bg-orange-100 border-orange-300 shadow-md' : 'bg-orange-50 border-orange-200 hover:bg-orange-100'}`} onClick={() => handleLevelClick('compliance')}>
              <div className="flex items-center justify-center">
                <ClipboardCheckIcon className="h-6 w-6 text-orange-600 mr-2" />
                <h4 className="font-medium text-orange-900">Compliance</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Details panel */}
      {activeLevel && <div className={`border rounded-lg overflow-hidden transition-all duration-300 ${governanceLevels.find(l => l.id === activeLevel)?.color || ''}`}>
          <div className="p-4">
            <div className="flex items-center mb-3">
              {governanceLevels.find(l => l.id === activeLevel)?.icon}
              <h4 className="font-medium text-lg ml-2">
                {governanceDetails[activeLevel as keyof typeof governanceDetails].title}
              </h4>
            </div>
            <p className="text-gray-700 mb-4">
              {governanceDetails[activeLevel as keyof typeof governanceDetails].description}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h5 className="font-medium text-gray-900 mb-3 flex items-center">
                  <ShieldIcon className="h-4 w-4 mr-2" />
                  Requirements
                </h5>
                <ul className="space-y-2">
                  {governanceDetails[activeLevel as keyof typeof governanceDetails].requirements.map((req, i) => <li key={i} className="flex items-start">
                      <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-700">{req}</span>
                    </li>)}
                </ul>
              </div>
              <div>
                <h5 className="font-medium text-gray-900 mb-3 flex items-center">
                  <CalendarIcon className="h-4 w-4 mr-2" />
                  Compliance Actions
                </h5>
                <ul className="space-y-2">
                  {governanceDetails[activeLevel as keyof typeof governanceDetails].compliance.map((comp, i) => <li key={i} className="flex items-start">
                      <CheckCircleIcon className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-700">{comp}</span>
                    </li>)}
                </ul>
              </div>
            </div>
          </div>
        </div>}
      <div className="mt-6 pt-6 border-t border-gray-200">
        <div className="bg-gray-50 rounded-lg p-4">
          <h4 className="font-medium text-gray-900 mb-2">
            Key Governance Takeaways
          </h4>
          <ul className="space-y-2">
            <li className="flex items-start">
              <div className="h-5 w-5 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center flex-shrink-0 mt-0.5 mr-2">
                <span className="text-xs font-bold">1</span>
              </div>
              <span className="text-sm text-gray-700">
                Proper governance is essential for legal compliance and risk
                management
              </span>
            </li>
            <li className="flex items-start">
              <div className="h-5 w-5 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center flex-shrink-0 mt-0.5 mr-2">
                <span className="text-xs font-bold">2</span>
              </div>
              <span className="text-sm text-gray-700">
                Directors have personal liability risks if governance
                requirements are not met
              </span>
            </li>
            <li className="flex items-start">
              <div className="h-5 w-5 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center flex-shrink-0 mt-0.5 mr-2">
                <span className="text-xs font-bold">3</span>
              </div>
              <span className="text-sm text-gray-700">
                House of Companies can provide comprehensive governance support
                to ensure compliance
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>;
}