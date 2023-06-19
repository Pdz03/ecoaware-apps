/* eslint-disable import/no-extraneous-dependencies */
import CONFIG from '../../globals/config';

const dayjs = require('dayjs');

const WelcomeTemplate = () => `
<div class="welcome-text">
<h2>Halo, Selamat Datang!</h2>
<p>“Mari kita pelihara alam bersama EcoAware,
agar kita memiliki masa depan yang lebih baik.”</p>
<div class="button-element">
<a class="btn" href="#/login">Masuk</a>
<a class="btn" href="#/register">Daftar</a>
</div>
</div>
<div class="welcome-image">
<img src="./images/welcome-image.png" alt="welcome-image">
</div>
`;

const WelcomeUserTemplate = () => `
<div class="welcome-text">
<h2 id="welcome-user"></h2>
<p>Terimakasih telah bergabung bersama kami di EcoAware Apps. Sebagai Kontributor, kamu dapat membantu kami dalam mengisi artikel terkait perubahan iklim atau bencana alam di sekitarmu. Dengan begitu, kamu sudah berkontribusi dalam memelihara alam ini melalui artikel yang diharapkan dapat mengingatkan masyarakat akan pentingnya menjaga alam ini.</p>
</div>
</div>
<div class="welcome-image">
<img src="./images/welcome-image.png" alt="welcome-image">
</div>
`;

const WelcomeAdminTemplate = () => `
<div class="welcome-text">
<h2 id="welcome-admin"></h2>
<p>Sebagai Admin, kita dapat mengelola artikel yang masuk, mengelola para kontributor yang mendaftar, mengelola pesan masuk dan komentar.</p>
<div class="button-element">
<a class="btn" href="#/login">Masuk</a>
<a class="btn" href="#/register">Daftar</a>
</div>
</div>
<div class="welcome-image">
<img src="./images/welcome-image.png" alt="welcome-image">
</div>
`;

const FormLoginTemplate = () => `
<div class="login-image">
<img src="./images/register-login-image.png" alt="login-image">
</div>
<div class="login-text">
<h2>Masuk</h2>
<form action="#/login/auth" method="POST">
          <div class="form-group">
            <input type="email" id="email" "name="email" class="form-control" placeholder="Email" required/>
          </div>
          <div class="form-group">
            <input type="password" id="pass" name="pass" class="form-control" placeholder="Password" required/>
          </div>
<button type="submit" id="login-btn" class="btn">Masuk</button>
<p>Belum punya akun? <a href="#/register">Daftar</a></p>
</form>
</div>
`;

const FormRegisterTemplate = () => `
<div class="register-image">
<img src="./images/register-login-image.png" alt="register-image">
</div>
<div class="register-text">
<h2>Daftar</h2>
<form action="" method="POST">
<div class="form-group">
            <input type="text" id="nama" name="name" class="form-control" placeholder="Username" required/>
          </div>
          <div class="form-group">
            <input type="email" id="email" name="email" class="form-control" placeholder="Email" required/>
          </div>
          <div class="form-group">
            <input type="password" id="pass" name="pass" class="form-control" placeholder="Password" required/>
          </div>
<button type="submit" id="register-btn" class="btn">Daftar</button>
<p>Sudah punya akun? <a href="#/login">Masuk</a></p>
</form>
</div>
`;

const FormArtikelTemplate = () => `
<form action="" method="POST" enctype="multipart/form-data">
<div class="form-group">
  <label for="author">Nama Penerbit</label>
  <input type="text" id="nama" name="name" class="form-control" placeholder="Penerbit" required/>
</div>
<div class="form-group">
  <label for="author">Judul Artikel</label>
  <input type="text" id="judul" name="judul" class="form-control" placeholder="Judul Artikel" required/>
</div>
<div class="form-group">
<div class="file-upload">
  <label for="gambar">File Gambar</label>
  <label for="file-input" class="file-label">Pilih Gambar</label>
  <input id="file-input" type="file" class="file-input" accept="image/*" />
</div>
<div id="image-container">Preview Gambar</div>
</div>
<div class="form-group"> 
  <label for="author">Isi Artikel</label>
  <textarea id="isi" name="isi" class="form-control" placeholder="Isi Artikel" required/></textarea>
</div>
<button type="submit" id="submit-btn" class="btn">Submit</button>
</form>
`;

