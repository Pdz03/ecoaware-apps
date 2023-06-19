/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-underscore-dangle */

import loginInit from '../../helpers/login-init';

const axios = require('axios');

class AppBar extends HTMLElement {
  connectedCallback() {
    this._verifyLogin();
    this._render();
  }

  _verifyLogin() {
    axios.get('http://localhost:8080/user/loginauth', { withCredentials: true })
      .then((response) => {
        const resdata = response.data.dataLogin;
        console.log(resdata);

        loginInit.init(resdata.id, resdata.level);
      })
      .catch((error) => {
        const appLog = this.querySelector('#app-log');
        const appGen = this.querySelector('#app-gen');
        appGen.removeAttribute('hidden', '');
        appLog.setAttribute('hidden', '');
        console.log(error);
      });
  }

  _render() {
    this.innerHTML = `
    <div class="appmob">
    <div class="title-bar">
    <a class="logo" href="">
      <img src="./icons/Logo.png" alt="Logo" />
    </a>
      <h2 class="title">EcoAware Apps</h2>
    </div>
    <div class="menumob">
    <div class="iconmenu" id="menu" aria-label="navigation-menu"><a href="#/" tabindex="0">&#9776;</a></div>
    </div>
    </div>
    <nav id="drawer" class="navmob">
    <ul class="navlistmob">
    <li class="navitemsmob" id="user-menumob"></li>
    <li class="navitemsmob" id="admin-menumob"></li>
    <li class="navitemsmob"><a href="#/home">Beranda</a></li>
    <li class="navitemsmob">
      <a href="#/ourstory">Tentang</a>
    </li>
    <li class="navitemsmob">
      <a href="#/kontak">Kontak</a>
    </li>
    <li class="navitemsmob" id="navmobuser">
    <a href="#/welcome"><img src="./icons/icon-profil.png"></a>
  </li>
  </ul>
    </nav>
    <nav class="nav">
    <div class="title-bar">
    <a class="logo" href="">
      <img src="./icons/Logo.png" alt="Logo" />
    </a>
      <h2 class="title">EcoAware Apps</h2>
    </div>
    <ul class="navlist">
    <li class="navitems" id="user-menu"></li>
    <li class="navitems" id="admin-menu"></li>
      <li class="navitems"><a href="#/home">Beranda</a></li>
      <li class="navitems">
        <a href="#/ourstory">Tentang</a>
      </li>
      <li class="navitems">
        <a href="#/kontak">Kontak</a>
      </li>
      <li class="navitems" id="app-log" hidden ><a id="user-app"><img src="./icons/icon-profil.png"></a></li>
      <li class="navitems" id="app-gen" ><a href="#/welcome"><img src="./icons/icon-profil.png"></a></li>
    </ul>
  </nav>
  <nav id="drawer-user" class="nav-user">
  </nav>
   `;
  }
}

customElements.define('app-bar', AppBar);
