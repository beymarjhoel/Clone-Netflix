$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{ /* 600px ou menos, exibir 3 elementos */
            items:3
        },
        1000:{ /* 1000px ou mais, exibir 5 elementos */
            items:5
        }
    }
})