import Link from 'next/link'
import Icon from './Icon'

export default function SiteFooter() {
  return (
    <footer className="border-t border-rule">
      <div className="max-w-[1180px] mx-auto px-6 sm:px-10 py-14">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <div className="font-serif text-2xl mb-3">Shafiur Miju</div>
            <p className="text-ink-mute text-[0.9375rem] max-w-[34ch] leading-relaxed">
              Full-stack developer building ASP.NET and Node services, React interfaces and
              React Native apps.
            </p>
          </div>

          <div>
            <div className="eyebrow mb-4">Pages</div>
            <ul className="space-y-2 text-[0.9375rem] text-ink-soft list-none p-0 m-0">
              <li><Link href="/" className="hover:text-accent transition-colors">Home</Link></li>
              <li><Link href="/work" className="hover:text-accent transition-colors">Work</Link></li>
              <li><Link href="/blog" className="hover:text-accent transition-colors">Articles</Link></li>
              <li><Link href="/contact" className="hover:text-accent transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <div className="eyebrow mb-4">Hire me</div>
            <a
              href="https://www.fiverr.com/shafiur_miju"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[0.9375rem] text-ink border-b border-ink pb-0.5 hover:text-accent hover:border-accent transition-colors"
            >
              fiverr.com/shafiur_miju
              <Icon name="arrowUpRight" size={14} />
            </a>
            <br />
            <a
              href="https://www.upwork.com/freelancers/~012a28f5b70869b9f0"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-3 text-[0.9375rem] text-ink border-b border-ink pb-0.5 hover:text-accent hover:border-accent transition-colors"
            >
              Upwork profile
              <Icon name="arrowUpRight" size={14} />
            </a>
            <p className="text-ink-mute text-sm mt-3">
Send a brief on Fiverr or Upwork and I'll reply with a plan and a price.
            </p>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-rule-soft flex flex-wrap gap-4 justify-between items-center">
          <span className="eyebrow">© {new Date().getFullYear()} Shafiur Miju</span>
        </div>
      </div>
    </footer>
  )
}
