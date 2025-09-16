import React, { Children } from 'react'
import { motion } from 'framer-motion'
import {
  MessageSquare,
  LineChart,
  Lightbulb,
  BarChart4,
  RefreshCw,
  Lock,
  PauseCircle,
  Zap,
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
export function BeyondAdministration() {
  const growthFeatures = [
    {
      title: 'Intelligent Outreach',
      icon: MessageSquare,
      items: [
        'Personalized communication based on business context',
        'Multi-channel campaign management',
        'Engagement tracking and follow-up optimization',
        'Performance analysis and strategy refinement',
      ],
    },
    {
      title: 'Market Development',
      icon: LineChart,
      items: [
        'Local market presence establishment',
        'Jurisdiction-specific content creation',
        'Digital profile management',
        'Competitive positioning analysis',
      ],
    },
    {
      title: 'Opportunity Intelligence',
      icon: Lightbulb,
      items: [
        'Prospect identification and qualification',
        'Market trend analysis and application',
        'Strategic partnership identification',
        'Expansion planning support',
      ],
    },
  ]
  const evolutionFeatures = [
    {
      title: 'Continuous Enhancement',
      description:
        'New capabilities are automatically added as they become available',
      icon: RefreshCw,
    },
    {
      title: 'Locked-In Value',
      description:
        'Current subscribers maintain their pricing for 5 years, even as functionality expands',
      icon: Lock,
    },
    {
      title: 'Pause Flexibility',
      description:
        'Take breaks when needed without losing your price protection',
      icon: PauseCircle,
    },
    {
      title: 'Technological Edge',
      description:
        'Stay ahead of competitors still using traditional service models',
      icon: Zap,
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div className="text-center mb-16" variants={itemVariants}>
          <h2 className="text-3xl font-bold text-white mb-6">
            Beyond Administration to Business Growth
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            While the typical middleman in corporate & Tax stops at compliance,
            eBranch extends to actively supporting your growth across Europe:
          </p>
        </motion.div>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
          variants={containerVariants}
        >
          {growthFeatures.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-[#1B1537]/80 backdrop-blur-sm rounded-xl p-6 border border-[#2D2755] hover:border-[#EA3A70]/30 transition-all duration-300"
              variants={itemVariants}
            >
              <div className="p-3 bg-[#2D2755]/50 rounded-lg inline-block mb-4">
                <feature.icon className="h-6 w-6 text-[#EA3A70]" />
              </div>
              <h3 className="text-lg font-bold text-white mb-4">
                {feature.title}
              </h3>
              <ul className="space-y-2">
                {feature.items.map((item, itemIndex) => (
                  <li
                    key={itemIndex}
                    className="text-gray-300 flex items-start"
                  >
                    <span className="text-[#EA3A70] mr-2">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
        <motion.div
          className="bg-[#1B1537]/80 backdrop-blur-sm rounded-xl p-8 border border-[#EA3A70]/30 mb-16"
          variants={itemVariants}
        >
          <p className="text-xl text-white">
            The Marketing Agent operates with full awareness of your financial
            position, legal parameters, and operational capacity—creating growth
            strategies that align with your business reality.
          </p>
        </motion.div>
        <motion.div variants={itemVariants}>
          <h2 className="text-3xl font-bold text-white mb-6 text-center">
            Growing With Your Business
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-12 text-center">
            As technology evolves, so does your eBranch platform:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {evolutionFeatures.map((feature, index) => (
              <div
                key={index}
                className="bg-[#1B1537]/80 backdrop-blur-sm rounded-xl p-6 border border-[#2D2755] hover:border-[#EA3A70]/30 transition-all duration-300"
              >
                <div className="p-3 bg-[#2D2755]/50 rounded-lg inline-block mb-4">
                  <feature.icon className="h-6 w-6 text-[#EA3A70]" />
                </div>
                <h3 className="text-lg font-bold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <p className="text-xl text-[#EA3A70]">
              Your subscription doesn't just buy today's technology—it secures
              your place in the ongoing evolution of business management.
            </p>
          </div>
        </motion.div>
      </div>
    </motion.section>
  )
}
