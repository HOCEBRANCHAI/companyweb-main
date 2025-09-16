import React, { useEffect, useState } from 'react';
import { FileTextIcon, FileIcon, CreditCardIcon, BuildingIcon, UserIcon, ClockIcon, StarIcon } from 'lucide-react';
export const CoreBenefits = ({ countryName = 'Italy' }: { countryName?: string }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);
  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('core-benefits');
      if (element) {
        const position = element.getBoundingClientRect();
        if (position.top < window.innerHeight - 100) {
          setIsVisible(true);
        }
      }
    };
    handleScroll(); // Check on initial load
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return <section id="core-benefits" className="py-20 px-4 bg-[#1c1a40]/60 relative overflow-hidden">
      {/* Enhanced animated background elements */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-float" style={{
      animationDelay: '3s'
    }}></div>
      <div className="absolute top-1/3 left-1/3 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl animate-float" style={{
      animationDelay: '1.5s'
    }}></div>
      <div className="max-w-6xl mx-auto relative z-10">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center px-4 py-1 rounded-full bg-pink-500/20 text-pink-500 text-sm font-medium mb-4">
            <StarIcon className="w-4 h-4 mr-1" /> CORE BENEFITS{' '}
            <StarIcon className="w-4 h-4 ml-1" />
          </div>
          <h2 className="text-4xl font-bold mb-4 relative inline-block group">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
              What's Included in Your Package
            </span>
            <span className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-pink-500 to-purple-500 transform scale-x-0 transition-transform duration-500 origin-bottom-left group-hover:scale-x-100"></span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Everything you need to establish and operate your {countryName} branch compliantly
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-purple-500 mx-auto mt-8 transition-all duration-500 hover:w-32"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[{
          icon: <FileTextIcon className="w-6 h-6 text-pink-500" />,
          title: 'Official Registration',
          description: countryName === 'Italy'
            ? 'Complete Registro delle Imprese registration with all required documentation'
            : 'Complete commercial register filing with all required documentation'
        }, {
          icon: <FileIcon className="w-6 h-6 text-pink-500" />,
          title: 'Legal Documentation',
          description: countryName === 'Italy'
            ? 'Italian commercial register extract and certified translations'
            : `${countryName} commercial register extract and certified translations`
        }, {
          icon: <CreditCardIcon className="w-6 h-6 text-pink-500" />,
          title: 'EU VAT Number',
          description: countryName === 'Italy'
            ? 'Italian tax number (Partita IVA) and EU VAT registration'
            : `${countryName} tax number and EU VAT registration`
        }, {
          icon: <BuildingIcon className="w-6 h-6 text-pink-500" />,
          title: 'Legal Address',
          description: '3 months of official business address service included'
        }, {
          icon: <UserIcon className="w-6 h-6 text-pink-500" />,
          title: 'Account Manager',
          description: 'AI + Community support throughout the registration process'
        }, {
          icon: <ClockIcon className="w-6 h-6 text-pink-500" />,
          title: '3-Week Processing',
          description: countryName === 'Italy'
            ? "Efficient service to get your branch operational through Italy's administrative system"
            : `Efficient service to get your branch operational through ${countryName}'s administrative system`
        }].map((benefit, index) => <div key={index} className={`bg-gradient-to-br from-[#1c1a40] to-[#2a2850] p-8 rounded-xl transition-all duration-500 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} hover:-translate-y-2 hover:shadow-xl relative overflow-hidden group`} style={{
          transitionDelay: `${index * 100}ms`
        }} onMouseEnter={() => setHoveredCard(index)} onMouseLeave={() => setHoveredCard(null)}>
              <div className="absolute inset-0 bg-gradient-to-br from-pink-500/20 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className={`bg-gradient-to-br from-[#2c2a50] to-[#3c3a60] w-12 h-12 rounded-lg flex items-center justify-center mb-6 transition-all duration-300 ${hoveredCard === index ? 'scale-110 shadow-md shadow-pink-500/20' : ''}`}>
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-pink-100 transition-colors duration-300">
                {benefit.title}
              </h3>
              <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                {benefit.description}
              </p>
            </div>)}
        </div>
        <div className="mt-16 flex justify-center">
          <button className="relative overflow-hidden bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white font-bold py-3 px-8 rounded-md transition-all duration-300 flex items-center group shadow-lg hover:shadow-pink-500/30">
            <span className="relative z-10">
              Learn More About Our Benefits{' '}
              <span className="ml-2 transform transition-transform group-hover:translate-x-1">
                →
              </span>
            </span>
            <span className="absolute inset-0 bg-gradient-to-r from-pink-600 to-pink-500 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></span>
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
          {[{
          value: '3 Weeks',
          label: 'Average Processing'
        }, {
          value: '98%',
          label: 'Customer Satisfaction'
        }, {
          value: '27',
          label: 'EU Countries Served'
        }].map((stat, index) => <div key={index} className={`bg-gradient-to-br from-[#1c1a40] to-[#2a2850] p-6 rounded-xl text-center transition-all duration-500 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} hover:-translate-y-2 hover:shadow-xl relative overflow-hidden group`} style={{
          transitionDelay: `${(index + 6) * 100}ms`
        }}>
              <div className="absolute inset-0 bg-gradient-to-br from-pink-500/20 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-pink-300 mb-2 group-hover:scale-110 transition-transform duration-300">
                {stat.value}
              </div>
              <div className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                {stat.label}
              </div>
            </div>)}
        </div>
      </div>
    </section>;
};