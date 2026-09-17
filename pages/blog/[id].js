import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import SiteHeader from '../../components/SiteHeader'
import SiteFooter from '../../components/SiteFooter'
import Icon from '../../components/Icon'
import { posts, getPost } from '../../data/posts'

export default function BlogPost() {
  const router = useRouter()
  const { id: slug } = router.query

  const post = getPost(slug)
  const others = posts.filter((entry) => entry.slug !== slug).slice(0, 3)

  if (!post) {
    return (
      <>
        <Head>
          <title>Not found — Shafiur Miju</title>
        </Head>
        <SiteHeader />
        <main className="pt-[72px]">
          <div className="max-w-[1180px] mx-auto px-6 sm:px-10 py-32">
            <div className="eyebrow mb-6">404</div>
            <h1 className="font-serif text-[clamp(2rem,5vw,3.25rem)] leading-tight m-0">
Page not found
            </h1>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 mt-8 text-[0.9375rem] text-ink border-b border-ink pb-0.5 transition-colors hover:text-accent hover:border-accent"
            >
              <Icon name="arrowLeft" size={15} />
See all articles
            </Link>
          </div>
        </main>
        <SiteFooter />
      </>
    )
  }

  return (
    <>
      <Head>
        <title>{post.title} — Shafiur Miju</title>
        <meta name="description" content={post.excerpt} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <SiteHeader />

      <main className="pt-[72px]">
        {/* Masthead */}
        <article>
          <header className="max-w-[1180px] mx-auto px-6 sm:px-10">
            <div className="py-14 md:py-20 border-b border-rule">
              <Link href="/blog" className="eyebrow inline-flex items-center gap-2 hover:text-accent transition-colors">
                <Icon name="arrowLeft" size={14} />
                All articles
              </Link>
              <div className="eyebrow mt-8 mb-5 flex flex-wrap items-center gap-x-5 gap-y-2">
                <span className="inline-flex items-center gap-1.5">
                  <Icon name="tag" size={13} />
                  {post.category}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Icon name="calendar" size={13} />
                  {post.date}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Icon name="clock" size={13} />
                  {post.readTime}
                </span>
              </div>
              <h1 className="font-serif text-[clamp(2.25rem,5.5vw,4rem)] leading-[1.08] tracking-[-0.015em] m-0 max-w-[20ch]">
                {post.title}
              </h1>
              <p className="mt-7 font-serif text-[1.25rem] md:text-[1.375rem] italic leading-[1.6] text-ink-soft max-w-[54ch]">
                {post.excerpt}
              </p>
            </div>
          </header>

          {/* Body */}
          <div className="max-w-[1180px] mx-auto px-6 sm:px-10">
            <div className="grid gap-12 lg:grid-cols-[minmax(0,68ch)_1fr] lg:gap-20 py-14 md:py-20">
              <div
                className="article-body"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />

              <aside className="lg:border-l lg:border-rule-soft lg:pl-12">
                <div className="lg:sticky lg:top-28">
                  <div className="eyebrow mb-4">Topics</div>
                  <div className="flex flex-wrap gap-2 mb-10">
                    {post.tags.map((tag) => (
                      <span key={tag} className="px-3 py-1 border border-rule text-[0.8125rem] text-ink-soft">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="eyebrow mb-4">More articles</div>
                  <ul className="list-none p-0 m-0 border-t border-rule">
                    {others.map((entry) => (
                      <li key={entry.id} className="border-b border-rule-soft">
                        <Link href={`/blog/${entry.slug}`} className="group block py-4">
                          <span className="block font-serif text-[1.0625rem] leading-snug transition-colors duration-300 group-hover:text-accent">
                            {entry.title}
                          </span>
                          <span className="eyebrow mt-1.5 flex items-center gap-1.5">
                            <Icon name="clock" size={13} />
                            {entry.readTime}
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </aside>
            </div>
          </div>
        </article>

        {/* Closing */}
        <section className="border-t border-rule bg-paper-alt/60">
          <div className="max-w-[1180px] mx-auto px-6 sm:px-10 py-16">
            <div className="flex flex-wrap items-center justify-between gap-6">
              <p className="font-serif text-[clamp(1.35rem,2.6vw,1.75rem)] m-0 max-w-[38ch] leading-snug">
                Want to see what I have built?
              </p>
              <Link
                href="/work"
                className="group inline-flex items-center gap-2 text-[0.9375rem] text-ink border-b border-ink pb-0.5 transition-colors hover:text-accent hover:border-accent"
              >
                See the projects
                <Icon name="arrowRight" size={15} className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />

      <style jsx global>{`
        .article-body {
          font-size: 1.0625rem;
          line-height: 1.85;
          color: var(--color-ink-soft);
        }

        .article-body h2 {
          font-family: var(--font-serif);
          font-size: clamp(1.5rem, 3vw, 1.9rem);
          line-height: 1.25;
          color: var(--color-ink);
          margin: 3rem 0 1rem;
          padding-bottom: 0.6rem;
          border-bottom: 1px solid var(--color-rule);
        }

        .article-body h2:first-child {
          margin-top: 0;
        }

        .article-body h3 {
          font-family: var(--font-serif);
          font-size: 1.3rem;
          color: var(--color-ink);
          margin: 2.25rem 0 0.75rem;
        }

        .article-body p {
          margin: 0 0 1.35rem;
        }

        .article-body ul {
          list-style: disc outside;
          margin: 0 0 1.5rem;
          padding-left: 1.25rem;
        }

        .article-body ol {
          list-style: decimal outside;
          margin: 0 0 1.5rem;
          padding-left: 1.35rem;
        }

        .article-body li {
          margin-bottom: 0.5rem;
        }

        .article-body li::marker {
          color: var(--color-ink-mute);
        }

        .article-body strong {
          color: var(--color-ink);
          font-weight: 600;
        }

        .article-body a {
          color: var(--color-accent);
          border-bottom: 1px solid var(--color-rule);
        }

        .article-body blockquote {
          margin: 2rem 0;
          padding-left: 1.5rem;
          border-left: 2px solid var(--color-accent);
          font-family: var(--font-serif);
          font-style: italic;
          font-size: 1.2rem;
          color: var(--color-ink);
        }

        .article-body pre {
          background: var(--color-paper-alt);
          border: 1px solid var(--color-rule);
          padding: 1.25rem 1.4rem;
          overflow-x: auto;
          margin: 0 0 1.75rem;
          font-family: var(--font-mono);
          font-size: 0.875rem;
          line-height: 1.7;
          color: var(--color-ink);
        }

        .article-body code {
          font-family: var(--font-mono);
          font-size: 0.875em;
          background: var(--color-paper-alt);
          border: 1px solid var(--color-rule-soft);
          padding: 0.1em 0.4em;
          color: var(--color-ink);
        }

        .article-body pre code {
          background: none;
          border: none;
          padding: 0;
        }
      `}</style>
    </>
  )
}
