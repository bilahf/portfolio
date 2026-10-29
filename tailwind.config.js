/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Palet utama: Marvel Dark / JARVIS-inspired
        ink: '#04060c',
        navy: {
          950: '#070b14',
          900: '#0b1220',
          850: '#0f1728',
          800: '#131d33',
          700: '#1b2740',
        },
        charcoal: '#1a2233',
        arc: {
          DEFAULT: '#22d3ee', // cyan utama
          soft: '#67e8f9',
          deep: '#0891b2',
        },
        electric: '#3b82f6', // electric blue
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Rajdhani', 'Inter', 'sans-serif'],
        hud: ['"Share Tech Mono"', 'ui-monospace', 'monospace'],
      },
      boxShadow: {
        glow: '0 0 20px rgba(34, 211, 238, 0.25)',
        'glow-lg': '0 0 45px rgba(34, 211, 238, 0.35)',
        panel: '0 18px 45px -20px rgba(0, 0, 0, 0.9)',
      },
      keyframes: {
        'scan-line': {
          '0%': { transform: 'translateY(-110%)', opacity: '0' },
          '12%': { opacity: '1' },
          '88%': { opacity: '1' },
          '100%': { transform: 'translateY(110%)', opacity: '0' },
        },
        'ring-spin': {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' },
        },
        'ring-spin-reverse': {
          from: { transform: 'rotate(360deg)' },
          to: { transform: 'rotate(0deg)' },
        },
        'pulse-ring': {
          '0%': { transform: 'scale(0.85)', opacity: '0.7' },
          '100%': { transform: 'scale(1.25)', opacity: '0' },
        },
        'fade-up': {
          from: { opacity: '0', transform: 'translateY(18px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
      },
      animation: {
        'scan-line': 'scan-line 1.6s ease-in-out',
        'ring-spin': 'ring-spin 6s linear infinite',
        'ring-spin-reverse': 'ring-spin-reverse 9s linear infinite',
        'pulse-ring': 'pulse-ring 1.6s ease-out forwards',
        'fade-up': 'fade-up 0.6s ease-out both',
        'fade-in': 'fade-in 0.4s ease-out both',
      },
    },
  },
  plugins: [],
}
