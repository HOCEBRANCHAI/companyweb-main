import React from 'react';
import { DownloadIcon, InfoIcon, CheckCircleIcon, AlertCircleIcon } from 'lucide-react';
interface VATReturnReportProps {
  vatReturnData: {
    period: string;
    totalSales: number;
    vatOnSales: number;
    totalPurchases: number;
    vatOnPurchases: number;
    vatPayable: number;
    dueDate: string;
  };
}
export function VATReturnReport({
  vatReturnData
}: VATReturnReportProps) {
  return <div className="space-y-6">
      <div className="bg-indigo-900/50 rounded-lg p-5 border border-indigo-500/30">
        <div className="flex items-start">
          <InfoIcon className="h-5 w-5 text-indigo-300 mr-3 mt-0.5 flex-shrink-0" />
          <div>
            <h4 className="text-white font-medium mb-1">
              VAT Return Format Report
            </h4>
            <p className="text-indigo-300 text-sm">
              This report presents your financial data in the official Dutch VAT
              return format. Use this information to fill in your VAT return on
              the tax authority website.
            </p>
          </div>
        </div>
        <div className="mt-4 flex justify-end">
          <button className="px-4 py-2 bg-indigo-900/50 border border-indigo-500/30 text-white rounded-lg hover:bg-indigo-800/50 flex items-center">
            <DownloadIcon className="h-4 w-4 mr-2" />
            Download PDF
          </button>
        </div>
      </div>
      {/* VAT Return Form */}
      <div className="bg-indigo-900/50 rounded-lg p-5 border border-indigo-500/30">
        <h4 className="text-white font-medium mb-4">
          Official VAT Return Format
        </h4>
        <div className="space-y-6">
          {/* Section 1: Domestic Transactions */}
          <div>
            <h5 className="text-indigo-300 text-sm uppercase mb-3 border-b border-indigo-500/30 pb-1">
              1. Domestic Transactions
            </h5>
            <div className="space-y-3">
              <div className="grid grid-cols-12 gap-4 items-center">
                <div className="col-span-1 text-center">
                  <span className="bg-indigo-900/70 px-2 py-1 rounded text-white text-xs">
                    1a
                  </span>
                </div>
                <div className="col-span-7">
                  <p className="text-white text-sm">
                    Supply of goods and services in the Netherlands (excluding
                    VAT)
                  </p>
                </div>
                <div className="col-span-4">
                  <input type="text" value={`€ ${vatReturnData.totalSales.toLocaleString()}`} readOnly className="w-full bg-indigo-900/70 border border-indigo-500/30 text-white rounded px-3 py-2 text-right" />
                </div>
              </div>
              <div className="grid grid-cols-12 gap-4 items-center">
                <div className="col-span-1 text-center">
                  <span className="bg-indigo-900/70 px-2 py-1 rounded text-white text-xs">
                    1b
                  </span>
                </div>
                <div className="col-span-7">
                  <p className="text-white text-sm">VAT amount on 1a</p>
                </div>
                <div className="col-span-4">
                  <input type="text" value={`€ ${vatReturnData.vatOnSales.toLocaleString()}`} readOnly className="w-full bg-indigo-900/70 border border-indigo-500/30 text-white rounded px-3 py-2 text-right" />
                </div>
              </div>
            </div>
          </div>
          {/* Section 2: Domestic Purchases */}
          <div>
            <h5 className="text-indigo-300 text-sm uppercase mb-3 border-b border-indigo-500/30 pb-1">
              2. Domestic Purchases
            </h5>
            <div className="space-y-3">
              <div className="grid grid-cols-12 gap-4 items-center">
                <div className="col-span-1 text-center">
                  <span className="bg-indigo-900/70 px-2 py-1 rounded text-white text-xs">
                    2a
                  </span>
                </div>
                <div className="col-span-7">
                  <p className="text-white text-sm">
                    Purchases and other costs (excluding VAT)
                  </p>
                </div>
                <div className="col-span-4">
                  <input type="text" value={`€ ${vatReturnData.totalPurchases.toLocaleString()}`} readOnly className="w-full bg-indigo-900/70 border border-indigo-500/30 text-white rounded px-3 py-2 text-right" />
                </div>
              </div>
              <div className="grid grid-cols-12 gap-4 items-center">
                <div className="col-span-1 text-center">
                  <span className="bg-indigo-900/70 px-2 py-1 rounded text-white text-xs">
                    2b
                  </span>
                </div>
                <div className="col-span-7">
                  <p className="text-white text-sm">VAT amount on 2a</p>
                </div>
                <div className="col-span-4">
                  <input type="text" value={`€ ${vatReturnData.vatOnPurchases.toLocaleString()}`} readOnly className="w-full bg-indigo-900/70 border border-indigo-500/30 text-white rounded px-3 py-2 text-right" />
                </div>
              </div>
            </div>
          </div>
          {/* Section 3: EU Transactions */}
          <div>
            <h5 className="text-indigo-300 text-sm uppercase mb-3 border-b border-indigo-500/30 pb-1">
              3. EU Transactions
            </h5>
            <div className="space-y-3">
              <div className="grid grid-cols-12 gap-4 items-center">
                <div className="col-span-1 text-center">
                  <span className="bg-indigo-900/70 px-2 py-1 rounded text-white text-xs">
                    3a
                  </span>
                </div>
                <div className="col-span-7">
                  <p className="text-white text-sm">
                    Supply of goods to EU countries (excluding VAT)
                  </p>
                </div>
                <div className="col-span-4">
                  <input type="text" value="€ 0" readOnly className="w-full bg-indigo-900/70 border border-indigo-500/30 text-white rounded px-3 py-2 text-right" />
                </div>
              </div>
              <div className="grid grid-cols-12 gap-4 items-center">
                <div className="col-span-1 text-center">
                  <span className="bg-indigo-900/70 px-2 py-1 rounded text-white text-xs">
                    3b
                  </span>
                </div>
                <div className="col-span-7">
                  <p className="text-white text-sm">
                    Supply of services to EU countries (excluding VAT)
                  </p>
                </div>
                <div className="col-span-4">
                  <input type="text" value="€ 0" readOnly className="w-full bg-indigo-900/70 border border-indigo-500/30 text-white rounded px-3 py-2 text-right" />
                </div>
              </div>
              <div className="grid grid-cols-12 gap-4 items-center">
                <div className="col-span-1 text-center">
                  <span className="bg-indigo-900/70 px-2 py-1 rounded text-white text-xs">
                    3c
                  </span>
                </div>
                <div className="col-span-7">
                  <p className="text-white text-sm">
                    Acquisition of goods from EU countries (excluding VAT)
                  </p>
                </div>
                <div className="col-span-4">
                  <input type="text" value="€ 0" readOnly className="w-full bg-indigo-900/70 border border-indigo-500/30 text-white rounded px-3 py-2 text-right" />
                </div>
              </div>
            </div>
          </div>
          {/* Section 4: VAT Calculation */}
          <div className="bg-indigo-900/70 rounded-lg p-4 border border-indigo-500/30">
            <h5 className="text-indigo-300 text-sm uppercase mb-3 border-b border-indigo-500/30 pb-1">
              4. VAT Calculation
            </h5>
            <div className="space-y-3">
              <div className="grid grid-cols-12 gap-4 items-center">
                <div className="col-span-1 text-center">
                  <span className="bg-[#EA3A70]/20 px-2 py-1 rounded text-[#EA3A70] text-xs">
                    4a
                  </span>
                </div>
                <div className="col-span-7">
                  <p className="text-white text-sm">VAT due (1b + 2b)</p>
                </div>
                <div className="col-span-4">
                  <input type="text" value={`€ ${vatReturnData.vatOnSales.toLocaleString()}`} readOnly className="w-full bg-[#EA3A70]/10 border border-[#EA3A70]/30 text-white rounded px-3 py-2 text-right" />
                </div>
              </div>
              <div className="grid grid-cols-12 gap-4 items-center">
                <div className="col-span-1 text-center">
                  <span className="bg-blue-500/20 px-2 py-1 rounded text-blue-300 text-xs">
                    4b
                  </span>
                </div>
                <div className="col-span-7">
                  <p className="text-white text-sm">
                    VAT deductible (input VAT)
                  </p>
                </div>
                <div className="col-span-4">
                  <input type="text" value={`€ ${vatReturnData.vatOnPurchases.toLocaleString()}`} readOnly className="w-full bg-blue-500/10 border border-blue-500/30 text-white rounded px-3 py-2 text-right" />
                </div>
              </div>
              <div className="grid grid-cols-12 gap-4 items-center pt-3 border-t border-indigo-500/30">
                <div className="col-span-1 text-center">
                  <span className="bg-indigo-900/70 px-2 py-1 rounded text-white text-xs">
                    5
                  </span>
                </div>
                <div className="col-span-7">
                  <p className="text-white font-medium">
                    VAT to be paid or refunded (4a - 4b)
                  </p>
                </div>
                <div className="col-span-4">
                  <input type="text" value={`€ ${vatReturnData.vatPayable.toLocaleString()}`} readOnly className="w-full bg-indigo-900/70 border border-indigo-500/30 text-white rounded px-3 py-2 text-right font-bold" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Validation Section */}
      <div className="bg-indigo-900/50 rounded-lg p-5 border border-indigo-500/30">
        <h4 className="text-white font-medium mb-4">Validation Checks</h4>
        <div className="space-y-3">
          <div className="flex items-start">
            <div className="mt-0.5">
              <CheckCircleIcon className="h-5 w-5 text-green-400" />
            </div>
            <div className="ml-3">
              <p className="text-white text-sm">
                All transactions have been correctly categorized
              </p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="mt-0.5">
              <CheckCircleIcon className="h-5 w-5 text-green-400" />
            </div>
            <div className="ml-3">
              <p className="text-white text-sm">
                VAT calculations match the transaction data
              </p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="mt-0.5">
              <AlertCircleIcon className="h-5 w-5 text-yellow-400" />
            </div>
            <div className="ml-3">
              <p className="text-white text-sm">
                There are 3 unverified transactions - please review before
                submission
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>;
}