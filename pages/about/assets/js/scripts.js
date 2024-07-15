var togglebtn = document.querySelector(".togglebtn");
var nav = document.querySelector(".nav-links");
var links = document.querySelector(".nav-links li");

togglebtn.addEventListener("click", function() {
    this.classList.toggle("click");
    nav.classList.toggle("open");
});