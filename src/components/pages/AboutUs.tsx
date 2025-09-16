import React from 'react'
import { motion } from 'framer-motion'
import { Header } from '../components/layout/Header'
import { Footer } from '../components/layout/Footer'
import {
  GlobeIcon,
  RocketIcon,
  BrainCircuitIcon,
  BuildingIcon,
  UsersIcon,
  ArrowRightIcon,
  CheckIcon,
  MapPinIcon,
} from 'lucide-react'

// Animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.2
    }
  }
}

// Data constants
const visionPoints = [
  'Global market accessibility',
  'Seamless virtual operations',
  'AI-driven business solutions',
  'Borderless growth opportunities'
]

const missionPoints = [
  'Smart document automation',
  'Real-time compliance tracking',
  'Expert-guided workflows',
  'International business support'
]

const features = [
  {
    icon: RocketIcon,
    title: 'Digital-First Experience',
    description: 'Fully remote onboarding and document processing that saves time and eliminates paperwork.',
  },
  {
    icon: BrainCircuitIcon,
    title: 'AI Automation',
    description: 'Smart assistants to draft proposals, track compliance, and analyze legal documents.',
  },
  {
    icon: GlobeIcon,
    title: 'Global Reach, Local Expertise',
    description: 'Country-specific playbooks and solutions, supported by regional experts.",
  },
  {
    icon: BuildingIcon,
    title: 'Start-to-Scale Support',
    description: 'From solo founders to multinational teams, we scale with you.',
  }
]

const locations = [
  {
    city: 'Breda',
    country: 'Netherlands',
    flag: '🇳🇱',
    address: 'Laanzichtweg 60B, 4847 SJ'
  },
  {
    city: 'Thub',
    country: 'India',
    flag: '🇮🇳',
    address: 'T-Hub, Hyderabad'
  }
]

const teamMembers = [
  {
    name: 'Dennis Vermeulen',
    role: 'Founder & CEO',
    email: 'dennis@houseofcompanies.io',
    image: '/images/team/dennis.jpg',
    country: '🇳🇱',
  },
  {
    name: 'Anne Vermeulen',
    role: 'Co-Founder & COO',
    email: 'anne@houseofcompanies.io',
    image: null,
    country: '🇳🇱',
  },
  {
    name: 'Krishna Kishore',
    role: 'Chief Technology Officer',
    email: 'krishna@houseofcompanies.io',
    image: '/images/team/krishna.jpg',
    country: '🇮🇳',
  },
  {
    name: 'Seshadri Vangala',
    role: 'Head of Operations, India',
    email: 'sesh@houseofcompanies.io',
    image: '/images/team/sesh.jpg',
    country: '🇮🇳',
  }
]

