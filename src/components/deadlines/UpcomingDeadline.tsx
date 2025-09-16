import React, { useState } from 'react';
import { PlusIcon, XIcon, CalendarIcon, ArrowRightIcon, AlertTriangleIcon } from 'lucide-react';
interface Deadline {
  id: string;
  title: string;
  dueDate: string;
  priority: 'high' | 'medium' | 'low';
  category: 'tax' | 'compliance' | 'financial' | 'other';
}
interface UpcomingDeadlineProps {
  onClose: () => void;
}
export function UpcomingDeadline({
  onClose
}: UpcomingDeadlineProps) {
  const [title, setTitle] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [priority, setPriority] = useState<'high' | 'medium' | 'low'>('medium');
  const [category, setCategory] = useState<'tax' | 'compliance' | 'financial' | 'other'>('other');
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onClose();
  };
  return <div className="fixed inset-0 bg-gray-900/75 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-gradient-to-b from-[#0a0526] to-[#120a38] rounded-lg shadow-xl max-w-md w-full border border-purple-900/50">
        <div className="flex items-center justify-between p-4 border-b border-purple-900/50">
          <h3 className="text-lg font-medium text-white flex items-center">
            <CalendarIcon className="h-5 w-5 text-pink-500 mr-2" />
            Add New Deadline
          </h3>
          <button onClick={onClose} className="text-purple-300 hover:text-white transition-colors">
            <XIcon className="h-5 w-5" />
          </button>
        </div>
        <form onSubmit={handleSubmit} className="p-4 space-y-4">
          <div>
            <label htmlFor="title" className="block text-sm font-medium text-purple-200">
              Title
            </label>
            <input type="text" id="title" value={title} onChange={e => setTitle(e.target.value)} className="mt-1 block w-full bg-[#0c0630] border border-purple-900/50 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-pink-500 focus:border-pink-500 text-white sm:text-sm" required />
          </div>
          <div>
            <label htmlFor="dueDate" className="block text-sm font-medium text-purple-200">
              Due Date
            </label>
            <input type="date" id="dueDate" value={dueDate} onChange={e => setDueDate(e.target.value)} className="mt-1 block w-full bg-[#0c0630] border border-purple-900/50 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-pink-500 focus:border-pink-500 text-white sm:text-sm" required />
          </div>
          <div>
            <label htmlFor="category" className="block text-sm font-medium text-purple-200">
              Category
            </label>
            <select id="category" value={category} onChange={e => setCategory(e.target.value as any)} className="mt-1 block w-full bg-[#0c0630] border border-purple-900/50 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-pink-500 focus:border-pink-500 text-white sm:text-sm">
              <option value="tax">Tax</option>
              <option value="compliance">Compliance</option>
              <option value="financial">Financial</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div>
            <label htmlFor="priority" className="block text-sm font-medium text-purple-200">
              Priority
            </label>
            <select id="priority" value={priority} onChange={e => setPriority(e.target.value as any)} className="mt-1 block w-full bg-[#0c0630] border border-purple-900/50 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-pink-500 focus:border-pink-500 text-white sm:text-sm">
              <option value="high">High</option>
              <option value="medium">Medium</option>
              <option value="low">Low</option>
            </select>
          </div>
          <div className="flex justify-end space-x-3 pt-4">
            <button type="button" onClick={onClose} className="px-4 py-2 border border-purple-700 rounded-md shadow-sm text-sm font-medium text-purple-200 bg-transparent hover:bg-purple-900/30 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500">
              Cancel
            </button>
            <button type="submit" className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-500 hover:to-purple-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500">
              Add Deadline
            </button>
          </div>
        </form>
      </div>
    </div>;
}