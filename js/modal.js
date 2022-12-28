//listen for click event on modal-btn and close-btn
//when user click on modal-btn add .open-modal to modal-overlay 
//when user click on close-btn remove .open-modal to modal-overlay.
import { imagenes } from "../export/data.js";
export const contenedorModal = document.querySelector('.modal-proyect');
export const openBtn = document.querySelectorAll('.modal-btn');
export const closeBtn = document.querySelectorAll('.close-btn');
export const modal = document.querySelectorAll('.modal-overlay');

openBtn.forEach( btn => {
    btn.addEventListener('click', () => {
        modal.classList.add('open-modal');
    })
});

closeBtn.forEach( btn => {
    btn.addEventListener('click', () => {
        modal.classList.remove('open-modal')
    })
})

let fragment = '';

imagenes.forEach( img => {
    fragment += `
    <header class="banner border">
        <h2>Modal proyect</h2>
        <img src=${img.img}>
        <button class="btn modal-btn">
            open modal
        </button>
    </header>
    <div class="modal-overlay border">
        <div class="modal-container">
            <h3>modal content</h3>
            <img src=${img.img} alt="">
            <button class="btn close-btn">
                <i class='bx bx-x'></i>
            </button>
        </div>
    </div>
    `
})

contenedorModal.innerHTML = fragment;