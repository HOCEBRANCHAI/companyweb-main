import React, { useState } from 'react';
import { SearchIcon, FilterIcon, ArrowUpIcon, ArrowDownIcon, EuroIcon } from 'lucide-react';
interface Transaction {
  id: string;
  date: string;
  description: string;
  amount: number;
  type: 'income' | 'expense';
  ledger: string;
  category: string;
  reference: string;
}
export function Transactions() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLedger, setSelectedLedger] = useState('all');
  const transactions: Transaction[] = [{
    id: '1',
    date: '2024-02-15',
    description: 'Client Payment - Project Alpha',
    amount: 5000.0,
    type: 'income',
    ledger: 'Accounts Receivable',
    category: 'Service Revenue',
    reference: 'INV-2024-001'
  }, {
    id: '2',
    date: '2024-02-14',
    description: 'Office Rent Payment',
    amount: 2500.0,
    type: 'expense',
    ledger: 'Rent Expense',
    category: 'Operating Expenses',
    reference: 'RENT-2024-02'
  }, {
    id: '3',
    date: '2024-02-13',
    description: 'Software Subscription',
    amount: 199.99,
    type: 'expense',
    ledger: 'Software Expense',
    category: 'Operating Expenses',
    reference: 'SUB-2024-02'
  }];
  const ledgers = ['all', 'Accounts Receivable', 'Rent Expense', 'Software Expense'];
  return <div className="space-y-6">
      {/* Filters */}
      <div className="flex flex-wrap gap-4">
        <div className="flex-1 min-w-[200px]">
          <div className="relative">
            <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input type="text" placeholder="Search transactions..." value={searchTerm} onChange={e => setSearchTerm(e.target.value)} className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-md" />
          </div>
        </div>
        <select value={selectedLedger} onChange={e => setSelectedLedger(e.target.value)} className="border border-gray-300 rounded-md px-4 py-2">
          {ledgers.map(ledger => <option key={ledger} value={ledger}>
              {ledger.charAt(0).toUpperCase() + ledger.slice(1)}
            </option>)}
        </select>
      </div>
      {/* Transactions Table */}
      <div className="bg-white rounded-lg border border-gray-200">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Description
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Reference
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Ledger
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Category
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Amount
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {transactions.filter(transaction => (selectedLedger === 'all' || transaction.ledger === selectedLedger) && (transaction.description.toLowerCase().includes(searchTerm.toLowerCase()) || transaction.reference.toLowerCase().includes(searchTerm.toLowerCase()))).map(transaction => <tr key={transaction.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {new Date(transaction.date).toLocaleDateString()}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900">
                      {transaction.description}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {transaction.reference}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {transaction.ledger}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {transaction.category}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-right">
                      <span className={`flex items-center justify-end ${transaction.type === 'income' ? 'text-green-600' : 'text-red-600'}`}>
                        {transaction.type === 'income' ? <ArrowUpIcon className="h-4 w-4 mr-1" /> : <ArrowDownIcon className="h-4 w-4 mr-1" />}
                        €{transaction.amount.toFixed(2)}
                      </span>
                    </td>
                  </tr>)}
            </tbody>
          </table>
        </div>
      </div>
    </div>;
}