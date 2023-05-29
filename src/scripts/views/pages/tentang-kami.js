import '../component/hero-element';
import '../../../style/style.css';

const ourstory = {
  async render() {
    const html = `
      <hero-element></hero-element>
      <div class="temi">
        <div class="about">
          <h1>Tentang Kami</h1>
          <img>
          <p>
            <b>EcoAware</b> merupakan platform digital yang akan menyediakan informasi tentang berbagai aspek isu lingkungan seperti sumber daya alam, ekosistem, dan perubahan iklim. Ini akan memberikan data dan informasi yang diperlukan untuk mengambil tindakan yang tepat untuk menjaga keberlanjutan dan melindungi lingkungan.
            
            Dengan demikian, aplikasi web Sumber Daya Alam, Ekosistem, dan Perubahan Iklim dapat menjadi alat yang sangat berguna untuk meningkatkan kesadaran tentang isu lingkungan, sumber daya alam, ekosistem, dan perubahan iklim. Ini dapat membantu kita mengambil tindakan yang tepat untuk menjaga keberlanjutan dan melindungi lingkungan.
          </p>
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
            <div class="Mis">
              <h2>Misi</h2>
              <p>
                1. Memberikan informasi yang terpercaya dan terkini<br>
                2. Meningkatkan kesadaran dan pemahaman<br>
                3. Mendorong tindakan berkelanjutan
              </p>
            </div>
          </div>
        </div>
        <div class="tim">
          <h1>Tim Kami</h1>
        </div>
        </div>
          `;
    return html;
  },
  async afterRender() {
    
  },
};
export default ourstory;
