/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Be Vietnam Pro', 'system-ui', 'sans-serif'],
        serif: ['Gabarito', 'ui-serif', 'serif'],
      },
      colors: {
        primary: '#5755ff',
        neutral: '#94a3b8',
        white: '#e2e8f0',
        black: '#0e141b',
      },
    },
  },
  plugins: [],
}