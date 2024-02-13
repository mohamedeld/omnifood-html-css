const menuEl = document.querySelector(".header");
const buttonEl = document.querySelector(".btn-mobile-nav");

buttonEl.addEventListener('click', function() {
    menuEl.classList.toggle("nav-open");
});

const allLinks = document.querySelectorAll('a:link');

allLinks.forEach(function(link) {
    link.addEventListener('click', function(e) {
        const href = link.getAttribute('href');
        if (href === '#') {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            })
        }
        if (href !== '#' && href.startsWith('#')) {
            const sectionEl = document.querySelector(href);
            sectionEl.scrollIntoView({ behavior: 'smooth' })
        }
        if (link.classList.contains('main-nav-list')) {
            menuEl.classList.toggle('nav-open')
        }
    })
})
const heroSection = document.querySelector(".hero-section");
const observer = new IntersectionObserver(function(entries) {
    const ent = entries[0];
    if (ent.isIntersecting === false) {
        document.body.classList.add('sticky')
    }
    if (ent.isIntersecting === true) {
        document.body.classList.remove('sticky')
    }
}, {
    root: null,
    threshold: 0,
    rootMargin: '-80px'
});
observer.observe(heroSection);