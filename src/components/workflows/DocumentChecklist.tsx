import React, { useState } from 'react';
import { CheckIcon, AlertCircleIcon } from 'lucide-react';
interface ChecklistItem {
  id: string;
  category: string;
  title: string;
  required: boolean;
  checked: boolean;
  comment?: string;
}
interface DocumentChecklistProps {
  onComplete: () => void;
}
export function DocumentChecklist({
  onComplete
}: DocumentChecklistProps) {
  const [checklist, setChecklist] = useState<ChecklistItem[]>([
  // KYC Section
  {
    id: 'kyc1',
    category: 'Permanent KYC File',
    title: 'Company details and contact information updated',
    required: true,
    checked: false
  },
  // Outgoing Invoices
  {
    id: 'inv1',
    category: 'Outgoing (Sales) Invoices',
    title: 'All sales invoices numbered and in chronological order',
    required: true,
    checked: false
  }, {
    id: 'inv2',
    category: 'Outgoing (Sales) Invoices',
    title: 'Invoices prepared according to tax requirements',
    required: true,
    checked: false
  }, {
    id: 'inv3',
    category: 'Outgoing (Sales) Invoices',
    title: 'No missing invoices or explanation provided for gaps',
    required: true,
    checked: false
  },
  // Bank Statements
  {
    id: 'bank1',
    category: 'Bank/Credit Card Statements',
    title: 'All statements present and sorted by number/month',
    required: true,
    checked: false
  }, {
    id: 'bank2',
    category: 'Bank/Credit Card Statements',
    title: 'All transactions documented with receipts',
    required: true,
    checked: false
  }, {
    id: 'bank3',
    category: 'Bank/Credit Card Statements',
    title: 'Credit card payments with associated receipts/invoices',
    required: true,
    checked: false
  },
  // Corporate Structure
  {
    id: 'corp1',
    category: 'Corporate Structure',
    title: 'Current Account/Loan Agreements documented',
    required: true,
    checked: false
  }, {
    id: 'corp2',
    category: 'Corporate Structure',
    title: 'Annual Reports on Subsidiaries (if applicable)',
    required: false,
    checked: false
  },
  // Additional Documents
  {
    id: 'other1',
    category: 'Other Documents',
    title: 'Business insurance policies',
    required: true,
    checked: false
  }, {
    id: 'other2',
    category: 'Other Documents',
    title: 'Sales tax returns (if self-filed)',
    required: false,
    checked: false
  }, {
    id: 'other3',
    category: 'Other Documents',
    title: 'Stock list as of December 31st',
    required: true,
    checked: false
  }]);
  const [comments, setComments] = useState<{
    [key: string]: string;
  }>({});
  const handleCheckItem = (id: string) => {
    setChecklist(checklist.map(item => item.id === id ? {
      ...item,
      checked: !item.checked
    } : item));
  };
  const handleCommentChange = (id: string, comment: string) => {
    setComments({
      ...comments,
      [id]: comment
    });
  };
  const isComplete = () => {
    return checklist.filter(item => item.required).every(item => item.checked);
  };
  const categories = Array.from(new Set(checklist.map(item => item.category)));
  return <div className="space-y-6">
      {categories.map(category => <div key={category} className="space-y-4">
          <h4 className="text-sm font-medium text-gray-900">{category}</h4>
          <div className="space-y-3">
            {checklist.filter(item => item.category === category).map(item => <div key={item.id} className="bg-gray-50 rounded-lg p-4 space-y-3">
                  <div className="flex items-start space-x-3">
                    <input type="checkbox" checked={item.checked} onChange={() => handleCheckItem(item.id)} className="mt-1 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
                    <div className="flex-1">
                      <label className="text-sm text-gray-700">
                        {item.title}
                        {item.required && <span className="ml-1 text-red-500">*</span>}
                      </label>
                      <textarea value={comments[item.id] || ''} onChange={e => handleCommentChange(item.id, e.target.value)} placeholder="Add comments if needed..." className="mt-2 w-full px-3 py-2 text-sm border border-gray-300 rounded-md" rows={1} />
                    </div>
                    {item.checked ? <CheckIcon className="h-5 w-5 text-green-500 mt-1" /> : item.required ? <AlertCircleIcon className="h-5 w-5 text-red-500 mt-1" /> : null}
                  </div>
                </div>)}
          </div>
        </div>)}
      <div className="mt-6">
        <button onClick={onComplete} disabled={!isComplete()} className={`w-full py-2 px-4 rounded-md text-sm font-medium ${isComplete() ? 'bg-green-600 text-white hover:bg-green-700' : 'bg-gray-100 text-gray-400 cursor-not-allowed'}`}>
          Confirm Document Checklist Complete
        </button>
        {!isComplete() && <p className="mt-2 text-sm text-red-500">
            Please complete all required items before proceeding
          </p>}
      </div>
    </div>;
}