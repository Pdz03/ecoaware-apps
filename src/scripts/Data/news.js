const news = [
  {
    id: '1102230601',
    judul: 'Pemanasan global',
    tanggal: '31/05/2023',
    isi:
      'Pemanasan global adalah suatu fenomena global yang dipicu oleh kegiatan manusia terutama yang berkaitan dengan penggunaan bahan fosil dan kegiatan alih guna lahan. Kegiatan ini menghasilkan gas-gas yang semakin lama semakin banyak jumlahnya di atmosfer, terutama gas karbon dioksida (CO2) melalui proses yang disebut efek rumah kaca.',
    gambar: 'images/news/pemanasan.jpg',
  },
  {
    id: '1102230602',
    judul: 'Gempa bumi',
    tanggal: '31/05/2023',
    isi:
      'Gempa bumi adalah getaran atau guncangan yang terjadi di permukaan bumi akibat pelepasan energi dari bawah permukaan secara tiba-tiba yang menciptakan gelombang seismik. Gempa bumi biasa disebabkan oleh pergerakan kerak bumi atau lempeng bumi. Selain itu, gempa bumi juga bisa disebabkan oleh letusan gunung api.',
    gambar: 'images/news/gempa.jpeg',
  },
  {
    id: '1102230603',
    judul: 'Tsunami',
    tanggal: '31/05/2023',
    isi: 'Tsunami adalah gelombang laut yang terbentuk akibat guncangan atau pergeseran yang kuat di dasar laut.',
    gambar: 'images/news/banjir.jpg',
  },
];

function getNews() {
  return news;
}

function getNewsByTitle(id) {
  return news.find((berita) => berita.id === id);
}

function addNews(judul, tanggal, isi, gambar) {
  const newNews = {
    id: news.length + 1,
    judul,
    tanggal,
    isi,
    gambar,
  };
  news.push(newNews);
}

export { getNews, getNewsByTitle, addNews };