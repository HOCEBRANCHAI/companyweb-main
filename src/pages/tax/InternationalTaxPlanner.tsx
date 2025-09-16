import React, { useState } from 'react';
import { TaxPlanner } from '../../components/tax/TaxPlanner';
import { useNavigate, Link } from 'react-router-dom';
import { ArrowLeftIcon, BookOpenIcon, ClockIcon, FileTextIcon, ShieldIcon, TrendingUpIcon, BarChartIcon, CheckCircleIcon, StarIcon, UsersIcon, ArrowRightIcon } from 'lucide-react';
export function InternationalTaxPlanner() {
  const navigate = useNavigate();
  const handleClose = () => {
    navigate('/taxes');
  };
  const [showPlanner, setShowPlanner] = useState(false);
  const [showNameInput, setShowNameInput] = useState(false);
  const [taxPlanName, setTaxPlanName] = useState('');
  const [savedReports, setSavedReports] = useState([{
    id: 'report-1',
    name: 'EU Expansion Strategy 2024',
    date: '2024-03-15',
    jurisdictions: ['Netherlands', 'Germany'],
    savings: '€42,500'
  }, {
    id: 'report-2',
    name: 'US-EU Operations',
    date: '2024-02-22',
    jurisdictions: ['Netherlands', 'France', 'Germany'],
    savings: '€68,200'
  }, {
    id: 'report-3',
    name: 'Digital Services Structure',
    date: '2024-01-05',
    jurisdictions: ['Netherlands'],
    savings: '€23,750'
  }]);
  const handleStartPlanning = () => {
    setShowNameInput(true);
  };
  const handleNameSubmit = e => {
    e.preventDefault();
    if (taxPlanName.trim()) {
      const newReport = {
        id: `report-${Date.now()}`,
        name: taxPlanName,
        date: new Date().toISOString().split('T')[0],
        jurisdictions: ['Netherlands'],
        savings: 'Pending'
      };
      setSavedReports([newReport, ...savedReports]);
      setShowPlanner(true);
      setShowNameInput(false);
    }
  };
  const handleSelectRecentPlan = report => {
    setTaxPlanName(report.name);
    setShowPlanner(true);
  };
  return <main className="w-full min-h-screen bg-white">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center mb-4 text-sm">
          <Link to="/taxes" className="text-blue-600 hover:text-blue-800 flex items-center">
            <ArrowLeftIcon className="h-4 w-4 mr-2" />
            Back to Tax Overview
          </Link>
        </div>
        {showPlanner ? <TaxPlanner onClose={() => setShowPlanner(false)} taxPlanName={taxPlanName} /> : <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-xl overflow-hidden">
            <div className="md:flex">
              <div className="p-8 md:w-3/5">
                <h1 className="text-3xl font-bold text-white mb-4">
                  AI Tax Planner
                </h1>
                <p className="text-blue-100 text-lg mb-6">
                  Create optimal international tax structures in minutes, not
                  weeks. Save up to 80% while ensuring full compliance.
                </p>
                <div className="flex flex-wrap gap-4 mb-6">
                  <div className="bg-white/10 rounded-lg px-4 py-3 flex items-center backdrop-blur-sm">
                    <ClockIcon className="h-5 w-5 text-blue-200 mr-2" />
                    <span className="text-white">30-minute setup</span>
                  </div>
                  <div className="bg-white/10 rounded-lg px-4 py-3 flex items-center backdrop-blur-sm">
                    <TrendingUpIcon className="h-5 w-5 text-blue-200 mr-2" />
                    <span className="text-white">Maximize savings</span>
                  </div>
                  <div className="bg-white/10 rounded-lg px-4 py-3 flex items-center backdrop-blur-sm">
                    <ShieldIcon className="h-5 w-5 text-blue-200 mr-2" />
                    <span className="text-white">OECD compliant</span>
                  </div>
                </div>
                {!showNameInput ? <button onClick={handleStartPlanning} className="bg-white text-blue-700 hover:bg-blue-50 px-6 py-3 rounded-lg font-medium text-lg flex items-center transition-colors shadow-md">
                    Start Tax Planning Now
                    <ArrowRightIcon className="ml-2 h-5 w-5" />
                  </button> : <div className="mt-4 space-y-3">
                    <form onSubmit={handleNameSubmit} className="flex flex-col space-y-3">
                      <div className="bg-white/20 backdrop-blur-sm p-4 rounded-lg">
                        <label htmlFor="taxPlanName" className="block text-white text-sm font-medium mb-2">
                          Name your Tax Plan
                        </label>
                        <input id="taxPlanName" type="text" value={taxPlanName} onChange={e => setTaxPlanName(e.target.value)} placeholder="e.g., EU Expansion Strategy 2024" className="w-full px-4 py-2 rounded-md border border-blue-300 bg-white/90 text-gray-900 focus:outline-none focus:ring-2 focus:ring-white" autoFocus />
                      </div>
                      <div className="flex space-x-3">
                        <button type="button" onClick={() => setShowNameInput(false)} className="px-4 py-2 bg-white/20 backdrop-blur-sm text-white rounded-md hover:bg-white/30 transition-colors">
                          Back
                        </button>
                        <button type="submit" disabled={!taxPlanName.trim()} className={`flex-1 px-4 py-2 rounded-md font-medium flex items-center justify-center ${taxPlanName.trim() ? 'bg-white text-blue-700 hover:bg-blue-50' : 'bg-white/40 text-blue-100 cursor-not-allowed'}`}>
                          Continue
                          <ArrowRightIcon className="ml-2 h-4 w-4" />
                        </button>
                      </div>
                    </form>
                  </div>}
              </div>
              <div className="hidden md:block md:w-2/5 bg-blue-800 p-8">
                <div className="bg-white/5 backdrop-blur-sm p-6 rounded-lg border border-white/20 h-full">
                  <h3 className="text-white font-medium mb-4 flex items-center">
                    <FileTextIcon className="h-5 w-5 text-blue-200 mr-2" />
                    Your Recent Tax Plans
                  </h3>
                  <div className="space-y-3">
                    {savedReports.slice(0, 3).map(report => <div key={report.id} className="bg-white/10 rounded-lg p-3 hover:bg-white/15 transition-colors cursor-pointer" onClick={() => handleSelectRecentPlan(report)}>
                        <h4 className="text-white font-medium text-sm">
                          {report.name}
                        </h4>
                        <div className="flex items-center text-xs text-blue-100 mt-1">
                          <BarChartIcon className="h-3 w-3 text-blue-200 mr-1" />
                          <span>Savings: {report.savings}</span>
                        </div>
                      </div>)}
                  </div>
                </div>
              </div>
            </div>
          </div>}
      </div>
    </main>;
}