import React, { useState } from 'react';
import { SearchIcon, BookIcon, ClockIcon, ChevronRightIcon, FilterIcon, SlidersIcon, BookmarkIcon, FileTextIcon, ArrowRightIcon, CheckCircleIcon, BookOpenIcon, BuildingIcon, BarChart2Icon, LandmarkIcon, BeakerIcon, UsersIcon, RefreshCwIcon, PlaneIcon, TrendingUpIcon, FileIcon, RepeatIcon, LaptopIcon } from 'lucide-react';
export function Library() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState('grid');
  // Primary categories
  const mainCategories = [{
    id: 'business-formation',
    name: 'Business Formation & Registration',
    icon: <BuildingIcon className="h-4 w-4" />,
    count: 42
  }, {
    id: 'tax-compliance',
    name: 'Tax & Financial Compliance',
    icon: <BarChart2Icon className="h-4 w-4" />,
    count: 38
  }, {
    id: 'banking-finance',
    name: 'Banking & Finance',
    icon: <LandmarkIcon className="h-4 w-4" />,
    count: 26
  }, {
    id: 'regulatory',
    name: 'Regulatory Compliance',
    icon: <FileTextIcon className="h-4 w-4" />,
    count: 31
  }, {
    id: 'industry-specific',
    name: 'Industry-Specific Regulations',
    icon: <BeakerIcon className="h-4 w-4" />,
    count: 27
  }, {
    id: 'human-resources',
    name: 'Human Resources & Employment',
    icon: <UsersIcon className="h-4 w-4" />,
    count: 34
  }, {
    id: 'business-operations',
    name: 'Business Operations',
    icon: <RefreshCwIcon className="h-4 w-4" />,
    count: 29
  }, {
    id: 'immigration',
    name: 'Immigration & Residency',
    icon: <PlaneIcon className="h-4 w-4" />,
    count: 24
  }, {
    id: 'expansion',
    name: 'Business Expansion & Growth',
    icon: <TrendingUpIcon className="h-4 w-4" />,
    count: 22
  }, {
    id: 'accounting',
    name: 'Accounting & Bookkeeping',
    icon: <FileIcon className="h-4 w-4" />,
    count: 25
  }, {
    id: 'exit-restructuring',
    name: 'Business Exit & Restructuring',
    icon: <RepeatIcon className="h-4 w-4" />,
    count: 18
  }, {
    id: 'digital',
    name: 'Digital Business & Technology',
    icon: <LaptopIcon className="h-4 w-4" />,
    count: 23
  }];
  // Featured articles
  const featuredArticles = [{
    id: 1,
    title: '2025 Guide to Dutch Corporate Tax Returns',
    category: 'Tax & Financial Compliance',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    readTime: '8 min read',
    summary: 'Complete walkthrough of corporate tax filing deadlines, requirements, and best practices for businesses operating in the Netherlands.',
    tags: ['Tax Filing', 'Corporate Tax', 'Compliance']
  }, {
    id: 2,
    title: 'Setting Up a BV: Step-by-Step Process',
    category: 'Business Formation & Registration',
    image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    readTime: '10 min read',
    summary: 'Everything you need to know about establishing a Dutch BV (private limited company), from initial registration to operational readiness.',
    tags: ['Company Formation', 'BV', 'Registration']
  }, {
    id: 3,
    title: 'Dutch Banking Solutions for International Businesses',
    category: 'Banking & Finance',
    image: 'https://images.unsplash.com/photo-1601597111158-2fceff292cdc?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    readTime: '7 min read',
    summary: 'Comprehensive overview of business banking options in the Netherlands for foreign companies and entrepreneurs.',
    tags: ['Banking', 'International Business', 'Financial Services']
  }];
  // Recent articles
  const recentArticles = [{
    id: 4,
    title: 'EMI Licensing Requirements in the Netherlands',
    category: 'Banking & Finance',
    image: 'https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
    date: 'Apr 15, 2025',
    summary: 'Navigating the regulatory requirements for Electronic Money Institution licensing in the Dutch financial landscape.',
    tags: ['EMI License', 'Fintech', 'Regulation']
  }, {
    id: 5,
    title: 'Highly Skilled Migrant Visa: Eligibility & Application Process',
    category: 'Immigration & Residency',
    image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
    date: 'Apr 10, 2025',
    summary: 'Complete guide to obtaining a knowledge migrant visa for specialized talent relocating to the Netherlands.',
    tags: ['Immigration', 'Visa', 'Relocation']
  }, {
    id: 6,
    title: 'Annual Accounts Filing: Deadlines & Requirements',
    category: 'Tax & Financial Compliance',
    image: 'https://images.unsplash.com/photo-1554224155-8d04cb21ed6c?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
    date: 'Apr 5, 2025',
    summary: 'Understanding the deadlines, requirements, and processes for filing annual accounts with the Dutch Chamber of Commerce.',
    tags: ['Annual Accounts', 'Financial Statements', 'Compliance']
  }, {
    id: 7,
    title: 'Dutch Pharmaceutical Licensing & Regulation Guide',
    category: 'Industry-Specific Regulations',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
    date: 'Mar 28, 2025',
    summary: 'Comprehensive overview of the regulatory framework and licensing requirements for pharmaceutical companies in the Netherlands.',
    tags: ['Pharma', 'Licensing', 'Healthcare']
  }];
  // Trending topics
  const trendingTopics = [{
    id: 'tax-deadline',
    name: 'Tax Filing Deadlines',
    count: 24
  }, {
    id: 'business-bank',
    name: 'Business Banking',
    count: 18
  }, {
    id: 'remote-work',
    name: 'Remote Work Compliance',
    count: 15
  }, {
    id: 'emi-licensing',
    name: 'EMI Licensing',
    count: 12
  }, {
    id: 'dutch-residency',
    name: 'Dutch Residency',
    count: 10
  }];
  // Tutorials data
  const tutorials = [{
    id: 1,
    title: 'Business Registration Masterclass',
    category: 'Business Formation',
    duration: '45 minutes',
    level: 'Beginner',
    instructor: 'Sarah Johnson',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    description: 'Complete guide to registering your business in the Netherlands, covering all legal requirements and procedures.',
    lessons: ['Business Structure Selection', 'Document Preparation', 'Registration Process', 'Post-Registration Steps'],
    tags: ['Registration', 'Legal', 'Business Formation']
  }, {
    id: 2,
    title: 'Dutch Tax System Explained',
    category: 'Tax & Financial Compliance',
    duration: '60 minutes',
    level: 'Intermediate',
    instructor: 'Michael van der Berg',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    description: 'Comprehensive overview of the Dutch tax system, including corporate tax, VAT, and international tax considerations.',
    lessons: ['Tax System Basics', 'Corporate Tax', 'VAT Requirements', 'International Taxation'],
    tags: ['Tax', 'Finance', 'Compliance']
  }, {
    id: 3,
    title: 'Employment Law Fundamentals',
    category: 'Human Resources',
    duration: '30 minutes',
    level: 'Beginner',
    instructor: 'Emma Peters',
    image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    description: 'Essential knowledge about Dutch employment law, hiring procedures, and employee rights.',
    lessons: ['Employment Contracts', 'Worker Rights', 'Payroll Basics', 'HR Compliance'],
    tags: ['HR', 'Employment', 'Legal']
  }];
  const filterArticlesByCategory = (articles, category) => {
    if (category === 'all') return articles;
    return articles.filter(article => article.category === category);
  };
  const filteredFeaturedArticles = filterArticlesByCategory(featuredArticles, activeCategory);
  const filteredRecentArticles = filterArticlesByCategory(recentArticles, activeCategory);
  return <div className="min-h-screen bg-[#0A0826] text-white">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-[#1B1537] to-[#2D2755]">
        <div className="container mx-auto py-12 px-4">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">
              Dutch Business Resource Library
            </h1>
            <p className="mt-3 max-w-2xl mx-auto text-xl text-purple-200/70">
              Comprehensive guides, articles, and resources for businesses
              operating in the Netherlands
            </p>
          </div>
          {/* Search Bar */}
          <div className="mt-8 max-w-3xl mx-auto">
            <div className="flex rounded-md shadow-sm">
              <div className="relative flex-grow focus-within:z-10">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <SearchIcon className="h-5 w-5 text-purple-300/50" aria-hidden="true" />
                </div>
                <input type="text" className="bg-[#0F0B1F] border border-[#4A2D80] focus:border-[#EA3A70] focus:ring-[#EA3A70] block w-full rounded-l-md pl-10 py-4 text-white text-sm" placeholder="Search for topics, guides, or specific requirements..." value={searchQuery} onChange={e => setSearchQuery(e.target.value)} />
              </div>
              <button className="-ml-px relative inline-flex items-center px-6 py-4 border border-transparent text-sm font-medium rounded-r-md text-white bg-[#EA3A70] hover:bg-[#EA3A70]/90">
                Search
              </button>
            </div>
            {/* Quick links below search */}
            <div className="mt-3 flex flex-wrap justify-center gap-2 text-sm text-purple-200/70">
              <span className="mr-1">Popular:</span>
              <a href="#" className="hover:text-white hover:underline">
                Tax Filing
              </a>
              <span className="mx-1">•</span>
              <a href="#" className="hover:text-white hover:underline">
                Company Formation
              </a>
              <span className="mx-1">•</span>
              <a href="#" className="hover:text-white hover:underline">
                Banking
              </a>
              <span className="mx-1">•</span>
              <a href="#" className="hover:text-white hover:underline">
                VAT Registration
              </a>
              <span className="mx-1">•</span>
              <a href="#" className="hover:text-white hover:underline">
                Employment Law
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Main Content Area */}
      <div className="container mx-auto px-4 py-10">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          {/* Left Sidebar - Categories */}
          <div className="hidden lg:block lg:col-span-3">
            <nav aria-label="Sidebar" className="sticky top-4 divide-y divide-[#2D2755]">
              <div className="pb-6">
                <h2 className="text-lg font-medium flex items-center">
                  <BookOpenIcon className="h-5 w-5 text-[#EA3A70] mr-2" />
                  Resource Categories
                </h2>
                <div className="mt-4 space-y-1">
                  <button onClick={() => setActiveCategory('all')} className={`flex items-center px-3 py-2 text-sm font-medium rounded-md w-full ${activeCategory === 'all' ? 'bg-[#2D2755] text-white' : 'text-purple-200/70 hover:bg-[#1B1537]'}`}>
                    All Categories
                  </button>
                  {mainCategories.map(category => <button key={category.id} onClick={() => setActiveCategory(category.name)} className={`flex items-center px-3 py-2 text-sm font-medium rounded-md w-full ${activeCategory === category.name ? 'bg-[#2D2755] text-white' : 'text-purple-200/70 hover:bg-[#1B1537]'}`}>
                      <span className="mr-2 text-[#EA3A70]">
                        {category.icon}
                      </span>
                      <span className="truncate">{category.name}</span>
                      <span className="ml-auto inline-block py-0.5 px-2 text-xs rounded-full bg-[#1B1537] text-purple-200/70">
                        {category.count}
                      </span>
                    </button>)}
                </div>
              </div>
              <div className="pt-6">
                <h2 className="text-lg font-medium">Trending Topics</h2>
                <div className="mt-4 space-y-1">
                  {trendingTopics.map(topic => <a key={topic.id} href="#" className="flex items-center px-3 py-2 text-sm font-medium text-purple-200/70 rounded-md hover:bg-[#1B1537]">
                      <ChevronRightIcon className="h-4 w-4 mr-3 text-[#EA3A70]" />
                      {topic.name}
                      <span className="ml-auto inline-block py-0.5 px-2 text-xs rounded-full bg-[#1B1537] text-purple-200/70">
                        {topic.count}
                      </span>
                    </a>)}
                </div>
              </div>
              <div className="pt-6">
                <div className="rounded-lg bg-[#1B1537] p-4 border border-[#2D2755]">
                  <h3 className="text-sm font-medium">
                    Need Personalized Assistance?
                  </h3>
                  <p className="mt-2 text-sm text-purple-200/70">
                    Our experts can provide tailored guidance for your specific
                    business situation.
                  </p>
                  <div className="mt-4">
                    <a href="#" className="text-sm font-medium text-[#EA3A70] hover:text-[#EA3A70]/80">
                      Schedule a Consultation →
                    </a>
                  </div>
                </div>
              </div>
            </nav>
          </div>
          {/* Main Content */}
          <main className="lg:col-span-9">
            {/* Filter & View Controls */}
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">
                {activeCategory === 'all' ? 'All Resources' : activeCategory}
              </h2>
              <div className="flex items-center space-x-2">
                <div className="flex items-center">
                  <button onClick={() => setViewMode('grid')} className={`p-2 rounded-md ${viewMode === 'grid' ? 'bg-[#2D2755]' : 'bg-[#1B1537] hover:bg-[#2D2755]'}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-200/70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                    </svg>
                  </button>
                  <button onClick={() => setViewMode('list')} className={`p-2 rounded-md ${viewMode === 'list' ? 'bg-[#2D2755]' : 'bg-[#1B1537] hover:bg-[#2D2755]'}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-200/70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                  </button>
                </div>
                <button className="flex items-center px-3 py-2 border border-[#2D2755] text-sm leading-4 font-medium rounded-md text-purple-200/70 bg-[#1B1537] hover:bg-[#2D2755]">
                  <FilterIcon className="h-4 w-4 mr-2" />
                  Filter
                </button>
                <button className="flex items-center px-3 py-2 border border-[#2D2755] text-sm leading-4 font-medium rounded-md text-purple-200/70 bg-[#1B1537] hover:bg-[#2D2755]">
                  <SlidersIcon className="h-4 w-4 mr-2" />
                  Sort
                </button>
              </div>
            </div>
            {/* Featured Content */}
            {filteredFeaturedArticles.length > 0 && <div className="mb-10">
                <h3 className="text-xl font-medium mb-4 flex items-center">
                  <CheckCircleIcon className="h-5 w-5 text-[#EA3A70] mr-2" />
                  Featured Resources
                </h3>
                <div className={viewMode === 'grid' ? 'grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3' : 'space-y-6'}>
                  {filteredFeaturedArticles.map(article => <div key={article.id} className={`bg-[#1B1537] overflow-hidden shadow rounded-lg border border-[#2D2755] ${viewMode === 'list' ? 'flex' : ''}`}>
                      <div className={viewMode === 'list' ? 'flex-shrink-0 w-1/4' : ''}>
                        <img className="h-48 w-full object-cover" src={article.image} alt={article.title} />
                      </div>
                      <div className="p-6">
                        <div className="flex items-center">
                          <div className="flex-shrink-0">
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-[#2D2755] text-purple-200">
                              {article.category}
                            </span>
                          </div>
                          <div className="ml-2 flex-shrink-0 flex">
                            <ClockIcon className="h-4 w-4 text-purple-200/50" />
                            <span className="text-xs text-purple-200/50 ml-1">
                              {article.readTime}
                            </span>
                          </div>
                        </div>
                        <a href="#" className="block mt-2">
                          <p className="text-xl font-semibold">
                            {article.title}
                          </p>
                          <p className="mt-3 text-base text-purple-200/70">
                            {article.summary}
                          </p>
                        </a>
                        <div className="mt-4">
                          <a href="#" className="text-base font-medium text-[#EA3A70] hover:text-[#EA3A70]/80">
                            Read full article →
                          </a>
                        </div>
                        <div className="mt-4 flex flex-wrap gap-2">
                          {article.tags.map(tag => <span key={tag} className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-[#2D2755] text-purple-200">
                              {tag}
                            </span>)}
                        </div>
                      </div>
                    </div>)}
                </div>
              </div>}
            {/* Recent Content */}
            {filteredRecentArticles.length > 0 && <div className="mb-10">
                <h3 className="text-xl font-medium mb-4 flex items-center">
                  <ClockIcon className="h-5 w-5 text-[#EA3A70] mr-2" />
                  Recently Added
                </h3>
                <div className={viewMode === 'grid' ? 'grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3' : 'space-y-6'}>
                  {filteredRecentArticles.map(article => <div key={article.id} className={`bg-[#1B1537] overflow-hidden shadow rounded-lg border border-[#2D2755] ${viewMode === 'list' ? 'flex' : ''}`}>
                      {viewMode === 'list' && <div className="flex-shrink-0 w-1/5">
                          <img className="h-full w-full object-cover" src={article.image} alt={article.title} />
                        </div>}
                      {viewMode === 'grid' && <img className="h-40 w-full object-cover" src={article.image} alt={article.title} />}
                      <div className="p-6">
                        <div className="flex items-center">
                          <div className="flex-shrink-0">
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-[#2D2755] text-purple-200">
                              {article.category}
                            </span>
                          </div>
                          <div className="ml-2 flex-shrink-0 flex">
                            <span className="text-xs text-purple-200/50">
                              {article.date}
                            </span>
                          </div>
                        </div>
                        <a href="#" className="block mt-2">
                          <p className="text-lg font-semibold">
                            {article.title}
                          </p>
                          <p className="mt-3 text-sm text-purple-200/70">
                            {article.summary}
                          </p>
                        </a>
                        <div className="mt-4">
                          <a href="#" className="text-sm font-medium text-[#EA3A70] hover:text-[#EA3A70]/80">
                            Read article →
                          </a>
                        </div>
                      </div>
                    </div>)}
                </div>
                <div className="mt-6 text-center">
                  <a href="#" className="inline-flex items-center px-4 py-2 border border-[#2D2755] shadow-sm text-sm font-medium rounded-md text-purple-200 bg-[#1B1537] hover:bg-[#2D2755]">
                    View all resources
                    <ArrowRightIcon className="ml-2 h-4 w-4" />
                  </a>
                </div>
              </div>}
            {/* Resource Collections */}
            <div className="bg-[#1B1537] shadow rounded-lg overflow-hidden mb-10 border border-[#2D2755]">
              <div className="px-4 py-5 sm:px-6 bg-[#2D2755]">
                <h3 className="text-lg leading-6 font-medium flex items-center">
                  <FileTextIcon className="h-5 w-5 text-[#EA3A70] mr-2" />
                  Complete Resource Collections
                </h3>
                <p className="mt-1 max-w-2xl text-sm text-purple-200/70">
                  Curated guides and article series on key topics
                </p>
              </div>
              <div className="border-t border-[#2D2755] px-4 py-5 sm:p-0">
                <dl className="sm:divide-y sm:divide-[#2D2755]">
                  <div className="py-4 sm:py-5 sm:grid sm:grid-cols-5 sm:gap-4 sm:px-6 hover:bg-[#2D2755]/50">
                    <dt className="text-sm font-medium text-purple-200/70">
                      Complete Dutch BV Formation Guide
                    </dt>
                    <dd className="mt-1 text-sm text-white sm:mt-0 sm:col-span-3">
                      A step-by-step series covering everything from initial
                      planning to post-registration requirements
                    </dd>
                    <dd className="mt-1 text-sm text-[#EA3A70] sm:mt-0 sm:text-right">
                      <a href="#" className="font-medium hover:text-[#EA3A70]/80">
                        View Series →
                      </a>
                    </dd>
                  </div>
                  <div className="py-4 sm:py-5 sm:grid sm:grid-cols-5 sm:gap-4 sm:px-6 hover:bg-[#2D2755]/50">
                    <dt className="text-sm font-medium text-purple-200/70">
                      Dutch Tax Compliance Essentials
                    </dt>
                    <dd className="mt-1 text-sm text-white sm:mt-0 sm:col-span-3">
                      Comprehensive coverage of VAT, corporate tax, and other
                      tax obligations for businesses
                    </dd>
                    <dd className="mt-1 text-sm text-[#EA3A70] sm:mt-0 sm:text-right">
                      <a href="#" className="font-medium hover:text-[#EA3A70]/80">
                        View Series →
                      </a>
                    </dd>
                  </div>
                  <div className="py-4 sm:py-5 sm:grid sm:grid-cols-5 sm:gap-4 sm:px-6 hover:bg-[#2D2755]/50">
                    <dt className="text-sm font-medium text-purple-200/70">
                      EMI Licensing Masterclass
                    </dt>
                    <dd className="mt-1 text-sm text-white sm:mt-0 sm:col-span-3">
                      Complete guide to obtaining and maintaining an Electronic
                      Money Institution license in the Netherlands
                    </dd>
                    <dd className="mt-1 text-sm text-[#EA3A70] sm:mt-0 sm:text-right">
                      <a href="#" className="font-medium hover:text-[#EA3A70]/80">
                        View Series →
                      </a>
                    </dd>
                  </div>
                  <div className="py-4 sm:py-5 sm:grid sm:grid-cols-5 sm:gap-4 sm:px-6 hover:bg-[#2D2755]/50">
                    <dt className="text-sm font-medium text-purple-200/70">
                      Netherlands Immigration & Work Permits
                    </dt>
                    <dd className="mt-1 text-sm text-white sm:mt-0 sm:col-span-3">
                      Essential information on residency, work permits, and
                      immigration options for business owners and employees
                    </dd>
                    <dd className="mt-1 text-sm text-[#EA3A70] sm:mt-0 sm:text-right">
                      <a href="#" className="font-medium hover:text-[#EA3A70]/80">
                        View Series →
                      </a>
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
            {/* Video Tutorials & Courses */}
            <div className="mb-10">
              <h3 className="text-xl font-medium mb-6 flex items-center">
                <BookOpenIcon className="h-5 w-5 text-[#EA3A70] mr-2" />
                Video Tutorials & Courses
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {tutorials.map(tutorial => <div key={tutorial.id} className="bg-[#1B1537] rounded-xl border border-[#2D2755] overflow-hidden hover:border-[#EA3A70]/30 transition-all duration-300 transform hover:scale-[1.02]">
                    <div className="relative">
                      <img src={tutorial.image} alt={tutorial.title} className="w-full h-48 object-cover" />
                      <div className="absolute top-4 right-4 px-2 py-1 bg-[#EA3A70]/90 backdrop-blur-sm rounded-full text-xs text-white">
                        {tutorial.duration}
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-3">
                        <span className="px-2 py-1 bg-[#2D2755] rounded-full text-xs text-purple-200">
                          {tutorial.level}
                        </span>
                        <span className="text-xs text-purple-200/70">
                          {tutorial.category}
                        </span>
                      </div>
                      <h4 className="text-lg font-semibold text-white mb-2">
                        {tutorial.title}
                      </h4>
                      <p className="text-sm text-purple-200/70 mb-4">
                        {tutorial.description}
                      </p>
                      <div className="mb-4">
                        <h5 className="text-xs font-medium text-purple-200 mb-2">
                          Course Content:
                        </h5>
                        <ul className="space-y-1">
                          {tutorial.lessons.map((lesson, index) => <li key={index} className="text-xs text-purple-200/70 flex items-center">
                              <CheckIcon className="h-3 w-3 text-[#EA3A70] mr-2" />
                              {lesson}
                            </li>)}
                        </ul>
                      </div>
                      <div className="flex items-center justify-between pt-4 border-t border-[#2D2755]">
                        <div className="text-sm text-purple-200">
                          <span className="font-medium">Instructor:</span>{' '}
                          {tutorial.instructor}
                        </div>
                        <button className="px-3 py-1.5 bg-[#EA3A70]/10 text-[#EA3A70] rounded-lg hover:bg-[#EA3A70]/20 transition-colors text-sm flex items-center">
                          Start Course
                          <ArrowRightIcon className="h-4 w-4 ml-2" />
                        </button>
                      </div>
                    </div>
                  </div>)}
              </div>
              <div className="mt-6 text-center">
                <a href="#" className="inline-flex items-center px-4 py-2 border border-[#2D2755] shadow-sm text-sm font-medium rounded-md text-purple-200 bg-[#1B1537] hover:bg-[#2D2755] transition-all duration-300">
                  View all tutorials
                  <ArrowRightIcon className="ml-2 h-4 w-4" />
                </a>
              </div>
            </div>
            {/* Email Newsletter */}
            <div className="bg-[#4A2D80] rounded-lg shadow-lg overflow-hidden">
              <div className="px-6 py-8 md:p-10 md:flex md:items-center">
                <div className="w-full md:w-0 md:flex-1">
                  <h2 className="text-2xl font-bold tracking-tight">
                    Stay updated with Dutch business insights
                  </h2>
                  <p className="mt-3 max-w-3xl text-purple-200/70">
                    Get the latest Dutch business regulations, compliance
                    updates, and expert insights delivered to your inbox.
                  </p>
                </div>
                <div className="mt-8 md:mt-0 md:ml-10 md:w-auto md:flex-shrink-0">
                  <form className="sm:flex">
                    <label htmlFor="email-address" className="sr-only">
                      Email address
                    </label>
                    <input id="email-address" name="email" type="email" autoComplete="email" required className="w-full px-5 py-3 bg-[#1B1537] border border-[#2D2755] rounded-md focus:ring-2 focus:ring-[#EA3A70] focus:border-[#EA3A70] text-white sm:max-w-xs" placeholder="Enter your email" />
                    <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3 sm:flex-shrink-0">
                      <button type="submit" className="w-full flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-[#0A0826] bg-[#EA3A70] hover:bg-[#EA3A70]/90 focus:outline-none focus:ring-2 focus:ring-[#EA3A70]">
                        Subscribe
                      </button>
                    </div>
                  </form>
                  <p className="mt-3 text-sm text-purple-200/70">
                    We care about your data. Read our{' '}
                    <a href="#" className="text-white underline">
                      privacy policy
                    </a>
                    .
                  </p>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>;
}