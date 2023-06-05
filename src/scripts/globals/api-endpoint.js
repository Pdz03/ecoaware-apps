import CONFIG from './config';

const API_ENDPOINT = {
  provinsi: `${CONFIG.BASE_URL}weather/Indonesia`,
  kota: (provinsi) => `${CONFIG.BASE_URL}weather/${provinsi}`,
  cuaca: (urlCuaca) => `${CONFIG.BASE_URL}weather/${urlCuaca}`,
  review: `${CONFIG.BASE_URL}review`,
  DETAIL: (id) => `${CONFIG.BASE_URL}detail/${id}`,
};

export default API_ENDPOINT;
