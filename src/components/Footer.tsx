import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="mt-16 pt-8 border-t border-[#27272a] flex flex-col sm:flex-row justify-between items-center text-xs text-zinc-400 gap-4">
      <div>Open Source / MIT License</div>
      <div>100% Client-Side Local Execution Sandbox</div>
      <div>© {new Date().getFullYear()} nawal.io Ecosystem</div>
    </footer>
  );
};
