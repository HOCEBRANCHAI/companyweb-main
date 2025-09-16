import React from 'react';
import { PlusIcon, RocketIcon, TrendingUpIcon, ShieldIcon } from 'lucide-react';
interface TaxPlanningCTAProps {
  taxPlanName: string;
  setTaxPlanName: (name: string) => void;
  onStartPlan: () => void;
  userProfile?: {
    companyName?: string;
    industry?: string;
  };
}
export function TaxPlanningCTA({
  taxPlanName,
  setTaxPlanName,
  onStartPlan,
  userProfile
}: TaxPlanningCTAProps) {
  // Customize CTA based on user profile if available
  const getPlaceholder = () => {
    if (userProfile?.companyName) {
      return `${userProfile.companyName} International Expansion`;
    }
    return 'e.g., European Expansion 2025';
  };
  return <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-xl p-8 shadow-lg border border-blue-700 mb-10">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-white mb-2">
            Start Your Tax Planning Journey Today
          </h2>
          <p className="text-blue-100">
            Create your personalized international tax strategy in minutes, not
            weeks
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
            <div className="flex items-center mb-3">
              <div className="bg-white/20 p-2 rounded-full mr-3">
                <RocketIcon className="h-5 w-5 text-white" />
              </div>
              <span className="text-white font-medium">Fast Setup</span>
            </div>
            <p className="text-blue-100 text-sm">
              Complete your tax planning in under 30 minutes
            </p>
          </div>
          <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
            <div className="flex items-center mb-3">
              <div className="bg-white/20 p-2 rounded-full mr-3">
                <TrendingUpIcon className="h-5 w-5 text-white" />
              </div>
              <span className="text-white font-medium">Save Money</span>
            </div>
            <p className="text-blue-100 text-sm">
              Optimize your tax structure and increase profitability
            </p>
          </div>
          <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
            <div className="flex items-center mb-3">
              <div className="bg-white/20 p-2 rounded-full mr-3">
                <ShieldIcon className="h-5 w-5 text-white" />
              </div>
              <span className="text-white font-medium">100% Compliant</span>
            </div>
            <p className="text-blue-100 text-sm">
              All strategies adhere to OECD guidelines and local regulations
            </p>
          </div>
        </div>
        <div className="bg-white/20 p-6 rounded-lg backdrop-blur-sm">
          <div className="flex flex-col md:flex-row md:items-end gap-4">
            <div className="flex-1">
              <label htmlFor="taxPlanName" className="block text-sm font-medium text-white mb-2">
                Name Your Tax Plan
              </label>
              <input type="text" id="taxPlanName" value={taxPlanName} onChange={e => setTaxPlanName(e.target.value)} placeholder={getPlaceholder()} className="w-full px-4 py-3 border border-blue-300 bg-white/90 rounded-lg focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent transition-colors text-gray-900" />
            </div>
            <button onClick={onStartPlan} disabled={!taxPlanName.trim()} className={`px-6 py-3 rounded-lg text-base font-medium transition-colors ${taxPlanName.trim() ? 'bg-white text-blue-700 hover:bg-blue-50' : 'bg-white/50 text-blue-200 cursor-not-allowed'}`}>
              <div className="flex items-center">
                <PlusIcon className="h-5 w-5 mr-2" />
                Create New Tax Plan
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>;
}