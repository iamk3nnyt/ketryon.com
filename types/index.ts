export interface BlogPost {
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
  related?: Array<{
    id: string;
    slug: string;
    title: string;
    excerpt: string;
    tag: string;
  }>;
}
