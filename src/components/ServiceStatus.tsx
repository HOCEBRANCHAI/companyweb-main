import React from 'react';
import { CheckCircleIcon, AlertTriangleIcon, ClockIcon, ArrowRightIcon, BuildingIcon, GlobeIcon, FileTextIcon, EuroIcon } from 'lucide-react';
interface ServiceStatusProps {
  compact?: boolean;
}
export function ServiceStatus({
  compact = false
}: ServiceStatusProps) {
  const services = [{
    name: 'Virtual Office',
    status: 'active',
    icon: <BuildingIcon className="h-5 w-5 text-blue-600" />,
    nextRenewal: '2024-12-31',
    description: 'Business address and mail handling'
  }, {
    name: 'VAT Registration',
    status: 'pending',
    icon: <EuroIcon className="h-5 w-5 text-purple-600" />,
    description: 'Registration in progress',
    action: 'Check Status'
  }, {
    name: 'Compliance Package',
    status: 'warning',
    icon: <FileTextIcon className="h-5 w-5 text-orange-600" />,
    description: 'Action required: Annual report due',
    action: 'Review Now'
  }, {
    name: 'Domain Services',
    status: 'active',
    icon: <GlobeIcon className="h-5 w-5 text-green-600" />,
    nextRenewal: '2024-06-15',
    description: 'Website and email hosting'
  }];
  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'active':
        return <CheckCircleIcon className="h-5 w-5 text-green-500" />;
      case 'pending':
        return <ClockIcon className="h-5 w-5 text-yellow-500" />;
      case 'warning':
        return <AlertTriangleIcon className="h-5 w-5 text-red-500" />;
      default:
        return null;
    }
  };
  if (compact) {
    return <div className="space-y-4">
        {services.map(service => <div key={service.name} className="flex items-center justify-between py-2">
            <div className="flex items-center space-x-3">
              {service.icon}
              <span className="text-sm font-medium text-gray-900">
                {service.name}
              </span>
            </div>
            <div className="flex items-center space-x-2">
              {getStatusIcon(service.status)}
              {service.action && <button className="text-sm text-blue-600 hover:text-blue-800">
                  {service.action}
                </button>}
            </div>
          </div>)}
      </div>;
  }
  return <div className="space-y-4">
      {services.map(service => <div key={service.name} className="bg-white rounded-lg border border-gray-200 p-4 hover:shadow-sm transition-shadow">
          <div className="flex items-start justify-between">
            <div className="flex items-start space-x-3">
              {service.icon}
              <div>
                <h3 className="text-sm font-medium text-gray-900">
                  {service.name}
                </h3>
                <p className="text-sm text-gray-500 mt-1">
                  {service.description}
                </p>
                {service.nextRenewal && <p className="text-xs text-gray-400 mt-1">
                    Next renewal:{' '}
                    {new Date(service.nextRenewal).toLocaleDateString()}
                  </p>}
              </div>
            </div>
            <div className="flex items-center space-x-3">
              {getStatusIcon(service.status)}
              {service.action && <button className="flex items-center text-sm text-blue-600 hover:text-blue-800">
                  {service.action}
                  <ArrowRightIcon className="ml-1 h-4 w-4" />
                </button>}
            </div>
          </div>
        </div>)}
    </div>;
}