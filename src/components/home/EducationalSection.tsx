import React, { Children } from 'react';
import { BookOpenIcon, GlobeIcon } from 'lucide-react';
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
      staggerChildren: 0.15,
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
export function EducationalSection() {
  const resources = [{
    title: 'Company Formation Guide',
    description: 'Learn about different business structures and registration processes',
    link: '/guides/company-formation'
  }, {
    title: 'Tax Compliance',
    description: 'Understanding tax obligations for international businesses',
    link: '/guides/tax-compliance'
  }, {
    title: 'Banking Solutions',
    description: 'Guide to international business banking and financial services',
    link: '/guides/banking'
  }];
  return <motion.section className="py-20 bg-[#0A0826]" initial="hidden" whileInView="visible" viewport={{
    once: true,
    margin: '-100px'
  }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div className="text-center mb-12" variants={titleVariants}>
          <h2 className="text-3xl font-bold text-white mb-4">
            Resources & Guides
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Expert insights to help you navigate international business
          </p>
        </motion.div>
        <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-8" variants={containerVariants}>
          {resources.map((resource, index) => <motion.div key={index} variants={itemVariants} className="will-change-transform">
              <Link to={resource.link} className="block bg-[#1B1537] rounded-xl p-6 border border-[#2D2755] hover:border-[#EA3A70] transition-all duration-300 hover:shadow-lg hover:shadow-[#EA3A70]/10 transform hover:-translate-y-1">
                <div className="bg-[#EA3A70]/10 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                  <BookOpenIcon className="h-6 w-6 text-[#EA3A70]" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {resource.title}
                </h3>
                <p className="text-gray-300">{resource.description}</p>
              </Link>
            </motion.div>)}
        </motion.div>
      </div>
    </motion.section>;
}