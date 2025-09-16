import React, { useState } from 'react';
import { UploadIcon, CheckCircleIcon, AlertCircleIcon, FileTextIcon, XIcon, ArrowRightIcon, EyeIcon, ListChecksIcon, BarChart2Icon } from 'lucide-react';
interface InternalReviewProps {
  onComplete: () => void;
}
interface ValidationCheck {
  id: string;
  name: string;
  status: 'pending' | 'passed' | 'failed';
  description: string;
}
interface ReviewSummary {
  totalAmount: number;
  previousAmount: number;
  difference: number;
  riskLevel: 'low' | 'medium' | 'high';
}
export function InternalReview({
  onComplete
}: InternalReviewProps) {
  const [file, setFile] = useState<File | null>(null);
  const [uploadStatus, setUploadStatus] = useState<'idle' | 'uploaded' | 'reviewed'>('idle');
  const [reviewComments, setReviewComments] = useState<string>('');
  const [reviewStatus, setReviewStatus] = useState<'pending' | 'approved' | 'needs_changes'>('pending');
  const [validationChecks, setValidationChecks] = useState<ValidationCheck[]>([{
    id: 'v1',
    name: 'Amount Validation',
    status: 'pending',
    description: 'Verify all amounts are correctly calculated'
  }, {
    id: 'v2',
    name: 'Period Consistency',
    status: 'pending',
    description: 'Check if reporting period matches requirements'
  }, {
    id: 'v3',
    name: 'Previous Return Comparison',
    status: 'pending',
    description: 'Compare with previous VAT return'
  }]);
  const [summary, setSummary] = useState<ReviewSummary>({
    totalAmount: 0,
    previousAmount: 0,
    difference: 0,
    riskLevel: 'low'
  });
  const handleFileUpload = (uploadedFile: File) => {
    setFile(uploadedFile);
    setUploadStatus('uploaded');
    // Simulate automated validation process
    setTimeout(() => {
      setValidationChecks(checks => checks.map(check => ({
        ...check,
        status: Math.random() > 0.3 ? 'passed' : 'failed'
      })));
      // Simulate summary calculation
      setSummary({
        totalAmount: 25000,
        previousAmount: 22000,
        difference: 3000,
        riskLevel: 'medium'
      });
      setUploadStatus('reviewed');
      setReviewStatus(Math.random() > 0.3 ? 'approved' : 'needs_changes');
    }, 2000);
  };
  const handleRemoveFile = () => {
    setFile(null);
    setUploadStatus('idle');
    setReviewComments('');
    setReviewStatus('pending');
    setValidationChecks(checks => checks.map(check => ({
      ...check,
      status: 'pending'
    })));
  };
  const getRiskLevelColor = (level: string) => {
    switch (level) {
      case 'low':
        return 'text-green-600 bg-green-100';
      case 'medium':
        return 'text-yellow-600 bg-yellow-100';
      case 'high':
        return 'text-red-600 bg-red-100';
      default:
        return 'text-gray-600 bg-gray-100';
    }
  };
  return <div className="space-y-6">
      {/* Upload Section */}
      <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-sm font-medium text-gray-900">
            Draft VAT Return Review
          </h3>
          {file && <button onClick={handleRemoveFile} className="text-gray-400 hover:text-gray-500">
              <XIcon className="h-5 w-5" />
            </button>}
        </div>
        {!file ? <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50">
            <div className="flex flex-col items-center justify-center pt-5 pb-6">
              <UploadIcon className="h-8 w-8 text-gray-400 mb-2" />
              <p className="text-sm text-gray-500">
                Upload your draft VAT return PDF from the tax portal
              </p>
              <p className="text-xs text-gray-400 mt-1">
                PDF files only, max 10MB
              </p>
            </div>
            <input type="file" className="hidden" accept=".pdf" onChange={e => {
          const file = e.target.files?.[0];
          if (file) handleFileUpload(file);
        }} />
          </label> : <div className="bg-white p-4 rounded-lg border border-gray-200">
            <div className="flex items-center">
              <FileTextIcon className="h-5 w-5 text-gray-400 mr-2" />
              <span className="text-sm text-gray-900">{file.name}</span>
            </div>
            <div className="mt-4">
              <div className="flex items-center">
                {uploadStatus === 'uploaded' && <div className="flex items-center text-blue-600">
                    <FileTextIcon className="h-5 w-5 mr-2" />
                    <span className="text-sm">Processing review...</span>
                  </div>}
                {uploadStatus === 'reviewed' && <div className="flex items-center text-green-600">
                    <CheckCircleIcon className="h-5 w-5 mr-2" />
                    <span className="text-sm">Review complete</span>
                  </div>}
              </div>
            </div>
          </div>}
      </div>

      {/* Validation Checks */}
      {uploadStatus === 'reviewed' && <div className="space-y-6">
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h3 className="text-sm font-medium text-gray-900 mb-4 flex items-center">
              <ListChecksIcon className="h-5 w-5 mr-2 text-blue-600" />
              Validation Checks
            </h3>
            <div className="space-y-4">
              {validationChecks.map(check => <div key={check.id} className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-900">
                      {check.name}
                    </p>
                    <p className="text-xs text-gray-500">{check.description}</p>
                  </div>
                  <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${check.status === 'passed' ? 'bg-green-100 text-green-800' : check.status === 'failed' ? 'bg-red-100 text-red-800' : 'bg-gray-100 text-gray-800'}`}>
                    {check.status.charAt(0).toUpperCase() + check.status.slice(1)}
                  </span>
                </div>)}
            </div>
          </div>

          {/* Summary Section */}
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h3 className="text-sm font-medium text-gray-900 mb-4 flex items-center">
              <BarChart2Icon className="h-5 w-5 mr-2 text-blue-600" />
              Return Summary
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-gray-500">Total Amount</p>
                <p className="text-lg font-semibold">
                  €{summary.totalAmount.toLocaleString()}
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Previous Return</p>
                <p className="text-lg font-semibold">
                  €{summary.previousAmount.toLocaleString()}
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Difference</p>
                <p className="text-lg font-semibold text-blue-600">
                  €{summary.difference.toLocaleString()}
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Risk Level</p>
                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getRiskLevelColor(summary.riskLevel)}`}>
                  {summary.riskLevel.toUpperCase()}
                </span>
              </div>
            </div>
          </div>

          {/* Review Results */}
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-medium text-gray-900">
                Review Results
              </h3>
              <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium
                ${reviewStatus === 'approved' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
                {reviewStatus === 'approved' ? 'Approved' : 'Needs Changes'}
              </span>
            </div>
            <div className="space-y-4">
              <div className="bg-gray-50 rounded-lg p-4">
                <p className="text-sm text-gray-600">
                  {reviewStatus === 'approved' ? 'No issues found. You can proceed with the official submission.' : 'Please review the following comments and make necessary adjustments:'}
                </p>
                <textarea value={reviewComments} onChange={e => setReviewComments(e.target.value)} placeholder="Add review comments..." className="mt-3 w-full px-3 py-2 border border-gray-300 rounded-md text-sm" rows={3} />
              </div>
              <div className="flex space-x-3">
                <button onClick={onComplete} className="flex-1 py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 text-sm font-medium flex items-center justify-center">
                  {reviewStatus === 'approved' ? 'Continue to Submission' : 'Upload Revised Version'}
                  <ArrowRightIcon className="ml-2 h-4 w-4" />
                </button>
                <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 text-sm font-medium flex items-center">
                  <EyeIcon className="h-4 w-4 mr-2" />
                  Preview
                </button>
              </div>
            </div>
          </div>
        </div>}
    </div>;
}