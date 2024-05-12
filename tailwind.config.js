/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xtn: "321px",
      tn: "376px",
      xs: "480px",
      sm: "576px",
      md: "768px",
      lg: "992px",
      xl: "1200px",
      "2xl": "1400px",
      "3xl": "1600px",
    },
    extend: {
      colors: {
        "yellow-1": "#EBA02D",
        "sugar-1": "#645555",
        "dark-blue": "#101B37",
        "dark-blue-2": "#292929",
        "dark-blue-3": "#1A2D64",
        "blue-1": "#F1F6FD",
        "blue-2": "#7598BF",
        "blue-3": "#008ECC",
        "green-3": "#56BD88",
        "gray-1": "#A2A6B0",
      },
    },
  },
  plugins: [require("daisyui")],
};
