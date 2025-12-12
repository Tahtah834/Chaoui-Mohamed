export enum SlideLayout {
  TITLE = 'TITLE',
  BULLET_LIST = 'BULLET_LIST',
  TWO_COLUMN = 'TWO_COLUMN',
  KPI_TABLE = 'KPI_TABLE',
  SECTION_HEADER = 'SECTION_HEADER'
}

export interface SlideData {
  id: number;
  layout: SlideLayout;
  title: string;
  subtitle?: string;
  imageUrl?: string;
  content?: {
    mainPoints?: string[];
    leftColumn?: { title: string; points: string[] };
    rightColumn?: { title: string; points: string[] };
    tableData?: { label: string; formula: string; frequency: string }[];
  };
  footer?: string;
}