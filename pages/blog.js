import Head from 'next/head'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import OrbitalMenu from '../components/OrbitalMenu'

export default function Blog() {
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

  const blogPosts = [
    {
      id: 1,
      slug: "building-scalable-react-applications",
      title: "Building Scalable React Applications",
      excerpt: "Learn the best practices and architectural patterns for building large-scale React applications that are maintainable and performant.",
      date: "Dec 20, 2025",
      readTime: "8 min read",
      category: "React",
      tags: ["React", "Architecture", "Best Practices"],
      views: 1250
    },
    {
      id: 2,
      slug: "mastering-typescript-in-2025",
      title: "Mastering TypeScript in 2025",
      excerpt: "A comprehensive guide to TypeScript's advanced features and how to leverage them for better code quality and developer experience.",
      date: "Dec 15, 2025",
      readTime: "12 min read",
      category: "TypeScript",
      tags: ["TypeScript", "JavaScript", "Development"],
      views: 2100
    },
    {
      id: 3,
      slug: "the-future-of-web-development",
      title: "The Future of Web Development",
      excerpt: "Exploring emerging technologies and trends that are shaping the future of web development, from Web3 to AI integration.",
      date: "Dec 10, 2025",
      readTime: "10 min read",
      category: "Trends",
      tags: ["Web Development", "Trends", "Technology"],
      views: 3200
    },
    {
      id: 4,
      slug: "optimizing-performance-in-nextjs",
      title: "Optimizing Performance in Next.js",
      excerpt: "Deep dive into Next.js performance optimization techniques including SSR, ISR, and image optimization strategies.",
      date: "Dec 5, 2025",
      readTime: "15 min read",
      category: "Next.js",
      tags: ["Next.js", "Performance", "Optimization"],
      views: 1800
    },
    {
      id: 5,
      slug: "css-in-js-vs-traditional-css",
      title: "CSS-in-JS vs Traditional CSS",
      excerpt: "An in-depth comparison of CSS-in-JS solutions versus traditional CSS approaches, with real-world examples and benchmarks.",
      date: "Nov 28, 2025",
      readTime: "7 min read",
      category: "CSS",
      tags: ["CSS", "Styling", "Frontend"],
      views: 980
    },
    {
      id: 6,
      slug: "building-a-design-system-from-scratch",
      title: "Building a Design System from Scratch",
      excerpt: "A step-by-step guide to creating a comprehensive design system that scales with your organization.",
      date: "Nov 20, 2025",
      readTime: "20 min read",
      category: "Design",
      tags: ["Design System", "UI/UX", "Components"],
      views: 1560
    }
  ]

  return (
    <>
      <Head>
        <title>Blog - Shafiur Miju</title>
        <meta name="description" content="Thoughts on web development, technology, and software engineering" />
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
        <div 
          className="absolute w-[450px] h-[450px] rounded-full bottom-[-150px] left-1/2 blur-[80px] animate-float-slow"
          style={{
            background: 'radial-gradient(circle, rgba(255, 20, 147, 0.3) 0%, rgba(199, 21, 133, 0.15) 50%, transparent 70%)',
            transform: `translate(${mousePosition.x * 0.01}px, ${mousePosition.y * 0.025}px)`
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

      <main className="relative max-w-[1400px] mx-auto px-8 min-h-screen py-20">
        {/* Header */}
        <div 
          className="mb-20"
          style={{
            transform: `translateY(${scrollY * 0.3}px)`
          }}
        >
          <Link href="/" className="inline-flex items-center gap-2 text-primary/70 hover:text-primary transition-colors duration-300 mb-8 no-underline">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M13 3L6 10L13 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
            Back to Home
          </Link>
          <h1 className="text-[clamp(3rem,8vw,5rem)] font-extrabold mb-4 leading-[1.1] [animation:fadeInUp_0.8s_ease_0.2s_both]">
            <span className="relative inline-block">
              <span className="relative bg-gradient-to-r from-primary via-primary-accent to-primary-light bg-clip-text text-transparent animate-gradient-shift bg-200">
                Blog
              </span>
              <span className="absolute top-0 left-0 bg-gradient-to-r from-primary via-primary-accent to-primary-light bg-clip-text text-transparent blur-[20px] opacity-50 animate-gradient-shift bg-200">
                Blog
              </span>
            </span>
          </h1>
          <p className="text-[clamp(1rem,2vw,1.25rem)] text-white/60 max-w-[600px] leading-[1.7] [animation:fadeInUp_0.8s_ease_0.4s_both]">
            Thoughts on web development, technology, and software engineering.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
          {blogPosts.map((post, index) => (
            <article 
              key={post.id}
              className="group p-8 bg-primary/[0.03] border border-primary/20 rounded-3xl transition-all duration-[400ms] hover:translate-y-[-10px] hover:border-primary/50 hover:shadow-[0_20px_60px_rgba(187,134,252,0.2)] relative overflow-hidden"
              style={{
                animation: `fadeInUp 0.8s ease ${0.2 + index * 0.1}s both`
              }}
            >
              {/* Category Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/10 border border-primary/30 rounded-full text-primary text-sm font-medium mb-4">
                {post.category}
              </div>

              {/* Post Content */}
              <h2 className="text-2xl text-white font-bold mb-3 group-hover:text-primary transition-colors duration-300">
                {post.title}
              </h2>
              
              <p className="text-white/70 leading-[1.7] mb-6">
                {post.excerpt}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {post.tags.map((tag, i) => (
                  <span 
                    key={i}
                    className="px-3 py-1 bg-primary/5 border border-primary/10 rounded-md text-white/60 text-xs"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Meta Info */}
              <div className="flex items-center justify-between pt-4 border-t border-primary/10">
                <span className="text-white/50 text-sm">{post.date}</span>
                <span className="text-primary/70 text-sm">{post.readTime}</span>
              </div>

              {/* Read More Link */}
              <Link 
                href={`/blog/${post.slug}`}
                className="absolute inset-0 z-10"
                aria-label={`Read ${post.title}`}
              ></Link>
            </article>
          ))}
        </div>

        {/* Newsletter Section */}
        <section className="mt-32 p-12 bg-gradient-to-br from-primary/10 to-primary-accent/5 border border-primary/20 rounded-3xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-primary/10 rounded-full blur-[100px]"></div>
          <div className="relative z-10 max-w-[600px] mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-4">Stay Updated</h2>
            <p className="text-white/70 text-lg mb-8">
              Subscribe to get notified about new articles and insights on web development.
            </p>
            <form className="flex gap-4 flex-col sm:flex-row">
              <input 
                type="email"
                placeholder="your.email@example.com"
                className="flex-1 px-6 py-4 bg-dark/50 border border-primary/30 rounded-xl text-white placeholder:text-white/40 focus:outline-none focus:border-primary transition-colors duration-300"
              />
              <button 
                type="submit"
                className="px-8 py-4 bg-gradient-to-r from-primary to-primary-dark text-white rounded-xl font-semibold transition-all duration-300 hover:translate-y-[-3px] hover:shadow-[0_15px_40px_rgba(187,134,252,0.4)]"
              >
                Subscribe
              </button>
            </form>
          </div>
        </section>
      </main>
    </>
  )
}
