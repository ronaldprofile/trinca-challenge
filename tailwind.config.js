/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: "Roboto, sans-serif"
      },

      colors: {
        yellow: "#FFD836",
        input: "#E1FAEC",
        green: {
          100: "#34CB79"
        }
      },

      backgroundImage: {
        barbecue: "url(./src/assets/background.svg)"
      }
    }
  },
  plugins: []
};
