import React, { Children } from 'react'
import { motion } from 'framer-motion'
import { Database, Network, CheckCircle, ArrowRight } from 'lucide-react'
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
export function IntegrationLayer() {
  const benefits = [
    'Your terms and conditions reflect your actual operations',
    'Your financial forecasts align with your marketing strategy',
    'Your compliance approach matches your specific business model',
    'Your growth initiatives respect your legal and financial parameters',
  ]
  const integrations = [
    {
      title: 'Company Formation + Tax Filing',
      description:
        'Immediately establishes all necessary tax registrations as part of your formation process',
    },
    {
      title: 'Mailbox + Legal',
      description:
        'Automatically extracts key information from correspondence to update your legal documents',
    },
    {
      title: 'Accounting + Corporate Secretary',
      description:
        'Ensures financial statements perfectly align with board reports and statutory filings',
    },
    {
      title: 'Financial + Marketing',
      description:
        'Optimizes marketing expenditures based on product sales reports',
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
        <motion.div className="mb-16" variants={itemVariants}>
          <h2 className="text-3xl font-bold text-white mb-6 text-center">
            The Intelligent Integration Layer
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8 text-center">
            The true power of eBranch comes from how it intelligently integrates
            all these solutions that are traditionally provided by separate,
            disconnected services.
          </p>
          <div className="bg-[#1B1537]/80 backdrop-blur-sm rounded-xl p-8 border border-[#2D2755] mb-12">
            <div className="flex flex-col md:flex-row items-center mb-8">
              <div className="p-4 bg-[#2D2755]/50 rounded-full mb-6 md:mb-0 md:mr-6">
                <Database className="h-10 w-10 text-[#EA3A70]" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2 text-center md:text-left">
                  Data Room: The Central Intelligence Hub
                </h3>
                <p className="text-gray-300">
                  Our Data Room serves as the central intelligence hub where all
                  business documents are processed, analyzed, and integrated
                  into your company's knowledge base. This creates a single
                  source of truth that powers every function across the
                  platform.
                </p>
              </div>
            </div>
            <h4 className="text-lg font-medium text-white mb-4">
              This unified approach ensures coherence across all aspects of your
              business:
            </h4>
            <ul className="space-y-3 mb-8">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-[#EA3A70] mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300">{benefit}</span>
                </li>
              ))}
            </ul>
            <p className="text-gray-300">
              The result is a business operation where insights flow naturally
              between functions—eliminating the disconnected advice that comes
              from isolated service providers.
            </p>
          </div>
          <div className="text-center mb-12">
            <button className="px-6 py-3 bg-[#1B1537]/80 backdrop-blur-sm border border-[#2D2755] text-white rounded-lg hover:bg-[#2D2755]/50 hover:border-[#EA3A70]/30 transition-colors flex items-center font-medium mx-auto">
              See How It Works
              <ArrowRight className="h-4 w-4 ml-2" />
            </button>
          </div>
        </motion.div>
        <motion.div variants={itemVariants}>
          <h2 className="text-3xl font-bold text-white mb-6 text-center">
            Interconnected Intelligence
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8 text-center">
            While each solution in our suite delivers exceptional standalone
            value, their power multiplies when working together through eBranch:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {integrations.map((integration, index) => (
              <div
                key={index}
                className="bg-[#1B1537]/80 backdrop-blur-sm rounded-xl p-6 border border-[#2D2755] hover:border-[#EA3A70]/30 transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  <Network className="h-6 w-6 text-[#EA3A70] mr-3" />
                  <h3 className="text-lg font-bold text-white">
                    {integration.title}
                  </h3>
                </div>
                <p className="text-gray-300">{integration.description}</p>
              </div>
            ))}
          </div>
          <div className="bg-[#EA3A70]/10 backdrop-blur-sm rounded-xl p-8 border border-[#EA3A70]/30 text-center">
            <p className="text-xl text-white">
              The interconnected intelligence of eBranch eliminates the
              coordination overhead and inconsistencies that plague businesses
              using multiple service providers.
            </p>
            <p className="text-gray-300 mt-4">And endless other variations!</p>
          </div>
        </motion.div>
      </div>
    </motion.section>
  )
}
