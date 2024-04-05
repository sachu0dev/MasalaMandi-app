/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {colors:{
      "black": "#192a56",
      "dark-black" : "#091d26",
      "light-black": "#102937",
      "light-green" : "#124d54",
      "dark-green": "#094044",
      "light-orange": "#f9744b",
      "dark-orange": "#d84f2a",
      "light-cream" : "#e1d9cf",
      "dark-cream": "#d6c4b0",
      "light-gray": "#ededed",
      "dark-gray": "#ede6df",
      "lightgray": "#d3d3d3",
    },},
  },
  plugins: [],
}