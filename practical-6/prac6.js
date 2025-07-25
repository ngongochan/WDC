const ITEMS = [
    { title: 'Home', url: '/', submenus: [] },
    {
        title: 'About',
        url: '/about',
        submenus: [
            { title: 'Who we are', url: '/about#us' },
            { title: 'What we do', url: '/about#store' },
            { title: 'Our range', url: '/about#range' }
        ]
    },
    {
        title: 'Contact Us',
        url: '/contact',
        submenus: [
            { title: 'Information', url: '/contact#info' },
            { title: 'Returns', url: '/contact#return' },
            { title: 'Locate Us', url: '/contact#locate' }
        ]
    }
];

const STORES = [
    { name:'Adelaide City',  address:'45 Florabunda Lane, Adelaide, 5000', counter: 0, img:'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/11_Gloddaeth_Street%2C_Llandudno_shop_front.jpg/320px-11_Gloddaeth_Street%2C_Llandudno_shop_front.jpg' },
    { name:'Steelton South', address:'77 Weigall Avenue, Steelton, 5413',  counter: 0, img:'https://upload.wikimedia.org/wikipedia/commons/4/42/Well-shop-front.jpg' },
    { name:'Milton',         address:'33 McGregor Street, Milton, 5880',   counter: 0, img:'https://upload.wikimedia.org/wikipedia/en/thumb/e/e2/Greggs_store_front.JPG/320px-Greggs_store_front.JPG' }
];


/*

Top menu (task 1.5):

{ title:'Home',         url:'/' }
{ title:'About',        url:'/about' }
{ title:'Contact Us',   url:'/contact' }


Top menu 2 (task 1.7):

{ title:'Home', url:'/', submenus: [] }
{ title:'About', url:'/about',
    submenus: [
        { title:'Who we are',   url:'/about#us' },
        { title:'What we do',   url:'/about#store' },
        { title:'Our range',     url:'/about#range' }
    ]
}
{ title:'Contact Us',   url:'/contact',
    submenus: [
        { title:'Information',   url:'/contact#info' },
        { title:'Returns',   url:'/contact#return' },
        { title:'Locate Us',     url:'/contact#locate' }
    ]
}


Stores (task 1.8):

{ name:'Adelaide City',  address:'45 Florabunda Lane, Adelaide, 5000', counter: 0, img:'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/11_Gloddaeth_Street%2C_Llandudno_shop_front.jpg/320px-11_Gloddaeth_Street%2C_Llandudno_shop_front.jpg' },
{ name:'Steelton South', address:'77 Weigall Avenue, Steelton, 5413',  counter: 0, img:'https://upload.wikimedia.org/wikipedia/commons/4/42/Well-shop-front.jpg' },
{ name:'Milton',         address:'33 McGregor Street, Milton, 5880',   counter: 0, img:'https://upload.wikimedia.org/wikipedia/en/thumb/e/e2/Greggs_store_front.JPG/320px-Greggs_store_front.JPG' }

*/

const SPECIALS = [
    { name: 'Salt', price: '$0.99', url: 'https://upload.wikimedia.org/wikipedia/commons/7/7e/Korean_sea_salt.jpg' },
    { name: 'Pepper', price: '$2.49', url: 'https://live.staticflickr.com/191/449547916_ce1c87adeb_b.jpg' },
    { name: 'Tomato Sauce', price: '$3.50', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Fresh_Tomato_Sauce_%28Unsplash%29.jpg/640px-Fresh_Tomato_Sauce_%28Unsplash%29.jpg' },
    { name: 'Worchestershire Sauce', price: '$4.20', url: 'https://upload.wikimedia.org/wikipedia/commons/4/4c/Worcester_Sauce_001.jpg' }
];

const vueinst = new Vue({
    el: "#app",
    data: {
        choose: "Choose: ...",
        special: SPECIALS[0],
        show_ad: true,
        dark_mode: false,
        // "set its initial value to an array"
        // not "set its initial value to the INITAL VALUE of an array"
        // top_menu: ITEMS not top_menu: ITEMS[0]
        top_menu: ITEMS, 
        c_text:'type your comment here',
        c_arr: [],
        s_arr: STORES
    }
});

/* Replace the above code with this if using Vue 3

const vueinst = Vue.createApp({

}).mount('');

*/
