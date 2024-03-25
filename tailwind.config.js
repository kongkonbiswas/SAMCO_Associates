module.exports = {
  mode: "jit",
  content: ["./src/**/**/*.{js,ts,jsx,tsx,html,mdx}", "./src/**/*.{js,ts,jsx,tsx,html,mdx}"],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        white: { A700: "#ffffff" },
        blue_gray: { 900: "#343434" },
        cyan: { 300: "#54cbe9" },
        light_blue: { 100: "#b2efff" },
        black: { 900: "#000000" },
        gray: { 500: "#adacac" },
      },
      boxShadow: {},
      fontFamily: { bahnschrift: "Roboto", inter: "Roboto", kalam: "Roboto" },
      opacity: { 0.1: 0.1 },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
