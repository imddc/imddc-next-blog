import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  darkMode: ['selector', '.theme-dark'],
  theme: {
    extend: {
      colors: {
        DEFAULT: 'var(--text-color)',
        background: 'hsl(var(--background))'
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
      },
      backgroundColor: {
        primary: 'var(--bg-color)'
      },
      textColor: {
        DEFAULT: 'var(--text-color)',
        primary: 'var(--text-color)',
        secondary: 'var(--color-secondary)'
      }
    }
  },
  plugins: []
}

export default config
