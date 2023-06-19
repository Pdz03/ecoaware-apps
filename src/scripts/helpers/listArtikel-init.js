/* eslint-disable no-unused-vars */
/* eslint-disable import/no-extraneous-dependencies */
import $ from 'jquery';
import toastr from 'toastr';

import API_ENDPOINT from '../globals/api-endpoint';

const listArtikelInit = {
  init() {
    $('#table-artikel').on('click', '#delete-artikel', (event) => {
      const artikelId = $(event.target).data('id');

      console.log(artikelId);
      // Kirim permintaan DELETE ke backend
      $.ajaxSetup({
        xhrFields: {
          withCredentials: true,
        },
      });

      $.ajax({
        url: API_ENDPOINT.deleteDataArtikel(artikelId),
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
  },
};

export default listArtikelInit;
