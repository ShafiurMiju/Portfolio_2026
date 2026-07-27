// Journal posts. Imported by /blog and /blog/[id].

export const posts = [
    {
      id: 1,
      slug: "building-scalable-react-applications",
      title: "Building Scalable React Applications",
      excerpt: "Learn the best practices and architectural patterns for building large-scale React applications.",
      date: "Dec 20, 2025",
      readTime: "8 min read",
      category: "React",
      tags: ["React", "Architecture", "Best Practices"],
      views: 1250,
      content: `
        <h2>Introduction</h2>
        <p>Building scalable React applications requires careful planning and adherence to best practices. In this article, we'll explore the key principles and patterns that will help you create maintainable, performant applications.</p>
        
        <h2>Component Architecture</h2>
        <p>The foundation of any scalable React application is a well-thought-out component architecture. Here are the key principles:</p>
        <ul>
          <li><strong>Single Responsibility:</strong> Each component should do one thing well</li>
          <li><strong>Composition over Inheritance:</strong> Build complex UIs from simple components</li>
          <li><strong>Prop Drilling Prevention:</strong> Use Context API or state management libraries</li>
        </ul>

        <h2>State Management</h2>
        <p>As your application grows, managing state becomes increasingly important. Consider these approaches:</p>
        <ul>
          <li>Local component state for UI-specific data</li>
          <li>Context API for shared state across components</li>
          <li>Redux or Zustand for complex global state</li>
        </ul>

        <h2>Code Organization</h2>
        <p>Organize your code in a way that makes it easy to find and maintain:</p>
        <pre><code>src/
  components/
    common/
    features/
  hooks/
  utils/
  services/
  pages/</code></pre>

        <h2>Performance Optimization</h2>
        <p>Keep your application fast with these techniques:</p>
        <ul>
          <li>Use React.memo() for expensive components</li>
          <li>Implement code splitting with React.lazy()</li>
          <li>Optimize re-renders with useMemo and useCallback</li>
          <li>Use virtual scrolling for long lists</li>
        </ul>

        <h2>Conclusion</h2>
        <p>Building scalable React applications is an ongoing process. Start with these principles and continuously refine your approach as your application grows.</p>
      `
    },
    {
      id: 2,
      slug: "mastering-typescript-in-2025",
      title: "Mastering TypeScript in 2025",
      excerpt: "A comprehensive guide to TypeScript's advanced features and how to leverage them.",
      date: "Dec 15, 2025",
      readTime: "12 min read",
      category: "TypeScript",
      tags: ["TypeScript", "JavaScript", "Development"],
      views: 2100,
      content: `
        <h2>Why TypeScript?</h2>
        <p>TypeScript has become the de facto standard for building large-scale JavaScript applications. It provides type safety, better IDE support, and catches errors at compile time.</p>

        <h2>Advanced Types</h2>
        <p>Master these advanced TypeScript features:</p>
        <ul>
          <li><strong>Generics:</strong> Write reusable, type-safe code</li>
          <li><strong>Conditional Types:</strong> Create types based on conditions</li>
          <li><strong>Mapped Types:</strong> Transform existing types</li>
          <li><strong>Template Literal Types:</strong> Build string types programmatically</li>
        </ul>

        <h2>Type Guards</h2>
        <p>Type guards help TypeScript narrow down types at runtime:</p>
        <pre><code>function isString(value: unknown): value is string {
  return typeof value === 'string'
}</code></pre>

        <h2>Utility Types</h2>
        <p>TypeScript provides powerful utility types out of the box:</p>
        <ul>
          <li>Partial&lt;T&gt; - Make all properties optional</li>
          <li>Required&lt;T&gt; - Make all properties required</li>
          <li>Pick&lt;T, K&gt; - Select specific properties</li>
          <li>Omit&lt;T, K&gt; - Exclude specific properties</li>
        </ul>

        <h2>Best Practices</h2>
        <ul>
          <li>Enable strict mode in tsconfig.json</li>
          <li>Avoid using 'any' type</li>
          <li>Use const assertions for literal types</li>
          <li>Leverage type inference when possible</li>
        </ul>
      `
    },
    {
      id: 3,
      slug: "the-future-of-web-development",
      title: "The Future of Web Development",
      excerpt: "Exploring emerging technologies and trends that are shaping the future of web development.",
      date: "Dec 10, 2025",
      readTime: "10 min read",
      category: "Trends",
      tags: ["Web Development", "Trends", "Technology"],
      views: 3200,
      content: `
        <h2>Emerging Technologies</h2>
        <p>The web development landscape is constantly evolving. Here are the key trends shaping the future:</p>

        <h2>AI Integration</h2>
        <p>Artificial Intelligence is becoming integral to web development:</p>
        <ul>
          <li>AI-powered code completion</li>
          <li>Automated testing and debugging</li>
          <li>Personalized user experiences</li>
          <li>Natural language interfaces</li>
        </ul>

        <h2>Web Assembly</h2>
        <p>WebAssembly enables near-native performance in the browser, opening up new possibilities for compute-intensive applications.</p>

        <h2>Edge Computing</h2>
        <p>Moving computation closer to users with edge functions and distributed architectures.</p>

        <h2>Progressive Web Apps</h2>
        <p>PWAs continue to evolve, bridging the gap between web and native applications.</p>

        <h2>Web3 and Blockchain</h2>
        <p>Decentralized applications are creating new paradigms for web development.</p>
      `
    },
    {
      id: 4,
      slug: "optimizing-performance-in-nextjs",
      title: "Optimizing Performance in Next.js",
      excerpt: "Deep dive into Next.js performance optimization techniques.",
      date: "Dec 5, 2025",
      readTime: "15 min read",
      category: "Next.js",
      tags: ["Next.js", "Performance", "Optimization"],
      views: 1800,
      content: `
        <h2>Introduction to Next.js Performance</h2>
        <p>Next.js provides many built-in optimizations, but understanding how to leverage them is crucial for building fast applications.</p>

        <h2>Static Site Generation (SSG)</h2>
        <p>Pre-render pages at build time for maximum performance:</p>
        <pre><code>export async function getStaticProps() {
  return {
    props: { data }
  }
}</code></pre>

        <h2>Incremental Static Regeneration (ISR)</h2>
        <p>Update static content without rebuilding the entire site:</p>
        <ul>
          <li>Set revalidate time for automatic updates</li>
          <li>On-demand revalidation for instant updates</li>
        </ul>

        <h2>Image Optimization</h2>
        <p>Use next/image for automatic image optimization:</p>
        <ul>
          <li>Automatic WebP/AVIF conversion</li>
          <li>Lazy loading by default</li>
          <li>Responsive images</li>
          <li>Blur placeholder support</li>
        </ul>

        <h2>Code Splitting</h2>
        <p>Next.js automatically splits your code, but you can optimize further:</p>
        <ul>
          <li>Dynamic imports for components</li>
          <li>Route-based splitting</li>
          <li>Vendor chunk optimization</li>
        </ul>
      `
    },
    {
      id: 5,
      slug: "css-in-js-vs-traditional-css",
      title: "CSS-in-JS vs Traditional CSS",
      excerpt: "An in-depth comparison of CSS-in-JS solutions versus traditional CSS approaches.",
      date: "Nov 28, 2025",
      readTime: "7 min read",
      category: "CSS",
      tags: ["CSS", "Styling", "Frontend"],
      views: 980,
      content: `
        <h2>The Great Debate</h2>
        <p>The choice between CSS-in-JS and traditional CSS approaches has been a topic of much discussion in the frontend community.</p>

        <h2>CSS-in-JS Advantages</h2>
        <ul>
          <li>Scoped styles by default</li>
          <li>Dynamic styling based on props</li>
          <li>Type-safe styles with TypeScript</li>
          <li>No naming conflicts</li>
        </ul>

        <h2>Traditional CSS Advantages</h2>
        <ul>
          <li>Better performance (no runtime cost)</li>
          <li>Smaller bundle sizes</li>
          <li>Familiar syntax</li>
          <li>Better caching</li>
        </ul>

        <h2>Modern Solutions</h2>
        <p>Tools like Tailwind CSS and CSS Modules offer a middle ground:</p>
        <ul>
          <li>Utility-first approach with Tailwind</li>
          <li>Scoped styles with CSS Modules</li>
          <li>Zero runtime cost</li>
        </ul>

        <h2>Recommendation</h2>
        <p>Choose based on your project needs:</p>
        <ul>
          <li>Highly dynamic UIs: CSS-in-JS</li>
          <li>Performance-critical apps: Traditional CSS or Tailwind</li>
          <li>Component libraries: CSS-in-JS</li>
        </ul>
      `
    },
    {
      id: 6,
      slug: "building-a-design-system-from-scratch",
      title: "Building a Design System from Scratch",
      excerpt: "A step-by-step guide to creating a comprehensive design system.",
      date: "Nov 20, 2025",
      readTime: "20 min read",
      category: "Design",
      tags: ["Design System", "UI/UX", "Components"],
      views: 1560,
      content: `
        <h2>What is a Design System?</h2>
        <p>A design system is a collection of reusable components, guided by clear standards, that can be assembled together to build any number of applications.</p>

        <h2>Foundation Elements</h2>
        <p>Start with these core elements:</p>
        <ul>
          <li><strong>Color Palette:</strong> Primary, secondary, and semantic colors</li>
          <li><strong>Typography:</strong> Font families, sizes, and weights</li>
          <li><strong>Spacing:</strong> Consistent spacing scale</li>
          <li><strong>Grid System:</strong> Layout guidelines</li>
        </ul>

        <h2>Component Library</h2>
        <p>Build a comprehensive set of components:</p>
        <ul>
          <li>Buttons and form controls</li>
          <li>Cards and containers</li>
          <li>Navigation elements</li>
          <li>Modal and overlays</li>
          <li>Data displays</li>
        </ul>

        <h2>Documentation</h2>
        <p>Clear documentation is crucial:</p>
        <ul>
          <li>Usage guidelines</li>
          <li>Code examples</li>
          <li>Accessibility notes</li>
          <li>Do's and don'ts</li>
        </ul>

        <h2>Governance</h2>
        <p>Establish processes for maintaining and evolving the system:</p>
        <ul>
          <li>Contribution guidelines</li>
          <li>Review process</li>
          <li>Versioning strategy</li>
          <li>Communication channels</li>
        </ul>
      `
    }
  ]

export const getPost = (slug) => posts.find((post) => post.slug === slug)
