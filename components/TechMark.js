// Small marks for individual technologies.
// Well-known tools get their own shape; everything else gets a glyph for the
// kind of thing it is (server, database, language, UI, tool).

const GLYPHS = {
  react: (
    <>
      <circle cx="12" cy="12" r="2.1" />
      <ellipse cx="12" cy="12" rx="10" ry="3.7" />
      <ellipse cx="12" cy="12" rx="10" ry="3.7" transform="rotate(60 12 12)" />
      <ellipse cx="12" cy="12" rx="10" ry="3.7" transform="rotate(120 12 12)" />
    </>
  ),
  next: (
    <>
      <circle cx="12" cy="12" r="9.2" />
      <path d="M9 16.5v-9l7 9M15.4 7.5v5" />
    </>
  ),
  tailwind: (
    <path d="M3.5 10.5c1.3-3.4 3.4-4.4 6.2-3 1.6.8 2.3 2.3 4.4 2.3 1.7 0 2.8-.8 3.6-2.3M6.3 16.5c1.3-3.4 3.4-4.4 6.2-3 1.6.8 2.3 2.3 4.4 2.3 1.7 0 2.8-.8 3.6-2.3" />
  ),
  node: <path d="M12 2.8l8 4.6v9.2l-8 4.6-8-4.6V7.4z" />,
  mongo: (
    <>
      <path d="M12 2.5c3 4.2 4.6 6.9 4.6 10s-2.6 6.6-4.6 8.5c-2-1.9-4.6-5.4-4.6-8.5S9 6.7 12 2.5z" />
      <path d="M12 9v9" />
    </>
  ),
  python: (
    <>
      <path d="M12 3h-3a2 2 0 0 0-2 2v3h10v1.5H6.5A2.5 2.5 0 0 0 4 12v3" />
      <path d="M12 21h3a2 2 0 0 0 2-2v-3H7v-1.5h10.5A2.5 2.5 0 0 0 20 12V9" />
      <path d="M9.5 5.5h.01M14.5 18.5h.01" />
    </>
  ),
  docker: (
    <>
      <path d="M3 12.5h15c0 3-2 5-5 5H8c-3 0-5-2-5-5z" />
      <path d="M6 12.5v-3h3v3M9.5 12.5v-3h3v3M13 12.5v-3h3v3M9.5 9v-3h3v3" />
      <path d="M18.5 11c1.4-.6 2.4-.4 3 .4" />
    </>
  ),
  git: (
    <>
      <circle cx="7" cy="6" r="2.4" />
      <circle cx="7" cy="18" r="2.4" />
      <circle cx="17" cy="9" r="2.4" />
      <path d="M7 8.4v7.2M17 11.4c0 3-3 3.6-5.6 4.2" />
    </>
  ),
  bolt: <path d="M13.5 2.5L6 13.5h5l-.5 8L18 10.5h-5z" />,
  braces: (
    <path d="M9 4c-1.8 0-1.8 2.7-1.8 4S7.2 12 5.4 12c1.8 0 1.8 2.7 1.8 4s0 4 1.8 4M15 4c1.8 0 1.8 2.7 1.8 4s0 4 1.8 4c-1.8 0-1.8 2.7-1.8 4s0 4-1.8 4" />
  ),
  db: (
    <>
      <ellipse cx="12" cy="6" rx="7.5" ry="2.8" />
      <path d="M4.5 6v6c0 1.55 3.36 2.8 7.5 2.8s7.5-1.25 7.5-2.8V6M4.5 12v6c0 1.55 3.36 2.8 7.5 2.8s7.5-1.25 7.5-2.8v-6" />
    </>
  ),
  chip: (
    <>
      <rect x="7" y="7" width="10" height="10" rx="1.5" />
      <path d="M10 3v4M14 3v4M10 17v4M14 17v4M3 10h4M3 14h4M17 10h4M17 14h4" />
    </>
  ),
  server: (
    <>
      <rect x="3" y="4" width="18" height="6" rx="1.5" />
      <rect x="3" y="14" width="18" height="6" rx="1.5" />
      <path d="M7 7h.01M7 17h.01" />
    </>
  ),
  mail: (
    <>
      <rect x="2.5" y="5" width="19" height="14" rx="1.5" />
      <path d="M3 7l9 6 9-6" />
    </>
  ),
  monitor: (
    <>
      <rect x="3" y="4" width="18" height="13" rx="1.5" />
      <path d="M8 21h8M12 17v4" />
    </>
  ),
  code: <path d="M8.5 7L3.5 12l5 5M15.5 7l5 5-5 5" />,
  layers: (
    <>
      <path d="M12 3l9 4.5-9 4.5-9-4.5L12 3z" />
      <path d="M3 12.5l9 4.5 9-4.5M3 17l9 4.5 9-4.5" />
    </>
  ),
  wrench: (
    <path d="M15.5 3.5a5 5 0 0 0-4.6 7l-7 7 2.6 2.6 7-7a5 5 0 0 0 6.4-6.3l-3 3-2.7-2.7 3-3a5 5 0 0 0-1.7-.6z" />
  ),
  sliders: (
    <>
      <path d="M4 17h16M4 12h16M4 7h16" />
      <circle cx="9" cy="7" r="2" />
      <circle cx="15" cy="12" r="2" />
      <circle cx="8" cy="17" r="2" />
    </>
  ),
}

