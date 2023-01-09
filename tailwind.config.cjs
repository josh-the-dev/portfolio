/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        josh: {
          blue: {
            100: "#31446B",
            200: "#14142D",
          },
          sage: "#4D8A95",
          beige: "#D0CDB3",
          orange: "#DFB64C",
        },
      },
      fontFamily: {
        "open-sans": ['"Open Sans"'],
      },
    },
  },
  plugins: [],
};
