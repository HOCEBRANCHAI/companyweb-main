import React, { useState } from 'react';
import { FileTextIcon, UploadIcon, AlertCircleIcon, ClockIcon, EyeIcon, PencilIcon, FileIcon, CheckCircleIcon, XCircleIcon, CalendarIcon, InfoIcon, ArrowRightIcon, BanknoteIcon, SearchIcon } from 'lucide-react';
interface TaxAssessment {
  id: string;
  title: string;
  date: string;
  type: 'corporate' | 'vat' | 'income' | 'payroll';
  amount: string;
  status: 'pending' | 'paid' | 'objected' | 'overdue';
  dueDate: string;
  fileUrl: string;
  explanation?: string;
  context?: string;
}
export function TaxAssessments() {
  const [selectedAssessment, setSelectedAssessment] = useState<TaxAssessment | null>(null);
  const [showUpload, setShowUpload] = useState(false);
  const [showExplanation, setShowExplanation] = useState(false);
  const [showObjection, setShowObjection] = useState(false);
  const [showLatePayment, setShowLatePayment] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState<string>('all');
  const assessments: TaxAssessment[] = [{
    id: '1',
    title: 'Corporate Tax Assessment 2023',
    date: '2024-03-10',
    type: 'corporate',
    amount: '€4,250.00',
    status: 'pending',
    dueDate: '2024-04-15',
    fileUrl: '#',
    explanation: 'This assessment is based on your filed corporate tax return for fiscal year 2023. The tax authority has accepted your return without adjustments.',
    context: 'Regular annual assessment following your tax return submission on February 28, 2024.'
  }, {
    id: '2',
    title: 'VAT Assessment Q4 2023',
    date: '2024-02-05',
    type: 'vat',
    amount: '€1,875.50',
    status: 'paid',
    dueDate: '2024-03-01',
    fileUrl: '#',
    explanation: 'This VAT assessment covers the period from October 1, 2023 to December 31, 2023. The amount is based on your reported sales and purchases.',
    context: 'Regular quarterly VAT assessment based on your filed return.'
  }, {
    id: '3',
    title: 'Payroll Tax Assessment Jan 2024',
    date: '2024-02-15',
    type: 'payroll',
    amount: '€2,340.75',
    status: 'overdue',
    dueDate: '2024-03-15',
    fileUrl: '#',
    explanation: 'This assessment covers wage taxes and social security contributions for your employees for January 2024.',
    context: 'Monthly payroll tax assessment based on your wage tax return.'
  }, {
    id: '4',
    title: 'Corporate Tax Correction 2022',
    date: '2024-01-20',
    type: 'corporate',
    amount: '€3,125.00',
    status: 'objected',
    dueDate: '2024-02-20',
    fileUrl: '#',
    explanation: 'This is a correction to your 2022 corporate tax assessment based on an audit performed by the tax authority. They have disallowed certain expense deductions.',
    context: 'Supplementary assessment based on new information discovered during a routine audit.'
  }];
  const filteredAssessments = assessments.filter(assessment => {
    const matchesSearch = assessment.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = filterStatus === 'all' || assessment.status === filterStatus;
    return matchesSearch && matchesStatus;
  });
  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'pending':
        return <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
            Pending Payment
          </span>;
      case 'paid':
        return <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
            Paid
          </span>;
      case 'objected':
        return <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
            Objection Filed
          </span>;
      case 'overdue':
        return <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
            Overdue
          </span>;
      default:
        return null;
    }
  };
  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'corporate':
        return <FileTextIcon className="h-5 w-5 text-blue-500" />;
      case 'vat':
        return <FileTextIcon className="h-5 w-5 text-purple-500" />;
      case 'income':
        return <FileTextIcon className="h-5 w-5 text-green-500" />;
      case 'payroll':
        return <FileTextIcon className="h-5 w-5 text-orange-500" />;
      default:
        return <FileIcon className="h-5 w-5 text-gray-500" />;
    }
  };
  const UploadModal = () => <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-lg shadow-xl">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-medium text-gray-900">
            Upload Tax Assessment
          </h3>
          <button onClick={() => setShowUpload(false)} className="text-gray-400 hover:text-gray-500">
            <XCircleIcon className="h-5 w-5" />
          </button>
        </div>
        <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center mb-4">
          <UploadIcon className="h-10 w-10 text-gray-400 mx-auto mb-3" />
          <p className="text-sm text-gray-600 mb-2">
            Drag and drop your tax assessment document here
          </p>
          <p className="text-xs text-gray-500 mb-4">
            Supports PDF, JPG, PNG (max 10MB)
          </p>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 text-sm font-medium">
            Browse Files
          </button>
        </div>
        <div className="space-y-4 mb-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Assessment Type
            </label>
            <select className="w-full border border-gray-300 rounded-md shadow-sm p-2">
              <option>Corporate Tax</option>
              <option>VAT</option>
              <option>Payroll Tax</option>
              <option>Income Tax</option>
              <option>Other</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Assessment Date
            </label>
            <input type="date" className="w-full border border-gray-300 rounded-md shadow-sm p-2" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Amount
            </label>
            <input type="text" placeholder="€0.00" className="w-full border border-gray-300 rounded-md shadow-sm p-2" />
          </div>
        </div>
        <div className="flex justify-end space-x-3">
          <button onClick={() => setShowUpload(false)} className="px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 text-sm font-medium">
            Cancel
          </button>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 text-sm font-medium">
            Upload & Analyze
          </button>
        </div>
      </div>
    </div>;
  const ExplanationModal = () => {
    if (!selectedAssessment) return null;
    return <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white rounded-lg p-6 w-full max-w-3xl shadow-xl">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-medium text-gray-900">
              Assessment Explanation
            </h3>
            <button onClick={() => setShowExplanation(false)} className="text-gray-400 hover:text-gray-500">
              <XCircleIcon className="h-5 w-5" />
            </button>
          </div>
          <div className="mb-6">
            <div className="flex items-center space-x-3 mb-4">
              {getTypeIcon(selectedAssessment.type)}
              <h2 className="text-xl font-bold text-gray-900">
                {selectedAssessment.title}
              </h2>
            </div>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-gray-50 p-3 rounded-lg">
                <p className="text-sm text-gray-500">Assessment Date</p>
                <p className="font-medium">
                  {new Date(selectedAssessment.date).toLocaleDateString()}
                </p>
              </div>
              <div className="bg-gray-50 p-3 rounded-lg">
                <p className="text-sm text-gray-500">Due Date</p>
                <p className="font-medium">
                  {new Date(selectedAssessment.dueDate).toLocaleDateString()}
                </p>
              </div>
              <div className="bg-gray-50 p-3 rounded-lg">
                <p className="text-sm text-gray-500">Amount</p>
                <p className="font-medium">{selectedAssessment.amount}</p>
              </div>
              <div className="bg-gray-50 p-3 rounded-lg">
                <p className="text-sm text-gray-500">Status</p>
                <div className="mt-1">
                  {getStatusBadge(selectedAssessment.status)}
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-200 pt-6 mb-6">
            <h4 className="font-medium text-gray-900 mb-3">Explanation</h4>
            <div className="bg-blue-50 border border-blue-100 rounded-lg p-4 mb-4">
              <div className="flex">
                <InfoIcon className="h-5 w-5 text-blue-500 flex-shrink-0 mt-0.5" />
                <div className="ml-3">
                  <p className="text-sm text-blue-800">
                    {selectedAssessment.explanation}
                  </p>
                </div>
              </div>
            </div>
            <h4 className="font-medium text-gray-900 mb-3">Context</h4>
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
              <p className="text-sm text-gray-700">
                {selectedAssessment.context}
              </p>
            </div>
          </div>
          <div className="border-t border-gray-200 pt-6">
            <h4 className="font-medium text-gray-900 mb-3">
              Available Actions
            </h4>
            <div className="flex space-x-3">
              <button onClick={() => {
              setShowExplanation(false);
              setShowObjection(true);
            }} className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 text-sm font-medium flex items-center">
                <PencilIcon className="h-4 w-4 mr-2" />
                Prepare Objection
              </button>
              <button onClick={() => {
              setShowExplanation(false);
              setShowLatePayment(true);
            }} className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 text-sm font-medium flex items-center">
                <ClockIcon className="h-4 w-4 mr-2" />
                Request Late Payment
              </button>
            </div>
          </div>
        </div>
      </div>;
  };
  const ObjectionModal = () => {
    if (!selectedAssessment) return null;
    return <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white rounded-lg p-6 w-full max-w-3xl shadow-xl">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-medium text-gray-900">
              Prepare Objection Letter
            </h3>
            <button onClick={() => setShowObjection(false)} className="text-gray-400 hover:text-gray-500">
              <XCircleIcon className="h-5 w-5" />
            </button>
          </div>
          <div className="mb-6">
            <div className="flex items-center space-x-3 mb-4">
              {getTypeIcon(selectedAssessment.type)}
              <h2 className="text-xl font-bold text-gray-900">
                {selectedAssessment.title}
              </h2>
            </div>
          </div>
          <div className="space-y-4 mb-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Grounds for Objection
              </label>
              <select className="w-full border border-gray-300 rounded-md shadow-sm p-2">
                <option>Incorrect assessment amount</option>
                <option>Incorrect interpretation of tax law</option>
                <option>Factual errors in the assessment</option>
                <option>Procedural errors by tax authority</option>
                <option>Other</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Explanation of Objection
              </label>
              <textarea rows={5} className="w-full border border-gray-300 rounded-md shadow-sm p-2" placeholder="Provide a detailed explanation of why you're objecting to this assessment..."></textarea>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Supporting Documents
              </label>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center">
                <UploadIcon className="h-6 w-6 text-gray-400 mx-auto mb-2" />
                <p className="text-xs text-gray-500 mb-2">
                  Drag and drop supporting documents
                </p>
                <button className="px-3 py-1 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 text-xs font-medium">
                  Browse Files
                </button>
              </div>
            </div>
          </div>
          <div className="bg-blue-50 rounded-lg p-4 mb-6">
            <div className="flex">
              <InfoIcon className="h-5 w-5 text-blue-500 flex-shrink-0 mt-0.5" />
              <div className="ml-3">
                <h4 className="text-sm font-medium text-blue-800">
                  Important Information
                </h4>
                <p className="text-sm text-blue-700 mt-1">
                  Your objection must be filed within 6 weeks of the assessment
                  date. The deadline for this assessment is{' '}
                  {new Date(new Date(selectedAssessment.date).getTime() + 42 * 24 * 60 * 60 * 1000).toLocaleDateString()}
                  .
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-end space-x-3">
            <button onClick={() => setShowObjection(false)} className="px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 text-sm font-medium">
              Cancel
            </button>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 text-sm font-medium">
              Generate Objection Letter
            </button>
          </div>
        </div>
      </div>;
  };
  const LatePaymentModal = () => {
    if (!selectedAssessment) return null;
    return <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white rounded-lg p-6 w-full max-w-2xl shadow-xl">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-medium text-gray-900">
              Request Late Payment
            </h3>
            <button onClick={() => setShowLatePayment(false)} className="text-gray-400 hover:text-gray-500">
              <XCircleIcon className="h-5 w-5" />
            </button>
          </div>
          <div className="mb-6">
            <div className="flex items-center space-x-3 mb-4">
              {getTypeIcon(selectedAssessment.type)}
              <h2 className="text-xl font-bold text-gray-900">
                {selectedAssessment.title}
              </h2>
            </div>
            <div className="bg-yellow-50 border border-yellow-100 rounded-lg p-4 mb-6">
              <div className="flex">
                <AlertCircleIcon className="h-5 w-5 text-yellow-500 flex-shrink-0 mt-0.5" />
                <div className="ml-3">
                  <h4 className="text-sm font-medium text-yellow-800">
                    Payment Information
                  </h4>
                  <p className="text-sm text-yellow-700 mt-1">
                    Amount Due: {selectedAssessment.amount}
                    <br />
                    Original Due Date:{' '}
                    {new Date(selectedAssessment.dueDate).toLocaleDateString()}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="space-y-4 mb-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Requested Payment Date
              </label>
              <input type="date" className="w-full border border-gray-300 rounded-md shadow-sm p-2" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Reason for Late Payment
              </label>
              <select className="w-full border border-gray-300 rounded-md shadow-sm p-2">
                <option>Temporary cash flow issues</option>
                <option>Waiting for outstanding payments</option>
                <option>Administrative delay</option>
                <option>Unexpected business expenses</option>
                <option>Other</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Additional Explanation
              </label>
              <textarea rows={4} className="w-full border border-gray-300 rounded-md shadow-sm p-2" placeholder="Provide more details about your situation..."></textarea>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Proposed Payment Plan
              </label>
              <div className="flex space-x-3">
                <select className="w-1/3 border border-gray-300 rounded-md shadow-sm p-2">
                  <option>Full payment</option>
                  <option>2 installments</option>
                  <option>3 installments</option>
                  <option>4 installments</option>
                </select>
                <input type="text" className="w-2/3 border border-gray-300 rounded-md shadow-sm p-2" placeholder="First payment amount (e.g., €1,000)" />
              </div>
            </div>
          </div>
          <div className="bg-blue-50 rounded-lg p-4 mb-6">
            <div className="flex">
              <InfoIcon className="h-5 w-5 text-blue-500 flex-shrink-0 mt-0.5" />
              <div className="ml-3">
                <h4 className="text-sm font-medium text-blue-800">
                  Important Information
                </h4>
                <p className="text-sm text-blue-700 mt-1">
                  Late payment may incur interest charges of 8% per annum. The
                  tax authority has discretion to approve or deny this request.
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-end space-x-3">
            <button onClick={() => setShowLatePayment(false)} className="px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 text-sm font-medium">
              Cancel
            </button>
            <button className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 text-sm font-medium">
              Submit Request
            </button>
          </div>
        </div>
      </div>;
  };
  return <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Tax Assessments</h1>
        <p className="text-gray-600 mt-1">
          Upload, analyze, and respond to your tax assessments
        </p>
      </div>
      {/* Upload Banner */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-xl p-6 text-white shadow-lg relative overflow-hidden">
        <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full transform translate-x-20 -translate-y-20 blur-xl"></div>
        <div className="absolute bottom-0 left-0 w-40 h-40 bg-white/5 rounded-full transform -translate-x-20 translate-y-20 blur-xl"></div>
        <div className="relative">
          <div className="flex items-center space-x-3 mb-4">
            <FileTextIcon className="h-8 w-8 text-white" />
            <h2 className="text-xl font-semibold">
              AI-Powered Assessment Analysis
            </h2>
          </div>
          <p className="mb-4 text-white/80 max-w-3xl">
            Upload your tax assessment documents and our AI will explain them in
            plain language, identify potential issues, and suggest appropriate
            actions.
          </p>
          <button onClick={() => setShowUpload(true)} className="bg-white text-indigo-700 px-4 py-2 rounded-md text-sm font-medium hover:bg-indigo-50 transition-colors flex items-center">
            <UploadIcon className="h-4 w-4 mr-2" />
            Upload Assessment
          </button>
        </div>
      </div>
      {/* Filters and Search */}
      <div className="flex flex-wrap justify-between items-center gap-4">
        <div className="flex space-x-2">
          <div className="relative">
            <SearchIcon className="h-5 w-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input type="text" placeholder="Search assessments..." className="pl-10 pr-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" value={searchTerm} onChange={e => setSearchTerm(e.target.value)} />
          </div>
          <select className="px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" value={filterStatus} onChange={e => setFilterStatus(e.target.value)}>
            <option value="all">All Statuses</option>
            <option value="pending">Pending</option>
            <option value="paid">Paid</option>
            <option value="objected">Objected</option>
            <option value="overdue">Overdue</option>
          </select>
        </div>
        <div className="flex space-x-3">
          <button className="px-3 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 text-sm font-medium flex items-center">
            <PencilIcon className="h-4 w-4 mr-2" />
            Prepare Objection
          </button>
          <button className="px-3 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 text-sm font-medium flex items-center">
            <ClockIcon className="h-4 w-4 mr-2" />
            Request Late Payment
          </button>
        </div>
      </div>
      {/* Assessments Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredAssessments.map(assessment => <div key={assessment.id} className="bg-white rounded-lg border border-gray-200 p-5 hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center">
                <div className="p-2 rounded-lg bg-gray-100">
                  {getTypeIcon(assessment.type)}
                </div>
                <div className="ml-3">
                  <h3 className="text-sm font-medium text-gray-900">
                    {assessment.title}
                  </h3>
                  <p className="text-xs text-gray-500">
                    {new Date(assessment.date).toLocaleDateString()}
                  </p>
                </div>
              </div>
              <div>{getStatusBadge(assessment.status)}</div>
            </div>
            <div className="space-y-3 mb-4">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500">Amount:</span>
                <span className="text-sm font-medium">{assessment.amount}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500">Due Date:</span>
                <span className="text-sm font-medium">
                  {new Date(assessment.dueDate).toLocaleDateString()}
                </span>
              </div>
            </div>
            <div className="flex space-x-2 pt-3 border-t border-gray-200">
              <button onClick={() => {
            setSelectedAssessment(assessment);
            setShowExplanation(true);
          }} className="flex-1 px-3 py-1.5 bg-blue-600 text-white rounded-md hover:bg-blue-700 text-xs font-medium flex items-center justify-center">
                <InfoIcon className="h-3.5 w-3.5 mr-1" />
                Explain
              </button>
              <button onClick={() => {
            setSelectedAssessment(assessment);
            setShowObjection(true);
          }} className="flex-1 px-3 py-1.5 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 text-xs font-medium flex items-center justify-center">
                <PencilIcon className="h-3.5 w-3.5 mr-1" />
                Object
              </button>
              <button onClick={() => {
            setSelectedAssessment(assessment);
            setShowLatePayment(true);
          }} className="flex-1 px-3 py-1.5 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 text-xs font-medium flex items-center justify-center">
                <ClockIcon className="h-3.5 w-3.5 mr-1" />
                Defer
              </button>
            </div>
          </div>)}
      </div>
      {/* Statistics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-lg border border-gray-200 p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Total Assessments</p>
              <p className="text-2xl font-bold text-gray-900">
                {assessments.length}
              </p>
            </div>
            <div className="p-3 bg-blue-100 rounded-full">
              <FileTextIcon className="h-6 w-6 text-blue-600" />
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg border border-gray-200 p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Pending Payment</p>
              <p className="text-2xl font-bold text-yellow-600">
                {assessments.filter(a => a.status === 'pending').length}
              </p>
            </div>
            <div className="p-3 bg-yellow-100 rounded-full">
              <AlertCircleIcon className="h-6 w-6 text-yellow-600" />
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg border border-gray-200 p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Objected</p>
              <p className="text-2xl font-bold text-blue-600">
                {assessments.filter(a => a.status === 'objected').length}
              </p>
            </div>
            <div className="p-3 bg-blue-100 rounded-full">
              <PencilIcon className="h-6 w-6 text-blue-600" />
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg border border-gray-200 p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Overdue</p>
              <p className="text-2xl font-bold text-red-600">
                {assessments.filter(a => a.status === 'overdue').length}
              </p>
            </div>
            <div className="p-3 bg-red-100 rounded-full">
              <ClockIcon className="h-6 w-6 text-red-600" />
            </div>
          </div>
        </div>
      </div>
      {/* Next Steps */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <h3 className="text-lg font-medium text-gray-900 mb-4">
          Recommended Actions
        </h3>
        <div className="space-y-4">
          {assessments.some(a => a.status === 'overdue') && <div className="flex items-start p-4 bg-red-50 rounded-lg border border-red-100">
              <AlertCircleIcon className="h-5 w-5 text-red-500 mr-3 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-medium text-red-800">
                  Overdue Payments Require Attention
                </p>
                <p className="text-sm text-red-700 mt-1">
                  You have{' '}
                  {assessments.filter(a => a.status === 'overdue').length}{' '}
                  overdue tax assessment(s). Consider requesting a payment plan
                  to avoid additional penalties.
                </p>
                <button className="mt-2 px-3 py-1 bg-red-600 text-white rounded-md hover:bg-red-700 text-sm font-medium flex items-center">
                  <BanknoteIcon className="h-4 w-4 mr-1.5" />
                  Request Payment Plan
                </button>
              </div>
            </div>}
          {assessments.some(a => a.status === 'pending') && <div className="flex items-start p-4 bg-yellow-50 rounded-lg border border-yellow-100">
              <ClockIcon className="h-5 w-5 text-yellow-500 mr-3 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-medium text-yellow-800">Upcoming Payments</p>
                <p className="text-sm text-yellow-700 mt-1">
                  You have{' '}
                  {assessments.filter(a => a.status === 'pending').length}{' '}
                  pending tax payment(s). The next payment is due on{' '}
                  {new Date(assessments.find(a => a.status === 'pending')?.dueDate || '').toLocaleDateString()}
                  .
                </p>
                <button className="mt-2 px-3 py-1 bg-yellow-600 text-white rounded-md hover:bg-yellow-700 text-sm font-medium flex items-center">
                  <ArrowRightIcon className="h-4 w-4 mr-1.5" />
                  Schedule Payment
                </button>
              </div>
            </div>}
        </div>
      </div>
      {/* Modals */}
      {showUpload && <UploadModal />}
      {showExplanation && <ExplanationModal />}
      {showObjection && <ObjectionModal />}
      {showLatePayment && <LatePaymentModal />}
    </div>;
}