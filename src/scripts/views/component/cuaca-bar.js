/* eslint-disable no-underscore-dangle */
// import CONFIG from '../../globals/config';

class CuacaBar extends HTMLElement {
  set value(data) {
    this._data = data;
    this.render();
  }

  render() {
    this.innerHTML = `
        <div class="list_item">
        ${this._data.data}
      </div>`;
  }
}

customElements.define('cuaca-bar', CuacaBar);
