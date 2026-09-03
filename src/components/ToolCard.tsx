import React from 'react';
import { FileText, Camera, Video, Calculator, ExternalLink, Info, ArrowUpRight } from 'lucide-react';
import { ToolItem } from '../types';

interface ToolCardProps {
  tool: ToolItem;
  onInspect: (tool: ToolItem) => void;
}

export const ToolCard: React.FC<ToolCardProps> = ({ tool, onInspect }) => {
  const getIcon = (iconName: ToolItem['icon']) => {
    switch (iconName) {
      case 'FileText':
        return <FileText className="w-6 h-6" />;
      case 'Camera':
        return <Camera className="w-6 h-6" />;
      case 'Video':
        return <Video className="w-6 h-6" />;
      case 'Calculator':
        return <Calculator className="w-6 h-6" />;
      default:
        return <FileText className="w-6 h-6" />;
    }
  };

  const handleLaunch = (e: React.MouseEvent) => {
    e.stopPropagation();
    window.open(tool.targetUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div
      onClick={handleLaunch}
      className="group flex flex-col border border-zinc-800 bg-zinc-900/20 p-8 justify-between hover:border-zinc-500 hover:bg-zinc-900/40 transition-all cursor-pointer rounded-xl relative"
    >
      <div>
        <div className="flex justify-between items-start mb-6">
          <div className="w-12 h-12 rounded bg-zinc-800 flex items-center justify-center text-zinc-300 group-hover:text-white transition-colors">
            {getIcon(tool.icon)}
          </div>
          <div className="flex flex-col items-end gap-1">
            <span className="text-[10px] font-mono bg-zinc-800 px-2 py-0.5 rounded border border-zinc-700 text-zinc-400">
              {tool.version}
            </span>
            <span className="text-[9px] font-mono text-zinc-500 uppercase tracking-widest">
              {tool.badgeType}
            </span>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-2 text-zinc-100 group-hover:text-white transition-colors flex items-center justify-between">
            <span>{tool.name}</span>
            <ArrowUpRight className="w-4 h-4 text-zinc-600 group-hover:text-zinc-300 transition-colors" />
          </h3>
          <p className="text-zinc-500 text-sm leading-snug">
            {tool.description}
          </p>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mt-4">
          {tool.tags.map((tag) => (
            <span
              key={tag}
              className="font-mono text-[10px] text-zinc-400 bg-zinc-900/80 border border-zinc-800 px-2 py-0.5 rounded"
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>

      <div className="pt-6 mt-6 border-t border-zinc-900 flex items-center justify-between">
        <button
          onClick={(e) => {
            e.stopPropagation();
            onInspect(tool);
          }}
          className="text-xs font-mono text-zinc-400 hover:text-zinc-200 flex items-center space-x-1.5 transition-colors cursor-pointer"
        >
          <Info className="w-3.5 h-3.5" />
          <span>Inspect Specs</span>
        </button>

        <button
          onClick={handleLaunch}
          className="px-3.5 py-1.5 rounded-md bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 hover:border-zinc-500 text-zinc-200 text-xs font-mono font-medium flex items-center space-x-1.5 transition-all cursor-pointer shadow-xs"
        >
          <span>Launch App</span>
          <ExternalLink className="w-3 h-3 text-zinc-400" />
        </button>
      </div>
    </div>
  );
};

