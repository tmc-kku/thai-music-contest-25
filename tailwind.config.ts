import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './pages/**/*.{ts,tsx}',
  ],
  theme: {
    container: { center: true, padding: '1rem' },
    screens: {
      xs: '360px',
      sm: '480px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    extend: {
      colors: {
        ci: {
          purple: '#4b174c',
          plum: '#752f77',
          gold: '#daca5e',
          yellow: '#f8e333',
          ink: '#0a0a0a',
        },
      },
      fontFamily: {
        sao: ['Sao Chingcha', 'Sarabun', 'Noto Sans Thai', 'system-ui', 'sans-serif'],
        kku: ['KKU 2555', 'Sarabun', 'system-ui', 'sans-serif'],
        sarabun: ['Sarabun', 'Noto Sans Thai', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 10px 25px rgba(0,0,0,.08)',
      },
    },
  },
  plugins: [],
}
export default config