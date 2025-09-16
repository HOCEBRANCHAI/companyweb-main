import React, { useState } from 'react';
import { ShieldIcon, ShareIcon, EyeIcon, ClockIcon, CheckCircleIcon, FileTextIcon, UsersIcon, BuildingIcon, GlobeIcon, ArrowRightIcon, LockIcon, UserIcon, PlusIcon } from 'lucide-react';
export function KYCProfileSharing() {
  const [activeTab, setActiveTab] = useState('overview');
  const kycDocuments = [{
    id: 'company-extract',
    name: 'Company Extract',
    status: 'verified',
    lastUpdated: '2024-03-15',
    expiryDate: '2025-03-15'
  }, {
    id: 'articles',
    name: 'Articles of Association',
    status: 'verified',
    lastUpdated: '2024-01-20',
    expiryDate: null
  }, {
    id: 'ubo',
    name: 'UBO Register Extract',
    status: 'verified',
    lastUpdated: '2024-02-10',
    expiryDate: '2024-08-10'
  }, {
    id: 'director-id',
    name: 'Director Identification',
    status: 'pending',
    lastUpdated: '2024-04-01',
    expiryDate: null
  }];
  const sharedProfiles = [{
    id: 'share-1',
    recipient: 'ABN AMRO Bank',
    type: 'Financial Institution',
    sharedDate: '2024-03-20',
    expiryDate: '2024-06-20',
    status: 'active',
    documents: ['Company Extract', 'UBO Register Extract', 'Articles of Association']
  }, {
    id: 'share-2',
    recipient: 'Global Partners Ltd',
    type: 'Business Partner',
    sharedDate: '2024-02-15',
    expiryDate: '2024-05-15',
    status: 'active',
    documents: ['Company Extract', 'UBO Register Extract']
  }];
  const accessRequests = [{
    id: 'request-1',
    requester: 'Dutch Tax Authority',
    type: 'Government',
    requestDate: '2024-04-05',
    status: 'pending',
    requestedDocuments: ['Company Extract', 'UBO Register Extract']
  }];
  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'verified':
        return <span className="px-2 py-0.5 bg-green-900/30 text-green-400 rounded-full text-xs">
            Verified
          </span>;
      case 'pending':
        return <span className="px-2 py-0.5 bg-yellow-900/30 text-yellow-400 rounded-full text-xs">
            Pending
          </span>;
      case 'expired':
        return <span className="px-2 py-0.5 bg-red-900/30 text-red-400 rounded-full text-xs">
            Expired
          </span>;
      case 'active':
        return <span className="px-2 py-0.5 bg-blue-900/30 text-blue-400 rounded-full text-xs">
            Active
          </span>;
      default:
        return <span className="px-2 py-0.5 bg-indigo-900/50 text-indigo-300 rounded-full text-xs">
            {status}
          </span>;
    }
  };
  return <div className="bg-[#1B1537]/80 backdrop-blur-sm rounded-xl border border-[#2D2755] overflow-hidden">
      <div className="p-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-xl font-bold text-white">
              KYC Profile Sharing
            </h3>
            <p className="text-indigo-200 mt-1">
              Securely share your KYC profile with third parties
            </p>
          </div>
          <button className="px-4 py-2 bg-[#EA3A70] text-white rounded-lg hover:bg-[#EA3A70]/90 transition-colors text-sm font-medium flex items-center">
            <ShareIcon className="h-4 w-4 mr-2" />
            Share Profile
          </button>
        </div>
        <div className="flex overflow-x-auto mb-6 border-b border-indigo-500/30">
          <button onClick={() => setActiveTab('overview')} className={`px-4 py-2 font-medium text-sm whitespace-nowrap ${activeTab === 'overview' ? 'text-[#EA3A70] border-b-2 border-[#EA3A70]' : 'text-indigo-300 hover:text-white'}`}>
            Overview
          </button>
          <button onClick={() => setActiveTab('documents')} className={`px-4 py-2 font-medium text-sm whitespace-nowrap ${activeTab === 'documents' ? 'text-[#EA3A70] border-b-2 border-[#EA3A70]' : 'text-indigo-300 hover:text-white'}`}>
            KYC Documents
          </button>
          <button onClick={() => setActiveTab('shared')} className={`px-4 py-2 font-medium text-sm whitespace-nowrap ${activeTab === 'shared' ? 'text-[#EA3A70] border-b-2 border-[#EA3A70]' : 'text-indigo-300 hover:text-white'}`}>
            Shared Profiles
          </button>
          <button onClick={() => setActiveTab('requests')} className={`px-4 py-2 font-medium text-sm whitespace-nowrap ${activeTab === 'requests' ? 'text-[#EA3A70] border-b-2 border-[#EA3A70]' : 'text-indigo-300 hover:text-white'}`}>
            Access Requests
          </button>
        </div>
        {activeTab === 'overview' && <div>
            <div className="bg-indigo-900/30 rounded-lg border border-indigo-500/30 p-5 mb-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <div className="p-2 bg-indigo-900/50 rounded-lg mr-3">
                    <BuildingIcon className="h-6 w-6 text-[#EA3A70]" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium">
                      Tech Innovations Ltd
                    </h4>
                    <div className="flex items-center mt-1">
                      <span className="text-xs text-indigo-300 flex items-center">
                        <GlobeIcon className="h-3.5 w-3.5 mr-1" />
                        India
                      </span>
                      <span className="mx-2 text-indigo-500">•</span>
                      <span className="text-xs text-indigo-300">
                        U72200MH2022PTC123456
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="p-2 bg-green-900/30 rounded-lg">
                    <CheckCircleIcon className="h-5 w-5 text-green-400" />
                  </div>
                  <div className="ml-2">
                    <span className="text-green-400 text-sm font-medium">
                      Verified
                    </span>
                    <p className="text-xs text-indigo-300">
                      Last updated: Apr 1, 2024
                    </p>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                <div className="bg-indigo-900/50 rounded-lg p-3">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs text-indigo-300">KYC Status</span>
                    <span className="px-2 py-0.5 bg-green-900/30 text-green-400 rounded-full text-xs">
                      Complete
                    </span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-full bg-indigo-900/50 rounded-full h-1.5 mr-2">
                      <div className="bg-green-400 h-1.5 rounded-full w-full"></div>
                    </div>
                    <span className="text-xs text-white font-medium">100%</span>
                  </div>
                </div>
                <div className="bg-indigo-900/50 rounded-lg p-3">
                  <span className="text-xs text-indigo-300">Active Shares</span>
                  <div className="flex items-center mt-1">
                    <ShareIcon className="h-4 w-4 text-[#EA3A70] mr-2" />
                    <span className="text-white font-medium">2</span>
                    <span className="text-indigo-300 text-xs ml-2">
                      profiles shared
                    </span>
                  </div>
                </div>
                <div className="bg-indigo-900/50 rounded-lg p-3">
                  <span className="text-xs text-indigo-300">
                    Pending Requests
                  </span>
                  <div className="flex items-center mt-1">
                    <ClockIcon className="h-4 w-4 text-yellow-400 mr-2" />
                    <span className="text-white font-medium">1</span>
                    <span className="text-indigo-300 text-xs ml-2">
                      request pending
                    </span>
                  </div>
                </div>
              </div>
              <div className="bg-indigo-900/50 rounded-lg p-4">
                <h5 className="text-white font-medium mb-3">
                  KYC Documents Summary
                </h5>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {kycDocuments.map(doc => <div key={doc.id} className="flex items-center justify-between">
                      <div className="flex items-center">
                        <FileTextIcon className="h-4 w-4 text-indigo-300 mr-2" />
                        <span className="text-sm text-indigo-200">
                          {doc.name}
                        </span>
                      </div>
                      {getStatusBadge(doc.status)}
                    </div>)}
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="bg-indigo-900/30 rounded-lg border border-indigo-500/30 p-5">
                <h4 className="text-white font-medium mb-4 flex items-center">
                  <ShareIcon className="h-5 w-5 text-[#EA3A70] mr-2" />
                  Recent Shares
                </h4>
                {sharedProfiles.slice(0, 2).map(profile => <div key={profile.id} className="mb-4 last:mb-0">
                    <div className="flex items-center justify-between mb-1">
                      <div className="flex items-center">
                        <BuildingIcon className="h-4 w-4 text-indigo-300 mr-2" />
                        <span className="text-white text-sm">
                          {profile.recipient}
                        </span>
                      </div>
                      {getStatusBadge(profile.status)}
                    </div>
                    <p className="text-xs text-indigo-300 mb-1">
                      Shared on{' '}
                      {new Date(profile.sharedDate).toLocaleDateString()} •
                      Expires on{' '}
                      {new Date(profile.expiryDate).toLocaleDateString()}
                    </p>
                    <div className="flex flex-wrap gap-1 mt-1">
                      {profile.documents.map((doc, i) => <span key={i} className="px-2 py-0.5 bg-indigo-900/50 rounded-full text-xs text-indigo-300">
                          {doc}
                        </span>)}
                    </div>
                  </div>)}
                <button className="w-full text-center text-[#EA3A70] text-sm mt-3 hover:text-[#EA3A70]/80">
                  View All Shared Profiles
                </button>
              </div>
              <div className="bg-indigo-900/30 rounded-lg border border-indigo-500/30 p-5">
                <h4 className="text-white font-medium mb-4 flex items-center">
                  <ClockIcon className="h-5 w-5 text-[#EA3A70] mr-2" />
                  Pending Requests
                </h4>
                {accessRequests.length > 0 ? accessRequests.map(request => <div key={request.id} className="mb-4 last:mb-0">
                      <div className="flex items-center justify-between mb-1">
                        <div className="flex items-center">
                          <BuildingIcon className="h-4 w-4 text-indigo-300 mr-2" />
                          <span className="text-white text-sm">
                            {request.requester}
                          </span>
                        </div>
                        {getStatusBadge(request.status)}
                      </div>
                      <p className="text-xs text-indigo-300 mb-1">
                        Requested on{' '}
                        {new Date(request.requestDate).toLocaleDateString()} •{' '}
                        {request.type}
                      </p>
                      <div className="flex flex-wrap gap-1 mt-1">
                        {request.requestedDocuments.map((doc, i) => <span key={i} className="px-2 py-0.5 bg-indigo-900/50 rounded-full text-xs text-indigo-300">
                            {doc}
                          </span>)}
                      </div>
                      <div className="flex space-x-2 mt-3">
                        <button className="px-3 py-1 bg-indigo-900/50 border border-indigo-500/30 text-white rounded-lg hover:bg-indigo-800/50 transition-colors text-xs">
                          Decline
                        </button>
                        <button className="px-3 py-1 bg-[#EA3A70] text-white rounded-lg hover:bg-[#EA3A70]/90 transition-colors text-xs">
                          Approve
                        </button>
                      </div>
                    </div>) : <div className="text-center py-6">
                    <ClockIcon className="h-8 w-8 text-indigo-300 mx-auto mb-2" />
                    <p className="text-indigo-300">No pending requests</p>
                  </div>}
              </div>
            </div>
            <div className="bg-indigo-900/30 rounded-lg border border-indigo-500/30 p-5">
              <div className="flex items-start">
                <div className="p-2 bg-indigo-900/50 rounded-lg mr-3 flex-shrink-0">
                  <LockIcon className="h-5 w-5 text-[#EA3A70]" />
                </div>
                <div>
                  <h4 className="text-white font-medium mb-2">
                    Secure KYC Profile Sharing
                  </h4>
                  <p className="text-sm text-indigo-300 mb-4">
                    Share your verified KYC profile securely with banks,
                    business partners, and authorities. Control what information
                    is shared and for how long.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    <div className="flex items-start">
                      <CheckCircleIcon className="h-4 w-4 text-green-400 mr-2 mt-0.5" />
                      <span className="text-sm text-indigo-200">
                        End-to-end encryption
                      </span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircleIcon className="h-4 w-4 text-green-400 mr-2 mt-0.5" />
                      <span className="text-sm text-indigo-200">
                        Time-limited access
                      </span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircleIcon className="h-4 w-4 text-green-400 mr-2 mt-0.5" />
                      <span className="text-sm text-indigo-200">
                        Selective document sharing
                      </span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircleIcon className="h-4 w-4 text-green-400 mr-2 mt-0.5" />
                      <span className="text-sm text-indigo-200">
                        Access logs & audit trail
                      </span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircleIcon className="h-4 w-4 text-green-400 mr-2 mt-0.5" />
                      <span className="text-sm text-indigo-200">
                        Revoke access anytime
                      </span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircleIcon className="h-4 w-4 text-green-400 mr-2 mt-0.5" />
                      <span className="text-sm text-indigo-200">
                        GDPR compliant
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>}
        {activeTab === 'documents' && <div className="space-y-4">
            {kycDocuments.map(doc => <div key={doc.id} className="bg-indigo-900/30 rounded-lg border border-indigo-500/30 p-5 flex items-center justify-between">
                <div className="flex items-center">
                  <div className="p-2 bg-indigo-900/50 rounded-lg mr-3">
                    <FileTextIcon className="h-5 w-5 text-indigo-300" />
                  </div>
                  <div>
                    <h5 className="text-white font-medium">{doc.name}</h5>
                    <div className="flex items-center mt-1">
                      <span className="text-xs text-indigo-300">
                        Last updated:{' '}
                        {new Date(doc.lastUpdated).toLocaleDateString()}
                      </span>
                      {doc.expiryDate && <>
                          <span className="mx-2 text-indigo-500">•</span>
                          <span className="text-xs text-indigo-300">
                            Expires:{' '}
                            {new Date(doc.expiryDate).toLocaleDateString()}
                          </span>
                        </>}
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  {getStatusBadge(doc.status)}
                  <button className="p-1.5 bg-indigo-900/50 rounded-lg text-indigo-300 hover:text-white">
                    <EyeIcon className="h-5 w-5" />
                  </button>
                </div>
              </div>)}
            <div className="bg-indigo-900/30 rounded-lg border border-indigo-500/30 border-dashed p-5 flex flex-col items-center justify-center">
              <div className="p-3 bg-indigo-900/50 rounded-full mb-3">
                <PlusIcon className="h-6 w-6 text-indigo-300" />
              </div>
              <h5 className="text-white font-medium mb-1">
                Upload New Document
              </h5>
              <p className="text-sm text-indigo-300 mb-3 text-center">
                Add additional documents to complete your KYC profile
              </p>
              <button className="px-4 py-2 bg-indigo-900/50 border border-indigo-500/30 text-white rounded-lg hover:bg-indigo-800/50 transition-colors text-sm font-medium">
                Upload Document
              </button>
            </div>
          </div>}
        {activeTab === 'shared' && <div className="space-y-4">
            {sharedProfiles.map(profile => <div key={profile.id} className="bg-indigo-900/30 rounded-lg border border-indigo-500/30 p-5">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <div className="p-2 bg-indigo-900/50 rounded-lg mr-3">
                      <BuildingIcon className="h-5 w-5 text-indigo-300" />
                    </div>
                    <div>
                      <h5 className="text-white font-medium">
                        {profile.recipient}
                      </h5>
                      <div className="flex items-center mt-1">
                        <span className="text-xs text-indigo-300">
                          {profile.type}
                        </span>
                        <span className="mx-2 text-indigo-500">•</span>
                        <span className="text-xs text-indigo-300">
                          Shared on{' '}
                          {new Date(profile.sharedDate).toLocaleDateString()}
                        </span>
                      </div>
                    </div>
                  </div>
                  {getStatusBadge(profile.status)}
                </div>
                <div className="bg-indigo-900/50 rounded-lg p-3 mb-4">
                  <h6 className="text-sm text-white font-medium mb-2">
                    Shared Documents
                  </h6>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {profile.documents.map((doc, i) => <div key={i} className="flex items-center">
                        <FileTextIcon className="h-4 w-4 text-indigo-300 mr-2" />
                        <span className="text-sm text-indigo-200">{doc}</span>
                      </div>)}
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-xs text-indigo-300">
                      Access expires on{' '}
                      {new Date(profile.expiryDate).toLocaleDateString()}
                    </span>
                  </div>
                  <div className="flex space-x-2">
                    <button className="px-3 py-1.5 bg-indigo-900/50 border border-indigo-500/30 text-white rounded-lg hover:bg-indigo-800/50 transition-colors text-sm font-medium">
                      View Activity
                    </button>
                    <button className="px-3 py-1.5 bg-red-900/30 border border-red-500/30 text-red-400 rounded-lg hover:bg-red-900/50 transition-colors text-sm font-medium">
                      Revoke Access
                    </button>
                  </div>
                </div>
              </div>)}
            <button className="w-full px-4 py-3 bg-[#EA3A70] text-white rounded-lg hover:bg-[#EA3A70]/90 transition-colors text-sm font-medium flex items-center justify-center">
              <ShareIcon className="h-4 w-4 mr-2" />
              Share Profile with New Recipient
            </button>
          </div>}
        {activeTab === 'requests' && <div>
            {accessRequests.length > 0 ? <div className="space-y-4">
                {accessRequests.map(request => <div key={request.id} className="bg-indigo-900/30 rounded-lg border border-indigo-500/30 p-5">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center">
                        <div className="p-2 bg-indigo-900/50 rounded-lg mr-3">
                          <BuildingIcon className="h-5 w-5 text-indigo-300" />
                        </div>
                        <div>
                          <h5 className="text-white font-medium">
                            {request.requester}
                          </h5>
                          <div className="flex items-center mt-1">
                            <span className="text-xs text-indigo-300">
                              {request.type}
                            </span>
                            <span className="mx-2 text-indigo-500">•</span>
                            <span className="text-xs text-indigo-300">
                              Requested on{' '}
                              {new Date(request.requestDate).toLocaleDateString()}
                            </span>
                          </div>
                        </div>
                      </div>
                      {getStatusBadge(request.status)}
                    </div>
                    <div className="bg-indigo-900/50 rounded-lg p-3 mb-4">
                      <h6 className="text-sm text-white font-medium mb-2">
                        Requested Documents
                      </h6>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {request.requestedDocuments.map((doc, i) => <div key={i} className="flex items-center">
                            <FileTextIcon className="h-4 w-4 text-indigo-300 mr-2" />
                            <span className="text-sm text-indigo-200">
                              {doc}
                            </span>
                          </div>)}
                      </div>
                    </div>
                    <div className="flex justify-end space-x-3">
                      <button className="px-4 py-2 bg-indigo-900/50 border border-indigo-500/30 text-white rounded-lg hover:bg-indigo-800/50 transition-colors text-sm font-medium">
                        Decline
                      </button>
                      <button className="px-4 py-2 bg-[#EA3A70] text-white rounded-lg hover:bg-[#EA3A70]/90 transition-colors text-sm font-medium">
                        Approve Request
                      </button>
                    </div>
                  </div>)}
              </div> : <div className="bg-indigo-900/30 rounded-lg border border-indigo-500/30 p-8 text-center">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-indigo-900/50 rounded-full">
                    <ClockIcon className="h-8 w-8 text-indigo-300" />
                  </div>
                </div>
                <h4 className="text-white font-medium mb-2">
                  No Pending Requests
                </h4>
                <p className="text-indigo-300 text-sm mb-4">
                  You don't have any pending access requests at the moment.
                </p>
              </div>}
          </div>}
      </div>
    </div>;
}