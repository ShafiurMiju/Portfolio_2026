import Head from 'next/head'
import Link from 'next/link'
import SiteHeader from '../components/SiteHeader'
import SiteFooter from '../components/SiteFooter'
import SectionHeading from '../components/SectionHeading'
import Icon, { PLATFORM_ICONS } from '../components/Icon'
import TechMark from '../components/TechMark'
import { projects, featuredProjects } from '../data/projects'
import { skillGroups } from '../data/skills'

const FIVERR_URL = 'https://www.fiverr.com/shafiur_miju'

export default function Home() {
  const technologies = new Set(projects.flatMap((project) => project.tech)).size

  const facts = [
    { label: 'Main stack', value: 'ASP.NET · C# · MSSQL' },
    { label: 'Also works with', value: 'Express · Next.js · React Native' },
    { label: 'Experience', value: '3+ years' },
    { label: 'How to hire me', value: 'Through Fiverr' },
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
              <h1 className="font-serif text-[clamp(2.5rem,6.4vw,4.5rem)] leading-[1.06] tracking-[-0.015em] m-0">
                I build web apps, mobile apps,
                <br />
                and the systems behind them.
              </h1>
              <p className="mt-8 text-[1.0625rem] md:text-lg leading-[1.75] text-ink-soft max-w-[54ch]">
                Full-stack developer with 3+ years of experience. Back end in ASP.NET and MSSQL,
                websites in React and Next.js, and iOS and Android apps in React Native — including
                the AI features on top.
              </p>

              <div className="mt-10 flex flex-wrap items-center gap-4">
                <a
                  href={FIVERR_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2.5 px-7 py-3.5 bg-ink text-paper text-[0.9375rem] tracking-wide transition-colors duration-300 hover:bg-accent"
                >
                  Hire me on Fiverr
                  <Icon name="arrowUpRight" size={16} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
                <Link
                  href="/work"
                  className="group inline-flex items-center gap-2.5 px-7 py-3.5 border border-rule text-ink text-[0.9375rem] tracking-wide transition-colors duration-300 hover:border-ink"
                >
                  View selected work
                  <Icon name="arrowRight" size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            </div>

            {/* Colophon-style fact list */}
            <aside className="lg:pt-4 lg:border-l lg:border-rule lg:pl-12">
              <div className="eyebrow mb-6">Quick facts</div>
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
          <SectionHeading title="About Me" />
          <div className="grid gap-14 lg:grid-cols-[1.5fr_1fr] lg:gap-20">
            <div className="max-w-[62ch]">
              <p className="font-serif text-[1.375rem] md:text-[1.5rem] leading-[1.6] text-ink mb-8">
                I work across the whole stack, but most of my experience is on the back end —
                ASP.NET services over MSSQL, plus Express or FastAPI when a project needs them.
              </p>
              <p className="text-ink-soft leading-[1.8] mb-6">
                Most of what I build is used at work every day: compliance documents going through
                review, patients managing their memberships, field teams filing leave from their
                phones. So I build for daily use — data you can trust, apps that keep working when
                the connection drops, and screens that stay easy to read.
              </p>
              <p className="text-ink-soft leading-[1.8]">
                Recently a lot of that work has involved AI: a medical assistant running on a
                self-hosted language model, a realtime voice coach, and transcription pipelines. When
                the data is sensitive, I run the model on your own server so nothing leaves it.
              </p>
            </div>

            <aside>
              <div className="eyebrow mb-5">Good to know</div>
              <ul className="list-none p-0 m-0 border-t border-rule">
                {[
                  `${projects.length} projects delivered — business platforms, portals and mobile apps`,
                  'I handle the whole job: database, API and the screens on top',
                  'One codebase shipped to web, iOS and Android',
                  'AI features built in — and run on your own server when the data is private',
                  'Based in Bangladesh (GMT+6), working with clients in any timezone',
                  'Hired through Fiverr, with agreed milestones and a fixed price',
                ].map((point) => (
                  <li key={point} className="flex gap-3 py-3.5 border-b border-rule-soft">
                    <Icon name="check" size={15} className="text-accent mt-[0.3rem]" strokeWidth={1.6} />
                    <span className="text-[0.9375rem] text-ink-soft leading-[1.6]">{point}</span>
                  </li>
                ))}
              </ul>
            </aside>
          </div>
        </section>

        {/* Expertise */}
        <section id="skills" className="border-t border-rule bg-paper-alt/40 scroll-mt-24">
          <div className="max-w-[1180px] mx-auto px-6 sm:px-10 py-24 md:py-28">
            <SectionHeading title="Skills" aside="Technologies I work with" />
            <dl className="m-0 border-t border-rule">
              {skillGroups.map((group) => (
                <div
                  key={group.name}
                  className="grid gap-3 md:grid-cols-[minmax(180px,1fr)_2.4fr] md:gap-10 py-7 border-b border-rule"
                >
                  <dt>
                    <div className="flex items-center gap-3">
                      <span className="w-9 h-9 border border-rule bg-card flex items-center justify-center text-ink-soft">
                        <Icon name={group.icon} size={17} />
                      </span>
                      <span className="font-serif text-[1.375rem] leading-tight">{group.name}</span>
                    </div>
                    <div className="text-ink-mute text-sm mt-2 leading-snug">{group.blurb}</div>
                  </dt>
                  <dd className="m-0 flex flex-wrap gap-x-2.5 gap-y-2 items-start md:pt-1">
                    {group.skills.map((skill) => (
                      <span
                        key={skill}
                        className="inline-flex items-center gap-2 pl-2.5 pr-3 py-1.5 bg-card border border-rule text-[0.875rem] text-ink-soft transition-colors duration-200 hover:border-ink hover:text-ink"
                      >
                        <TechMark name={skill} size={14} />
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
            title="Featured Projects"
            aside={`${featuredProjects.length} of ${projects.length} projects`}
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
                          <span className="text-rule mx-2">·</span>
                        )}
                        {project.status || project.year}
                      </div>
                      <h3 className="font-serif text-[clamp(1.6rem,3vw,2.125rem)] leading-tight m-0 transition-colors duration-300 group-hover:text-accent">
                        {project.title}
                      </h3>
                      <p className="mt-4 text-ink-soft leading-[1.8] max-w-[58ch]">{project.description}</p>

                      <div className="eyebrow mt-6 mb-2">Built with</div>
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
                          className="inline-flex items-center gap-2 mt-6 text-[0.9375rem] text-ink border-b border-ink pb-0.5 transition-colors hover:text-accent hover:border-accent"
                        >
                          Visit site
                          <Icon name="arrowUpRight" size={14} />
                        </a>
                      )}
                    </div>

                    {project.highlights?.length > 0 && (
                      <div className="lg:border-l lg:border-rule-soft lg:pl-10">
                        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mb-5">
                          <span className="eyebrow">Runs on</span>
                          {project.platforms.map((platform) => (
                            <span key={platform} className="inline-flex items-center gap-1.5 text-[0.8125rem] text-ink-soft">
                              <Icon name={PLATFORM_ICONS[platform] || 'dot'} size={15} />
                              {platform}
                            </span>
                          ))}
                        </div>
                        <div className="eyebrow mb-4">Highlights</div>
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
            <Link
              href="/work"
              className="group inline-flex items-center gap-2 text-[0.9375rem] text-ink border-b border-ink pb-0.5 transition-colors hover:text-accent hover:border-accent"
            >
              View all {projects.length} projects
              <Icon name="arrowRight" size={15} className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </section>

        {/* Engagement */}
        <section id="contact" className="border-t border-rule bg-paper-alt/60 scroll-mt-24">
          <div className="max-w-[1180px] mx-auto px-6 sm:px-10 py-24 md:py-28">
            <div className="max-w-[62ch]">
              <div className="eyebrow mb-6">Start a project</div>
              <h2 className="font-serif text-[clamp(2rem,4.5vw,3rem)] leading-[1.15] m-0">
Want to work together?
              </h2>
              <p className="mt-6 text-ink-soft leading-[1.8]">
                Tell me what you need and I'll reply with a plan: what I'll build, how long it takes
                and what it costs. Everything runs through Fiverr, so you're protected from the first
                message to final delivery.
              </p>
              <div className="mt-10 flex flex-wrap items-center gap-6">
                <a
                  href={FIVERR_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2.5 px-7 py-3.5 bg-ink text-paper text-[0.9375rem] tracking-wide transition-colors duration-300 hover:bg-accent"
                >
                  Hire me on Fiverr
                  <Icon name="arrowUpRight" size={16} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-2 text-[0.9375rem] text-ink border-b border-ink pb-0.5 transition-colors hover:text-accent hover:border-accent"
                >
                  How working together goes
                  <Icon name="arrowRight" size={15} className="transition-transform duration-300 group-hover:translate-x-1" />
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
