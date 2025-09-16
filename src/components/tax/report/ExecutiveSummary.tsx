import React from 'react';
import { CheckCircleIcon, AlertTriangleIcon } from 'lucide-react';
interface ExecutiveSummaryProps {
  companyName: string;
}
export function ExecutiveSummary({
  companyName
}: ExecutiveSummaryProps) {
  const keyFindings = [{
    type: 'opportunity',
    text: 'Potential tax savings of €42,500 through optimal structure'
  }, {
    type: 'opportunity',
    text: 'Eligibility for Dutch innovation box regime'
  }, {
    type: 'risk',
    text: 'Current structure may create permanent establishment risks'
  }];
  const recommendations = ['Establish Dutch BV as primary holding entity', 'Implement IP structure through Netherlands entity', 'Register for VAT in key EU markets'];
  return <div className="space-y-6">
      <div className="bg-blue-50 border border-blue-100 rounded-lg p-4">
        <p className="text-sm text-blue-700">
          This report provides a comprehensive analysis of the optimal tax
          structure for {companyName}, taking into account both immediate needs
          and future growth plans.
        </p>
      </div>
      <div>
        <h3 className="text-lg font-medium text-gray-900 mb-4">Key Findings</h3>
        <div className="space-y-3">
          {keyFindings.map((finding, index) => <div key={index} className="flex items-start">
              {finding.type === 'opportunity' ? <CheckCircleIcon className="h-5 w-5 text-green-500 mt-0.5 mr-2" /> : <AlertTriangleIcon className="h-5 w-5 text-yellow-500 mt-0.5 mr-2" />}
              <p className="text-gray-700">{finding.text}</p>
            </div>)}
        </div>
      </div>
      <div>
        <h3 className="text-lg font-medium text-gray-900 mb-4">
          Primary Recommendations
        </h3>
        <ul className="space-y-2">
          {recommendations.map((recommendation, index) => <li key={index} className="flex items-center">
              <span className="h-2 w-2 bg-blue-600 rounded-full mr-2"></span>
              <span className="text-gray-700">{recommendation}</span>
            </li>)}
        </ul>
      </div>
    </div>;
}