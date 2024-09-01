/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,js,jsx,ts,tsx}', // adjust paths as needed
    './public/index.html', // or wherever your files are located
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('daisyui'),
  ],
};