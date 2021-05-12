'use strict';

const navbar = document.querySelector('#navbar');
const home = document.querySelector('.home__container');
const upBtn = document.querySelector('.upBtn');
const homeContact = document.querySelector('.home__contact');
const category = document.querySelector('.work__categories');
const project = document.querySelector('.project');
const projects = document.querySelectorAll('.project');

const navbarHeight = navbar.getBoundingClientRect().height;
const homeHeight = home.getBoundingClientRect().height;
const homeTop = home.getBoundingClientRect().top;
document.addEventListener('scroll', () => {
  if (window.scrollY > navbarHeight) {
    navbar.classList.add('navbar__dark');
  } else {
    navbar.classList.remove('navbar__dark');
  }
});

// 클릭시 원하는 section으로 이동
navbar.addEventListener('click', (e) => {
  const linkname = e.target.dataset.name;
  const link = document.querySelector('#' + linkname);
  link.scrollIntoView({ behavior: 'smooth', block: 'center' });
});

homeContact.addEventListener('click', (e) => {
  const linkName = e.target.dataset.name;
  const link = document.querySelector('#' + linkName);
  link.scrollIntoView({ behavior: 'smooth' });
});

// home화면 흐려지기
document.addEventListener('scroll', () => {
  home.style.opacity = 3 - window.scrollY / homeHeight;
});

//up버튼

upBtn.addEventListener('click', () => {
  home.scrollIntoView({ block: 'center' });
});

// work( project )
category.addEventListener('click', (e) => {
  projects.forEach((project) => {
    if (
      e.target.dataset.filter == 'All' ||
      e.target.dataset.filter == project.dataset.type
    ) {
      project.classList.remove('hide');
    } else {
      project.classList.add('hide');
    }
  });
});
