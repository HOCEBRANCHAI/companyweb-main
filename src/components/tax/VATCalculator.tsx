import React, { useState } from 'react';
import { XIcon, InfoIcon, CalculatorIcon, ArrowRightIcon } from 'lucide-react';
interface VATCalculatorProps {
  onClose: () => void;
}
export function VATCalculator({
  onClose
}: VATCalculatorProps) {
  const [hasCalculated, setHasCalculated] = useState(false);
  const [showInfo, setShowInfo] = useState(false);
  // VAT input values
  const [localVAT, setLocalVAT] = useState<string>('');
  const [importVAT, setImportVAT] = useState<string>('');
  const [euReverseCharge, setEuReverseCharge] = useState<string>('');
  const [localReverseCharge, setLocalReverseCharge] = useState<string>('');
  const [exportVAT, setExportVAT] = useState<string>('');
  const [vatOnSales, setVatOnSales] = useState<string>('');
  const calculateVAT = () => {
    setHasCalculated(true);
  };
  // Parse input values to numbers
  const parsedLocalVAT = parseFloat(localVAT.replace(/,/g, '')) || 0;
  const parsedImportVAT = parseFloat(importVAT.replace(/,/g, '')) || 0;
  const parsedEuReverseCharge = parseFloat(euReverseCharge.replace(/,/g, '')) || 0;
  const parsedLocalReverseCharge = parseFloat(localReverseCharge.replace(/,/g, '')) || 0;
  const parsedExportVAT = parseFloat(exportVAT.replace(/,/g, '')) || 0;
  const parsedVatOnSales = parseFloat(vatOnSales.replace(/,/g, '')) || 0;
  // Calculate total input VAT
  const totalInputVAT = parsedLocalVAT + parsedImportVAT + parsedEuReverseCharge + parsedLocalReverseCharge;
  // Calculate VAT payable or refundable
  const vatPayable = parsedVatOnSales - totalInputVAT;
  const isRefund = vatPayable < 0;
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('nl-NL', {
      style: 'currency',
      currency: 'EUR',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }).format(amount);
  };
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>, setter: React.Dispatch<React.SetStateAction<string>>) => {
    // Allow only numbers and commas
    const value = e.target.value.replace(/[^\d,]/g, '');
    setter(value);
    setHasCalculated(false);
  };
  return <div className="fixed inset-0 bg-gray-600 bg-opacity-75 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center p-6 border-b border-gray-200">
          <h2 className="text-xl font-semibold text-gray-900">
            VAT Calculator
          </h2>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-500">
            <XIcon className="h-6 w-6" />
          </button>
        </div>
        <div className="p-6 space-y-6">
          <div className="bg-blue-50 border border-blue-100 rounded-lg p-4">
            <div className="flex items-start">
              <InfoIcon className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-sm text-blue-700">
                  This calculator helps you estimate your VAT payable or
                  refundable amount based on your business transactions.
                </p>
                <button onClick={() => setShowInfo(!showInfo)} className="text-blue-600 text-sm mt-1 underline hover:text-blue-800">
                  {showInfo ? 'Hide VAT category information' : 'Show VAT category information'}
                </button>
                {showInfo && <div className="mt-2 text-sm text-blue-700 space-y-2">
                    <p className="font-medium">VAT Categories:</p>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>
                        <span className="font-medium">Local Charged VAT:</span>{' '}
                        VAT charged by local suppliers
                      </li>
                      <li>
                        <span className="font-medium">
                          VAT Paid on Imports:
                        </span>{' '}
                        VAT paid on imported goods or services
                      </li>
                      <li>
                        <span className="font-medium">EU Reverse Charge:</span>{' '}
                        VAT from EU transactions with reverse charge mechanism
                      </li>
                      <li>
                        <span className="font-medium">
                          Local Reverse Charge:
                        </span>{' '}
                        VAT from domestic transactions with reverse charge
                      </li>
                      <li>
                        <span className="font-medium">
                          Exports (Outside EU):
                        </span>{' '}
                        Zero-rate VAT for exports to non-EU countries
                      </li>
                    </ul>
                  </div>}
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-md font-medium text-gray-900">
              Input VAT (Deductible)
            </h3>
            <div>
              <label htmlFor="localVAT" className="block text-sm font-medium text-gray-700">
                Local Charged VAT by Local Suppliers
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <span className="text-gray-500 sm:text-sm">€</span>
                </div>
                <input type="text" id="localVAT" value={localVAT} onChange={e => handleInputChange(e, setLocalVAT)} className="focus:ring-blue-500 focus:border-blue-500 block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md py-2 border" placeholder="0,00" />
              </div>
            </div>
            <div>
              <label htmlFor="importVAT" className="block text-sm font-medium text-gray-700">
                VAT Paid on Imports
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <span className="text-gray-500 sm:text-sm">€</span>
                </div>
                <input type="text" id="importVAT" value={importVAT} onChange={e => handleInputChange(e, setImportVAT)} className="focus:ring-blue-500 focus:border-blue-500 block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md py-2 border" placeholder="0,00" />
              </div>
            </div>
            <div>
              <label htmlFor="euReverseCharge" className="block text-sm font-medium text-gray-700">
                VAT Reverse Charge Method for EU Buyers
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <span className="text-gray-500 sm:text-sm">€</span>
                </div>
                <input type="text" id="euReverseCharge" value={euReverseCharge} onChange={e => handleInputChange(e, setEuReverseCharge)} className="focus:ring-blue-500 focus:border-blue-500 block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md py-2 border" placeholder="0,00" />
              </div>
            </div>
            <div>
              <label htmlFor="localReverseCharge" className="block text-sm font-medium text-gray-700">
                Reverse Charge Method within Local Country
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <span className="text-gray-500 sm:text-sm">€</span>
                </div>
                <input type="text" id="localReverseCharge" value={localReverseCharge} onChange={e => handleInputChange(e, setLocalReverseCharge)} className="focus:ring-blue-500 focus:border-blue-500 block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md py-2 border" placeholder="0,00" />
              </div>
            </div>
            <div>
              <label htmlFor="exportVAT" className="block text-sm font-medium text-gray-700">
                No VAT on Exports (Outside EU)
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <span className="text-gray-500 sm:text-sm">€</span>
                </div>
                <input type="text" id="exportVAT" value={exportVAT} onChange={e => handleInputChange(e, setExportVAT)} className="focus:ring-blue-500 focus:border-blue-500 block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md py-2 border" placeholder="0,00" />
              </div>
              <p className="mt-1 text-xs text-gray-500">
                Value of exports (for reference only, not used in calculation)
              </p>
            </div>
            <h3 className="text-md font-medium text-gray-900 pt-2">
              Output VAT (Collected)
            </h3>
            <div>
              <label htmlFor="vatOnSales" className="block text-sm font-medium text-gray-700">
                VAT Collected on Sales
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <span className="text-gray-500 sm:text-sm">€</span>
                </div>
                <input type="text" id="vatOnSales" value={vatOnSales} onChange={e => handleInputChange(e, setVatOnSales)} className="focus:ring-blue-500 focus:border-blue-500 block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md py-2 border" placeholder="0,00" />
              </div>
            </div>
            <button onClick={calculateVAT} className="w-full flex items-center justify-center px-4 py-2 rounded-md text-sm font-medium bg-blue-600 text-white hover:bg-blue-700">
              <CalculatorIcon className="mr-2 h-4 w-4" />
              Calculate VAT
            </button>
          </div>
          {hasCalculated && <div className="mt-6 space-y-4">
              <h3 className="text-lg font-medium text-gray-900">
                VAT Calculation Results
              </h3>
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">
                      Total Input VAT (Deductible):
                    </span>
                    <span className="font-medium">
                      {formatCurrency(totalInputVAT)}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">
                      Total Output VAT (Collected):
                    </span>
                    <span className="font-medium">
                      {formatCurrency(parsedVatOnSales)}
                    </span>
                  </div>
                  <div className="border-t border-gray-200 pt-3">
                    <div className="flex justify-between text-lg">
                      <span className="font-medium text-gray-900">
                        {isRefund ? 'VAT Refund Amount:' : 'VAT Payable Amount:'}
                      </span>
                      <span className={`font-bold ${isRefund ? 'text-green-600' : 'text-blue-600'}`}>
                        {formatCurrency(Math.abs(vatPayable))}
                      </span>
                    </div>
                    <p className="text-sm text-gray-500 mt-1">
                      {isRefund ? 'You are eligible for a VAT refund' : 'You need to pay this amount to the tax authorities'}
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-yellow-50 border border-yellow-100 rounded-lg p-4">
                <div className="flex items-start">
                  <InfoIcon className="h-5 w-5 text-yellow-600 mr-2 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-yellow-700">
                    This is an estimate based on the values you provided. Actual
                    VAT calculations may vary based on specific business
                    circumstances and local tax regulations.
                  </p>
                </div>
              </div>
              <div className="flex justify-end">
                <button onClick={onClose} className="px-4 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 text-sm font-medium">
                  Close Calculator
                </button>
              </div>
            </div>}
        </div>
      </div>
    </div>;
}