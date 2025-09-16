import React, { useEffect, useState, Children } from 'react'
import {
  ArrowRightIcon,
  CheckCircleIcon,
  ClockIcon,
  CoinsIcon,
  FileTextIcon,
  ShieldIcon,
  BarChart3Icon,
} from 'lucide-react'
import { countries } from '../../constants/countries'
import { motion } from 'framer-motion'
const containerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
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
export function PathToIndependence() {
  const [selectedCountry, setSelectedCountry] = useState('nl')
  // Load selected country from localStorage on initial load
  useEffect(() => {
    const savedCountry = localStorage.getItem('preferredCountry')
    if (savedCountry && countries[savedCountry]) {
      setSelectedCountry(savedCountry)
    }
  }, [])
  // Get country name based on code
  const getCountryName = (code) => countries[code] || 'European'
  const images = {
    traditional:
      'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80',
    ebranch:
      'https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80',
    independence:
      'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80',
  }
  const steps = [
    {
      title: 'Traditional Approach',
      description: `Setting up and managing a business in ${getCountryName(selectedCountry)} traditionally requires multiple service providers, significant time investment, and high costs.`,
      metrics: [
        {
          label: 'Setup Time',
          value: '4-6 weeks',
        },
        {
          label: 'Monthly Cost',
          value: '€1,500+',
        },
        {
          label: 'Service Providers',
          value: '5-7 different providers',
        },
        {
          label: 'Admin Time',
          value: '15+ hours/week',
        },
      ],
      image:
        'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
      imageAlt: 'Traditional business management',
    },
    {
      title: 'eBranch Solution',
      description: `Our all-in-one platform streamlines your ${getCountryName(selectedCountry)} business operations with AI-powered tools and integrated services.`,
      metrics: [
        {
          label: 'Setup Time',
          value: '48 hours',
        },
        {
          label: 'Monthly Cost',
          value: '€199',
        },
        {
          label: 'Service Providers',
          value: '1 (House of Companies)',
        },
        {
          label: 'Admin Time',
          value: '2-3 hours/week',
        },
      ],
      image:
        'https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
      imageAlt: 'eBranch digital solution',
    },
    {
      title: 'Business Independence',
      description: `With eBranch, you gain full control and visibility over your ${getCountryName(selectedCountry)} business operations while maintaining compliance and efficiency.`,
      metrics: [
        {
          label: 'Control Level',
          value: '100% visibility',
        },
        {
          label: 'Compliance',
          value: 'Automated monitoring',
        },
        {
          label: 'Scalability',
          value: 'Unlimited growth potential',
        },
        {
          label: 'Business Focus',
          value: '90% more time on core business',
        },
      ],
      image:
        'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
      imageAlt: 'Business independence',
    },
  ]
  const timeMetrics = [
    {
      process: 'Company Registration',
      traditional: '3-4 weeks',
      ebranch: '48 hours',
      icon: FileTextIcon,
    },
    {
      process: 'VAT Registration',
      traditional: '2-3 weeks',
      ebranch: '3-5 days',
      icon: ShieldIcon,
    },
    {
      process: 'Bank Account Setup',
      traditional: '2-4 weeks',
      ebranch: '1 week',
      icon: CoinsIcon,
    },
    {
      process: 'Monthly Accounting',
      traditional: '8-10 hours',
      ebranch: '1-2 hours',
      icon: BarChart3Icon,
    },
    {
      process: 'Tax Filing',
      traditional: '5-8 hours',
      ebranch: '30 minutes',
      icon: FileTextIcon,
    },
  ]
  return (
    <motion.section
      className="py-20 relative bg-gradient-to-b from-[#0F0B1F] to-[#1B1537]"
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        margin: '-100px',
      }}
      variants={containerVariants}
    >
      <motion.div
        className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80')] opacity-5 bg-cover bg-center mix-blend-overlay"
        variants={containerVariants}
      ></motion.div>
      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative"
        variants={containerVariants}
      >
        <motion.div className="text-center mb-16" variants={itemVariants}>
          <h2 className="text-3xl font-bold text-white mb-4">
            Your Path to Business Independence
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            See how eBranch transforms your journey from traditional business
            management to true operational independence
          </p>
        </motion.div>
        <motion.div className="relative mb-20" variants={itemVariants}>
          {/* Timeline connector */}
          <motion.div
            className="absolute left-1/2 top-0 bottom-0 w-1 bg-[#2D2755] transform -translate-x-1/2 hidden md:block"
            variants={itemVariants}
          ></motion.div>
          {/* Steps */}
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="relative mb-16 last:mb-0"
              variants={itemVariants}
            >
              {/* Timeline dot */}
              <motion.div
                className="absolute left-1/2 top-0 w-8 h-8 bg-[#EA3A70] rounded-full transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center z-10 hidden md:flex"
                variants={itemVariants}
              >
                <span className="text-white font-bold">{index + 1}</span>
              </motion.div>
              <motion.div
                className={`grid grid-cols-1 md:grid-cols-2 gap-8 ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
                whileHover={{
                  scale: 1.02,
                  transition: {
                    duration: 0.3,
                  },
                }}
              >
                <div
                  className={`bg-[#1B1537]/80 backdrop-blur-sm rounded-xl p-6 border border-[#2D2755] ${index === 1 ? 'border-[#EA3A70]/30' : ''}`}
                >
                  <h3 className="text-2xl font-bold text-white mb-4">
                    {step.title}
                  </h3>
                  <p className="text-gray-300 mb-6">{step.description}</p>
                  <div className="grid grid-cols-2 gap-4">
                    {step.metrics.map((metric, idx) => (
                      <div
                        key={idx}
                        className="bg-[#2D2755]/30 rounded-lg p-3 border border-[#2D2755]"
                      >
                        <p className="text-gray-400 text-sm mb-1">
                          {metric.label}
                        </p>
                        <p
                          className={`text-lg font-medium ${index === 1 ? 'text-[#EA3A70]' : 'text-white'}`}
                        >
                          {metric.value}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="relative">
                  <div className="rounded-xl overflow-hidden border border-[#2D2755] h-full">
                    <img
                      src={step.image}
                      alt={step.imageAlt}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0F0B1F] via-transparent to-transparent"></div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
        <motion.div
          className="bg-[#1B1537]/80 backdrop-blur-sm rounded-xl border border-[#2D2755] overflow-hidden shadow-lg shadow-[#0F0B1F]/50 mb-16"
          variants={itemVariants}
        >
          <motion.div
            className="p-6 border-b border-[#2D2755]"
            variants={itemVariants}
          >
            <div className="flex items-center">
              <ClockIcon className="h-6 w-6 text-[#EA3A70] mr-3" />
              <h3 className="text-xl font-bold text-white">
                Time Savings with eBranch
              </h3>
            </div>
          </motion.div>
          <motion.div className="overflow-x-auto" variants={itemVariants}>
            <table className="w-full">
              <thead>
                <tr className="border-b border-[#2D2755]">
                  <th className="py-4 px-6 text-left text-white font-medium">
                    Business Process
                  </th>
                  <th className="py-4 px-6 text-center text-white font-medium">
                    Traditional Approach
                  </th>
                  <th className="py-4 px-6 text-center text-white font-medium bg-[#EA3A70]/10">
                    With eBranch
                  </th>
                </tr>
              </thead>
              <tbody>
                {timeMetrics.map((item, index) => (
                  <tr
                    key={index}
                    className={
                      index !== timeMetrics.length - 1
                        ? 'border-b border-[#2D2755]'
                        : ''
                    }
                  >
                    <td className="py-4 px-6">
                      <div className="flex items-center">
                        <div className="p-2 rounded-lg bg-[#2D2755]/50 mr-3">
                          <item.icon className="h-5 w-5 text-[#EA3A70]" />
                        </div>
                        <span className="text-white">{item.process}</span>
                      </div>
                    </td>
                    <td className="py-4 px-6 text-center text-gray-300">
                      {item.traditional}
                    </td>
                    <td className="py-4 px-6 text-center bg-[#EA3A70]/5 text-[#EA3A70] font-medium">
                      {item.ebranch}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        </motion.div>
        <motion.div className="text-center mt-16" variants={itemVariants}>
          <div className="bg-[#1B1537]/80 backdrop-blur-sm rounded-xl p-8 border border-[#2D2755] inline-block">
            <h3 className="text-2xl font-bold text-white mb-6">
              Ready to Transform Your Business Operations?
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center bg-[#2D2755]/50 rounded-lg px-4 py-2">
                <CheckCircleIcon className="h-5 w-5 text-[#EA3A70] mr-2" />
                <span className="text-white">
                  Save 90% of administrative time
                </span>
              </div>
              <div className="flex items-center bg-[#2D2755]/50 rounded-lg px-4 py-2">
                <CheckCircleIcon className="h-5 w-5 text-[#EA3A70] mr-2" />
                <span className="text-white">Reduce costs by 60%+</span>
              </div>
              <div className="flex items-center bg-[#2D2755]/50 rounded-lg px-4 py-2">
                <CheckCircleIcon className="h-5 w-5 text-[#EA3A70] mr-2" />
                <span className="text-white">Launch in just 48 hours</span>
              </div>
            </div>
            <button className="mt-8 px-6 py-3 bg-[#EA3A70] text-white rounded-lg hover:bg-[#EA3A70]/90 transition-colors inline-flex items-center font-medium shadow-md shadow-[#EA3A70]/20">
              Start Your eBranch Journey
              <ArrowRightIcon className="h-4 w-4 ml-2" />
            </button>
          </div>
        </motion.div>
      </motion.div>
    </motion.section>
  )
}
