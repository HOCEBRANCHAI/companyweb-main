import React, { memo } from 'react';
import { InfoIcon } from 'lucide-react';
interface TaxQueryFormProps {
  selectedQueries: string[];
  onQueryChange: (queries: string[]) => void;
  specificConcerns: string;
  onSpecificConcernsChange: (concerns: string) => void;
  transactionTypes: string[];
  onTransactionChange: (types: string[]) => void;
}
export function TaxQueryForm({
  selectedQueries,
  onQueryChange,
  specificConcerns,
  onSpecificConcernsChange,
  transactionTypes,
  onTransactionChange
}: TaxQueryFormProps) {
  const commonTaxQueries = ['Corporate Income Tax Rates and Calculation', 'VAT/GST Registration and Compliance', 'Withholding Tax Requirements', 'Transfer Pricing Rules', 'Permanent Establishment Risk', 'Dividend Distribution Tax Treatment', 'Capital Gains Tax Treatment', 'Tax Residency Rules', 'Double Tax Treaty Benefits', 'Substance Requirements', 'Controlled Foreign Corporation Rules', 'Interest Deductibility Limitations'];
  const commonTransactionTypes = ['Intra-group Services', 'IP Licensing', 'Dividend Distributions', 'Interest Payments', 'Royalty Payments', 'Management Fees', 'Cross-border Sales of Goods', 'Digital Services', 'Employee Secondment'];
  const handleQueryToggle = (query: string) => {
    if (selectedQueries.includes(query)) {
      onQueryChange(selectedQueries.filter(q => q !== query));
    } else {
      onQueryChange([...selectedQueries, query]);
    }
  };
  const handleTransactionToggle = (transaction: string) => {
    if (transactionTypes.includes(transaction)) {
      onTransactionChange(transactionTypes.filter(t => t !== transaction));
    } else {
      onTransactionChange([...transactionTypes, transaction]);
    }
  };
  return <div className="space-y-6">
      <div className="bg-blue-50 border border-blue-100 rounded-lg p-4">
        <div className="flex items-start">
          <InfoIcon className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
          <p className="text-sm text-blue-700">
            Select the tax topics you'd like to address in your memorandum. You
            can select multiple topics to create a comprehensive analysis.
          </p>
        </div>
      </div>
      <div>
        <h3 className="text-lg font-medium text-gray-900 mb-4">Tax Topics</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {commonTaxQueries.map(query => <div key={query} className="flex items-center">
              <input type="checkbox" id={`query-${query}`} checked={selectedQueries.includes(query)} onChange={() => handleQueryToggle(query)} className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
              <label htmlFor={`query-${query}`} className="ml-2 block text-sm text-gray-900">
                {query}
              </label>
            </div>)}
        </div>
      </div>
      <div>
        <h3 className="text-lg font-medium text-gray-900 mb-4">
          Transaction Types
        </h3>
        <p className="text-sm text-gray-600 mb-4">
          Select the types of transactions your business conducts or plans to
          conduct.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {commonTransactionTypes.map(transaction => <div key={transaction} className="flex items-center">
              <input type="checkbox" id={`transaction-${transaction}`} checked={transactionTypes.includes(transaction)} onChange={() => handleTransactionToggle(transaction)} className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
              <label htmlFor={`transaction-${transaction}`} className="ml-2 block text-sm text-gray-900">
                {transaction}
              </label>
            </div>)}
        </div>
      </div>
      <div>
        <h3 className="text-lg font-medium text-gray-900 mb-4">
          Specific Questions or Concerns
        </h3>
        <p className="text-sm text-gray-600 mb-4">
          Do you have any specific tax questions or concerns you'd like
          addressed in the memorandum?
        </p>
        <textarea value={specificConcerns} onChange={e => onSpecificConcernsChange(e.target.value)} rows={4} className="w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500" placeholder="E.g., We're concerned about permanent establishment risk for our employees working remotely in Germany. How can we mitigate this risk?" />
      </div>
    </div>;
}