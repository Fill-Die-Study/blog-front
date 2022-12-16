/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        firamono: ['Fira Mono', 'monospace']
      },
      screens: {
        full: '1919px'
      }
    }
  },
  plugins: []
};
