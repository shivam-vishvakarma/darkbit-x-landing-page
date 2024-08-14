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
        mainGradient:
          "linear-gradient(to right, #27A4FF, #3354FF 28%, #7433FF 50%, #F64ABB 79%, #FF7C33)",
      },
      keyframes: {
        inSlideUp: {
          "0%": { transform: "translateY(50%) scale(0.8)", opacity: 0 },
          "100%": { transform: "translateY(0)", opacity: 1 },
        },
        inLeft: {
          "0%": { transform: "translateX(-50%) scale(0.8)", opacity: 0 },
          "100%": { transform: "translateX(0)", opacity: 1 },
        },
        inSlideDown: {
          "0%": { transform: "translateY(-50%) scale(0.8)", opacity: 0 },
          "100%": { transform: "translateY(0)", opacity: 1 },
        },
        inRight: {
          "0%": { transform: "translateX(50%) scale(0.8)", opacity: 0 },
          "100%": { transform: "translateX(0)", opacity: 1 },
        },
        scrollSpin: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
    },
    animation: {
      inSlideUp: "inSlideUp 0.5s cubic-bezier(.49,-0.34,.49,1.58)",
      inLeft: "inLeft 0.5s cubic-bezier(.49,-0.34,.49,1.58)",
      inSlideDown: "inSlideDown 0.5s cubic-bezier(.49,-0.34,.49,1.58)",
      inRight: "inRight 0.5s cubic-bezier(.49,-0.34,.49,1.58)",
      scrollSpin: "scrollSpin 1s view infinite",
    },
  },
  plugins: [],
};
