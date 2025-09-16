import React from 'react';
import { CheckIcon, InfoIcon, PlusIcon } from 'lucide-react';
interface CartItem {
  name: string;
  price: number;
  type: 'service' | 'plan' | 'addon';
  country?: string;
  included?: boolean;
}
interface ServiceComparisonProps {
  country: string;
  services: any;
  countryName: string;
  onAddToCart?: (service: CartItem) => void;
}
export function ServiceComparison({
  country,
  services,
  countryName,
  onAddToCart
}: ServiceComparisonProps) {
  const handleAddToCart = (service: any) => {
    if (onAddToCart) {
      const cartItem: CartItem = {
        name: service.title,
        price: service.pricing[country].price,
        type: 'service',
        country: countryName,
        included: service.pricing[country].included
      };
      onAddToCart(cartItem);
    }
  };
  return <div className="max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
        Services in {countryName}
      </h2>
      <div className="space-y-6">
        {Object.entries(services).map(([key, service]: [string, any]) => <div key={key} className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="bg-blue-100 p-2 rounded-lg">{service.icon}</div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900">
                    {service.title}
                  </h3>
                  <p className="text-sm text-gray-500">{service.description}</p>
                </div>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold text-gray-900">
                  €{service.pricing[country].price}
                </div>
                {service.pricing[country].included && <div className="flex items-center mt-1 text-green-600 text-sm">
                    <CheckIcon className="h-4 w-4 mr-1" />
                    Included with membership
                  </div>}
              </div>
            </div>
            {service.pricing[country].included && <div className="mt-4 flex items-center bg-green-50 text-green-700 p-3 rounded-md">
                <InfoIcon className="h-5 w-5 mr-2" />
                <span className="text-sm">
                  This service is included free with our Core Bookkeeping
                  Membership (1-year subscription)
                </span>
              </div>}
            <button onClick={() => handleAddToCart(service)} className="mt-4 w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 text-sm font-medium flex items-center justify-center">
              <PlusIcon className="h-4 w-4 mr-2" />
              {service.pricing[country].included ? 'Add to Cart (Included)' : 'Add to Cart'}
            </button>
          </div>)}
      </div>
    </div>;
}