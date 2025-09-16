import React, { useState, Children } from 'react'
import { motion } from 'framer-motion'
import {
  Building,
  MapPin,
  Receipt,
  FileText,
  BarChart3,
  Scale,
  Megaphone,
  ChevronDown,
  ChevronUp,
  CheckCircle,
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
export function KeyFeatures() {
  const [expandedFeature, setExpandedFeature] = useState(null)
  const toggleFeature = (index) => {
    if (expandedFeature === index) {
      setExpandedFeature(null)
    } else {
      setExpandedFeature(index)
    }
  }
  const features = [
    {
      title: 'Formation Agent',
      source: 'From our Company Formation solution',
      icon: Building,
      items: [
        'Complete company registration across any European jurisdiction',
        'Automated preparation of all required legal documentation',
        'Intelligent navigation of cross-border requirements',
        'Digital identity verification processes',
      ],
    },
    {
      title: 'Address & Document Agent',
      source: 'From our Mailbox and Document Management solutions',
      icon: MapPin,
      items: [
        'Prestigious business addresses with intelligent mail processing',
        'Document analysis, categorization, and knowledge extraction',
        'Multilingual translation and summarization',
        'Comprehensive digital archive with advanced retrieval',
        'AI Powered Voice Agent for phone answering and outreach campaigns',
        'Prepare shipments to government agencies, banks, and more, without touching a printer (or a stamp!)',
      ],
    },
    {
      title: 'Tax Compliance Agent',
      source: 'From our Tax Filing solution',
      icon: Receipt,
      items: [
        'Pan-European VAT registration and return preparation',
        'Proactive deadline monitoring and management',
        'Automated expense categorization and compliance checking',
        'Regulatory update implementation without delay',
      ],
    },
    {
      title: 'Corporate Governance Agent',
      source: 'From our Corporate Secretary solution',
      icon: FileText,
      items: [
        'Automated statutory compliance monitoring',
        'Board meeting management and documentation',
        'Regulatory filing preparation and submission',
        'Multi-jurisdictional requirement tracking',
      ],
    },
    {
      title: 'Financial Agent',
      source: 'From our Accounting solution',
      icon: BarChart3,
      items: [
        'Automated transaction categorization and reconciliation',
        'Real-time financial reporting and analysis',
        'Cash flow pattern recognition and forecasting',
        'Customized financial statement preparation',
      ],
    },
    {
      title: 'Legal Document Agent',
      source: 'From our Legal solution',
      icon: Scale,
      items: [
        'Intelligent legal document generation',
        'Cross-border compliance validation',
        'Plain language translation of legal concepts',
        'Contract analysis and risk identification',
      ],
    },
    {
      title: 'Marketing Agent',
      source: 'From our Marketing Services solution',
      icon: Megaphone,
      items: [
        'Personalized outreach campaign management',
        'Competitive intelligence gathering and analysis',
        'Multi-channel marketing coordination',
        'Performance tracking and strategy refinement',
      ],
    },
  ]
  return (
    <motion.section
      className="py-16 sm:py-20 relative bg-gradient-to-b from-[#0F0B1F] to-[#1B1537]"
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        margin: '-100px',
      }}
      variants={containerVariants}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div className="text-center mb-12 sm:mb-16" variants={itemVariants}>
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6">
            Compliance-to-Scale for entrepreneurs aspiring to get global
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-4xl mx-auto">
            eBranch integrates all our specialized solutions into a unified
            platform managed by intelligent AI agents:
          </p>
        </motion.div>
        <motion.div className="space-y-4 sm:space-y-6 mb-12 sm:mb-16" variants={containerVariants}>
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className={`bg-[#1B1537]/80 backdrop-blur-sm rounded-xl border ${expandedFeature === index ? 'border-[#EA3A70]/30' : 'border-[#2D2755]'} overflow-hidden transition-all duration-300`}
              variants={itemVariants}
            >
              <button
                className="w-full p-4 sm:p-6 flex items-center justify-between text-left"
                onClick={() => toggleFeature(index)}
              >
                <div className="flex items-center">
                  <div className="p-2 sm:p-3 bg-[#2D2755]/50 rounded-lg mr-3 sm:mr-4">
                    <feature.icon className="h-5 w-5 sm:h-6 sm:w-6 text-[#EA3A70]" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-white">
                      {feature.title}
                    </h3>
                    <p className="text-gray-400 text-xs sm:text-sm">{feature.source}</p>
                  </div>
                </div>
                <div>
                  {expandedFeature === index ? (
                    <ChevronUp className="h-4 w-4 sm:h-5 sm:w-5 text-[#EA3A70]" />
                  ) : (
                    <ChevronDown className="h-4 w-4 sm:h-5 sm:w-5 text-gray-400" />
                  )}
                </div>
              </button>
              {expandedFeature === index && (
                <div className="px-4 sm:px-6 pb-4 sm:pb-6 pt-2">
                  <ul className="space-y-2 sm:space-y-3">
                    {feature.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start">
                        <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-[#EA3A70] mr-2 sm:mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-sm sm:text-base text-gray-300">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  )
}
