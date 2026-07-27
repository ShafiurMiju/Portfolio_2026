/** @type {import('tailwindcss').Config} */
// Tailwind v4 reads the design tokens from `@theme` in styles/global.css.
// This file only declares where to scan for class names.
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './data/**/*.{js,ts}',
  ],
}
