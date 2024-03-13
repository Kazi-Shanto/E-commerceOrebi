/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        'container': '1600px',
        'container2': '1920px',
      },
      colors: {
        'primary': '#262626',
        'secondary': '#767676',
        'tertiary': '#FFFFFF',
        'quaternary': '#F5F5F3',
      },
      fontFamily: {
        'dm': ['DM Sans', 'sans-serif']
        
      },
      backgroundImage: {
        'bhome': "url('src/assets/kaziTech.png')",
      }
    },
   
  },
  plugins: [],
}