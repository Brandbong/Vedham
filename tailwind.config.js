/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'forest-green': '#0f2419',
        'pine-green': '#1a3b2e',
        'earth-brown': '#2a1810',
        'electric-orange': '#ff6b35',
        'pure-gold': '#ffd700',
        'electric-mint': '#00ffa1',
        'vibrant-coral': '#ff6b6b',
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #0f2419 0%, #2d4a3d 50%, #1e3329 100%)',
        'gradient-accent': 'linear-gradient(135deg, #ff6b35 0%, #ffd700 100%)',
        'gradient-mint': 'linear-gradient(135deg, #00ffa1 0%, #1a3b2e 100%)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
        'particle-float': 'particle-float 8s linear infinite',
        'shimmer': 'shimmer 2s infinite',
      },
      backdropBlur: {
        xs: '2px',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
  safelist: [
    'glow-orange',
    'glow-mint', 
    'glow-gold',
    'glow-coral',
    'hover:glow-orange',
    'hover:glow-mint',
    'hover:glow-gold',
    'hover:glow-coral',
    'gradient-text',
    'gradient-text-mint',
    'card-3d',
    'glass',
    'neon-border',
    'pulse-glow',
    'float',
    'reveal',
    'revealed',
    'btn-premium',
    'gpu-accelerated',
  ],
};