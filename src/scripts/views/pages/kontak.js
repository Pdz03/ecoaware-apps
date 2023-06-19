import { contactTemplate } from '../templates/template-ecoaware';
// import '../../../style/style.css';

const kontak = {
  async render() {
    const html = `
    <main class="kontak">
    <div class="kontak-atas" id="kontak-container">
      </div>
    </main>
          `;
    return html;
  },
  async afterRender() {
    const itemContainertambahan = document.querySelector('#kontak-container');
    itemContainertambahan.innerHTML = contactTemplate();
  },
};
export default kontak;
