/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        ink: '#1c1a17',
        paper: '#faf8f5',
        sand: '#e8e1d6',
        clay: '#b5673a',
        olive: '#5c6650',
      },
      fontFamily: {
        sans: ['"Inter"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        serif: ['"Fraunces"', 'ui-serif', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
};
