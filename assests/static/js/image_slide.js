const slides = document.querySelectorAll('.slide');
const imageSlider = document.querySelector('.image-slider');
let currentSlide = 0;

function showNextSlide() {
    // Move to the next slide
    currentSlide = (currentSlide + 1) % slides.length;

    // Update the transform property to slide left
    imageSlider.style.transform = `translateX(-${currentSlide * 100}%)`;
}

// Show next slide every second
setInterval(showNextSlide, 1500);
