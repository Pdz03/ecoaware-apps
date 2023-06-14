import { newnews } from '../templates/template-ecoaware';
import { addNews } from '../../Data/news';

const New = {
  async render() {
    const html = `
      <main class="tamnews">
        <div class="tambah" id="tambah-container"></div>
      </main>
    `;
    return html;
  },
  async afterRender() {
    const itemnewstambah = document.querySelector('#tambah-container');
    itemnewstambah.innerHTML = newnews();
  
    // Tambahkan kode JavaScript di sini
    document.getElementById('newsForm').addEventListener('submit', function(event) {
      event.preventDefault();
      const judul = document.getElementById('judul').value;
      const tanggal = document.getElementById('tanggal').value;
      const isi = document.getElementById('isi').value;
      const gambarInput = document.getElementById('gambar');
      const gambar = gambarInput.files[0];
  
      // Membaca file gambar yang diunggah
      const reader = new FileReader();
      reader.onload = function(event) {
        // Mengonversi file gambar ke dalam bentuk data URL
        const gambarDataUrl = event.target.result;
  
        // Generate a unique ID for the new news
        const newId = Date.now().toString();
  
        // Kirim data berita baru ke server atau lakukan tindakan lain yang diperlukan
        addNews(newId, judul, tanggal, isi, gambarDataUrl);
  
        alert('Berita berhasil ditambahkan!');
  
        // Reset form setelah berhasil menambahkan berita
        document.getElementById('newsForm').reset();
      };
  
      // Baca file gambar sebagai data URL
      reader.readAsDataURL(gambar);
    });
  },  
};

export default New;
