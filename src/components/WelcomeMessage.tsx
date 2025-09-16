import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRightIcon, ClockIcon } from 'lucide-react';
import { SearchBar } from './common/SearchBar';
interface WelcomeMessageProps {
  userName: string;
  lastLogin: Date;
}
export function WelcomeMessage({
  userName,
  lastLogin
}: WelcomeMessageProps) {
  const formatLastLogin = (date: Date) => {
    const today = new Date();
    const yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() - 1);
    if (date.toDateString() === today.toDateString()) {
      return `Today at ${date.toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit'
      })}`;
    } else if (date.toDateString() === yesterday.toDateString()) {
      return `Yesterday at ${date.toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit'
      })}`;
    } else {
      return date.toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      });
    }
  };
  return <div className="space-y-4">
      <div className="bg-[#4A2D80]/20 rounded-[32px] p-6 border border-[#4A2D80]/30 backdrop-blur-sm">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-white">
              Welcome back, {userName}!
            </h1>
            <div className="flex items-center mt-2 text-[#EA3A70]/90">
              <ClockIcon className="h-5 w-5 mr-2" />
              <p className="text-xl">
                Last login: {formatLastLogin(lastLogin)}
              </p>
            </div>
          </div>
          <div className="flex space-x-3">
            <Link to="/corporate" className="px-5 py-2.5 bg-gradient-to-r from-[#EA3A70] to-[#4A2D80] text-white rounded-[32px] hover:from-[#EA3A70]/90 hover:to-[#4A2D80]/90 text-base font-medium transition-colors flex items-center">
              Company Profile
              <ArrowRightIcon className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
      <div className="w-full max-w-2xl">
        <SearchBar variant="light" placeholder="Search tasks, documents, or get help..." />
      </div>
    </div>;
}