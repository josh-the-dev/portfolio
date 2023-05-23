/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        "dark-blue": "#081b29",
        "blue-green": "#007577",
        "blue-green-60": "#00757760",
      },
      fontFamily: {
        "open-sans": ['"Open Sans"'],
      },
    },
  },
  plugins: [],
};
