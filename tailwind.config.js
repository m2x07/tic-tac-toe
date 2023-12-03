/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/*.{js,jsx}",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    fontFamily: {
      display: "Edu NSW ACT Foundation, sans",
      mono: "Roboto Mono, monospace",
    },
    extend: {
      colors: {
        black: "#242424",
        white: '#FBFFFE',
        blue: {
          400: "#0099FF",
          500: "#008CEA"
        },
        vermillion: "#EF3E36",
        saffron: "#F9C639",
      },
    },
  },
  plugins: [],
};
