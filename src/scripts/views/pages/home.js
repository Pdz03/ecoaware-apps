const Home = {
  async render() {
    const html = `
    <main id="content">
    <section class="content">
      <div class="title">
        <h1>Isu Mengenai Perubahan Iklim</h1>
        <hr>
        <div class="list" id="resto">
        </div>
      </div>
    </section>
  </main>
  <aside>
    <section>samping</section>
  </aside>
        `;
    return html;
  },
  async afterRender() {
    // const itemContainer = document.querySelector('post-list');
    // itemContainer.innerHTML = '';
    // const { restaurants } = await PemadamSource.listResto();
    // itemContainer.value = restaurants;
  },
};
export default Home;
