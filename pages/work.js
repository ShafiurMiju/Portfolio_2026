import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react'
import OrbitalMenu from '../components/OrbitalMenu'

export default function Work() {
  const [filter, setFilter] = useState('all')

  const projects = [
    {
      id: 1,
      category: 'Full-Stack Development',
      title: 'E-Commerce Platform',
      description: 'A modern e-commerce solution with real-time inventory, advanced analytics, and seamless payment integration. Handles 10K+ daily transactions with 99.9% uptime.',
      tech: ['React', 'Node.js', 'PostgreSQL', 'Stripe', 'Redis'],
      image: 'primary',
      liveUrl: '#',
      githubUrl: '#',
      year: '2024'
    },
    {
      id: 2,
      category: 'AI/ML Integration',
      title: 'AI Task Manager',
      description: 'Intelligent task management powered by natural language processing. Smart scheduling, priority detection, and automated workflows increase productivity by 40%.',
      tech: ['Next.js', 'Python', 'OpenAI', 'TensorFlow'],
      image: 'accent',
      liveUrl: '#',
      githubUrl: '#',
      year: '2024'
    },
    {
      id: 3,
      category: 'Real-Time Collaboration',
      title: 'Code Editor Pro',
      description: 'Browser-based collaborative code editor with real-time sync, syntax highlighting, and live preview. Supports 50+ programming languages with zero latency.',
      tech: ['React', 'WebSockets', 'Monaco', 'Docker'],
      image: 'pink',
      liveUrl: '#',
      githubUrl: '#',
      year: '2024'
    },
    {
      id: 4,
      category: 'Mobile Development',
      title: 'Fitness Tracking App',
      description: 'Cross-platform mobile app for fitness enthusiasts. Track workouts, calories, and progress with beautiful visualizations and social features.',
      tech: ['React Native', 'Firebase', 'Redux', 'HealthKit'],
      image: 'primary',
      liveUrl: '#',
      githubUrl: '#',
      year: '2023'
    },
    {
      id: 5,
      category: 'Web3 & Blockchain',
      title: 'NFT Marketplace',
      description: 'Decentralized marketplace for digital art and collectibles. Built on Ethereum with IPFS storage and smart contract integration.',
      tech: ['React', 'Web3.js', 'Solidity', 'IPFS'],
      image: 'accent',
      liveUrl: '#',
      githubUrl: '#',
      year: '2023'
    },
    {
      id: 6,
      category: 'Data Visualization',
      title: 'Analytics Dashboard',
      description: 'Real-time business intelligence dashboard with interactive charts, predictive analytics, and customizable reports for enterprise clients.',
      tech: ['Vue.js', 'D3.js', 'Python', 'FastAPI'],
      image: 'pink',
      liveUrl: '#',
      githubUrl: '#',
      year: '2023'
    },
    {
      id: 7,
      category: 'DevOps & Cloud',
      title: 'CI/CD Pipeline Manager',
      description: 'Automated deployment pipeline with monitoring, rollback capabilities, and multi-cloud support. Reduces deployment time by 70%.',
      tech: ['Docker', 'Kubernetes', 'AWS', 'Jenkins'],
      image: 'primary',
      liveUrl: '#',
      githubUrl: '#',
      year: '2023'
    },
    {
      id: 8,
      category: 'API Development',
      title: 'Microservices Platform',
      description: 'Scalable microservices architecture with API gateway, service discovery, and distributed tracing. Handles millions of requests daily.',
      tech: ['Node.js', 'GraphQL', 'RabbitMQ', 'MongoDB'],
      image: 'accent',
      liveUrl: '#',
      githubUrl: '#',
      year: '2022'
    },
    {
      id: 9,
      category: 'Machine Learning',
      title: 'Image Recognition System',
      description: 'Advanced computer vision system for object detection and classification. Achieves 95%+ accuracy with real-time processing capabilities.',
      tech: ['Python', 'TensorFlow', 'OpenCV', 'Flask'],
      image: 'pink',
      liveUrl: '#',
      githubUrl: '#',
      year: '2022'
    }
  ]

  const categories = ['all', 'Full-Stack Development', 'AI/ML Integration', 'Real-Time Collaboration', 'Mobile Development', 'Web3 & Blockchain', 'Data Visualization', 'DevOps & Cloud', 'API Development', 'Machine Learning']

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.category === filter)

  const getGradientClass = (image) => {
    switch(image) {
      case 'primary':
        return 'from-primary/40 to-primary-dark/60'
      case 'accent':
        return 'from-primary-accent/40 to-[#009688]/60'
      case 'pink':
        return 'from-primary-light/40 to-[#FF1493]/60'
      default:
        return 'from-primary/40 to-primary-dark/60'
    }
  }

  return (
    <>
      <Head>
        <title>All Work - Portfolio</title>
        <meta name="description" content="Complete portfolio of projects and work" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Space+Grotesk:wght@500;700&display=swap" rel="stylesheet" />
      </Head>

      {/* Orbital Menu */}
      <OrbitalMenu />

      {/* Animated Background */}
      <div className="fixed top-0 left-0 w-full h-full -z-10 overflow-hidden bg-gradient-to-br from-dark to-dark-lighter">
        <div className="absolute w-[600px] h-[600px] rounded-full top-[-200px] left-[-200px] blur-[80px] animate-float"
          style={{ background: 'radial-gradient(circle, rgba(138, 43, 226, 0.4) 0%, rgba(75, 0, 130, 0.2) 50%, transparent 70%)' }}
        ></div>
        <div className="absolute w-[500px] h-[500px] rounded-full top-1/2 right-[-150px] blur-[80px] animate-float-reverse"
          style={{ background: 'radial-gradient(circle, rgba(0, 191, 255, 0.3) 0%, rgba(30, 144, 255, 0.15) 50%, transparent 70%)' }}
        ></div>
        <div className="absolute w-[450px] h-[450px] rounded-full bottom-[-150px] left-1/2 blur-[80px] animate-float-slow"
          style={{ background: 'radial-gradient(circle, rgba(255, 20, 147, 0.3) 0%, rgba(199, 21, 133, 0.15) 50%, transparent 70%)' }}
        ></div>
      </div>

      <main className="relative max-w-[1400px] mx-auto px-8 min-h-screen py-20">
        {/* Header */}
        <div className="mb-16">
          <Link href="/" className="inline-flex items-center gap-2 text-primary hover:text-primary-accent transition-colors mb-8">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M15 10H5M5 10L9 6M5 10L9 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
            Back to Home
          </Link>
          
          <h1 className="text-[clamp(2.5rem,6vw,4.5rem)] font-extrabold mb-4 bg-gradient-to-r from-primary via-primary-accent to-primary-light bg-clip-text text-transparent animate-gradient-shift bg-200">
            All Work
          </h1>
          <p className="text-xl text-white/60 max-w-[700px]">
            A comprehensive collection of projects showcasing expertise across various technologies and domains.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="mb-12 overflow-x-auto">
          <div className="flex gap-3 min-w-max pb-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-3 rounded-xl font-medium text-sm transition-all duration-300 whitespace-nowrap ${
                  filter === cat
                    ? 'bg-primary text-white shadow-lg shadow-primary/30'
                    : 'bg-primary/10 text-white/70 border border-primary/20 hover:bg-primary/20 hover:border-primary/40'
                }`}
              >
                {cat === 'all' ? 'All Projects' : cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="group relative bg-primary/[0.03] border border-primary/20 rounded-2xl overflow-hidden transition-all duration-300 hover:translate-y-[-8px] hover:border-primary/40 hover:shadow-[0_20px_60px_rgba(187,134,252,0.2)]"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <div className={`w-full h-full bg-gradient-to-br ${getGradientClass(project.image)} transition-transform duration-500 group-hover:scale-110`}></div>
                <div className="absolute top-4 right-4 px-3 py-1 bg-dark/80 backdrop-blur-sm rounded-full text-xs text-primary font-semibold">
                  {project.year}
                </div>
                <div className="absolute inset-0 bg-dark/0 group-hover:bg-dark/70 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <div className="flex gap-4">
                    <a href={project.liveUrl} className="w-12 h-12 bg-primary rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path d="M7 10H17M17 10L13 6M17 10L13 14" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                      </svg>
                    </a>
                    <a href={project.githubUrl} className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="white">
                        <path d="M10 0C4.475 0 0 4.475 0 10c0 4.425 2.8625 8.1625 6.8375 9.4875.5.0875.6875-.2125.6875-.475 0-.2375-.0125-1.025-.0125-1.8625-2.5125.4625-3.1625-.6125-3.3625-1.175-.1125-.2875-.6-1.175-1.025-1.4125-.35-.1875-.85-.65-.0125-.6625.7875-.0125 1.35.725 1.5375 1.025.9 1.5125 2.3375 1.0875 2.9125.825.0875-.65.35-1.0875.6375-1.3375-2.225-.25-4.55-1.1125-4.55-4.9375 0-1.0875.3875-1.9875 1.025-2.6875-.1-.25-.45-1.275.1-2.65 0 0 .8375-.2625 2.75 1.025.8-.225 1.65-.3375 2.5-.3375.85 0 1.7.1125 2.5.3375 1.9125-1.3 2.75-1.025 2.75-1.025.55 1.375.2 2.4.1 2.65.6375.7 1.025 1.5875 1.025 2.6875 0 3.8375-2.3375 4.6875-4.5625 4.9375.3625.3125.675.9125.675 1.85 0 1.3375-.0125 2.4125-.0125 2.75 0 .2625.1875.575.6875.475C17.1375 18.1625 20 14.4125 20 10c0-5.525-4.475-10-10-10z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <div className="text-xs text-primary uppercase tracking-widest font-semibold mb-2">
                  {project.category}
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-white/60 mb-4 line-clamp-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 bg-primary/10 border border-primary/20 rounded-md text-xs text-white/80"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid md:grid-cols-4 gap-6">
          <div className="text-center p-6 bg-primary/5 border border-primary/20 rounded-xl">
            <div className="text-4xl font-bold text-primary mb-2">{projects.length}+</div>
            <div className="text-sm text-white/60">Total Projects</div>
          </div>
          <div className="text-center p-6 bg-primary/5 border border-primary/20 rounded-xl">
            <div className="text-4xl font-bold text-primary mb-2">15+</div>
            <div className="text-sm text-white/60">Technologies</div>
          </div>
          <div className="text-center p-6 bg-primary/5 border border-primary/20 rounded-xl">
            <div className="text-4xl font-bold text-primary mb-2">5+</div>
            <div className="text-sm text-white/60">Years Experience</div>
          </div>
          <div className="text-center p-6 bg-primary/5 border border-primary/20 rounded-xl">
            <div className="text-4xl font-bold text-primary mb-2">100%</div>
            <div className="text-sm text-white/60">Client Satisfaction</div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center p-12 bg-gradient-to-br from-primary/10 to-primary-accent/10 border border-primary/20 rounded-3xl">
          <h2 className="text-3xl font-bold text-white mb-4">Interested in working together?</h2>
          <p className="text-white/60 mb-8 max-w-[600px] mx-auto">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
          <Link href="/#contact" className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-primary to-primary-dark text-white rounded-xl font-semibold transition-all duration-300 hover:translate-y-[-3px] hover:shadow-[0_15px_40px_rgba(187,134,252,0.4)]">
            Get In Touch
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M7 10H17M17 10L13 6M17 10L13 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </Link>
        </div>
      </main>
    </>
  )
}
