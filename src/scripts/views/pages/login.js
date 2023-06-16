/* eslint-disable no-shadow */
/* eslint-disable import/no-extraneous-dependencies */
import $ from 'jquery';
import toastr from 'toastr';

import loginInit from '../../helpers/login-init';

import { FormLoginTemplate } from '../templates/template-ecoaware';

const axios = require('axios');

const Login = {
  async render() {
    const html = `
      <main>
      <div class="container h-50" id="form-login">
    </div>
    </main>
          `;
    return html;
  },
  async afterRender() {
    $.ajaxSetup({
      xhrFields: {
        withCredentials: true,
      },
    });

    $.get('https://backend-ecoaware.up.railway.app/user/check-session', (data) => {
      if (data.success) {
        // Jika sesi tersimpan, arahkan ke halaman dashboard
        toastr.error('Anda sudah login!');
        window.location.href = '#/dashboard';
      }
    });

    const itemContainer = document.querySelector('#form-login');
    itemContainer.innerHTML = FormLoginTemplate();

    const inputEmail = document.getElementById('email');
    const inputPass = document.getElementById('pass');

    axios.get('https://backend-ecoaware.up.railway.app/user/registerauth', { withCredentials: true })
      .then((response) => {
        const resdata = response.data;
        inputEmail.value = resdata;
      })
      .catch((error) => {
        console.log(error);
        inputEmail.value = '';
      });

    const submitForm = document.querySelector('#login-btn');
    submitForm.addEventListener('click', (event) => {
      event.preventDefault();

      const initValue = {
        email: inputEmail.value,
        pass: inputPass.value,
      };

      $.post('https://backend-ecoaware.up.railway.app/user/login', initValue)
        .done((data) => {
          if (data.success) {
            toastr.success('Login berhasil');

            loginInit.init();

            // Lanjutkan ke halaman berikutnya (misalnya halaman home)
            window.location.href = '#/dashboard';
          } else {
            toastr.error(data.message);
          }
        })
        .fail(() => {
          toastr.error('Gagal melakukan permintaan login');
        });
    });
  },
};
export default Login;
