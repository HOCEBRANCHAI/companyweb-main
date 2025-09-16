import React, { useState } from 'react';
import { FileTextIcon, DownloadIcon } from 'lucide-react';
interface Invoice {
  id: string;
  invoiceNumber: string;
  date: string;
  dueDate: string;
  services: string[];
  total: number;
  status: 'paid' | 'unpaid';
}
export function InvoiceTable() {
  const [invoices] = useState<Invoice[]>([{
    id: '1',
    invoiceNumber: 'HOC00011',
    date: 'February 10, 2025',
    dueDate: 'February 17, 2025',
    services: ['Core Bookkeeping (extra processing fee applies)', 'FS Preparation for 2025', 'Corporate Tax Filing 2025'],
    total: 2208.25,
    status: 'unpaid'
  }, {
    id: '2',
    invoiceNumber: 'HOC00010',
    date: 'February 10, 2025',
    dueDate: 'February 17, 2025',
    services: ['VAT ID Application', 'Annual VAT Administration (incl. VAT Submission) in Germany'],
    total: 1936.0,
    status: 'unpaid'
  }, {
    id: '3',
    invoiceNumber: 'HOC00009',
    date: 'February 10, 2025',
    dueDate: 'March 17, 2025',
    services: ['Payrolling M. Soliman as per March 2025', 'Personal Income Tax Filing for 3 Directors'],
    total: 1210.0,
    status: 'paid'
  }, {
    id: '4',
    invoiceNumber: 'HOC00008',
    date: 'February 10, 2025',
    dueDate: 'February 17, 2025',
    services: ['Core Bookkeeping (Discounted Fee)', 'FS Preparation for 2024 (Discounted Rate)', 'Tax Analysis (not including tax filing)', 'Corporate Tax Filing 2024'],
    total: 1663.75,
    status: 'paid'
  }, {
    id: '5',
    invoiceNumber: 'HOC00007',
    date: 'February 10, 2025',
    dueDate: 'February 17, 2025',
    services: ['VAT Filing 2025', 'Accounting Services (Administration & VAT Returns)', 'Filing of ICT Return Monthly', 'Monthly ICP Returns (Free)'],
    total: 968.0,
    status: 'paid'
  }]);
  return <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead>
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Invoice Number
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Date
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Due Date
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Services
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Total
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Status
            </th>
            <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {invoices.map(invoice => <tr key={invoice.id} className="hover:bg-gray-50">
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                {invoice.invoiceNumber}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {invoice.date}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {invoice.dueDate}
              </td>
              <td className="px-6 py-4 text-sm text-gray-500">
                <ul className="list-disc list-inside">
                  {invoice.services.map((service, index) => <li key={index}>{service}</li>)}
                </ul>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                ${invoice.total.toFixed(2)}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${invoice.status === 'paid' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
                  {invoice.status.charAt(0).toUpperCase() + invoice.status.slice(1)}
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                <button className="text-blue-600 hover:text-blue-900">
                  <DownloadIcon className="h-5 w-5" />
                </button>
              </td>
            </tr>)}
        </tbody>
      </table>
    </div>;
}