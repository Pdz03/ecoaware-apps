import 'regenerator-runtime';
import '../style/style.scss';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';
import './views/component/app-bar';
import './views/component/hero-element';

const menu = document.querySelector('#menu');
const main = document.querySelector('main');
const drawer = document.querySelector('#drawer');

menu.addEventListener('click', (event) => {
  drawer.classList.toggle('open');
  event.stopPropagation();
  event.preventDefault();
});

main.addEventListener('click', () => {
  drawer.classList.remove('open');
});
