import React, { useState } from 'react';
import { CalendarIcon, ClockIcon, AlertCircleIcon, CheckCircleIcon, PlusIcon, ChevronLeftIcon, ChevronRightIcon, FileTextIcon, BellIcon, FilterIcon, ArrowRightIcon } from 'lucide-react';
interface DeadlineEvent {
  id: string;
  title: string;
  date: string;
  type: 'tax' | 'corporate' | 'legal' | 'compliance';
  priority: 'high' | 'medium' | 'low';
  status: 'upcoming' | 'due_soon' | 'overdue' | 'completed';
  description?: string;
}
export function ComplianceCalendar() {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedView, setSelectedView] = useState('calendar');
  const [selectedFilter, setSelectedFilter] = useState('all');
  const deadlines: DeadlineEvent[] = [{
    id: '1',
    title: 'Annual Accounts Filing',
    date: '2024-05-15',
    type: 'corporate',
    priority: 'high',
    status: 'upcoming',
    description: 'Submit annual accounts to Chamber of Commerce'
  }, {
    id: '2',
    title: 'VAT Return Q1',
    date: '2024-04-30',
    type: 'tax',
    priority: 'high',
    status: 'due_soon',
    description: 'File quarterly VAT return'
  }, {
    id: '3',
    title: 'Board Meeting',
    date: '2024-04-12',
    type: 'corporate',
    priority: 'medium',
    status: 'upcoming',
    description: 'Quarterly board meeting'
  }, {
    id: '4',
    title: 'Director KYC Renewal',
    date: '2024-06-10',
    type: 'compliance',
    priority: 'medium',
    status: 'upcoming',
    description: 'Annual KYC verification for directors'
  }, {
    id: '5',
    title: 'UBO Register Update',
    date: '2024-04-05',
    type: 'legal',
    priority: 'high',
    status: 'overdue',
    description: 'Update UBO information in the register'
  }, {
    id: '6',
    title: 'Corporate Income Tax Payment',
    date: '2024-06-30',
    type: 'tax',
    priority: 'high',
    status: 'upcoming',
    description: 'Pay corporate income tax for previous fiscal year'
  }, {
    id: '7',
    title: 'Shareholder Meeting',
    date: '2024-05-28',
    type: 'corporate',
    priority: 'medium',
    status: 'upcoming',
    description: 'Annual general meeting of shareholders'
  }];
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-green-400';
      case 'overdue':
        return 'bg-red-500';
      case 'due_soon':
        return 'bg-yellow-500';
      default:
        return 'bg-blue-500';
    }
  };
  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'tax':
        return <FileTextIcon className="h-4 w-4 text-yellow-400" />;
      case 'legal':
        return <FileTextIcon className="h-4 w-4 text-blue-400" />;
      case 'compliance':
        return <CheckCircleIcon className="h-4 w-4 text-green-400" />;
      default:
        return <FileTextIcon className="h-4 w-4 text-indigo-300" />;
    }
  };
  const getPriorityBadge = (priority: string) => {
    switch (priority) {
      case 'high':
        return <span className="px-2 py-0.5 bg-red-900/30 text-red-400 rounded-full text-xs">
            High
          </span>;
      case 'medium':
        return <span className="px-2 py-0.5 bg-yellow-900/30 text-yellow-400 rounded-full text-xs">
            Medium
          </span>;
      case 'low':
        return <span className="px-2 py-0.5 bg-green-900/30 text-green-400 rounded-full text-xs">
            Low
          </span>;
      default:
        return null;
    }
  };
  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'completed':
        return <span className="px-2 py-0.5 bg-green-900/30 text-green-400 rounded-full text-xs">
            Completed
          </span>;
      case 'overdue':
        return <span className="px-2 py-0.5 bg-red-900/30 text-red-400 rounded-full text-xs">
            Overdue
          </span>;
      case 'due_soon':
        return <span className="px-2 py-0.5 bg-yellow-900/30 text-yellow-400 rounded-full text-xs">
            Due Soon
          </span>;
      default:
        return <span className="px-2 py-0.5 bg-blue-900/30 text-blue-400 rounded-full text-xs">
            Upcoming
          </span>;
    }
  };
  const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const prevMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1));
  };
  const nextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1));
  };
  const filteredDeadlines = selectedFilter === 'all' ? deadlines : deadlines.filter(d => d.type === selectedFilter);
  return <div className="bg-[#1B1537]/80 backdrop-blur-sm rounded-xl border border-[#2D2755] overflow-hidden">
      <div className="p-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-xl font-bold text-white">
              Corporate & Trust Calendar
            </h3>
            <p className="text-indigo-200 mt-1">
              Track important deadlines and compliance requirements
            </p>
          </div>
          <button className="px-4 py-2 bg-[#EA3A70] text-white rounded-lg hover:bg-[#EA3A70]/90 transition-colors text-sm font-medium flex items-center">
            <PlusIcon className="h-4 w-4 mr-2" />
            Add Deadline
          </button>
        </div>
        <div className="flex flex-wrap justify-between items-center mb-6">
          <div className="flex space-x-3 mb-4 md:mb-0">
            <button onClick={() => setSelectedView('calendar')} className={`px-3 py-1.5 rounded-lg text-sm flex items-center ${selectedView === 'calendar' ? 'bg-[#EA3A70] text-white' : 'bg-indigo-900/50 text-indigo-200 border border-indigo-500/30'}`}>
              <CalendarIcon className="h-4 w-4 mr-1.5" />
              Calendar View
            </button>
            <button onClick={() => setSelectedView('list')} className={`px-3 py-1.5 rounded-lg text-sm flex items-center ${selectedView === 'list' ? 'bg-[#EA3A70] text-white' : 'bg-indigo-900/50 text-indigo-200 border border-indigo-500/30'}`}>
              <ClockIcon className="h-4 w-4 mr-1.5" />
              Timeline View
            </button>
          </div>
          <div className="flex items-center space-x-2">
            <div className="flex items-center bg-indigo-900/50 rounded-lg p-1 border border-indigo-500/30">
              <button onClick={prevMonth} className="p-1 text-indigo-300 hover:text-white">
                <ChevronLeftIcon className="h-5 w-5" />
              </button>
              <span className="px-2 text-white font-medium">
                {monthNames[currentMonth.getMonth()]}{' '}
                {currentMonth.getFullYear()}
              </span>
              <button onClick={nextMonth} className="p-1 text-indigo-300 hover:text-white">
                <ChevronRightIcon className="h-5 w-5" />
              </button>
            </div>
            <select value={selectedFilter} onChange={e => setSelectedFilter(e.target.value)} className="bg-indigo-900/50 border border-indigo-500/30 rounded-lg text-white py-1.5 px-3 text-sm">
              <option value="all">All Types</option>
              <option value="tax">Tax</option>
              <option value="corporate">Corporate</option>
              <option value="legal">Legal</option>
              <option value="compliance">Compliance</option>
            </select>
          </div>
        </div>
        {selectedView === 'calendar' ? <div className="bg-indigo-900/30 rounded-lg border border-indigo-500/30 p-4 mb-6">
            <div className="grid grid-cols-7 gap-1 mb-2 text-center">
              {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => <div key={day} className="text-xs font-medium text-indigo-300 py-1">
                  {day}
                </div>)}
            </div>
            <div className="grid grid-cols-7 gap-1">
              {Array.from({
            length: 35
          }).map((_, i) => {
            const dayEvents = deadlines.filter(d => {
              const eventDate = new Date(d.date);
              return eventDate.getDate() === i % 31 + 1 && eventDate.getMonth() === currentMonth.getMonth() && eventDate.getFullYear() === currentMonth.getFullYear();
            });
            return <div key={i} className={`aspect-square bg-indigo-900/20 border border-indigo-500/20 rounded-md p-1 flex flex-col ${dayEvents.length > 0 ? 'ring-1 ring-indigo-500/40' : ''}`}>
                    <span className="text-xs text-indigo-300 self-end">
                      {i % 31 + 1}
                    </span>
                    {dayEvents.length > 0 && <div className="flex flex-wrap gap-1 mt-1 overflow-hidden">
                        {dayEvents.slice(0, 2).map(event => <div key={event.id} className={`w-full text-xs p-1 rounded ${getStatusColor(event.status)} bg-opacity-20 truncate`}>
                            {event.title}
                          </div>)}
                        {dayEvents.length > 2 && <span className="text-xs text-indigo-300">
                            +{dayEvents.length - 2} more
                          </span>}
                      </div>}
                  </div>;
          })}
            </div>
          </div> : <div className="space-y-3 mb-6">
            {filteredDeadlines.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()).map(deadline => <div key={deadline.id} className="bg-indigo-900/30 rounded-lg border border-indigo-500/30 p-4 flex items-start justify-between">
                  <div className="flex items-start">
                    <div className="p-2 bg-indigo-900/50 rounded-lg mr-3 flex-shrink-0">
                      {getTypeIcon(deadline.type)}
                    </div>
                    <div>
                      <h5 className="text-white font-medium">
                        {deadline.title}
                      </h5>
                      <div className="flex items-center mt-1">
                        <span className="text-xs text-indigo-300 flex items-center mr-3">
                          <CalendarIcon className="h-3.5 w-3.5 mr-1" />
                          {new Date(deadline.date).toLocaleDateString()}
                        </span>
                        <span className="text-xs text-indigo-300 capitalize">
                          {deadline.type}
                        </span>
                      </div>
                      {deadline.description && <p className="text-sm text-indigo-200 mt-2">
                          {deadline.description}
                        </p>}
                    </div>
                  </div>
                  <div className="flex flex-col items-end space-y-2">
                    <div className="flex items-center space-x-2">
                      {getStatusBadge(deadline.status)}
                      {getPriorityBadge(deadline.priority)}
                    </div>
                    <button className="text-xs text-[#EA3A70] hover:text-[#EA3A70]/80 flex items-center">
                      Set Reminder
                      <BellIcon className="h-3.5 w-3.5 ml-1" />
                    </button>
                  </div>
                </div>)}
          </div>}
        <div className="bg-indigo-900/30 rounded-lg border border-indigo-500/30 p-4 mb-6">
          <h4 className="text-lg font-medium text-white mb-4 flex items-center">
            <AlertCircleIcon className="h-5 w-5 text-[#EA3A70] mr-2" />
            Critical Deadlines
          </h4>
          <div className="space-y-3">
            {deadlines.filter(d => d.status === 'overdue' || d.status === 'due_soon').sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()).slice(0, 3).map(deadline => <div key={deadline.id} className={`rounded-lg p-3 flex items-center justify-between ${deadline.status === 'overdue' ? 'bg-red-900/20 border border-red-500/30' : 'bg-yellow-900/20 border border-yellow-500/30'}`}>
                  <div className="flex items-center">
                    <div className={`p-1.5 rounded-full mr-3 ${deadline.status === 'overdue' ? 'bg-red-900/50' : 'bg-yellow-900/50'}`}>
                      {deadline.status === 'overdue' ? <AlertCircleIcon className="h-4 w-4 text-red-400" /> : <ClockIcon className="h-4 w-4 text-yellow-400" />}
                    </div>
                    <div>
                      <h5 className="text-white text-sm font-medium">
                        {deadline.title}
                      </h5>
                      <div className="flex items-center mt-0.5">
                        <span className="text-xs text-indigo-300 flex items-center">
                          <CalendarIcon className="h-3 w-3 mr-1" />
                          {new Date(deadline.date).toLocaleDateString()}
                        </span>
                      </div>
                    </div>
                  </div>
                  <button className="px-2 py-1 bg-indigo-900/50 text-white text-xs rounded hover:bg-indigo-800/50">
                    Take Action
                  </button>
                </div>)}
          </div>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
              <span className="text-xs text-indigo-200">Overdue</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
              <span className="text-xs text-indigo-200">Due Soon</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 rounded-full bg-blue-500 mr-2"></div>
              <span className="text-xs text-indigo-200">Upcoming</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 rounded-full bg-green-400 mr-2"></div>
              <span className="text-xs text-indigo-200">Completed</span>
            </div>
          </div>
          <button className="text-[#EA3A70] text-sm font-medium flex items-center hover:text-[#EA3A70]/80">
            View All Deadlines
            <ArrowRightIcon className="h-4 w-4 ml-1" />
          </button>
        </div>
      </div>
    </div>;
}