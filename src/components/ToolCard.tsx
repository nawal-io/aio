import React from 'react';
import { ToolItem } from '../types';
import { ArrowRight, QrCode, Activity, FileText, Layers, Video, Camera, Zap, Cpu } from 'lucide-react';

interface ToolCardProps {
  tool: ToolItem;
  onOpen: (tool: ToolItem) => void;
}

export const ToolCard: React.FC<ToolCardProps> = ({ tool, onOpen }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'QrCode': return <QrCode className="w-5 h-5 text-white" />;
      case 'Activity': return <Activity className="w-5 h-5 text-white" />;
      case 'FileText': return <FileText className="w-5 h-5 text-white" />;
      case 'Layers': return <Layers className="w-5 h-5 text-white" />;
      case 'Video': return <Video className="w-5 h-5 text-white" />;
      case 'Camera': return <Camera className="w-5 h-5 text-white" />;
      case 'Zap': return <Zap className="w-5 h-5 text-white" />;
      case 'Cpu': return <Cpu className="w-5 h-5 text-white" />;
      default: return <FileText className="w-5 h-5 text-white" />;
    }
  };

  return (
    <div
      onClick={() => onOpen(tool)}
      className="w-full block box-border bg-[#18181b] border border-[#27272a] rounded-xl p-4 sm:p-5 flex flex-col justify-between group hover:border-white transition-all cursor-pointer min-h-[160px]"
    >
      <div>
        <div className="flex items-center justify-between mb-3 flex-wrap gap-2">
          <div className="p-2.5 bg-[#0f0f11] border border-[#27272a] rounded-lg group-hover:border-white transition-colors">
            {getIcon(tool.iconName)}
          </div>
          <span className="text-xs font-medium text-zinc-400 bg-[#0f0f11] border border-[#27272a] px-2.5 py-1 rounded-md">
            {tool.category}
          </span>
        </div>

        <h3 className="text-lg font-bold text-white mb-2 group-hover:text-zinc-200 transition-colors">
          {tool.name}
        </h3>

        <p className="text-[#d4d4d8] text-sm leading-relaxed mb-4">
          {tool.description}
        </p>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-2 pt-3 border-t border-[#27272a]/60">
        <span className="text-xs font-mono text-zinc-500">{tool.subdomain}</span>
        <div className="flex items-center space-x-1.5 text-xs font-semibold text-white group-hover:translate-x-1 transition-transform bg-[#0f0f11] border border-[#27272a] group-hover:border-white px-3 py-1.5 rounded-lg">
          <span>Buka</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </div>
      </div>
    </div>
  );
};
