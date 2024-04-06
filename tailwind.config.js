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
        primary: "var(--color-button-primary)",
        secondary: "var(--color-button-secondary)",
        outline: "var(--color-button-outline)",
        "primary-hover": "var(--color-button-primary-hover)",
        "secondary-hover": "var(--color-button-secondary-hover)",
        "outline-hover": "var(--color-button-outline-hover)",

        skin: {
          primary: "var(--color-bg-primary)",
          secondary: "var(--color-text-secondary)",
        },
      },

      borderColor: {
        outline: "var(--color-button-primary)",
      },

      textColor: {
        primary: "var(--color-text-primary)",
        secondary: "var( --color-text-secondary)",
        "primary-hover": "var(--color-text-primary-hover)",
        "secondary-hover": "var( --color-text-secondary-hover)",
      },
    },
  },
  plugins: [],
};
