/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
     colors: {
      primary: "#ba68c8"
     },
     fontFamily: {
      inter: ['var(--font-inter)'],
      jost: ['var(--font-jost)'],
      righteous: ['var(--font-righteous)'],
      "permanent_marker": ['var(--font-permanent_marker)']
     },
    },
  },
  plugins: [],
}
