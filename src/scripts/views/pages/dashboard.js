import '../component/hero-element';

const Dashboard = {
  async render() {
    const html = `
    <div id="main">
    <main id="content">
      <div class="title">
        <h1>Dashboard</h1>
        <hr>
        <div class="list" id="resto">
        </div>
      </div>
  </main>
  </div>
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
export default Dashboard;
