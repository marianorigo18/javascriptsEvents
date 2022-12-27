
export const contenedorBg = document.querySelector('.contenedor--js');
export const contenedorBgTwo = document.querySelector('.contenedor--js-two');
export const contenedorBgThree = document.querySelector('.contenedor--js-three');
export const contenedorBgFour = document.querySelector('.contenedor--js-four');
export const contenedorBgFive = document.querySelector('.contenedor--js-five');
export const contenedorBgSix = document.querySelector('.contenedor--js-six');
export const contenedorBgSeven = document.querySelector('.contenedor--js-seven');
export const contenedorBgEight = document.querySelector('.contenedor--js-eight');
export const contenedorBgNine = document.querySelector('.contenedor--js-nine');
export const contenedorBgTen = document.querySelector('.contenedor--js-ten input');
export const contenedorBgEleven = document.querySelector('.contenedor--js-eleven input');
export const contenedorBgTwelve = document.querySelector('.contenedor--js-twelve input');
export const contenedorBgThirtenn = document.querySelector('.contenedor--js-thirteen input');
export const contenedorBgFourteen = document.querySelector('.contenedor--js-fourteen input');
export const contenedorBgFourteenTwo = document.querySelector('.contenedor--js-fourteen');

contenedorBg.addEventListener('click', ()=> {
    contenedorBg.classList.toggle('red');
})

contenedorBgTwo.addEventListener('dblclick', ()=> {
    contenedorBgTwo.classList.toggle('red');
})

contenedorBgThree.addEventListener('mousedown', ()=> {
    contenedorBgThree.classList.toggle('red');
})

contenedorBgFour.addEventListener('mouseup', () => {
    contenedorBgFour.classList.toggle('red');
})

contenedorBgFive.addEventListener('mouseover', () => {
    contenedorBgFive.classList.toggle('red');
})

contenedorBgSix.addEventListener('mousemove', () => {
    contenedorBgSix.classList.toggle('red');
})

contenedorBgSeven.addEventListener('mouseout', () => {
    contenedorBgSeven.classList.toggle('red');
})

contenedorBgEight.addEventListener('mouseleave', () => {
    contenedorBgEight.classList.toggle('red');
})

contenedorBgNine.addEventListener('mouseenter', () => {
    contenedorBgNine.classList.toggle('red');
})

contenedorBgTen.addEventListener('focus', () => {
    contenedorBgTen.classList.toggle('red');
})

contenedorBgEleven.addEventListener('blur', () => {
    contenedorBgEleven.classList.toggle('red');
})

contenedorBgTwelve.addEventListener('keydown', () => {
    contenedorBgTwelve.classList.toggle('red');
})

contenedorBgThirtenn.addEventListener('keyup', () => {
    contenedorBgThirtenn.classList.toggle('red');
})

contenedorBgFourteen.addEventListener('keyup', e =>{
    if(e.keyCode === 13){
        const mensaje = document.createElement('P');
        mensaje.textContent = e.target.value;
        contenedorBgFourteenTwo.appendChild(mensaje)
        e.target.value = '';
    }
})