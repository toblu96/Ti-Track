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
          { text: 'About', link:   '/about/aboutProject'},
          { text: 'Hardware', link:   '/hardware/setup'},
          { text: 'Measurements', link:   '/measurements/environment'},
        ],

        algolia: {
          apiKey: 'b7ea890fb4746ff075a9b2d996fcf649',
          indexName: 'ti-track'
        },
        searchPlaceholder: 'Search...',

        displayAllHeaders: true,
        sidebar: {
            '/about/': [
              'aboutProject',
              'bluetoothAoA',
            ],
            '/hardware/': [
              'setup',
              'preparations',
              'testsetup',
              'rtlsagent',
            ],
      
            '/measurements/': [
              'environment',
              'outdoor',
              'distance'
            ],
      
        },
        smoothScroll: true,

        lastUpdated: 'Last Updated',
    },

}