import React, { useState } from 'react';
import { BuildingIcon, FileTextIcon, ShieldIcon, HistoryIcon, UsersIcon, EditIcon, SaveIcon, XIcon, GlobeIcon, CalendarIcon, CoinsIcon, MailIcon, PhoneIcon, LinkIcon, MapPinIcon, ClockIcon, DownloadIcon, AlertTriangleIcon, CheckCircleIcon, PlusIcon, UploadIcon, HomeIcon, DatabaseIcon, ArrowRightIcon, FileSpreadsheetIcon } from 'lucide-react';
export function Company() {
  const [activeTab, setActiveTab] = useState('overview');
  const [isEditing, setIsEditing] = useState(false);
  const [companyData, setCompanyData] = useState({
    name: 'Tech Innovations B.V.',
    type: 'Private Limited Company',
    status: 'Active',
    registrationNumber: 'KVK 12345678',
    vatNumber: 'NL123456789B01',
    incorporationDate: 'January 15, 2023',
    fiscalYearEnd: 'December 31',
    firstBookYearEnd: 'December 31, 2023',
    address: {
      registered: 'Prinses Beatrixlaan 582, 2595 BM, The Hague',
      mailing: 'Prinses Beatrixlaan 582, 2595 BM, The Hague',
      business: 'Prinses Beatrixlaan 582, 2595 BM, The Hague'
    },
    contact: {
      email: 'info@techinnovations.com',
      phone: '+31 70 123 4567',
      website: 'www.techinnovations.com',
      linkedin: 'linkedin.com/company/tech-innovations-bv'
    },
    capitalStructure: {
      authorizedCapital: '€100,000',
      issuedCapital: '€25,000',
      paidUpCapital: '€25,000',
      numberOfShares: '25,000',
      shareValue: '€1.00'
    },
    taxDetails: {
      corporateTaxNumber: '1234567890',
      vatRegistered: true,
      vatNumber: 'NL123456789B01',
      vatFiling: 'Quarterly',
      vatFilingMonths: 'January, April, July, October',
      employerRegistered: true,
      employerNumber: '123456789L01'
    },
    bankDetails: {
      bankName: 'ABN AMRO',
      accountNumber: 'NL91 ABNA 0417 1643 00',
      bic: 'ABNANL2A'
    },
    keyDates: [{
      event: 'Company Formation',
      date: 'January 15, 2023'
    }, {
      event: 'First Share Issuance',
      date: 'January 15, 2023'
    }, {
      event: 'Board Appointment - John Smith',
      date: 'January 15, 2023'
    }, {
      event: 'Board Appointment - Sarah Johnson',
      date: 'January 15, 2023'
    }, {
      event: 'VAT Registration',
      date: 'February 1, 2023'
    }, {
      event: 'Employer Registration',
      date: 'March 15, 2023'
    }],
    directors: [{
      name: 'John Smith',
      title: 'Managing Director',
      email: 'john.smith@techinnovations.com',
      phone: '+31 6 1234 5678',
      appointmentDate: 'January 15, 2023'
    }, {
      name: 'Sarah Johnson',
      title: 'Finance Director',
      email: 'sarah.johnson@techinnovations.com',
      phone: '+31 6 8765 4321',
      appointmentDate: 'January 15, 2023'
    }],
    shareholders: [{
      name: 'Global Ventures Ltd.',
      type: 'Corporate',
      percentage: 65,
      shares: 16250,
      country: 'United Kingdom',
      registrationNumber: 'UK 98765432'
    }, {
      name: 'John Smith',
      type: 'Individual',
      percentage: 25,
      shares: 6250,
      country: 'Netherlands'
    }, {
      name: 'Sarah Johnson',
      type: 'Individual',
      percentage: 10,
      shares: 2500,
      country: 'Netherlands'
    }],
    upcomingDeadlines: [{
      title: 'Annual Accounts Filing',
      dueDate: 'June 30, 2024',
      daysRemaining: 90,
      priority: 'high'
    }, {
      title: 'Corporate Tax Return',
      dueDate: 'June 1, 2024',
      daysRemaining: 60,
      priority: 'high'
    }, {
      title: 'Q2 VAT Return',
      dueDate: 'July 31, 2024',
      daysRemaining: 120,
      priority: 'medium'
    }]
  });
  const handleSaveChanges = () => {
    setIsEditing(false);
  };
  const handleCancelEdit = () => {
    setIsEditing(false);
  };
  const handleInputChange = (section, field, value) => {
    setCompanyData(prev => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: value
      }
    }));
  };
  const handleNestedInputChange = (section, subsection, field, value) => {
    setCompanyData(prev => ({
      ...prev,
      [section]: {
        ...prev[section],
        [subsection]: {
          ...prev[section][subsection],
          [field]: value
        }
      }
    }));
  };
  return <main className="w-full min-h-screen bg-gradient-to-b from-[#1B1537] via-[#0F0B1F] to-[#1B1537]">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
          <div className="flex items-center mb-4 md:mb-0">
            <div className="p-3 bg-[#EA3A70]/10 rounded-xl mr-4 shadow-lg shadow-[#EA3A70]/20">
              <BuildingIcon className="h-8 w-8 text-[#EA3A70]" />
            </div>
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-white">
                {companyData.name}
              </h1>
              <p className="text-gray-400">
                {companyData.type} • {companyData.status}
              </p>
            </div>
          </div>
          {isEditing ? <div className="flex space-x-3">
              <button onClick={handleSaveChanges} className="px-4 py-2 bg-green-600/90 hover:bg-green-600 text-white rounded-xl transition-all flex items-center shadow-lg shadow-green-600/20">
                <SaveIcon className="h-4 w-4 mr-2" />
                Save Changes
              </button>
              <button onClick={handleCancelEdit} className="px-4 py-2 bg-[#1B1537] border border-[#2D2755] text-white rounded-xl hover:bg-[#2D2755]/20 transition-all flex items-center">
                <XIcon className="h-4 w-4 mr-2" />
                Cancel
              </button>
            </div> : <button onClick={() => setIsEditing(true)} className="px-4 py-2 bg-[#EA3A70] hover:bg-[#EA3A70]/90 text-white rounded-xl transition-all flex items-center shadow-lg shadow-[#EA3A70]/20">
              <EditIcon className="h-4 w-4 mr-2" />
              Edit Company Details
            </button>}
        </div>
      </div>
      <div className="container mx-auto px-4 mb-6">
        <div className="bg-[#1B1537]/80 backdrop-blur-xl rounded-2xl border border-[#2D2755] p-1 shadow-lg">
          <div className="overflow-x-auto">
            <nav className="flex min-w-max py-1 px-1">
              {['overview', 'legal', 'financial', 'management', 'history'].map(tab => <button key={tab} onClick={() => setActiveTab(tab)} className={`flex items-center py-3 px-5 rounded-xl font-medium text-sm transition-all ${activeTab === tab ? 'bg-[#EA3A70] text-white shadow-lg shadow-[#EA3A70]/20' : 'text-gray-400 hover:bg-[#2D2755]/20 hover:text-white'}`}>
                    {tab.charAt(0).toUpperCase() + tab.slice(1)}
                  </button>)}
            </nav>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 pb-12">
        <div className="bg-[#1B1537]/80 backdrop-blur-xl rounded-2xl border border-[#2D2755] p-6 shadow-lg">
          {activeTab === 'overview' && <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-indigo-800/30 backdrop-blur-md rounded-2xl border border-indigo-500/30 p-5">
                  <div className="flex items-center mb-3">
                    <div className="p-2 bg-indigo-900/50 rounded-lg mr-3">
                      <BuildingIcon className="h-5 w-5 text-indigo-300" />
                    </div>
                    <h3 className="text-lg font-medium text-white">
                      Company Details
                    </h3>
                  </div>
                  <div className="space-y-2">
                    <div>
                      <p className="text-indigo-300 text-xs">
                        Registration Number
                      </p>
                      <p className="text-white">
                        {companyData.registrationNumber}
                      </p>
                    </div>
                    <div>
                      <p className="text-indigo-300 text-xs">
                        Date of Incorporation
                      </p>
                      <p className="text-white">
                        {companyData.incorporationDate}
                      </p>
                    </div>
                    <div>
                      <p className="text-indigo-300 text-xs">Fiscal Year End</p>
                      <p className="text-white">{companyData.fiscalYearEnd}</p>
                    </div>
                  </div>
                </div>
                <div className="bg-indigo-800/30 backdrop-blur-md rounded-2xl border border-indigo-500/30 p-5">
                  <div className="flex items-center mb-3">
                    <div className="p-2 bg-indigo-900/50 rounded-lg mr-3">
                      <CoinsIcon className="h-5 w-5 text-indigo-300" />
                    </div>
                    <h3 className="text-lg font-medium text-white">
                      Financial Status
                    </h3>
                  </div>
                  <div className="space-y-2">
                    <div>
                      <p className="text-indigo-300 text-xs">VAT Number</p>
                      <p className="text-white">{companyData.vatNumber}</p>
                    </div>
                    <div>
                      <p className="text-indigo-300 text-xs">Share Capital</p>
                      <p className="text-white">
                        {companyData.capitalStructure.issuedCapital} (issued)
                      </p>
                    </div>
                    <div>
                      <p className="text-indigo-300 text-xs">
                        First Book Year End
                      </p>
                      <p className="text-white">
                        {companyData.firstBookYearEnd}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bg-indigo-800/30 backdrop-blur-md rounded-2xl border border-indigo-500/30 p-5">
                  <div className="flex items-center mb-3">
                    <div className="p-2 bg-indigo-900/50 rounded-lg mr-3">
                      <ClockIcon className="h-5 w-5 text-indigo-300" />
                    </div>
                    <h3 className="text-lg font-medium text-white">
                      Upcoming Deadlines
                    </h3>
                  </div>
                  <div className="space-y-2">
                    {companyData.upcomingDeadlines.map((deadline, index) => <div key={index} className="flex items-center">
                        {deadline.priority === 'high' ? <AlertTriangleIcon className="h-4 w-4 text-[#EA3A70] mr-2 flex-shrink-0" /> : <CheckCircleIcon className="h-4 w-4 text-yellow-400 mr-2 flex-shrink-0" />}
                        <div>
                          <p className="text-white text-sm">{deadline.title}</p>
                          <p className="text-indigo-300 text-xs">
                            Due {deadline.dueDate} ({deadline.daysRemaining}{' '}
                            days)
                          </p>
                        </div>
                      </div>)}
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2 bg-indigo-800/30 backdrop-blur-md rounded-2xl border border-indigo-500/30 p-6">
                  <h2 className="text-xl font-bold text-white mb-4">
                    Company Profile
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                    <div>
                      <h3 className="text-lg font-medium text-white mb-3">
                        Basic Information
                      </h3>
                      <div className="space-y-4">
                        <div>
                          <p className="text-indigo-300 text-xs">
                            Company Name
                          </p>
                          {isEditing ? <input type="text" value={companyData.name} onChange={e => setCompanyData({
                        ...companyData,
                        name: e.target.value
                      })} className="w-full bg-indigo-900/50 border border-indigo-500/30 rounded-lg px-3 py-2 text-white" /> : <p className="text-white">{companyData.name}</p>}
                        </div>
                        <div>
                          <p className="text-indigo-300 text-xs">
                            Company Type
                          </p>
                          {isEditing ? <input type="text" value={companyData.type} onChange={e => setCompanyData({
                        ...companyData,
                        type: e.target.value
                      })} className="w-full bg-indigo-900/50 border border-indigo-500/30 rounded-lg px-3 py-2 text-white" /> : <p className="text-white">{companyData.type}</p>}
                        </div>
                        <div>
                          <p className="text-indigo-300 text-xs">
                            Registration Number
                          </p>
                          {isEditing ? <input type="text" value={companyData.registrationNumber} onChange={e => setCompanyData({
                        ...companyData,
                        registrationNumber: e.target.value
                      })} className="w-full bg-indigo-900/50 border border-indigo-500/30 rounded-lg px-3 py-2 text-white" /> : <p className="text-white">
                              {companyData.registrationNumber}
                            </p>}
                        </div>
                        <div>
                          <p className="text-indigo-300 text-xs">
                            Date of Incorporation
                          </p>
                          {isEditing ? <input type="text" value={companyData.incorporationDate} onChange={e => setCompanyData({
                        ...companyData,
                        incorporationDate: e.target.value
                      })} className="w-full bg-indigo-900/50 border border-indigo-500/30 rounded-lg px-3 py-2 text-white" /> : <p className="text-white">
                              {companyData.incorporationDate}
                            </p>}
                        </div>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-white mb-3">
                        Contact Information
                      </h3>
                      <div className="space-y-4">
                        <div>
                          <p className="text-indigo-300 text-xs">
                            Email Address
                          </p>
                          {isEditing ? <input type="email" value={companyData.contact.email} onChange={e => handleNestedInputChange('contact', 'email', e.target.value)} className="w-full bg-indigo-900/50 border border-indigo-500/30 rounded-lg px-3 py-2 text-white" /> : <p className="text-white flex items-center">
                              <MailIcon className="h-4 w-4 mr-2 text-indigo-400" />
                              {companyData.contact.email}
                            </p>}
                        </div>
                        <div>
                          <p className="text-indigo-300 text-xs">
                            Phone Number
                          </p>
                          {isEditing ? <input type="text" value={companyData.contact.phone} onChange={e => handleNestedInputChange('contact', 'phone', e.target.value)} className="w-full bg-indigo-900/50 border border-indigo-500/30 rounded-lg px-3 py-2 text-white" /> : <p className="text-white flex items-center">
                              <PhoneIcon className="h-4 w-4 mr-2 text-indigo-400" />
                              {companyData.contact.phone}
                            </p>}
                        </div>
                        <div>
                          <p className="text-indigo-300 text-xs">Website</p>
                          {isEditing ? <input type="text" value={companyData.contact.website} onChange={e => handleNestedInputChange('contact', 'website', e.target.value)} className="w-full bg-indigo-900/50 border border-indigo-500/30 rounded-lg px-3 py-2 text-white" /> : <p className="text-white flex items-center">
                              <GlobeIcon className="h-4 w-4 mr-2 text-indigo-400" />
                              {companyData.contact.website}
                            </p>}
                        </div>
                        <div>
                          <p className="text-indigo-300 text-xs">LinkedIn</p>
                          {isEditing ? <input type="text" value={companyData.contact.linkedin} onChange={e => handleNestedInputChange('contact', 'linkedin', e.target.value)} className="w-full bg-indigo-900/50 border border-indigo-500/30 rounded-lg px-3 py-2 text-white" /> : <p className="text-white flex items-center">
                              <LinkIcon className="h-4 w-4 mr-2 text-indigo-400" />
                              {companyData.contact.linkedin}
                            </p>}
                        </div>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-white mb-3">
                        Address Information
                      </h3>
                      <div className="space-y-4">
                        <div>
                          <p className="text-indigo-300 text-xs">
                            Registered Address
                          </p>
                          {isEditing ? <textarea value={companyData.address.registered} onChange={e => handleNestedInputChange('address', 'registered', e.target.value)} className="w-full bg-indigo-900/50 border border-indigo-500/30 rounded-lg px-3 py-2 text-white" rows="2" /> : <p className="text-white flex items-start">
                              <MapPinIcon className="h-4 w-4 mr-2 text-indigo-400 mt-0.5" />
                              {companyData.address.registered}
                            </p>}
                        </div>
                        <div>
                          <p className="text-indigo-300 text-xs">
                            Business Address
                          </p>
                          {isEditing ? <textarea value={companyData.address.business} onChange={e => handleNestedInputChange('address', 'business', e.target.value)} className="w-full bg-indigo-900/50 border border-indigo-500/30 rounded-lg px-3 py-2 text-white" rows="2" /> : <p className="text-white flex items-start">
                              <MapPinIcon className="h-4 w-4 mr-2 text-indigo-400 mt-0.5" />
                              {companyData.address.business}
                            </p>}
                        </div>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-white mb-3">
                        Key Statistics
                      </h3>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="bg-indigo-900/30 rounded-lg p-3">
                          <p className="text-indigo-300 text-xs">Directors</p>
                          <p className="text-white text-xl font-medium">
                            {companyData.directors.length}
                          </p>
                        </div>
                        <div className="bg-indigo-900/30 rounded-lg p-3">
                          <p className="text-indigo-300 text-xs">
                            Shareholders
                          </p>
                          <p className="text-white text-xl font-medium">
                            {companyData.shareholders.length}
                          </p>
                        </div>
                        <div className="bg-indigo-900/30 rounded-lg p-3">
                          <p className="text-indigo-300 text-xs">
                            Share Capital
                          </p>
                          <p className="text-white text-xl font-medium">
                            {companyData.capitalStructure.issuedCapital}
                          </p>
                        </div>
                        <div className="bg-indigo-900/30 rounded-lg p-3">
                          <p className="text-indigo-300 text-xs">Company Age</p>
                          <p className="text-white text-xl font-medium">
                            1 year
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="space-y-6">
                  <div className="bg-indigo-800/30 backdrop-blur-md rounded-2xl border border-indigo-500/30 p-5">
                    <h3 className="text-lg font-medium text-white mb-4">
                      Quick Actions
                    </h3>
                    <div className="space-y-3">
                      <button className="w-full px-4 py-3 bg-[#EA3A70] text-white rounded-xl hover:bg-[#EA3A70]/90 transition-colors flex items-center justify-center">
                        <DownloadIcon className="h-4 w-4 mr-2" />
                        Download Company Extract
                      </button>
                      <button className="w-full px-4 py-3 bg-indigo-900/50 border border-indigo-500/30 text-white rounded-xl hover:bg-indigo-800/50 transition-colors flex items-center justify-center">
                        <FileTextIcon className="h-4 w-4 mr-2" />
                        Generate Company Report
                      </button>
                      <button className="w-full px-4 py-3 bg-indigo-900/50 border border-indigo-500/30 text-white rounded-xl hover:bg-indigo-800/50 transition-colors flex items-center justify-center">
                        <HistoryIcon className="h-4 w-4 mr-2" />
                        View Change History
                      </button>
                    </div>
                  </div>
                  <div className="bg-indigo-800/30 backdrop-blur-md rounded-2xl border border-indigo-500/30 p-5">
                    <h3 className="text-lg font-medium text-white mb-4">
                      Upcoming Deadlines
                    </h3>
                    <div className="space-y-3">
                      {companyData.upcomingDeadlines.map((deadline, index) => <div key={index} className="bg-indigo-900/30 p-3 rounded-lg">
                          <div className="flex items-center">
                            {deadline.priority === 'high' ? <AlertTriangleIcon className="h-4 w-4 text-[#EA3A70] mr-2" /> : <CheckCircleIcon className="h-4 w-4 text-yellow-400 mr-2" />}
                            <span className="text-white text-sm font-medium">
                              {deadline.title}
                            </span>
                          </div>
                          <p className="text-indigo-300 text-xs ml-6">
                            Due {deadline.dueDate} ({deadline.daysRemaining}{' '}
                            days remaining)
                          </p>
                        </div>)}
                    </div>
                  </div>
                  <div className="bg-indigo-800/30 backdrop-blur-md rounded-2xl border border-indigo-500/30 p-5">
                    <h3 className="text-lg font-medium text-white mb-4">
                      Recent Documents
                    </h3>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between p-3 bg-indigo-900/30 rounded-lg">
                        <div className="flex items-center">
                          <FileTextIcon className="h-4 w-4 text-indigo-300 mr-2" />
                          <span className="text-white text-sm">
                            Articles of Association
                          </span>
                        </div>
                        <DownloadIcon className="h-4 w-4 text-indigo-300 cursor-pointer" />
                      </div>
                      <div className="flex items-center justify-between p-3 bg-indigo-900/30 rounded-lg">
                        <div className="flex items-center">
                          <FileTextIcon className="h-4 w-4 text-indigo-300 mr-2" />
                          <span className="text-white text-sm">
                            Certificate of Incorporation
                          </span>
                        </div>
                        <DownloadIcon className="h-4 w-4 text-indigo-300 cursor-pointer" />
                      </div>
                      <div className="flex items-center justify-between p-3 bg-indigo-900/30 rounded-lg">
                        <div className="flex items-center">
                          <FileTextIcon className="h-4 w-4 text-indigo-300 mr-2" />
                          <span className="text-white text-sm">
                            VAT Registration Certificate
                          </span>
                        </div>
                        <DownloadIcon className="h-4 w-4 text-indigo-300 cursor-pointer" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>}
          {activeTab === 'legal' && <div className="bg-indigo-800/30 backdrop-blur-md rounded-2xl border border-indigo-500/30 p-6">
              <h2 className="text-xl font-bold text-white mb-6">
                Legal & Compliance Information
              </h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-medium text-white mb-4">
                    Tax Registration
                  </h3>
                  <div className="space-y-4 bg-indigo-900/30 rounded-xl p-5">
                    <div>
                      <p className="text-indigo-300 text-xs">VAT Number</p>
                      {isEditing ? <input type="text" value={companyData.taxDetails.vatNumber} onChange={e => handleNestedInputChange('taxDetails', 'vatNumber', e.target.value)} className="w-full bg-indigo-900/50 border border-indigo-500/30 rounded-lg px-3 py-2 text-white" /> : <p className="text-white">
                          {companyData.taxDetails.vatNumber}
                        </p>}
                    </div>
                    <div>
                      <p className="text-indigo-300 text-xs">
                        VAT Filing Frequency
                      </p>
                      {isEditing ? <select value={companyData.taxDetails.vatFiling} onChange={e => handleNestedInputChange('taxDetails', 'vatFiling', e.target.value)} className="w-full bg-indigo-900/50 border border-indigo-500/30 rounded-lg px-3 py-2 text-white">
                          <option value="Monthly">Monthly</option>
                          <option value="Quarterly">Quarterly</option>
                          <option value="Annually">Annually</option>
                        </select> : <p className="text-white">
                          {companyData.taxDetails.vatFiling}
                        </p>}
                    </div>
                    <div>
                      <p className="text-indigo-300 text-xs">
                        VAT Filing Months
                      </p>
                      {isEditing ? <input type="text" value={companyData.taxDetails.vatFilingMonths} onChange={e => handleNestedInputChange('taxDetails', 'vatFilingMonths', e.target.value)} className="w-full bg-indigo-900/50 border border-indigo-500/30 rounded-lg px-3 py-2 text-white" /> : <p className="text-white">
                          {companyData.taxDetails.vatFilingMonths}
                        </p>}
                    </div>
                    <div>
                      <p className="text-indigo-300 text-xs">
                        Corporate Tax Number
                      </p>
                      {isEditing ? <input type="text" value={companyData.taxDetails.corporateTaxNumber} onChange={e => handleNestedInputChange('taxDetails', 'corporateTaxNumber', e.target.value)} className="w-full bg-indigo-900/50 border border-indigo-500/30 rounded-lg px-3 py-2 text-white" /> : <p className="text-white">
                          {companyData.taxDetails.corporateTaxNumber}
                        </p>}
                    </div>
                    <div>
                      <p className="text-indigo-300 text-xs">
                        Employer Registration
                      </p>
                      {isEditing ? <div className="flex items-center space-x-4">
                          <label className="flex items-center text-white">
                            <input type="checkbox" checked={companyData.taxDetails.employerRegistered} onChange={e => handleNestedInputChange('taxDetails', 'employerRegistered', e.target.checked)} className="mr-2" />
                            Registered as Employer
                          </label>
                        </div> : <p className="text-white">
                          {companyData.taxDetails.employerRegistered ? 'Yes' : 'No'}
                        </p>}
                    </div>
                    {companyData.taxDetails.employerRegistered && <div>
                        <p className="text-indigo-300 text-xs">
                          Employer Number
                        </p>
                        {isEditing ? <input type="text" value={companyData.taxDetails.employerNumber} onChange={e => handleNestedInputChange('taxDetails', 'employerNumber', e.target.value)} className="w-full bg-indigo-900/50 border border-indigo-500/30 rounded-lg px-3 py-2 text-white" /> : <p className="text-white">
                            {companyData.taxDetails.employerNumber}
                          </p>}
                      </div>}
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-white mb-4">
                    Fiscal Information
                  </h3>
                  <div className="space-y-4 bg-indigo-900/30 rounded-xl p-5">
                    <div>
                      <p className="text-indigo-300 text-xs">Fiscal Year End</p>
                      {isEditing ? <input type="text" value={companyData.fiscalYearEnd} onChange={e => setCompanyData({
                    ...companyData,
                    fiscalYearEnd: e.target.value
                  })} className="w-full bg-indigo-900/50 border border-indigo-500/30 rounded-lg px-3 py-2 text-white" /> : <p className="text-white">
                          {companyData.fiscalYearEnd}
                        </p>}
                    </div>
                    <div>
                      <p className="text-indigo-300 text-xs">
                        First Book Year End
                      </p>
                      {isEditing ? <input type="text" value={companyData.firstBookYearEnd} onChange={e => setCompanyData({
                    ...companyData,
                    firstBookYearEnd: e.target.value
                  })} className="w-full bg-indigo-900/50 border border-indigo-500/30 rounded-lg px-3 py-2 text-white" /> : <p className="text-white">
                          {companyData.firstBookYearEnd}
                        </p>}
                    </div>
                    <div>
                      <p className="text-indigo-300 text-xs">
                        Annual Accounts Filing Deadline
                      </p>
                      <p className="text-white">June 30, 2024</p>
                    </div>
                    <div>
                      <p className="text-indigo-300 text-xs">
                        Corporate Tax Return Deadline
                      </p>
                      <p className="text-white">June 1, 2024</p>
                    </div>
                  </div>
                  <h3 className="text-lg font-medium text-white mt-6 mb-4">
                    Bank Details
                  </h3>
                  <div className="space-y-4 bg-indigo-900/30 rounded-xl p-5">
                    <div>
                      <p className="text-indigo-300 text-xs">Bank Name</p>
                      {isEditing ? <input type="text" value={companyData.bankDetails.bankName} onChange={e => handleNestedInputChange('bankDetails', 'bankName', e.target.value)} className="w-full bg-indigo-900/50 border border-indigo-500/30 rounded-lg px-3 py-2 text-white" /> : <p className="text-white">
                          {companyData.bankDetails.bankName}
                        </p>}
                    </div>
                    <div>
                      <p className="text-indigo-300 text-xs">
                        Account Number (IBAN)
                      </p>
                      {isEditing ? <input type="text" value={companyData.bankDetails.accountNumber} onChange={e => handleNestedInputChange('bankDetails', 'accountNumber', e.target.value)} className="w-full bg-indigo-900/50 border border-indigo-500/30 rounded-lg px-3 py-2 text-white" /> : <p className="text-white">
                          {companyData.bankDetails.accountNumber}
                        </p>}
                    </div>
                    <div>
                      <p className="text-indigo-300 text-xs">BIC/SWIFT</p>
                      {isEditing ? <input type="text" value={companyData.bankDetails.bic} onChange={e => handleNestedInputChange('bankDetails', 'bic', e.target.value)} className="w-full bg-indigo-900/50 border border-indigo-500/30 rounded-lg px-3 py-2 text-white" /> : <p className="text-white">
                          {companyData.bankDetails.bic}
                        </p>}
                    </div>
                  </div>
                </div>
              </div>
              <h3 className="text-lg font-medium text-white mt-8 mb-4">
                Compliance Documents
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-indigo-900/30 rounded-xl p-4">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="text-white font-medium">
                      Articles of Association
                    </h4>
                    <DownloadIcon className="h-5 w-5 text-indigo-300 cursor-pointer" />
                  </div>
                  <p className="text-indigo-300 text-xs">
                    Last updated: January 15, 2023
                  </p>
                  <div className="mt-3 flex items-center text-xs text-green-300">
                    <CheckCircleIcon className="h-4 w-4 mr-1" />
                    Valid
                  </div>
                </div>
                <div className="bg-indigo-900/30 rounded-xl p-4">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="text-white font-medium">
                      Certificate of Incorporation
                    </h4>
                    <DownloadIcon className="h-5 w-5 text-indigo-300 cursor-pointer" />
                  </div>
                  <p className="text-indigo-300 text-xs">
                    Issued: January 15, 2023
                  </p>
                  <div className="mt-3 flex items-center text-xs text-green-300">
                    <CheckCircleIcon className="h-4 w-4 mr-1" />
                    Valid
                  </div>
                </div>
                <div className="bg-indigo-900/30 rounded-xl p-4">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="text-white font-medium">
                      VAT Registration Certificate
                    </h4>
                    <DownloadIcon className="h-5 w-5 text-indigo-300 cursor-pointer" />
                  </div>
                  <p className="text-indigo-300 text-xs">
                    Issued: February 1, 2023
                  </p>
                  <div className="mt-3 flex items-center text-xs text-green-300">
                    <CheckCircleIcon className="h-4 w-4 mr-1" />
                    Valid
                  </div>
                </div>
                <div className="bg-indigo-900/30 rounded-xl p-4">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="text-white font-medium">
                      Shareholders Register
                    </h4>
                    <DownloadIcon className="h-5 w-5 text-indigo-300 cursor-pointer" />
                  </div>
                  <p className="text-indigo-300 text-xs">
                    Last updated: January 15, 2023
                  </p>
                  <div className="mt-3 flex items-center text-xs text-green-300">
                    <CheckCircleIcon className="h-4 w-4 mr-1" />
                    Valid
                  </div>
                </div>
                <div className="bg-indigo-900/30 rounded-xl p-4">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="text-white font-medium">
                      Directors Register
                    </h4>
                    <DownloadIcon className="h-5 w-5 text-indigo-300 cursor-pointer" />
                  </div>
                  <p className="text-indigo-300 text-xs">
                    Last updated: January 15, 2023
                  </p>
                  <div className="mt-3 flex items-center text-xs text-green-300">
                    <CheckCircleIcon className="h-4 w-4 mr-1" />
                    Valid
                  </div>
                </div>
                <div className="bg-indigo-900/30 rounded-xl p-4">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="text-white font-medium">UBO Registration</h4>
                    <DownloadIcon className="h-5 w-5 text-indigo-300 cursor-pointer" />
                  </div>
                  <p className="text-indigo-300 text-xs">
                    Last updated: January 15, 2023
                  </p>
                  <div className="mt-3 flex items-center text-xs text-green-300">
                    <CheckCircleIcon className="h-4 w-4 mr-1" />
                    Valid
                  </div>
                </div>
              </div>
            </div>}
          {activeTab === 'financial' && <div className="bg-indigo-800/30 backdrop-blur-md rounded-2xl border border-indigo-500/30 p-6">
              <h2 className="text-xl font-bold text-white mb-6">
                Financial Details
              </h2>
              <div className="mb-8">
                <h3 className="text-lg font-medium text-white mb-4">
                  Capital Structure
                </h3>
                <div className="bg-indigo-900/30 rounded-xl p-5">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <p className="text-indigo-300 text-xs">
                        Authorized Capital
                      </p>
                      {isEditing ? <input type="text" value={companyData.capitalStructure.authorizedCapital} onChange={e => handleNestedInputChange('capitalStructure', 'authorizedCapital', e.target.value)} className="w-full bg-indigo-900/50 border border-indigo-500/30 rounded-lg px-3 py-2 text-white" /> : <p className="text-white text-xl font-medium">
                          {companyData.capitalStructure.authorizedCapital}
                        </p>}
                    </div>
                    <div>
                      <p className="text-indigo-300 text-xs">Issued Capital</p>
                      {isEditing ? <input type="text" value={companyData.capitalStructure.issuedCapital} onChange={e => handleNestedInputChange('capitalStructure', 'issuedCapital', e.target.value)} className="w-full bg-indigo-900/50 border border-indigo-500/30 rounded-lg px-3 py-2 text-white" /> : <p className="text-white text-xl font-medium">
                          {companyData.capitalStructure.issuedCapital}
                        </p>}
                    </div>
                    <div>
                      <p className="text-indigo-300 text-xs">Paid-Up Capital</p>
                      {isEditing ? <input type="text" value={companyData.capitalStructure.paidUpCapital} onChange={e => handleNestedInputChange('capitalStructure', 'paidUpCapital', e.target.value)} className="w-full bg-indigo-900/50 border border-indigo-500/30 rounded-lg px-3 py-2 text-white" /> : <p className="text-white text-xl font-medium">
                          {companyData.capitalStructure.paidUpCapital}
                        </p>}
                    </div>
                    <div>
                      <p className="text-indigo-300 text-xs">
                        Number of Shares
                      </p>
                      {isEditing ? <input type="text" value={companyData.capitalStructure.numberOfShares} onChange={e => handleNestedInputChange('capitalStructure', 'numberOfShares', e.target.value)} className="w-full bg-indigo-900/50 border border-indigo-500/30 rounded-lg px-3 py-2 text-white" /> : <p className="text-white text-xl font-medium">
                          {companyData.capitalStructure.numberOfShares}
                        </p>}
                    </div>
                    <div>
                      <p className="text-indigo-300 text-xs">
                        Nominal Value per Share
                      </p>
                      {isEditing ? <input type="text" value={companyData.capitalStructure.shareValue} onChange={e => handleNestedInputChange('capitalStructure', 'shareValue', e.target.value)} className="w-full bg-indigo-900/50 border border-indigo-500/30 rounded-lg px-3 py-2 text-white" /> : <p className="text-white text-xl font-medium">
                          {companyData.capitalStructure.shareValue}
                        </p>}
                    </div>
                  </div>
                </div>
              </div>
              <div className="mb-8">
                <h3 className="text-lg font-medium text-white mb-4">
                  Shareholding Structure
                </h3>
                <div className="overflow-x-auto">
                  <table className="w-full bg-indigo-900/30 rounded-xl">
                    <thead>
                      <tr>
                        <th className="text-left p-4 text-indigo-300 text-sm font-medium">
                          Shareholder
                        </th>
                        <th className="text-left p-4 text-indigo-300 text-sm font-medium">
                          Type
                        </th>
                        <th className="text-right p-4 text-indigo-300 text-sm font-medium">
                          Shares
                        </th>
                        <th className="text-right p-4 text-indigo-300 text-sm font-medium">
                          Percentage
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {companyData.shareholders.map((shareholder, index) => <tr key={index} className="border-t border-indigo-700/30">
                          <td className="p-4 text-white">{shareholder.name}</td>
                          <td className="p-4 text-white">{shareholder.type}</td>
                          <td className="p-4 text-white text-right">
                            {shareholder.shares.toLocaleString()}
                          </td>
                          <td className="p-4 text-white text-right">
                            {shareholder.percentage}%
                          </td>
                        </tr>)}
                      <tr className="border-t border-indigo-700/30 bg-indigo-800/30">
                        <td className="p-4 text-white font-medium">Total</td>
                        <td className="p-4"></td>
                        <td className="p-4 text-white font-medium text-right">
                          25,000
                        </td>
                        <td className="p-4 text-white font-medium text-right">
                          100%
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-medium text-white mb-4">
                  Bank Accounts
                </h3>
                <div className="bg-indigo-900/30 rounded-xl p-5">
                  <div className="flex items-start">
                    <div className="p-3 bg-indigo-800/50 rounded-xl mr-4">
                      <BuildingIcon className="h-6 w-6 text-indigo-300" />
                    </div>
                    <div>
                      <h4 className="text-white font-medium">
                        {companyData.bankDetails.bankName}
                      </h4>
                      <p className="text-indigo-300 text-sm">
                        Primary Business Account
                      </p>
                      <div className="mt-2 space-y-1">
                        <p className="text-white text-sm">
                          IBAN: {companyData.bankDetails.accountNumber}
                        </p>
                        <p className="text-white text-sm">
                          BIC: {companyData.bankDetails.bic}
                        </p>
                        <p className="text-white text-sm">Currency: EUR</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>}
          {activeTab === 'management' && <div className="bg-indigo-800/30 backdrop-blur-md rounded-2xl border border-indigo-500/30 p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-white">
                  Management & Ownership
                </h2>
                {!isEditing && <button className="px-4 py-2 bg-[#EA3A70] text-white rounded-xl hover:bg-[#EA3A70]/90 transition-colors flex items-center">
                    <PlusIcon className="h-4 w-4 mr-2" />
                    Add Person
                  </button>}
              </div>
              <div className="mb-8">
                <h3 className="text-lg font-medium text-white mb-4">
                  Directors
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {companyData.directors.map((director, index) => <div key={index} className="bg-indigo-900/30 rounded-xl p-4">
                      <div className="flex items-start">
                        <div className="p-3 bg-indigo-800/50 rounded-xl mr-3">
                          <UsersIcon className="h-6 w-6 text-indigo-300" />
                        </div>
                        <div>
                          <h4 className="text-lg font-medium text-white">
                            {director.name}
                          </h4>
                          <p className="text-indigo-200 text-sm">
                            {director.title}
                          </p>
                          <div className="mt-2 space-y-1 text-sm text-indigo-300">
                            <p className="flex items-center">
                              <MailIcon className="h-4 w-4 mr-2" />
                              {director.email}
                            </p>
                            <p className="flex items-center">
                              <PhoneIcon className="h-4 w-4 mr-2" />
                              {director.phone}
                            </p>
                            <p className="flex items-center">
                              <CalendarIcon className="h-4 w-4 mr-2" />
                              Appointed: {director.appointmentDate}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>)}
                </div>
              </div>
              <div>
                <h3 className="text-lg font-medium text-white mb-4">
                  Shareholders
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {companyData.shareholders.map((shareholder, index) => <div key={index} className="bg-indigo-900/30 rounded-xl p-4">
                      <div className="flex items-start">
                        <div className="p-3 bg-indigo-800/50 rounded-xl mr-3">
                          {shareholder.type === 'Corporate' ? <BuildingIcon className="h-6 w-6 text-indigo-300" /> : <UsersIcon className="h-6 w-6 text-indigo-300" />}
                        </div>
                        <div>
                          <h4 className="text-lg font-medium text-white">
                            {shareholder.name}
                          </h4>
                          <p className="text-indigo-200 text-sm">
                            {shareholder.type} Shareholder (
                            {shareholder.percentage}%
                          </p>
                          <div className="mt-2 space-y-1 text-sm text-indigo-300">
                            <p className="flex items-center">
                              <CoinsIcon className="h-4 w-4 mr-2" />
                              {shareholder.shares.toLocaleString()} shares
                            </p>
                            <p className="flex items-center">
                              <GlobeIcon className="h-4 w-4 mr-2" />
                              {shareholder.country}
                            </p>
                            {shareholder.type === 'Corporate' && shareholder.registrationNumber && <p className="flex items-center">
                                  <FileTextIcon className="h-4 w-4 mr-2" />
                                  Registration: {shareholder.registrationNumber}
                                </p>}
                          </div>
                        </div>
                      </div>
                    </div>)}
                </div>
              </div>
            </div>}
          {activeTab === 'history' && <div className="bg-indigo-800/30 backdrop-blur-md rounded-2xl border border-indigo-500/30 p-6">
              <h2 className="text-xl font-bold text-white mb-6">
                Corporate History
              </h2>
              <div className="relative border-l-2 border-indigo-500/30 ml-4 pl-8 pb-6">
                {companyData.keyDates.map((event, index) => <div key={index} className="mb-8 relative">
                    <div className="absolute -left-12 mt-1.5 w-4 h-4 rounded-full bg-[#EA3A70]"></div>
                    <div className="bg-indigo-900/30 rounded-xl p-4">
                      <h3 className="text-lg font-medium text-white">
                        {event.event}
                      </h3>
                      <p className="text-indigo-300 text-sm">{event.date}</p>
                    </div>
                  </div>)}
              </div>
              <h3 className="text-lg font-medium text-white mt-8 mb-4">
                Document Archive
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-indigo-900/30 rounded-xl p-4">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="text-white font-medium">
                      Articles of Association
                    </h4>
                    <DownloadIcon className="h-5 w-5 text-indigo-300 cursor-pointer" />
                  </div>
                  <p className="text-indigo-300 text-xs">January 15, 2023</p>
                </div>
                <div className="bg-indigo-900/30 rounded-xl p-4">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="text-white font-medium">
                      Certificate of Incorporation
                    </h4>
                    <DownloadIcon className="h-5 w-5 text-indigo-300 cursor-pointer" />
                  </div>
                  <p className="text-indigo-300 text-xs">January 15, 2023</p>
                </div>
                <div className="bg-indigo-900/30 rounded-xl p-4">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="text-white font-medium">
                      Share Certificates
                    </h4>
                    <DownloadIcon className="h-5 w-5 text-indigo-300 cursor-pointer" />
                  </div>
                  <p className="text-indigo-300 text-xs">January 15, 2023</p>
                </div>
                <div className="bg-indigo-900/30 rounded-xl p-4">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="text-white font-medium">
                      Director Appointments
                    </h4>
                    <DownloadIcon className="h-5 w-5 text-indigo-300 cursor-pointer" />
                  </div>
                  <p className="text-indigo-300 text-xs">January 15, 2023</p>
                </div>
                <div className="bg-indigo-900/30 rounded-xl p-4">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="text-white font-medium">
                      VAT Registration Certificate
                    </h4>
                    <DownloadIcon className="h-5 w-5 text-indigo-300 cursor-pointer" />
                  </div>
                  <p className="text-indigo-300 text-xs">February 1, 2023</p>
                </div>
                <div className="bg-indigo-900/30 rounded-xl p-4">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="text-white font-medium">
                      Employer Registration
                    </h4>
                    <DownloadIcon className="h-5 w-5 text-indigo-300 cursor-pointer" />
                  </div>
                  <p className="text-indigo-300 text-xs">March 15, 2023</p>
                </div>
              </div>
            </div>}
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 bg-indigo-900/30 rounded-xl border border-indigo-500/30">
                <h3 className="text-white font-medium mb-3">
                  Upload Documents
                </h3>
                <div className="space-y-3">
                  <button className="w-full px-4 py-3 bg-indigo-800/50 hover:bg-indigo-800/70 text-white rounded-xl transition-colors flex items-center justify-between group">
                    <div className="flex items-center">
                      <FileTextIcon className="h-5 w-5 mr-3 text-indigo-300" />
                      <span>Passport Copy</span>
                    </div>
                    <UploadIcon className="h-5 w-5 text-indigo-300 group-hover:text-white transition-colors" />
                  </button>
                  <button className="w-full px-4 py-3 bg-indigo-800/50 hover:bg-indigo-800/70 text-white rounded-xl transition-colors flex items-center justify-between group">
                    <div className="flex items-center">
                      <HomeIcon className="h-5 w-5 mr-3 text-indigo-300" />
                      <span>Proof of Address</span>
                    </div>
                    <UploadIcon className="h-5 w-5 text-indigo-300 group-hover:text-white transition-colors" />
                  </button>
                  <button className="w-full px-4 py-3 bg-indigo-800/50 hover:bg-indigo-800/70 text-white rounded-xl transition-colors flex items-center justify-between group">
                    <div className="flex items-center">
                      <BuildingIcon className="h-5 w-5 mr-3 text-indigo-300" />
                      <span>Company Documents</span>
                    </div>
                    <UploadIcon className="h-5 w-5 text-indigo-300 group-hover:text-white transition-colors" />
                  </button>
                </div>
              </div>
              <div className="p-4 bg-indigo-900/30 rounded-xl border border-indigo-500/30">
                <h3 className="text-white font-medium mb-3">Import Data</h3>
                <div className="space-y-3">
                  <button className="w-full px-4 py-3 bg-indigo-800/50 hover:bg-indigo-800/70 text-white rounded-xl transition-colors flex items-center justify-between group">
                    <div className="flex items-center">
                      <DatabaseIcon className="h-5 w-5 mr-3 text-indigo-300" />
                      <span>Import from Chamber of Commerce</span>
                    </div>
                    <ArrowRightIcon className="h-5 w-5 text-indigo-300 group-hover:text-white transition-colors" />
                  </button>
                  <button className="w-full px-4 py-3 bg-indigo-800/50 hover:bg-indigo-800/70 text-white rounded-xl transition-colors flex items-center justify-between group">
                    <div className="flex items-center">
                      <FileSpreadsheetIcon className="h-5 w-5 mr-3 text-indigo-300" />
                      <span>Import from Excel</span>
                    </div>
                    <ArrowRightIcon className="h-5 w-5 text-indigo-300 group-hover:text-white transition-colors" />
                  </button>
                </div>
              </div>
            </div>
            <div className="border-t border-indigo-500/30 pt-4">
              <label className="flex items-start space-x-3 cursor-pointer">
                <input type="checkbox" className="mt-1 h-4 w-4 rounded border-indigo-500/30 bg-indigo-900/30 text-[#EA3A70]" />
                <span className="text-sm text-indigo-200">
                  I consent to House of Companies storing and processing my data
                  in accordance with GDPR regulations. This includes storing
                  uploaded documents and imported data for compliance and
                  service provision purposes. You can find our full privacy
                  policy{' '}
                  <span className="text-[#EA3A70] hover:underline cursor-pointer">
                    here
                  </span>
                  .
                </span>
              </label>
            </div>
            <div className="flex space-x-3">
              <button onClick={handleSaveChanges} className="px-4 py-2 bg-green-600 text-white rounded-xl hover:bg-green-700 transition-colors flex items-center">
                <SaveIcon className="h-4 w-4 mr-2" />
                Save Changes
              </button>
              <button onClick={handleCancelEdit} className="px-4 py-2 bg-indigo-900/50 border border-indigo-500/30 text-white rounded-xl hover:bg-indigo-800/50 transition-colors flex items-center">
                <XIcon className="h-4 w-4 mr-2" />
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>;
}