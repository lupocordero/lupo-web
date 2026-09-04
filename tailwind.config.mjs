/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        ink: '#171512',
        paper: '#faf8f4',
        line: '#dedad2',
        rust: '#a8542f',
      },
      fontFamily: {
        sans: ['"Inter"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        serif: ['"Fraunces"', 'ui-serif', 'Georgia', 'serif'],
      },
      letterSpacing: {
        widest2: '0.28em',
      },
    },
  },
  plugins: [],
};
