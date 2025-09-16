import { useEffect, useState } from 'react';
import { FileTextIcon, FileIcon, CreditCardIcon, BuildingIcon, SparklesIcon } from 'lucide-react';
export const DocumentationSection = ({ countryName = 'Italy', cityName = '' }: { countryName?: string, cityName?: string }) => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('documentation-section');
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
  return <section id="documentation-section" className="py-20 px-4 bg-[#0c0a20]/90 relative overflow-hidden">
      {/* Add background elements */}
      <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-pink-500/5 to-transparent"></div>
      <div className="absolute bottom-0 right-0 w-full h-64 bg-gradient-to-t from-indigo-500/5 to-transparent"></div>
      <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl animate-float" style={{
      animationDelay: '2s'
    }}></div>
      <div className="max-w-6xl mx-auto relative z-10">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center px-4 py-1 rounded-full bg-pink-500/20 text-pink-500 text-sm font-medium mb-4">
            <SparklesIcon className="w-4 h-4 mr-1" /> DOCUMENTATION{' '}
            <SparklesIcon className="w-4 h-4 ml-1" />
          </div>
          <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
            Official Documentation
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            {cityName ? `Documents you'll receive for ${cityName}` : `Documents You'll Receive`}
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-purple-500 mx-auto mt-8 transition-all duration-500 hover:w-32"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className={`bg-gradient-to-br from-[#1c1a40] to-[#2a2850] p-6 rounded-xl transition-all duration-500 transform hover:-translate-y-2 hover:shadow-xl ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} group`}>
            <div className="bg-gradient-to-br from-[#2c2a50] to-[#3c3a60] w-12 h-12 rounded-lg flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110 group-hover:shadow-md group-hover:shadow-pink-500/20">
              <FileTextIcon className="w-6 h-6 text-pink-500" />
            </div>
            <h3 className="text-lg font-bold mb-2 group-hover:text-pink-100 transition-colors duration-300">
              {countryName === 'Germany' ? 'Beglaubigte Gesellschaftsunterlagen' : 'Notarized Company Documents'}
            </h3>
            <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors duration-300">
              {countryName === 'Italy' ? 'Legally certified company documents with Italian translations' : countryName === 'Germany' ? `Legally certified company documents (${cityName || 'local'} translations available)` : 'Legally certified company documents with local translations'}
            </p>
          </div>
          <div className={`bg-gradient-to-br from-[#1c1a40] to-[#2a2850] p-6 rounded-xl transition-all duration-500 delay-100 transform hover:-translate-y-2 hover:shadow-xl ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} group`}>
            <div className="bg-gradient-to-br from-[#2c2a50] to-[#3c3a60] w-12 h-12 rounded-lg flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110 group-hover:shadow-md group-hover:shadow-pink-500/20">
              <FileIcon className="w-6 h-6 text-pink-500" />
            </div>
            <h3 className="text-lg font-bold mb-2 group-hover:text-pink-100 transition-colors duration-300">
              {countryName === 'Italy' ? 'Visura Camerale' : countryName === 'Germany' ? 'Handelsregisterauszug (Commercial Register Extract)' : 'Commercial Register Extract'}
            </h3>
            <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors duration-300">
              {countryName === 'Italy' ? 'Official extract from the Italian commercial register' : countryName === 'Germany' ? `Official extract from the German commercial register${cityName ? ` (Berlin: Amtsgericht Charlottenburg)` : ''}` : 'Official extract from the commercial register'}
            </p>
          </div>
          <div className={`bg-gradient-to-br from-[#1c1a40] to-[#2a2850] p-6 rounded-xl transition-all duration-500 delay-200 transform hover:-translate-y-2 hover:shadow-xl ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} group`}>
            <div className="bg-gradient-to-br from-[#2c2a50] to-[#3c3a60] w-12 h-12 rounded-lg flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110 group-hover:shadow-md group-hover:shadow-pink-500/20">
              <CreditCardIcon className="w-6 h-6 text-pink-500" />
            </div>
            <h3 className="text-lg font-bold mb-2 group-hover:text-pink-100 transition-colors duration-300">
              {countryName === 'Italy' ? 'Codice Fiscale/Partita IVA' : countryName === 'Germany' ? 'Steuernummer / USt-IdNr.' : 'Tax Identification Documents'}
            </h3>
            <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors duration-300">
              {countryName === 'Italy' ? 'Italian tax identification documentation' : countryName === 'Germany' ? 'German tax identification documentation' : 'Local tax identification documentation'}
            </p>
          </div>
          <div className={`bg-gradient-to-br from-[#1c1a40] to-[#2a2850] p-6 rounded-xl transition-all duration-500 delay-300 transform hover:-translate-y-2 hover:shadow-xl ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} group`}>
            <div className="bg-gradient-to-br from-[#2c2a50] to-[#3c3a60] w-12 h-12 rounded-lg flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110 group-hover:shadow-md group-hover:shadow-pink-500/20">
              <BuildingIcon className="w-6 h-6 text-pink-500" />
            </div>
            <h3 className="text-lg font-bold mb-2 group-hover:text-pink-100 transition-colors duration-300">
              {countryName === 'Germany' ? 'Gewerbeanmeldung / Geschäftsadresse' : 'Verified Proof of Address'}
            </h3>
            <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors duration-300">
              {countryName === 'Germany' ? `Proof of registered business (${cityName || 'local'} business address verification)` : 'Official verification of business location'}
            </p>
          </div>
        </div>
        <div className={`bg-gradient-to-br from-[#1c1a40] to-[#2a2850] p-6 rounded-xl flex items-start mt-12 transition-all duration-700 transform hover:-translate-y-1 hover:shadow-xl ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} group`}>
          <div className="bg-gradient-to-br from-[#2c2a50] to-[#3c3a60] w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 mt-1 mr-4 transition-transform duration-300 group-hover:scale-110 group-hover:shadow-md group-hover:shadow-pink-500/20">
            <FileIcon className="w-6 h-6 text-pink-500" />
          </div>
          <div>
            <h3 className="text-lg font-bold mb-2 group-hover:text-pink-100 transition-colors duration-300">
              Don't have all documents?
            </h3>
            <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
              No problem! Start with basic information and our team will guide
              you through obtaining any missing documents.
            </p>
          </div>
        </div>
        <div className={`mt-12 flex justify-center transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <button className="bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white font-bold py-3 px-8 rounded-md transition-all duration-300 flex items-center group shadow-lg hover:shadow-pink-500/30">
            Download Sample Documents{' '}
            <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </button>
        </div>
      </div>
    </section>;
};