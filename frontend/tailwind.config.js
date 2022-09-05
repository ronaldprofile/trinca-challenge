/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      flex: {
        "7": "7 1 0%",
        "8": "8 1 0%",
      },

      boxShadow: {
        "primary-focus": "0 0 0 3px #fea"
      },

      fontFamily: {
        sans: "Roboto, sans-serif"
      },

      colors: {
        yellow: "#FFD836",
        input: "#E1FAEC",
        label: "#6C6C80",
        green: {
          100: "#34CB79"
        }
      },

      backgroundImage: {
        barbecue: "url(/src/assets/background.svg)"
      }
    }
  },
  plugins: []
};
