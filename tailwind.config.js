/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        walker: "walker 2s linear infinite",
      },
      keyframes: {
        walker: {
          "25%": { transform: "translateX(-75px)" },
          "50%": { transform: "translateX(0px)" },
          "75%": { transform: "translateX(+30px)" },
          "100%": { transform: "translateX(0)" },
        },
      },
    },
  },
  plugins: [],
};
