/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "35em",
      md: "50em",
      lg: "65em",
      xl: "80em",
    },
    fontSize: {
      sm: ["1rem", "1.5"],
      base: ["1.125rem", "1.5"],
      lg: ["1.375rem", "1.4"],
      xl: ["clamp(1.56rem, 0.79vw + 1.36rem, 1.8rem)", "1.3"],
      "2xl": ["clamp(1.95rem, 1.29vw + 1.63rem, 2.66rem)", "1.3"],
      "3xl": ["clamp(2.44rem, 2.02vw + 1.94rem, 3.2rem)", "1.2"],
      "4xl": ["clamp(3.05rem, 3.06vw + 2.29rem, 4.73rem)", "1.2"],
    },
    extend: {
      colors: {
        primary: {
          300: "#8b272c",
          400: "#700001",
        },
        neutral: {
          900: "#060606",
        },
      },
      backgroundImage: {
        body: "radial-gradient(farthest-corner circle at 50% 50%, #700001 0%, #1f0e0d 100%)",
      },
      fontFamily: {
        // "sans-1": ["Roboto", "system-ui", "sans-serif"],
        // "sans-2": ["Roboto Condensed", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
