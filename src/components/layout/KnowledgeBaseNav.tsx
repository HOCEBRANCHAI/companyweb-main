import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpenIcon, CalendarIcon, FileTextIcon, BrainCircuitIcon } from 'lucide-react';
export function KnowledgeBaseNav() {
  const navigationItems = [{
    name: 'Library',
    href: '/library',
    icon: BookOpenIcon
  }, {
    name: 'Events',
    href: '/events',
    icon: CalendarIcon
  }, {
    name: 'Documents',
    href: '/documents',
    icon: FileTextIcon
  }, {
    name: 'AI Agent',
    href: '/ai-agent',
    icon: BrainCircuitIcon
  }];
  return <div className="space-y-1">
      {navigationItems.map(item => {
      const Icon = item.icon;
      return <Link key={item.name} to={item.href} className="flex items-center px-3 py-2 rounded-xl text-base font-medium transition-colors text-white hover:bg-[#1E1B3F]/50">
            <Icon className="h-5 w-5 mr-3" />
            {item.name}
          </Link>;
    })}
      <Link to="/corporate/documents" className="flex items-center px-3 py-2 rounded-xl text-base font-medium transition-colors text-white hover:bg-[#1E1B3F]/50">
        <FileTextIcon className="h-5 w-5 mr-3" />
        Documents
      </Link>
    </div>;
}