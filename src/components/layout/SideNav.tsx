import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { HomeIcon, BuildingIcon, LineChartIcon, CheckSquareIcon, MailIcon, SettingsIcon, MegaphoneIcon, PercentIcon, CreditCardIcon, ShieldIcon, BrainCircuitIcon, PlusIcon, FileTextIcon, LibraryIcon, TagIcon, BarChart2Icon, UserIcon, FlagIcon } from 'lucide-react';
import { KnowledgeBaseNav } from './KnowledgeBaseNav';
const getCategoryIcon = (category: string) => {
  switch (category) {
    case 'administrative':
      return <UserIcon className="h-4 w-4" />;
    case 'financial':
      return <BarChart2Icon className="h-4 w-4" />;
    case 'legal':
      return <FlagIcon className="h-4 w-4" />;
    case 'operational':
      return <TagIcon className="h-4 w-4" />;
    default:
      return <TagIcon className="h-4 w-4" />;
  }
};
export function SideNav() {
  const location = useLocation();
  const path = location.pathname;
  const navigation = [{
    name: 'Home',
    href: '/',
    icon: HomeIcon
  }, {
    name: 'Tasks',
    href: '/tasks',
    icon: CheckSquareIcon
  }, {
    name: 'Library',
    href: '/library',
    icon: LibraryIcon
  }, {
    name: 'AI Agent',
    href: '/ai-agent',
    icon: BrainCircuitIcon
  }, {
    name: 'Mailroom',
    href: '/mailbox',
    icon: MailIcon
  }, {
    name: 'Documents',
    href: '/documents',
    icon: FileTextIcon
  }, {
    name: 'Settings',
    href: '/settings',
    icon: SettingsIcon
  }];
  const enterprise = [{
    name: 'Legal',
    href: '/corporate',
    icon: BuildingIcon
  }, {
    name: 'Bookkeeping',
    href: '/financial',
    icon: LineChartIcon
  }, {
    name: 'Tax Center',
    href: '/taxes',
    icon: PercentIcon
  }, {
    name: 'Plans',
    href: '/plans',
    icon: CreditCardIcon
  }, {
    name: 'KYC File',
    href: '/kyc',
    icon: ShieldIcon
  }, {
    name: 'Marketing',
    href: '/marketing',
    icon: MegaphoneIcon
  }];
  return <div className="w-64 bg-[#0A0826] border-r border-[#4A2D80]/20 flex flex-col h-screen">
      <div className="p-4 border-b border-[#4A2D80]/20">
        <Link to="/" className="flex items-center space-x-2">
          <BuildingIcon className="h-8 w-8 text-[#EA3A70]" />
          <span className="text-xl font-bold text-white">
            House of Companies
          </span>
        </Link>
      </div>
      <div className="p-4">
        <button className="w-full bg-[#EA3A70] text-white rounded-xl px-4 py-2 flex items-center justify-center">
          <PlusIcon className="h-5 w-5 mr-2" />
          Register
        </button>
      </div>
      <div className="flex-1 overflow-y-auto px-2">
        <nav className="space-y-1">
          {navigation.map(item => {
          const Icon = item.icon;
          const isActive = path === item.href;
          return <Link key={item.name} to={item.href} className={`flex items-center px-3 py-2.5 rounded-xl text-base font-medium transition-colors ${isActive ? 'bg-[#1E1B3F] text-white shadow-sm' : 'text-white/90 hover:bg-[#1E1B3F]/50 hover:text-white'}`} aria-current={isActive ? 'page' : undefined}>
                <Icon className="h-5 w-5 mr-3 flex-shrink-0" />
                <span className="truncate">{item.name}</span>
              </Link>;
        })}
        </nav>
        <div className="mt-8">
          <KnowledgeBaseNav />
        </div>
        <div className="mt-8">
          <div className="px-3 mb-2">
            <span className="text-sm font-medium text-white uppercase">
              ENTITY MANAGEMENT
            </span>
          </div>
          <nav className="space-y-1">
            {enterprise.map(item => {
            const Icon = item.icon;
            const isActive = path === item.href;
            return <Link key={item.name} to={item.href} className={`flex items-center px-3 py-2 rounded-xl text-base font-medium transition-colors ${isActive ? 'bg-[#1E1B3F] text-white shadow-sm' : 'text-white/90 hover:bg-[#1E1B3F]/50 hover:text-white'}`} aria-current={isActive ? 'page' : undefined}>
                  <Icon className="h-5 w-5 mr-3 flex-shrink-0" />
                  <span className="truncate">{item.name}</span>
                </Link>;
          })}
          </nav>
        </div>
      </div>
      <div className="p-4 border-t border-[#4A2D80]/20">
        <div className="bg-[#1E1B3F] rounded-xl p-4">
          <h3 className="text-white font-medium mb-2">Upgrade your Plan</h3>
          <p className="text-gray-400 text-sm mb-3">
            Stop working with expensive 'experts' to expand abroad!
          </p>
          <button className="w-full bg-[#EA3A70] text-white rounded-xl px-4 py-2 text-sm font-medium">
            Join the 21st Century
          </button>
        </div>
      </div>
    </div>;
}