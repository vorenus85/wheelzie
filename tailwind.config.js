/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{vue, html,jsx,ejs,js}'],
  theme: {
    screens: {
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1200px',
      '2xl': '1920px'
    }
  },
  plugins: []
}
