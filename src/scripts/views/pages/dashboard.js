/* eslint-disable import/no-extraneous-dependencies */
import $ from 'jquery';
import toastr from 'toastr';

import { WelcomeUserTemplate, WelcomeAdminTemplate } from '../templates/template-ecoaware';

const axios = require('axios');

const Dashboard = {
  async render() {
    const html = `
    <div id="main">
    <main id="content">
        <h1 class="dashboard" id="level"></h1>
        <hr>
        <div class="welcome" id="welcome-log-container">

        </div>
  </main>
  <button id="btn-logout" hidden>Logout</button>
  </div>
        `;
    return html;
  },
  async afterRender() {
    const itemContainer = document.querySelector('#welcome-log-container');

    $.ajaxSetup({
      xhrFields: {
        withCredentials: true,
      },
    });

    $.get('https://backend-ecoaware.up.railway.app/user/check-session', (data) => {
      if (!data.success) {
        // Jika tidak ada sesi tersimpan, arahkan ke halaman login
        toastr.error('Anda belum login!');
        window.location.href = '#/login';
      }
    });

    axios.get('https://backend-ecoaware.up.railway.app/user/loginauth')
      .then((response) => {
        const resdata = response.data.dataLogin;
        console.log(resdata);
        if (resdata.level === 'a') {
          itemContainer.innerHTML = WelcomeAdminTemplate();
          document.getElementById('level').innerHTML = `
        Dashboard Admin
        `;
          document.getElementById('welcome-admin').innerHTML = `
        Selamat Datang, Admin!
        `;
        } else if (resdata.level === 'b') {
          itemContainer.innerHTML = WelcomeUserTemplate();
          document.getElementById('level').innerHTML = `
        Dashboard Kontributor
        `;
          document.getElementById('welcome-user').innerHTML = `
        Selamat Datang, ${resdata.name}!
        `;
        }
      })
      .catch((error) => {
        console.log(error);
      });
    // const itemContainer = document.querySelector('post-list');
    // itemContainer.innerHTML = '';
    // const { restaurants } = await PemadamSource.listResto();
    // itemContainer.value = restaurants;
  },
};
export default Dashboard;
