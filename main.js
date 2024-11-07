let nav = document.querySelector('nav');
let a_links = document.querySelectorAll('.a_links');
let hamburger = document.querySelector('.hamburger');

hamburger.addEventListener('click', () => {

    nav.classList.toggle('active');

    a_links.forEach((e) => {
        e.addEventListener('click', () => {
            nav.classList.remove('active');
        });
    });

});