import '../component/hero-element';
import { getNewsByTitle } from '../../Data/news';
import UrlParser from '../../routes/url-parser';
import { newsdetailTemplate } from '../templates/template-ecoaware';

const detail = {
  async render() {
    return `
    <hero-element></hero-element>
    <main id="content">
    <div class="main-container">
      <section class="content">
        <div id="news-detail"></div>
      </section>
      </div>
    </main>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const berita = getNewsByTitle(url.id);

    const newsDetailElement = document.getElementById('news-detail');
    newsDetailElement.innerHTML = newsdetailTemplate(berita);
  },
};

export default detail;
