import Head from 'next/head'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import OrbitalMenu from '../components/OrbitalMenu'
import { projects } from '../data/projects'

export default function Contact() {
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

  const stats = [
    { label: 'Response Time', value: '< 24h', icon: '⚡' },
    { label: 'Projects Completed', value: projects.length, icon: '✓' },
    { label: 'Years Experience', value: '3+', icon: '★' },
  ]

  return (
    <>
      <Head>
        <title>Contact - Shafiur Miju</title>
        <meta name="description" content="Get in touch for your next project" />
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
          className="mb-16"
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
                Let's Connect
              </span>
              <span className="absolute top-0 left-0 bg-gradient-to-r from-primary via-primary-accent to-primary-light bg-clip-text text-transparent blur-[20px] opacity-50 animate-gradient-shift bg-200">
                Let's Connect
              </span>
            </span>
          </h1>
          <p className="text-[clamp(1rem,2vw,1.25rem)] text-white/60 max-w-[600px] leading-[1.7] [animation:fadeInUp_0.8s_ease_0.4s_both]">
            Have a project in mind? Let's create something amazing together.
          </p>
        </div>

        {/* Stats Bar */}
        <div className="grid grid-cols-3 gap-6 mb-16 [animation:fadeInUp_0.8s_ease_0.6s_both]">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="relative p-6 bg-primary/[0.03] border border-primary/20 rounded-2xl hover:border-primary/40 transition-all duration-300 group overflow-hidden"
            >
              <div className="absolute top-0 right-0 text-6xl opacity-5 group-hover:opacity-10 transition-opacity">
                {stat.icon}
              </div>
              <div className="relative z-10">
                <div className="text-3xl font-bold text-primary mb-1">{stat.value}</div>
                <div className="text-sm text-white/60">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-12">
          {/* Contact Form */}
          <div className="[animation:fadeInUp_0.8s_ease_0.8s_both]">
            <div className="relative p-8 bg-primary/[0.03] border border-primary/20 rounded-3xl backdrop-blur-sm">
              {/* Floating particles effect */}
              <div className="absolute inset-0 overflow-hidden rounded-3xl pointer-events-none">
                {[...Array(5)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-2 h-2 bg-primary/30 rounded-full animate-float"
                    style={{
                      left: `${20 + i * 20}%`,
                      top: `${10 + i * 15}%`,
                      animationDelay: `${i * 0.5}s`,
                      animationDuration: `${3 + i}s`
                    }}
                  ></div>
                ))}
              </div>

              <div className="relative z-10 flex flex-col items-center text-center py-8">
                <div className="w-16 h-16 rounded-2xl bg-[#1dbf73]/15 border border-[#1dbf73]/40 flex items-center justify-center mb-6">
                  <span className="text-[#1dbf73] text-3xl font-bold leading-none">fi</span>
                </div>
                <h2 className="text-[clamp(1.75rem,3vw,2.25rem)] font-bold text-white mb-4">Hire me on Fiverr</h2>
                <p className="text-white/60 leading-[1.7] max-w-[460px] mb-8">
                  Everything runs through my Fiverr gig — messages, scope, milestones and payment stay
                  in one place, so both of us are covered from brief to delivery.
                </p>
                <a
                  href="https://www.fiverr.com/shafiur_miju"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-[#1dbf73] text-white rounded-xl font-semibold text-lg no-underline transition-all duration-300 shadow-[0_10px_30px_rgba(29,191,115,0.3)] hover:bg-[#19a463] hover:translate-y-[-3px] hover:shadow-[0_15px_40px_rgba(29,191,115,0.45)]"
                >
                  Message me on Fiverr
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M7 10H17M17 10L13 6M17 10L13 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </a>
                <div className="mt-6 font-mono text-sm text-white/40">fiverr.com/shafiur_miju</div>
              </div>
            </div>
          </div>

          {/* Contact Info Sidebar */}
          <div className="space-y-6 [animation:fadeInUp_0.8s_ease_1s_both]">
            {/* Direct Contact — disabled: no personal email on this build.
                Uncomment and fill in a real address to restore.
            <div className="p-6 bg-primary/[0.03] border border-primary/20 rounded-2xl hover:border-primary/40 transition-all duration-300 group">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 flex items-center justify-center bg-primary/10 rounded-xl text-2xl group-hover:scale-110 transition-transform duration-300">
                  📧
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-2">Email Me</h3>
                  <a href="mailto:your.email@example.com" className="text-primary hover:text-primary-accent transition-colors no-underline">
                    your.email@example.com
                  </a>
                </div>
              </div>
            </div>

            */}

            {/* Social profiles — disabled: no personal handles on this build.
                Uncomment and fill in real URLs to restore.
            <div className="p-6 bg-primary/[0.03] border border-primary/20 rounded-2xl">
              <h3 className="text-white font-semibold mb-4">Connect on Social</h3>
              <div className="space-y-3">
                {[
                  { name: 'LinkedIn', icon: '💼', url: '#' },
                  { name: 'GitHub', icon: '🔧', url: '#' },
                  { name: 'Twitter', icon: '🐦', url: '#' },
                  { name: 'Dribbble', icon: '🎨', url: '#' }
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    className="flex items-center gap-3 p-3 bg-primary/5 border border-primary/10 rounded-xl hover:border-primary/40 hover:bg-primary/10 transition-all duration-300 no-underline group"
                  >
                    <span className="text-2xl group-hover:scale-110 transition-transform duration-300">
                      {social.icon}
                    </span>
                    <span className="text-white/80 group-hover:text-primary transition-colors">
                      {social.name}
                    </span>
                    <svg 
                      className="ml-auto w-4 h-4 text-primary/50 group-hover:text-primary group-hover:translate-x-1 transition-all duration-300" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                ))}
              </div>
            </div>

            */}

            {/* Availability Status */}
            <div className="p-6 bg-gradient-to-br from-primary/10 to-primary-accent/5 border border-primary/30 rounded-2xl">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-white font-semibold">Available for Work</span>
              </div>
              <p className="text-white/60 text-sm">
                Currently accepting new projects. Let's discuss how I can help bring your ideas to life!
              </p>
            </div>

            {/* What I Build */}
            <div className="p-6 bg-primary/[0.03] border border-primary/20 rounded-2xl">
              <h3 className="text-white font-semibold mb-4">What I Build</h3>
              <div className="space-y-3">
                {[
                  { icon: '📱', title: 'Mobile Apps', detail: 'React Native for iOS and Android' },
                  { icon: '🟣', title: 'Backend & APIs', detail: 'ASP.NET, Express, FastAPI' },
                  { icon: '⚛️', title: 'Web Apps', detail: 'React, Next.js, Tailwind' },
                  { icon: '🤖', title: 'AI Features', detail: 'LLM integration, self-hosted inference' },
                ].map((service) => (
                  <div key={service.title} className="flex items-start gap-3 p-3 bg-primary/5 border border-primary/10 rounded-xl">
                    <span className="text-xl leading-none mt-0.5">{service.icon}</span>
                    <div>
                      <div className="text-white/90 text-sm font-medium">{service.title}</div>
                      <div className="text-white/50 text-xs mt-0.5">{service.detail}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* How It Works */}
            <div className="p-6 bg-primary/[0.03] border border-primary/20 rounded-2xl">
              <h3 className="text-white font-semibold mb-4">How It Works</h3>
              <ol className="list-none p-0 m-0 space-y-3">
                {[
                  'Send your brief through Fiverr',
                  'We agree on scope, timeline and milestones',
                  'I build and share progress as it lands',
                  'Delivery, revisions and handover',
                ].map((step, index) => (
                  <li key={step} className="flex gap-3 text-sm text-white/60 leading-[1.5]">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/15 border border-primary/30 text-primary text-xs font-semibold flex items-center justify-center font-mono">
                      {index + 1}
                    </span>
                    <span>{step}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
