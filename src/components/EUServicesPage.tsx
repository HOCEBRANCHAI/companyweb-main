import React, { useState } from 'react';
import { MapIcon, BuildingIcon, EuroIcon, BriefcaseIcon, CheckIcon, InfoIcon, SearchIcon, ChevronDownIcon, ArrowLeftIcon } from 'lucide-react';
import { ServiceComparison } from './ServiceComparison';
import { CartWidget } from './CartWidget';
import { CompareCountries } from './CompareCountries';
import { countries } from './countries';
import { Link } from 'react-router-dom';
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
  const [cartItems, setCartItems] = useState<CartItem[]>([{
    name: 'eBranch',
    price: 1995,
    interval: 'year',
    type: 'plan'
  }]);
  const [showComparison, setShowComparison] = useState(false);
  const [showCountryDropdown, setShowCountryDropdown] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const handleAddToCart = (service: CartItem) => {
    if (!cartItems.find(item => item.name === service.name && item.country === service.country)) {
      setCartItems([...cartItems, service]);
    }
  };
  const filteredCountries = Object.entries(countries).filter(([key, name]) => name.toLowerCase().includes(searchQuery.toLowerCase()));
  return <div className="min-h-screen bg-[#0F0B1F]">
      <div className="bg-[#1B1537] border-b border-[#2D2755]">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Link to="/services" className="text-[#EA3A70] hover:text-[#EA3A70]/80 mr-4 flex items-center">
                <ArrowLeftIcon className="h-4 w-4 mr-2" />
                Back to Home
              </Link>
              <h1 className="text-2xl font-bold text-white">
                Market Entry Setup
              </h1>
            </div>
            <button onClick={() => setShowComparison(true)} className="text-[#EA3A70] hover:text-[#EA3A70]/80 text-sm font-medium inline-flex items-center">
              Compare All Countries
              <MapIcon className="ml-2 h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto mb-8">
          <div className="flex items-center mb-6">
            <div className="h-8 w-8 rounded-full bg-[#EA3A70] text-white flex items-center justify-center font-bold">
              1
            </div>
            <div className="ml-4">
              <h2 className="text-xl font-semibold text-white">
                Select Your Market
              </h2>
              <p className="text-gray-400">
                Choose the country where you want to establish your business
              </p>
            </div>
          </div>
          <div className="relative">
            <button onClick={() => setShowCountryDropdown(!showCountryDropdown)} className="w-full p-4 bg-[#1B1537] border border-[#2D2755] rounded-lg text-white flex items-center justify-between">
              <div className="flex items-center">
                <span className="font-medium">
                  {countries[selectedCountry]}
                </span>
              </div>
              <ChevronDownIcon className="h-5 w-5 text-gray-400" />
            </button>
            {showCountryDropdown && <div className="absolute w-full mt-2 bg-[#1B1537] border border-[#2D2755] rounded-lg shadow-lg z-10">
                <div className="p-2">
                  <div className="relative">
                    <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                    <input type="text" placeholder="Search countries..." className="w-full pl-10 pr-4 py-2 bg-[#1A1B2B] border border-gray-800 rounded-md text-white focus:outline-none focus:border-[#EA3A70]" value={searchQuery} onChange={e => setSearchQuery(e.target.value)} />
                  </div>
                </div>
                <div className="max-h-60 overflow-y-auto">
                  {filteredCountries.map(([key, name]) => <button key={key} onClick={() => {
                setSelectedCountry(key);
                setShowCountryDropdown(false);
              }} className="w-full px-4 py-2 text-left hover:bg-[#EA3A70]/10 text-white flex items-center justify-between">
                      <span>{name}</span>
                      {selectedCountry === key && <CheckIcon className="h-4 w-4 text-[#EA3A70]" />}
                    </button>)}
                </div>
              </div>}
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="flex items-center mb-6">
              <div className="h-8 w-8 rounded-full bg-[#EA3A70] text-white flex items-center justify-center font-bold">
                2
              </div>
              <div className="ml-4">
                <h2 className="text-xl font-semibold text-white">
                  Choose Required Services
                </h2>
                <p className="text-gray-400">
                  Select the services you need for {countries[selectedCountry]}
                </p>
              </div>
            </div>
            <ServiceComparison country={selectedCountry} services={services} countryName={countries[selectedCountry]} onAddToCart={handleAddToCart} />
          </div>
          <div className="lg:col-span-1">
            <div className="sticky top-6">
              <div className="flex items-center mb-6">
                <div className="h-8 w-8 rounded-full bg-[#EA3A70] text-white flex items-center justify-center font-bold">
                  3
                </div>
                <div className="ml-4">
                  <h2 className="text-xl font-semibold text-white">
                    Review & Proceed
                  </h2>
                  <p className="text-gray-400">Confirm your selection</p>
                </div>
              </div>
              <CartWidget items={cartItems} onClose={() => setCartItems([])} />
            </div>
          </div>
        </div>
      </div>
      {showComparison && <CompareCountries onClose={() => setShowComparison(false)} />}
    </div>;
}