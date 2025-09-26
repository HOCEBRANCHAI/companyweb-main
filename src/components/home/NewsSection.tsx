import React, { Children } from 'react'
import { motion } from 'framer-motion'
import { ArrowRightIcon, NewspaperIcon } from 'lucide-react'
import { Link } from 'react-router-dom'
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
export function NewsSection() {
  const news = [
    {
      category: 'Company News',
      date: 'October 15, 2023',
      title: 'House of Companies Expands Operations to Eastern Europe',
      description:
        'Strategic expansion into emerging European markets to better serve our global clients',
      image:
        'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    },
    {
      category: 'Industry Insights',
      date: 'October 10, 2023',
      title: 'New EU Regulations for Digital Companies: What You Need to Know',
      description:
        'Understanding the impact of latest EU regulatory changes on digital businesses',
      image:
        'https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    },
    {
      category: 'Success Stories',
      date: 'October 5, 2023',
      title: "Client Success: Tech Startup's Journey to European Market Leader",
      description:
        'How our platform helped a US tech startup establish and scale across Europe',
      image:
        'https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    },
  ]
  return (
    <motion.section
      className="py-20 bg-[#0A0826]"
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        margin: '-100px',
      }}
      variants={containerVariants}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div className="text-center mb-8 sm:mb-12" variants={itemVariants}>
          <div className="inline-flex items-center px-3 py-2 sm:px-4 rounded-full bg-[#EA3A70]/10 border border-[#EA3A70]/20 mb-3 sm:mb-4">
            <NewspaperIcon className="h-3 w-3 sm:h-4 sm:w-4 text-[#EA3A70] mr-2" />
            <span className="text-[#EA3A70] font-medium text-sm sm:text-base">Latest Updates</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3 sm:mb-4">
            News & Insights
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
            Stay updated with the latest developments in European business
            expansion
          </p>
        </motion.div>
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12"
          variants={containerVariants}
        >
          {news.map((item, index) => (
            <motion.div
              key={index}
              className="bg-[#1B1537]/80 rounded-xl overflow-hidden border border-[#2D2755] hover:border-[#EA3A70]/30 transition-all duration-300"
              variants={itemVariants}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-[#EA3A70]/90 text-white text-xs font-medium px-2.5 py-1 rounded-full">
                    {item.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="text-gray-400 text-sm mb-2">{item.date}</div>
                <h3 className="text-xl font-bold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-300 mb-4">{item.description}</p>
                <Link
                  to="/blog"
                  className="inline-flex items-center text-[#EA3A70] hover:text-[#EA3A70]/80 transition-colors"
                >
                  Read More
                  <ArrowRightIcon className="h-4 w-4 ml-2" />
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
        <div className="text-center">
          <Link
            to="/blog"
            className="inline-flex items-center px-6 py-3 bg-[#1B1537] text-white rounded-lg border border-[#2D2755] hover:bg-[#2D2755]/50 transition-colors"
          >
            View All News
            <ArrowRightIcon className="h-4 w-4 ml-2" />
          </Link>
        </div>
      </div>
    </motion.section>
  )
}
