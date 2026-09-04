export type Category = 'Semua' | 'Dokumen & Kerja' | 'Media & Kreatif' | 'Utilitas & Network';

export interface ToolItem {
  id: string;
  name: string;
  category: 'Dokumen & Kerja' | 'Media & Kreatif' | 'Utilitas & Network';
  path: string;
  subdomain: string;
  description: string;
  longDescription: string;
  iconName: string;
}
