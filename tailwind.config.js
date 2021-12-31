module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        secondary: {
          800: "#1C7B42",
          700: "#1F8748",
          600: "#21944F",
          500: "#24A056",
          400: "#27AC5C",
          300: "#2AB963",
          200: "#2DC56A"
        },
      },
      backgroundImage: theme => ({
        'hero': "linear-gradient(90deg, rgba(11,21,45,0.7) 0%, rgba(61,70,92,0.7) 100%), url(/assets/angel-bg.jpg);",
        'action': "linear-gradient(90deg, rgba(11,21,45,0.6) 0%, rgba(61,70,92,0.6) 100%), url(/assets/landscape-bg.jpg);",
       })
    },
  },
  plugins: [],
}
