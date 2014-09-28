({
    block: 'page',
    title: 'Da!test',
    head: [
        {elem: 'meta', attrs: {name: 'description', content: 'datravel test page'}},
        {elem: 'meta', attrs: {name: 'viewport', content: 'width=device-width, initial-scale=1'}},
        {elem: 'css', url: '_index.css'}
    ],
    scripts: [{elem: 'js', url: '_index.js'}],
    content: [
        {
            block: 'header',
            content: [
                {
                    elem: 'line',
                    mix: {block: 'clearfix'},
                    content: [
                        {
                            block: 'logo-text',
                            mix: {
                                block: 'header',
                                elem: 'logo-text'
                            }
                        },
                        {
                            block: 'logo-image',
                            mix: {
                                block: 'header',
                                elem: 'logo-image'
                            }
                        },
                        {
                            block: 'search-form',
                            mix: {
                                block: 'header',
                                elem: 'search-form'
                            }
                        }
                    ]
                },
                {
                    block: 'main-menu',
                    items: ['HOME', 'BLOG', 'OUR PRODUCTS', 'ABOUT US', 'WHERE TO BUY', 'CONTACT US'],
                    mix: {
                        block: 'header',
                        elem: 'line'
                    }
                }
            ]
        },
        {
            block: 'content',
            content: [
                {
                    elem: 'main',
                    content: [
                        {
                            block: 'article',
                            content: [
                                {
                                    elem: 'h1',
                                    content: 'X-PLOSION'
                                },
                                {
                                    elem: 'h2',
                                    content: 'SODA FOR SUPERHEROES!'
                                },
                                {
                                    elem: 'h3',
                                    content: 'Try a healthy alternative to the current artificial drinks - your mind,' +
                                    ' body and tongue will thank you!'
                                },
                                {
                                    elem: 'p',
                                    content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
                                }
                            ]
                        },
                        {
                            block: 'carousel',
                            items: [
                                './carousel-images/1.png',
                                './carousel-images/2.png',
                                './carousel-images/3.png',
                                './carousel-images/1.png',
                                './carousel-images/2.png',
                                './carousel-images/3.png'
                            ]
                        }
                    ]
                },
                {
                    elem: 'aside',
                    content: [
                        {
                            block: 'box',
                            header: 'FOLLOW US',
                            content: {
                                block: 'social-icons'
                            }
                        },
                        {
                            block: 'box',
                            header: 'RANDOMLY SELECTED',
                            content: {
                                block: 'links-list',
                                items: [
                                    'X-Plosion is a hit in Japan',
                                    '3 new flavors added',
                                    'Check our new promo at Youtube',
                                    'We say no to artificial flavors',
                                    'X-Plosion and your health'
                                ]
                            }
                        },
                        {
                            block: 'box',
                            header: 'WHERE YOU CAN FIND US?',
                            content: [
                                {
                                    tag: 'b',
                                    content: 'X-Plosion Ltd'
                                },
                                '9 Danbury Road',
                                'Wilton',
                                'CT 06897'
                            ].map(function (item) {
                                    return {
                                        tag: 'p',
                                        content: item
                                    };
                                })
                        }
                    ]
                }
            ]
        }
    ]
})
