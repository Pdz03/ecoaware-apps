import { WelcomeTemplate } from '../templates/template-ecoaware';

const Welcome = {
  async render() {
    const html = `
      <main>
      <div id="welcome-container">
    </div>
    </main>
          `;
    return html;
  },
  async afterRender() {
    const itemContainer = document.querySelector('#welcome-container');
    itemContainer.innerHTML = WelcomeTemplate();
  },
};
export default Welcome;
