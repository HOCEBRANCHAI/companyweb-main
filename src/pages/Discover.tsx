import React, { useState, useEffect } from 'react';
import { SearchIcon, FilterIcon, CalendarIcon, MapPinIcon, ArrowRightIcon, BookOpenIcon, ClockIcon, UserIcon, TagIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';
import { createClient } from '@supabase/supabase-js';

// TODO: Create .env.local file with these variables:
// VITE_SUPABASE_URL=https://ioztpmluibvrvkvywvnp.supabase.co
// VITE_SUPABASE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpkZnRqbXpjdmRueGZneGNndGhnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDI1MzM2NDgsImV4cCI6MjA1ODEwOTY0OH0.RMmM4DInCRNH4eQ4iEMM90z57ncKo9ZXo6HStzfn8pM

const supabaseUrl = 'https://ioztpmluibvrvkvywvnp.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpkZnRqbXpjdmRueGZneGNndGhnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDI1MzM2NDgsImV4cCI6MjA1ODEwOTY0OH0.RMmM4DInCRNH4eQ4iEMM90z57ncKo9ZXo6HStzfn8pM';
export const supabase = createClient(supabaseUrl, supabaseAnonKey);

interface BlogPost {
  id: number;
  title: string;
  country: string;
  blog_content: string;
  image_url: string;
  created_at?: string;
  author?: string;
  category?: string;
  read_time?: number;
}

export function Discover() {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [filteredPosts, setFilteredPosts] = useState<BlogPost[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCountry, setSelectedCountry] = useState('all');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [loading, setLoading] = useState(true);

  // Mock data - replace this with actual API call to your blog_posts table
  useEffect(() => {
    // Simulate API call to fetch blog posts
    const fetchBlogPosts = async () => {
      try {
        // Replace this with your actual API endpoint
        // const response = await fetch('/api/blog-posts');
        // const data = await response.json();
        
        // Mock data for demonstration
        const mockData: BlogPost[] = [
          {
    id: 1,
            title: "Complete Guide to Setting Up a Business in the Netherlands",
            country: "Netherlands",
            blog_content: "Starting a business in the Netherlands offers numerous advantages including a strategic location in Europe, excellent infrastructure, and a business-friendly environment. This comprehensive guide covers everything from company registration to tax obligations and compliance requirements...",
            image_url: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
            created_at: "2024-01-15",
            author: "Business Development Team",
            category: "Business Formation",
            read_time: 8
          },
          {
    id: 2,
            title: "VAT Registration Process in Germany: Step-by-Step Guide",
            country: "Germany",
            blog_content: "Germany's VAT system is one of the most complex in Europe, but understanding it is crucial for businesses operating in the German market. This guide breaks down the registration process, requirements, and ongoing obligations...",
            image_url: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
            created_at: "2024-01-12",
            author: "Tax Advisory Team",
            category: "Tax Compliance",
            read_time: 6
          },
          {
    id: 3,
            title: "E-commerce Business Setup in France: Legal Requirements",
            country: "France",
            blog_content: "France's e-commerce sector is booming, but navigating the legal landscape can be challenging. Learn about the essential requirements for setting up an online business, including consumer protection laws and digital service regulations...",
            image_url: "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
            created_at: "2024-01-10",
            author: "Legal Team",
            category: "E-commerce",
            read_time: 7
          },
          {
    id: 4,
            title: "Corporate Tax Planning Strategies for EU Businesses",
            country: "European Union",
            blog_content: "Effective tax planning is essential for businesses operating across multiple EU countries. This article explores various strategies to optimize your tax position while ensuring full compliance with EU regulations...",
            image_url: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
            created_at: "2024-01-08",
            author: "Tax Strategy Team",
            category: "Tax Planning",
            read_time: 10
          },
          {
    id: 5,
            title: "Employment Law Compliance in Spain: What You Need to Know",
            country: "Spain",
            blog_content: "Spanish employment law is known for its strong worker protections. Understanding these regulations is crucial for any business planning to hire employees in Spain. This guide covers contracts, working hours, and employee rights...",
            image_url: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
            created_at: "2024-01-05",
            author: "HR Compliance Team",
            category: "Employment Law",
            read_time: 9
          },
          {
    id: 6,
            title: "Digital Nomad Visa Programs Across Europe",
            country: "Europe",
            blog_content: "The rise of remote work has led to the emergence of digital nomad visa programs across Europe. This comprehensive overview covers the requirements, benefits, and application processes for various countries...",
            image_url: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
            created_at: "2024-01-03",
            author: "Immigration Team",
            category: "Immigration",
            read_time: 12
          }
        ];

        setBlogPosts(mockData);
        setFilteredPosts(mockData);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching blog posts:', error);
        setLoading(false);
      }
    };

    fetchBlogPosts();
  }, []);

  // Filter posts based on search term and filters
  useEffect(() => {
    let filtered = blogPosts;

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(post =>
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.blog_content.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.country.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Filter by country
    if (selectedCountry !== 'all') {
      filtered = filtered.filter(post => post.country === selectedCountry);
    }

    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(post => post.category === selectedCategory);
    }

    setFilteredPosts(filtered);
  }, [blogPosts, searchTerm, selectedCountry, selectedCategory]);

  // Get unique countries and categories for filters
  const countries = ['all', ...Array.from(new Set(blogPosts.map(post => post.country)))];
  const categories = ['all', ...Array.from(new Set(blogPosts.map(post => post.category).filter(Boolean)))];

  const truncateContent = (content: string, maxLength: number = 150) => {
    if (content.length <= maxLength) return content;
    return content.substring(0, maxLength) + '...';
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-[#0F0B1F] flex items-center justify-center">
        <div className="text-white text-lg">Loading blog posts...</div>
        </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0F0B1F]">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-16 sm:py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-6 sm:mb-8">
            <BookOpenIcon className="h-12 w-12 sm:h-16 sm:w-16 text-[#EA3A70] mx-auto mb-4 sm:mb-6" />
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">
              Business Insights & Guides
              </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
              Discover expert insights, practical guides, and the latest updates on business formation, 
              compliance, and growth strategies across Europe.
            </p>
              </div>

          {/* Search and Filters */}
          <div className="max-w-4xl mx-auto space-y-4 sm:space-y-6">
            {/* Search Bar */}
            <div className="relative">
              <SearchIcon className="absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4 sm:h-5 sm:w-5" />
              <input
                type="text"
                placeholder="Search articles, countries, or topics..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 sm:pl-12 pr-3 sm:pr-4 py-3 sm:py-4 bg-[#1B1537] border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#EA3A70] transition-colors text-sm sm:text-base"
              />
            </div>

            {/* Filter Buttons */}
            <div className="flex flex-wrap gap-3 sm:gap-4 justify-center">
              {/* Country Filter */}
              <div className="relative">
                <FilterIcon className="absolute left-2 sm:left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-3 w-3 sm:h-4 sm:w-4" />
                <select
                  value={selectedCountry}
                  onChange={(e) => setSelectedCountry(e.target.value)}
                  className="pl-8 sm:pl-10 pr-6 sm:pr-8 py-2 bg-[#1B1537] border border-gray-600 rounded-lg text-white focus:outline-none focus:border-[#EA3A70] transition-colors text-xs sm:text-sm"
                >
                  {countries.map(country => (
                    <option key={country} value={country}>
                      {country === 'all' ? 'All Countries' : country}
                    </option>
                  ))}
                </select>
              </div>

              {/* Category Filter */}
              <div className="relative">
                <TagIcon className="absolute left-2 sm:left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-3 w-3 sm:h-4 sm:w-4" />
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="pl-8 sm:pl-10 pr-6 sm:pr-8 py-2 bg-[#1B1537] border border-gray-600 rounded-lg text-white focus:outline-none focus:border-[#EA3A70] transition-colors text-xs sm:text-sm"
                >
                  {categories.map(category => (
                    <option key={category} value={category}>
                      {category === 'all' ? 'All Categories' : category}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-12 sm:py-16 px-4">
        <div className="max-w-7xl mx-auto">
          {filteredPosts.length === 0 ? (
            <div className="text-center py-16 sm:py-20">
              <BookOpenIcon className="h-12 w-12 sm:h-16 sm:w-16 text-gray-500 mx-auto mb-4" />
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">No articles found</h3>
              <p className="text-gray-400 text-sm sm:text-base">Try adjusting your search terms or filters</p>
      </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {filteredPosts.map((post) => (
                <article key={post.id} className="bg-[#1B1537] rounded-xl overflow-hidden border border-gray-700 hover:border-[#EA3A70] transition-all duration-300 hover:shadow-2xl hover:shadow-[#EA3A70]/20">
                  {/* Image */}
                  <div className="relative h-40 sm:h-48 overflow-hidden">
                    <img
                      src={post.image_url}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                    <div className="absolute top-3 sm:top-4 left-3 sm:left-4">
                      <span className="inline-flex items-center px-2 sm:px-3 py-1 rounded-full text-xs font-medium bg-[#EA3A70] text-white">
                        <MapPinIcon className="h-3 w-3 mr-1" />
                        {post.country}
                  </span>
                </div>
                  </div>

                  {/* Content */}
                  <div className="p-4 sm:p-6">
                    {/* Meta Information */}
                    <div className="flex items-center justify-between text-xs sm:text-sm text-gray-400 mb-3 sm:mb-4">
                      <div className="flex items-center">
                        <CalendarIcon className="h-3 w-3 sm:h-4 sm:w-4 mr-1" />
                        {post.created_at && formatDate(post.created_at)}
                </div>
                      <div className="flex items-center">
                        <ClockIcon className="h-3 w-3 sm:h-4 sm:w-4 mr-1" />
                        {post.read_time} min read
          </div>
        </div>

                    {/* Title */}
                    <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3 line-clamp-2">
                      {post.title}
                    </h3>

                    {/* Content Preview */}
                    <p className="text-gray-300 mb-3 sm:mb-4 line-clamp-3 text-sm sm:text-base">
                      {truncateContent(post.blog_content)}
                    </p>

                    {/* Author and Category */}
                    <div className="flex items-center justify-between mb-4 sm:mb-6">
                      <div className="flex items-center text-xs sm:text-sm text-gray-400">
                        <UserIcon className="h-3 w-3 sm:h-4 sm:w-4 mr-1" />
                        {post.author}
        </div>
                      {post.category && (
                        <span className="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-gray-700 text-gray-300">
                          {post.category}
                        </span>
                      )}
              </div>

                    {/* Read More Button */}
                    <Link
                      to={`/blog/${post.id}`}
                      className="inline-flex items-center text-[#EA3A70] hover:text-[#EA3A70]/80 font-medium transition-colors text-sm sm:text-base"
                    >
                      Read More
              <ArrowRightIcon className="h-3 w-3 sm:h-4 sm:w-4 ml-2" />
            </Link>
          </div>
                </article>
              ))}
                </div>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 sm:py-20 px-4 bg-gradient-to-r from-[#1B1537] to-[#2A1F4F]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3 sm:mb-4">
            Stay Updated with Latest Insights
          </h2>
          <p className="text-gray-300 mb-6 sm:mb-8 text-sm sm:text-base">
            Get the latest business insights, regulatory updates, and expert advice delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-3 sm:px-4 py-2 sm:py-3 bg-[#0F0B1F] border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#EA3A70] text-sm sm:text-base"
            />
            <button className="px-4 sm:px-6 py-2 sm:py-3 bg-[#EA3A70] text-white rounded-lg hover:bg-[#EA3A70]/90 transition-colors font-medium text-sm sm:text-base">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      <Footer />
      </div>
  );
}