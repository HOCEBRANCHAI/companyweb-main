import { useEffect, useState, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MenuIcon, XIcon, ChevronDownIcon, SearchIcon, CheckIcon } from 'lucide-react';
import { countries } from '../../constants/countries';
import logo from '../../hoclogo.png';
import { createPortal } from 'react-dom';
import { useClickOutside } from '../../hooks/useClickOutside';


// Popular countries to display in the selector
const popularCountries = ['nl', 'de', 'fr', 'es', 'ie', 'it', 'be', 'at', 'dk', 'fi', 'se'];
// Get country flag emoji
const getCountryFlag = (countryCode: string) => {
  const flagEmojis: { [key: string]: string } = {
    at: '🇦🇹',
    be: '🇧🇪',
    bg: '🇧🇬',
    hr: '🇭🇷',
    cy: '🇨🇾',
    cz: '🇨🇿',
    dk: '🇩🇰',
    ee: '🇪🇪',
    fi: '🇫🇮',
    fr: '🇫🇷',
    de: '🇩🇪',
    gr: '🇬🇷',
    hu: '🇭🇺',
    ie: '🇮🇪',
    it: '🇮🇹',
    lv: '🇱🇻',
    lt: '🇱🇹',
    lu: '🇱🇺',
    mt: '🇲🇹',
    nl: '🇳🇱',
    pl: '🇵🇱',
    pt: '🇵🇹',
    ro: '🇷🇴',
    sk: '🇸🇰',
    si: '🇸🇮',
    es: '🇪🇸',
    se: '🇸🇪'
  };
  return flagEmojis[countryCode] || '🇪🇺';
};


// Service dropdown items
const serviceItems = [{
  name: 'Company Formation',
  description: 'Register your business in the Netherlands',
  href: '/services/company-formation'
}, {
  name: 'Company Essentials',
  description: 'Essential services for EU business setup',
  href: '/services/company-essentials'
}, {
  name: 'Mailbox',
  description: 'Get a prestigious Dutch business address',
  href: '/services/mailbox'
}, {
  name: 'Accounting',
  description: 'Financial management for your business',
  href: '/services/accounting'
}, {
  name: 'Tax Filing',
  description: 'Stay compliant with Dutch tax regulations',
  href: '/services/tax-filing'
}, {
  name: 'Corporate Secretary',
  description: 'Maintain legal compliance for your entity',
  href: '/services/corporate-secretary'
}, {
  name: 'Legal',
  description: 'Expert legal support for your business',
  href: '/services/legal'
}, {
  name: 'Marketing Services',
  description: 'AI-powered marketing solutions for global reach',
  href: '/services/marketing'
}];
// Resources dropdown items
const resourceItems = [{
  name: 'Tutorials',
  description: 'Step-by-step business setup guides',
  href: '/tutorials'
}, {
  name: 'Knowledge Base',
  description: 'Guides and articles for business owners',
  href: '/resources/knowledge-base'
}, {
  name: 'Blog',
  description: 'Latest news and business insights',
  href: '/blog'
}, {
  name: 'FAQ',
  description: 'Answers to common questions',
  href: '/resources/faq'
}, {
  name: 'Case Studies',
  description: 'Success stories from our clients',
  href: '/resources/case-studies'
}];

// Add type definitions for navigation items
type NavigationItem = {
  name: string;
  type: 'dropdown' | 'link';
  href?: string;
  items?: Array<{
    name: string;
    description: string;
    href: string;
  }>;
};

