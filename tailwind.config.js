/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      backgroundColor: {
        start: "rgb(214, 219, 220)",
        end: "rgb(255, 255, 255)",
      },
      textColor: {
        foreground: "rgb(0, 0, 0)",
      },
      colors: {
        customGreen: "#dbfff6",
        customDarkGreen : "#5DE694",
        customBrown: "#19211d",
      },
    },
  },
  plugins: [require("daisyui")],
};
