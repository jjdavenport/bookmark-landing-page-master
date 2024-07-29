/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{html,js}"],
  theme: {
    extend: {
      padding: {
        customClamp: "clamp(0.5rem, -8.0714rem + 17.8571vw, 8rem)",
      },
      backgroundImage: {
        error: "url('./src/assets/images/icon-error.svg')",
      },
      fontFamily: {
        custom: ["rubik", "sans-serif"],
      },
      colors: {
        softBlue: "hsl(231, 69%, 60%)",
        softRed: "hsl(0, 94%, 66%)",
        grayishBlue: "hsl(229, 8%, 60%)",
        veryDarkBlue: "hsl(229, 31%, 21%)",
        grayishBlueBg: "hsl(229, 8%, 60%, 0.2)",
      },
    },
  },
  plugins: [],
};
