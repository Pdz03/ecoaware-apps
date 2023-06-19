/* eslint-disable import/no-extraneous-dependencies */
import $ from 'jquery';
import toastr from 'toastr';
// import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import 'datatables.net';
import 'datatables.net-dt/css/jquery.dataTables.css';
import API_ENDPOINT from '../../globals/api-endpoint';
// import CONFIG from '../../globals/config';
// import UrlParser from '../../routes/url-parser';
// import addArtikelInit from '../../helpers/addArtikel-init';
// import listArtikelInit from '../../helpers/listArtikel-init';

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
        <h2>Tambahkan Artikel Baru</h2>
        <button id="open-addartikel">Tambah Artikel</button>
        <div class="form-artikel" id="form-artikel" hidden>
        </div>
        <div class="form-artikel" id="form-edit" hidden>
        </div>
        <div class="list-artikel" id="list-artikel">
        <h2>Daftar Artikel :</h2>
        <table border="1" id="table-artikel">
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
    // const url = UrlParser.parseActiveUrlWithoutCombiner();
    // const itemContainer = document.querySelector('#form-artikel');
    // const itemEditContainer = document.querySelector('#form-edit');
    // const listArtikel = await ArtikelSource.getArtikelCreated(url.id);
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
        //   itemContainer.innerHTML = WelcomeAdminTemplate();
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
    // const itemContainer = document.querySelector('post-list');
    // itemContainer.innerHTML = '';
    // const { restaurants } = await PemadamSource.listResto();
    // itemContainer.value = restaurants;
  },
};
export default kelolaArtikel;
