import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Header } from '../components/layout/Header'
import { Footer } from '../components/layout/Footer'
import { NewspaperIcon, CalendarIcon, TagIcon, ArrowRightIcon } from 'lucide-react'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 }
  },
}

export function News() {
  const [selectedArticle, setSelectedArticle] = useState(null)

  const allNews = [
    {
      category: 'Company News',
      date: 'October 15, 2023',
      title: 'House of Companies Expands Operations to Eastern Europe',
      description: 'Strategic expansion into emerging European markets to better serve our global clients',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      content: 'Full article content here...'
    },
    {
      category: 'Industry Insights',
      date: 'October 10, 2023',
      title: 'New EU Regulations for Digital Companies: What You Need to Know',
      description: 'Understanding the impact of latest EU regulatory changes on digital businesses',
      image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      content: 'Full article content here...'
    },
    {
      category: 'Technology Update',
      date: 'March 1, 2024',
      title: 'AI-Powered Document Processing: A Game Changer for Global Business',
      description: 'How artificial intelligence is revolutionizing cross-border business documentation',
      image: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      content: `
        <div class="space-y-6">
          <p>Artificial intelligence is transforming how businesses handle international documentation and compliance. At House of Companies, we've integrated cutting-edge AI technology to streamline the process of managing cross-border business requirements.</p>
          
          <h3 class="text-xl font-bold text-white mt-6">Key Benefits</h3>
          <ul class="list-disc list-inside space-y-2 text-gray-300">
            <li>Automated document classification and processing</li>
            <li>Real-time compliance checking</li>
            <li>Multi-language support for global operations</li>
            <li>Reduced processing time by up to 75%</li>
          </ul>

          <h3 class="text-xl font-bold text-white mt-6">Implementation Timeline</h3>
          <p>The rollout of our AI-powered document processing system will be completed in phases throughout 2024, with all clients having access to the full feature set by Q4.</p>

          <blockquote class="border-l-4 border-[#EA3A70] pl-4 my-6 text-gray-300 italic">
            "This technology represents a significant leap forward in how we handle international business documentation." - Dennis Vermeulen, CEO
          </blockquote>
        </div>
      `
    },
    {
      category: 'Market Analysis',
      date: 'February 28, 2024',
      title: 'Singapores New Tech Hub Status: Opportunities for European Startups',
      description: 'Analysis of Singapores emerging position as a global tech hub and what it means for EU companies',
      image: 'https://images.unsplash.com/photo-1565967511849-76a60a516170?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      content: `
        <div class="space-y-6">
          <p>Singapore has emerged as a leading destination for European tech companies looking to expand into Asia. This comprehensive analysis explores the opportunities and considerations for EU startups.</p>

          <h3 class="text-xl font-bold text-white mt-6">Market Opportunities</h3>
          <ul class="list-disc list-inside space-y-2 text-gray-300">
            <li>Strong government support for tech initiatives</li>
            <li>Strategic location for Asian market access</li>
            <li>Advanced digital infrastructure</li>
            <li>Favorable tax incentives for tech companies</li>
          </ul>

          <h3 class="text-xl font-bold text-white mt-6">Success Stories</h3>
          <p>Several European tech companies have already established successful operations in Singapore, leveraging the city-state's strategic advantages.</p>
        </div>
      `
    }
  ]

  return (
    <div className="min-h-screen bg-[#0F0B1F]">
      <Header />
      
      {/* Hero Section */}
      <motion.section 
        className="py-20 bg-[#1B1537] relative overflow-hidden"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-1/2 h-1/2 bg-[#EA3A70]/10 rounded-full blur-[100px] animate-pulse" />
          <div className="absolute bottom-0 right-1/4 w-1/2 h-1/2 bg-[#4A2D80]/10 rounded-full blur-[100px] animate-pulse delay-700" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div className="text-center max-w-3xl mx-auto" variants={itemVariants}>
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-[#EA3A70]/10 border border-[#EA3A70]/20 mb-4">
              <NewspaperIcon className="h-4 w-4 text-[#EA3A70] mr-2" />
              <span className="text-[#EA3A70] font-medium">News & Updates</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Latest News & Insights
            </h1>
            <p className="text-xl text-gray-300">
              Stay informed about global business expansion, regulatory updates, and success stories
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* News Grid */}
      <motion.section 
        className="py-20 bg-[#0F0B1F]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allNews.map((article, index) => (
              <motion.article
                key={index}
                className="bg-[#1B1537]/80 rounded-xl overflow-hidden border border-[#2D2755] hover:border-[#EA3A70]/30 transition-all duration-300"
                variants={itemVariants}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-[#EA3A70]/90 text-white text-xs font-medium px-2.5 py-1 rounded-full">
                      {article.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center text-gray-400 text-sm mb-2">
                    <CalendarIcon className="h-4 w-4 mr-2" />
                    {article.date}
                  </div>
                  <h2 className="text-xl font-bold text-white mb-2">
                    {article.title}
                  </h2>
                  <p className="text-gray-300 mb-4">
                    {article.description}
                  </p>
                  <button
                    onClick={() => setSelectedArticle(article)}
                    className="inline-flex items-center text-[#EA3A70] hover:text-[#EA3A70]/80 transition-colors"
                  >
                    Read Full Article
                    <ArrowRightIcon className="h-4 w-4 ml-2" />
                  </button>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Article Modal */}
      {selectedArticle && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 overflow-y-auto">
          <div className="min-h-screen flex items-center justify-center p-4">
            <motion.div 
              className="max-w-4xl w-full bg-[#1B1537] rounded-xl shadow-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
            >
              <div className="relative">
                <img
                  src={selectedArticle.image}
                  alt={selectedArticle.title}
                  className="w-full h-64 object-cover rounded-t-xl"
                />
                <button
                  onClick={() => setSelectedArticle(null)}
                  className="absolute top-4 right-4 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <div className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <span className="bg-[#EA3A70]/90 text-white text-xs font-medium px-2.5 py-1 rounded-full">
                    {selectedArticle.category}
                  </span>
                  <div className="flex items-center text-gray-400 text-sm">
                    <CalendarIcon className="h-4 w-4 mr-2" />
                    {selectedArticle.date}
                  </div>
                </div>
                <h2 className="text-3xl font-bold text-white mb-6">
                  {selectedArticle.title}
                </h2>
                <div 
                  className="prose prose-invert max-w-none"
                  dangerouslySetInnerHTML={{ __html: selectedArticle.content }}
                />
              </div>
            </motion.div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  )
}