import React from 'react';
import { Link } from 'react-router-dom';
import { CheckIcon, XIcon } from 'lucide-react';
interface PricingPackageProps {
  name: string;
  price: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  highlighted?: boolean;
}
interface PricingFeatureProps {
  name: string;
  basic: boolean;
  standard: boolean;
  premium: boolean;
}
interface PricingSectionProps {
  title: string;
  description: string;
  packages: PricingPackageProps[];
  features: PricingFeatureProps[];
}
export function PricingSection({
  title,
  description,
  packages,
  features
}: PricingSectionProps) {
  return <section className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">{title}</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {description}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {packages.map((pkg, index) => <div key={index} className={`bg-[#1B1537]/80 backdrop-blur-sm rounded-xl border ${pkg.highlighted ? 'border-[#EA3A70]' : 'border-[#2D2755]'} overflow-hidden shadow-lg shadow-[#0F0B1F]/50 relative ${pkg.highlighted ? 'transform md:-translate-y-4' : ''}`}>
              {pkg.highlighted && <div className="absolute top-0 left-0 right-0 bg-[#EA3A70] text-white text-center text-sm py-1 font-medium">
                  Most Popular
                </div>}
              <div className={`p-6 ${pkg.highlighted ? 'pt-8' : ''}`}>
                <h3 className="text-2xl font-bold text-white mb-2">
                  {pkg.name}
                </h3>
                <p className="text-gray-300 mb-4">{pkg.description}</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-white">
                    {pkg.price}
                  </span>
                  <span className="text-gray-400 ml-2">one-time</span>
                </div>
                <Link to={pkg.buttonLink} className={`block w-full py-3 px-4 rounded-lg text-center font-medium ${pkg.highlighted ? 'bg-[#EA3A70] hover:bg-[#EA3A70]/90 text-white shadow-md shadow-[#EA3A70]/20' : 'bg-[#2D2755]/50 hover:bg-[#2D2755] text-white border border-[#2D2755]'} transition-colors`}>
                  {pkg.buttonText}
                </Link>
              </div>
            </div>)}
        </div>
        <div className="bg-[#1B1537]/80 backdrop-blur-sm rounded-xl border border-[#2D2755] overflow-hidden shadow-lg shadow-[#0F0B1F]/50">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-[#2D2755]">
                  <th className="py-4 px-6 text-left text-white font-medium">
                    Features
                  </th>
                  {packages.map((pkg, index) => <th key={index} className="py-4 px-6 text-center text-white font-medium">
                      {pkg.name}
                    </th>)}
                </tr>
              </thead>
              <tbody>
                {features.map((feature, index) => <tr key={index} className={index !== features.length - 1 ? 'border-b border-[#2D2755]' : ''}>
                    <td className="py-4 px-6 text-white">{feature.name}</td>
                    <td className="py-4 px-6 text-center">
                      {feature.basic ? <CheckIcon className="h-5 w-5 text-green-400 mx-auto" /> : <XIcon className="h-5 w-5 text-gray-500 mx-auto" />}
                    </td>
                    <td className="py-4 px-6 text-center bg-[#2D2755]/20">
                      {feature.standard ? <CheckIcon className="h-5 w-5 text-green-400 mx-auto" /> : <XIcon className="h-5 w-5 text-gray-500 mx-auto" />}
                    </td>
                    <td className="py-4 px-6 text-center">
                      {feature.premium ? <CheckIcon className="h-5 w-5 text-green-400 mx-auto" /> : <XIcon className="h-5 w-5 text-gray-500 mx-auto" />}
                    </td>
                  </tr>)}
              </tbody>
            </table>
          </div>
        </div>
        <div className="mt-12 text-center">
          <p className="text-indigo-300 mb-4">
            Need a custom solution for your business?
          </p>
          <Link to="/contact" className="inline-flex items-center text-[#EA3A70] font-medium hover:underline">
            Contact us for a tailored package
            <ArrowRightIcon className="h-4 w-4 ml-2" />
          </Link>
        </div>
      </div>
    </section>;
}