import React from 'react';
import { Sidebar } from './Sidebar';
import { CompanyProfileSummary } from '../company/CompanyProfileSummary';
import { CheckSquareIcon, HomeIcon } from 'lucide-react';
interface AppLayoutProps {
  children: React.ReactNode;
}
export function AppLayout({
  children
}: AppLayoutProps) {
  const navigation = [{
    name: 'Dashboard',
    href: '/',
    icon: HomeIcon
  }, {
    name: 'Tasks',
    href: '/tasks',
    icon: CheckSquareIcon
  }
  // ... rest of the navigation items
  ];
  return <div className="flex min-h-screen bg-[#0A0826]">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <div className="p-4 bg-[#0A0826]">
          <CompanyProfileSummary />
        </div>
        <main className="flex-1">{children}</main>
      </div>
    </div>;
}