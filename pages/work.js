import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react'
import OrbitalMenu from '../components/OrbitalMenu'
import { projects as allProjects, projectCategories, getGradientClass } from '../data/projects'

export default function Work() {
  const [filter, setFilter] = useState('all')

  const projects = allProjects

  const filteredProjects = filter === 'all'
    ? projects
    : projects.filter(p => p.category === filter)

  const stats = [
    { value: projects.length, label: 'Projects' },
    { value: new Set(projects.flatMap(p => p.tech)).size, label: 'Technologies' },
    { value: new Set(projects.flatMap(p => p.platforms)).size, label: 'Platforms Shipped' },
    { value: projectCategories.length - 1, label: 'Domains' },
  ]

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
            Production mobile apps, native macOS tools and the backends behind them — client work and personal builds.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="mb-12 overflow-x-auto">
          <div className="flex gap-3 min-w-max pb-4">
            {projectCategories.map((cat) => (
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
                <div className={`w-full h-full bg-gradient-to-br ${getGradientClass(project.gradient)} transition-transform duration-500 group-hover:scale-110`}></div>
                {(project.status || project.year) && (
                  <div className="absolute top-4 right-4 px-3 py-1 bg-dark/80 backdrop-blur-sm rounded-full text-xs text-primary font-semibold">
                    {project.status || project.year}
                  </div>
                )}
                {(project.featured || project.personal) && (
                  <div className="absolute top-4 left-4 px-3 py-1 bg-primary/90 backdrop-blur-sm rounded-full text-xs text-white font-semibold">
                    {project.featured ? 'Featured' : 'Personal'}
                  </div>
                )}
                <div className="absolute inset-x-0 bottom-0 p-4 flex flex-wrap gap-2 bg-gradient-to-t from-dark/80 to-transparent">
                  {project.platforms.map((platform) => (
                    <span
                      key={platform}
                      className="px-2.5 py-1 bg-dark/70 backdrop-blur-sm border border-white/10 rounded-md text-[0.6875rem] text-white/80 font-medium"
                    >
                      {platform}
                    </span>
                  ))}
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6 flex flex-col h-[calc(100%-12rem)]">
                <div className="text-xs text-primary uppercase tracking-widest font-semibold mb-2">
                  {project.category}
                </div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-white/70 mb-2 font-medium">
                  {project.summary}
                </p>
                <p className="text-sm text-white/50 mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 bg-primary/10 border border-primary/20 rounded-md text-xs text-white/80"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="mt-4 flex gap-4">
                  {project.liveUrl && (
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-sm text-primary font-semibold hover:text-primary-accent transition-colors">
                      Live →
                    </a>
                  )}
                  {project.githubUrl && (
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-sm text-primary font-semibold hover:text-primary-accent transition-colors">
                      Source →
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid md:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center p-6 bg-primary/5 border border-primary/20 rounded-xl">
              <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
              <div className="text-sm text-white/60">{stat.label}</div>
            </div>
          ))}
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
