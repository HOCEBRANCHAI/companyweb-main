import React, { useEffect, useState } from 'react';
import { SparklesIcon } from 'lucide-react';
export const Timeline = ({ countryName = 'Italy' }: { countryName?: string }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('timeline-section');
      if (element) {
        const position = element.getBoundingClientRect();
        if (position.top < window.innerHeight - 100) {
          setIsVisible(true);
          // Animate through the timeline steps
          const timer = setTimeout(() => {
            setActiveStep(1);
            setTimeout(() => {
              setActiveStep(2);
              setTimeout(() => {
                setActiveStep(3);
              }, 700);
            }, 700);
          }, 700);
          return () => clearTimeout(timer);
        }
      }
    };
    handleScroll(); // Check on initial load
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return <section id="timeline-section" className="py-20 px-4 bg-[#1c1a40]/60 relative overflow-hidden">
      {/* Add background elements */}
      <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-[#0c0a20]/30 to-transparent"></div>
      <div className="absolute bottom-0 right-0 w-full h-64 bg-gradient-to-t from-[#0c0a20]/30 to-transparent"></div>
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-pink-500/5 rounded-full blur-3xl animate-float" style={{
      animationDelay: '1s'
    }}></div>
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-indigo-500/5 rounded-full blur-3xl animate-float" style={{
      animationDelay: '2.5s'
    }}></div>
      <div className="max-w-6xl mx-auto relative z-10">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
            Processing Timeline
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            3-Week Delivery
          </p>
          <p className="text-gray-400 max-w-2xl mx-auto mt-4">
            Track your {countryName} branch registration progress through our streamlined process
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-purple-500 mx-auto mt-8 transition-all duration-500 hover:w-32"></div>
        </div>
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-pink-500/30 via-pink-500/50 to-pink-500/30"></div>
          {/* Week 1 */}
          <div className={`relative mb-16 transition-all duration-700 ${isVisible && activeStep >= 0 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="flex items-center justify-center mb-4">
              <div className={`text-white font-bold rounded-full w-12 h-12 flex items-center justify-center z-10 transition-all duration-500 ${isVisible && activeStep >= 0 ? 'bg-gradient-to-r from-pink-500 to-pink-600 scale-100 shadow-lg shadow-pink-500/20' : 'bg-gray-500 scale-90'}`}>
                1
              </div>
            </div>
            <div className="bg-gradient-to-br from-[#1c1a40] to-[#2a2850] p-6 rounded-xl max-w-lg mx-auto transform transition-all duration-500 hover:-translate-y-1 hover:shadow-xl group">
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="w-full md:w-1/3 overflow-hidden rounded-lg">
                  <img src="https://images.unsplash.com/photo-1551636898-47668aa61de2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" alt="Document preparation" className="w-full h-auto rounded-lg transition-transform duration-500 group-hover:scale-105" />
                </div>
                <div className="w-full md:w-2/3">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-pink-100 transition-colors duration-300">
                    Week 1
                  </h3>
                  <h4 className="text-lg font-semibold text-pink-500 mb-2 group-hover:text-pink-400 transition-colors duration-300">
                    Document Preparation
                  </h4>
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                    Document collection, translation, and preparation
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* Week 2 */}
          <div className={`relative mb-16 transition-all duration-700 ${isVisible && activeStep >= 1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="flex items-center justify-center mb-4">
              <div className={`text-white font-bold rounded-full w-12 h-12 flex items-center justify-center z-10 transition-all duration-500 ${isVisible && activeStep >= 1 ? 'bg-gradient-to-r from-pink-500 to-pink-600 scale-100 shadow-lg shadow-pink-500/20' : 'bg-gray-500 scale-90'}`}>
                2
              </div>
            </div>
            <div className="bg-gradient-to-br from-[#1c1a40] to-[#2a2850] p-6 rounded-xl max-w-lg mx-auto transform transition-all duration-500 hover:-translate-y-1 hover:shadow-xl group">
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="w-full md:w-1/3 overflow-hidden rounded-lg">
                  <img src="https://images.unsplash.com/photo-1577563908411-5077b6dc7624?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" alt="Notarization process" className="w-full h-auto rounded-lg transition-transform duration-500 group-hover:scale-105" />
                </div>
                <div className="w-full md:w-2/3">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-pink-100 transition-colors duration-300">
                    Week 2
                  </h3>
                  <h4 className="text-lg font-semibold text-pink-500 mb-2 group-hover:text-pink-400 transition-colors duration-300">
                    Notarization Process
                  </h4>
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                    Official notarization of all required documents
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* Week 3 - Part 1 */}
          <div className={`relative mb-16 transition-all duration-700 ${isVisible && activeStep >= 2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="flex items-center justify-center mb-4">
              <div className={`text-white font-bold rounded-full w-12 h-12 flex items-center justify-center z-10 transition-all duration-500 ${isVisible && activeStep >= 2 ? 'bg-gradient-to-r from-pink-500 to-pink-600 scale-100 shadow-lg shadow-pink-500/20' : 'bg-gray-500 scale-90'}`}>
                3
              </div>
            </div>
            <div className="bg-gradient-to-br from-[#1c1a40] to-[#2a2850] p-6 rounded-xl max-w-lg mx-auto transform transition-all duration-500 hover:-translate-y-1 hover:shadow-xl group">
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="w-full md:w-1/3 overflow-hidden rounded-lg">
                  <img src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" alt="Official registration" className="w-full h-auto rounded-lg transition-transform duration-500 group-hover:scale-105" />
                </div>
                <div className="w-full md:w-2/3">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-pink-100 transition-colors duration-300">
                    Week 3
                  </h3>
                  <h4 className="text-lg font-semibold text-pink-500 mb-2 group-hover:text-pink-400 transition-colors duration-300">
                    Official Registration
                  </h4>
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                    {countryName === 'Italy' ? 'Filing with Italian commercial register' : 'Official filing with the commercial register'}
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* Week 3 - Part 2 */}
          <div className={`relative transition-all duration-700 ${isVisible && activeStep >= 3 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="flex items-center justify-center mb-4">
              <div className={`text-white font-bold rounded-full w-12 h-12 flex items-center justify-center z-10 transition-all duration-500 ${isVisible && activeStep >= 3 ? 'bg-gradient-to-r from-pink-500 to-pink-600 scale-100 shadow-lg shadow-pink-500/20' : 'bg-gray-500 scale-90'}`}>
                3
              </div>
            </div>
            <div className="bg-gradient-to-br from-[#1c1a40] to-[#2a2850] p-6 rounded-xl max-w-lg mx-auto transform transition-all duration-500 hover:-translate-y-1 hover:shadow-xl group">
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="w-full md:w-1/3 overflow-hidden rounded-lg">
                  <img src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" alt="Tax registration" className="w-full h-auto rounded-lg transition-transform duration-500 group-hover:scale-105" />
                </div>
                <div className="w-full md:w-2/3">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-pink-100 transition-colors duration-300">
                    Week 3
                  </h3>
                  <h4 className="text-lg font-semibold text-pink-500 mb-2 group-hover:text-pink-400 transition-colors duration-300">
                    Tax Registration
                  </h4>
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                    Application for tax numbers and verification
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={`mt-16 p-6 rounded-xl bg-gradient-to-br from-[#1c1a40] to-[#2a2850] border border-pink-500/30 transition-all duration-1000 delay-1000 transform hover:shadow-xl hover:-translate-y-1 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} group`}>
          <div className="flex items-start">
            <div className="mr-4">
              <SparklesIcon className="w-6 h-6 text-pink-500 group-hover:animate-pulse" />
            </div>
            <div>
              <h3 className="text-lg font-bold mb-2 group-hover:text-pink-100 transition-colors duration-300">
                {countryName === 'Italy' ? 'Important Notice on Italian Notary Fees' : 'Important Notice on Notary Fees'}
              </h3>
              <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                {countryName === 'Italy'
                  ? 'Italian law requires notarization for all commercial register applications. The notary fee (€300-600) is a mandatory third-party cost regulated by the Italian Notarial Council that we transparently pass through without markup. Documents must be notarized and apostilled, then translated into Italian with sworn translation by an Italian public notary.'
                  : 'Local law may require notarization for commercial register applications. Notary fees are third‑party costs paid at cost without markup. Requirements vary by country.'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>;
};