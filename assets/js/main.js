$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    dots:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:4
        }
    }
})
$('.testimonial_slider').owlCarousel({
    items:1,
    loop:true,
    margin:0,
    dots:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    
    }
})
var mixer = mixitup('.work');
