import React, { Children } from 'react'
import { motion } from 'framer-motion'
import {
  GlobeIcon,
  Workflow,
  BrainCircuit,
  BarChart4,
  Building2,
  Lightbulb,
} from 'lucide-react'
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
export function MiddlemenRevolution() {
  const benefits = [
    {
      title: 'Democratizing access',
      description: 'Democratizing access to European business infrastructure',
      icon: GlobeIcon,
    },
    {
      title: 'Automating compliance',
      description:
        'Automating mundane compliance tasks across multiple jurisdictions',
      icon: Workflow,
    },
    {
      title: 'Sophisticated tools',
      description:
        'Making sophisticated business tools accessible to companies of all sizes',
      icon: BrainCircuit,
    },
    {
      title: 'Integrated solutions',
      description:
        'Building integrated solutions that eliminate administrative friction',
      icon: BarChart4,
    },
    {
      title: 'Opportunity delivery',
      description:
        'Delivering opportunity to businesses traditionally excluded by high service costs',
      icon: Building2,
    },
    {
      title: 'Direct knowledge access',
      description:
        'Providing direct access to essential business knowledge without gatekeepers',
      icon: Lightbulb,
    },
  ]
  return (
    <motion.section
      className="py-20 relative"
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        margin: '-100px',
      }}
      variants={containerVariants}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div className="text-center mb-16" variants={itemVariants}>
          <h2 className="text-3xl font-bold text-white mb-6">
            The Middlemen Revolution you have been waiting for
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
            eBranch has become the go-to platform for entrepreneurs expanding
            across Europe, with thousands of businesses from over 30 countries
            managing their operations through our system.
          </p>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            But eBranch is much more than just an entity management portal. Our
            platform is dedicated to solving the hardest problems European
            businesses face:
          </p>
        </motion.div>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
          variants={containerVariants}
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              className="bg-[#1B1537]/80 backdrop-blur-sm rounded-xl p-6 border border-[#2D2755] hover:border-[#EA3A70]/30 transition-all duration-300"
              variants={itemVariants}
            >
              <div className="p-3 bg-[#2D2755]/50 rounded-lg inline-block mb-4">
                <benefit.icon className="h-6 w-6 text-[#EA3A70]" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">
                {benefit.title}
              </h3>
              <p className="text-gray-300">{benefit.description}</p>
            </motion.div>
          ))}
        </motion.div>
        <motion.div
          className="bg-[#1B1537]/80 backdrop-blur-sm rounded-xl p-8 border border-[#EA3A70]/30 text-center"
          variants={itemVariants}
        >
          <p className="text-xl text-white font-medium">
            All powered by our team of specialized AI agents that outperform
            traditional service providers at a fraction of the cost.
          </p>
        </motion.div>
      </div>
    </motion.section>
  )
}
