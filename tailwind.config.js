/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        glass: {
          bg: "rgba(255, 255, 255, 0.03)",
          border: "rgba(255, 255, 255, 0.08)",
          highlight: "rgba(255, 255, 255, 0.15)",
        },
      },
      backdropBlur: {
        xs: "2px",
        'glass': "20px",
      },
      boxShadow: {
        'glass': "0 8px 32px 0 rgba(0, 0, 0, 0.37)",
        'glass-glow': "0 0 25px rgba(255, 255, 255, 0.1)",
      },
    },
  },
  plugins: [],
};
