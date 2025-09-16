import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRightIcon } from 'lucide-react';
interface DashboardActionProps {
  title: string;
  description: string;
  icon: ReactNode;
  link?: string;
  action?: string;
  colorClass: string;
  delay?: number;
}
export function DashboardAction({
  title,
  description,
  icon,
  link,
  action,
  colorClass,
  delay = 0
}: DashboardActionProps) {
  const animationStyle = {
    animationDelay: `${delay}s`
  };
  return <div className="bg-indigo-800/30 backdrop-blur-md rounded-2xl border border-indigo-500/30 p-6 hover:shadow-lg transition-all duration-300 group animate-fadeInUp" style={animationStyle}>
      <div className="relative z-10 h-full flex flex-col">
        <div className="flex items-start justify-between mb-4">
          <div className={`p-3 rounded-xl bg-gradient-to-br ${colorClass} bg-opacity-20`}>
            {icon}
          </div>
        </div>
        <h3 className="text-lg font-bold text-white mb-2">{title}</h3>
        <p className="text-indigo-200 text-sm mb-4">{description}</p>
        <div className="mt-auto">
          {link ? <Link to={link} className="inline-flex items-center text-indigo-300 hover:text-white font-medium transition-colors">
              Access
              <ArrowRightIcon className="ml-2 h-4 w-4" />
            </Link> : <button className="inline-flex items-center text-indigo-300 hover:text-white font-medium transition-colors">
              Generate
              <ArrowRightIcon className="ml-2 h-4 w-4" />
            </button>}
        </div>
      </div>
    </div>;
}