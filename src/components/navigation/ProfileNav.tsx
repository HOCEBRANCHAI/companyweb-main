import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { BuildingIcon, FileTextIcon, UsersIcon, MailIcon } from 'lucide-react';
export function ProfileNav() {
  const location = useLocation();
  const path = location.pathname;
  const navigation = [{
    name: 'Overview',
    href: '/corporate',
    icon: BuildingIcon
  }, {
    name: 'Documents',
    href: '/corporate/documents',
    icon: FileTextIcon
  }, {
    name: 'Directors',
    href: '/corporate/directors',
    icon: UsersIcon
  }, {
    name: 'Mailbox',
    href: '/corporate/mailbox',
    icon: MailIcon
  }];
  return <div className="bg-white border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex space-x-8">
          {navigation.map(item => {
          const Icon = item.icon;
          return <Link key={item.name} to={item.href} className={`flex items-center py-4 px-1 border-b-2 font-medium text-sm
                  ${path === item.href ? 'border-blue-600 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}>
                <Icon className={`mr-2 h-5 w-5 ${path === item.href ? 'text-blue-500' : 'text-gray-400'}`} />
                {item.name}
              </Link>;
        })}
        </div>
      </div>
    </div>;
}