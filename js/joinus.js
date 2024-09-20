// Get elements
const openModalBtn = document.getElementById('openModal');
const closeModalBtn = document.getElementById('closeModal');
const modal = document.getElementById('joinModal');

// Function to open the modal
openModalBtn.addEventListener('click', function(e) {
    e.preventDefault(); // Prevent default link behavior
    modal.style.display = 'flex'; // Show modal
});

// Function to close the modal
closeModalBtn.addEventListener('click', function() {
    modal.style.display = 'none'; // Hide modal
});

// Close modal when clicking outside the modal content
window.addEventListener('click', function(e) {
    if (e.target === modal) {
        modal.style.display = 'none'; // Hide modal
    }
});

// Form validation
const form = document.getElementById('joinForm');
form.addEventListener('submit', function(event) {
    // Prevent form submission if invalid
    if (!form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
    }

    form.classList.add('was-validated');
});
