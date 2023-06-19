import '../component/hero-element';
import '../component/cuaca-bar';
import { getNewsByTitle } from '../../Data/news';
import UrlParser from '../../routes/url-parser';
import { newsdetailTemplate } from '../templates/template-ecoaware';
import { createSkeletonCuacaStartTemplate } from '../templates/skeleton-template';
import CuacaSource from '../../Data/cuacaSource';
import ArtikelSource from '../../Data/artikelSource';

const detail = {
  async render() {
    return `
    <hero-element></hero-element>
    <main id="content">
    <div class="main-container">
      <section class="content">
        <div id="news-detail"></div>
      </section>
      <aside>
      <cuaca-bar>
      ${createSkeletonCuacaStartTemplate()}
      </cuara-bar>
      </aside>
      </div>
    </main>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    // const berita = getNewsByTitle(url.id);

    const detailArtikel = await ArtikelSource.getDetailArtikelbyID(url.id);

    console.log(detailArtikel);

    const newsDetailElement = document.getElementById('news-detail');
    newsDetailElement.innerHTML = newsdetailTemplate(detailArtikel);

    const cuacaBar = document.querySelector('cuaca-bar');
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

export default detail;
