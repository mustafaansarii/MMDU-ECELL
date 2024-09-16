document.addEventListener('DOMContentLoaded', function () {

    const menuToggle = document.getElementById('menu-toggle');
    const navLinks = document.getElementById('nav-links');
    const links = document.querySelectorAll('.nav-box a');
    const contents = document.querySelectorAll('.event-content');

    menuToggle.addEventListener('click', function () {
        navLinks.classList.toggle('active');
    });
    links.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const contentId = this.getAttribute('data-content');
            contents.forEach(content => {
                if (content.id === contentId) {
                    content.style.display = 'block';
                } else {
                    content.style.display = 'none';
                }
            });
        });
    });
});



