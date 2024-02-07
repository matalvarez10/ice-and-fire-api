/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        raleway: ['Raleway', 'sans'],
        lato: ['Lato','sans'],
    },
    screens: {
      'tablet': '640px',
      // => @media (min-width: 640px) { ... }

      'laptop': '1150px',
      // => @media (min-width: 1150px) { ... }

      '3xl': '1700px',
      // => @media (min-width: 1700px) { ... }
    },
    },
  },
  plugins: [],
}