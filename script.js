const header = document.getElementById('header');
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');
const toast = document.getElementById('toast');
const toastMsg = document.querySelector('.toast-message');

window.addEventListener('scroll',()=>{
    header.classList.toggle('scrolled',window.scrollY>50);
});

hamburger.addEventListener('click',()=>{
    navLinks.classList.toggle('active');
});

function addToCart(name){
    showToast(name+" ditambahkan");
}

function showToast(msg){
    toastMsg.textContent=msg;
    toast.classList.add('show');
    setTimeout(()=>toast.classList.remove('show'),3000);
}
import { updateDoc, doc } from
"https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

window.updateStatus = async (id,status)=>{
    await updateDoc(doc(db,"orders",id),{status});
    alert("Status diperbarui");
};

