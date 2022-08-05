/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: ["./src/**/*.{html,js}", "./src/**/*.{css,scss}", "./index.html", "index.html"],
  theme: {
    extend: {
      colors: {
        primary: {
          gold: "#F0B80D",
          black: "#101010",
          black2: "#000000",
          blue: "#5380EA",
          greyLight: "#515151",
          greyLight2: "#AAAAAA",
          clientBlueColor: "rgba(83, 128, 234, 0.6)",
          red: "#EB5939",
        },
      },
      fontFamily: {
        Inter: '"Inter", sans-serif',
      },
      fontSize: {
        '36px': "36px",
      },
      boxShadow: {
        'registerFormShadow': '0px 34px 44px -20px rgba(185, 206, 234, 0.25)',
      },
      screens: {
        'mobile-sm': '400px',
        '600px': '600px',
        '700px': '700px',
        '800px': '800px',
        '900px': '900px',
      },
    },
  },
  plugins: [],
}