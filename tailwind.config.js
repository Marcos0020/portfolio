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
        // Deep bespoke neutral palette (eliminating oversaturated template blues)
        canvas: "#090a0f",
        surface: "#0f1118",
        surfaceElevated: "#151822",
        surfaceHover: "#1c202d",
        hairline: "#232838",
        hairlineLight: "#2e3447",

        // Backward-compatible aliases refined to neutral tones
        darkBg: "#090a0f",
        darkCard: "#0f1118",
        darkBorder: "#232838",
        techBlue: "#38bdf8",
        techCyan: "#0ea5e9",
        techLightCyan: "#7dd3fc",
        accentGlow: "#38bdf8",
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['Fira Code', 'JetBrains Mono', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'monospace'],
      },
      letterSpacing: {
        tighter: '-0.04em',
        tight: '-0.02em',
        widest: '0.15em',
      },
      boxShadow: {
        subtle: '0 1px 2px 0 rgba(0, 0, 0, 0.4)',
        card: '0 4px 20px -2px rgba(0, 0, 0, 0.5)',
        elevated: '0 12px 32px -4px rgba(0, 0, 0, 0.6)',
      }
    },
  },
  plugins: [],
}
