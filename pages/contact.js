import Head from 'next/head'
import Link from 'next/link'
import SiteHeader from '../components/SiteHeader'
import SiteFooter from '../components/SiteFooter'
import Icon from '../components/Icon'
import { projects } from '../data/projects'

const FIVERR_URL = 'https://www.fiverr.com/shafiur_miju'

const SERVICES = [
  { icon: 'mobile', title: 'Mobile applications', detail: 'React Native for iOS and Android, from first screen to store release.' },
  { icon: 'backend', title: 'Backends and APIs', detail: 'ASP.NET over MSSQL, Express and FastAPI where they fit better.' },
  { icon: 'web', title: 'Web applications', detail: 'React and Next.js — dashboards, portals and marketing sites.' },
  { icon: 'ai', title: 'AI features', detail: 'LLM integration, including self-hosted inference for private data.' },
]

const STEPS = [
  { title: 'Send the brief', detail: 'Describe the project on Fiverr — rough is fine, I will ask the rest.' },
  { title: 'Agree the shape', detail: 'Scope, timeline and milestones written down before any code.' },
  { title: 'Build in the open', detail: 'Progress shared as it lands, not saved for one big reveal.' },
  { title: 'Deliver and hand over', detail: 'Revisions, source, and whatever documentation the team needs.' },
]

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact — Shafiur Rahman</title>
        <meta name="description" content="Start a project. Briefs, milestones and delivery run through Fiverr." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <SiteHeader />

      <main className="pt-[72px]">
        {/* Header */}
        <section className="max-w-[1180px] mx-auto px-6 sm:px-10">
          <div className="py-16 md:py-24 border-b border-rule">
            <div className="eyebrow mb-6">Engagement</div>
            <h1 className="font-serif text-[clamp(2.5rem,6vw,4.25rem)] leading-[1.05] tracking-[-0.015em] m-0">
              Let's begin
            </h1>
            <p className="mt-6 text-ink-soft leading-[1.8] max-w-[58ch]">
              Everything runs through my Fiverr gig — messages, scope, milestones and payment stay in
              one place, so both of us are covered from the first note to handover.
            </p>
          </div>
        </section>

        <section className="max-w-[1180px] mx-auto px-6 sm:px-10">
          <div className="grid gap-14 lg:grid-cols-[1.3fr_1fr] lg:gap-20 py-16 md:py-20">
            {/* Primary call to action */}
            <div>
              <div className="border border-rule bg-card p-8 sm:p-12">
                <div className="eyebrow mb-6">Fiverr</div>
                <h2 className="font-serif text-[clamp(1.85rem,4vw,2.6rem)] leading-[1.15] m-0">
                  Hire me on Fiverr
                </h2>
                <p className="mt-5 text-ink-soft leading-[1.8] max-w-[46ch]">
                  Send the brief with whatever detail you have. I'll reply with questions, a proposed
                  scope and a delivery schedule — usually within a day.
                </p>
                <a
                  href={FIVERR_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2.5 mt-9 px-8 py-4 bg-ink text-paper text-[0.9375rem] tracking-wide transition-colors duration-300 hover:bg-accent"
                >
                  Open my Fiverr gig
                  <Icon name="arrowUpRight" size={16} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
                <div className="eyebrow mt-6">fiverr.com/shafiur_miju</div>
              </div>

              {/* Figures */}
              <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 border-t border-b border-rule divide-y sm:divide-y-0 sm:divide-x divide-rule">
                {[
                  { value: '< 24h', label: 'Typical reply' },
                  { value: projects.length, label: 'Projects delivered' },
                  { value: '3+', label: 'Years experience' },
                ].map((figure) => (
                  <div key={figure.label} className="py-6 sm:py-7 px-2 sm:px-3 text-center">
                    <div className="font-serif text-[1.75rem] leading-none">{figure.value}</div>
                    <div className="eyebrow mt-2.5">{figure.label}</div>
                  </div>
                ))}
              </div>

              {/* Availability */}
              <div className="mt-10 flex items-start gap-3">
                <span className="mt-[0.55rem] w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                <p className="text-ink-soft leading-[1.7] m-0">
                  <span className="text-ink">Currently available.</span> Taking on new projects this
                  quarter, with room for one longer engagement.
                </p>
              </div>
            </div>

            {/* Services + process */}
            <aside>
              <div className="eyebrow mb-5">What I build</div>
              <dl className="m-0 border-t border-rule">
                {SERVICES.map((service) => (
                  <div key={service.title} className="py-5 border-b border-rule-soft">
                    <dt className="flex items-center gap-2.5 font-serif text-lg leading-snug">
                      <Icon name={service.icon} size={17} className="text-ink-mute" />
                      {service.title}
                    </dt>
                    <dd className="m-0 mt-1.5 pl-[1.85rem] text-[0.9375rem] text-ink-mute leading-[1.6]">{service.detail}</dd>
                  </div>
                ))}
              </dl>

              <div className="eyebrow mt-12 mb-5">How it goes</div>
              <ol className="list-none p-0 m-0 border-t border-rule">
                {STEPS.map((step, index) => (
                  <li key={step.title} className="py-5 border-b border-rule-soft flex gap-5">
                    <span className="font-mono text-[0.8125rem] text-ink-mute pt-1">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <span>
                      <span className="block text-ink">{step.title}</span>
                      <span className="block text-[0.9375rem] text-ink-mute leading-[1.6] mt-1">{step.detail}</span>
                    </span>
                  </li>
                ))}
              </ol>
            </aside>
          </div>
        </section>

        {/* Closing */}
        <section className="border-t border-rule bg-paper-alt/60">
          <div className="max-w-[1180px] mx-auto px-6 sm:px-10 py-16">
            <div className="flex flex-wrap items-center justify-between gap-6">
              <p className="font-serif text-[clamp(1.35rem,2.6vw,1.75rem)] m-0 max-w-[36ch] leading-snug">
                Want to see the work first?
              </p>
              <Link
                href="/work"
                className="group inline-flex items-center gap-2 text-[0.9375rem] text-ink border-b border-ink pb-0.5 transition-colors hover:text-accent hover:border-accent"
              >
                Browse all {projects.length} projects
                <Icon name="arrowRight" size={15} className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  )
}
