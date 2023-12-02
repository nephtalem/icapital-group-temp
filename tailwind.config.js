/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-mulish)"],
      },
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
      animation: {
        scrollDown: "scrollDown 3s ease-in-out infinite",
      },
      keyframes: {
        scrollDown: {
          "0%": {
            bottom: "2.5rem",
          },
          "25%": {
            bottom: "1.5rem",
          },
          "50%": {
            bottom: "1.5rem;",
          },
          "75%": {
            bottom: "1.5rem",
          },
          "100%": {
            bottom: "2.5rem",
          },
        },
      },
    },
  },
  plugins: [],
};
