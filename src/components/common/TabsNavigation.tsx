import React from 'react';
import { BarChart2Icon, ArrowRightIcon, FileTextIcon, FileIcon } from 'lucide-react';
interface TabOption {
  id: string;
  label: string;
  icon?: React.ReactNode;
}
interface TabsNavigationProps {
  activeTab: string;
  onTabChange: (tabId: string) => void;
  tabs: TabOption[];
}
export function TabsNavigation({
  activeTab,
  onTabChange,
  tabs
}: TabsNavigationProps) {
  return <div className="bg-[#1E1B3F] backdrop-blur-md rounded-2xl border border-indigo-500/30 p-1">
      <div className="flex flex-wrap">
        {tabs.map(tab => <button key={tab.id} onClick={() => onTabChange(tab.id)} className={`py-3 px-5 rounded-xl font-medium text-sm transition-colors flex items-center ${activeTab === tab.id ? 'bg-[#EA3A70] text-white shadow-md' : 'text-indigo-200 hover:bg-indigo-800/50 hover:text-white'}`}>
            {tab.icon && <span className="mr-2">{tab.icon}</span>}
            {tab.label}
          </button>)}
      </div>
    </div>;
}