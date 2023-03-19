/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
    './pages/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        nunito: 'Nunito, Arial, sans-serif',
        josefinSans: 'Josefin Sans, Arial, sans-serif'
      },
      colors: {
        primary: '#27DEBF'
      }
    },
  },
  plugins: [],
}
