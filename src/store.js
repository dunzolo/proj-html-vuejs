import { reactive } from 'vue';

export const store = reactive({
    array_foods: [
        {
            url_image: '/sushi-1.png',
            title: 'The best table in town',
            paragraph: 'Sed aenean egestas ut aliquam turpis mauris, molestie. Vitae tellus tempor sem id tempus neque, tellus turpis turpis. Morbi tortor id gravida aliquet.',
            label_button: 'Explore the menu'
        },
        {
            url_image: '/sushi-2.png',
            title: 'Perfect For Groups',
            paragraph: 'Quam eu proin sit massa condimentum. Volutpat non pulvinar aliquet nunc. Orci elementum in aliquet a gravida vivamus aliquam turpis vitae.',
            label_button: 'Buy avada today'
        },
        {
            url_image: '/sushi-3.png',
            title: 'Fresh produce everyday',
            paragraph: 'Hendrerit amet, volutpat leo non, commodo maecenas scelerisque tincidunt. Morbi vulputate morbi purus quisque sit sagittis orci elementum gravida.',
            label_button: 'Learn more about us'
        }
    ],
    array_critics: [
        {
            label_top: 'MARY MAXEY',
            title: 'THE GUARDIAN',
            paragraph: 'Non arcu mauris tortor ultrices mollis tellus euismod fermentum. Habitant amet tincidunt id sapien accumsan sed.',
            label_button: 'Read full article',
            url_image: '/info52x.jpg',
            is_first: true
        },
        {
            label_top: 'PATRICK MONROE',
            title: 'GLOBE AND MAIL',
            paragraph: 'Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Nulla porttitor accumsan tincidunt.',
            label_button: 'Read full article',
            url_image: '/info12x.jpg',
            is_first: false
        }
    ],
    array_news: [
        {
            title: 'THE BEST COFFEE IN TOWN',
            caption: 'By admin|January 7th, 2020|Categories: News',
            url_image: '/blog92x-1200x1375.jpg'
        },
        {
            title: 'DISCOVER OUR NEW MENU',
            caption: 'By admin|January 7th, 2020|Categories: News',
            url_image: '/blog72x-1200x1375.jpg'
        },
        {
            title: 'WE NOW ACCEPT SQUARE!',
            caption: 'By admin|January 7th, 2020|Categories: News',
            url_image: '/blog82x-1200x1375.jpg'
        }
    ],
    array_lists: [
        {
            title: 'HORS D\'OEUVRES',
            menu: [
                {
                    name: 'AHI SALMON NIGIRI',
                    price: '$48',
                    desc: 'Eget vulputate vitae quis rutrum blandit sed. Quam nulla sit lacinia.'
                },
                {
                    name: 'UMI MASU SALAD',
                    price: '$21',
                    desc: 'Mollis ornare sit sapien, sodales. Cursus duis proin semper quisque.'
                },
                {
                    name: 'TEMAKI WITH CRAB',
                    price: '$32',
                    desc: 'Ac vel, risus ornare senectus placerat duis amet dictumst tellus.'
                },
                {
                    name: 'CALIFORNIA ROLLS',
                    price: '$22',
                    desc: 'Ac vel, risus ornare senectus placerat duis amet dictumst tellus.'
                },
            ]
        },
        {
            title: 'MAIN COURSE',
            has_bg_image: true,
            menu: [
                {
                    name: 'BRAISED ABALONE',
                    price: '$52',
                    desc: 'Mollis ornare sit sapien, sodales. Cursus duis proin semper quisque.'
                },
                {
                    name: 'TWICE COOKED PORK',
                    price: '$21',
                    desc: 'Ac vel, risus ornare senectus placerat duis amet dictumst tellus.'
                },
                {
                    name: 'KUNG PAO CHICKEN',
                    price: '$32',
                    desc: 'Quis duis sit dictum aliquam a velit enim. Tellus in sit augue aliquam.'
                },
                {
                    name: 'CHAR SIU & SUSHIS',
                    price: '$48',
                    desc: 'Feugiat rhoncus ipsum tristique purus diam, et dolor molestie.'
                }
            ]
        },
        {
            title: 'DESSERTS',
            menu: [
                {
                    name: 'CHOCOLATE BALL CAKE',
                    price: '$13',
                    desc: 'In pellentesque in felis massa vehicula. In sed euismod ut.'
                },
                {
                    name: 'LIME PIE WITH CRUST',
                    price: '$14',
                    desc: 'Mollis ornare sit sapien, sodales. Cursus duis proin semper quisque.'
                },
                {
                    name: 'RASBERRY PEAR CAKE',
                    price: '$18',
                    desc: 'Eget vulputate vitae quis rutrum blandit sed. Quam nulla sit.'
                },
                {
                    name: 'CAFE\' AU LAIT',
                    price: '$6',
                    desc: 'Eget vulputate vitae quis rutrum blandit sed. Quam nulla sit.'
                }
            ]
        },
    ]
})