import React, { useState } from 'react';
import { UserMinusIcon, CoinsIcon, BuildingIcon, ArrowRightIcon, UsersIcon, EuroIcon, InfoIcon, ClipboardIcon, AlertCircleIcon, CheckCircleIcon } from 'lucide-react';
import { AddressChangeWorkflow } from '../workflows/address/AddressChangeWorkflow';
interface ChangeAction {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  category: string;
  complexity: 'Simple' | 'Medium' | 'Complex';
}
export function CorporateChanges() {
  const [showAddressChangeWorkflow, setShowAddressChangeWorkflow] = useState(false);
  const changes: ChangeAction[] = [{
    id: 'resign-director',
    title: 'Resign Director',
    description: 'Process director resignation and update records',
    icon: <UserMinusIcon className="h-6 w-6 text-red-500" />,
    category: 'Management',
    complexity: 'Medium'
  }, {
    id: 'increase-capital',
    title: 'Increase Share Capital',
    description: "Modify company's share capital structure",
    icon: <CoinsIcon className="h-6 w-6 text-green-500" />,
    category: 'Capital',
    complexity: 'Complex'
  }, {
    id: 'change-address',
    title: 'Change Registered Office',
    description: "Update company's registered address",
    icon: <BuildingIcon className="h-6 w-6 text-blue-500" />,
    category: 'Address',
    complexity: 'Simple'
  }, {
    id: 'transfer-shares',
    title: 'Transfer Shares',
    description: 'Process share transfer between parties',
    icon: <UsersIcon className="h-6 w-6 text-purple-500" />,
    category: 'Shares',
    complexity: 'Complex'
  }, {
    id: 'increase-salary',
    title: 'Update CEO Salary',
    description: 'Modify executive compensation',
    icon: <EuroIcon className="h-6 w-6 text-yellow-500" />,
    category: 'Compensation',
    complexity: 'Medium'
  }];
  const getComplexityColor = (complexity: string) => {
    switch (complexity) {
      case 'Simple':
        return 'bg-green-100 text-green-800';
      case 'Medium':
        return 'bg-yellow-100 text-yellow-800';
      case 'Complex':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };
  const handleStartProcess = (changeId: string) => {
    if (changeId === 'change-address') {
      setShowAddressChangeWorkflow(true);
    } else {
      console.log(`Starting process for: ${changeId}`);
    }
  };
  return <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Corporate Changes</h1>
        <p className="text-gray-600 mt-1">
          Initiate and manage important changes to your company
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {changes.map(change => <div key={change.id} className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center">
                  {change.icon}
                  <h3 className="text-lg font-medium text-gray-900 ml-2">
                    {change.title}
                  </h3>
                </div>
                <p className="text-sm text-gray-500 mt-2">
                  {change.description}
                </p>
              </div>
            </div>
            <div className="mt-4 flex items-center justify-between">
              <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getComplexityColor(change.complexity)}`}>
                {change.complexity}
              </span>
              <button onClick={() => handleStartProcess(change.id)} className="flex items-center text-blue-600 hover:text-blue-800">
                Start Process
                <ArrowRightIcon className="ml-2 h-4 w-4" />
              </button>
            </div>
          </div>)}
      </div>
      {/* Active Changes */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <h2 className="text-lg font-medium text-gray-900 mb-4">
          Active Changes
        </h2>
        <div className="space-y-4">
          <div className="flex items-center justify-between py-3 border-b border-gray-200">
            <div className="flex items-center">
              <CoinsIcon className="h-5 w-5 text-gray-400 mr-3" />
              <div>
                <p className="text-sm font-medium text-gray-900">
                  Share Capital Increase
                </p>
                <p className="text-sm text-gray-500">Started 3 days ago</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                In Progress
              </span>
              <button className="text-blue-600 hover:text-blue-800 text-sm">
                Continue
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Corporate Changes Overview */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <div className="flex items-center mb-4">
          <InfoIcon className="h-5 w-5 text-blue-600 mr-2" />
          <h2 className="text-lg font-medium text-gray-900">
            About Corporate Changes
          </h2>
        </div>
        <p className="text-gray-600 mb-6">
          Corporate changes are modifications to your company's structure,
          management, or details that need to be legally processed and recorded.
          Our system helps you manage these changes efficiently while ensuring
          compliance with Dutch regulations.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-blue-50 rounded-lg p-4 border border-blue-100">
            <div className="flex items-start">
              <ClipboardIcon className="h-5 w-5 text-blue-600 mt-0.5 mr-2" />
              <div>
                <h3 className="text-sm font-medium text-blue-800">
                  Process Overview
                </h3>
                <ul className="mt-2 space-y-2 text-sm text-blue-700">
                  <li className="flex items-start">
                    <span className="inline-flex items-center justify-center h-5 w-5 rounded-full bg-blue-200 text-blue-600 text-xs mr-2 flex-shrink-0">
                      1
                    </span>
                    <span>
                      Select the type of corporate change you need to process
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-flex items-center justify-center h-5 w-5 rounded-full bg-blue-200 text-blue-600 text-xs mr-2 flex-shrink-0">
                      2
                    </span>
                    <span>
                      Complete the guided workflow with required information
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-flex items-center justify-center h-5 w-5 rounded-full bg-blue-200 text-blue-600 text-xs mr-2 flex-shrink-0">
                      3
                    </span>
                    <span>Review and submit your changes for processing</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-flex items-center justify-center h-5 w-5 rounded-full bg-blue-200 text-blue-600 text-xs mr-2 flex-shrink-0">
                      4
                    </span>
                    <span>Track the status of your change request</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <div className="bg-green-50 rounded-lg p-4 border border-green-100">
              <div className="flex items-start">
                <CheckCircleIcon className="h-5 w-5 text-green-600 mt-0.5 mr-2" />
                <div>
                  <h3 className="text-sm font-medium text-green-800">
                    Benefits
                  </h3>
                  <ul className="mt-2 space-y-1 text-sm text-green-700">
                    <li>• Guided step-by-step processes</li>
                    <li>• Automated form generation</li>
                    <li>• Compliant with Dutch regulations</li>
                    <li>• Digital record-keeping</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="bg-yellow-50 rounded-lg p-4 border border-yellow-100">
              <div className="flex items-start">
                <AlertCircleIcon className="h-5 w-5 text-yellow-600 mt-0.5 mr-2" />
                <div>
                  <h3 className="text-sm font-medium text-yellow-800">
                    Important Notes
                  </h3>
                  <ul className="mt-2 space-y-1 text-sm text-yellow-700">
                    <li>• Some changes require notarization</li>
                    <li>• Filing fees may apply</li>
                    <li>• Processing times vary by change type</li>
                    <li>• Some changes require shareholder approval</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Address Change Workflow */}
      {showAddressChangeWorkflow && <AddressChangeWorkflow onClose={() => setShowAddressChangeWorkflow(false)} />}
    </div>;
}