import React from 'react';
import { BuildingIcon, MailIcon, ShieldIcon, FileTextIcon, HeadphonesIcon, BookOpenIcon, GlobeIcon, BarChart3Icon } from 'lucide-react';
export function PricingFeatures() {
  const features = [{
    name: 'Company Formation',
    description: 'Quick and efficient Dutch company registration process',
    icon: BuildingIcon
  }, {
    name: 'Business Address',
    description: 'Professional address in Amsterdam for your business',
    icon: MailIcon
  }, {
    name: 'Compliance Management',
    description: 'Stay compliant with Dutch regulations and requirements',
    icon: ShieldIcon
  }, {
    name: 'Document Management',
    description: 'Secure storage and management of business documents',
    icon: FileTextIcon
  }, {
    name: 'Dedicated Support',
    description: 'Expert assistance from our experienced team',
    icon: HeadphonesIcon
  }, {
    name: 'Knowledge Resources',
    description: 'Access to guides, tutorials, and business tools',
    icon: BookOpenIcon
  }, {
    name: 'Market Access',
    description: 'Gateway to European and international markets',
    icon: GlobeIcon
  }, {
    name: 'Business Analytics',
    description: 'Insights and reporting on your business performance',
    icon: BarChart3Icon
  }];
  return <section className="py-16 relative bg-gradient-to-b from-[#0A0826] to-[#1E1B3F]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">
            Everything You Need to Succeed
          </h2>
          <p className="text-xl text-indigo-200">
            Our comprehensive services help you establish and grow your business
            in the Netherlands
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => <div key={index} className="bg-indigo-900/30 backdrop-blur-sm rounded-xl border border-indigo-500/30 p-6 hover:border-[#EA3A70]/50 transition-colors">
              <div className="p-3 bg-indigo-900/50 rounded-xl inline-block mb-4">
                <feature.icon className="h-6 w-6 text-[#EA3A70]" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">
                {feature.name}
              </h3>
              <p className="text-indigo-200">{feature.description}</p>
            </div>)}
        </div>
      </div>
    </section>;
}