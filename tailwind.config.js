/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        'on-surface': '#1A1C1E',
        'surface-variant': '#DDE3EA',
        'surface': '#F9F9FC',
        'on-surface-variant': '#41474D',
        'primary': '#006492',
        'surface-container': '#EDEEF1',
        'error-container': '#FFDAD6',
        'on-error-container': '#410002',
        'outline-variant': '#C1C7CE',
        'surface-container-high': '#E7E8EB',
        'outline': '#72787E',
        'surface-container-highest': '#E2E2E5',
        'on-primary': '#FFFFFF',
      },
    },
  },
  plugins: [],
};