const FormEditArtikelTemplate = (data) => `
<form action="" method="POST" enctype="multipart/form-data">
<div class="form-group">
  <label for="author">Nama Penerbit</label>
  <input type="text" id="nama-edit" name="name" class="form-control" placeholder="Penerbit" value="${data.author}" required/>
</div>
<div class="form-group">
  <label for="author">Judul Artikel</label>
  <input type="text" id="judul-edit" name="judul" class="form-control" placeholder="Judul Artikel" value="${data.judul}" required/>
</div>
<div class="form-group">
<div class="file-upload">
  <label for="file-edit-input" >Tidak bisa update gambar</label>
  <input id="file-edit-input" type="file" class="file-input" accept="image/*" />
</div>
<div id="image-edit-container">Preview Gambar</div>
</div>
<div class="form-group"> 
  <label for="author">Isi Artikel</label>
  <textarea id="isi-edit" name="isi" class="form-control" placeholder="Isi Artikel" required/>${data.isi}</textarea>
</div>
<button type="submit" id="update-btn" class="btn">Update</button>
</form>
`;

const createArtikelTemplate = (data) => {
  const tanggalFormatted = dayjs(data.tanggal).format('DD/MM/YYYY');
  let template = '';

  template += `
  <a href="#/detail/${data.id}">
<div class="news-item">
<div class="image-news">
  <img src="${CONFIG.BE_URL}${data.gambar}" alt="${data.judul}" />
</div>
<div class="title">
  <h3>${data.judul}</h3>
  <p>${tanggalFormatted} - Diposting oleh ${data.author}</p>
</div>
<div class="content">
  <p>${data.isi}...</p>
</div>
</div>
</a>
`;
  return template;
};

const listArtikelTemplate = (data) => {
  const tanggalFormatted = dayjs(data.tanggal).format('DD/MM/YYYY');
  let status = '';
  let button = '';
  if (data.acc === 0) {
    status = 'Menunggu Konfirmasi';
    button = `
    <button type="submit" id="edit-artikel" data-id="${data.id}">Edit</button>
    <button type="submit" id="delete-artikel" data-id="${data.id}">Hapus</button>`;
  } else if (data.acc === 1) {
    status = 'Diterima';
    button = `
    <button type="submit" id="delete-artikel" data-id="${data.id}">Hapus</button>`;
  } else if (data.acc === 2) {
    status = 'Ditolak';
    button = `
    <button type="submit" id="delete-artikel" data-id="${data.id}">Hapus</button>`;
  }

  let template = '';

  template += `
  <tr>
  <td>${data.judul}</td>
  <td>${tanggalFormatted}</td>
  <td>${status}</td>
  <td>${button}</td>
  </tr>
`;
  return template;
};

const listArtikelAdminTemplate = (data) => {
  const tanggalFormatted = dayjs(data.tanggal).format('DD/MM/YYYY');
  let status = '';
  if (data.acc === 0) {
    status = `
    <button type="submit" id="terima-artikel" data-id="${data.id}">Terima</button>
    <button type="submit" id="tolak-artikel" data-id="${data.id}">Tolak</button>`;
  } else if (data.acc === 1) {
    status = 'Diterima';
  } else if (data.acc === 2) {
    status = 'Ditolak';
  }

  let template = '';

  template += `
  <tr>
  <td>${data.judul}</td>
  <td>${data.author}</td>
  <td>${tanggalFormatted}</td>
  <td>${status}</td>
  </tr>
`;
  return template;
};

