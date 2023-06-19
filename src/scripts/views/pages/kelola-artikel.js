/* eslint-disable no-shadow */
/* eslint-disable no-unused-vars */
/* eslint-disable import/no-extraneous-dependencies */
import $ from 'jquery';
import toastr from 'toastr';
import 'datatables.net';
import 'datatables.net-dt/css/jquery.dataTables.css';
import API_ENDPOINT from '../../globals/api-endpoint';

import {
  listArtikelAdminTemplate,
} from '../templates/template-ecoaware';

import ArtikelSource from '../../Data/artikelSource';

const axios = require('axios');

const kelolaArtikel = {
  async render() {
    const html = `
    <div id="main">
    <main id="content">
        <h1 class="dashboard" id="level"></h1>
        <hr>
        <div class="list-artikel" id="list-artikel">
        <h2>Daftar Artikel :</h2>
        <table id="table-artikel">
        <thead id="theadList">
        </thead>
        <form action="" method="post">
        <tbody id="listArtikelTable">
        </tbody>
        </form>
        </table>
        </div>
  </main>
  <button id="btn-logout" hidden>Logout</button>
  </div>
        `;
    return html;
  },
  async afterRender() {
    const listAllArtikel = await ArtikelSource.getAllArtikel();

    $.ajaxSetup({
      xhrFields: {
        withCredentials: true,
      },
    });

    $.get(API_ENDPOINT.checkSession, (data) => {
      if (!data.success) {
        // Jika tidak ada sesi tersimpan, arahkan ke halaman login
        toastr.error('Anda belum login!');
        window.location.href = '#/login';
      }
    });

    $.ajax({
      url: API_ENDPOINT.loginAuth,
      method: 'GET',
      success(response) {
        const resdata = response.dataLogin;
        console.log(resdata);
        if (resdata.level === 'a') {
          document.getElementById('level').innerHTML = `
        Dashboard Admin
        `;
          const theadList = document.querySelector('#theadList');
          theadList.innerHTML = `
        <tr>
        <th>Judul</th><th>Author</th><th>Tanggal</th><th>Status</th>
        </tr>
        `;

          const listArtikelContainer = document.querySelector('#listArtikelTable');

          listAllArtikel.forEach((data) => {
            listArtikelContainer.innerHTML += listArtikelAdminTemplate(data);
          });
          $('#table-artikel').on('click', '#terima-artikel', (event) => {
            const artikelId = $(event.target).data('id');

            console.log(artikelId);
            // Kirim permintaan DELETE ke backend
            $.ajaxSetup({
              xhrFields: {
                withCredentials: true,
              },
            });

            const initValue = {
              artikelID: artikelId,
              confirm: '1',
            };

            console.log(initValue);

            axios.post(
              API_ENDPOINT.confirmArtikel,
              initValue,
              { withCredentials: true },
            )
              .then((response) => {
                toastr.success('Artikel berhasil diterima');
                setTimeout(() => {
                  window.location.reload();
                }, 1000);
              })
              .catch((error) => {
                toastr.error('Gagal update');
              });
          });

          $('#table-artikel').on('click', '#tolak-artikel', (event) => {
            const artikelId = $(event.target).data('id');

            console.log(artikelId);
            // Kirim permintaan DELETE ke backend
            $.ajaxSetup({
              xhrFields: {
                withCredentials: true,
              },
            });

            const initValue = {
              artikelID: artikelId,
              confirm: '2',
            };

            console.log(initValue);

            axios.post(
              API_ENDPOINT.confirmArtikel,
              initValue,
              { withCredentials: true },
            )
              .then((response) => {
                toastr.success('Artikel berhasil diterima');
                setTimeout(() => {
                  window.location.reload();
                }, 1000);
              })
              .catch((error) => {
                toastr.error('Gagal update');
              });
          });
        }
      },
      error(error) {
        console.log(error);
      },
    });
  },
};
export default kelolaArtikel;
