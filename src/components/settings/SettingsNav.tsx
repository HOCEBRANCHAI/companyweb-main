import React from 'react';
import { UserIcon, CreditCardIcon, BellIcon, ShieldIcon, KeyIcon } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
export function SettingsNav() {
  const location = useLocation();
  const path = location.pathname;
  const links = [{
    name: 'Profile',
    href: '/settings/profile',
    icon: <UserIcon className="h-5 w-5" />
  }, {
    name: 'Billing',
    href: '/settings/billing',
    icon: <CreditCardIcon className="h-5 w-5" />
  }, {
    name: 'Notifications',
    href: '/settings/notifications',
    icon: <BellIcon className="h-5 w-5" />
  }, {
    name: 'Security',
    href: '/settings/security',
    icon: <ShieldIcon className="h-5 w-5" />
  }, {
    name: 'API Keys',
    href: '/settings/api-keys',
    icon: <KeyIcon className="h-5 w-5" />
  }];
  return <nav className="space-y-1">
      {links.map(link => <Link key={link.name} to={link.href} className={`flex items-center px-3 py-2 text-sm font-medium rounded-md ${path === link.href ? 'bg-blue-50 text-blue-700' : 'text-gray-600 hover:bg-gray-50'}`}>
          <span className={`mr-3 ${path === link.href ? 'text-blue-500' : 'text-gray-400'}`}>
            {link.icon}
          </span>
          {link.name}
        </Link>)}
    </nav>;
}