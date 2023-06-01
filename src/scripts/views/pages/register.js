/* eslint-disable import/no-extraneous-dependencies */
import $ from 'jquery';
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
    submitForm.addEventListener('click', (event) => {
      event.preventDefault();

      const initValue = {
        name: inputName.value,
        email: inputEmail.value,
        pass: inputPass.value,
      };

      $.post('http://localhost:8080/user/add', initValue, (data) => {
        console.log(data);
      });

      // if (inputName.value === '' || inputEmail.value === '' || inputPass.value === '') {
      //   console.log('Ada data yang belum terisi!');
      // } else {
      //   console.log(initValue);
      // }
    });
  },
};
export default Register;
