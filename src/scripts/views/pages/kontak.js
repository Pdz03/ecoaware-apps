import '../component/hero-element';
import { tambahanTemplate, pesanTemplate, followTemplate, gambawahTemplate } from '../templates/template-ecoaware';
import '../../../style/style.css';

const kontak = {
  async render() {
    const html = `
    <div class="kontak-atas">
      <div class="tambahan" id ="body-tambahan">
      </div>
      <div class="chat" id="body-pesan">
      </div>
       </div>
      <div class="follow" id="body-follow">
      </div>
      </div>
      <div class="gambawah" id="body-gambawah">
      </div>
          `;
    return html;
  },
  async afterRender() {
    const itemContainertambahan = document.querySelector('#body-tambahan');
    itemContainertambahan.innerHTML = tambahanTemplate();

    const itemContainerpesan = document.querySelector('#body-pesan');
    itemContainerpesan.innerHTML = pesanTemplate();

    const itemContainerfollow = document.querySelector('#body-follow');
    itemContainerfollow.innerHTML = followTemplate();

    const itemContainergambawah = document.querySelector('#body-gambawah');
    itemContainergambawah.innerHTML = gambawahTemplate();
  },
};
export default kontak;