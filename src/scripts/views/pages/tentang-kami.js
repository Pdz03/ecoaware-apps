const ourstory = {
  async render() {
    return `
        <!-- Isi HTML yang lainnya -->
      `;
  },
};

async function renderTemi() {
  const temi = document.querySelector('#temi');
  temi.innerHTML = await ourstory.render();
}

renderTemi();
