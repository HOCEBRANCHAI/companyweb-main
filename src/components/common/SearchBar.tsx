import React from 'react';
import { Search } from 'lucide-react';
interface SearchBarProps {
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
}
export function SearchBar({
  value,
  onChange,
  placeholder = 'Search...'
}: SearchBarProps) {
  return <div className="relative w-full">
      
      
    </div>;
}