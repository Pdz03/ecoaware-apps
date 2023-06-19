import { profilset } from '../templates/template-ecoaware';
import '../../../style/style.css';

const Profil = {
  async render() {
    const html = `
      <main class="Profil">
        <div class="setting" id="setting-container"></div>
      </main>
    `;
    return html;
  },
  async afterRender() {
    const settingContainer = document.querySelector('#setting-container');
    settingContainer.innerHTML = profilset();

    const tanggalLahirToggle = document.querySelector('#tanggalLahirToggle');
    const tanggalLahirContainer = document.querySelector('#tanggalLahirContainer');

    tanggalLahirToggle.addEventListener('click', function() {
      tanggalLahirContainer.style.display = tanggalLahirContainer.style.display === 'none' ? 'block' : 'none';
    });

    const gantiPassword = document.querySelector('#gantiPassword');
    const passwordContainer = document.querySelector('#passwordContainer');

    gantiPassword.addEventListener('click', function() {
      passwordContainer.style.display = passwordContainer.style.display === 'none' ? 'block' : 'none';
    });

    const profileForm = document.querySelector('#profileForm');
    profileForm.addEventListener('submit', function(event) {
      event.preventDefault();

      // Ambil nilai input dari form
      const nama = document.querySelector('#nama').value;
      const tanggalLahir = document.querySelector('#tanggal_lahir').value;
      const email = document.querySelector('#email').value;

      // Ambil nilai password jika container password ditampilkan
      let passwordLama, passwordBaru;
      if (passwordContainer.style.display === 'block') {
        passwordLama = document.querySelector('#password_lama').value;
        passwordBaru = document.querySelector('#password_baru').value;
      }

      // Lakukan tindakan yang diperlukan dengan data yang diperoleh dari form
      // ...

      // Reset form setelah submit
      profileForm.reset();
    });
  },
};

export default Profil;
