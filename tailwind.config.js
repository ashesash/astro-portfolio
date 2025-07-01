/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Be Vietnam Pro', 'system-ui', 'sans-serif'],
        serif: ['Gabarito', 'ui-serif', 'serif'],
      },
      colors: {
        primary: 'oklch(58.8% 0.158 241.966)',
        secondary:' oklch(25.7% 0.09 281.288)',
        neutral: '#94a3b8',
        white: '#F2F5F6',
        black: '#0e141b',
        primarylight: 'oklch(38.8% 0.158 241.966)',
        secondarylight: 'oklch(55.7% 0.09 281.288)',
        
      },
    },
  },
  plugins: [],
}
