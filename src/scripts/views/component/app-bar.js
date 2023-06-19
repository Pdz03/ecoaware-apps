/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-underscore-dangle */
import $ from 'jquery';
import toastr from 'toastr';

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
        const userMenu = this.querySelector('#user-menu');
        const userMenuMob = this.querySelector('#user-menumob');
        userMenu.innerHTML = `
      <a href="#/input-artikel">+Tambah Artikel</a>
      `;
        userMenuMob.innerHTML = `
      <a href="#/input-artikel">+Tambah Artikel</a>
      `;

        const navUser = this.querySelector('#drawer-user');
        const navmobUser = this.querySelector('#navmobuser');
        navUser.innerHTML = `
        <ul class="navlist-user">
          <li class="navitems-user"><img src="./icons/icon-dashboard.png" class="icon-user" alt="icon-dashboard">
            <a href="#/home">Dashboard</a></li>
          <li class="navitems-user"><img src="./icons/icon-profile.png" class="icon-user" alt="icon-profile">
            <a href="#/ourstory">Profil</a></li>
          <li class="navitems-user"><img src="./icons/icon-logout.png" class="icon-user" alt="icon-logout">
            <a id="btn-logout">Keluar</a></li>
          <li class="navitems-close"><a id="cls-navitem">Tutup ></a>
        </ul>
        `;

        navmobUser.innerHTML = `
          <li class="navitemsmob">
            <a href="#/home">Dashboard</a>
            </li>
          <li class="navitemsmob">
            <a href="#/ourstory">Profil</a>
            </li>
          <li class="navitemsmob">
            <a id="btn-logout">Keluar</a>
            </li>
        `;

        const appUser = this.querySelector('#user-app');
        const appLog = this.querySelector('#app-log');
        const appGen = this.querySelector('#app-gen');
        const navuseritem = this.querySelector('.navlist-user');
        const clsnavItem = document.querySelector('#cls-navitem');

        appGen.setAttribute('hidden', '');
        appLog.removeAttribute('hidden', '');

        appUser.addEventListener('click', (event) => {
          navUser.classList.toggle('open');
          event.stopPropagation();
          event.preventDefault();
        });

        navuseritem.addEventListener('click', () => {
          navUser.classList.remove('open');
        });

        clsnavItem.addEventListener('click', () => {
          navUser.classList.remove('open');
        });

        const btnLogout = document.querySelectorAll('#btn-logout');

        btnLogout.forEach((btn) => {
          btn.addEventListener('click', () => {
            $.ajaxSetup({
              xhrFields: {
                withCredentials: true,
              },
            });

            $.post('http://localhost:8080/user/logout')
              .done((data) => {
                if (data.success) {
                  toastr.success('Logout berhasil');

                  userMenu.innerHTML = '';
                  userMenuMob.innerHTML = '';
                  navUser.innerHTML = '';
                  // Lanjutkan ke halaman berikutnya (misalnya halaman home)
                  window.location.href = '#/login';
                } else {
                  toastr.error(data.message);
                }
              })
              .fail(() => {
                toastr.error('Gagal melakukan permintaan logout');
              });
          });
        });
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
      <li class="navitems"><a href="#/home">Beranda</a></li>
      <li class="navitems">
        <a href="#/ourstory">Tentang</a>
      </li>
      <li class="navitems">
        <a href="#/kontak">Kontak</a>
      </li>
      <li class="navitems" id="app-log" ><a id="user-app"><img src="./icons/icon-profil.png"></a></li>
      <li class="navitems" id="app-gen" ><a href="#/welcome"><img src="./icons/icon-profil.png"></a></li>
    </ul>
  </nav>
  <nav id="drawer-user" class="nav-user">
  </nav>
   `;
  }
}

customElements.define('app-bar', AppBar);
