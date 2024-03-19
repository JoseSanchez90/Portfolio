/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}","./node_modules/flowbite/**/*.js"],
  "darkMode" : "class",
  theme: {
    extend: {},
  },
  plugins: [
    require("rippleui"),
    require('tailwindcss-animated'),
    require('flowbite/plugin'),
   ], 
  
}

