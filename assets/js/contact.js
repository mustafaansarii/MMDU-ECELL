 // Form validation
 document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    let hasError = false;

    // Name validation
    const name = document.getElementById('name');
    const nameError = document.getElementById('nameError');
    if (name.value.trim() === '') {
        nameError.textContent = 'Name is required';
        name.classList.add('error');
        hasError = true;
    } else {
        nameError.textContent = '';
        name.classList.remove('error');
    }

    // Email validation
    const email = document.getElementById('email');
    const emailError = document.getElementById('emailError');
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (email.value.trim() === '') {
        emailError.textContent = 'Email is required';
        email.classList.add('error');
        hasError = true;
    } else if (!email.value.match(emailPattern)) {
        emailError.textContent = 'Please enter a valid email';
        email.classList.add('error');
        hasError = true;
    } else {
        emailError.textContent = '';
        email.classList.remove('error');
    }

    // Message validation
    const message = document.getElementById('message');
    const messageError = document.getElementById('messageError');
    if (message.value.trim() === '') {
        messageError.textContent = 'Message is required';
        message.classList.add('error');
        hasError = true;
    } else {
        messageError.textContent = '';
        message.classList.remove('error');
    }

    // If no errors, proceed with form submission or AJAX
    if (!hasError) {
        alert('Form submitted successfully!');
        // Here, you can proceed with form submission (AJAX request, etc.)
        document.getElementById('contactForm').reset(); // Reset the form
    }
});