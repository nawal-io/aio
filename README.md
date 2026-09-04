# nawal.io — Central Web Utilities Hub

> **Privacy-First, 100% Client-Side Web Utilities Suite.**  
> Zero server tracking, zero data collection, zero backend dependencies. All computations execute locally in your browser.

![React 19](https://img.shields.io/badge/React-19.x-black?style=flat-square&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-black?style=flat-square&logo=typescript)
![Tailwind CSS v4](https://img.shields.io/badge/Tailwind_CSS-v4-black?style=flat-square&logo=tailwindcss)
![Vite](https://img.shields.io/badge/Vite-5.x-black?style=flat-square&logo=vite)
![Bun](https://img.shields.io/badge/Bun-1.x-black?style=flat-square&logo=bun)
![Privacy](https://img.shields.io/badge/Privacy-100%25_Client--Side-black?style=flat-square)

![WIP](https://raw.githubusercontent.com/nawal-io/aio/main/assets/banneraio.png)

---

## 🛠️ Integrated Utility Applications

Central directory listing all active sub-modules under the `nawal-io` ecosystem:

| Utility | Description | Tech Specs |
| :--- | :--- | :--- |
| **[`qr`](/qr)** | Multi-Format Privacy QR Studio | Canvas API, vCard 3.0, SVG Export |
| **[`speed`](/speed)** | Real Bandwidth & Telemetry Diagnostic | Cloudflare Edge Engine, `ReadableStream` |
| **[`suriz`](/suriz)** | 3-Step Wizard Surat Izin Maker | Dynamic Template, PDF/Print Engine |
| **[`cv`](/cv)** | ATS-Friendly Resume & CV Builder | Real-time Canvas/PDF Print Renderer |
| **[`pdf`](/pdf)** | Local PDF Manipulation Toolkit | `pdf-lib`, WebWorker, Zero Uploads |
| **[`media`](/media)** | Client-Side Audio/Video Editor | WebCodecs, FFmpeg.wasm, Media Recorder |
| **[`mosaic`](/mosaic)** | Photomosaic & Photo Strip Generator | HTML5 Canvas API, Custom WebGL Filters |
| **[`glitch`](/glitch)** | Image Destruction & Processing Studio | Direct Pixel Buffer Manipulation |
| **[`recorder`](/recorder)** | Screen & Floating Webcam Capture | `MediaStream` API, WebM Converter |
| **[`photobooth`](/photobooth)** | Photostrip Layout & Print Studio | Camera Stream, Strip Compositing |
| **[`kalkulator-elektronik`](/kalkulator-elektronik)** | Circuit Analysis & Component Calculator | Custom Formula Evaluation Engine |

---

## 📐 Architecture & Design Principles

* **Swiss Editorial / Studio Industrial**: High-contrast monochrome aesthetic (`#0a0a0c`), crisp typography, explicit grid borders (`#26262a`), and zero AI visual clutter (no purple glows, floating shadows, or decorative pills).
* **Zero Server Overhead**: 100% client-side execution via native browser APIs (`Canvas`, `MediaStream`, `WebAudio`, `ReadableStream`).
* **Ultra-Fast Local Pipeline**: Powered by Vite and Bun for instant build times and lightweight bundles deployed to GitHub Pages.

---

## 🚀 Local Development

```bash
# Clone repository
git clone [https://github.com/nawal-io/nawal-io.github.io.git](https://github.com/nawal-io/nawal-io.github.io.git)

# Install dependencies
bun install

# Start local dev server
bun dev
