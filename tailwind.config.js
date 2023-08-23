/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}",  
            "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      fontFamily: {
        'oswald': ['Oswald'],
        'qwitcher_grypen': ['"Qwitcher Grypen"'],
        'bebas_neue': ['"Bebas Neue"'],
        'fjalla_one' : ['"Fjalla_one"']
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}