const ourStoryTemplate = () => `
<div class="about">
<h1>Tentang Kami</h1>
<div id="about-container">
<img src="./images/image1.jpg" alt="profil-img">
<p>
  <b>EcoAware</b> merupakan platform digital yang akan menyediakan informasi tentang berbagai aspek isu lingkungan seperti sumber daya alam, ekosistem, dan perubahan iklim. Ini akan memberikan data dan informasi yang diperlukan untuk mengambil tindakan yang tepat untuk menjaga keberlanjutan dan melindungi lingkungan.
  
  Dengan demikian, aplikasi web Sumber Daya Alam, Ekosistem, dan Perubahan Iklim dapat menjadi alat yang sangat berguna untuk meningkatkan kesadaran tentang isu lingkungan, sumber daya alam, ekosistem, dan perubahan iklim. Ini dapat membantu kita mengambil tindakan yang tepat untuk menjaga keberlanjutan dan melindungi lingkungan.
</p>
</div>
</div>
<div class="visi">
<h1>Visi dan Misi</h1>
<div class="vimis">
  <div class="vis">
    <h2>Visi</h2>
    <p>
      Menjadi sumber utama informasi dan alat yang mempromosikan kesadaran, pemahaman, dan tindakan yang berkelanjutan dalam menghadapi isu lingkungan, sumber daya alam, ekosistem, dan perubahan iklim.
    </p>
  </div>
  <div class="mis">
    <h2>Misi</h2>
    <ol type="number">
      1. Memberikan informasi yang terpercaya dan terkini<br>
      2. Meningkatkan kesadaran dan pemahaman<br>
      3. Mendorong tindakan berkelanjutan
    </ol>
  </div>
</div>
</div>
<div class="tim">
<h1>Tim Kami</h1>
<div class="tim-container">
<div class="list-tim">
<div id="atas">
</div>
<p>Syaifudin Fendi Prasetyo</p>
</div>
<div class="list-tim">
<div id="atas">
</div>
<p>Anisa Kamalia Fitri</p>
</div>
<div class="list-tim">
<div id="atas">
</div>
<p>Daffa Naufal Santoso</p>
</div>
<div class="list-tim">
<div id="atas">
</div>
<p>Luthfi Khaerunnisa</p>
</div>
</div>
</div>
`;

const contactTemplate = () => `
<div class="tambahan" id ="body-tambahan">
  <img src="images/pana.jpg" alt="pana" />
  <h3>Merasa ingin menghubungi kami?<br>
  Kirimkan pertanyaan Anda di sini dan kami<br>
  akan menghubungi Anda sesegera mungkin!</h3>
</div>

<div class="chat" id="body-pesan">
  <h3>Kirim Pesan Kepada Kami</h3>
  <form id="messageForm">
    <input type="text" id="name" required placeholder="Nama">
    <input type="email" id="email" required placeholder="Email">
    <textarea id="message" required placeholder="Tulis Pesan"></textarea>
    <div class="form-group">
    <button type="submit" onclick="sendEmail()">Kirim</button>
    </div>
  </form>
</div>

<div class="follow" id="body-follow">
  <div class="sup">
    <p><b>Support  @ecoaware.id</b></p>
    <p>Follow Us</p>
  </div>
  <div class="sos">
    <img src="images/instagram.png" alt="instagram" />
    <img src="images/gmail.png" alt="gmail" />
    <img src="images/facebook.png" alt="facebook" />
    <img src="images/linkedin.png" alt="linkdn" />
  </div>
</div>
`;

