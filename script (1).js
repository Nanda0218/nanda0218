// Hamburger Menu
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');
hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.querySelector('i').classList.toggle('fa-bars');
    hamburger.querySelector('i').classList.toggle('fa-times');
});

// Toast
const toast = document.getElementById('toast');
const toastMsg = document.querySelector('.toast-message');
function showToast(message){
    toastMsg.textContent = message;
    toast.classList.add('show');
    setTimeout(()=> toast.classList.remove('show'),3000);
}

// Modal produk
const addProductModal = document.getElementById('addProductModal');
window.showAddProductForm = ()=> addProductModal.style.display='flex';
window.closeAddProductForm = ()=> addProductModal.style.display='none';

// Tambah produk dummy
window.addProduct = ()=>{
    const name = document.getElementById('prodName').value;
    const price = document.getElementById('prodPrice').value;
    const img = document.getElementById('prodImg').value;
    const desc = document.getElementById('prodDesc').value;

    if(!name||!price||!img||!desc) return showToast('Isi semua field!');
    const grid = document.getElementById('productGrid');
    const card = document.createElement('div');
    card.className = 'product-card';
    card.innerHTML = `
    <div class="product-image"><img src="${img}" alt="${name}"></div>
    <div class="product-info">
        <h3 class="product-title">${name}</h3>
        <p class="product-desc">${desc}</p>
        <div class="product-footer">
            <span class="price">Rp ${price}/kg</span>
            <button onclick="showToast('${name} ditambahkan!')">Tambah</button>
        </div>
    </div>`;
    grid.appendChild(card);
    closeAddProductForm();
    showToast('Produk berhasil ditambahkan!');
}

// Contact form dummy
document.getElementById('contactForm').addEventListener('submit',(e)=>{
    e.preventDefault();
    showToast('Pesan berhasil dikirim!');
    e.target.reset();
});
