import React, { useState } from 'react';
import { BuildingIcon, FileTextIcon, GlobeIcon, MapPinIcon, ShieldCheckIcon, CheckIcon, EuroIcon, AlertTriangleIcon, BarChart2Icon, CalendarIcon, ArrowUpIcon, ArrowDownIcon, UsersIcon, PhoneIcon, MailIcon, LinkIcon } from 'lucide-react';
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
  return <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-[#4A2D80] to-[#7B56B7] text-white">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0">
            <div>
              <h1 className="text-3xl font-bold">{entityDetails.name}</h1>
              <div className="flex items-center mt-2 space-x-4">
                <span className="flex items-center">
                  <BuildingIcon className="h-4 w-4 mr-2" />
                  {entityDetails.type}
                </span>
                <span className="flex items-center">
                  <FileTextIcon className="h-4 w-4 mr-2" />
                  KVK: {entityDetails.registrationNo}
                </span>
              </div>
            </div>
            <div className="flex space-x-3">
              <button className="px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg backdrop-blur-sm transition-colors flex items-center">
                <EditIcon className="h-4 w-4 mr-2" />
                Edit Profile
              </button>
              <button className="px-4 py-2 bg-[#EA3A70] hover:bg-[#EA3A70]/90 rounded-lg transition-colors flex items-center">
                <SettingsIcon className="h-4 w-4 mr-2" />
                Settings
              </button>
            </div>
          </div>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex items-center">
              <MapPinIcon className="h-5 w-5 text-white/70 mr-2" />
              <span className="text-white/90">
                {entityDetails.registeredAddress}
              </span>
            </div>
            <div className="flex items-center">
              <GlobeIcon className="h-5 w-5 text-white/70 mr-2" />
              <a href={`https://${entityDetails.website}`} className="text-white/90 hover:text-white">
                {entityDetails.website}
              </a>
            </div>
            <div className="flex items-center">
              <CalendarIcon className="h-5 w-5 text-white/70 mr-2" />
              <span className="text-white/90">
                Incorporated:{' '}
                {new Date(entityDetails.incorporationDate).toLocaleDateString()}
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between mb-4">
              <div className="p-2 bg-blue-50 rounded-lg">
                <EuroIcon className="h-6 w-6 text-blue-600" />
              </div>
              <span className="text-sm text-gray-500">vs last month</span>
            </div>
            <h3 className="text-lg font-medium text-gray-600">
              Monthly Revenue
            </h3>
            <div className="mt-2 flex items-center justify-between">
              <span className="text-2xl font-bold text-gray-900">
                €{entityDetails.kpis.monthlyRevenue.toLocaleString()}
              </span>
              <div className="flex items-center text-green-600">
                <ArrowUpIcon className="h-4 w-4 mr-1" />
                <span className="text-sm">12%</span>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between mb-4">
              <div className="p-2 bg-purple-50 rounded-lg">
                <UsersIcon className="h-6 w-6 text-purple-600" />
              </div>
              <span className="text-sm text-gray-500">Total Staff</span>
            </div>
            <h3 className="text-lg font-medium text-gray-600">Employees</h3>
            <div className="mt-2 flex items-center justify-between">
              <span className="text-2xl font-bold text-gray-900">
                {entityDetails.kpis.employeeCount}
              </span>
              <div className="flex items-center text-purple-600">
                <FileTextIcon className="h-4 w-4 mr-1" />
                <span className="text-sm">
                  {entityDetails.kpis.activeContracts} Contracts
                </span>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between mb-4">
              <div className="p-2 bg-green-50 rounded-lg">
                <ShieldCheckIcon className="h-6 w-6 text-green-600" />
              </div>
              <span className="text-sm text-gray-500">Overall Score</span>
            </div>
            <h3 className="text-lg font-medium text-gray-600">Compliance</h3>
            <div className="mt-2 flex items-center justify-between">
              <span className="text-2xl font-bold text-gray-900">
                {entityDetails.kpis.complianceScore}%
              </span>
              <div className="flex items-center text-amber-600">
                <AlertTriangleIcon className="h-4 w-4 mr-1" />
                <span className="text-sm">
                  {entityDetails.compliance.outstandingTasks} tasks
                </span>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between mb-4">
              <div className="p-2 bg-red-50 rounded-lg">
                <CalendarIcon className="h-6 w-6 text-red-600" />
              </div>
              <span className="text-sm text-gray-500">Due Dates</span>
            </div>
            <h3 className="text-lg font-medium text-gray-600">
              Next Deadlines
            </h3>
            <div className="mt-2 space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600">VAT Return:</span>
                <span className="font-medium">
                  {new Date(entityDetails.compliance.nextVATReturn).toLocaleDateString()}
                </span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600">Annual Report:</span>
                <span className="font-medium">
                  {new Date(entityDetails.compliance.nextAnnualReport).toLocaleDateString()}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">
              Business Activity
            </h3>
            <div className="space-y-6">
              <div>
                <h4 className="text-sm font-medium text-gray-700 mb-2">
                  Primary Activity
                </h4>
                <p className="text-gray-900 bg-blue-50 p-3 rounded-lg border border-blue-100">
                  {entityDetails.businessActivity.primaryActivity}
                </p>
              </div>
              <div>
                <h4 className="text-sm font-medium text-gray-700 mb-2">
                  Secondary Activities
                </h4>
                <div className="space-y-2">
                  {entityDetails.businessActivity.secondaryActivities.map((activity, index) => <div key={index} className="flex items-center bg-gray-50 p-3 rounded-lg border border-gray-100">
                        <CheckIcon className="h-4 w-4 text-green-500 mr-2" />
                        <span className="text-gray-900">{activity}</span>
                      </div>)}
                </div>
              </div>
              <div>
                <h4 className="text-sm font-medium text-gray-700 mb-2">
                  SBI Codes
                </h4>
                <div className="flex flex-wrap gap-2">
                  {entityDetails.businessActivity.sbiCodes.map(code => <span key={code} className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm font-medium">
                      {code}
                    </span>)}
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">
              Share Capital
            </h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg border border-blue-100">
                <div>
                  <p className="text-sm text-gray-600">Authorized Capital</p>
                  <p className="text-lg font-semibold text-gray-900">
                    €{entityDetails.shareCapital.authorized.toLocaleString()}
                  </p>
                </div>
                <div className="h-10 w-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <EuroIcon className="h-5 w-5 text-blue-600" />
                </div>
              </div>
              <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg border border-green-100">
                <div>
                  <p className="text-sm text-gray-600">Issued Capital</p>
                  <p className="text-lg font-semibold text-gray-900">
                    €{entityDetails.shareCapital.issued.toLocaleString()}
                  </p>
                </div>
                <div className="h-10 w-10 bg-green-100 rounded-full flex items-center justify-center">
                  <CheckIcon className="h-5 w-5 text-green-600" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-gray-50 rounded-lg border border-gray-100">
                  <p className="text-sm text-gray-600">Total Shares</p>
                  <p className="text-lg font-semibold text-gray-900">
                    {entityDetails.shareCapital.totalShares.toLocaleString()}
                  </p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg border border-gray-100">
                  <p className="text-sm text-gray-600">Share Value</p>
                  <p className="text-lg font-semibold text-gray-900">
                    €{entityDetails.shareCapital.shareValue}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>;
}