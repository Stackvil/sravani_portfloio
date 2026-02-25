/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#020617", // Deep Obsidian Black
        secondary: "#0f172a", // Midnight Slate
        card: "rgba(30, 41, 59, 0.4)", // Frosted Navy
        accent: "#2563eb", // Bold Royal Blue
        accentGlow: "#3b82f6", // Vibrant Azure Glow
        text: "#f8fafc", // Ghost White
        muted: "#94a3b8", // Muted Slate
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-gradient': 'linear-gradient(to bottom, #020617, #0f172a)',
        'glass-gradient': 'linear-gradient(145deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.01) 100%)',
      },
      fontFamily: {
        sans: ['Outfit', 'Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          'from': { boxShadow: '0 0 10px -10px #8b5cf6' },
          'to': { boxShadow: '0 0 20px 5px #8b5cf6' },
        }
      },
    },
  },
  plugins: [],
}
