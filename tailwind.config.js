const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      ...colors,
      hpu: "#191950",
      primary: "#2E9CCA",
      dark: "#434A54",
      lightGray: "#AAB2BD",
      light: "#F5F7FA",
      danger: "#E9573F",
      success: "#28C71A",
      info: "#E4E904",
    },
    extend: {
      width: {
        128: "32rem",
      },
      height: {
        110: "28rem",
        128: "32rem",
      },
    },
    fontFamily: {
      roboto: ["Lato", "sans-serif"],
    },
  },
  plugins: [],
};
