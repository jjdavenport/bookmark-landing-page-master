/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        error: "url('../src/assets/images/icon-error.svg')",
      },
      padding: {
        customClampBtn: "clamp(0.5rem, -0.0714rem + 1.1905vw, 1rem);",
        customClampBar: "clamp(0.5rem, -5.7857rem + 13.0952vw, 6rem);",
        customClamp: "clamp(0.5rem, -3.5rem + 8.3333vw, 4rem);",
      },
      gap: {
        customClampUl: "clamp(0.5rem, -1.2143rem + 3.5714vw, 2rem);",
      },
      backgroundPosition: {
        rightCustom: "95%, 90%",
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
