import React from 'react';
import { FileTextIcon, BarChart2Icon, PieChartIcon, TrendingUpIcon, LineChartIcon, ArrowRightIcon, CheckCircleIcon, XIcon, ClockIcon } from 'lucide-react';
import { ReportGenerationWorkflow } from '../workflows/ReportGenerationWorkflow';
interface ReportTemplatesProps {
  onClose: () => void;
  onSelectTemplate: (templateId: string) => void;
}
export function ReportTemplates({
  onClose,
  onSelectTemplate
}: ReportTemplatesProps) {
  const templates = [{
    id: 'balance-sheet',
    title: 'Balance Sheet',
    description: 'Overview of assets, liabilities, and equity',
    icon: <BarChart2Icon className="h-6 w-6 text-blue-500" />,
    category: 'Financial Statement',
    estimatedTime: '10-15 minutes',
    aiFeatures: ['Automated asset categorization', 'Liability verification', 'Equity calculation']
  }, {
    id: 'income-statement',
    title: 'Income Statement',
    description: 'Revenue, expenses, and profit analysis',
    icon: <TrendingUpIcon className="h-6 w-6 text-green-500" />,
    category: 'Financial Statement',
    estimatedTime: '10-15 minutes',
    aiFeatures: ['Revenue recognition', 'Expense classification', 'Profit calculation']
  }, {
    id: 'cash-flow',
    title: 'Cash Flow Statement',
    description: 'Track cash movements within your business',
    icon: <LineChartIcon className="h-6 w-6 text-purple-500" />,
    category: 'Financial Statement',
    estimatedTime: '15-20 minutes',
    aiFeatures: ['Operating activities analysis', 'Investment tracking', 'Financing activities breakdown']
  }, {
    id: 'tax-report',
    title: 'Tax Report',
    description: 'Prepare for tax filing with detailed breakdown',
    icon: <FileTextIcon className="h-6 w-6 text-orange-500" />,
    category: 'Compliance',
    estimatedTime: '20-30 minutes',
    aiFeatures: ['Tax liability calculation', 'Deduction optimization', 'Compliance verification']
  }, {
    id: 'expense-analysis',
    title: 'Expense Analysis',
    description: 'Detailed breakdown of business expenses',
    icon: <PieChartIcon className="h-6 w-6 text-red-500" />,
    category: 'Analysis',
    estimatedTime: '10-15 minutes',
    aiFeatures: ['Category-based expense analysis', 'Trend identification', 'Cost-saving recommendations']
  }, {
    id: 'annual-report',
    title: 'Annual Report',
    description: 'Comprehensive yearly financial overview',
    icon: <FileTextIcon className="h-6 w-6 text-blue-600" />,
    category: 'Compliance',
    estimatedTime: '30-45 minutes',
    aiFeatures: ['Financial statement compilation', 'Performance analysis', 'Business outlook generation']
  }];
  return <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-xl max-w-6xl w-full m-4">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <h2 className="text-xl font-semibold text-gray-900">
            Select Report Template
          </h2>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-500">
            <XIcon className="h-6 w-6" />
          </button>
        </div>
        {/* Templates Grid */}
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {templates.map(template => <div key={template.id} className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center">
                      {template.icon}
                      <h3 className="text-lg font-medium text-gray-900 ml-2">
                        {template.title}
                      </h3>
                    </div>
                    <p className="text-sm text-gray-500 mt-2">
                      {template.description}
                    </p>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800 mt-2">
                      {template.category}
                    </span>
                  </div>
                </div>
                <div className="mt-4 space-y-3">
                  <div className="flex items-center text-sm text-gray-500">
                    <ClockIcon className="h-4 w-4 mr-2" />
                    Estimated time: {template.estimatedTime}
                  </div>
                  <div className="border-t border-gray-200 pt-3 mt-3">
                    <h4 className="text-sm font-medium text-gray-900 mb-2">
                      AI Features
                    </h4>
                    <ul className="space-y-2">
                      {template.aiFeatures.map((feature, index) => <li key={index} className="flex items-center text-sm text-gray-600">
                          <CheckCircleIcon className="h-4 w-4 text-green-500 mr-2" />
                          {feature}
                        </li>)}
                    </ul>
                  </div>
                </div>
                <button onClick={() => onSelectTemplate(template.id)} className="mt-4 w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 text-sm font-medium flex items-center justify-center">
                  Generate Report
                  <ArrowRightIcon className="ml-2 h-4 w-4" />
                </button>
              </div>)}
          </div>
        </div>
      </div>
    </div>;
}