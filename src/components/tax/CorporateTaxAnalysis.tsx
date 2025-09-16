import React, { useState } from 'react';
import { FileTextIcon, ArrowRightIcon, CheckCircleIcon, AlertCircleIcon, ClipboardIcon, CalendarIcon, EuroIcon, UploadIcon, DownloadIcon, CheckIcon, XIcon, EyeIcon } from 'lucide-react';
import { SimpleImage } from '../common/SimpleImage';
import { Link } from 'react-router-dom';
import { CorporateTaxFilingWorkflow } from './CorporateTaxFilingWorkflow';
interface AnalysisStep {
  id: number;
  title: string;
  description: string;
  status: 'pending' | 'in-progress' | 'completed';
  icon: React.ReactNode;
}
export function CorporateTaxAnalysis() {
  const [currentStep, setCurrentStep] = useState(1);
  const [approved, setApproved] = useState(false);
  const [showReviewNotes, setShowReviewNotes] = useState(false);
  const [reviewNotes, setReviewNotes] = useState('');
  const [showCorporateTaxFiling, setShowCorporateTaxFiling] = useState(false);
  const steps: AnalysisStep[] = [{
    id: 1,
    title: 'Review CIT Analysis',
    description: 'Review the Corporate Income Tax analysis document',
    status: currentStep === 1 ? 'in-progress' : currentStep > 1 ? 'completed' : 'pending',
    icon: <FileTextIcon className="h-6 w-6" />
  }, {
    id: 2,
    title: 'Approve Analysis',
    description: 'Approve the tax analysis or request changes',
    status: currentStep === 2 ? 'in-progress' : currentStep > 2 ? 'completed' : 'pending',
    icon: <CheckCircleIcon className="h-6 w-6" />
  }, {
    id: 3,
    title: 'Prepare Documents',
    description: 'Gather supporting documents for CIT filing',
    status: currentStep === 3 ? 'in-progress' : currentStep > 3 ? 'completed' : 'pending',
    icon: <ClipboardIcon className="h-6 w-6" />
  }, {
    id: 4,
    title: 'Submit CIT Return',
    description: 'Submit the Corporate Income Tax return',
    status: currentStep === 4 ? 'in-progress' : 'pending',
    icon: <ArrowRightIcon className="h-6 w-6" />
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
  const renderAnalysisDocument = () => <div className="space-y-6">
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-4">
          Dutch Corporate Income Tax Analysis 2024 - Stichting V.F.F.V.
        </h3>
        <div className="space-y-8">
          <div>
            <h4 className="text-lg font-semibold text-gray-800 mb-2">
              Account Overview
            </h4>
            <ul className="list-disc pl-5 space-y-1">
              <li>Account Holder: Stichting V.F.F.V.</li>
              <li>KvK Number: 62871676</li>
              <li>IBAN: NL38 BUNQ 2208 0966 14</li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-gray-800 mb-2">
              Introduction
            </h4>
            <p className="text-gray-700">
              Welcome to your streamlined Dutch Corporate Income Tax (CIT)
              analysis for 2024. At House of Companies, we're committed to
              empowering you with clear, actionable insights to optimize your
              tax position and drive your business forward.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <SimpleImage imageName="Dutch_Corporate_Income_Tax_Analysis_2024_-_Stichting_V_1.jpg" alt="CIT Analysis Page 1" className="rounded-lg border border-gray-200" />
            </div>
            <div>
              <SimpleImage imageName="Dutch_Corporate_Income_Tax_Analysis_2024_-_Stichting_V_2.jpg" alt="CIT Analysis Page 2" className="rounded-lg border border-gray-200" />
            </div>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-gray-800 mb-2">
              Key Considerations
            </h4>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <span className="font-medium">Tax Rate:</span> The standard
                Dutch CIT rate for 2024 is 25.8% for profits exceeding €395,000,
                and 19% for profits up to €395,000.
              </li>
              <li>
                <span className="font-medium">Deductions:</span> Ensure all
                business-related expenses are properly documented to maximize
                your deductions.
              </li>
              <li>
                <span className="font-medium">Innovation Box:</span> If your
                foundation engages in innovative activities, you may qualify for
                a reduced effective tax rate of 9% on income from these
                activities.
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-gray-800 mb-2">
              Next Steps
            </h4>
            <ol className="list-decimal pl-5 space-y-2">
              <li>
                Upload your complete financial records to our secure platform.
              </li>
              <li>
                Our AI-powered system will analyze your data and generate
                preliminary CIT calculations.
              </li>
              <li>
                Our team of tax experts will review the analysis and provide
                tailored recommendations.
              </li>
              <li>
                You'll receive a comprehensive CIT report and strategy, all
                without the need for traditional accounting overhead.
              </li>
            </ol>
          </div>
        </div>
        <div className="mt-8 flex justify-end">
          <button onClick={() => window.open("/Dutch_Corporate_Income_Tax_Analysis_2024_-_Stichting_V_3.jpg", '_blank')} className="flex items-center text-blue-600 hover:text-blue-800">
            <DownloadIcon className="h-4 w-4 mr-2" />
            Download Full Analysis
          </button>
        </div>
      </div>
      <div className="flex justify-between">
        <Link to="/taxes">
          <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 text-sm font-medium">
            Back to Tax Overview
          </button>
        </Link>
        <button onClick={handleNextStep} className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 text-sm font-medium">
          Continue to Approval
        </button>
      </div>
    </div>;
  const renderApprovalStep = () => <div className="space-y-6">
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <h3 className="text-lg font-medium text-gray-900 mb-4">
          Approve Corporate Income Tax Analysis
        </h3>
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
          <div className="flex items-start">
            <AlertCircleIcon className="h-5 w-5 text-yellow-600 mr-2 flex-shrink-0 mt-0.5" />
            <p className="text-sm text-yellow-700">
              Please review the tax analysis carefully. Your approval will
              initiate the preparation process for your Corporate Income Tax
              filing.
            </p>
          </div>
        </div>
        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
            <div className="flex items-center">
              <FileTextIcon className="h-5 w-5 text-gray-400 mr-3" />
              <div>
                <p className="font-medium text-gray-900">
                  Dutch Corporate Income Tax Analysis 2024
                </p>
                <p className="text-sm text-gray-500">For Stichting V.F.F.V.</p>
              </div>
            </div>
            <button onClick={() => window.open("/Dutch_Corporate_Income_Tax_Analysis_2024_-_Stichting_V_3.jpg", '_blank')} className="text-blue-600 hover:text-blue-800">
              <EyeIcon className="h-5 w-5" />
            </button>
          </div>
          <div className="border-t border-gray-200 pt-4">
            <div className="flex items-start space-x-3">
              <input type="checkbox" checked={approved} onChange={() => setApproved(!approved)} className="mt-1 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
              <div>
                <p className="text-sm font-medium text-gray-900">
                  I approve this tax analysis and confirm that the information
                  appears accurate to the best of my knowledge
                </p>
                <p className="text-xs text-gray-500 mt-1">
                  By checking this box, you acknowledge that you have reviewed
                  the tax analysis and are ready to proceed with CIT
                  preparation.
                </p>
              </div>
            </div>
          </div>
          <div className="mt-6">
            <button onClick={() => setShowReviewNotes(!showReviewNotes)} className="text-blue-600 hover:text-blue-800 text-sm">
              {showReviewNotes ? 'Hide review notes' : 'Add review notes (optional)'}
            </button>
            {showReviewNotes && <textarea value={reviewNotes} onChange={e => setReviewNotes(e.target.value)} className="mt-2 w-full px-3 py-2 border border-gray-300 rounded-md" rows={4} placeholder="Add any notes or questions about the tax analysis..." />}
          </div>
        </div>
      </div>
      <div className="flex justify-between">
        <button onClick={handlePreviousStep} className="px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 text-sm font-medium">
          Back to Analysis
        </button>
        <button onClick={handleNextStep} disabled={!approved} className={`px-4 py-2 rounded-md text-sm font-medium ${approved ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-gray-200 text-gray-400 cursor-not-allowed'}`}>
          Approve & Continue
        </button>
      </div>
    </div>;
  const renderDocumentPreparation = () => <div className="space-y-6">
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <h3 className="text-lg font-medium text-gray-900 mb-4">
          Prepare Supporting Documents
        </h3>
        <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
          <div className="flex items-start">
            <CheckCircleIcon className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
            <p className="text-sm text-green-700">
              Your tax analysis has been approved. Now, let's gather all the
              necessary supporting documents for your CIT filing.
            </p>
          </div>
        </div>
        <div className="space-y-4">
          <h4 className="text-md font-medium text-gray-800">
            Required Documents
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center">
                  <FileTextIcon className="h-5 w-5 text-blue-600 mr-2" />
                  <p className="font-medium text-gray-900">
                    Financial Statements
                  </p>
                </div>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                  Required
                </span>
              </div>
              <p className="text-sm text-gray-500">
                Balance sheet and profit & loss statement for the tax year
              </p>
              <button className="mt-2 flex items-center text-blue-600 hover:text-blue-800 text-sm">
                <UploadIcon className="h-4 w-4 mr-1" />
                Upload
              </button>
            </div>
            <div className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center">
                  <FileTextIcon className="h-5 w-5 text-blue-600 mr-2" />
                  <p className="font-medium text-gray-900">General Ledger</p>
                </div>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                  Required
                </span>
              </div>
              <p className="text-sm text-gray-500">
                Detailed record of all financial transactions
              </p>
              <button className="mt-2 flex items-center text-blue-600 hover:text-blue-800 text-sm">
                <UploadIcon className="h-4 w-4 mr-1" />
                Upload
              </button>
            </div>
            <div className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center">
                  <FileTextIcon className="h-5 w-5 text-blue-600 mr-2" />
                  <p className="font-medium text-gray-900">
                    Expense Documentation
                  </p>
                </div>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                  Required
                </span>
              </div>
              <p className="text-sm text-gray-500">
                Invoices and receipts for business expenses
              </p>
              <button className="mt-2 flex items-center text-blue-600 hover:text-blue-800 text-sm">
                <UploadIcon className="h-4 w-4 mr-1" />
                Upload
              </button>
            </div>
            <div className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center">
                  <FileTextIcon className="h-5 w-5 text-blue-600 mr-2" />
                  <p className="font-medium text-gray-900">
                    Prior Year Tax Return
                  </p>
                </div>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                  Optional
                </span>
              </div>
              <p className="text-sm text-gray-500">
                Previous year's CIT return for reference
              </p>
              <button className="mt-2 flex items-center text-blue-600 hover:text-blue-800 text-sm">
                <UploadIcon className="h-4 w-4 mr-1" />
                Upload
              </button>
            </div>
          </div>
          <div className="mt-6 border-t border-gray-200 pt-6">
            <h4 className="text-md font-medium text-gray-800 mb-2">
              Bulk Upload
            </h4>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-blue-500 cursor-pointer">
              <UploadIcon className="h-8 w-8 text-gray-400 mx-auto mb-2" />
              <p className="text-sm font-medium text-gray-900">
                Drop all documents here
              </p>
              <p className="text-xs text-gray-500 mt-1">
                or click to browse files
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between">
        <button onClick={handlePreviousStep} className="px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 text-sm font-medium">
          Back to Approval
        </button>
        <button onClick={handleNextStep} className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 text-sm font-medium">
          Submit Tax Return
        </button>
      </div>
    </div>;
  const renderSubmissionStep = () => <div className="space-y-6">
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <h3 className="text-lg font-medium text-gray-900 mb-4">
          Submit Corporate Income Tax Return
        </h3>
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
          <div className="flex items-start">
            <CheckCircleIcon className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
            <p className="text-sm text-blue-700">
              Your documents have been processed. Your CIT return is now ready
              for final review and submission.
            </p>
          </div>
        </div>
        <div className="space-y-6">
          <div className="p-4 border border-gray-200 rounded-lg">
            <h4 className="text-md font-medium text-gray-800 mb-2">
              Submission Summary
            </h4>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-600">Taxable Income:</span>
                <span className="font-medium">€124,500.00</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Tax Rate:</span>
                <span className="font-medium">19%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Calculated Tax:</span>
                <span className="font-medium">€23,655.00</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Deductions Applied:</span>
                <span className="font-medium">€4,200.00</span>
              </div>
              <div className="flex justify-between border-t border-gray-200 pt-2 mt-2">
                <span className="text-gray-900 font-medium">
                  Final Tax Amount:
                </span>
                <span className="font-bold text-blue-600">€19,455.00</span>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="text-md font-medium text-gray-800 mb-2">
              Filing Method
            </h4>
            <div className="space-y-3">
              <div className="flex items-center">
                <input type="radio" name="filing-method" id="filing-electronic" className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300" defaultChecked />
                <label htmlFor="filing-electronic" className="ml-3">
                  <span className="text-sm font-medium text-gray-900">
                    Electronic Filing
                  </span>
                  <p className="text-xs text-gray-500">
                    Submit directly to Dutch Tax Authorities
                  </p>
                </label>
              </div>
              <div className="flex items-center">
                <input type="radio" name="filing-method" id="filing-manual" className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300" />
                <label htmlFor="filing-manual" className="ml-3">
                  <span className="text-sm font-medium text-gray-900">
                    Manual Filing
                  </span>
                  <p className="text-xs text-gray-500">
                    Download forms for manual submission
                  </p>
                </label>
              </div>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <input type="checkbox" id="confirm-submission" className="mt-1 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
            <div>
              <label htmlFor="confirm-submission" className="text-sm font-medium text-gray-900">
                I confirm that all information provided is accurate and complete
              </label>
              <p className="text-xs text-gray-500 mt-1">
                By checking this box, you acknowledge that you are authorizing
                the submission of your Corporate Income Tax return.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between">
        <button onClick={handlePreviousStep} className="px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 text-sm font-medium">
          Back to Documents
        </button>
        <button onClick={() => {}} className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 text-sm font-medium">
          Submit Tax Return
        </button>
      </div>
    </div>;
  const renderCurrentStep = () => {
    switch (currentStep) {
      case 1:
        return renderAnalysisDocument();
      case 2:
        return renderApprovalStep();
      case 3:
        return renderDocumentPreparation();
      case 4:
        return renderSubmissionStep();
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
      {renderCurrentStep()}
      {showCorporateTaxFiling && <CorporateTaxFilingWorkflow onClose={() => setShowCorporateTaxFiling(false)} />}
    </div>;
}