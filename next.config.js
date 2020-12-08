module.exports = {
   // basePath: '/interactive-projects',

   async rewrites() {
      return [
         {
            source: '/',
            destination: '/interactive-projects'
         }
      ]
}
}