module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      green: {
        100: "#BFF3CD",
        200: "#88C999",
        300: "#74B084",
        400: "#699F77",
        500: "#467B54",
      },
      white: {
        100: "#F8F8F8",
        200: "#F2F2F2",
        300: "#E6E6E6",
      },
      black: {
        900: "#2C2C2C",
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      xl: "1921px",
    },
    variants: {
      extend: {
        animation: {
          "pulse-slow": "bounce 1s ease-in infinite",
        },
      },
    },
    plugins: [],
    plugins: [require("@tailwindcss/forms")],
  },
};
