/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html"],
  theme: {
    extend: {
      colors: {
        primary: {
          main: "#15151E",
          light: "#2B2B3B",
        },
      },
      backgroundImage: {
        mainGradient:"linear-gradient(to right, #27A4FF, #3354FF 28%, #7433FF 50%, #F64ABB 79%, #FF7C33)",
      },
    },
  },
  plugins: [],
};

