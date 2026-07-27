import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react'
import SiteHeader from '../components/SiteHeader'
import SiteFooter from '../components/SiteFooter'
import SectionHeading from '../components/SectionHeading'
import { projects, projectCategories } from '../data/projects'

const FIVERR_URL = 'https://www.fiverr.com/shafiur_miju'

export default function Work() {
  const [filter, setFilter] = useState('all')

  const filteredProjects =
    filter === 'all' ? projects : projects.filter((project) => project.category === filter)

  const countFor = (category) =>
    category === 'all' ? projects.length : projects.filter((p) => p.category === category).length

  return (
    <>
      <Head>
        <title>Work — Shafiur Rahman</title>
        <meta
          name="description"
          content="Selected projects: enterprise platforms, patient portals, AI services and React Native apps."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <SiteHeader />

      <main className="pt-[72px]">
        {/* Header */}
        <section className="max-w-[1180px] mx-auto px-6 sm:px-10">
          <div className="py-16 md:py-24 border-b border-rule">
            <div className="eyebrow mb-6">Index of projects</div>
            <h1 className="font-serif text-[clamp(2.5rem,6vw,4.25rem)] leading-[1.05] tracking-[-0.015em] m-0">
              Work
            </h1>
            <p className="mt-6 text-ink-soft leading-[1.8] max-w-[58ch]">
              Enterprise platforms, patient portals, AI services and mobile apps — client work
              alongside a few things built for their own sake.
            </p>
          </div>
        </section>

        {/* Filters */}
        <section className="max-w-[1180px] mx-auto px-6 sm:px-10">
          <div className="py-6 border-b border-rule overflow-x-auto">
            <div className="flex items-center gap-x-7 gap-y-2 flex-wrap min-w-max">
              {projectCategories.map((category) => (
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
                  {category === 'all' ? 'All' : category}
                  <sup className="ml-1.5 text-[0.6875rem] text-ink-mute font-mono">{countFor(category)}</sup>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Project list */}
        <section className="max-w-[1180px] mx-auto px-6 sm:px-10 pb-8">
          {filteredProjects.map((project, index) => (
            <article key={project.id} className="group py-10 md:py-12 border-b border-rule">
              <div className="grid gap-6 md:grid-cols-[auto_1fr] md:gap-10">
                <div className="font-serif text-[1.75rem] leading-none text-rule md:w-14 md:pt-1 select-none">
                  {String(index + 1).padStart(2, '0')}
                </div>

                <div className="grid gap-8 lg:grid-cols-[1.55fr_1fr] lg:gap-14">
                  <div>
                    <div className="eyebrow mb-3 flex flex-wrap items-center gap-x-2">
                      <span>{project.category}</span>
                      {(project.status || project.year) && <span className="text-rule">|</span>}
                      {(project.status || project.year) && <span>{project.status || project.year}</span>}
                      {project.personal && (
                        <>
                          <span className="text-rule">|</span>
                          <span className="text-accent">Personal</span>
                        </>
                      )}
                      {project.featured && (
                        <>
                          <span className="text-rule">|</span>
                          <span className="text-accent">Featured</span>
                        </>
                      )}
                    </div>

                    <h2 className="font-serif text-[clamp(1.5rem,2.6vw,1.95rem)] leading-tight m-0 transition-colors duration-300 group-hover:text-accent">
                      {project.title}
                    </h2>
                    <p className="mt-3 text-ink text-[1.0625rem] leading-[1.7]">{project.summary}</p>
                    <p className="mt-3 text-ink-soft leading-[1.8] max-w-[58ch]">{project.description}</p>

                    <div className="mt-5 flex flex-wrap gap-x-2 gap-y-1.5 text-[0.875rem] text-ink-mute">
                      {project.tech.map((tech, techIndex) => (
                        <span key={tech}>
                          {tech}
                          {techIndex < project.tech.length - 1 && <span className="ml-2 text-rule">·</span>}
                        </span>
                      ))}
                    </div>

                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="link-rule inline-block mt-5 text-[0.9375rem] text-ink"
                      >
                        Visit site
                      </a>
                    )}
                  </div>

                  <div className="lg:border-l lg:border-rule-soft lg:pl-10">
                    <div className="eyebrow mb-3">Platforms</div>
                    <div className="text-[0.9375rem] text-ink-soft mb-6">{project.platforms.join(' · ')}</div>

                    {project.highlights?.length > 0 && (
                      <>
                        <div className="eyebrow mb-3">Notes</div>
                        <ul className="list-none p-0 m-0 space-y-2.5">
                          {project.highlights.slice(0, 3).map((highlight) => (
                            <li key={highlight} className="text-[0.9375rem] text-ink-soft leading-[1.6] pl-4 relative">
                              <span className="absolute left-0 top-[0.62em] w-1.5 h-px bg-ink-mute" />
                              {highlight}
                            </li>
                          ))}
                        </ul>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </article>
          ))}

          {filteredProjects.length === 0 && (
            <p className="py-16 text-ink-mute">Nothing filed under this category yet.</p>
          )}
        </section>

        {/* Closing */}
        <section className="border-t border-rule bg-paper-alt/60">
          <div className="max-w-[1180px] mx-auto px-6 sm:px-10 py-20">
            <div className="max-w-[58ch]">
              <SectionHeading title="Something similar in mind?" aside="Next" />
              <p className="text-ink-soft leading-[1.8] -mt-4">
                Send the brief through Fiverr and I'll come back with scope, timeline and a fixed
                set of milestones.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-6">
                <a
                  href={FIVERR_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-7 py-3.5 bg-ink text-paper text-[0.9375rem] tracking-wide transition-colors duration-300 hover:bg-accent"
                >
                  Hire me on Fiverr
                </a>
                <Link href="/contact" className="link-rule text-[0.9375rem] text-ink">
                  How working together goes
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  )
}
