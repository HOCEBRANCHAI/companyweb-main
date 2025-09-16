import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { BuildingIcon, ChevronDown, MapPinIcon, CalendarIcon, UsersIcon, GlobeIcon, CheckCircleIcon, AlertTriangleIcon } from 'lucide-react';
interface CompanyProfileSummaryProps {
  userName?: string;
}
export function CompanyProfileSummary({
  userName = 'Sarah'
}: CompanyProfileSummaryProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const location = useLocation();
  const isDashboard = location.pathname === '/' || location.pathname === '/home';
  if (!isDashboard) {
    return null;
  }
  const company = {
    name: 'Tech Innovations B.V.',
    type: 'Private Limited Company',
    registrationNumber: 'KVK 12345678',
    vatId: 'NL123456789B01',
    country: 'Netherlands',
    address: 'Prinses Beatrixlaan 582, 2595 BM, The Hague',
    status: 'Active',
    incorporationDate: 'Jan 15, 2023',
    directors: 2,
    shareholders: 3,
    upcomingDeadlines: [{
      title: 'Annual accounts filing',
      days: 30,
      priority: 'high'
    }, {
      title: 'VAT Return',
      days: 60,
      priority: 'medium'
    }]
  };
  return <div className="bg-[#1E1B3F] border-2 border-indigo-500/50 rounded-xl overflow-hidden transition-all duration-300 shadow-lg max-w-3xl mx-auto">
      <div className="p-5">
        <div className="flex items-center justify-between cursor-pointer mb-1" onClick={() => setIsExpanded(!isExpanded)}>
          <div className="flex items-center space-x-3">
            <div className="p-3 bg-[#EA3A70]/20 rounded-lg">
              <BuildingIcon className="h-6 w-6 text-[#EA3A70]" />
            </div>
            <div>
              <h4 className="text-white text-lg font-bold">{company.name}</h4>
              <p className="text-indigo-300 text-sm">
                {company.type} • Headquarters
              </p>
            </div>
          </div>
          <ChevronDown className={`h-5 w-5 text-indigo-300 transition-transform ${isExpanded ? 'transform rotate-180' : ''}`} />
        </div>
        <div className="grid grid-cols-3 gap-4 mt-3 pb-2">
          <div className="flex items-center">
            <GlobeIcon className="h-4 w-4 text-indigo-400 mr-2" />
            <div>
              <p className="text-white text-sm">{company.country}</p>
            </div>
          </div>
          <div className="flex items-center">
            <div className="h-2 w-2 rounded-full bg-green-400 mr-2 mt-1"></div>
            <p className="text-white text-sm">{company.status}</p>
          </div>
          <div className="flex items-center">
            <UsersIcon className="h-4 w-4 text-indigo-400 mr-2" />
            <p className="text-white text-sm">
              {company.directors + company.shareholders}
            </p>
          </div>
        </div>
      </div>
      <div className={`px-5 ${isExpanded ? 'block' : 'hidden'}`}>
        <div className="space-y-4 pt-2 border-t border-indigo-500/30">
          <div className="grid grid-cols-2 gap-6 mt-3">
            <div>
              <p className="text-indigo-300 text-xs font-medium">
                Registration
              </p>
              <p className="text-white text-sm">{company.registrationNumber}</p>
            </div>
            <div>
              <p className="text-indigo-300 text-xs font-medium">VAT ID</p>
              <p className="text-white text-sm">{company.vatId}</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div className="flex items-start">
              <MapPinIcon className="h-4 w-4 text-indigo-400 mt-0.5 flex-shrink-0" />
              <div className="ml-2">
                <p className="text-indigo-300 text-xs font-medium">Address</p>
                <p className="text-white text-sm">{company.address}</p>
              </div>
            </div>
            <div className="flex items-start">
              <CalendarIcon className="h-4 w-4 text-indigo-400 mt-0.5 flex-shrink-0" />
              <div className="ml-2">
                <p className="text-indigo-300 text-xs font-medium">
                  Incorporated
                </p>
                <p className="text-white text-sm">
                  {company.incorporationDate}
                </p>
              </div>
            </div>
          </div>
          <div>
            <p className="text-indigo-300 text-xs font-medium mb-2">
              Upcoming Deadlines
            </p>
            <div className="grid grid-cols-2 gap-2">
              {company.upcomingDeadlines.map((deadline, index) => <div key={index} className="flex items-center justify-between bg-indigo-900/40 p-2 rounded-lg">
                  <div className="flex items-center">
                    {deadline.priority === 'high' ? <AlertTriangleIcon className="h-4 w-4 text-[#EA3A70] mr-1.5" /> : <CheckCircleIcon className="h-4 w-4 text-yellow-400 mr-1.5" />}
                    <span className="text-white text-xs">{deadline.title}</span>
                  </div>
                  <span className="text-indigo-300 text-xs ml-1">
                    {deadline.days}d
                  </span>
                </div>)}
            </div>
          </div>
        </div>
      </div>
      <div className="bg-indigo-900/40 border-t border-indigo-500/30 p-4 flex justify-between items-center">
        <button className="text-indigo-300 hover:text-white text-sm transition-colors">
          View Company Profile
        </button>
        <div className="flex items-center">
          <span className="text-indigo-300 text-xs mr-2">5 Subsidiaries</span>
          <div className="flex -space-x-1">
            {[1, 2, 3, 4, 5].map((_, i) => <div key={i} className="h-5 w-5 rounded-full bg-indigo-700/80 border border-indigo-500/50"></div>)}
          </div>
        </div>
      </div>
      <div className="h-4 w-px bg-indigo-500/50 mx-auto"></div>
    </div>;
}