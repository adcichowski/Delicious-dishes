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
      },
    },
    variants: {
      extend: {},
    },
    plugins: [],
  },
};
