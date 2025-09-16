import React, { useEffect, useState } from 'react';
import { FileTextIcon, UserIcon, CheckIcon, SparklesIcon } from 'lucide-react';
export const RequiredDocuments = ({ countryName = 'Italy' }: { countryName?: string }) => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('required-documents');
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
  return <section id="required-documents" className="py-20 px-4 bg-[#0c0a20]/90 relative overflow-hidden">
      {/* Enhanced animated background elements */}
      <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-pink-500/10 to-transparent"></div>
      <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-indigo-500/10 rounded-full blur-3xl animate-float" style={{
      animationDelay: '2s'
    }}></div>
      <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl animate-float" style={{
      animationDelay: '3s'
    }}></div>
      <div className="max-w-6xl mx-auto relative z-10">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center px-4 py-1 rounded-full bg-pink-500/20 text-pink-500 text-sm font-medium mb-4">
            <SparklesIcon className="w-4 h-4 mr-1" /> REQUIREMENTS{' '}
            <SparklesIcon className="w-4 h-4 ml-1" />
          </div>
          <h2 className="text-4xl font-bold mb-4 relative inline-block group">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
              Required Documents
            </span>
            <span className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-pink-500 to-purple-500 transform scale-x-0 transition-transform duration-500 origin-bottom-left group-hover:scale-x-100"></span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            To register your {countryName} branch, you'll need to provide the following documents
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-purple-500 mx-auto mt-8 transition-all duration-500 hover:w-32"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className={`bg-gradient-to-br from-[#1c1a40] to-[#2a2850] p-8 rounded-xl transition-all duration-700 transform ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'} hover:-translate-y-2 hover:shadow-xl relative overflow-hidden group`}>
            <div className="absolute inset-0 bg-gradient-to-br from-pink-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="flex items-center mb-6 relative z-10">
              <div className="bg-gradient-to-br from-pink-500/20 to-pink-500/30 p-2 rounded-lg mr-3 group-hover:from-pink-500/30 group-hover:to-pink-500/40 transition-colors duration-300">
                <FileTextIcon className="w-6 h-6 text-pink-500" />
              </div>
              <h3 className="text-xl font-bold group-hover:text-pink-100 transition-colors duration-300">
                Parent Company Documents
              </h3>
            </div>
            <ul className="space-y-4 relative z-10">
              {[
                'Certificate of Incorporation',
                countryName === 'Italy' ? 'Articles of Association (translated to Italian)' : 'Articles of Association (translated to local language if required)',
                'Recent extract from home country register',
                'Proof of registered address',
                'Financial statements (if available)'
              ].map((item, index) => <li key={index} className="flex items-start group/item">
                  <div className="mt-1 mr-3 flex-shrink-0 transition-transform duration-300 group-hover/item:scale-110">
                    <CheckIcon className="w-5 h-5 text-pink-500" />
                  </div>
                  <span className="group-hover/item:text-pink-100 transition-colors duration-300">
                    {item}
                  </span>
                </li>)}
            </ul>
          </div>
          <div className={`bg-gradient-to-br from-[#1c1a40] to-[#2a2850] p-8 rounded-xl transition-all duration-700 transform ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'} hover:-translate-y-2 hover:shadow-xl relative overflow-hidden group`}>
            <div className="absolute inset-0 bg-gradient-to-br from-pink-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="flex items-center mb-6 relative z-10">
              <div className="bg-gradient-to-br from-pink-500/20 to-pink-500/30 p-2 rounded-lg mr-3 group-hover:from-pink-500/30 group-hover:to-pink-500/40 transition-colors duration-300">
                <UserIcon className="w-6 h-6 text-pink-500" />
              </div>
              <h3 className="text-xl font-bold group-hover:text-pink-100 transition-colors duration-300">
                Director/Representative Documents
              </h3>
            </div>
            <ul className="space-y-4 relative z-10">
              {['Passport or ID copy of all directors', 'Proof of address (utility bill, bank statement)', 'Power of Attorney (if applicable)', 'Tax identification numbers', 'Brief professional biography'].map((item, index) => <li key={index} className="flex items-start group/item">
                  <div className="mt-1 mr-3 flex-shrink-0 transition-transform duration-300 group-hover/item:scale-110">
                    <CheckIcon className="w-5 h-5 text-pink-500" />
                  </div>
                  <span className="group-hover/item:text-pink-100 transition-colors duration-300">
                    {item}
                  </span>
                </li>)}
            </ul>
          </div>
        </div>
        <div className={`bg-gradient-to-br from-[#1c1a40] to-[#2a2850] p-6 rounded-xl mt-8 flex items-start transition-all duration-700 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} hover:-translate-y-2 hover:shadow-xl relative overflow-hidden group`}>
          <div className="absolute inset-0 bg-gradient-to-br from-pink-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="flex-shrink-0 mt-1 mr-4 relative z-10">
            <div className="bg-gradient-to-br from-pink-500/20 to-pink-500/30 p-2 rounded-lg group-hover:from-pink-500/30 group-hover:to-pink-500/40 transition-colors duration-300">
              <FileTextIcon className="w-6 h-6 text-pink-500" />
            </div>
          </div>
          <div className="relative z-10">
            <h3 className="text-lg font-bold mb-2 group-hover:text-pink-100 transition-colors duration-300">
              Don't have all documents?
            </h3>
            <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
              No problem! You can start the registration process with just the
              basic information. Our team will guide you through obtaining any
              missing documents and can provide alternatives where possible.
            </p>
          </div>
        </div>
        <div className={`mt-12 flex justify-center transition-all duration-700 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <button className="relative overflow-hidden bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white font-bold py-3 px-8 rounded-md transition-all duration-300 flex items-center group shadow-lg hover:shadow-pink-500/30">
            <span className="relative z-10">
              Request Document Checklist{' '}
              <span className="ml-2 transform transition-transform group-hover:translate-x-1">
                →
              </span>
            </span>
            <span className="absolute inset-0 bg-gradient-to-r from-pink-600 to-pink-500 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></span>
          </button>
        </div>
      </div>
    </section>;
};