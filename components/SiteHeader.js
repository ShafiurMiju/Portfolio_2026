import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

const NAV = [
  { label: 'Work', href: '/work' },
  { label: 'Expertise', href: '/#expertise' },
  { label: 'About', href: '/#about' },
  { label: 'Journal', href: '/blog' },
  { label: 'Contact', href: '/contact' },
]

export default function SiteHeader() {
  const router = useRouter()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [router.asPath])

  const isActive = (href) =>
    href.startsWith('/#') ? false : router.pathname === href || router.pathname.startsWith(`${href}/`)

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 bg-paper/95 backdrop-blur-[2px] border-b transition-colors duration-300 ${
        scrolled ? 'border-rule' : 'border-transparent'
      }`}
    >
      <div className="max-w-[1180px] mx-auto px-6 sm:px-10">
        <div className="h-[72px] flex items-center justify-between gap-8">
          <Link href="/" className="group flex items-baseline gap-3">
            <span className="font-serif text-[1.35rem] tracking-tight text-ink">Shafiur Rahman</span>
            <span className="hidden sm:inline eyebrow">Full-Stack Developer</span>
          </Link>

          <nav className="hidden md:flex items-center gap-9">
            {NAV.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className={`text-[0.9375rem] transition-colors duration-200 hover:text-accent ${
                  isActive(item.href) ? 'text-accent' : 'text-ink-soft'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <a
              href="https://www.fiverr.com/shafiur_miju"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[0.9375rem] px-4 py-2 border border-ink text-ink transition-colors duration-200 hover:bg-ink hover:text-paper"
            >
              Hire on Fiverr
            </a>
          </nav>

          <button
            type="button"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
            className="md:hidden w-10 h-10 -mr-2 flex flex-col items-center justify-center gap-[5px]"
          >
            <span
              className={`block w-5 h-px bg-ink transition-transform duration-300 ${
                menuOpen ? 'translate-y-[6px] rotate-45' : ''
              }`}
            />
            <span className={`block w-5 h-px bg-ink transition-opacity duration-200 ${menuOpen ? 'opacity-0' : ''}`} />
            <span
              className={`block w-5 h-px bg-ink transition-transform duration-300 ${
                menuOpen ? '-translate-y-[6px] -rotate-45' : ''
              }`}
            />
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden border-t border-rule bg-paper">
          <nav className="max-w-[1180px] mx-auto px-6 sm:px-10 py-4 flex flex-col">
            {NAV.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="py-3 border-b border-rule-soft text-ink-soft hover:text-accent transition-colors"
              >
                {item.label}
              </Link>
            ))}
            <a
              href="https://www.fiverr.com/shafiur_miju"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 mb-2 py-3 text-center border border-ink text-ink hover:bg-ink hover:text-paper transition-colors"
            >
              Hire on Fiverr
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
