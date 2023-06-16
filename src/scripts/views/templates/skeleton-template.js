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

const createSkeletonAnuTemplate = () => {
  let template = '';

  for (let i = 0; i < 20; i += 1) {
    template += `
      <div id="cuaca-list" class="cuaca-list">
      </div>
        `;
  }
  return template;
};

export {
  createSkeletonCuacaTemplate,
  createSkeletonAnuTemplate,
};
