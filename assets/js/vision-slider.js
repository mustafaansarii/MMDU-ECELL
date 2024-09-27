document.addEventListener('DOMContentLoaded', function() {
    const imageSet = document.querySelector('.image-slider'); // Select the image slider
    let index = 0;
    const totalImages = document.querySelectorAll('.image-slider .slide').length; // Get total number of images

    function updateSlider() {
        const offset = -index * 100; // Calculate the offset for sliding
        imageSet.style.transform = `translateX(${offset}%)`; // Apply the transformation
    }

    // Function for automatic sliding
    function autoSlide() {
        index = (index >= totalImages - 1) ? 0 : index + 1; // Increment index or reset to 0
        updateSlider(); // Update the slider position
    }

    // Set interval for auto sliding
    setInterval(autoSlide, 2000); // Change image every 3 seconds
});
