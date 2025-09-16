import React, { useState } from 'react';
import { ClipboardCheckIcon, UploadIcon, FileTextIcon, CheckCircleIcon } from 'lucide-react';
import { DocumentChecklist } from './DocumentChecklist';
import { DocumentUpload } from './DocumentUpload';
import { FinancialReview } from './FinancialReview';
import { FinalApproval } from './FinalApproval';
interface WorkflowStep {
  id: number;
  title: string;
  description: string;
  status: 'pending' | 'in-progress' | 'completed' | 'error';
  icon: React.ReactNode;
}
export function AnnualReportWorkflow() {
  const [currentStep, setCurrentStep] = useState(1);
  const [checklistComplete, setChecklistComplete] = useState(false);
  const [documentsUploaded, setDocumentsUploaded] = useState(false);
  const [financialReviewComplete, setFinancialReviewComplete] = useState(false);
  const steps: WorkflowStep[] = [{
    id: 1,
    title: 'Document Checklist',
    description: 'Verify required documents based on Dutch requirements',
    status: checklistComplete ? 'completed' : currentStep === 1 ? 'in-progress' : 'pending',
    icon: <ClipboardCheckIcon className="h-6 w-6" />
  }, {
    id: 2,
    title: 'Upload Documents',
    description: 'Upload all required financial documents',
    status: documentsUploaded ? 'completed' : currentStep === 2 ? 'in-progress' : 'pending',
    icon: <UploadIcon className="h-6 w-6" />
  }, {
    id: 3,
    title: 'Financial Review',
    description: 'Review financial statements and supporting documents',
    status: financialReviewComplete ? 'completed' : currentStep === 3 ? 'in-progress' : 'pending',
    icon: <FileTextIcon className="h-6 w-6" />
  }, {
    id: 4,
    title: 'Generate Report',
    description: 'Final approval and annual report generation',
    status: currentStep === 4 ? 'in-progress' : 'pending',
    icon: <CheckCircleIcon className="h-6 w-6" />
  }];
  const isCurrentStepComplete = () => {
    switch (currentStep) {
      case 1:
        return checklistComplete;
      case 2:
        return documentsUploaded;
      case 3:
        return financialReviewComplete;
      case 4:
        return false;
      default:
        return false;
    }
  };
  const handleNextStep = () => {
    if (currentStep < steps.length && isCurrentStepComplete()) {
      setCurrentStep(currentStep + 1);
    }
  };
  const handlePreviousStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };
  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return <DocumentChecklist onComplete={() => {
          setChecklistComplete(true);
          handleNextStep();
        }} />;
      case 2:
        return <DocumentUpload onComplete={() => {
          setDocumentsUploaded(true);
          handleNextStep();
        }} />;
      case 3:
        return <FinancialReview onComplete={() => {
          setFinancialReviewComplete(true);
          handleNextStep();
        }} />;
      case 4:
        return <FinalApproval onComplete={() => {
          console.log('Annual report workflow completed');
        }} />;
      default:
        return null;
    }
  };
  return <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          {steps.map((step, index) => <div key={step.id} className="flex items-center">
              <div className={`flex flex-col items-center ${index < steps.length - 1 ? 'w-full' : ''}`}>
                <div className={`flex items-center justify-center w-10 h-10 rounded-full border-2 
                  ${step.status === 'completed' ? 'bg-green-100 border-green-500 text-green-600' : step.status === 'in-progress' ? 'bg-blue-100 border-blue-500 text-blue-600' : 'bg-gray-100 border-gray-300 text-gray-500'}`}>
                  {step.icon}
                </div>
                <div className="text-xs mt-2 text-center">{step.title}</div>
                {index < steps.length - 1 && <div className={`h-0.5 w-full mt-5 
                    ${step.status === 'completed' ? 'bg-green-500' : 'bg-gray-300'}`} />}
              </div>
            </div>)}
        </div>
      </div>
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <div className="mb-6">
          <h3 className="text-lg font-medium text-gray-900">
            {steps[currentStep - 1].title}
          </h3>
          <p className="text-sm text-gray-500 mt-1">
            {steps[currentStep - 1].description}
          </p>
        </div>
        {renderStepContent()}
        <div className="mt-6 flex justify-between">
          <button onClick={handlePreviousStep} disabled={currentStep === 1} className={`px-4 py-2 text-sm font-medium rounded-md 
              ${currentStep === 1 ? 'bg-gray-100 text-gray-400 cursor-not-allowed' : 'bg-white border border-gray-300 text-gray-700 hover:bg-gray-50'}`}>
            Previous
          </button>
          {currentStep === steps.length ? <button onClick={() => console.log('Annual report workflow completed')} className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 text-sm font-medium">
              Complete Report
            </button> : <button onClick={handleNextStep} disabled={!isCurrentStepComplete()} className={`px-4 py-2 text-sm font-medium rounded-md 
                ${isCurrentStepComplete() ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-gray-100 text-gray-400 cursor-not-allowed'}`}>
              Next
            </button>}
        </div>
      </div>
    </div>;
}