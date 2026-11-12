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
        // ── Navy blue premium palette (referência visual) ──
        navy: {
          950: '#040711',
          900: '#070b18',
          800: '#0c1221',
          700: '#111a30',
          600: '#162040',
          500: '#1e2d4a',
        },
        // Accent: electric blue
        electric: '#3b82f6',
        // Backward-compatible aliases
        darkBg: '#070b18',
        darkCard: '#0c1221',
        darkBorder: '#172042',
        techBlue: '#3b82f6',
        techCyan: '#06b6d4',
        techLightCyan: '#60a5fa',
        accentGlow: '#3b82f6',
        // Refined palette tokens
        canvas: '#070b18',
        surface: '#0c1221',
        surfaceElevated: '#111a30',
        surfaceHover: '#162040',
        hairline: '#172042',
        hairlineLight: '#1e3a6e',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'monospace'],
      },
      letterSpacing: {
        tighter: '-0.04em',
        tight: '-0.02em',
        widest: '0.15em',
      },
      boxShadow: {
        subtle: '0 1px 3px 0 rgba(0, 0, 0, 0.5)',
        card: '0 4px 24px -4px rgba(0, 0, 0, 0.5)',
        elevated: '0 12px 40px -8px rgba(0, 0, 0, 0.6)',
        'blue-glow': '0 0 40px -8px rgba(59, 130, 246, 0.25)',
        'blue-sm': '0 0 16px -4px rgba(59, 130, 246, 0.2)',
      },
    },
  },
  plugins: [],
}
