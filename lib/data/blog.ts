import { CreateOperations } from "@/lib/db/create";
import { DeleteOperations } from "@/lib/db/delete";
import { ReadOperations } from "@/lib/db/read";
import client from "@/lib/mongodb";
import { Article } from "@/types/blog";
import { Filter } from "mongodb";

const ARTICLE_PREVIEW_PROJECTION = {
  _id: 0,
  slug: 1,
  title: 1,
  excerpt: 1,
  date: 1,
  image: 1,
  tag: 1,
  author: 1,
};

const FULL_ARTICLE_PROJECTION = {
  ...ARTICLE_PREVIEW_PROJECTION,
  content: 1,
  readTime: 1,
};

export async function getArticles(filter: Filter<Article> = {}) {
  const db = client.db(process.env.DB);
  const readOps = new ReadOperations<Article>(db, "articles");

  return readOps.findMany(filter, {
    projection: ARTICLE_PREVIEW_PROJECTION,
    sort: { date: -1 },
  });
}

export async function getArticleBySlug(slug: string) {
  const db = client.db(process.env.DB);
  const readOps = new ReadOperations<Article>(db, "articles");

  return readOps.findOne(
    { slug },
    {
      projection: FULL_ARTICLE_PROJECTION,
    },
  );
}

export async function deleteAllArticles() {
  const db = client.db(process.env.DB);
  const deleteOps = new DeleteOperations<Article>(db, "articles");

  return deleteOps.deleteMany({});
}

export async function getPaginatedArticles(page: number, limit: number) {
  const db = client.db(process.env.DB);
  const readOps = new ReadOperations<Article>(db, "articles");

  return readOps.findPaginated(
    {},
    {
      page,
      limit,
      sort: { date: -1 },
    },
    {
      projection: ARTICLE_PREVIEW_PROJECTION,
    },
  );
}

export async function getArticleCount() {
  const db = client.db(process.env.DB);
  const readOps = new ReadOperations<Article>(db, "articles");

  return readOps.count({});
}

