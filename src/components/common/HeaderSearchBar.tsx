import React from 'react';
import { Search } from 'lucide-react';
interface HeaderSearchBarProps {
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
export function HeaderSearchBar({
  value,
  onChange
}: HeaderSearchBarProps) {
  return <div className="relative w-full">
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
      <input type="text" placeholder="Search your Entity Portal" value={value} onChange={onChange} className="w-full pl-10 pr-4 py-4 rounded-[32px] border bg-[#1E1B3F] text-white placeholder-gray-300 border-[#4A2D80]/30 focus:border-[#EA3A70]/50 focus:outline-none transition-colors" />
    </div>;
}