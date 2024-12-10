/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./*.html"],
  theme: {
    screens: {
      sm: "576px",
      // => @media (min-width: 576px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "992px",
      // => @media (min-width: 992px) { ... }

      xl: "1200px",
      // => @media (min-width: 1200px) { ... }

      xxl: "1400px",
      // => @media (min-width: 1400px) { ... }
    },
    extend: {
      fontFamily: {
        // Add your custom fonts
        body: ["Inter", "sans-serif"],
        title: ["DM Sans", "sans-serif"],
      },

      colors: {
        'white': '#FFFFFF',
        'black': '#0D2825',
        'green': '#32B9A9',
        'gray-dark': '#606968',
        'gray-light': '#F1F5F5'
      },
    },
  },
  plugins: [],
};
