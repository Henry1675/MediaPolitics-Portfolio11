// Change navbar on scroll
window.addEventListener("scroll", function () {
    const navbar = document.getElementById("navbar");
    if (window.scrollY > 80) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});
// Fade on Scroll (repeats every time)
const fadeElements = document.querySelectorAll('.fade-on-scroll');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        } else {
            entry.target.classList.remove('visible'); // allow repeat animation
        }
    });
}, { threshold: 0.2 });

fadeElements.forEach(el => observer.observe(el));
function toggleMenu() {
    document.querySelector("nav").classList.toggle("active");
}


