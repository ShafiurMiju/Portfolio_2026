import Head from 'next/head'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import OrbitalMenu from '../components/OrbitalMenu'

export default function Contact() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [scrollY, setScrollY] = useState(0)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [focusedField, setFocusedField] = useState(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

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

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitStatus('success')
      setFormData({ name: '', email: '', subject: '', message: '' })
      
      setTimeout(() => {
        setSubmitStatus(null)
      }, 5000)
    }, 2000)
  }

  const stats = [
    { label: 'Response Time', value: '< 24h', icon: '⚡' },
    { label: 'Projects Completed', value: '50+', icon: '✓' },
    { label: 'Client Satisfaction', value: '100%', icon: '★' },
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

              <form onSubmit={handleSubmit} className="relative z-10 space-y-6">
                {/* Name Field */}
                <div className="relative">
                  <label 
                    className={`absolute left-4 transition-all duration-300 pointer-events-none ${
                      focusedField === 'name' || formData.name
                        ? 'top-[-10px] text-xs text-primary bg-dark px-2'
                        : 'top-4 text-white/60'
                    }`}
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('name')}
                    onBlur={() => setFocusedField(null)}
                    required
                    className="w-full px-4 py-4 bg-dark/50 border-2 border-primary/30 rounded-xl text-white placeholder:text-white/40 focus:outline-none focus:border-primary transition-all duration-300"
                  />
                  {focusedField === 'name' && (
                    <div className="absolute right-4 top-4 w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                  )}
                </div>

                {/* Email Field */}
                <div className="relative">
                  <label 
                    className={`absolute left-4 transition-all duration-300 pointer-events-none ${
                      focusedField === 'email' || formData.email
                        ? 'top-[-10px] text-xs text-primary bg-dark px-2'
                        : 'top-4 text-white/60'
                    }`}
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('email')}
                    onBlur={() => setFocusedField(null)}
                    required
                    className="w-full px-4 py-4 bg-dark/50 border-2 border-primary/30 rounded-xl text-white placeholder:text-white/40 focus:outline-none focus:border-primary transition-all duration-300"
                  />
                  {focusedField === 'email' && (
                    <div className="absolute right-4 top-4 w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                  )}
                </div>

                {/* Subject Field */}
                <div className="relative">
                  <label 
                    className={`absolute left-4 transition-all duration-300 pointer-events-none ${
                      focusedField === 'subject' || formData.subject
                        ? 'top-[-10px] text-xs text-primary bg-dark px-2'
                        : 'top-4 text-white/60'
                    }`}
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('subject')}
                    onBlur={() => setFocusedField(null)}
                    required
                    className="w-full px-4 py-4 bg-dark/50 border-2 border-primary/30 rounded-xl text-white placeholder:text-white/40 focus:outline-none focus:border-primary transition-all duration-300"
                  />
                  {focusedField === 'subject' && (
                    <div className="absolute right-4 top-4 w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                  )}
                </div>

                {/* Message Field */}
                <div className="relative">
                  <label 
                    className={`absolute left-4 transition-all duration-300 pointer-events-none ${
                      focusedField === 'message' || formData.message
                        ? 'top-[-10px] text-xs text-primary bg-dark px-2'
                        : 'top-4 text-white/60'
                    }`}
                  >
                    Your Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('message')}
                    onBlur={() => setFocusedField(null)}
                    required
                    rows={6}
                    className="w-full px-4 py-4 bg-dark/50 border-2 border-primary/30 rounded-xl text-white placeholder:text-white/40 focus:outline-none focus:border-primary transition-all duration-300 resize-none"
                  ></textarea>
                  {focusedField === 'message' && (
                    <div className="absolute right-4 top-4 w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="relative w-full px-8 py-4 bg-gradient-to-r from-primary to-primary-dark text-white rounded-xl font-semibold text-lg transition-all duration-300 hover:translate-y-[-3px] hover:shadow-[0_15px_40px_rgba(187,134,252,0.4)] disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden group"
                >
                  <span className="relative z-10">
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </span>
                  {!isSubmitting && (
                    <div className="absolute inset-0 bg-gradient-to-r from-primary-accent to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  )}
                  {isSubmitting && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    </div>
                  )}
                </button>

                {/* Success Message */}
                {submitStatus === 'success' && (
                  <div className="p-4 bg-green-500/10 border border-green-500/30 rounded-xl text-green-400 text-center animate-fade-in-up">
                    ✓ Message sent successfully! I'll get back to you soon.
                  </div>
                )}
              </form>
            </div>
          </div>

          {/* Contact Info Sidebar */}
          <div className="space-y-6 [animation:fadeInUp_0.8s_ease_1s_both]">
            {/* Direct Contact */}
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

            {/* Social Links */}
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
          </div>
        </div>
      </main>
    </>
  )
}
