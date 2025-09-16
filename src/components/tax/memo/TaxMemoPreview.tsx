import React, { memo } from 'react';
import { FileTextIcon, CheckCircleIcon, GlobeIcon, BuildingIcon } from 'lucide-react';
interface TaxMemoPreviewProps {
  memoName: string;
  jurisdictions: string[];
  businessActivities: string[];
  taxQueries: string[];
  specificConcerns: string;
  transactionTypes: string[];
}
export function TaxMemoPreview({
  memoName,
  jurisdictions,
  businessActivities,
  taxQueries,
  specificConcerns,
  transactionTypes
}: TaxMemoPreviewProps) {
  const currentDate = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
  return <div className="space-y-6">
      <div className="bg-green-50 border border-green-100 rounded-lg p-4">
        <div className="flex items-start">
          <CheckCircleIcon className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
          <p className="text-sm text-green-700">
            Your tax memorandum is ready to be generated. Please review the
            details below to ensure everything is correct.
          </p>
        </div>
      </div>
      <div className="bg-white border border-gray-200 rounded-lg p-6">
        <div className="flex items-center mb-4">
          <FileTextIcon className="h-6 w-6 text-blue-600 mr-2" />
          <h2 className="text-xl font-medium text-gray-900">
            {memoName || 'Tax Memorandum'}
          </h2>
        </div>
        <div className="text-sm text-gray-500 mb-4">
          Generated on: {currentDate}
        </div>
        <div className="space-y-6">
          <div>
            <h3 className="text-md font-medium text-gray-900 mb-2 flex items-center">
              <GlobeIcon className="h-4 w-4 text-blue-600 mr-2" />
              Jurisdictions
            </h3>
            <div className="flex flex-wrap gap-2">
              {jurisdictions.length > 0 ? jurisdictions.map(jurisdiction => <span key={jurisdiction} className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                    {jurisdiction}
                  </span>) : <span className="text-gray-500 text-sm">
                  No jurisdictions selected
                </span>}
            </div>
          </div>
          <div>
            <h3 className="text-md font-medium text-gray-900 mb-2 flex items-center">
              <BuildingIcon className="h-4 w-4 text-blue-600 mr-2" />
              Business Activities
            </h3>
            <div className="flex flex-wrap gap-2">
              {businessActivities.length > 0 ? businessActivities.map(activity => <span key={activity} className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                    {activity}
                  </span>) : <span className="text-gray-500 text-sm">
                  No business activities selected
                </span>}
            </div>
          </div>
          <div className="border-t border-gray-200 pt-4">
            <h3 className="text-md font-medium text-gray-900 mb-3">
              Tax Topics
            </h3>
            <ul className="list-disc pl-5 space-y-1">
              {taxQueries.length > 0 ? taxQueries.map(query => <li key={query} className="text-sm text-gray-600">
                    {query}
                  </li>) : <li className="text-gray-500 text-sm">
                  No tax topics selected
                </li>}
            </ul>
          </div>
          <div className="border-t border-gray-200 pt-4">
            <h3 className="text-md font-medium text-gray-900 mb-3">
              Transaction Types
            </h3>
            <div className="flex flex-wrap gap-2">
              {transactionTypes.length > 0 ? transactionTypes.map(transaction => <span key={transaction} className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                    {transaction}
                  </span>) : <span className="text-gray-500 text-sm">
                  No transaction types selected
                </span>}
            </div>
          </div>
          {specificConcerns && <div className="border-t border-gray-200 pt-4">
              <h3 className="text-md font-medium text-gray-900 mb-3">
                Specific Questions/Concerns
              </h3>
              <p className="text-sm text-gray-600 bg-gray-50 p-3 rounded-md">
                {specificConcerns}
              </p>
            </div>}
        </div>
        <div className="mt-6 pt-6 border-t border-gray-200">
          <h3 className="text-md font-medium text-gray-900 mb-3">
            What Happens Next?
          </h3>
          <ol className="list-decimal pl-5 space-y-2">
            <li className="text-sm text-gray-600">
              Our AI will analyze your inputs and generate a comprehensive tax
              memorandum
            </li>
            <li className="text-sm text-gray-600">
              The memorandum will include detailed analysis for each selected
              jurisdiction and tax topic
            </li>
            <li className="text-sm text-gray-600">
              You'll receive a fully formatted document with executive summary,
              detailed analysis, and recommendations
            </li>
            <li className="text-sm text-gray-600">
              The document will be available for download, sharing, and future
              reference
            </li>
          </ol>
        </div>
      </div>
    </div>;
}