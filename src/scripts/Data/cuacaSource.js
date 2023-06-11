/* eslint-disable import/no-extraneous-dependencies */
import API_ENDPOINT from '../globals/api-endpoint';

const axios = require('axios');

class PemadamSource {
  static async cuacaTerkini() {
    const response = await axios.get(API_ENDPOINT.cuaca);
    const responseJson = await response.data;
    return responseJson;
  }

  static async ambilProvinsi() {
    const response = await axios.get(API_ENDPOINT.provinsi);
    const responseJson = await response.data;
    return responseJson;
  }

  static async restaurantDetailById(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    const responseJson = await response.json();
    return responseJson;
  }

  static async postReview({ id, name, review }) {
    const response = await fetch(API_ENDPOINT.review, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id, name, review }),
    });

    /* eslint no-return-await: "off" */
    return response.json();
  }
}

export default PemadamSource;
