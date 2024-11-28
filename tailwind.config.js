/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",              // Inclus le fichier index.html
    "./src/**/*.{js,ts,jsx,tsx}" // Inclus tous les fichiers dans src avec ces extensions
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require("tailwindcss-no-scrollbar")
  ],
};
