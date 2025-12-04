import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './lib/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      container: { center: true, padding: '1.25rem', screens: { '2xl': '1100px' } },
      boxShadow: {
        soft: '0 10px 30px rgba(0,0,0,0.35)',
      },
      borderRadius: { xl: '1rem' },
    },
  },
  plugins: [],
}

export default config
