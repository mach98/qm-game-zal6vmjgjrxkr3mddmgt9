/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: [
    './App.{js,jsx,ts,tsx}',
    './app/**/*.{js,jsx,ts,tsx}',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        primary: '#2364AA',
        lightBlue: '#E4F1FA',
        darkBlue: '#17478B',
        homeBg: '#F9F9F9',
        helpColor: '#51A2E0',
      },
    },
  },
  plugins: [],
};
