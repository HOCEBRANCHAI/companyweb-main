import React, { useState } from 'react';
import { BuildingIcon, ChevronDownIcon, CheckIcon, PlusIcon, FileTextIcon, MapPinIcon, CheckCircleIcon } from 'lucide-react';
interface Company {
  id: string;
  name: string;
  location: string;
  registrationNumber?: string;
  status: 'active' | 'inactive' | 'pending';
  isBase?: boolean;
}
export function CompanySelector() {
  const [selectedCompany, setSelectedCompany] = useState<Company>({
    id: '1',
    name: 'Tech Innovations Ltd',
    location: 'India',
    registrationNumber: '12345678',
    status: 'active',
    isBase: true
  });
  const [isOpen, setIsOpen] = useState(false);
  const companies: Company[] = [{
    id: '1',
    name: 'Tech Innovations Ltd',
    location: 'India',
    registrationNumber: '12345678',
    status: 'active',
    isBase: true
  }, {
    id: '2',
    name: 'Global Services B.V.',
    location: 'Netherlands',
    registrationNumber: 'NL123456789B01',
    status: 'active'
  }];
  const handleSelectCompany = (company: Company) => {
    setSelectedCompany(company);
    setIsOpen(false);
  };
  const handleAddNewCompany = () => {
    // Logic for adding a new company
    console.log('Add new company');
    setIsOpen(false);
  };
  return <div className="bg-indigo-800/50 backdrop-blur-md rounded-2xl border border-indigo-500/30 p-4">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div className="flex items-center">
          <div className="p-3 bg-indigo-900/70 rounded-xl mr-3">
            <BuildingIcon className="h-6 w-6 text-indigo-300" />
          </div>
          <div>
            <div className="text-sm text-indigo-300 mb-1">
              Currently managing
            </div>
            <div className="relative">
              <button className="flex items-center space-x-2 bg-[#EA3A70]/20 hover:bg-[#EA3A70]/30 text-white py-2 px-4 rounded-xl transition-colors" onClick={() => setIsOpen(!isOpen)}>
                <span className="font-medium text-lg">
                  {selectedCompany.name}
                </span>
                <ChevronDownIcon className="h-5 w-5 text-[#EA3A70]" />
              </button>
              {/* Dropdown for Company Selection */}
              {isOpen && <div className="absolute left-0 mt-2 w-80 bg-[#1E1B3F] border border-indigo-500/30 rounded-xl shadow-lg overflow-hidden z-50">
                  <div className="p-2">
                    <div className="text-xs text-indigo-300 px-3 py-1">
                      Switch Company
                    </div>
                    {companies.map(company => <button key={company.id} onClick={() => handleSelectCompany(company)} className="w-full flex items-center space-x-3 px-3 py-3 hover:bg-indigo-800/50 rounded-lg text-white text-left">
                        <div className="p-1.5 bg-indigo-900/70 rounded-lg">
                          <BuildingIcon className="h-5 w-5 text-indigo-300" />
                        </div>
                        <div>
                          <div className="font-medium">{company.name}</div>
                          <div className="text-xs text-indigo-300">
                            {company.location} {company.isBase ? '(Base)' : ''}
                          </div>
                        </div>
                        {selectedCompany.id === company.id && <CheckIcon className="h-5 w-5 text-[#EA3A70] ml-auto" />}
                      </button>)}
                    <div className="border-t border-indigo-500/30 my-1"></div>
                    <button onClick={handleAddNewCompany} className="w-full flex items-center space-x-2 px-3 py-2 hover:bg-indigo-800/50 rounded-lg text-white text-left">
                      <PlusIcon className="h-5 w-5 text-[#EA3A70]" />
                      <span className="text-[#EA3A70]">Add New Company</span>
                    </button>
                  </div>
                </div>}
            </div>
          </div>
        </div>
        {/* Quick Company Details */}
        <div className="flex flex-wrap gap-3 text-sm">
          {selectedCompany.registrationNumber && <div className="flex items-center text-indigo-200 bg-indigo-900/40 px-3 py-1.5 rounded-lg">
              <FileTextIcon className="h-4 w-4 mr-2 text-indigo-300" />
              <span>KVK: {selectedCompany.registrationNumber}</span>
            </div>}
          <div className="flex items-center text-indigo-200 bg-indigo-900/40 px-3 py-1.5 rounded-lg">
            <MapPinIcon className="h-4 w-4 mr-2 text-indigo-300" />
            <span>
              {selectedCompany.location} {selectedCompany.isBase ? '(HQ)' : ''}
            </span>
          </div>
          <div className={`flex items-center px-3 py-1.5 rounded-lg ${selectedCompany.status === 'active' ? 'text-green-300 bg-green-900/20' : selectedCompany.status === 'pending' ? 'text-yellow-300 bg-yellow-900/20' : 'text-red-300 bg-red-900/20'}`}>
            <CheckCircleIcon className="h-4 w-4 mr-2" />
            <span>
              {selectedCompany.status === 'active' ? 'Active' : selectedCompany.status === 'pending' ? 'Pending' : 'Inactive'}
            </span>
          </div>
        </div>
      </div>
    </div>;
}