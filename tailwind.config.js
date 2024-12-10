/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./*.html"],
  theme: {
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      xxl: "1536px",
      // => @media (min-width: 1536px) { ... }
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
