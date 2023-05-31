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
  },
};
export default Login;
