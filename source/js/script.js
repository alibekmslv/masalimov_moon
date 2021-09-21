'use strict';

const noJsElement = document.querySelector('.no-js');
noJsElement.classList.remove('no-js');

// Menu Related Vars
const mainHeaderElement = document.querySelector('.main-header');
const menuButtonElement = mainHeaderElement.querySelector('.menu-button');

// Menu
menuButtonElement.addEventListener('click', () => {
  mainHeaderElement.classList.toggle('main-header--open');
  menuButtonElement.classList.toggle('menu-button--open');
});

mainHeaderElement.addEventListener('click', (e) => {
  if (e.target.classList.contains('site-navigation__link')) {
    e.preventDefault();
    mainHeaderElement.classList.remove('main-header--open');
    menuButtonElement.classList.remove('menu-button--open');
    document.querySelector(e.target.hash).scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
  }
});
