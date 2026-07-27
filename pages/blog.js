import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react'
import SiteHeader from '../components/SiteHeader'
import SiteFooter from '../components/SiteFooter'
import { posts } from '../data/posts'

export default function Blog() {
  const categories = ['All', ...Array.from(new Set(posts.map((post) => post.category)))]
  const [filter, setFilter] = useState('All')

  const visible = filter === 'All' ? posts : posts.filter((post) => post.category === filter)
  const [lead, ...rest] = visible

  return (
    <>
      <Head>
        <title>Journal — Shafiur Rahman</title>
        <meta
          name="description"
          content="Notes on building software: architecture, TypeScript, performance and design systems."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <SiteHeader />

      <main className="pt-[72px]">
        {/* Header */}
        <section className="max-w-[1180px] mx-auto px-6 sm:px-10">
          <div className="py-16 md:py-24 border-b border-rule">
            <div className="eyebrow mb-6">Writing</div>
            <h1 className="font-serif text-[clamp(2.5rem,6vw,4.25rem)] leading-[1.05] tracking-[-0.015em] m-0">
              Journal
            </h1>
            <p className="mt-6 text-ink-soft leading-[1.8] max-w-[58ch]">
              Notes on the craft — architecture, type systems, performance and the design decisions
              that outlive a release.
            </p>
          </div>
        </section>

        {/* Filters */}
        <section className="max-w-[1180px] mx-auto px-6 sm:px-10">
          <div className="py-6 border-b border-rule overflow-x-auto">
            <div className="flex items-center gap-x-7 gap-y-2 flex-wrap min-w-max">
              {categories.map((category) => (
                <button
                  key={category}
                  type="button"
                  onClick={() => setFilter(category)}
                  className={`text-[0.9375rem] whitespace-nowrap transition-colors duration-200 pb-1 border-b ${
                    filter === category
                      ? 'text-ink border-ink'
                      : 'text-ink-mute border-transparent hover:text-ink'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Lead article */}
        {lead && (
          <section className="max-w-[1180px] mx-auto px-6 sm:px-10">
            <Link href={`/blog/${lead.slug}`} className="group block py-12 md:py-16 border-b border-rule">
              <div className="grid gap-8 lg:grid-cols-[1.6fr_1fr] lg:gap-16 items-start">
                <div>
                  <div className="eyebrow mb-4">
                    Latest <span className="text-rule mx-2">|</span> {lead.category}
                  </div>
                  <h2 className="font-serif text-[clamp(2rem,4.6vw,3.25rem)] leading-[1.1] m-0 transition-colors duration-300 group-hover:text-accent">
                    {lead.title}
                  </h2>
                  <p className="mt-5 text-ink-soft leading-[1.8] max-w-[58ch]">{lead.excerpt}</p>
                  <span className="link-rule inline-block mt-7 text-[0.9375rem] text-ink">Read the piece</span>
                </div>
                <div className="lg:border-l lg:border-rule-soft lg:pl-12 lg:pt-2">
                  <dl className="m-0 space-y-4">
                    <div>
                      <dt className="eyebrow">Published</dt>
                      <dd className="m-0 mt-1 text-[0.9375rem] text-ink-soft">{lead.date}</dd>
                    </div>
                    <div>
                      <dt className="eyebrow">Length</dt>
                      <dd className="m-0 mt-1 text-[0.9375rem] text-ink-soft">{lead.readTime}</dd>
                    </div>
                    <div>
                      <dt className="eyebrow">Filed under</dt>
                      <dd className="m-0 mt-1 text-[0.9375rem] text-ink-soft">{lead.tags.join(' · ')}</dd>
                    </div>
                  </dl>
                </div>
              </div>
            </Link>
          </section>
        )}

        {/* Remaining articles */}
        <section className="max-w-[1180px] mx-auto px-6 sm:px-10 pb-8">
          {rest.map((post, index) => (
            <Link
              key={post.id}
              href={`/blog/${post.slug}`}
              className="group block py-8 md:py-10 border-b border-rule"
            >
              <div className="grid gap-4 md:grid-cols-[auto_1fr_auto] md:gap-10 md:items-baseline">
                <span className="font-mono text-[0.8125rem] text-ink-mute md:w-10">
                  {String(index + 2).padStart(2, '0')}
                </span>
                <div>
                  <div className="eyebrow mb-2">
                    {post.category} <span className="text-rule mx-2">|</span> {post.date}
                  </div>
                  <h3 className="font-serif text-[clamp(1.35rem,2.4vw,1.75rem)] leading-tight m-0 transition-colors duration-300 group-hover:text-accent">
                    {post.title}
                  </h3>
                  <p className="mt-2.5 text-ink-soft leading-[1.7] max-w-[62ch]">{post.excerpt}</p>
                </div>
                <span className="eyebrow whitespace-nowrap">{post.readTime}</span>
              </div>
            </Link>
          ))}
        </section>

        {/* Closing */}
        <section className="border-t border-rule bg-paper-alt/60">
          <div className="max-w-[1180px] mx-auto px-6 sm:px-10 py-16">
            <div className="flex flex-wrap items-center justify-between gap-6">
              <p className="font-serif text-[clamp(1.35rem,2.6vw,1.75rem)] m-0 max-w-[36ch] leading-snug">
                Prefer to see the work rather than read about it?
              </p>
              <Link href="/work" className="link-rule text-[0.9375rem] text-ink">
                Browse the projects
              </Link>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  )
}
