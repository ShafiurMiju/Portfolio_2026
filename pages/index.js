import Head from 'next/head'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import OrbitalMenu from '../components/OrbitalMenu'
import { projects, featuredProjects, getGradientClass } from '../data/projects'
import { skillGroups } from '../data/skills'

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [scrollY, setScrollY] = useState(0)
  const [isMouseDown, setIsMouseDown] = useState(false)
  const [trails, setTrails] = useState([])

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
      
      // Add trail effect when mouse is pressed and moving
      if (isMouseDown) {
        const newTrail = {
          id: Date.now() + Math.random(),
          x: e.clientX,
          y: e.clientY,
          timestamp: Date.now()
        }
        setTrails(prev => [...prev, newTrail])
        
        // Remove trail after 500ms
        setTimeout(() => {
          setTrails(prev => prev.filter(trail => trail.id !== newTrail.id))
        }, 500)
      }
    }
    
    const handleMouseDown = (e) => {
      if (e.button === 0) { // Left click only
        e.preventDefault()
        setIsMouseDown(true)
        document.body.style.userSelect = 'none'
      }
    }
    
    const handleMouseUp = () => {
      setIsMouseDown(false)
      document.body.style.userSelect = ''
    }
    
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('mousedown', handleMouseDown)
    window.addEventListener('mouseup', handleMouseUp)
    window.addEventListener('scroll', handleScroll)
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mousedown', handleMouseDown)
      window.removeEventListener('mouseup', handleMouseUp)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [isMouseDown])

  return (
    <>
      <Head>
        <title>Shafiur Miju - Full-Stack Developer</title>
        <meta name="description" content="Full-stack developer — ASP.NET, Node.js and React across web and mobile" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Space+Grotesk:wght@500;700&display=swap" rel="stylesheet" />
      </Head>
      {/* Orbital Menu */}
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

      {/* Mouse Trail Effect */}
      {trails.map((trail) => (
        <div
          key={trail.id}
          className="fixed pointer-events-none z-[9998] animate-trail-fade"
          style={{
            left: `${trail.x}px`,
            top: `${trail.y}px`,
            transform: 'translate(-50%, -50%)'
          }}
        >
          <div className="w-6 h-6 rounded-full bg-gradient-to-r from-primary-accent via-primary to-primary-light opacity-80 blur-sm"></div>
        </div>
      ))}

      {/* Cursor Follower */}
      <div 
        className="fixed w-5 h-5 border-2 border-primary/50 rounded-full pointer-events-none z-[9999] transition-all duration-100 mix-blend-difference"
        style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`,
          transform: 'translate(-50%, -50%)'
        }}
      ></div>

      <main className="relative max-w-[1400px] mx-auto px-8 min-h-screen overflow-x-hidden">
        {/* Hero Section */}
        <section className="min-h-screen flex flex-col justify-center items-start py-8 relative">
          <div 
            className="max-w-[800px]"
            style={{
              transform: `translateY(${scrollY * 0.3}px)`
            }}
          >
            <div className="inline-flex items-center gap-2 px-5 py-2 bg-primary/10 border border-primary/30 rounded-[50px] text-primary text-sm font-medium mb-8 backdrop-blur-[10px] animate-fade-in-up">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse-slow"></span>
              Available for work
            </div>
            <h1 className="text-[clamp(3rem,8vw,6rem)] font-extrabold mb-4 leading-[1.1] [animation:fadeInUp_0.8s_ease_0.2s_both]">
              <span className="block text-white/70 text-[clamp(2rem,4vw,3rem)] font-medium mb-2">Hi, I'm</span>
              <span className="relative inline-block">
                <span className="relative bg-gradient-to-r from-primary via-primary-accent to-primary-light bg-clip-text text-transparent animate-gradient-shift bg-200">
                  MD SHAFIUR RAHMAN
                </span>
                <span className="absolute top-0 left-0 bg-gradient-to-r from-primary via-primary-accent to-primary-light bg-clip-text text-transparent blur-[20px] opacity-50 animate-gradient-shift bg-200">
                  MD SHAFIUR RAHMAN
                </span>
              </span>
            </h1>
            <h2 className="text-[clamp(1.5rem,3vw,2.5rem)] text-white/80 mb-6 font-medium [animation:fadeInUp_0.8s_ease_0.4s_both]">
              <span className="font-mono">Full-Stack Developer</span>
              <span className="animate-blink text-primary">|</span>
            </h2>
            <p className="text-[clamp(1rem,2vw,1.25rem)] text-white/60 max-w-[600px] leading-[1.7] mb-10 [animation:fadeInUp_0.8s_ease_0.6s_both]">
              Crafting exceptional digital experiences through elegant code and innovative solutions.
            </p>
            <div className="flex gap-4 flex-wrap [animation:fadeInUp_0.8s_ease_0.8s_both]">
              <a href="#projects" className="inline-flex items-center gap-3 px-8 py-4 rounded-xl font-semibold text-base transition-all duration-300 relative overflow-hidden bg-gradient-to-r from-primary to-primary-dark text-white shadow-[0_10px_40px_rgba(187,134,252,0.3)] hover:translate-y-[-3px] hover:shadow-[0_15px_50px_rgba(187,134,252,0.4)] before:content-[''] before:absolute before:top-0 before:left-[-100%] before:w-full before:h-full before:bg-gradient-to-r before:from-transparent before:via-white/30 before:to-transparent before:transition-all before:duration-500 hover:before:left-[100%]">
                <span>Explore Work</span>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M7 10H17M17 10L13 6M17 10L13 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </a>
              <a href="#contact" className="inline-flex items-center gap-3 px-8 py-4 rounded-xl font-semibold text-base transition-all duration-300 bg-white/5 border-2 border-primary/30 text-primary backdrop-blur-[10px] hover:bg-primary/10 hover:border-primary hover:translate-y-[-3px]">
                <span>Get In Touch</span>
              </a>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-32 relative">
          <div className="flex items-center gap-4 mb-16">
            <span className="text-2xl text-primary font-bold font-mono">01.</span>
            <h2 className="text-[clamp(2rem,4vw,3rem)] text-white font-bold m-0 whitespace-nowrap">About Me</h2>
            <div className="flex-1 h-px bg-gradient-to-r from-primary/30 to-transparent"></div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-16 items-center">
            <div className="text-white/80">
              <p className="text-lg leading-[1.8] mb-6 text-white/70">
                I'm a passionate software engineer who transforms complex problems into elegant, user-centric solutions. 
                With a deep love for both <span className="text-primary font-semibold relative">design and code</span>, I bridge the gap between 
                aesthetics and functionality.
              </p>
              <p className="text-lg leading-[1.8] mb-6 text-white/70">
                My journey in tech has been driven by curiosity and a relentless pursuit of excellence. I specialize in 
                building <span className="text-primary font-semibold relative">performant, scalable applications</span> that users love.
              </p>
              <p className="text-lg leading-[1.8] mb-6 text-white/70">
                When I'm not coding, you'll find me contributing to open source, exploring cutting-edge technologies, 
                or mentoring aspiring developers.
              </p>
              <div className="grid grid-cols-3 gap-8 mt-12">
                {[
                  { value: '3+', label: 'Years Experience' },
                  { value: projects.length, label: 'Projects Completed' },
                  { value: new Set(projects.flatMap((p) => p.tech)).size, label: 'Technologies Used' },
                ].map((stat) => (
                  <div key={stat.label} className="text-center p-6 bg-primary/5 border border-primary/20 rounded-xl transition-all duration-300 hover:translate-y-[-5px] hover:bg-primary/10 hover:border-primary/40">
                    <div className="text-4xl font-bold text-primary mb-2 font-mono">{stat.value}</div>
                    <div className="text-sm text-white/60">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="relative aspect-square rounded-[20px] overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-primary/30 to-primary-accent/30 rounded-[20px]"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] bg-dark/90 rounded-xl p-4 backdrop-blur-[10px] border border-primary/30">
                  <div className="flex gap-2 mb-4">
                    <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
                    <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
                    <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
                  </div>
                  <pre className="font-mono text-sm leading-[1.6] text-primary m-0">
{`const developer = {
  name: "Shafiur Rahman",
  role: "Full-Stack",
  backend: ["ASP.NET", "Node"],
  frontend: ["React", "Next.js"],
  mobile: "React Native",
  data: ["MSSQL", "Postgres", "Mongo"]
};`}
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-32 relative">
          <div className="flex items-center gap-4 mb-16">
            <span className="text-2xl text-primary font-bold font-mono">02.</span>
            <h2 className="text-[clamp(2rem,4vw,3rem)] text-white font-bold m-0 whitespace-nowrap">Skills & Expertise</h2>
            <div className="flex-1 h-px bg-gradient-to-r from-primary/30 to-transparent"></div>
          </div>
          <div className="max-w-[1200px] mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {skillGroups.map((group) => (
                <div
                  key={group.name}
                  className="group flex flex-col p-7 bg-primary/[0.04] border border-primary/20 rounded-2xl transition-all duration-300 hover:translate-y-[-6px] hover:bg-primary/[0.08] hover:border-primary/50 hover:shadow-[0_18px_45px_rgba(187,134,252,0.18)]"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="text-2xl w-12 h-12 flex items-center justify-center bg-primary/10 border border-primary/20 rounded-xl transition-transform duration-300 group-hover:scale-110">
                      {group.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-white m-0">{group.name}</h3>
                  </div>
                  <p className="text-sm text-white/50 leading-relaxed mb-5">{group.blurb}</p>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {group.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1.5 bg-primary/10 border border-primary/20 rounded-lg text-white/75 text-[0.8125rem] font-medium transition-all duration-300 hover:bg-primary/20 hover:border-primary/50 hover:text-white"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-sm text-white/50">
              <span className="font-mono text-primary/80">Shipped to</span>
              {['Web', 'APIs', 'iOS', 'Android', 'macOS'].map((platform, index) => (
                <span key={platform} className="flex items-center gap-3">
                  {index > 0 && <span className="text-primary/30">/</span>}
                  <span className="text-white/70">{platform}</span>
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-32 relative">
          <div className="flex items-center gap-4 mb-16">
            <span className="text-2xl text-primary font-bold font-mono">03.</span>
            <h2 className="text-[clamp(2rem,4vw,3rem)] text-white font-bold m-0 whitespace-nowrap">Featured Work</h2>
            <div className="flex-1 h-px bg-gradient-to-r from-primary/30 to-transparent"></div>
          </div>
          <div className="grid gap-12">
            {featuredProjects.map((project, index) => {
              const flipped = index % 2 === 1
              return (
                <div
                  key={project.id}
                  className={`group grid gap-8 p-8 bg-primary/[0.03] border border-primary/20 rounded-3xl transition-all duration-[400ms] hover:translate-y-[-10px] hover:border-primary/50 hover:shadow-[0_20px_60px_rgba(187,134,252,0.2)] relative overflow-hidden ${
                    flipped ? 'lg:grid-cols-[1.2fr_1fr]' : 'lg:grid-cols-[1fr_1.2fr]'
                  }`}
                >
                  <div className="absolute top-4 right-4 text-[4rem] font-black text-primary/10 font-mono leading-none pointer-events-none">
                    {String(index + 1).padStart(2, '0')}
                  </div>

                  {/* Visual */}
                  <div className={`relative aspect-[16/10] rounded-2xl overflow-hidden bg-dark/50 ${flipped ? 'lg:order-2' : ''}`}>
                    <div className={`w-full h-full bg-gradient-to-br ${getGradientClass(project.gradient)} transition-transform duration-500 group-hover:scale-105`}></div>
                    <div className="absolute inset-0 flex flex-col justify-end p-6 bg-gradient-to-t from-dark/80 via-dark/10 to-transparent">
                      {(project.year || project.status) && (
                        <div className="font-mono text-sm text-white/80 mb-2">
                          {project.status || project.year}
                        </div>
                      )}
                      <div className="flex flex-wrap gap-2">
                        {project.platforms.map((platform) => (
                          <span
                            key={platform}
                            className="px-2.5 py-1 bg-dark/70 backdrop-blur-sm border border-white/10 rounded-md text-xs text-white/80 font-medium"
                          >
                            {platform}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Details */}
                  <div className="flex flex-col justify-center">
                    <div className="text-sm text-primary uppercase tracking-[0.1em] font-semibold mb-2">{project.category}</div>
                    <h3 className="text-3xl text-white mb-3 font-bold">{project.title}</h3>
                    <p className="text-base leading-[1.7] text-white/70 mb-5">{project.description}</p>

                    {project.highlights?.length > 0 && (
                      <ul className="list-none p-0 m-0 mb-6 grid gap-2">
                        {project.highlights.slice(0, 3).map((highlight) => (
                          <li key={highlight} className="flex gap-3 text-sm text-white/60 leading-[1.6]">
                            <span className="text-primary mt-[2px]">▸</span>
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    )}

                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.slice(0, 6).map((tech) => (
                        <span key={tech} className="px-3.5 py-1.5 bg-primary/10 border border-primary/30 rounded-md text-white/80 text-sm font-medium">
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-6 items-center">
                      {project.liveUrl && (
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-primary font-semibold no-underline transition-all duration-300 hover:gap-3 hover:text-primary-accent">
                          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path d="M6 3L11 8L6 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                          </svg>
                          Live Demo
                        </a>
                      )}
                      {project.githubUrl && (
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-primary font-semibold no-underline transition-all duration-300 hover:gap-3 hover:text-primary-accent">
                          <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/>
                          </svg>
                          GitHub
                        </a>
                      )}
                      {!project.liveUrl && !project.githubUrl && (
                        <span className="inline-flex items-center gap-2 text-sm text-white/40 font-medium">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary/50"></span>
                          Private client work — details on request
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* View All Work Button */}
          <div className="mt-16 text-center">
            <Link href="/work" className="inline-flex items-center gap-3 px-10 py-5 bg-primary/10 border-2 border-primary/30 text-primary rounded-xl font-semibold text-lg transition-all duration-300 hover:bg-primary hover:text-white hover:border-primary hover:translate-y-[-5px] hover:shadow-[0_20px_50px_rgba(187,134,252,0.3)]">
              View All Work
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M7 12H17M17 12L13 8M17 12L13 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </Link>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-32 relative">
          <div className="flex items-center gap-4 mb-16">
            <span className="text-2xl text-primary font-bold font-mono">04.</span>
            <h2 className="text-[clamp(2rem,4vw,3rem)] text-white font-bold m-0 whitespace-nowrap">Let's Connect</h2>
            <div className="flex-1 h-px bg-gradient-to-r from-primary/30 to-transparent"></div>
          </div>
          <div className="max-w-[760px] mx-auto">
            <div className="flex flex-col items-center text-center">
              <h3 className="text-4xl text-white mb-6 font-bold leading-[1.2]">Have an exciting project?</h3>
              <p className="text-lg leading-[1.7] text-white/70 mb-8">
                I'm always interested in hearing about new projects and opportunities.
                Send over the brief on Fiverr and I'll get back to you.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <a
                  href="https://www.fiverr.com/shafiur_miju"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-8 py-5 bg-[#1dbf73] text-white rounded-xl font-semibold no-underline transition-all duration-300 shadow-[0_10px_30px_rgba(29,191,115,0.3)] hover:bg-[#19a463] hover:translate-y-[-3px] hover:shadow-[0_15px_40px_rgba(29,191,115,0.45)]"
                >
                  <span className="text-2xl font-bold leading-none">fi</span>
                  Hire Me on Fiverr
                </a>
                <Link href="/contact" className="inline-flex items-center gap-3 px-8 py-5 bg-white/5 border-2 border-primary/30 text-primary rounded-xl font-semibold no-underline backdrop-blur-[10px] transition-all duration-300 hover:bg-primary/10 hover:border-primary hover:translate-y-[-3px]">
                  See How I Work
                </Link>
              </div>
              <div className="mt-6 font-mono text-sm text-white/40">fiverr.com/shafiur_miju</div>
            </div>

            {/* Direct email + social profiles — disabled: no personal contact
                details on this build. Uncomment and fill in real handles to restore.
            <div className="flex flex-col">
              <div className="grid md:grid-cols-2 gap-4">
                <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-6 bg-primary/5 border border-primary/20 rounded-2xl no-underline transition-all duration-300 relative overflow-hidden hover:translate-x-[5px] hover:bg-primary/10 hover:border-primary/40 before:content-[''] before:absolute before:top-0 before:left-[-100%] before:w-full before:h-full before:bg-gradient-to-r before:from-transparent before:via-primary/10 before:to-transparent before:transition-all before:duration-500 hover:before:left-[100%]">
                  <div className="w-12 h-12 flex items-center justify-center bg-primary/10 rounded-xl text-primary flex-shrink-0">
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="currentColor">
                      <path d="M16 0C7.16 0 0 7.16 0 16c0 7.08 4.58 13.06 10.94 15.18.8.14 1.1-.34 1.1-.76 0-.38-.02-1.64-.02-2.98-4.02.74-5.06-0.98-5.38-1.88-.18-.46-.96-1.88-1.64-2.26-.56-.3-1.36-1.04-.02-1.06 1.26-.02 2.16 1.16 2.46 1.64 1.44 2.42 3.74 1.74 4.66 1.32.14-1.04.56-1.74 1.02-2.14-3.56-.4-7.28-1.78-7.28-7.9 0-1.74.62-3.18 1.64-4.3-.16-.4-.72-2.04.16-4.24 0 0 1.34-.42 4.4 1.64 1.28-.36 2.64-.54 4-.54 1.36 0 2.72.18 4 .54 3.06-2.08 4.4-1.64 4.4-1.64.88 2.2.32 3.84.16 4.24 1.02 1.12 1.64 2.54 1.64 4.3 0 6.14-3.74 7.5-7.3 7.9.58.5 1.08 1.46 1.08 2.96 0 2.14-.02 3.86-.02 4.4 0 .42.3.92 1.1.76A16.026 16.026 0 0032 16c0-8.84-7.16-16-16-16z"/>
                    </svg>
                  </div>
                  <div className="flex-1">
                    <div className="text-sm text-white/60 mb-1">GitHub</div>
                    <div className="text-base text-white font-semibold">@yourusername</div>
                  </div>
                  <div className="text-primary text-2xl opacity-0 -translate-x-[10px] transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">→</div>
                </a>
                
                <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-6 bg-primary/5 border border-primary/20 rounded-2xl no-underline transition-all duration-300 relative overflow-hidden hover:translate-x-[5px] hover:bg-primary/10 hover:border-primary/40 before:content-[''] before:absolute before:top-0 before:left-[-100%] before:w-full before:h-full before:bg-gradient-to-r before:from-transparent before:via-primary/10 before:to-transparent before:transition-all before:duration-500 hover:before:left-[100%]">
                  <div className="w-12 h-12 flex items-center justify-center bg-primary/10 rounded-xl text-primary flex-shrink-0">
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="currentColor">
                      <path d="M7.5 5C6.11929 5 5 6.11929 5 7.5C5 8.88071 6.11929 10 7.5 10C8.88071 10 10 8.88071 10 7.5C10 6.11929 8.88071 5 7.5 5Z"/>
                      <path d="M5 12C5 11.4477 5.44772 11 6 11H9C9.55228 11 10 11.4477 10 12V26C10 26.5523 9.55228 27 9 27H6C5.44772 27 5 26.5523 5 26V12Z"/>
                      <path d="M13 12C13 11.4477 13.4477 11 14 11H17C17.5523 11 18 11.4477 18 12V13.5C19.0767 12.0767 20.7234 11 23 11C26.3137 11 29 13.6863 29 17V26C29 26.5523 28.5523 27 28 27H25C24.4477 27 24 26.5523 24 26V17C24 15.8954 23.1046 15 22 15C20.8954 15 20 15.8954 20 17V26C20 26.5523 19.5523 27 19 27H14C13.4477 27 13 26.5523 13 26V12Z"/>
                    </svg>
                  </div>
                  <div className="flex-1">
                    <div className="text-sm text-white/60 mb-1">LinkedIn</div>
                    <div className="text-base text-white font-semibold">@yourusername</div>
                  </div>
                  <div className="text-primary text-2xl opacity-0 -translate-x-[10px] transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">→</div>
                </a>

                <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-6 bg-primary/5 border border-primary/20 rounded-2xl no-underline transition-all duration-300 relative overflow-hidden hover:translate-x-[5px] hover:bg-primary/10 hover:border-primary/40 before:content-[''] before:absolute before:top-0 before:left-[-100%] before:w-full before:h-full before:bg-gradient-to-r before:from-transparent before:via-primary/10 before:to-transparent before:transition-all before:duration-500 hover:before:left-[100%]">
                  <div className="w-12 h-12 flex items-center justify-center bg-primary/10 rounded-xl text-primary flex-shrink-0">
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="currentColor">
                      <path d="M24 4H27.6L18.7 14.3L29 28H21L14.4 19.2L6.9 28H3.3L12.8 17L3 4H11.3L17.3 12.1L24 4ZM22.8 25.6H25L10.3 6.8H8.4L22.8 25.6Z"/>
                    </svg>
                  </div>
                  <div className="flex-1">
                    <div className="text-sm text-white/60 mb-1">Twitter</div>
                    <div className="text-base text-white font-semibold">@yourusername</div>
                  </div>
                  <div className="text-primary text-2xl opacity-0 -translate-x-[10px] transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">→</div>
                </a>

                <a href="https://dribbble.com/yourusername" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-6 bg-primary/5 border border-primary/20 rounded-2xl no-underline transition-all duration-300 relative overflow-hidden hover:translate-x-[5px] hover:bg-primary/10 hover:border-primary/40 before:content-[''] before:absolute before:top-0 before:left-[-100%] before:w-full before:h-full before:bg-gradient-to-r before:from-transparent before:via-primary/10 before:to-transparent before:transition-all before:duration-500 hover:before:left-[100%]">
                  <div className="w-12 h-12 flex items-center justify-center bg-primary/10 rounded-xl text-primary flex-shrink-0">
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="currentColor">
                      <path d="M16 0C7.164 0 0 7.164 0 16s7.164 16 16 16 16-7.164 16-16S24.836 0 16 0zm11.5 7.49c1.93 2.362 3.105 5.364 3.138 8.637-3.802-.812-7.27-.867-10.063-.367-.334-.796-.656-1.577-.988-2.344 3.057-1.265 5.44-3.045 6.913-5.926zM16 2.625c3.802 0 7.273 1.577 9.746 4.102-1.265 2.537-3.45 4.113-6.227 5.212-1.907-3.52-4.095-6.495-6.438-8.69 1.577-.395 3.22-.624 4.919-.624zM9.602 4.102c2.31 2.13 4.463 5.015 6.352 8.445-3.552 1.002-7.77 1.443-12.427 1.295.623-4.41 3.23-8.096 6.075-9.74zm-7.006 11.9c5.136.156 9.684-.31 13.42-1.442.31.703.608 1.42.894 2.15-4.695 1.443-8.68 4.413-11.394 8.47-1.967-2.298-3.185-5.274-3.185-8.563 0-.214.014-.41.025-.615zm13.404.993c.342.796.67 1.605.982 2.426-4.287 1.967-7.54 5.34-9.318 9.412-2.186-2.298-3.567-5.364-3.567-8.758 0-.21.012-.42.025-.63 4.53.124 8.82-.494 11.878-2.45zM16 29.375c-3.495 0-6.68-1.346-9.074-3.543 1.59-3.683 4.55-6.723 8.407-8.492.31-.146.634-.28.958-.408.78 2.176 1.466 4.52 2.004 7.023.54 2.537.873 5.003.998 7.315-1.06.07-2.13.105-3.294.105zm5.99-1.465c-.124-2.244-.446-4.68-.97-7.165-.51-2.42-1.178-4.708-1.942-6.834 2.42-.394 5.44-.296 8.875.394-.746 6.17-4.013 11.393-5.963 13.605z"/>
                    </svg>
                  </div>
                  <div className="flex-1">
                    <div className="text-sm text-white/60 mb-1">Dribbble</div>
                    <div className="text-base text-white font-semibold">@yourusername</div>
                  </div>
                  <div className="text-primary text-2xl opacity-0 -translate-x-[10px] transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">→</div>
                </a>
              </div>
            </div>
            */}
          </div>
        </section>

        {/* Footer */}
        <footer className="py-16 pt-8 border-t border-primary/10 mt-16">
          <div className="flex justify-between items-center flex-wrap gap-8">
            <div className="max-w-[300px]">
              <div className="text-3xl font-black bg-gradient-to-r from-primary to-primary-accent bg-clip-text text-transparent mb-2 font-mono">YN</div>
              <p className="text-white/60 text-[0.9375rem]">Building the future, one line at a time.</p>
            </div>
            <div className="text-right">
              <div className="flex gap-8 mb-4">
                <a href="#about" className="text-white/70 no-underline font-medium transition-colors duration-300 hover:text-primary">About</a>
                <a href="#skills" className="text-white/70 no-underline font-medium transition-colors duration-300 hover:text-primary">Skills</a>
                <a href="#projects" className="text-white/70 no-underline font-medium transition-colors duration-300 hover:text-primary">Projects</a>
                <a href="#contact" className="text-white/70 no-underline font-medium transition-colors duration-300 hover:text-primary">Contact</a>
              </div>
              <p className="text-white/50 text-sm">© {new Date().getFullYear()} Your Name. Crafted with passion.</p>
            </div>
          </div>
        </footer>
      </main>
    </>
  )
}
