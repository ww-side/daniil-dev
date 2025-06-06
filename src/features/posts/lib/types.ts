export type Post = {
  createdAt: string;
  updatedAt: string;
  title: string;
  description: string;
  slug: string;
  content: Record<string, string>;
  id: string;
};

export type ContentNode = {
  type: string;
  tag: string;
  text?: string;
  listType?: 'bullet' | 'number';
  fields?: {
    columns: { header: string }[];
    rows: { cells: { value: string }[] }[];
    url?: string;
    newTab?: boolean;
    code?: string;
    blockName?: string;
  };
  format: number;
  children?: ContentNode[];
  value?: {
    url: string;
    alt: string;
    width: number;
    height: number;
    mimeType: string;
  };
};
