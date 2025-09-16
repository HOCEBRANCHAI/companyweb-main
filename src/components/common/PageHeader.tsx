import React from 'react';
import { BuildingIcon, PencilIcon } from 'lucide-react';
interface PageHeaderProps {
  title: string;
  subtitle: string;
  icon?: React.ReactNode;
  menuItems: {
    label: string;
    active: boolean;
    onClick: () => void;
  }[];
  onEditClick?: () => void;
}
export function PageHeader({
  title,
  subtitle,
  icon = <BuildingIcon className="h-8 w-8 text-indigo-300" />,
  menuItems,
  onEditClick
}: PageHeaderProps) {
  return <div className="mb-8">
      <div className="bg-indigo-800/30 backdrop-blur-md rounded-2xl border border-indigo-500/30 p-6">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="flex items-start space-x-4">
            <div className="p-3 bg-indigo-900/50 rounded-xl">{icon}</div>
            <div>
              <h1 className="text-2xl font-bold text-white mb-1">{title}</h1>
              <p className="text-indigo-200 text-sm">{subtitle}</p>
            </div>
          </div>
          {onEditClick && <div className="mt-4 md:mt-0 flex space-x-3">
              <button onClick={onEditClick} className="px-4 py-2 bg-indigo-900/50 border border-indigo-500/30 rounded-xl text-white hover:bg-indigo-800/50 transition-colors flex items-center">
                <PencilIcon className="h-4 w-4 mr-2" />
                Edit Company Details
              </button>
            </div>}
        </div>
      </div>
      <div className="mt-4 bg-[#1E1B3F] backdrop-blur-md rounded-2xl border border-indigo-500/30 p-1">
        <div className="flex flex-wrap">
          {menuItems.map((item, index) => <button key={index} onClick={item.onClick} className={`py-3 px-5 rounded-xl font-medium text-sm transition-colors flex items-center ${item.active ? 'bg-[#EA3A70] text-white shadow-md' : 'text-indigo-200 hover:bg-indigo-800/50 hover:text-white'}`}>
              {item.label}
            </button>)}
        </div>
      </div>
    </div>;
}