/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}",
   "./src/app/**/*.{js,jsx,ts,tsx}",
   "./src/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily:{
      sans: ['Graphik', 'sans-serif'],

    },
    colors:{
      'mainBlue':'#3684B2',
      'gold' : '#CBB26B',
      'white' : '#ffffff',
      'lightBlue' : '#0988d0',
      'darkBlue' : '#05486e',
      'lightGold' : '#dBc691',
      'red': 'rgb(220 38 38)'
    },
    extend: {
      borderRadius: {
        '4xl': '2rem',
      },
    },
  },
  plugins: [],
}

