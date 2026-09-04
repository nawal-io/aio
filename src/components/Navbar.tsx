import React from 'react';

interface NavbarProps {
  toolCount: number;
}

export const Navbar: React.FC<NavbarProps> = () => {
  return (
    <header className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-[#27272a] pb-6 mb-8 gap-4">
      <div>
        <div className="flex items-center gap-3 mb-2">
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">nawal.io</h1>
          <span className="px-2.5 py-1 bg-[#18181b] border border-[#27272a] text-xs font-medium text-zinc-300 rounded-md">
            100% Client-Side
          </span>
        </div>
        <p className="text-[#d4d4d8] text-base max-w-xl">
          Zero server tracking and zero data collection. All tools run entirely offline in your browser sandbox.
        </p>
      </div>
      <div className="flex items-center gap-2.5 bg-[#18181b] border border-[#27272a] px-3.5 py-2 rounded-lg">
        <span className="w-2.5 h-2.5 bg-emerald-500 rounded-full animate-pulse"></span>
        <span className="text-xs font-semibold text-white tracking-wide">Fully Offline Ready</span>
      </div>
    </header>
  );
};
