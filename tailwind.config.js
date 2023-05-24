/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    colors: {
      "light-beige": "#e7dfd8",
      "medium-beige": "#b7a99e",
      "medium-dark-beige": "#8b7d71",
      "dark-beige": "#654f3a",
      "darkest-beige": "#281f15",
    },
    backgroundColor: (theme) => ({
      ...theme("colors"),
    }),
  },
  plugins: [],
};
