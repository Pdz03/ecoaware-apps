import CONFIG from './config';

const API_ENDPOINT = {
  provinsi: `${CONFIG.CUACA_URL}weather/Indonesia`,
  kota: (provinsi) => `${CONFIG.CUACA_URL}weather/${provinsi}`,
  cuaca: (urlCuaca) => `${CONFIG.CUACA_URL}weather/${urlCuaca}`,
  review: `${CONFIG.CUACA_URL}review`,
  DETAIL: (id) => `${CONFIG.CUACA_URL}detail/${id}`,
  userRegister: `${CONFIG.BE_URL}user/register`,
  userLogin: `${CONFIG.BE_URL}user/login`,
  getAllUser: `${CONFIG.BE_URL}user/all`,
  deleteUser: (userId) => `${CONFIG.BE_URL}user/${userId}`,
  registerAuth: `${CONFIG.BE_URL}user/registerauth`,
  loginAuth: `${CONFIG.BE_URL}user/loginauth`,
  checkSession: `${CONFIG.BE_URL}user/check-session`,
  postArtikel: `${CONFIG.BE_URL}user/post-artikel`,
  editArtikel: `${CONFIG.BE_URL}user/edit-artikel`,
  getArtikel: `${CONFIG.BE_URL}get-artikel`,
  getAllArtikel: `${CONFIG.BE_URL}get-artikel/all`,
  confirmArtikel: `${CONFIG.BE_URL}confirm-artikel`,
  getDetailArtikel: (artikelId) => `${CONFIG.BE_URL}get-artikel/${artikelId}`,
  getArtikelCreated: (authorId) => `${CONFIG.BE_URL}get-artikel-created/${authorId}`,
  deleteDataArtikel: (artikelId) => `${CONFIG.BE_URL}artikel-delete/${artikelId}`,
};

export default API_ENDPOINT;
