import React, { Children } from 'react';
import { BuildingIcon, ScaleIcon, FileTextIcon, BoxIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
// Animation variants
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
      duration: 0.5,
      ease: [0.4, 0, 0.2, 1]
    }
  }
};
const titleVariants = {
  hidden: {
    opacity: 0,
    y: -20
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
export function ServicesGrid() {
  const services = [{
    icon: BuildingIcon,
    title: 'Company Formation',
    description: 'Company registration across Europe',
    link: '/services/company-formation'
  }, {
    icon: BoxIcon,
    title: 'Banking Services',
    description: 'Business account setup and banking',
    link: '/services'
  }, {
    icon: ScaleIcon,
    title: 'Legal Services',
    description: 'Legal support and compliance',
    link: '/services/legal'
  }, {
    icon: FileTextIcon,
    title: 'Tax & Accounting',
    description: 'Accounting and tax management',
    link: '/services/accounting'
  }];
  return <motion.section className="py-20 bg-[#0F0B1F]" initial="hidden" whileInView="visible" viewport={{
    once: true,
    margin: '-100px'
  }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div className="text-center mb-8 sm:mb-12" variants={titleVariants}>
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3 sm:mb-4">Our Services</h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
            Business services for starting and running your company in Europe
          </p>
        </motion.div>
        <motion.div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8" variants={containerVariants}>
          {services.map((service, index) => <motion.div key={index} variants={itemVariants} className="will-change-transform">
              <Link to={service.link} className="block bg-[#1B1537] rounded-xl p-4 sm:p-6 border border-[#2D2755] hover:border-[#EA3A70] transition-all duration-300 hover:shadow-lg hover:shadow-[#EA3A70]/10 transform hover:-translate-y-1">
                <div className="bg-[#EA3A70]/10 w-10 h-10 sm:w-12 sm:h-12 rounded-lg flex items-center justify-center mb-4 sm:mb-6">
                  <service.icon className="h-5 w-5 sm:h-6 sm:w-6 text-[#EA3A70]" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-300 text-sm sm:text-base">{service.description}</p>
              </Link>
            </motion.div>)}
        </motion.div>
      </div>
    </motion.section>;
}