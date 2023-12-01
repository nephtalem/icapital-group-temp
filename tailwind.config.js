/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        primary: "#253E5E",
        primaryLight: "#4A7DBC",
        accent: "#F78019",
        accentBorder: "#9f4e03",
        text: "#000000",
        text6: "#666666",
        textA: "#aaaaaa",
        grey: "#777777",
        white: "#FFFFFF",
        background: "#1a2b42",
        border: "#eee",
      },
    },
  },
  plugins: [],
};
