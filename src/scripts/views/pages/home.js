import '../component/hero-element';
import { getNews } from '../../Data/news';

const Home = {
  async render() {
    const html = `
      <hero-element></hero-element>>
        <main id="content">
          <section class="content">
            <div class="title">
              <h1>Isu Terkini Terkait Perubahan Iklim</h1>
            </div>
            <hr>
              <div id="news-list"></div> 
          </section>
        </main>
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
        <div class="image-news">
          <img src="${beritaItem.gambar}" alt="${beritaItem.judul}" />
        </div>
        <div class="title">
          <h3>${beritaItem.judul}</h3>
          <p>${beritaItem.tanggal}</p>
        </div>
        <div class="content">
          <p>${beritaItem.isi}...</p>
          <a href="#/detail/${beritaItem.id}">Lihat Selengkapnya</a>
        </div>
      </div>
      `;
      newsListElement.innerHTML += listItemHtml;
    });
  },
};
export default Home;
