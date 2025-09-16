import React, { useEffect, useState, Children } from 'react';
import { StarIcon, QuoteIcon, BuildingIcon, GlobeIcon, BarChart2Icon, ChevronRightIcon, ChevronLeftIcon } from 'lucide-react';
import { motion } from 'framer-motion';
const containerVariants = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
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
export function TrustSection() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const testimonials = [{
    name: 'Sarah Chen',
    role: 'CEO',
    company: 'TechGrowth Solutions',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80',
    companyLogo: 'https://images.unsplash.com/photo-1614680376573-df3480f0c6ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80',
    quote: 'House of Companies transformed our European expansion journey. Their AI-powered platform and expert support made complex processes seamless.',
    rating: 5,
    location: 'Singapore',
    expanded: 'United Kingdom, Netherlands, Germany'
  }, {
    name: 'David Miller',
    role: 'Founder',
    company: 'GlobalTrade Inc',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80',
    companyLogo: 'https://images.unsplash.com/photo-1614680376573-df3480f0c6ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80',
    quote: 'The level of automation and efficiency in their platform is unmatched. We successfully established operations in 3 EU countries within weeks.',
    rating: 5,
    location: 'United States',
    expanded: 'France, Spain, Italy'
  }, {
    name: 'Emma Thompson',
    role: 'Operations Director',
    company: 'EuroTech Ventures',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80',
    companyLogo: 'https://images.unsplash.com/photo-1614680376573-df3480f0c6ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80',
    quote: 'Their compliance management system gives us peace of mind. Real-time monitoring and proactive updates keep us ahead of regulatory changes.',
    rating: 5,
    location: 'Australia',
    expanded: 'Ireland, Belgium, Luxembourg'
  }];
  const stats = [{
    number: '1,200+',
    label: 'Companies Served',
    icon: BuildingIcon
  }, {
    number: '27',
    label: 'EU Countries',
    icon: GlobeIcon
  }, {
    number: '€500M+',
    label: 'Transactions Processed',
    icon: BarChart2Icon
  }];
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTestimonial(current => (current + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const handleNextTestimonial = () => {
    setActiveTestimonial((current) => (current + 1) % testimonials.length);
  };

  const handlePrevTestimonial = () => {
    setActiveTestimonial((current) => (current - 1 + testimonials.length) % testimonials.length);
  };

  return <motion.section className="py-20 bg-[#0A0826] relative overflow-hidden" initial="hidden" whileInView="visible" viewport={{
    once: true,
    margin: '-100px'
  }} variants={containerVariants}>
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-1/4 w-1/2 h-1/2 bg-[#EA3A70]/10 rounded-full blur-[100px] -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-1/4 w-1/2 h-1/2 bg-[#EA3A70]/5 rounded-full blur-[100px] translate-y-1/2"></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div className="text-center mb-12 animate-slide-up" variants={itemVariants}>
          <h2 className="text-3xl font-bold text-white mb-4">
            Trusted by Global Business Leaders
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Join thousands of companies who trust us with their international
            expansion
          </p>
        </motion.div>
        {/* Stats Section - Enhanced with animations */}
        <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16" variants={containerVariants}>
          {stats.map((stat, index) => <motion.div key={index} variants={itemVariants} className="bg-[#1B1537] rounded-xl p-6 border border-[#2D2755] card-hover animate-fade-scale" style={{
          animationDelay: `${index * 0.1}s`
        }}>
              <div className="flex items-center mb-4">
                <div className="bg-[#EA3A70]/10 w-12 h-12 rounded-lg flex items-center justify-center">
                  <stat.icon className="h-6 w-6 text-[#EA3A70]" />
                </div>
                <div className="ml-4">
                  <div className="text-2xl font-bold text-white">
                    {stat.number}
                  </div>
                  <div className="text-gray-300">{stat.label}</div>
                </div>
              </div>
              <div className="h-2 bg-[#2D2755] rounded-full overflow-hidden">
                <div className="h-full bg-[#EA3A70] rounded-full transition-all duration-1000" style={{
              width: `${(index + 1) / stats.length * 100}%`
            }}></div>
              </div>
            </motion.div>)}
        </motion.div>
        {/* Testimonials Section - Enhanced with animations */}
        <div className="relative flex flex-col items-center">
          {/* Main Testimonial */}
          <motion.div 
            key={activeTestimonial}
            className="bg-[#1B1537] rounded-xl border border-[#2D2755] p-8 relative w-full lg:w-3/4 xl:w-2/3 animate-fade-scale hover-lift min-h-[350px]"
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            <QuoteIcon className="absolute top-6 right-6 h-8 w-8 text-[#EA3A70]/20" />
            <div className="flex items-center mb-6">
              <img src={testimonials[activeTestimonial].image} alt={testimonials[activeTestimonial].name} className="h-16 w-16 rounded-full object-cover border-2 border-[#2D2755]" />
              <div className="ml-4">
                <h3 className="text-white font-bold">
                  {testimonials[activeTestimonial].name}
                </h3>
                <p className="text-gray-300">
                  {testimonials[activeTestimonial].role} at{' '}
                  {testimonials[activeTestimonial].company}
                </p>
              </div>
            </div>
            <div className="mb-6">
              <p className="text-gray-300 text-lg italic">
                "{testimonials[activeTestimonial].quote}"
              </p>
            </div>
            <div className="flex items-center justify-between pt-6 border-t border-[#2D2755]">
              <div className="flex items-center">
                <GlobeIcon className="h-4 w-4 text-[#EA3A70] mr-2" />
                <span className="text-gray-300 text-sm">
                  Expanded from {testimonials[activeTestimonial].location} to{' '}
                  {testimonials[activeTestimonial].expanded}
                </span>
              </div>
              <div className="flex">
                {[...Array(testimonials[activeTestimonial].rating)].map((_, i) => <StarIcon key={i} className="h-4 w-4 text-yellow-500" />)}
              </div>
            </div>

            {/* Navigation Arrows on the card */}
            <button onClick={handlePrevTestimonial} className="absolute left-4 top-1/2 transform -translate-y-1/2 p-2 bg-[#1B1537]/50 rounded-full shadow-lg hover:bg-[#2D2755] transition-colors z-10">
              <ChevronLeftIcon className="h-6 w-6 text-white" />
            </button>
            <button onClick={handleNextTestimonial} className="absolute right-4 top-1/2 transform -translate-y-1/2 p-2 bg-[#1B1537]/50 rounded-full shadow-lg hover:bg-[#2D2755] transition-colors z-10">
              <ChevronRightIcon className="h-6 w-6 text-white" />
            </button>
          </motion.div>

          {/* Dot Indicators */}
          <div className="flex justify-center mt-8 space-x-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveTestimonial(index)}
                className={`h-3 w-3 rounded-full transition-all duration-300
                  ${activeTestimonial === index ? 'bg-[#EA3A70] w-5' : 'bg-[#2D2755] hover:bg-[#EA3A70]/50'}`}
              />
            ))}
          </div>
        </div>
      </div>
    </motion.section>;
}