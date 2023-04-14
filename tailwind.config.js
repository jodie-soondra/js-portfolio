/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
      darkBlue: "#031322",
      blue: "#051A2B",
      brightOrange: "#FD4A05",
      pastelOrange: "#F46843",
      cream: "#FEE8DB",
    },
    fontFamily: {
      sans: ["Helvetica"],
    },
    display:["group-hover"],
  },
  screens: {
    xs: "480px",
    ss: "620px",
    sm: "768px",
    md: "1060px",
    lg: "1200px",
    xl: "1700px",
  },
  },
  plugins: [],
}

