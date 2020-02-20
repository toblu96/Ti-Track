module.exports = {
    title:          'Ti-Track',
    description:    'Bluetooth AoA Tracking System with CC2640R2 and BOOSTXL-AOA',

    themeConfig: {
        theme: '@vuepress/theme-default',

        logo:   'assets/img/Logo.png',
        nav: [
            { text: 'Hardware', link:   '/hardware/setup'},
            { text: 'Measurements', link:   '/measurements/'},
        ],
        searchPlaceholder: 'Search...',

        sidebar: {
            '/hardware/': [
              'setup',  /* /foo/one.html */
              'hardwareconfig',     /* /foo/ */
            ],
      
            '/measurements/': [
              '',      /* /bar/ */
            ],
      
            // // fallback
            // '/': [
            //   '',        /* / */
            // ]
        },
        smoothScroll: true,

        lastUpdated: 'Last Updated',

        plugins: [  '@vuepress/last-updated',
                    '@vuepress/back-to-top',
                ]
    },

    // only for webpack!
    configureWebpack: {
        resolve: {
            alias: {
                '@assets':   './assets'
            }
        },
    },

}