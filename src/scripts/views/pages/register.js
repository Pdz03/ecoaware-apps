/* eslint-disable import/no-extraneous-dependencies */
import $ from 'jquery';
import toastr from 'toastr';
import 'toastr/build/toastr.css';
import { FormRegisterTemplate } from '../templates/template-ecoaware';

const Register = {
  async render() {
    const html = `
      <main>
      <div class="container h-50" id="form-register">
    </div>
    </main>
          `;
    return html;
  },
  async afterRender() {
    const itemContainer = document.querySelector('#form-register');
    itemContainer.innerHTML = FormRegisterTemplate();

    const inputName = document.getElementById('nama');
    const inputEmail = document.getElementById('email');
    const inputPass = document.getElementById('pass');

    const submitForm = document.querySelector('#register-btn');

    function validateEmail(email) {
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return regex.test(email);
    }

    function validateForm() {
      const nama = inputName.value;
      const email = inputEmail.value;
      const password = inputPass.value;

      if (nama.trim() === '' || email.trim() === '' || password.trim() === '') {
        toastr.error('Semua field harus diisi');
        return false;
      }

      if (!validateEmail(email)) {
        toastr.error('Format email tidak valid');
        return false;
      }

      return true;
    }

    function handleFormSubmit() {
      if (!validateForm()) {
        return;
      }

      const initValue = {
        name: inputName.value,
        email: inputEmail.value,
        pass: inputPass.value,
      };

      $.post('http://localhost:8080/user/add', initValue, (data) => {
        console.log(data);
        if (data.success) {
          toastr.success('User berhasil terdaftar, silakan login');
          window.location.href = '#/login';
        } else {
          toastr.error('Gagal mendaftar user');
        }
      });
    }

    // Tambahkan event listener pada saat form disubmit
    submitForm.addEventListener('click', handleFormSubmit);

    // submitForm.addEventListener('click', (event) => {
    //   event.preventDefault();

    //   const initValue = {
    //     name: inputName.value,
    //     email: inputEmail.value,
    //     pass: inputPass.value,
    //   };

    //   // $.post('http://localhost:8080/user/add', initValue, (data) => {
    //   //   console.log(data);
    //   // });

    //   $.post('http://localhost:8080/user/add', initValue, (data) => {
    //     console.log(data);
    //     if (data.success) {
    //       toastr.success('User berhasil terdaftar');
    //     } else {
    //       toastr.error('Gagal mendaftar user');
    //     }
    //   });

    //   // if (inputName.value === '' || inputEmail.value === '' || inputPass.value === '') {
    //   //   console.log('Ada data yang belum terisi!');
    //   // } else {
    //   //   console.log(initValue);
    //   // }
    // });
  },
};
export default Register;
