import thumb001 from "@/assets/thumbnails/thumb-001.jpg";
import thumb002 from "@/assets/thumbnails/thumb-002.jpg";
import thumb003 from "@/assets/thumbnails/thumb-003.jpg";
import thumb004 from "@/assets/thumbnails/thumb-004.jpg";
import thumb005 from "@/assets/thumbnails/thumb-005.jpg";
import thumb006 from "@/assets/thumbnails/thumb-006.jpg";
import thumb007 from "@/assets/thumbnails/thumb-007.jpg";
import thumb008 from "@/assets/thumbnails/link-building.png";
import thumb009 from "@/assets/thumbnails/thumb-009.jpg";
import thumb010 from "@/assets/thumbnails/nextjs-learning.png";

export interface Article {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  author: {
    name: string;
    avatar: string;
    bio: string;
  };
  content: {
    introduction: string;
    sections: {
      heading: string;
      content: string;
    }[];
    conclusion: string;
  };
  tags: string[];
}

export const getArticleById = (id: string) => articles.find((a) => a.id === id);

export const getRelatedArticles = (currentId: string) => {
  const current = getArticleById(currentId);
  if (!current) return articles.slice(0, 3);
  return articles
    .filter((a) => a.id !== currentId && a.category === current.category)
    .slice(0, 3)
    .concat(articles.filter((a) => a.id !== currentId && a.category !== current.category))
    .slice(0, 3);
};

const faraz = {
  name: "Faraz Sualeh",
  avatar: "/faraz-profile.jpg",
  bio: "Web Developer & SEO Specialist helping businesses grow online.",
};

