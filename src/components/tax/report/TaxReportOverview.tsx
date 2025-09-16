import React, { useState } from 'react';
import { ChevronDownIcon, ChevronUpIcon, DownloadIcon, MessageCircleIcon, PlayIcon, AlertTriangleIcon, CheckCircleIcon, InfoIcon } from 'lucide-react';
import { ExecutiveSummary } from './ExecutiveSummary';
import { TaxCalculations } from './TaxCalculations';
import { EntityComparison } from './EntityComparison';
import { ServicePricing } from './ServicePricing';
import { BranchProposal } from './BranchProposal';
interface TaxReportOverviewProps {
  companyName: string;
  reportDate: string;
  onRequestConsultation: () => void;
  onImplement: () => void;
}
export function TaxReportOverview({
  companyName,
  reportDate,
  onRequestConsultation,
  onImplement
}: TaxReportOverviewProps) {
  const [expandedSections, setExpandedSections] = useState<string[]>(['executive-summary']);
  const toggleSection = (section: string) => {
    setExpandedSections(current => current.includes(section) ? current.filter(s => s !== section) : [...current, section]);
  };
  const sections = [{
    id: 'executive-summary',
    title: 'Executive Summary',
    component: ExecutiveSummary,
    props: {
      companyName
    }
  }, {
    id: 'tax-calculations',
    title: 'Tax Calculations',
    component: TaxCalculations,
    props: {}
  }, {
    id: 'entity-comparison',
    title: 'Entity Comparison',
    component: EntityComparison,
    props: {}
  }, {
    id: 'service-pricing',
    title: 'Service Pricing',
    component: ServicePricing,
    props: {}
  }, {
    id: 'branch-proposal',
    title: 'eBranch Proposal',
    component: BranchProposal,
    props: {}
  }];
  return <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="bg-white rounded-lg shadow">
        {/* Header */}
        <div className="border-b border-gray-200 px-6 py-4">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">
                Tax Structure Report
              </h1>
              <p className="text-sm text-gray-500 mt-1">
                Generated on {reportDate}
              </p>
            </div>
            <div className="flex space-x-4">
              <button onClick={() => {}} className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 flex items-center">
                <DownloadIcon className="h-4 w-4 mr-2" />
                Download PDF
              </button>
              <button onClick={onRequestConsultation} className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 flex items-center">
                <MessageCircleIcon className="h-4 w-4 mr-2" />
                Request Consultation
              </button>
            </div>
          </div>
        </div>
        {/* Sections */}
        <div className="divide-y divide-gray-200">
          {sections.map(section => <div key={section.id} className="px-6 py-4">
              <button onClick={() => toggleSection(section.id)} className="w-full flex justify-between items-center">
                <h2 className="text-lg font-semibold text-gray-900">
                  {section.title}
                </h2>
                {expandedSections.includes(section.id) ? <ChevronUpIcon className="h-5 w-5 text-gray-500" /> : <ChevronDownIcon className="h-5 w-5 text-gray-500" />}
              </button>
              {expandedSections.includes(section.id) && <div className="mt-4">
                  <section.component {...section.props} />
                </div>}
            </div>)}
        </div>
        {/* Footer */}
        <div className="border-t border-gray-200 px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center text-sm text-gray-500">
              <InfoIcon className="h-4 w-4 mr-2" />
              Review all details before proceeding with implementation
            </div>
            <button onClick={onImplement} className="px-6 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 flex items-center">
              <PlayIcon className="h-4 w-4 mr-2" />
              Proceed with Implementation
            </button>
          </div>
        </div>
      </div>
    </div>;
}