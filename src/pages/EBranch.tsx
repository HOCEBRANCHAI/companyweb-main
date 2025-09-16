import React, { Children } from 'react'
import { motion } from 'framer-motion'
import { EBranchHero } from '../components/ebranch/EBranchHero'
import { MiddlemenRevolution } from '../components/ebranch/MiddlemenRevolution'
import { KeyFeatures } from '../components/ebranch/KeyFeatures'
import { IntegrationLayer } from '../components/ebranch/IntegrationLayer'
import { EBranchComparison } from '../components/ebranch/EBranchComparison'
import { EBranchPricing } from '../components/ebranch/EBranchPricing'
import { BeyondAdministration } from '../components/ebranch/BeyondAdministration'
import { EBranchFAQ } from '../components/ebranch/EBranchFAQ'
import { CallToAction } from '../components/ebranch/CallToAction'
import { Header } from '../components/layout/Header'
import { Footer } from '../components/layout/Footer'
const pageVariants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.2,
    },
  },
}
export function EBranch() {
  return (
    <motion.div
      className="w-full min-h-screen bg-gradient-to-b from-[#1B1537] via-[#0F0B1F] to-[#1B1537]"
      initial="initial"
      animate="animate"
      variants={pageVariants}
    >
      <Header />
      <main>
        <EBranchHero />
        <div className="relative">
          {/* Animated gradient background */}
          <div className="absolute inset-0 bg-gradient-radial from-[#EA3A70]/10 via-transparent to-transparent animate-pulse-slow"></div>
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80')] opacity-5 bg-cover bg-center mix-blend-overlay"></div>
          <MiddlemenRevolution />
          <KeyFeatures />
          <IntegrationLayer />
          <EBranchComparison />
          <EBranchPricing />
          <BeyondAdministration />
          <EBranchFAQ />
          <CallToAction />
        </div>
      </main>
      <Footer />
      {/* Add custom animations */}
      <style jsx>{`
        @keyframes pulse-slow {
          0%,
          100% {
            opacity: 0.1;
          }
          50% {
            opacity: 0.3;
          }
        }
        .animate-pulse-slow {
          animation: pulse-slow 8s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
      `}</style>
    </motion.div>
  )
}
