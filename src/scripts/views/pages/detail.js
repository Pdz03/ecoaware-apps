import { getNewsByTitle } from '../../Data/news';
import '../../../style/style.css';
import '../pages/home';

const Detail = {
  async render() {
    return `
      <hr>
      <div id="news-detail" class="news-detail"></div>
    `;
  },

  async afterRender() {
    const params = this.getParams();
    const judul = params.judul;

    console.log('Params:', params);
    console.log('Judul:', judul);

    const berita = getNewsByTitle(judul);
    console.log('Berita:', berita);

    const newsDetailElement = document.getElementById('news-detail');
    console.log('newsDetailElement:', newsDetailElement);

    newsDetailElement.innerHTML = `
      <div class="image-news">
        <img src="${berita.gambar}" alt="${berita.judul}" />
      </div>
      <div class="title">
        <h3>${berita.judul}</h3>
        <p>${berita.tanggal}</p>
      </div>
      <div class="content">
        <p>${berita.isi}</p>
      </div>
    `;
  },

  getParams() {
    const hash = window.location.hash.substr(1);
    const params = hash.split('/');
    return {
      judul: params[1],
    };
  },
};

export default Detail;