export async function seedArticles() {
  const db = client.db(process.env.DB);
  const createOps = new CreateOperations<Article>(db, "articles");
  const deleteOps = new DeleteOperations<Article>(db, "articles");

  const seed = [
    {
      slug: "building-transparent-software",
      title:
        "Building Transparent Software: A Guide to Open Source Development",
      excerpt:
        "Learn how transparency in software development leads to better products, stronger communities, and more successful projects.",
      content: `
      <h2>The Power of Transparency</h2>
      <p>In today's digital landscape, transparency isn't just a buzzword—it's a fundamental principle that drives innovation and trust. When we build software with transparency at its core, we create products that are not only more reliable but also more valuable to the community.</p>

      <h2>Why Open Source Matters</h2>
      <p>Open source development brings numerous benefits to both developers and users. From improved security through peer review to faster innovation through collaboration, the advantages are clear and compelling.</p>

      <h2>Best Practices for Transparent Development</h2>
      <ul>
        <li>Clear documentation and code comments</li>
        <li>Regular updates and changelogs</li>
        <li>Community engagement and feedback</li>
        <li>Open communication channels</li>
      </ul>

      <h2>Conclusion</h2>
      <p>Building transparent software isn't just about sharing code—it's about creating a culture of openness and collaboration that benefits everyone involved.</p>
    `,
      date: "2024-03-15",
      author: {
        name: "Kenny Tran",
        image: "/avatar.png",
        bio: "Writer and developer passionate about building transparent software.",
      },
      tag: "Development",
      readTime: "5 min read",
      image:
        "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=3540&auto=format&fit=crop",
      related: ["modern-web-development", "efficient-workflows"],
    },
    {
      slug: "modern-web-development",
      title: "Modern Web Development: Trends and Best Practices",
      excerpt:
        "Explore the latest trends in web development and learn how to implement them in your projects.",
      content: `
      <h2>The Evolution of Web Development</h2>
      <p>Web development has come a long way from static HTML pages to dynamic, interactive applications. Today's web development landscape is rich with tools, frameworks, and best practices that make building modern web applications easier and more efficient.</p>

      <h2>Key Trends in 2024</h2>
      <ul>
        <li>Server Components and Edge Computing</li>
        <li>TypeScript Adoption</li>
        <li>Performance Optimization</li>
        <li>Accessibility First Development</li>
      </ul>

      <h2>Best Practices</h2>
      <p>Implementing modern web development practices requires a focus on performance, accessibility, and user experience. Here are some key areas to consider:</p>

      <h3>Performance</h3>
      <p>Optimize your applications for speed and efficiency using techniques like code splitting, lazy loading, and image optimization.</p>

      <h3>Accessibility</h3>
      <p>Ensure your applications are accessible to all users by following WCAG guidelines and implementing proper semantic HTML.</p>

      <h2>Conclusion</h2>
      <p>Staying current with web development trends and best practices is essential for building successful applications in today's digital landscape.</p>
    `,
      date: "2024-03-10",
      author: {
        name: "Kenny Tran",
        image: "/avatar.png",
        bio: "Writer and developer passionate about building transparent software.",
      },
      tag: "Web Development",
      readTime: "7 min read",
      image:
        "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=3540&auto=format&fit=crop",
      related: ["building-transparent-software", "efficient-workflows"],
    },
    {
      slug: "efficient-workflows",
      title: "Creating Efficient Development Workflows",
      excerpt:
        "Discover how to streamline your development process and boost team productivity.",
      content: `
      <h2>The Importance of Efficient Workflows</h2>
      <p>In software development, efficiency isn't just about writing code faster—it's about creating sustainable, scalable processes that help teams deliver high-quality software consistently.</p>

      <h2>Key Components of Efficient Workflows</h2>
      <ul>
        <li>Automated Testing</li>
        <li>Continuous Integration/Deployment</li>
        <li>Code Review Processes</li>
        <li>Documentation Practices</li>
      </ul>

      <h2>Implementing Best Practices</h2>
      <p>Creating efficient workflows requires careful planning and implementation. Here are some strategies to consider:</p>

      <h3>Automation</h3>
      <p>Automate repetitive tasks to save time and reduce errors. This includes testing, deployment, and code quality checks.</p>

      <h3>Collaboration</h3>
      <p>Foster a culture of collaboration through clear communication channels and effective code review processes.</p>

      <h2>Conclusion</h2>
      <p>Efficient workflows are the foundation of successful software development teams. By implementing these practices, you can improve productivity and code quality.</p>
    `,
      date: "2024-03-05",
      author: {
        name: "Kenny Tran",
        image: "/avatar.png",
        bio: "Writer and developer passionate about building transparent software.",
      },
      tag: "Workflow",
      readTime: "6 min read",
      image:
        "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=3540&auto=format&fit=crop",
      related: ["building-transparent-software", "modern-web-development"],
    },
  ];

  await deleteOps.deleteMany({});

  return createOps.createMany(seed);
}

export async function getRelatedArticles(slug: string, limit: number = 3) {
  const db = client.db(process.env.DB);
  const readOps = new ReadOperations<Article>(db, "articles");
  const currentArticle = await readOps.findOne(
    { slug },
    {
      projection: {
        _id: 0,
        tag: 1,
        related: 1,
      },
    },
  );

  if (!currentArticle) return [];

  if (currentArticle.related?.length) {
    return readOps.findMany(
      {
        $and: [
          { slug: { $in: currentArticle.related } },
          { slug: { $ne: slug } },
        ],
      },
      {
        projection: ARTICLE_PREVIEW_PROJECTION,
        limit,
      },
    );
  }

  if (currentArticle.tag) {
    return readOps.findMany(
      {
        $and: [{ tag: currentArticle.tag }, { slug: { $ne: slug } }],
      },
      {
        projection: ARTICLE_PREVIEW_PROJECTION,
        sort: { date: -1 },
        limit,
      },
    );
  }

  return [];
}

export async function getArticleSlugs() {
  const db = client.db(process.env.DB);
  const readOps = new ReadOperations<Article>(db, "articles");

  return readOps.findMany(
    {},
    {
      projection: { slug: 1, _id: 0 },
    },
  );
}
