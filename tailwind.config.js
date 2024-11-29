/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}", "./index.html"],
  theme: {
    extend: {
      colors: {
        java: "#131619",
        grey: "#ABB8C4",
        backg: "#1A1D21",
      },
      fontFamily: {
        jakarta: '"Plus Jakarta Sans", sans-serif',
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
