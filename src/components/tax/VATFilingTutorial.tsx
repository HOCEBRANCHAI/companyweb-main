import React, { useState } from 'react';
import { BookOpenIcon, CheckCircleIcon, ArrowRightIcon, ArrowLeftIcon, PlayIcon, PauseIcon, XIcon } from 'lucide-react';
export function VATFilingTutorial() {
  const [currentStep, setCurrentStep] = useState(1);
  const [videoPlaying, setVideoPlaying] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const totalSteps = 5;
  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };
  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };
  const toggleVideo = () => {
    setVideoPlaying(!videoPlaying);
  };
  const openModal = () => {
    setShowModal(true);
  };
  const closeModal = () => {
    setShowModal(false);
  };
  return <div className="bg-indigo-900/30 backdrop-blur-sm rounded-xl border border-indigo-500/30 p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center">
          <div className="p-2 bg-[#EA3A70]/20 rounded-full mr-3">
            <BookOpenIcon className="h-6 w-6 text-[#EA3A70]" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-white">
              VAT Filing Tutorial
            </h3>
            <p className="text-indigo-300 text-sm">
              Interactive guide to filing your VAT return
            </p>
          </div>
        </div>
        <div className="flex space-x-2">
          <button onClick={openModal} className="px-4 py-2 bg-indigo-900/50 border border-indigo-500/30 text-white rounded-lg hover:bg-indigo-800/50 transition-colors text-sm flex items-center">
            <PlayIcon className="h-4 w-4 mr-2" />
            Watch Video Guide
          </button>
        </div>
      </div>
      <div className="mb-8">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-white">Progress</span>
          <span className="text-sm font-medium text-white">
            {currentStep}/{totalSteps}
          </span>
        </div>
        <div className="w-full bg-indigo-900/50 rounded-full h-2">
          <div className="bg-gradient-to-r from-[#EA3A70] to-indigo-500 h-2 rounded-full transition-all duration-300" style={{
          width: `${currentStep / totalSteps * 100}%`
        }}></div>
        </div>
      </div>
      <div className="bg-indigo-900/20 backdrop-blur-sm rounded-xl border border-indigo-500/20 p-6 mb-6">
        {currentStep === 1 && <div>
            <h4 className="text-xl font-bold text-white mb-4">
              Introduction to Dutch VAT Returns
            </h4>
            <p className="text-indigo-200 mb-4">
              Value Added Tax (BTW in Dutch) is a consumption tax placed on
              goods and services. As a business, you're responsible for
              collecting VAT on your sales and can reclaim VAT on your
              purchases.
            </p>
            <div className="mb-6">
              <h5 className="text-lg font-medium text-white mb-2">
                Key Points to Remember:
              </h5>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircleIcon className="h-5 w-5 text-green-400 mr-2 mt-0.5" />
                  <span className="text-indigo-200">
                    Standard VAT rate in the Netherlands is 21%
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="h-5 w-5 text-green-400 mr-2 mt-0.5" />
                  <span className="text-indigo-200">
                    Reduced rate of 9% applies to certain goods and services
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="h-5 w-5 text-green-400 mr-2 mt-0.5" />
                  <span className="text-indigo-200">
                    Filing frequency depends on your turnover (monthly,
                    quarterly, or annually)
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="h-5 w-5 text-green-400 mr-2 mt-0.5" />
                  <span className="text-indigo-200">
                    Returns must be filed and paid within one month after the
                    end of the reporting period
                  </span>
                </li>
              </ul>
            </div>
            <div className="bg-indigo-800/30 rounded-lg p-4 border border-indigo-500/20">
              <h5 className="text-white font-medium mb-2">
                Your Next VAT Return
              </h5>
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-indigo-300 text-sm">Period:</p>
                  <p className="text-white">Q1 2023 (Jan-Mar)</p>
                </div>
                <div>
                  <p className="text-indigo-300 text-sm">Due Date:</p>
                  <p className="text-white">April 30, 2023</p>
                </div>
                <div>
                  <p className="text-indigo-300 text-sm">Estimated Amount:</p>
                  <p className="text-white">€2,450.00</p>
                </div>
              </div>
            </div>
          </div>}
        {currentStep === 2 && <div>
            <h4 className="text-xl font-bold text-white mb-4">
              Gathering Required Information
            </h4>
            <p className="text-indigo-200 mb-4">
              Before starting your VAT return, you'll need to gather all
              relevant financial information for the reporting period.
            </p>
            <div className="mb-6">
              <h5 className="text-lg font-medium text-white mb-2">
                Required Documentation:
              </h5>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircleIcon className="h-5 w-5 text-green-400 mr-2 mt-0.5" />
                  <span className="text-indigo-200">
                    Sales invoices for the period
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="h-5 w-5 text-green-400 mr-2 mt-0.5" />
                  <span className="text-indigo-200">
                    Purchase invoices for the period
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="h-5 w-5 text-green-400 mr-2 mt-0.5" />
                  <span className="text-indigo-200">
                    Records of EU sales and purchases
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="h-5 w-5 text-green-400 mr-2 mt-0.5" />
                  <span className="text-indigo-200">
                    Bank statements for reconciliation
                  </span>
                </li>
              </ul>
            </div>
            <div className="bg-indigo-800/30 rounded-lg p-4 border border-indigo-500/20">
              <h5 className="text-white font-medium mb-2">
                Data Collection Checklist
              </h5>
              <div className="space-y-2">
                <div className="flex items-center">
                  <input type="checkbox" id="sales" className="h-4 w-4 rounded bg-indigo-900 border-indigo-500 text-[#EA3A70] focus:ring-[#EA3A70]" />
                  <label htmlFor="sales" className="ml-2 text-indigo-200">
                    Sales invoices collected
                  </label>
                </div>
                <div className="flex items-center">
                  <input type="checkbox" id="purchases" className="h-4 w-4 rounded bg-indigo-900 border-indigo-500 text-[#EA3A70] focus:ring-[#EA3A70]" />
                  <label htmlFor="purchases" className="ml-2 text-indigo-200">
                    Purchase invoices collected
                  </label>
                </div>
                <div className="flex items-center">
                  <input type="checkbox" id="eu-sales" className="h-4 w-4 rounded bg-indigo-900 border-indigo-500 text-[#EA3A70] focus:ring-[#EA3A70]" />
                  <label htmlFor="eu-sales" className="ml-2 text-indigo-200">
                    EU sales records prepared
                  </label>
                </div>
                <div className="flex items-center">
                  <input type="checkbox" id="bank" className="h-4 w-4 rounded bg-indigo-900 border-indigo-500 text-[#EA3A70] focus:ring-[#EA3A70]" />
                  <label htmlFor="bank" className="ml-2 text-indigo-200">
                    Bank statements reconciled
                  </label>
                </div>
              </div>
            </div>
          </div>}
        {currentStep === 3 && <div>
            <h4 className="text-xl font-bold text-white mb-4">
              Completing the VAT Return Form
            </h4>
            <p className="text-indigo-200 mb-4">
              The Dutch VAT return form consists of several sections. Here's how
              to complete each one correctly.
            </p>
            <div className="mb-6">
              <h5 className="text-lg font-medium text-white mb-2">
                Form Sections:
              </h5>
              <div className="space-y-4">
                <div className="bg-indigo-800/30 rounded-lg p-3 border border-indigo-500/20">
                  <h6 className="text-white font-medium mb-1">
                    Section 1: Domestic Sales
                  </h6>
                  <p className="text-indigo-200 text-sm">
                    Enter the total value of your domestic sales and the VAT
                    charged. For Q1 2023, your system shows €18,778.05 in sales
                    with €3,258.74 VAT.
                  </p>
                </div>
                <div className="bg-indigo-800/30 rounded-lg p-3 border border-indigo-500/20">
                  <h6 className="text-white font-medium mb-1">
                    Section 2: Domestic Purchases
                  </h6>
                  <p className="text-indigo-200 text-sm">
                    Enter the total value of your domestic purchases and the VAT
                    paid. For Q1 2023, your system shows €23,032.07 in purchases
                    with €3,577.80 VAT.
                  </p>
                </div>
                <div className="bg-indigo-800/30 rounded-lg p-3 border border-indigo-500/20">
                  <h6 className="text-white font-medium mb-1">
                    Section 3: EU Transactions
                  </h6>
                  <p className="text-indigo-200 text-sm">
                    Enter the value of goods and services bought from or sold to
                    other EU countries. Remember that different VAT rules apply
                    to EU transactions.
                  </p>
                </div>
                <div className="bg-indigo-800/30 rounded-lg p-3 border border-indigo-500/20">
                  <h6 className="text-white font-medium mb-1">
                    Section 4: Calculation
                  </h6>
                  <p className="text-indigo-200 text-sm">
                    The system will calculate your VAT position. For Q1 2023,
                    your net VAT position is -€319.06, meaning you're eligible
                    for a refund.
                  </p>
                </div>
              </div>
            </div>
          </div>}
        {currentStep === 4 && <div>
            <h4 className="text-xl font-bold text-white mb-4">
              Submitting Your VAT Return
            </h4>
            <p className="text-indigo-200 mb-4">
              Once you've completed your VAT return, you need to submit it to
              the Dutch Tax Authority (Belastingdienst).
            </p>
            <div className="mb-6">
              <h5 className="text-lg font-medium text-white mb-2">
                Submission Methods:
              </h5>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircleIcon className="h-5 w-5 text-green-400 mr-2 mt-0.5" />
                  <div>
                    <span className="text-white font-medium">
                      Online Portal
                    </span>
                    <p className="text-indigo-200 text-sm">
                      Submit through the Belastingdienst's online portal using
                      your DigiD or eHerkenning credentials
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="h-5 w-5 text-green-400 mr-2 mt-0.5" />
                  <div>
                    <span className="text-white font-medium">
                      Accounting Software
                    </span>
                    <p className="text-indigo-200 text-sm">
                      Submit directly from compatible accounting software (like
                      our platform)
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="h-5 w-5 text-green-400 mr-2 mt-0.5" />
                  <div>
                    <span className="text-white font-medium">
                      Tax Representative
                    </span>
                    <p className="text-indigo-200 text-sm">
                      Have your tax advisor or representative submit on your
                      behalf
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="bg-indigo-800/30 rounded-lg p-4 border border-indigo-500/20">
              <h5 className="text-white font-medium mb-2">
                Authentication Requirements
              </h5>
              <p className="text-indigo-200 text-sm mb-3">
                To submit your VAT return, you'll need one of the following:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircleIcon className="h-5 w-5 text-green-400 mr-2 mt-0.5" />
                  <span className="text-indigo-200">
                    eHerkenning (minimum security level 2+) for businesses
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="h-5 w-5 text-green-400 mr-2 mt-0.5" />
                  <span className="text-indigo-200">
                    DigiD for sole proprietors
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="h-5 w-5 text-green-400 mr-2 mt-0.5" />
                  <span className="text-indigo-200">
                    Authorization for your tax representative
                  </span>
                </li>
              </ul>
            </div>
          </div>}
        {currentStep === 5 && <div>
            <h4 className="text-xl font-bold text-white mb-4">
              Payment and Record Keeping
            </h4>
            <p className="text-indigo-200 mb-4">
              After submitting your VAT return, you'll need to make payment (if
              you owe VAT) or wait for a refund (if VAT is owed to you).
            </p>
            <div className="mb-6">
              <h5 className="text-lg font-medium text-white mb-2">
                Payment Methods:
              </h5>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircleIcon className="h-5 w-5 text-green-400 mr-2 mt-0.5" />
                  <div>
                    <span className="text-white font-medium">
                      Bank Transfer
                    </span>
                    <p className="text-indigo-200 text-sm">
                      Transfer the amount due to the Belastingdienst's bank
                      account
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="h-5 w-5 text-green-400 mr-2 mt-0.5" />
                  <div>
                    <span className="text-white font-medium">Direct Debit</span>
                    <p className="text-indigo-200 text-sm">
                      Set up automatic payments from your business account
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="h-5 w-5 text-green-400 mr-2 mt-0.5" />
                  <div>
                    <span className="text-white font-medium">iDEAL</span>
                    <p className="text-indigo-200 text-sm">
                      Pay online using the Dutch iDEAL payment system
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="bg-indigo-800/30 rounded-lg p-4 border border-indigo-500/20">
              <h5 className="text-white font-medium mb-2">
                Record Keeping Requirements
              </h5>
              <p className="text-indigo-200 text-sm mb-3">
                You must keep the following records for 7 years:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircleIcon className="h-5 w-5 text-green-400 mr-2 mt-0.5" />
                  <span className="text-indigo-200">
                    All sales and purchase invoices
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="h-5 w-5 text-green-400 mr-2 mt-0.5" />
                  <span className="text-indigo-200">
                    Bank statements and payment records
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="h-5 w-5 text-green-400 mr-2 mt-0.5" />
                  <span className="text-indigo-200">
                    Copies of submitted VAT returns
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="h-5 w-5 text-green-400 mr-2 mt-0.5" />
                  <span className="text-indigo-200">
                    Correspondence with the tax authorities
                  </span>
                </li>
              </ul>
            </div>
            <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4 mt-6">
              <div className="flex items-center">
                <CheckCircleIcon className="h-6 w-6 text-green-400 mr-2" />
                <h5 className="text-white font-medium">Congratulations!</h5>
              </div>
              <p className="text-indigo-200 text-sm mt-2">
                You've completed the VAT filing tutorial. You're now ready to
                prepare and file your VAT return. Remember that our system can
                automate much of this process for you, and our AI assistant is
                available 24/7 to answer any questions.
              </p>
            </div>
          </div>}
      </div>
      <div className="flex justify-between">
        <button onClick={handlePrevious} disabled={currentStep === 1} className={`px-4 py-2 rounded-lg flex items-center ${currentStep === 1 ? 'bg-indigo-900/30 text-indigo-400 cursor-not-allowed' : 'bg-indigo-900/50 border border-indigo-500/30 text-white hover:bg-indigo-800/50 transition-colors'}`}>
          <ArrowLeftIcon className="h-4 w-4 mr-2" />
          Previous
        </button>
        <button onClick={handleNext} disabled={currentStep === totalSteps} className={`px-4 py-2 rounded-lg flex items-center ${currentStep === totalSteps ? 'bg-green-600 text-white' : 'bg-[#EA3A70] text-white hover:bg-[#EA3A70]/90 transition-colors'}`}>
          {currentStep === totalSteps ? <>
              <CheckCircleIcon className="h-4 w-4 mr-2" />
              Complete
            </> : <>
              Next
              <ArrowRightIcon className="h-4 w-4 ml-2" />
            </>}
        </button>
      </div>
      {showModal && <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
          <div className="bg-indigo-900/90 backdrop-blur-md rounded-xl border border-indigo-500/30 p-6 max-w-4xl w-full">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold text-white">
                VAT Filing Video Tutorial
              </h3>
              <button onClick={closeModal} className="text-indigo-300 hover:text-white">
                <XIcon className="h-5 w-5" />
              </button>
            </div>
            <div className="aspect-video bg-black/50 rounded-lg flex items-center justify-center mb-4">
              <div className="text-center">
                <button onClick={toggleVideo} className="p-4 bg-[#EA3A70]/80 rounded-full hover:bg-[#EA3A70] transition-colors">
                  {videoPlaying ? <PauseIcon className="h-8 w-8 text-white" /> : <PlayIcon className="h-8 w-8 text-white" />}
                </button>
                <p className="text-indigo-200 mt-4">
                  {videoPlaying ? 'Video playing...' : 'Click to play video tutorial'}
                </p>
              </div>
            </div>
            <div className="flex justify-end">
              <button onClick={closeModal} className="px-4 py-2 bg-indigo-800/60 border border-indigo-500/30 text-white rounded-lg hover:bg-indigo-700/60 transition-colors">
                Close
              </button>
            </div>
          </div>
        </div>}
    </div>;
}