'use strict';

const navbar = document.querySelector('#navbar');
const navbarItems = document.querySelectorAll('.navbar__menu__item');
const home = document.querySelector('.home__container');
const upBtn = document.querySelector('.upBtn');
const homeContact = document.querySelector('.home__contact');
const category = document.querySelector('.work__categories');
const project = document.querySelector('.project');
const projects = document.querySelectorAll('.project');
const projectContainer = document.querySelector('.work__projects');
const categoryBtn = document.querySelectorAll('.category__btn');

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
  navbarItems.forEach((item) => {
    if (e.target.dataset.name === item.dataset.name) {
      item.classList.add('active');
    } else {
      item.classList.remove('active');
    }
  });
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
  categoryBtn.forEach((category) => {
    if (e.target.dataset.filter === category.dataset.filter) {
      category.classList.add('active');
    } else {
      category.classList.remove('active');
    }
  });

  projectContainer.classList.add('animeOn');

  setTimeout(() => {
    projectContainer.classList.remove('animeOn');

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
  }, 200);
});
