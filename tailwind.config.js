/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        eerieBlack: "#172121",
        charcoal: "#444554",
        taupeGray: "#7F7B82",
        roseQuartz: "#BFACB5",
        paleDogwood: "#E5D0CC",
      },
    },
  },
  plugins: [],
}