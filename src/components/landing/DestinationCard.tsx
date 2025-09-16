import React from 'react';
import { ArrowRightIcon } from 'lucide-react';
interface DestinationCardProps {
  city: string;
  country: string;
  image: string;
  description: string;
  price: number;
}
export function DestinationCard({
  city,
  country,
  image,
  description,
  price
}: DestinationCardProps) {
  return <div className="bg-[#1B1537] rounded-lg overflow-hidden border border-[#2D2755] hover:border-[#EA3A70] transition-colors">
      <div className="h-48 relative">
        <img src={image} alt={`${city}, ${country}`} className="w-full h-full object-cover" />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-white mb-1">
          {city}
          <span className="text-gray-400 text-base ml-2">{country}</span>
        </h3>
        <p className="text-gray-400 mb-4">{description}</p>
        <div className="flex items-baseline justify-between">
          <div>
            <span className="text-sm text-gray-400">From</span>
            <span className="text-2xl font-bold text-white ml-2">€{price}</span>
          </div>
          <button className="text-[#EA3A70] hover:text-[#EA3A70]/80 flex items-center">
            Expand Here
            <ArrowRightIcon className="h-4 w-4 ml-2" />
          </button>
        </div>
      </div>
    </div>;
}