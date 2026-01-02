import Head from 'next/head'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import OrbitalMenu from '../../components/OrbitalMenu'

export default function BlogPost() {
  const router = useRouter()
  const { id: slug } = router.query
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('scroll', handleScroll)
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const allPosts = [
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

  const post = allPosts.find(p => p.slug === slug)
  const recentPosts = allPosts.slice(0, 3).filter(p => p.slug !== slug)
  const popularPosts = [...allPosts].sort((a, b) => b.views - a.views).slice(0, 3).filter(p => p.slug !== slug)

  if (!post) {
    return (
      <>
        <Head>
          <title>Post Not Found - Shafiur Miju</title>
        </Head>
        <OrbitalMenu />
        <main className="relative max-w-[1400px] mx-auto px-8 min-h-screen py-32">
          <div className="text-center">
            <h1 className="text-4xl text-white font-bold mb-4">Post Not Found</h1>
            <Link href="/blog" className="text-primary hover:text-primary-accent transition-colors">
              ← Back to Blog
            </Link>
          </div>
        </main>
      </>
    )
  }

  return (
    <>
      <Head>
        <title>{post.title} - Shafiur Miju</title>
        <meta name="description" content={post.title} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <OrbitalMenu />

      {/* Animated Background */}
      <div className="fixed top-0 left-0 w-full h-full -z-10 overflow-hidden bg-gradient-to-br from-dark to-dark-lighter">
        <div 
          className="absolute w-[600px] h-[600px] rounded-full top-[-200px] left-[-200px] blur-[80px] animate-float"
          style={{
            background: 'radial-gradient(circle, rgba(138, 43, 226, 0.4) 0%, rgba(75, 0, 130, 0.2) 50%, transparent 70%)',
            transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`
          }}
        ></div>
        <div 
          className="absolute w-[500px] h-[500px] rounded-full top-1/2 right-[-150px] blur-[80px] animate-float-reverse"
          style={{
            background: 'radial-gradient(circle, rgba(0, 191, 255, 0.3) 0%, rgba(30, 144, 255, 0.15) 50%, transparent 70%)',
            transform: `translate(${-mousePosition.x * 0.015}px, ${-mousePosition.y * 0.015}px)`
          }}
        ></div>
      </div>

      {/* Cursor Follower */}
      <div 
        className="fixed w-5 h-5 border-2 border-primary/50 rounded-full pointer-events-none z-[9999] transition-all duration-100 mix-blend-difference"
        style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`,
          transform: 'translate(-50%, -50%)'
        }}
      ></div>

      <main className="relative max-w-[1400px] mx-auto px-8 min-h-screen py-32">
        {/* Back Button */}
        <Link href="/blog" className="inline-flex items-center gap-2 text-primary/70 hover:text-primary transition-colors duration-300 mb-8 no-underline">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M13 3L6 10L13 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
          Back to Blog
        </Link>

        <div className="grid lg:grid-cols-[1fr_350px] gap-12">
          {/* Main Content */}
          <div>
            {/* Article Header */}
            <article className="prose prose-invert max-w-none">
              <div className="mb-8">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/10 border border-primary/30 rounded-full text-primary text-sm font-medium mb-6">
                  {post.category}
                </div>
                
                <h1 className="text-[clamp(2.5rem,5vw,4rem)] font-extrabold mb-6 leading-[1.1] text-white">
                  {post.title}
                </h1>
                
                <div className="flex items-center gap-6 text-white/60 mb-8">
                  <span>{post.date}</span>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>

                <div className="flex flex-wrap gap-2 mb-12">
                  {post.tags.map((tag, i) => (
                    <span 
                      key={i}
                      className="px-3 py-1.5 bg-primary/5 border border-primary/20 rounded-md text-white/70 text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Article Content */}
              <div 
                className="blog-content text-white/80 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            </article>

            {/* Share Section */}
            <div className="mt-16 pt-8 border-t border-primary/20">
              <p className="text-white/60 mb-4">Share this article:</p>
              <div className="flex gap-4">
                <button className="px-6 py-3 bg-primary/10 border border-primary/30 rounded-xl text-primary hover:bg-primary/20 transition-colors duration-300">
                  Twitter
                </button>
                <button className="px-6 py-3 bg-primary/10 border border-primary/30 rounded-xl text-primary hover:bg-primary/20 transition-colors duration-300">
                  LinkedIn
                </button>
                <button className="px-6 py-3 bg-primary/10 border border-primary/30 rounded-xl text-primary hover:bg-primary/20 transition-colors duration-300">
                  Copy Link
                </button>
              </div>
            </div>
          </div>

          {/* Sidebar - Recent & Popular Posts */}
          <aside className="lg:sticky lg:top-8 h-fit space-y-8">
            {/* Recent Posts */}
            <div>
              <h3 className="text-xl font-bold text-white mb-4">Recent Posts</h3>
              <div className="space-y-3">{recentPosts.map((recentPost) => (
                <Link
                  key={recentPost.id}
                  href={`/blog/${recentPost.slug}`}
                  className="block p-4 bg-primary/[0.03] border border-primary/20 rounded-xl hover:border-primary/50 transition-all duration-300 no-underline group"
                >
                  <div className="text-sm text-primary mb-2">{recentPost.category}</div>
                  <h4 className="text-white font-semibold mb-2 group-hover:text-primary transition-colors">{recentPost.title}</h4>
                  <p className="text-white/60 text-sm mb-2 line-clamp-2">{recentPost.excerpt}</p>
                  <div className="flex items-center gap-3 text-white/50 text-xs">
                    <span>{recentPost.date}</span>
                    <span>•</span>
                    <span>{recentPost.readTime}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Popular Posts */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Popular Posts</h3>
            <div className="space-y-3">{popularPosts.map((popularPost) => (
              <Link
                key={popularPost.id}
                href={`/blog/${popularPost.slug}`}
                className="block p-4 bg-primary/[0.03] border border-primary/20 rounded-xl hover:border-primary/50 transition-all duration-300 no-underline group"
              >
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-sm text-primary">{popularPost.category}</span>
                  <span className="text-xs text-white/40">• {popularPost.views} views</span>
                </div>
                <h4 className="text-white font-semibold mb-2 group-hover:text-primary transition-colors">{popularPost.title}</h4>
                <p className="text-white/60 text-sm mb-2 line-clamp-2">{popularPost.excerpt}</p>
                <div className="flex items-center gap-3 text-white/50 text-xs">
                  <span>{popularPost.date}</span>
                  <span>•</span>
                  <span>{popularPost.readTime}</span>
                </div>
              </Link>
            ))}
            </div>
          </div>
        </aside>
        </div>
      </main>

      <style jsx global>{`
        .blog-content h2 {
          font-size: 2rem;
          font-weight: 700;
          color: white;
          margin-top: 2.5rem;
          margin-bottom: 1rem;
        }
        
        .blog-content h3 {
          font-size: 1.5rem;
          font-weight: 600;
          color: white;
          margin-top: 2rem;
          margin-bottom: 0.75rem;
        }
        
        .blog-content p {
          margin-bottom: 1.5rem;
          line-height: 1.8;
        }
        
        .blog-content ul {
          margin-bottom: 1.5rem;
          padding-left: 1.5rem;
        }
        
        .blog-content li {
          margin-bottom: 0.75rem;
          line-height: 1.7;
        }
        
        .blog-content strong {
          color: #bb86fc;
          font-weight: 600;
        }
        
        .blog-content pre {
          background: rgba(187, 134, 252, 0.05);
          border: 1px solid rgba(187, 134, 252, 0.2);
          border-radius: 12px;
          padding: 1.5rem;
          margin: 1.5rem 0;
          overflow-x: auto;
        }
        
        .blog-content code {
          color: #03dac6;
          font-family: 'Space Grotesk', monospace;
          font-size: 0.9em;
        }
      `}</style>
    </>
  )
}
