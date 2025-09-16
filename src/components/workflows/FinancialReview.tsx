import React, { useState } from 'react';
import { CheckIcon, AlertCircleIcon, EyeIcon } from 'lucide-react';
interface FinancialReviewProps {
  onComplete: () => void;
}
interface ReviewItem {
  id: string;
  category: string;
  title: string;
  status: 'pending' | 'approved' | 'rejected';
  comments: string;
}
export function FinancialReview({
  onComplete
}: FinancialReviewProps) {
  const [reviewItems, setReviewItems] = useState<ReviewItem[]>([{
    id: 'rev1',
    category: 'Income Statement',
    title: 'Revenue Recognition',
    status: 'pending',
    comments: ''
  }, {
    id: 'rev2',
    category: 'Income Statement',
    title: 'Expense Classification',
    status: 'pending',
    comments: ''
  }, {
    id: 'rev3',
    category: 'Balance Sheet',
    title: 'Asset Valuation',
    status: 'pending',
    comments: ''
  }, {
    id: 'rev4',
    category: 'Balance Sheet',
    title: 'Liability Recognition',
    status: 'pending',
    comments: ''
  }, {
    id: 'rev5',
    category: 'Notes',
    title: 'Related Party Transactions',
    status: 'pending',
    comments: ''
  }]);
  const handleStatusChange = (id: string, status: 'approved' | 'rejected') => {
    setReviewItems(items => items.map(item => item.id === id ? {
      ...item,
      status
    } : item));
  };
  const handleCommentChange = (id: string, comments: string) => {
    setReviewItems(items => items.map(item => item.id === id ? {
      ...item,
      comments
    } : item));
  };
  const isComplete = () => {
    return reviewItems.every(item => item.status !== 'pending');
  };
  const categories = Array.from(new Set(reviewItems.map(item => item.category)));
  return <div className="space-y-6">
      {categories.map(category => <div key={category} className="space-y-4">
          <h4 className="text-sm font-medium text-gray-900">{category}</h4>
          <div className="space-y-4">
            {reviewItems.filter(item => item.category === category).map(item => <div key={item.id} className="bg-gray-50 rounded-lg p-4 space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      {item.status === 'approved' ? <CheckIcon className="h-5 w-5 text-green-500" /> : item.status === 'rejected' ? <AlertCircleIcon className="h-5 w-5 text-red-500" /> : <EyeIcon className="h-5 w-5 text-gray-400" />}
                      <span className="text-sm font-medium text-gray-900">
                        {item.title}
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <button onClick={() => handleStatusChange(item.id, 'approved')} className={`px-3 py-1 rounded-md text-sm font-medium ${item.status === 'approved' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800 hover:bg-gray-200'}`}>
                        Approve
                      </button>
                      <button onClick={() => handleStatusChange(item.id, 'rejected')} className={`px-3 py-1 rounded-md text-sm font-medium ${item.status === 'rejected' ? 'bg-red-100 text-red-800' : 'bg-gray-100 text-gray-800 hover:bg-gray-200'}`}>
                        Reject
                      </button>
                    </div>
                  </div>
                  <div>
                    <textarea value={item.comments} onChange={e => handleCommentChange(item.id, e.target.value)} placeholder="Add comments..." className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md" rows={2} />
                  </div>
                </div>)}
          </div>
        </div>)}
      <div className="mt-6">
        <button onClick={onComplete} disabled={!isComplete()} className={`w-full py-2 px-4 rounded-md text-sm font-medium ${isComplete() ? 'bg-green-600 text-white hover:bg-green-700' : 'bg-gray-100 text-gray-400 cursor-not-allowed'}`}>
          Complete Financial Review
        </button>
        {!isComplete() && <p className="mt-2 text-sm text-red-500">
            Please review all items before proceeding
          </p>}
      </div>
    </div>;
}