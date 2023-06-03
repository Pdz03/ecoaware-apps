import CONFIG from './config';

const API_ENDPOINT = {
  cuaca: `${CONFIG.BASE_URL}weather/dki-jakarta/Jakarta-Pusat`,
  provinsi: `${CONFIG.BASE_URL}weather/Indonesia`,
  review: `${CONFIG.BASE_URL}review`,
  DETAIL: (id) => `${CONFIG.BASE_URL}detail/${id}`,
};

export default API_ENDPOINT;
