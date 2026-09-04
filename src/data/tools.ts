import { ToolItem } from '../types';

export const TOOLS_DATA: ToolItem[] = [
  {
    id: 'qr',
    name: 'QR Code Studio',
    category: 'Utilitas & Network',
    path: 'nawal.io/qr',
    subdomain: 'qr.nawal.io',
    description: 'Generate multi-format privacy QR codes instantly for WiFi, WhatsApp, and vCard payloads.',
    longDescription: 'Generate secure, zero-tracking QR codes instantly in your browser without external telemetry APIs.',
    iconName: 'QrCode'
  },
  {
    id: 'speed',
    name: 'Speed Test',
    category: 'Utilitas & Network',
    path: 'nawal.io/speed',
    subdomain: 'speed.nawal.io',
    description: 'Measure real-time network diagnostics, bandwidth telemetry, and latency profiling.',
    longDescription: 'Measure your client connection metrics directly against edge relay nodes with precise millisecond sampling.',
    iconName: 'Activity'
  },
  {
    id: 'suriz',
    name: 'Surat Izin Maker',
    category: 'Dokumen & Kerja',
    path: 'nawal.io/suriz',
    subdomain: 'suriz.nawal.io',
    description: 'Create official permit and absence letters easily using editable professional templates.',
    longDescription: 'Streamline official permit letters with customizable structured fields and instant PDF generation.',
    iconName: 'FileText'
  },
  {
    id: 'cv',
    name: 'Resume & CV Builder',
    category: 'Dokumen & Kerja',
    path: 'nawal.io/cv',
    subdomain: 'cv.nawal.io',
    description: 'Build clean, high-impact ATS-friendly resumes with live typographic preview.',
    longDescription: 'Craft clean, recruiter-approved curriculum vitae using rigorous typographic guidelines.',
    iconName: 'Layers'
  },
  {
    id: 'pdf',
    name: 'PDF Tools',
    category: 'Dokumen & Kerja',
    path: 'nawal.io/pdf',
    subdomain: 'pdf.nawal.io',
    description: 'Merge, split, reorder, and compress PDF documents securely in your browser.',
    longDescription: 'Manipulate confidential PDF documents entirely client-side using WebAssembly.',
    iconName: 'FileText'
  },
  {
    id: 'media',
    name: 'Media Transcoder',
    category: 'Media & Kreatif',
    path: 'nawal.io/media',
    subdomain: 'media.nawal.io',
    description: 'Edit audio and video files, convert formats, and transcode media locally.',
    longDescription: 'Process audio and video files locally in browser using WebCodecs and FFmpeg WASM.',
    iconName: 'Video'
  },
  {
    id: 'mosaic',
    name: 'Mosaic & Polaroid',
    category: 'Media & Kreatif',
    path: 'nawal.io/mosaic',
    subdomain: 'mosaic.nawal.io',
    description: 'Generate photomosaics, apply Polaroid analog frames, and add custom watermarks.',
    longDescription: 'Transform photos into intricate tile mosaics or apply analog film grain locally.',
    iconName: 'Camera'
  },
  {
    id: 'glitch',
    name: 'Glitch Studio',
    category: 'Media & Kreatif',
    path: 'nawal.io/glitch',
    subdomain: 'glitch.nawal.io',
    description: 'Apply RGB shifts, scanlines, and byte corruption effects to images.',
    longDescription: 'Experiment with destructive pixel manipulation and aesthetic glitch art distortion.',
    iconName: 'Zap'
  },
  {
    id: 'recorder',
    name: 'Screen Recorder',
    category: 'Media & Kreatif',
    path: 'nawal.io/recorder',
    subdomain: 'recorder.nawal.io',
    description: 'Record browser screens, tabs, and microphone audio with optional webcam overlay.',
    longDescription: 'Record tutorials or presentations directly from browser media streams.',
    iconName: 'Video'
  },
  {
    id: 'photobooth',
    name: 'Photobooth',
    category: 'Media & Kreatif',
    path: 'nawal.io/photobooth',
    subdomain: 'photobooth.nawal.io',
    description: 'Capture 4-frame retro photostrips with countdown timers and custom borders.',
    longDescription: 'Capture retro-style photo strips with adjustable timers and professional lighting tints.',
    iconName: 'Camera'
  },
  {
    id: 'kalkulator-elektronik',
    name: 'Circuit Calculator',
    category: 'Utilitas & Network',
    path: 'nawal.io/kalkulator-elektronik',
    subdomain: 'kalkulator.nawal.io',
    description: 'Evaluate electronic circuit formulas, Ohm’s law, and RC filter cutoff frequencies.',
    longDescription: 'Essential workbench computation tool for calculating voltage drops and power dissipation.',
    iconName: 'Cpu'
  }
];
