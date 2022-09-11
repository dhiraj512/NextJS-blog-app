/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1298ff",
        "primary-dark": "#338ed4",
      },
    },
    fontFamily: {
      sans: ["Signika Negative", "sans-serif"],
    },
  },
  // plugins: [
  //   plugin(function ({ addUtilities }) {
  //     addUtilities({
  //       ".body": {
  //         "@apply max-w-screen-sm mx-4 sm:mx-auto": {},
  //       },
  //     });
  //   }),
  // ],
};
