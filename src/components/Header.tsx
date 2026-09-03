import React from 'react';
import { Shield, Terminal, Command, ExternalLink } from 'lucide-react';

interface HeaderProps {
  onOpenCommandPalette: () => void;
  activeCount: number;
}

export const Header: React.FC<HeaderProps> = ({ onOpenCommandPalette, activeCount }) => {
  return (
    <nav className="h-16 border-b border-zinc-800 flex items-center justify-between px-6 sm:px-10 bg-zinc-950/50 backdrop-blur-sm shrink-0">
      <div className="flex items-center gap-4 sm:gap-6">
        <span className="font-mono font-bold tracking-tighter text-lg text-zinc-100">
          NAWAL AIO
        </span>
        <div className="flex items-center gap-2 px-3 py-1 bg-zinc-900 border border-zinc-800 rounded-full">
          <div className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)]"></div>
          <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-400">
            ALL-IN-ONE SUITE
          </span>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <div className="hidden md:flex px-2.5 py-1 border border-zinc-800 rounded items-center gap-2 bg-zinc-900/50">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-zinc-500">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/>
          </svg>
          <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-wider">
            Privacy Secured
          </span>
        </div>

        <button
          onClick={onOpenCommandPalette}
          className="flex items-center space-x-2 px-3 py-1.5 rounded-md border border-zinc-800 bg-zinc-900 hover:bg-zinc-800 hover:border-zinc-700 transition-all text-zinc-300 text-xs font-mono group cursor-pointer"
          title="Open command palette (Ctrl+K)"
        >
          <Command className="w-3.5 h-3.5 text-zinc-400 group-hover:text-zinc-100" />
          <span className="hidden xs:inline">Search Tools</span>
          <kbd className="hidden sm:inline-block px-1.5 py-0.5 text-[10px] font-mono bg-zinc-800 text-zinc-400 rounded border border-zinc-700">
            ⌘K
          </kbd>
        </button>
      </div>
    </nav>
  );
};

