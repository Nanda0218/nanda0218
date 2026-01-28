function addCart(product) {
    alert(product + " berhasil ditambahkan!");
}

document.getElementById("contactForm").addEventListener("submit", function(e){
    e.preventDefault();
    alert("Pesan berhasil dikirim!");
    this.reset();
});