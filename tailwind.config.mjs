/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        ink: '#141312',
        paper: '#f7f5f0',
        line: '#dedad2',
        rust: '#c3512b',
      },
      fontFamily: {
        sans: ['"Space Grotesk"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['"Space Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      letterSpacing: {
        widest2: '0.28em',
        tightest: '-0.04em',
      },
      fontSize: {
        // fluid, mobile-first display sizes
        'display-1': ['clamp(2.75rem, 6vw + 1rem, 7.5rem)', { lineHeight: '0.95', letterSpacing: '-0.03em' }],
        'display-2': ['clamp(2.25rem, 4.5vw + 1rem, 5rem)', { lineHeight: '0.98', letterSpacing: '-0.03em' }],
        'display-3': ['clamp(1.75rem, 2.5vw + 1rem, 3rem)', { lineHeight: '1.02', letterSpacing: '-0.02em' }],
      },
    },
  },
  plugins: [],
};
