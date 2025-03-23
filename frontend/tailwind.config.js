/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        sidebar: "#f8e8e8",
        primary: "#293856",
        notecard: "#ffeee8",
        button: "#293856",
        buttontext: "#ffffff",
        input: "#ffdfd9",
      },
    },
  },
  plugins: [],
}