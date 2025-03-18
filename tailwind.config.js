/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "foso-green": "#00A651",
        "foso-lightgreen": "#7CCFA8",
        "foso-green2": "#53B086",
        "foso-blue": "#1F69FF",
        "foso-lightblue": "#D4F4FF",
        "foso-background": "#E6FFEE",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
