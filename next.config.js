const withTM = require('next-transpile-modules')(['gsap']);

module.exports = withTM({
    images: {
        loader: 'imgix',
        path: '',
    },
    // async redirects() {
    //     return [
    //         {
    //             source: '/',
    //             destination: '/work',
    //             permanent: true,
    //         },
    //     ]
    // },

})