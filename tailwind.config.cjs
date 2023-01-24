/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        'dark-blue': '#31446B',
        'floral-white': '#FFF8F0',
      },
      fontFamily: {
        "open-sans": ['"Open Sans"'],
      },
    },
  },
  plugins: [],
};
