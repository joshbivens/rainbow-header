const body = document.querySelector('body');
const header = document.querySelector('header');
const logo = document.querySelector('h1');
const nav = document.querySelector('ul');
const borders = document.querySelector('.borders');
const border = [...document.querySelectorAll('.border')];

window.onscroll = () => {
  // Shrink Header/Borders
  if(body.scrollTop > 100) {
    header.classList.add('shrink');
    logo.classList.add('shrink-logo');
    nav.classList.add('shrink-nav');
    borders.classList.add('shrink-borders');
  } else {
    header.classList.remove('shrink');
    logo.classList.remove('shrink-logo');
    nav.classList.remove('shrink-nav');
    borders.classList.remove('shrink-borders');
  }
}