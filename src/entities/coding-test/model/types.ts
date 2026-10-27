export type CodingTestPostMeta = {
  slug: string;
  title: string;
  date: string;
  summary: string;
  tags: string[];
};

export type CodingTestPost = CodingTestPostMeta & {
  content: string;
};
