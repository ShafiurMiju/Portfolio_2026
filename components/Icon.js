// Thin line icons drawn on a 24px grid, inheriting currentColor.
// Kept stroke-only and geometric so they sit quietly next to serif type.

const PATHS = {
  // Disciplines
  frontend: (
    <>
      <rect x="3" y="4" width="18" height="14" rx="1.5" />
      <path d="M3 8h18M8 21h8" />
    </>
  ),
  backend: (
    <>
      <rect x="3" y="4" width="18" height="6" rx="1.5" />
      <rect x="3" y="14" width="18" height="6" rx="1.5" />
      <path d="M7 7h.01M7 17h.01" />
    </>
  ),
  database: (
    <>
      <ellipse cx="12" cy="6" rx="8" ry="3" />
      <path d="M4 6v6c0 1.66 3.58 3 8 3s8-1.34 8-3V6M4 12v6c0 1.66 3.58 3 8 3s8-1.34 8-3v-6" />
    </>
  ),
  languages: <path d="M9 7l-5 5 5 5M15 7l5 5-5 5" />,
  ai: (
    <>
      <rect x="7" y="7" width="10" height="10" rx="1.5" />
      <path d="M10 3v4M14 3v4M10 17v4M14 17v4M3 10h4M3 14h4M17 10h4M17 14h4" />
    </>
  ),
  devops: (
    <>
      <path d="M4 17h16M4 12h16M4 7h16" />
      <circle cx="9" cy="7" r="2" />
      <circle cx="15" cy="12" r="2" />
      <circle cx="8" cy="17" r="2" />
    </>
  ),

  // Platforms
  web: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3c2.5 2.7 3.8 5.7 3.8 9s-1.3 6.3-3.8 9c-2.5-2.7-3.8-5.7-3.8-9S9.5 5.7 12 3z" />
    </>
  ),
  mobile: (
    <>
      <rect x="7" y="2.5" width="10" height="19" rx="2" />
      <path d="M11 18.5h2" />
    </>
  ),
  desktop: (
    <>
      <rect x="3" y="4.5" width="18" height="12" rx="1.5" />
      <path d="M2 20h20" />
    </>
  ),
  // Braces read more clearly than a plug at 14–16px
  api: (
    <path d="M9 4c-1.8 0-1.8 2.7-1.8 4S7.2 12 5.4 12c1.8 0 1.8 2.7 1.8 4s0 4 1.8 4M15 4c1.8 0 1.8 2.7 1.8 4s0 4 1.8 4c-1.8 0-1.8 2.7-1.8 4s0 4-1.8 4" />
  ),
  watch: (
    <>
      <rect x="7" y="6" width="10" height="12" rx="2.5" />
      <path d="M9 6V3h6v3M9 18v3h6v-3" />
    </>
  ),

  // Meta
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3.5 2" />
    </>
  ),
  calendar: (
    <>
      <rect x="3.5" y="5" width="17" height="16" rx="1.5" />
      <path d="M3.5 10h17M8 3v4M16 3v4" />
    </>
  ),
  tag: (
    <>
      <path d="M3 12.5V4a1 1 0 0 1 1-1h8.5L21 11.5 12.5 20 3 12.5z" />
      <path d="M7.5 7.5h.01" />
    </>
  ),
  check: <path d="M4 12.5l5 5L20 6.5" />,
  arrowRight: <path d="M4 12h15M13 6l6 6-6 6" />,
  arrowUpRight: <path d="M7 17L17 7M8 7h9v9" />,
  arrowLeft: <path d="M20 12H5M11 6l-6 6 6 6" />,
  dot: <circle cx="12" cy="12" r="4" />,
}

export const PLATFORM_ICONS = {
  Web: 'web',
  API: 'api',
  iOS: 'mobile',
  Android: 'mobile',
  macOS: 'desktop',
  watchOS: 'watch',
}

export default function Icon({ name, size = 18, className = '', strokeWidth = 1.4 }) {
  const path = PATHS[name]
  if (!path) return null

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      className={`inline-block flex-shrink-0 ${className}`}
    >
      {path}
    </svg>
  )
}
