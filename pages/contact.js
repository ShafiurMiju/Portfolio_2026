import Head from 'next/head'
import Link from 'next/link'
import SiteHeader from '../components/SiteHeader'
import SiteFooter from '../components/SiteFooter'
import Icon from '../components/Icon'
import { projects } from '../data/projects'


const SERVICES = [
  { icon: 'mobile', title: 'Mobile applications', detail: 'React Native for iOS and Android, from first screen to store release.' },
  { icon: 'backend', title: 'Backends and APIs', detail: 'ASP.NET over MSSQL, Express and FastAPI where they fit better.' },
  { icon: 'web', title: 'Web applications', detail: 'React and Next.js — dashboards, portals and marketing sites.' },
  { icon: 'ai', title: 'AI features', detail: 'LLM integration, including self-hosted inference for private data.' },
]

const STEPS = [
  { title: 'Send the brief', detail: 'Describe the project — rough is fine, I will ask the rest.' },
  { title: 'Agree the shape', detail: 'Scope, timeline and milestones written down before any code.' },
  { title: 'Build in the open', detail: 'Progress shared as it lands, not saved for one big reveal.' },
  { title: 'Deliver and hand over', detail: 'Revisions, source, and whatever documentation the team needs.' },
]

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact — Shafiur Miju</title>
        <meta name="description" content="What I build and how a project runs, from brief to delivery." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <SiteHeader />

      <main className="pt-[72px]">
        {/* Header */}
        <section className="max-w-[1180px] mx-auto px-6 sm:px-10">
          <div className="py-16 md:py-24 border-b border-rule">
            <div className="eyebrow mb-6">Contact</div>
            <h1 className="font-serif text-[clamp(2.5rem,6vw,4.25rem)] leading-[1.05] tracking-[-0.015em] m-0">
              Start a project
            </h1>
            <p className="mt-6 text-ink-soft leading-[1.8] max-w-[58ch]">
              What I build, and how a project runs from the first brief to final delivery.
            </p>
          </div>
        </section>

        <section className="max-w-[1180px] mx-auto px-6 sm:px-10">
          <div className="grid gap-14 lg:grid-cols-[1.3fr_1fr] lg:gap-20 py-16 md:py-20">
            {/* Primary call to action */}
            <div>
              {/* Figures */}
              <div className="grid grid-cols-1 sm:grid-cols-3 border-t border-b border-rule divide-y sm:divide-y-0 sm:divide-x divide-rule">
                {[
                  { value: '< 24h', label: 'Average reply time' },
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
              <div className="eyebrow mb-5">What I can build for you</div>
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

              <div className="eyebrow mt-12 mb-5">How we work together</div>
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
                Want to see my work first?
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
