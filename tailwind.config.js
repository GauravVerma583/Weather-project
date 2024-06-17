/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        image: "url('/src/media/MicrosoftTeams-image.png')",
        left: "url('/src/media/MicrosoftTeams-image (3).png')",
      },
    },
  },
  plugins: [],
};
