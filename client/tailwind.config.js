/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      maxWidth: {
        container: "1604px",
      },
      fontFamily: {
        dm: ["DM Sans", "sans-serif"],
      },
      colors: {
        primary: "#262626",
        secondary: "#767676",
        pure: "#fff",
        dope: "#c4c4c4",
        fade: "#FFFFFFB2",
        flat: "#F5F5F3",
        palet: "#F3F3F3",
        rare: "#2D2D2D",
        caret: "#2b2b2b",
        smoke: "#f0f0f0",
        valin: "#6D6D6D",
      },
      boxShadow: {
        "3xl": "0 35px 60px -15px rgba(0, 0, 0, 0.3)",
      },
    },
  },
  plugins: [],
};
