const {nextui} = require("@nextui-org/react");
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    "node_modules/preline/dist/*.js"
  ],
  theme: {
    extend: {
      fontFamily: {

      },
      backgroundColor: {
        'primaryColor': '#111b21',
        'secondaryColor': '#E8E8E8',
        'thirdColor': '#4FE89C',
      }
      ,
      textColor: {
        'primaryColor': '#4FE89C',
        'secondaryColor': '#111b21',
      },
      borderColor: {
        'primaryColor': '#4FE89C',
        'secondaryColor': '#111b21'
      },
    },
  },
  darkMode: "class",
  plugins: [
    require("preline/plugin"),
    nextui(),
  ],
}

