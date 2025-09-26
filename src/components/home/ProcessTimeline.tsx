import { useState } from 'react';
import { ClockIcon, CheckIcon, ArrowRightIcon, BuildingIcon, GlobeIcon, BookOpenIcon, BoxIcon } from 'lucide-react';
import { motion } from 'framer-motion';
  import { Link } from 'react-router-dom';
const containerVariants = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2
    }
  }
};
const itemVariants = {
  hidden: {
    opacity: 0,
    y: 20
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.4, 0, 0.2, 1]
    }
  }
};
export function ProcessTimeline() {
  const [activeStep, setActiveStep] = useState<number | null>(null);
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);
  const steps = [{
    title: 'Planning',
    description: 'Market analysis and business planning',
    time: '1-2 days',
    icon: BookOpenIcon,
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    details: ['Market analysis', 'Legal requirements review', 'Cost planning', 'Business strategy'],
    metrics: {
      success: '98%',
      timeframe: '24h',
      support: '24/7'
    }
  }, {
    title: 'Registration',
    description: 'Company registration and legal setup',
    time: '2-3 days',
    icon: BuildingIcon,
    image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    details: ['Company structure setup', 'Registration documents', 'Legal compliance setup', 'Legal framework setup'],
    metrics: {
      success: '100%',
      timeframe: '48h',
      support: 'Local'
    }
  }, {
    title: 'Banking',
    description: 'Business banking and financial setup',
    time: '3-4 days',
    icon: BoxIcon,
    image: 'https://images.unsplash.com/photo-1601597111158-2fceff292cdc?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    details: ['Business account setup', 'Payment systems', 'Tax registration', 'Financial compliance'],
    metrics: {
      success: '96%',
      timeframe: '72h',
      support: 'Expert'
    }
  }, {
    title: 'Launch',
    description: 'Business launch and ongoing support',
    time: '1-2 days',
    icon: GlobeIcon,
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    details: ['System setup', 'Team setup', 'Vendor setup', 'Business support'],
    metrics: {
      success: '95%',
      timeframe: '24h',
      support: 'Ongoing'
    }
  }];
  return <motion.section className="py-20 bg-[#0A0826] relative overflow-hidden" initial="hidden" whileInView="visible" viewport={{
    once: true,
    margin: '-100px'
  }} variants={containerVariants}>
      {/* Enhanced background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-1/2 h-1/2 bg-[#EA3A70]/10 rounded-full blur-[100px] animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-1/2 h-1/2 bg-[#4A2D80]/10 rounded-full blur-[100px] animate-pulse delay-700"></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Enhanced header section */}
        <motion.div className="text-center mb-16" variants={itemVariants}>
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-[#EA3A70]/10 border border-[#EA3A70]/20 mb-4 transform hover:scale-105 transition-all duration-300 backdrop-blur-sm">
            <GlobeIcon className="h-4 w-4 text-[#EA3A70] mr-2" />
            <span className="text-[#EA3A70] font-medium">
              How It Works
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Start Your Business in Europe
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We handle registration, compliance, and banking so you can focus on your business.
          </p>
        </motion.div>
        {/* Horizontal Timeline */}
        <motion.div className="relative" variants={containerVariants}>
          {/* Horizontal connecting line */}
          <div className="absolute top-16 left-0 right-0 h-0.5 bg-gradient-to-r from-[#EA3A70]/30 via-[#EA3A70]/50 to-[#EA3A70]/30 hidden lg:block"></div>
          
          {/* Steps in horizontal layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {steps.map((step, index) => {
              const isActive = activeStep === index;
              const isHovered = hoveredStep === index;
              const isCompleted = activeStep !== null && index < activeStep;
              const showDetails = isHovered; // Show details only on hover
              
              return (
                <motion.div 
                  key={index} 
                  variants={itemVariants}
                  className="relative group cursor-pointer"
                  onClick={() => setActiveStep(index)}
                  onMouseEnter={() => setHoveredStep(index)}
                  onMouseLeave={() => setHoveredStep(null)}
                >
                  {/* Step card */}
                  <div className={`relative bg-[#1B1537]/80 backdrop-blur-sm rounded-xl border-2 transition-all duration-500 transform hover:scale-105 min-h-[280px] flex flex-col
                      ${isActive ? 'border-[#EA3A70]/50 shadow-lg shadow-[#EA3A70]/20' : 
                        isHovered ? 'border-[#EA3A70]/40 shadow-lg shadow-[#EA3A70]/10' :
                        'border-[#2D2755] hover:border-[#EA3A70]/30'}`}>
                    
                    {/* Step number circle */}
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className={`h-8 w-8 rounded-full flex items-center justify-center z-10 transition-all duration-500
                          ${isActive ? 'bg-[#EA3A70] shadow-lg shadow-[#EA3A70]/30' : 
                            isHovered ? 'bg-[#EA3A70]/80 shadow-lg shadow-[#EA3A70]/20' :
                            isCompleted ? 'bg-[#EA3A70]/60' :
                            'bg-[#2D2755] group-hover:bg-[#EA3A70]/80'}`}>
                        {isCompleted ? (
                          <CheckIcon className="h-4 w-4 text-white" />
                        ) : (
                          <span className="text-white font-bold text-sm">{index + 1}</span>
                        )}
                      </div>
                    </div>
                    
                    <div className="p-6 pt-8 flex-1 flex flex-col">
                      {/* Icon */}
                      <div className="flex justify-center mb-4">
                        <div className={`p-3 rounded-lg transition-all duration-500
                            ${isActive ? 'bg-[#EA3A70]/20' : 
                              isHovered ? 'bg-[#EA3A70]/15' :
                              'bg-[#2D2755]/50 group-hover:bg-[#EA3A70]/10'}`}>
                          <step.icon className={`h-6 w-6 transition-colors duration-500
                              ${isActive ? 'text-[#EA3A70]' : 
                                isHovered ? 'text-[#EA3A70]' :
                                'text-gray-400 group-hover:text-[#EA3A70]'}`} />
                        </div>
                      </div>
                      
                      {/* Title */}
                      <h3 className={`text-lg font-bold text-center mb-2 transition-colors duration-500
                          ${isActive ? 'text-white' : 
                            isHovered ? 'text-white' :
                            'text-gray-300 group-hover:text-white'}`}>
                        {step.title}
                      </h3>
                      
                      {/* Description */}
                      <p className="text-sm text-gray-400 text-center mb-4 leading-relaxed">
                        {step.description}
                      </p>
                      
                      {/* Duration */}
                      <div className="flex items-center justify-center text-[#EA3A70] text-sm font-medium mb-4">
                        <ClockIcon className="h-4 w-4 mr-1" />
                        {step.time}
                      </div>
                      
                      {/* Detailed information on hover/active */}
                      {showDetails && (
                        <motion.div 
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="space-y-4 mt-auto"
                        >
                          {/* Metrics */}
                          <div className="grid grid-cols-3 gap-2">
                            <div className="bg-[#2D2755]/50 rounded-lg p-2 text-center">
                              <div className="text-[#EA3A70] font-bold text-xs">
                                {step.metrics.success}
                              </div>
                              <div className="text-gray-400 text-xs">
                                Success
                              </div>
                            </div>
                            <div className="bg-[#2D2755]/50 rounded-lg p-2 text-center">
                              <div className="text-[#EA3A70] font-bold text-xs">
                                {step.metrics.timeframe}
                              </div>
                              <div className="text-gray-400 text-xs">
                                Processing
                              </div>
                            </div>
                            <div className="bg-[#2D2755]/50 rounded-lg p-2 text-center">
                              <div className="text-[#EA3A70] font-bold text-xs">
                                {step.metrics.support}
                              </div>
                              <div className="text-gray-400 text-xs">
                                Support
                              </div>
                            </div>
                          </div>
                          
                          {/* Key details */}
                          <div className="space-y-2">
                            {step.details.slice(0, 3).map((detail, i) => (
                              <div key={i} className="flex items-center text-gray-300">
                                <CheckIcon className="h-3 w-3 text-[#EA3A70] mr-2 flex-shrink-0" />
                                <span className="text-xs">{detail}</span>
                              </div>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
        
      </div>
    </motion.section>;
}