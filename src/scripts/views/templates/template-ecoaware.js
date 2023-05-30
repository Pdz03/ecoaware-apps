const FormLoginTemplate = () => `
<div class="row h-100 justify-content-center align-items-center">
  <form action="#/dashboard" method="POST" class="col-md-4 card">
    <h2>Login</h2>
    <div class="form-group">
      <label>Email:</label>
      <input
        type="email"
        name="email"
        class="form-control"
        placeholder="Masukan email"
        required
      />
    </div>
    <div class="form-group">
      <label>Password:</label>
      <input
        type="password"
        name="pass"
        class="form-control"
        placeholder="Masukan password"
        required
      />
    </div>
    <a href="#/dashboard" class="btn btn-primary">Login</a>
    <button type="submit" name="login">Login</button>
    <a href="#/register" class="btn btn-success">Register</a>
  </form>
</div>
</div>
`;

const FormRegisterTemplate = () => `
<div class="row h-100 justify-content-center align-items-center">
        <form
          action="#/login"
          method="GET"
          class="col-md-4 card"
        >
          <h2>Form Registrasi</h2>
          <div class="form-group">
            <label>Nama:</label>
            <input
              type="text"
              name="username"
              class="form-control"
              placeholder="Masukan Nama"
              required
            />
          </div>
          <div class="form-group">
            <label>Email:</label>
            <input
              type="email"
              name="email"
              class="form-control"
              placeholder="Masukan Email"
              required
            />
          </div>
          <div class="form-group">
            <label>Password:</label>
            <input
              type="password"
              name="pass"
              class="form-control"
              placeholder="Masukan Password"
              required
            />
          </div>
          <a href="#/login" class="btn btn-primary">Daftar</a>
        </form>
      </div>
`;

const ourStoryTemplate = () => `
<div class="about">
<h1>Tentang Kami</h1>
<div id="about-container">
<img src="https://i.ibb.co/r6PZdc7/image1.jpg">
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

export {
  FormLoginTemplate,
  FormRegisterTemplate,
  ourStoryTemplate,
};
