const hamburgerElement = document.querySelector('#myButton');
const navElement = document.querySelector('.menu');


hamburgerElement .addEventListener ('click', () => {
    hamburgerElement.classList.toggle('open');
    navElement.classList.toggle('open');


} )

const rightNow = new Date();
document.querySelector('#year').textContent = rightNow.getFullYear();