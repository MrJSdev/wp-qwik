/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'sm': { 'min': '300px', 'max': '767px' },
        'md': { 'min': '768px', 'max': '1023px' },
        'lg': { 'min': '1024px', 'max': '1279px' },
        'xl': { 'min': '1280px' }
      },
      colors: {
        primary: '#0D3E81',
      },
    },
  },
  plugins: [],
}