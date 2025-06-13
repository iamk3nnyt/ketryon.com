import { BaseDocument } from "@/lib/db/types";

export interface Article extends BaseDocument {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  author: {
    name: string;
    image: string;
    bio?: string;
  };
  tag: string;
  readTime: string;
  image: string;
  related?: string[];
}
