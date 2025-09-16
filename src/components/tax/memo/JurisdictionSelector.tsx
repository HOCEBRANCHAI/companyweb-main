import React, { useState } from 'react';
import { GlobeIcon, PlusIcon, XIcon, InfoIcon } from 'lucide-react';
import { JurisdictionInfo } from './TaxMemoWizard';
interface JurisdictionSelectorProps {
  onSubmit: (jurisdictionInfo: JurisdictionInfo) => void;
  onBack: () => void;
}
export function JurisdictionSelector({
  onSubmit,
  onBack
}: JurisdictionSelectorProps) {
  const [jurisdictionInfo, setJurisdictionInfo] = useState<JurisdictionInfo>({
    primary: '',
    secondary: [],
    taxTreaties: []
  });
  const availableJurisdictions = ['Netherlands', 'Germany', 'France', 'Belgium', 'Luxembourg', 'United Kingdom', 'Ireland', 'Spain', 'Italy', 'Switzerland'];
  const handleAddSecondary = (jurisdiction: string) => {
    if (!jurisdictionInfo.secondary.includes(jurisdiction)) {
      setJurisdictionInfo({
        ...jurisdictionInfo,
        secondary: [...jurisdictionInfo.secondary, jurisdiction]
      });
    }
  };
  const handleRemoveSecondary = (jurisdiction: string) => {
    setJurisdictionInfo({
      ...jurisdictionInfo,
      secondary: jurisdictionInfo.secondary.filter(j => j !== jurisdiction)
    });
  };
  const handleAddTreaty = (treaty: string) => {
    if (!jurisdictionInfo.taxTreaties.includes(treaty)) {
      setJurisdictionInfo({
        ...jurisdictionInfo,
        taxTreaties: [...jurisdictionInfo.taxTreaties, treaty]
      });
    }
  };
  const handleRemoveTreaty = (treaty: string) => {
    setJurisdictionInfo({
      ...jurisdictionInfo,
      taxTreaties: jurisdictionInfo.taxTreaties.filter(t => t !== treaty)
    });
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(jurisdictionInfo);
  };
  return <form onSubmit={handleSubmit} className="space-y-6">
      <div className="bg-blue-50 border border-blue-100 rounded-lg p-4">
        <div className="flex">
          <InfoIcon className="h-5 w-5 text-blue-600 mr-2" />
          <p className="text-sm text-blue-700">
            Select the jurisdictions relevant to your tax situation. This will
            help us identify applicable tax treaties and potential tax
            optimization opportunities.
          </p>
        </div>
      </div>
      {/* Primary Jurisdiction */}
      <div className="bg-white border border-gray-200 rounded-lg p-6">
        <div className="flex items-center mb-4">
          <GlobeIcon className="h-5 w-5 text-blue-600 mr-2" />
          <h3 className="text-lg font-medium text-gray-900">
            Primary Jurisdiction
          </h3>
        </div>
        <select value={jurisdictionInfo.primary} onChange={e => setJurisdictionInfo({
        ...jurisdictionInfo,
        primary: e.target.value
      })} className="w-full border border-gray-300 rounded-md shadow-sm p-2" required>
          <option value="">Select primary jurisdiction...</option>
          {availableJurisdictions.map(jurisdiction => <option key={jurisdiction} value={jurisdiction}>
              {jurisdiction}
            </option>)}
        </select>
      </div>
      {/* Secondary Jurisdictions */}
      <div className="bg-white border border-gray-200 rounded-lg p-6">
        <div className="flex items-center mb-4">
          <GlobeIcon className="h-5 w-5 text-blue-600 mr-2" />
          <h3 className="text-lg font-medium text-gray-900">
            Secondary Jurisdictions
          </h3>
        </div>
        <div className="mb-4">
          <select onChange={e => handleAddSecondary(e.target.value)} className="w-full border border-gray-300 rounded-md shadow-sm p-2" value="">
            <option value="">Add secondary jurisdiction...</option>
            {availableJurisdictions.filter(j => j !== jurisdictionInfo.primary && !jurisdictionInfo.secondary.includes(j)).map(jurisdiction => <option key={jurisdiction} value={jurisdiction}>
                  {jurisdiction}
                </option>)}
          </select>
        </div>
        <div className="flex flex-wrap gap-2">
          {jurisdictionInfo.secondary.map(jurisdiction => <span key={jurisdiction} className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-blue-100 text-blue-800">
              {jurisdiction}
              <button type="button" onClick={() => handleRemoveSecondary(jurisdiction)} className="ml-2 text-blue-600 hover:text-blue-800">
                <XIcon className="h-4 w-4" />
              </button>
            </span>)}
        </div>
      </div>
      {/* Tax Treaties */}
      <div className="bg-white border border-gray-200 rounded-lg p-6">
        <div className="flex items-center mb-4">
          <GlobeIcon className="h-5 w-5 text-blue-600 mr-2" />
          <h3 className="text-lg font-medium text-gray-900">
            Applicable Tax Treaties
          </h3>
        </div>
        <div className="mb-4">
          <select onChange={e => handleAddTreaty(e.target.value)} className="w-full border border-gray-300 rounded-md shadow-sm p-2" value="">
            <option value="">Add tax treaty...</option>
            {jurisdictionInfo.secondary.map(jurisdiction => <option key={jurisdiction} value={`${jurisdictionInfo.primary}-${jurisdiction}`}>
                {jurisdictionInfo.primary} - {jurisdiction}
              </option>)}
          </select>
        </div>
        <div className="flex flex-wrap gap-2">
          {jurisdictionInfo.taxTreaties.map(treaty => <span key={treaty} className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-green-100 text-green-800">
              {treaty}
              <button type="button" onClick={() => handleRemoveTreaty(treaty)} className="ml-2 text-green-600 hover:text-green-800">
                <XIcon className="h-4 w-4" />
              </button>
            </span>)}
        </div>
      </div>
      <div className="flex justify-between pt-6">
        <button type="button" onClick={onBack} className="px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 text-sm font-medium">
          Back
        </button>
        <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 text-sm font-medium">
          Generate Tax Memo
        </button>
      </div>
    </form>;
}