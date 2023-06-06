/* eslint-disable import/no-extraneous-dependencies */
import 'slick-carousel';
import $ from 'jquery';
import '../component/hero-element';
import { getNews } from '../../Data/news';
import { sliderTemplate } from '../templates/template-ecoaware';
import '../../../style/style.css';

const Home = {
  async render() {
    const html = `
      <hero-element></hero-element>
      <main id="content">
        <section class="content">
          <div class="title">
            <h1>Isu Terkini Terkait Perubahan Iklim</h1>
          </div>
          <hr>
          <div id="news-list"></div>
          <div id="slide-item"></div>
          <div id="news-list2"></div>
        </section>
      </main>
    `;
    return html;
  },

  async afterRender() {
    const newsListElement1 = document.getElementById('news-list');
    const newsListElement2 = document.getElementById('news-list2');
    const slideItemElement = document.getElementById('slide-item');

    slideItemElement.innerHTML = sliderTemplate();

    // Use $ as usual here, e.g.:
    $('.slider').slick({
      autoplay: true,
      autoplaySpeed: 2500,
      dots: true,
      fade: true,
    });

    // Ambil semua data berita
    const newsData = getNews();

    // Ambil 2 berita pertama untuk news-list
    const newsDataList1 = newsData.slice(0, 2);

    // Ambil 2 berita berikutnya untuk news-list2
    const newsDataList2 = newsData.slice(2, 4);

    // Membuat elemen daftar untuk setiap objek berita dalam data newsDataList1
    newsDataList1.forEach((beritaItem) => {
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
      newsListElement1.innerHTML += listItemHtml;
    });

    // Membuat elemen daftar untuk setiap objek berita dalam data newsDataList2
    newsDataList2.forEach((beritaItem) => {
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
      newsListElement2.innerHTML += listItemHtml;
    });
  },
};

export default Home;
