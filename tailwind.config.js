/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.js"],
  theme: {
    extend: {},
    screens: {
      tablet: "768px",
      laptop: "1024px",
    },
  },
  darkMode: "media", // "media" → system default, "class" → manual
  plugins: [],
};
