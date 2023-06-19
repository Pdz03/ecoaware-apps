/* eslint-disable import/no-extraneous-dependencies */
import '@splidejs/splide/dist/css/splide.min.css';
import Splide from '@splidejs/splide';
import '../component/hero-element';
import '../component/cuaca-bar';
import { getNews } from '../../Data/news';
import CuacaSource from '../../Data/cuacaSource';
import ArtikelSource from '../../Data/artikelSource';

import { sliderTemplate, createArtikelTemplate } from '../templates/template-ecoaware';

import { createSkeletonArtikelTemplate, createSkeletonCuacaStartTemplate } from '../templates/skeleton-template';
// import '../../../style/style.css';

const Home = {
  async render() {
    const html = `
      <hero-element></hero-element>
        <main id="content">
          <div class="main-container">
          <section class="content">
            <div class="title">
              <h1>Isu Terkini Terkait Perubahan Iklim</h1>
            </div>
            <hr>
              <div id="news-list">
              ${createSkeletonArtikelTemplate()}
              </div> 
              <div id="slide-item"></div>
              <div id="news-list2">
              ${createSkeletonArtikelTemplate()}
              </div>
          </section>
          <aside>
          <cuaca-bar>
          ${createSkeletonCuacaStartTemplate()}
          </cuara-bar>
          </aside>
          </div>
        </main>
    `;
    return html;
  },

  async afterRender() {
    const newsListElement1 = document.getElementById('news-list');
    const newsListElement2 = document.getElementById('news-list2');
    const slideItemElement = document.getElementById('slide-item');
    const cuacaBar = document.querySelector('cuaca-bar');
    slideItemElement.innerHTML = sliderTemplate();

    new Splide('.splide', {
      perPage: 1,
      autoplay: true,
      type: 'fade',
      rewind: true,
    }).mount();

    // Ambil semua data berita
    try {
      const artikel = await new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(ArtikelSource.getArtikel());
        }, 2000); // Menunggu selama 2 detik sebelum memanggil resolve
      });
      const data1 = artikel.slice(0, 2);
      const data2 = artikel.slice(2);
      console.log(artikel);
      if (artikel.length > 0) {
        newsListElement1.innerHTML = '';
        newsListElement2.innerHTML = '';
      } else {
        newsListElement1.innerHTML = `${createSkeletonArtikelTemplate()}`;
        newsListElement2.innerHTML = `${createSkeletonArtikelTemplate()}`;
      }
      data1.forEach((data) => {
        newsListElement1.innerHTML += createArtikelTemplate(data);
      });
      data2.forEach((data) => {
        newsListElement2.innerHTML += createArtikelTemplate(data);
      });
    } catch (error) {
      console.error(error);
      newsListElement1.innerHTML = `${createSkeletonArtikelTemplate()}`;
      newsListElement2.innerHTML = `${createSkeletonArtikelTemplate()}`;
    }

    try {
      const dataProvinsi = await new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(CuacaSource.ambilProvinsi());
        }, 1000); // Menunggu selama 2 detik sebelum memanggil resolve
      });
      cuacaBar.innerHTML = '';
      const areaProvinsi = dataProvinsi.data.areas;
      cuacaBar.value = areaProvinsi;
    } catch (error) {
      console.error(error);
      cuacaBar.innerHTML = `${createSkeletonCuacaStartTemplate()}`;
    }
  },
};

export default Home;
