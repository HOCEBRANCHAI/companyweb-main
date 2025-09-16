import React from 'react';
import { BuildingIcon, FileTextIcon, GlobeIcon, MapPinIcon, ShieldCheckIcon, CheckIcon, EuroIcon, AlertTriangleIcon, BarChart2Icon, CalendarIcon, ArrowUpIcon, ArrowDownIcon } from 'lucide-react';
interface DutchEntityDetails {
  name: string;
  type: string;
  registrationNo: string;
  incorporationDate: string;
  website: string;
  registeredAddress: string;
  shareCapital: {
    authorized: number;
    issued: number;
    totalShares: number;
    shareValue: number;
  };
  status: {
    kvkRegistration: boolean;
    vatRegistration: boolean;
    bankAccount: boolean;
    taxRegistration: boolean;
  };
  kpis: {
    monthlyRevenue: number;
    employeeCount: number;
    activeContracts: number;
    complianceScore: number;
  };
  businessActivity: {
    primaryActivity: string;
    secondaryActivities: string[];
    sbiCodes: string[];
  };
  compliance: {
    nextVATReturn: string;
    nextAnnualReport: string;
    outstandingTasks: number;
  };
}
export function DutchEntityProfile() {
  const entityDetails: DutchEntityDetails = {
    name: 'Tech Innovations B.V.',
    type: 'Private Limited Company',
    registrationNo: '12345678',
    incorporationDate: '2024-02-15',
    website: 'www.techinnovations.nl',
    registeredAddress: 'Prinses Margrietplantsoen 33, 2595 AM The Hague, Netherlands',
    shareCapital: {
      authorized: 100000,
      issued: 45000,
      totalShares: 45000,
      shareValue: 1
    },
    status: {
      kvkRegistration: true,
      vatRegistration: true,
      bankAccount: true,
      taxRegistration: true
    },
    kpis: {
      monthlyRevenue: 75000,
      employeeCount: 12,
      activeContracts: 8,
      complianceScore: 92
    },
    businessActivity: {
      primaryActivity: 'Software Development and IT Consulting',
      secondaryActivities: ['Cloud Services', 'Digital Transformation Consulting'],
      sbiCodes: ['62.01', '62.02', '70.22']
    },
    compliance: {
      nextVATReturn: '2024-04-30',
      nextAnnualReport: '2025-02-15',
      outstandingTasks: 2
    }
  };
  return <div className="space-y-6">
      <div className="flex items-center mb-4">
        <BuildingIcon className="h-5 w-5 text-purple-600 mr-2" />
        <h2 className="text-lg font-medium text-gray-900">
          Dutch Entity Profile
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white rounded-lg border border-gray-200 p-4">
          <div className="flex items-center justify-between">
            <p className="text-sm text-gray-500">Monthly Revenue</p>
            <EuroIcon className="h-5 w-5 text-gray-400" />
          </div>
          <p className="text-2xl font-bold text-gray-900 mt-2">
            €{entityDetails.kpis.monthlyRevenue.toLocaleString()}
          </p>
          <div className="flex items-center mt-2 text-green-600 text-sm">
            <ArrowUpIcon className="h-4 w-4 mr-1" />
            <span>12% vs last month</span>
          </div>
        </div>
        <div className="bg-white rounded-lg border border-gray-200 p-4">
          <div className="flex items-center justify-between">
            <p className="text-sm text-gray-500">Employees</p>
            <BuildingIcon className="h-5 w-5 text-gray-400" />
          </div>
          <p className="text-2xl font-bold text-gray-900 mt-2">
            {entityDetails.kpis.employeeCount}
          </p>
          <div className="flex items-center mt-2 text-blue-600 text-sm">
            <span>Active Contracts: {entityDetails.kpis.activeContracts}</span>
          </div>
        </div>
        <div className="bg-white rounded-lg border border-gray-200 p-4">
          <div className="flex items-center justify-between">
            <p className="text-sm text-gray-500">Compliance Score</p>
            <ShieldCheckIcon className="h-5 w-5 text-gray-400" />
          </div>
          <p className="text-2xl font-bold text-gray-900 mt-2">
            {entityDetails.kpis.complianceScore}%
          </p>
          <div className="flex items-center mt-2 text-amber-600 text-sm">
            <AlertTriangleIcon className="h-4 w-4 mr-1" />
            <span>
              {entityDetails.compliance.outstandingTasks} tasks pending
            </span>
          </div>
        </div>
        <div className="bg-white rounded-lg border border-gray-200 p-4">
          <div className="flex items-center justify-between">
            <p className="text-sm text-gray-500">Next Deadlines</p>
            <CalendarIcon className="h-5 w-5 text-gray-400" />
          </div>
          <div className="mt-2 space-y-1">
            <p className="text-sm">
              <span className="text-gray-500">VAT Return:</span>{' '}
              <span className="font-medium">
                {new Date(entityDetails.compliance.nextVATReturn).toLocaleDateString()}
              </span>
            </p>
            <p className="text-sm">
              <span className="text-gray-500">Annual Report:</span>{' '}
              <span className="font-medium">
                {new Date(entityDetails.compliance.nextAnnualReport).toLocaleDateString()}
              </span>
            </p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <h2 className="text-lg font-medium text-gray-900 mb-4">
            Business Activity
          </h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-sm font-medium text-gray-700">
                Primary Activity
              </h3>
              <p className="mt-1 text-gray-900">
                {entityDetails.businessActivity.primaryActivity}
              </p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-700">
                Secondary Activities
              </h3>
              <ul className="mt-1 space-y-1">
                {entityDetails.businessActivity.secondaryActivities.map(activity => <li key={activity} className="text-gray-900">
                      {activity}
                    </li>)}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-700">SBI Codes</h3>
              <div className="mt-1 flex flex-wrap gap-2">
                {entityDetails.businessActivity.sbiCodes.map(code => <span key={code} className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                    {code}
                  </span>)}
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <h2 className="text-lg font-medium text-gray-900 mb-4">
            Share Capital
          </h2>
          <div className="space-y-4">
            <div className="flex justify-between items-center pb-2 border-b border-gray-200">
              <span className="text-gray-600">Authorized Capital</span>
              <span className="font-medium">
                €{entityDetails.shareCapital.authorized.toLocaleString()}
              </span>
            </div>
            <div className="flex justify-between items-center pb-2 border-b border-gray-200">
              <span className="text-gray-600">Issued Capital</span>
              <span className="font-medium">
                €{entityDetails.shareCapital.issued.toLocaleString()}
              </span>
            </div>
            <div className="flex justify-between items-center pb-2 border-b border-gray-200">
              <span className="text-gray-600">Total Shares</span>
              <span className="font-medium">
                {entityDetails.shareCapital.totalShares.toLocaleString()}
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Share Value</span>
              <span className="font-medium">
                €{entityDetails.shareCapital.shareValue}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>;
}