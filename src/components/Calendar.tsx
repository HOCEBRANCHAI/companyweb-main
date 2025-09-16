import React, { useState } from 'react';
import { CalendarIcon, PlusIcon, CheckCircleIcon, ClockIcon, AlertCircleIcon, ArrowRightIcon, BellIcon, FilterIcon, XIcon } from 'lucide-react';
import { UpcomingDeadline } from './deadlines/UpcomingDeadline';
import { KYCOnboarding } from './onboarding/KYCOnboarding';
interface Event {
  id: string;
  title: string;
  date: string;
  type: 'deadline' | 'service';
  status: 'active' | 'pending' | 'completed' | 'warning';
  category: string;
  description?: string;
  action?: string;
}
export function Calendar() {
  const [showDeadlineForm, setShowDeadlineForm] = useState(false);
  const [showKYCWorkflow, setShowKYCWorkflow] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState<string>('all');
  const events: Event[] = [{
    id: 'kyc1',
    title: 'Complete KYC Onboarding',
    date: '2024-02-01',
    type: 'deadline',
    status: 'warning',
    category: 'Onboarding',
    description: 'Submit required KYC documents for verification',
    action: 'Start KYC'
  }, {
    id: '1',
    title: 'VAT Number',
    date: '2024-03-15',
    type: 'service',
    status: 'active',
    category: 'Registration',
    description: 'NL123456789B01',
    action: 'Renew VAT Registration'
  }, {
    id: '2',
    title: 'Employer Registration',
    date: '2024-02-01',
    type: 'service',
    status: 'pending',
    category: 'Registration',
    description: 'Processing registration request',
    action: 'Check Status'
  }, {
    id: '3',
    title: 'Q3 VAT Return',
    date: '2024-02-15',
    type: 'deadline',
    status: 'warning',
    category: 'Tax',
    description: 'Due in 15 days',
    action: 'Start Filing'
  }, {
    id: '4',
    title: 'Annual Report 2023',
    date: '2024-03-30',
    type: 'deadline',
    status: 'pending',
    category: 'Compliance',
    description: 'Due in 45 days',
    action: 'Start Preparation'
  }, {
    id: '5',
    title: 'Corporate Income Tax 2023',
    date: '2024-07-01',
    type: 'deadline',
    status: 'pending',
    category: 'Tax',
    description: 'Due in 6 months',
    action: 'Prepare Filing'
  }];
  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'active':
        return <CheckCircleIcon className="h-5 w-5 text-green-500" />;
      case 'pending':
        return <ClockIcon className="h-5 w-5 text-yellow-500" />;
      case 'warning':
        return <AlertCircleIcon className="h-5 w-5 text-red-500" />;
      default:
        return <CheckCircleIcon className="h-5 w-5 text-green-500" />;
    }
  };
  const categories = ['all', 'Tax', 'Registration', 'Compliance'];
  const filteredEvents = events.filter(event => selectedFilter === 'all' || event.category === selectedFilter);
  const handleActionClick = (action: string) => {
    if (action === 'Start KYC') {
      setShowKYCWorkflow(true);
    }
  };
  return <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <CalendarIcon className="h-5 w-5 text-blue-600" />
          <h2 className="text-lg font-medium text-gray-900">
            Calendar & Deadlines
          </h2>
        </div>
        <button onClick={() => setShowDeadlineForm(true)} className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 text-sm font-medium">
          <PlusIcon className="h-4 w-4 mr-2" />
          Add Deadline
        </button>
      </div>
      <div className="flex items-center space-x-2">
        <FilterIcon className="h-4 w-4 text-gray-400" />
        <div className="flex space-x-2">
          {categories.map(category => <button key={category} onClick={() => setSelectedFilter(category)} className={`px-3 py-1 rounded-full text-sm ${selectedFilter === category ? 'bg-blue-100 text-blue-800' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}>
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>)}
        </div>
      </div>
      <div className="space-y-4">
        {filteredEvents.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()).map(event => <div key={event.id} className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-sm transition-shadow">
              <div className="flex items-start justify-between">
                <div className="flex items-start space-x-3">
                  {getStatusIcon(event.status)}
                  <div>
                    <div className="flex items-center space-x-2">
                      <h3 className="text-sm font-medium text-gray-900">
                        {event.title}
                      </h3>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${event.type === 'deadline' ? 'bg-red-100 text-red-800' : 'bg-blue-100 text-blue-800'}`}>
                        {event.type.charAt(0).toUpperCase() + event.type.slice(1)}
                      </span>
                      <span className="text-xs text-gray-500">
                        {new Date(event.date).toLocaleDateString()}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 mt-1">
                      {event.description}
                    </p>
                  </div>
                </div>
                {event.action && <button onClick={() => handleActionClick(event.action!)} className={`flex items-center px-3 py-1 rounded-md text-xs font-medium ${event.status === 'warning' ? 'bg-red-600 text-white hover:bg-red-700' : 'bg-blue-600 text-white hover:bg-blue-700'}`}>
                    {event.action}
                    <ArrowRightIcon className="ml-1.5 h-3 w-3" />
                  </button>}
              </div>
            </div>)}
      </div>
      {showDeadlineForm && <UpcomingDeadline onClose={() => setShowDeadlineForm(false)} />}
      {showKYCWorkflow && <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-xl max-w-4xl w-full m-4 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between p-4 border-b border-gray-200">
              <h2 className="text-xl font-semibold text-gray-900">
                KYC Document Verification
              </h2>
              <button onClick={() => setShowKYCWorkflow(false)} className="text-gray-400 hover:text-gray-500">
                <XIcon className="h-6 w-6" />
              </button>
            </div>
            <KYCOnboarding />
          </div>
        </div>}
    </div>;
}