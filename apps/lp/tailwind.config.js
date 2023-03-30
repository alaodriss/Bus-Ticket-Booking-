/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,tsx}"],
  theme: {
    extend: {
      backgroundImage:{
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-radial-hero": "radial-gradient(farthest-corner at 10% 50%, #ffffff 0%, #88A4BF 120%);",

      },
      fontFamily:{
        title :["'Montserrat'"]
      }
    },
  },
  plugins: [],
}