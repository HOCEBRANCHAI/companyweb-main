import React, { useState } from 'react';
import { MapIcon, BuildingIcon, EuroIcon, UserIcon, BriefcaseIcon, CheckIcon, InfoIcon } from 'lucide-react';
import { ServiceComparison } from './ServiceComparison';
import { CartWidget } from '../plans/CartWidget';
import { CompareCountries } from './CompareCountries';
import { countries } from '../../constants/countries';
interface CartItem {
  name: string;
  price: number;
  type: 'service' | 'plan' | 'addon';
  country?: string;
  included?: boolean;
}
const services = {
  branch: {
    title: 'Branch Registration',
    icon: <BuildingIcon className="h-6 w-6" />,
    description: 'Register your company branch in the EU',
    pricing: {
      netherlands: {
        price: 295,
        included: true
      },
      belgium: {
        price: 395,
        included: false
      },
      germany: {
        price: 995,
        included: false
      },
      austria: {
        price: 995,
        included: false
      },
      bulgaria: {
        price: 995,
        included: false
      },
      croatia: {
        price: 995,
        included: false
      },
      cyprus: {
        price: 995,
        included: false
      },
      czechrepublic: {
        price: 995,
        included: false
      },
      denmark: {
        price: 995,
        included: false
      },
      estonia: {
        price: 995,
        included: false
      },
      finland: {
        price: 995,
        included: false
      },
      france: {
        price: 995,
        included: false
      },
      greece: {
        price: 995,
        included: false
      },
      hungary: {
        price: 995,
        included: false
      },
      ireland: {
        price: 995,
        included: false
      },
      italy: {
        price: 995,
        included: false
      },
      latvia: {
        price: 995,
        included: false
      },
      lithuania: {
        price: 995,
        included: false
      },
      luxembourg: {
        price: 995,
        included: false
      },
      malta: {
        price: 995,
        included: false
      },
      poland: {
        price: 995,
        included: false
      },
      portugal: {
        price: 995,
        included: false
      },
      romania: {
        price: 995,
        included: false
      },
      slovakia: {
        price: 995,
        included: false
      },
      slovenia: {
        price: 995,
        included: false
      },
      spain: {
        price: 995,
        included: false
      },
      sweden: {
        price: 995,
        included: false
      }
    }
  },
  vat: {
    title: 'VAT ID Registration',
    icon: <EuroIcon className="h-6 w-6" />,
    description: 'Obtain VAT number for your business',
    pricing: {
      netherlands: {
        price: 75,
        included: true
      },
      belgium: {
        price: 195,
        included: false
      },
      germany: {
        price: 350,
        included: false
      },
      austria: {
        price: 550,
        included: false
      },
      bulgaria: {
        price: 550,
        included: false
      },
      croatia: {
        price: 550,
        included: false
      },
      cyprus: {
        price: 550,
        included: false
      },
      czechrepublic: {
        price: 550,
        included: false
      },
      denmark: {
        price: 550,
        included: false
      },
      estonia: {
        price: 550,
        included: false
      },
      finland: {
        price: 550,
        included: false
      },
      france: {
        price: 550,
        included: false
      },
      greece: {
        price: 550,
        included: false
      },
      hungary: {
        price: 550,
        included: false
      },
      ireland: {
        price: 550,
        included: false
      },
      italy: {
        price: 550,
        included: false
      },
      latvia: {
        price: 550,
        included: false
      },
      lithuania: {
        price: 550,
        included: false
      },
      luxembourg: {
        price: 550,
        included: false
      },
      malta: {
        price: 550,
        included: false
      },
      poland: {
        price: 550,
        included: false
      },
      portugal: {
        price: 550,
        included: false
      },
      romania: {
        price: 550,
        included: false
      },
      slovakia: {
        price: 550,
        included: false
      },
      slovenia: {
        price: 550,
        included: false
      },
      spain: {
        price: 550,
        included: false
      },
      sweden: {
        price: 550,
        included: false
      }
    }
  },
  employer: {
    title: 'Employer Registration',
    icon: <BriefcaseIcon className="h-6 w-6" />,
    description: 'Register as an employer in the EU',
    pricing: {
      netherlands: {
        price: 75,
        included: true
      },
      belgium: {
        price: 195,
        included: false
      },
      germany: {
        price: 350,
        included: false
      },
      austria: {
        price: 550,
        included: false
      },
      bulgaria: {
        price: 550,
        included: false
      },
      croatia: {
        price: 550,
        included: false
      },
      cyprus: {
        price: 550,
        included: false
      },
      czechrepublic: {
        price: 550,
        included: false
      },
      denmark: {
        price: 550,
        included: false
      },
      estonia: {
        price: 550,
        included: false
      },
      finland: {
        price: 550,
        included: false
      },
      france: {
        price: 550,
        included: false
      },
      greece: {
        price: 550,
        included: false
      },
      hungary: {
        price: 550,
        included: false
      },
      ireland: {
        price: 550,
        included: false
      },
      italy: {
        price: 550,
        included: false
      },
      latvia: {
        price: 550,
        included: false
      },
      lithuania: {
        price: 550,
        included: false
      },
      luxembourg: {
        price: 550,
        included: false
      },
      malta: {
        price: 550,
        included: false
      },
      poland: {
        price: 550,
        included: false
      },
      portugal: {
        price: 550,
        included: false
      },
      romania: {
        price: 550,
        included: false
      },
      slovakia: {
        price: 550,
        included: false
      },
      slovenia: {
        price: 550,
        included: false
      },
      spain: {
        price: 550,
        included: false
      },
      sweden: {
        price: 550,
        included: false
      }
    }
  }
};
const employeeServices = [{
  title: 'Payroll Management',
  price: '€25',
  interval: 'per month per employee',
  features: ['Employment agreement drafting', 'Monthly salary slips', 'Tax calculations', 'Social security handling', 'Leave management']
}, {
  title: 'Employer of Record (EOR)',
  price: '€175',
  interval: 'per month per employee',
  features: ['Full employment compliance', 'Risk mitigation', 'Benefits administration', 'Employee onboarding', 'Local labor law compliance'],
  highlight: true
}];
export function EUServicesPage() {
  const [selectedCountry, setSelectedCountry] = useState('netherlands');
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [showComparison, setShowComparison] = useState(false);
  const handleAddToCart = (service: CartItem) => {
    if (!cartItems.find(item => item.name === service.name && item.country === service.country)) {
      setCartItems([...cartItems, service]);
    }
  };
  return <div className="min-h-screen bg-white">
      <div className="bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              EU Business Services
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
              Comprehensive business solutions across the European Union
            </p>
            <button onClick={() => setShowComparison(true)} className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 text-sm font-medium inline-flex items-center">
              Compare Countries
              <MapIcon className="ml-2 h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-3">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mb-8">
              {Object.entries(countries).map(([key, name]) => <button key={key} onClick={() => setSelectedCountry(key)} className={`px-4 py-2 rounded-md text-sm font-medium transition-colors
                    ${selectedCountry === key ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}>
                  {name}
                </button>)}
            </div>
            <ServiceComparison country={selectedCountry} services={services} countryName={countries[selectedCountry]} onAddToCart={handleAddToCart} />
            <div className="mt-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
                Employee Management Services
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                {employeeServices.map(service => <div key={service.title} className={`rounded-lg p-6 ${service.highlight ? 'border-2 border-blue-200 bg-blue-50' : 'border border-gray-200 bg-white'}`}>
                    <h3 className="text-lg font-medium text-gray-900 mb-2">
                      {service.title}
                    </h3>
                    <div className="flex items-baseline mb-4">
                      <span className="text-3xl font-bold text-gray-900">
                        {service.price}
                      </span>
                      <span className="ml-2 text-gray-600">
                        {service.interval}
                      </span>
                    </div>
                    <ul className="space-y-3">
                      {service.features.map(feature => <li key={feature} className="flex items-start">
                          <CheckIcon className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                          <span className="text-gray-600">{feature}</span>
                        </li>)}
                    </ul>
                    <button className="mt-6 w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 text-sm font-medium">
                      Get Started
                    </button>
                  </div>)}
              </div>
            </div>
            <div className="mt-16 bg-green-50 border border-green-200 rounded-lg p-6 max-w-3xl mx-auto">
              <div className="flex items-start">
                <InfoIcon className="h-6 w-6 text-green-600 mr-3 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-medium text-green-900">
                    Core Bookkeeping Membership Benefit
                  </h3>
                  <p className="mt-2 text-green-700">
                    Subscribe to our Core Bookkeeping Membership for 1 year and
                    get Branch Registration, VAT ID Registration, and Employer
                    Registration in the Netherlands included for free!
                  </p>
                  <button className="mt-4 px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 text-sm font-medium">
                    Learn More About Membership
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-1">
            <div className="sticky top-6">
              <CartWidget items={cartItems} onClose={() => setCartItems([])} />
            </div>
          </div>
        </div>
      </div>
      {showComparison && <CompareCountries onClose={() => setShowComparison(false)} />}
    </div>;
}