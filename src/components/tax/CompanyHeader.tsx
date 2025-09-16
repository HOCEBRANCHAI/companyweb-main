import React from 'react';
import { Link } from 'react-router-dom';
interface CompanyHeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}
export function CompanyHeader({
  activeTab,
  setActiveTab
}: CompanyHeaderProps) {
  return <div className="border-b border-indigo-500/20 mb-6">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold text-white">Tax Management</h1>
      </div>
      <nav className="flex space-x-8 overflow-x-auto">
        <button onClick={() => setActiveTab('overview')} className={`py-4 px-1 border-b-2 font-medium text-sm whitespace-nowrap ${activeTab === 'overview' ? 'border-[#EA3A70] text-[#EA3A70]' : 'border-transparent text-indigo-300 hover:text-white hover:border-indigo-500/50'}`}>
          Overview
        </button>
        <button onClick={() => setActiveTab('taxReturn')} className={`py-4 px-1 border-b-2 font-medium text-sm whitespace-nowrap ${activeTab === 'taxReturn' ? 'border-[#EA3A70] text-[#EA3A70]' : 'border-transparent text-indigo-300 hover:text-white hover:border-indigo-500/50'}`}>
          Tax Return
        </button>
        <button onClick={() => setActiveTab('objections')} className={`py-4 px-1 border-b-2 font-medium text-sm whitespace-nowrap ${activeTab === 'objections' ? 'border-[#EA3A70] text-[#EA3A70]' : 'border-transparent text-indigo-300 hover:text-white hover:border-indigo-500/50'}`}>
          Objection Letters
        </button>
        <button onClick={() => setActiveTab('calculations')} className={`py-4 px-1 border-b-2 font-medium text-sm whitespace-nowrap ${activeTab === 'calculations' ? 'border-[#EA3A70] text-[#EA3A70]' : 'border-transparent text-indigo-300 hover:text-white hover:border-indigo-500/50'}`}>
          Tax Calculations
        </button>
        <button onClick={() => setActiveTab('viesCheck')} className={`py-4 px-1 border-b-2 font-medium text-sm whitespace-nowrap ${activeTab === 'viesCheck' ? 'border-[#EA3A70] text-[#EA3A70]' : 'border-transparent text-indigo-300 hover:text-white hover:border-indigo-500/50'}`}>
          VIES Check
        </button>
        <Link to="/taxes/international-planner" className="py-4 px-1 border-b-2 font-medium text-sm whitespace-nowrap border-transparent text-indigo-300 hover:text-white hover:border-indigo-500/50" onClick={() => setActiveTab('aiTaxPlanner')}>
          AI Tax Planner
        </Link>
      </nav>
    </div>;
}