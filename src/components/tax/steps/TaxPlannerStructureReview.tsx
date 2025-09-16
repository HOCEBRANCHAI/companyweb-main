import React from 'react';
import { InfoIcon, ArrowRightIcon, BuildingIcon } from 'lucide-react';
interface Company {
  id: string;
  name: string;
  country: string;
}
interface Relationship {
  sourceId: string;
  targetId: string;
  type: string;
  percentage?: number;
}
interface TaxPlannerStructureReviewProps {
  companies: Company[];
  relationships: Relationship[];
  onBack: () => void;
  onContinue: () => void;
}
export function TaxPlannerStructureReview({
  companies,
  relationships,
  onBack,
  onContinue
}: TaxPlannerStructureReviewProps) {
  return <>
      <div className="bg-blue-50 border border-blue-100 rounded-lg p-4">
        <div className="flex items-start">
          <InfoIcon className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
          <p className="text-sm text-blue-700">
            Review your corporate structure before proceeding with tax planning.
            This structure will be used to analyze tax implications across
            jurisdictions.
          </p>
        </div>
      </div>
      <div className="mt-4 border border-gray-200 rounded-lg p-6 bg-white">
        <h3 className="text-lg font-medium text-gray-900 mb-4">
          Structure Summary
        </h3>
        <div className="space-y-4">
          <div>
            <h4 className="font-medium text-gray-700">Companies</h4>
            <ul className="mt-2 space-y-2">
              {companies.map(company => <li key={company.id} className="flex items-center text-sm">
                  <BuildingIcon className="h-4 w-4 text-gray-400 mr-2" />
                  <span className="font-medium">{company.name}</span>
                  <span className="ml-2 text-gray-500">
                    ({company.country})
                  </span>
                </li>)}
            </ul>
          </div>
          <div>
            <h4 className="font-medium text-gray-700">Relationships</h4>
            <ul className="mt-2 space-y-2">
              {relationships.map((rel, index) => {
              const source = companies.find(c => c.id === rel.sourceId);
              const target = companies.find(c => c.id === rel.targetId);
              if (!source || !target) return null;
              return <li key={index} className="flex items-center text-sm">
                    <ArrowRightIcon className="h-4 w-4 text-gray-400 mr-2" />
                    <span className="font-medium">{source.name}</span>
                    <span className="mx-2 text-gray-500">→</span>
                    <span className="font-medium">{target.name}</span>
                    <span className="ml-2 text-gray-500">
                      ({rel.type}
                      {rel.percentage ? `, ${rel.percentage}%` : ''})
                    </span>
                  </li>;
            })}
            </ul>
          </div>
        </div>
      </div>
      <div className="flex justify-between pt-6">
        <button onClick={onBack} className="px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 text-sm font-medium">
          Back
        </button>
        <button onClick={onContinue} className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 text-sm font-medium">
          Continue to Jurisdictions
          <ArrowRightIcon className="ml-2 h-4 w-4 inline" />
        </button>
      </div>
    </>;
}