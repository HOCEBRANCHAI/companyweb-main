import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CountryExpansionCard, CountryExpansion } from './CountryExpansionCard';
import { PlusIcon, ArrowRightIcon } from 'lucide-react';
interface GlobalExpansionDashboardProps {
  userName?: string;
  companyName?: string;
}
export function GlobalExpansionDashboard({
  userName,
  companyName
}: GlobalExpansionDashboardProps = {}) {
  const navigate = useNavigate();
  const [selectedExpansion, setSelectedExpansion] = useState<string | null>(null);
  const expansions: CountryExpansion[] = [{
    id: '1',
    country: 'Netherlands',
    city: 'Amsterdam',
    imageUrl: 'https://images.unsplash.com/photo-1512470876302-972faa2aa9a4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    method: 'Branch Office',
    status: 'Active',
    marketSize: '€908B GDP',
    taxRate: '15-25.8%'
  }, {
    id: '2',
    country: 'Germany',
    city: 'Berlin',
    imageUrl: 'https://images.unsplash.com/photo-1560969184-10fe8719e047?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    method: 'Tax ID',
    status: 'Pending',
    marketSize: '€3.57T GDP',
    taxRate: '15%'
  }, {
    id: '3',
    country: 'France',
    city: 'Paris',
    imageUrl: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    method: 'Virtual Office',
    status: 'Under Consideration',
    marketSize: '€2.63T GDP',
    taxRate: '25%'
  }, {
    id: '4',
    country: 'Spain',
    city: 'Madrid',
    imageUrl: 'https://images.unsplash.com/photo-1539037116277-4db20889f2d4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    method: 'Legal Entity',
    status: 'Under Consideration',
    marketSize: '€1.28T GDP',
    taxRate: '25%'
  }, {
    id: '5',
    country: 'Italy',
    city: 'Rome',
    imageUrl: 'https://images.unsplash.com/photo-1529260830199-42c24126f198?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    method: 'Virtual Office',
    status: 'Open',
    marketSize: '€1.89T GDP',
    taxRate: '24%'
  }];
  const handleSelect = (id: string) => {
    setSelectedExpansion(id === selectedExpansion ? null : id);
    
    // Navigate to Netherlands page when Netherlands is selected
    if (id === '1') { // Netherlands has id '1'
      navigate('/netherlands-business-setup');
    }
  };
  const selectedCountry = selectedExpansion ? expansions.find(exp => exp.id === selectedExpansion) : null;
  return <div className="space-y-8">
      <div className="relative mt-8">
        <div className="absolute top-0 left-1/2 w-0.5 h-16 bg-indigo-500/30"></div>
        <div className="text-center mb-8 relative">
          <h3 className="text-2xl font-bold bg-gradient-to-r from-amber-200 via-yellow-300 to-amber-200 text-transparent bg-clip-text animate-pulse">
            Welcome Back! Unlock Your Dream Destinations!
          </h3>
          <p className="text-indigo-300 text-lg mt-2">
            Your global empire awaits - click any city below to begin your
            expansion journey
          </p>
        </div>
        <div className="absolute top-16 left-0 right-0 h-0.5 bg-indigo-500/30"></div>
        <div className="absolute top-16 left-[10%] w-0.5 h-8 bg-indigo-500/30"></div>
        <div className="absolute top-16 left-[30%] w-0.5 h-8 bg-indigo-500/30"></div>
        <div className="absolute top-16 left-1/2 w-0.5 h-8 bg-indigo-500/30"></div>
        <div className="absolute top-16 left-[70%] w-0.5 h-8 bg-indigo-500/30"></div>
        <div className="absolute top-16 left-[90%] w-0.5 h-8 bg-indigo-500/30"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 pt-24">
          {expansions.map(expansion => <CountryExpansionCard key={expansion.id} expansion={expansion} onSelect={handleSelect} isSelected={selectedExpansion === expansion.id} />)}
        </div>
      </div>
      {selectedCountry && <div className="bg-indigo-800/30 backdrop-blur-md rounded-xl border border-indigo-500/30 p-6 animate-fadeInUp">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="md:w-1/3">
              <div className="rounded-xl overflow-hidden h-48">
                <img src={selectedCountry.imageUrl} alt={`${selectedCountry.city}, ${selectedCountry.country}`} className="w-full h-full object-cover" />
              </div>
            </div>
            <div className="md:w-2/3">
              <h3 className="text-xl font-bold text-white mb-2">
                {selectedCountry.city}, {selectedCountry.country} Expansion
              </h3>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-2 py-1 rounded-full text-xs font-medium bg-[#EA3A70]/20 text-[#EA3A70]">
                  {selectedCountry.method}
                </span>
                <span className="px-2 py-1 rounded-full text-xs font-medium bg-indigo-500/20 text-indigo-300">
                  {selectedCountry.status}
                </span>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div>
                  <p className="text-indigo-300 text-xs">Market Size</p>
                  <p className="text-white font-medium">
                    {selectedCountry.marketSize}
                  </p>
                </div>
                <div>
                  <p className="text-indigo-300 text-xs">Corporate Tax</p>
                  <p className="text-white font-medium">
                    {selectedCountry.taxRate}
                  </p>
                </div>
                <div>
                  <p className="text-indigo-300 text-xs">Setup Time</p>
                  <p className="text-white font-medium">2-4 weeks</p>
                </div>
                <div>
                  <p className="text-indigo-300 text-xs">Annual Costs</p>
                  <p className="text-white font-medium">From €2,500</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-3">
                <button className="px-4 py-2 bg-[#EA3A70] text-white rounded-xl hover:bg-[#EA3A70]/90 transition-colors flex items-center">
                  Start Expansion Process
                  <ArrowRightIcon className="ml-2 h-4 w-4" />
                </button>
                <button className="px-4 py-2 bg-indigo-900/50 border border-indigo-500/30 text-white rounded-xl hover:bg-indigo-800/50 transition-colors">
                  View Market Report
                </button>
              </div>
            </div>
          </div>
        </div>}
      <div className="flex justify-center mt-8">
        <button className="px-6 py-3 bg-indigo-900/50 border border-indigo-500/30 text-white rounded-xl hover:bg-indigo-800/50 transition-colors flex items-center">
          <PlusIcon className="h-5 w-5 mr-2" />
          Add New Target Market
        </button>
      </div>
    </div>;
}