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
<form action="localhost:8080/user/add" method="POST">
<div class="form-group">
            <input type="text" id="nama" name="username" class="form-control" placeholder="Username" required/>
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

const pesanTemplate = () => `
<h3>Kirim Pesan Kepada Kami</h3>
<form id="messageForm">
    <input type="text" id="name" required placeholder="Nama"><br><br>
    <input type="email" id="email" required placeholder="Email"><br><br>
    <textarea id="message" required placeholder="Tulis Pesan"></textarea><br><br>
    <input type="button" value="Kirim" onclick="sendEmail()"><br><br>
  </form>
`;

const followTemplate = () => `
<div class="sup">
<p>Support  @ecoaware.id</p>
<p>Follow Us</p>
</div>
<div class="sos">
<img src="images/instagram.png" alt="instagram" />
<img src="images/gmail.png" alt="gmail" />
<img src="images/facebook.png" alt="facebook" />
<img src="images/linkdn.png" alt="linkdn" />
</div>

`;

const tambahanTemplate = () => `
<div class="">
<img src="images/pana.jpg" alt="pana" />
</div>
<div class="">
<h3>Merasa ingin menghubungi kami?<br>
Kirimkan pertanyaan Anda di sini dan kami<br> 
akan menghubungi Anda sesegera mungkin!</h3>
</div>
`;

const gambawahTemplate = () => `
<img src="images/jawa-tengah.png" alt="jawa-tengah" />
`;

const newsdetailTemplate = (berita) => `
<div class="image-news">
    <img src="${berita.gambar}" alt="${berita.judul}" />
  </div>
  <div class="title">
    <h3>${berita.judul}</h3>
    <p>${berita.tanggal}</p>
  </div>
  <div class="content">
    <p>${berita.isi}</p>
  </div>
`;

const sliderTemplate = () => `
<div class="container" id="slider-utama">
<div class="slider">
<img src="./images/image1.jpg" />
<img src="./images/image2.jpg" />
<img src="./images/image3.jpg" />
</div>
</div>
`;
const slideTemplate = () => `
<div class="slider" id="app">
  <transition name="slide" mode="out-in">
    <img :key="gambarIndex" :src="gambarSekarang" alt="Gambar Slider">
  </transition>
  <div class="arrow arrow-left" @click="gantiGambar(-1)">&lt;</div>
  <div class="arrow arrow-right" @click="gantiGambar(1)">&gt;</div>
</div>

<script src="https://cdn.jsdelivr.net/npm/vue@2.6.14"></script>
<script>
  var app = new Vue({
    el: '#app',
    data: {
      gambarIndex: 0,
      gambarCount: 2,
      gambarList: ['images/image1.jpg', 'images/image3.jpg']
    },
    computed: {
      gambarSekarang: function() {
        return this.gambarList[this.gambarIndex];
      }
    },
    methods: {
      gantiGambar: function(n) {
        this.gambarIndex += n;
        if (this.gambarIndex < 0) {
          this.gambarIndex = this.gambarCount - 1;
        }
        if (this.gambarIndex >= this.gambarCount) {
          this.gambarIndex = 0;
        }
      }
    }
  });
</script>
`;

export {
  WelcomeTemplate,
  FormLoginTemplate,
  FormRegisterTemplate,
  ourStoryTemplate,
  pesanTemplate,
  followTemplate,
  tambahanTemplate,
  gambawahTemplate,
  newsdetailTemplate,
  slideTemplate,
  sliderTemplate,
};
