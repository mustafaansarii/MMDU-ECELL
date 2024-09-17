document.addEventListener('DOMContentLoaded', function () {
    const sliderContainer = document.querySelector('.slider-container');
    const prevButton = document.querySelector('.prev-button');
    const nextButton = document.querySelector('.next-button');
    const totalSlides = document.querySelectorAll('.image-set img').length;
    let currentIndex = 0;

    function updateSliderPosition() {
        const offset = -currentIndex * 100; // Calculate the offset based on the current index
        sliderContainer.style.transform = `translateX(${offset}%)`;
    }

    nextButton.addEventListener('click', () => {
        if (currentIndex < totalSlides - 1) {
            currentIndex++;
        } else {
            currentIndex = 0; // Loop back to the first slide
        }
        updateSliderPosition();
    });

    prevButton.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
        } else {
            currentIndex = totalSlides - 1; // Loop back to the last slide
        }
        updateSliderPosition();
    });
});
