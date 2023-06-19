/* eslint-disable no-shadow */
/* eslint-disable import/no-extraneous-dependencies */
import $ from 'jquery';
import toastr from 'toastr';
import API_ENDPOINT from '../../globals/api-endpoint';
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

    $.get(API_ENDPOINT.checkSession, (data) => {
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

    axios.get(API_ENDPOINT.registerAuth, { withCredentials: true })
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

      axios.post(API_ENDPOINT.userLogin, initValue, { withCredentials: true })
        .then((response) => {
          toastr.success('Login berhasil');
          const resdata = response.data.dataLogin;
          console.log(resdata);

          loginInit.init(resdata.id, resdata.level);
          window.location.href = '#/dashboard';
        })
        .catch((error) => {
          toastr.error('Gagal login');
        });
    });
  },
};
export default Login;
