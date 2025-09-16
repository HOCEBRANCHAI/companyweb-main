import React from 'react';
import { AlertTriangleIcon, CheckCircleIcon, TrendingUpIcon, ShieldIcon, LightbulbIcon } from 'lucide-react';
interface StructureAnalysisProps {
  companies: any[];
  relationships: any[];
}
export function StructureAnalysis({
  companies,
  relationships
}: StructureAnalysisProps) {
  const insights = [{
    type: 'optimization',
    title: 'Structure Optimization',
    description: 'Consider consolidating subsidiaries for tax efficiency',
    icon: <TrendingUpIcon className="h-5 w-5 text-blue-500" />
  }, {
    type: 'risk',
    title: 'Risk Assessment',
    description: 'Direct ownership structure may increase liability exposure',
    icon: <AlertTriangleIcon className="h-5 w-5 text-yellow-500" />
  }, {
    type: 'compliance',
    title: 'Compliance Status',
    description: 'All entity relationships properly documented',
    icon: <CheckCircleIcon className="h-5 w-5 text-green-500" />
  }];
  return <div className="space-y-6">
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <h3 className="text-lg font-medium text-gray-900 mb-4">
          Structure Analysis
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="border border-blue-100 bg-blue-50 rounded-lg p-4">
            <div className="flex items-center space-x-2 mb-2">
              <ShieldIcon className="h-5 w-5 text-blue-600" />
              <span className="font-medium text-blue-900">
                Structure Health Score
              </span>
            </div>
            <div className="text-2xl font-bold text-blue-600">85%</div>
            <div className="text-sm text-blue-700 mt-1">Good Standing</div>
          </div>
          <div className="border border-green-100 bg-green-50 rounded-lg p-4">
            <div className="flex items-center space-x-2 mb-2">
              <CheckCircleIcon className="h-5 w-5 text-green-600" />
              <span className="font-medium text-green-900">
                Compliance Status
              </span>
            </div>
            <div className="text-2xl font-bold text-green-600">
              {companies.length}
            </div>
            <div className="text-sm text-green-700 mt-1">
              Entities in Compliance
            </div>
          </div>
          <div className="border border-purple-100 bg-purple-50 rounded-lg p-4">
            <div className="flex items-center space-x-2 mb-2">
              <TrendingUpIcon className="h-5 w-5 text-purple-600" />
              <span className="font-medium text-purple-900">
                Relationship Count
              </span>
            </div>
            <div className="text-2xl font-bold text-purple-600">
              {relationships.length}
            </div>
            <div className="text-sm text-purple-700 mt-1">Active Relations</div>
          </div>
        </div>
      </div>
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <h3 className="text-lg font-medium text-gray-900 mb-4">
          Insights & Recommendations
        </h3>
        <div className="space-y-4">
          {insights.map((insight, index) => <div key={index} className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg">
              {insight.icon}
              <div>
                <h4 className="font-medium text-gray-900">{insight.title}</h4>
                <p className="text-sm text-gray-600">{insight.description}</p>
              </div>
            </div>)}
        </div>
      </div>
      <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg p-6 text-white">
        <div className="flex items-center space-x-3 mb-4">
          <LightbulbIcon className="h-6 w-6" />
          <h3 className="text-lg font-medium">Optimization Opportunity</h3>
        </div>
        <p className="text-blue-100 mb-4">
          Our analysis suggests potential for tax optimization through
          restructuring. Would you like to speak with a tax advisor?
        </p>
        <button className="bg-white text-blue-600 px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-50">
          Schedule Consultation
        </button>
      </div>
    </div>;
}