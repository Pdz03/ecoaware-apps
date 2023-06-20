import 'regenerator-runtime';
import '../style/style.scss';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';
import './views/component/app-bar';
import './views/component/hero-element';
import App from './views/app';

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
const navitem = document.querySelector('.navlistmob');

menu.addEventListener('click', (event) => {
  drawer.classList.toggle('open');
  event.stopPropagation();
  event.preventDefault();
});

navitem.addEventListener('click', () => {
  drawer.classList.remove('open');
});
