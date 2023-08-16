/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}",
   "./src/app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily:{
      sans: ['Graphik', 'sans-serif'],

    },
    extend: {
      borderRadius: {
        '4xl': '2rem',
      },
    },
  },
  plugins: [],
}