const navigationItems: NavigationItem[] = [
  {
    name: 'Solutions',
    type: 'dropdown',
    items: serviceItems,
  },
  {
    name: 'eBranch',
    type: 'link',
    href: '/ebranch'
  },
  {
    name: 'Company',
    type: 'dropdown',
    items: [
      {
        name: 'About Us',
        description: 'Learn more about our company',
        href: '/about-us',
      },
      {
        name: 'Contact Us',
        description: 'Get in touch with our team',
        href: '/contact',
      },
    ]
  },
  {
    name: 'Pricing',
    type: 'link',
    href: '/pricing'
  },
  {
    name: 'Resources',
    type: 'dropdown',
    items: resourceItems
  }
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [selectedCountry, setSelectedCountry] = useState('nl');
  const [showCountrySelector, setShowCountrySelector] = useState(false);
  const [countrySearchQuery, setCountrySearchQuery] = useState('');

  const location = useLocation();
  
  // Refs for different dropdown elements
  const desktopNavRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const countrySelectorRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = (dropdown: string) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown);
  };

  // Close mobile menu when clicking outside
  useClickOutside(mobileMenuRef, () => {
    setIsMenuOpen(false);
    setOpenDropdown(null); // Also close any open mobile dropdowns
  });

  // Close country selector when clicking outside
  useClickOutside(countrySelectorRef, () => {
    setShowCountrySelector(false);
  });

  // Close desktop dropdowns when clicking outside
  useClickOutside(desktopNavRef, () => {
    setOpenDropdown(null);
  });

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        if (showCountrySelector) {
          setShowCountrySelector(false);
        } else if (isMenuOpen) {
          setIsMenuOpen(false);
          setOpenDropdown(null);
        } else if (openDropdown) {
          setOpenDropdown(null);
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [showCountrySelector, isMenuOpen, openDropdown]);

  // Handle country change
  const handleCountryChange = (country: string) => {
    setSelectedCountry(country);
    setShowCountrySelector(false);
    // Save country preference to localStorage
    localStorage.setItem('preferredCountry', country);
  };

  // Load selected country from localStorage on initial load
  useEffect(() => {
    const savedCountry = localStorage.getItem('preferredCountry');
    if (savedCountry && countries[savedCountry as keyof typeof countries]) {
      setSelectedCountry(savedCountry);
    }
  }, []);

  // Filter countries based on search query
  const filteredCountries = Object.keys(countries).filter(code => 
    countries[code as keyof typeof countries].toLowerCase().includes(countrySearchQuery.toLowerCase())
  );

  // Tutorial categories removed - no longer needed for mega menu

  return  <header className="bg-[#0F0B1F]/80 backdrop-blur-md border-b border-[#2D2755] sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
        <div className="flex justify-between items-center h-12 sm:h-14 lg:h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <img src={logo} alt="Logo" className="h-8 w-10 sm:h-10 sm:w-12 lg:h-12 lg:w-14" />
            </Link>
          </div>
          {/* Tablet Navigation */}
          <nav className="hidden md:flex lg:hidden items-center space-x-1">
            {navigationItems.slice(0, 3).map((item) => (
              item.type === 'link' ? (
                <Link
                  key={item.name}
                  to={item.href || '/'}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    location.pathname === item.href
                      ? 'bg-[#EA3A70]/10 text-[#EA3A70]'
                      : 'text-white hover:bg-[#1B1537] hover:text-white'
                  }`}
                >
                  {item.name}
                </Link>
              ) : null
            ))}
            <Link
              to="/pricing"
              className="px-3 py-2 rounded-lg text-sm font-medium transition-colors text-white hover:bg-[#1B1537] hover:text-white"
            >
              Pricing
            </Link>
          </nav>
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1" ref={desktopNavRef}>
            <Link
              to="/"
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                location.pathname === '/'
                  ? 'bg-[#EA3A70]/10 text-[#EA3A70]'
                  : 'text-white hover:bg-[#1B1537] hover:text-white'
              }`}
            >
              Home
            </Link>
            {navigationItems.map((item) => (
              item.type === 'dropdown' && item.name !== 'Resources' ? (
                <div key={item.name} className="relative">
                  <button
                    onClick={() => toggleDropdown(item.name.toLowerCase())}
                    className={`px-4 py-2 rounded-xl font-semibold text-sm transition-colors flex items-center
                      ${item.name === 'Solutions' ?
                        (openDropdown === 'solutions'
                          ? 'bg-[#1B1537] text-white'
                          : 'text-white bg-transparent hover:bg-[#1B1537]')
                        : item.name === 'Company' ?
                          (openDropdown === 'company'
                            ? 'bg-[#1B1537] text-white'
                            : 'text-white bg-transparent hover:bg-[#1B1537]')
                        : 'rounded-lg font-medium ' + (location.pathname.startsWith('/' + item.name.toLowerCase())
                          ? 'bg-[#EA3A70]/10 text-[#EA3A70]'
                          : 'text-white hover:bg-[#1B1537] hover:text-white')
                      }
                    `}
                  >
                    {item.name}
                    <ChevronDownIcon className="h-4 w-4 ml-1" />
                  </button>
                  {openDropdown === item.name.toLowerCase() && item.items && (
                    item.name === 'Company' ? (
                      <div className="absolute top-full left-0 mt-1 w-80 bg-[#1B1537] rounded-xl shadow-lg shadow-black/20 border border-[#2D2755] p-6 z-20">
                        {item.items.map((subItem) => (
                          <div key={subItem.name} className="mb-6">
                            <Link
                              to={subItem.href}
                              className="block group"
                              onClick={() => setOpenDropdown(null)}
                            >
                              <div className="font-bold text-white group-hover:text-[#EA3A70] text-base mb-1">{subItem.name}</div>
                              <div className="text-sm text-gray-300 group-hover:text-gray-200">{subItem.description}</div>
                            </Link>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="absolute top-full left-0 mt-1 w-[600px] bg-[#1B1537] rounded-xl shadow-lg shadow-black/20 border border-[#2D2755] p-6 z-20">
                        <div className="border-b border-[#2D2755] mb-4"></div>
                        <div className="grid grid-cols-2 gap-x-8 gap-y-6">
                          {item.items.map((subItem) => (
                            <div key={subItem.name} className="mb-2">
                              <Link
                                to={subItem.href}
                                className="block group"
                                onClick={() => setOpenDropdown(null)}
                              >
                                <div className="font-bold text-white group-hover:text-[#EA3A70] text-base mb-1">{subItem.name}</div>
                                <div className="text-sm text-gray-300 group-hover:text-gray-200">{subItem.description}</div>
                              </Link>
                            </div>
                          ))}
                        </div>
                        <div className="border-t border-[#2D2755] mt-6 pt-2 text-center">
                          <Link
                            to="/services"
                            className="text-[#EA3A70] text-base font-medium hover:underline"
                            onClick={() => setOpenDropdown(null)}
                          >
                            View All Services
                          </Link>
                        </div>
                      </div>
                    )
                  )}
                </div>
              ) : item.type === 'link' ? (
                <Link
                  key={item.name}
                  to={item.href || '/'}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    location.pathname === item.href
                      ? 'bg-[#EA3A70]/10 text-[#EA3A70]'
                      : 'text-white hover:bg-[#1B1537] hover:text-white'
                  }`}
                >
                  {item.name}
                </Link>
              ) : null
            ))}



            {/* Resources Dropdown - always last */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown('resources')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center ${location.pathname.startsWith('/resources') ? 'bg-[#EA3A70]/10 text-[#EA3A70]' : 'text-white hover:bg-[#1B1537] hover:text-white'}`}
              >
                Resources
                <ChevronDownIcon className="h-4 w-4 ml-1" />
              </button>
              {openDropdown === 'resources' && (
                <div className="absolute top-full right-0 mt-1 w-72 bg-[#1B1537] rounded-lg shadow-lg shadow-black/20 border border-[#2D2755] py-2 z-20">
                  {resourceItems.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className="block px-4 py-3 text-sm hover:bg-[#2D2755]/30 hover:text-[#EA3A70] transition-colors"
                      onClick={() => setOpenDropdown(null)}
                    >
                      <div className="font-medium text-white">{item.name}</div>
                      <div className="text-xs text-gray-400">
                        {item.description}
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>



          </nav>
          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-2 lg:space-x-3">
            <a 
              href="https://clientdashboard2.houseofcompanies.co.in/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-[#EA3A70] hover:bg-[#EA3A70]/90 text-white px-4 py-2 rounded-lg text-sm font-medium shadow-md shadow-[#EA3A70]/20"
            >
              Login
            </a>
          </div>
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="inline-flex items-center justify-center p-2 rounded-lg text-white hover:bg-[#1B1537] focus:outline-none" aria-expanded={isMenuOpen}>
              <span className="sr-only">
                {isMenuOpen ? 'Close menu' : 'Open menu'}
              </span>
              {isMenuOpen ? <XIcon className="block h-6 w-6" /> : <MenuIcon className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile menu */}
      {isMenuOpen && <div className="md:hidden bg-[#1B1537] border-t border-[#2D2755]" ref={mobileMenuRef}>
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link to="/" className={`block px-3 py-2 rounded-lg font-medium ${location.pathname === '/' ? 'bg-[#EA3A70]/10 text-[#EA3A70]' : 'text-white hover:bg-[#2D2755]/30'}`} onClick={() => setIsMenuOpen(false)}>
              Home
            </Link>
            {/* Mobile Services Section */}
            <div className="space-y-1">
              <button onClick={() => toggleDropdown('mobile-services')} className={`flex justify-between items-center w-full px-3 py-2 rounded-lg font-medium ${location.pathname.startsWith('/services') ? 'bg-[#EA3A70]/10 text-[#EA3A70]' : 'text-white hover:bg-[#2D2755]/30'}`}>
                Services
                <ChevronDownIcon className={`h-4 w-4 transition-transform ${openDropdown === 'mobile-services' ? 'rotate-180' : ''}`} />
              </button>
              {openDropdown === 'mobile-services' && <div className="pl-4 space-y-1 border-l border-[#2D2755] ml-3">
                  {serviceItems.map(item => <Link key={item.name} to={item.href} className="block px-3 py-2 rounded-lg text-sm text-white hover:bg-[#2D2755]/30" onClick={() => {
                    setIsMenuOpen(false);
                    setOpenDropdown(null);
                  }}>
                      <div className="font-medium text-white">{item.name}</div>
                      <div className="text-xs text-gray-400">
                        {item.description}
                      </div>
                    </Link>)}
                </div>}
            </div>
            <Link to="/ebranch" className={`block px-3 py-2 rounded-lg font-medium ${location.pathname === '/ebranch' ? 'bg-[#EA3A70]/10 text-[#EA3A70]' : 'text-white hover:bg-[#2D2755]/30'}`} onClick={() => setIsMenuOpen(false)}>
              eBranch
            </Link>
            <Link to="/pricing" className={`block px-3 py-2 rounded-lg font-medium ${location.pathname === '/pricing' ? 'bg-[#EA3A70]/10 text-[#EA3A70]' : 'text-white hover:bg-[#2D2755]/30'}`} onClick={() => setIsMenuOpen(false)}>
              Pricing
            </Link>
            {/* Mobile Company Section */}
            <div className="space-y-1">
              <button onClick={() => toggleDropdown('mobile-company')} className={`flex justify-between items-center w-full px-3 py-2 rounded-lg font-medium ${location.pathname.startsWith('/about') || location.pathname.startsWith('/contact') ? 'bg-[#EA3A70]/10 text-[#EA3A70]' : 'text-white hover:bg-[#2D2755]/30'}`}>
                Company
                <ChevronDownIcon className={`h-4 w-4 transition-transform ${openDropdown === 'mobile-company' ? 'rotate-180' : ''}`} />
              </button>
              {openDropdown === 'mobile-company' && <div className="pl-4 space-y-1 border-l border-[#2D2755] ml-3">
                  <Link to="/about-us" className="block px-3 py-2 rounded-lg text-sm text-white hover:bg-[#2D2755]/30" onClick={() => {
                    setIsMenuOpen(false);
                    setOpenDropdown(null);
                  }}>
                    About Us
                  </Link>
                  <Link to="/contact" className="block px-3 py-2 rounded-lg text-sm text-white hover:bg-[#2D2755]/30" onClick={() => {
                    setIsMenuOpen(false);
                    setOpenDropdown(null);
                  }}>
                    Contact Us
                  </Link>
                </div>}
            </div>
            {/* Mobile Resources Section */}
            <div className="space-y-1">
              <button onClick={() => toggleDropdown('mobile-resources')} className={`flex justify-between items-center w-full px-3 py-2 rounded-lg font-medium ${location.pathname.startsWith('/resources') ? 'bg-[#EA3A70]/10 text-[#EA3A70]' : 'text-white hover:bg-[#2D2755]/30'}`}>
                Resources
                <ChevronDownIcon className={`h-4 w-4 transition-transform ${openDropdown === 'mobile-resources' ? 'rotate-180' : ''}`} />
              </button>
              {openDropdown === 'mobile-resources' && <div className="pl-4 space-y-1 border-l border-[#2D2755] ml-3">
                  {resourceItems.map(item => <Link key={item.name} to={item.href} className="block px-3 py-2 rounded-lg text-sm text-white hover:bg-[#2D2755]/30" onClick={() => {
                    setIsMenuOpen(false);
                    setOpenDropdown(null);
                  }}>
                      <div className="font-medium text-white">{item.name}</div>
                      <div className="text-xs text-gray-400">
                        {item.description}
                      </div>
                    </Link>)}
                </div>}
            </div>

            {/* Mobile menu login section */}
            <div className="pt-4 pb-2 border-t border-[#2D2755]">
              <a 
                href="https://clientdashboard2.houseofcompanies.co.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="block px-3 py-2 mt-2 text-center bg-[#EA3A70] hover:bg-[#EA3A70]/90 text-white rounded-lg shadow-sm shadow-[#EA3A70]/20" 
                onClick={() => setIsMenuOpen(false)}
              >
                Login
              </a>
            </div>
          </div>
        </div>}
      {/* Country Selector Modal */}
      {showCountrySelector && createPortal(
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[9999] flex items-center justify-center p-4" style={{ isolation: 'isolate' }}>
          <div className="bg-[#1B1537] rounded-xl border border-[#2D2755] w-full max-w-md max-h-[90vh] flex flex-col shadow-2xl relative" ref={countrySelectorRef}>
            {/* Header */}
            <div className="p-6 border-b border-[#2D2755] flex justify-between items-center flex-shrink-0">
              <h3 className="text-xl font-bold text-white">Select Country</h3>
              <button 
                onClick={() => setShowCountrySelector(false)} 
                className="p-2 rounded-full hover:bg-[#2D2755]/50 transition-colors"
              >
                <XIcon className="h-5 w-5 text-white" />
              </button>
            </div>
            
            {/* Scrollable Content */}
            <div className="flex-1 overflow-y-auto">
              <div className="p-6">
                <p className="text-indigo-200 mb-4">
                  Select your country of interest to see tailored content across
                  our site
                </p>
                
                {/* Search Box */}
                <div className="relative mb-4">
                  <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-indigo-400" />
                  <input 
                    type="text" 
                    placeholder="Search countries..." 
                    value={countrySearchQuery} 
                    onChange={e => setCountrySearchQuery(e.target.value)} 
                    className="w-full bg-[#0F0B1F] border border-[#2D2755] rounded-lg pl-10 pr-4 py-2 text-white placeholder-indigo-400 focus:outline-none focus:border-[#EA3A70]/50" 
                  />
                </div>
                
                {/* Popular Countries */}
                <div className="mb-6">
                  <h4 className="text-xs font-medium text-indigo-400 mb-2 uppercase">
                    Popular Countries
                  </h4>
                  <div className="grid grid-cols-1 gap-2">
                    {popularCountries.map(countryCode => (
                      <button 
                        key={countryCode} 
                        onClick={() => handleCountryChange(countryCode)} 
                        className={`flex items-center justify-between p-3 rounded-md transition-colors ${
                          selectedCountry === countryCode 
                            ? 'bg-[#EA3A70]/20 border border-[#EA3A70]/30' 
                            : 'hover:bg-[#2D2755]/50 border border-transparent'
                        }`}
                      >
                        <div className="flex items-center">
                          <span className="text-xl mr-3" aria-hidden="true">
                            {getCountryFlag(countryCode)}
                          </span>
                          <span className="text-white text-sm">
                            {countries[countryCode as keyof typeof countries]}
                          </span>
                        </div>
                        {selectedCountry === countryCode && <CheckIcon className="h-4 w-4 text-[#EA3A70]" />}
                      </button>
                    ))}
                  </div>
                </div>
                
                {/* All Countries */}
                <div>
                  <h4 className="text-xs font-medium text-indigo-400 mb-2 uppercase">
                    {countrySearchQuery ? 'Search Results' : 'All Countries'}
                  </h4>
                  <div className="grid grid-cols-1 gap-2">
                    {filteredCountries.map(countryCode => (
                      <button 
                        key={countryCode} 
                        onClick={() => handleCountryChange(countryCode)} 
                        className={`flex items-center justify-between p-3 rounded-md transition-colors ${
                          selectedCountry === countryCode 
                            ? 'bg-[#EA3A70]/20 border border-[#EA3A70]/30' 
                            : 'hover:bg-[#2D2755]/50 border border-transparent'
                        }`}
                      >
                        <div className="flex items-center">
                          <span className="text-xl mr-3" aria-hidden="true">
                            {getCountryFlag(countryCode)}
                          </span>
                          <span className="text-white text-sm">
                            {countries[countryCode as keyof typeof countries]}
                          </span>
                        </div>
                        {selectedCountry === countryCode && <CheckIcon className="h-4 w-4 text-[#EA3A70]" />}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            {/* Footer */}
            <div className="p-4 border-t border-[#2D2755] bg-[#0F0B1F]/50 flex-shrink-0">
              <div className="flex justify-between items-center">
                <p className="text-xs text-indigo-300">
                  Your selection will be remembered across the site
                </p>
                <button 
                  onClick={() => setShowCountrySelector(false)} 
                  className="px-4 py-2 bg-[#EA3A70] text-white rounded-lg hover:bg-[#EA3A70]/90 transition-colors text-sm font-medium"
                >
                  Confirm Selection
                </button>
              </div>
            </div>
          </div>
        </div>,
        document.body
      )}


    </header>;
}