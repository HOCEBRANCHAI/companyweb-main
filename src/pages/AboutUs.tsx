import React, { Children } from 'react'
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
const fadeInUp = {
  initial: {
    opacity: 0,
    y: 20,
  },
  animate: {
    opacity: 1,
    y: 0,
  },
  transition: {
    duration: 0.5,
  },
}
const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.2,
    },
  },
}
export function AboutUs() {
  const locations = [
    {
      city: 'Amsterdam',
      country: 'Netherlands',
      flag: '🇳🇱',
    },
    {
      city: 'Mumbai',
      country: 'India',
      flag: '🇮🇳',
    },
    {
      city: 'Dubai',
      country: 'UAE',
      flag: '🇦🇪',
    },
    {
      city: 'Singapore',
      country: 'Singapore',
      flag: '🇸🇬',
    },
  ]
  const features = [
    {
      icon: RocketIcon,
      title: 'Digital Experience',
      description:
        'Fully remote onboarding and document processing that saves time and eliminates paperwork.',
    },
    {
      icon: BrainCircuitIcon,
      title: 'AI Automation',
      description:
        'Smart assistants to draft proposals, track compliance, and analyze legal documents automatically.',
    },
    {
      icon: GlobeIcon,
      title: 'Global Reach, Local Expertise',
      description:
        'Country-specific playbooks and solutions, supported by regional experts who understand local nuances.',
    },
    {
      icon: BuildingIcon,
      title: 'Start-to-Scale Support',
      description:
        'Flexible solutions that grow with your business, from solo founders to multinational teams.',
    },
  ]
  const teamMembers = [
    {
      name: 'Dennis Vermeulen',
      role: 'Founder & CEO',
      email: 'dennis@houseofcompanies.io',
      image:
        'https://media.licdn.com/dms/image/v2/D4E03AQG0x5KhuCQDFw/profile-displayphoto-shrink_400_400/B4EZVo1ELJGYAg-/0/1741220496806?e=1754524800&v=beta&t=jbsziWftYXsYJouv-nzuj5UcXhOcGYMjWpvutMwbkfk',
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
      role: ' Managing Director',
      email: 'krishna@houseofcompanies.io',
      image:
        'https://media.licdn.com/dms/image/v2/D5603AQGzCQKnRahk8w/profile-displayphoto-shrink_400_400/B56ZWqXYmfGQA0-/0/1742320012152?e=1754524800&v=beta&t=fHj3DqjSXjmBuAqNougzimtIMGWK5Hf0hdWrJSpTOKU',
      country: '🇮🇳',
    },
    {
      name: 'Seshadri Vangala',
      role: 'Director',
      email: 'sesh@houseofcompanies.io',
      image:
        'https://media.licdn.com/dms/image/v2/C5603AQGK34fP_TPPHw/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1628768807345?e=1754524800&v=beta&t=bk31F6at0TVOanqJRlG9_8qZLV_vlPc0g_M5HH1lymw',
      country: '🇮🇳',
    },
  ]
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
        <div className="absolute inset-0 bg-gradient-to-b from-[#1B1537] to-[#0F0B1F]"></div>
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-1/2 h-1/2 bg-[#EA3A70]/10 rounded-full blur-[100px] animate-pulse"></div>
          <div className="absolute bottom-0 right-1/4 w-1/2 h-1/2 bg-[#4A2D80]/10 rounded-full blur-[100px] animate-pulse delay-700"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            className="text-center max-w-3xl mx-auto"
            variants={fadeInUp}
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Empowering Global Entrepreneurs with Seamless Business Expansion
            </h1>
            <p className="text-lg sm:text-xl text-gray-300">
              We redefine how businesses expand globally through our integrated
              platform designed for startups, scale-ups, and established
              enterprises.
            </p>
          </motion.div>
        </div>
      </motion.section>
      {/* Vision & Mission Section */}
      <motion.section
        className="py-20 bg-[#1B1537]"
        initial="initial"
        whileInView="animate"
        viewport={{
          once: true,
        }}
        variants={staggerContainer}
      >
      
      </motion.section>
      {/* Vision Section */}
      <motion.section
        className="py-12 sm:py-16 lg:py-20 -mt-10 bg-[#1B1537]"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <motion.div 
              variants={fadeInUp}
              className="relative z-10" // Added z-index to ensure proper layering
            >
              <div className="relative rounded-2xl overflow-hidden group">
                <img
                  src="https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80"
                  alt="Future of Business"
                  className="w-full h-[300px] sm:h-[400px] lg:h-[450px] object-cover rounded-2xl transform hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F0B1F] via-transparent to-transparent"></div>
              </div>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 flex items-center">
                <RocketIcon className="h-6 w-6 sm:h-7 sm:w-7 text-[#EA3A70] mr-3" />
                Our Vision
              </h2>
              <p className="text-base sm:text-lg text-gray-300 mb-6">
                To be the leading AI-powered virtual office and business
                expansion platform, enabling companies to enter new markets
                without physical presence while managing their global operations
                effortlessly.
              </p>
              <div className="space-y-4">
                {[
                  'Global market accessibility',
                  'Seamless virtual operations',
                  'AI-driven business solutions',
                  'Borderless growth opportunities',
                ].map((item, index) => (
                  <div key={index} className="flex items-center">
                    <CheckIcon className="h-5 w-5 text-[#EA3A70] mr-3" />
                    <span className="text-white">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Mission Section */}
      <motion.section
        className="py-16 sm:py-20 relative"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <motion.div variants={fadeInUp}>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 flex items-center">
                <BrainCircuitIcon className="h-6 w-6 sm:h-7 sm:w-7 text-[#EA3A70] mr-3" />
                Our Mission
              </h2>
              <p className="text-base sm:text-lg text-gray-300 mb-6">
                Empower entrepreneurs, startups, and remote businesses with an AI-driven virtual presence, business registration, and compliance automation solution that supports their expansion across international markets.
              </p>
              <div className="space-y-4">
                {[
                  'Smart document automation',
                  'Real-time compliance tracking',
                  'Expert-guided workflows',
                  'International business support'
                ].map((item, index) => (
                  <div key={index} className="flex items-center">
                    <CheckIcon className="h-5 w-5 text-[#EA3A70] mr-3" />
                    <span className="text-white">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <div className="relative rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80"
                  alt="Global Mission"
                  className="w-full h-[300px] sm:h-[350px] lg:h-[400px] object-cover rounded-2xl transform hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F0B1F] via-transparent to-transparent"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>
      {/* Features Section */}
      <motion.section
        className="py-16 sm:py-20 bg-[#1B1537]"
        initial="initial"
        whileInView="animate"
        viewport={{
          once: true,
        }}
        variants={staggerContainer}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-12 sm:mb-16" variants={fadeInUp}>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              What Makes Us Different
            </h2>
            <p className="text-lg sm:text-xl text-gray-300">
              Our unique approach to global business expansion
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="bg-[#0F0B1F]/50 backdrop-blur-sm rounded-xl p-6 border border-[#2D2755]"
                variants={fadeInUp}
                whileHover={{
                  scale: 1.02,
                }}
                transition={{
                  duration: 0.2,
                }}
              >
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-[#EA3A70]/10 rounded-lg mr-3">
                    <feature.icon className="h-5 w-5 sm:h-6 sm:w-6 text-[#EA3A70]" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-white">
                    {feature.title}
                  </h3>
                </div>
                <p className="text-sm sm:text-base text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
      {/* Global Presence */}
      <motion.section
        className="py-16 sm:py-20"
        initial="initial"
        whileInView="animate"
        viewport={{
          once: true,
        }}
        variants={staggerContainer}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-12 sm:mb-16" variants={fadeInUp}>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              Global Presence
            </h2>
            <p className="text-lg sm:text-xl text-gray-300">
              Operating across key business hubs
            </p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {locations.map((location, index) => (
              <motion.div
                key={index}
                className="bg-[#1B1537]/50 backdrop-blur-sm rounded-xl p-6 border border-[#2D2755]"
                variants={fadeInUp}
                whileHover={{
                  scale: 1.05,
                }}
                transition={{
                  duration: 0.2,
                }}
              >
                <div className="flex items-center mb-4">
                  <MapPinIcon className="h-4 w-4 sm:h-5 sm:w-5 text-[#EA3A70] mr-2" />
                  <span className="text-xl sm:text-2xl mr-2">{location.flag}</span>
                  <h3 className="text-lg sm:text-xl font-bold text-white">
                    {location.city}
                  </h3>
                </div>
                <p className="text-sm sm:text-base text-gray-300">{location.country}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
      {/* Team Section */}
      <motion.section
        className="py-16 sm:py-20"
        initial="initial"
        whileInView="animate"
        viewport={{
          once: true,
        }}
        variants={staggerContainer}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-12 sm:mb-16" variants={fadeInUp}>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">Our Team</h2>
            <p className="text-lg sm:text-xl text-gray-300">
              Meet the people behind House of Companies
            </p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                className="bg-[#1B1537]/50 backdrop-blur-sm rounded-xl border border-[#2D2755] overflow-hidden"
                variants={fadeInUp}
                whileHover={{
                  scale: 1.02,
                }}
                transition={{
                  duration: 0.2,
                }}
              >
                <div className="p-4 sm:p-6 pb-4"> {/* Move content above image */}
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg sm:text-xl font-bold text-white">
                      {member.name}
                    </h3>
                    <span className="text-xl sm:text-2xl">{member.country}</span>
                  </div>
                  <p className="text-[#EA3A70] font-medium mb-2 text-sm sm:text-base">
                    {member.role}
                  </p>
                  <p className="text-gray-400 text-xs sm:text-sm">{member.email}</p>
                </div>
                <div className="relative h-48 sm:h-64"> {/* Increased height and moved to bottom */}
                  {member.image ? (
                    <>
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#1B1537]/10"></div>
                    </>
                  ) : (
                    <div className="w-full h-full bg-[#EA3A70]/20 flex items-center justify-center">
                      <UsersIcon className="w-12 h-12 sm:w-16 sm:h-16 text-[#EA3A70]" />
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
      {/* CTA Section */}
      <motion.section
        className="py-16 sm:py-20 bg-[#1B1537]"
        initial="initial"
        whileInView="animate"
        viewport={{
          once: true,
        }}
        variants={staggerContainer}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="bg-gradient-to-r from-[#EA3A70]/20 to-[#4A2D80]/20 rounded-2xl p-6 sm:p-8 lg:p-12 text-center backdrop-blur-sm border border-[#2D2755]"
            variants={fadeInUp}
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6">
              Join us in building borderless businesses
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 mb-6 sm:mb-8 max-w-2xl mx-auto">
              Whether you're launching your first international office or
              managing multi-entity compliance, House of Companies is your
              strategic partner in smart expansion.
            </p>
            <button 
              onClick={() => window.open('https://clientdashboard2.houseofcompanies.co.in/', '_blank')}
              className="px-6 sm:px-8 py-3 sm:py-4 bg-[#EA3A70] text-white rounded-lg hover:bg-[#EA3A70]/90 transition-all duration-300 transform hover:scale-105 flex items-center mx-auto font-medium text-sm sm:text-base"
            >
              Start Your Global Journey
              <ArrowRightIcon className="h-4 w-4 sm:h-5 sm:w-5 ml-2" />
            </button>
          </motion.div>
        </div>
      </motion.section>
      <Footer />
    </div>
  )
}
