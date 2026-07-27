import Head from 'next/head'
import Link from 'next/link'
import SiteHeader from '../components/SiteHeader'
import SiteFooter from '../components/SiteFooter'
import SectionHeading from '../components/SectionHeading'
import { projects, featuredProjects } from '../data/projects'
import { skillGroups } from '../data/skills'

const FIVERR_URL = 'https://www.fiverr.com/shafiur_miju'

export default function Home() {
  const technologies = new Set(projects.flatMap((project) => project.tech)).size

  const facts = [
    { label: 'Primary stack', value: 'ASP.NET · C# · MSSQL' },
    { label: 'Also builds with', value: 'Express · Next.js · React Native' },
    { label: 'Experience', value: '3+ years' },
    { label: 'Engagement', value: 'Fiverr' },
  ]

  return (
    <>
      <Head>
        <title>Shafiur Rahman — Full-Stack Developer</title>
        <meta
          name="description"
          content="Full-stack developer working in ASP.NET, Express and Next.js, with React on the web and React Native on mobile."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <SiteHeader />

      <main className="pt-[72px]">
        {/* Hero */}
        <section className="max-w-[1180px] mx-auto px-6 sm:px-10">
          <div className="py-20 md:py-28 grid gap-14 lg:grid-cols-[1.45fr_1fr] lg:gap-20 items-start">
            <div className="animate-rise">
              <div className="eyebrow mb-6">Full-Stack Developer · Bangladesh</div>
              <h1 className="font-serif text-[clamp(2.75rem,7vw,5rem)] leading-[1.04] tracking-[-0.015em] m-0">
                Software built to
                <br />
                <span className="italic">last</span> the maintenance.
              </h1>
              <p className="mt-8 text-[1.0625rem] md:text-lg leading-[1.75] text-ink-soft max-w-[54ch]">
                I build the unglamorous parts properly — the ASP.NET services, the data models, the
                offline caches, the release pipelines — then put a considered interface on top, on
                the web with React and on device with React Native.
              </p>

              <div className="mt-10 flex flex-wrap items-center gap-4">
                <a
                  href={FIVERR_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-7 py-3.5 bg-ink text-paper text-[0.9375rem] tracking-wide transition-colors duration-300 hover:bg-accent"
                >
                  Hire me on Fiverr
                </a>
                <Link
                  href="/work"
                  className="px-7 py-3.5 border border-rule text-ink text-[0.9375rem] tracking-wide transition-colors duration-300 hover:border-ink"
                >
                  View selected work
                </Link>
              </div>
            </div>

            {/* Colophon-style fact list */}
            <aside className="lg:pt-4 lg:border-l lg:border-rule lg:pl-12">
              <div className="eyebrow mb-6">At a glance</div>
              <dl className="m-0">
                {facts.map((fact) => (
                  <div key={fact.label} className="py-4 border-b border-rule-soft first:border-t first:border-rule-soft">
                    <dt className="text-[0.8125rem] uppercase tracking-[0.12em] text-ink-mute mb-1.5">
                      {fact.label}
                    </dt>
                    <dd className="m-0 text-[0.9375rem] text-ink">{fact.value}</dd>
                  </div>
                ))}
              </dl>
            </aside>
          </div>
        </section>

        {/* Figures */}
        <section className="border-y border-rule bg-paper-alt/60">
          <div className="max-w-[1180px] mx-auto px-6 sm:px-10">
            <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-rule">
              {[
                { value: '3+', label: 'Years experience' },
                { value: projects.length, label: 'Projects delivered' },
                { value: technologies, label: 'Technologies used' },
              ].map((figure) => (
                <div key={figure.label} className="py-8 sm:py-10 px-2 sm:px-4 text-center">
                  <div className="font-serif text-[clamp(2rem,4vw,2.75rem)] leading-none">{figure.value}</div>
                  <div className="eyebrow mt-3">{figure.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="max-w-[1180px] mx-auto px-6 sm:px-10 py-24 md:py-28 scroll-mt-24">
          <SectionHeading numeral="I" title="About" aside="Profile" />
          <div className="grid gap-14 lg:grid-cols-[1.5fr_1fr] lg:gap-20">
            <div className="max-w-[62ch]">
              <p className="font-serif text-[1.375rem] md:text-[1.5rem] leading-[1.6] text-ink mb-8">
                I work across the whole stack, but the centre of gravity is the back end — ASP.NET
                services over MSSQL, and Express or FastAPI where the project calls for them.
              </p>
              <p className="text-ink-soft leading-[1.8] mb-6">
                Most of what I ship is used daily by people at work: compliance documents moving
                through review, patients managing memberships, field teams filing leave from their
                phones. That shapes how I build — predictable data models, states that survive a lost
                connection, and interfaces that stay legible when the content is dull but important.
              </p>
              <p className="text-ink-soft leading-[1.8]">
                Lately a good deal of that work has involved language models: a self-hosted inference
                service behind a medical assistant, a realtime voice coach, transcription pipelines.
                The interesting problems there are the same as always — latency, failure handling,
                and keeping data where it belongs.
              </p>
            </div>

            <aside>
              <div className="eyebrow mb-5">Education</div>
              <div className="border-t border-rule pt-5">
                <div className="font-serif text-xl leading-snug">
                  American International University&#8209;Bangladesh
                </div>
                <div className="text-ink-soft mt-2 text-[0.9375rem]">BSc in Computer Science &amp; Engineering</div>
                <div className="text-ink-mute mt-1 text-[0.9375rem]">Major in Software Engineering · Completed</div>
              </div>
            </aside>
          </div>
        </section>

        {/* Expertise */}
        <section id="expertise" className="border-t border-rule bg-paper-alt/40 scroll-mt-24">
          <div className="max-w-[1180px] mx-auto px-6 sm:px-10 py-24 md:py-28">
            <SectionHeading numeral="II" title="Expertise" aside="What I work in" />
            <dl className="m-0 border-t border-rule">
              {skillGroups.map((group) => (
                <div
                  key={group.name}
                  className="grid gap-3 md:grid-cols-[minmax(180px,1fr)_2.4fr] md:gap-10 py-7 border-b border-rule"
                >
                  <dt>
                    <div className="font-serif text-[1.375rem] leading-tight">{group.name}</div>
                    <div className="text-ink-mute text-sm mt-1.5 leading-snug">{group.blurb}</div>
                  </dt>
                  <dd className="m-0 flex flex-wrap gap-x-2.5 gap-y-2 items-start md:pt-1">
                    {group.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-card border border-rule text-[0.875rem] text-ink-soft transition-colors duration-200 hover:border-ink hover:text-ink"
                      >
                        {skill}
                      </span>
                    ))}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* Selected work */}
        <section id="work" className="max-w-[1180px] mx-auto px-6 sm:px-10 py-24 md:py-28 scroll-mt-24">
          <SectionHeading
            numeral="III"
            title="Selected Work"
            aside={`${featuredProjects.length} of ${projects.length}`}
          />

          <div className="-mt-4">
            {featuredProjects.map((project, index) => (
              <article key={project.id} className="group py-10 md:py-12 border-b border-rule">
                <div className="grid gap-6 md:grid-cols-[auto_1fr] md:gap-10">
                  <div className="font-serif text-[2rem] leading-none text-rule md:w-16 md:pt-1 select-none">
                    {String(index + 1).padStart(2, '0')}
                  </div>

                  <div className="grid gap-8 lg:grid-cols-[1.55fr_1fr] lg:gap-14">
                    <div>
                      <div className="eyebrow mb-3">
                        {project.category}
                        {(project.status || project.year) && (
                          <span className="text-rule mx-2">|</span>
                        )}
                        {project.status || project.year}
                      </div>
                      <h3 className="font-serif text-[clamp(1.6rem,3vw,2.125rem)] leading-tight m-0 transition-colors duration-300 group-hover:text-accent">
                        {project.title}
                      </h3>
                      <p className="mt-4 text-ink-soft leading-[1.8] max-w-[58ch]">{project.description}</p>

                      <div className="mt-6 flex flex-wrap gap-x-2 gap-y-1.5 text-[0.875rem] text-ink-mute">
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
                          className="link-rule inline-block mt-6 text-[0.9375rem] text-ink"
                        >
                          Visit site
                        </a>
                      )}
                    </div>

                    {project.highlights?.length > 0 && (
                      <div className="lg:border-l lg:border-rule-soft lg:pl-10">
                        <div className="eyebrow mb-4">Notes</div>
                        <ul className="list-none p-0 m-0 space-y-3">
                          {project.highlights.slice(0, 4).map((highlight) => (
                            <li key={highlight} className="text-[0.9375rem] text-ink-soft leading-[1.6] pl-4 relative">
                              <span className="absolute left-0 top-[0.62em] w-1.5 h-px bg-ink-mute" />
                              {highlight}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-12">
            <Link href="/work" className="link-rule text-[0.9375rem] text-ink">
              View all {projects.length} projects
            </Link>
          </div>
        </section>

        {/* Engagement */}
        <section id="contact" className="border-t border-rule bg-paper-alt/60 scroll-mt-24">
          <div className="max-w-[1180px] mx-auto px-6 sm:px-10 py-24 md:py-28">
            <div className="max-w-[62ch]">
              <div className="eyebrow mb-6">IV · Engagement</div>
              <h2 className="font-serif text-[clamp(2rem,4.5vw,3rem)] leading-[1.15] m-0">
                Have a project that needs building properly?
              </h2>
              <p className="mt-6 text-ink-soft leading-[1.8]">
                Briefs, scope, milestones and delivery all run through my Fiverr gig, so the terms are
                clear from the first message and both of us are covered through to handover.
              </p>
              <div className="mt-10 flex flex-wrap items-center gap-6">
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
              <div className="eyebrow mt-8">fiverr.com/shafiur_miju</div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  )
}
