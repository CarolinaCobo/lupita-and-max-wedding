/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.tsx", "./components/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        bouquet: {
          50: "#FDFBFC",
          100: "#F5EEF3",
          200: "#E7D4E1",
          300: "#D8B9CF",
          400: "#CA9FBD",
          500: "#BB85AB",
          600: "#A76192",
          700: "#854A74",
          800: "#613655",
          900: "#3D2235",
        },
      },
      fontFamily: {
        greatVibes: ["Great Vibes", "cursive"],
        body: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [],
};
