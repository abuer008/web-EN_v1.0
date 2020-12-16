const withTM = require('next-transpile-modules')(['gsap']);

module.exports = withTM({

   async rewrites() {
      return [
         {
            source: '/',
            destination: '/interactive-projects'
         }
      ]
   }
})