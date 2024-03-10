/** @type {import('tailwindcss').Config} */
const { nextui } = require("@nextui-org/react");

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      Primary: "#BB84E8",
      Secondary: "#292040",
      Dark: "#141625",
      White: "#FDFDFD",
      Grey: "#7E8492",
      LightWhite: "#DEE1E6",
      transparent: 'transparent',
    },
    extend: {
    },
  },
  darkMode: "class",
  plugins: [nextui()]
}

