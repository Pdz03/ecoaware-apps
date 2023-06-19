/* eslint-disable import/no-extraneous-dependencies */
import toastr from 'toastr';

import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import 'datatables.net';
import 'datatables.net-dt/css/jquery.dataTables.css';
import API_ENDPOINT from '../globals/api-endpoint';

const axios = require('axios');

const addArtikelInit = {
  init(authorId, authorName) {
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

    const today = new Date();
    const formattedDate = today.toISOString().substring(0, 10);
    const inputAuthor = document.getElementById('nama');
    const inputJudul = document.getElementById('judul');
    const fileInput = document.getElementById('file-input');
    // const inputIsi = editor.getData();
    const submitButton = document.getElementById('submit-btn');
    const imageContainer = document.getElementById('image-container');

    inputAuthor.value = authorName;

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
        formData.append('authorID', authorId);
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
            toastr.error('Gagal submit');
          });
      }
    });
  },
};

export default addArtikelInit;
