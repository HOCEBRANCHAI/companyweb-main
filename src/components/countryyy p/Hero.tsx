import React, { useEffect, useState } from 'react';
import { ChevronDownIcon } from 'lucide-react';

interface HeroProps {
  countryName?: string;
  cityName?: string;
  description?: string;
  backgroundImage?: string;
}

export const Hero: React.FC<HeroProps> = ({ 
  countryName = 'Europe',
  cityName = 'European Capital',
  description = 'Launch your business in Europe with our full-service branch registration package',
  backgroundImage = 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80'
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    // Simulate a slight delay for the image to create a staggered animation effect
    const timer = setTimeout(() => {
      setImageLoaded(true);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  const scrollToContent = () => {
    const pricingSection = document.getElementById('pricing-options');
    if (pricingSection) {
      pricingSection.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="relative w-full h-screen bg-[#0c0a20] overflow-hidden">
      {/* Reduced gradient overlay opacity to make background more visible */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0c0a20]/50 via-[#0c0a20]/30 to-transparent z-10"></div>
      
      <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
        <div className={`relative w-full h-full transform transition-all duration-1500 ${imageLoaded ? 'scale-100 opacity-100' : 'scale-110 opacity-0'}`}>
          <img 
            src={backgroundImage} 
            alt={`${cityName} landscape with historic architecture`} 
            className="w-full h-full object-cover animate-slow-zoom brightness-110 contrast-105" 
            onLoad={() => setImageLoaded(true)} 
          />
        </div>
      </div>
      
      <div className={`absolute bottom-16 left-8 md:left-16 max-w-xl text-left z-20 transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
        <h1 className="text-5xl md:text-6xl font-bold mb-4 text-white drop-shadow-lg">
          <span className="inline-block transform transition-all duration-700 hover:scale-105 origin-left bg-clip-text text-transparent bg-gradient-to-r from-white to-white/90">
            {countryName}
          </span>{' '}
          <span className="inline-block transform transition-all duration-700 delay-100 hover:scale-105 origin-left bg-clip-text text-transparent bg-gradient-to-r from-white to-white/90">
            Branch
          </span>{' '}
          <span className="inline-block transform transition-all duration-700 delay-200 hover:scale-105 origin-left bg-clip-text text-transparent bg-gradient-to-r from-white to-white/90">
            Registration
          </span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-white drop-shadow-lg transition-all duration-1000 delay-300">
          {description}
        </p>
        <button className="relative overflow-hidden bg-pink-500 hover:bg-pink-600 text-white font-bold py-3 px-8 rounded-md text-lg transition-all duration-300 group shadow-lg hover:shadow-pink-500/50">
          <span className="relative z-10 flex items-center">
            Get Started Today{' '}
            <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </span>
          <span className="absolute inset-0 bg-gradient-to-r from-pink-600 to-pink-500 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></span>
        </button>
      </div>
      
      <button 
        onClick={scrollToContent} 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce z-20 transition-all duration-300 hover:opacity-80" 
        aria-label="Scroll down"
      >
        <div className="relative p-2 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-colors duration-300">
          <ChevronDownIcon className="w-10 h-10 text-white drop-shadow-lg" />
          <div className="absolute inset-0 rounded-full bg-white/10 animate-ping"></div>
        </div>
      </button>
    </div>
  );
};