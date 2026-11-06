/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        darkBg: "#0B132B",
        darkCard: "#111C38",
        darkBorder: "#1E2D56",
        techBlue: "#3B82F6",
        techCyan: "#06B6D4",
        techLightCyan: "#38BDF8",
        accentGlow: "#00F5D4",
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['Fira Code', 'Courier New', 'monospace'],
      },
      boxShadow: {
        glow: '0 0 25px -5px rgba(56, 189, 248, 0.25)',
        cyanGlow: '0 0 25px -5px rgba(6, 182, 212, 0.3)',
      }
    },
  },
  plugins: [],
}
