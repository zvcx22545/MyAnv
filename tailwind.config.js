/** @type {import('tailwindcss').Config} */
export default  {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/lib/esm/**/*.js',
  ],
  theme: {
    extend: {
      backgroundColor:{
        'Pri':"#AD88C6",
        'Sec':"#E1AFD1",
      },
      colors: {
        'Third':"#FFE6E6",
        'Sec':"#E1AFD1",
        'blue': '#1fb6ff',
        'purple': '#7e5bef',
        'pink': '#ff49db',
        'orange': '#ff7849',
        'green': '#13ce66',
        'yellow': '#ffc82c',
        'gray-dark': '#273444',
        'gray': '#8492a6',
        'gray-light': '#d3dce6',
      },
      
    },
  },
  
  plugins: [
    require('tailwindcss-animated'),
    require("daisyui"),
    require('flowbite/plugin'),
  ],
}
