/* eslint-disable import/no-extraneous-dependencies */
import $ from 'jquery';
import toastr from 'toastr';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import 'datatables.net';
import 'datatables.net-dt/css/jquery.dataTables.css';
import API_ENDPOINT from '../../globals/api-endpoint';
import UrlParser from '../../routes/url-parser';

import { listArtikelTemplate, FormArtikelTemplate } from '../templates/template-ecoaware';

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
        <div class="list-artikel" id="list-artikel">
        <h2>Daftar Artikel :</h2>
        <table border="1" id="table-artikel">
        <thead>
        <tr>
        <th>Judul</th><th>Tanggal</th><th>Status</th><th>Aksi</th>
        </tr>
        </thead>
        <tbody id="listArtikelTable">
        </tbody>
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
    const listArtikel = await ArtikelSource.getArtikelCreated(url.id);

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
        } else if (resdata.level === 'b') {
          itemContainer.innerHTML = FormArtikelTemplate();
          let editor;
          ClassicEditor
            .create(document.querySelector('#isi'))
            .then((newEditor) => {
              editor = newEditor;
              console.log('Editor was initialized successfully:', newEditor);
            })
            .catch((error) => {
              console.error('Error initializing editor:', error);
            });
          document.getElementById('level').innerHTML = `
          Dashboard Kontributor
          `;

          const btnAdd = document.querySelector('#open-addartikel');
          btnAdd.addEventListener('click', (event) => {
            event.preventDefault();
            itemContainer.removeAttribute('hidden');
            btnAdd.setAttribute('hidden', '');
          });

          const today = new Date();
          const formattedDate = today.toISOString().substring(0, 10);
          const inputAuthor = document.getElementById('nama');
          const inputJudul = document.getElementById('judul');
          const fileInput = document.getElementById('file-input');
          // const inputIsi = editor.getData();
          const submitButton = document.getElementById('submit-btn');
          const imageContainer = document.getElementById('image-container');

          inputAuthor.value = resdata.name;

          fileInput.addEventListener('change', (event) => {
            const selectedFile = event.target.files[0];
            if (selectedFile) {
              const reader = new FileReader();
              reader.onload = (e) => {
                const imageUrl = e.target.result;
                imageContainer.innerHTML = `<img src="${imageUrl}" alt="Uploaded Image" />`;
              };
              reader.readAsDataURL(selectedFile);
            }
          });

          submitButton.addEventListener('click', (event) => {
            event.preventDefault();
            const selectedFile = fileInput.files[0];
            if (selectedFile) {
              const formData = new FormData();
              formData.append('image', selectedFile);
              formData.append('tanggal', formattedDate);
              formData.append('author', inputAuthor.value);
              formData.append('judul', inputJudul.value);
              formData.append('isi', editor.getData());

              console.log('File terpilih:', selectedFile);
              console.log(formData);

              // Kirim data ke server menggunakan metode POST (misalnya, menggunakan AJAX)
              // Pastikan URL endpoint, metode, dan pengaturan lainnya sesuai dengan backend Anda
              const config = {
                headers: {
                  'Content-Type': 'multipart/form-data',
                },
              };

              axios.post(API_ENDPOINT.postArtikel, formData, config)
                .then((response) => {
                  toastr.success('Artikel berhasil ter-submit, tunggu konfirmasi dari admin');
                  setTimeout(() => {
                    window.location.reload();
                  }, 1000);
                })
                .catch((error) => {
                  toastr.error('Gagal mendaftar user');
                });
            }
          });

          const listArtikelContainer = document.querySelector('#listArtikelTable');

          console.log(listArtikel);

          listArtikel.forEach((data) => {
            listArtikelContainer.innerHTML += listArtikelTemplate(data);
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
