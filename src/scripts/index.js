import 'regenerator-runtime';
import '../style/style.scss';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';
import './views/component/app-bar';
import './views/component/hero-element';
import App from './views/app';

document.addEventListener('DOMContentLoaded', () => {
  const imageElements = document.querySelectorAll('.lazyload');
  const imageDirectory = './src/public/images/';

  imageElements.forEach((img, index) => {
    img.addEventListener('load', () => {
      img.classList.add('loaded');
    });

    img.addEventListener('error', () => {
      img.classList.add('error');
    });

    const src = `${imageDirectory}path-to-image-${index + 1}.jpg`;
    img.src = src;
  });
});

const app = new App({
  content: document.querySelector('#mainContent'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
});

const menu = document.querySelector('#menu');
const drawer = document.querySelector('#drawer');

menu.addEventListener('click', (event) => {
  drawer.classList.toggle('open');
  event.stopPropagation();
  event.preventDefault();
});
