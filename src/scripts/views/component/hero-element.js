/* eslint-disable no-underscore-dangle */
class HeroElement extends HTMLElement {
  connectedCallback() {
    this._render();
    this._togglePopUp();
  }

  _togglePopUp() {
    const btnOpenCuaca = this.querySelector('.opn-cuaca');
    const popUp = document.querySelector('aside');

    btnOpenCuaca.addEventListener('click', () => {
      popUp.style.visibility = 'visible';
    });
  }

  _render() {
    this.innerHTML = `
    <div class="hero">
    <div class="inner-hero">
      <h1 class="judul-hero">
        “Let's nurture the nature, so that we can have a better future.”
      </h1>
    </div>
    <div class="btn-cuaca">
    <button class="opn-cuaca">Data Cuaca Terkini</button>
    </div>
  </div>
     `;
  }
}

customElements.define('hero-element', HeroElement);
