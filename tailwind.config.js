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
        "blue-1": "#84CDF0",
        "blue-2": "#8FB5F9",
        "green-3": "#56BD88",
      },
    },
  },
  plugins: [require("daisyui")],
};
