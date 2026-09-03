import React from 'react';
import { X, ExternalLink, Shield, CheckCircle, Code, Cpu, ArrowRight } from 'lucide-react';
import { ToolItem } from '../types';

interface ToolModalProps {
  tool: ToolItem | null;
  onClose: () => void;
}

export const ToolModal: React.FC<ToolModalProps> = ({ tool, onClose }) => {
  if (!tool) return null;

  const handleLaunch = () => {
    window.open(tool.targetUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-zinc-950/80 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-2xl bg-zinc-950 border border-zinc-800 rounded-xl shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-zinc-800 bg-zinc-900/50">
          <div className="flex items-center space-x-3">
            <span className="font-mono text-xs font-bold text-zinc-400 bg-zinc-900 border border-zinc-800 px-2.5 py-1 rounded">
              {tool.version}
            </span>
            <span className="font-mono text-xs font-bold text-emerald-400 bg-emerald-950/40 border border-emerald-800/60 px-2 py-1 rounded">
              {tool.badgeType}
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-md text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 space-y-6">
          <div>
            <h2 className="text-2xl font-bold text-zinc-100 mb-2">{tool.name}</h2>
            <p className="text-sm text-zinc-400 leading-relaxed font-normal">
              {tool.extendedDescription}
            </p>
          </div>

          {/* Features list */}
          <div>
            <h3 className="text-xs font-mono font-semibold tracking-wider text-zinc-400 uppercase mb-3 flex items-center space-x-2">
              <Code className="w-3.5 h-3.5 text-zinc-400" />
              <span>Architectural Specifications</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {tool.features.map((feature, idx) => (
                <div
                  key={idx}
                  className="flex items-start space-x-2.5 p-3 rounded-lg bg-zinc-900/50 border border-zinc-800/80"
                >
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span className="text-xs text-zinc-300">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Privacy Security Note */}
          <div className="flex items-center space-x-3 p-3.5 rounded-lg bg-zinc-900/80 border border-zinc-800 text-xs text-zinc-400">
            <Shield className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>
              <strong>Zero-Knowledge Guarantee:</strong> Runs completely within your local browser sandbox. No file payloads, camera streams, or audio data ever transit through external servers.
            </span>
          </div>

          {/* Target URL Info */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pt-4 border-t border-zinc-900">
            <div className="font-mono text-xs text-zinc-500 break-all">
              Endpoint: <span className="text-zinc-300">{tool.targetUrl}</span>
            </div>

            <button
              onClick={handleLaunch}
              className="w-full sm:w-auto px-5 py-2.5 rounded-lg bg-zinc-100 hover:bg-white text-zinc-950 font-mono text-xs font-bold flex items-center justify-center space-x-2 transition-all cursor-pointer shadow-md"
            >
              <span>Launch Tool Now</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
