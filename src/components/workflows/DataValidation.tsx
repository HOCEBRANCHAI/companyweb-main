import React, { useState } from 'react';
import { CheckIcon, AlertCircleIcon, RefreshCwIcon, DatabaseIcon, ArrowRightIcon } from 'lucide-react';
interface DataValidationProps {
  templateId: string;
  templateName: string;
  onComplete: () => void;
}
interface DataSource {
  id: string;
  name: string;
  status: 'valid' | 'warning' | 'error' | 'validating';
  lastUpdated: string;
  recordCount: number;
  message?: string;
}
export function DataValidation({
  templateId,
  templateName,
  onComplete
}: DataValidationProps) {
  const [isValidating, setIsValidating] = useState(false);
  const [allValid, setAllValid] = useState(false);
  const [dataSources, setDataSources] = useState<DataSource[]>([{
    id: 'banking',
    name: 'Banking Transactions',
    status: 'valid',
    lastUpdated: '2 hours ago',
    recordCount: 1250
  }, {
    id: 'invoices',
    name: 'Invoices & Receipts',
    status: 'warning',
    lastUpdated: '1 day ago',
    recordCount: 385,
    message: '15 unreconciled transactions found'
  }, {
    id: 'assets',
    name: 'Asset Register',
    status: 'valid',
    lastUpdated: '3 days ago',
    recordCount: 42
  }, {
    id: 'payroll',
    name: 'Payroll Data',
    status: 'error',
    lastUpdated: '7 days ago',
    recordCount: 24,
    message: 'Missing Q4 data required for this report'
  }, {
    id: 'taxes',
    name: 'Tax Payments',
    status: 'valid',
    lastUpdated: '5 days ago',
    recordCount: 12
  }]);
  const validateAllData = () => {
    setIsValidating(true);
    // Simulate data validation process
    const updatingDataSources = dataSources.map(source => ({
      ...source,
      status: 'validating' as const
    }));
    setDataSources(updatingDataSources);
    // Simulate validation completion after delay
    setTimeout(() => {
      const validatedSources = updatingDataSources.map(source => {
        if (source.id === 'payroll') {
          return {
            ...source,
            status: 'valid' as const,
            lastUpdated: 'Just now',
            message: undefined
          };
        }
        if (source.id === 'invoices') {
          return {
            ...source,
            status: 'valid' as const,
            lastUpdated: 'Just now',
            message: undefined
          };
        }
        return {
          ...source,
          status: 'valid' as const,
          lastUpdated: 'Just now'
        };
      });
      setDataSources(validatedSources);
      setIsValidating(false);
      setAllValid(true);
    }, 2500);
  };
  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'valid':
        return <CheckIcon className="h-5 w-5 text-green-500" />;
      case 'warning':
        return <AlertCircleIcon className="h-5 w-5 text-yellow-500" />;
      case 'error':
        return <AlertCircleIcon className="h-5 w-5 text-red-500" />;
      case 'validating':
        return <RefreshCwIcon className="h-5 w-5 text-blue-500 animate-spin" />;
      default:
        return null;
    }
  };
  return <div className="space-y-6">
      <div className="bg-blue-50 border border-blue-100 rounded-lg p-4">
        <div className="flex">
          <DatabaseIcon className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
          <div className="ml-3">
            <h3 className="text-sm font-medium text-blue-800">
              Data Validation for {templateName}
            </h3>
            <p className="text-sm text-blue-700 mt-1">
              Before generating your report, we need to ensure all required data
              is present and accurate. Fix any issues or run validation to
              automatically correct problems where possible.
            </p>
          </div>
        </div>
      </div>
      <div className="space-y-4">
        {dataSources.map(source => <div key={source.id} className={`flex items-start justify-between p-4 rounded-lg border ${source.status === 'valid' ? 'border-green-200 bg-green-50' : source.status === 'warning' ? 'border-yellow-200 bg-yellow-50' : source.status === 'error' ? 'border-red-200 bg-red-50' : source.status === 'validating' ? 'border-blue-200 bg-blue-50' : 'border-gray-200 bg-gray-50'}`}>
            <div className="flex items-start">
              <div className="mt-0.5 mr-3">{getStatusIcon(source.status)}</div>
              <div>
                <h4 className="text-sm font-medium text-gray-900">
                  {source.name}
                </h4>
                <div className="flex items-center mt-1 space-x-4">
                  <span className="text-xs text-gray-500">
                    Last updated: {source.lastUpdated}
                  </span>
                  <span className="text-xs text-gray-500">
                    {source.recordCount} records
                  </span>
                </div>
                {source.message && <p className={`text-xs mt-1 ${source.status === 'warning' ? 'text-yellow-700' : source.status === 'error' ? 'text-red-700' : 'text-gray-500'}`}>
                    {source.message}
                  </p>}
              </div>
            </div>
            {(source.status === 'warning' || source.status === 'error') && !isValidating && <button className="text-sm text-blue-600 hover:text-blue-800">
                  Fix Issues
                </button>}
          </div>)}
      </div>
      <div className="flex justify-between pt-4 border-t border-gray-200">
        {!allValid ? <button onClick={validateAllData} disabled={isValidating} className={`w-full py-2 px-4 rounded-md text-sm font-medium ${isValidating ? 'bg-gray-100 text-gray-400 cursor-not-allowed' : 'bg-blue-600 text-white hover:bg-blue-700'}`}>
            {isValidating ? <span className="flex items-center justify-center">
                <RefreshCwIcon className="h-4 w-4 mr-2 animate-spin" />
                Validating Data...
              </span> : 'Validate All Data'}
          </button> : <button onClick={onComplete} className="w-full py-2 px-4 bg-green-600 text-white rounded-md hover:bg-green-700 text-sm font-medium flex items-center justify-center">
            <CheckIcon className="h-4 w-4 mr-2" />
            Data Validated - Continue
          </button>}
      </div>
    </div>;
}