/* eslint-disable import/no-extraneous-dependencies */
import $ from 'jquery';
import toastr from 'toastr';

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

    $.get('http://localhost:8080/user/check-session', (data) => {
      if (data.success) {
        // Jika sesi tersimpan, arahkan ke halaman dashboard
        toastr.error('Anda sudah login!');
        window.location.href = '#/dashboard';
      }
    });
  },
};
export default Welcome;