// Component
export function AboutUs() {
  return (
    <div className="min-h-screen bg-[#0F0B1F]">
      <Header />

      {/* Hero Section */}
      <motion.section
        className="relative py-20 overflow-hidden"
        initial="initial"
        animate="animate"
        variants={staggerContainer}
      >
        {/* Background gradients */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#1B1537] to-[#0F0B1F]" />
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-1/2 h-1/2 bg-[#EA3A70]/10 rounded-full blur-[100px] animate-pulse" />
          <div className="absolute bottom-0 right-1/4 w-1/2 h-1/2 bg-[#4A2D80]/10 rounded-full blur-[100px] animate-pulse delay-700" />
        </div>

        {/* Hero content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div className="text-center max-w-3xl mx-auto" variants={fadeInUp}>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Empowering Global Entrepreneurs with Seamless Business Expansion
            </h1>
            <p className="text-xl text-gray-300">
              At House of Companies (HOC), we redefine how businesses expand globally. 
              We provide a fully integrated platform designed to support startups, scale-ups, 
              and established enterprises in registering, managing, and growing their 
              international operations — all from a single dashboard.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Vision Section */}
      <VisionSection points={visionPoints} />

      {/* Mission Section */}
      <MissionSection points={missionPoints} />

      {/* Features Section */}
      <FeaturesSection features={features} />

      {/* Global Presence */}
      <GlobalPresenceSection locations={locations} />

      {/* Team Section */}
      <TeamSection members={teamMembers} />

      {/* CTA Section */}
      <CTASection />

      <Footer />
    </div>
  )
}

// Helper Components (define these in the same file or separate components)
function VisionSection({ points }) {
  return (
    <motion.section
      className="py-20 bg-[#1B1537]"
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      variants={staggerContainer}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div className="text-center" variants={fadeInUp}>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
            Our Vision
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {points.map((point, index) => (
            <motion.div
              key={index}
              className="p-6 bg-[#2A2238] rounded-lg shadow-md"
              variants={fadeInUp}
            >
              <div className="flex items-center mb-4">
                <div className="p-3 bg-[#EA3A70] rounded-full mr-4">
                  <CheckIcon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white">
                  {point}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}

function MissionSection({ points }) {
  return (
    <motion.section
      className="py-20 bg-[#0F0B1F]"
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      variants={staggerContainer}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div className="text-center" variants={fadeInUp}>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
            Our Mission
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {points.map((point, index) => (
            <motion.div
              key={index}
              className="p-6 bg-[#EA3A70] rounded-lg shadow-md"
              variants={fadeInUp}
            >
              <div className="flex items-center mb-4">
                <div className="p-3 bg-[#4A2D80] rounded-full mr-4">
                  <CheckIcon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white">
                  {point}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}

function FeaturesSection({ features }) {
  return (
    <motion.section
      className="py-20 bg-[#1B1537]"
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      variants={staggerContainer}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div className="text-center" variants={fadeInUp}>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
            Why Choose Us?
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="p-6 bg-[#2A2238] rounded-lg shadow-md"
              variants={fadeInUp}
            >
              <div className="flex items-center mb-4">
                <div className="p-3 bg-[#EA3A70] rounded-full mr-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white">
                  {feature.title}
                </h3>
              </div>
              <p className="text-gray-300">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}

function GlobalPresenceSection({ locations }) {
  return (
    <motion.section
      className="py-20 bg-[#0F0B1F]"
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      variants={staggerContainer}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div className="text-center" variants={fadeInUp}>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
            Our Global Presence
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {locations.map((location, index) => (
            <motion.div
              key={index}
              className="p-6 bg-[#EA3A70] rounded-lg shadow-md"
              variants={fadeInUp}
            >
              <div className="flex items-center mb-4">
                <div className="text-4xl mr-4">
                  {location.flag}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">
                    {location.city}, {location.country}
                  </h3>
                  <p className="text-gray-300">
                    {location.address}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}

function TeamSection({ members }) {
  return (
    <motion.section
      className="py-20 bg-[#1B1537]"
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      variants={staggerContainer}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div className="text-center" variants={fadeInUp}>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
            Meet Our Team
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {members.map((member, index) => (
            <motion.div
              key={index}
              className="p-6 bg-[#2A2238] rounded-lg shadow-md"
              variants={fadeInUp}
            >
                             <div className="flex flex-col items-center">
                 <div className="w-24 h-24 rounded-full overflow-hidden mb-4 bg-[#EA3A70]/20 flex items-center justify-center">
                   {member.image ? (
                     <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                   ) : (
                     <UsersIcon className="w-12 h-12 text-[#EA3A70]" />
                   )}
                 </div>
                <h3 className="text-xl font-semibold text-white">
                  {member.name}
                </h3>
                <p className="text-gray-300 mb-2">
                  {member.role}
                </p>
                <a href={`mailto:${member.email}`} className="text-[#EA3A70] hover:underline">
                  {member.email}
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}

function CTASection() {
  return (
    <motion.section
      className="py-20 bg-[#0F0B1F]"
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      variants={staggerContainer}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div variants={fadeInUp}>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of entrepreneurs who trust us with their business expansion.
          </p>
          <a
            href="#"
            className="inline-block px-8 py-4 bg-[#EA3A70] text-white rounded-lg shadow-md hover:bg-[#4A2D80] transition-all"
          >
            Get Started Today
          </a>
        </motion.div>
      </div>
    </motion.section>
  )
}