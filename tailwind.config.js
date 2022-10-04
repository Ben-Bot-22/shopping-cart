/** @type {import('tailwindcss').Config} */

module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        first: '#F2789F',
        second: '#F999B7',
        third: '#F9C5D5',
        fourth: '#FEE3EC',
        accent: '#DB1B99'
      }
    }
  },
  plugins: [require('prettier-plugin-tailwindcss')]
}
