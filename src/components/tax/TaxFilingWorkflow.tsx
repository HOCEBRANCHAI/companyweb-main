import React, { useState } from 'react';
import { FileTextIcon, ArrowRightIcon, CheckCircleIcon, AlertCircleIcon, ClipboardIcon, CalendarIcon, EuroIcon, UploadIcon } from 'lucide-react';
import { VATReturnDemo } from './VATReturnDemo';
import { InternalReview } from './InternalReview';
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
export function TaxFilingWorkflow() {
  const [step, setStep] = useState(1);
  const [isComplete, setIsComplete] = useState(false);
  const [showDemo, setShowDemo] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setSelectedFile(event.target.files[0]);
    }
  };
  const steps = [{
    id: 1,
    title: 'Verify VAT Numbers',
    description: 'Confirm all transaction amounts and VAT calculations',
    icon: <CheckCircleIcon className="h-6 w-6" />
  }, {
    id: 2,
    title: 'Prepare Supporting Documents',
    description: 'Gather all required invoices and receipts',
    icon: <FileTextIcon className="h-6 w-6" />,
    action: () => {
      const fileInput = document.getElementById('document-upload');
      if (fileInput) {
        fileInput.click();
      }
    },
    actionText: 'Upload Documents',
    highlight: true
  }, {
    id: 3,
    title: 'Digital Signature Setup',
    description: 'Ensure your DigiD or eHerkenning is ready',
    icon: <ClipboardIcon className="h-6 w-6" />
  }, {
    id: 4,
    title: 'Complete VAT Form',
    description: 'Fill in the official VAT return form',
    icon: <FileTextIcon className="h-6 w-6" />,
    action: () => setShowDemo(true),
    actionText: 'View Form Demo',
    highlight: true
  }, {
    id: 5,
    title: 'Internal Review',
    description: 'Final check of all entered information',
    icon: <CheckCircleIcon className="h-6 w-6" />,
    action: () => handleNext()
  }, {
    id: 6,
    title: 'Submit Return',
    description: 'Official submission to tax authorities',
    icon: <ArrowRightIcon className="h-6 w-6" />
  }, {
    id: 7,
    title: 'Process Payment/Refund',
    description: 'Handle payment or track refund status',
    icon: <EuroIcon className="h-6 w-6" />
  }, {
    id: 8,
    title: 'Confirmation',
    description: 'Receive and verify submission confirmation',
    icon: <CheckCircleIcon className="h-6 w-6" />
  }, {
    id: 9,
    title: 'Record Keeping',
    description: 'Store all documents for future reference',
    icon: <FileTextIcon className="h-6 w-6" />
  }];
  const handleNext = () => {
    if (step < steps.length) {
      setStep(step + 1);
    } else {
      setIsComplete(true);
    }
  };
  const handlePrevious = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };
  return <div className="space-y-6">
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <h3 className="text-lg font-medium text-gray-900 mb-4">
          VAT Return Filing Process
        </h3>
        <div className="mb-8">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-gray-900">Progress</span>
            <span className="text-sm font-medium text-gray-900">
              {Math.round(step / steps.length * 100)}%
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div className="bg-blue-600 h-2 rounded-full transition-all duration-300" style={{
            width: `${step / steps.length * 100}%`
          }}></div>
          </div>
        </div>
        <div className="space-y-4 mb-6">
          {steps.map(s => <div key={s.id} className={`flex items-center p-4 rounded-lg ${s.id === step ? 'bg-blue-50 border border-blue-200' : s.id < step ? 'bg-gray-50 opacity-50' : 'bg-white border border-gray-200'}`}>
              <div className={`flex-shrink-0 ${s.id === step ? 'text-blue-600' : 'text-gray-400'}`}>
                {s.icon}
              </div>
              <div className="ml-4 flex-1">
                <p className={`text-sm font-medium ${s.id === step ? 'text-blue-900' : 'text-gray-900'}`}>
                  {s.title}
                </p>
                <p className={`text-sm ${s.id === step ? 'text-blue-600' : 'text-gray-500'}`}>
                  {s.description}
                </p>
                {s.id === 2 && selectedFile && <p className="text-xs text-green-600 mt-1">
                    Uploaded: {selectedFile.name}
                  </p>}
              </div>
              {s.id === step && s.action && <button onClick={s.action} className={`ml-4 px-3 py-1 flex items-center ${s.highlight ? 'bg-blue-600 text-white hover:bg-blue-700' : 'border border-blue-600 text-blue-600 hover:bg-blue-50'} rounded-md text-sm font-medium transition-colors duration-150`}>
                  {s.id === 2 && <UploadIcon className="h-4 w-4 mr-1" />}
                  {s.actionText}
                </button>}
              {s.id < step && <CheckCircleIcon className="h-5 w-5 text-green-500 ml-auto" />}
            </div>)}
        </div>
        <input id="document-upload" type="file" className="hidden" onChange={handleFileUpload} accept=".pdf,.jpg,.png,.xlsx,.doc,.docx" />
        <div className="flex justify-between">
          <button onClick={handlePrevious} disabled={step === 1} className={`px-4 py-2 text-sm font-medium rounded-md ${step === 1 ? 'bg-gray-100 text-gray-400 cursor-not-allowed' : 'bg-white border border-gray-300 text-gray-700 hover:bg-gray-50'}`}>
            Previous
          </button>
          <button onClick={handleNext} className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 text-sm font-medium">
            {step === steps.length ? 'Complete Filing' : 'Next Step'}
          </button>
        </div>
      </div>
      {showDemo && <VATReturnDemo onClose={() => setShowDemo(false)} />}
    </div>;
}