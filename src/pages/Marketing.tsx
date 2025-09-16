import React, { useState } from 'react';
import { LayoutDashboardIcon, BarChart2Icon, GlobeIcon, ShareIcon } from 'lucide-react';
import { ContentGenerator } from '../components/marketing/ContentGenerator';
import { SocialConnections } from '../components/marketing/SocialConnections';
import { GoogleMyBusiness } from '../components/marketing/GoogleMyBusiness';
import { PageHeader } from '../components/common/PageHeader';
export function Marketing() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const menuItems = [{
    label: 'Dashboard',
    active: activeTab === 'dashboard',
    onClick: () => setActiveTab('dashboard')
  }, {
    label: 'Content',
    active: activeTab === 'content',
    onClick: () => setActiveTab('content')
  }, {
    label: 'Social',
    active: activeTab === 'social',
    onClick: () => setActiveTab('social')
  }, {
    label: 'Analytics',
    active: activeTab === 'analytics',
    onClick: () => setActiveTab('analytics')
  }, {
    label: 'Local SEO',
    active: activeTab === 'local',
    onClick: () => setActiveTab('local')
  }];
  const renderContent = () => {
    switch (activeTab) {
      case 'content':
        return <ContentGenerator />;
      case 'social':
        return <SocialConnections />;
      case 'local':
        return <GoogleMyBusiness />;
      case 'analytics':
        return <div className="bg-indigo-800/20 backdrop-blur-md rounded-xl border border-indigo-500/20 p-5 mb-6">
            <h3 className="text-lg font-medium text-white mb-4">Analytics</h3>
            <p className="text-indigo-200 mb-6">
              Track your marketing performance and ROI across all channels.
            </p>
            <div className="flex items-center justify-center h-64 bg-indigo-800/30 rounded-xl border border-indigo-500/20">
              <p className="text-indigo-300">Analytics dashboard coming soon</p>
            </div>
          </div>;
      default:
        return <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-indigo-800/20 backdrop-blur-md rounded-xl border border-indigo-500/20 p-5">
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-indigo-900/50 rounded-xl mr-3">
                    <LayoutDashboardIcon className="h-6 w-6 text-indigo-300" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-white">Content</h3>
                    <p className="text-sm text-indigo-300">
                      Create and manage content
                    </p>
                  </div>
                </div>
                <button onClick={() => setActiveTab('content')} className="w-full px-4 py-2 bg-indigo-900/50 border border-indigo-500/30 rounded-xl text-white hover:bg-indigo-800/50 transition-colors">
                  Go to Content
                </button>
              </div>
              <div className="bg-indigo-800/20 backdrop-blur-md rounded-xl border border-indigo-500/20 p-5">
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-indigo-900/50 rounded-xl mr-3">
                    <ShareIcon className="h-6 w-6 text-indigo-300" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-white">Social</h3>
                    <p className="text-sm text-indigo-300">
                      Manage social accounts
                    </p>
                  </div>
                </div>
                <button onClick={() => setActiveTab('social')} className="w-full px-4 py-2 bg-indigo-900/50 border border-indigo-500/30 rounded-xl text-white hover:bg-indigo-800/50 transition-colors">
                  Go to Social
                </button>
              </div>
              <div className="bg-indigo-800/20 backdrop-blur-md rounded-xl border border-indigo-500/20 p-5">
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-indigo-900/50 rounded-xl mr-3">
                    <GlobeIcon className="h-6 w-6 text-indigo-300" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-white">
                      Local SEO
                    </h3>
                    <p className="text-sm text-indigo-300">
                      Manage local presence
                    </p>
                  </div>
                </div>
                <button onClick={() => setActiveTab('local')} className="w-full px-4 py-2 bg-indigo-900/50 border border-indigo-500/30 rounded-xl text-white hover:bg-indigo-800/50 transition-colors">
                  Go to Local SEO
                </button>
              </div>
            </div>
            <div className="bg-indigo-800/20 backdrop-blur-md rounded-xl border border-indigo-500/20 p-5">
              <div className="flex items-center mb-4">
                <div className="p-3 bg-indigo-900/50 rounded-xl mr-3">
                  <BarChart2Icon className="h-6 w-6 text-indigo-300" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-white">
                    Performance Overview
                  </h3>
                  <p className="text-sm text-indigo-300">
                    Key marketing metrics
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                <div className="bg-indigo-900/30 rounded-lg p-4">
                  <h4 className="text-indigo-200 text-sm mb-1">
                    Website Visitors
                  </h4>
                  <p className="text-2xl font-bold text-white">2,456</p>
                  <p className="text-xs text-green-300">+12% from last month</p>
                </div>
                <div className="bg-indigo-900/30 rounded-lg p-4">
                  <h4 className="text-indigo-200 text-sm mb-1">
                    Social Followers
                  </h4>
                  <p className="text-2xl font-bold text-white">6,789</p>
                  <p className="text-xs text-green-300">+8% from last month</p>
                </div>
                <div className="bg-indigo-900/30 rounded-lg p-4">
                  <h4 className="text-indigo-200 text-sm mb-1">
                    Leads Generated
                  </h4>
                  <p className="text-2xl font-bold text-white">143</p>
                  <p className="text-xs text-green-300">+5% from last month</p>
                </div>
              </div>
              <button onClick={() => setActiveTab('analytics')} className="w-full px-4 py-2 bg-[#EA3A70] text-white rounded-xl hover:bg-[#EA3A70]/90 transition-colors">
                View Detailed Analytics
              </button>
            </div>
          </div>;
    }
  };
  return <div className="min-h-screen bg-[#0A0826] text-white">
      <div className="container mx-auto px-4 py-8">
        <PageHeader title="Marketing" subtitle="Private Limited Company • Active" icon={<LayoutDashboardIcon className="h-8 w-8 text-indigo-300" />} menuItems={menuItems} onEditClick={() => console.log('Edit clicked')} />
        {renderContent()}
      </div>
    </div>;
}