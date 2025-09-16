import React from 'react';
import { LinkedinIcon, FacebookIcon, TwitterIcon, InstagramIcon, LinkIcon, AlertCircleIcon, CheckCircleIcon, BarChart2Icon } from 'lucide-react';
interface SocialAccount {
  platform: string;
  icon: React.ReactNode;
  status: 'connected' | 'disconnected';
  username?: string;
  followers?: number;
  engagement?: number;
  lastPost?: string;
}
export function SocialConnections() {
  const socialAccounts: SocialAccount[] = [{
    platform: 'LinkedIn',
    icon: <LinkedinIcon className="h-6 w-6 text-blue-600" />,
    status: 'connected',
    username: 'company-name',
    followers: 1250,
    engagement: 3.2,
    lastPost: '2 days ago'
  }, {
    platform: 'Facebook',
    icon: <FacebookIcon className="h-6 w-6 text-blue-500" />,
    status: 'connected',
    username: 'CompanyName',
    followers: 5430,
    engagement: 2.8,
    lastPost: '3 days ago'
  }, {
    platform: 'Twitter',
    icon: <TwitterIcon className="h-6 w-6 text-blue-400" />,
    status: 'disconnected'
  }, {
    platform: 'Instagram',
    icon: <InstagramIcon className="h-6 w-6 text-pink-600" />,
    status: 'disconnected'
  }];
  return <div className="space-y-6">
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <h2 className="text-lg font-medium text-gray-900 mb-6">
          Connected Accounts
        </h2>
        <div className="grid gap-6">
          {socialAccounts.map(account => <div key={account.platform} className="flex items-center justify-between border-b border-gray-200 pb-4 last:border-0 last:pb-0">
              <div className="flex items-center space-x-4">
                {account.icon}
                <div>
                  <h3 className="font-medium text-gray-900">
                    {account.platform}
                  </h3>
                  {account.status === 'connected' ? <p className="text-sm text-gray-500">@{account.username}</p> : <p className="text-sm text-gray-500">Not connected</p>}
                </div>
              </div>
              <div className="flex items-center space-x-4">
                {account.status === 'connected' ? <>
                    <div className="text-right mr-4">
                      <div className="text-sm font-medium text-gray-900">
                        {account.followers?.toLocaleString()} followers
                      </div>
                      <div className="text-sm text-gray-500">
                        {account.engagement}% engagement
                      </div>
                    </div>
                    <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 text-sm font-medium">
                      Manage
                    </button>
                  </> : <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 text-sm font-medium flex items-center">
                    <LinkIcon className="h-4 w-4 mr-2" />
                    Connect
                  </button>}
              </div>
            </div>)}
        </div>
      </div>
      {/* Analytics Overview */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-medium text-gray-900">
            Analytics Overview
          </h2>
          <button className="text-sm text-blue-600 hover:text-blue-800">
            View detailed reports
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gray-50 rounded-lg p-4">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-sm font-medium text-gray-900">
                Total Followers
              </h3>
              <BarChart2Icon className="h-5 w-5 text-blue-500" />
            </div>
            <p className="text-2xl font-bold text-gray-900">6,680</p>
            <p className="text-sm text-green-600">+12% this month</p>
          </div>
          <div className="bg-gray-50 rounded-lg p-4">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-sm font-medium text-gray-900">
                Average Engagement
              </h3>
              <BarChart2Icon className="h-5 w-5 text-green-500" />
            </div>
            <p className="text-2xl font-bold text-gray-900">3.0%</p>
            <p className="text-sm text-green-600">+0.5% this month</p>
          </div>
          <div className="bg-gray-50 rounded-lg p-4">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-sm font-medium text-gray-900">
                Posts This Month
              </h3>
              <BarChart2Icon className="h-5 w-5 text-purple-500" />
            </div>
            <p className="text-2xl font-bold text-gray-900">24</p>
            <p className="text-sm text-yellow-600">-2 vs last month</p>
          </div>
        </div>
      </div>
    </div>;
}