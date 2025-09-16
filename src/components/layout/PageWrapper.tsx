import React from 'react'
import { motion } from 'framer-motion'
import { staggerContainer } from '../../animations'
import { ChatbotWidget } from '../ChatbotWidget'

interface PageWrapperProps {
  children: React.ReactNode
}

export function PageWrapper({ children }: PageWrapperProps) {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={staggerContainer}
      className="min-h-screen bg-[#0F0B1F]"
    >
      {children}
      <ChatbotWidget />
    </motion.div>
  )
}