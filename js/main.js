const burger = document.querySelector('.navbar-burger');
const dropDown = document.querySelector('.navbar-menu');

burger.addEventListener('click', () => {
    burger.classList.toggle('is-active');
    burger.classList.toggle('is-active');
    dropDown.classList.toggle('is-active');
})