const newsdetailTemplate = (data) => {
  const tanggalFormatted = dayjs(data.tanggal).format('DD/MM/YYYY');
  let template = '';

  template += `
  <div class="detail-title">
    <h2>${data.judul}</h2>
  </div>
  <div class="image-news">
    <img src="${CONFIG.BE_URL}${data.gambar}" alt="${data.judul}" />
  </div>
  <div class="detail-content">
    <div class="byAuthor"><b>${tanggalFormatted} - </b>Diposting oleh ${data.author}</div>
    ${data.isi}
  </div>
  <hr>
  <div class="coment-container">
  <h3>Komentar</h3>
  <form>
  <div class="form-group">
  <label for="nama">Nama</label>
  <input type="text" placeholder="Masukkan nama" required>
  </div>
  <div class="form-group">
  <label for="komentar">Sampaikan komentarmu</label>
  <textarea placeholder="Tulis komentar" required></textarea>
  </div>
  <div class="form-group">
  <button type="submit">Kirim komentar</button>
  </div>
  </form>
  <hr>
  <div class="coment_item_container">
    <div class="coment_item">
        <img src="https://i.ibb.co/Zh4SvhQ/default.jpg" alt="user photo profile" crossorigin="anonymous">
      <div class="content">
      <h3 class="user_name">Eco Ways</h2>
      <small class="coment_date">09 Juni 2023</small>
      <p class="coment_content">Semoga bumi kita lekas membaik</p>
      </div>
    </div>
    <div class="reply_item">
      <img src="https://i.ibb.co/Zh4SvhQ/default.jpg" alt="user photo profile" crossorigin="anonymous">
      <div class="content">
      <h3 class="user_name">Tukang bakso</h2>
      <small class="reply_date">11 Juni 2023</small>
      <p class="reply_content">Aamiin</p>
      </div>
    </div>
    <div class="rep_coment" id="repcom_container" hidden>
    <input type="text" placeholder="Nama">
    <input type="text" placeholder="Balasan komentar">
    <button type="submit">Balas</button>
    </div>
  </div>
  <div class="coment_item_container">
  <div class="coment_item">
      <img src="https://i.ibb.co/Zh4SvhQ/default.jpg" alt="user photo profile" crossorigin="anonymous">
    <div class="content">
    <h3 class="user_name">Eko Wes</h2>
    <small class="coment_date">08 Juni 2023</small>
    <p class="coment_content">Ayo lindungi bumi kita</p>
    </div>
  </div>
</div>
<div class="coment_item_container">
<div class="coment_item">
  <img src="https://i.ibb.co/Zh4SvhQ/default.jpg" alt="user photo profile" crossorigin="anonymous">
  <div class="content">
  <h3 class="user_name">Pahlawan kemaleman</h2>
  <small class="coment_date">07 Juni 2023</small>
  <p class="coment_content">Ada yang tau obat untuk mata minus?</p>
  </div>
</div>
<div class="reply_item">
  <img src="https://i.ibb.co/Zh4SvhQ/default.jpg" alt="user photo profile" crossorigin="anonymous">
  <div class="content">
  <h3 class="user_name">EyeAware Solution</h2>
  <small class="reply_date">12 Juni 2023</small>
  <p class="reply_content">Ada kak, kakak bisa kunjungi website kami untuk tata cara pembelian obat mata minus dari kami, terimakasih</p>
  </div>
</div>
</div>
</div>
`;

  return template;
};

const sliderTemplate = () => `
<div class="splide">
<div class="splide__track">
  <ul class="splide__list">
    <li class="splide__slide" data-splide-interval="5000"><img src="./images/image1.jpg" /></li>
    <li class="splide__slide" data-splide-interval="5000"><img src="./images/image2.jpg" /></li>
    <li class="splide__slide" data-splide-interval="5000"><img src="./images/image3.jpg" /></li>
    <!-- Tambahkan slide lainnya sesuai kebutuhan -->
  </ul>
</div>
<div class="splide__progress">
  <div class="splide__progress__bar">
  </div>
</div>
</div>
`;

export {
  WelcomeTemplate,
  WelcomeUserTemplate,
  WelcomeAdminTemplate,
  FormLoginTemplate,
  FormRegisterTemplate,
  FormArtikelTemplate,
  FormEditArtikelTemplate,
  listArtikelTemplate,
  listArtikelAdminTemplate,
  createArtikelTemplate,
  ourStoryTemplate,
  contactTemplate,
  newsdetailTemplate,
  sliderTemplate,
};
