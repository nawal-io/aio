export interface ToolItem {
  id: string;
  name: string;
  category: 'PDF' | 'Media' | 'Utilities' | 'Math';
  version: string;
  badgeType: string;
  description: string;
  extendedDescription: string;
  targetUrl: string;
  icon: 'FileText' | 'Camera' | 'Video' | 'Calculator';
  tags: string[];
  features: string[];
  shortcut: string;
}
