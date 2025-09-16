import React from 'react';
import { Bell, User, Search } from 'lucide-react';
import { Link } from 'react-router-dom';
export function TopNav() {
  return <div className="border-b border-[#1E1B3F]">
      {/* Top Promotional Banner - Minimized */}
      <div className="bg-[#1E1B3F] py-1.5">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-end">
            <div className="flex items-center space-x-3">
              <span className="text-xs text-indigo-200">
                FREE Trial ends in 10 days
              </span>
              <Link to="/plans" className="px-3 py-0.5 bg-[#EA3A70] text-white text-xs font-medium rounded-full hover:bg-[#EA3A70]/90 transition-colors">
                Upgrade
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* Main Navigation Bar - Simplified */}
      <div className="bg-[#0A0826]">
        <div className="container mx-auto px-4">
          <div className="flex items-center h-14">
            {/* Search Bar - Subtle and Aligned Left */}
            <div className="flex-1 max-w-md">
              <div className="relative">
                <div className="flex items-center bg-[#1E1B3F]/50 border border-[#1E1B3F] rounded-lg px-3 py-1.5">
                  <Search className="h-4 w-4 text-indigo-300" />
                  <input type="text" placeholder="Search..." className="w-full bg-transparent border-none text-white text-sm placeholder-indigo-300 focus:outline-none focus:ring-0 px-2" />
                </div>
              </div>
            </div>
            {/* User Actions - Right Aligned */}
            <div className="flex items-center space-x-5 justify-end">
              <button className="text-indigo-300 hover:text-white transition-colors">
                <Bell className="h-5 w-5" />
              </button>
              <div className="flex items-center space-x-3">
                <div className="h-8 w-8 rounded-full bg-[#EA3A70] flex items-center justify-center">
                  <User className="h-5 w-5 text-white" />
                </div>
                <span className="text-sm font-medium text-white hidden md:block">
                  Sarah
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>;
}