export const articles: Article[] = [
  {
    id: "001",
    title: "Core Web Vitals: The Complete Guide for 2025",
    subtitle: "How to optimize LCP, FID, and CLS for better rankings",
    category: "SEO",
    date: "Feb 10, 2026",
    readTime: "8 min",
    image: thumb001,
    author: faraz,
    content: {
      introduction: "Core Web Vitals have become a critical ranking factor. Understanding and optimizing these metrics is essential for any website that wants to rank well and provide a great user experience.",
      sections: [
        { heading: "What Are Core Web Vitals?", content: "Core Web Vitals are a set of specific factors that Google considers important in a webpage's overall user experience. They measure loading performance (LCP), interactivity (INP), and visual stability (CLS). These metrics directly impact your search rankings." },
        { heading: "Optimizing Largest Contentful Paint", content: "LCP measures how long it takes for the largest content element to become visible. Optimize by using next-gen image formats, implementing lazy loading, preloading critical resources, and using a CDN for faster delivery." },
        { heading: "Fixing Cumulative Layout Shift", content: "CLS measures unexpected layout shifts. Always set dimensions on images and videos, use CSS aspect-ratio, avoid inserting content above existing content, and prefer transform animations over layout-triggering properties." },
        { heading: "Tools for Measuring", content: "Use Google PageSpeed Insights, Lighthouse, Chrome DevTools, and Search Console's Core Web Vitals report to identify and track improvements. Regular monitoring ensures your optimizations stick." },
      ],
      conclusion: "Investing in Core Web Vitals optimization pays dividends in both rankings and user satisfaction. Start with the biggest impact items and iterate consistently.",
    },
    tags: ["seo", "core web vitals", "performance", "google"],
  },
  {
    id: "002",
    title: "Building Blazing-Fast React Apps with Vite",
    subtitle: "Why Vite is the future of frontend tooling",
    category: "Web Dev",
    date: "Jan 28, 2026",
    readTime: "6 min",
    image: thumb002,
    author: faraz,
    content: {
      introduction: "Vite has revolutionized the way we build frontend applications. With near-instant hot module replacement and optimized builds, it's become the go-to choice for modern React projects.",
      sections: [
        { heading: "Why Vite Over CRA?", content: "Create React App uses Webpack under the hood which can be painfully slow for large projects. Vite uses native ES modules during development, making startup and HMR nearly instant regardless of project size." },
        { heading: "Setting Up a React + TypeScript Project", content: "Getting started with Vite is simple: npm create vite@latest my-app -- --template react-ts. This gives you a fully configured TypeScript React project with fast refresh out of the box." },
        { heading: "Optimizing Your Build", content: "Vite uses Rollup for production builds. Configure code splitting, tree shaking, and asset optimization through vite.config.ts. Use dynamic imports for route-based code splitting to keep initial bundle sizes small." },
        { heading: "Essential Plugins", content: "The Vite ecosystem has excellent plugins: vite-plugin-svgr for SVG components, vite-plugin-pwa for service workers, and @vitejs/plugin-react for Fast Refresh. These enhance your development workflow significantly." },
      ],
      conclusion: "Vite isn't just faster, it fundamentally improves the development experience. If you haven't switched yet, there's never been a better time.",
    },
    tags: ["react", "vite", "javascript", "web development"],
  },
  {
    id: "003",
    title: "Keyword Research Strategies That Actually Work",
    subtitle: "A practical framework for finding high-impact keywords",
    category: "SEO",
    date: "Jan 15, 2026",
    readTime: "7 min",
    image: thumb003,
    author: faraz,
    content: {
      introduction: "Keyword research remains the foundation of effective SEO. But the landscape has evolved and it's no longer about stuffing exact-match keywords. Here's a modern approach that delivers results.",
      sections: [
        { heading: "Think Topics, Not Just Keywords", content: "Google understands semantic meaning. Instead of targeting individual keywords, build content around topic clusters. Create comprehensive pillar pages supported by related subtopic articles that interlink naturally." },
        { heading: "Analyzing Search Intent", content: "Every search has intent: informational, navigational, commercial, or transactional. Aligning your content with the correct intent is more important than keyword volume. Check what currently ranks to understand what Google thinks the intent is." },
        { heading: "Finding Low-Competition Gems", content: "Use tools like Ahrefs, SEMrush, or even Google's 'People Also Ask' to find long-tail keywords with decent volume but low difficulty. These are your quickest wins for building organic traffic." },
        { heading: "Competitor Gap Analysis", content: "Identify keywords your competitors rank for that you don't. These gaps represent opportunities where you can create better content and capture traffic your competitors are already proving exists." },
      ],
      conclusion: "Great keyword research is part science, part empathy. Understand what your audience is searching for, match their intent, and deliver genuine value. The rankings will follow.",
    },
    tags: ["seo", "keyword research", "content strategy", "organic traffic"],
  },
  {
    id: "004",
    title: "Tailwind CSS Tips Every Developer Should Know",
    subtitle: "Level up your Tailwind workflow with these pro techniques",
    category: "Web Dev",
    date: "Dec 20, 2025",
    readTime: "5 min",
    image: thumb004,
    author: faraz,
    content: {
      introduction: "Tailwind CSS has changed how we write styles. But are you using it to its full potential? Here are techniques that will make your Tailwind code cleaner and more maintainable.",
      sections: [
        { heading: "Design Tokens with CSS Variables", content: "Define your color palette, spacing, and typography as CSS custom properties, then reference them in tailwind.config. This gives you a single source of truth and makes theming trivial, including dark mode." },
        { heading: "Component Variants with CVA", content: "Use class-variance-authority (CVA) to create type-safe component variants. This keeps your component APIs clean and your styles organized without sacrificing Tailwind's utility-first approach." },
        { heading: "Responsive Design Patterns", content: "Master the mobile-first approach. Use Tailwind's responsive prefixes strategically: start with the mobile layout, then layer on complexity. The container query plugin adds component-level responsiveness." },
        { heading: "Performance Optimization", content: "Tailwind's JIT compiler generates only the classes you use. But also consider: extracting repeated patterns into @apply directives, using the safelist sparingly, and leveraging content configuration to reduce scan scope." },
      ],
      conclusion: "Tailwind is more than utility classes, it's a design system framework. Master these patterns and you'll build UIs faster with more consistency.",
    },
    tags: ["tailwind", "css", "web development", "design systems"],
  },
  {
    id: "005",
    title: "Technical SEO Audit Checklist for 2025",
    subtitle: "Everything you need to check for a healthy, crawlable site",
    category: "SEO",
    date: "Dec 5, 2025",
    readTime: "10 min",
    image: thumb005,
    author: faraz,
    content: {
      introduction: "A technical SEO audit is like a health check for your website. Without a solid technical foundation, even the best content won't rank. Here's my comprehensive checklist.",
      sections: [
        { heading: "Crawlability & Indexing", content: "Check your robots.txt, XML sitemap, and canonical tags. Use Google Search Console to identify crawl errors. Ensure important pages are indexable and unimportant ones are properly blocked or noindexed." },
        { heading: "Site Architecture", content: "A flat, logical site structure helps both users and search engines. Every important page should be reachable within 3 clicks from the homepage. Use breadcrumbs and internal linking strategically." },
        { heading: "Page Speed & Performance", content: "Run Lighthouse audits on key pages. Optimize images, minify CSS/JS, implement caching, and consider a CDN. Page speed is both a ranking factor and a user experience necessity." },
        { heading: "Schema Markup", content: "Implement structured data for articles, FAQs, products, or whatever content types you publish. Schema doesn't directly boost rankings but can earn rich snippets that dramatically improve click-through rates." },
      ],
      conclusion: "Technical SEO isn't glamorous, but it's the foundation everything else builds on. Run this audit quarterly and fix issues promptly. Your rankings will thank you.",
    },
    tags: ["technical seo", "audit", "crawlability", "site speed"],
  },
  {
    id: "006",
    title: "From Junior to Senior: A Developer's Growth Roadmap",
    subtitle: "Skills and mindsets that accelerate your career",
    category: "Career",
    date: "Nov 18, 2025",
    readTime: "7 min",
    image: thumb006,
    author: faraz,
    content: {
      introduction: "The jump from junior to senior developer isn't just about writing better code. It's about thinking differently, communicating effectively, and making decisions that scale. Here's what I've learned on the journey.",
      sections: [
        { heading: "Master the Fundamentals", content: "Senior developers don't just know frameworks, they understand the underlying principles. Invest in learning data structures, algorithms, design patterns, and system design. These fundamentals transfer across any technology." },
        { heading: "Think in Systems", content: "Juniors think about code. Seniors think about systems. Consider how your code fits into the larger architecture, how it will scale, how it will fail, and how others will maintain it. This systems thinking is the hallmark of seniority." },
        { heading: "Communication Is Code", content: "Writing clean code is communication. So is documentation, PR descriptions, technical proposals, and mentoring juniors. The best senior developers are excellent communicators who can translate complex ideas for any audience." },
        { heading: "Build Your Brand", content: "Write blog posts, contribute to open source, speak at meetups. This isn't just career advancement, it deepens your own understanding and connects you with a community that accelerates your growth." },
      ],
      conclusion: "Seniority isn't measured in years, it's measured in impact. Focus on solving real problems, lifting up your team, and continuously learning. The title will follow.",
    },
    tags: ["career", "developer growth", "soft skills", "mentoring"],
  },
  {
    id: "007",
    title: "TypeScript Best Practices for Clean Codebases",
    subtitle: "Write type-safe code that your team will love",
    category: "Tech",
    date: "Nov 2, 2025",
    readTime: "6 min",
    image: thumb007,
    author: faraz,
    content: {
      introduction: "TypeScript has become the standard for serious JavaScript projects. But simply adding types isn't enough, you need patterns and practices that make TypeScript work for your team, not against it.",
      sections: [
        { heading: "Strict Mode From Day One", content: "Enable strict mode in tsconfig.json from the start. It catches more bugs at compile time and forces better habits. Retrofitting strict mode into a loose codebase is painful, so start strict and stay strict." },
        { heading: "Discriminated Unions Over Enums", content: "Discriminated unions provide better type narrowing and are more idiomatic TypeScript. They work naturally with switch statements and exhaustive checking, making impossible states truly impossible." },
        { heading: "Zod for Runtime Validation", content: "TypeScript types disappear at runtime. For API responses and user input, use Zod to create schemas that validate at runtime and infer TypeScript types. One source of truth for both validation and typing." },
        { heading: "Utility Types Are Your Friend", content: "Master Pick, Omit, Partial, Required, Record, and ReturnType. These built-in utility types let you derive types from existing ones, keeping your type definitions DRY and maintainable." },
      ],
      conclusion: "TypeScript is most powerful when you work with the type system, not around it. Invest in learning advanced patterns and your codebase will be safer, more readable, and easier to refactor.",
    },
    tags: ["typescript", "javascript", "best practices", "clean code"],
  },
  {
    id: "008",
    title: "Link Building in 2025: What Still Works",
    subtitle: "Ethical strategies for earning high-quality backlinks",
    category: "SEO",
    date: "Oct 15, 2025",
    readTime: "8 min",
    image: thumb008,
    author: faraz,
    content: {
      introduction: "Backlinks remain one of Google's top ranking factors. But the game has changed and spammy link building tactics don't work anymore. Here's what actually moves the needle in 2025.",
      sections: [
        { heading: "Create Linkable Assets", content: "The best link building starts with creating content people naturally want to reference: original research, comprehensive guides, interactive tools, and unique data visualizations. Build something worth linking to." },
        { heading: "Digital PR & HARO", content: "Respond to journalist queries on platforms like HARO, Connectively, and Help a B2B Writer. Being quoted as an expert earns high-authority links from news sites and industry publications." },
        { heading: "Broken Link Building", content: "Find broken links on relevant sites using tools like Ahrefs. Create equivalent or better content, then reach out to suggest your resource as a replacement. It's a win-win for both parties." },
        { heading: "Guest Posting Done Right", content: "Guest posting still works when done ethically. Focus on relevant, authoritative sites in your niche. Provide genuine value in your content, and the link becomes a natural byproduct, not the sole purpose." },
      ],
      conclusion: "The best link building doesn't feel like link building, it feels like creating value. Focus on being genuinely useful and the links will come.",
    },
    tags: ["seo", "link building", "backlinks", "digital pr"],
  },
  {
    id: "009",
    title: "Building a Personal Brand as a Developer",
    subtitle: "Stand out in a competitive market with authenticity",
    category: "Career",
    date: "Oct 1, 2025",
    readTime: "5 min",
    image: thumb009,
    author: faraz,
    content: {
      introduction: "In a market with millions of developers, your personal brand is what sets you apart. It's not about self-promotion, it's about sharing your unique perspective and building genuine connections.",
      sections: [
        { heading: "Start a Blog", content: "Writing about what you learn solidifies your understanding and helps others. You don't need to be an expert, documenting your learning journey is valuable. Consistency matters more than perfection." },
        { heading: "Be Active on GitHub", content: "Your GitHub profile is your developer portfolio. Contribute to open source, maintain your own projects, and write clear READMEs. Show that you can write code that others can understand and use." },
        { heading: "Network Authentically", content: "Attend meetups, join Discord communities, engage on Twitter/X. Help others without expecting anything in return. The developer community is generous, and when you give, opportunities come back naturally." },
        { heading: "Specialize and Own It", content: "Being 'a developer' is generic. Being 'the developer who writes about SEO-optimized React apps' is memorable. Find your niche at the intersection of your skills and interests, and own it." },
      ],
      conclusion: "Your personal brand is built one genuine interaction at a time. Share what you know, help others, and be consistent. The career opportunities will follow.",
    },
    tags: ["career", "personal branding", "networking", "developer"],
  },
  {
    id: "010",
    title: "My Honest Experience Learning Next.js as a Student",
    subtitle: "What I wish someone told me before diving into Next.js",
    category: "Web Dev",
    date: "Feb 15, 2026",
    readTime: "6 min",
    image: thumb010,
    author: faraz,
    content: {
      introduction: "I recently started learning Next.js alongside my studies and honestly, it was confusing at first. Coming from plain React, the whole file-based routing and server components thing felt like a different world. But after a few weeks of building stuff, things started clicking. Here's what I learned so you don't have to struggle like I did.",
      sections: [
        { heading: "Why I Picked Next.js Over Other Frameworks", content: "As a student, I wanted something that would look good on my resume and actually help me build real projects. Next.js kept popping up in job listings and developer communities. Plus, it handles routing, SSR, and API routes out of the box, which means less setup time and more building time. For someone juggling coursework and side projects, that's a huge win." },
        { heading: "The App Router Confused Me at First", content: "When I started, the App Router with its layout.tsx and page.tsx files felt weird. I kept asking myself, why can't I just use React Router? But once I understood that each folder becomes a route automatically, it actually saved me a ton of boilerplate. Nested layouts are a game changer for dashboards and multi-page apps." },
        { heading: "Server Components vs Client Components", content: "This was the biggest mental shift for me. By default, components in Next.js are server components, meaning they run on the server and send HTML to the browser. If you need interactivity like useState or onClick, you add 'use client' at the top. It took me a few broken builds to get this, but now it makes total sense for performance." },
        { heading: "Building My First Full Project", content: "I built a simple portfolio site with a blog section using Next.js and it was surprisingly smooth. The Image component optimizes images automatically, the Link component handles prefetching, and deploying to Vercel was literally one click. For a student project, it felt incredibly professional." },
      ],
      conclusion: "If you're a student thinking about learning Next.js, just go for it. Yes, there's a learning curve, but it's totally worth it. Start with a small project, don't overthink the theory, and build your way to understanding. That's how it clicked for me.",
    },
    tags: ["nextjs", "react", "web development", "student"],
  },
];
