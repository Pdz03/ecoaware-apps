/* eslint-disable import/no-extraneous-dependencies */
import API_ENDPOINT from '../globals/api-endpoint';

const axios = require('axios');

class ArtikelSource {
  static async getArtikel() {
    const response = await axios.get(API_ENDPOINT.getArtikel);
    const responseJson = await response.data.data;
    return responseJson;
  }

  static async getAllArtikel() {
    const response = await axios.get(API_ENDPOINT.getAllArtikel);
    const responseJson = await response.data.data;
    return responseJson;
  }

  static async getDetailArtikelbyID(id) {
    const response = await axios.get(API_ENDPOINT.getDetailArtikel(id));
    const responseJson = await response.data.data[0];
    return responseJson;
  }

  static async getArtikelCreated(authorId) {
    const response = await axios.get(API_ENDPOINT.getArtikelCreated(authorId));
    const responseJson = await response.data.data;
    return responseJson;
  }
}

export default ArtikelSource;
