/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#162235', // Azul escuro nobre da logo
          hover: '#1d2c44',
          night: '#0e1726',   // Preto azulado profundo das seções Milano
          black: '#090d14',
          gold: '#c5a880',    // Ouro champagne discreto de destaque
          goldLight: '#e4d2bc',
          surface: '#F8FAFC',
          card: '#FFFFFF',
          border: '#E2E8F0',
          muted: '#64748B',
        },
        things: {
          mist: '#F8FAFC',
          paper: '#FFFFFF',
          ink: '#162235',
          smoke: '#334155',
          ash: '#64748B',
          fog: '#94A3B8',
          border: '#E2E8F0',
        }
      },
      fontFamily: {
        sans: ['"Google Sans Flex"', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['"Google Sans Flex"', 'system-ui', '-apple-system', 'sans-serif'],
      },
      letterSpacing: {
        tightest: '-0.04em',
        tighter: '-0.02em',
        widest: '0.25em',
        mega: '0.35em',
      },
      boxShadow: {
        'milano': '0 20px 40px -15px rgba(22, 34, 53, 0.1)',
        'card': '0 4px 20px -2px rgba(0, 0, 0, 0.05)',
      },
      animation: {
        'fadeIn': 'fadeIn 0.4s ease-out forwards',
        'spin-slow': 'spin 30s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
