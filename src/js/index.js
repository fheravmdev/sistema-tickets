document.addEventListener('DOMContentLoaded', () => {
    app.use(express.static(__dirname + "/public/"));

    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('nav ul');

    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });
});
