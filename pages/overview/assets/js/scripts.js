
var togglebtn = document.querySelector(".togglebtn");
var nav = document.querySelector(".nav-links");
var links = document.querySelector(".nav-links li");

togglebtn.addEventListener("click", function() {
    this.classList.toggle("click");
    nav.classList.toggle("open");
});

// ScrollReveal animations
ScrollReveal().reveal('#s1', {
    delay: 200,
    duration: 1000,
    distance: '50px',
    origin: 'bottom',
    opacity: 0,
    easing: 'ease-in-out',
    reset: true
});

ScrollReveal().reveal('#s2', {
    delay: 400,
    duration: 1000,
    distance: '50px',
    origin: 'left',
    opacity: 0,
    easing: 'ease-in-out',
    reset: true
});

ScrollReveal().reveal('#s3', {
    delay: 600,
    duration: 1000,
    distance: '50px',
    origin: 'right',
    opacity: 0,
    easing: 'ease-in-out',
    reset: true
});

ScrollReveal().reveal('#s4', {
    delay: 800,
    duration: 1000,
    distance: '50px',
    origin: 'top',
    opacity: 0,
    easing: 'ease-in-out',
    reset: true
});

