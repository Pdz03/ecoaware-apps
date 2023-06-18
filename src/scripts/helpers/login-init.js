/* eslint-disable import/no-extraneous-dependencies */
import $ from 'jquery';
import toastr from 'toastr';

const loginInit = {
  init(authorId) {
    const userMenu = document.querySelector('#user-menu');
    const userMenuMob = document.querySelector('#user-menumob');
    userMenu.innerHTML = `
  <a href="#/input-artikel/${authorId}">+Tambah Artikel</a>
  `;
    userMenuMob.innerHTML = `
  <a href="#/input-artikel/${authorId}">+Tambah Artikel</a>
  `;

    const navUser = document.querySelector('#drawer-user');
    const navmobUser = document.querySelector('#navmobuser');
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

    const appUser = document.querySelector('#user-app');
    const appLog = document.querySelector('#app-log');
    const appGen = document.querySelector('#app-gen');
    const navuseritem = document.querySelector('.navlist-user');
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
  },
};

export default loginInit;
