/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#050511", // Deep Black/Purple
        secondary: "#11112b", // Rich Midnight Blue
        card: "rgba(255, 255, 255, 0.03)", // Glass
        accent: "#8b5cf6", // Violet Neon
        accentGlow: "#7c3aed", // Deep Violet Glow
        text: "#e2e8f0", // Light Slate
        muted: "#94a3b8", // Muted Slate
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-gradient': 'linear-gradient(to bottom, #050511, #0f0f2a)',
        'glass-gradient': 'linear-gradient(145deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.01) 100%)',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
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
