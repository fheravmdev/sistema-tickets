document.addEventListener('DOMContentLoaded', () => {
    console.log('Document is ready!');

    // Responsive Menu Toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('nav ul');

    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });
});