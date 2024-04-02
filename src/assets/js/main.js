import '../css/style.css'
import '../css/owl.carousel.min.css'
import '../css/owl.theme.default.min.css'
import '../js/jquery-3.6.0.min.js'
// import '../js/popper.min.js'
import '../js/main.js'
import '../js/owl.carousel.min.js'

// $(document).ready(function(){

    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        dot: true,
        // nav:true,
        // autoWidth:true,
        autoplay:true,
        autoplayTimeout:1000,
        autoplayHoverPause:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
    })

   
// });