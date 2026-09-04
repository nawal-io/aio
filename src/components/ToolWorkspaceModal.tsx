import React, { useState } from 'react';
import { ToolItem } from '../types';
import { X, ArrowUpRight, Download, Check, RefreshCw, Sliders, ShieldCheck, Terminal, Copy, FileText } from 'lucide-react';

interface ToolWorkspaceModalProps {
  tool: ToolItem | null;
  onClose: () => void;
}

export const ToolWorkspaceModal: React.FC<ToolWorkspaceModalProps> = ({ tool, onClose }) => {
  if (!tool) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm animate-fadeIn">
      <div className="bg-[#121215] border border-[#26262a] w-full max-w-4xl max-h-[90vh] flex flex-col shadow-2xl overflow-hidden">
        
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#26262a] bg-[#0a0a0c]">
          <div className="flex items-center space-x-3">
            <span className="font-mono text-xs uppercase tracking-widest text-[#a1a1aa] bg-[#121215] border border-[#26262a] px-2 py-0.5">
              {tool.tagBadge}
            </span>
            <h2 className="text-xl font-bold font-mono text-white tracking-tight">
              {tool.name}
            </h2>
            <span className="hidden sm:inline-block font-mono text-xs text-zinc-500">
              ({tool.subdomain})
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-zinc-400 hover:text-white bg-[#121215] border border-[#26262a] hover:border-white transition-all"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body / Tool Simulator */}
        <div className="p-6 overflow-y-auto flex-1 space-y-6">
          <div className="bg-[#0a0a0c] border border-[#26262a] p-4 flex items-center justify-between">
            <div>
              <p className="text-sm font-sans text-white font-medium">{tool.description}</p>
              <div className="flex items-center space-x-2 mt-2 font-mono text-xs text-emerald-400">
                <ShieldCheck className="w-4 h-4" />
                <span>100% Local Browser Execution — No Server Uplink</span>
              </div>
            </div>
            <div className="hidden md:block font-mono text-xs text-[#a1a1aa] text-right">
              <div>STATUS: ONLINE</div>
              <div>LATENCY: 0.0ms (LOCAL)</div>
            </div>
          </div>

          {/* Render Tool-Specific Interactive Simulator */}
          <ToolSimulator toolId={tool.id} />
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 border-t border-[#26262a] bg-[#0a0a0c] flex items-center justify-between">
          <span className="font-mono text-xs text-[#a1a1aa]">
            SECURE CLIENT SANDBOX V4.2
          </span>
          <button
            onClick={onClose}
            className="font-mono text-xs uppercase tracking-wider px-5 py-2 bg-white text-black font-bold hover:bg-zinc-200 transition-colors"
          >
            Close Utility
          </button>
        </div>
      </div>
    </div>
  );
};

// Tool Simulator Components
const ToolSimulator: React.FC<{ toolId: string }> = ({ toolId }) => {
  switch (toolId) {
    case 'qr': return <QRStudioSimulator />;
    case 'speed': return <SpeedSimulator />;
    case 'suriz': return <SurizSimulator />;
    case 'cv': return <CVSimulator />;
    case 'pdf': return <PDFSimulator />;
    case 'media': return <MediaSimulator />;
    case 'mosaic': return <MosaicSimulator />;
    case 'glitch': return <GlitchSimulator />;
    case 'recorder': return <RecorderSimulator />;
    case 'photobooth': return <PhotoboothSimulator />;
    case 'kalkulator-elektronik': return <KalkulatorSimulator />;
    default: return <DefaultSimulator />;
  }
};

// 1. QR Studio
const QRStudioSimulator = () => {
  const [text, setText] = useState('https://nawal.io');
  const [copied, setCopied] = useState(false);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="space-y-4">
        <div>
          <label className="block font-mono text-xs text-[#a1a1aa] uppercase mb-2">Payload Content (URL / WiFi / vCard)</label>
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="w-full bg-[#121215] border border-[#26262a] p-3 text-white font-mono text-sm h-32 focus:outline-none focus:border-white"
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block font-mono text-xs text-[#a1a1aa] uppercase mb-1">Error Correction</label>
            <select className="w-full bg-[#121215] border border-[#26262a] p-2 text-white font-mono text-xs">
              <option>High (30% recovery)</option>
              <option>Medium (15% recovery)</option>
              <option>Low (7% recovery)</option>
            </select>
          </div>
          <div>
            <label className="block font-mono text-xs text-[#a1a1aa] uppercase mb-1">Export Format</label>
            <select className="w-full bg-[#121215] border border-[#26262a] p-2 text-white font-mono text-xs">
              <option>SVG Vector</option>
              <option>PNG High-Res</option>
            </select>
          </div>
        </div>
        <button
          onClick={() => { setCopied(true); setTimeout(() => setCopied(false), 2000); }}
          className="w-full py-3 bg-white text-black font-mono text-xs uppercase tracking-wider font-bold flex items-center justify-center space-x-2 hover:bg-zinc-200 transition-colors"
        >
          {copied ? <Check className="w-4 h-4" /> : <Download className="w-4 h-4" />}
          <span>{copied ? 'Generated & Saved Locally' : 'Generate & Download QR Code'}</span>
        </button>
      </div>

      <div className="bg-[#121215] border border-[#26262a] p-6 flex flex-col items-center justify-center text-center">
        <div className="w-48 h-48 bg-white p-3 border-2 border-black flex items-center justify-center relative group">
          {/* Simulated QR Code matrix artwork */}
          <div className="w-full h-full grid grid-cols-6 gap-1 bg-black p-2">
            {Array.from({ length: 36 }).map((_, i) => (
              <div key={i} className={(i % 2 === 0 || i % 5 === 0) ? 'bg-white' : 'bg-black'} />
            ))}
          </div>
        </div>
        <p className="font-mono text-xs text-[#a1a1aa] mt-4">LIVE CANVAS RENDER (64KB ENTROPY)</p>
      </div>
    </div>
  );
};

// 2. Speed Telemetry
const SpeedSimulator = () => {
  const [testing, setTesting] = useState(false);
  const [downloadSpeed, setDownloadSpeed] = useState('0.00');
  const [uploadSpeed, setUploadSpeed] = useState('0.00');
  const [ping, setPing] = useState('0');

  const runTest = () => {
    setTesting(true);
    setDownloadSpeed('...');
    setUploadSpeed('...');
    setPing('...');
    setTimeout(() => {
      setDownloadSpeed('384.2');
      setUploadSpeed('142.8');
      setPing('4.2');
      setTesting(false);
    }, 1500);
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-[#121215] border border-[#26262a] p-5 text-center">
          <span className="font-mono text-xs text-[#a1a1aa] uppercase block mb-1">Download Bandwidth</span>
          <div className="text-3xl font-mono font-bold text-white my-2">{downloadSpeed} <span className="text-sm font-normal text-zinc-400">Mbps</span></div>
          <span className="font-mono text-[10px] text-emerald-400">PEAK LOCAL EDGE</span>
        </div>
        <div className="bg-[#121215] border border-[#26262a] p-5 text-center">
          <span className="font-mono text-xs text-[#a1a1aa] uppercase block mb-1">Upload Bandwidth</span>
          <div className="text-3xl font-mono font-bold text-white my-2">{uploadSpeed} <span className="text-sm font-normal text-zinc-400">Mbps</span></div>
          <span className="font-mono text-[10px] text-emerald-400">PEAK LOCAL EDGE</span>
        </div>
        <div className="bg-[#121215] border border-[#26262a] p-5 text-center">
          <span className="font-mono text-xs text-[#a1a1aa] uppercase block mb-1">TCP Latency / Jitter</span>
          <div className="text-3xl font-mono font-bold text-white my-2">{ping} <span className="text-sm font-normal text-zinc-400">ms</span></div>
          <span className="font-mono text-[10px] text-emerald-400">0.4ms JITTER</span>
        </div>
      </div>
      <button
        disabled={testing}
        onClick={runTest}
        className="w-full py-4 bg-white text-black font-mono text-xs uppercase tracking-wider font-bold hover:bg-zinc-200 transition-colors flex items-center justify-center space-x-2"
      >
        <RefreshCw className={`w-4 h-4 ${testing ? 'animate-spin' : ''}`} />
        <span>{testing ? 'Probing Edge Telemetry...' : 'Run Network Diagnostic Test'}</span>
      </button>
    </div>
  );
};

// 3. Suriz (Surat Izin Maker)
const SurizSimulator = () => {
  const [step, setStep] = useState(1);
  const [name, setName] = useState('Ahmad Fauzi');
  const [reason, setReason] = useState('Sakit Demam Berdarah (Disertai Surat Dokter)');
  const [dates, setDates] = useState('4 - 5 September 2026');

  return (
    <div className="space-y-6">
      <div className="flex border-b border-[#26262a] pb-4 font-mono text-xs space-x-4">
        <span className={step === 1 ? 'text-white font-bold' : 'text-zinc-500'}>01. SENDER & ENTITY</span>
        <span className={step === 2 ? 'text-white font-bold' : 'text-zinc-500'}>02. REASON & SCHEDULE</span>
        <span className={step === 3 ? 'text-white font-bold' : 'text-zinc-500'}>03. OFFICIAL PREVIEW</span>
      </div>

      {step === 1 && (
        <div className="space-y-4">
          <div>
            <label className="block font-mono text-xs text-[#a1a1aa] uppercase mb-1">Full Name</label>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="w-full bg-[#121215] border border-[#26262a] p-3 text-white font-mono text-sm" />
          </div>
          <div>
            <label className="block font-mono text-xs text-[#a1a1aa] uppercase mb-1">Institution / Company</label>
            <input type="text" defaultValue="PT Teknologi Nawal Nusantara" className="w-full bg-[#121215] border border-[#26262a] p-3 text-white font-mono text-sm" />
          </div>
          <button onClick={() => setStep(2)} className="w-full py-3 bg-white text-black font-mono text-xs font-bold uppercase">Next Step</button>
        </div>
      )}

      {step === 2 && (
        <div className="space-y-4">
          <div>
            <label className="block font-mono text-xs text-[#a1a1aa] uppercase mb-1">Reason for Absence</label>
            <input type="text" value={reason} onChange={(e) => setReason(e.target.value)} className="w-full bg-[#121215] border border-[#26262a] p-3 text-white font-mono text-sm" />
          </div>
          <div>
            <label className="block font-mono text-xs text-[#a1a1aa] uppercase mb-1">Date Range</label>
            <input type="text" value={dates} onChange={(e) => setDates(e.target.value)} className="w-full bg-[#121215] border border-[#26262a] p-3 text-white font-mono text-sm" />
          </div>
          <div className="flex space-x-3">
            <button onClick={() => setStep(1)} className="w-1/2 py-3 bg-[#121215] border border-[#26262a] text-white font-mono text-xs font-bold uppercase">Back</button>
            <button onClick={() => setStep(3)} className="w-1/2 py-3 bg-white text-black font-mono text-xs font-bold uppercase">Generate Preview</button>
          </div>
        </div>
      )}

      {step === 3 && (
        <div className="space-y-4">
          <div className="bg-white text-black p-8 font-serif text-sm space-y-4 border border-black shadow-lg">
            <div className="text-center font-bold tracking-wide uppercase border-b pb-4">SURAT PERMOHONAN IZIN TIDAK MASUK</div>
            <p>Jakarta, 4 September 2026</p>
            <p>Kepada Yth.<br/>Bapak/Ibu Pimpinan Divisi<br/>Di Tempat</p>
            <p>Dengan hormat,</p>
            <p>Yang bertanda tangan di bawah ini:</p>
            <p className="pl-4 font-mono">Nama: {name}<br/>Keterangan: Karyawan / Staff</p>
            <p>Dengan ini bermaksud mengajukan permohonan izin tidak masuk kerja dikarenakan {reason}, terhitung mulai tanggal {dates}.</p>
            <p>Demikian surat permohonan ini saya sampaikan. Atas perhatian dan izin yang diberikan, saya ucapkan terima kasih.</p>
            <div className="pt-8 flex justify-end">
              <div className="text-center">
                <p>Hormat saya,</p>
                <div className="h-16"></div>
                <p className="font-bold underline">{name}</p>
              </div>
            </div>
          </div>
          <div className="flex space-x-3">
            <button onClick={() => setStep(2)} className="w-1/2 py-3 bg-[#121215] border border-[#26262a] text-white font-mono text-xs font-bold uppercase">Edit</button>
            <button onClick={() => alert('Official Surat Izin successfully generated and saved locally!')} className="w-full py-3 bg-white text-black font-mono text-xs font-bold uppercase flex items-center justify-center space-x-2">
              <Download className="w-4 h-4" />
              <span>Download Official PDF</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

// 4. CV Builder
const CVSimulator = () => {
  const [name, setName] = useState('Alexander Ray');
  const [title, setTitle] = useState('Senior Systems Architect & Privacy Engineer');
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="space-y-4">
        <div>
          <label className="block font-mono text-xs text-[#a1a1aa] uppercase mb-1">Full Name</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="w-full bg-[#121215] border border-[#26262a] p-3 text-white font-mono text-sm" />
        </div>
        <div>
          <label className="block font-mono text-xs text-[#a1a1aa] uppercase mb-1">Professional Headline</label>
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} className="w-full bg-[#121215] border border-[#26262a] p-3 text-white font-mono text-sm" />
        </div>
        <div className="p-4 bg-[#121215] border border-[#26262a]">
          <span className="font-mono text-xs text-emerald-400 block mb-1">ATS COMPLIANCE CHECK</span>
          <p className="text-xs text-[#a1a1aa]">Single-column layout, zero tables, standard headings. 99% ATS parsing score.</p>
        </div>
        <button onClick={() => alert('ATS Resume exported successfully!')} className="w-full py-3 bg-white text-black font-mono text-xs uppercase font-bold">
          Export ATS PDF & JSON
        </button>
      </div>

      <div className="bg-white text-black p-6 font-sans text-xs space-y-4 border border-[#26262a]">
        <div className="border-b pb-4">
          <h2 className="text-xl font-bold font-mono uppercase">{name}</h2>
          <p className="text-zinc-600 font-mono">{title}</p>
        </div>
        <div>
          <h4 className="font-mono font-bold uppercase text-[10px] text-zinc-500 mb-1">Experience</h4>
          <p className="font-bold">Lead Privacy Engineer @ Nawal Lab</p>
          <p className="text-zinc-600">2023 - Present | Built zero-knowledge client-side encryption suites.</p>
        </div>
        <div>
          <h4 className="font-mono font-bold uppercase text-[10px] text-zinc-500 mb-1">Core Skills</h4>
          <p className="font-mono">TypeScript, React 19, WASM, Cryptographic Web APIs</p>
        </div>
      </div>
    </div>
  );
};

// 5. PDF Tools
const PDFSimulator = () => (
  <div className="space-y-6 text-center py-8">
    <div className="border-2 border-dashed border-[#26262a] p-8 bg-[#121215]">
      <FileText className="w-12 h-12 text-zinc-400 mx-auto mb-3" />
      <h3 className="text-white font-mono text-sm font-bold mb-1">DRAG & DROP PDF FILES HERE</h3>
      <p className="text-[#a1a1aa] text-xs mb-4">Merging, splitting, and compression happens entirely in your local browser sandbox.</p>
      <button onClick={() => alert('Simulated PDF merged successfully!')} className="px-6 py-2.5 bg-white text-black font-mono text-xs font-bold uppercase">
        Select PDF Files
      </button>
    </div>
  </div>
);

// 6. Media Transcoder
const MediaSimulator = () => (
  <div className="space-y-4">
    <div className="grid grid-cols-2 gap-4">
      <div className="p-4 bg-[#121215] border border-[#26262a]">
        <span className="font-mono text-xs text-[#a1a1aa] uppercase block mb-2">Input Source</span>
        <div className="font-mono text-sm text-white">sample_recording_4k.mov (142 MB)</div>
      </div>
      <div className="p-4 bg-[#121215] border border-[#26262a]">
        <span className="font-mono text-xs text-[#a1a1aa] uppercase block mb-2">Target Codec</span>
        <select className="w-full bg-[#0a0a0c] border border-[#26262a] p-2 text-white font-mono text-xs">
          <option>H.264 / MP4 (Optimized Web)</option>
          <option>VP9 / WebM (Lossless)</option>
          <option>Audio AAC 320kbps</option>
        </select>
      </div>
    </div>
    <button onClick={() => alert('Transcoding complete!')} className="w-full py-3 bg-white text-black font-mono text-xs font-bold uppercase">
      Start Client-Side Transcode
    </button>
  </div>
);

// 7. Mosaic & Polaroid
const MosaicSimulator = () => (
  <div className="space-y-4">
    <div className="grid grid-cols-3 gap-2">
      {['Polaroid FX', 'Tile Mosaic', 'Crypto Watermark'].map((filter, i) => (
        <button key={i} className="p-4 bg-[#121215] border border-[#26262a] text-left hover:border-white transition-colors">
          <span className="font-mono text-xs text-white block font-bold mb-1">{filter}</span>
          <span className="text-[10px] text-[#a1a1aa]">Instant local GPU shader filter</span>
        </button>
      ))}
    </div>
    <button onClick={() => alert('Mosaic generated and exported!')} className="w-full py-3 bg-white text-black font-mono text-xs font-bold uppercase">
      Apply & Export Image
    </button>
  </div>
);

// 8. Glitch Studio
const GlitchSimulator = () => {
  const [intensity, setIntensity] = useState(45);
  return (
    <div className="space-y-6">
      <div>
        <label className="block font-mono text-xs text-[#a1a1aa] uppercase mb-2">Byte Corruption Intensity: {intensity}%</label>
        <input
          type="range"
          min="1"
          max="100"
          value={intensity}
          onChange={(e) => setIntensity(Number(e.target.value))}
          className="w-full accent-white"
        />
      </div>
      <div className="h-40 bg-[#121215] border border-[#26262a] flex items-center justify-center font-mono text-zinc-500 text-xs">
        [LIVE CANVAS GLITCH STREAM PREVIEW]
      </div>
      <button onClick={() => alert('Glitch artifact rendered!')} className="w-full py-3 bg-white text-black font-mono text-xs font-bold uppercase">
        Export Glitched Asset
      </button>
    </div>
  );
};

// 9. Screen Recorder
const RecorderSimulator = () => (
  <div className="space-y-6 text-center py-6">
    <div className="w-20 h-20 bg-[#121215] border border-[#26262a] rounded-full flex items-center justify-center mx-auto">
      <RefreshCw className="w-8 h-8 text-white animate-spin" />
    </div>
    <div>
      <h3 className="font-mono text-white text-sm font-bold">READY TO RECORD SCREEN & WEBCAM</h3>
      <p className="text-[#a1a1aa] text-xs mt-1">Capture browser audio & video with zero server uploading.</p>
    </div>
    <button onClick={() => alert('Recording initialized successfully!')} className="px-8 py-3 bg-white text-black font-mono text-xs font-bold uppercase">
      Start Recording
    </button>
  </div>
);

// 10. Photobooth
const PhotoboothSimulator = () => (
  <div className="space-y-6 text-center py-4">
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-lg mx-auto">
      {[1, 2, 3, 4].map((frame) => (
        <div key={frame} className="h-36 bg-[#121215] border border-[#26262a] flex items-center justify-center font-mono text-xs text-zinc-500">
          FRAME {frame}
        </div>
      ))}
    </div>
    <button onClick={() => alert('Photostrip exported successfully!')} className="px-8 py-3 bg-white text-black font-mono text-xs font-bold uppercase">
      Capture Photostrip
    </button>
  </div>
);

// 11. Kalkulator Elektronik
const KalkulatorSimulator = () => {
  const [voltage, setVoltage] = useState(12);
  const [resistance, setResistance] = useState(470);
  const current = (voltage / (resistance || 1)).toFixed(3);
  const power = (voltage * Number(current)).toFixed(3);

  return (
    <div className="space-y-6">
      <h3 className="font-mono text-xs uppercase text-[#a1a1aa]">Ohm’s Law & RC Filter Formula Evaluator</h3>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block font-mono text-xs text-[#a1a1aa] uppercase mb-1">Voltage (Volts)</label>
          <input type="number" value={voltage} onChange={(e) => setVoltage(Number(e.target.value))} className="w-full bg-[#121215] border border-[#26262a] p-3 text-white font-mono text-sm" />
        </div>
        <div>
          <label className="block font-mono text-xs text-[#a1a1aa] uppercase mb-1">Resistance (Ohms)</label>
          <input type="number" value={resistance} onChange={(e) => setResistance(Number(e.target.value))} className="w-full bg-[#121215] border border-[#26262a] p-3 text-white font-mono text-sm" />
        </div>
      </div>
      <div className="bg-[#121215] border border-[#26262a] p-6 grid grid-cols-2 gap-4 text-center font-mono">
        <div>
          <span className="text-xs text-[#a1a1aa] block mb-1">Calculated Current (I)</span>
          <span className="text-2xl font-bold text-white">{current} A</span>
        </div>
        <div>
          <span className="text-xs text-[#a1a1aa] block mb-1">Dissipated Power (P)</span>
          <span className="text-2xl font-bold text-white">{power} W</span>
        </div>
      </div>
    </div>
  );
};

const DefaultSimulator = () => (
  <div className="py-12 text-center font-mono text-[#a1a1aa]">
    Interactive client sandbox initialized successfully. All local assets ready.
  </div>
);
