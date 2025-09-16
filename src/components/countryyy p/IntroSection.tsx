import React, { useEffect, useState } from 'react';

interface IntroSectionProps {
  countryName?: string;
  countryDescription?: string;
  countryImage?: string;
  countryTags?: string[];
}

export const IntroSection: React.FC<IntroSectionProps> = ({ 
  countryName = 'Europe',
  countryDescription = 'Strategic European business hub with access to EU markets.',
  countryImage = '/pasted-image.jpg',
  countryTags = ['Digital-first', 'EU Presence', 'Streamlined', 'Efficient']
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('intro-section');
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

  return (
    <section id="intro-section" className="bg-[#0c0a20] py-16 px-4 relative overflow-hidden">
      {/* Enhanced animated background elements */}
      <div className="absolute -top-20 -right-20 w-64 h-64 bg-pink-500/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-float" style={{
        animationDelay: '2s'
      }}></div>
      <div className="absolute top-1/3 left-1/2 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl animate-float" style={{
        animationDelay: '3s'
      }}></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className={`w-full lg:w-3/5 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <h2 className="text-4xl font-bold mb-6 relative">
              <span className="relative inline-block after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-1 after:bg-gradient-to-r after:from-pink-500 after:to-pink-400 after:transition-all after:duration-700 hover:after:w-full bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
                {countryName} Branch Registration
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-pink-400 mb-8 transition-all duration-500 hover:w-32"></div>
            <p className="text-gray-300 mb-8 leading-relaxed">
              {countryDescription}
            </p>
            <div className="flex flex-wrap gap-3">
              {countryTags.map((tag, index) => (
                <span 
                  key={tag} 
                  className={`px-4 py-1 rounded-full bg-gradient-to-r from-pink-500/20 to-pink-500/30 text-pink-500 text-sm font-medium transition-all duration-300 hover:from-pink-500 hover:to-pink-600 hover:text-white cursor-default transform hover:-translate-y-1 hover:shadow-md hover:shadow-pink-500/20 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`} 
                  style={{
                    transitionDelay: `${index * 100 + 500}ms`
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
          
          <div className={`w-full lg:w-2/5 relative transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
            <div className="relative overflow-hidden rounded-xl group perspective shadow-xl shadow-pink-500/10 hover:shadow-pink-500/20 transition-all duration-500">
              <div className={`transition-all duration-700 transform ${isHovered ? 'scale-105 rotate-1' : 'scale-100 rotate-0'}`}>
                <img src={countryImage} alt={`Beautiful ${countryName} landscape`} className="rounded-xl w-full h-auto" />
                {/* Add a subtle overlay */}
                <div className={`absolute inset-0 bg-gradient-to-t from-[#0c0a20]/30 via-transparent to-transparent rounded-xl transition-opacity duration-500 ${isHovered ? 'opacity-100' : 'opacity-0'}`}></div>
              </div>
              <div className={`absolute top-4 right-4 px-4 py-1 rounded-full bg-gradient-to-r from-pink-500 to-pink-600 text-white text-sm font-medium shadow-lg transition-all duration-500 ${isHovered ? 'translate-x-0 opacity-100' : 'translate-x-2 opacity-90'}`}>
                Digital-first
              </div>
              <div className={`absolute -bottom-4 left-8 px-4 py-1 rounded-full bg-gradient-to-r from-[#6366f1] to-[#8083f3] text-white text-sm font-medium shadow-lg transition-all duration-500 ${isHovered ? 'translate-y-0 opacity-100' : 'translate-y-1 opacity-90'}`}>
                EU Presence
              </div>
              {/* Enhanced interactive glow effect */}
              <div className={`absolute inset-0 bg-gradient-to-tr from-pink-500/20 to-indigo-500/20 opacity-0 transition-opacity duration-500 rounded-xl ${isHovered ? 'opacity-100' : ''}`}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};