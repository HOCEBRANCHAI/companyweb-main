import React, { useState } from 'react';
import { EuroIcon, BuildingIcon, LandmarkIcon, BrainCircuitIcon, ArrowRightIcon, BadgeCheckIcon, ClockIcon, CheckCircleIcon, AlertCircleIcon } from 'lucide-react';
import { BranchRegistration } from '../workflows/BranchRegistration';
import { VATIDRegistration } from '../workflows/vatid/VATIDRegistration';
import { EmployerRegistration } from '../workflows/employer/EmployerRegistration';
interface Application {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  category: string;
  estimatedTime: string;
  aiFeatures: string[];
  status?: 'pending' | 'in_progress' | 'completed';
  progress?: number;
}
export function Applications() {
  const [showBranchRegistration, setShowBranchRegistration] = useState(false);
  const [showVATIDRegistration, setShowVATIDRegistration] = useState(false);
  const [showEmployerRegistration, setShowEmployerRegistration] = useState(false);
  const [selectedAppId, setSelectedAppId] = useState<string | null>(null);
  const applications: Application[] = [{
    id: 'vat',
    title: 'VAT ID Application',
    description: 'Register for VAT number in target market',
    icon: <EuroIcon className="h-6 w-6 text-pink-500" />,
    category: 'Tax',
    estimatedTime: '5-7 business days',
    aiFeatures: ['Automated form filling', 'Document verification', 'Real-time status tracking']
  }, {
    id: 'branch',
    title: 'Branch Registration',
    description: 'Establish your branch office',
    icon: <BuildingIcon className="h-6 w-6 text-purple-500" />,
    category: 'Entity',
    estimatedTime: '10-15 business days',
    aiFeatures: ['Document preparation', 'Compliance check', 'Automated notifications'],
    status: 'in_progress',
    progress: 60
  }, {
    id: 'employer',
    title: 'Employer Registration',
    description: 'Register as an employer in target market',
    icon: <BadgeCheckIcon className="h-6 w-6 text-indigo-500" />,
    category: 'Employment',
    estimatedTime: '3-5 business days',
    aiFeatures: ['Payroll setup', 'Employment compliance', 'Tax registration']
  }, {
    id: 'bank',
    title: 'Bank Account Opening',
    description: 'Setup corporate banking in target market',
    icon: <LandmarkIcon className="h-6 w-6 text-fuchsia-500" />,
    category: 'Banking',
    estimatedTime: '5-10 business days',
    aiFeatures: ['KYC document preparation', 'Application pre-check', 'Status monitoring']
  }];
  const handleStartApplication = (appId: string) => {
    setSelectedAppId(appId);
    if (appId === 'branch') {
      setShowBranchRegistration(true);
    } else if (appId === 'vat') {
      setShowVATIDRegistration(true);
    } else if (appId === 'employer') {
      setShowEmployerRegistration(true);
    } else {
      console.log(`Starting application: ${appId}`);
    }
  };
  const getStatusColor = (status?: string) => {
    switch (status) {
      case 'completed':
        return 'bg-green-400/20 text-green-400';
      case 'in_progress':
        return 'bg-blue-400/20 text-blue-400';
      case 'pending':
        return 'bg-yellow-400/20 text-yellow-400';
      default:
        return 'bg-purple-400/20 text-purple-400';
    }
  };
  const activeApplications = [{
    id: 'branch-reg-1',
    title: 'Branch Registration - Netherlands',
    startDate: 'February 15, 2024',
    status: 'in_progress',
    nextStep: 'Document verification',
    dueDate: 'February 25, 2024'
  }, {
    id: 'vat-app-1',
    title: 'VAT ID Application - Germany',
    startDate: 'February 10, 2024',
    status: 'pending',
    nextStep: 'Authority review',
    dueDate: 'February 20, 2024'
  }, {
    id: 'employer-reg-1',
    title: 'Employer Registration - Netherlands',
    startDate: 'February 12, 2024',
    status: 'pending',
    nextStep: 'Information verification',
    dueDate: 'February 18, 2024'
  }];
  return <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-white">Applications</h1>
        <p className="text-purple-200/70 mt-1">
          Start and manage your business applications with AI assistance
        </p>
      </div>
      {/* AI Assistant Banner */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl p-6 text-white shadow-lg relative overflow-hidden">
        <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full transform translate-x-20 -translate-y-20 blur-xl"></div>
        <div className="absolute bottom-0 left-0 w-40 h-40 bg-white/5 rounded-full transform -translate-x-20 translate-y-20 blur-xl"></div>
        <div className="relative">
          <div className="flex items-center space-x-3 mb-4">
            <BrainCircuitIcon className="h-8 w-8 text-white" />
            <h2 className="text-xl font-semibold">AI Application Assistant</h2>
          </div>
          <p className="mb-4 text-white/80">
            Let our AI help you prepare and submit applications with higher
            accuracy and efficiency. We'll guide you through every step of the
            process.
          </p>
          <button className="bg-white text-purple-700 px-4 py-2 rounded-md text-sm font-medium hover:bg-purple-50 transition-colors">
            Get Started with AI
          </button>
        </div>
      </div>
      {/* Application Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {applications.map(app => <div key={app.id} className="bg-[#150c42] backdrop-blur-sm rounded-xl border border-purple-900/50 p-6 hover:shadow-lg hover:shadow-purple-500/10 transition-all duration-300 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 to-pink-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center">
                    <div className="p-2 rounded-lg bg-gradient-to-br from-purple-900/50 to-pink-900/50">
                      {app.icon}
                    </div>
                    <h3 className="text-lg font-medium text-white ml-3">
                      {app.title}
                    </h3>
                  </div>
                  <p className="text-sm text-purple-200/70 mt-2">
                    {app.description}
                  </p>
                </div>
              </div>
              <div className="mt-4 space-y-3">
                <div className="flex items-center text-sm text-purple-200/70">
                  <ClockIcon className="h-4 w-4 mr-2 text-purple-400" />
                  Estimated time: {app.estimatedTime}
                </div>
                {app.status && <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(app.status)}`}>
                        {app.status.replace('_', ' ').toUpperCase()}
                      </span>
                      <span className="text-sm text-purple-200/70">
                        {app.progress}%
                      </span>
                    </div>
                    <div className="w-full bg-purple-900/30 rounded-full h-2">
                      <div className="bg-gradient-to-r from-pink-500 to-purple-500 h-2 rounded-full" style={{
                  width: `${app.progress}%`
                }}></div>
                    </div>
                  </div>}
                <div className="border-t border-purple-900/50 pt-3 mt-3">
                  <h4 className="text-sm font-medium text-white mb-2">
                    AI Features
                  </h4>
                  <ul className="space-y-2">
                    {app.aiFeatures.map((feature, index) => <li key={index} className="flex items-center text-sm text-purple-200/70">
                        <CheckCircleIcon className="h-4 w-4 text-green-400 mr-2" />
                        {feature}
                      </li>)}
                  </ul>
                </div>
              </div>
              <button onClick={() => handleStartApplication(app.id)} className="mt-4 w-full px-4 py-2 bg-gradient-to-r from-pink-600 to-purple-600 text-white rounded-md hover:from-pink-500 hover:to-purple-500 text-sm font-medium flex items-center justify-center transition-all duration-300">
                {app.status === 'in_progress' ? 'Continue Application' : 'Start Application'}
                <ArrowRightIcon className="ml-2 h-4 w-4" />
              </button>
            </div>
          </div>)}
      </div>
      {/* Active Applications */}
      <div className="bg-[#150c42] backdrop-blur-sm rounded-xl border border-purple-900/50 p-6">
        <h2 className="text-lg font-medium text-white mb-4">
          Active Applications
        </h2>
        <div className="space-y-4">
          {activeApplications.map(app => <div key={app.id} className="flex items-center justify-between py-3 border-b border-purple-900/30 last:border-0">
              <div className="flex items-center">
                {app.status === 'in_progress' ? <ClockIcon className="h-5 w-5 text-blue-400 mr-3" /> : <AlertCircleIcon className="h-5 w-5 text-yellow-400 mr-3" />}
                <div>
                  <p className="text-sm font-medium text-white">{app.title}</p>
                  <p className="text-sm text-purple-200/50">
                    Started on {app.startDate}
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="text-right">
                  <p className="text-sm text-purple-200/70">
                    Next: {app.nextStep}
                  </p>
                  <p className="text-sm text-purple-200/70">
                    Due: {app.dueDate}
                  </p>
                </div>
                <button onClick={() => {
              if (app.id.startsWith('branch')) {
                setShowBranchRegistration(true);
              } else if (app.id.startsWith('vat')) {
                setShowVATIDRegistration(true);
              } else if (app.id.startsWith('employer')) {
                setShowEmployerRegistration(true);
              }
            }} className="text-pink-500 hover:text-pink-400 text-sm transition-colors">
                  View Details
                </button>
              </div>
            </div>)}
        </div>
      </div>
      {/* Branch Registration Workflow */}
      {showBranchRegistration && <BranchRegistration onClose={() => setShowBranchRegistration(false)} />}
      {/* VAT ID Registration Workflow */}
      {showVATIDRegistration && <VATIDRegistration onClose={() => setShowVATIDRegistration(false)} />}
      {/* Employer Registration Workflow */}
      {showEmployerRegistration && <EmployerRegistration onClose={() => setShowEmployerRegistration(false)} />}
    </div>;
}