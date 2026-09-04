/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo } from 'react';
import { TOOLS_DATA } from './data/tools';
import { Category, ToolItem } from './types';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ToolCard } from './components/ToolCard';
import { ToolWorkspaceModal } from './components/ToolWorkspaceModal';
import { Footer } from './components/Footer';

export default function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<Category>('Semua');
  const [activeTool, setActiveTool] = useState<ToolItem | null>(null);

  const filteredTools = useMemo(() => {
    return TOOLS_DATA.filter((tool) => {
      const matchesCategory =
        selectedCategory === 'Semua' || tool.category === selectedCategory;
      const query = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !query ||
        tool.name.toLowerCase().includes(query) ||
        tool.description.toLowerCase().includes(query) ||
        tool.path.toLowerCase().includes(query);

      return matchesCategory && matchesSearch;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <div className="w-full max-w-full px-3 py-4 bg-[#0f0f11] text-[#ededed] font-sans flex flex-col selection:bg-white selection:text-black box-border overflow-x-hidden">
      <div className="w-full max-w-full flex-1 flex flex-col box-border">
        {/* Header */}
        <Navbar toolCount={TOOLS_DATA.length} />

        {/* Search & Categories */}
        <Hero
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          filteredCount={filteredTools.length}
          totalCount={TOOLS_DATA.length}
        />

        {/* Utility Grid */}
        <main className="flex-1 w-full box-border">
          {filteredTools.length === 0 ? (
            <div className="text-center py-20 bg-[#18181b] border border-[#27272a] rounded-2xl p-6">
              <p className="text-base font-semibold text-white mb-2">
                Tidak ada utilitas yang cocok dengan "{searchQuery}"
              </p>
              <p className="text-sm text-zinc-400 mb-6">
                Coba kata kunci lain atau pilih kategori yang berbeda.
              </p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('Semua');
                }}
                className="px-5 py-2.5 bg-white text-black font-semibold text-xs rounded-lg hover:bg-zinc-200 transition-colors"
              >
                Reset Filter
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full box-border">
              {filteredTools.map((tool) => (
                <ToolCard
                  key={tool.id}
                  tool={tool}
                  onOpen={(t) => setActiveTool(t)}
                />
              ))}
            </div>
          )}
        </main>

        {/* Footer */}
        <Footer />
      </div>

      {/* Interactive Workspace Modal */}
      <ToolWorkspaceModal
        tool={activeTool}
        onClose={() => setActiveTool(null)}
      />
    </div>
  );
}
