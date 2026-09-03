import React, { useState, useEffect } from 'react';
import { Search, ExternalLink, X, FileText, Camera, Video, Calculator, CornerDownLeft } from 'lucide-react';
import { ToolItem } from '../types';

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  tools: ToolItem[];
  onSelectTool: (tool: ToolItem) => void;
}

export const CommandPalette: React.FC<CommandPaletteProps> = ({
  isOpen,
  onClose,
  tools,
  onSelectTool,
}) => {
  const [query, setQuery] = useState('');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const filteredTools = tools.filter(
    (t) =>
      t.name.toLowerCase().includes(query.toLowerCase()) ||
      t.description.toLowerCase().includes(query.toLowerCase()) ||
      t.tags.some((tag) => tag.toLowerCase().includes(query.toLowerCase()))
  );

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-zinc-950/80 backdrop-blur-md animate-in fade-in duration-150"
      onClick={onClose}
    >
      <div
        className="w-full max-w-xl bg-zinc-950 border border-zinc-800 rounded-xl shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Bar */}
        <div className="flex items-center px-4 py-3 border-b border-zinc-800 bg-zinc-900/40">
          <Search className="w-4 h-4 text-zinc-500 mr-3 shrink-0" />
          <input
            autoFocus
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Type a command or search tools..."
            className="w-full bg-transparent text-sm text-zinc-100 placeholder-zinc-500 focus:outline-none font-mono"
          />
          <button
            onClick={onClose}
            className="text-xs font-mono text-zinc-500 hover:text-zinc-300 px-2 py-1 bg-zinc-900 rounded border border-zinc-800"
          >
            ESC
          </button>
        </div>

        {/* Results list */}
        <div className="max-h-80 overflow-y-auto p-2 space-y-1">
          {filteredTools.length === 0 ? (
            <div className="py-8 text-center text-xs font-mono text-zinc-500">
              No tools found matching "{query}"
            </div>
          ) : (
            filteredTools.map((tool) => (
              <div
                key={tool.id}
                onClick={() => {
                  onSelectTool(tool);
                  onClose();
                }}
                className="flex items-center justify-between p-3 rounded-lg hover:bg-zinc-900 transition-colors cursor-pointer group"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 rounded bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-300 group-hover:border-zinc-700">
                    {tool.icon === 'FileText' && <FileText className="w-4 h-4" />}
                    {tool.icon === 'Camera' && <Camera className="w-4 h-4" />}
                    {tool.icon === 'Video' && <Video className="w-4 h-4" />}
                    {tool.icon === 'Calculator' && <Calculator className="w-4 h-4" />}
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-zinc-200 group-hover:text-white">
                      {tool.name}
                    </h4>
                    <p className="text-xs text-zinc-500 font-mono line-clamp-1">
                      {tool.description}
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  <span className="font-mono text-[10px] text-zinc-500 bg-zinc-900 px-2 py-0.5 rounded border border-zinc-800">
                    {tool.version}
                  </span>
                  <CornerDownLeft className="w-3.5 h-3.5 text-zinc-600 group-hover:text-zinc-300" />
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer info */}
        <div className="px-4 py-2.5 border-t border-zinc-900 bg-zinc-900/30 flex items-center justify-between text-[11px] font-mono text-zinc-500">
          <span>Navigate with arrow keys or click</span>
          <span>NAWAL / TOOLS OS</span>
        </div>
      </div>
    </div>
  );
};
