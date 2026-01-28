const header = document.getElementById("header");
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");
const toast = document.getElementById("toast");

window.addEventListener("scroll", () => {
    header.classList.toggle("scrolled", window.scrollY > 50);
});

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

function addToCart(product) {
    toast.textContent = product + " ditambahkan";
    toast.classList.add("show");
    setTimeout(() => toast.classList.remove("show"), 3000);
}