import Link from 'next/link'

const LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Work', href: '/work' },
  { label: 'Articles', href: '/blog' },
  { label: 'Contact', href: '/contact' },
]

export default function SiteFooter() {
  return (
    <footer className="border-t border-rule">
      <div className="max-w-[1180px] mx-auto px-6 sm:px-10 py-12">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="font-serif text-2xl mb-3">Shafiur Miju</div>
            <p className="text-ink-mute text-[0.9375rem] max-w-[44ch] leading-relaxed m-0">
              Full-stack developer building ASP.NET and Node services, React interfaces and
              React Native apps.
            </p>
          </div>

          <nav className="flex flex-wrap gap-x-8 gap-y-2 text-[0.9375rem] text-ink-soft">
            {LINKS.map((link) => (
              <Link key={link.href} href={link.href} className="hover:text-accent transition-colors">
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="mt-10 pt-6 border-t border-rule-soft">
          <span className="eyebrow">© {new Date().getFullYear()} Shafiur Miju</span>
        </div>
      </div>
    </footer>
  )
}
