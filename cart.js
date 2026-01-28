let cart = JSON.parse(localStorage.getItem("cart")) || [];

window.addToCart = (name, price, image) => {
    cart.push({ name, price, image, qty: 1 });
    localStorage.setItem("cart", JSON.stringify(cart));
    showToast(name + " ditambahkan ke keranjang");
};
