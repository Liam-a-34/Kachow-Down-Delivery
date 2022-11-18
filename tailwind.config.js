/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./index.html",
    "./veggy.html"
  ],
  theme: {
    fontFamily: {
      'Roboto': ["Roboto", "sans-serif"],
      'Bree': ["Bree Serif", "sans-serif"]
    },
    extend: {
      colors: {
        'info-grey': "rgb(101, 100, 100)",
        'header-grey': "rgb(31, 29, 29)",
        'off-white': "rgb(207, 203, 203)"
      }
    },
  plugins: [],
}
}
