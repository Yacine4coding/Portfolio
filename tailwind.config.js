/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#d8dbe2",
        secondary: "#373F51",
        blue: "#58a4b0",
        dimBlue: "#1B1B1E"
      },
      fontFamily: {
        Caesar: ["Caesar Dressing", "system-ui"],
        Space: ["Space Grotesk", "sans-serif"]
      },
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
};
