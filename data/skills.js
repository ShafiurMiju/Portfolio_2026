// Mirrors the Expertise / Task & Tools sections of the CV.
// Order matches the CV; the flat `techStack` feeds anywhere a chip list is needed.

export const skillGroups = [
  {
    icon: '⚛️',
    name: 'Frontend',
    blurb: 'React on the web and on device, sharing one component mindset.',
    skills: [
      'React.js',
      'Next.js',
      'React Native',
      'Tailwind CSS',
      'Redux Toolkit',
      'RTK Query',
      'Svelte',
    ],
  },
  {
    icon: '🟣',
    name: 'Backend',
    blurb: 'ASP.NET as the primary stack, Express and FastAPI alongside it.',
    skills: [
      'ASP.NET',
      'Express.js',
      'Node.js',
      'FastAPI',
      'REST APIs',
      'Radzen',
    ],
  },
  {
    icon: '🗄️',
    name: 'Database',
    blurb: 'Relational and document stores, whichever the product needs.',
    skills: ['MSSQL', 'MongoDB', 'PostgreSQL'],
  },
  {
    icon: '💻',
    name: 'Languages',
    blurb: 'Typed and untyped, managed and native.',
    skills: ['JavaScript', 'TypeScript', 'C#', 'Python', 'C++'],
  },
  {
    icon: '🤖',
    name: 'AI / ML',
    blurb: 'LLM-backed product features, including self-hosted inference.',
    skills: ['AI', 'Machine Learning', 'LLM', 'Ollama', 'FastAPI', 'Python'],
  },
  {
    icon: '⚙️',
    name: 'DevOps & Tools',
    blurb: 'Shipping, hosting and the servers underneath.',
    skills: [
      'Docker',
      'Hostinger VPS',
      'Server configuration',
      'Mail server configuration',
      'GitHub',
      'Visual Studio',
      'Go High Level',
    ],
  },
]

// Flat list of every skill, deduplicated.
export const techStack = Array.from(
  new Set(skillGroups.flatMap((group) => group.skills))
)
