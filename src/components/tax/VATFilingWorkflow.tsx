import React, { useState } from 'react';
import { FileTextIcon, ArrowRightIcon, CheckCircleIcon, AlertCircleIcon, ClipboardIcon, CalendarIcon } from 'lucide-react';
interface TaxItem {
  id: string;
  title: string;
  dueDate: string;
  type: string;
  status: string;
}
interface VATData {
  accountDetails: {
    holder: string;
    kvkNumber: string;
    iban: string;
  };
  summary: {
    totalExpenses: number;
    totalExpensesVAT: number;
    totalIncome: number;
    totalIncomeVAT: number;
    netVATPosition: number;
  };
}
export function VATFilingWorkflow() {
  const [currentStep, setCurrentStep] = useState<'selection' | 'analysis' | 'filing'>('selection');
  const [selectedItem, setSelectedItem] = useState<TaxItem | null>(null);
  const [analysisApproved, setAnalysisApproved] = useState(false);
  const taxItems: TaxItem[] = [{
    id: '1',
    title: 'Q3 VAT Return 2024',
    dueDate: '2024-03-15',
    type: 'VAT',
    status: 'pending'
  }, {
    id: '2',
    title: 'Annual Corporate Tax 2023',
    dueDate: '2024-07-01',
    type: 'Corporate Tax',
    status: 'upcoming'
  }];
  const vatData: VATData = {
    accountDetails: {
      holder: 'Stichting V.F.F.V.',
      kvkNumber: '62871676',
      iban: 'NL38 BUNQ 2208 0966 14'
    },
    summary: {
      totalExpenses: 23032.07,
      totalExpensesVAT: 3577.8,
      totalIncome: 18778.05,
      totalIncomeVAT: 3258.74,
      netVATPosition: -319.06
    }
  };
  const handleSelectItem = (item: TaxItem) => {
    setSelectedItem(item);
    setCurrentStep('analysis');
  };
  const handleApproveAnalysis = () => {
    setAnalysisApproved(true);
    setCurrentStep('filing');
  };
  const renderSelection = () => <div className="space-y-6">
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <h3 className="text-lg font-medium text-gray-900 mb-4">
          Select Tax Filing
        </h3>
        <div className="space-y-4">
          {taxItems.filter(item => item.type === 'VAT').map(item => <div key={item.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 cursor-pointer" onClick={() => handleSelectItem(item)}>
                <div className="flex items-center space-x-3">
                  <CalendarIcon className="h-5 w-5 text-blue-600" />
                  <div>
                    <p className="font-medium text-gray-900">{item.title}</p>
                    <p className="text-sm text-gray-500">Due: {item.dueDate}</p>
                  </div>
                </div>
                <ArrowRightIcon className="h-5 w-5 text-gray-400" />
              </div>)}
        </div>
      </div>
    </div>;
  const renderAnalysis = () => <div className="space-y-6">
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <h3 className="text-lg font-medium text-gray-900 mb-4">VAT Analysis</h3>
        <div className="mb-6">
          <h4 className="text-sm font-medium text-gray-700 mb-2">
            Account Details
          </h4>
          <div className="bg-gray-50 p-4 rounded-lg">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-gray-600">Account Holder</p>
                <p className="font-medium">{vatData.accountDetails.holder}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">KvK Number</p>
                <p className="font-medium">
                  {vatData.accountDetails.kvkNumber}
                </p>
              </div>
              <div className="col-span-2">
                <p className="text-sm text-gray-600">IBAN</p>
                <p className="font-medium">{vatData.accountDetails.iban}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="mb-6">
          <h4 className="text-sm font-medium text-gray-700 mb-2">
            VAT Summary
          </h4>
          <div className="bg-gray-50 p-4 rounded-lg">
            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="text-gray-600">Total Expenses</span>
                <span className="font-medium">
                  €{vatData.summary.totalExpenses.toFixed(2)}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">VAT on Expenses</span>
                <span className="font-medium">
                  €{vatData.summary.totalExpensesVAT.toFixed(2)}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Total Income</span>
                <span className="font-medium">
                  €{vatData.summary.totalIncome.toFixed(2)}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">VAT on Income</span>
                <span className="font-medium">
                  €{vatData.summary.totalIncomeVAT.toFixed(2)}
                </span>
              </div>
              <div className="pt-4 border-t border-gray-200">
                <div className="flex justify-between text-lg">
                  <span className="font-medium">Net VAT Position</span>
                  <span className="font-bold text-blue-600">
                    €{vatData.summary.netVATPosition.toFixed(2)}
                  </span>
                </div>
                <p className="text-sm text-gray-500 mt-2">
                  You are eligible for a VAT refund
                </p>
              </div>
            </div>
          </div>
        </div>
        <button onClick={handleApproveAnalysis} className="w-full py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700">
          Approve Analysis & Continue to Filing
        </button>
      </div>
    </div>;
  const renderContent = () => {
    switch (currentStep) {
      case 'selection':
        return renderSelection();
      case 'analysis':
        return renderAnalysis();
      case 'filing':
        return <TaxFilingWorkflow />;
      default:
        return null;
    }
  };
  return <div className="max-w-4xl mx-auto">{renderContent()}</div>;
}