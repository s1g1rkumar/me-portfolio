/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cyber: {
          bg: "#060911",
          dark: "#0b101d",
          card: "#0f172a",
          cardHover: "#141e33",
          border: "#1e293b",
          borderGlow: "#00f0ff40",
          cyan: "#00f0ff",
          cyanGlow: "#00f0ff80",
          blue: "#2563eb",
          neonBlue: "#3b82f6",
          purple: "#9333ea",
          neonPurple: "#a855f7",
          green: "#10b981",
          gold: "#f59e0b",
          pink: "#ec4899",
          gray: "#64748b",
          lightGray: "#94a3b8",
          text: "#e2e8f0",
        }
      },
      fontFamily: {
        mono: ['"JetBrains Mono"', '"Space Mono"', 'monospace'],
        display: ['"Orbitron"', '"Rajdhani"', 'sans-serif'],
        sans: ['"Inter"', 'sans-serif'],
      },
      backgroundImage: {
        'grid-pattern': "linear-gradient(to right, rgba(0, 240, 255, 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(0, 240, 255, 0.05) 1px, transparent 1px)",
        'cyber-gradient': "linear-gradient(135deg, rgba(0, 240, 255, 0.15) 0%, rgba(147, 51, 234, 0.15) 100%)",
        'card-gradient': "linear-gradient(180deg, rgba(15, 23, 42, 0.8) 0%, rgba(11, 16, 29, 0.95) 100%)",
      },
      boxShadow: {
        'neon-cyan': '0 0 15px rgba(0, 240, 255, 0.4), inset 0 0 15px rgba(0, 240, 255, 0.1)',
        'neon-cyan-lg': '0 0 30px rgba(0, 240, 255, 0.6), inset 0 0 20px rgba(0, 240, 255, 0.2)',
        'neon-purple': '0 0 15px rgba(168, 85, 247, 0.4), inset 0 0 15px rgba(168, 85, 247, 0.1)',
        'neon-gold': '0 0 15px rgba(245, 158, 11, 0.4)',
        'cyber-card': '0 8px 32px 0 rgba(0, 0, 0, 0.5)',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'scanline': 'scanline 8s linear infinite',
        'float': 'float 4s ease-in-out infinite',
        'glow-pulse': 'glowPulse 2s ease-in-out infinite alternate',
      },
      keyframes: {
        scanline: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(1000%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glowPulse: {
          '0%': { opacity: '0.4', filter: 'drop-shadow(0 0 5px rgba(0,240,255,0.4))' },
          '100%': { opacity: '1', filter: 'drop-shadow(0 0 15px rgba(0,240,255,0.8))' },
        }
      }
    },
  },
  plugins: [],
}
