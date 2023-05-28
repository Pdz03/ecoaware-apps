class HeroElement extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <div class="hero">
    <div class="inner-hero">
      <h1 class="judul-hero">
        “Let's nurture the nature, so that we can have a better future.”
      </h1>
    </div>
  </div>
     `;
  }
}

customElements.define('hero-element', HeroElement);