// Exact matches first — keys are lower-cased technology names.
// Dense glyphs need a lighter stroke to stay legible at 14px.
const LIGHT_STROKE = new Set(['react', 'docker', 'python', 'chip'])

const MARKS = {
  'react': { glyph: 'react' },
  'react.js': { glyph: 'react' },
  'react native': { glyph: 'react' },
  'next.js': { glyph: 'next' },
  'next.js api routes': { glyph: 'next' },
  'tailwind css': { glyph: 'tailwind' },
  'node.js': { glyph: 'node' },
  'mongodb': { glyph: 'mongo' },
  'python': { glyph: 'python' },
  'docker': { glyph: 'docker' },
  'github': { glyph: 'git' },
  'git': { glyph: 'git' },
  'fastapi': { glyph: 'bolt' },
  'rest apis': { glyph: 'braces' },
  'rest': { glyph: 'braces' },
  'mssql': { glyph: 'db' },
  'ms sql server': { glyph: 'db' },
  'ai': { glyph: 'chip' },
  'llm': { glyph: 'chip' },
  'machine learning': { glyph: 'chip' },
  'ollama': { glyph: 'chip' },
  'server configuration': { glyph: 'server' },
  'hostinger vps': { glyph: 'server' },
  'mail server configuration': { glyph: 'mail' },
  'go high level': { glyph: 'sliders' },

  // No recognisable logo — these get a glyph for the kind of thing they are,
  // which the chip label then names exactly.
  'asp.net': { glyph: 'server' },
  '.net': { glyph: 'server' },
  'express.js': { glyph: 'server' },
  'express': { glyph: 'server' },
  'rasdan': { glyph: 'monitor' },
  'svelte': { glyph: 'monitor' },
  'postgresql': { glyph: 'db' },
  'javascript': { glyph: 'code' },
  'typescript': { glyph: 'code' },
  'c#': { glyph: 'code' },
  'c++': { glyph: 'code' },
  'redux toolkit': { glyph: 'layers' },
  'rtk query': { glyph: 'layers' },
  'visual studio': { glyph: 'wrench' },
}

export default function TechMark({ name, size = 14, className = '' }) {
  const mark = MARKS[String(name).toLowerCase()]
  if (!mark) return null

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={LIGHT_STROKE.has(mark.glyph) ? 1.15 : 1.4}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      className={`inline-block flex-shrink-0 text-ink-mute ${className}`}
    >
      {GLYPHS[mark.glyph]}
    </svg>
  )
}
