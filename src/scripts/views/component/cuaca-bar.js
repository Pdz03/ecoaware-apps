/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-underscore-dangle */
import $ from 'jquery';
import 'select2';
import 'select2/dist/css/select2.min.css';
import API_ENDPOINT from '../../globals/api-endpoint';
import { createSkeletonCuacaTemplate } from '../templates/skeleton-template';

const axios = require('axios');
// import CONFIG from '../../globals/config';

class CuacaBar extends HTMLElement {
  set value(data) {
    this._data = data;
    this._render();
    this._tanggal();
    this._provinsi();
    this._kota();
    this._togglePopUp();
  }

  _togglePopUp() {
    const btnOpenCuaca = this.querySelector('#cls-cuaca');
    const popUp = document.querySelector('aside');

    btnOpenCuaca.addEventListener('click', () => {
      popUp.style.visibility = 'hidden';
    });
  }

  _tanggal() {
    const dateOptions = {
      weekday: 'long',
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    };

    const currentDate = new Date().toLocaleDateString('id-ID', dateOptions);

    const tanggalContainer = this.querySelector('#tanggal');
    tanggalContainer.innerHTML = `${currentDate}`;
  }

  _provinsi() {
    $('#select-provinsi').select2();
    const selectProvinsi = document.querySelector('#select-provinsi');
    this._data.forEach((provinsi) => {
      const option = document.createElement('option');
      option.text = provinsi.domain;
      option.value = provinsi.domain; // Misalnya, menggunakan ID provinsi sebagai nilai
      selectProvinsi.appendChild(option);
    });

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
            option.value = kotaHasil.description;
            kotaContainer.appendChild(option);
          });
        })
        .catch((error) => {
          console.error(error);
        });
    });
  }

  _kota() {
    function getWeatherImage(code) {
      let image = '';
      switch (code) {
        case 0:
        case 1:
        case 2:
          image = './icons/cuaca/berawan2.png';
          break;
        case 3:
        case 4:
          image = './icons/cuaca/berawan1.png';
          break;
        case 5:
        case 10:
        case 45:
          image = './icons/cuaca/kabut.png';
          break;
        case 60:
        case 61:
          image = './icons/cuaca/hujan1.png';
          break;
        case 63:
        case 80:
        case 95:
          image = './icons/cuaca/hujan2.png';
          break;
        default:
          image = './icons/cuaca/berawan1.png';
      }
      return image;
    }

    $('#select-kota').select2();

    $('#select-kota').on('change', () => {
      const selectedProvinsi = $('#select-provinsi').val();
      const selectedKota = $('#select-kota').val();

      const daerahFix = this.querySelector('#daerah');
      daerahFix.innerHTML = `${selectedKota}, ${selectedProvinsi}`;

      const dataprovfix = selectedProvinsi.replace(/Kep. /g, '');
      const dataprovnospace = dataprovfix.replace(/\s+/g, '-');
      const datakotanospace = selectedKota.replace(/\s+/g, '-');

      const urlCuaca = `${dataprovnospace}/${datakotanospace}`;

      axios.get(API_ENDPOINT.kota(urlCuaca))
        .then((res) => {
          const paramCuaca = res.data.data;
          const contentContainer = this.querySelector('#dataCuaca');

          let template = '';
          for (let i = 0; i <= 3; i += 1) {
            const dataKelembaban = paramCuaca.params[0].times[i];
            const dataTemperatur = paramCuaca.params[5].times[i].celcius;
            const temperaturJadi = dataTemperatur.slice(0, -2);
            const dataKecepatan = paramCuaca.params[8].times[i];
            const dataCuaca = paramCuaca.params[6].times[i];
            const dateTimeString = dataKelembaban.datetime;
            const timeString = dateTimeString.substring(8);
            const hour = timeString.substring(0, 2);

            let suffix = 'AM';
            let formattedHours = hour;

            if (formattedHours >= 12) {
              suffix = 'PM';
              if (formattedHours > 12) {
                formattedHours -= 12;
              }
            }

            if (formattedHours === '00') {
              formattedHours = 12;
            } else if (formattedHours === '06') {
              formattedHours = 6;
            }

            const code = parseInt(dataCuaca.code, 10);

            const weatherImage = getWeatherImage(code);

            template += `
            <div id="cuaca-list" class="cuaca-list">
              <div id="list-waktu">
                ${formattedHours} ${suffix}
              </div>
              <div id="list-cuaca">
                <img src=${weatherImage}>
                <p>${dataCuaca.name}</p>
              </div>
              <div id="list-suhu">
                <abbr title="Temperatur Udara">${temperaturJadi}°C</abbr>
              </div>
              <div id="list-more">
                <div id="list-angin">
                  <img src="./icons/cuaca/angin.png">
                  <abbr title="Kecepatan Udara">${dataKecepatan.kph} km/h</abbr>
                </div>
                <div id="list-lembab">
                  <img src="./icons/cuaca/lembab.png">
                  <abbr title="Kelembaban Udara">${dataKelembaban.value}</abbr>
                </div>
              </div>
            </div>
          `;
            contentContainer.innerHTML = template;
          }
        })
        .catch((error) => {
          console.error(error);
        });
    });
  }

  _render() {
    this.innerHTML = `
    <div class="cuaca-container">
    <div class="title">
    <h3>Cuaca Terkini</h3>
    </div>
    <div class="select-loc">
      <select id="select-provinsi" class="selbox-cuaca">
        <option value="">Pilih Provinsi</option>
      </select>
      <select id="select-kota" class="selbox-cuaca">
        <option value="">Pilih Kota</option>
      </select>
    </div>
    <div id="cuaca">
    <p id="tanggal"></p>
      <div id="dataCuaca" class="cuaca-cont">
      ${createSkeletonCuacaTemplate()}
      </div>
      <p id="daerah">Pilih daerah terlebih dahulu</p>
      <button id="cls-cuaca">Tutup</button>
    </div>
    </div>
    `;
  }
}

customElements.define('cuaca-bar', CuacaBar);
