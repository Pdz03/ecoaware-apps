import '../component/hero-element';
import axios from 'axios';
import { getNews } from '../../Data/news';

const Home = {
  async render() {
    const html = `
      <hero-element></hero-element>
      <div id="main">
        <main id="content">
          <section class="content">
            <div class="title">
              <h1>Isu Mengenai Perubahan Iklim</h1>
              <hr>
              <div class="list" id="resto">
                <div id="news-list"></div> 
              </div>
            </div>
          </section>
        </main>
        <aside>
          <section>samping</section>
        </aside>
      </div>
    `;
    return html;
  },
  async afterRender() {
    const newsListElement = document.getElementById('news-list');

    // Ambil 2 berita pertama dari data
    const newsData = getNews().slice(0, 2);

    // Membuat elemen daftar untuk setiap objek berita dalam data
    newsData.forEach((beritaItem) => {
      const listItemHtml = `
      <div class="news-item">
      <img src="${beritaItem.gambar}" alt="${beritaItem.judul}" />
      <div class="news-content">
        <h3>${beritaItem.judul}</h3>
        <p>Tanggal: ${beritaItem.tanggal}</p>
        <p>${beritaItem.isi}</p>
      </div>
    </div>
    <hr>
      `;
      newsListElement.innerHTML += listItemHtml;
    });
  },
};
export default Home;
