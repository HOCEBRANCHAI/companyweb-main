import React from 'react';
import { BuildingIcon, MapPinIcon, FlagIcon, CheckCircleIcon, ClockIcon, AlertCircleIcon } from 'lucide-react';
export type ExpansionMethod = 'Virtual Office' | 'Tax ID' | 'Branch Office' | 'Legal Entity';
export type ExpansionStatus = 'Under Consideration' | 'Pending' | 'Open' | 'Active';
export interface CountryExpansion {
  id: string;
  country: string;
  city: string;
  imageUrl: string;
  method: ExpansionMethod;
  status: ExpansionStatus;
  marketSize: string;
  taxRate: string;
}
interface CountryExpansionCardProps {
  expansion: CountryExpansion;
  onSelect: (id: string) => void;
  isSelected: boolean;
}
export function CountryExpansionCard({
  expansion,
  onSelect,
  isSelected
}: CountryExpansionCardProps) {
  const getStatusIcon = (status: ExpansionStatus) => {
    switch (status) {
      case 'Active':
        return <CheckCircleIcon className="h-4 w-4 text-green-400" />;
      case 'Pending':
        return <ClockIcon className="h-4 w-4 text-yellow-400" />;
      case 'Under Consideration':
        return <AlertCircleIcon className="h-4 w-4 text-indigo-400" />;
      default:
        return <FlagIcon className="h-4 w-4 text-blue-400" />;
    }
  };
  const getMethodColor = (method: ExpansionMethod) => {
    switch (method) {
      case 'Virtual Office':
        return 'bg-blue-500/20 text-blue-300';
      case 'Tax ID':
        return 'bg-purple-500/20 text-purple-300';
      case 'Branch Office':
        return 'bg-pink-500/20 text-pink-300';
      case 'Legal Entity':
        return 'bg-green-500/20 text-green-300';
    }
  };
  const getStatusColor = (status: ExpansionStatus) => {
    switch (status) {
      case 'Active':
        return 'bg-green-500/20 text-green-300';
      case 'Pending':
        return 'bg-yellow-500/20 text-yellow-300';
      case 'Under Consideration':
        return 'bg-indigo-500/20 text-indigo-300';
      default:
        return 'bg-blue-500/20 text-blue-300';
    }
  };
  return <div className={`${isSelected ? 'ring-2 ring-[#EA3A70]' : ''} rounded-xl overflow-hidden bg-indigo-900/30 backdrop-blur-md border border-indigo-500/30 transition-all duration-300 hover:shadow-lg cursor-pointer`} onClick={() => onSelect(expansion.id)}>
      <div className="relative h-32 overflow-hidden">
        <img src={expansion.imageUrl} alt={`${expansion.city}, ${expansion.country}`} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/80 to-transparent"></div>
        <div className="absolute bottom-0 left-0 p-3">
          <p className="text-white font-bold">{expansion.city}</p>
          <p className="text-indigo-200 text-sm flex items-center">
            <MapPinIcon className="h-3 w-3 mr-1" />
            {expansion.country}
          </p>
        </div>
      </div>
      <div className="p-3 space-y-2">
        <div className="flex flex-wrap gap-2">
          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getMethodColor(expansion.method)}`}>
            {expansion.method}
          </span>
          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(expansion.status)} flex items-center`}>
            {getStatusIcon(expansion.status)}
            <span className="ml-1">{expansion.status}</span>
          </span>
        </div>
        <div className="grid grid-cols-2 gap-2 pt-2 border-t border-indigo-500/20">
          <div>
            <p className="text-indigo-300 text-xs">Market Size</p>
            <p className="text-white text-sm">{expansion.marketSize}</p>
          </div>
          <div>
            <p className="text-indigo-300 text-xs">Corp. Tax</p>
            <p className="text-white text-sm">{expansion.taxRate}</p>
          </div>
        </div>
      </div>
      <div className="p-3 bg-indigo-900/50 border-t border-indigo-500/20">
        <button className="w-full py-1.5 px-3 bg-[#EA3A70]/80 hover:bg-[#EA3A70] text-white rounded-lg text-sm transition-colors">
          Explore Expansion
        </button>
      </div>
    </div>;
}