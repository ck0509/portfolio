// script.js
document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector('form');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent actual form submission for demo purposes
        alert('Thank you for reaching out!');
        form.reset(); // Reset form fields
    });
});
