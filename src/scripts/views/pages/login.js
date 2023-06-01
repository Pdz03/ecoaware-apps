import { FormLoginTemplate } from '../templates/template-ecoaware';

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
    const itemContainer = document.querySelector('#form-login');
    itemContainer.innerHTML = FormLoginTemplate();

    const inputEmail = document.getElementById('email');
    const inputPass = document.getElementById('pass');

    const submitForm = document.querySelector('#login-btn');
    submitForm.addEventListener('click', (event) => {
      event.preventDefault();

      const initValue = {
        email: inputEmail.value,
        pass: inputPass.value,
      };

      if (inputEmail.value === '' || inputPass.value === '') {
        console.log('Ada data yang belum terisi!');
      } else {
        console.log(initValue);
      }
    });
  },
};
export default Login;
