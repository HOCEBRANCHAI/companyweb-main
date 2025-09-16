import React from 'react';
import { InvoiceTable } from '../../components/billing/InvoiceTable';
import { EuroIcon } from 'lucide-react';
export function Billing() {
  return <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Billing</h1>
          <p className="text-gray-600 mt-1">
            Manage your billing information and view your invoices
          </p>
        </div>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 text-sm font-medium">
          Payment Methods
        </button>
      </div>
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-3">
            <div className="bg-blue-100 p-2 rounded-lg">
              <EuroIcon className="h-6 w-6 text-blue-600" />
            </div>
            <div>
              <h2 className="text-lg font-medium text-gray-900">
                Your Invoices
              </h2>
              <p className="text-sm text-gray-500">
                View and download your invoice history
              </p>
            </div>
          </div>
        </div>
        <InvoiceTable />
      </div>
    </div>;
}