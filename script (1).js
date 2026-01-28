const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");
const toast = document.getElementById("toast");
const contactForm = document.getElementById("contactForm");

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

function addToCart(product) {
    showToast(product + " ditambahkan");
}

contactForm.addEventListener("submit", e => {
    e.preventDefault();
    showToast("Pesan berhasil dikirim");
    contactForm.reset();
});

function showToast(msg) {
    toast.textContent = msg;
    toast.style.display = "block";
    setTimeout(() => toast.style.display = "none", 3000);
}