/* eslint-disable import/no-extraneous-dependencies */
import $ from 'jquery';
import toastr from 'toastr';
import 'datatables.net';
import 'datatables.net-dt/css/jquery.dataTables.css';
import API_ENDPOINT from '../../globals/api-endpoint';

import {
  listUserTemplate,
} from '../templates/template-ecoaware';

import ArtikelSource from '../../Data/artikelSource';

const kelolaArtikel = {
  async render() {
    const html = `
    <div id="main">
    <main id="content">
        <h1 class="dashboard" id="level"></h1>
        <hr>
        <div class="list-user" id="list-user">
        <h2>Data User :</h2>
        <table border="1" id="table-user">
        <thead id="theadList">
        </thead>
        <form action="" method="post">
        <tbody id="listUserTable">
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
    const listUser = await ArtikelSource.getUser();

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
        <th>Nama</th><th>Email</th><th>Password</th><th>aksi</th>
        </tr>
        `;

          const listUserContainer = document.querySelector('#listUserTable');

          listUser.forEach((data) => {
            listUserContainer.innerHTML += listUserTemplate(data);
          });

          $('#table-user').on('click', '#delete-user', (event) => {
            const userId = $(event.target).data('id');

            console.log(userId);
            // Kirim permintaan DELETE ke backend
            $.ajaxSetup({
              xhrFields: {
                withCredentials: true,
              },
            });

            $.ajax({
              url: API_ENDPOINT.deleteUser(userId),
              type: 'DELETE',
              success(response) {
                toastr.success('Artikel berhasil dihapus');
                setTimeout(() => {
                  window.location.reload();
                }, 1000);
              },
              error() {
                toastr.error('Gagal menghapus artikel');
              },
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
