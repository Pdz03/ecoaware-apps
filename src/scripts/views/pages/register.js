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
  },
};
export default Register;
