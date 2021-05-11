'use strict';

// navbar
const navbar = document.querySelector('#navbar');

const navbarHeight = navbar.getBoundingClientRect().height;

const menu = document.querySelector('.navbar__menu__item');

document.addEventListener('scroll', () => {
  if (window.scrollY > navbarHeight) {
    navbar.classList.add('navbar__dark');
  } else {
    navbar.classList.remove('navbar__dark');
  }
});

// 클릭시 원하는 section으로 이동
document.addEventListener('click', (e) => {
  const linkname = e.target.dataset.name;
  const link = document.querySelector('#' + linkname);
  link.scrollIntoView({ behavior: 'smooth', block: 'center' });
});
