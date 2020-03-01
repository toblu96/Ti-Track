module.exports = {
    title:          'Ti-Track',
    description:    'Bluetooth AoA Tracking System with CC2640R2 and BOOSTXL-AOA',

    plugins: [  
        [
            'vuepress-plugin-container',
            {
                type: 'right',
                defaultTitle: '',
            },
        ],
        [
          'vuepress-plugin-container',
          {
            type: 'theorem',
            before: info => `<div class="theorem"><p class="title">${info}</p>`,
            after: '</div>',
          },
        ],
        '@vuepress/back-to-top',
    ],

    themeConfig: {
        theme: '@vuepress/theme-default',

        logo:   '/assets/img/Logo.png',
        nav: [
            { text: 'Hardware', link:   '/hardware/setup'},
            { text: 'Measurements', link:   '/measurements/'},
        ],
        searchPlaceholder: 'Search...',

        sidebar: {
            '/hardware/': [
              'setup',
              'preparations',
            ],
      
            '/measurements/': [
              '',
            ],
      
            // // fallback
            // '/': [
            //   '',        /* / */
            // ]
        },
        smoothScroll: true,

        lastUpdated: 'Last Updated',
    },

}