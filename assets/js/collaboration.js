$(document).ready(function(){
    $('.collaboration-slider').slick({
        slidesToShow: 4, // Number of logos to show at once
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 0, // Continuous sliding
        speed: 5000, // Duration for slide transition
        infinite: true, // Enable infinite scrolling
        dots: false,
        arrows: false,
        cssEase: 'linear', // Ensure linear movement for continuous sliding
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2, // Show 2 logos on tablet
                    slidesToScroll: 1,
                    dots: false
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1, // Show 1 logo on mobile
                    slidesToScroll: 1,
                    dots: false
                }
            }
        ]
    });
});