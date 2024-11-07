import React, { useState } from 'react';
import { Search } from 'lucide-react';

interface SearchBarProps {
  onSearch: (keyword: string) => void;
  isAnalyzing: boolean;
}

function SearchBar({ onSearch, isAnalyzing }: SearchBarProps) {
  const [input, setInput] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      onSearch(input.trim());
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      <form onSubmit={handleSubmit} className="relative">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter a keyword to analyze..."
          className="w-full px-6 py-4 text-lg rounded-full border-2 border-indigo-100 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all"
          disabled={isAnalyzing}
        />
        <button
          type="submit"
          disabled={isAnalyzing}
          className="absolute right-3 top-1/2 -translate-y-1/2 bg-indigo-600 text-white p-3 rounded-full hover:bg-indigo-700 transition-colors disabled:bg-indigo-400"
        >
          {isAnalyzing ? (
            <div className="w-6 h-6 border-t-2 border-white rounded-full animate-spin" />
          ) : (
            <Search className="w-6 h-6" />
          )}
        </button>
      </form>
    </div>
  );
}

export default SearchBar;