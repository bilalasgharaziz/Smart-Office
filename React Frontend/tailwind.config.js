module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        blue_gray: {
          100: "#dad6d2",
          700: "#316e76",
          "100_01": "#d9d9d9",
          "700_01": "#2f6d75",
        },
        black: { 900: "#000000" },
        teal: { 900: "#07393c", "900_66": "#07393c66" },
        deep_orange: { 300: "#e3934f" },
        red: { 400: "#ef5757", "400_01": "#ed5857" },
        white: { A700: "#ffffff" },
        gray: { 100: "#f1f8f9" },
      },
      fontFamily: {
        merriweather: "Merriweather",
        merriweathersans: "Merriweather Sans",
      },
      boxShadow: { bs: "0px 4px  4px 0px #07393c66" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
