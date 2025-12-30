import Head from 'next/head'
import { useState, useEffect } from 'react'
import styles from '../styles/home.module.css'

export default function Home() {
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

  return (
    <>
      <Head>
        <title>Your Name - Software Engineer Portfolio</title>
        <meta name="description" content="Software Engineer Portfolio" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Space+Grotesk:wght@500;700&display=swap" rel="stylesheet" />
      </Head>

      {/* Animated Background */}
      <div className={styles.backgroundAnimation}>
        <div className={styles.gradientBlob} style={{
          transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`
        }}></div>
        <div className={styles.gradientBlob2} style={{
          transform: `translate(${-mousePosition.x * 0.015}px, ${-mousePosition.y * 0.015}px)`
        }}></div>
        <div className={styles.gradientBlob3} style={{
          transform: `translate(${mousePosition.x * 0.01}px, ${mousePosition.y * 0.025}px)`
        }}></div>
      </div>

      {/* Cursor Follower */}
      <div className={styles.cursorFollower} style={{
        left: `${mousePosition.x}px`,
        top: `${mousePosition.y}px`
      }}></div>

      <main className={styles.main}>
        {/* Hero Section */}
        <section className={styles.hero}>
          <div className={styles.heroContent} style={{
            transform: `translateY(${scrollY * 0.3}px)`
          }}>
            <div className={styles.badge}>
              <span className={styles.badgeDot}></span>
              Available for work
            </div>
            <h1 className={styles.title}>
              <span className={styles.titleLine}>Hi, I'm</span>
              <span className={styles.nameWrapper}>
                <span className={styles.name}>Your Name</span>
                <span className={styles.nameGlow}>Your Name</span>
              </span>
            </h1>
            <h2 className={styles.subtitle}>
              <span className={styles.typewriter}>Software Engineer</span>
              <span className={styles.cursor}>|</span>
            </h2>
            <p className={styles.description}>
              Crafting exceptional digital experiences through elegant code and innovative solutions.
            </p>
            <div className={styles.ctaButtons}>
              <a href="#projects" className={styles.primaryBtn}>
                <span>Explore Work</span>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M7 10H17M17 10L13 6M17 10L13 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </a>
              <a href="#contact" className={styles.secondaryBtn}>
                <span>Get In Touch</span>
              </a>
            </div>
            <div className={styles.scrollIndicator}>
              <div className={styles.scrollMouse}></div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className={styles.section}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionNumber}>01.</span>
            <h2 className={styles.sectionTitle}>About Me</h2>
            <div className={styles.sectionLine}></div>
          </div>
          <div className={styles.aboutGrid}>
            <div className={styles.aboutContent}>
              <p className={styles.aboutText}>
                I'm a passionate software engineer who transforms complex problems into elegant, user-centric solutions. 
                With a deep love for both <span className={styles.highlight}>design and code</span>, I bridge the gap between 
                aesthetics and functionality.
              </p>
              <p className={styles.aboutText}>
                My journey in tech has been driven by curiosity and a relentless pursuit of excellence. I specialize in 
                building <span className={styles.highlight}>performant, scalable applications</span> that users love.
              </p>
              <p className={styles.aboutText}>
                When I'm not coding, you'll find me contributing to open source, exploring cutting-edge technologies, 
                or mentoring aspiring developers.
              </p>
              <div className={styles.statsGrid}>
                <div className={styles.statCard}>
                  <div className={styles.statNumber}>5+</div>
                  <div className={styles.statLabel}>Years Experience</div>
                </div>
                <div className={styles.statCard}>
                  <div className={styles.statNumber}>50+</div>
                  <div className={styles.statLabel}>Projects Completed</div>
                </div>
                <div className={styles.statCard}>
                  <div className={styles.statNumber}>100%</div>
                  <div className={styles.statLabel}>Client Satisfaction</div>
                </div>
              </div>
            </div>
            <div className={styles.aboutImageWrapper}>
              <div className={styles.aboutImage}>
                <div className={styles.imageGradient}></div>
                <div className={styles.codeBlock}>
                  <div className={styles.codeHeader}>
                    <div className={styles.codeDot}></div>
                    <div className={styles.codeDot}></div>
                    <div className={styles.codeDot}></div>
                  </div>
                  <pre className={styles.codeContent}>
{`const developer = {
  name: "Your Name",
  passion: "Building",
  skills: ["React", "Node"],
  mindset: "Growth",
  status: "Innovating"
};`}
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className={styles.section}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionNumber}>02.</span>
            <h2 className={styles.sectionTitle}>Skills & Expertise</h2>
            <div className={styles.sectionLine}></div>
          </div>
          <div className={styles.skillsContainer}>
            <div className={styles.skillsGrid}>
              {[
                { icon: '⚛️', name: 'React / Next.js', level: 95 },
                { icon: '📘', name: 'TypeScript', level: 90 },
                { icon: '🟢', name: 'Node.js', level: 88 },
                { icon: '🐍', name: 'Python', level: 85 },
                { icon: '🎨', name: 'UI/UX Design', level: 80 },
                { icon: '☁️', name: 'AWS / Cloud', level: 82 },
                { icon: '🗄️', name: 'Databases', level: 87 },
                { icon: '🐳', name: 'Docker', level: 83 }
              ].map((skill, index) => (
                <div key={index} className={styles.skillCard}>
                  <div className={styles.skillIcon}>{skill.icon}</div>
                  <div className={styles.skillInfo}>
                    <div className={styles.skillName}>{skill.name}</div>
                    <div className={styles.skillBar}>
                      <div className={styles.skillProgress} style={{ width: `${skill.level}%` }}></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className={styles.techStack}>
              <h3 className={styles.techStackTitle}>Tech Stack</h3>
              <div className={styles.techTags}>
                {['React', 'Next.js', 'TypeScript', 'Node.js', 'Express', 'Python', 'Django', 
                  'PostgreSQL', 'MongoDB', 'Redis', 'GraphQL', 'REST', 'Docker', 'Kubernetes',
                  'AWS', 'Git', 'CI/CD', 'Testing', 'Agile'].map((tech, index) => (
                  <span key={index} className={styles.techTag}>{tech}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className={styles.section}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionNumber}>03.</span>
            <h2 className={styles.sectionTitle}>Featured Work</h2>
            <div className={styles.sectionLine}></div>
          </div>
          <div className={styles.projectsGrid}>
            <div className={styles.projectCard}>
              <div className={styles.projectNumber}>01</div>
              <div className={styles.projectImage}>
                <div className={styles.projectImageGradient}></div>
                <div className={styles.projectOverlay}>
                  <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
                    <rect width="60" height="60" rx="12" fill="rgba(255,255,255,0.1)"/>
                    <path d="M25 30L35 30M35 30L31 26M35 30L31 34" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </div>
              </div>
              <div className={styles.projectContent}>
                <div className={styles.projectCategory}>Full-Stack Development</div>
                <h3 className={styles.projectTitle}>E-Commerce Platform</h3>
                <p className={styles.projectDescription}>
                  A modern e-commerce solution with real-time inventory, advanced analytics, and seamless payment integration. 
                  Handles 10K+ daily transactions with 99.9% uptime.
                </p>
                <div className={styles.projectTech}>
                  <span>React</span>
                  <span>Node.js</span>
                  <span>PostgreSQL</span>
                  <span>Stripe</span>
                </div>
                <div className={styles.projectLinks}>
                  <a href="#" className={styles.projectLink}>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M6 3L11 8L6 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                    Live Demo
                  </a>
                  <a href="#" className={styles.projectLink}>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/>
                    </svg>
                    GitHub
                  </a>
                </div>
              </div>
            </div>

            <div className={styles.projectCard}>
              <div className={styles.projectNumber}>02</div>
              <div className={styles.projectImage}>
                <div className={styles.projectImageGradient2}></div>
                <div className={styles.projectOverlay}>
                  <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
                    <rect width="60" height="60" rx="12" fill="rgba(255,255,255,0.1)"/>
                    <path d="M25 30L35 30M35 30L31 26M35 30L31 34" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </div>
              </div>
              <div className={styles.projectContent}>
                <div className={styles.projectCategory}>AI/ML Integration</div>
                <h3 className={styles.projectTitle}>AI Task Manager</h3>
                <p className={styles.projectDescription}>
                  Intelligent task management powered by natural language processing. Smart scheduling, priority detection, 
                  and automated workflows increase productivity by 40%.
                </p>
                <div className={styles.projectTech}>
                  <span>Next.js</span>
                  <span>Python</span>
                  <span>OpenAI</span>
                  <span>TensorFlow</span>
                </div>
                <div className={styles.projectLinks}>
                  <a href="#" className={styles.projectLink}>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M6 3L11 8L6 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                    Live Demo
                  </a>
                  <a href="#" className={styles.projectLink}>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/>
                    </svg>
                    GitHub
                  </a>
                </div>
              </div>
            </div>

            <div className={styles.projectCard}>
              <div className={styles.projectNumber}>03</div>
              <div className={styles.projectImage}>
                <div className={styles.projectImageGradient3}></div>
                <div className={styles.projectOverlay}>
                  <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
                    <rect width="60" height="60" rx="12" fill="rgba(255,255,255,0.1)"/>
                    <path d="M25 30L35 30M35 30L31 26M35 30L31 34" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </div>
              </div>
              <div className={styles.projectContent}>
                <div className={styles.projectCategory}>Real-Time Collaboration</div>
                <h3 className={styles.projectTitle}>Code Editor Pro</h3>
                <p className={styles.projectDescription}>
                  Browser-based collaborative code editor with real-time sync, syntax highlighting, and live preview. 
                  Supports 50+ programming languages with zero latency.
                </p>
                <div className={styles.projectTech}>
                  <span>React</span>
                  <span>WebSockets</span>
                  <span>Monaco</span>
                  <span>Docker</span>
                </div>
                <div className={styles.projectLinks}>
                  <a href="#" className={styles.projectLink}>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M6 3L11 8L6 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                    Live Demo
                  </a>
                  <a href="#" className={styles.projectLink}>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/>
                    </svg>
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className={styles.section}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionNumber}>04.</span>
            <h2 className={styles.sectionTitle}>Let's Connect</h2>
            <div className={styles.sectionLine}></div>
          </div>
          <div className={styles.contactContainer}>
            <div className={styles.contactLeft}>
              <h3 className={styles.contactHeading}>Have an exciting project?</h3>
              <p className={styles.contactText}>
                I'm always interested in hearing about new projects and opportunities. 
                Whether you have a question or just want to say hi, feel free to reach out!
              </p>
              <a href="mailto:your.email@example.com" className={styles.emailButton}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M3 8L10.89 13.26C11.5432 13.6742 12.4568 13.6742 13.11 13.26L21 8M5 19H19C20.1046 19 21 18.1046 21 17V7C21 5.89543 20.1046 5 19 5H5C3.89543 5 3 5.89543 3 7V17C3 18.1046 3.89543 19 5 19Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                your.email@example.com
              </a>
            </div>
            <div className={styles.contactRight}>
              <div className={styles.socialGrid}>
                <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className={styles.socialCard}>
                  <div className={styles.socialIcon}>
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="currentColor">
                      <path d="M16 0C7.16 0 0 7.16 0 16c0 7.08 4.58 13.06 10.94 15.18.8.14 1.1-.34 1.1-.76 0-.38-.02-1.64-.02-2.98-4.02.74-5.06-0.98-5.38-1.88-.18-.46-.96-1.88-1.64-2.26-.56-.3-1.36-1.04-.02-1.06 1.26-.02 2.16 1.16 2.46 1.64 1.44 2.42 3.74 1.74 4.66 1.32.14-1.04.56-1.74 1.02-2.14-3.56-.4-7.28-1.78-7.28-7.9 0-1.74.62-3.18 1.64-4.3-.16-.4-.72-2.04.16-4.24 0 0 1.34-.42 4.4 1.64 1.28-.36 2.64-.54 4-.54 1.36 0 2.72.18 4 .54 3.06-2.08 4.4-1.64 4.4-1.64.88 2.2.32 3.84.16 4.24 1.02 1.12 1.64 2.54 1.64 4.3 0 6.14-3.74 7.5-7.3 7.9.58.5 1.08 1.46 1.08 2.96 0 2.14-.02 3.86-.02 4.4 0 .42.3.92 1.1.76A16.026 16.026 0 0032 16c0-8.84-7.16-16-16-16z"/>
                    </svg>
                  </div>
                  <div className={styles.socialInfo}>
                    <div className={styles.socialLabel}>GitHub</div>
                    <div className={styles.socialHandle}>@yourusername</div>
                  </div>
                  <div className={styles.socialArrow}>→</div>
                </a>
                
                <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className={styles.socialCard}>
                  <div className={styles.socialIcon}>
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="currentColor">
                      <path d="M7.5 5C6.11929 5 5 6.11929 5 7.5C5 8.88071 6.11929 10 7.5 10C8.88071 10 10 8.88071 10 7.5C10 6.11929 8.88071 5 7.5 5Z"/>
                      <path d="M5 12C5 11.4477 5.44772 11 6 11H9C9.55228 11 10 11.4477 10 12V26C10 26.5523 9.55228 27 9 27H6C5.44772 27 5 26.5523 5 26V12Z"/>
                      <path d="M13 12C13 11.4477 13.4477 11 14 11H17C17.5523 11 18 11.4477 18 12V13.5C19.0767 12.0767 20.7234 11 23 11C26.3137 11 29 13.6863 29 17V26C29 26.5523 28.5523 27 28 27H25C24.4477 27 24 26.5523 24 26V17C24 15.8954 23.1046 15 22 15C20.8954 15 20 15.8954 20 17V26C20 26.5523 19.5523 27 19 27H14C13.4477 27 13 26.5523 13 26V12Z"/>
                    </svg>
                  </div>
                  <div className={styles.socialInfo}>
                    <div className={styles.socialLabel}>LinkedIn</div>
                    <div className={styles.socialHandle}>@yourusername</div>
                  </div>
                  <div className={styles.socialArrow}>→</div>
                </a>

                <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" className={styles.socialCard}>
                  <div className={styles.socialIcon}>
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="currentColor">
                      <path d="M24 4H27.6L18.7 14.3L29 28H21L14.4 19.2L6.9 28H3.3L12.8 17L3 4H11.3L17.3 12.1L24 4ZM22.8 25.6H25L10.3 6.8H8.4L22.8 25.6Z"/>
                    </svg>
                  </div>
                  <div className={styles.socialInfo}>
                    <div className={styles.socialLabel}>Twitter</div>
                    <div className={styles.socialHandle}>@yourusername</div>
                  </div>
                  <div className={styles.socialArrow}>→</div>
                </a>

                <a href="https://dribbble.com/yourusername" target="_blank" rel="noopener noreferrer" className={styles.socialCard}>
                  <div className={styles.socialIcon}>
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="currentColor">
                      <path d="M16 0C7.164 0 0 7.164 0 16s7.164 16 16 16 16-7.164 16-16S24.836 0 16 0zm11.5 7.49c1.93 2.362 3.105 5.364 3.138 8.637-3.802-.812-7.27-.867-10.063-.367-.334-.796-.656-1.577-.988-2.344 3.057-1.265 5.44-3.045 6.913-5.926zM16 2.625c3.802 0 7.273 1.577 9.746 4.102-1.265 2.537-3.45 4.113-6.227 5.212-1.907-3.52-4.095-6.495-6.438-8.69 1.577-.395 3.22-.624 4.919-.624zM9.602 4.102c2.31 2.13 4.463 5.015 6.352 8.445-3.552 1.002-7.77 1.443-12.427 1.295.623-4.41 3.23-8.096 6.075-9.74zm-7.006 11.9c5.136.156 9.684-.31 13.42-1.442.31.703.608 1.42.894 2.15-4.695 1.443-8.68 4.413-11.394 8.47-1.967-2.298-3.185-5.274-3.185-8.563 0-.214.014-.41.025-.615zm13.404.993c.342.796.67 1.605.982 2.426-4.287 1.967-7.54 5.34-9.318 9.412-2.186-2.298-3.567-5.364-3.567-8.758 0-.21.012-.42.025-.63 4.53.124 8.82-.494 11.878-2.45zM16 29.375c-3.495 0-6.68-1.346-9.074-3.543 1.59-3.683 4.55-6.723 8.407-8.492.31-.146.634-.28.958-.408.78 2.176 1.466 4.52 2.004 7.023.54 2.537.873 5.003.998 7.315-1.06.07-2.13.105-3.294.105zm5.99-1.465c-.124-2.244-.446-4.68-.97-7.165-.51-2.42-1.178-4.708-1.942-6.834 2.42-.394 5.44-.296 8.875.394-.746 6.17-4.013 11.393-5.963 13.605z"/>
                    </svg>
                  </div>
                  <div className={styles.socialInfo}>
                    <div className={styles.socialLabel}>Dribbble</div>
                    <div className={styles.socialHandle}>@yourusername</div>
                  </div>
                  <div className={styles.socialArrow}>→</div>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className={styles.footer}>
          <div className={styles.footerContent}>
            <div className={styles.footerLeft}>
              <div className={styles.footerLogo}>YN</div>
              <p className={styles.footerText}>Building the future, one line at a time.</p>
            </div>
            <div className={styles.footerRight}>
              <div className={styles.footerLinks}>
                <a href="#about">About</a>
                <a href="#skills">Skills</a>
                <a href="#projects">Projects</a>
                <a href="#contact">Contact</a>
              </div>
              <p className={styles.copyright}>© {new Date().getFullYear()} Your Name. Crafted with passion.</p>
            </div>
          </div>
        </footer>
      </main>
    </>
  )
}
