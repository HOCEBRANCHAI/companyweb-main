import React, { useEffect, useState, Fragment, Component } from 'react';
import { CalendarIcon, ClockIcon, FileTextIcon, CheckIcon, AlertTriangleIcon, InfoIcon, PlusIcon, FilterIcon, BuildingIcon, UserIcon, XIcon, ChevronRightIcon, ArrowRightIcon } from 'lucide-react';
// Types
interface CompanyProfile {
  legalForm: string;
  vatRegistered: boolean;
  employerRegistered: boolean;
  financialYearEnd: Date;
  extendedFirstYear: boolean;
  incorporationDate: Date;
  country: string;
}
interface ComplianceEvent {
  id: string;
  title: string;
  description: string;
  dueDate: Date;
  category: 'tax' | 'financial' | 'corporate' | 'regulatory' | 'other';
  priority: 'high' | 'medium' | 'low';
  status: 'completed' | 'upcoming' | 'overdue' | 'in-progress';
  relatedDocuments?: string[];
  assignedTo?: string;
}
// Dummy data for company profile
const companyProfileData: CompanyProfile = {
  legalForm: 'bv',
  vatRegistered: true,
  employerRegistered: true,
  financialYearEnd: new Date(2024, 11, 31),
  extendedFirstYear: true,
  incorporationDate: new Date(2023, 5, 15),
  country: 'Netherlands'
};
// Generate events based on company profile
const generateEvents = (profile: CompanyProfile): ComplianceEvent[] => {
  const events: ComplianceEvent[] = [];
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  // VAT returns (quarterly if VAT registered)
  if (profile.vatRegistered) {
    // Q1 VAT Return
    events.push({
      id: 'vat-q1',
      title: 'Q1 VAT Return',
      description: 'Submit Q1 VAT return for the period January 1 - March 31',
      dueDate: new Date(currentYear, 3, 30),
      category: 'tax',
      priority: 'high',
      status: currentDate > new Date(currentYear, 3, 30) ? 'completed' : 'upcoming'
    });
    // Q2 VAT Return
    events.push({
      id: 'vat-q2',
      title: 'Q2 VAT Return',
      description: 'Submit Q2 VAT return for the period April 1 - June 30',
      dueDate: new Date(currentYear, 6, 31),
      category: 'tax',
      priority: 'high',
      status: currentDate > new Date(currentYear, 6, 31) ? 'completed' : 'upcoming'
    });
    // Q3 VAT Return
    events.push({
      id: 'vat-q3',
      title: 'Q3 VAT Return',
      description: 'Submit Q3 VAT return for the period July 1 - September 30',
      dueDate: new Date(currentYear, 9, 31),
      category: 'tax',
      priority: 'high',
      status: 'upcoming'
    });
    // Q4 VAT Return
    events.push({
      id: 'vat-q4',
      title: 'Q4 VAT Return',
      description: 'Submit Q4 VAT return for the period October 1 - December 31',
      dueDate: new Date(currentYear + 1, 0, 31),
      category: 'tax',
      priority: 'high',
      status: 'upcoming'
    });
  }
  // Employer tax returns (monthly if employer registered)
  if (profile.employerRegistered) {
    for (let month = 0; month < 12; month++) {
      const dueDate = new Date(currentYear, month + 1, 15); // 15th of next month
      events.push({
        id: `wage-tax-${month + 1}`,
        title: `Wage Tax Return - ${new Date(currentYear, month).toLocaleString('default', {
          month: 'long'
        })}`,
        description: `Submit wage tax return for ${new Date(currentYear, month).toLocaleString('default', {
          month: 'long'
        })}`,
        dueDate: dueDate,
        category: 'tax',
        priority: 'high',
        status: currentDate > dueDate ? 'completed' : currentDate.getMonth() === month ? 'in-progress' : 'upcoming'
      });
    }
  }
  // Annual accounts filing
  const annualAccountsDueDate = new Date(currentYear, profile.financialYearEnd.getMonth() + 12, profile.financialYearEnd.getDate());
  events.push({
    id: 'annual-accounts',
    title: 'Annual Accounts Filing',
    description: 'Prepare and file annual accounts with the Chamber of Commerce',
    dueDate: annualAccountsDueDate,
    category: 'financial',
    priority: 'high',
    status: 'upcoming',
    relatedDocuments: ['Balance Sheet', 'Profit & Loss Statement', 'Notes to the Financial Statements']
  });
  // Corporate income tax return
  const corporateTaxDueDate = new Date(currentYear, profile.financialYearEnd.getMonth() + 17, profile.financialYearEnd.getDate());
  events.push({
    id: 'corporate-tax',
    title: 'Corporate Income Tax Return',
    description: 'File corporate income tax return for the previous financial year',
    dueDate: corporateTaxDueDate,
    category: 'tax',
    priority: 'high',
    status: 'upcoming',
    relatedDocuments: ['Tax Balance Sheet', 'Tax Profit & Loss Statement', 'Tax Reconciliation']
  });
  // UBO registration check (annual)
  events.push({
    id: 'ubo-check',
    title: 'UBO Registration Verification',
    description: 'Annual verification of Ultimate Beneficial Owner registration',
    dueDate: new Date(currentYear, profile.incorporationDate.getMonth(), profile.incorporationDate.getDate()),
    category: 'regulatory',
    priority: 'medium',
    status: 'upcoming'
  });
  // Shareholder meeting (annual)
  events.push({
    id: 'shareholder-meeting',
    title: 'Annual General Meeting',
    description: 'Hold annual general meeting of shareholders',
    dueDate: new Date(currentYear, profile.financialYearEnd.getMonth() + 6, profile.financialYearEnd.getDate()),
    category: 'corporate',
    priority: 'medium',
    status: 'upcoming'
  });
  // Sort events by due date
  return events.sort((a, b) => a.dueDate.getTime() - b.dueDate.getTime());
};
// Calendar date cell component
interface DateCellProps {
  date: Date;
  events: ComplianceEvent[];
  onSelectDate: (date: Date) => void;
  isSelected: boolean;
}
function DateCell({
  date,
  events,
  onSelectDate,
  isSelected
}: DateCellProps) {
  const eventsOnDate = events.filter(event => event.dueDate.getDate() === date.getDate() && event.dueDate.getMonth() === date.getMonth() && event.dueDate.getFullYear() === date.getFullYear());
  const isToday = new Date().toDateString() === date.toDateString();
  return <div onClick={() => onSelectDate(date)} className={`h-24 p-1 border border-gray-200 ${isSelected ? 'bg-[#EA3A70]/10 border-[#EA3A70]' : isToday ? 'bg-blue-50' : 'hover:bg-gray-50'} cursor-pointer transition-colors`}>
      <div className={`text-right text-sm ${isToday ? 'font-bold text-blue-600' : ''}`}>
        {date.getDate()}
      </div>
      <div className="mt-1">
        {eventsOnDate.slice(0, 2).map((event, index) => <div key={index} className={`text-xs truncate rounded px-1 py-0.5 mb-1 
              ${event.priority === 'high' ? 'bg-red-100 text-red-800' : event.priority === 'medium' ? 'bg-yellow-100 text-yellow-800' : 'bg-blue-100 text-blue-800'}`}>
            {event.title}
          </div>)}
        {eventsOnDate.length > 2 && <div className="text-xs text-gray-500 font-medium">
            +{eventsOnDate.length - 2} more
          </div>}
      </div>
    </div>;
}
// Event details modal component
interface EventDetailsModalProps {
  event: ComplianceEvent;
  onClose: () => void;
  onStatusChange: (id: string, status: ComplianceEvent['status']) => void;
}
function EventDetailsModal({
  event,
  onClose,
  onStatusChange
}: EventDetailsModalProps) {
  return <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-[#0A0826] rounded-xl shadow-xl w-full max-w-md md:max-h-[600px] flex flex-col border border-[#4A2D80]/30 m-4">
        <div className="flex items-center justify-between p-4 border-b border-[#4A2D80]/30">
          <div className="flex items-center">
            <div className={`h-8 w-8 rounded-full flex items-center justify-center mr-3 
              ${event.priority === 'high' ? 'bg-red-500' : event.priority === 'medium' ? 'bg-yellow-500' : 'bg-blue-500'}`}>
              <CalendarIcon className="h-4 w-4 text-white" />
            </div>
            <h3 className="text-white font-medium">{event.title}</h3>
          </div>
          <button onClick={onClose} className="text-purple-200/70 hover:text-white transition-colors">
            <XIcon className="h-5 w-5" />
          </button>
        </div>
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          <div>
            <h4 className="text-sm text-purple-200/70 mb-1">Description</h4>
            <p className="text-white">{event.description}</p>
          </div>
          <div className="flex space-x-4">
            <div>
              <h4 className="text-sm text-purple-200/70 mb-1">Due Date</h4>
              <p className="text-white flex items-center">
                <CalendarIcon className="h-4 w-4 mr-1 text-purple-200/70" />
                {event.dueDate.toLocaleDateString()}
              </p>
            </div>
            <div>
              <h4 className="text-sm text-purple-200/70 mb-1">Category</h4>
              <p className="text-white capitalize">{event.category}</p>
            </div>
          </div>
          <div>
            <h4 className="text-sm text-purple-200/70 mb-1">Status</h4>
            <div className="flex space-x-2">
              {['upcoming', 'in-progress', 'completed', 'overdue'].map(status => <button key={status} onClick={() => onStatusChange(event.id, status as ComplianceEvent['status'])} className={`px-2 py-1 rounded-full text-xs font-medium 
                    ${event.status === status ? status === 'completed' ? 'bg-green-500 text-white' : status === 'overdue' ? 'bg-red-500 text-white' : status === 'in-progress' ? 'bg-blue-500 text-white' : 'bg-yellow-500 text-white' : 'bg-[#2D2755] text-white'}`}>
                    {status.charAt(0).toUpperCase() + status.slice(1)}
                  </button>)}
            </div>
          </div>
          {event.relatedDocuments && <div>
              <h4 className="text-sm text-purple-200/70 mb-1">
                Related Documents
              </h4>
              <ul className="space-y-1">
                {event.relatedDocuments.map((doc, index) => <li key={index} className="flex items-center text-white">
                    <FileTextIcon className="h-4 w-4 mr-2 text-purple-200/70" />
                    {doc}
                  </li>)}
              </ul>
            </div>}
        </div>
        <div className="p-4 border-t border-[#4A2D80]/30 flex justify-between">
          <button className="px-4 py-2 bg-[#2D2755] text-white rounded-lg hover:bg-[#4A2D80] transition-colors">
            Assign
          </button>
          <button className="px-4 py-2 bg-[#EA3A70] text-white rounded-lg hover:bg-[#EA3A70]/90 transition-colors">
            Set Reminder
          </button>
        </div>
      </div>
    </div>;
}
// Add Event Modal Component
interface AddEventModalProps {
  onClose: () => void;
  onAddEvent: (event: Omit<ComplianceEvent, 'id' | 'status'>) => void;
}
function AddEventModal({
  onClose,
  onAddEvent
}: AddEventModalProps) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [category, setCategory] = useState<ComplianceEvent['category']>('tax');
  const [priority, setPriority] = useState<ComplianceEvent['priority']>('medium');
  const [relatedDocuments, setRelatedDocuments] = useState('');
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAddEvent({
      title,
      description,
      dueDate: new Date(dueDate),
      category,
      priority,
      relatedDocuments: relatedDocuments ? relatedDocuments.split(',').map(doc => doc.trim()) : undefined
    });
    onClose();
  };
  return <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-[#0A0826] rounded-xl shadow-xl w-full max-w-md flex flex-col border border-[#4A2D80]/30 m-4">
        <div className="flex items-center justify-between p-4 border-b border-[#4A2D80]/30">
          <h3 className="text-white font-medium">Add Compliance Event</h3>
          <button onClick={onClose} className="text-purple-200/70 hover:text-white transition-colors">
            <XIcon className="h-5 w-5" />
          </button>
        </div>
        <form onSubmit={handleSubmit} className="p-4 space-y-4">
          <div>
            <label className="block text-sm text-purple-200/70 mb-1">
              Event Title
            </label>
            <input type="text" value={title} onChange={e => setTitle(e.target.value)} className="w-full bg-[#1E1B3F] border border-[#4A2D80]/30 rounded-lg px-4 py-2 text-white" required />
          </div>
          <div>
            <label className="block text-sm text-purple-200/70 mb-1">
              Description
            </label>
            <textarea value={description} onChange={e => setDescription(e.target.value)} className="w-full bg-[#1E1B3F] border border-[#4A2D80]/30 rounded-lg px-4 py-2 text-white h-20" required />
          </div>
          <div>
            <label className="block text-sm text-purple-200/70 mb-1">
              Due Date
            </label>
            <input type="date" value={dueDate} onChange={e => setDueDate(e.target.value)} className="w-full bg-[#1E1B3F] border border-[#4A2D80]/30 rounded-lg px-4 py-2 text-white" required />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-purple-200/70 mb-1">
                Category
              </label>
              <select value={category} onChange={e => setCategory(e.target.value as ComplianceEvent['category'])} className="w-full bg-[#1E1B3F] border border-[#4A2D80]/30 rounded-lg px-4 py-2 text-white">
                <option value="tax">Tax</option>
                <option value="financial">Financial</option>
                <option value="corporate">Corporate</option>
                <option value="regulatory">Regulatory</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div>
              <label className="block text-sm text-purple-200/70 mb-1">
                Priority
              </label>
              <select value={priority} onChange={e => setPriority(e.target.value as ComplianceEvent['priority'])} className="w-full bg-[#1E1B3F] border border-[#4A2D80]/30 rounded-lg px-4 py-2 text-white">
                <option value="high">High</option>
                <option value="medium">Medium</option>
                <option value="low">Low</option>
              </select>
            </div>
          </div>
          <div>
            <label className="block text-sm text-purple-200/70 mb-1">
              Related Documents (comma separated)
            </label>
            <input type="text" value={relatedDocuments} onChange={e => setRelatedDocuments(e.target.value)} className="w-full bg-[#1E1B3F] border border-[#4A2D80]/30 rounded-lg px-4 py-2 text-white" placeholder="Annual Report, Tax Form, etc." />
          </div>
          <div className="flex justify-end space-x-3 pt-2">
            <button type="button" onClick={onClose} className="px-4 py-2 border border-[#4A2D80] text-white rounded-lg hover:bg-[#2D2755] transition-colors">
              Cancel
            </button>
            <button type="submit" className="px-4 py-2 bg-[#EA3A70] text-white rounded-lg hover:bg-[#EA3A70]/90 transition-colors">
              Add Event
            </button>
          </div>
        </form>
      </div>
    </div>;
}
// Deadline Calculator Component
interface DeadlineCalculatorProps {
  onClose: () => void;
}
function DeadlineCalculator({
  onClose
}: DeadlineCalculatorProps) {
  const [formProgress, setFormProgress] = useState(1);
  const [companyInfo, setCompanyInfo] = useState({
    legalForm: '',
    financialYearEnd: new Date(),
    extensionRequested: false
  });
  const [showAllFormFields, setShowAllFormFields] = useState(false);
  const handleContinueForm = () => {
    setFormProgress(prev => prev + 1);
  };
  const calculateDeadlines = () => {
    // Implement deadline calculation logic
    onClose();
  };
  return <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-[#0A0826] rounded-xl shadow-xl w-full max-w-2xl border border-[#4A2D80]/30 m-4">
        <div className="flex items-center justify-between p-4 border-b border-[#4A2D80]/30">
          <h3 className="text-white font-medium">
            Calculate Your Dutch Filing Deadlines
          </h3>
          <button onClick={onClose} className="text-purple-200/70 hover:text-white transition-colors">
            <XIcon className="h-5 w-5" />
          </button>
        </div>
        <div className="p-6">
          <div className="flex items-center mb-6">
            {[1, 2, 3].map(step => <Fragment key={step}>
                <div className={`h-8 w-8 rounded-full flex items-center justify-center ${formProgress >= step ? 'bg-[#EA3A70]' : 'bg-[#2D2755]'}`}>
                  <span className="text-white font-medium">{step}</span>
                </div>
                {step < 3 && <div className={`h-1 w-16 ${formProgress > step ? 'bg-[#EA3A70]' : 'bg-[#2D2755]'}`}></div>}
              </Fragment>)}
          </div>
          <form onSubmit={e => e.preventDefault()}>
            {formProgress === 1 && <div className="mb-6">
                <label className="block text-white font-medium mb-2">
                  What type of Dutch entity do you have?
                </label>
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {[{
                id: 'bv',
                label: 'BV (Private Limited)'
              }, {
                id: 'nv',
                label: 'NV (Public Limited)'
              }, {
                id: 'cooperative',
                label: 'Cooperative'
              }, {
                id: 'branch',
                label: 'Foreign Branch'
              }].map(type => <button key={type.id} type="button" onClick={() => {
                setCompanyInfo({
                  ...companyInfo,
                  legalForm: type.id
                });
                handleContinueForm();
              }} className={`p-4 rounded-lg border text-left ${companyInfo.legalForm === type.id ? 'border-[#EA3A70] bg-[#EA3A70]/10' : 'border-[#2D2755] hover:border-[#EA3A70]/50'} transition-colors`}>
                      <span className="text-white font-medium">
                        {type.label}
                      </span>
                    </button>)}
                </div>
              </div>}
            {formProgress === 2 && <div className="mb-6">
                <label className="block text-white font-medium mb-2">
                  When does your financial year end?
                </label>
                <div className="space-y-4 mb-6">
                  <div className="grid grid-cols-2 gap-3">
                    {[{
                  month: 12,
                  day: 31,
                  label: 'December 31'
                }, {
                  month: 3,
                  day: 31,
                  label: 'March 31'
                }, {
                  month: 6,
                  day: 30,
                  label: 'June 30'
                }, {
                  month: 9,
                  day: 30,
                  label: 'September 30'
                }].map(date => {
                  const yearEnd = new Date();
                  yearEnd.setMonth(date.month - 1);
                  yearEnd.setDate(date.day);
                  return <button key={date.label} type="button" onClick={() => {
                    setCompanyInfo({
                      ...companyInfo,
                      financialYearEnd: yearEnd
                    });
                    handleContinueForm();
                  }} className={`p-4 rounded-lg border text-left ${companyInfo.financialYearEnd.getMonth() === date.month - 1 && companyInfo.financialYearEnd.getDate() === date.day ? 'border-[#EA3A70] bg-[#EA3A70]/10' : 'border-[#2D2755] hover:border-[#EA3A70]/50'} transition-colors`}>
                          <span className="text-white font-medium">
                            {date.label}
                          </span>
                        </button>;
                })}
                  </div>
                  <div>
                    <button type="button" onClick={() => setShowAllFormFields(true)} className="text-[#EA3A70] hover:text-[#EA3A70]/80 text-sm flex items-center">
                      Different date
                      <ChevronRightIcon className="h-4 w-4 ml-1" />
                    </button>
                  </div>
                </div>
              </div>}
            {formProgress === 3 && <div className="mb-6">
                <label className="block text-white font-medium mb-2">
                  Have you requested a filing extension?
                </label>
                <div className="flex space-x-4 mb-6">
                  <button type="button" onClick={() => {
                setCompanyInfo({
                  ...companyInfo,
                  extensionRequested: true
                });
                calculateDeadlines();
              }} className="flex-1 p-4 rounded-lg border border-[#2D2755] hover:border-[#EA3A70]/50 transition-colors text-white">
                    Yes
                  </button>
                  <button type="button" onClick={() => {
                setCompanyInfo({
                  ...companyInfo,
                  extensionRequested: false
                });
                calculateDeadlines();
              }} className="flex-1 p-4 rounded-lg border border-[#2D2755] hover:border-[#EA3A70]/50 transition-colors text-white">
                    No
                  </button>
                </div>
              </div>}
            {showAllFormFields && <div className="space-y-6">
                <div>
                  <label className="block text-white font-medium mb-2">
                    Entity Type
                  </label>
                  <select value={companyInfo.legalForm} onChange={e => setCompanyInfo({
                ...companyInfo,
                legalForm: e.target.value
              })} className="w-full bg-[#0F0B1F] border border-[#2D2755] rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#EA3A70]">
                    <option value="bv">BV (Private Limited)</option>
                    <option value="nv">NV (Public Limited)</option>
                    <option value="cooperative">Cooperative</option>
                    <option value="foundation">Foundation</option>
                    <option value="association">Association</option>
                    <option value="branch">
                      Foreign entity with Dutch branch
                    </option>
                  </select>
                </div>
                <div>
                  <label className="block text-white font-medium mb-2">
                    Financial Year End Date
                  </label>
                  <input type="date" value={companyInfo.financialYearEnd.toISOString().split('T')[0]} onChange={e => setCompanyInfo({
                ...companyInfo,
                financialYearEnd: new Date(e.target.value)
              })} className="w-full bg-[#0F0B1F] border border-[#2D2755] rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#EA3A70]" />
                </div>
                <div>
                  <label className="block text-white font-medium mb-2">
                    Filing Extension Requested?
                  </label>
                  <div className="flex space-x-4">
                    <button type="button" onClick={() => setCompanyInfo({
                  ...companyInfo,
                  extensionRequested: true
                })} className={`flex-1 p-3 rounded-lg border ${companyInfo.extensionRequested ? 'border-[#EA3A70] bg-[#EA3A70]/10' : 'border-[#2D2755] hover:border-[#EA3A70]/50'} transition-colors text-white`}>
                      Yes
                    </button>
                    <button type="button" onClick={() => setCompanyInfo({
                  ...companyInfo,
                  extensionRequested: false
                })} className={`flex-1 p-3 rounded-lg border ${!companyInfo.extensionRequested ? 'border-[#EA3A70] bg-[#EA3A70]/10' : 'border-[#2D2755] hover:border-[#EA3A70]/50'} transition-colors text-white`}>
                      No
                    </button>
                  </div>
                </div>
                <button type="button" onClick={calculateDeadlines} className="w-full bg-[#EA3A70] text-white py-3 rounded-lg font-medium hover:bg-[#EA3A70]/90 transition-colors flex items-center justify-center">
                  Calculate My Deadlines
                  <ArrowRightIcon className="ml-2 h-5 w-5" />
                </button>
              </div>}
          </form>
        </div>
      </div>
    </div>;
}
// Main component
export function ComplianceEvents() {
  const [events, setEvents] = useState<ComplianceEvent[]>([]);
  const [filteredEvents, setFilteredEvents] = useState<ComplianceEvent[]>([]);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedEvent, setSelectedEvent] = useState<ComplianceEvent | null>(null);
  const [showAddEventModal, setShowAddEventModal] = useState(false);
  const [showDeadlineCalculator, setShowDeadlineCalculator] = useState(false);
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [currentMonth, setCurrentMonth] = useState(new Date());
  // Get days in current month for calendar
  const getDaysInMonth = (year: number, month: number) => {
    return new Date(year, month + 1, 0).getDate();
  };
  // Get day of week for first day of month (0 = Sunday, 1 = Monday, etc.)
  const getFirstDayOfMonth = (year: number, month: number) => {
    return new Date(year, month, 1).getDay();
  };
  // Generate calendar days array
  const generateCalendarDays = () => {
    const year = currentMonth.getFullYear();
    const month = currentMonth.getMonth();
    const daysInMonth = getDaysInMonth(year, month);
    const firstDayOfMonth = getFirstDayOfMonth(year, month);
    const days: Date[] = [];
    // Add previous month's days to fill first week
    const prevMonthDays = getDaysInMonth(year, month - 1);
    for (let i = firstDayOfMonth - 1; i >= 0; i--) {
      days.push(new Date(year, month - 1, prevMonthDays - i));
    }
    // Add current month's days
    for (let i = 1; i <= daysInMonth; i++) {
      days.push(new Date(year, month, i));
    }
    // Add next month's days to fill last week
    const remainingDays = 42 - days.length; // 6 rows of 7 days
    for (let i = 1; i <= remainingDays; i++) {
      days.push(new Date(year, month + 1, i));
    }
    return days;
  };
  // Initialize events
  useEffect(() => {
    const generatedEvents = generateEvents(companyProfileData);
    setEvents(generatedEvents);
    setFilteredEvents(generatedEvents);
  }, []);
  // Filter events
  const filterEvents = (filter: string) => {
    setActiveFilter(filter);
    if (filter === 'all') {
      setFilteredEvents(events);
    } else if (filter === 'upcoming') {
      setFilteredEvents(events.filter(event => event.status === 'upcoming'));
    } else if (filter === 'overdue') {
      setFilteredEvents(events.filter(event => event.status === 'overdue'));
    } else if (filter === 'completed') {
      setFilteredEvents(events.filter(event => event.status === 'completed'));
    } else if (['tax', 'financial', 'corporate', 'regulatory', 'other'].includes(filter)) {
      setFilteredEvents(events.filter(event => event.category === filter));
    }
  };
  // Handle event status change
  const handleStatusChange = (id: string, newStatus: ComplianceEvent['status']) => {
    const updatedEvents = events.map(event => event.id === id ? {
      ...event,
      status: newStatus
    } : event);
    setEvents(updatedEvents);
    setFilteredEvents(updatedEvents.filter(event => activeFilter === 'all' || activeFilter === 'upcoming' && event.status === 'upcoming' || activeFilter === 'overdue' && event.status === 'overdue' || activeFilter === 'completed' && event.status === 'completed' || ['tax', 'financial', 'corporate', 'regulatory', 'other'].includes(activeFilter) && event.category === activeFilter));
    if (selectedEvent && selectedEvent.id === id) {
      setSelectedEvent({
        ...selectedEvent,
        status: newStatus
      });
    }
  };
  // Handle adding new event
  const handleAddEvent = (eventData: Omit<ComplianceEvent, 'id' | 'status'>) => {
    const newEvent: ComplianceEvent = {
      ...eventData,
      id: `event-${Date.now()}`,
      status: 'upcoming'
    };
    const updatedEvents = [...events, newEvent];
    setEvents(updatedEvents);
    // Update filtered events if the new event matches the current filter
    if (activeFilter === 'all' || activeFilter === 'upcoming' || ['tax', 'financial', 'corporate', 'regulatory', 'other'].includes(activeFilter) && newEvent.category === activeFilter) {
      setFilteredEvents([...filteredEvents, newEvent]);
    }
  };
  // Get events for selected date
  const getEventsForSelectedDate = () => {
    if (!selectedDate) return [];
    return events.filter(event => event.dueDate.getDate() === selectedDate.getDate() && event.dueDate.getMonth() === selectedDate.getMonth() && event.dueDate.getFullYear() === selectedDate.getFullYear());
  };
  // Navigate to previous month
  const goToPreviousMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1));
  };
  // Navigate to next month
  const goToNextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1));
  };
  // Calendar days
  const calendarDays = generateCalendarDays();
  // Day names
  const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  return <div className="min-h-screen bg-[#0A0826] text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-2">Compliance Events</h1>
            <p className="text-purple-200/70">
              Manage and track your company's compliance deadlines and
              obligations
            </p>
          </div>
          <div className="flex space-x-3 mt-4 md:mt-0">
            <button onClick={() => setShowDeadlineCalculator(true)} className="px-4 py-2 bg-[#2D2755] text-white rounded-lg hover:bg-[#4A2D80] transition-colors flex items-center">
              <CalendarIcon className="h-4 w-4 mr-2" />
              Calculate Deadlines
            </button>
            <button onClick={() => setShowAddEventModal(true)} className="px-4 py-2 bg-[#EA3A70] text-white rounded-lg hover:bg-[#EA3A70]/90 transition-colors flex items-center">
              <PlusIcon className="h-4 w-4 mr-2" />
              Add Event
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left column - Events list */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-[#1B1537] rounded-xl border border-[#2D2755] p-4">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-medium">Upcoming Events</h2>
                <div className="flex items-center">
                  <FilterIcon className="h-4 w-4 mr-2 text-purple-200/70" />
                  <select onChange={e => filterEvents(e.target.value)} className="bg-[#2D2755] text-white text-sm rounded-lg px-2 py-1 border border-[#4A2D80]">
                    <option value="all">All Events</option>
                    <option value="upcoming">Upcoming</option>
                    <option value="overdue">Overdue</option>
                    <option value="completed">Completed</option>
                    <option value="tax">Tax</option>
                    <option value="financial">Financial</option>
                    <option value="corporate">Corporate</option>
                    <option value="regulatory">Regulatory</option>
                  </select>
                </div>
              </div>
              <div className="space-y-3 max-h-[500px] overflow-y-auto pr-2">
                {filteredEvents.length === 0 ? <div className="text-center py-6 text-purple-200/50">
                    No events found
                  </div> : filteredEvents.map(event => <div key={event.id} onClick={() => setSelectedEvent(event)} className="bg-[#2D2755] rounded-lg p-3 cursor-pointer hover:bg-[#4A2D80] transition-colors">
                      <div className="flex items-start justify-between">
                        <div className="flex items-start">
                          <div className={`p-2 rounded-lg mr-3 flex-shrink-0 
                            ${event.category === 'tax' ? 'bg-blue-900/30' : event.category === 'financial' ? 'bg-green-900/30' : event.category === 'corporate' ? 'bg-purple-900/30' : event.category === 'regulatory' ? 'bg-yellow-900/30' : 'bg-gray-900/30'}`}>
                            {event.category === 'tax' ? <FileTextIcon className="h-5 w-5 text-blue-400" /> : event.category === 'financial' ? <BuildingIcon className="h-5 w-5 text-green-400" /> : event.category === 'corporate' ? <UserIcon className="h-5 w-5 text-purple-400" /> : event.category === 'regulatory' ? <AlertTriangleIcon className="h-5 w-5 text-yellow-400" /> : <InfoIcon className="h-5 w-5 text-gray-400" />}
                          </div>
                          <div>
                            <h3 className="font-medium">{event.title}</h3>
                            <p className="text-sm text-purple-200/70 truncate max-w-[180px]">
                              {event.description}
                            </p>
                          </div>
                        </div>
                        <div className="flex flex-col items-end">
                          <div className={`px-2 py-0.5 rounded-full text-xs font-medium 
                            ${event.status === 'completed' ? 'bg-green-900/30 text-green-400' : event.status === 'overdue' ? 'bg-red-900/30 text-red-400' : event.status === 'in-progress' ? 'bg-blue-900/30 text-blue-400' : 'bg-yellow-900/30 text-yellow-400'}`}>
                            {event.status}
                          </div>
                          <p className="text-xs text-purple-200/70 mt-1 flex items-center">
                            <CalendarIcon className="h-3 w-3 mr-1" />
                            {event.dueDate.toLocaleDateString()}
                          </p>
                        </div>
                      </div>
                    </div>)}
              </div>
            </div>
            <div className="bg-[#1B1537] rounded-xl border border-[#2D2755] p-4">
              <h2 className="text-lg font-medium mb-4">Company Profile</h2>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-purple-200/70">Legal Form</span>
                  <span className="font-medium">
                    {companyProfileData.legalForm === 'bv' ? 'BV (Private Limited)' : companyProfileData.legalForm === 'nv' ? 'NV (Public Limited)' : companyProfileData.legalForm}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-purple-200/70">VAT Registered</span>
                  <span className="font-medium">
                    {companyProfileData.vatRegistered ? 'Yes' : 'No'}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-purple-200/70">
                    Employer Registered
                  </span>
                  <span className="font-medium">
                    {companyProfileData.employerRegistered ? 'Yes' : 'No'}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-purple-200/70">Financial Year End</span>
                  <span className="font-medium">
                    {companyProfileData.financialYearEnd.toLocaleDateString()}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-purple-200/70">
                    Extended First Year
                  </span>
                  <span className="font-medium">
                    {companyProfileData.extendedFirstYear ? 'Yes' : 'No'}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-purple-200/70">Incorporation Date</span>
                  <span className="font-medium">
                    {companyProfileData.incorporationDate.toLocaleDateString()}
                  </span>
                </div>
              </div>
            </div>
          </div>
          {/* Right column - Calendar */}
          <div className="lg:col-span-2">
            <div className="bg-[#1B1537] rounded-xl border border-[#2D2755] p-4">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-medium">Compliance Calendar</h2>
                <div className="flex items-center space-x-4">
                  <button onClick={goToPreviousMonth} className="p-1 hover:bg-[#2D2755] rounded-full">
                    <svg className="h-5 w-5 text-purple-200/70" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </button>
                  <h3 className="text-md font-medium">
                    {currentMonth.toLocaleString('default', {
                    month: 'long',
                    year: 'numeric'
                  })}
                  </h3>
                  <button onClick={goToNextMonth} className="p-1 hover:bg-[#2D2755] rounded-full">
                    <svg className="h-5 w-5 text-purple-200/70" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>
              </div>
              <div className="grid grid-cols-7 gap-px bg-[#2D2755]">
                {dayNames.map(day => <div key={day} className="bg-[#1B1537] p-2 text-center text-sm font-medium text-purple-200/70">
                    {day}
                  </div>)}
                {calendarDays.map((date, index) => {
                const isCurrentMonth = date.getMonth() === currentMonth.getMonth();
                return <DateCell key={index} date={date} events={events} onSelectDate={setSelectedDate} isSelected={selectedDate !== null && date.getDate() === selectedDate.getDate() && date.getMonth() === selectedDate.getMonth() && date.getFullYear() === selectedDate.getFullYear()} />;
              })}
              </div>
              {selectedDate && <div className="mt-4 bg-[#2D2755] rounded-lg p-4">
                  <h3 className="font-medium mb-3">
                    Events for {selectedDate.toLocaleDateString()}
                  </h3>
                  <div className="space-y-2">
                    {getEventsForSelectedDate().length === 0 ? <p className="text-purple-200/70 text-sm">
                        No events scheduled for this date
                      </p> : getEventsForSelectedDate().map(event => <div key={event.id} onClick={() => setSelectedEvent(event)} className="flex items-center justify-between p-2 bg-[#4A2D80] rounded-lg cursor-pointer hover:bg-[#5A3D90] transition-colors">
                          <div className="flex items-center">
                            <div className={`h-2 w-2 rounded-full mr-2 
                              ${event.priority === 'high' ? 'bg-red-500' : event.priority === 'medium' ? 'bg-yellow-500' : 'bg-blue-500'}`} />
                            <span>{event.title}</span>
                          </div>
                          <div className={`px-2 py-0.5 rounded-full text-xs font-medium 
                            ${event.status === 'completed' ? 'bg-green-900/30 text-green-400' : event.status === 'overdue' ? 'bg-red-900/30 text-red-400' : event.status === 'in-progress' ? 'bg-blue-900/30 text-blue-400' : 'bg-yellow-900/30 text-yellow-400'}`}>
                            {event.status}
                          </div>
                        </div>)}
                  </div>
                </div>}
            </div>
          </div>
        </div>
      </div>
      {selectedEvent && <EventDetailsModal event={selectedEvent} onClose={() => setSelectedEvent(null)} onStatusChange={handleStatusChange} />}
      {showAddEventModal && <AddEventModal onClose={() => setShowAddEventModal(false)} onAddEvent={handleAddEvent} />}
      {showDeadlineCalculator && <DeadlineCalculator onClose={() => setShowDeadlineCalculator(false)} />}
    </div>;
}