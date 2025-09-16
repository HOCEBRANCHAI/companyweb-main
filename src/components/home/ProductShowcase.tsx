import React, { useState, Children } from 'react';
import { GlobeIcon, CheckIcon, ArrowRightIcon, BarChart2Icon, ShieldCheckIcon, BuildingIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
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
export function ProductShowcase() {
  const [activeProduct, setActiveProduct] = useState(0);
  const products = [{
    title: 'Global Business Formation',
    description: 'Streamlined company registration across all 27 EU countries',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
    features: ['48-hour company setup', 'All legal paperwork handled', 'Multi-jurisdiction support', 'Digital registration process'],
    stats: {
      companies: '1,200+',
      countries: '27',
      satisfaction: '99%'
    },
    icon: BuildingIcon
  }, {
    title: 'Corporate Banking Solutions',
    description: 'Comprehensive banking setup and management for international businesses',
    image: 'https://images.unsplash.com/photo-1560472355-536de3962603?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
    features: ['Multi-currency accounts', 'Global payment solutions', 'Corporate credit cards', 'Digital banking platform'],
    stats: {
      transactions: '€500M+',
      banks: '15+',
      coverage: '100%'
    },
    icon: BarChart2Icon
  }, {
    title: 'Compliance & Legal Services',
    description: 'End-to-end compliance management and legal support',
    image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
    features: ['Automated compliance monitoring', 'Legal document management', 'Regulatory updates', 'Expert legal support'],
    stats: {
      compliance: '100%',
      documents: '10,000+',
      support: '24/7'
    },
    icon: ShieldCheckIcon
  }];
  return <motion.section className="py-20 bg-[#0A0826] relative overflow-hidden" initial="hidden" whileInView="visible" viewport={{
    once: true,
    margin: '-100px'
  }} variants={containerVariants}>
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-1/2 h-1/2 bg-[#EA3A70]/10 rounded-full blur-[100px] -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-1/4 w-1/2 h-1/2 bg-[#EA3A70]/5 rounded-full blur-[100px] translate-y-1/2"></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div className="text-center mb-8 sm:mb-12" variants={itemVariants}>
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3 sm:mb-4">
            Enterprise-Grade Business Solutions
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive services powering your international business
            expansion
          </p>
        </motion.div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          {/* Product Image & Stats */}
          <motion.div className="relative" variants={itemVariants}>
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] group">
              <img src={products[activeProduct].image} alt={products[activeProduct].title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F0B1F] via-transparent to-transparent"></div>
              {/* Stats Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-6">
                <div className="grid grid-cols-3 gap-2 sm:gap-4">
                  {Object.entries(products[activeProduct].stats).map(([key, value]) => <div key={key} className="bg-[#1B1537]/80 backdrop-blur-sm rounded-lg sm:rounded-xl p-2 sm:p-4 border border-[#2D2755]">
                        <div className="text-[#EA3A70] font-bold text-lg sm:text-xl">
                          {value}
                        </div>
                        <div className="text-gray-300 text-xs sm:text-sm capitalize">
                          {key}
                        </div>
                      </div>)}
                </div>
              </div>
            </div>
          </motion.div>
          {/* Product Details */}
          <motion.div className="space-y-4 sm:space-y-6" variants={containerVariants}>
            {products.map((product, index) => <motion.div key={index} variants={itemVariants} className={`bg-[#1B1537] rounded-xl p-4 sm:p-6 border transition-all duration-300 cursor-pointer
                  ${activeProduct === index ? 'border-[#EA3A70] shadow-lg shadow-[#EA3A70]/5' : 'border-[#2D2755] hover:border-[#EA3A70]/30'}`} onClick={() => setActiveProduct(index)}>
                <div className="flex items-start">
                  <div className="bg-[#EA3A70]/10 w-10 h-10 sm:w-12 sm:h-12 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                    <product.icon className="h-5 w-5 sm:h-6 sm:w-6 text-[#EA3A70]" />
                  </div>
                  <div className="flex-1 ml-3 sm:ml-4">
                    <h3 className="text-lg sm:text-xl font-bold text-white mb-1 sm:mb-2">
                      {product.title}
                    </h3>
                    <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base">{product.description}</p>
                    <div className="space-y-1 sm:space-y-2">
                      {product.features.map((feature, i) => <div key={i} className="flex items-center text-gray-300 text-sm sm:text-base">
                          <CheckIcon className="h-4 w-4 sm:h-5 sm:w-5 text-[#EA3A70] mr-2 sm:mr-3" />
                          {feature}
                        </div>)}
                    </div>
                    {activeProduct === index && <div className="mt-6 flex justify-between items-center pt-4 border-t border-[#2D2755]">
                        <Link to={`/services/${product.title.toLowerCase().replace(/\s+/g, '-')}`} className="text-white hover:text-[#EA3A70] transition-colors flex items-center">
                          Learn more
                          <ArrowRightIcon className="h-4 w-4 ml-2" />
                        </Link>
                        <div className="flex items-center">
                          <GlobeIcon className="h-4 w-4 text-[#EA3A70] mr-2" />
                          <span className="text-sm text-gray-300">
                            Available in all EU countries
                          </span>
                        </div>
                      </div>}
                  </div>
                </div>
              </motion.div>)}
          </motion.div>
        </div>
      </div>
    </motion.section>;
}