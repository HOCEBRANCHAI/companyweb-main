import React, { useState } from 'react';
import { BuildingIcon, UsersIcon, EuroIcon, GlobeIcon, InfoIcon } from 'lucide-react';
import { TaxFacts } from './TaxMemoWizard';
import { RelationshipDiagram } from '../../corporate/RelationshipDiagram';
import { AlertCircleIcon } from 'lucide-react';
interface FactExtractionFormProps {
  onSubmit: (facts: TaxFacts) => void;
  onBack: () => void;
  corporateData?: {
    companies: any[];
    relationships: any[];
  };
}
export function FactExtractionForm({
  onSubmit,
  onBack,
  corporateData
}: FactExtractionFormProps) {
  const [facts, setFacts] = useState<TaxFacts>({
    companyStructure: '',
    revenueStreams: [''],
    existingEntities: [''],
    plannedActivities: [''],
    keyStakeholders: ['']
  });
  const handleArrayFieldChange = (field: keyof TaxFacts, index: number, value: string) => {
    setFacts(prev => ({
      ...prev,
      [field]: prev[field as keyof typeof prev].map((item: string, i: number) => i === index ? value : item)
    }));
  };
  const handleAddArrayField = (field: keyof TaxFacts) => {
    setFacts(prev => ({
      ...prev,
      [field]: [...prev[field as keyof typeof prev], '']
    }));
  };
  const handleRemoveArrayField = (field: keyof TaxFacts, index: number) => {
    setFacts(prev => ({
      ...prev,
      [field]: prev[field as keyof typeof prev].filter((_: string, i: number) => i !== index)
    }));
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(facts);
  };
  const generateStructureDescription = (companies, relationships) => {
    if (companies.length === 0) return 'No corporate structure defined yet.';
    const baseCompanies = companies.filter(c => c.type === 'base' || !c.type && companies.indexOf(c) === 0);
    const targetCompanies = companies.filter(c => c.type === 'target');
    const otherCompanies = companies.filter(c => c.type !== 'base' && c.type !== 'target' && companies.indexOf(c) !== 0);
    let description = '';
    if (baseCompanies.length > 0) {
      description += `The corporate structure consists of ${baseCompanies.length} base ${baseCompanies.length > 1 ? 'companies' : 'company'}: ${baseCompanies.map(c => c.name).join(', ')}. `;
    }
    if (targetCompanies.length > 0) {
      description += `There ${targetCompanies.length > 1 ? 'are' : 'is'} ${targetCompanies.length} target ${targetCompanies.length > 1 ? 'entities' : 'entity'}: ${targetCompanies.map(c => c.name).join(', ')}. `;
    }
    if (otherCompanies.length > 0) {
      description += `The structure also includes ${otherCompanies.length} additional ${otherCompanies.length > 1 ? 'entities' : 'entity'}: ${otherCompanies.map(c => c.name).join(', ')}. `;
    }
    if (relationships.length > 0) {
      const shareholdingRels = relationships.filter(r => r.type === 'shareholding');
      const royaltyRels = relationships.filter(r => r.type === 'royalty');
      const loanRels = relationships.filter(r => r.type === 'loan');
      if (shareholdingRels.length > 0) {
        description += `There are ${shareholdingRels.length} shareholding relationships. `;
      }
      if (royaltyRels.length > 0) {
        description += `There are ${royaltyRels.length} royalty agreements. `;
      }
      if (loanRels.length > 0) {
        description += `There are ${loanRels.length} loan agreements. `;
      }
    }
    return description;
  };
  return <form onSubmit={handleSubmit} className="space-y-6">
      <div className="bg-blue-50 border border-blue-100 rounded-lg p-4">
        <div className="flex">
          <InfoIcon className="h-5 w-5 text-blue-600 mr-2" />
          <p className="text-sm text-blue-700">
            Please provide detailed information about your business structure
            and operations. This will help us provide more accurate tax analysis
            and recommendations.
          </p>
        </div>
      </div>
      <div className="space-y-6">
        {/* Company Structure */}
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              <BuildingIcon className="h-5 w-5 text-blue-600 mr-2" />
              <h3 className="text-lg font-medium text-gray-900">
                Corporate Structure
              </h3>
            </div>
            {corporateData && corporateData.companies.length > 0 && <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                {corporateData.companies.length} entities ·{' '}
                {corporateData.relationships.length} relationships
              </span>}
          </div>
          {corporateData && corporateData.companies.length > 0 ? <div className="space-y-4">
              <div className="h-[300px] border border-gray-200 rounded-lg overflow-hidden bg-white" id="structure-diagram">
                <div className="h-full">
                  <RelationshipDiagram companies={corporateData.companies} relationships={corporateData.relationships} />
                </div>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                <h4 className="text-sm font-medium text-blue-800 mb-2">
                  Structure Summary
                </h4>
                <p className="text-sm text-blue-700">
                  {generateStructureDescription(corporateData.companies, corporateData.relationships)}
                </p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Additional Structure Details
                </label>
                <textarea value={facts.companyStructure} onChange={e => setFacts({
              ...facts,
              companyStructure: e.target.value
            })} rows={3} className="w-full border border-gray-300 rounded-md shadow-sm p-2" placeholder="Add any additional details about your corporate structure..." />
              </div>
            </div> : <div>
              <div className="bg-yellow-50 border border-yellow-100 rounded-lg p-4 mb-4">
                <div className="flex">
                  <AlertCircleIcon className="h-5 w-5 text-yellow-600 mr-2" />
                  <p className="text-sm text-yellow-700">
                    No corporate structure data found. Please describe your
                    corporate structure below or go back to define it in the
                    Corporate Structure step.
                  </p>
                </div>
              </div>
              <textarea value={facts.companyStructure} onChange={e => setFacts({
            ...facts,
            companyStructure: e.target.value
          })} rows={4} className="w-full border border-gray-300 rounded-md shadow-sm p-2" placeholder="Describe your current corporate structure, including holding companies and subsidiaries..." required />
            </div>}
        </div>
        {/* Revenue Streams */}
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <div className="flex items-center mb-4">
            <EuroIcon className="h-5 w-5 text-blue-600 mr-2" />
            <h3 className="text-lg font-medium text-gray-900">
              Revenue Streams
            </h3>
          </div>
          {facts.revenueStreams.map((stream, index) => <div key={index} className="flex items-center space-x-2 mb-2">
              <input type="text" value={stream} onChange={e => handleArrayFieldChange('revenueStreams', index, e.target.value)} className="flex-1 border border-gray-300 rounded-md shadow-sm p-2" placeholder="e.g., Software licenses, Consulting services..." required />
              {index > 0 && <button type="button" onClick={() => handleRemoveArrayField('revenueStreams', index)} className="text-red-600 hover:text-red-800">
                  Remove
                </button>}
            </div>)}
          <button type="button" onClick={() => handleAddArrayField('revenueStreams')} className="mt-2 text-blue-600 hover:text-blue-800 text-sm">
            + Add Revenue Stream
          </button>
        </div>
        {/* Existing Entities */}
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <div className="flex items-center mb-4">
            <GlobeIcon className="h-5 w-5 text-blue-600 mr-2" />
            <h3 className="text-lg font-medium text-gray-900">
              Existing Entities
            </h3>
          </div>
          {facts.existingEntities.map((entity, index) => <div key={index} className="flex items-center space-x-2 mb-2">
              <input type="text" value={entity} onChange={e => handleArrayFieldChange('existingEntities', index, e.target.value)} className="flex-1 border border-gray-300 rounded-md shadow-sm p-2" placeholder="Entity name and jurisdiction..." required />
              {index > 0 && <button type="button" onClick={() => handleRemoveArrayField('existingEntities', index)} className="text-red-600 hover:text-red-800">
                  Remove
                </button>}
            </div>)}
          <button type="button" onClick={() => handleAddArrayField('existingEntities')} className="mt-2 text-blue-600 hover:text-blue-800 text-sm">
            + Add Entity
          </button>
        </div>
        {/* Key Stakeholders */}
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <div className="flex items-center mb-4">
            <UsersIcon className="h-5 w-5 text-blue-600 mr-2" />
            <h3 className="text-lg font-medium text-gray-900">
              Key Stakeholders
            </h3>
          </div>
          {facts.keyStakeholders.map((stakeholder, index) => <div key={index} className="flex items-center space-x-2 mb-2">
              <input type="text" value={stakeholder} onChange={e => handleArrayFieldChange('keyStakeholders', index, e.target.value)} className="flex-1 border border-gray-300 rounded-md shadow-sm p-2" placeholder="Name and role..." required />
              {index > 0 && <button type="button" onClick={() => handleRemoveArrayField('keyStakeholders', index)} className="text-red-600 hover:text-red-800">
                  Remove
                </button>}
            </div>)}
          <button type="button" onClick={() => handleAddArrayField('keyStakeholders')} className="mt-2 text-blue-600 hover:text-blue-800 text-sm">
            + Add Stakeholder
          </button>
        </div>
      </div>
      <div className="flex justify-between pt-6">
        <button type="button" onClick={onBack} className="px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 text-sm font-medium">
          Back
        </button>
        <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 text-sm font-medium">
          Continue
        </button>
      </div>
    </form>;
}