/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#0f172a',
        cardBg: '#1e293b',
        accent: '#8b5cf6',
        accentLight: '#a78bfa',
        highlight: '#38bdf8',
        textMain: '#f8fafc',
        primary: '#22d3ee',
        textSecondary: 'rgba(255, 255, 255, 0.7)'
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.3s ease-out forwards',
      }
    },
  },
  plugins: [],
}
