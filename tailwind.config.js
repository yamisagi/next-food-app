/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'food-image':
          "url('https://images.pexels.com/photos/1640773/pexels-photo-1640773.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
      },
      colors: {
        cream: '#FFF5E0',
        pinky: '#FF6969',
        'navy-red': '#C70039',
        'navy-blue': '#141E46',
      },
    },
  },
  plugins: [],
};
