import React, { useEffect, useState, Children } from 'react'
import { Link } from 'react-router-dom'
import { getVideoUrl } from '../../utils/simpleImageUrls'
import {
  RocketIcon,
  PlayCircleIcon,
  ArrowRightIcon,
  GlobeIcon,
  BrainIcon,
  LayoutDashboardIcon,
  CheckIcon,
  XIcon,
} from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const containerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
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
const imageVariants = {
  hidden: {
    opacity: 0,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.4, 0, 0.2, 1],
    },
  },
}
export function EBranchHero() {
  const [isVideoOpen, setIsVideoOpen] = useState(false)

  const openVideo = () => setIsVideoOpen(true)
  const closeVideo = () => setIsVideoOpen(false)

  return (
    <>
      <motion.section
        className="relative py-16 sm:py-20 overflow-hidden"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#1B1537] to-[#0F0B1F]"></div>
        {/* Enhanced background with animated gradient */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-1/2 h-1/2 bg-[#EA3A70]/10 rounded-full blur-[100px] animate-pulse"></div>
          <div className="absolute bottom-0 right-1/4 w-1/2 h-1/2 bg-[#4A2D80]/10 rounded-full blur-[100px] animate-pulse delay-700"></div>
        </div>
        <motion.div
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative"
          variants={containerVariants}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <motion.div className="max-w-3xl" variants={itemVariants}>
              <motion.div
                className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-[#EA3A70]/20 text-[#EA3A70] mb-6 backdrop-blur-sm border border-[#EA3A70]/20"
                variants={itemVariants}
              >
                <BrainIcon className="h-4 w-4 mr-2" />
                <span>Intelligent Business Management</span>
              </motion.div>
              <motion.h1
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6"
                variants={itemVariants}
              >
                All-in-One Plan to Simplify and Scale in Europe
              </motion.h1>
              <p className="text-lg sm:text-xl text-gray-300 mb-6 sm:mb-8">
                Our eBranch plan unifies all our specialized solutions into a
                single intelligent platform that handles every aspect of your
                European business operations. Every back office task is one click
                away from automation.
              </p>
              <p className="text-lg sm:text-xl text-[#EA3A70] font-medium mb-6 sm:mb-8">
                We focus on compliance-to-scale, so you can focus on go-to-market.
              </p>
              <motion.div
                className="bg-[#1B1537]/80 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-[#2D2755] mb-6 sm:mb-8"
                variants={itemVariants}
              >
                <div className="flex items-center mb-4">
                  <div className="p-2 rounded-full bg-[#EA3A70]/20 mr-3">
                    <CheckIcon className="h-4 w-4 sm:h-5 sm:w-5 text-[#EA3A70]" />
                  </div>
                  <div>
                    <span className="text-2xl sm:text-3xl font-bold text-white">€199</span>
                    <span className="text-gray-300 ml-1 text-sm sm:text-base">/month</span>
                  </div>
                </div>
                <p className="text-sm sm:text-base text-gray-300">
                  All services, one platform, no hidden fees
                </p>
              </motion.div>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Link
                  to="/ebranch/branch-registration-requirements"
                  className="px-4 sm:px-6 py-3 bg-[#EA3A70] text-white rounded-lg hover:bg-[#EA3A70]/90 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-[#EA3A70]/20 flex items-center justify-center font-medium backdrop-blur-sm text-sm sm:text-base"
                >
                  Get Started
                  <ArrowRightIcon className="h-4 w-4 ml-2" />
                </Link>
                <button 
                  onClick={openVideo}
                  className="px-4 sm:px-6 py-3 bg-[#1B1537]/40 backdrop-blur-md border border-[#2D2755] text-white rounded-lg hover:bg-[#2D2755]/30 transition-all duration-300 transform hover:scale-105 flex items-center justify-center font-medium text-sm sm:text-base"
                >
                  Watch Demo
                  <PlayCircleIcon className="h-4 w-4 sm:h-5 sm:w-5 ml-2" />
                </button>
              </div>
            </motion.div>
            {/* Enhanced dashboard preview with glass morphism */}
            <motion.div className="relative" variants={imageVariants}>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-[#2D2755] bg-[#1B1537]/20 backdrop-blur-lg">
                <div className="aspect-video w-full">
                  <img
                    src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80"
                    alt="eBranch Dashboard"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F0B1F] via-transparent to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
                  <div className="bg-[#1B1537]/80 backdrop-blur-sm rounded-xl p-3 sm:p-4 border border-[#2D2755]">
                    <div className="flex items-center mb-2">
                      <LayoutDashboardIcon className="h-4 w-4 sm:h-5 sm:w-5 text-[#EA3A70] mr-2" />
                      <p className="text-white text-xs sm:text-sm font-medium">
                        The Middlemen Revolution
                      </p>
                    </div>
                    <p className="text-gray-300 text-xs sm:text-sm">
                      Manage your entire European business operations from a
                      single intelligent platform
                    </p>
                  </div>
                </div>
              </div>
              {/* Enhanced floating elements */}
              <motion.div
                className="absolute -top-4 -right-4 sm:-top-6 sm:-right-6 bg-[#EA3A70]/10 backdrop-blur-lg rounded-full p-4 sm:p-6 border border-[#EA3A70]/30 shadow-xl"
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                <div className="text-center">
                  <p className="text-[#EA3A70] font-bold text-lg sm:text-xl">48h</p>
                  <p className="text-white text-xs">Launch Time</p>
                </div>
              </motion.div>

            </motion.div>
          </div>
        </motion.div>
      </motion.section>

      {/* Video Modal */}
      <AnimatePresence>
        {isVideoOpen && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeVideo}
          >
            <div className="absolute inset-0 bg-black/80 backdrop-blur-sm"></div>
            <motion.div
              className="relative w-full max-w-4xl aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={closeVideo}
                className="absolute top-4 right-4 z-10 p-2 bg-black/50 hover:bg-black/70 rounded-full transition-colors duration-200"
              >
                <XIcon className="h-6 w-6 text-white" />
              </button>
              <video
                className="w-full h-full object-cover"
                controls
                autoPlay
                src={getVideoUrl('hoc.mp4')}
              >
                Your browser does not support the video tag.
              </video>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
