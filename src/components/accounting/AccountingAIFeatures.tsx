import React from 'react';
import { BrainCircuitIcon, ClockIcon, FileTextIcon, BarChart2Icon, CheckCircleIcon, ZapIcon, AlertCircleIcon, SearchIcon, CalendarIcon } from 'lucide-react';
export function AccountingAIFeatures() {
  const features = [{
    icon: <BrainCircuitIcon className="h-6 w-6 text-[#EA3A70]" />,
    title: 'AI-Powered Transaction Categorization',
    description: 'Our AI automatically categorizes your transactions with 99.2% accuracy, reducing manual bookkeeping by up to 90%.'
  }, {
    icon: <FileTextIcon className="h-6 w-6 text-[#EA3A70]" />,
    title: 'Intelligent Document Processing',
    description: 'Upload invoices and receipts in any format - our AI extracts, validates, and records all relevant data automatically.'
  }, {
    icon: <BarChart2Icon className="h-6 w-6 text-[#EA3A70]" />,
    title: 'Financial Statement Generation',
    description: 'Generate compliant financial statements with one click - our AI handles all the complex accounting logic for you.'
  }, {
    icon: <CalendarIcon className="h-6 w-6 text-[#EA3A70]" />,
    title: 'Smart Tax Calendar',
    description: 'Never miss a deadline with our AI-powered tax calendar that adapts to your business specifics and jurisdiction.'
  }, {
    icon: <AlertCircleIcon className="h-6 w-6 text-[#EA3A70]" />,
    title: 'Anomaly Detection',
    description: 'Our AI continuously monitors your financial data to detect errors, unusual patterns, and potential compliance issues.'
  }, {
    icon: <ZapIcon className="h-6 w-6 text-[#EA3A70]" />,
    title: 'Real-time Financial Insights',
    description: 'Get instant analysis of your financial position with AI-generated insights and recommendations.'
  }];
  return <div className="bg-[#1B1537]/80 backdrop-blur-sm rounded-xl border border-[#2D2755] p-6">
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center p-3 bg-indigo-900/50 rounded-lg border border-indigo-500/30 mb-4">
          <BrainCircuitIcon className="h-8 w-8 text-[#EA3A70]" />
        </div>
        <h3 className="text-2xl font-bold text-white">
          AI-Powered Accounting Module
        </h3>
        <p className="text-indigo-200 mt-2 max-w-2xl mx-auto">
          Our advanced AI technology revolutionizes your accounting workflow
          with automation and intelligent processing
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, index) => <div key={index} className="bg-indigo-900/30 backdrop-blur-sm rounded-lg border border-indigo-500/30 p-5 hover:border-[#EA3A70]/30 transition-all">
            <div className="p-2 bg-indigo-900/50 rounded-lg border border-indigo-500/30 mb-4 inline-block">
              {feature.icon}
            </div>
            <h4 className="text-lg font-bold text-white mb-2">
              {feature.title}
            </h4>
            <p className="text-indigo-200/80 text-sm">{feature.description}</p>
          </div>)}
      </div>
    </div>;
}