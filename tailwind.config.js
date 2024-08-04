/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.{js,jsx,ts,tsx}', './app/**/*.{js,jsx,ts,tsx}','./components/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#2364AA',
        lightBlue: '#E4F1FA',
        darkBlue: '#17478B',
        homeBg: '#F9F9F9',
        helpColor: '#51A2E0',
        questionBox: '#00CBF7',
        questionBoxBg: '#DFF9FF',
      },
    },
  },
  plugins: [],
}

