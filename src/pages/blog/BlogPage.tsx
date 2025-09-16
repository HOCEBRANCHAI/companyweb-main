import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import DOMPurify from "dompurify";
import {
  SearchIcon,
  FilterIcon,
  MapPinIcon,
  ArrowRightIcon,
  BookOpenIcon,
} from "lucide-react";
import { Header } from "../../components/layout/Header";
import { Footer } from "../../components/layout/Footer";
import { AddBlogPost } from "../../components/blog/AddBlogPost";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = 'https://ioztpmluibvrvkvywvnp.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlvenRwbWx1aWJ2cnZrdnl3dm5wIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDcxMzY0OTQsImV4cCI6MjA2MjcxMjQ5NH0.E3ktAWoXBGSpb1NIEaj070ZY6LfngvLUXhZ3iNsH-eg';
export const supabase = createClient(supabaseUrl, supabaseAnonKey);
interface BlogPost {
  id: string;
  title: string;
  country: string;
  blog_content: string;
  image_url: string;
  created_at?: string;
  author?: string;
  category?: string;
  read_time?: number;
}

export function BlogPage() {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("all");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBlogPosts = async () => {
      try {
        setLoading(true);
        const { data, error } = await supabase
          .from("blog_posts")
          .select("*")
          .order("created_at", { ascending: false });

        if (error || !data) {
          setError("Failed to load blog posts");
          return;
        }

        const transformed = data.map((post: any) => ({
          id: post.id,
          title: post.title,
          country: post.country,
          blog_content: post.blog_content,
          image_url: post.image_url,
          created_at: post.created_at,
          author: post.author || "Business Team",
          category: post.category || "Business",
          read_time:
            post.read_time || Math.ceil(post.blog_content.length / 200),
        }));

        setBlogPosts(transformed);
      } catch {
        setError("Failed to load blog posts");
      } finally {
        setLoading(false);
      }
    };

    fetchBlogPosts();
  }, []);

  const filteredPosts = blogPosts
    .filter((post) => {
      const term = searchTerm.toLowerCase();
      return (
        post.title.toLowerCase().includes(term) ||
        post.blog_content.toLowerCase().includes(term) ||
        post.country.toLowerCase().includes(term)
      );
    })
    .filter((post) => {
      return selectedCountry === "all" || post.country === selectedCountry;
    });

  const countries = [
    "all",
    ...Array.from(new Set(blogPosts.map((p) => p.country).filter(Boolean))),
  ];

  const truncateHTML = (html: string, maxLength: number) => {
    const div = document.createElement("div");
    div.innerHTML = html;
    const text = div.textContent || div.innerText || "";
    const truncated =
      text.length > maxLength ? text.substring(0, maxLength) + "..." : text;
    return truncated;
  };

  const extractTextFromHTML = (html: string) => {
    const div = document.createElement("div");
    div.innerHTML = html;
    return div.textContent || div.innerText || "";
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-[#0F0B1F] flex items-center justify-center">
        <div className="text-white text-lg">Loading blog posts...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-[#0F0B1F]">
        <Header />
        <div className="max-w-4xl mx-auto px-4 py-16 text-center">
          <h1 className="text-3xl font-bold text-white mb-4">Error</h1>
          <p className="text-gray-300 mb-8">{error}</p>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0F0B1F]">
      <div className="sticky top-0 z-50 bg-[#0F0B1F]">
        <Header />
      </div>

      <section className="py-20 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <BookOpenIcon className="h-16 w-16 text-[#EA3A70] mb-6 mx-auto" />
          <h1 className="text-5xl font-bold text-white mb-4">
            Business Insights & Guides
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover expert insights, practical guides, and the latest updates
            on business formation and strategy across Europe.
          </p>
        </div>
        
        {/* Add Blog Post Component - Only show if no posts exist */}
        {blogPosts.length === 0 && (
          <div className="mt-8 max-w-md mx-auto">
            <AddBlogPost />
          </div>
        )}

        <div className="mt-10 flex flex-col md:flex-row items-center justify-center gap-4">
          <div className="relative w-full max-w-md">
            <SearchIcon className="absolute left-4 top-3.5 text-gray-400 h-5 w-5" />
            <input
              type="text"
              placeholder="Search articles, countries, or topics..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-[#1B1537] border border-gray-600 rounded-lg text-white"
            />
          </div>

          <div className="relative w-full max-w-xs">
            <FilterIcon className="absolute left-3 top-3.5 text-gray-400 h-5 w-5" />
            <select
              value={selectedCountry}
              onChange={(e) => setSelectedCountry(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-[#1B1537] border border-gray-600 rounded-lg text-white"
            >
              {countries.map((country) => (
                <option key={country} value={country}>
                  {country === "all" ? "All Countries" : country}
                </option>
              ))}
            </select>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          {filteredPosts.length === 0 ? (
            <div className="text-center text-gray-400">
              <BookOpenIcon className="h-12 w-12 mx-auto mb-4" />
              No articles found.
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <article
                  key={post.id}
                  className="bg-[#1B1537] rounded-xl border border-gray-700 hover:border-[#EA3A70] transition-all"
                >
                  <div className="relative h-48 rounded-t-xl overflow-hidden">
                    <img
                      src={post.image_url}
                      alt={post.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="inline-flex items-center px-3 py-1 text-xs font-medium bg-[#EA3A70] text-white rounded-full">
                        <MapPinIcon className="h-3 w-3 mr-1" />
                        {post.country}
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-3 line-clamp-2">
                      {post.title}
                    </h3>
                    <div className="text-gray-300 text-sm mb-4 line-clamp-3">
                      {extractTextFromHTML(post.blog_content).substring(0, 200)}
                      {extractTextFromHTML(post.blog_content).length > 200 && "..."}
                    </div>
                    <Link
                      to={`/blog/${post.id}`}
                      className="inline-flex items-center text-[#EA3A70] hover:text-[#EA3A70]/80 font-medium"
                    >
                      Read More
                      <ArrowRightIcon className="h-4 w-4 ml-2" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
