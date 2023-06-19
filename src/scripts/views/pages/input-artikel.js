/* eslint-disable import/no-extraneous-dependencies */
import $ from 'jquery';
import toastr from 'toastr';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import 'datatables.net';
import 'datatables.net-dt/css/jquery.dataTables.css';
import API_ENDPOINT from '../../globals/api-endpoint';
import CONFIG from '../../globals/config';
import UrlParser from '../../routes/url-parser';
import addArtikelInit from '../../helpers/addArtikel-init';
import listArtikelInit from '../../helpers/listArtikel-init';

import {
  listArtikelTemplate, listArtikelAdminTemplate, FormArtikelTemplate, FormEditArtikelTemplate,
} from '../templates/template-ecoaware';

import ArtikelSource from '../../Data/artikelSource';

const axios = require('axios');

const inputArtikel = {
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
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const itemContainer = document.querySelector('#form-artikel');
    const itemEditContainer = document.querySelector('#form-edit');
    const listArtikel = await ArtikelSource.getArtikelCreated(url.id);
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
        if (resdata.level === 'b') {
          itemContainer.innerHTML = FormArtikelTemplate();
          document.getElementById('level').innerHTML = `
          Dashboard Kontributor
          `;

          const btnAdd = document.querySelector('#open-addartikel');
          btnAdd.addEventListener('click', (event) => {
            event.preventDefault();
            itemContainer.removeAttribute('hidden');
            btnAdd.setAttribute('hidden', '');
          });

          addArtikelInit.init(url.id, resdata.name);

          const theadList = document.querySelector('#theadList');
          theadList.innerHTML = `
          <tr>
          <th>Judul</th><th>Tanggal</th><th>Status</th><th>Aksi</th>
          </tr>
          `;

          const listArtikelContainer = document.querySelector('#listArtikelTable');

          listArtikel.forEach((data) => {
            listArtikelContainer.innerHTML += listArtikelTemplate(data);
          });

          listArtikelInit.init();

          $('#table-artikel').on('click', '#edit-artikel', (event) => {
            const artikelId = $(event.target).data('id');

            console.log(artikelId);
            // Kirim permintaan DELETE ke backend
            $.ajaxSetup({
              xhrFields: {
                withCredentials: true,
              },
            });

            $.ajax({
              url: API_ENDPOINT.getDetailArtikel(artikelId),
              type: 'GET',
              success(res) {
                const detailArtikel = res.data[0];

                itemEditContainer.innerHTML = FormEditArtikelTemplate(detailArtikel);

                itemEditContainer.removeAttribute('hidden');

                let Editeditor;
                ClassicEditor
                  .create(document.querySelector('#isi-edit'))
                  .then((newEditor) => {
                    Editeditor = newEditor;
                    console.log('Editor was initialized successfully:', newEditor);
                  })
                  .catch((error) => {
                    console.error('Error initializing editor:', error);
                  });

                const todayEdit = new Date();
                const formattedEditDate = todayEdit.toISOString().substring(0, 10);
                const inputEditAuthor = document.getElementById('nama-edit');
                const inputEditJudul = document.getElementById('judul-edit');
                const imageEditContainer = document.getElementById('image-edit-container');
                const editButton = document.getElementById('update-btn');
                imageEditContainer.innerHTML = `<img src="${CONFIG.BE_URL}${detailArtikel.gambar}" alt="Uploaded Image" />`;

                editButton.addEventListener('click', (event) => {
                  event.preventDefault();

                  const initValue = {
                    artikelID: artikelId,
                    authorID: url.id,
                    tanggal: formattedEditDate,
                    author: inputEditAuthor.value,
                    judul: inputEditJudul.value,
                    isi: Editeditor.getData(),
                  };

                  axios.post(
                    API_ENDPOINT.editArtikel,
                    initValue,
                    { withCredentials: true },
                  )
                    .then((response) => {
                      toastr.success('Artikel berhasil ter-update, tunggu konfirmasi dari admin');
                      setTimeout(() => {
                        window.location.reload();
                      }, 1000);
                    })
                    .catch((error) => {
                      toastr.error('Gagal update');
                    });
                });

                console.log(detailArtikel);
              },
              error() {
                toastr.error('Gagal mengambil data artikel');
              },
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
export default inputArtikel;
