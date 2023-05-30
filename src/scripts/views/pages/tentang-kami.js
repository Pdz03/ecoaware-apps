import '../component/hero-element';
import { ourStoryTemplate } from '../templates/template-ecoaware';

const ourstory = {
  async render() {
    const html = `
      <hero-element></hero-element>
      <div class="temi" id="body-content">
      </div>
          `;
    return html;
  },
  async afterRender() {
    const itemContainer = document.querySelector('#body-content');
    itemContainer.innerHTML = ourStoryTemplate();
  },
};
export default ourstory;
