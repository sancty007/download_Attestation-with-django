/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./firstApp/templates/**/*.html", // Inclure tous les fichiers HTML dans le répertoire templates de firstApp et ses sous-répertoires
    "./firstApp/static/**/*.css",     // Inclure tous les fichiers CSS dans le répertoire static de firstApp et ses sous-répertoires
    "./firstApp/static/**/*.js",      // Inclure tous les fichiers JavaScript dans le répertoire static de firstApp et ses sous-répertoires
  ],
  theme: {
   
    extend: {
      fontFamily:{
        montsserat :["Montserrat", "sans-serif"],
        cinzel:['Cinzel Decorative', 'serif'],
        glacial:['Glacial Indifference', 'sans-serif']
      },
      colors:{
        'human':"#8EC74E"
      }
    },

    screens: {
      sm: "160px",
      // => @media (min-width: 640px) { ... }

      md: "549px",
      // => @media (min-width: 768px) { ... }

      lg: "880px",
      // => @media (min-width: 1024px) { ... }

      
    },
  },
  
  plugins: [],
}
