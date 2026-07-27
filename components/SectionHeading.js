export default function SectionHeading({ title, aside }) {
  return (
    <div className="mb-12">
      <div className="flex items-end justify-between gap-6 pb-4 border-b border-rule">
        <h2 className="font-serif text-[clamp(1.75rem,3.4vw,2.5rem)] leading-tight m-0">{title}</h2>
        {aside && <span className="eyebrow pb-1 whitespace-nowrap">{aside}</span>}
      </div>
    </div>
  )
}
