const createSkeletonCuacaTemplate = () => {
  let template = '';

  for (let i = 0; i < 4; i += 1) {
    template += `
    <div id="cuaca-list" class="cuaca-list">
    </div>
      `;
  }
  return template;
};

const createSkeletonArtikelTemplate = () => {
  let template = '';

  for (let i = 0; i < 2; i += 1) {
    template += `
    <div class="news-item-skeleton">
    <div class="image-news">
    </div>
    <div class="title">
      <h3></h3>
      <p></p>
    </div>
    <div class="content">
      <p></p>
    </div>
    </div>
        `;
  }
  return template;
};

const createSkeletonCuacaStartTemplate = () => `
<div class="cuaca-skeleton">
<div class="title">
<h3>Cuaca Terkini</h3>
</div>
<div id="cuaca">
  <button id="cls-cuaca">Tutup</button>
</div>
</div>`;

export {
  createSkeletonCuacaTemplate,
  createSkeletonArtikelTemplate,
  createSkeletonCuacaStartTemplate,
};
