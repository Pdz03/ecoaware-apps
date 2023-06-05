const news = [
  {
    judul: 'Pemanasan global',
    tanggal: '31/05/2023',
    isi:
      'Pemanasan global adalah suatu fenomena global yang dipicu oleh kegiatan manusia terutama yang berkaitan dengan penggunaan bahan fosil dan kegiatan alih guna lahan. Kegiatan ini menghasilkan gas-gas yang semakin lama semakin banyak jumlahnya di atmosfer, terutama gas karbon dioksida (CO2) melalui proses yang disebut efek rumah kaca.',
    gambar: 'images/news/pemanasan.jpg',
  },
  {
    judul: 'Gempa bumi',
    tanggal: '31/05/2023',
    isi:
      'Gempa bumi adalah getaran atau guncangan yang terjadi di permukaan bumi akibat pelepasan energi dari bawah permukaan secara tiba-tiba yang menciptakan gelombang seismik. Gempa bumi biasa disebabkan oleh pergerakan kerak bumi atau lempeng bumi. Selain itu, gempa bumi juga bisa disebabkan oleh letusan gunung api.',
    gambar: 'images/news/gempa.jpeg',
  },
  {
    judul: 'Tsunami',
    tanggal: '31/05/2023',
    isi: 'Tsunami adalah gelombang laut yang terbentuk akibat guncangan atau pergeseran yang kuat di dasar laut.',
    gambar: 'images/news/banjir.jpg',
  },
];

function getNews() {
  return news;
}

function getNewsByTitle(judul) {
  return news.find((berita) => berita.judul === judul);
}

function addNews(judul, tanggal, isi, gambar) {
  const newNews = {
    judul,
    tanggal,
    isi,
    gambar,
  };
  news.push(newNews);
}

export { getNews, getNewsByTitle, addNews };
