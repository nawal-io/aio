import React from 'react';
import { Category } from '../types';
import { Search, X } from 'lucide-react';

interface HeroProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  selectedCategory: Category;
  setSelectedCategory: (category: Category) => void;
  filteredCount: number;
  totalCount: number;
}

const CATEGORIES: { label: string; value: Category }[] = [
  { label: 'Semua', value: 'Semua' },
  { label: 'Dokumen & Kerja', value: 'Dokumen & Kerja' },
  { label: 'Media & Kreatif', value: 'Media & Kreatif' },
  { label: 'Utilitas & Network', value: 'Utilitas & Network' },
];

export const Hero: React.FC<HeroProps> = ({
  searchQuery,
  setSearchQuery,
  selectedCategory,
  setSelectedCategory,
  filteredCount,
  totalCount,
}) => {
  return (
    <div className="space-y-5 mb-8 w-full box-border">
      {/* Search Input Bar */}
      <div className="relative w-full box-border">
        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-zinc-400">
          <Search className="w-5 h-5" />
        </div>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Cari utilitas (contoh: qr, pdf, cv, speed)..."
          className="w-full bg-[#18181b] border border-[#27272a] pl-12 pr-24 py-3.5 text-white placeholder-zinc-500 text-sm rounded-xl focus:outline-none focus:border-white transition-colors min-h-[48px] box-border"
        />
        <div className="absolute inset-y-0 right-0 pr-4 flex items-center gap-2">
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="text-xs text-zinc-400 hover:text-white p-1"
              aria-label="Clear search"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <span className="text-xs text-zinc-500 font-mono hidden sm:inline">
            {filteredCount} / {totalCount}
          </span>
        </div>
      </div>

      {/* Category Tabs (Horizontally scrollable, shrink-0) */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none w-full whitespace-nowrap box-border">
        {CATEGORIES.map((cat) => {
          const isActive = selectedCategory === cat.value;
          return (
            <button
              key={cat.value}
              onClick={() => setSelectedCategory(cat.value)}
              className={`px-4 py-2.5 text-xs font-semibold rounded-lg transition-all shrink-0 min-h-[44px] flex items-center ${
                isActive
                  ? 'bg-white text-black font-bold shadow-sm'
                  : 'bg-[#18181b] text-[#d4d4d8] border border-[#27272a] hover:border-zinc-500 hover:text-white'
              }`}
            >
              {cat.label}
            </button>
          );
        })}
      </div>
    </div>
  );
};
