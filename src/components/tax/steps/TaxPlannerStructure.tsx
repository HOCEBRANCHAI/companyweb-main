import React from 'react';
import { InfoIcon, ArrowRightIcon, ArrowLeftIcon } from 'lucide-react';
import { CorporateStructureSelector } from '../CorporateStructureSelector';
import { Link } from 'react-router-dom';
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
interface TaxPlannerStructureProps {
  selectedStructure: string;
  companies: Company[];
  onStructureSelect: (structure: string) => void;
  onEditStructure: () => void;
  onStructureChange: (companies: Company[], relationships: Relationship[]) => void;
  onContinue: () => void;
  onBackToWelcome?: () => void;
}
export function TaxPlannerStructure({
  selectedStructure,
  companies,
  onStructureSelect,
  onEditStructure,
  onStructureChange,
  onContinue,
  onBackToWelcome
}: TaxPlannerStructureProps) {
  return <>
      <div className="bg-blue-50 border border-blue-100 rounded-lg p-4">
        <div className="flex items-start">
          <InfoIcon className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
          <p className="text-sm text-blue-700">
            Select your corporate structure to analyze tax implications across
            your organization. You can modify your structure using the Corporate
            Structure Manager.
          </p>
        </div>
      </div>
      <div className="h-[600px] overflow-y-auto border border-gray-200 rounded-lg bg-white p-4">
        <CorporateStructureSelector selectedStructure={selectedStructure} onStructureSelect={onStructureSelect} onEditStructure={onEditStructure} onStructureChange={onStructureChange} />
      </div>
      <div className="flex items-center justify-between pt-4">
        {onBackToWelcome ? <button onClick={onBackToWelcome} className="px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 text-sm font-medium flex items-center">
            <ArrowLeftIcon className="h-4 w-4 mr-2" />
            Back to Welcome Dashboard
          </button> : <Link to="/taxes">
            <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 text-sm font-medium flex items-center">
              <ArrowLeftIcon className="h-4 w-4 mr-2" />
              Back to Tax Overview
            </button>
          </Link>}
        <div className="flex items-center text-sm text-gray-600">
          <InfoIcon className="h-4 w-4 text-gray-400 mr-2" />
          You can proceed with or without making changes to the structure
        </div>
        <button onClick={onContinue} className="px-4 py-2 rounded-md text-sm font-medium flex items-center bg-blue-600 text-white hover:bg-blue-700">
          Review Structure
          <ArrowRightIcon className="ml-2 h-4 w-4" />
        </button>
      </div>
    </>;
}