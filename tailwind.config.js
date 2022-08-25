/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        head: '"Oxygen Mono", ui-monospace',
        body: 'Oxygen, ui-sans-serif',
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: false,
  },
}
