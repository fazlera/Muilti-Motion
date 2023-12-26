/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        GoogleFont: 'Playfair Display'
      }

    },
  },
  plugins: [
    require('flowbite/plugin'),
  ],

}

