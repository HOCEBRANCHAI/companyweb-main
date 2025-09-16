import React, { useState } from 'react';
import { MapPinIcon, PhoneIcon, BuildingIcon, FileTextIcon, ShieldCheckIcon, GlobeIcon, LinkedinIcon, CalendarIcon, FlagIcon, ArrowUpRightIcon, ArrowRightIcon } from 'lucide-react';
import { UpgradeOptions } from './company/UpgradeOptions';
import { UpgradeModal } from './modals/UpgradeModal';
import { BranchRegistration } from './workflows/BranchRegistration';
import { useNavigate } from 'react-router-dom';
interface CompanyDetails {
  name: string;
  type: string;
  currentBase: {
    country: string;
    registrationNo: string;
    incorporationDate: string;
  };
  targetMarket: {
    country: string;
    status: 'virtual-office' | 'branch' | 'entity';
    registrationNo?: string;
  };
  website: string;
  linkedin: string;
  registeredAddress: string;
  kycStatus: {
    corporateDocsProvided: boolean;
    dueDiligenceComplete: boolean;
    legalOpinionReceived: boolean;
  };
}
export function CompanyInfo() {
  const navigate = useNavigate();
  const [showUpgradeModal, setShowUpgradeModal] = useState(false);
  const [showBranchRegistration, setShowBranchRegistration] = useState(false);
  const companyDetails: CompanyDetails = {
    name: 'Tech Innovations Ltd',
    type: 'Virtual Office',
    currentBase: {
      country: 'India',
      registrationNo: 'U72200MH2022PTC123456',
      incorporationDate: '2022-01-15'
    },
    targetMarket: {
      country: 'Netherlands',
      status: 'virtual-office'
    },
    website: 'www.techinnovations.com',
    linkedin: 'linkedin.com/company/techinnovations',
    registeredAddress: 'World Trade Center, Tower B, Bengaluru, Karnataka 560055, India',
    kycStatus: {
      corporateDocsProvided: true,
      dueDiligenceComplete: true,
      legalOpinionReceived: false
    }
  };
  return <div className="space-y-6">
      <div className="border-b border-gray-200 pb-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <div className="flex items-center">
              <BuildingIcon className="h-5 w-5 text-blue-600 mr-2" />
              <h2 className="text-lg font-medium text-gray-900">
                Current Base
              </h2>
            </div>
            <h1 className="text-2xl font-bold text-gray-800 mt-2">
              {companyDetails.name}
            </h1>
          </div>
          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
            {companyDetails.currentBase.country}
          </span>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-sm text-gray-500">Registration Number</p>
            <p className="text-sm font-medium text-gray-900">
              {companyDetails.currentBase.registrationNo}
            </p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Incorporation Date</p>
            <p className="text-sm font-medium text-gray-900">
              {new Date(companyDetails.currentBase.incorporationDate).toLocaleDateString()}
            </p>
          </div>
        </div>
      </div>
      <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg p-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <div className="flex items-center">
              <GlobeIcon className="h-5 w-5 text-blue-600 mr-2" />
              <h2 className="text-lg font-medium text-blue-900">
                Target Market
              </h2>
            </div>
            <p className="text-sm text-blue-700 mt-1">Market Entry Phase</p>
          </div>
          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-200 text-blue-800">
            {companyDetails.targetMarket.country}
          </span>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-white text-blue-800">
              {companyDetails.type}
            </span>
          </div>
          <div className="space-x-2">
            <button onClick={() => navigate('/registration/branch')} className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 text-sm font-medium flex items-center">
              Register Branch
              <ArrowRightIcon className="ml-2 h-4 w-4" />
            </button>
            <button onClick={() => setShowUpgradeModal(true)} className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 text-sm font-medium flex items-center">
              Upgrade Presence
              <ArrowUpRightIcon className="ml-2 h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
      <UpgradeOptions />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <div className="flex items-start">
            <BuildingIcon className="h-5 w-5 text-gray-500 mt-0.5 mr-3 flex-shrink-0" />
            <div>
              <h3 className="text-sm font-medium text-gray-900">
                Registration Details
              </h3>
              <div className="mt-2 text-sm text-gray-600 space-y-2">
                <div className="flex items-center">
                  <span className="w-32 text-gray-500">Number:</span>
                  <span>{companyDetails.currentBase.registrationNo}</span>
                </div>
                <div className="flex items-center">
                  <span className="w-32 text-gray-500">Incorporated:</span>
                  <span>
                    {new Date(companyDetails.currentBase.incorporationDate).toLocaleDateString()}
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-start">
            <GlobeIcon className="h-5 w-5 text-gray-500 mt-0.5 mr-3 flex-shrink-0" />
            <div>
              <h3 className="text-sm font-medium text-gray-900">
                Online Presence
              </h3>
              <div className="mt-2 text-sm space-y-2">
                <a href={`https://${companyDetails.website}`} className="flex items-center text-blue-600 hover:text-blue-800">
                  <GlobeIcon className="h-4 w-4 mr-1" />
                  {companyDetails.website}
                </a>
                <a href={`https://${companyDetails.linkedin}`} className="flex items-center text-blue-600 hover:text-blue-800">
                  <LinkedinIcon className="h-4 w-4 mr-1" />
                  LinkedIn Profile
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="space-y-4">
          <div className="flex items-start">
            <MapPinIcon className="h-5 w-5 text-gray-500 mt-0.5 mr-3 flex-shrink-0" />
            <div>
              <h3 className="text-sm font-medium text-gray-900">
                Registered Address
              </h3>
              <p className="mt-2 text-sm text-gray-600 whitespace-pre-line">
                {companyDetails.registeredAddress}
              </p>
            </div>
          </div>
          <div className="flex items-start">
            <ShieldCheckIcon className="h-5 w-5 text-gray-500 mt-0.5 mr-3 flex-shrink-0" />
            <div>
              <h3 className="text-sm font-medium text-gray-900">KYC Status</h3>
              <div className="mt-2 space-y-2">
                <div className="flex items-center">
                  <span className={`h-2 w-2 rounded-full mr-2 ${companyDetails.kycStatus.corporateDocsProvided ? 'bg-green-500' : 'bg-yellow-500'}`}></span>
                  <span className="text-sm text-gray-600">
                    Corporate Documents
                  </span>
                </div>
                <div className="flex items-center">
                  <span className={`h-2 w-2 rounded-full mr-2 ${companyDetails.kycStatus.dueDiligenceComplete ? 'bg-green-500' : 'bg-yellow-500'}`}></span>
                  <span className="text-sm text-gray-600">
                    Due Diligence Review
                  </span>
                </div>
                <div className="flex items-center">
                  <span className={`h-2 w-2 rounded-full mr-2 ${companyDetails.kycStatus.legalOpinionReceived ? 'bg-green-500' : 'bg-yellow-500'}`}></span>
                  <span className="text-sm text-gray-600">Legal Opinion</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-4 border-t border-gray-200">
        <div className="bg-yellow-50 border border-yellow-200 rounded-md p-4">
          <div className="flex">
            <div className="flex-shrink-0">
              <FileTextIcon className="h-5 w-5 text-yellow-400" />
            </div>
            <div className="ml-3">
              <h3 className="text-sm font-medium text-yellow-800">
                KYC Documentation Required
              </h3>
              <div className="mt-2 text-sm text-yellow-700">
                <ul className="list-disc pl-5 space-y-1">
                  <li>Official corporate documents</li>
                  <li>Additional information based on due diligence review</li>
                  <li>All documents must be certified true copies</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex space-x-4">
        <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 text-sm font-medium">
          Update Entity Information
        </button>
        <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 text-sm font-medium">
          Download Company Extract
        </button>
      </div>
      {showUpgradeModal && <UpgradeModal onClose={() => setShowUpgradeModal(false)} />}
      {showBranchRegistration && <BranchRegistration onClose={() => setShowBranchRegistration(false)} />}
    </div>;
}