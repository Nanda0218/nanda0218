const toast = document.getElementById('toast');
const toastMsg = document.querySelector('.toast-message');

function showToast(msg){
    toastMsg.textContent = msg;
    toast.classList.add('show');
    setTimeout(()=>toast.classList.remove('show'),3000);
}

// Ambil cart dari localStorage
function getCart(){
    return JSON.parse(localStorage.getItem('cart') || '[]');
}

// Simpan cart ke localStorage
function saveCart(cart){
    localStorage.setItem('cart', JSON.stringify(cart));
    renderCart();
}

// Tambah item ke cart
function addToCart(name, price = 0, img = ''){
    let cart = getCart();
    // Cek apakah item sudah ada
    let existing = cart.find(item => item.name === name);
    if(existing){
        existing.quantity += 1;
    }else{
        cart.push({name, price, img, quantity:1});
    }
    saveCart(cart);
    showToast(name + " ditambahkan ke keranjang");
}

// Hapus item
function removeItem(index){
    let cart = getCart();
    let removed = cart.splice(index,1);
    saveCart(cart);
    showToast(removed[0].name + " dihapus dari keranjang");
}

// Kosongkan cart
function clearCart(){
    if(confirm("Apakah Anda yakin ingin mengosongkan keranjang?")){
        localStorage.removeItem('cart');
        renderCart();
        showToast("Keranjang dikosongkan");
    }
}

// Update quantity item
function updateQuantity(index, value){
    let cart = getCart();
    if(value < 1) value = 1;
    cart[index].quantity = parseInt(value);
    saveCart(cart);
}

// Render cart
function renderCart(){
    const cartItems = document.getElementById('cartItems');
    const cartTotal = document.getElementById('cartTotal');
    const cart = getCart();

    if(cartItems){
        cartItems.innerHTML = '';
        let total = 0;

        if(cart.length === 0){
            cartItems.innerHTML = '<p>Keranjang kosong.</p>';
            cartTotal.innerHTML = '';
            return;
        }

        cart.forEach((item, index)=>{
            total += item.price * item.quantity;
            let div = document.createElement('div');
            div.className = 'cart-item';
            div.innerHTML = `
                <img src="${item.img}" alt="${item.name}">
                <div class="cart-item-details">
                    <h4>${item.name}</h4>
                    <p>Harga: Rp ${item.price.toLocaleString()}</p>
                    <div class="cart-quantity">
                        <label>Jumlah: </label>
                        <input type="number" min="1" value="${item.quantity}" onchange="updateQuantity(${index}, this.value)">
                    </div>
                </div>
                <div class="cart-actions">
                    <button class="btn btn-outline" onclick="removeItem(${index})"><i class="fas fa-trash"></i></button>
                </div>
            `;
            cartItems.appendChild(div);
        });

        cartTotal.innerHTML = `Total: Rp ${total.toLocaleString()}`;
    }
}

// Event tombol clear cart
const clearCartBtn = document.getElementById('clearCart');
if(clearCartBtn){
    clearCartBtn.addEventListener('click', clearCart);
}

// Render saat halaman load
document.addEventListener('DOMContentLoaded', renderCart);
