/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: "Roboto, sans-serif"
      },

      colors: {
        yellow: "#FFD836"
      },

      backgroundImage: {
        barbecue: "url(./src/assets/background.svg)"
      }
    }
  },
  plugins: []
};
