import Head from 'next/head'
import { useState } from 'react'
import SiteHeader from '../components/SiteHeader'
import SiteFooter from '../components/SiteFooter'
import Icon, { PLATFORM_ICONS } from '../components/Icon'
import { projects, projectCategories } from '../data/projects'


export default function Work() {
  const [filter, setFilter] = useState('all')

  const filteredProjects =
    filter === 'all' ? projects : projects.filter((project) => project.category === filter)

  const countFor = (category) =>
    category === 'all' ? projects.length : projects.filter((p) => p.category === category).length

  return (
    <>
      <Head>
        <title>Work — Shafiur Miju</title>
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
            <div className="eyebrow mb-6">Portfolio</div>
            <h1 className="font-serif text-[clamp(2.5rem,6vw,4.25rem)] leading-[1.05] tracking-[-0.015em] m-0">
              All Projects
            </h1>
            <p className="mt-6 text-ink-soft leading-[1.8] max-w-[58ch]">
              Every project I've built — business platforms, patient portals, AI services and
              mobile apps. Use the filters to jump to a type.
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
                  {category === 'all' ? 'All projects' : category}
                  <span className="ml-1.5 text-[0.8125rem] text-ink-mute">({countFor(category)})</span>
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
                      {(project.status || project.year) && <span className="text-rule">·</span>}
                      {(project.status || project.year) && <span>{project.status || project.year}</span>}
                      {project.personal && (
                        <>
                          <span className="text-rule">·</span>
                          <span className="text-accent">Personal project</span>
                        </>
                      )}
                      {project.featured && (
                        <>
                          <span className="text-rule">·</span>
                          <span className="text-accent">Featured</span>
                        </>
                      )}
                    </div>

                    <h2 className="font-serif text-[clamp(1.5rem,2.6vw,1.95rem)] leading-tight m-0 transition-colors duration-300 group-hover:text-accent">
                      {project.title}
                    </h2>
                    <p className="mt-3 text-ink text-[1.0625rem] leading-[1.7]">{project.summary}</p>
                    <p className="mt-3 text-ink-soft leading-[1.8] max-w-[58ch]">{project.description}</p>

                    <div className="eyebrow mt-5 mb-2">Built with</div>
                    <div className="flex flex-wrap gap-x-2 gap-y-1.5 text-[0.875rem] text-ink-mute">
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
                        className="inline-flex items-center gap-2 mt-5 text-[0.9375rem] text-ink border-b border-ink pb-0.5 transition-colors hover:text-accent hover:border-accent"
                      >
                        Visit site
                        <Icon name="arrowUpRight" size={14} />
                      </a>
                    )}
                  </div>

                  <div className="lg:border-l lg:border-rule-soft lg:pl-10">
                    <div className="eyebrow mb-3">Runs on</div>
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mb-6">
                      {project.platforms.map((platform) => (
                        <span key={platform} className="inline-flex items-center gap-1.5 text-[0.9375rem] text-ink-soft">
                          <Icon name={PLATFORM_ICONS[platform] || 'dot'} size={15} />
                          {platform}
                        </span>
                      ))}
                    </div>

                    {project.highlights?.length > 0 && (
                      <>
                        <div className="eyebrow mb-3">Highlights</div>
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

      </main>

      <SiteFooter />
    </>
  )
}
