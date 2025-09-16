import React from 'react';
interface DashboardCardProps {
  title: string;
  icon: ReactNode;
  children: ReactNode;
}
export function DashboardCard({
  title,
  icon,
  children
}: DashboardCardProps) {
  return <div className="bg-indigo-800/30 backdrop-blur-md rounded-2xl overflow-hidden border border-indigo-500/30 shadow-xl">
      <div className="p-5 border-b border-indigo-500/30">
        <div className="flex items-center">
          <div className="p-2 rounded-lg bg-indigo-500/20 mr-3">{icon}</div>
          <h3 className="text-lg font-bold text-white">{title}</h3>
        </div>
      </div>
      <div className="p-5">{children}</div>
    </div>;
}