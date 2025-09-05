module.exports = {
  purge: ["./*.html", "./assets/**/*.js"],
  mode: "jit",
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "theme-color": "#361CC1",
        "theme-color-2": "#fe8464",
      },
    },
    container: {
      center: true,
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
