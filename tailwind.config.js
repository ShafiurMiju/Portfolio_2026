/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#bb86fc',
          dark: '#8a2be2',
          light: '#cf6679',
          accent: '#03dac6',
        },
        dark: {
          DEFAULT: '#0a0a0a',
          lighter: '#1a0a2e',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['Space Grotesk', 'monospace'],
      },
      animation: {
        'float': 'float 20s ease-in-out infinite',
        'float-reverse': 'float 25s ease-in-out infinite reverse',
        'float-slow': 'float 30s ease-in-out infinite',
        'pulse-slow': 'pulse 2s ease-in-out infinite',
        'gradient-shift': 'gradientShift 3s ease infinite',
        'blink': 'blink 1s step-end infinite',
        'fade-in-up': 'fadeInUp 0.8s ease both',
        'scroll-down': 'scrollDown 2s ease-in-out infinite',
        'progress': 'progressAnimation 2s ease',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translate(0, 0) rotate(0deg)' },
          '33%': { transform: 'translate(50px, -50px) rotate(120deg)' },
          '66%': { transform: 'translate(-30px, 30px) rotate(240deg)' },
        },
        pulse: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.5', transform: 'scale(1.2)' },
        },
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        blink: {
          '0%, 50%': { opacity: '1' },
          '51%, 100%': { opacity: '0' },
        },
        fadeInUp: {
          from: {
            opacity: '0',
            transform: 'translateY(30px)',
          },
          to: {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        scrollDown: {
          '0%': { opacity: '1', top: '8px' },
          '50%': { opacity: '0.5', top: '20px' },
          '100%': { opacity: '0', top: '28px' },
        },
        progressAnimation: {
          from: { width: '0' },
        },
      },
      backgroundSize: {
        '200': '200% 200%',
      },
    },
  },
  plugins: [],
}
