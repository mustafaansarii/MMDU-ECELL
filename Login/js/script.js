 // JavaScript to handle tab switching
 document.querySelectorAll('.tab-button').forEach(button => {
    button.addEventListener('click', () => {
        document.querySelectorAll('.tab-button').forEach(btn => btn.classList.remove('active'));
        document.querySelectorAll('.form-content').forEach(content => content.classList.remove('active'));
        
        button.classList.add('active');
        document.getElementById(button.getAttribute('data-tab') + '-form').classList.add('active');
    });
});

// JavaScript functions for forgot password
function showForgotPasswordForm() {
    document.querySelector('.tab-button[data-tab="forgot-password"]').click();
}

// Add additional JavaScript functions as needed