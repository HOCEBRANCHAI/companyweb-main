import React, { useState, useRef } from 'react';
import { UploadIcon, FileTextIcon, AlertCircleIcon, CheckCircleIcon, RefreshCwIcon, ArrowRightIcon, XIcon, DownloadIcon, PackageIcon, BuildingIcon, GlobeIcon, CheckIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
interface ObjectionLettersProps {
  companyProfiles?: Array<{
    id: string;
    name: string;
    country: string;
    taxId: string;
  }>;
}
export function ObjectionLetters({
  companyProfiles = []
}: ObjectionLettersProps) {
  const [isDragging, setIsDragging] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedCompanyProfile, setSelectedCompanyProfile] = useState<string | null>(null);
  const [companyDetected, setCompanyDetected] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [letterContent, setLetterContent] = useState(`To: Dutch Tax Authority (Belastingdienst)
Subject: Objection to Corporate Income Tax Assessment 2023
Reference: Tax ID ${companyDetected ? 'NL123456789B01' : selectedCompanyProfile === 'base' ? 'U72200MH2022PTC123456' : 'NL123456789B01'}
Dear Sir/Madam,
I am writing to formally object to the Corporate Income Tax Assessment for the year 2023, received on [date of assessment].
After careful review of the assessment, I have identified several grounds for objection:
1. Incorrect classification of business expenses: The assessment has incorrectly classified certain legitimate business expenses as non-deductible. Specifically, the consulting fees paid to XYZ Consulting (€15,000) and the research and development costs (€45,000) are ordinary and necessary business expenses that should be fully deductible under Article 3.8 of the Dutch Income Tax Act 2001.
2. Double taxation issue regarding income earned abroad: The assessment does not properly account for taxes already paid in [foreign country] on income earned there. According to the Double Taxation Treaty between the Netherlands and [foreign country], this income should either be exempt or a tax credit should be provided for the foreign taxes paid. Documentation of foreign tax payments is attached.
3. Calculation error in the final assessment amount: There appears to be a mathematical error in the calculation of the final tax liability. Based on the taxable income stated in the assessment (€124,500) and applying the correct tax rate of 19%, the tax amount should be €23,655 before deductions, not €24,850 as stated in the assessment.
In support of this objection, I am enclosing the following documentation:
• Copies of invoices for the consulting services and R&D expenses
• Foreign tax payment certificates
• Detailed calculation of the correct tax liability
I respectfully request that the tax assessment be revised in accordance with the objections raised above. If additional information is required, please do not hesitate to contact me at [contact details].
According to Article 22j of the State Taxes Act, this objection is being filed within the six-week period following the date of the assessment.
Yours sincerely,
[Name]
[Position]
${companyDetected ? 'Tech Innovations Netherlands B.V.' : selectedCompanyProfile === 'base' ? 'Tech Innovations Ltd' : 'Tech Innovations Netherlands B.V.'}
`);
  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };
  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };
  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      handleFileSelection(e.dataTransfer.files[0]);
    }
  };
  const handleFileSelection = (file: File) => {
    setSelectedFile(file);
    setCompanyDetected(file.name.toLowerCase().includes('tech'));
  };
  const handleBrowseClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };
  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      handleFileSelection(e.target.files[0]);
    }
  };
  const handleRemoveFile = () => {
    setSelectedFile(null);
    setCompanyDetected(false);
  };
  const handleContinue = () => {
    setCurrentStep(currentStep + 1);
  };
  const handleBack = () => {
    setCurrentStep(currentStep - 1);
  };
  const handleSelectCompanyProfile = (profileId: string) => {
    setSelectedCompanyProfile(profileId);
  };
  const renderUploadSection = () => <div className={`border-2 border-dashed rounded-lg p-8 text-center ${isDragging ? 'border-blue-500 bg-blue-50' : 'border-gray-300'}`} onDragOver={handleDragOver} onDragLeave={handleDragLeave} onDrop={handleDrop}>
      <div className="space-y-4">
        <div className="flex justify-center">
          <UploadIcon className="h-12 w-12 text-gray-400" />
        </div>
        <div>
          <h3 className="text-lg font-medium text-gray-900">
            Upload Tax Assessment
          </h3>
          <p className="text-sm text-gray-500 mt-1">
            Drag and drop your tax assessment PDF or click to browse
          </p>
        </div>
        <input type="file" ref={fileInputRef} onChange={handleFileInputChange} className="hidden" accept=".pdf,.jpg,.jpeg,.png" />
        {!selectedFile ? <button onClick={handleBrowseClick} className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 text-sm font-medium">
            Browse Files
          </button> : <div className="mt-4">
            <div className="flex items-center justify-center bg-blue-50 p-3 rounded-md border border-blue-100">
              <FileTextIcon className="h-5 w-5 text-blue-600 mr-2" />
              <span className="text-sm font-medium text-blue-700">
                {selectedFile.name}
              </span>
              <button onClick={handleRemoveFile} className="ml-2 text-gray-400 hover:text-gray-600">
                <XIcon className="h-4 w-4" />
              </button>
            </div>
            <button onClick={handleContinue} className="mt-4 px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 text-sm font-medium flex items-center mx-auto">
              Continue to Analysis
              <ArrowRightIcon className="ml-2 h-4 w-4" />
            </button>
          </div>}
      </div>
      {!selectedFile && <div className="mt-6">
          <button onClick={handleContinue} className="text-blue-600 hover:text-blue-800 text-sm underline">
            Continue without uploading
          </button>
        </div>}
    </div>;
  const renderAnalysisSection = () => <div className="space-y-6">
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-4">
          Tax Assessment Analysis
        </h3>
        <div className="bg-blue-50 border border-blue-100 rounded-lg p-4 mb-6">
          <div className="flex items-start">
            <AlertCircleIcon className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
            <p className="text-sm text-blue-700">
              {selectedFile ? `We've analyzed your uploaded tax assessment: ${selectedFile.name}` : "We've prepared a draft analysis based on common tax scenarios. Please select your company profile below."}
            </p>
          </div>
        </div>
        {!companyDetected && <div className="mb-6 bg-yellow-50 border border-yellow-200 rounded-lg p-4">
            <h4 className="font-medium text-yellow-800 mb-3">
              Company Profile Not Detected
            </h4>
            <p className="text-sm text-yellow-700 mb-4">
              We couldn't automatically identify your company from the uploaded
              document. Please select which company profile you'd like to use
              for the objection letter:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              {companyProfiles.map(profile => <div key={profile.id} onClick={() => handleSelectCompanyProfile(profile.id)} className={`flex items-start p-4 rounded-lg border cursor-pointer ${selectedCompanyProfile === profile.id ? 'border-blue-500 bg-blue-50' : 'border-gray-200 hover:border-blue-300 hover:bg-blue-50'}`}>
                  <div className="flex-shrink-0 mt-0.5 mr-3">
                    {profile.id === 'base' ? <BuildingIcon className="h-5 w-5 text-blue-600" /> : <GlobeIcon className="h-5 w-5 text-green-600" />}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h5 className="font-medium text-gray-900">
                        {profile.name}
                      </h5>
                      {selectedCompanyProfile === profile.id && <CheckIcon className="h-5 w-5 text-blue-600" />}
                    </div>
                    <p className="text-sm text-gray-500 mt-1">
                      {profile.country} • Tax ID: {profile.taxId}
                    </p>
                  </div>
                </div>)}
            </div>
          </div>}
        {companyDetected && <div className="mb-6 bg-green-50 border border-green-200 rounded-lg p-4">
            <h4 className="font-medium text-green-800 mb-2">
              Company Details Detected
            </h4>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Company Name:</span>
                <span className="text-sm font-medium">
                  Tech Innovations Netherlands B.V.
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Tax ID:</span>
                <span className="text-sm font-medium">NL123456789B01</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Country:</span>
                <span className="text-sm font-medium">Netherlands</span>
              </div>
            </div>
          </div>}
        <div className="space-y-4">
          <div className="flex items-center">
            <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center mr-3">
              <span className="text-green-600 font-medium">1</span>
            </div>
            <div>
              <h4 className="font-medium text-gray-900">Document Analysis</h4>
              <p className="text-sm text-gray-500">
                Extracted key information from your assessment
              </p>
            </div>
            <div className="ml-auto">
              <CheckCircleIcon className="h-5 w-5 text-green-600" />
            </div>
          </div>
          <div className="ml-11 bg-gray-50 p-4 rounded-lg border border-gray-200 mb-4">
            <h5 className="font-medium text-gray-900 mb-2">Analysis Results</h5>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600">Assessment Type:</span>
                <span className="font-medium">Corporate Income Tax</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Tax Year:</span>
                <span className="font-medium">2023</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Assessment Amount:</span>
                <span className="font-medium">€24,850.00</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Filing Deadline:</span>
                <span className="font-medium">6 weeks from receipt</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">
                  Potential Objection Grounds:
                </span>
                <span className="font-medium text-green-600">3 found</span>
              </div>
            </div>
          </div>
          <div className="flex items-center">
            <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-3">
              <span className="text-blue-600 font-medium">2</span>
            </div>
            <div>
              <h4 className="font-medium text-gray-900">Objection Grounds</h4>
              <p className="text-sm text-gray-500">
                Found valid reasons for objection
              </p>
            </div>
            <div className="ml-auto">
              <CheckCircleIcon className="h-5 w-5 text-green-600" />
            </div>
          </div>
          <div className="ml-11 bg-gray-50 p-4 rounded-lg border border-gray-200 mb-4">
            <h5 className="font-medium text-gray-900 mb-2">
              Identified Objection Grounds
            </h5>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>
                <span className="font-medium">
                  Incorrect expense classification:
                </span>{' '}
                Certain business expenses were not properly recognized as
                deductible.
              </li>
              <li>
                <span className="font-medium">Double taxation issue:</span>{' '}
                Income appears to have been taxed both in the Netherlands and
                abroad without proper relief.
              </li>
              <li>
                <span className="font-medium">Calculation error:</span> The tax
                authority appears to have made a mathematical error in
                calculating the final assessment amount.
              </li>
            </ul>
          </div>
          <div className="flex items-center">
            <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-3">
              <span className="text-blue-600 font-medium">3</span>
            </div>
            <div>
              <h4 className="font-medium text-gray-900">
                Draft Objection Letter
              </h4>
              <p className="text-sm text-gray-500">
                Created a professional objection letter
              </p>
            </div>
            <div className="ml-auto">
              <CheckCircleIcon className="h-5 w-5 text-green-600" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between">
        <button onClick={handleBack} className="px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 text-sm font-medium">
          Back
        </button>
        <button onClick={handleContinue} disabled={!companyDetected && !selectedCompanyProfile} className={`px-4 py-2 rounded-md text-sm font-medium ${companyDetected || selectedCompanyProfile ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-gray-200 text-gray-400 cursor-not-allowed'}`}>
          View Objection Letter
        </button>
      </div>
    </div>;
  const renderObjectionLetterSection = () => {
    return <div className="space-y-6">
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-4">
            Objection Letter
          </h3>
          <div className="bg-blue-50 border border-blue-100 rounded-lg p-4 mb-6">
            <div className="flex items-start">
              <CheckCircleIcon className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
              <p className="text-sm text-blue-700">
                Your objection letter is ready. You can review and edit the
                content below before downloading or sending.
              </p>
            </div>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 mb-4">
            <div className="flex justify-between items-center mb-4">
              <h5 className="font-medium text-gray-900">
                Objection Letter Content
              </h5>
              <button onClick={() => setIsEditing(!isEditing)} className="px-3 py-1.5 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 text-sm font-medium">
                {isEditing ? 'Save Changes' : 'Edit Letter'}
              </button>
            </div>
            {isEditing ? <textarea value={letterContent} onChange={e => setLetterContent(e.target.value)} className="w-full h-96 p-4 border border-gray-300 rounded-md font-mono text-sm" /> : <div className="bg-white p-6 border border-gray-200 rounded-md whitespace-pre-line text-sm text-gray-700 max-h-96 overflow-y-auto">
                {letterContent}
              </div>}
            <div className="flex justify-between items-center mt-4">
              <div>
                <span className="text-xs text-gray-500">
                  Generated on: {new Date().toLocaleDateString()}
                </span>
              </div>
            </div>
          </div>
          <div className="mt-6 pt-6 border-t border-gray-200">
            <h4 className="font-medium text-gray-900 mb-4">Letter Actions</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-lg border border-gray-200">
                <h6 className="font-medium text-gray-900 mb-2">Digital Copy</h6>
                <p className="text-sm text-gray-600 mb-3">
                  Download a digital copy of your objection letter for your
                  records or to send yourself.
                </p>
                <button onClick={() => window.open('https://example.com/download-letter', '_blank')} className="w-full px-3 py-1.5 bg-blue-600 text-white rounded-md hover:bg-blue-700 text-sm font-medium flex items-center justify-center">
                  <DownloadIcon className="h-4 w-4 mr-2" />
                  Download Letter
                </button>
              </div>
              <div className="bg-white p-4 rounded-lg border border-gray-200">
                <h6 className="font-medium text-gray-900 mb-2">
                  Physical Copy
                </h6>
                <p className="text-sm text-gray-600 mb-3">
                  Have our admin team send a physical copy of the letter to the
                  tax authority.
                </p>
                <Link to="/shipments">
                  <button className="w-full px-3 py-1.5 bg-green-600 text-white rounded-md hover:bg-green-700 text-sm font-medium flex items-center justify-center">
                    <PackageIcon className="h-4 w-4 mr-2" />
                    Prepare Shipment
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-between">
          <button onClick={handleBack} className="px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 text-sm font-medium">
            Back to Analysis
          </button>
          <button onClick={() => setCurrentStep(1)} className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 text-sm font-medium">
            Start New Objection
          </button>
        </div>
      </div>;
  };
  const renderStepIndicator = () => <div className="mb-6">
      <div className="flex items-center justify-between max-w-xl mx-auto">
        <div className={`flex flex-col items-center ${currentStep >= 1 ? 'text-blue-600' : 'text-gray-400'}`}>
          <span className={`h-8 w-8 flex items-center justify-center rounded-full border-2 ${currentStep >= 1 ? 'border-blue-600 bg-blue-50' : 'border-gray-300'}`}>
            1
          </span>
          <span className="mt-1 text-xs">Upload</span>
        </div>
        <div className={`flex-1 h-0.5 mx-2 ${currentStep >= 2 ? 'bg-blue-600' : 'bg-gray-200'}`} />
        <div className={`flex flex-col items-center ${currentStep >= 2 ? 'text-blue-600' : 'text-gray-400'}`}>
          <span className={`h-8 w-8 flex items-center justify-center rounded-full border-2 ${currentStep >= 2 ? 'border-blue-600 bg-blue-50' : 'border-gray-300'}`}>
            2
          </span>
          <span className="mt-1 text-xs">Analysis</span>
        </div>
        <div className={`flex-1 h-0.5 mx-2 ${currentStep >= 3 ? 'bg-blue-600' : 'bg-gray-200'}`} />
        <div className={`flex flex-col items-center ${currentStep >= 3 ? 'text-blue-600' : 'text-gray-400'}`}>
          <span className={`h-8 w-8 flex items-center justify-center rounded-full border-2 ${currentStep >= 3 ? 'border-blue-600 bg-blue-50' : 'border-gray-300'}`}>
            3
          </span>
          <span className="mt-1 text-xs">Letter</span>
        </div>
      </div>
    </div>;
  return <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Objection Letters</h1>
        <p className="text-gray-600 mt-1">
          Let our AI Tax Agent help you draft objection letters
        </p>
      </div>
      {renderStepIndicator()}
      {currentStep === 1 && renderUploadSection()}
      {currentStep === 2 && renderAnalysisSection()}
      {currentStep === 3 && renderObjectionLetterSection()}
      {currentStep === 1 && <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-medium text-gray-900">Analysis</h3>
              <CheckCircleIcon className="h-6 w-6 text-green-500" />
            </div>
            <p className="text-sm text-gray-500 mt-2">
              Our AI analyzes your assessment for potential objection grounds
            </p>
          </div>
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-medium text-gray-900">Draft</h3>
              <RefreshCwIcon className="h-6 w-6 text-blue-500" />
            </div>
            <p className="text-sm text-gray-500 mt-2">
              Generate a professional objection letter based on findings
            </p>
          </div>
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-medium text-gray-900">Delivery</h3>
              <PackageIcon className="h-6 w-6 text-green-500" />
            </div>
            <p className="text-sm text-gray-500 mt-2">
              Download or send your objection letter to tax authorities
            </p>
          </div>
        </div>}
      {currentStep === 1 && <div className="bg-white rounded-lg border border-gray-200 p-6">
          <h2 className="text-lg font-medium text-gray-900 mb-4">
            Recent Objections
          </h2>
          <div className="space-y-4">
            {[1, 2].map(i => <div key={i} className="flex items-center justify-between py-3 border-b border-gray-200 last:border-0">
                <div className="flex items-center">
                  <FileTextIcon className="h-5 w-5 text-gray-400 mr-3" />
                  <div>
                    <p className="text-sm font-medium text-gray-900">
                      Corporate Tax Assessment 2023
                    </p>
                    <p className="text-sm text-gray-500">
                      Objection sent on Feb 15, 2024
                    </p>
                  </div>
                </div>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                  In Progress
                </span>
              </div>)}
          </div>
        </div>}
    </div>;
}