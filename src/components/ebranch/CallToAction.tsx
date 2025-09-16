import React, { Children } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle } from 'lucide-react'
const containerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}
const itemVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.4, 0, 0.2, 1],
    },
  },
}
export function CallToAction() {
  const benefits = [
    'Integrate all essential business functions into one intelligent platform',
    'Launch or expand across Europe in just 48 hours',
    'Reduce administrative costs by over 80% while gaining complete visibility',
  ]
  return (
    <motion.section
      className="py-20 relative"
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
      }}
      variants={containerVariants}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="bg-gradient-to-r from-[#EA3A70]/20 to-indigo-900/20 rounded-xl p-12 border border-indigo-500/30 text-center"
          variants={itemVariants}
        >
          <h2 className="text-3xl font-bold text-white mb-8">
            Elevate Your European Business Operations
          </h2>
          <div className="max-w-3xl mx-auto mb-10">
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start justify-center">
                  <CheckCircle className="h-6 w-6 text-[#EA3A70] mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-xl text-white text-left">
                    {benefit}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <button className="px-8 py-4 bg-[#EA3A70] text-white rounded-lg hover:bg-[#EA3A70]/90 transition-colors flex items-center font-medium text-lg mx-auto">
            Begin Your eBranch Journey
            <ArrowRight className="h-5 w-5 ml-2" />
          </button>
        </motion.div>
      </div>
    </motion.section>
  )
}
