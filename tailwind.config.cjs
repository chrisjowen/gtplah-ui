// tailwind.config.js
const colors = require("tailwindcss/colors");

const config = {
  content: [
    "./src/**/*.{html,js,svelte,ts}",
    "./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}",
  ],
  theme: {
    fontFamily: {
      body: [
        // 'ui-sans-serif',
        'system-ui',
        // other fallback fonts
      ],
      sans: [
        // 'ui-sans-serif',
        'system-ui',
        // other fallback fonts
      ],
    },
    colors: {
      primary: colors.gray,
    },
  },

  plugins: [require("flowbite/plugin"),  require('@tailwindcss/typography')],
  darkMode: "class",
};

module.exports = config;
