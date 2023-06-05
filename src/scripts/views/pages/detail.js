import { getNewsByTitle } from '../../Data/news';
import { newsdetailTemplate } from '../templates/template-ecoaware';

const detail = {
  async render() {
    return `
      <hr>
      <div id="news-detail" class="news-detail"></div>
    `;
  },

  async afterRender() {
    const urlParams = new URLSearchParams(window.location.search);
    const judul = urlParams.get('judul');
    const berita = getNewsByTitle(judul);
  
    const newsDetailElement = document.getElementById('news-detail');
    newsDetailElement.innerHTML = newsdetailTemplate(berita);
  },
};

export default detail;
