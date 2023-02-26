/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        indigo: {
          950: "#203271",
          1000: "#101C45",
        },
      },
    },
    fontFamily: {
      dm: ["DM Sans", "serif"],
      sanspro: ["Source Sans Pro", "sans-serif"],
    },
  },
  plugins: [],
};
