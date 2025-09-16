import React from 'react';
import { BuildingIcon, EditIcon } from 'lucide-react';
interface CompanyHeaderProps {
  setIsEditing: (isEditing: boolean) => void;
}
export function CompanyHeader({
  setIsEditing
}: CompanyHeaderProps) {
  // Company data - this would typically come from a context or props
  const companyData = {
    name: 'Tech Innovations B.V.',
    type: 'Private Limited Company',
    status: 'Active'
  };
  return <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
      <div className="flex items-center mb-4 md:mb-0">
        <div className="p-3 bg-[#EA3A70]/20 rounded-xl mr-4">
          <BuildingIcon className="h-8 w-8 text-[#EA3A70]" />
        </div>
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-white">
            {companyData.name}
          </h1>
          <p className="text-indigo-300">
            {companyData.type} • {companyData.status}
          </p>
        </div>
      </div>
      <button onClick={() => setIsEditing(true)} className="px-4 py-2 bg-[#EA3A70] text-white rounded-xl hover:bg-[#EA3A70]/90 transition-colors flex items-center">
        <EditIcon className="h-4 w-4 mr-2" />
        Edit Company Details
      </button>
    </div>;
}