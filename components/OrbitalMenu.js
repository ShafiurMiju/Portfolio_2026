import Link from 'next/link'
import { useState, useEffect } from 'react'

export default function OrbitalMenu() {
  const [isOpen, setIsOpen] = useState(false)
  const [position, setPosition] = useState(() => {
    if (typeof window !== 'undefined') {
      return {
        x: window.innerWidth - 100,
        y: window.innerHeight - 100
      }
    }
    return { x: 100, y: 100 }
  })
  const [isDragging, setIsDragging] = useState(false)
  const [hasDragged, setHasDragged] = useState(false)
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 })
  const [dragStartPos, setDragStartPos] = useState({ x: 0, y: 0 })

  const menuItems = [
    { label: 'Home', href: '/', icon: '🏠' },
    { label: 'About', href: '/#about', icon: '👤' },
    { label: 'Skills', href: '/#skills', icon: '⚡' },
    { label: 'Work', href: '/work', icon: '💼' },
    { label: 'Blog', href: '/blog', icon: '📝' },
    { label: 'Contact', href: '/contact', icon: '📧' }
  ]

  const handleMouseDown = (e) => {
    const orb = e.currentTarget.getBoundingClientRect()
    setDragOffset({
      x: e.clientX - orb.left - orb.width / 2,
      y: e.clientY - orb.top - orb.height / 2
    })
    setDragStartPos({ x: e.clientX, y: e.clientY })
    setHasDragged(false)
    setIsDragging(true)
  }

  const handleMouseMove = (e) => {
    if (isDragging) {
      const distanceMoved = Math.sqrt(
        Math.pow(e.clientX - dragStartPos.x, 2) + 
        Math.pow(e.clientY - dragStartPos.y, 2)
      )
      
      // If moved more than 5px, it's a drag not a click
      if (distanceMoved > 5) {
        setHasDragged(true)
      }
      
      const newX = e.clientX - dragOffset.x
      const newY = e.clientY - dragOffset.y
      
      // Keep within viewport bounds
      const maxX = window.innerWidth - 40
      const maxY = window.innerHeight - 40
      
      setPosition({
        x: Math.max(40, Math.min(newX, maxX)),
        y: Math.max(40, Math.min(newY, maxY))
      })
    }
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove)
      window.addEventListener('mouseup', handleMouseUp)
      return () => {
        window.removeEventListener('mousemove', handleMouseMove)
        window.removeEventListener('mouseup', handleMouseUp)
      }
    }
  }, [isDragging, dragOffset, dragStartPos])

  // Handle window resize to keep menu in bounds
  useEffect(() => {
    const handleResize = () => {
      setPosition(prevPos => {
        const maxX = window.innerWidth - 40
        const maxY = window.innerHeight - 40
        return {
          x: Math.max(40, Math.min(prevPos.x, maxX)),
          y: Math.max(40, Math.min(prevPos.y, maxY))
        }
      })
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const getOrbitPosition = (index, total) => {
    const angle = (index * 360) / total - 90 // Start from top
    const radius = 120
    const radian = (angle * Math.PI) / 180
    return {
      x: Math.cos(radian) * radius,
      y: Math.sin(radian) * radius
    }
  }

  return (
    <>
      {/* Backdrop when menu is open */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-dark/40 backdrop-blur-sm z-[9997] transition-all duration-300"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Orbital Command Center */}
      <div 
        className="fixed z-[9998]"
        style={{ 
          left: `${position.x}px`, 
          top: `${position.y}px`,
          transform: 'translate(-50%, -50%)'
        }}
      >
        {/* Menu Items */}
        {isOpen && menuItems.map((item, index) => {
          const pos = getOrbitPosition(index, menuItems.length)
          return (
            <div
              key={item.label}
              className="absolute group transition-all duration-500 ease-out"
              style={{
                left: '50%',
                top: '50%',
                transform: `translate(-50%, -50%) translate(${pos.x}px, ${pos.y}px)`,
                transitionDelay: `${index * 50}ms`
              }}
            >
              {/* Connection Line to Center */}
              <div 
                className="absolute w-[120px] h-[2px] bg-gradient-to-r from-primary/40 to-transparent origin-right"
                style={{
                  right: '50%',
                  top: '50%',
                  transform: `translateY(-50%) rotate(${Math.atan2(-pos.y, -pos.x) * 180 / Math.PI}deg)`
                }}
              />
              
              {/* Orbital Node */}
              <Link
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block relative w-16 h-16 rounded-full bg-dark border-2 border-primary/50 flex flex-col items-center justify-center transition-all duration-300 hover:border-primary hover:scale-125 hover:shadow-[0_0_30px_rgba(187,134,252,0.6)] cursor-pointer"
              >
                <span className="text-2xl mb-0.5">{item.icon}</span>
                <span className="text-[10px] text-primary font-semibold">{item.label}</span>
                
                {/* Glow effect */}
                <div className="absolute inset-0 rounded-full bg-primary/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Link>

              {/* Tooltip */}
              <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 px-3 py-1.5 bg-dark/90 border border-primary/30 rounded-lg text-xs text-white whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                {item.label}
              </div>
            </div>
          )
        })}

        {/* Central Orb */}
        <div
          className={`relative w-20 h-20 rounded-full cursor-move transition-all duration-300 ${
            isOpen ? 'scale-110' : 'scale-100'
          }`}
          onMouseDown={handleMouseDown}
          onClick={(e) => {
            if (!hasDragged) {
              setIsOpen(!isOpen)
            }
          }}
        >
          {/* Outer glow rings */}
          <div className={`absolute inset-0 rounded-full border-2 border-primary/30 transition-all duration-500 ${
            isOpen ? 'scale-150 opacity-0' : 'scale-100 opacity-100'
          }`} />
          <div className={`absolute inset-0 rounded-full border-2 border-primary/20 transition-all duration-700 ${
            isOpen ? 'scale-[2] opacity-0' : 'scale-100 opacity-100'
          }`} style={{ animationDelay: '0.2s' }} />

          {/* Main orb */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary via-primary-dark to-primary-light shadow-[0_0_40px_rgba(187,134,252,0.5)] flex items-center justify-center transition-all duration-300 hover:shadow-[0_0_60px_rgba(187,134,252,0.8)]">
            {/* Inner glow */}
            <div className="absolute inset-2 rounded-full bg-gradient-to-br from-white/20 to-transparent" />
            
            {/* Icon */}
            <div className={`relative z-10 transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`}>
              {isOpen ? (
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                  <path d="M6 18L18 6M6 6l12 12" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
                </svg>
              ) : (
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="5" r="1.5" fill="white"/>
                  <circle cx="12" cy="12" r="1.5" fill="white"/>
                  <circle cx="12" cy="19" r="1.5" fill="white"/>
                  <circle cx="5" cy="12" r="1.5" fill="white"/>
                  <circle cx="19" cy="12" r="1.5" fill="white"/>
                </svg>
              )}
            </div>
          </div>

          {/* Pulse animation */}
          <div className={`absolute inset-0 rounded-full bg-primary/30 animate-ping ${isOpen ? 'opacity-0' : 'opacity-100'}`} />
          
          {/* Rotation indicator */}
          {isOpen && (
            <div className="absolute inset-0 rounded-full border-2 border-dashed border-primary/30 animate-spin" style={{ animationDuration: '20s' }} />
          )}
        </div>

        {/* Drag hint */}
        {!isOpen && !isDragging && (
          <div className="absolute -bottom-14 left-1/2 -translate-x-1/2 text-[10px] text-primary/60 whitespace-nowrap animate-pulse">
            Drag to move • Click to open
          </div>
        )}
      </div>
    </>
  )
}
