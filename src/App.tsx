/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useMemo } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ToolCard } from './components/ToolCard';
import { ToolModal } from './components/ToolModal';
import { CommandPalette } from './components/CommandPalette';
import { Footer } from './components/Footer';
import { TOOLS_DATA } from './data/tools';
import { ToolItem } from './types';
import { ShieldCheck, Cpu, Terminal, ExternalLink } from 'lucide-react';

export default function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [inspectingTool, setInspectingTool] = useState<ToolItem | null>(null);
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState(false);

  // Filter tools based on search query and category
  const filteredTools = useMemo(() => {
    return TOOLS_DATA.filter((tool) => {
      const matchesCategory =
        selectedCategory === 'All' || tool.category === selectedCategory;
      const matchesSearch =
        tool.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        tool.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        tool.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [searchQuery, selectedCategory]);

  // Keyboard shortcut listener for number keys 1-4
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Ignore if typing in input/textarea
      if (['INPUT', 'TEXTAREA'].includes((e.target as HTMLElement).tagName)) {
        return;
      }

      if (e.key >= '1' && e.key <= '4') {
        const index = parseInt(e.key) - 1;
        if (TOOLS_DATA[index]) {
          setInspectingTool(TOOLS_DATA[index]);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="bg-[#09090b] text-zinc-100 font-sans min-h-screen flex flex-col border border-zinc-800 box-border antialiased selection:bg-zinc-800 selection:text-zinc-100" style={{ backgroundColor: '#09090b' }}>
      {/* Top Header Bar */}
      <Header
        onOpenCommandPalette={() => setIsCommandPaletteOpen(true)}
        activeCount={TOOLS_DATA.length}
      />

      {/* Hero Section */}
      <Hero
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        totalTools={TOOLS_DATA.length}
      />

      {/* Main Grid Area */}
      <main className="flex-1 px-6 sm:px-10 py-8 max-w-7xl mx-auto w-full">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-3">
            <h2 className="text-sm font-mono tracking-widest text-zinc-400 uppercase">
              Available Utilities
            </h2>
            <span className="text-xs font-mono bg-zinc-900 border border-zinc-800 px-2 py-0.5 rounded text-zinc-400">
              {filteredTools.length} / {TOOLS_DATA.length}
            </span>
          </div>

          <div className="hidden sm:flex items-center space-x-2 text-xs font-mono text-zinc-500">
            <span>Quick Select:</span>
            <kbd className="px-1.5 py-0.5 bg-zinc-900 border border-zinc-800 rounded text-zinc-400">1-4</kbd>
          </div>
        </div>

        {/* 2x2 Launch Grid */}
        {filteredTools.length === 0 ? (
          <div className="py-20 text-center rounded-xl border border-zinc-800 bg-zinc-900/20">
            <p className="text-sm font-mono text-zinc-400 mb-2">No utilities found matching your query.</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('All');
              }}
              className="text-xs font-mono text-zinc-300 underline underline-offset-4 hover:text-white cursor-pointer"
            >
              Reset filters & search
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredTools.map((tool) => (
              <ToolCard
                key={tool.id}
                tool={tool}
                onInspect={(t) => setInspectingTool(t)}
              />
            ))}
          </div>
        )}
      </main>

      {/* Footer & Technical Status Bar */}
      <Footer />

      {/* Modals */}
      <ToolModal
        tool={inspectingTool}
        onClose={() => setInspectingTool(null)}
      />

      <CommandPalette
        isOpen={isCommandPaletteOpen}
        onClose={() => setIsCommandPaletteOpen(false)}
        tools={TOOLS_DATA}
        onSelectTool={(tool) => setInspectingTool(tool)}
      />
    </div>
  );
}

