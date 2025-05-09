/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "var(--font-century-gothic)",
          "Nunito",
          "Century Gothic",
          "CenturyGothic",
          "AppleGothic",
          "var(--font-mulish)",
          "sans-serif",
        ],
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
        backgroundAlt: "#fafafa",
        border: "#eee",
      },
      animation: {
        scrollDown: "scrollDown 3s ease-in-out infinite",
        fadeIn: "fadeIn 0.5s ease-in-out",
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
        fadeIn: {
          "0%": {
            opacity: "0",
            transform: "translateY(-10px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
