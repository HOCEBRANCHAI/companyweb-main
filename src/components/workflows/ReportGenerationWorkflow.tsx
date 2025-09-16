import React, { useState } from 'react';
import { ClipboardCheckIcon, UploadIcon, FileTextIcon, CheckCircleIcon, DatabaseIcon } from 'lucide-react';
import { DocumentChecklist } from './DocumentChecklist';
import { DocumentUpload } from './DocumentUpload';
import { FinancialReview } from './FinancialReview';
import { FinalApproval } from './FinalApproval';
import { DataValidation } from './DataValidation';
import { MultiCompanySelection } from '../financial/MultiCompanySelection';
interface ReportGenerationWorkflowProps {
  templateId: string;
  templateName: string;
  onClose: () => void;
}
interface WorkflowStep {
  id: number;
  title: string;
  description: string;
  status: 'pending' | 'in-progress' | 'completed' | 'error';
  icon: React.ReactNode;
}
export function ReportGenerationWorkflow({
  templateId,
  templateName,
  onClose
}: ReportGenerationWorkflowProps) {
  const [currentStep, setCurrentStep] = useState(1);
  const [dataValidated, setDataValidated] = useState(false);
  const [checklistComplete, setChecklistComplete] = useState(false);
  const [documentsUploaded, setDocumentsUploaded] = useState(false);
  const [financialReviewComplete, setFinancialReviewComplete] = useState(false);
  const [showCompanySelection, setShowCompanySelection] = useState(true);
  const [selectedCompanies, setSelectedCompanies] = useState<any[]>([]);
  const steps: WorkflowStep[] = [{
    id: 1,
    title: 'Data Validation',
    description: 'Verify financial data accuracy and completeness',
    status: dataValidated ? 'completed' : currentStep === 1 ? 'in-progress' : 'pending',
    icon: <DatabaseIcon className="h-6 w-6" />
  }, {
    id: 2,
    title: 'Document Checklist',
    description: 'Verify required documents for the report',
    status: checklistComplete ? 'completed' : currentStep === 2 ? 'in-progress' : 'pending',
    icon: <ClipboardCheckIcon className="h-6 w-6" />
  }, {
    id: 3,
    title: 'Upload Documents',
    description: 'Upload any additional required documents',
    status: documentsUploaded ? 'completed' : currentStep === 3 ? 'in-progress' : 'pending',
    icon: <UploadIcon className="h-6 w-6" />
  }, {
    id: 4,
    title: 'Financial Review',
    description: 'Review financial data and report structure',
    status: financialReviewComplete ? 'completed' : currentStep === 4 ? 'in-progress' : 'pending',
    icon: <FileTextIcon className="h-6 w-6" />
  }, {
    id: 5,
    title: 'Generate Report',
    description: 'Final approval and report generation',
    status: currentStep === 5 ? 'in-progress' : 'pending',
    icon: <CheckCircleIcon className="h-6 w-6" />
  }];
  const handleNextStep = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1);
    }
  };
  const handlePreviousStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };
  const handleCompanySelection = (companies: any[]) => {
    setSelectedCompanies(companies);
    setShowCompanySelection(false);
    setCurrentStep(1);
  };
  const renderStepContent = () => {
    if (showCompanySelection) {
      return <MultiCompanySelection onClose={onClose} onConfirm={handleCompanySelection} />;
    }
    switch (currentStep) {
      case 1:
        return <DataValidation templateId={templateId} templateName={templateName} selectedCompanies={selectedCompanies} onComplete={() => {
          setDataValidated(true);
          handleNextStep();
        }} />;
      case 2:
        return <DocumentChecklist onComplete={() => {
          setChecklistComplete(true);
          handleNextStep();
        }} />;
      case 3:
        return <DocumentUpload onComplete={() => {
          setDocumentsUploaded(true);
          handleNextStep();
        }} />;
      case 4:
        return <FinancialReview onComplete={() => {
          setFinancialReviewComplete(true);
          handleNextStep();
        }} />;
      case 5:
        return <FinalApproval onComplete={() => {
          console.log(`${templateName} report generation completed`);
          onClose();
        }} />;
      default:
        return null;
    }
  };
  return <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-xl max-w-4xl w-full m-4">
        <div className="p-4 border-b border-gray-200">
          <h2 className="text-xl font-semibold text-gray-900">
            Generate {templateName}
          </h2>
        </div>
        <div className="p-6">
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
              {currentStep === 1 ? <button onClick={onClose} className="px-4 py-2 text-sm font-medium rounded-md bg-white border border-gray-300 text-gray-700 hover:bg-gray-50">
                  Cancel
                </button> : <button onClick={handlePreviousStep} className="px-4 py-2 text-sm font-medium rounded-md bg-white border border-gray-300 text-gray-700 hover:bg-gray-50">
                  Previous
                </button>}
              {currentStep < steps.length && <button onClick={handleNextStep} className="px-4 py-2 text-sm font-medium rounded-md bg-blue-600 text-white hover:bg-blue-700">
                  Next
                </button>}
            </div>
          </div>
        </div>
      </div>
    </div>;
}