'use strict';

const noJsElement = document.querySelector('.no-js');
if (noJsElement) {
  noJsElement.classList.remove('no-js');
}

// Menu Related Vars
const mainHeaderElement = document.querySelector('.main-header');

// Menu
if (mainHeaderElement) {
  const menuButtonElement = mainHeaderElement.querySelector('.menu-button');
  if (menuButtonElement) {
    menuButtonElement.addEventListener('click', () => {
      mainHeaderElement.classList.toggle('main-header--open');
      menuButtonElement.classList.toggle('menu-button--open');
    });

    mainHeaderElement.addEventListener('click', (e) => {
      if (e.target.classList.contains('site-navigation__link')) {
        e.preventDefault();
        mainHeaderElement.classList.remove('main-header--open');
        menuButtonElement.classList.remove('menu-button--open');
        document.querySelector(e.target.hash).scrollIntoView({behavior: 'smooth', block: 'start', inline: 'nearest'});
      }
    });
  }
}

// Form Related Vars
const callbackFormElement = document.querySelector('.callback-form');

// Form Validation
const checkPhoneValidity = (phoneElement) => {
  const inputElement = phoneElement.parentNode;

  if (phoneElement.validity.patternMismatch) {
    inputElement.classList.add('input--invalid');
  } else {
    inputElement.classList.remove('input--invalid');
  }
};

const checkTextValidity = (textElement) => {
  const inputElement = textElement.parentNode;

  if (!textElement.validity.valid) {
    inputElement.classList.add('input--invalid');
  } else {
    inputElement.classList.remove('input--invalid');
  }
};

if (callbackFormElement) {
  const callbackFormPhoneElement = callbackFormElement.querySelector('[type="tel"]');
  const callbackFormUserNameElement = callbackFormElement.querySelector('[name="name"]');

  if (callbackFormPhoneElement && callbackFormUserNameElement) {
    callbackFormPhoneElement.addEventListener('input', () => {
      checkPhoneValidity(callbackFormPhoneElement);
    });

    callbackFormUserNameElement.addEventListener('input', () => {
      checkTextValidity(callbackFormUserNameElement);
    });
  }
}
