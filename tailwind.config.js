/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx,html}"],
  theme: {
    extend: {
      colors: {
          swanWhite: "#d7d4d7",
          softBlack: "#0e1111",
      },
      fontFamily: {
        'tomorrow': ["tomorrow", 'Sans-serif'],
      },
      screens: {
        "sm" : "320px",
        "md" : "576px",
        "lg" : "768px",
        "xl" : "992px",
      }
    }
  },
  plugins: [],
}

