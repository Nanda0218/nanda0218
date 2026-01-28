function addCart(item) {
    alert(item + " berhasil ditambahkan!");
}

document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Pesan berhasil dikirim!");
    this.reset();
});