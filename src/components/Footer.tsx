import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="h-12 border-t border-zinc-800 flex flex-col sm:flex-row items-center justify-between px-6 sm:px-10 bg-zinc-950 text-zinc-600 font-mono text-[9px] uppercase tracking-[0.25em] shrink-0 gap-2 py-2 sm:py-0">
      <div>Geometric Balance Protocol</div>
      <div>Build 2026.1 / Node_V4</div>
      <div className="text-zinc-400">Privacy Secured: No files leave your browser</div>
    </footer>
  );
};

