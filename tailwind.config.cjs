/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        'dark-blue': '#31446B',
        'floral-white': '#FFF8F0',
        'dark-red': '#92140C',
        'deep-champagne': '#FFCF99',
        'emerald': '#0CCE6B'
      },
      fontFamily: {
        "open-sans": ['"Open Sans"'],
      },
    },
  },
  plugins: [],
};
