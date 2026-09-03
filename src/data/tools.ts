import { ToolItem } from '../types';

export const TOOLS_DATA: ToolItem[] = [
  {
    id: 'pdf-toolkit',
    name: 'PDF Toolkit',
    category: 'PDF',
    version: 'v2.4.0',
    badgeType: 'CLIENT-SIDE',
    description: 'Compress, merge, split, and reorder PDF documents locally in browser.',
    extendedDescription: 'Enterprise-grade PDF manipulation utility powered by WebAssembly and browser native streams. All processing occurs entirely in client memory without uploading files to remote servers.',
    targetUrl: 'https://nawal-io.github.io/pdf/',
    icon: 'FileText',
    tags: ['PDF', 'WebAssembly', 'Compression', 'Client-Side'],
    features: [
      'Lossless & custom PDF compression algorithms',
      'Multi-document drag-and-drop merging',
      'Page reordering and selective extraction',
      'Zero server roundtrips & instant processing'
    ],
    shortcut: '1'
  },
  {
    id: 'snapstrip-photobooth',
    name: 'SnapStrip Photobooth',
    category: 'Media',
    version: 'v1.2.0',
    badgeType: 'CANVAS API',
    description: 'Browser photobooth utility with custom frame layouts, filters, and strip generation.',
    extendedDescription: 'High-performance webcam photobooth with real-time WebGL filters, customizable photo strip templates, automatic burst capture, and instant lossless export.',
    targetUrl: 'https://nawal-io.github.io/photobooth/',
    icon: 'Camera',
    tags: ['Webcam', 'Canvas API', 'Filters', 'Strips'],
    features: [
      'Customizable photo strip layouts & aspect ratios',
      'Real-time retro & cinematic color grading filters',
      'Timer countdown & automatic burst sequences',
      'High-resolution PNG and GIF strip export'
    ],
    shortcut: '2'
  },
  {
    id: 'screen-recorder',
    name: 'Screen Recorder',
    category: 'Media',
    version: 'v1.0.0',
    badgeType: 'MEDIA STREAM',
    description: 'High-performance screen and audio recorder with zero server upload.',
    extendedDescription: 'Capture your screen, browser tabs, or webcam with system audio recording. Encrypted in browser memory with immediate WebM/MP4 download.',
    targetUrl: 'https://nawal-io.github.io/recorder/',
    icon: 'Video',
    tags: ['MediaStream', 'Recording', 'WebM', 'Audio'],
    features: [
      'Full screen, window, or tab recording with audio',
      'Hardware-accelerated MediaRecorder encoding',
      'Zero server upload or cloud logging',
      'Instant preview, trimming, and local download'
    ],
    shortcut: '3'
  },
  {
    id: 'electronic-calculator',
    name: 'Electronic Calculator',
    category: 'Math',
    version: 'v1.1.0',
    badgeType: 'MATH ENGINE',
    description: 'High-precision electronic and scientific calculation tool.',
    extendedDescription: 'Advanced precision computation engine featuring unit conversions, symbolic algebra shortcuts, electrical engineering formulas, and calculation history logging.',
    targetUrl: 'https://nawal-io.github.io/kalkulator-elektronik/',
    icon: 'Calculator',
    tags: ['Math Engine', 'Scientific', 'Precision', 'Engineering'],
    features: [
      'Arbitrary precision floating-point arithmetic',
      'Electrical engineering and impedance solvers',
      'Persistent calculation history with export',
      'Keyboard-driven rapid expression parser'
    ],
    shortcut: '4'
  }
];
