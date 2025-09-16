import React, { useEffect, useState, memo } from 'react';
import { FileTextIcon, BuildingIcon, GlobeIcon, CheckCircleIcon, BookOpenIcon, ArrowRightIcon } from 'lucide-react';
import { TaxPlannerStructure } from './steps/TaxPlannerStructure';
import { TaxQueryForm } from './memo/TaxQueryForm';
import { FactExtractionForm } from './memo/FactExtractionForm';
import { JurisdictionSelector } from './memo/JurisdictionSelector';
import { TaxMemoPreview } from './memo/TaxMemoPreview';
interface Company {
  id: string;
  name: string;
  country: string;
  type?: string;
  registrationNumber?: string;
}
interface Relationship {
  sourceId: string;
  targetId: string;
  type: string;
  percentage?: number;
  details?: string;
}
interface TaxQuery {
  queryType: string;
  primaryQuestions: string[];
  businessContext: string;
  urgency: 'low' | 'medium' | 'high';
  preferredOutcome?: string;
}
interface TaxFacts {
  companyStructure: string;
  revenueStreams: string[];
  existingEntities: Company[];
  relationships: Relationship[];
  plannedActivities: string[];
  keyStakeholders: string[];
}
interface JurisdictionInfo {
  primary: string;
  secondary: string[];
  taxTreaties: string[];
}
export function TaxPlanner() {
  const [activeStep, setActiveStep] = useState<string>('structure');
  const [taxQuery, setTaxQuery] = useState<TaxQuery | null>(null);
  const [taxFacts, setTaxFacts] = useState<TaxFacts | null>(null);
  const [jurisdictionInfo, setJurisdictionInfo] = useState<JurisdictionInfo | null>(null);
  const [companies, setCompanies] = useState<Company[]>([]);
  const [relationships, setRelationships] = useState<Relationship[]>([]);
  const [selectedStructure, setSelectedStructure] = useState<string>('');
  const steps = [{
    id: 'structure',
    title: 'Corporate Structure',
    description: 'Define your organization structure',
    icon: BuildingIcon
  }, {
    id: 'query',
    title: 'Tax Query',
    description: 'Specify your tax questions',
    icon: BookOpenIcon
  }, {
    id: 'facts',
    title: 'Business Context',
    description: 'Provide detailed business information',
    icon: FileTextIcon
  }, {
    id: 'jurisdiction',
    title: 'Jurisdictions',
    description: 'Select relevant tax jurisdictions',
    icon: GlobeIcon
  }, {
    id: 'memo',
    title: 'Tax Memo',
    description: 'Review and generate tax memo',
    icon: CheckCircleIcon
  }];
  const handleNext = () => {
    const currentIndex = steps.findIndex(step => step.id === activeStep);
    if (currentIndex < steps.length - 1) {
      setActiveStep(steps[currentIndex + 1].id);
    }
  };
  const handleBack = () => {
    const currentIndex = steps.findIndex(step => step.id === activeStep);
    if (currentIndex > 0) {
      setActiveStep(steps[currentIndex - 1].id);
    }
  };
  const handleStructureChange = (updatedCompanies: Company[], updatedRelationships: Relationship[]) => {
    setCompanies(updatedCompanies);
    setRelationships(updatedRelationships);
    const existingEntitiesData = updatedCompanies.map(company => ({
      ...company,
      id: company.id,
      name: company.name,
      country: company.country || ''
    }));
    const structureDescription = generateStructureDescription(updatedCompanies, updatedRelationships);
    setTaxFacts(prev => ({
      ...(prev || {
        companyStructure: '',
        revenueStreams: [''],
        existingEntities: [],
        relationships: [],
        plannedActivities: [''],
        keyStakeholders: ['']
      }),
      companyStructure: structureDescription,
      existingEntities: existingEntitiesData,
      relationships: updatedRelationships
    }));
  };
  const generateStructureDescription = (companies: Company[], relationships: Relationship[]): string => {
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
      description += `There are ${relationships.length} defined relationships between entities in the structure.`;
    }
    return description;
  };
  const renderStep = () => {
    switch (activeStep) {
      case 'structure':
        return <TaxPlannerStructure selectedStructure={selectedStructure} companies={companies} onStructureSelect={structure => setSelectedStructure(structure)} onEditStructure={() => {}} onStructureChange={handleStructureChange} onContinue={handleNext} />;
      case 'query':
        return <TaxQueryForm onSubmit={query => {
          setTaxQuery(query);
          handleNext();
        }} />;
      case 'facts':
        return <FactExtractionForm onSubmit={facts => {
          setTaxFacts({
            ...facts,
            existingEntities: companies,
            relationships: relationships
          });
          handleNext();
        }} onBack={handleBack} initialData={taxFacts} corporateData={{
          companies,
          relationships
        }} />;
      case 'jurisdiction':
        return <JurisdictionSelector onSubmit={info => {
          setJurisdictionInfo(info);
          handleNext();
        }} onBack={handleBack} companies={companies} />;
      case 'memo':
        return <TaxMemoPreview query={taxQuery!} facts={taxFacts!} jurisdiction={jurisdictionInfo!} onBack={handleBack} corporateData={{
          companies,
          relationships
        }} />;
      default:
        return null;
    }
  };
  return <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          {steps.map((step, index) => <div key={step.id} className="flex items-center">
              <div className={`flex flex-col items-center ${index < steps.length - 1 ? 'w-full' : ''}`}>
                <div className={`flex items-center justify-center w-10 h-10 rounded-full border-2 
                  ${activeStep === step.id ? 'bg-blue-100 border-blue-500 text-blue-600' : steps.findIndex(s => s.id === activeStep) > index ? 'bg-green-100 border-green-500 text-green-600' : 'bg-gray-100 border-gray-300 text-gray-500'}`}>
                  <step.icon className="h-5 w-5" />
                </div>
                <div className="text-xs mt-2 text-center">
                  <div className="font-medium text-gray-900">{step.title}</div>
                  <div className="text-gray-500 mt-1">{step.description}</div>
                </div>
                {index < steps.length - 1 && <div className={`h-0.5 w-full mt-5 
                    ${steps.findIndex(s => s.id === activeStep) > index ? 'bg-green-500' : 'bg-gray-300'}`} />}
              </div>
            </div>)}
        </div>
      </div>
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        {renderStep()}
      </div>
      {activeStep === 'structure' && companies.length > 0 && <div className="mt-6 p-4 bg-blue-50 border border-blue-100 rounded-lg">
          <div className="flex items-center">
            <BuildingIcon className="h-5 w-5 text-blue-600 mr-2" />
            <h3 className="text-sm font-medium text-blue-800">
              Corporate Structure Data
            </h3>
          </div>
          <p className="text-sm text-blue-700 mt-1">
            {companies.length} entities and {relationships.length} relationships
            defined. This data will be used in your tax memo.
          </p>
          <div className="mt-3 flex justify-end">
            <button onClick={handleNext} className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 text-sm font-medium flex items-center">
              Continue with Current Structure
              <ArrowRightIcon className="ml-2 h-4 w-4" />
            </button>
          </div>
        </div>}
    </div>;
}