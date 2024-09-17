
document.addEventListener('DOMContentLoaded', function() {
    // Event Section JavaScript
    const navLinks = document.querySelectorAll('.nav-box a');
    const contentBoxes = document.querySelectorAll('.event-content');

    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            
            // Hide all content boxes
            contentBoxes.forEach(box => box.style.display = 'none');
            
            // Remove active class from all nav links
            navLinks.forEach(nav => nav.classList.remove('active'));

            // Show the clicked content
            const targetId = this.getAttribute('data-content');
            const targetContent = document.getElementById(targetId);
            if (targetContent) {
                targetContent.style.display = 'block';
            }

            // Add active class to the clicked link
            this.classList.add('active');
        });
    });

    // Optionally, show the first event by default
    if (navLinks.length > 0) {
        navLinks[0].click(); // Trigger click on the first link
    }

    // Image Slider JavaScript
    const prevButton = document.querySelector('.prev-button');
    const nextButton = document.querySelector('.next-button');
    const imageSet = document.querySelector('.image-set');
    
    let index = 0;
    const images = document.querySelectorAll('.image-set img');
    const totalImages = images.length;

    function updateSlider() {
        const offset = -index * 100;
        imageSet.style.transform = `translateX(${offset}%)`;
    }

    prevButton.addEventListener('click', function() {
        index = (index <= 0) ? totalImages - 1 : index - 1;
        updateSlider();
    });

    nextButton.addEventListener('click', function() {
        index = (index >= totalImages - 1) ? 0 : index + 1;
        updateSlider();
    });

    
});