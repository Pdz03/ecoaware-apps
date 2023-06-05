/* eslint-disable import/no-extraneous-dependencies */
import '../component/hero-element';
import '../component/cuaca-bar';
import $ from 'jquery';
import 'select2';
import 'select2/dist/css/select2.css';
import { getNews } from '../../Data/news';
import CuacaSource from '../../Data/cuacaSource';
import API_ENDPOINT from '../../globals/api-endpoint';

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
          <hr>
          <select id="select-provinsi">
          <option value="">Pilih Provinsi</option>
          </select><br>
          <select id="select-kota">
          <option value="">Pilih Kota</option>
          </select>
          <div id="cuaca">
          <p id="provinsi"></p>
          <p id="kota"></p>
          <p id="tanggal"></p>
          <hr>
          <div id="dataCuaca">
          </div>
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

    const dataProvinsi = await CuacaSource.ambilProvinsi();
    const areaProvinsi = dataProvinsi.data.areas;
    const selectProvinsi = document.querySelector('#select-provinsi');
    areaProvinsi.forEach((provinsi) => {
      const option = document.createElement('option');
      option.text = provinsi.domain;
      option.value = provinsi.domain; // Misalnya, menggunakan ID provinsi sebagai nilai
      selectProvinsi.appendChild(option);
    });

    $('#select-provinsi').select2();

    $('#select-provinsi').on('change', () => {
      const selectedProvinsi = $('#select-provinsi').val();
      const datafix = selectedProvinsi.replace(/Kep. /g, '');
      const datanospace = datafix.replace(/\s+/g, '-');

      axios.get(API_ENDPOINT.kota(datanospace))
        .then((res) => {
          const areaKota = res.data.data.areas;
          const kotaContainer = document.querySelector('#select-kota');
          kotaContainer.innerHTML = '<option value="">Pilih Kota</option>';
          areaKota.forEach((kotaHasil) => {
            const option = document.createElement('option');
            option.text = kotaHasil.description;
            option.value = kotaHasil.description; // Misalnya, menggunakan ID provinsi sebagai nilai
            kotaContainer.appendChild(option);
          });
        })
        .catch((error) => {
          console.error(error);
        });
    });

    $('#select-kota').select2();

    $('#select-kota').on('change', () => {
      const selectedProvinsi = $('#select-provinsi').val();
      const selectedKota = $('#select-kota').val();

      const kotaFix = document.querySelector('#kota');
      const provFix = document.querySelector('#provinsi');
      kotaFix.innerText = selectedKota;
      provFix.innerText = `Provinsi ${selectedProvinsi}`;

      const currentDate = new Date();
      const options = { day: '2-digit', month: 'long', year: 'numeric' };
      const formattedDate = currentDate.toLocaleDateString('id-ID', options);

      const tanggalContainer = document.querySelector('#tanggal');
      tanggalContainer.innerHTML = `Tanggal ${formattedDate}`;

      const dataprovfix = selectedProvinsi.replace(/Kep. /g, '');
      const dataprovnospace = dataprovfix.replace(/\s+/g, '-');
      const datakotanospace = selectedKota.replace(/\s+/g, '-');

      const urlCuaca = `${dataprovnospace}/${datakotanospace}`;

      axios.get(API_ENDPOINT.kota(urlCuaca))
        .then((res) => {
          const paramCuaca = res.data.data;
          const contentContainer = document.querySelector('#dataCuaca');

          let template = '';
          for (let i = 0; i <= 3; i += 1) {
            const dataKelembaban = paramCuaca.params[0].times[i];
            const dataTemperatur = paramCuaca.params[5].times[i];
            const dataKecepatan = paramCuaca.params[8].times[i];
            const dataCuaca = paramCuaca.params[6].times[i];
            const dateTimeString = dataTemperatur.datetime;
            const timeString = dateTimeString.substring(8);
            const hour = timeString.substring(0, 2);
            const minute = timeString.substring(2);
            const formattedTime = `${hour}:${minute}`;

            template += `
        <p>Waktu = ${formattedTime}
        <p>Kelembaban udara ${dataKelembaban.value}</p>
        <p>Temperatur udara ${dataTemperatur.celcius} | ${dataTemperatur.fahrenheit}</p>
        <p>Kecepatan udara ${dataKecepatan.kph} k/h</p>
        <p>${dataCuaca.name}</p>
        <hr>
        `;
            contentContainer.innerHTML = template;
          }
        })
        .catch((error) => {
          console.error(error);
        });
    });
  },
};
export default Home;
