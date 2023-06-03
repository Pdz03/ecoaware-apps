/* eslint-disable import/no-extraneous-dependencies */
import '../component/hero-element';
import '../component/cuaca-bar';
import { getNews } from '../../Data/news';
import API_ENDPOINT from '../../globals/api-endpoint';
// import CuacaSource from '../../Data/cuacaSource';

const axios = require('axios');

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
              <div id="news-list"></div> 
          </section>
          <aside>
          Data cuaca terkini
          <div id="select">
          </div>
          <div id="kota">
          </div>
          <div id="cuaca">
          </div>
          </aside>
          </div>
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

    // const { cuacaBar } = await CuacaSource.cuacaTerkini();
    // itemContainer.value = cuacaBar;

    axios.get(API_ENDPOINT.provinsi)
      .then((response) => {
        const area = response.data.data.areas;
        const jumlah = area.length;

        const selectContainer = document.querySelector('#select');
        let template = '';
        for (let i = 0; i <= jumlah; i += 1) {
          const provinsi = area[i].domain;
          template += `
        <p>${provinsi}</p>
        `;
          selectContainer.innerHTML = template;
        }
      })
      .catch((error) => {
        console.error(error);
      });

    axios.get(API_ENDPOINT.cuaca)
      .then((response) => {
        const dataPusat = response.data.data;
        const currentDate = new Date();
        const options = { day: '2-digit', month: 'long', year: 'numeric' };
        const formattedDate = currentDate.toLocaleDateString('id-ID', options);

        const itemContainer = document.querySelector('#kota');
        itemContainer.innerHTML = `
        <p>Tanggal ${formattedDate}</p>
        <p>Provinsi ${dataPusat.domain}</p>
        <p>Kabupaten/Kota ${dataPusat.description}</p>
        <hr>
        `;
        const contentContainer = document.querySelector('#cuaca');
        let template = '';
        for (let i = 0; i <= 3; i += 1) {
          const dataKelembaban = dataPusat.params[0].times[i];
          const dataTemperatur = dataPusat.params[5].times[i];
          const dataCuaca = dataPusat.params[6].times[i];
          const dateTimeString = dataTemperatur.datetime;
          const timeString = dateTimeString.substring(8);
          const hour = timeString.substring(0, 2);
          const minute = timeString.substring(2);
          const formattedTime = `${hour}:${minute}`;

          console.log(dataKelembaban);
          template += `
        <p>Waktu = ${formattedTime}
        <p>Kelembaban udara ${dataKelembaban.value}</p>
        <p>Temperatur udara ${dataTemperatur.celcius} | ${dataTemperatur.fahrenheit}</p>
        <p>Cuaca ${dataCuaca.name}</p>
        <hr>
        `;
          contentContainer.innerHTML = template;
        }
      })
      .catch((error) => {
        console.error(error);
      });
  },
};
export default Home;
