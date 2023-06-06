import { getNewsByTitle } from '../../Data/news';
import UrlParser from '../../routes/url-parser';
import { newsdetailTemplate } from '../templates/template-ecoaware';

const detail = {
  async render() {
    return `
      <hr>
      <div id="news-detail" class="news-detail"></div>
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
